"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[28487],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},19039:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],s={id:"backend-dataprovider-scan-plugin",title:"Acquisition chain - Scan plugins",sidebar_label:"Scan",slug:"/development/backend/services/dataprovider/plugins/scan/"},c=void 0,l={unversionedId:"development/backend/regards/dataprovider/plugins/backend-dataprovider-scan-plugin",id:"development/backend/regards/dataprovider/plugins/backend-dataprovider-scan-plugin",isDocsHomePage:!1,title:"Acquisition chain - Scan plugins",description:"Overview",source:"@site/docs/development/backend/regards/dataprovider/plugins/scan-plugins.md",sourceDirName:"development/backend/regards/dataprovider/plugins",slug:"/development/backend/services/dataprovider/plugins/scan/",permalink:"/fr/docs/development/backend/services/dataprovider/plugins/scan/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dataprovider/plugins/scan-plugins.md",tags:[],version:"current",frontMatter:{id:"backend-dataprovider-scan-plugin",title:"Acquisition chain - Scan plugins",sidebar_label:"Scan",slug:"/development/backend/services/dataprovider/plugins/scan/"},sidebar:"dev",previous:{title:"Product",permalink:"/fr/docs/development/backend/services/dataprovider/plugins/product/"},next:{title:"SIP Generation",permalink:"/fr/docs/development/backend/services/dataprovider/plugins/sip-generation/"}},d=[{value:"Overview",id:"overview",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Implementation",id:"implementation",children:[]}],u={toc:d};function p(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This extension point allows to define how to find files to acquire."))),(0,i.kt)("p",null,"REGARDS provides many implementation of this extension point :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/RegexDiskScanning.java"},"RegexDiskScanning")," : Search for files in local directories specifying a regex pattern."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/GlobDiskScanning.java"},"GlobDiskScanning")," : Search for files in local directories specifying a glob pattern."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/GeoJsonFeatureCollectionParserPlugin.java"},"GeoJsonFeatureCollectionParserPlugin")," : Scan a directory to find geojson files. For each geojson file found, generate a json file containing each feature of the geojson file. This plugin is used in combination with the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/GeoJsonSIPGeneration.java"},"GeoJsonSIPGeneration")," to generate one SIP for each feature of a geojson FeatureCollection file.")),(0,i.kt)("h2",{id:"interface"},"Interface"),(0,i.kt)("p",null,"   ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/IScanPlugin.java"},"IScanPlugin")),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"To learn more about how to create your own plugin see ",(0,i.kt)("a",{parentName:"p",href:"../../../../framework/modules/plugins/"},"Plugins")),(0,i.kt)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,i.kt)("b",null,"NOTE : ")," The last acquisition date is provided to the plugin at runtime to avoid scanning already scanned files. This date is the last date when a file as been successfully scanned and acquired.",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements IScanPlugin {\n\n         @Override\n    public List<Path> scan(Optional<OffsetDateTime> lastModificationDate) throws ModuleException {\n            // Return files to acquire\n    }\n   \n}\n')))}p.isMDXComponent=!0}}]);