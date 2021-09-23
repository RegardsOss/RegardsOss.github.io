"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[26261],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=i.createContext({}),l=function(e){var n=i.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return i.createElement(g.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,m=d["".concat(g,".").concat(u)]||d[u]||c[u]||a;return t?i.createElement(m,s(s({ref:n},p),{},{components:t})):i.createElement(m,s({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<a;l++)s[l]=t[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68601:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return g},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var i=t(87462),r=t(63366),a=(t(67294),t(3905)),s=["components"],o={id:"backend-ingest-tagging-plugins",title:"AIP Tagging plugins",sidebar_label:"AIP tagging",slug:"/development/backend/services/ingest/plugins/aip-tagging/"},g=void 0,l={unversionedId:"development/backend/regards/ingest/plugins/backend-ingest-tagging-plugins",id:"development/backend/regards/ingest/plugins/backend-ingest-tagging-plugins",isDocsHomePage:!1,title:"AIP Tagging plugins",description:"Overview",source:"@site/docs/development/backend/regards/ingest/plugins/aip-tagging-plugins.md",sourceDirName:"development/backend/regards/ingest/plugins",slug:"/development/backend/services/ingest/plugins/aip-tagging/",permalink:"/fr/docs/development/backend/services/ingest/plugins/aip-tagging/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/ingest/plugins/aip-tagging-plugins.md",tags:[],version:"current",frontMatter:{id:"backend-ingest-tagging-plugins",title:"AIP Tagging plugins",sidebar_label:"AIP tagging",slug:"/development/backend/services/ingest/plugins/aip-tagging/"},sidebar:"dev",previous:{title:"AIP generation",permalink:"/fr/docs/development/backend/services/ingest/plugins/aip-generation/"},next:{title:"SIP post processing",permalink:"/fr/docs/development/backend/services/ingest/plugins/sip-post-processing/"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Implementation",id:"implementation",children:[]}],c={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This extension point allows to add ",(0,a.kt)("inlineCode",{parentName:"p"},"Tags")," to a list of generated ",(0,a.kt)("inlineCode",{parentName:"p"},"AIP"),". A ",(0,a.kt)("inlineCode",{parentName:"p"},"Tag")," is a keyword or an ",(0,a.kt)("inlineCode",{parentName:"p"},"URN")," identifier of an other ",(0,a.kt)("inlineCode",{parentName:"p"},"AIP"),"."))),(0,a.kt)("p",null,"REGARDS provides many implementation of this extension point :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-service/src/main/java/fr/cnes/regards/modules/ingest/service/chain/plugin/DefaultAIPTagging.java"},"DefaultAIPTagging")," : Add configured tags to each genereted AIP")),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("p",null,"   ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/IAipTagging.java"},"IAipTagging")),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"To learn more about how to create your own plugin see ",(0,a.kt)("a",{parentName:"p",href:"../../../../framework/modules/plugins/"},"Plugins")),(0,a.kt)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements IAipTagging {\n    @Override\n    public void tag(List<AIP> aips) throws TagAIPException {\n            // Add yout tags to each given aips.\n    }\n}\n')))}d.isMDXComponent=!0}}]);