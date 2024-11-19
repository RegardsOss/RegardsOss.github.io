"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[58260],{76776:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>a});var t=r(74848),d=r(28453);const n={id:"backend-get-order-status-rest",title:"Get Order status REST",sidebar_label:"Get Order status REST",slug:"/development/backend/services/order/guides/get-order-status-rest"},i=void 0,o={id:"development/backend/regards/order/api-guides/backend-get-order-status-rest",title:"Get Order status REST",description:"This page assumes you know how to authenticate your REST API requests",source:"@site/versioned_docs/version-1.14/development/backend/regards/order/api-guides/rest-get-order-status.md",sourceDirName:"development/backend/regards/order/api-guides",slug:"/development/backend/services/order/guides/get-order-status-rest",permalink:"/docs/1.14/development/backend/services/order/guides/get-order-status-rest",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/regards/order/api-guides/rest-get-order-status.md",tags:[],version:"1.14",frontMatter:{id:"backend-get-order-status-rest",title:"Get Order status REST",sidebar_label:"Get Order status REST",slug:"/development/backend/services/order/guides/get-order-status-rest"},sidebar:"dev",previous:{title:"Create Order REST",permalink:"/docs/1.14/development/backend/services/order/guides/create-order-rest"},next:{title:"Download ordered files inside archive",permalink:"/docs/1.14/development/backend/services/order/guides/download-ordered-files"}},l={},a=[{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"cURL example",id:"curl-example",level:3}];function c(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["*This page assumes you know how to ",(0,t.jsx)(s.a,{href:"/docs/1.14/development/backend/regards/authentication/api-guides/get-token-curl.md",children:"authenticate"})," your REST API requests *"]}),"\n",(0,t.jsxs)(s.p,{children:["This guide explains how to retrieve the ",(0,t.jsx)(s.strong,{children:"order status and available files links"})," to download them."]}),"\n",(0,t.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"description"}),(0,t.jsx)(s.th,{children:"url"}),(0,t.jsx)(s.th,{children:"verb"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Retrieve order status and available files to download using order identifier"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"<HOST>"}),"/api/v1/rs-order/user/orders/",(0,t.jsx)(s.code,{children:"{orderId}"}),"/files/available?page=0&size=50"]}),(0,t.jsx)(s.td,{children:"GET"})]})})]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"center"},children:"Optional"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"orderId"}),(0,t.jsx)(s.td,{children:"Int"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(s.td,{children:"Order identifier."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"page"}),(0,t.jsx)(s.td,{children:"Int"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsxs)(s.td,{children:["Page number, default to ",(0,t.jsx)(s.code,{children:"0"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"size"}),(0,t.jsx)(s.td,{children:"Int"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsxs)(s.td,{children:["Number of available files to display, default to ",(0,t.jsx)(s.code,{children:"50"})]})]})]})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"Request headers"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'"Authorization: Bearer <token>"\n'})}),"\n",(0,t.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Http status"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"200"})}),(0,t.jsx)(s.td,{children:"Your order request is over and all files available can be downloaded"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"204"})}),(0,t.jsx)(s.td,{children:"Your order request is pending. No file is available for download yet"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"206"})}),(0,t.jsx)(s.td,{children:"Your order request is pending. Some files are already available for download"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"403"})}),(0,t.jsx)(s.td,{children:"Access denied"})]})]})]}),"\n",(0,t.jsx)(s.admonition,{title:"How to use HTTP status?",type:"info",children:(0,t.jsxs)(s.p,{children:["You can request this endpoint as long as the response status is not ",(0,t.jsx)(s.code,{children:"200"}),".",(0,t.jsx)(s.br,{}),"\n","If status is ",(0,t.jsx)(s.code,{children:"206"}),", the order is not finished but there is some available files you can already download.",(0,t.jsx)(s.br,{}),"\n","If you order creates several SubOrders (your order contains many large files), your order request can be blocked until you have successfully downloaded first available files."]})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "metadata": {\n    "number": 0,\n    "size:": 50,\n    "totalElements": 2,\n    "totalPages": 1\n  },\n  "content": [\n    {\n      "productId": "product",\n      "checksum": "afc76dfea831352297b9097dd4b6c8ab",\n      "fileSize": 1523654,\n      "filename": "file.txt",\n      "mimeType": "application/text",\n      "uri": "<HOST>/api/v1/rs-catalog/{productURN}/files/{fileChecksum}"\n    },\n    {\n      "productId": "product",\n      "checksum": "f3fbc55040c2113d49220f81c8cfdb52",\n      "fileSize": 1523654,\n      "filename": "file2.txt",\n      "mimeType": "application/text",\n      "uri": "<HOST>/api/v1/rs-catalog/{productURN}/files/f3fbc55040c2113d49220f81c8cfdb52"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["This endpoint gives you files link that you can download.",(0,t.jsx)(s.br,{}),"\n","The ",(0,t.jsx)(s.a,{href:"./download-ordered-files",children:"Download ordered files inside archive"})," is another download endpoint that creates an archive containing all availables files."]})}),"\n",(0,t.jsx)(s.h3,{id:"curl-example",children:"cURL example"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'curl -v "<HOST>/api/v1/rs-order/orders/`{orderId}`/files/available" \\\n  -H "Authorization: Bearer <token>"\n'})})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>o});var t=r(96540);const d={},n=t.createContext(d);function i(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);