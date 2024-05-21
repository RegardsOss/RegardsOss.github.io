"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[59511],{15680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>m});var t=r(96540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),g=i,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||a;return r?t.createElement(m,o(o({ref:n},d),{},{components:r})):t.createElement(m,o({ref:n},d))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},54533:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=r(58168),i=(r(96540),r(15680));const a={id:"backend-dataprovider-sip-generation-plugin",title:"Acquisition chain - SIP generation plugins",sidebar_label:"SIP Generation",slug:"/development/backend/services/dataprovider/plugins/sip-generation/"},o=void 0,s={unversionedId:"development/backend/regards/dataprovider/plugins/backend-dataprovider-sip-generation-plugin",id:"version-1.14/development/backend/regards/dataprovider/plugins/backend-dataprovider-sip-generation-plugin",title:"Acquisition chain - SIP generation plugins",description:"Overview",source:"@site/versioned_docs/version-1.14/development/backend/regards/dataprovider/plugins/sip-generation-plugins.md",sourceDirName:"development/backend/regards/dataprovider/plugins",slug:"/development/backend/services/dataprovider/plugins/sip-generation/",permalink:"/docs/development/backend/services/dataprovider/plugins/sip-generation/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/regards/dataprovider/plugins/sip-generation-plugins.md",tags:[],version:"1.14",frontMatter:{id:"backend-dataprovider-sip-generation-plugin",title:"Acquisition chain - SIP generation plugins",sidebar_label:"SIP Generation",slug:"/development/backend/services/dataprovider/plugins/sip-generation/"},sidebar:"dev",previous:{title:"Scan",permalink:"/docs/development/backend/services/dataprovider/plugins/scan/"},next:{title:"Validation",permalink:"/docs/development/backend/services/dataprovider/plugins/validation/"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}],d={toc:p},c="wrapper";function u(e){let{components:n,...r}=e;return(0,i.yg)(c,(0,t.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This extension point allows to define how to construct a ",(0,i.yg)("inlineCode",{parentName:"p"},"SIP")," for a given ",(0,i.yg)("inlineCode",{parentName:"p"},"Product"),". Products are composed of files by the ",(0,i.yg)("inlineCode",{parentName:"p"},"Product plugin")," of the acquisition chain. This plugin is the one that fill the mata data of each SIP to ingest.")),(0,i.yg)("p",null,"REGARDS provides many implementation of this extension point :"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/DefaultSIPGeneration.java"},"DefaultSIPGeneration")," : Only add files information in SIP (no specific descriptive information)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/GeoJsonSIPGeneration.java"},"GeoJsonSIPGeneration")," : Read each product file to extract GeoJson features and generate SIP according to geometry and label information.")),(0,i.yg)("h2",{id:"interface"},"Interface"),(0,i.yg)("p",null,"   ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/ISipGenerationPlugin.java"},"ISipGenerationPlugin")),(0,i.yg)("h2",{id:"implementation"},"Implementation"),(0,i.yg)("p",null,"To learn more about how to create your own plugin see ",(0,i.yg)("a",{parentName:"p",href:"/docs/development/backend/framework/modules/plugins/"},"Plugins")),(0,i.yg)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,i.yg)("p",null,"To learn more about SIP format (from OAIS stantard) see ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/dto/sip/SIPBuilder.java"},"OAIS SIP Builder")," class. The framework module ",(0,i.yg)("a",{parentName:"p",href:"/docs/development/backend/framework/starters/oais/"},"OAIS Starter")," explains the information package described by the OAIS recommandation of the CCSDS."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements ISipGenerationPlugin {\n\n        @Override\n    public SIP generate(Product product) throws ModuleException {\n            // return SIP with all meta data in it.\n    }\n   \n}\n')))}u.isMDXComponent=!0}}]);