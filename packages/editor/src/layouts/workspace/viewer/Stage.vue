<template>
  <ScrollViewer
    class="m-editor-stage"
    ref="stageWrap"
    tabindex="-1"
    v-loading="stageLoading"
    element-loading-text="Runtime 加载中..."
    :width="stageRect?.width"
    :height="stageRect?.height"
    :wrap-width="stageContainerRect?.width"
    :wrap-height="stageContainerRect?.height"
    :zoom="zoom"
    :correction-scroll-size="{
      width: 60,
      height: 50,
    }"
    @click="stageWrapRef?.container?.focus()"
  >
    <div
      class="m-editor-stage-container"
      ref="stageContainer"
      :style="`transform: scale(${zoom});`"
      @contextmenu="contextmenuHandler"
      @drop="dropHandler"
      @dragover="dragoverHandler"
    ></div>

    <NodeListMenu></NodeListMenu>

    <template #content>
      <StageOverlay v-if="!disabledStageOverlay"></StageOverlay>

      <Teleport to="body">
        <ViewerMenu
          ref="menu"
          :is-multi-select="isMultiSelect"
          :stage-content-menu="stageContentMenu"
          :custom-content-menu="customContentMenu"
        ></ViewerMenu>
      </Teleport>
    </template>
  </ScrollViewer>
</template>

<script lang="ts" setup>
import { computed, markRaw, nextTick, onBeforeUnmount, onMounted, useTemplateRef, watch, watchEffect } from 'vue';

import type { MContainer } from '@tmagic/core';
import StageCore, { getOffset, Runtime } from '@tmagic/stage';
import { calcValueByFontsize, getIdFromEl } from '@tmagic/utils';

import ScrollViewer from '@editor/components/ScrollViewer.vue';
import { useServices } from '@editor/hooks';
import { useStage } from '@editor/hooks/use-stage';
import type { CustomContentMenuFunction, MenuButton, MenuComponent, StageOptions } from '@editor/type';
import { DragType, Layout } from '@editor/type';
import { getEditorConfig } from '@editor/utils/config';
import { KeyBindingContainerKey } from '@editor/utils/keybinding-config';

import NodeListMenu from './NodeListMenu.vue';
import StageOverlay from './StageOverlay.vue';
import ViewerMenu from './ViewerMenu.vue';

defineOptions({
  name: 'MEditorStage',
});

const props = withDefaults(
  defineProps<{
    stageOptions: StageOptions;
    stageContentMenu: (MenuButton | MenuComponent)[];
    disabledStageOverlay?: boolean;
    customContentMenu: CustomContentMenuFunction;
  }>(),
  {
    disabledStageOverlay: false,
  },
);

let stage: StageCore | null = null;
let runtime: Runtime | null = null;

const { editorService, uiService, keybindingService } = useServices();

const stageLoading = computed(() => editorService.get('stageLoading'));

const stageWrapRef = useTemplateRef<InstanceType<typeof ScrollViewer>>('stageWrap');
const stageContainerEl = useTemplateRef<HTMLDivElement>('stageContainer');
const menuRef = useTemplateRef<InstanceType<typeof ViewerMenu>>('menu');

const nodes = computed(() => editorService.get('nodes'));
const isMultiSelect = computed(() => nodes.value.length > 1);
const stageRect = computed(() => uiService.get('stageRect'));
const stageContainerRect = computed(() => uiService.get('stageContainerRect'));
const root = computed(() => editorService.get('root'));
const page = computed(() => editorService.get('page'));
const zoom = computed(() => uiService.get('zoom'));
const node = computed(() => editorService.get('node'));

watchEffect(() => {
  if (stage || !page.value) return;

  if (!stageContainerEl.value) return;
  if (!(props.stageOptions?.runtimeUrl || props.stageOptions?.render) || !root.value) return;

  stage = useStage(props.stageOptions);

  stage.on('select', () => {
    stageWrapRef.value?.container?.focus();
  });

  editorService.set('stage', markRaw(stage));

  stage.mount(stageContainerEl.value);

  if (!node.value?.id) {
    return;
  }

  stage.on('runtime-ready', (rt) => {
    runtime = rt;
  });
});

onBeforeUnmount(() => {
  stage?.destroy();
  editorService.set('stage', null);
});

watch(zoom, (zoom) => {
  if (!stage || !zoom) return;
  stage.setZoom(zoom);
});

let timeoutId: ReturnType<typeof setTimeout> | null = null;
watch(page, (page) => {
  if (runtime && page) {
    editorService.set('stageLoading', true);

    if (timeoutId) {
      globalThis.clearTimeout(timeoutId);
    }

    timeoutId = globalThis.setTimeout(() => {
      editorService.set('stageLoading', false);
      timeoutId = null;
    }, 3000);

    runtime.updatePageId?.(page.id);

    const unWatch = watch(
      stageLoading,
      () => {
        if (stageLoading.value) {
          return;
        }

        nextTick(() => {
          stage?.select(page.id);
          unWatch();
        });
      },
      {
        immediate: true,
      },
    );
  }
});

const resizeObserver = new ResizeObserver((entries) => {
  for (const { contentRect } of entries) {
    uiService.set('stageContainerRect', {
      width: contentRect.width,
      height: contentRect.height,
    });
  }
});

onMounted(() => {
  if (stageWrapRef.value?.container) {
    resizeObserver.observe(stageWrapRef.value.container);
    keybindingService.registerEl(KeyBindingContainerKey.STAGE, stageWrapRef.value.container);
  }
});

onBeforeUnmount(() => {
  stage?.destroy();
  stage = null;
  resizeObserver.disconnect();
  editorService.set('stage', null);
  keybindingService.unregisterEl('stage');
});

const parseDSL = getEditorConfig('parseDSL');

const contextmenuHandler = (e: MouseEvent) => {
  e.preventDefault();
  menuRef.value?.show(e);
};

const dragoverHandler = (e: DragEvent) => {
  if (!e.dataTransfer) return;
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
};

const dropHandler = async (e: DragEvent) => {
  if (!e.dataTransfer) return;

  const data = e.dataTransfer.getData('text/json');

  if (!data) return;

  const config = parseDSL(`(${data})`);

  if (!config || config.dragType !== DragType.COMPONENT_LIST) return;

  e.preventDefault();

  const doc = stage?.renderer?.contentWindow?.document;
  const parentEl: HTMLElement | null | undefined = doc?.querySelector(
    `.${props.stageOptions?.containerHighlightClassName}`,
  );

  let parent: MContainer | undefined | null = page.value;
  const parentId = getIdFromEl()(parentEl);
  if (parentId) {
    parent = editorService.getNodeById(parentId, false) as MContainer;
  }

  if (parent && stageContainerEl.value && stage) {
    const layout = await editorService.getLayout(parent);

    const containerRect = stageContainerEl.value.getBoundingClientRect();
    const { scrollTop, scrollLeft } = stage.mask!;
    const { style = {} } = config.data;

    let top = 0;
    let left = 0;
    let position = 'relative';

    if (style.position === 'fixed') {
      position = 'fixed';
      top = e.clientY - containerRect.top;
      left = e.clientX - containerRect.left;
    } else if (layout === Layout.ABSOLUTE) {
      position = 'absolute';
      top = e.clientY - containerRect.top + scrollTop;
      left = e.clientX - containerRect.left + scrollLeft;

      if (parentEl) {
        const { left: parentLeft, top: parentTop } = getOffset(parentEl);
        left = left - parentLeft * zoom.value;
        top = top - parentTop * zoom.value;
      }
    }

    config.data.style = {
      ...style,
      position,
      top: calcValueByFontsize(doc, top / zoom.value),
      left: calcValueByFontsize(doc, left / zoom.value),
    };

    config.data.inputEvent = e;

    editorService.add(config.data, parent);
  }
};
</script>
