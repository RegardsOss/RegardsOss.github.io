"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[80956],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return g}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(r),g=i,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||s;return r?t.createElement(m,o(o({ref:n},l),{},{components:r})):t.createElement(m,o({ref:n},l))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5170:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var t=r(87462),i=r(63366),s=(r(67294),r(3905)),o=["components"],a={id:"backend-ingest-pre-processing-plugins",title:"SIP Pre processing plugins",sidebar_label:"SIP pre processing",slug:"/development/backend/services/ingest/plugins/sip-pre-processing/"},p=void 0,c={unversionedId:"development/backend/regards/ingest/plugins/backend-ingest-pre-processing-plugins",id:"version-1.6.0/development/backend/regards/ingest/plugins/backend-ingest-pre-processing-plugins",title:"SIP Pre processing plugins",description:"Overview",source:"@site/versioned_docs/version-1.6.0/development/backend/regards/ingest/plugins/sip-pre-processing-plugins.md",sourceDirName:"development/backend/regards/ingest/plugins",slug:"/development/backend/services/ingest/plugins/sip-pre-processing/",permalink:"/fr/docs/1.6.0/development/backend/services/ingest/plugins/sip-pre-processing/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/backend/regards/ingest/plugins/sip-pre-processing-plugins.md",tags:[],version:"1.6.0",frontMatter:{id:"backend-ingest-pre-processing-plugins",title:"SIP Pre processing plugins",sidebar_label:"SIP pre processing",slug:"/development/backend/services/ingest/plugins/sip-pre-processing/"},sidebar:"version-1.6.0/dev",previous:{title:"Ingest",permalink:"/fr/docs/1.6.0/development/backend/services/ingest/api/"},next:{title:"SIP validation",permalink:"/fr/docs/1.6.0/development/backend/services/ingest/plugins/sip-validation/"}},l=[{value:"Overview",id:"overview",children:[],level:2},{value:"Interface",id:"interface",children:[],level:2},{value:"Implementation",id:"implementation",children:[],level:2}],d={toc:l};function u(e){var n=e.components,r=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This extension point allows to process a business action before a SIP is handled.",(0,s.kt)("br",{parentName:"p"}),"\n","Moreover, for a SIP passed by reference, ",(0,s.kt)("inlineCode",{parentName:"p"},"read")," method is activated to tranform referenced data package to REGARDS normalized SIP."))),(0,s.kt)("p",null,"REGARDS do not provides any implementation of this extension point yet."),(0,s.kt)("h2",{id:"interface"},"Interface"),(0,s.kt)("p",null,"   ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/ISipPreprocessing.java"},"ISipPreprocessing")),(0,s.kt)("h2",{id:"implementation"},"Implementation"),(0,s.kt)("p",null,"To learn more about how to create your own plugin see ",(0,s.kt)("a",{parentName:"p",href:"../../../../framework/modules/plugins/"},"Plugins")),(0,s.kt)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements ISipPreprocessing {\n\n        @Override\n        public void preprocess(final SIP sip) throws ProcessingStepException {\n                \n        }\n\n        @Override\n        public SIP read(final SIPReference ref) throws InvalidSIPReferenceException {\n\n        }\n   \n}\n')))}u.isMDXComponent=!0}}]);