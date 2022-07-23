import{c as R,e as w,p as I,l as L,a as O}from"./use-translate.94d81043.js";import{m as A,t as K,w as j}from"./with-install.dd5596ee.js";import{f as x,F as q}from"./index.d546301d.js";import{u as z}from"./use-id.e5fd672f.js";import{u as $}from"./use-expose.771ababc.js";import{A as D,x as d,e as t,B as G,r as H,o as J,a as M,w as s,C as o,d as F,t as Q,F as W}from"./vue-libs.84c45047.js";import{T as B}from"./function-call.a4a9c07c.js";import"./constant.80c6de18.js";import"./index.b5574021.js";import"./use-route.7c55373a.js";import"./index.63869abe.js";import"./mount-component.725b707e.js";import"./index.00b48509.js";import"./interceptor.e76ee8d4.js";import"./use-touch.109c1035.js";import"./use-lazy-render.20e241a7.js";import"./on-popup-reopen.e7b96e14.js";import"./index.9c372815.js";import"./index.a750e74d.js";const[X,h,Y]=R("search"),Z=w({},x,{label:String,shape:A("square"),leftIcon:A("search"),clearable:K,actionText:String,background:String,showAction:Boolean});var ee=D({name:X,props:Z,emits:["blur","focus","clear","search","cancel","clickInput","clickLeftIcon","clickRightIcon","update:modelValue"],setup(c,{emit:l,slots:n,attrs:b}){const k=z(),i=d(),v=()=>{n.action||(l("update:modelValue",""),l("cancel"))},m=e=>{e.keyCode===13&&(L(e),l("search",c.modelValue))},f=()=>c.id||`${k}-input`,g=()=>{if(n.label||c.label)return t("label",{class:h("label"),for:f()},[n.label?n.label():c.label])},V=()=>{if(c.showAction){const e=c.actionText||Y("cancel");return t("div",{class:h("action"),role:"button",tabindex:0,onClick:v},[n.action?n.action():e])}},C=()=>{var e;return(e=i.value)==null?void 0:e.blur()},a=()=>{var e;return(e=i.value)==null?void 0:e.focus()},r=e=>l("blur",e),u=e=>l("focus",e),S=e=>l("clear",e),T=e=>l("clickInput",e),U=e=>l("clickLeftIcon",e),_=e=>l("clickRightIcon",e),y=Object.keys(x),N=()=>{const e=w({},b,I(c,y),{id:f()}),E=P=>l("update:modelValue",P);return t(q,G({ref:i,type:"search",class:h("field"),border:!1,onBlur:r,onFocus:u,onClear:S,onKeypress:m,onClickInput:T,onClickLeftIcon:U,onClickRightIcon:_,"onUpdate:modelValue":E},e),I(n,["left-icon","right-icon"]))};return $({focus:a,blur:C}),()=>{var e;return t("div",{class:h({"show-action":c.showAction}),style:{background:c.background}},[(e=n.left)==null?void 0:e.call(n),t("div",{class:h("content",c.shape)},[g(),N()]),V()])}}});const p=j(ee),le={action:"/"},Ve=D({setup(c){const l=O({"zh-CN":{label:"\u5730\u5740",disabled:"\u7981\u7528\u641C\u7D22\u6846",inputAlign:"\u641C\u7D22\u6846\u5185\u5BB9\u5BF9\u9F50",background:"\u81EA\u5B9A\u4E49\u80CC\u666F\u8272",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",customButton:"\u81EA\u5B9A\u4E49\u6309\u94AE",listenToEvents:"\u4E8B\u4EF6\u76D1\u542C"},"en-US":{label:"Address",disabled:"Disabled",inputAlign:"Input Align",background:"Custom Background Color",placeholder:"Placeholder",customButton:"Custom Action Button",listenToEvents:"Listen to Events"}}),n=d(""),b=d(""),k=d(""),i=d(""),v=d(""),m=d(""),f=C=>B(C),g=()=>B(l("cancel")),V=()=>B(m.value);return(C,a)=>{const r=H("demo-block");return J(),M(W,null,[t(r,{title:o(l)("basicUsage")},{default:s(()=>[t(o(p),{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=u=>n.value=u),placeholder:o(l)("placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),t(r,{title:o(l)("listenToEvents")},{default:s(()=>[F("form",le,[t(o(p),{modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=u=>v.value=u),placeholder:o(l)("placeholder"),"show-action":"",onSearch:f,onCancel:g},null,8,["modelValue","placeholder"])])]),_:1},8,["title"]),t(r,{title:o(l)("inputAlign")},{default:s(()=>[t(o(p),{modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=u=>i.value=u),placeholder:o(l)("placeholder"),"input-align":"center"},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),t(r,{title:o(l)("disabled")},{default:s(()=>[t(o(p),{modelValue:k.value,"onUpdate:modelValue":a[3]||(a[3]=u=>k.value=u),placeholder:o(l)("placeholder"),disabled:""},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),t(r,{title:o(l)("background")},{default:s(()=>[t(o(p),{modelValue:b.value,"onUpdate:modelValue":a[4]||(a[4]=u=>b.value=u),placeholder:o(l)("placeholder"),shape:"round",background:"#4fc08d"},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),t(r,{title:o(l)("customButton")},{default:s(()=>[t(o(p),{modelValue:m.value,"onUpdate:modelValue":a[5]||(a[5]=u=>m.value=u),"show-action":"",label:o(l)("label"),placeholder:o(l)("placeholder"),onSearch:f},{action:s(()=>[F("div",{onClick:V},Q(o(l)("search")),1)]),_:1},8,["modelValue","label","placeholder"])]),_:1},8,["title"])],64)}}});export{Ve as default};