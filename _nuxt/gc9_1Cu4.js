import{a0 as E,y as A,F as k,q as S,r as b,p as $,m as P}from"./P9h5Zw3F.js";function W(e){var t;if(e==null||e.value==null)return null;let o=(t=e.value.$el)!=null?t:e.value;return o instanceof Node?o:null}function v(e,t,...o){if(e in t){let r=t[e];return typeof r=="function"?r(...o):r}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,v),n}var H=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(H||{}),D=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(D||{});function N({visible:e=!0,features:t=0,ourProps:o,theirProps:n,...r}){var l;let a=j(n,o),u=Object.assign(r,{props:a});if(e||t&2&&a.static)return y(u);if(t&1){let d=(l=a.unmount)==null||l?0:1;return v(d,{0(){return null},1(){return y({...r,props:{...a,hidden:!0,style:{display:"none"}}})}})}return y(u)}function y({props:e,attrs:t,slots:o,slot:n,name:r}){var l,a;let{as:u,...d}=T(e,["unmount","static"]),s=(l=o.default)==null?void 0:l.call(o,n),m={};if(n){let f=!1,h=[];for(let[c,p]of Object.entries(n))typeof p=="boolean"&&(f=!0),p===!0&&h.push(c);f&&(m["data-headlessui-state"]=h.join(" "))}if(u==="template"){if(s=w(s??[]),Object.keys(d).length>0||Object.keys(t).length>0){let[f,...h]=s??[];if(!U(f)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(d).concat(Object.keys(t)).map(i=>i.trim()).filter((i,g,O)=>O.indexOf(i)===g).sort((i,g)=>i.localeCompare(g)).map(i=>`  - ${i}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(i=>`  - ${i}`).join(`
`)].join(`
`));let c=j((a=f.props)!=null?a:{},d,m),p=E(f,c,!0);for(let i in c)i.startsWith("on")&&(p.props||(p.props={}),p.props[i]=c[i]);return p}return Array.isArray(s)&&s.length===1?s[0]:s}return A(u,Object.assign({},d,m),{default:()=>s})}function w(e){return e.flatMap(t=>t.type===k?w(t.children):[t])}function j(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},o={};for(let n of e)for(let r in n)r.startsWith("on")&&typeof n[r]=="function"?(o[r]!=null||(o[r]=[]),o[r].push(n[r])):t[r]=n[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(o).map(n=>[n,void 0])));for(let n in o)Object.assign(t,{[n](r,...l){let a=o[n];for(let u of a){if(r instanceof Event&&r.defaultPrevented)return;u(r,...l)}}});return t}function B(e){let t=Object.assign({},e);for(let o in t)t[o]===void 0&&delete t[o];return t}function T(e,t=[]){let o=Object.assign({},e);for(let n of t)n in o&&delete o[n];return o}function U(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var x=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(x||{});let L=S({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:o}){return()=>{var n;let{features:r,...l}=e,a={"aria-hidden":(r&2)===2?!0:(n=l["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return N({ourProps:a,theirProps:l,slot:{},attrs:o,slots:t,name:"Hidden"})}}});var R=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(R||{});let F=Symbol("DescriptionContext");function q({slot:e=b({}),name:t="Description",props:o={}}={}){let n=b([]);function r(l){return n.value.push(l),()=>{let a=n.value.indexOf(l);a!==-1&&n.value.splice(a,1)}}return $(F,{register:r,slot:e,name:t,props:o}),P(()=>n.value.length>0?n.value.join(" "):void 0)}export{N as A,B as E,H as N,T,R as a,v as b,L as f,q as k,W as o,x as u};
