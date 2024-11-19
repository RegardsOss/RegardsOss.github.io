"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[35002],{75454:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>a});var s=d(74848),n=d(28453);const o={id:"backend-order-download-ordered-files",title:"Download ordered files",sidebar_label:"Download ordered files",sidebar_position:4,slug:"/development/backend/services/order/guides/download-ordered-files"},i=void 0,t={id:"development/services/order/api-guides/rest/backend-order-download-ordered-files",title:"Download ordered files",description:"*This page assumes you know how",source:"@site/docs/development/services/order/api-guides/rest/rest-download-ordered-files.md",sourceDirName:"development/services/order/api-guides/rest",slug:"/development/backend/services/order/guides/download-ordered-files",permalink:"/docs/development/backend/services/order/guides/download-ordered-files",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/order/api-guides/rest/rest-download-ordered-files.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"backend-order-download-ordered-files",title:"Download ordered files",sidebar_label:"Download ordered files",sidebar_position:4,slug:"/development/backend/services/order/guides/download-ordered-files"},sidebar:"dev",previous:{title:"Get Order status",permalink:"/docs/development/backend/services/order/guides/get-order-status-rest"},next:{title:"All endpoints (OpenAPI)",permalink:"/docs/development/backend/services/order/api-swagger"}},l={},a=[{value:"cURL example",id:"curl-example",level:3}];function c(e){const r={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["*This page assumes you know how\nto ",(0,s.jsx)(r.a,{href:"/docs/development/backend/services/authentication/api-guides/retrieve-token-oauth2/",children:"authenticate"}),"\nyour REST API requests *"]}),"\n",(0,s.jsx)(r.p,{children:"Once your order request is processed, you can download the order result as a zip archive file using the here-under\nendpoint."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"description"}),(0,s.jsx)(r.th,{children:"url"}),(0,s.jsx)(r.th,{children:"verb"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Download all available files from provided order ID"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"<HOST>/api/v1/rs-order/user/orders/{orderId}/download"})}),(0,s.jsx)(r.td,{children:"GET"})]})})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Request headers"})," :"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'"Authorization: Bearer <token>"\n'})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{style:{textAlign:"center"},children:"Optional"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"orderId"})}),(0,s.jsx)(r.td,{children:"Int"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(r.td,{children:"Order identifier"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"token"})}),(0,s.jsx)(r.td,{children:"String"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/development/backend/services/authentication/api-guides/retrieve-token-oauth2/",children:"Authentication token"})})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["The downloaded file is named ",(0,s.jsx)(r.code,{children:"order_<orderId>_<date>.zip"}),".",(0,s.jsx)(r.br,{}),"\n","Example: ",(0,s.jsx)(r.code,{children:"order_1_2023-01-24T09_21_50.727542704Z.zip"})]}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:["This endpoint will download currently available files from your order.",(0,s.jsx)(r.br,{}),"\n","This file is a zip archive file containing all files associated to ordered products.",(0,s.jsx)(r.br,{}),"\n","You can use this endpoint everytime new files are available."]})}),"\n",(0,s.jsx)(r.h3,{id:"curl-example",children:"cURL example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'curl -v -O "<HOST>/api/v1/rs-order/user/orders/1234/download" \\\n  -H "Authorization: Bearer <token>"\n'})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,r,d)=>{d.d(r,{R:()=>i,x:()=>t});var s=d(96540);const n={},o=s.createContext(n);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);