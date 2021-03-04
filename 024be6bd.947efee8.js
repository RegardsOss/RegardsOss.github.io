(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return v}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),d=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=d(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),b=i,v=p["".concat(o,".").concat(b)]||p[b]||u[b]||r;return t?a.a.createElement(v,c(c({ref:n},s),{},{components:t})):a.a.createElement(v,c({ref:n},s))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var i=t(3),a=t(7),r=(t(0),t(2701)),o={id:"backend-dataprovider-validation-plugin",title:"Acquisition chain - Scan plugins",sidebar_label:"Validation",slug:"/development/backend/dataprovider/plugins/validation"},c={unversionedId:"development/backend/regards/dataprovider/plugins/backend-dataprovider-validation-plugin",id:"version-1.4.0/development/backend/regards/dataprovider/plugins/backend-dataprovider-validation-plugin",isDocsHomePage:!1,title:"Acquisition chain - Scan plugins",description:"Overview",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dataprovider/plugins/validation-plugins.md",slug:"/development/backend/dataprovider/plugins/validation",permalink:"/docs/development/backend/dataprovider/plugins/validation",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dataprovider/plugins/validation-plugins.md",version:"1.4.0",sidebar_label:"Validation",sidebar:"version-1.4.0/dev",previous:{title:"Acquisition chain - SIP generation plugins",permalink:"/docs/development/backend/dataprovider/plugins/sip-generation"},next:{title:"REGARDS ingest microservice",permalink:"/docs/development/backend/ingest/overview"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Implementation",id:"implementation",children:[]}],s={toc:l};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This extension point allows to define how to validate a file to acquire. Each input file of the acquisition process is subject to this validation. If the validation fails, the file is rejected."))),Object(r.b)("p",null,"REGARDS provides many implementation of this extension point :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-dataprovider/blob/master/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/DefaultFileValidation.java"},"DefaultFileValidation")," : Check that the file is readable")),Object(r.b)("h2",{id:"interface"},"Interface"),Object(r.b)("p",null,"   ",Object(r.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-dataprovider/blob/master/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/IValidationPlugin.java"},"IValidationPlugin")),Object(r.b)("h2",{id:"implementation"},"Implementation"),Object(r.b)("p",null,"To learn more about how to create your own plugin see ",Object(r.b)("a",{parentName:"p",href:"../../framework/modules/plugins/"},"Plugins")),Object(r.b)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements IValidationPlugin {\n   @Override\n    public boolean validate(Path filePath) throws ModuleException {\n        return true;\n    }\n}\n')))}d.isMDXComponent=!0}}]);