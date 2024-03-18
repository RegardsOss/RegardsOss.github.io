"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[67351],{15680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>m});var a=r(96540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,a,i=function(e,n){if(null==e)return{};var r,a,i={},t=Object.keys(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var r=e.components,i=e.mdxType,t=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),g=i,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||t;return r?a.createElement(m,o(o({ref:n},d),{},{components:r})):a.createElement(m,o({ref:n},d))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var t=r.length,o=new Array(t);o[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<t;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5712:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var a=r(58168),i=(r(96540),r(15680));const t={id:"backend-dataprovider-scan-plugin",title:"Acquisition chain - Scan plugins",sidebar_label:"Scan",slug:"/development/backend/services/dataprovider/plugins/scan/"},o=void 0,s={unversionedId:"development/backend/regards/dataprovider/plugins/backend-dataprovider-scan-plugin",id:"version-1.11.0/development/backend/regards/dataprovider/plugins/backend-dataprovider-scan-plugin",title:"Acquisition chain - Scan plugins",description:"Overview",source:"@site/versioned_docs/version-1.11.0/development/backend/regards/dataprovider/plugins/scan-plugins.md",sourceDirName:"development/backend/regards/dataprovider/plugins",slug:"/development/backend/services/dataprovider/plugins/scan/",permalink:"/docs/1.11.0/development/backend/services/dataprovider/plugins/scan/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/backend/regards/dataprovider/plugins/scan-plugins.md",tags:[],version:"1.11.0",frontMatter:{id:"backend-dataprovider-scan-plugin",title:"Acquisition chain - Scan plugins",sidebar_label:"Scan",slug:"/development/backend/services/dataprovider/plugins/scan/"},sidebar:"dev",previous:{title:"Product",permalink:"/docs/1.11.0/development/backend/services/dataprovider/plugins/product/"},next:{title:"SIP Generation",permalink:"/docs/1.11.0/development/backend/services/dataprovider/plugins/sip-generation/"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}],d={toc:l},p="wrapper";function u(e){let{components:n,...r}=e;return(0,i.yg)(p,(0,a.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This extension point allows to define how to find files to acquire.")),(0,i.yg)("p",null,"REGARDS provides many implementation of this extension point :"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/RegexDiskScanning.java"},"RegexDiskScanning")," : Search for files in local directories specifying a regex pattern."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/GlobDiskScanning.java"},"GlobDiskScanning")," : Search for files in local directories specifying a glob pattern."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/GeoJsonFeatureCollectionParserPlugin.java"},"GeoJsonFeatureCollectionParserPlugin")," : Scan a directory to find geojson files. For each geojson file found, generate a json file containing each feature of the geojson file. This plugin is used in combination with the ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/GeoJsonSIPGeneration.java"},"GeoJsonSIPGeneration")," to generate one SIP for each feature of a geojson FeatureCollection file.")),(0,i.yg)("h2",{id:"interface"},"Interface"),(0,i.yg)("p",null,"   ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/IScanPlugin.java"},"IScanPlugin")),(0,i.yg)("h2",{id:"implementation"},"Implementation"),(0,i.yg)("p",null,"To learn more about how to create your own plugin see ",(0,i.yg)("a",{parentName:"p",href:"/docs/1.11.0/development/backend/framework/modules/plugins/"},"Plugins")),(0,i.yg)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,i.yg)("b",null,"NOTE : ")," The last acquisition date is provided to the plugin at runtime to avoid scanning already scanned files. This date is the last date when a file as been successfully scanned and acquired.",(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements IScanPlugin {\n\n         @Override\n    public List<Path> scan(Optional<OffsetDateTime> lastModificationDate) throws ModuleException {\n            // Return files to acquire\n    }\n   \n}\n')))}u.isMDXComponent=!0}}]);