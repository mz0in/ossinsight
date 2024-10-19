"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6538],{25017:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(23097).P)("legend",{},"Legend")},41109:(e,t,n)=>{n.d(t,{C:()=>Z});var a=n(67294),r=n(2068),l=n(46901),o=n(5616),i=n(65582),c=n(50657),s=n(88078),d=n(40044),m=n(73313),u=n(61084),p=n(6971),h=n(47135),f=n(61802);const b={cop:"distributed",batchCop:"distributed",tikv:"row",tiflash:"column"},E=e=>{if(!e)return e;for(const[t,n]of Object.entries(b))e=e.replace(new RegExp(t,"g"),n);return e},g=e=>{let{sql:t,query:n,params:b,open:g,onClose:v}=e;const[y,Z]=(0,a.useState)(null),{data:w,error:x}=(0,p.WV)(`${y??"undefined"}/${n}`,b,!1,g&&!!y&&(0,f.nf)(b)),k=(0,r.Z)(((e,t)=>{Z(t)}));return a.createElement(a.Fragment,null,a.createElement(c.Z,{open:g,maxWidth:"xl",fullWidth:!0,onClose:v},a.createElement(i.Z,null,a.createElement(m.Z,{value:y,onChange:k},a.createElement(d.Z,{value:null,label:"SQL"}),a.createElement(d.Z,{value:"explain",label:"EXPLAIN"})),a.createElement("br",null),y?(0,f.nf)(x)?a.createElement(l.Z,{severity:"error"},"Request failed $",(0,h.e$)(x)):(0,f.Rw)(w)?a.createElement(o.Z,{sx:{pt:.5}},a.createElement(s.Z,{width:"80%"}),a.createElement(s.Z,{width:"50%"}),a.createElement(s.Z,{width:"70%"})):a.createElement(o.Z,{sx:{overflowX:"scroll",color:"rgb(248, 248, 242)",backgroundColor:"rgb(40, 42, 54)",borderRadius:2,py:2},mb:2},a.createElement(o.Z,{display:"table",fontFamily:"monospace",fontSize:16,lineHeight:1,sx:{borderSpacing:"16px 0"}},a.createElement(o.Z,{display:"table-header-group"},a.createElement(o.Z,{display:"table-row"},w.fields.map((e=>a.createElement(o.Z,{key:e.name,display:"table-cell"},e.name))))),a.createElement(o.Z,{display:"table-footer-group"},w.data.map(((e,t)=>a.createElement(o.Z,{key:t,display:"table-row"},w.fields.map((t=>a.createElement(o.Z,{key:E(t.name),display:"table-cell",whiteSpace:"pre"},E(e[t.name])))))))))):a.createElement(u.Z,{className:"language-sql"},t))))};var v=n(11057),y=n(96214);function Z(e){const[t,n]=(0,a.useState)(!1),l=(0,r.Z)((()=>{n(!1)})),o=(0,r.Z)((()=>{n(!0)}));return{dialog:a.createElement(g,{query:(null==e?void 0:e.query)??"",sql:null==e?void 0:e.sql,params:null==e?void 0:e.params,open:(0,f.nf)(e)&&t,onClose:l}),button:a.createElement(v.Z,{size:"small",onClick:o,endIcon:a.createElement(y.Z,null),disabled:(0,f.Rw)(e)},"SHOW SQL"),show:t}}},15848:(e,t,n)=>{n.d(t,{Z:()=>i,h:()=>c});var a=n(67294),r=n(70131),l=n(95487),o=n(10981);function i(e){let{children:t}=e;const n=(0,l.Z)(),{inView:i,ref:c}=(0,r.YD)({fallbackInView:!0}),s=n&&i;let d;return d="function"==typeof t?t(s):a.createElement(o.Z.Provider,{value:{inView:s}},t),a.createElement("div",{ref:c},d)}function c(e){const t=t=>a.createElement(i,null,a.createElement(e,t));return t.displayName="InViewContainerHOC",t}},46850:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(87462),r=n(11905),l=n(62286),o=n(67294);function i(e){let{...t}=e;return o.createElement(r.Z,{dependencies:[t.bottom,t.left,t.right,t.top]},o.createElement(l.D,(0,a.Z)({id:"watermark"},t,{text:"ossinsight.io",textStyle:{color:"#4c4c4c",fontSize:32,fontWeight:"bolder"}})))}},97256:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)({collection:void 0})},53290:(e,t,n)=>{n.d(t,{ZP:()=>c,nS:()=>s,x0:()=>d});var a=n(85529),r=n(67294),l=n(16154),o=n(5616);const i=e=>{let{size:t}=e;return r.createElement(o.Z,{display:"inline-block",position:"relative"},r.createElement(a.Tk0,{size:t}),r.createElement(a.Rvi,{size:t/3,className:l.Z.subIcon}))},c=[{title:"Stars",key:"stars",search:null,prefix:"stars",icon:r.createElement(a.r7p,{size:18})},{title:"Pull Requests",key:"pull-requests",search:"prs",prefix:"prs",icon:r.createElement(a.Rvi,{size:18})},{title:"Pull Request Creators",key:"pull-request-creators",search:"pr-creators",icon:r.createElement(i,{size:18})},{title:"Issues",key:"issues",search:"issues",prefix:"issues",icon:r.createElement(a.hEv,{size:18})}];let s;!function(e){e.Last28Days="last-28-days",e.Month="month"}(s||(s={}));const d=[{type:s.Last28Days,tableTitle:"Last 28 days",label:"Last 28 Days"},{type:s.Month,tableTitle:"Monthly",label:"Month-to-Month"}]},56653:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(67294),r=n(76302),l=n(60338),o=n(25017),i=n(62286),c=n(38622),s=n(15848),d=n(46850),m=n(97256),u=n(94222),p=n(33675),h=n(25432),f=n(68317),b=n(30368),E=n(61802),g=n(5616),v=n(88078);const y=(0,s.h)((function(){const{collection:e}=(0,a.useContext)(m.Z),{dimension:t,tabs:n}=(0,p.s)("historical-trending"),r=(0,u.nh)(null==e?void 0:e.id,t.key),s=(0,a.useMemo)((()=>{if((0,E.Rw)(r.data))return[];const e=r.data.data.reduce(((e,t)=>e<t.event_month?t.event_month:e),"");return r.data.data.filter((t=>t.event_month===e)).sort(((e,t)=>t.total-e.total)).slice(0,10).map((e=>e.repo_name))}),[r.data]),y=(0,a.useMemo)((()=>{if((0,E.Rw)(r.data))return r;const e=s.reduce(((e,t)=>e.add(t)),new Set);return{data:{...r.data,data:r.data.data.filter((t=>e.has(t.repo_name)))},loading:r.loading,error:r.error}}),[r.data,r.error,r.loading,s]);return a.createElement("section",null,a.createElement(f.H2,null,"Historical Trending of Top 10"),a.createElement(f.P2,null,"A line chart displays the current top 10 repositories and how their ranking have changed since 2011. You can display rankings based on the number of stars, pull requests, pull request creators, and issues."),n,a.createElement("br",null),(0,h.I)(y,(n=>a.createElement(l.wW,{theme:"dark",renderer:"canvas",data:n.data,height:480,fields:{name:"repo_name",time:"event_month",value:"total"},formatTime:b.m},a.createElement(i.D,{id:"title",top:0,text:`Top 10 ${(null==e?void 0:e.name)??"undefined"} - ${t.title}`}),a.createElement(d.Z,{left:"10%",top:"10%"}),a.createElement(c.v,{feature:{saveAsImage:{title:""}}}),a.createElement(o.Z,{top:"center",left:"10%",orient:"vertical",type:"scroll",data:s}))),(()=>a.createElement(g.Z,{height:480},a.createElement(v.Z,{variant:"text",width:"70%",sx:{mt:1}}),a.createElement(v.Z,{variant:"text",width:"60%",sx:{mt:1}}),a.createElement(v.Z,{variant:"text",width:"90%",sx:{my:1}})))))})),Z=(0,s.h)((function(){const{collection:e}=(0,a.useContext)(m.Z),{dimension:t,tabs:n}=(0,p.s)("bar-chart-race"),r=(0,u.nh)(null==e?void 0:e.id,t.key);return a.createElement("section",null,a.createElement(f.H2,{id:"bar-chart-race"},"Bar Chart Race"),a.createElement(f.P2,null,"An animated bar chart visualizes the annual total growth of each repository since 2011. You can display the growth of repositories based on the number of stars, pull requests, pul request creators, and issues. "),n,a.createElement("br",null),(0,h.I)(r,(n=>a.createElement(l.NC,{theme:"dark",renderer:"canvas",data:n.data,height:668,formatTime:b.m,fields:{name:"repo_name",time:"event_month",value:"total"},interval:400,max:15,filename:null==e?void 0:e.slug},a.createElement(i.D,{id:"title",text:`${(null==e?void 0:e.name)??"undefined"} - ${t.title}`}),a.createElement(d.Z,{right:"5%",bottom:"10%"}))),(()=>a.createElement(g.Z,{height:480},a.createElement(v.Z,{variant:"text",width:"70%",sx:{mt:1}}),a.createElement(v.Z,{variant:"text",width:"60%",sx:{mt:1}}),a.createElement(v.Z,{variant:"text",width:"90%",sx:{my:1}})))))})),w=e=>null!=e&&e.name?`${e.name} - Popularity Trends`:"Loading - Popularity Trends",x="Dynamic charts,github,rankings,trends,animated bar chart,pipeline chart,line chart,gitHub repositories,github collection,github metrics".split(",");const k=function(){return a.createElement(r.Z,{title:w,description:"The following dynamic charts show the popularity trends of GitHub repositories in this collection. You can display the popularity of repositories based on the number of stars, pull requests, pull request creators, and issues.",keywords:x},a.createElement(Z,null),a.createElement(y,null))}},94222:(e,t,n)=>{n.d(t,{FH:()=>c,QC:()=>s,nh:()=>i});var a=n(67294),r=n(6971),l=n(61802);const o=Symbol("transformed-data");function i(e,t){const{data:n,loading:i,error:c}=(0,r.WV)(`collection-${t}-history`,{collectionId:e},!1,(0,l.nf)(e));return(0,a.useMemo)((()=>(null!=n&&(n.data=function(e){var t,n,a;if((0,l.N6)(e[o]))return e[o];if(0===e.length)return[];const r=[],i=null!=(t=e[0])&&null!=(n=t.event_month)&&n.includes("T")?"iso":"ymd",c=(null==(a=e[0])?void 0:a.event_month)??"2011-01-01",s=e[e.length-1].event_month;let[d,m]=c.split("-").map(Number);const[u,p]=s.split("-").map(Number);let h=0;const f={};for(;d<u||d===u&&m<=p;){const t=`${d}-${String(m).padStart(2,"0")}-01`,n="iso"===i?new Date(t).toISOString():t,a=new Set(Object.keys(f));for(;h<e.length;){const{repo_name:t,total:l,event_month:o}=e[h];if(o!==n)break;f[t]=l,a.delete(t),r.push(e[h]),h++}a.size>0&&a.forEach((e=>{r.push({event_month:n,repo_name:e,total:f[e]})})),12===m?(d+=1,m=1):m+=1}return Object.defineProperty(e,o,{value:r,writable:!1,configurable:!1,enumerable:!1}),r}(n.data)),{data:n,loading:i,error:c})),[n])}function c(e,t){return(0,r.WV)(`collection-${t}-history-rank`,{collectionId:e},!1,(0,l.nf)(e))}function s(e,t,n){return(0,r.WV)(`collection-${t}-${n??"month"}-rank`,{collectionId:e},!1,(0,l.nf)(e))}},71772:(e,t,n)=>{n.d(t,{Kx:()=>m,St:()=>u,bX:()=>d});var a=n(28084),r=n(9566),l=n(67294),o=n(8100),i=n(78265),c=n(64063),s=n.n(c);function d(){const{collections:e}=(0,a.eZ)("plugin-prefetch"),{data:t}=(0,o.ZP)("static/collections",{fetcher:i.vE.getCollections,fallbackData:e,compare:s()});return(0,l.useMemo)((()=>(null==t?void 0:t.data.map((e=>({...e,slug:(0,r.o)(e.name)}))))??[]),[t])}function m(e){const t=d();return(0,l.useMemo)((()=>t.find((t=>t.slug===e))),[t,e])}function u(){const e=d();return(0,l.useCallback)((t=>e.find((e=>e.id===t))),[e])}},33675:(e,t,n)=>{n.d(t,{s:()=>f});var a=n(2068),r=n(73313),l=n(11057),o=n(56863),i=n(51233),c=n(5616),s=n(67294),d=n(2108),m=n(87462),u=n(40044);const p=e=>{let{children:t,icon:n,...a}=e;return s.createElement(u.Z,(0,m.Z)({},a,{sx:{textTransform:"unset"},label:s.createElement("span",null,n,"\xa0",t)}))};var h=n(53290);function f(e,t){void 0===t&&(t=!1);const n=(0,s.useMemo)((()=>h.ZP.filter((e=>!t||!!e.prefix))),[t]),[m,u]=(0,d.ZP)(e,{defaultValue:n[0],serialize:e=>e.search,deserialize:e=>n.find((t=>t.search===e))??n[0]}),[f,b]=(0,s.useState)(h.nS.Last28Days),E=(0,a.Z)(((e,t)=>{u(n.find((e=>e.key===t))??n[0])})),g=s.createElement(i.Z,{direction:{xs:"column",sm:"row",md:"column",lg:"row"},justifyContent:"space-between",gap:"1rem",flexWrap:"wrap"},s.createElement(r.Z,{value:m.key,onChange:E,variant:"scrollable",scrollButtons:"auto",allowScrollButtonsMobile:!0},n.map((e=>s.createElement(p,{key:e.key,value:e.key,icon:e.icon},e.title)))),"monthly-rankings"===e&&s.createElement(c.Z,{sx:{display:"flex",alignItems:"center"}},s.createElement(o.Z,{variant:"outlined","aria-label":"display type",size:"small"},h.x0.map((e=>{return s.createElement(l.Z,{key:e.type,sx:{textTransform:"none"},onClick:(t=e.type,()=>{b(t)}),variant:e.type===f?"contained":"outlined"},e.label);var t})))));return{dimension:m,tabs:g,dateType:f}}},25432:(e,t,n)=>{n.d(t,{I:()=>u});var a=n(96214),r=n(31812),l=n(67294),o=n(41109),i=n(61802),c=n(47135),s=n(46901),d=n(5616),m=n(88078);function u(e,t,n){let{data:u,loading:p,error:h}=e;const{dialog:f,button:b}=(0,o.C)(u),E=(0,l.useMemo)((()=>{const e=(0,c.e$)(h);return e.includes("API rate limit exceeded")?"Too frequent to operate, please try again after one minute.":e}),[h]);return(0,i.nf)(h)?l.createElement(s.Z,{severity:"error"},E):(0,i.nf)(u)?l.createElement(l.Fragment,null,l.createElement(d.Z,{display:"flex",justifyContent:"flex-end"},b),t(u),f):(0,i.nf)(n)?l.createElement(l.Fragment,null,l.createElement(d.Z,{display:"flex",justifyContent:"flex-end"},l.createElement(r.Z,{loading:!0,size:"small",endIcon:l.createElement(a.Z,null)},"SHOW SQL")),n()):l.createElement(d.Z,null,l.createElement(m.Z,{variant:"text",width:"70%",sx:{mt:1}}),l.createElement(m.Z,{variant:"text",width:"60%",sx:{mt:1}}),l.createElement(m.Z,{variant:"text",width:"90%",sx:{my:1}}))}},76302:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(39960),r=n(16550),l=n(95999),o=n(72428),i=n(82595),c=n(6023),s=n(86010),d=n(67294),m=n(88242),u=n(97256),p=n(71772);var h=n(68317);function f(e){let{description:t,children:n}=e;return d.createElement(d.Fragment,null,d.createElement(h.P1,null,t),n)}const b={collectionsPage:"collectionsPage_O_rt",collectionsMainContainer:"collectionsMainContainer_ifEK",collectionsSidebarContainer:"collectionsSidebarContainer_Dqvg",collectionsMainContainerEnhanced:"collectionsMainContainerEnhanced_EiQv",collectionsSidebarContainerHidden:"collectionsSidebarContainerHidden_bGFV",collapsedCollectionsSidebar:"collapsedCollectionsSidebar_eed8",expandSidebarButtonIcon:"expandSidebarButtonIcon_X9ID",collectionsItemWrapperEnhanced:"collectionsItemWrapperEnhanced_Rste"};var E=n(61802),g=n(51233),v=n(15861),y=n(85529);const Z=e=>`https://github.com/pingcap/ossinsight/edit/main/configs/collections/${e.id}.${e.slug}.yml`;function w(e){let{collection:t}=e;return d.createElement(a.Z,{href:Z(t),target:"_blank"},d.createElement(y.vdY,null)," Edit This Collection")}const x=()=>d.createElement(a.Z,{to:"https://github.com/pingcap/ossinsight#how-to-add-collections"},d.createElement(g.Z,{direction:"row",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",spacing:1},d.createElement(o.Z,null),d.createElement(v.Z,{variant:"body2",component:"span",fontSize:"inherit"},"Add a Collection"))),k=function(e){let{title:t,description:a,keywords:o,children:g}=e;const{params:{slug:v}}=(0,r.$B)(),{pathname:y}=(0,r.TH)(),Z=(0,p.Kx)(v),k=function(){const e=(0,p.bX)();return(0,d.useMemo)((()=>e.filter((e=>0!==e.public)).map((e=>({type:"category",label:e.name,href:`/collections/${e.slug}`,collapsed:!0,collapsible:!0,items:[{type:"link",href:`/collections/${e.slug}`,label:"Ranking"},{type:"link",href:`/collections/${e.slug}/trends/`,label:"Popularity Trends"}]})))),[e])}(),[C,S]=(0,d.useState)(!1),[I,_]=(0,d.useState)(!1),T=(0,d.useCallback)((()=>{I&&_(!1),S((e=>!e))}),[I]),B=(0,d.useMemo)((()=>t(Z)),[t,Z]);return d.createElement(m.Z,{title:B,description:a,keywords:o,image:n(31325).Z},d.createElement(u.Z.Provider,{value:{collection:Z}},d.createElement("div",{className:b.collectionsPage},d.createElement("div",{className:b.collectionsMainContainer},(0,E.N6)(k)&&d.createElement("aside",{className:(0,s.Z)(b.collectionsSidebarContainer,{[b.collectionsSidebarContainerHidden]:C}),onTransitionEnd:e=>{e.currentTarget.classList.contains(b.collectionsSidebarContainer)&&C&&_(!0)}},d.createElement(i.Z,{key:"collections",sidebar:k,path:y,onCollapse:T,isHidden:I,Footer:x}),I&&d.createElement("div",{className:b.collapsedCollectionsSidebar,title:(0,l.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,l.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},d.createElement(c.Z,{className:b.expandSidebarButtonIcon}))),d.createElement("main",{className:(0,s.Z)(b.collectionsMainContainer,{[b.collectionsMainContainerEnhanced]:C||(0,E.X0)(k)})},d.createElement("div",{className:(0,s.Z)("container padding-top--md padding-bottom--lg",b.collectionsItemWrapper,{[b.collectionsItemWrapperEnhanced]:C})},Z&&d.createElement(w,{collection:Z}),d.createElement(h.H1,{mt:2},B),d.createElement(f,{description:a},g)))))))}},68317:(e,t,n)=>{n.d(t,{H1:()=>o,H2:()=>i,H3:()=>c,P1:()=>s,P2:()=>d});var a=n(87462),r=n(15861),l=n(67294);const o=e=>{let{...t}=e;return l.createElement(r.Z,(0,a.Z)({variant:"h1",color:"primary.main",marginBottom:4,marginTop:4},t))},i=e=>{let{...t}=e;return l.createElement(r.Z,(0,a.Z)({},t,{variant:"h2",color:"primary.main",marginBottom:2,marginTop:8}))},c=e=>{let{...t}=e;return l.createElement(r.Z,(0,a.Z)({},t,{variant:"h3",marginBottom:2,marginTop:4}))},s=e=>{let{...t}=e;return l.createElement(r.Z,(0,a.Z)({},t,{variant:"body1",marginBottom:2,marginTop:0,fontSize:18}))},d=e=>{let{...t}=e;return l.createElement(r.Z,(0,a.Z)({},t,{variant:"body1",marginBottom:2,marginTop:0,fontSize:16,color:"#7c7c7c"}))}},30368:(e,t,n)=>{n.d(t,{_:()=>r,m:()=>o});var a=n(25108);function r(e){const t=new Set;return e.forEach((e=>t.add(e.repo_name))),t.size}const l=new Intl.DateTimeFormat(["en-US"],{month:"short",year:"numeric"}),o=e=>{if(!e)return"--";try{return l.format(new Date(e))}catch(t){return a.log(`${e} is not a valid time value`),"--"}}},2108:(e,t,n)=>{n.d(t,{ON:()=>i,Rc:()=>c,ZP:()=>o,io:()=>s});var a=n(67294),r=n(61802),l=n(16550);const o="undefined"==typeof window?function(e,t){let{defaultValue:n}=t;return[...(0,a.useState)(n)]}:function(e,t,n){let{defaultValue:o,deserialize:i,serialize:c}=t;void 0===n&&(n=!1);const s=(0,l.k6)(),d=(0,l.TH)(),m=(0,a.useMemo)((()=>{const t=new URLSearchParams(d.search).get(e);return(0,r.nf)(t)?i(t):o}),[]),[u,p]=(0,a.useState)(m),h=(0,a.useRef)(!0),f=(0,a.useRef)(!1);return(0,a.useEffect)((()=>{h.current=!1}),[]),(0,a.useEffect)((()=>{if(f.current)return void(f.current=!1);const t=c(u),a=new URLSearchParams(d.search);if((0,r.Rw)(t)){if(!a.has(e))return;a.delete(e)}else{if(a.get(e)===t)return;a.set(e,t)}const l=a.toString(),o=l?`?${l}`:"",i=d.hash?`${d.hash}`:"",m=d.pathname+o+i;n?s.push(m):(s.replace(m),window.history.replaceState(null,"",m))}),[u]),(0,a.useEffect)((()=>{const t=new URLSearchParams(d.search).get(e);(0,r.nf)(t)?p(i(t)):p(o)}),[d]),[u,p]};function i(e){return{defaultValue:e,serialize:e=>e,deserialize:e=>e}}function c(e){return{defaultValue:e,serialize:e=>(0,r.GC)(e)?e:void 0,deserialize:e=>(0,r.GC)(e)?e:void 0}}function s(e){return void 0===e&&(e="true"),{defaultValue:()=>!1,serialize:t=>(0,r.N6)(t)?e:void 0,deserialize:t=>Boolean(t===e)}}},8106:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(86010),l=n(95999),o=n(25108);const i={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function c(e){let{code:t,className:n}=e;const[c,s]=(0,a.useState)(!1),d=(0,a.useRef)(void 0),m=(0,a.useCallback)((()=>{var e;e=t,navigator.clipboard.writeText(e).catch(o.error),s(!0),d.current=window.setTimeout((()=>{s(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(d.current)),[]),a.createElement("button",{type:"button","aria-label":c?(0,l.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,l.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,l.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,i.copyButton,c&&i.copyButtonCopied),onClick:m},a.createElement("span",{className:i.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:i.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:i.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}},88242:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(5018),l=n(67294),o=n(61802),i=n(5616);function c(e){let{children:t,header:n,dark:c,sideWidth:s,Side:d,footer:m=!0,...u}=e;return(0,l.useLayoutEffect)((()=>{var e;const t=location.hash.replace(/^#/,"");null==(e=document.getElementById(t))||e.scrollIntoView()}),[]),l.createElement(r.Z,(0,a.Z)({},u,{customFooter:m,header:n,sideWidth:s,side:s&&(0,o.nf)(d)?l.createElement(i.Z,{component:"aside",width:s,position:"sticky",top:"calc(var(--ifm-navbar-height) + 76px)",height:0,zIndex:0},l.createElement(i.Z,{marginTop:"-76px",height:"calc(100vh - var(--ifm-navbar-height))"},l.createElement(d,null))):void 0}),l.createElement("div",{hidden:!0,style:{height:72}}),l.createElement("div",{style:{paddingLeft:s,paddingRight:s}},l.createElement("main",{style:{"--ifm-container-width-xl":"1200px"}},t)))}},82595:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(67294),r=n(87524),l=n(86010),o=n(86668),i=n(21327),c=n(6351),s=n(35281),d=n(59689),m=n(12466),u=n(1424);const p="menu_Y1UP",h="menuWithAnnouncementBar_fPny";function f(e){let{path:t,sidebar:n,className:r,Footer:o}=e;const i=function(){const{isActive:e}=(0,d.nT)(),[t,n]=(0,a.useState)(e);return(0,m.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",p,i&&h,r)},a.createElement("ul",{className:(0,l.Z)(s.k.docs.docSidebarMenu,"menu__list")},a.createElement(u.Z,{items:n,activePath:t,level:1,Footer:o})))}const b="sidebar_mhZE",E="sidebarWithHideableNavbar__6UL",g="sidebarHidden__LRd",v="sidebarLogo_F_0z";function y(e){let{path:t,sidebar:n,onCollapse:r,isHidden:s,Footer:d}=e;const{navbar:{hideOnScroll:m},docs:{sidebar:{hideable:u}}}=(0,o.L)();return a.createElement("div",{className:(0,l.Z)(b,m&&E,s&&g)},m&&a.createElement(i.Z,{tabIndex:-1,className:v}),a.createElement(f,{path:t,sidebar:n,Footer:d}),u&&a.createElement(c.Z,{onClick:r}))}const Z=a.memo(y);var w=n(13102),x=n(93163);const k=e=>{let{sidebar:t,path:n,Footer:r}=e;const o=(0,x.e)();return a.createElement("ul",{className:(0,l.Z)(s.k.docs.docSidebarMenu,"menu__list")},a.createElement(u.Z,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1,Footer:r}))};function C(e){return a.createElement(w.Zo,{component:k,props:e})}const S=a.memo(C);function I(e){const t=(0,r.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(Z,e),l&&a.createElement(S,e))}},1424:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),l=n(14353),o=n(89665);const i="sidebarFooter_MfnL";var c=n(61802);function s(e){let{items:t,Footer:n,...s}=e;return r.createElement(l.D,null,t.map(((e,t)=>r.createElement(o.Z,(0,a.Z)({key:t,item:e,index:t},s)))),(0,c.nf)(n)&&r.createElement("li",{className:i},r.createElement(n,null)))}const d=(0,r.memo)(s)},16154:(e,t,n)=>{n.d(t,{Z:()=>a});const a={subIcon:"subIcon_Z7Cn"}},31325:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/thumbnail-eba9bf0777c4e764cb9a714feb9647c3.png"}}]);