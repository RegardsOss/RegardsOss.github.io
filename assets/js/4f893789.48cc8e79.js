"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[45130],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),v=r,m=u["".concat(s,".").concat(v)]||u[v]||c[v]||a;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const a={id:"backend-dataprovider-validation-plugin",title:"Acquisition chain - Scan plugins",sidebar_label:"Validation",slug:"/development/backend/services/dataprovider/plugins/validation/"},o=void 0,l={unversionedId:"development/backend/regards/dataprovider/plugins/backend-dataprovider-validation-plugin",id:"version-1.6.0/development/backend/regards/dataprovider/plugins/backend-dataprovider-validation-plugin",title:"Acquisition chain - Scan plugins",description:"Overview",source:"@site/versioned_docs/version-1.6.0/development/backend/regards/dataprovider/plugins/validation-plugins.md",sourceDirName:"development/backend/regards/dataprovider/plugins",slug:"/development/backend/services/dataprovider/plugins/validation/",permalink:"/docs/1.6.0/development/backend/services/dataprovider/plugins/validation/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/backend/regards/dataprovider/plugins/validation-plugins.md",tags:[],version:"1.6.0",frontMatter:{id:"backend-dataprovider-validation-plugin",title:"Acquisition chain - Scan plugins",sidebar_label:"Validation",slug:"/development/backend/services/dataprovider/plugins/validation/"},sidebar:"version-1.6.0/dev",previous:{title:"SIP Generation",permalink:"/docs/1.6.0/development/backend/services/dataprovider/plugins/sip-generation/"},next:{title:"Overview",permalink:"/docs/1.6.0/development/backend/services/ingest/overview/"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This extension point allows to define how to validate a file to acquire. Each input file of the acquisition process is subject to this validation. If the validation fails, the file is rejected.")),(0,r.kt)("p",null,"REGARDS provides many implementation of this extension point :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/DefaultFileValidation.java"},"DefaultFileValidation")," : Check that the file is readable")),(0,r.kt)("h2",{id:"interface"},"Interface"),(0,r.kt)("p",null,"   ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/IValidationPlugin.java"},"IValidationPlugin")),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"To learn more about how to create your own plugin see ",(0,r.kt)("a",{parentName:"p",href:"../../../../framework/modules/plugins/"},"Plugins")),(0,r.kt)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements IValidationPlugin {\n   @Override\n    public boolean validate(Path filePath) throws ModuleException {\n        return true;\n    }\n}\n')))}c.isMDXComponent=!0}}]);