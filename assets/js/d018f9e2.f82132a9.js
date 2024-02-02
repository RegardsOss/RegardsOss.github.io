"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[80664],{95788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>m});var i=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,m=c["".concat(l,".").concat(u)]||c[u]||g[u]||a;return t?i.createElement(m,s(s({ref:n},d),{},{components:t})):i.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<a;p++)s[p]=t[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},81200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=t(45072),r=(t(11504),t(95788));const a={id:"backend-ingest-validation-plugins",title:"SIP validation plugins",sidebar_label:"SIP validation",slug:"/development/backend/services/ingest/plugins/sip-validation/"},s=void 0,o={unversionedId:"development/backend/regards/ingest/plugins/backend-ingest-validation-plugins",id:"version-1.13.0/development/backend/regards/ingest/plugins/backend-ingest-validation-plugins",title:"SIP validation plugins",description:"Overview",source:"@site/versioned_docs/version-1.13.0/development/backend/regards/ingest/plugins/sip-validation-plugins.md",sourceDirName:"development/backend/regards/ingest/plugins",slug:"/development/backend/services/ingest/plugins/sip-validation/",permalink:"/docs/1.13.0/development/backend/services/ingest/plugins/sip-validation/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/regards/ingest/plugins/sip-validation-plugins.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-ingest-validation-plugins",title:"SIP validation plugins",sidebar_label:"SIP validation",slug:"/development/backend/services/ingest/plugins/sip-validation/"},sidebar:"dev",previous:{title:"SIP pre processing",permalink:"/docs/1.13.0/development/backend/services/ingest/plugins/sip-pre-processing/"},next:{title:"AIP generation",permalink:"/docs/1.13.0/development/backend/services/ingest/plugins/aip-generation/"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}],d={toc:p},c="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,i.c)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"This extension point allows to validate each ",(0,r.yg)("inlineCode",{parentName:"p"},"SIP")," sumitted for ingestion.")),(0,r.yg)("p",null,"REGARDS provides many implementation of this extension point :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-service/src/main/java/fr/cnes/regards/modules/ingest/service/chain/plugin/DefaultSipValidation.java"},"DefaultSipValidation")," : No validation")),(0,r.yg)("h2",{id:"interface"},"Interface"),(0,r.yg)("p",null,"   ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/ISipValidation.java"},"ISipValidation")),(0,r.yg)("h2",{id:"implementation"},"Implementation"),(0,r.yg)("p",null,"To learn more about how to create your own plugin see ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.13.0/development/backend/framework/modules/plugins/"},"Plugins")),(0,r.yg)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements ISipValidation {\n        @Override\n        public void validate(final SIP sip, Errors errors) {\n                // Add some errors to the Errors parameter if SIP is invalid.\n        }\n}\n')))}g.isMDXComponent=!0}}]);