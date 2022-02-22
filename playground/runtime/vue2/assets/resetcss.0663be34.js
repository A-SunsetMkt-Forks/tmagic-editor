var L=Object.defineProperty;var m=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var l=(s,e,t)=>e in s?L(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,p=(s,e)=>{for(var t in e||(e={}))I.call(e,t)&&l(s,t,e[t]);if(m)for(var t of m(e))C.call(e,t)&&l(s,t,e[t]);return s};var r=(s,e,t)=>(l(s,typeof e!="symbol"?e+"":e,t),t);import{e as O}from"./vendor.3a9c71dc.js";const M=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}};M();class N{constructor(e=globalThis.navigator.userAgent,t={}){r(this,"isIos",!1);r(this,"isIphone",!1);r(this,"isIpad",!1);r(this,"isAndroid",!1);r(this,"isAnroidPad",!1);r(this,"isMac",!1);r(this,"isWin",!1);r(this,"isMqq",!1);r(this,"isWechat",!1);r(this,"isWeb",!1);this.isIphone=e.indexOf("iPhone")>=0,this.isIpad=/(iPad).*OS\s([\d_]+)/.test(e),this.isIos=this.isIphone||this.isIpad,this.isAndroid=e.indexOf("Android")>=0,this.isAnroidPad=this.isAndroid&&e.indexOf("Mobile")<0,this.isMac=e.indexOf("Macintosh")>=0,this.isWin=e.indexOf("Windows")>=0,this.isMqq=/QQ\/([\d.]+)/.test(e),this.isWechat=e.indexOf("MicroMessenger")>=0&&e.indexOf("wxwork")<0,this.isWeb=!this.isIos&&!this.isAndroid&&!/(WebOS|BlackBerry)/.test(e),Object.entries(t).forEach(([n,i])=>{this[n]=i})}}const h="magic:common:events:",b="magic:common:actions:",f={SHOW:"show",HIDE:"hide",SCROLL_TO_VIEW:"scrollIntoView",SCROLL_TO_TOP:"scrollToTop"},S=[{label:"\u70B9\u51FB",value:`${h}click`}],w=(s,e)=>{const t=`${s}:${e}`;return s.startsWith(h)?t:`${h}${t}`},v=s=>s.startsWith(b),y=(s,e)=>{var n;if(!s)return!1;if(!s.id)return y(s.parentElement,e);const t=(n=e.page)==null?void 0:n.getNode(s.id);return t||!1},g=(s,e,t)=>{const n=y(t.target,s);if(n){const{instance:i,data:o}=n;s.emit(w(e,o.id),i)}},x=s=>{window.document.body.addEventListener("click",e=>{g(s,"click",e)}),window.document.body.addEventListener("click",e=>{g(s,"click:capture",e)},!0)},A=(s,e)=>{const{instance:t}=e;switch(s.replace(b,"")){case f.SHOW:t.show();break;case f.HIDE:t.hide();break;case f.SCROLL_TO_VIEW:t.$el.scrollIntoView({behavior:"smooth"});break;case f.SCROLL_TO_TOP:window.scrollTo({top:0,behavior:"smooth"});break}};class E extends O.exports.EventEmitter{constructor(e){super();r(this,"data");r(this,"style");r(this,"events");r(this,"instance");const{events:t}=e;this.data=e,this.events=t,this.listenLifeSafe(),this.once("destroy",()=>{this.instance=null,typeof this.data.destroy=="function"&&this.data.destroy(this),this.listenLifeSafe()})}listenLifeSafe(){this.once("created",e=>{this.instance=e,typeof this.data.created=="function"&&this.data.created(this)}),this.once("mounted",e=>{this.instance=e,typeof this.data.mounted=="function"&&this.data.mounted(this)})}}class $ extends E{constructor(e){super(e.config);r(this,"nodes",new Map);this.setNode(e.config.id,this),this.initNode(e.config)}initNode(e){var t;this.setNode(e.id,new E(e)),(t=e.items)==null||t.forEach(n=>{this.initNode(n)})}getNode(e){return this.nodes.get(e)}setNode(e,t){this.nodes.set(e,t)}deleteNode(e){this.nodes.delete(e)}}const T=s=>{if(typeof s!="string")return s;const e={};return s.split(";").forEach(t=>{if(!t)return;const n=t.split(":");let i=n.shift(),o=n.join(":");!i||(i=i.replace(/^\s*/,"").replace(/\s*$/,""),o=o.replace(/^\s*/,"").replace(/\s*$/,""),i=i.split("-").map((a,c)=>c>0?`${a[0].toUpperCase()}${a.substr(1)}`:a).join(""),e[i]=o)}),e},W=s=>s&&!/^url/.test(s)&&!/^linear-gradient/.test(s)?`url(${s})`:s;class k extends O.exports.EventEmitter{constructor(e){super();r(this,"env");r(this,"pages",new Map);r(this,"page");r(this,"platform","mobile");r(this,"jsEngine","browser");r(this,"components",new Map);if(this.env=new N(e.ua),e.platform&&(this.platform=e.platform),e.jsEngine&&(this.jsEngine=e.jsEngine),this.platform==="mobile"||this.platform==="editor"){const t=()=>{let{width:n}=document.documentElement.getBoundingClientRect();n=Math.min(800,n);const i=n/3.75;document.documentElement.style.fontSize=`${i}px`};t(),document.body.style.fontSize="14px",globalThis.addEventListener("resize",t)}e.transformStyle&&(this.transformStyle=e.transformStyle),e.config&&this.setConfig(e.config,e.curPage),x(this)}transformStyle(e){if(!e)return{};let t={};const n={};typeof e=="string"?t=T(e):t=p({},e);const i=["zIndex","opacity","fontWeight"];return Object.entries(t).forEach(([o,a])=>{o==="backgroundImage"?a&&(n[o]=W(a)):!i.includes(o)&&a&&/^[-]?[0-9]*[.]?[0-9]*$/.test(a)?n[o]=`${a/100}rem`:n[o]=a}),n}setConfig(e,t){var n,i,o;this.pages=new Map,(n=e.items)==null||n.forEach(a=>{this.pages.set(a.id,new $({config:a}))}),this.setPage(t||((o=(i=this.page)==null?void 0:i.data)==null?void 0:o.id))}setPage(e){let t;e&&(t=this.pages.get(e)),t||(t=this.pages.get(this.pages.keys().next().value)),this.page=t,this.platform!=="magic"&&this.bindEvents()}registerComponent(e,t){this.components.set(e,t)}unregisterComponent(e){this.components.delete(e)}resolveComponent(e){return this.components.get(e)}bindEvents(){var e;if(!!this.page){this.removeAllListeners();for(const[,t]of this.page.nodes)(e=t.events)==null||e.forEach(n=>{let{name:i}=n;S.findIndex(o=>o.value===i)>-1&&(i=w(i,`${t.data.id}`)),this.on(i,(o,...a)=>{var u;if(!this.page)throw new Error("\u5F53\u524D\u6CA1\u6709\u9875\u9762");const c=this.page.getNode(n.to);if(!c)throw`ID\u4E3A${n.to}\u7684\u7EC4\u4EF6\u4E0D\u5B58\u5728`;const{method:d}=n;if(v(d))return A(d,c);typeof((u=c.instance)==null?void 0:u[d])=="function"&&c.instance[d](o,...a)})})}}destroy(){this.removeAllListeners(),this.pages.clear()}}export{k as A};