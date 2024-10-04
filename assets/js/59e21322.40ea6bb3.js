"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[65724],{61549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=n(74848),s=n(28453);const i={id:"backend-amqp-submit-product",title:"Submit product AMQP",sidebar_label:"Submit product AMQP",slug:"/development/backend/services/lta-manager/guides/submit-product-amqp"},d=void 0,c={id:"development/backend/regards/lta-manager/api-guides/backend-amqp-submit-product",title:"Submit product AMQP",description:"This section describes how to submit a new product to the LTA service of REGARDS thanks to AMQPS interfaces.",source:"@site/versioned_docs/version-1.15/development/backend/regards/lta-manager/api-guides/amqp-submit-product.md",sourceDirName:"development/backend/regards/lta-manager/api-guides",slug:"/development/backend/services/lta-manager/guides/submit-product-amqp",permalink:"/docs/1.15/development/backend/services/lta-manager/guides/submit-product-amqp",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/regards/lta-manager/api-guides/amqp-submit-product.md",tags:[],version:"1.15",frontMatter:{id:"backend-amqp-submit-product",title:"Submit product AMQP",sidebar_label:"Submit product AMQP",slug:"/development/backend/services/lta-manager/guides/submit-product-amqp"},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/1.15/development/backend/services/lta-manager/overview/"},next:{title:"Get product progress AMQP",permalink:"/docs/1.15/development/backend/services/lta-manager/guides/get-product-progress-amqp"}},l={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Submit Product creation request",id:"submit-product-creation-request",level:2},{value:"Exchange",id:"exchange",level:3},{value:"Request format",id:"request-format",level:3}];function a(e){const t={admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This section describes how to submit a new product to the LTA service of REGARDS thanks to AMQPS interfaces."}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(t.p,{children:["The diagram below explains the global processing of a new product submission request by REGARDS system.",(0,r.jsx)(t.br,{}),"\n","For a REGARDS client using message queuing, the main steps are:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Publish your product archive request containing product information to REGARDS Rabbitmq server."}),"\n",(0,r.jsx)(t.li,{children:"Wait for notifications from REGARDS on its Rabbitmq server. Those notifications will inform you about your request\nprogression. Request status lifecycles can be :"}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"DENIED"})," : Your request has been denied (possibly malformed request)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"GRANTED"})," -> ",(0,r.jsx)(t.code,{children:"ERROR"})," : Your request has been granted, but an internal error happened."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"GRANTED"})," -> ",(0,r.jsx)(t.code,{children:"SUCCESS"})," : Your request has been granted and processed with success."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"sequence",src:n(24865).A+"",width:"748",height:"612"})}),"\n",(0,r.jsx)(t.h2,{id:"submit-product-creation-request",children:"Submit Product creation request"}),"\n",(0,r.jsx)(t.h3,{id:"exchange",children:"Exchange"}),"\n",(0,r.jsx)(t.p,{children:"Submission requests have to be published to REGARDS Rabbitmq exchange:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Exchange"}),(0,r.jsx)(t.th,{children:"Virtual host"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"regards.broadcast.fr.cnes.regards.modules.ltamanager.amqp.input.SubmissionRequestDtoEvent"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"regards.multitenant.manager"})})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"request-format",children:"Request format"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"Message headers"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'"regards.tenant": "tenant"\n"regards.request.owner": "owner"\n'})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Optional"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"regards.tenant"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{children:"Tenant name depends on REGARDS instance project configuration"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"regards.request.owner"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{children:"Name of the request provider."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"Message body content"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "correlationId": "xxx",\n  "productId": "xxx",\n  "datatype": "xxx",\n  "geometry": {\n    "coordinates": [\n      [\n        [\n          0.07604560969926086,\n          43.98314313658291\n        ],\n        [\n          0.14096031674824933,\n          43.99467654310261\n        ],\n        [\n          0.05530723606827761,\n          43.957963973072\n        ],\n        [\n          0.07604560969926086,\n          43.98314313658291\n        ]\n      ]\n    ],\n    "type": "Polygon"\n  },\n  "files": [\n    {\n      "type": "THUMBNAIL",\n      "url": "file:/input/LTA/2519/thumbnail-4.png",\n      "filename": "thumbnail-4.png",\n      "checksumMd5": "fb8613574312c47f215343ebebaf8ebf",\n      "mimeType": "image/png"\n    },\n    {\n      "type": "RAWDATA",\n      "url": "file:/input/LTA/2519/product-4.zip",\n      "filename": "product-4.zip",\n      "checksumMd5": "ff3d0a4640b403a02007b0039640607b",\n      "mimeType": "application/zip"\n    },\n    {\n      "type": "RAWDATA",\n      "url": "file:/input/LTA/2519/product-4-meta.xml",\n      "filename": "product-4-meta.xml.",\n      "checksumMd5": "fcd0e49a6f85e67ae6d2149a1f67d567",\n      "mimeType": "application/xml"\n    }\n  ],\n  "storePath": "",\n  "session": "",\n  "replaceMode": false,\n  "tags": [\n    "tag1",\n    "tag2"\n  ],\n  "properties": {}\n}\n'})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Optional"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"correlationId"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{children:"Identifier to track this request during the entire workflow. It must be unique."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"productId"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{children:"Product identifier. If two products are submitted with the same id, a new version is created or the previous one is replaced."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"datatype"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{children:"Product datatype. Must be present in the lta-manager configuration."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"geometry"}),(0,r.jsx)(t.td,{children:"GeoJSON RFC 7946"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{children:"Product geometry in GeoJSON RFC 7946 Format."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"files"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{children:"Files linked to the product. At least one is required."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"files.type"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsxs)(t.td,{children:["Type of the file can be ",(0,r.jsx)(t.code,{children:"RAWDATA"}),", ",(0,r.jsx)(t.code,{children:"THUMBNAIL"}),", ",(0,r.jsx)(t.code,{children:"QUICKLOOK_SD"}),", ",(0,r.jsx)(t.code,{children:"QUICKLOOK_MD"})," or ",(0,r.jsx)(t.code,{children:"QUICKLOOK_HD"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"files.url"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{children:"Location of the file. Only http(s) or file protocols are accepted."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"files.filename"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{children:"File name"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"files.checksumMd5"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{children:"File MD5 checksum"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"files.mimeType"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{children:"File mime type"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"storePath"}),(0,r.jsx)(t.td,{children:"Path"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{children:"Path to manually define the destination location for files on archival system. If null, the storePath will be built from the lta-manager configuration."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"session"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{children:"Session to monitor the generation of the product. If not provided, a default session will be used."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"replaceMode"}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{children:"default false - Defines whether a product with the same id should be replaced or duplicated with a new version."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tags"}),(0,r.jsx)(t.td,{children:"Strings"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{children:"Optional labels to add in product metadata tags"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"properties"}),(0,r.jsx)(t.td,{children:"json object"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{children:"Product metadata, Map of key/value properties. Mandatory properties depends on product datatype."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"If two products are submitted with the same provider id :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["if you specify ",(0,r.jsx)(t.code,{children:"replaceMode=false"}),", a new version is created (V2, V3...)"]}),"\n",(0,r.jsxs)(t.li,{children:["if you specify ",(0,r.jsx)(t.code,{children:"replaceMode=true"}),", the previous version is replaced"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"First creation",type:"note",children:(0,r.jsx)(t.p,{children:"If that's the first time you submit a product (no product with same providerId is present on OAIS catalog), both\nendpoint create a first version of the product."})}),"\n",(0,r.jsx)(t.admonition,{title:"Integrity",type:"info",children:(0,r.jsx)(t.p,{children:"REGARDS system will ensure integrity verification of each file of your product by checking provided md5 checksum after\neach file copy."})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Click on the link Get product progress AMQP"})," just below, you will discover responses RS-LTA-MANAGER will send you for\nyour submission request."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},24865:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/archive-request-nominal-cf20e6fccd0d993f455a6e71254d825f.png"},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);