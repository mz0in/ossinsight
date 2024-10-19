(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9793],{26613:(e,t,n)=>{"use strict";var a=n(64836);t.Z=void 0;var r=a(n(64938)),l=n(85893),o=(0,r.default)((0,l.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");t.Z=o},54364:(e,t,n)=>{"use strict";var a=n(64836);t.Z=void 0;var r=a(n(64938)),l=n(85893),o=(0,r.default)((0,l.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");t.Z=o},72882:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var a=n(87462),r=n(63366),l=n(67294),o=n(63961),i=n(94780),c=n(28628),s=n(90948),u=n(1588),m=n(34867);function d(e){return(0,m.ZP)("MuiTableContainer",e)}(0,u.Z)("MuiTableContainer",["root"]);var p=n(85893);const f=["className","component"],h=(0,s.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),E=l.forwardRef((function(e,t){const n=(0,c.i)({props:e,name:"MuiTableContainer"}),{className:l,component:s="div"}=n,u=(0,r.Z)(n,f),m=(0,a.Z)({},n,{component:s}),E=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},d,t)})(m);return(0,p.jsx)(h,(0,a.Z)({ref:t,as:s,className:(0,o.Z)(E.root,l),ownerState:m},u))}))},41109:(e,t,n)=>{"use strict";n.d(t,{C:()=>Z});var a=n(67294),r=n(2068),l=n(46901),o=n(5616),i=n(65582),c=n(50657),s=n(88078),u=n(40044),m=n(73313),d=n(61084),p=n(6971),f=n(47135),h=n(61802);const E={cop:"distributed",batchCop:"distributed",tikv:"row",tiflash:"column"},v=e=>{if(!e)return e;for(const[t,n]of Object.entries(E))e=e.replace(new RegExp(t,"g"),n);return e},b=e=>{let{sql:t,query:n,params:E,open:b,onClose:g}=e;const[y,Z]=(0,a.useState)(null),{data:x,error:w}=(0,p.WV)(`${y??"undefined"}/${n}`,E,!1,b&&!!y&&(0,h.nf)(E)),k=(0,r.Z)(((e,t)=>{Z(t)}));return a.createElement(a.Fragment,null,a.createElement(c.Z,{open:b,maxWidth:"xl",fullWidth:!0,onClose:g},a.createElement(i.Z,null,a.createElement(m.Z,{value:y,onChange:k},a.createElement(u.Z,{value:null,label:"SQL"}),a.createElement(u.Z,{value:"explain",label:"EXPLAIN"})),a.createElement("br",null),y?(0,h.nf)(w)?a.createElement(l.Z,{severity:"error"},"Request failed $",(0,f.e$)(w)):(0,h.Rw)(x)?a.createElement(o.Z,{sx:{pt:.5}},a.createElement(s.Z,{width:"80%"}),a.createElement(s.Z,{width:"50%"}),a.createElement(s.Z,{width:"70%"})):a.createElement(o.Z,{sx:{overflowX:"scroll",color:"rgb(248, 248, 242)",backgroundColor:"rgb(40, 42, 54)",borderRadius:2,py:2},mb:2},a.createElement(o.Z,{display:"table",fontFamily:"monospace",fontSize:16,lineHeight:1,sx:{borderSpacing:"16px 0"}},a.createElement(o.Z,{display:"table-header-group"},a.createElement(o.Z,{display:"table-row"},x.fields.map((e=>a.createElement(o.Z,{key:e.name,display:"table-cell"},e.name))))),a.createElement(o.Z,{display:"table-footer-group"},x.data.map(((e,t)=>a.createElement(o.Z,{key:t,display:"table-row"},x.fields.map((t=>a.createElement(o.Z,{key:v(t.name),display:"table-cell",whiteSpace:"pre"},v(e[t.name])))))))))):a.createElement(d.Z,{className:"language-sql"},t))))};var g=n(11057),y=n(96214);function Z(e){const[t,n]=(0,a.useState)(!1),l=(0,r.Z)((()=>{n(!1)})),o=(0,r.Z)((()=>{n(!0)}));return{dialog:a.createElement(b,{query:(null==e?void 0:e.query)??"",sql:null==e?void 0:e.sql,params:null==e?void 0:e.params,open:(0,h.nf)(e)&&t,onClose:l}),button:a.createElement(g.Z,{size:"small",onClick:o,endIcon:a.createElement(y.Z,null),disabled:(0,h.Rw)(e)},"SHOW SQL"),show:t}}},77249:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(67294),r=n(54364),l=n(26613),o=n(5616);const i=e=>e.toFixed(1).replace(/[.,]0$/,""),c=a.createElement(r.Z,{fontSize:"inherit",sx:{verticalAlign:"text-bottom"}}),s=a.createElement(l.Z,{fontSize:"inherit",sx:{verticalAlign:"text-bottom"}}),u="#E30C34",m="#52FF52",d=e=>{let{val:t,suffix:n,reverse:r=!1}=e;return t>0?a.createElement("span",{className:"diff",style:{color:r?u:m}},r?s:c,a.createElement(o.Z,{component:"span",fontSize:14},i(t),n)):t<0?a.createElement("span",{className:"diff",style:{color:r?m:u}},r?c:s,a.createElement(o.Z,{component:"span",fontSize:14},i(-t),n)):a.createElement("span",{className:"diff",style:{color:"gray"}})}},15848:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i,h:()=>c});var a=n(67294),r=n(70131),l=n(95487),o=n(10981);function i(e){let{children:t}=e;const n=(0,l.Z)(),{inView:i,ref:c}=(0,r.YD)({fallbackInView:!0}),s=n&&i;let u;return u="function"==typeof t?t(s):a.createElement(o.Z.Provider,{value:{inView:s}},t),a.createElement("div",{ref:c},u)}function c(e){const t=t=>a.createElement(i,null,a.createElement(e,t));return t.displayName="InViewContainerHOC",t}},46850:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(87462),r=n(11905),l=n(62286),o=n(67294);function i(e){let{...t}=e;return o.createElement(r.Z,{dependencies:[t.bottom,t.left,t.right,t.top]},o.createElement(l.D,(0,a.Z)({id:"watermark"},t,{text:"ossinsight.io",textStyle:{color:"#4c4c4c",fontSize:32,fontWeight:"bolder"}})))}},97256:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)({collection:void 0})},53290:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>c,nS:()=>s,x0:()=>u});var a=n(85529),r=n(67294),l=n(16154),o=n(5616);const i=e=>{let{size:t}=e;return r.createElement(o.Z,{display:"inline-block",position:"relative"},r.createElement(a.Tk0,{size:t}),r.createElement(a.Rvi,{size:t/3,className:l.Z.subIcon}))},c=[{title:"Stars",key:"stars",search:null,prefix:"stars",icon:r.createElement(a.r7p,{size:18})},{title:"Pull Requests",key:"pull-requests",search:"prs",prefix:"prs",icon:r.createElement(a.Rvi,{size:18})},{title:"Pull Request Creators",key:"pull-request-creators",search:"pr-creators",icon:r.createElement(i,{size:18})},{title:"Issues",key:"issues",search:"issues",prefix:"issues",icon:r.createElement(a.hEv,{size:18})}];let s;!function(e){e.Last28Days="last-28-days",e.Month="month"}(s||(s={}));const u=[{type:s.Last28Days,tableTitle:"Last 28 days",label:"Last 28 Days"},{type:s.Month,tableTitle:"Monthly",label:"Month-to-Month"}]},94222:(e,t,n)=>{"use strict";n.d(t,{FH:()=>c,QC:()=>s,nh:()=>i});var a=n(67294),r=n(6971),l=n(61802);const o=Symbol("transformed-data");function i(e,t){const{data:n,loading:i,error:c}=(0,r.WV)(`collection-${t}-history`,{collectionId:e},!1,(0,l.nf)(e));return(0,a.useMemo)((()=>(null!=n&&(n.data=function(e){var t,n,a;if((0,l.N6)(e[o]))return e[o];if(0===e.length)return[];const r=[],i=null!=(t=e[0])&&null!=(n=t.event_month)&&n.includes("T")?"iso":"ymd",c=(null==(a=e[0])?void 0:a.event_month)??"2011-01-01",s=e[e.length-1].event_month;let[u,m]=c.split("-").map(Number);const[d,p]=s.split("-").map(Number);let f=0;const h={};for(;u<d||u===d&&m<=p;){const t=`${u}-${String(m).padStart(2,"0")}-01`,n="iso"===i?new Date(t).toISOString():t,a=new Set(Object.keys(h));for(;f<e.length;){const{repo_name:t,total:l,event_month:o}=e[f];if(o!==n)break;h[t]=l,a.delete(t),r.push(e[f]),f++}a.size>0&&a.forEach((e=>{r.push({event_month:n,repo_name:e,total:h[e]})})),12===m?(u+=1,m=1):m+=1}return Object.defineProperty(e,o,{value:r,writable:!1,configurable:!1,enumerable:!1}),r}(n.data)),{data:n,loading:i,error:c})),[n])}function c(e,t){return(0,r.WV)(`collection-${t}-history-rank`,{collectionId:e},!1,(0,l.nf)(e))}function s(e,t,n){return(0,r.WV)(`collection-${t}-${n??"month"}-rank`,{collectionId:e},!1,(0,l.nf)(e))}},71772:(e,t,n)=>{"use strict";n.d(t,{Kx:()=>m,St:()=>d,bX:()=>u});var a=n(28084),r=n(9566),l=n(67294),o=n(8100),i=n(78265),c=n(64063),s=n.n(c);function u(){const{collections:e}=(0,a.eZ)("plugin-prefetch"),{data:t}=(0,o.ZP)("static/collections",{fetcher:i.vE.getCollections,fallbackData:e,compare:s()});return(0,l.useMemo)((()=>(null==t?void 0:t.data.map((e=>({...e,slug:(0,r.o)(e.name)}))))??[]),[t])}function m(e){const t=u();return(0,l.useMemo)((()=>t.find((t=>t.slug===e))),[t,e])}function d(){const e=u();return(0,l.useCallback)((t=>e.find((e=>e.id===t))),[e])}},33675:(e,t,n)=>{"use strict";n.d(t,{s:()=>h});var a=n(2068),r=n(73313),l=n(11057),o=n(56863),i=n(51233),c=n(5616),s=n(67294),u=n(2108),m=n(87462),d=n(40044);const p=e=>{let{children:t,icon:n,...a}=e;return s.createElement(d.Z,(0,m.Z)({},a,{sx:{textTransform:"unset"},label:s.createElement("span",null,n,"\xa0",t)}))};var f=n(53290);function h(e,t){void 0===t&&(t=!1);const n=(0,s.useMemo)((()=>f.ZP.filter((e=>!t||!!e.prefix))),[t]),[m,d]=(0,u.ZP)(e,{defaultValue:n[0],serialize:e=>e.search,deserialize:e=>n.find((t=>t.search===e))??n[0]}),[h,E]=(0,s.useState)(f.nS.Last28Days),v=(0,a.Z)(((e,t)=>{d(n.find((e=>e.key===t))??n[0])})),b=s.createElement(i.Z,{direction:{xs:"column",sm:"row",md:"column",lg:"row"},justifyContent:"space-between",gap:"1rem",flexWrap:"wrap"},s.createElement(r.Z,{value:m.key,onChange:v,variant:"scrollable",scrollButtons:"auto",allowScrollButtonsMobile:!0},n.map((e=>s.createElement(p,{key:e.key,value:e.key,icon:e.icon},e.title)))),"monthly-rankings"===e&&s.createElement(c.Z,{sx:{display:"flex",alignItems:"center"}},s.createElement(o.Z,{variant:"outlined","aria-label":"display type",size:"small"},f.x0.map((e=>{return s.createElement(l.Z,{key:e.type,sx:{textTransform:"none"},onClick:(t=e.type,()=>{E(t)}),variant:e.type===h?"contained":"outlined"},e.label);var t})))));return{dimension:m,tabs:b,dateType:h}}},25432:(e,t,n)=>{"use strict";n.d(t,{I:()=>d});var a=n(96214),r=n(31812),l=n(67294),o=n(41109),i=n(61802),c=n(47135),s=n(46901),u=n(5616),m=n(88078);function d(e,t,n){let{data:d,loading:p,error:f}=e;const{dialog:h,button:E}=(0,o.C)(d),v=(0,l.useMemo)((()=>{const e=(0,c.e$)(f);return e.includes("API rate limit exceeded")?"Too frequent to operate, please try again after one minute.":e}),[f]);return(0,i.nf)(f)?l.createElement(s.Z,{severity:"error"},v):(0,i.nf)(d)?l.createElement(l.Fragment,null,l.createElement(u.Z,{display:"flex",justifyContent:"flex-end"},E),t(d),h):(0,i.nf)(n)?l.createElement(l.Fragment,null,l.createElement(u.Z,{display:"flex",justifyContent:"flex-end"},l.createElement(r.Z,{loading:!0,size:"small",endIcon:l.createElement(a.Z,null)},"SHOW SQL")),n()):l.createElement(u.Z,null,l.createElement(m.Z,{variant:"text",width:"70%",sx:{mt:1}}),l.createElement(m.Z,{variant:"text",width:"60%",sx:{mt:1}}),l.createElement(m.Z,{variant:"text",width:"90%",sx:{my:1}}))}},53375:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>F});var a=n(67294),r=n(76302),l=n(39960),o=n(31486),i=n.n(o),c=n(15848),s=n(97256),u=n(94222),m=n(33675),d=n(25432),p=n(68317),f=n(30368),h=n(77249),E=n(53290),v=n(69661),b=n(88078),g=n(51233),y=n(90948),Z=n(7906),x=n(295),w=n(53252),k=n(72882),S=n(53184),_=n(53816);const C=(0,y.ZP)(w.Z)((()=>({borderBottom:"1px solid #222"}))),I=(0,y.ZP)(C)((()=>({fontSize:18,fontWeight:"bold","&> .diff":{fontSize:16,display:"inline-flex",alignItems:"center",marginLeft:4},whiteSpace:"nowrap"}))),M=(0,y.ZP)(I)((()=>({fontSize:20,fontWeight:"bold"}))),T=(0,c.h)((function(){const{collection:e}=(0,a.useContext)(s.Z),{dimension:t,tabs:n,dateType:r}=(0,m.s)("monthly-rankings",!0),o=(0,u.QC)(null==e?void 0:e.id,t.key,r);return a.createElement("section",null,a.createElement(p.H2,{id:"monthly-rankings"},"Last 28 Days / Month-to-Month Ranking"),a.createElement(p.P2,null,"The following table ranks repositories using three metrics: stars, pull requests, and issues. The table compares last 28 days or the most recent two months of data and indicates whether repositories are moving up or down the rankings."),n,a.createElement("br",null),(0,d.I)(o,(e=>{var n,o,c;return a.createElement(a.Fragment,null,a.createElement(p.H3,{fontSize:14,align:"center"},`${(null==(n=E.x0.find((e=>e.type===r)))?void 0:n.tableTitle)??"unknown"} Ranking - ${t.title}`),a.createElement(k.Z,null,a.createElement(Z.Z,{className:"clearTable",size:"small",stickyHeader:!0},a.createElement(S.Z,null,a.createElement(_.Z,null,r===E.nS.Month&&a.createElement(M,null,(0,f.m)(null==(o=e.data[0])?void 0:o.current_month)),r===E.nS.Month&&a.createElement(M,null,(0,f.m)(null==(c=e.data[0])?void 0:c.last_month)),r===E.nS.Last28Days&&a.createElement(M,null,"Last 28 Days"),a.createElement(M,null,"Repository"),a.createElement(M,null,t.title),a.createElement(M,{sx:{color:"gray"},align:"right"},"Total"))),a.createElement(x.Z,null,e.data.map((e=>{var t;return a.createElement(_.Z,{key:e.repo_name},r===E.nS.Month&&a.createElement(I,null,e.current_month_rank,a.createElement(h.Z,{val:e.rank_mom,reverse:!0})),r===E.nS.Month&&a.createElement(I,null,e.last_month_rank),r===E.nS.Last28Days&&a.createElement(I,null,e.last_period_rank,a.createElement(h.Z,{val:e.rank_pop,reverse:!0})),a.createElement(C,null,a.createElement(g.Z,{direction:"row",spacing:1,alignItems:"center"},a.createElement(v.Z,{src:`https://github.com/${null==(t=e.repo_name)?void 0:t.split("/")[0]}.png`,sx:{width:20,height:20}}),a.createElement(l.Z,{to:`/analyze/${e.repo_name}`,style:{fontSize:16,marginLeft:8,whiteSpace:"nowrap"}},e.repo_name))),a.createElement(I,null,e.current_month_total||e.last_period_total,a.createElement(h.Z,{val:e.total_mom||e.total_pop,suffix:"%"})),a.createElement(I,{sx:{color:"gray",fontWeight:"normal"},align:"right"},i()(e.total,{separator:""})))}))))))}),(()=>a.createElement(a.Fragment,null,a.createElement(p.H3,{fontSize:14,align:"center"},"Monthly Ranking - ",t.title),a.createElement(k.Z,null,a.createElement(Z.Z,{className:"clearTable",size:"small",stickyHeader:!0},a.createElement(S.Z,null,a.createElement(_.Z,null,a.createElement(M,null,a.createElement(b.Z,{variant:"text",sx:{display:"inline-block"},width:64})),a.createElement(M,null,a.createElement(b.Z,{variant:"text",sx:{display:"inline-block"},width:64})),a.createElement(M,null,"Repository"),a.createElement(M,null,t.title),a.createElement(M,{sx:{color:"gray"},align:"right"},"Total"))),a.createElement(x.Z,null,Array(10).fill(0).map(((e,t)=>a.createElement(_.Z,{key:t},a.createElement(I,null,a.createElement(b.Z,{variant:"text",sx:{display:"inline-block"},width:32}),a.createElement(h.Z,{val:0,reverse:!0})),a.createElement(I,null,a.createElement(b.Z,{variant:"text",sx:{display:"inline-block"},width:32})),a.createElement(C,null,a.createElement(g.Z,{direction:"row",spacing:1,alignItems:"center"},a.createElement(b.Z,{variant:"circular",sx:{display:"inline-block"},width:26,height:26}),a.createElement(b.Z,{variant:"text",sx:{display:"inline-block",flex:1},height:26}))),a.createElement(I,null,a.createElement(b.Z,{variant:"text",sx:{display:"inline-block"},width:32}),a.createElement(h.Z,{val:0,suffix:"%"})),a.createElement(I,{sx:{color:"gray"},align:"right"},a.createElement(b.Z,{variant:"text",sx:{display:"inline-block"},width:32}))))))))))))}));var z=n(60338),P=n(62286),L=n(38622),R=n(46850),N=n(5616);const B=(0,c.h)((function(){const{collection:e}=(0,a.useContext)(s.Z),{dimension:t,tabs:n}=(0,m.s)("historical-rankings"),r=(0,u.FH)(null==e?void 0:e.id,t.key);return a.createElement("section",null,a.createElement(p.H2,{id:"historical-rankings"},"Year-to-year Ranking"),a.createElement(p.P2,null,"The following pipeline chart shows how repo rankings have changed year to year since 2011. Repos are ranked by stars, pull requests, pull request creators, and issues."),n,a.createElement("br",null),(0,d.I)(r,(n=>a.createElement(z.V1,{theme:"dark",renderer:"canvas",data:n.data,height:36*(0,f._)(n.data)+128,fields:{name:"repo_name",time:"event_year",value:"total",rank:"rank"}},a.createElement(P.D,{id:"title",text:`${(null==e?void 0:e.name)??"undefined"} - ${t.title}`}),a.createElement(R.Z,{left:"5%",bottom:"15%"}),a.createElement(L.v,{feature:{saveAsImage:{title:""}}}))),(()=>a.createElement(N.Z,{height:600},a.createElement(b.Z,{variant:"text",width:"70%",sx:{mt:1}}),a.createElement(b.Z,{variant:"text",width:"60%",sx:{mt:1}}),a.createElement(b.Z,{variant:"text",width:"90%",sx:{my:1}})))))})),H=e=>null!=e&&e.name?`${e.name} - Ranking`:"Loading - Ranking",$="monthly ranking,github,gitHub repositories,github collection,github metrics, Month-on-Month Ranking,Historical Ranking".split(",");const F=function(){return a.createElement(r.Z,{title:H,description:"Last 28 days / Monthly ranking of repos in this collection by stars, pull requests, issues. Historical Ranking by Popularity.",keywords:$},a.createElement(T,null),a.createElement(B,null))}},76302:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var a=n(39960),r=n(16550),l=n(95999),o=n(72428),i=n(82595),c=n(6023),s=n(86010),u=n(67294),m=n(88242),d=n(97256),p=n(71772);var f=n(68317);function h(e){let{description:t,children:n}=e;return u.createElement(u.Fragment,null,u.createElement(f.P1,null,t),n)}const E={collectionsPage:"collectionsPage_O_rt",collectionsMainContainer:"collectionsMainContainer_ifEK",collectionsSidebarContainer:"collectionsSidebarContainer_Dqvg",collectionsMainContainerEnhanced:"collectionsMainContainerEnhanced_EiQv",collectionsSidebarContainerHidden:"collectionsSidebarContainerHidden_bGFV",collapsedCollectionsSidebar:"collapsedCollectionsSidebar_eed8",expandSidebarButtonIcon:"expandSidebarButtonIcon_X9ID",collectionsItemWrapperEnhanced:"collectionsItemWrapperEnhanced_Rste"};var v=n(61802),b=n(51233),g=n(15861),y=n(85529);const Z=e=>`https://github.com/pingcap/ossinsight/edit/main/configs/collections/${e.id}.${e.slug}.yml`;function x(e){let{collection:t}=e;return u.createElement(a.Z,{href:Z(t),target:"_blank"},u.createElement(y.vdY,null)," Edit This Collection")}const w=()=>u.createElement(a.Z,{to:"https://github.com/pingcap/ossinsight#how-to-add-collections"},u.createElement(b.Z,{direction:"row",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",spacing:1},u.createElement(o.Z,null),u.createElement(g.Z,{variant:"body2",component:"span",fontSize:"inherit"},"Add a Collection"))),k=function(e){let{title:t,description:a,keywords:o,children:b}=e;const{params:{slug:g}}=(0,r.$B)(),{pathname:y}=(0,r.TH)(),Z=(0,p.Kx)(g),k=function(){const e=(0,p.bX)();return(0,u.useMemo)((()=>e.filter((e=>0!==e.public)).map((e=>({type:"category",label:e.name,href:`/collections/${e.slug}`,collapsed:!0,collapsible:!0,items:[{type:"link",href:`/collections/${e.slug}`,label:"Ranking"},{type:"link",href:`/collections/${e.slug}/trends/`,label:"Popularity Trends"}]})))),[e])}(),[S,_]=(0,u.useState)(!1),[C,I]=(0,u.useState)(!1),M=(0,u.useCallback)((()=>{C&&I(!1),_((e=>!e))}),[C]),T=(0,u.useMemo)((()=>t(Z)),[t,Z]);return u.createElement(m.Z,{title:T,description:a,keywords:o,image:n(31325).Z},u.createElement(d.Z.Provider,{value:{collection:Z}},u.createElement("div",{className:E.collectionsPage},u.createElement("div",{className:E.collectionsMainContainer},(0,v.N6)(k)&&u.createElement("aside",{className:(0,s.Z)(E.collectionsSidebarContainer,{[E.collectionsSidebarContainerHidden]:S}),onTransitionEnd:e=>{e.currentTarget.classList.contains(E.collectionsSidebarContainer)&&S&&I(!0)}},u.createElement(i.Z,{key:"collections",sidebar:k,path:y,onCollapse:M,isHidden:C,Footer:w}),C&&u.createElement("div",{className:E.collapsedCollectionsSidebar,title:(0,l.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,l.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:M,onClick:M},u.createElement(c.Z,{className:E.expandSidebarButtonIcon}))),u.createElement("main",{className:(0,s.Z)(E.collectionsMainContainer,{[E.collectionsMainContainerEnhanced]:S||(0,v.X0)(k)})},u.createElement("div",{className:(0,s.Z)("container padding-top--md padding-bottom--lg",E.collectionsItemWrapper,{[E.collectionsItemWrapperEnhanced]:S})},Z&&u.createElement(x,{collection:Z}),u.createElement(f.H1,{mt:2},T),u.createElement(h,{description:a},b)))))))}},68317:(e,t,n)=>{"use strict";n.d(t,{H1:()=>o,H2:()=>i,H3:()=>c,P1:()=>s,P2:()=>u});var a=n(87462),r=n(15861),l=n(67294);const o=e=>{let{...t}=e;return l.createElement(r.Z,(0,a.Z)({variant:"h1",color:"primary.main",marginBottom:4,marginTop:4},t))},i=e=>{let{...t}=e;return l.createElement(r.Z,(0,a.Z)({},t,{variant:"h2",color:"primary.main",marginBottom:2,marginTop:8}))},c=e=>{let{...t}=e;return l.createElement(r.Z,(0,a.Z)({},t,{variant:"h3",marginBottom:2,marginTop:4}))},s=e=>{let{...t}=e;return l.createElement(r.Z,(0,a.Z)({},t,{variant:"body1",marginBottom:2,marginTop:0,fontSize:18}))},u=e=>{let{...t}=e;return l.createElement(r.Z,(0,a.Z)({},t,{variant:"body1",marginBottom:2,marginTop:0,fontSize:16,color:"#7c7c7c"}))}},30368:(e,t,n)=>{"use strict";n.d(t,{_:()=>r,m:()=>o});var a=n(25108);function r(e){const t=new Set;return e.forEach((e=>t.add(e.repo_name))),t.size}const l=new Intl.DateTimeFormat(["en-US"],{month:"short",year:"numeric"}),o=e=>{if(!e)return"--";try{return l.format(new Date(e))}catch(t){return a.log(`${e} is not a valid time value`),"--"}}},2108:(e,t,n)=>{"use strict";n.d(t,{ON:()=>i,Rc:()=>c,ZP:()=>o,io:()=>s});var a=n(67294),r=n(61802),l=n(16550);const o="undefined"==typeof window?function(e,t){let{defaultValue:n}=t;return[...(0,a.useState)(n)]}:function(e,t,n){let{defaultValue:o,deserialize:i,serialize:c}=t;void 0===n&&(n=!1);const s=(0,l.k6)(),u=(0,l.TH)(),m=(0,a.useMemo)((()=>{const t=new URLSearchParams(u.search).get(e);return(0,r.nf)(t)?i(t):o}),[]),[d,p]=(0,a.useState)(m),f=(0,a.useRef)(!0),h=(0,a.useRef)(!1);return(0,a.useEffect)((()=>{f.current=!1}),[]),(0,a.useEffect)((()=>{if(h.current)return void(h.current=!1);const t=c(d),a=new URLSearchParams(u.search);if((0,r.Rw)(t)){if(!a.has(e))return;a.delete(e)}else{if(a.get(e)===t)return;a.set(e,t)}const l=a.toString(),o=l?`?${l}`:"",i=u.hash?`${u.hash}`:"",m=u.pathname+o+i;n?s.push(m):(s.replace(m),window.history.replaceState(null,"",m))}),[d]),(0,a.useEffect)((()=>{const t=new URLSearchParams(u.search).get(e);(0,r.nf)(t)?p(i(t)):p(o)}),[u]),[d,p]};function i(e){return{defaultValue:e,serialize:e=>e,deserialize:e=>e}}function c(e){return{defaultValue:e,serialize:e=>(0,r.GC)(e)?e:void 0,deserialize:e=>(0,r.GC)(e)?e:void 0}}function s(e){return void 0===e&&(e="true"),{defaultValue:()=>!1,serialize:t=>(0,r.N6)(t)?e:void 0,deserialize:t=>Boolean(t===e)}}},8106:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(67294),r=n(86010),l=n(95999),o=n(25108);const i={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function c(e){let{code:t,className:n}=e;const[c,s]=(0,a.useState)(!1),u=(0,a.useRef)(void 0),m=(0,a.useCallback)((()=>{var e;e=t,navigator.clipboard.writeText(e).catch(o.error),s(!0),u.current=window.setTimeout((()=>{s(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(u.current)),[]),a.createElement("button",{type:"button","aria-label":c?(0,l.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,l.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,l.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,i.copyButton,c&&i.copyButtonCopied),onClick:m},a.createElement("span",{className:i.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:i.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:i.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}},88242:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(87462),r=n(5018),l=n(67294),o=n(61802),i=n(5616);function c(e){let{children:t,header:n,dark:c,sideWidth:s,Side:u,footer:m=!0,...d}=e;return(0,l.useLayoutEffect)((()=>{var e;const t=location.hash.replace(/^#/,"");null==(e=document.getElementById(t))||e.scrollIntoView()}),[]),l.createElement(r.Z,(0,a.Z)({},d,{customFooter:m,header:n,sideWidth:s,side:s&&(0,o.nf)(u)?l.createElement(i.Z,{component:"aside",width:s,position:"sticky",top:"calc(var(--ifm-navbar-height) + 76px)",height:0,zIndex:0},l.createElement(i.Z,{marginTop:"-76px",height:"calc(100vh - var(--ifm-navbar-height))"},l.createElement(u,null))):void 0}),l.createElement("div",{hidden:!0,style:{height:72}}),l.createElement("div",{style:{paddingLeft:s,paddingRight:s}},l.createElement("main",{style:{"--ifm-container-width-xl":"1200px"}},t)))}},82595:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var a=n(67294),r=n(87524),l=n(86010),o=n(86668),i=n(21327),c=n(6351),s=n(35281),u=n(59689),m=n(12466),d=n(1424);const p="menu_Y1UP",f="menuWithAnnouncementBar_fPny";function h(e){let{path:t,sidebar:n,className:r,Footer:o}=e;const i=function(){const{isActive:e}=(0,u.nT)(),[t,n]=(0,a.useState)(e);return(0,m.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",p,i&&f,r)},a.createElement("ul",{className:(0,l.Z)(s.k.docs.docSidebarMenu,"menu__list")},a.createElement(d.Z,{items:n,activePath:t,level:1,Footer:o})))}const E="sidebar_mhZE",v="sidebarWithHideableNavbar__6UL",b="sidebarHidden__LRd",g="sidebarLogo_F_0z";function y(e){let{path:t,sidebar:n,onCollapse:r,isHidden:s,Footer:u}=e;const{navbar:{hideOnScroll:m},docs:{sidebar:{hideable:d}}}=(0,o.L)();return a.createElement("div",{className:(0,l.Z)(E,m&&v,s&&b)},m&&a.createElement(i.Z,{tabIndex:-1,className:g}),a.createElement(h,{path:t,sidebar:n,Footer:u}),d&&a.createElement(c.Z,{onClick:r}))}const Z=a.memo(y);var x=n(13102),w=n(93163);const k=e=>{let{sidebar:t,path:n,Footer:r}=e;const o=(0,w.e)();return a.createElement("ul",{className:(0,l.Z)(s.k.docs.docSidebarMenu,"menu__list")},a.createElement(d.Z,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1,Footer:r}))};function S(e){return a.createElement(x.Zo,{component:k,props:e})}const _=a.memo(S);function C(e){const t=(0,r.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(Z,e),l&&a.createElement(_,e))}},1424:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(87462),r=n(67294),l=n(14353),o=n(89665);const i="sidebarFooter_MfnL";var c=n(61802);function s(e){let{items:t,Footer:n,...s}=e;return r.createElement(l.D,null,t.map(((e,t)=>r.createElement(o.Z,(0,a.Z)({key:t,item:e,index:t},s)))),(0,c.nf)(n)&&r.createElement("li",{className:i},r.createElement(n,null)))}const u=(0,r.memo)(s)},31486:function(e,t){var n,a,r;a=[],n=function(){"use strict";function e(e,t){var n,a,r;for(n=1,a=arguments.length;n<a;++n)if(null!=(t=arguments[n]))for(r in t)i(t,r)&&(e[r]=t[r]);return e}function t(e,t){return t.length-e.length}function n(e,t){return e.factor-t.factor}function a(e){return e.replace(/([.*+?=^!:${}()|[\]/\\])/g,"\\$1")}function r(e,t){var n,a;for(n=0,a=e.length;n<a;++n)t(e[n],n)}function l(e,t){var n;for(n in e)i(e,n)&&t(e[n],n)}var o,i=(o=Object.prototype.hasOwnProperty,function(e,t){return null!=e&&o.call(e,t)});function c(e,t){for(;"string"==typeof t;)t=e[t];return t}function s(e){this._prefixes=e;var r=[],o=[];l(e,(function(e,t){r.push(a(t)),o.push({factor:e,prefix:t})}));var c=this._lcPrefixes={};l(e,(function(t,n){var a=n.toLowerCase();i(e,a)||(c[a]=n)})),o.sort(n),this._list=o,r.sort(t),this._regexp=new RegExp("^\\s*(-)?\\s*(\\d+(?:\\.\\d+)?)\\s*("+r.join("|")+")\\s*(.*)\\s*?$","i")}s.create=function(e,t,n){var a={};return void 0===n&&(n=0),r(e,(function(e,r){a[e]=Math.pow(t,r+n)})),new s(a)},s.prototype.findPrefix=function(e){for(var t,n=this._list,a=0,r=n.length-1;a!==r;)n[t=a+r+1>>1].factor>e?r=t-1:a=t;return n[a]},s.prototype.parse=function(e,t){var n=e.match(this._regexp);if(null!==n){var a,r=n[3];if(i(this._prefixes,r))a=this._prefixes[r];else{if(t||(r=r.toLowerCase(),!i(this._lcPrefixes,r)))return;r=this._lcPrefixes[r],a=this._prefixes[r]}var l=+n[2];return void 0!==n[1]&&(l=-l),{factor:a,prefix:r,unit:n[4],value:l}}};var u={binary:s.create(",Ki,Mi,Gi,Ti,Pi,Ei,Zi,Yi".split(","),1024),SI:s.create("y,z,a,f,p,n,\xb5,m,,k,M,G,T,P,E,Z,Y".split(","),1e3,-8)},m={maxDecimals:2,separator:" ",unit:""},d={scale:"SI",strict:!1};function p(t,n){var a=(n=e({},m,n)).decimals;void 0!==a&&delete n.maxDecimals;var r=b(t,n);t=void 0!==a?r.value.toFixed(a):String(r.value);var l=r.prefix+n.unit;return""===l?t:t+n.separator+l}var f={scale:"binary",unit:"B"};function h(t,n){return p(t,void 0===n?f:e({},f,n))}function E(e,t){var n=v(e,t);return n.value*n.factor}function v(t,n){if("string"!=typeof t)throw new TypeError("str must be a string");n=e({},d,n);var a=c(u,n.scale);if(void 0===a)throw new Error("missing scale");var r=a.parse(t,n.strict);if(void 0===r)throw new Error("cannot parse str");return r}function b(t,n){if(0===t)return{value:0,prefix:""};if(t<0){var a=b(-t,n);return a.value=-a.value,a}if("number"!=typeof t||Number.isNaN(t))throw new TypeError("value must be a number");n=e({},d,n);var r,l=c(u,n.scale);if(void 0===l)throw new Error("missing scale");var o=n.maxDecimals,s="auto"===o;s?r=10:void 0!==o&&(r=Math.pow(10,o));var m,p=n.prefix;if(void 0!==p){if(!i(l._prefixes,p))throw new Error("invalid prefix");m=l._prefixes[p]}else{var f=l.findPrefix(t);if(void 0!==r)do{var h=(m=f.factor)/r;t=Math.round(t/h)*h}while((f=l.findPrefix(t)).factor!==m);else m=f.factor;p=f.prefix}return t=void 0===r?t/m:Math.round(t*r/m)/r,s&&Math.abs(t)>=10&&(t=Math.round(t)),{prefix:p,value:t}}return p.bytes=h,p.parse=E,E.raw=v,p.raw=b,p.Scale=s,p},void 0===(r="function"==typeof n?n.apply(t,a):n)||(e.exports=r)},16154:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a={subIcon:"subIcon_Z7Cn"}},31325:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/thumbnail-eba9bf0777c4e764cb9a714feb9647c3.png"}}]);