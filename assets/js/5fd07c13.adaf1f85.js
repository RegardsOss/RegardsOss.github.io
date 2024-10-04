"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[71264],{73986:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>t,metadata:()=>p,toc:()=>c});var i=s(74848),r=s(28453);const t={id:"backend-ingest-pre-processing-plugins",title:"SIP Pre processing plugins",sidebar_label:"SIP pre processing",slug:"/development/backend/services/ingest/plugins/sip-pre-processing/"},o=void 0,p={id:"development/backend/regards/ingest/plugins/backend-ingest-pre-processing-plugins",title:"SIP Pre processing plugins",description:"Overview",source:"@site/versioned_docs/version-1.14/development/backend/regards/ingest/plugins/sip-pre-processing-plugins.md",sourceDirName:"development/backend/regards/ingest/plugins",slug:"/development/backend/services/ingest/plugins/sip-pre-processing/",permalink:"/docs/1.14/development/backend/services/ingest/plugins/sip-pre-processing/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/regards/ingest/plugins/sip-pre-processing-plugins.md",tags:[],version:"1.14",frontMatter:{id:"backend-ingest-pre-processing-plugins",title:"SIP Pre processing plugins",sidebar_label:"SIP pre processing",slug:"/development/backend/services/ingest/plugins/sip-pre-processing/"},sidebar:"dev",previous:{title:"API",permalink:"/docs/1.14/development/backend/services/ingest/api-swagger"},next:{title:"SIP validation",permalink:"/docs/1.14/development/backend/services/ingest/plugins/sip-validation/"}},a={},c=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["This extension point allows to process a business action before a SIP is handled.",(0,i.jsx)(n.br,{}),"\n","Moreover, for a SIP passed by reference, ",(0,i.jsx)(n.code,{children:"read"})," method is activated to tranform referenced data package to REGARDS normalized SIP."]})}),"\n",(0,i.jsx)(n.p,{children:"REGARDS do not provides any implementation of this extension point yet."}),"\n",(0,i.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/ISipPreprocessing.java",children:"ISipPreprocessing"})}),"\n",(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about how to create your own plugin see ",(0,i.jsx)(n.a,{href:"/docs/1.14/development/backend/framework/modules/plugins/",children:"Plugins"})]}),"\n",(0,i.jsx)(n.p,{children:"Here under is an exemple of how to implements this extension point to create your own business logic."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements ISipPreprocessing {\n\n        @Override\n        public void preprocess(final SIP sip) throws ProcessingStepException {\n                \n        }\n\n        @Override\n        public SIP read(final SIPReference ref) throws InvalidSIPReferenceException {\n\n        }\n   \n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>p});var i=s(96540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);