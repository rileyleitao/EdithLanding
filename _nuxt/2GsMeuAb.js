import{_ as Ze}from"./am3hiC6R.js";import{g as R,r as h,e as m,l as k,h as H,f as N,j as D,n as x,F as Y,m as Q,D as et,p as J,T as tt,E as nt,G as lt,i as Fe,H as ot,o as F,c as P,a as c,q as rt,b as $,w as O,B as oe,t as re,d as G,k as ue,_ as at}from"./Doc2b5cs.js";import{_ as it}from"./DlAUqK2U.js";import{o as b,b as X,f as ce,u as fe,A as B,k as st,N as Le,a as ut}from"./CfnLeX0e.js";function we(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function ye(){let e=[],t={addEventListener(n,l,r,o){return n.addEventListener(l,r,o),t.add(()=>n.removeEventListener(l,r,o))},requestAnimationFrame(...n){let l=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(l))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let l=setTimeout(...n);t.add(()=>clearTimeout(l))},microTask(...n){let l={current:!0};return we(()=>{l.current&&n[0]()}),t.add(()=>{l.current=!1})},style(n,l,r){let o=n.style.getPropertyValue(l);return Object.assign(n.style,{[l]:r}),this.add(()=>{Object.assign(n.style,{[l]:o})})},group(n){let l=ye();return n(l),this.add(()=>l.dispose())},add(n){return e.push(n),()=>{let l=e.indexOf(n);if(l>=0)for(let r of e.splice(l,1))r()}},dispose(){for(let n of e.splice(0))n()}};return t}var dt=Object.defineProperty,ct=(e,t,n)=>t in e?dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_e=(e,t,n)=>(ct(e,typeof t!="symbol"?t+"":t,n),n);let ft=class{constructor(){_e(this,"current",this.detect()),_e(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},ae=new ft;function j(e){if(ae.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=b(e);if(t)return t.ownerDocument}return document}let ve=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var T=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(T||{}),Pe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Pe||{}),vt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(vt||{});function pt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ve)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var ke=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ke||{});function mt(e,t=0){var n;return e===((n=j(e))==null?void 0:n.body)?!1:X(t,{0(){return e.matches(ve)},1(){let l=e;for(;l!==null;){if(l.matches(ve))return!0;l=l.parentElement}return!1}})}var gt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(gt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function M(e){e==null||e.focus({preventScroll:!0})}let ht=["textarea","input"].join(",");function wt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,ht))!=null?n:!1}function yt(e,t=n=>n){return e.slice().sort((n,l)=>{let r=t(n),o=t(l);if(r===null||o===null)return 0;let i=r.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function le(e,t,{sorted:n=!0,relativeTo:l=null,skipElements:r=[]}={}){var o;let i=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,a=Array.isArray(e)?n?yt(e):e:pt(e);r.length>0&&a.length>1&&(a=a.filter(v=>!r.includes(v))),l=l??i.activeElement;let s=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(l))-1;if(t&4)return Math.max(0,a.indexOf(l))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=t&32?{preventScroll:!0}:{},w=0,f=a.length,p;do{if(w>=f||w+f<=0)return 0;let v=d+w;if(t&16)v=(v+f)%f;else{if(v<0)return 3;if(v>=f)return 1}p=a[v],p==null||p.focus(u),w+=s}while(p!==i.activeElement);return t&6&&wt(p)&&p.select(),2}function Oe(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function bt(){return/Android/gi.test(window.navigator.userAgent)}function Et(){return Oe()||bt()}function te(e,t,n){ae.isServer||R(l=>{document.addEventListener(e,t,n),l(()=>document.removeEventListener(e,t,n))})}function Ae(e,t,n){ae.isServer||R(l=>{window.addEventListener(e,t,n),l(()=>window.removeEventListener(e,t,n))})}function xt(e,t,n=m(()=>!0)){function l(o,i){if(!n.value||o.defaultPrevented)return;let a=i(o);if(a===null||!a.getRootNode().contains(a))return;let s=function d(u){return typeof u=="function"?d(u()):Array.isArray(u)||u instanceof Set?u:[u]}(e);for(let d of s){if(d===null)continue;let u=d instanceof HTMLElement?d:b(d);if(u!=null&&u.contains(a)||o.composed&&o.composedPath().includes(u))return}return!mt(a,ke.Loose)&&a.tabIndex!==-1&&o.preventDefault(),t(o,a)}let r=h(null);te("pointerdown",o=>{var i,a;n.value&&(r.value=((a=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:a[0])||o.target)},!0),te("mousedown",o=>{var i,a;n.value&&(r.value=((a=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:a[0])||o.target)},!0),te("click",o=>{Et()||r.value&&(l(o,()=>r.value),r.value=null)},!0),te("touchend",o=>l(o,()=>o.target instanceof HTMLElement?o.target:null),!0),Ae("blur",o=>l(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}let Lt=Symbol("Context");var z=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(z||{});function _t(){return k(Lt,null)}function St(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let A=[];St(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&A[0]!==t.target&&(A.unshift(t.target),A=A.filter(n=>n!=null&&n.isConnected),A.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Ce(e,t,n,l){ae.isServer||R(r=>{e=e??window,e.addEventListener(t,n,l),r(()=>e.removeEventListener(t,n,l))})}var K=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(K||{});function $t(){let e=h(0);return Ae("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Me(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let l=b(n);l instanceof HTMLElement&&t.add(l)}return t}var Ne=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ne||{});let q=Object.assign(H({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:h(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:l}){let r=h(null);l({el:r,$el:r});let o=m(()=>j(r)),i=h(!1);N(()=>i.value=!0),D(()=>i.value=!1),Ft({ownerDocument:o},m(()=>i.value&&!!(e.features&16)));let a=Pt({ownerDocument:o,container:r,initialFocus:m(()=>e.initialFocus)},m(()=>i.value&&!!(e.features&2)));kt({ownerDocument:o,container:r,containers:e.containers,previousActiveElement:a},m(()=>i.value&&!!(e.features&8)));let s=$t();function d(p){let v=b(r);v&&(E=>E())(()=>{X(s.value,{[K.Forwards]:()=>{le(v,T.First,{skipElements:[p.relatedTarget]})},[K.Backwards]:()=>{le(v,T.Last,{skipElements:[p.relatedTarget]})}})})}let u=h(!1);function w(p){p.key==="Tab"&&(u.value=!0,requestAnimationFrame(()=>{u.value=!1}))}function f(p){if(!i.value)return;let v=Me(e.containers);b(r)instanceof HTMLElement&&v.add(b(r));let E=p.relatedTarget;E instanceof HTMLElement&&E.dataset.headlessuiFocusGuard!=="true"&&(De(v,E)||(u.value?le(b(r),X(s.value,{[K.Forwards]:()=>T.Next,[K.Backwards]:()=>T.Previous})|T.WrapAround,{relativeTo:p.target}):p.target instanceof HTMLElement&&M(p.target)))}return()=>{let p={},v={ref:r,onKeydown:w,onFocusout:f},{features:E,initialFocus:L,containers:W,...I}=e;return x(Y,[!!(E&4)&&x(ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:fe.Focusable}),B({ourProps:v,theirProps:{...t,...I},slot:p,attrs:t,slots:n,name:"FocusTrap"}),!!(E&4)&&x(ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:fe.Focusable})])}}}),{features:Ne});function Tt(e){let t=h(A.slice());return Q([e],([n],[l])=>{l===!0&&n===!1?we(()=>{t.value.splice(0)}):l===!1&&n===!0&&(t.value=A.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(l=>l!=null&&l.isConnected))!=null?n:null}}function Ft({ownerDocument:e},t){let n=Tt(t);N(()=>{R(()=>{var l,r;t.value||((l=e.value)==null?void 0:l.activeElement)===((r=e.value)==null?void 0:r.body)&&M(n())},{flush:"post"})}),D(()=>{t.value&&M(n())})}function Pt({ownerDocument:e,container:t,initialFocus:n},l){let r=h(null),o=h(!1);return N(()=>o.value=!0),D(()=>o.value=!1),N(()=>{Q([t,n,l],(i,a)=>{if(i.every((d,u)=>(a==null?void 0:a[u])===d)||!l.value)return;let s=b(t);s&&we(()=>{var d,u;if(!o.value)return;let w=b(n),f=(d=e.value)==null?void 0:d.activeElement;if(w){if(w===f){r.value=f;return}}else if(s.contains(f)){r.value=f;return}w?M(w):le(s,T.First|T.NoScroll)===Pe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),r.value=(u=e.value)==null?void 0:u.activeElement})},{immediate:!0,flush:"post"})}),r}function kt({ownerDocument:e,container:t,containers:n,previousActiveElement:l},r){var o;Ce((o=e.value)==null?void 0:o.defaultView,"focus",i=>{if(!r.value)return;let a=Me(n);b(t)instanceof HTMLElement&&a.add(b(t));let s=l.value;if(!s)return;let d=i.target;d&&d instanceof HTMLElement?De(a,d)?(l.value=d,M(d)):(i.preventDefault(),i.stopPropagation(),M(s)):M(l.value)},!0)}function De(e,t){for(let n of e)if(n.contains(t))return!0;return!1}function Ot(e){let t=et(e.getSnapshot());return D(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function At(e,t){let n=e(),l=new Set;return{getSnapshot(){return n},subscribe(r){return l.add(r),()=>l.delete(r)},dispatch(r,...o){let i=t[r].call(n,...o);i&&(n=i,l.forEach(a=>a()))}}}function Ct(){let e;return{before({doc:t}){var n;let l=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-l.clientWidth},after({doc:t,d:n}){let l=t.documentElement,r=l.clientWidth-l.offsetWidth,o=e-r;n.style(l,"paddingRight",`${o}px`)}}}function Mt(){return Oe()?{before({doc:e,d:t,meta:n}){function l(r){return n.containers.flatMap(o=>o()).some(o=>o.contains(r))}t.microTask(()=>{var r;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let a=ye();a.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>a.dispose()))}let o=(r=window.scrollY)!=null?r:window.pageYOffset,i=null;t.addEventListener(e,"click",a=>{if(a.target instanceof HTMLElement)try{let s=a.target.closest("a");if(!s)return;let{hash:d}=new URL(s.href),u=e.querySelector(d);u&&!l(u)&&(i=u)}catch{}},!0),t.addEventListener(e,"touchstart",a=>{if(a.target instanceof HTMLElement)if(l(a.target)){let s=a.target;for(;s.parentElement&&l(s.parentElement);)s=s.parentElement;t.style(s,"overscrollBehavior","contain")}else t.style(a.target,"touchAction","none")}),t.addEventListener(e,"touchmove",a=>{if(a.target instanceof HTMLElement){if(a.target.tagName==="INPUT")return;if(l(a.target)){let s=a.target;for(;s.parentElement&&s.dataset.headlessuiPortal!==""&&!(s.scrollHeight>s.clientHeight||s.scrollWidth>s.clientWidth);)s=s.parentElement;s.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()}},{passive:!1}),t.add(()=>{var a;let s=(a=window.scrollY)!=null?a:window.pageYOffset;o!==s&&window.scrollTo(0,o),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function Nt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Dt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let C=At(()=>new Map,{PUSH(e,t){var n;let l=(n=this.get(e))!=null?n:{doc:e,count:0,d:ye(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let l={doc:e,d:t,meta:Dt(n)},r=[Mt(),Ct(),Nt()];r.forEach(({before:o})=>o==null?void 0:o(l)),r.forEach(({after:o})=>o==null?void 0:o(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});C.subscribe(()=>{let e=C.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let l=t.get(n.doc)==="hidden",r=n.count!==0;(r&&!l||!r&&l)&&C.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&C.dispatch("TEARDOWN",n)}});function Rt(e,t,n){let l=Ot(C),r=m(()=>{let o=e.value?l.value.get(e.value):void 0;return o?o.count>0:!1});return Q([e,t],([o,i],[a],s)=>{if(!o||!i)return;C.dispatch("PUSH",o,n);let d=!1;s(()=>{d||(C.dispatch("POP",a??o,n),d=!0)})},{immediate:!0}),r}let de=new Map,V=new Map;function Se(e,t=h(!0)){R(n=>{var l;if(!t.value)return;let r=b(e);if(!r)return;n(function(){var i;if(!r)return;let a=(i=V.get(r))!=null?i:1;if(a===1?V.delete(r):V.set(r,a-1),a!==1)return;let s=de.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,de.delete(r))});let o=(l=V.get(r))!=null?l:0;V.set(r,o+1),o===0&&(de.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0)})}function Ht({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let l=h(null),r=j(l);function o(){var i,a,s;let d=[];for(let u of e)u!==null&&(u instanceof HTMLElement?d.push(u):"value"in u&&u.value instanceof HTMLElement&&d.push(u.value));if(t!=null&&t.value)for(let u of t.value)d.push(u);for(let u of(i=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?i:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(u.contains(b(l))||u.contains((s=(a=b(l))==null?void 0:a.getRootNode())==null?void 0:s.host)||d.some(w=>u.contains(w))||d.push(u));return d}return{resolveContainers:o,contains(i){return o().some(a=>a.contains(i))},mainTreeNodeRef:l,MainTreeNode(){return n!=null?null:x(ce,{features:fe.Hidden,ref:l})}}}let Re=Symbol("ForcePortalRootContext");function It(){return k(Re,!1)}let $e=H({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return J(Re,e.force),()=>{let{force:l,...r}=e;return B({theirProps:r,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}}),He=Symbol("StackContext");var pe=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(pe||{});function Bt(){return k(He,()=>{})}function jt({type:e,enabled:t,element:n,onUpdate:l}){let r=Bt();function o(...i){l==null||l(...i),r(...i)}N(()=>{Q(t,(i,a)=>{i?o(0,e,n):a===!0&&o(1,e,n)},{immediate:!0,flush:"sync"})}),D(()=>{t.value&&o(1,e,n)}),J(He,o)}function Wt(e){let t=j(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}const me=new WeakMap;function Ut(e){var t;return(t=me.get(e))!=null?t:0}function Te(e,t){let n=t(Ut(e));return n<=0?me.delete(e):me.set(e,n),n}let qt=H({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let l=h(null),r=m(()=>j(l)),o=It(),i=k(Ie,null),a=h(o===!0||i==null?Wt(l.value):i.resolveTarget());a.value&&Te(a.value,f=>f+1);let s=h(!1);N(()=>{s.value=!0}),R(()=>{o||i!=null&&(a.value=i.resolveTarget())});let d=k(ge,null),u=!1,w=lt();return Q(l,()=>{if(u||!d)return;let f=b(l);f&&(D(d.register(f),w),u=!0)}),D(()=>{var f,p;let v=(f=r.value)==null?void 0:f.getElementById("headlessui-portal-root");!v||a.value!==v||Te(a.value,E=>E-1)||a.value.children.length>0||(p=a.value.parentElement)==null||p.removeChild(a.value)}),()=>{if(!s.value||a.value===null)return null;let f={ref:l,"data-headlessui-portal":""};return x(tt,{to:a.value},B({ourProps:f,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),ge=Symbol("PortalParentContext");function Vt(){let e=k(ge,null),t=h([]);function n(o){return t.value.push(o),e&&e.register(o),()=>l(o)}function l(o){let i=t.value.indexOf(o);i!==-1&&t.value.splice(i,1),e&&e.unregister(o)}let r={register:n,unregister:l,portals:t};return[t,H({name:"PortalWrapper",setup(o,{slots:i}){return J(ge,r),()=>{var a;return(a=i.default)==null?void 0:a.call(i)}}})]}let Ie=Symbol("PortalGroupContext"),Gt=H({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let l=nt({resolveTarget(){return e.target}});return J(Ie,l),()=>{let{target:r,...o}=e;return B({theirProps:o,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}});var zt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(zt||{});let he=Symbol("DialogContext");function Be(e){let t=k(he,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Be),n}return t}let ne="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Kt=H({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ne},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:r}){var o,i;let a=(o=e.id)!=null?o:`headlessui-dialog-${Fe()}`,s=h(!1);N(()=>{s.value=!0});let d=!1,u=m(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(d||(d=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),w=h(0),f=_t(),p=m(()=>e.open===ne&&f!==null?(f.value&z.Open)===z.Open:e.open),v=h(null),E=m(()=>j(v));if(r({el:v,$el:v}),!(e.open!==ne||f!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof p.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${p.value===ne?void 0:e.open}`);let L=m(()=>s.value&&p.value?0:1),W=m(()=>L.value===0),I=m(()=>w.value>1),be=k(he,null)!==null,[je,We]=Vt(),{resolveContainers:ie,mainTreeNodeRef:Ee,MainTreeNode:Ue}=Ht({portals:je,defaultContainers:[m(()=>{var g;return(g=U.panelRef.value)!=null?g:v.value})]}),qe=m(()=>I.value?"parent":"leaf"),xe=m(()=>f!==null?(f.value&z.Closing)===z.Closing:!1),Ve=m(()=>be||xe.value?!1:W.value),Ge=m(()=>{var g,y,_;return(_=Array.from((y=(g=E.value)==null?void 0:g.querySelectorAll("body > *"))!=null?y:[]).find(S=>S.id==="headlessui-portal-root"?!1:S.contains(b(Ee))&&S instanceof HTMLElement))!=null?_:null});Se(Ge,Ve);let ze=m(()=>I.value?!0:W.value),Ke=m(()=>{var g,y,_;return(_=Array.from((y=(g=E.value)==null?void 0:g.querySelectorAll("[data-headlessui-portal]"))!=null?y:[]).find(S=>S.contains(b(Ee))&&S instanceof HTMLElement))!=null?_:null});Se(Ke,ze),jt({type:"Dialog",enabled:m(()=>L.value===0),element:v,onUpdate:(g,y)=>{if(y==="Dialog")return X(g,{[pe.Add]:()=>w.value+=1,[pe.Remove]:()=>w.value-=1})}});let Ye=st({name:"DialogDescription",slot:m(()=>({open:p.value}))}),Z=h(null),U={titleId:Z,panelRef:h(null),dialogState:L,setTitleId(g){Z.value!==g&&(Z.value=g)},close(){t("close",!1)}};J(he,U);let Xe=m(()=>!(!W.value||I.value));xt(ie,(g,y)=>{g.preventDefault(),U.close(),ot(()=>y==null?void 0:y.focus())},Xe);let Qe=m(()=>!(I.value||L.value!==0));Ce((i=E.value)==null?void 0:i.defaultView,"keydown",g=>{Qe.value&&(g.defaultPrevented||g.key===ut.Escape&&(g.preventDefault(),g.stopPropagation(),U.close()))});let Je=m(()=>!(xe.value||L.value!==0||be));return Rt(E,Je,g=>{var y;return{containers:[...(y=g.containers)!=null?y:[],ie]}}),R(g=>{if(L.value!==0)return;let y=b(v);if(!y)return;let _=new ResizeObserver(S=>{for(let se of S){let ee=se.target.getBoundingClientRect();ee.x===0&&ee.y===0&&ee.width===0&&ee.height===0&&U.close()}});_.observe(y),g(()=>_.disconnect())}),()=>{let{open:g,initialFocus:y,..._}=e,S={...n,ref:v,id:a,role:u.value,"aria-modal":L.value===0?!0:void 0,"aria-labelledby":Z.value,"aria-describedby":Ye.value},se={open:L.value===0};return x($e,{force:!0},()=>[x(qt,()=>x(Gt,{target:v.value},()=>x($e,{force:!1},()=>x(q,{initialFocus:y,containers:ie,features:W.value?X(qe.value,{parent:q.features.RestoreFocus,leaf:q.features.All&~q.features.FocusLock}):q.features.None},()=>x(We,{},()=>B({ourProps:S,theirProps:{..._,...n},slot:se,attrs:n,slots:l,visible:L.value===0,features:Le.RenderStrategy|Le.Static,name:"Dialog"})))))),x(Ue)])}}}),Yt=H({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:l}){var r;let o=(r=e.id)!=null?r:`headlessui-dialog-panel-${Fe()}`,i=Be("DialogPanel");l({el:i.panelRef,$el:i.panelRef});function a(s){s.stopPropagation()}return()=>{let{...s}=e,d={id:o,ref:i.panelRef,onClick:a};return B({ourProps:d,theirProps:s,slot:{open:i.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}});function Xt(e,t){return F(),P("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})])}const Qt={class:"max-w-screen mx-auto rounded-xl mt-32 mb-6 border-[--ui-light-border-color]"},Jt={class:"max-w-6xl mx-auto space-y-16 px-6 py-16 text-gray-600 2xl:px-0"},Zt={class:"flex flex-wrap items-center justify-between gap-4 border-b pb-8 border-[--ui-light-border-color]"},en={class:"grid grid-cols-2 gap-6 sm:grid-cols-4"},tn={class:"font-bold text-gray-950"},nn={class:"mt-4 list-inside space-y-4"},ln={__name:"Footer",setup(e){const t=[{title:"About",links:[{text:"Feature Overview",to:"/features"},{text:"Security",to:"/security"}]},{title:"Company",links:[{text:"About",to:"/"},{text:"Privacy Policy",to:"/privacy"},{text:"Terms of Service",to:"/terms"}]},{title:"Whitelabel",links:[{text:"Whitelabel Services",to:"/"}]},{title:"Contact",links:[{text:"Email",to:"/Contact"}]}];return(n,l)=>{const r=rt("router-link");return F(),P("footer",Qt,[c("div",Jt,[c("div",Zt,[$(r,{to:"/"},{default:O(()=>l[0]||(l[0]=[c("img",{class:"w-32",src:"https://edithmedicallandingpage.s3.us-east-2.amazonaws.com/lightLogo.svg",alt:"Light Logo"},null,-1)])),_:1})]),c("div",en,[(F(),P(Y,null,oe(t,o=>c("div",{key:o.title},[c("span",tn,re(o.title),1),c("ul",nn,[(F(!0),P(Y,null,oe(o.links,i=>(F(),P("li",{key:i.text},[$(r,{to:i.to,class:"text-sm text-gray-600 hover:text-primary-600"},{default:O(()=>[G(re(i.text),1)]),_:2},1032,["to"])]))),128))])])),64))])])])}}},on={class:"max-w-screen"},rn={class:"bg-white"},an={class:"absolute inset-x-0 top-0 z-50"},sn={class:"flex items-center max-w-full justify-between p-6 lg:px-8","aria-label":"Global"},un={class:"flex lg:flex-1"},dn={class:"hidden lg:flex lg:gap-x-12"},cn={class:"flex items-center justify-between"},fn={class:"mt-6 flow-root"},vn={class:"-my-6 divide-y divide-gray-500/10"},pn={class:"space-y-2 py-6 flex flex-col"},mn={__name:"default",setup(e){const t=[{name:"About",route:"/"},{name:"Features",route:"/features"},{name:"Contact",route:"/Contact"}],n=h(!1),l=()=>{window.gtag&&window.gtag("event","button_click",{event_category:"engagement",event_label:"signup_button",value:1})};return(r,o)=>{const i=Ze,a=at;return F(),P("div",on,[c("div",rn,[c("header",an,[c("nav",sn,[c("div",un,[$(i,{to:"/",class:"-m-1.5 p-1.5"},{default:O(()=>o[2]||(o[2]=[c("span",{class:"sr-only"},"Edith Medical",-1),c("img",{class:"h-8 w-auto",src:"https://edithmedicallandingpage.s3.us-east-2.amazonaws.com/lightLogo.svg",alt:"Light Logo"},null,-1)])),_:1})]),c("div",{class:"lg:hidden lg:flex lg:flex-1 lg:justify-end"},[c("a",{href:"https://app.edithmedical.com/Register",class:"text-sm font-semibold leading-6 text-gray-900",onClick:l},o[3]||(o[3]=[G(" Sign Up "),c("span",{"aria-hidden":"true"},"→",-1)]))]),c("div",dn,[(F(),P(Y,null,oe(t,s=>$(i,{key:s.name,to:s.route,class:"text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"},{default:O(()=>[G(re(s.name),1)]),_:2},1032,["to"])),64))]),c("div",{class:"hidden lg:flex lg:flex-1 lg:justify-end"},[c("a",{href:"https://app.edithmedical.com/Register",class:"text-sm font-semibold leading-6 text-gray-900",onClick:l},o[4]||(o[4]=[G(" Sign Up "),c("span",{"aria-hidden":"true"},"→",-1)]))])]),$(ue(Kt),{class:"lg:hidden",onClose:o[1]||(o[1]=s=>n.value=!1),open:n.value},{default:O(()=>[o[7]||(o[7]=c("div",{class:"fixed inset-0 z-50"},null,-1)),$(ue(Yt),{class:"fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"},{default:O(()=>[c("div",cn,[o[6]||(o[6]=c("a",{href:"#",class:"-m-1.5 p-1.5"},[c("span",{class:"sr-only"},"Edith Medical"),c("img",{class:"h-8 w-auto",src:"https://edithmedicallandingpage.s3.us-east-2.amazonaws.com/lightLogo.svg",alt:"Logo"})],-1)),c("button",{type:"button",class:"-m-2.5 rounded-md p-2.5 text-gray-900",onClick:o[0]||(o[0]=s=>n.value=!1)},[o[5]||(o[5]=c("span",{class:"sr-only"},"Close menu",-1)),$(ue(Xt),{class:"h-6 w-6","aria-hidden":"true"})])]),c("div",fn,[c("div",vn,[c("div",pn,[(F(),P(Y,null,oe(t,s=>$(i,{key:s.name,to:s.route,class:"text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 hover:bg-gray-50"},{default:O(()=>[G(re(s.name),1)]),_:2},1032,["to"])),64))]),c("div",{class:"py-6"},[c("a",{href:"https://app.edithmedical.com/Register",onClick:l,class:"-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},"Sign Up")])])])]),_:1})]),_:1},8,["open"])]),$(a),$(ln)])])}}},En=it(mn,[["__scopeId","data-v-fc0d181a"]]);export{En as default};