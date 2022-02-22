import{_ as e,r as o,o as r,c as l,b as n,a as t,F as c,e as a,d as s}from"./app.62f547e2.js";const i={},u=a(`<h1 id="m-editor" tabindex="-1"><a class="header-anchor" href="#m-editor" aria-hidden="true">#</a> m-editor</h1><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> MApp(https://github.com/Tencent/tmagic-editor/blob/master/packages/schema/src/index.ts)[]</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> {}</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>\u9875\u9762\u521D\u59CB\u503C</p></li><li><p><strong>\u793A\u4F8B\uFF1A</strong></p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;app_1&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;page&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;page_1&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;text_1&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u672C&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="componentgrouplist" tabindex="-1"><a class="header-anchor" href="#componentgrouplist" aria-hidden="true">#</a> componentGroupList</h3>`,6),k=n("strong",null,"\u7C7B\u578B\uFF1A",-1),b=s(),d={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/editor/src/type.ts",target:"_blank",rel:"noopener noreferrer"},m=s("ComponentGroup"),g=s("[]"),h=n("li",null,[n("p",null,[n("strong",null,"\u9ED8\u8BA4\u503C\uFF1A"),s(" []")])],-1),y=n("li",null,[n("p",null,[n("strong",null,"\u8BE6\u60C5\uFF1A")]),n("p",null,"\u5DE6\u4FA7\u9762\u677F\u4E2D\u7684\u7EC4\u4EF6\u5217\u8868")],-1),_=n("li",null,[n("p",null,[n("strong",null,"\u793A\u4F8B\uFF1A")])],-1),v=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5BB9\u5668&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;folder-opened&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u7EC4&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;container&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;el-icon-files&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6807\u7B7E\u9875(tab)&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;tabs&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u57FA\u7840\u7EC4\u4EF6&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;tickets&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u672C&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;switch-button&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6309\u94AE&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,1),f={class:"custom-container tip"},x=n("p",{class:"custom-container-title"},"TIP",-1),j=s("icon\u4F7F\u7528\u7684\u662F"),w={href:"https://element-plus.org/zh-CN/component/icon.html",target:"_blank",rel:"noopener noreferrer"},T=s("element-plus icon"),z=a('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u6B64\u914D\u7F6E\u4EC5\u5728<a href="#sidebar">sidebar</a>\u4E2D\u914D\u7F6E\u4E86&#39;component-list&#39;\u65F6\u6709\u6548</p></div><h3 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar" aria-hidden="true">#</a> sidebar</h3>',2),M=n("strong",null,"\u7C7B\u578B\uFF1A",-1),N=s(),C={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/editor/src/type.ts",target:"_blank",rel:"noopener noreferrer"},L=s("SideBarData"),P=n("li",null,[n("p",null,[n("strong",null,"\u9ED8\u8BA4\u503C\uFF1A"),s(" { type: 'tabs', status: '\u7EC4\u4EF6', items: ['component-list', 'layer'] }")])],-1),B=n("li",null,[n("p",null,[n("strong",null,"\u8BE6\u60C5\uFF1A")]),n("p",null,"\u5DE6\u4FA7\u9762\u677F\uFF0C\u76EE\u524D\u53EA\u652F\u6301type: 'tabs';"),n("p",null,"component-list\u7684text\u4E3A'\u7EC4\u4EF6'")],-1),I=n("li",null,[n("p",null,[n("strong",null,"\u793A\u4F8B\uFF1A")])],-1),V=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> ModListPanel <span class="token keyword">from</span> <span class="token string">&#39;../components/sidebars/ModListPanel.vue&#39;</span><span class="token punctuation">;</span>

<span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;tabs&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;\u7EC4\u4EF6&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;component-list&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;layer&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;component&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;el-icon-s-order&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> ModListPanel<span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6A21\u5757&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="menu" tabindex="-1"><a class="header-anchor" href="#menu" aria-hidden="true">#</a> menu</h3>`,2),E=n("strong",null,"\u7C7B\u578B\uFF1A",-1),F=s(),O={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/editor/src/type.ts",target:"_blank",rel:"noopener noreferrer"},G=s("MenuBarData"),S=a("<li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> { left: [], center: [], right: [] }</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>\u9876\u90E8\u5DE5\u5177\u680F</p><p>\u7CFB\u7EDF\u63D0\u4F9B\u4E86\u51E0\u4E2A\u5E38\u7528\u529F\u80FD\uFF1A &#39;/&#39; | &#39;delete&#39; | &#39;undo&#39; | &#39;redo&#39; | &#39;zoom-in&#39; | &#39;zoom-out&#39;</p><p>&#39;/&#39;: \u5206\u9694\u7B26</p><p>&#39;delete&#39;: \u5220\u9664\u6309\u94AE</p><p>&#39;undo&#39;: \u64A4\u9500\u6309\u94AE</p><p>&#39;redo&#39;: \u6062\u590D\u6309\u94AE</p><p>&#39;zoom-in&#39;: \u653E\u5927\u6309\u94AE</p><p>&#39;zoom-out&#39;: \u7F29\u5C0F\u6309\u94AE</p></li><li><p><strong>\u793A\u4F8B\uFF1A</strong></p></li>",3),A=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;el-icon-arrow-left&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD4\u56DE&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u9B54\u65B9&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;delete&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;undo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;redo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;zoom-in&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;zoom-out&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u4FDD\u5B58&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;el-icon-coin&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> store <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toRaw</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> Function</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> undefined</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>\u4E2D\u95F4\u5DE5\u4F5C\u533A\u57DF\u4E2D\u753B\u5E03\u6E32\u67D3\u7684\u5185\u5BB9</p></li><li><p><strong>\u793A\u4F8B\uFF1A</strong></p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token parameter">renderer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> renderer<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="runtimeurl" tabindex="-1"><a class="header-anchor" href="#runtimeurl" aria-hidden="true">#</a> runtimeUrl</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> string</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> undefined</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>\u4E2D\u95F4\u5DE5\u4F5C\u533A\u57DF\u4E2D\u753B\u5E03\u901A\u8FC7iframe\u6E32\u67D3\u65F6\u7684\u9875\u9762url</p></li></ul><h3 id="propsconfigs" tabindex="-1"><a class="header-anchor" href="#propsconfigs" aria-hidden="true">#</a> propsConfigs</h3>`,7),D=n("strong",null,"\u7C7B\u578B\uFF1A",-1),R=s(" { [type: string]: "),W={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/form/src/schema.ts",target:"_blank",rel:"noopener noreferrer"},U=s("FormConfig"),q=s(" }"),H=n("li",null,[n("p",null,[n("strong",null,"\u9ED8\u8BA4\u503C\uFF1A"),s(" {}")])],-1),J=n("li",null,[n("p",null,[n("strong",null,"\u8BE6\u60C5\uFF1A")]),n("p",null,"\u7EC4\u4EF6\u7684\u5C5E\u6027\u914D\u7F6E\u8868\u5355\u7684dsl")],-1),K=n("li",null,[n("p",null,[n("strong",null,"\u793A\u4F8B\uFF1A")])],-1),Q=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u672C&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;multiple&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u591A\u884C\u6587\u672C&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;switch&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">button</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u672C&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="propsvalues" tabindex="-1"><a class="header-anchor" href="#propsvalues" aria-hidden="true">#</a> propsValues</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> { [type: string]: Object }</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> {}</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>\u6DFB\u52A0\u7EC4\u4EF6\u65F6\u7684\u9ED8\u8BA4\u503C</p></li><li><p><strong>\u793A\u4F8B\uFF1A</strong></p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u672C&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">multiple</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">button</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6309\u94AE&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="moveableoptions" tabindex="-1"><a class="header-anchor" href="#moveableoptions" aria-hidden="true">#</a> moveableOptions</h3>`,5),X=n("strong",null,"\u7C7B\u578B\uFF1A",-1),Y=s(" ((core: StageCore) => MoveableOptions) | "),Z={href:"https://daybrush.com/moveable/release/latest/doc/",target:"_blank",rel:"noopener noreferrer"},$=s("MoveableOptions"),nn=n("li",null,[n("p",null,[n("strong",null,"\u9ED8\u8BA4\u503C\uFF1A"),s(" {}")])],-1),sn=n("p",null,[n("strong",null,"\u8BE6\u60C5\uFF1A")],-1),an=s("\u753B\u5E03\u4E2D\u7684\u9009\u4E2D\u6846\u914D\u7F6E\u9009\u9879\uFF0C\u4F7F\u7528\u7684\u662F"),pn={href:"https://github.com/daybrush/moveable",target:"_blank",rel:"noopener noreferrer"},tn=s("moveable"),en=s("\u7B2C\u4E09\u65B9\u5E93"),on=a('<h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> slots</h2><h3 id="nav" tabindex="-1"><a class="header-anchor" href="#nav" aria-hidden="true">#</a> nav</h3><ul><li><strong>\u8BE6\u60C5\uFF1A</strong> \u5DE5\u5177\u680F</li></ul><h3 id="sidebar-1" tabindex="-1"><a class="header-anchor" href="#sidebar-1" aria-hidden="true">#</a> sidebar</h3><ul><li><strong>\u8BE6\u60C5\uFF1A</strong> \u5DE6\u4FA7\u680F</li></ul><h3 id="workspace" tabindex="-1"><a class="header-anchor" href="#workspace" aria-hidden="true">#</a> workspace</h3><ul><li><strong>\u8BE6\u60C5\uFF1A</strong> \u4E2D\u95F4\u5DE5\u4F5C\u533A\u57DF</li></ul><h3 id="workspace-content" tabindex="-1"><a class="header-anchor" href="#workspace-content" aria-hidden="true">#</a> workspace-content</h3><ul><li><strong>\u8BE6\u60C5\uFF1A</strong> \u4E2D\u95F4\u5DE5\u4F5C\u533A\u57DF\u5185\u90E8</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5728\u6CA1\u6709 workspace slots \u7684\u65F6\u5019\u624D\u53EF\u4EE5\u7528</p></div><h3 id="propspanel" tabindex="-1"><a class="header-anchor" href="#propspanel" aria-hidden="true">#</a> propsPanel</h3><ul><li><strong>\u8BE6\u60C5\uFF1A</strong> \u5C5E\u6027\u9762\u677F</li></ul>',12);function rn(ln,cn){const p=o("ExternalLinkIcon");return r(),l(c,null,[u,n("ul",null,[n("li",null,[n("p",null,[k,b,n("a",d,[m,t(p)]),g])]),h,y,_]),v,n("div",f,[x,n("p",null,[j,n("a",w,[T,t(p)])])]),z,n("ul",null,[n("li",null,[n("p",null,[M,N,n("a",C,[L,t(p)])])]),P,B,I]),V,n("ul",null,[n("li",null,[n("p",null,[E,F,n("a",O,[G,t(p)])])]),S]),A,n("ul",null,[n("li",null,[n("p",null,[D,R,n("a",W,[U,t(p)]),q])]),H,J,K]),Q,n("ul",null,[n("li",null,[n("p",null,[X,Y,n("a",Z,[$,t(p)])])]),nn,n("li",null,[sn,n("p",null,[an,n("a",pn,[tn,t(p)]),en])])]),on],64)}var kn=e(i,[["render",rn]]);export{kn as default};