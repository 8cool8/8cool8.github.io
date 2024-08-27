import{q as m,E,J as C,W as q,r as c,h as y,i as _,s as t,j as n,l as I,u as a,bY as R,bZ as P,B as f,y as G,k as r,z as j,C as T,x as S,F as $,t as U,D as A,I as J,M as W,N as Y}from"./index-041dbff2.js";import{_ as Z,u as H,r as K}from"./App-66c9583b.js";const Q=u=>(W("data-v-215aa93b"),u=u(),Y(),u),X={class:"ctrl-game"},ee=["src"],te={class:"active-game"},le=Q(()=>t("p",null,"点击开始游戏",-1)),ae={class:"title-link"},se={class:"game-box"},oe={class:"game-list"},ie=["id","onClick"],ne=["src"],ue={__name:"OnlineMiniGames",props:{type:{type:String,default:"use"}},setup(u){const{useAppStore:o}=H(),s=m(0),p=m(!0),g=E([{label:"盖塔楼",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/build-tower/box-icon.png",url:"https://hellokit.com.cn/build-tower"},{label:"盖楼游戏",url:"https://haiyong.site/moyu/towergame/"},{label:"超级玛丽",url:"https://wanghao221.github.io/mario/"},{label:"无限跑酷",url:"https://haiyong.site/moyu/wuxianpaoku.html"},{label:"密室逃生",url:"https://haiyong.site/moyu/msts/"},{label:"恐龙快跑",url:"https://game.ur1.fun/dinosaur/"},{label:"吃豆人",url:"https://haiyong.site/moyu/dou.html"},{label:"俄罗斯方块",url:"https://haiyong.site/moyu/eluosi.html"},{label:"跳房子",url:"https://haiyong.site/moyu/tiaofangzi.html"},{label:"一个都不能死",url:"https://haiyong.site/moyu/yigedoubunengsi/"},{label:"简易华容道",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",url:"https://sliding.toys/"},{label:"迷宫大全",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",url:"https://maze.toys/"},{label:"切方块",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/cut-the-box/cube.png",url:"https://hellokit.com.cn/cut-the-box"},{label:"水果忍者",url:"https://haiyong.site/moyu/shuiguorenzhe/"},{label:"圣诞老人过桥",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",url:"https://hellokit.com.cn/bridge"},{label:"闯关小游戏",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",url:"https://hellokit.com.cn/barrier-game"},{label:"2048",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/2048/2048.jpeg",url:"https://hellokit.com.cn/2048"},{label:"魔方",icon:"https://img.zhuayuya.com/icon/mofang.webp",url:"https://www.zhuayuya.com/cube/index.html"},{label:"扫雷",icon:"https://img.zhuayuya.com/icon/saolei.webp",url:"https://www.zhuayuya.com/saolei_tow/index.html"},{label:"数独",icon:"https://img.zhuayuya.com/icon/shudu.webp",url:"https://www.zhuayuya.com/sudoku_tow/index.html"},{label:"中国象棋",icon:"https://img.zhuayuya.com/images/y65.png",url:"https://game.zhuayuya.com/yxmb/65/index.html"},{label:"射箭游戏",icon:"https://img.zhuayuya.com/images/y30.png",url:"https://game.zhuayuya.com/yxmb/30/index.html"},{label:"最强眼力",icon:"https://img.zhuayuya.com/images/y36.png",url:"https://game.zhuayuya.com/yxmb/36/index.html"},{label:"纸牌记忆",url:"https://haiyong.site/moyu/zhipaijiyi.html"},{label:"飞机大战",icon:"https://img.zhuayuya.com/images/y31.png",url:"https://game.zhuayuya.com/yxmb/31/index.html"},{label:"飞机大战2",url:"https://haiyong.site/moyu/fjdz/"},{label:"飞机大战3",url:"https://haiyong.site/moyu/qmfjdz/"},{label:"疯狂飙车",url:"https://haiyong.site/moyu/saiche/"},{label:"危险货车",url:"https://haiyong.site/moyu/weixiandehuoche/"},{label:"飞跃奶酪",url:"https://haiyong.site/moyu/flyingcheese/"},{label:"打僵尸",url:"https://haiyong.site/moyu/zsjfy/"},{label:"繁衍战争",url:"https://haiyong.site/moyu/fanyan/"},{label:"青蛙吃苍蝇",url:"https://haiyong.site/moyu/qwccy/"},{label:"下一个数字",url:"https://haiyong.site/moyu/xygsz/"},{label:"保护堆芯",url:"https://haiyong.site/moyu/baohuduixin.html"},{label:"西部牛仔",url:"https://haiyong.site/moyu/xbnz/"},{label:"只因你最美",url:"https://wanghao221.github.io/ji/"},{label:"逗猫",url:"https://haiyong.site/moyu/doumao.html"},{label:"爱吹风的小狮子",url:"https://haiyong.site/moyu/lion.html"},{label:"喷火龙",url:"https://haiyong.site/moyu/penhuolong.html"},{label:"烟花模拟器",url:"https://haiyong.site/tools/yanhua/"},{label:"孔明灯",url:"https://henxiangsi.com/"}]),F=C(()=>h=>K(h)),i=C(()=>g[s.value]),b=m(!1),k=m(!1),w=h=>{s.value+=h,s.value<0&&(s.value=g.length-1),s.value>g.length-1&&(s.value=0)},d=m(null),{isFullscreen:L,toggle:z}=q(d),N=()=>{b.value=!0,J(()=>{document.getElementById(`game-${i.value.label}`).scrollIntoView({block:"center",inline:"nearest"}),d.value.addEventListener("load",()=>{k.value=!1})})},O=()=>{window.open(i.value.url,"_blank")};return(h,e)=>{const x=c("a-input-number"),V=c("a-space"),B=c("perfect-scrollbar"),M=c("a-spin"),D=c("IDialog");return y(),_($,null,[t("div",{class:G(["online-mini-game",{preview:u.type==="preview"}]),onClick:N},[t("div",X,[n(a(R),{onClick:e[0]||(e[0]=I(l=>w(-1),["stop"]))}),n(a(P),{onClick:e[1]||(e[1]=I(l=>w(1),["stop"]))})]),t("img",{src:i.value.icon||F.value(i.value.url),alt:""},null,8,ee),t("div",te,[t("p",null,f(i.value.label),1),le])],2),n(D,{title:`在线小游戏 - ${i.value.label}`,width:a(o).miniGames.width,visible:b.value,zIndex:10010,destroyOnClose:!0,wrapClassName:"game-dialog",onCancel:e[6]||(e[6]=l=>b.value=!1)},{titleLink:r(()=>[t("span",ae,[t("a",{href:"javascript:;",class:"link",title:"全屏娱乐",onClick:e[2]||(e[2]=l=>p.value=!p.value)},f(p.value?"隐藏":"显示")+"游戏列表",1),t("a",{href:"javascript:;",class:"link",title:"全屏娱乐",onClick:e[3]||(e[3]=(...l)=>a(z)&&a(z)(...l))},"全屏"),t("a",{href:"javascript:;",class:"link",title:"点击进入原站",onClick:O},"进入原站"),n(V,null,{default:r(()=>[j(" 窗口大小 "),n(x,{min:480,value:a(o).miniGames.width,"onUpdate:value":e[4]||(e[4]=l=>a(o).miniGames.width=l),size:"small"},null,8,["value"]),j("* "),n(x,{min:360,value:a(o).miniGames.height,"onUpdate:value":e[5]||(e[5]=l=>a(o).miniGames.height=l),size:"small"},null,8,["value"])]),_:1})])]),default:r(()=>[t("div",se,[p.value?(y(),T(B,{key:0,class:"scroll-bar",style:S({height:a(o).miniGames.height+"px"})},{default:r(()=>[t("div",oe,[(y(!0),_($,null,U(g,(l,v)=>(y(),_("p",{class:G(["game-item",{active:s.value===v}]),id:`game-${l.label}`,key:v,onClick:he=>s.value=v},f(l.label),11,ie))),128))])]),_:1},8,["style"])):A("",!0),n(M,{spinning:k.value,tip:"加载中，请耐心等待..."},{default:r(()=>[t("iframe",{ref_key:"iframeRef",ref:d,src:i.value.url,style:S({height:a(o).miniGames.height+"px",backgroundColor:a(L)?"#FFF":"transparent"}),frameborder:"0"},null,12,ne)]),_:1},8,["spinning"])])]),_:1},8,["title","width","visible"])],64)}}},re=Z(ue,[["__scopeId","data-v-215aa93b"]]);export{re as default};
