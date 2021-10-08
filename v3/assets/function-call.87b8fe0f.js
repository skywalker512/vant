import{c as H,e as u,n as N,u as F,m as R,t as O,r as E,g as I,w as z,b as U}from"./use-translate.e667ce10.js";import{w as K}from"./with-install.feb19484.js";import{m as L,u as M}from"./mount-component.553013ae.js";import{a as V,b as W}from"./constant.4d85ecb9.js";import{c as _}from"./interceptor.b759bdc5.js";import{a as $,p as q,P as G}from"./index.13873f42.js";import{B as v}from"./index.d91601ec.js";import{b as x,a as J}from"./index.bc27da8f.js";import{z as Q,E as X,e as o,I as y}from"./vue-libs.1dda7261.js";const[Y,a,g]=H("dialog"),Z=[...$,"transition","closeOnPopstate"];var P=Q({name:Y,props:u({},q,{title:String,theme:String,width:N,message:[String,Function],callback:Function,allowHtml:Boolean,className:F,transition:R("van-dialog-bounce"),messageAlign:String,closeOnPopstate:O,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showConfirmButton:O,closeOnClickOverlay:Boolean}),emits:["confirm","cancel","update:show"],setup(e,{emit:i,slots:l}){const s=X({confirm:!1,cancel:!1}),C=t=>i("update:show",t),h=t=>{C(!1),e.callback&&e.callback(t)},w=t=>()=>{!e.show||(i(t),e.beforeClose?(s[t]=!0,_({interceptor:e.beforeClose,args:[t],done(){h(t),s[t]=!1},canceled(){s[t]=!1}})):h(t))},b=w("cancel"),p=w("confirm"),k=()=>{const t=l.title?l.title():e.title;if(t)return o("div",{class:a("header",{isolated:!e.message&&!l.default})},[t])},S=t=>{const{message:c,allowHtml:m,messageAlign:r}=e,d=a("message",{"has-title":t,[r]:r}),B=z(c)?c():c;return m&&typeof B=="string"?o("div",{class:d,innerHTML:B},null):o("div",{class:d},[B])},T=()=>{if(l.default)return o("div",{class:a("content")},[l.default()]);const{title:t,message:c,allowHtml:m}=e;if(c){const r=!!(t||l.title);return o("div",{key:m?1:0,class:a("content",{isolated:!r})},[S(r)])}},j=()=>o("div",{class:[W,a("footer")]},[e.showCancelButton&&o(v,{size:"large",text:e.cancelButtonText||g("cancel"),class:a("cancel"),style:{color:e.cancelButtonColor},loading:s.cancel,onClick:b},null),e.showConfirmButton&&o(v,{size:"large",text:e.confirmButtonText||g("confirm"),class:[a("confirm"),{[V]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:s.confirm,onClick:p},null)]),D=()=>o(J,{class:a("footer")},{default:()=>[e.showCancelButton&&o(x,{type:"warning",text:e.cancelButtonText||g("cancel"),class:a("cancel"),color:e.cancelButtonColor,loading:s.cancel,onClick:b},null),e.showConfirmButton&&o(x,{type:"danger",text:e.confirmButtonText||g("confirm"),class:a("confirm"),color:e.confirmButtonColor,loading:s.confirm,onClick:p},null)]}),A=()=>l.footer?l.footer():e.theme==="round-button"?D():j();return()=>{const{width:t,title:c,theme:m,message:r,className:d}=e;return o(G,y({role:"dialog",class:[a([m]),d],style:{width:I(t)},"aria-labelledby":c||r},E(e,Z),{"onUpdate:show":C}),{default:()=>[k(),T(),A()]})}}});let f;function ee(){({instance:f}=L({setup(){const{state:i,toggle:l}=M();return()=>o(P,y(i,{"onUpdate:show":l}),null)}}))}function n(e){return U?new Promise((i,l)=>{f||ee(),f.open(u({},n.currentOptions,e,{callback:s=>{(s==="confirm"?i:l)(s)}}))}):Promise.resolve()}n.defaultOptions={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};n.currentOptions=u({},n.defaultOptions);n.alert=n;n.confirm=e=>n(u({showCancelButton:!0},e));n.close=()=>{f&&f.toggle(!1)};n.setDefaultOptions=e=>{u(n.currentOptions,e)};n.resetDefaultOptions=()=>{n.currentOptions=u({},n.defaultOptions)};n.Component=K(P);n.install=e=>{e.use(n.Component),e.config.globalProperties.$dialog=n};export{n as D};
