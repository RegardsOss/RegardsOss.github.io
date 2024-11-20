"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[77433],{47296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=n(74848),r=n(28453);const i={title:"REGARDS functional overview",sidebar_label:"Overview",slug:"/development/functional-overview/overview/"},o=void 0,l={id:"overview/functional-overview/overview",title:"REGARDS functional overview",description:"Welcome to REGARDS official documentation.",source:"@site/docs/overview/functional-overview/01-overview.md",sourceDirName:"overview/functional-overview",slug:"/development/functional-overview/overview/",permalink:"/docs/development/functional-overview/overview/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/overview/functional-overview/01-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"REGARDS functional overview",sidebar_label:"Overview",slug:"/development/functional-overview/overview/"},sidebar:"overview",next:{title:"Meta Catalog services",permalink:"/docs/development/functional-overview/meta-catalog-services"}},c={},d=[{value:"Difference between GeoJson and OAIS catalog",id:"difference-between-geojson-and-oais-catalog",level:2}];function a(e){const t={a:"a",admonition:"admonition",br:"br",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Welcome to REGARDS official documentation.\nREGARDS is a highly configurable and customisable application. It is therefore essential to know which REGARDS features\nyou are interested in."}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"non-optional core"})," of REGARDS corresponds to the ",(0,s.jsx)(t.a,{href:"/docs/development/functional-overview/meta-catalog-services",children:"meta catalog functional group"}),",\nwhich allows you to build and consult a homogeneous catalog of products from various product suppliers."]}),"\n",(0,s.jsxs)(t.p,{children:["The diagram below shows these optional functional groups grouped around the meta catalog.\n",(0,s.jsx)(t.img,{src:n(28009).A+"",width:"688",height:"608"})]}),"\n",(0,s.jsx)(t.admonition,{title:"Use only what you need",type:"info",children:(0,s.jsx)(t.p,{children:"REGARDS software has been designed to meet several use-cases, allowing you to use group of functionalities that\nyou need and ignoring others components."})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Core REGARDS system"})," is the ",(0,s.jsx)(t.a,{href:"/docs/development/functional-overview/meta-catalog-services",children:"Meta catalog services group"}),".",(0,s.jsx)(t.br,{}),"\n","You can then add the functional groups below as required :"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/docs/development/functional-overview/oais-catalog-services/",children:"OAIS catalog services"})," introduces you the internal catalog that stores\n",(0,s.jsx)(t.strong,{children:"OAIS products"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/docs/development/functional-overview/geojson-catalog-services/",children:"GeoJson catalog services"})," introduces you the internal catalog that stores\n",(0,s.jsx)(t.strong,{children:"GeoJSON products"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/docs/development/functional-overview/microservices-restitution/",children:"Product restitution services"})," introduces you how to retrieve stored products\nthrough the meta catalog."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"difference-between-geojson-and-oais-catalog",children:"Difference between GeoJson and OAIS catalog"}),"\n",(0,s.jsx)(t.p,{children:"Here is the difference between these two internal catalogs:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"OAIS Manager (Ingest)"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"GeoJSON Feature Manager (FEM)"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Populate using REST"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Populate using AMQP (faster)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product deletion"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product update"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["No",(0,s.jsx)("br",{}),"To update a product, use product versioning"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product versioning"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product creation tools"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["Scan yours files using ",(0,s.jsx)("br",{}),(0,s.jsx)(t.a,{href:"/docs/user-guide/import-data/scanned-files/manage-acquisition-chains/",children:"Data acquisition chains"}),(0,s.jsx)("br",{}),"in order to generate SIP"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"DIY"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Product creation feedback ",(0,s.jsx)("br",{}),"using AMQP"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Product creation feedback",(0,s.jsx)("br",{}),"using REST API"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Product creation feedback",(0,s.jsx)("br",{}),"using HMI"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Creation payload format"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["Strict",(0,s.jsx)("br",{}),"List of SIP",(0,s.jsx)("br",{})," matching ",(0,s.jsx)(t.a,{href:"/docs/development/appendices/oais/",children:"OAIS standard"})]}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["Open",(0,s.jsx)("br",{}),"List of Feature",(0,s.jsx)("br",{}),"that are valid REGARDS feature"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Creation payload validation"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Model validation"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Feature may be validated against REGARDS model"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Feature must be valid against REGARDS model"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product enhancement"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["Optional enhancement",(0,s.jsx)("br",{}),"using custom plugins"]}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["Features can be enhancement by workers and then referenced or updated",(0,s.jsx)("br",{}),"Enrichment is delegated to the worker system."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Sending product to ",(0,s.jsx)("br",{}),"microservice Notifier"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Y"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Goal"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Perennisation"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["- A flow between many applications",(0,s.jsx)("br",{}),"with complex product lifecycle",(0,s.jsx)("br",{}),"- Large catalog"]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28009:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/overview-28418df63555779b90d7a35bc2325acc.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);