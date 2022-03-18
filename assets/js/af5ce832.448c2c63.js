"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[7855],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return g}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=i,v=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return r?t.createElement(v,a(a({ref:n},l),{},{components:r})):t.createElement(v,a({ref:n},l))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5128:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var t=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={id:"backend-dataprovider-post-processing-plugin",title:"Acquisition chain - Post processing plugins",sidebar_label:"Post processing",slug:"/development/backend/services/dataprovider/plugins/post-processing/"},c=void 0,p={unversionedId:"development/backend/regards/dataprovider/plugins/backend-dataprovider-post-processing-plugin",id:"version-1.6.0/development/backend/regards/dataprovider/plugins/backend-dataprovider-post-processing-plugin",title:"Acquisition chain - Post processing plugins",description:"Overview",source:"@site/versioned_docs/version-1.6.0/development/backend/regards/dataprovider/plugins/post-processing-plugins.md",sourceDirName:"development/backend/regards/dataprovider/plugins",slug:"/development/backend/services/dataprovider/plugins/post-processing/",permalink:"/docs/1.6.0/development/backend/services/dataprovider/plugins/post-processing/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/backend/regards/dataprovider/plugins/post-processing-plugins.md",tags:[],version:"1.6.0",frontMatter:{id:"backend-dataprovider-post-processing-plugin",title:"Acquisition chain - Post processing plugins",sidebar_label:"Post processing",slug:"/development/backend/services/dataprovider/plugins/post-processing/"},sidebar:"version-1.6.0/dev",previous:{title:"Dataprovider",permalink:"/docs/1.6.0/development/backend/services/dataprovider/api/"},next:{title:"Product",permalink:"/docs/1.6.0/development/backend/services/dataprovider/plugins/product/"}},l=[{value:"Overview",id:"overview",children:[],level:2},{value:"Interface",id:"interface",children:[],level:2},{value:"Implementation",id:"implementation",children:[],level:2}],d={toc:l};function u(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This extension point allows to add a post processing action after a product is fully acquired and stored."))),(0,o.kt)("p",null,"REGARDS provides many implementation of this extension point :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[CleanAndAcknowledgePlugin]"," : (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/CleanAndAcknowledgePlugin.java"},"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/CleanAndAcknowledgePlugin.java"),") : create acknowledgement for each product file and clean all original product files")),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("p",null,"   ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/ISipPostProcessingPlugin.java"},"ISipPostProcessingPlugin")),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"To learn more about how to create your own plugin see ",(0,o.kt)("a",{parentName:"p",href:"../../../../framework/modules/plugins/"},"Plugins")),(0,o.kt)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements ISipPostProcessingPlugin {\n   @Override\n    public void postProcess(Product product) throws ModuleException {\n            // Business process\n    }\n}\n')))}u.isMDXComponent=!0}}]);