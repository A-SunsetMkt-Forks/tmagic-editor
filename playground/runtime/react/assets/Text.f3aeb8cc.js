var C=Object.defineProperty,v=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var x=(e,t,a)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,o=(e,t)=>{for(var a in t||(t={}))$.call(t,a)&&x(e,a,t[a]);if(d)for(var a of d(t))f.call(t,a)&&x(e,a,t[a]);return e},N=(e,t)=>v(e,E(t));import{R as n,r as l}from"./vendor.358e0281.js";var g=n.createContext(void 0),S=e=>({show:()=>{e.style.display="initial"},hide:()=>{e.style.display="none"}}),c=({config:e,methods:t})=>{var u;const a=l.exports.useContext(g),s=(u=a==null?void 0:a.page)==null?void 0:u.getNode(e.id),[r,i]=l.exports.useState(!1),m=l.exports.useRef(null);return r||(i(!0),s==null||s.emit("created",{methods:t})),l.exports.useEffect(()=>{const p=m.current,y=N(o(o({},S(p)),t),{$el:p});return s==null||s.emit("mounted",y),()=>{s==null||s.emit("destroy",y)}},[]),{app:a,ref:m}};const M=({config:e})=>{const{app:t,ref:a}=c({config:e});if(!t)return null;const s=t.resolveComponent("text");return n.createElement("button",{ref:a,className:"magic-ui-button",style:t.transformStyle(e.style||{}),id:e.id},n.createElement(s,{config:{text:e.text}}))};M.displayName="maigc-ui-button";const T=({config:e})=>{var s;const{app:t,ref:a}=c({config:e});return t?n.createElement("div",{ref:a,id:`${e.id}`,className:`magic-ui-container${e.className?` ${e.className}`:""}`,style:t.transformStyle(e.style||{})},(s=e.items)==null?void 0:s.map(r=>{const i=t.resolveComponent(r.type||"container");return i?n.createElement(i,{id:`${r.id}`,key:r.id,config:r,className:`magic-ui-component${e.className?` ${e.className}`:""}`,style:t.transformStyle(r.style||{})}):null})):null};T.displayName="magic-ui-container";const b=({config:e})=>{const{app:t}=c({config:e});if(!t)return null;const a=t.resolveComponent("container");return n.createElement(a,{config:o({className:"magic-ui-page"},e)})};b.displayName="maigc-ui-page";const A=({config:e})=>{const{app:t,ref:a}=c({config:e});if(!t)return null;const[s]=l.exports.useState(e.text);return n.createElement("p",{ref:a,className:"magic-ui-text",style:t.transformStyle(e.style||{}),id:e.id},s)};A.displayName="maigc-ui-text";export{g as A,T as C,b as P,A as T,M as a};