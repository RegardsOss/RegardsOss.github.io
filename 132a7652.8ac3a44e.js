(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{261:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var i=t(3),r=t(7),a=(t(0),t(2699)),o={id:"backend-ingest-validation-plugins",title:"SIP validation plugins",sidebar_label:"SIP validation",slug:"/development/backend/ingest/plugins/sip-validation"},s={unversionedId:"development/backend/regards/ingest/plugins/backend-ingest-validation-plugins",id:"development/backend/regards/ingest/plugins/backend-ingest-validation-plugins",isDocsHomePage:!1,title:"SIP validation plugins",description:"Overview",source:"@site/docs/development/backend/regards/ingest/plugins/sip-validation-plugins.md",slug:"/development/backend/ingest/plugins/sip-validation",permalink:"/docs/development/backend/ingest/plugins/sip-validation",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/ingest/plugins/sip-validation-plugins.md",version:"current",sidebar_label:"SIP validation",sidebar:"dev",previous:{title:"SIP Pre processing plugins",permalink:"/docs/development/backend/ingest/plugins/sip-pre-processing"},next:{title:"AIP generation plugins",permalink:"/docs/development/backend/ingest/plugins/aip-generation"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Implementation",id:"implementation",children:[]}],c={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"This extension point allows to validate each ",Object(a.b)("inlineCode",{parentName:"p"},"SIP")," sumitted for ingestion."))),Object(a.b)("p",null,"REGARDS provides many implementation of this extension point :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-ingest/blob/master/ingest/ingest-service/src/main/java/fr/cnes/regards/modules/ingest/service/plugin/DefaultSipValidation.java"},"DefaultSipValidation")," : No validation")),Object(a.b)("h2",{id:"interface"},"Interface"),Object(a.b)("p",null,"   ",Object(a.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-ingest/blob/master/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/ISipValidation.java"},"ISipValidation")),Object(a.b)("h2",{id:"implementation"},"Implementation"),Object(a.b)("p",null,"To learn more about how to create your own plugin see ",Object(a.b)("a",{parentName:"p",href:"../../framework/modules/plugins/"},"Plugins")),Object(a.b)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements ISipValidation {\n        @Override\n        public void validate(final SIP sip, Errors errors) {\n                // Add some errors to the Errors parameter if SIP is invalid.\n        }\n}\n')))}p.isMDXComponent=!0},2699:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||a;return t?r.a.createElement(b,s(s({ref:n},c),{},{components:t})):r.a.createElement(b,s({ref:n},c))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);