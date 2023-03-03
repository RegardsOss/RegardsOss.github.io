"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[80281],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(r),m=o,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57754:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={id:"backend-framework-starters-geojson",title:"GeoJSON starter",slug:"/development/backend/framework/starters/geojson/"},s=void 0,i={unversionedId:"development/backend/framework/starters/backend-framework-starters-geojson",id:"version-1.7.1/development/backend/framework/starters/backend-framework-starters-geojson",title:"GeoJSON starter",description:"Purpose",source:"@site/versioned_docs/version-1.7.1/development/backend/framework/starters/geojson-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/geojson/",permalink:"/docs/1.7.1/development/backend/framework/starters/geojson/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/development/backend/framework/starters/geojson-starter.md",tags:[],version:"1.7.1",frontMatter:{id:"backend-framework-starters-geojson",title:"GeoJSON starter",slug:"/development/backend/framework/starters/geojson/"},sidebar:"dev",previous:{title:"Feign starter",permalink:"/docs/1.7.1/development/backend/framework/starters/feign/"},next:{title:"GSON starter",permalink:"/docs/1.7.1/development/backend/framework/starters/gson/"}},l={},d=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"How to use the starter",id:"how-to-use-the-starter",level:3},{value:"How to build geometry",id:"how-to-build-geometry",level:3}],u={toc:d},c="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"This starter is an implementation of the ",(0,o.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7946"},"RFC 7946 -  The GeoJSON Format"),"."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>geojson-starter</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,"Business dependency"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>geojson-starter</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,"Dependency :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../gson/"},"GSON starter"))),(0,o.kt)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,o.kt)("p",null,"Starter autoconfigures Gson to (de)serialize base objects. At the moment, only Gson can do this properly."),(0,o.kt)("h2",{id:"how-to"},"How to"),(0,o.kt)("h3",{id:"how-to-use-the-starter"},"How to use the starter"),(0,o.kt)("p",null,"You can use default ",(0,o.kt)("inlineCode",{parentName:"p"},"Feature")," class or implements your own feature extending ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractFeature")," to customize your ID type and your properties wrapper."),(0,o.kt)("h3",{id:"how-to-build-geometry"},"How to build geometry"),(0,o.kt)("p",null,"The interface and builder class ",(0,o.kt)("inlineCode",{parentName:"p"},"IGeometry")," helps you building valid geometry objects."))}p.isMDXComponent=!0}}]);