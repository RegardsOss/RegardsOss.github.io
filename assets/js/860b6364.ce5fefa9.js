"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[88792],{37888:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(74848),r=n(28453);const o={id:"backend-dataprovider-post-processing-plugin",title:"Acquisition chain - Post processing plugins",sidebar_label:"Post processing",slug:"/development/backend/services/dataprovider/plugins/post-processing/"},t=void 0,a={id:"development/backend/regards/dataprovider/plugins/backend-dataprovider-post-processing-plugin",title:"Acquisition chain - Post processing plugins",description:"Overview",source:"@site/versioned_docs/version-1.13.0/development/backend/regards/dataprovider/plugins/post-processing-plugins.md",sourceDirName:"development/backend/regards/dataprovider/plugins",slug:"/development/backend/services/dataprovider/plugins/post-processing/",permalink:"/docs/1.13.0/development/backend/services/dataprovider/plugins/post-processing/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/regards/dataprovider/plugins/post-processing-plugins.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-dataprovider-post-processing-plugin",title:"Acquisition chain - Post processing plugins",sidebar_label:"Post processing",slug:"/development/backend/services/dataprovider/plugins/post-processing/"},sidebar:"dev",previous:{title:"API",permalink:"/docs/1.13.0/development/backend/services/dataprovider/api-swagger"},next:{title:"Product",permalink:"/docs/1.13.0/development/backend/services/dataprovider/plugins/product/"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"This extension point allows to add a post processing action after a product is fully acquired and stored."})}),"\n",(0,i.jsx)(s.p,{children:"REGARDS provides many implementation of this extension point :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["[CleanAndAcknowledgePlugin] : (",(0,i.jsx)(s.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/CleanAndAcknowledgePlugin.java",children:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/CleanAndAcknowledgePlugin.java"}),") : create acknowledgement for each product file and clean all original product files"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/ISipPostProcessingPlugin.java",children:"ISipPostProcessingPlugin"})}),"\n",(0,i.jsx)(s.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsxs)(s.p,{children:["To learn more about how to create your own plugin see ",(0,i.jsx)(s.a,{href:"/docs/1.13.0/development/backend/framework/modules/plugins/",children:"Plugins"})]}),"\n",(0,i.jsx)(s.p,{children:"Here under is an exemple of how to implements this extension point to create your own business logic."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements ISipPostProcessingPlugin {\n   @Override\n    public void postProcess(Product product) throws ModuleException {\n            // Business process\n    }\n}\n'})})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>a});var i=n(96540);const r={},o=i.createContext(r);function t(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);