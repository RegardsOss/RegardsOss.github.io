"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[2384],{95788:(e,r,n)=>{n.d(r,{Iu:()=>l,yg:()=>v});var t=n(11504);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},l=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,v=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return n?t.createElement(v,s(s({ref:r},l),{},{components:n})):t.createElement(v,s({ref:r},l))}));function v(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=g;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},70124:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=n(45072),i=(n(11504),n(95788));const o={id:"backend-dataprovider-post-processing-plugin",title:"Acquisition chain - Post processing plugins",sidebar_label:"Post processing",slug:"/development/backend/services/dataprovider/plugins/post-processing/"},s=void 0,a={unversionedId:"development/backend/regards/dataprovider/plugins/backend-dataprovider-post-processing-plugin",id:"version-1.12.0/development/backend/regards/dataprovider/plugins/backend-dataprovider-post-processing-plugin",title:"Acquisition chain - Post processing plugins",description:"Overview",source:"@site/versioned_docs/version-1.12.0/development/backend/regards/dataprovider/plugins/post-processing-plugins.md",sourceDirName:"development/backend/regards/dataprovider/plugins",slug:"/development/backend/services/dataprovider/plugins/post-processing/",permalink:"/docs/1.12.0/development/backend/services/dataprovider/plugins/post-processing/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/development/backend/regards/dataprovider/plugins/post-processing-plugins.md",tags:[],version:"1.12.0",frontMatter:{id:"backend-dataprovider-post-processing-plugin",title:"Acquisition chain - Post processing plugins",sidebar_label:"Post processing",slug:"/development/backend/services/dataprovider/plugins/post-processing/"},sidebar:"dev",previous:{title:"API",permalink:"/docs/1.12.0/development/backend/services/dataprovider/api-swagger"},next:{title:"Product",permalink:"/docs/1.12.0/development/backend/services/dataprovider/plugins/product/"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}],l={toc:c},d="wrapper";function u(e){let{components:r,...n}=e;return(0,i.yg)(d,(0,t.c)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This extension point allows to add a post processing action after a product is fully acquired and stored.")),(0,i.yg)("p",null,"REGARDS provides many implementation of this extension point :"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"[CleanAndAcknowledgePlugin]"," : (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/CleanAndAcknowledgePlugin.java"},"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/CleanAndAcknowledgePlugin.java"),") : create acknowledgement for each product file and clean all original product files")),(0,i.yg)("h2",{id:"interface"},"Interface"),(0,i.yg)("p",null,"   ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/ISipPostProcessingPlugin.java"},"ISipPostProcessingPlugin")),(0,i.yg)("h2",{id:"implementation"},"Implementation"),(0,i.yg)("p",null,"To learn more about how to create your own plugin see ",(0,i.yg)("a",{parentName:"p",href:"/docs/1.12.0/development/backend/framework/modules/plugins/"},"Plugins")),(0,i.yg)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements ISipPostProcessingPlugin {\n   @Override\n    public void postProcess(Product product) throws ModuleException {\n            // Business process\n    }\n}\n')))}u.isMDXComponent=!0}}]);