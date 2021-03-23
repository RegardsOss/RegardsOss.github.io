(window.webpackJsonp=window.webpackJsonp||[]).push([[1248],{1319:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),i=t(7),a=(t(0),t(2704)),o={id:"backend-ingest-pre-processing-plugins",title:"SIP Pre processing plugins",sidebar_label:"SIP pre processing",slug:"/development/backend/ingest/plugins/sip-pre-processing/"},s={unversionedId:"development/backend/regards/ingest/plugins/backend-ingest-pre-processing-plugins",id:"version-1.4.0/development/backend/regards/ingest/plugins/backend-ingest-pre-processing-plugins",isDocsHomePage:!1,title:"SIP Pre processing plugins",description:"Overview",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/ingest/plugins/sip-pre-processing-plugins.md",slug:"/development/backend/ingest/plugins/sip-pre-processing/",permalink:"/fr/docs/1.4.0/development/backend/ingest/plugins/sip-pre-processing/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/ingest/plugins/sip-pre-processing-plugins.md",version:"1.4.0",sidebar_label:"SIP pre processing",sidebar:"version-1.4.0/dev",previous:{title:"REGARDS Ingest API",permalink:"/fr/docs/1.4.0/development/backend/ingest/api/"},next:{title:"SIP validation plugins",permalink:"/fr/docs/1.4.0/development/backend/ingest/plugins/sip-validation/"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Implementation",id:"implementation",children:[]}],p={toc:c};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"This extension point allows to process a business action before a SIP is handled.",Object(a.b)("br",{parentName:"p"}),"\n","Moreover, for a SIP passed by reference, ",Object(a.b)("inlineCode",{parentName:"p"},"read")," method is activated to tranform referenced data package to REGARDS normalized SIP."))),Object(a.b)("p",null,"REGARDS do not provides any implementation of this extension point yet."),Object(a.b)("h2",{id:"interface"},"Interface"),Object(a.b)("p",null,"   ",Object(a.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-ingest/blob/master/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/ISipPreprocessing.java"},"ISipPreprocessing")),Object(a.b)("h2",{id:"implementation"},"Implementation"),Object(a.b)("p",null,"To learn more about how to create your own plugin see ",Object(a.b)("a",{parentName:"p",href:"../../../framework/modules/plugins/"},"Plugins")),Object(a.b)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements ISipPreprocessing {\n\n        @Override\n        public void preprocess(final SIP sip) throws ProcessingStepException {\n                \n        }\n\n        @Override\n        public SIP read(final SIPReference ref) throws InvalidSIPReferenceException {\n\n        }\n   \n}\n')))}l.isMDXComponent=!0},2704:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),l=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),b=r,g=d["".concat(o,".").concat(b)]||d[b]||u[b]||a;return t?i.a.createElement(g,s(s({ref:n},p),{},{components:t})):i.a.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);