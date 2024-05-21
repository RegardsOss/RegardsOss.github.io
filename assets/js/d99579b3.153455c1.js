"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[27721],{15680:(e,r,n)=>{n.d(r,{xA:()=>d,yg:()=>m});var t=n(96540);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},d=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=i,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||a;return n?t.createElement(m,o(o({ref:r},d),{},{components:n})):t.createElement(m,o({ref:r},d))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7387:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=n(58168),i=(n(96540),n(15680));const a={id:"backend-dataprovider-product-plugin",title:"Acquisition chain - Product generation plugins",sidebar_label:"Product",slug:"/development/backend/services/dataprovider/plugins/product/"},o=void 0,s={unversionedId:"development/backend/regards/dataprovider/plugins/backend-dataprovider-product-plugin",id:"version-1.12.0/development/backend/regards/dataprovider/plugins/backend-dataprovider-product-plugin",title:"Acquisition chain - Product generation plugins",description:"Overview",source:"@site/versioned_docs/version-1.12.0/development/backend/regards/dataprovider/plugins/product-plugins.md",sourceDirName:"development/backend/regards/dataprovider/plugins",slug:"/development/backend/services/dataprovider/plugins/product/",permalink:"/docs/1.12.0/development/backend/services/dataprovider/plugins/product/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/development/backend/regards/dataprovider/plugins/product-plugins.md",tags:[],version:"1.12.0",frontMatter:{id:"backend-dataprovider-product-plugin",title:"Acquisition chain - Product generation plugins",sidebar_label:"Product",slug:"/development/backend/services/dataprovider/plugins/product/"},sidebar:"dev",previous:{title:"Post processing",permalink:"/docs/1.12.0/development/backend/services/dataprovider/plugins/post-processing/"},next:{title:"Scan",permalink:"/docs/1.12.0/development/backend/services/dataprovider/plugins/scan/"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}],d={toc:l},p="wrapper";function u(e){let{components:r,...n}=e;return(0,i.yg)(p,(0,t.A)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This extension point allows to define how to construct a ",(0,i.yg)("inlineCode",{parentName:"p"},"Product")," from a list of files to acquire. A Product is a package of related files. At the end of the aquisition process each product is represented by a ",(0,i.yg)("inlineCode",{parentName:"p"},"Feature")," in a ",(0,i.yg)("inlineCode",{parentName:"p"},"SIP Collection"),".")),(0,i.yg)("p",null,"REGARDS provides many implementation of this extension point :"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/DefaultProductPlugin.java"},"DefaultProductPlugin")," : Construct one product for each scanned file.")),(0,i.yg)("h2",{id:"interface"},"Interface"),(0,i.yg)("p",null,"   ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/IProductPlugin.java"},"IProductPlugin")),(0,i.yg)("h2",{id:"implementation"},"Implementation"),(0,i.yg)("p",null,"To learn more about how to create your own plugin see ",(0,i.yg)("a",{parentName:"p",href:"/docs/1.12.0/development/backend/framework/modules/plugins/"},"Plugins")),(0,i.yg)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,i.yg)("b",null," NOTE : ")," To define a product with many files, the plugin must return the same product name for each file.",(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements IProductPlugin {\n\n    @Override\n    public String getProductName(Path filePath) throws ModuleException {\n            // Return the product name for the give scanned file\n    }\n   \n}\n')))}u.isMDXComponent=!0}}]);