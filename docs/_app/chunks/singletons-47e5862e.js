const u="modulepreload",i={},f="/portfolio/_app/",m=function(s,n){return!n||n.length===0?s():Promise.all(n.map(e=>{if(e=`${f}${e}`,e in i)return;i[e]=!0;const r=e.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${l}`))return;const t=document.createElement("link");if(t.rel=r?"stylesheet":u,r||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),r)return new Promise((c,a)=>{t.addEventListener("load",c),t.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s())};let h;function d(o){h=o.client}export{m as _,h as c,d as i};