"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[27441],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var s=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=s.createContext({}),l=function(e){var n=s.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return s.createElement(a.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=l(t),d=r,m=g["".concat(a,".").concat(d)]||g[d]||u[d]||i;return t?s.createElement(m,o(o({ref:n},c),{},{components:t})):s.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p[g]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87209:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var s=t(58168),r=(t(96540),t(15680));const i={id:"backend-ingest-post-processing-plugins",title:"SIP Post processing plugins",sidebar_label:"SIP post processing",slug:"/development/backend/services/ingest/plugins/sip-post-processing/"},o=void 0,p={unversionedId:"development/backend/regards/ingest/plugins/backend-ingest-post-processing-plugins",id:"version-1.11.0/development/backend/regards/ingest/plugins/backend-ingest-post-processing-plugins",title:"SIP Post processing plugins",description:"Overview",source:"@site/versioned_docs/version-1.11.0/development/backend/regards/ingest/plugins/sip-post-processing-plugins.md",sourceDirName:"development/backend/regards/ingest/plugins",slug:"/development/backend/services/ingest/plugins/sip-post-processing/",permalink:"/docs/1.11.0/development/backend/services/ingest/plugins/sip-post-processing/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/backend/regards/ingest/plugins/sip-post-processing-plugins.md",tags:[],version:"1.11.0",frontMatter:{id:"backend-ingest-post-processing-plugins",title:"SIP Post processing plugins",sidebar_label:"SIP post processing",slug:"/development/backend/services/ingest/plugins/sip-post-processing/"},sidebar:"dev",previous:{title:"AIP tagging",permalink:"/docs/1.11.0/development/backend/services/ingest/plugins/aip-tagging/"},next:{title:"Bus message events",permalink:"/docs/1.11.0/development/backend/services/ingest/events/"}},a={},l=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}],c={toc:l},g="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,s.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"This extension point allows to process a business action after a SIP is successfully handled.")),(0,r.yg)("p",null,"REGARDS do not provides any implementation of this extension point yet."),(0,r.yg)("h2",{id:"interface"},"Interface"),(0,r.yg)("p",null,"   ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/ISipPostprocessing.java"},"ISipPostprocessing")),(0,r.yg)("h2",{id:"implementation"},"Implementation"),(0,r.yg)("p",null,"To learn more about how to create your own plugin see ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.11.0/development/backend/framework/modules/plugins/"},"Plugins")),(0,r.yg)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements ISipPostprocessing {\n\n        @Override\n        public void postprocess(final SIP sip) {\n                \n        }\n   \n}\n')))}u.isMDXComponent=!0}}]);