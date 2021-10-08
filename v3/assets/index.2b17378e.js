import{c as U,i as M,t as D,n as R,s as $,m as q,u as z,q as H,a as K}from"./use-translate.e667ce10.js";import{w as I}from"./with-install.feb19484.js";import{u as L}from"./index.2a9a1046.js";import{z as A,D as b,C as E,e as o,E as Q,j as Y,v as Z,A as G,Q as J,r as X,o as ee,a as te,w as d,B as t,d as oe,h as le,t as ne,F as ae}from"./vue-libs.1dda7261.js";import{u as ue}from"./useChildren.ed284d59.js";import{u as ie}from"./index.0749451f.js";import{u as se}from"./index.904c4b4d.js";import{u as re}from"./index.eddf1708.js";import{u as de}from"./use-expose.9b0dd301.js";import{C as S}from"./index.5a14a991.js";import{I as pe}from"./index.472ff4df.js";import{P as ce}from"./index.13873f42.js";import{u as me}from"./useParent.5e3d1dfb.js";import{S as N}from"./index.408eb0fd.js";import{B as fe}from"./index.d91601ec.js";import"./utils.39620306.js";import"./use-route.dfb37f70.js";import"./interceptor.b759bdc5.js";import"./use-touch.b0c07ae6.js";import"./use-lazy-render.e44d61c0.js";import"./on-popup-reopen.1b0dc8ad.js";import"./index.57f9d610.js";import"./index.ae867a8e.js";import"./index.5b10c1d9.js";import"./constant.4d85ecb9.js";const[F,P]=U("dropdown-menu"),ve={overlay:D,zIndex:R,duration:$(.2),direction:q("down"),activeColor:String,closeOnClickOutside:D,closeOnClickOverlay:D},W=Symbol(F);var Ce=A({name:F,props:ve,setup(a,{slots:u}){const p=b(),i=b(),m=b(0),{children:s,linkChildren:c}=ue(W),x=ie(p),v=E(()=>s.some(e=>e.state.showWrapper)),O=E(()=>{if(v.value&&M(a.zIndex))return{zIndex:+a.zIndex+1}}),V=()=>{a.closeOnClickOutside&&s.forEach(e=>{e.toggle(!1)})},n=()=>{if(i.value){const e=re(i);a.direction==="down"?m.value=e.bottom:m.value=window.innerHeight-e.top}},w=()=>{v.value&&n()},l=e=>{s.forEach((r,f)=>{f===e?(n(),r.toggle()):r.state.showPopup&&r.toggle(!1,{immediate:!0})})},j=(e,r)=>{const{showPopup:f}=e.state,{disabled:g,titleClass:y}=e;return o("div",{role:"button",tabindex:g?-1:0,class:P("item",{disabled:g}),onClick:()=>{g||l(r)}},[o("span",{class:[P("title",{down:f===(a.direction==="down"),active:f}),y],style:{color:f?a.activeColor:""}},[o("div",{class:"van-ellipsis"},[e.renderTitle()])])])};return c({props:a,offset:m}),L(p,V),se("scroll",w,{target:x}),()=>{var e;return o("div",{ref:p,class:P()},[o("div",{ref:i,style:O.value,class:P("bar",{opened:v.value})},[s.map(j)]),(e=u.default)==null?void 0:e.call(u)])}}});const h=I(Ce);function xe(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!G(a)}const[we,B]=U("dropdown-item"),be={title:String,disabled:Boolean,teleport:[String,Object],lazyRender:D,modelValue:z,titleClass:z,options:{type:Array,default:()=>[]}};var Ve=A({name:we,props:be,emits:["open","opened","close","closed","change","update:modelValue"],setup(a,{emit:u,slots:p}){const i=Q({showPopup:!1,transition:!0,showWrapper:!1}),{parent:m}=me(W);if(!m)return;const s=e=>()=>u(e),c=s("open"),x=s("close"),v=s("opened"),O=()=>{i.showWrapper=!1,u("closed")},V=e=>{a.teleport&&e.stopPropagation()},n=(e=!i.showPopup,r={})=>{e!==i.showPopup&&(i.showPopup=e,i.transition=!r.immediate,e&&(i.showWrapper=!0))},w=()=>{if(p.title)return p.title();if(a.title)return a.title;const e=a.options.find(r=>r.value===a.modelValue);return e?e.text:""},l=e=>{const{activeColor:r}=m.props,f=e.value===a.modelValue,g=()=>{i.showPopup=!1,e.value!==a.modelValue&&(u("update:modelValue",e.value),u("change",e.value))},y=()=>{if(f)return o(pe,{class:B("icon"),color:r,name:"success"},null)};return o(S,{clickable:!0,key:e.value,icon:e.icon,title:e.text,class:B("option",{active:f}),style:{color:f?r:""},onClick:g},{value:y})},j=()=>{const{offset:e}=m,{zIndex:r,overlay:f,duration:g,direction:y,closeOnClickOverlay:_}=m.props,T=H(r);return y==="down"?T.top=`${e.value}px`:T.bottom=`${e.value}px`,Y(o("div",{style:T,class:B([y]),onClick:V},[o(ce,{show:i.showPopup,"onUpdate:show":k=>i.showPopup=k,class:B("content"),overlay:f,position:y==="down"?"top":"bottom",duration:i.transition?g:0,lazyRender:a.lazyRender,overlayStyle:{position:"absolute"},closeOnClickOverlay:_,onOpen:c,onClose:x,onOpened:v,onClosed:O},{default:()=>{var k;return[a.options.map(l),(k=p.default)==null?void 0:k.call(p)]}})]),[[Z,i.showWrapper]])};return de({state:i,toggle:n,renderTitle:w}),()=>{if(a.teleport){let e;return o(J,{to:a.teleport},xe(e=j())?e:{default:()=>[e]})}return j()}}});const C=I(Ve),ge={style:{padding:"5px 16px"}},Le=A({setup(a){const u=K({"zh-CN":{disableMenu:"\u7981\u7528\u83DC\u5355",switchTitle1:"\u5305\u90AE",switchTitle2:"\u56E2\u8D2D",itemTitle:"\u7B5B\u9009",expandDirection:"\u5411\u4E0A\u5C55\u5F00",customContent:"\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9",customActiveColor:"\u81EA\u5B9A\u4E49\u9009\u4E2D\u6001\u989C\u8272",option1:[{text:"\u5168\u90E8\u5546\u54C1",value:0},{text:"\u65B0\u6B3E\u5546\u54C1",value:1},{text:"\u6D3B\u52A8\u5546\u54C1",value:2}],option2:[{text:"\u9ED8\u8BA4\u6392\u5E8F",value:"a"},{text:"\u597D\u8BC4\u6392\u5E8F",value:"b"},{text:"\u9500\u91CF\u6392\u5E8F",value:"c"}]},"en-US":{disableMenu:"Disable Menu",switchTitle1:"Title",switchTitle2:"Title",itemTitle:"Title",expandDirection:"Expand Direction",customContent:"Custom Content",customActiveColor:"Custom Active Color",option1:[{text:"Option1",value:0},{text:"Option2",value:1},{text:"Option3",value:2}],option2:[{text:"Option A",value:"a"},{text:"Option B",value:"b"},{text:"Option C",value:"c"}]}}),p=b(),i=b(!0),m=b(!1),s=b(0),c=b("a"),x=E(()=>u("option1")),v=E(()=>u("option2")),O=()=>{var V;(V=p.value)==null||V.toggle()};return(V,n)=>{const w=X("demo-block");return ee(),te(ae,null,[o(w,{title:t(u)("basicUsage")},{default:d(()=>[o(t(h),null,{default:d(()=>[o(t(C),{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=l=>s.value=l),options:t(x)},null,8,["modelValue","options"]),o(t(C),{modelValue:c.value,"onUpdate:modelValue":n[1]||(n[1]=l=>c.value=l),options:t(v)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),o(w,{title:t(u)("customContent")},{default:d(()=>[o(t(h),null,{default:d(()=>[o(t(C),{modelValue:s.value,"onUpdate:modelValue":n[2]||(n[2]=l=>s.value=l),options:t(x)},null,8,["modelValue","options"]),o(t(C),{title:t(u)("itemTitle"),ref:(l,j)=>{j.item=l,p.value=l}},{default:d(()=>[o(t(S),{center:"",title:t(u)("switchTitle1")},{"right-icon":d(()=>[o(t(N),{modelValue:i.value,"onUpdate:modelValue":n[3]||(n[3]=l=>i.value=l),size:"24","active-color":"#ee0a24"},null,8,["modelValue"])]),_:1},8,["title"]),o(t(S),{center:"",title:t(u)("switchTitle2")},{"right-icon":d(()=>[o(t(N),{modelValue:m.value,"onUpdate:modelValue":n[4]||(n[4]=l=>m.value=l),size:"24","active-color":"#ee0a24"},null,8,["modelValue"])]),_:1},8,["title"]),oe("div",ge,[o(t(fe),{type:"danger",block:"",round:"",style:{height:"40px"},onClick:O},{default:d(()=>[le(ne(t(u)("confirm")),1)]),_:1})])]),_:1},8,["title"])]),_:1})]),_:1},8,["title"]),o(w,{title:t(u)("customActiveColor")},{default:d(()=>[o(t(h),{"active-color":"#1989fa"},{default:d(()=>[o(t(C),{modelValue:s.value,"onUpdate:modelValue":n[5]||(n[5]=l=>s.value=l),options:t(x)},null,8,["modelValue","options"]),o(t(C),{modelValue:c.value,"onUpdate:modelValue":n[6]||(n[6]=l=>c.value=l),options:t(v)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),o(w,{title:t(u)("expandDirection")},{default:d(()=>[o(t(h),{direction:"up"},{default:d(()=>[o(t(C),{modelValue:s.value,"onUpdate:modelValue":n[7]||(n[7]=l=>s.value=l),options:t(x)},null,8,["modelValue","options"]),o(t(C),{modelValue:c.value,"onUpdate:modelValue":n[8]||(n[8]=l=>c.value=l),options:t(v)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),o(w,{title:t(u)("disableMenu")},{default:d(()=>[o(t(h),null,{default:d(()=>[o(t(C),{modelValue:s.value,"onUpdate:modelValue":n[9]||(n[9]=l=>s.value=l),disabled:"",options:t(x)},null,8,["modelValue","options"]),o(t(C),{modelValue:c.value,"onUpdate:modelValue":n[10]||(n[10]=l=>c.value=l),disabled:"",options:t(v)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"])],64)}}});export{Le as default};
