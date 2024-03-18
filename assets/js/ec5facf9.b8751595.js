"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[52797],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>m});var t=r(96540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),g=l(r),u=i,m=g["".concat(p,".").concat(u)]||g[u]||d[u]||s;return r?t.createElement(m,o(o({ref:n},c),{},{components:r})):t.createElement(m,o({ref:n},c))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[g]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26597:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=r(58168),i=(r(96540),r(15680));const s={id:"backend-ingest-pre-processing-plugins",title:"SIP Pre processing plugins",sidebar_label:"SIP pre processing",slug:"/development/backend/services/ingest/plugins/sip-pre-processing/"},o=void 0,a={unversionedId:"development/backend/regards/ingest/plugins/backend-ingest-pre-processing-plugins",id:"development/backend/regards/ingest/plugins/backend-ingest-pre-processing-plugins",title:"SIP Pre processing plugins",description:"Overview",source:"@site/docs/development/backend/regards/ingest/plugins/sip-pre-processing-plugins.md",sourceDirName:"development/backend/regards/ingest/plugins",slug:"/development/backend/services/ingest/plugins/sip-pre-processing/",permalink:"/docs/development/backend/services/ingest/plugins/sip-pre-processing/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/ingest/plugins/sip-pre-processing-plugins.md",tags:[],version:"current",frontMatter:{id:"backend-ingest-pre-processing-plugins",title:"SIP Pre processing plugins",sidebar_label:"SIP pre processing",slug:"/development/backend/services/ingest/plugins/sip-pre-processing/"},sidebar:"dev",previous:{title:"API",permalink:"/docs/development/backend/services/ingest/api-swagger"},next:{title:"SIP validation",permalink:"/docs/development/backend/services/ingest/plugins/sip-validation/"}},p={},l=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}],c={toc:l},g="wrapper";function d(e){let{components:n,...r}=e;return(0,i.yg)(g,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This extension point allows to process a business action before a SIP is handled.",(0,i.yg)("br",{parentName:"p"}),"\n","Moreover, for a SIP passed by reference, ",(0,i.yg)("inlineCode",{parentName:"p"},"read")," method is activated to tranform referenced data package to REGARDS normalized SIP.")),(0,i.yg)("p",null,"REGARDS do not provides any implementation of this extension point yet."),(0,i.yg)("h2",{id:"interface"},"Interface"),(0,i.yg)("p",null,"   ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/ISipPreprocessing.java"},"ISipPreprocessing")),(0,i.yg)("h2",{id:"implementation"},"Implementation"),(0,i.yg)("p",null,"To learn more about how to create your own plugin see ",(0,i.yg)("a",{parentName:"p",href:"/docs/development/backend/framework/modules/plugins/"},"Plugins")),(0,i.yg)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements ISipPreprocessing {\n\n        @Override\n        public void preprocess(final SIP sip) throws ProcessingStepException {\n                \n        }\n\n        @Override\n        public SIP read(final SIPReference ref) throws InvalidSIPReferenceException {\n\n        }\n   \n}\n')))}d.isMDXComponent=!0}}]);