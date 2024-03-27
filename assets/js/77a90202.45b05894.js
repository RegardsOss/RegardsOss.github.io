"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[28343],{15680:(e,n,r)=>{r.d(n,{xA:()=>l,yg:()=>m});var t=r(96540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(r),g=i,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return r?t.createElement(m,s(s({ref:n},l),{},{components:r})):t.createElement(m,s({ref:n},l))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=g;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4804:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=r(58168),i=(r(96540),r(15680));const o={id:"backend-dataprovider-post-processing-plugin",title:"Acquisition chain - Post processing plugins",sidebar_label:"Post processing",slug:"/development/backend/services/dataprovider/plugins/post-processing/"},s=void 0,a={unversionedId:"development/backend/regards/dataprovider/plugins/backend-dataprovider-post-processing-plugin",id:"development/backend/regards/dataprovider/plugins/backend-dataprovider-post-processing-plugin",title:"Acquisition chain - Post processing plugins",description:"Overview",source:"@site/docs/development/backend/regards/dataprovider/plugins/post-processing-plugins.md",sourceDirName:"development/backend/regards/dataprovider/plugins",slug:"/development/backend/services/dataprovider/plugins/post-processing/",permalink:"/docs/next/development/backend/services/dataprovider/plugins/post-processing/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dataprovider/plugins/post-processing-plugins.md",tags:[],version:"current",frontMatter:{id:"backend-dataprovider-post-processing-plugin",title:"Acquisition chain - Post processing plugins",sidebar_label:"Post processing",slug:"/development/backend/services/dataprovider/plugins/post-processing/"},sidebar:"dev",previous:{title:"API",permalink:"/docs/next/development/backend/services/dataprovider/api-swagger"},next:{title:"Product",permalink:"/docs/next/development/backend/services/dataprovider/plugins/product/"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}],l={toc:c},d="wrapper";function u(e){let{components:n,...r}=e;return(0,i.yg)(d,(0,t.A)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This extension point allows to add a post processing action after a product is fully acquired and stored.")),(0,i.yg)("p",null,"REGARDS provides many implementation of this extension point :"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"[CleanAndAcknowledgePlugin]"," : (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/CleanAndAcknowledgePlugin.java"},"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/CleanAndAcknowledgePlugin.java"),") : create acknowledgement for each product file and clean all original product files")),(0,i.yg)("h2",{id:"interface"},"Interface"),(0,i.yg)("p",null,"   ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/ISipPostProcessingPlugin.java"},"ISipPostProcessingPlugin")),(0,i.yg)("h2",{id:"implementation"},"Implementation"),(0,i.yg)("p",null,"To learn more about how to create your own plugin see ",(0,i.yg)("a",{parentName:"p",href:"/docs/next/development/backend/framework/modules/plugins/"},"Plugins")),(0,i.yg)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements ISipPostProcessingPlugin {\n   @Override\n    public void postProcess(Product product) throws ModuleException {\n            // Business process\n    }\n}\n')))}u.isMDXComponent=!0}}]);