import{E as a,s as b}from"./index-96b401eb.js";const c=[];function g(s,u=a){let i;const e=new Set;function o(r){if(b(s,r)&&(s=r,i)){const l=!c.length;for(const t of e)t[1](),c.push(t,s);if(l){for(let t=0;t<c.length;t+=2)c[t][0](c[t+1]);c.length=0}}}function f(r){o(r(s))}function n(r,l=a){const t=[r,l];return e.add(t),e.size===1&&(i=u(o)||a),r(s),()=>{e.delete(t),e.size===0&&(i(),i=null)}}return{set:o,update:f,subscribe:n}}const d="modulepreload",h={},m="/portfolio/_app/",E=function(u,i){return!i||i.length===0?u():Promise.all(i.map(e=>{if(e=`${m}${e}`,e in h)return;h[e]=!0;const o=e.endsWith(".css"),f=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${f}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":d,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o)return new Promise((r,l)=>{n.addEventListener("load",r),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>u())};let p;function S(s){p=s.client}export{E as _,p as c,S as i,g as w};
