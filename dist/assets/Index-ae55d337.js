import{u as z,r as D}from"./App-66c9583b.js";import{n as p}from"./nav-8caf7704.js";import{J as C,q as m,w as S,I as A,r as y,Q as F,h as a,i as l,s,F as u,t as v,u as J,j as f,k as h,y as g,B as _,p as V}from"./index-041dbff2.js";const j={class:"navs bf"},q={class:"nav-left"},E=["onClick"],Q={class:"nav-box"},G={class:"nav-top"},H=["onClick"],K={class:"nav-title"},M={class:"nav-list"},O=["onClick"],P={alt:""},ee={__name:"Index",setup(R){const{useNavStore:i}=z(),b=C(()=>e=>D(e)),w=p.map(e=>e.title),L=C(()=>p[n.value].nav.map(e=>e.title)),n=m(i.active[0]||0),r=m(i.active[1]||0),d=m([]);S(()=>[n.value,r.value],()=>{d.value=[],A(()=>{d.value=p[n.value].nav[r.value].nav})},{immediate:!0,deep:!0});const N=e=>{n.value=e,r.value=0,i.toggleActive(e,0)},I=e=>{r.value=e,i.toggleActive(n.value,e)},$=e=>{window.open(e.url,"_blank")};return(e,U)=>{const k=y("perfect-scrollbar"),B=y("a-tooltip"),T=F("lazyload");return a(),l("div",j,[s("div",q,[s("ul",null,[(a(!0),l(u,null,v(J(w),(c,t)=>(a(),l("li",{class:g({active:n.value===t}),key:t,onClick:o=>N(t)},_(c),11,E))),128))])]),s("div",Q,[s("div",G,[f(k,null,{default:h(()=>[s("ul",null,[(a(!0),l(u,null,v(L.value,(c,t)=>(a(),l("li",{class:g({active:r.value===t}),key:t,onClick:o=>I(t)},_(c),11,H))),128))])]),_:1})]),f(k,{class:"scroll-bar"},{default:h(()=>[(a(!0),l(u,null,v(d.value,(c,t)=>(a(),l("div",{class:"nav-box",key:t},[s("p",K,_(c.title),1),s("ul",M,[(a(!0),l(u,null,v(c.nav,(o,x)=>(a(),l("li",{key:x,onClick:W=>$(o)},[f(B,{title:o.desc&&`${o.name}：${o.desc}`,placement:"topLeft"},{default:h(()=>[V(s("img",P,null,512),[[T,b.value(o.url)]]),s("p",null,_(o.name),1)]),_:2},1032,["title"])],8,O))),128))])]))),128))]),_:1})])])}}};export{ee as default};
