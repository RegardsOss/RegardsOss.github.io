(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return t?a.a.createElement(b,c(c({ref:n},l),{},{components:t})):a.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},319:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(2701)),o={id:"backend-dataprovider-sip-generation-plugin",title:"Acquisition chain - SIP generation plugins",sidebar_label:"SIP Generation",slug:"/development/backend/dataprovider/plugins/sip-generation"},c={unversionedId:"development/backend/regards/dataprovider/plugins/backend-dataprovider-sip-generation-plugin",id:"development/backend/regards/dataprovider/plugins/backend-dataprovider-sip-generation-plugin",isDocsHomePage:!1,title:"Acquisition chain - SIP generation plugins",description:"Overview",source:"@site/docs/development/backend/regards/dataprovider/plugins/sip-generation-plugins.md",slug:"/development/backend/dataprovider/plugins/sip-generation",permalink:"/docs/next/development/backend/dataprovider/plugins/sip-generation",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dataprovider/plugins/sip-generation-plugins.md",version:"current",sidebar_label:"SIP Generation",sidebar:"dev",previous:{title:"Acquisition chain - Scan plugins",permalink:"/docs/next/development/backend/dataprovider/plugins/scan"},next:{title:"Acquisition chain - Scan plugins",permalink:"/docs/next/development/backend/dataprovider/plugins/validation"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Implementation",id:"implementation",children:[]}],l={toc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This extension point allows to define how to construct a ",Object(i.b)("inlineCode",{parentName:"p"},"SIP")," for a given ",Object(i.b)("inlineCode",{parentName:"p"},"Product"),". Products are composed of files by the ",Object(i.b)("inlineCode",{parentName:"p"},"Product plugin")," of the acquisition chain. This plugin is the one that fill the mata data of each SIP to ingest."))),Object(i.b)("p",null,"REGARDS provides many implementation of this extension point :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-dataprovider/blob/master/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/DefaultSIPGeneration.java"},"DefaultSIPGeneration")," : Only add files information in SIP (no specific descriptive information)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-dataprovider/blob/master/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/GeoJsonSIPGeneration.java"},"GeoJsonSIPGeneration")," : Read each product file to extract GeoJson features and generate SIP according to geometry and label information.")),Object(i.b)("h2",{id:"interface"},"Interface"),Object(i.b)("p",null,"   ",Object(i.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-dataprovider/blob/master/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/ISipGenerationPlugin.java"},"ISipGenerationPlugin")),Object(i.b)("h2",{id:"implementation"},"Implementation"),Object(i.b)("p",null,"To learn more about how to create your own plugin see ",Object(i.b)("a",{parentName:"p",href:"../../framework/modules/plugins/"},"Plugins")),Object(i.b)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),Object(i.b)("p",null,"To learn more about SIP format (from OAIS stantard) see ",Object(i.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-ingest/blob/master/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/builder/SIPBuilder.java"},"OAIS SIP Builder")," class. The framework module ",Object(i.b)("a",{parentName:"p",href:"../../framework/starters/oais"},"OAIS Starter")," explains the information package described by the OAIS recommandation of the CCSDS."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements ISipGenerationPlugin {\n\n        @Override\n    public SIP generate(Product product) throws ModuleException {\n            // return SIP with all meta data in it.\n    }\n   \n}\n')))}p.isMDXComponent=!0}}]);