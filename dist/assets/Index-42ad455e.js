import{e as t,f as a,q as p,w as K,r as c,h as o,C as s,k as r,s as n,j as V,i as C,F as D,t as I,K as B,H as L}from"./index-041dbff2.js";import{u as P}from"./App-66c9583b.js";const k={class:"settings-drawer"},N=n("div",{class:"intro"},[n("p",null,"说明:"),n("p",null,"您修改的设置内容仅存储在您浏览器缓存中，本站不存储任何内容；"),n("p",null,"当您清理浏览器缓存或更换浏览器后需要重新设置，感谢您的支持与理解!")],-1),T={__name:"Index",props:{open:{type:Boolean,default:!1}},emits:["close"],setup(_,{emit:u}){const m=_,{useSystemStore:v}=P(),d=t(()=>a(()=>import("./SettingsBasic-8e6b750e.js"),["assets/SettingsBasic-8e6b750e.js","assets/App-66c9583b.js","assets/index-041dbff2.js","assets/index-c3c2086a.css","assets/App-e46b25bc.css","assets/SettingsBasic-5de8130a.css"])),b=t(()=>a(()=>import("./SettingsAppearance-5449d0e3.js"),["assets/SettingsAppearance-5449d0e3.js","assets/index-041dbff2.js","assets/index-c3c2086a.css","assets/App-66c9583b.js","assets/App-e46b25bc.css","assets/SettingsAppearance-79bbf557.css"])),f=t(()=>a(()=>import("./SettingsNews-329129af.js"),["assets/SettingsNews-329129af.js","assets/vuedraggable.umd-f2117dbb.js","assets/index-041dbff2.js","assets/index-c3c2086a.css","assets/App-66c9583b.js","assets/App-e46b25bc.css","assets/SettingsNews-1d146c8a.css"])),y=t(()=>a(()=>import("./SettingsShortcutKey-80c52fee.js"),["assets/SettingsShortcutKey-80c52fee.js","assets/App-66c9583b.js","assets/index-041dbff2.js","assets/index-c3c2086a.css","assets/App-e46b25bc.css","assets/SettingsShortcutKey-7a5efcfc.css"])),w=t(()=>a(()=>import("./SettingsData-5c19f000.js"),["assets/SettingsData-5c19f000.js","assets/index-041dbff2.js","assets/index-c3c2086a.css","assets/App-66c9583b.js","assets/App-e46b25bc.css","assets/SettingsData-6311496e.css"])),g=()=>{u("close")},l=p("basic"),E=p([{label:"基础设置",value:"basic",component:d},{label:"外观设置",value:"appearance",component:b},{label:"资讯设置",value:"news",component:f},{label:"快捷键设置",value:"shortcutKey",component:y},{label:"数据管理",value:"export",component:w}]);return K(()=>m.open,h=>{v.activeMenu==="news"&&(l.value="news")},{immediate:!0,deep:!0}),(h,i)=>{const S=c("a-tab-pane"),x=c("a-tabs"),A=c("a-drawer");return o(),s(A,{width:"80vw",title:"系统设置",placement:"right",open:_.open,onClose:g,rootClassName:"settings-root"},{default:r(()=>[n("div",k,[V(x,{activeKey:l.value,"onUpdate:activeKey":i[0]||(i[0]=e=>l.value=e),"tab-position":"left",style:{minHeight:"400px"}},{default:r(()=>[(o(!0),C(D,null,I(E.value,e=>(o(),s(S,{key:e.value,tab:e.label},{default:r(()=>[(o(),s(B,null,[(o(),s(L(e.component)))],1024))]),_:2},1032,["tab"]))),128))]),_:1},8,["activeKey"]),N])]),_:1},8,["open"])}}};export{T as default};
