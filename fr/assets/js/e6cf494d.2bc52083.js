(window.webpackJsonp=window.webpackJsonp||[]).push([[2350],{2424:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(2708)),o={id:"backend-dataprovider-product-plugin",title:"Acquisition chain - Product generation plugins",sidebar_label:"Product",slug:"/development/backend/dataprovider/plugins/product/"},c={unversionedId:"development/backend/regards/dataprovider/plugins/backend-dataprovider-product-plugin",id:"version-1.4.0/development/backend/regards/dataprovider/plugins/backend-dataprovider-product-plugin",isDocsHomePage:!1,title:"Acquisition chain - Product generation plugins",description:"Overview",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/dataprovider/plugins/product-plugins.md",slug:"/development/backend/dataprovider/plugins/product/",permalink:"/fr/docs/1.4.0/development/backend/dataprovider/plugins/product/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dataprovider/plugins/product-plugins.md",version:"1.4.0",sidebar_label:"Product",sidebar:"version-1.4.0/dev",previous:{title:"Acquisition chain - Post processing plugins",permalink:"/fr/docs/1.4.0/development/backend/dataprovider/plugins/post-processing/"},next:{title:"Acquisition chain - Scan plugins",permalink:"/fr/docs/1.4.0/development/backend/dataprovider/plugins/scan/"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Implementation",id:"implementation",children:[]}],d={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"This extension point allows to define how to construct a ",Object(a.b)("inlineCode",{parentName:"p"},"Product")," from a list of files to acquire. A Product is a package of related files. At the end of the aquisition process each product is represented by a ",Object(a.b)("inlineCode",{parentName:"p"},"Feature")," in a ",Object(a.b)("inlineCode",{parentName:"p"},"SIP Collection"),"."))),Object(a.b)("p",null,"REGARDS provides many implementation of this extension point :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-dataprovider/blob/master/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/DefaultProductPlugin.java"},"DefaultProductPlugin")," : Construct one product for each scanned file.")),Object(a.b)("h2",{id:"interface"},"Interface"),Object(a.b)("p",null,"   ",Object(a.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-dataprovider/blob/master/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/IProductPlugin.java"},"IProductPlugin")),Object(a.b)("h2",{id:"implementation"},"Implementation"),Object(a.b)("p",null,"To learn more about how to create your own plugin see ",Object(a.b)("a",{parentName:"p",href:"../../../framework/modules/plugins/"},"Plugins")),Object(a.b)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),Object(a.b)("b",null," NOTE : ")," To define a product with many files, the plugin must return the same product name for each file.",Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements IProductPlugin {\n\n    @Override\n    public String getProductName(Path filePath) throws ModuleException {\n            // Return the product name for the give scanned file\n    }\n   \n}\n')))}p.isMDXComponent=!0},2708:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),p=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,m=l["".concat(o,".").concat(b)]||l[b]||u[b]||a;return n?i.a.createElement(m,c(c({ref:t},d),{},{components:n})):i.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<a;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);