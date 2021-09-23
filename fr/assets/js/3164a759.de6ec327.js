"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[96414],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return u}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),d=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),v=d(t),u=a,m=v["".concat(p,".").concat(u)]||v[u]||c[u]||i;return t?n.createElement(m,o(o({ref:r},s),{},{components:t})):n.createElement(m,o({ref:r},s))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=v;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},85063:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return v}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"backend-dataprovider-overview",title:"REGARDS dataprovider microservice",sidebar_label:"Overview",slug:"/development/backend/services/dataprovider/overview/"},p=void 0,d={unversionedId:"development/backend/regards/dataprovider/backend-dataprovider-overview",id:"version-1.5.0/development/backend/regards/dataprovider/backend-dataprovider-overview",isDocsHomePage:!1,title:"REGARDS dataprovider microservice",description:"Overview",source:"@site/versioned_docs/version-1.5.0/development/backend/regards/dataprovider/dataprovider.md",sourceDirName:"development/backend/regards/dataprovider",slug:"/development/backend/services/dataprovider/overview/",permalink:"/fr/docs/1.5.0/development/backend/services/dataprovider/overview/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/backend/regards/dataprovider/dataprovider.md",tags:[],version:"1.5.0",frontMatter:{id:"backend-dataprovider-overview",title:"REGARDS dataprovider microservice",sidebar_label:"Overview",slug:"/development/backend/services/dataprovider/overview/"},sidebar:"version-1.5.0/dev",previous:{title:"Notifier",permalink:"/fr/docs/1.5.0/development/backend/services/notifier/plugins/"},next:{title:"Dataprovider",permalink:"/fr/docs/1.5.0/development/backend/services/dataprovider/api/"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[]},{value:"Available Extension points",id:"available-extension-points",children:[]}],c={toc:s};function v(e){var r=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,l,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Dataprovider")," reponsabilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data discovery through a data driven mechanism,"),(0,i.kt)("li",{parentName:"ul"},"Products creation (i.e. group of consistent files),"),(0,i.kt)("li",{parentName:"ul"},"Metadata generation,"),(0,i.kt)("li",{parentName:"ul"},"Transform products to SIPs and ingest them.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Data provider plugins",src:t(48061).Z})),(0,i.kt)("h2",{id:"available-apis"},"Available APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/"},"Data provider"))),(0,i.kt)("h2",{id:"available-extension-points"},"Available Extension points"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/scan/"},"Scan plugins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/validation/"},"Validation plugins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/product/"},"Product genertor plugins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/sip-generation/"},"SIP generation plugins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/post-processing/"},"Post processing plugins"))))}v.isMDXComponent=!0},48061:function(e,r,t){r.Z=t.p+"assets/images/dataprovider-745886502b412584f16edf933e86502e.svg"}}]);