"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[52451],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>m});var r=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),g=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=g(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=g(t),u=i,m=c["".concat(l,".").concat(u)]||c[u]||d[u]||a;return t?r.createElement(m,s(s({ref:n},p),{},{components:t})):r.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var g=2;g<a;g++)s[g]=t[g];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},11388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>g});var r=t(45072),i=(t(11504),t(95788));const a={id:"backend-ingest-generation-plugins",title:"AIP generation plugins",sidebar_label:"AIP generation",slug:"/development/backend/services/ingest/plugins/aip-generation/"},s=void 0,o={unversionedId:"development/backend/regards/ingest/plugins/backend-ingest-generation-plugins",id:"version-1.11.0/development/backend/regards/ingest/plugins/backend-ingest-generation-plugins",title:"AIP generation plugins",description:"Overview",source:"@site/versioned_docs/version-1.11.0/development/backend/regards/ingest/plugins/aip-generation-plugins.md",sourceDirName:"development/backend/regards/ingest/plugins",slug:"/development/backend/services/ingest/plugins/aip-generation/",permalink:"/docs/1.11.0/development/backend/services/ingest/plugins/aip-generation/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/backend/regards/ingest/plugins/aip-generation-plugins.md",tags:[],version:"1.11.0",frontMatter:{id:"backend-ingest-generation-plugins",title:"AIP generation plugins",sidebar_label:"AIP generation",slug:"/development/backend/services/ingest/plugins/aip-generation/"},sidebar:"dev",previous:{title:"SIP validation",permalink:"/docs/1.11.0/development/backend/services/ingest/plugins/sip-validation/"},next:{title:"AIP tagging",permalink:"/docs/1.11.0/development/backend/services/ingest/plugins/aip-tagging/"}},l={},g=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}],p={toc:g},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This extension point allows to generate one or many ",(0,i.yg)("inlineCode",{parentName:"p"},"AIP"),"(s) for one submitted ",(0,i.yg)("inlineCode",{parentName:"p"},"SIP"),".")),(0,i.yg)("p",null,"REGARDS provides many implementation of this extension point :"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-service/src/main/java/fr/cnes/regards/modules/ingest/service/chain/plugin/DefaultSingleAIPGeneration.java"},"DefaultSingleAIPGeneration")," : Build AIP with all informations from SIP"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins/blob/master/ingest-plugins/enhanced-descriptive-aip-generation/src/main/java/fr/cnes/regards/modules/ingest/plugins/StringEnhancedDescriptiveAipGeneration.java"},"StringEnhancedDescriptiveAipGeneration")," : Allows to add two given String to generated AIPs"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins/blob/master/ingest-plugins/enhanced-descriptive-aip-generation/src/main/java/fr/cnes/regards/modules/ingest/plugins/DoubleEnhancedDescriptiveAipGeneration.java"},"DoubleEnhancedDescriptiveAipGeneration")," : Allows to add a random Double to generated AIPs")),(0,i.yg)("h2",{id:"interface"},"Interface"),(0,i.yg)("p",null,"   ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/IAipGeneration.java"},"IAipGeneration")),(0,i.yg)("h2",{id:"implementation"},"Implementation"),(0,i.yg)("p",null,"To learn more about how to create your own plugin see ",(0,i.yg)("a",{parentName:"p",href:"/docs/1.11.0/development/backend/framework/modules/plugins/"},"Plugins")),(0,i.yg)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements IAipGeneration {\n\n    @Override\n    public List<AIP> generate(SIP sip, UniformResourceName aipId, UniformResourceName sipId, String providerId) {\n    }\n}\n')))}d.isMDXComponent=!0}}]);