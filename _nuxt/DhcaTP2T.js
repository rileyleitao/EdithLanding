import{r as b,e as g,f as E,g as ne,p as K,h as C,i as oe,j as T,k as M,l as re,m as H,F as ie,u as ue,n as de,c as ce,a as n,q as me,s as h,v as x,x as pe,b as S,w as L,o as fe,y as U,d as _,t as ge}from"./ClKTZemk.js";import{o as P,i as A,A as N,k as be,f as ye,E as ve,u as he,T as xe,a as O}from"./I6PVyNjQ.js";function we(e,t,a){let l=b(a==null?void 0:a.value),o=g(()=>e.value!==void 0);return[g(()=>o.value?e.value:l.value),function(r){return o.value||(l.value=r),t==null?void 0:t(r)}]}function D(e,t){if(e)return e;let a=t??"button";if(typeof a=="string"&&a.toLowerCase()==="button")return"button"}function ke(e,t){let a=b(D(e.value.type,e.value.as));return E(()=>{a.value=D(e.value.type,e.value.as)}),ne(()=>{var l;a.value||P(t)&&P(t)instanceof HTMLButtonElement&&!((l=P(t))!=null&&l.hasAttribute("type"))&&(a.value="button")}),a}function Se(e){var t,a;let l=(t=e==null?void 0:e.form)!=null?t:e.closest("form");if(l){for(let o of l.elements)if(o!==e&&(o.tagName==="INPUT"&&o.type==="submit"||o.tagName==="BUTTON"&&o.type==="submit"||o.nodeName==="INPUT"&&o.type==="image")){o.click();return}(a=l.requestSubmit)==null||a.call(l)}}let $=Symbol("LabelContext");function q(){let e=M($,null);if(e===null){let t=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,q),t}return e}function Le({slot:e={},name:t="Label",props:a={}}={}){let l=b([]);function o(r){return l.value.push(r),()=>{let u=l.value.indexOf(r);u!==-1&&l.value.splice(u,1)}}return K($,{register:o,slot:e,name:t,props:a}),g(()=>l.value.length>0?l.value.join(" "):void 0)}let Te=C({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{slots:t,attrs:a}){var l;let o=(l=e.id)!=null?l:`headlessui-label-${A()}`,r=q();return E(()=>oe(r.register(o))),()=>{let{name:u="Label",slot:s={},props:m={}}=r,{passive:i,...f}=e,p={...Object.entries(m).reduce((y,[V,j])=>Object.assign(y,{[V]:T(j)}),{}),id:o};return i&&(delete p.onClick,delete p.htmlFor,delete f.onClick),N({ourProps:p,theirProps:f,slot:s,attrs:a,slots:t,name:u})}}}),I=Symbol("GroupContext"),Pe=C({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:t,attrs:a}){let l=b(null),o=Le({name:"SwitchLabel",props:{htmlFor:g(()=>{var u;return(u=l.value)==null?void 0:u.id}),onClick(u){l.value&&(u.currentTarget.tagName==="LABEL"&&u.preventDefault(),l.value.click(),l.value.focus({preventScroll:!0}))}}}),r=be({name:"SwitchDescription"});return K(I,{switchRef:l,labelledby:o,describedby:r}),()=>N({theirProps:e,ourProps:{},slot:{},slots:t,attrs:a,name:"SwitchGroup"})}}),Ve=C({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(e,{emit:t,attrs:a,slots:l,expose:o}){var r;let u=(r=e.id)!=null?r:`headlessui-switch-${A()}`,s=M(I,null),[m,i]=we(g(()=>e.modelValue),d=>t("update:modelValue",d),g(()=>e.defaultChecked));function f(){i(!m.value)}let p=b(null),y=s===null?p:s.switchRef,V=ke(g(()=>({as:e.as,type:a.type})),y);o({el:y,$el:y});function j(d){d.preventDefault(),f()}function ee(d){d.key===O.Space?(d.preventDefault(),f()):d.key===O.Enter&&Se(d.currentTarget)}function te(d){d.preventDefault()}let k=g(()=>{var d,v;return(v=(d=P(y))==null?void 0:d.closest)==null?void 0:v.call(d,"form")});return E(()=>{re([k],()=>{if(!k.value||e.defaultChecked===void 0)return;function d(){i(e.defaultChecked)}return k.value.addEventListener("reset",d),()=>{var v;(v=k.value)==null||v.removeEventListener("reset",d)}},{immediate:!0})}),()=>{let{name:d,value:v,form:se,tabIndex:R,...B}=e,le={checked:m.value},ae={id:u,ref:y,role:"switch",type:V.value,tabIndex:R===-1?0:R,"aria-checked":m.value,"aria-labelledby":s==null?void 0:s.labelledby.value,"aria-describedby":s==null?void 0:s.describedby.value,onClick:j,onKeyup:ee,onKeypress:te};return H(ie,[d!=null&&m.value!=null?H(ye,ve({features:he.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:m.value,form:se,disabled:B.disabled,name:d,value:v})):null,N({ourProps:ae,theirProps:{...a,...xe(B,["modelValue","defaultChecked"])},slot:le,attrs:a,slots:l,name:"Switch"})])}}}),je=Te;class w{constructor(t=0,a="Network Error"){this.status=t,this.text=a}}const Ee=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},c={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Ee()},F=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Ce=(e,t="https://api.emailjs.com")=>{if(!e)return;const a=F(e);c.publicKey=a.publicKey,c.blockHeadless=a.blockHeadless,c.storageProvider=a.storageProvider,c.blockList=a.blockList,c.limitRate=a.limitRate,c.origin=a.origin||t},z=async(e,t,a={})=>{const l=await fetch(c.origin+e,{method:"POST",headers:a,body:t}),o=await l.text(),r=new w(l.status,o);if(l.ok)return r;throw r},G=(e,t,a)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||typeof a!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Ne=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},J=e=>e.webdriver||!e.languages||e.languages.length===0,Q=()=>new w(451,"Unavailable For Headless Browser"),Fe=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},Re=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},Be=(e,t)=>e instanceof FormData?e.get(t):e[t],W=(e,t)=>{if(Re(e))return!1;Fe(e.list,e.watchVariable);const a=Be(t,e.watchVariable);return typeof a!="string"?!1:e.list.includes(a)},Y=()=>new w(403,"Forbidden"),He=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},Ue=async(e,t,a)=>{const l=Number(await a.get(e)||0);return t-Date.now()+l},X=async(e,t,a)=>{if(!t.throttle||!a)return!1;He(t.throttle,t.id);const l=t.id||e;return await Ue(l,t.throttle,a)>0?!0:(await a.set(l,Date.now().toString()),!1)},Z=()=>new w(429,"Too Many Requests"),_e=async(e,t,a,l)=>{const o=F(l),r=o.publicKey||c.publicKey,u=o.blockHeadless||c.blockHeadless,s=o.storageProvider||c.storageProvider,m={...c.blockList,...o.blockList},i={...c.limitRate,...o.limitRate};return u&&J(navigator)?Promise.reject(Q()):(G(r,e,t),Ne(a),a&&W(m,a)?Promise.reject(Y()):await X(location.pathname,i,s)?Promise.reject(Z()):z("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:r,service_id:e,template_id:t,template_params:a}),{"Content-type":"application/json"}))},Oe=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},De=e=>typeof e=="string"?document.querySelector(e):e,Ke=async(e,t,a,l)=>{const o=F(l),r=o.publicKey||c.publicKey,u=o.blockHeadless||c.blockHeadless,s=c.storageProvider||o.storageProvider,m={...c.blockList,...o.blockList},i={...c.limitRate,...o.limitRate};if(u&&J(navigator))return Promise.reject(Q());const f=De(a);G(r,e,t),Oe(f);const p=new FormData(f);return W(m,p)?Promise.reject(Y()):await X(location.pathname,i,s)?Promise.reject(Z()):(p.append("lib_version","4.4.1"),p.append("service_id",e),p.append("template_id",t),p.append("user_id",r),z("/api/v1.0/email/send-form",p))},Me={init:Ce,send:_e,sendForm:Ke,EmailJSResponseStatus:w},Ae={class:"flex items-center justify-center min-h-screen"},$e={class:"lg:px-8 lg:"},qe={class:"isolate bg-white px-6 py-24 sm:py-32 lg:px-8"},Ie={class:"grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"},ze={class:"mt-2.5"},Ge={class:"mt-2.5"},Je={class:"sm:col-span-2"},Qe={class:"mt-2.5"},We={class:"sm:col-span-2"},Ye={class:"mt-2.5"},Xe={class:"sm:col-span-2"},Ze={class:"relative mt-2.5"},et={class:"absolute inset-y-0 left-0 flex items-center"},tt={class:"sm:col-span-2"},st={class:"mt-2.5"},lt={class:"flex h-6 items-center"},ot={__name:"Contact",setup(e){const t=b(!1),a=b(null),l=b({firstName:"",lastName:"",company:"",email:"",country:"US",phoneNumber:"",message:""}),o=()=>{for(const u in l.value)if(!l.value[u])return alert("Please fill in all fields and agree to the privacy policy."),!1;if(!t.value)return alert("Please agree to the privacy policy."),!1;r(),alert("Thanks for reaching out, we will be in touch shortly!")},r=()=>{const u=a.value;if(!u){console.error("Form reference is not available");return}Me.sendForm("service_956p55f","edith_contact",u,"KpTV--bRhodQ6FuNp").then(s=>{console.log("SUCCESS!",s.text)},s=>{console.log("FAILED...",s.text)})};return ue({title:"Edith Medical | Contact"}),(u,s)=>{const m=de("router-link");return fe(),ce("section",Ae,[n("div",$e,[n("div",qe,[s[20]||(s[20]=n("div",{class:"absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]","aria-hidden":"true"},null,-1)),s[21]||(s[21]=n("div",{class:"mx-auto max-w-2xl text-center"},[n("h2",{class:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"},"Contact"),n("p",{class:"mt-2 text-lg leading-8 text-gray-600"},"Feel free to contact us with any inquiries you may have.")],-1)),n("form",{ref_key:"form",ref:a,class:"mx-auto mt-16 max-w-xl sm:mt-20",onSubmit:me(o,["prevent"])},[n("div",Ie,[n("div",null,[s[8]||(s[8]=n("label",{for:"first-name",class:"block text-sm font-semibold leading-6 text-gray-900"},"First name",-1)),n("div",ze,[h(n("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>l.value.firstName=i),type:"text",name:"first-name",id:"first-name",autocomplete:"given-name",class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[x,l.value.firstName]])])]),n("div",null,[s[9]||(s[9]=n("label",{for:"last-name",class:"block text-sm font-semibold leading-6 text-gray-900"},"Last name",-1)),n("div",Ge,[h(n("input",{"onUpdate:modelValue":s[1]||(s[1]=i=>l.value.lastName=i),type:"text",name:"last-name",id:"last-name",autocomplete:"family-name",class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[x,l.value.lastName]])])]),n("div",Je,[s[10]||(s[10]=n("label",{for:"company",class:"block text-sm font-semibold leading-6 text-gray-900"},"Company",-1)),n("div",Qe,[h(n("input",{"onUpdate:modelValue":s[2]||(s[2]=i=>l.value.company=i),type:"text",name:"company",id:"company",autocomplete:"organization",class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[x,l.value.company]])])]),n("div",We,[s[11]||(s[11]=n("label",{for:"email",class:"block text-sm font-semibold leading-6 text-gray-900"},"Email",-1)),n("div",Ye,[h(n("input",{"onUpdate:modelValue":s[3]||(s[3]=i=>l.value.email=i),type:"email",name:"email",id:"email",autocomplete:"email",class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[x,l.value.email]])])]),n("div",Xe,[s[14]||(s[14]=n("label",{for:"phone-number",class:"block text-sm font-semibold leading-6 text-gray-900"},"Phone number",-1)),n("div",Ze,[n("div",et,[s[13]||(s[13]=n("label",{for:"country",class:"sr-only"},"Country",-1)),h(n("select",{"onUpdate:modelValue":s[4]||(s[4]=i=>l.value.country=i),id:"country",name:"country",class:"h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"},s[12]||(s[12]=[n("option",null,"US",-1),n("option",null,"CA",-1),n("option",null,"EU",-1)]),512),[[pe,l.value.country]])]),h(n("input",{"onUpdate:modelValue":s[5]||(s[5]=i=>l.value.phoneNumber=i),type:"tel",name:"phone-number",id:"phone-number",autocomplete:"tel",class:"block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[x,l.value.phoneNumber]])])]),n("div",tt,[s[15]||(s[15]=n("label",{for:"message",class:"block text-sm font-semibold leading-6 text-gray-900"},"Message",-1)),n("div",st,[h(n("textarea",{"onUpdate:modelValue":s[6]||(s[6]=i=>l.value.message=i),name:"message",id:"message",rows:"4",class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[x,l.value.message]])])]),S(T(Pe),{as:"div",class:"flex gap-x-4 sm:col-span-2"},{default:L(()=>[n("div",lt,[S(T(Ve),{modelValue:t.value,"onUpdate:modelValue":s[7]||(s[7]=i=>t.value=i),class:U([t.value?"bg-indigo-600":"bg-gray-200","flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"])},{default:L(()=>[s[16]||(s[16]=n("span",{class:"sr-only"},"Agree to policies",-1)),n("span",{"aria-hidden":"true",class:U([t.value?"translate-x-3.5":"translate-x-0","h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"])},null,2)]),_:1},8,["modelValue","class"])]),S(T(je),{class:"text-sm leading-6 text-gray-600"},{default:L(()=>[s[18]||(s[18]=_(" By selecting this, you agree to our "+ge(" ")+" ")),S(m,{to:"/privacy",class:"font-semibold text-indigo-600"},{default:L(()=>s[17]||(s[17]=[_("privacy policy")])),_:1})]),_:1})]),_:1})]),s[19]||(s[19]=n("div",{class:"mt-10"},[n("button",{type:"submit",class:"block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"Let's talk")],-1))],544)])])])}}};export{ot as default};
