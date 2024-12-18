import{_ as et}from"./CEottS9n.js";import{e as R,r as h,m,v as k,q as I,n as N,s as D,x as E,F as Y,g as X,I as tt,p as J,T as nt,J as lt,l as ot,K as rt,o as F,c as S,a as c,y as at,b as L,w as O,G as re,t as ae,d as le,u as ee,_ as it}from"./C9RohuBJ.js";import{_ as st}from"./DlAUqK2U.js";import{o as b,b as z,f as ce,u as fe,A as B,i as Pe,k as ut,N as _e,a as dt}from"./3BIeswAv.js";function ye(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function be(){let e=[],t={addEventListener(n,l,o,r){return n.addEventListener(l,o,r),t.add(()=>n.removeEventListener(l,o,r))},requestAnimationFrame(...n){let l=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(l))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let l=setTimeout(...n);t.add(()=>clearTimeout(l))},microTask(...n){let l={current:!0};return ye(()=>{l.current&&n[0]()}),t.add(()=>{l.current=!1})},style(n,l,o){let r=n.style.getPropertyValue(l);return Object.assign(n.style,{[l]:o}),this.add(()=>{Object.assign(n.style,{[l]:r})})},group(n){let l=be();return n(l),this.add(()=>l.dispose())},add(n){return e.push(n),()=>{let l=e.indexOf(n);if(l>=0)for(let o of e.splice(l,1))o()}},dispose(){for(let n of e.splice(0))n()}};return t}var ct=Object.defineProperty,ft=(e,t,n)=>t in e?ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$e=(e,t,n)=>(ft(e,typeof t!="symbol"?t+"":t,n),n);let vt=class{constructor(){$e(this,"current",this.detect()),$e(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},ie=new vt;function j(e){if(ie.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=b(e);if(t)return t.ownerDocument}return document}let ve=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var P=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(P||{}),ke=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ke||{}),pt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(pt||{});function mt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ve)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Oe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Oe||{});function gt(e,t=0){var n;return e===((n=j(e))==null?void 0:n.body)?!1:z(t,{0(){return e.matches(ve)},1(){let l=e;for(;l!==null;){if(l.matches(ve))return!0;l=l.parentElement}return!1}})}var ht=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(ht||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function M(e){e==null||e.focus({preventScroll:!0})}let wt=["textarea","input"].join(",");function yt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,wt))!=null?n:!1}function bt(e,t=n=>n){return e.slice().sort((n,l)=>{let o=t(n),r=t(l);if(o===null||r===null)return 0;let i=o.compareDocumentPosition(r);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function oe(e,t,{sorted:n=!0,relativeTo:l=null,skipElements:o=[]}={}){var r;let i=(r=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?r:document,a=Array.isArray(e)?n?bt(e):e:mt(e);o.length>0&&a.length>1&&(a=a.filter(v=>!o.includes(v))),l=l??i.activeElement;let s=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(l))-1;if(t&4)return Math.max(0,a.indexOf(l))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=t&32?{preventScroll:!0}:{},w=0,f=a.length,p;do{if(w>=f||w+f<=0)return 0;let v=d+w;if(t&16)v=(v+f)%f;else{if(v<0)return 3;if(v>=f)return 1}p=a[v],p==null||p.focus(u),w+=s}while(p!==i.activeElement);return t&6&&yt(p)&&p.select(),2}function Ae(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function xt(){return/Android/gi.test(window.navigator.userAgent)}function Et(){return Ae()||xt()}function te(e,t,n){ie.isServer||R(l=>{document.addEventListener(e,t,n),l(()=>document.removeEventListener(e,t,n))})}function Ce(e,t,n){ie.isServer||R(l=>{window.addEventListener(e,t,n),l(()=>window.removeEventListener(e,t,n))})}function Lt(e,t,n=m(()=>!0)){function l(r,i){if(!n.value||r.defaultPrevented)return;let a=i(r);if(a===null||!a.getRootNode().contains(a))return;let s=function d(u){return typeof u=="function"?d(u()):Array.isArray(u)||u instanceof Set?u:[u]}(e);for(let d of s){if(d===null)continue;let u=d instanceof HTMLElement?d:b(d);if(u!=null&&u.contains(a)||r.composed&&r.composedPath().includes(u))return}return!gt(a,Oe.Loose)&&a.tabIndex!==-1&&r.preventDefault(),t(r,a)}let o=h(null);te("pointerdown",r=>{var i,a;n.value&&(o.value=((a=(i=r.composedPath)==null?void 0:i.call(r))==null?void 0:a[0])||r.target)},!0),te("mousedown",r=>{var i,a;n.value&&(o.value=((a=(i=r.composedPath)==null?void 0:i.call(r))==null?void 0:a[0])||r.target)},!0),te("click",r=>{Et()||o.value&&(l(r,()=>o.value),o.value=null)},!0),te("touchend",r=>l(r,()=>r.target instanceof HTMLElement?r.target:null),!0),Ce("blur",r=>l(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}let _t=Symbol("Context");var G=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(G||{});function $t(){return k(_t,null)}function Tt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let A=[];Tt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&A[0]!==t.target&&(A.unshift(t.target),A=A.filter(n=>n!=null&&n.isConnected),A.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Me(e,t,n,l){ie.isServer||R(o=>{e=e??window,e.addEventListener(t,n,l),o(()=>e.removeEventListener(t,n,l))})}var K=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(K||{});function Ft(){let e=h(0);return Ce("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Ne(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let l=b(n);l instanceof HTMLElement&&t.add(l)}return t}var De=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(De||{});let q=Object.assign(I({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:h(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:l}){let o=h(null);l({el:o,$el:o});let r=m(()=>j(o)),i=h(!1);N(()=>i.value=!0),D(()=>i.value=!1),Pt({ownerDocument:r},m(()=>i.value&&!!(e.features&16)));let a=kt({ownerDocument:r,container:o,initialFocus:m(()=>e.initialFocus)},m(()=>i.value&&!!(e.features&2)));Ot({ownerDocument:r,container:o,containers:e.containers,previousActiveElement:a},m(()=>i.value&&!!(e.features&8)));let s=Ft();function d(p){let v=b(o);v&&(x=>x())(()=>{z(s.value,{[K.Forwards]:()=>{oe(v,P.First,{skipElements:[p.relatedTarget]})},[K.Backwards]:()=>{oe(v,P.Last,{skipElements:[p.relatedTarget]})}})})}let u=h(!1);function w(p){p.key==="Tab"&&(u.value=!0,requestAnimationFrame(()=>{u.value=!1}))}function f(p){if(!i.value)return;let v=Ne(e.containers);b(o)instanceof HTMLElement&&v.add(b(o));let x=p.relatedTarget;x instanceof HTMLElement&&x.dataset.headlessuiFocusGuard!=="true"&&(Re(v,x)||(u.value?oe(b(o),z(s.value,{[K.Forwards]:()=>P.Next,[K.Backwards]:()=>P.Previous})|P.WrapAround,{relativeTo:p.target}):p.target instanceof HTMLElement&&M(p.target)))}return()=>{let p={},v={ref:o,onKeydown:w,onFocusout:f},{features:x,initialFocus:_,containers:W,...H}=e;return E(Y,[!!(x&4)&&E(ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:fe.Focusable}),B({ourProps:v,theirProps:{...t,...H},slot:p,attrs:t,slots:n,name:"FocusTrap"}),!!(x&4)&&E(ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:fe.Focusable})])}}}),{features:De});function St(e){let t=h(A.slice());return X([e],([n],[l])=>{l===!0&&n===!1?ye(()=>{t.value.splice(0)}):l===!1&&n===!0&&(t.value=A.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(l=>l!=null&&l.isConnected))!=null?n:null}}function Pt({ownerDocument:e},t){let n=St(t);N(()=>{R(()=>{var l,o;t.value||((l=e.value)==null?void 0:l.activeElement)===((o=e.value)==null?void 0:o.body)&&M(n())},{flush:"post"})}),D(()=>{t.value&&M(n())})}function kt({ownerDocument:e,container:t,initialFocus:n},l){let o=h(null),r=h(!1);return N(()=>r.value=!0),D(()=>r.value=!1),N(()=>{X([t,n,l],(i,a)=>{if(i.every((d,u)=>(a==null?void 0:a[u])===d)||!l.value)return;let s=b(t);s&&ye(()=>{var d,u;if(!r.value)return;let w=b(n),f=(d=e.value)==null?void 0:d.activeElement;if(w){if(w===f){o.value=f;return}}else if(s.contains(f)){o.value=f;return}w?M(w):oe(s,P.First|P.NoScroll)===ke.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.value=(u=e.value)==null?void 0:u.activeElement})},{immediate:!0,flush:"post"})}),o}function Ot({ownerDocument:e,container:t,containers:n,previousActiveElement:l},o){var r;Me((r=e.value)==null?void 0:r.defaultView,"focus",i=>{if(!o.value)return;let a=Ne(n);b(t)instanceof HTMLElement&&a.add(b(t));let s=l.value;if(!s)return;let d=i.target;d&&d instanceof HTMLElement?Re(a,d)?(l.value=d,M(d)):(i.preventDefault(),i.stopPropagation(),M(s)):M(l.value)},!0)}function Re(e,t){for(let n of e)if(n.contains(t))return!0;return!1}function At(e){let t=tt(e.getSnapshot());return D(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Ct(e,t){let n=e(),l=new Set;return{getSnapshot(){return n},subscribe(o){return l.add(o),()=>l.delete(o)},dispatch(o,...r){let i=t[o].call(n,...r);i&&(n=i,l.forEach(a=>a()))}}}function Mt(){let e;return{before({doc:t}){var n;let l=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-l.clientWidth},after({doc:t,d:n}){let l=t.documentElement,o=l.clientWidth-l.offsetWidth,r=e-o;n.style(l,"paddingRight",`${r}px`)}}}function Nt(){return Ae()?{before({doc:e,d:t,meta:n}){function l(o){return n.containers.flatMap(r=>r()).some(r=>r.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let a=be();a.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>a.dispose()))}let r=(o=window.scrollY)!=null?o:window.pageYOffset,i=null;t.addEventListener(e,"click",a=>{if(a.target instanceof HTMLElement)try{let s=a.target.closest("a");if(!s)return;let{hash:d}=new URL(s.href),u=e.querySelector(d);u&&!l(u)&&(i=u)}catch{}},!0),t.addEventListener(e,"touchstart",a=>{if(a.target instanceof HTMLElement)if(l(a.target)){let s=a.target;for(;s.parentElement&&l(s.parentElement);)s=s.parentElement;t.style(s,"overscrollBehavior","contain")}else t.style(a.target,"touchAction","none")}),t.addEventListener(e,"touchmove",a=>{if(a.target instanceof HTMLElement){if(a.target.tagName==="INPUT")return;if(l(a.target)){let s=a.target;for(;s.parentElement&&s.dataset.headlessuiPortal!==""&&!(s.scrollHeight>s.clientHeight||s.scrollWidth>s.clientWidth);)s=s.parentElement;s.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()}},{passive:!1}),t.add(()=>{var a;let s=(a=window.scrollY)!=null?a:window.pageYOffset;r!==s&&window.scrollTo(0,r),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function Dt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Rt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let C=Ct(()=>new Map,{PUSH(e,t){var n;let l=(n=this.get(e))!=null?n:{doc:e,count:0,d:be(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let l={doc:e,d:t,meta:Rt(n)},o=[Nt(),Mt(),Dt()];o.forEach(({before:r})=>r==null?void 0:r(l)),o.forEach(({after:r})=>r==null?void 0:r(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});C.subscribe(()=>{let e=C.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let l=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!l||!o&&l)&&C.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&C.dispatch("TEARDOWN",n)}});function It(e,t,n){let l=At(C),o=m(()=>{let r=e.value?l.value.get(e.value):void 0;return r?r.count>0:!1});return X([e,t],([r,i],[a],s)=>{if(!r||!i)return;C.dispatch("PUSH",r,n);let d=!1;s(()=>{d||(C.dispatch("POP",a??r,n),d=!0)})},{immediate:!0}),o}let de=new Map,V=new Map;function Te(e,t=h(!0)){R(n=>{var l;if(!t.value)return;let o=b(e);if(!o)return;n(function(){var i;if(!o)return;let a=(i=V.get(o))!=null?i:1;if(a===1?V.delete(o):V.set(o,a-1),a!==1)return;let s=de.get(o);s&&(s["aria-hidden"]===null?o.removeAttribute("aria-hidden"):o.setAttribute("aria-hidden",s["aria-hidden"]),o.inert=s.inert,de.delete(o))});let r=(l=V.get(o))!=null?l:0;V.set(o,r+1),r===0&&(de.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),o.setAttribute("aria-hidden","true"),o.inert=!0)})}function Ht({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let l=h(null),o=j(l);function r(){var i,a,s;let d=[];for(let u of e)u!==null&&(u instanceof HTMLElement?d.push(u):"value"in u&&u.value instanceof HTMLElement&&d.push(u.value));if(t!=null&&t.value)for(let u of t.value)d.push(u);for(let u of(i=o==null?void 0:o.querySelectorAll("html > *, body > *"))!=null?i:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(u.contains(b(l))||u.contains((s=(a=b(l))==null?void 0:a.getRootNode())==null?void 0:s.host)||d.some(w=>u.contains(w))||d.push(u));return d}return{resolveContainers:r,contains(i){return r().some(a=>a.contains(i))},mainTreeNodeRef:l,MainTreeNode(){return n!=null?null:E(ce,{features:fe.Hidden,ref:l})}}}let Ie=Symbol("ForcePortalRootContext");function Bt(){return k(Ie,!1)}let Fe=I({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return J(Ie,e.force),()=>{let{force:l,...o}=e;return B({theirProps:o,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}}),He=Symbol("StackContext");var pe=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(pe||{});function jt(){return k(He,()=>{})}function Wt({type:e,enabled:t,element:n,onUpdate:l}){let o=jt();function r(...i){l==null||l(...i),o(...i)}N(()=>{X(t,(i,a)=>{i?r(0,e,n):a===!0&&r(1,e,n)},{immediate:!0,flush:"sync"})}),D(()=>{t.value&&r(1,e,n)}),J(He,r)}function Ut(e){let t=j(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}const me=new WeakMap;function qt(e){var t;return(t=me.get(e))!=null?t:0}function Se(e,t){let n=t(qt(e));return n<=0?me.delete(e):me.set(e,n),n}let Vt=I({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let l=h(null),o=m(()=>j(l)),r=Bt(),i=k(Be,null),a=h(r===!0||i==null?Ut(l.value):i.resolveTarget());a.value&&Se(a.value,f=>f+1);let s=h(!1);N(()=>{s.value=!0}),R(()=>{r||i!=null&&(a.value=i.resolveTarget())});let d=k(ge,null),u=!1,w=ot();return X(l,()=>{if(u||!d)return;let f=b(l);f&&(D(d.register(f),w),u=!0)}),D(()=>{var f,p;let v=(f=o.value)==null?void 0:f.getElementById("headlessui-portal-root");!v||a.value!==v||Se(a.value,x=>x-1)||a.value.children.length>0||(p=a.value.parentElement)==null||p.removeChild(a.value)}),()=>{if(!s.value||a.value===null)return null;let f={ref:l,"data-headlessui-portal":""};return E(nt,{to:a.value},B({ourProps:f,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),ge=Symbol("PortalParentContext");function Gt(){let e=k(ge,null),t=h([]);function n(r){return t.value.push(r),e&&e.register(r),()=>l(r)}function l(r){let i=t.value.indexOf(r);i!==-1&&t.value.splice(i,1),e&&e.unregister(r)}let o={register:n,unregister:l,portals:t};return[t,I({name:"PortalWrapper",setup(r,{slots:i}){return J(ge,o),()=>{var a;return(a=i.default)==null?void 0:a.call(i)}}})]}let Be=Symbol("PortalGroupContext"),Kt=I({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let l=lt({resolveTarget(){return e.target}});return J(Be,l),()=>{let{target:o,...r}=e;return B({theirProps:r,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}});var Yt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Yt||{});let he=Symbol("DialogContext");function je(e){let t=k(he,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,je),n}return t}let ne="DC8F892D-2EBD-447C-A4C8-A03058436FF4",zt=I({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ne},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:o}){var r,i;let a=(r=e.id)!=null?r:`headlessui-dialog-${Pe()}`,s=h(!1);N(()=>{s.value=!0});let d=!1,u=m(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(d||(d=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),w=h(0),f=$t(),p=m(()=>e.open===ne&&f!==null?(f.value&G.Open)===G.Open:e.open),v=h(null),x=m(()=>j(v));if(o({el:v,$el:v}),!(e.open!==ne||f!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof p.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${p.value===ne?void 0:e.open}`);let _=m(()=>s.value&&p.value?0:1),W=m(()=>_.value===0),H=m(()=>w.value>1),xe=k(he,null)!==null,[We,Ue]=Gt(),{resolveContainers:se,mainTreeNodeRef:Ee,MainTreeNode:qe}=Ht({portals:We,defaultContainers:[m(()=>{var g;return(g=U.panelRef.value)!=null?g:v.value})]}),Ve=m(()=>H.value?"parent":"leaf"),Le=m(()=>f!==null?(f.value&G.Closing)===G.Closing:!1),Ge=m(()=>xe||Le.value?!1:W.value),Ke=m(()=>{var g,y,$;return($=Array.from((y=(g=x.value)==null?void 0:g.querySelectorAll("body > *"))!=null?y:[]).find(T=>T.id==="headlessui-portal-root"?!1:T.contains(b(Ee))&&T instanceof HTMLElement))!=null?$:null});Te(Ke,Ge);let Ye=m(()=>H.value?!0:W.value),ze=m(()=>{var g,y,$;return($=Array.from((y=(g=x.value)==null?void 0:g.querySelectorAll("[data-headlessui-portal]"))!=null?y:[]).find(T=>T.contains(b(Ee))&&T instanceof HTMLElement))!=null?$:null});Te(ze,Ye),Wt({type:"Dialog",enabled:m(()=>_.value===0),element:v,onUpdate:(g,y)=>{if(y==="Dialog")return z(g,{[pe.Add]:()=>w.value+=1,[pe.Remove]:()=>w.value-=1})}});let Xe=ut({name:"DialogDescription",slot:m(()=>({open:p.value}))}),Q=h(null),U={titleId:Q,panelRef:h(null),dialogState:_,setTitleId(g){Q.value!==g&&(Q.value=g)},close(){t("close",!1)}};J(he,U);let Je=m(()=>!(!W.value||H.value));Lt(se,(g,y)=>{g.preventDefault(),U.close(),rt(()=>y==null?void 0:y.focus())},Je);let Qe=m(()=>!(H.value||_.value!==0));Me((i=x.value)==null?void 0:i.defaultView,"keydown",g=>{Qe.value&&(g.defaultPrevented||g.key===dt.Escape&&(g.preventDefault(),g.stopPropagation(),U.close()))});let Ze=m(()=>!(Le.value||_.value!==0||xe));return It(x,Ze,g=>{var y;return{containers:[...(y=g.containers)!=null?y:[],se]}}),R(g=>{if(_.value!==0)return;let y=b(v);if(!y)return;let $=new ResizeObserver(T=>{for(let ue of T){let Z=ue.target.getBoundingClientRect();Z.x===0&&Z.y===0&&Z.width===0&&Z.height===0&&U.close()}});$.observe(y),g(()=>$.disconnect())}),()=>{let{open:g,initialFocus:y,...$}=e,T={...n,ref:v,id:a,role:u.value,"aria-modal":_.value===0?!0:void 0,"aria-labelledby":Q.value,"aria-describedby":Xe.value},ue={open:_.value===0};return E(Fe,{force:!0},()=>[E(Vt,()=>E(Kt,{target:v.value},()=>E(Fe,{force:!1},()=>E(q,{initialFocus:y,containers:se,features:W.value?z(Ve.value,{parent:q.features.RestoreFocus,leaf:q.features.All&~q.features.FocusLock}):q.features.None},()=>E(Ue,{},()=>B({ourProps:T,theirProps:{...$,...n},slot:ue,attrs:n,slots:l,visible:_.value===0,features:_e.RenderStrategy|_e.Static,name:"Dialog"})))))),E(qe)])}}}),Xt=I({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:l}){var o;let r=(o=e.id)!=null?o:`headlessui-dialog-panel-${Pe()}`,i=je("DialogPanel");l({el:i.panelRef,$el:i.panelRef});function a(s){s.stopPropagation()}return()=>{let{...s}=e,d={id:r,ref:i.panelRef,onClick:a};return B({ourProps:d,theirProps:s,slot:{open:i.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}});const we=""+new URL("lightLogo.MbkgtGiF.svg",import.meta.url).href;function Jt(e,t){return F(),S("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function Qt(e,t){return F(),S("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})])}const Zt={class:"max-w-screen mx-auto rounded-xl mt-32 mb-6 border-[--ui-light-border-color]"},en={class:"max-w-6xl mx-auto space-y-16 px-6 py-16 text-gray-600 2xl:px-0"},tn={class:"flex flex-wrap items-center justify-between gap-4 border-b pb-8 border-[--ui-light-border-color]"},nn={class:"grid grid-cols-2 gap-6 sm:grid-cols-4"},ln={class:"font-bold text-gray-950"},on={class:"mt-4 list-inside space-y-4"},rn={__name:"Footer",setup(e){const t=[{title:"About",links:[{text:"Feature Overview",to:"/features"},{text:"Security",to:"/security"}]},{title:"Company",links:[{text:"About",to:"/"},{text:"Privacy Policy",to:"/privacy"},{text:"Terms of Service",to:"/terms"}]},{title:"Whitelabel",links:[{text:"Whitelabel Services",to:"/"}]},{title:"Contact",links:[{text:"Email",to:"/contact"}]}];return(n,l)=>{const o=at("router-link");return F(),S("footer",Zt,[c("div",en,[c("div",tn,[L(o,{to:"/"},{default:O(()=>l[0]||(l[0]=[c("img",{class:"w-32",src:we},null,-1)])),_:1})]),c("div",nn,[(F(),S(Y,null,re(t,r=>c("div",{key:r.title},[c("span",ln,ae(r.title),1),c("ul",on,[(F(!0),S(Y,null,re(r.links,i=>(F(),S("li",{key:i.text},[L(o,{to:i.to,class:"text-sm text-gray-600 hover:text-primary-600"},{default:O(()=>[le(ae(i.text),1)]),_:2},1032,["to"])]))),128))])])),64))])])])}}},an={class:"max-w-screen"},sn={class:"bg-white"},un={class:"absolute inset-x-0 top-0 z-50"},dn={class:"flex items-center max-w-full justify-between p-6 lg:px-8","aria-label":"Global"},cn={class:"flex lg:flex-1"},fn={class:"flex lg:hidden"},vn={class:"hidden lg:flex lg:gap-x-12"},pn={class:"flex items-center justify-between"},mn={class:"mt-6 flow-root"},gn={class:"-my-6 divide-y divide-gray-500/10"},hn={class:"space-y-2 py-6 flex flex-col"},wn={__name:"default",setup(e){const t=[{name:"About",route:"/"},{name:"Features",route:"/features"},{name:"Contact",route:"/contact"}],n=h(!1);return(l,o)=>{const r=et,i=it;return F(),S("div",an,[c("div",sn,[c("header",un,[c("nav",dn,[c("div",cn,[L(r,{to:"/",class:"-m-1.5 p-1.5"},{default:O(()=>o[3]||(o[3]=[c("span",{class:"sr-only"},"Edith Medical",-1),c("img",{class:"h-8 w-auto",src:we,alt:""},null,-1)])),_:1})]),c("div",fn,[c("button",{type:"button",class:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",onClick:o[0]||(o[0]=a=>n.value=!0)},[o[4]||(o[4]=c("span",{class:"sr-only"},"Open main menu",-1)),L(ee(Jt),{class:"h-6 w-6","aria-hidden":"true"})])]),c("div",vn,[(F(),S(Y,null,re(t,a=>L(r,{key:a.name,to:a.route,class:"text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"},{default:O(()=>[le(ae(a.name),1)]),_:2},1032,["to"])),64))]),o[5]||(o[5]=c("div",{class:"hidden lg:flex lg:flex-1 lg:justify-end"},[c("a",{href:"https://app.edithmedical.com",class:"text-sm font-semibold leading-6 text-gray-900"},[le(" Log in "),c("span",{"aria-hidden":"true"},"→")])],-1))]),L(ee(zt),{class:"lg:hidden",onClose:o[2]||(o[2]=a=>n.value=!1),open:n.value},{default:O(()=>[o[9]||(o[9]=c("div",{class:"fixed inset-0 z-50"},null,-1)),L(ee(Xt),{class:"fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"},{default:O(()=>[c("div",pn,[o[7]||(o[7]=c("a",{href:"#",class:"-m-1.5 p-1.5"},[c("span",{class:"sr-only"},"Your Company"),c("img",{class:"h-8 w-auto",src:we,alt:""})],-1)),c("button",{type:"button",class:"-m-2.5 rounded-md p-2.5 text-gray-700",onClick:o[1]||(o[1]=a=>n.value=!1)},[o[6]||(o[6]=c("span",{class:"sr-only"},"Close menu",-1)),L(ee(Qt),{class:"h-6 w-6","aria-hidden":"true"})])]),c("div",mn,[c("div",gn,[c("div",hn,[(F(),S(Y,null,re(t,a=>L(r,{key:a.name,to:a.route,class:"text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 hover:bg-gray-50"},{default:O(()=>[le(ae(a.name),1)]),_:2},1032,["to"])),64))]),o[8]||(o[8]=c("div",{class:"py-6"},[c("a",{href:"https://app.edithmedical.com",class:"-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},"Log in")],-1))])])]),_:1})]),_:1},8,["open"])]),L(i),L(rn)])])}}},_n=st(wn,[["__scopeId","data-v-43075b7a"]]);export{_n as default};