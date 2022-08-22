"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[28487],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),g=a,m=u["".concat(c,".").concat(g)]||u[g]||p[g]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},19039:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const i={id:"backend-dataprovider-scan-plugin",title:"Acquisition chain - Scan plugins",sidebar_label:"Scan",slug:"/development/backend/services/dataprovider/plugins/scan/"},o=void 0,s={unversionedId:"development/backend/regards/dataprovider/plugins/backend-dataprovider-scan-plugin",id:"development/backend/regards/dataprovider/plugins/backend-dataprovider-scan-plugin",title:"Acquisition chain - Scan plugins",description:"Overview",source:"@site/docs/development/backend/regards/dataprovider/plugins/scan-plugins.md",sourceDirName:"development/backend/regards/dataprovider/plugins",slug:"/development/backend/services/dataprovider/plugins/scan/",permalink:"/docs/development/backend/services/dataprovider/plugins/scan/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dataprovider/plugins/scan-plugins.md",tags:[],version:"current",frontMatter:{id:"backend-dataprovider-scan-plugin",title:"Acquisition chain - Scan plugins",sidebar_label:"Scan",slug:"/development/backend/services/dataprovider/plugins/scan/"},sidebar:"dev",previous:{title:"Product",permalink:"/docs/development/backend/services/dataprovider/plugins/product/"},next:{title:"SIP Generation",permalink:"/docs/development/backend/services/dataprovider/plugins/sip-generation/"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}],d={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This extension point allows to define how to find files to acquire.")),(0,a.kt)("p",null,"REGARDS provides many implementation of this extension point :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/RegexDiskScanning.java"},"RegexDiskScanning")," : Search for files in local directories specifying a regex pattern."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/GlobDiskScanning.java"},"GlobDiskScanning")," : Search for files in local directories specifying a glob pattern."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/GeoJsonFeatureCollectionParserPlugin.java"},"GeoJsonFeatureCollectionParserPlugin")," : Scan a directory to find geojson files. For each geojson file found, generate a json file containing each feature of the geojson file. This plugin is used in combination with the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/GeoJsonSIPGeneration.java"},"GeoJsonSIPGeneration")," to generate one SIP for each feature of a geojson FeatureCollection file.")),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("p",null,"   ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/IScanPlugin.java"},"IScanPlugin")),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"To learn more about how to create your own plugin see ",(0,a.kt)("a",{parentName:"p",href:"../../../../framework/modules/plugins/"},"Plugins")),(0,a.kt)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,a.kt)("b",null,"NOTE : ")," The last acquisition date is provided to the plugin at runtime to avoid scanning already scanned files. This date is the last date when a file as been successfully scanned and acquired.",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements IScanPlugin {\n\n         @Override\n    public List<Path> scan(Optional<OffsetDateTime> lastModificationDate) throws ModuleException {\n            // Return files to acquire\n    }\n   \n}\n')))}p.isMDXComponent=!0}}]);