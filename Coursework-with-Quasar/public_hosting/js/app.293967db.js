(()=>{"use strict";var e={4647:(e,t,r)=>{var o=r(1957),n=r(1947),a=r(499),i=r(9835);function s(e,t,r,o,n,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}const l=(0,i.aZ)({name:"App"});var u=r(1639);const c=(0,u.Z)(l,[["render",s]]),d=c;var p=r(1502),f=r(3340),h=r(8339);const m=[{path:"/",component:()=>Promise.all([r.e(736),r.e(397)]).then(r.bind(r,7397)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(455)]).then(r.bind(r,5455))},{path:"/game-1",component:()=>Promise.all([r.e(736),r.e(331)]).then(r.bind(r,9331))},{path:"/game-2",component:()=>Promise.all([r.e(736),r.e(214)]).then(r.bind(r,2214))},{path:"/game-3",component:()=>Promise.all([r.e(736),r.e(551)]).then(r.bind(r,4551))},{path:"/chat",component:()=>Promise.all([r.e(736),r.e(975)]).then(r.bind(r,4975))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],v=m,b=(0,f.BC)((function(){const e=h.r5,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:e("")});return t}));async function g(e,t){const o=e(d);o.use(n.Z,t);const i="function"===typeof p["default"]?await(0,p["default"])({}):p["default"],{storeKey:s}=await Promise.resolve().then(r.bind(r,1502)),l=(0,a.Xl)("function"===typeof b?await b({store:i}):b);return i.$router=l,{app:o,store:i,storeKey:s,router:l}}var y=r(432);const w={config:{},plugins:{Notify:y.Z}},P="";async function k({app:e,router:t,store:r,storeKey:o},n){let a=!1;const i=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},s=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let c=0;!1===a&&c<n.length;c++)try{await n[c]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:l,publicPath:P})}catch(u){return u&&u.url?void s(u.url):void console.error("[Quasar] boot error:",u)}!0!==a&&(e.use(t),e.use(r,o),e.mount("#q-app"))}g(o.ri,w).then((e=>{const[t,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,8323)),Promise.resolve().then(r.bind(r,1569))]).then((t=>{const r=o(t).filter((e=>"function"===typeof e));k(e,r)}))}))},8323:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var o=r(4886),n=r(3340),a=r(5078),i=r(3243),s=r(7184);function l(e){const t=(0,a.L)({uri:"https://endless-wasp-39.hasura.app/v1/graphql"}),r=(0,s.v)(((e,{headers:t})=>{const r=sessionStorage.getItem("token");return""===r?(console.log("Отправлены пустые заголовки"),{headers:{...t}}):(console.log("Отправлены заголовки"),{headers:{...t,Authorization:r?`Bearer ${r}`:""}})}));return Object.assign({link:r.concat(t),cache:new i.h})}var u=r(2468);const c=l(),d=new u.f(c),p=d,f=(0,n.xr)((({app:e})=>{const t={default:p};e.provide(o.Rw,t)}))},1569:(e,t,r)=>{r.r(t),r.d(t,{api:()=>a,default:()=>i});var o=r(3340),n=r(7524);const a=n.Z.create({baseURL:"https://api.example.com"}),i=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=n.Z,e.config.globalProperties.$api=a}))},1502:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var o=r(3340),n=r(3100);const a=(0,o.h)((function(){const e=(0,n.MT)({modules:{},strict:!1});return e}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,n,a]=e[c],s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{214:"6631c014",331:"9337212c",397:"1b344f5b",455:"690a72e0",551:"a8ec46a9",862:"f1129fb5",975:"a8cb5a5e"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{214:"d9acaab3",331:"71d84e4d",397:"8558960b",455:"6f096451",551:"22d1fa68",975:"70e6a4d2"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="coursework-whith-quasar:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[n];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,o,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=r=>{if(a.onerror=a.onload=null,"load"===r.type)o();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,a.parentNode.removeChild(a),n(l)}};return a.onerror=a.onload=i,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),s=r.p+i;if(t(i,s))return n();e(o,s,null,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={214:1,331:1,397:1,455:1,551:1,975:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),s=new Error,l=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,s,l]=o,u=0;if(i.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var c=l(r)}for(t&&t(o);u<i.length;u++)a=i[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},o=globalThis["webpackChunkcoursework_whith_quasar"]=globalThis["webpackChunkcoursework_whith_quasar"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(4647)));o=r.O(o)})();