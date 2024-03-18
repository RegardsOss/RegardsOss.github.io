"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[72981],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>m});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(t),g=o,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||a;return t?n.createElement(m,s(s({ref:r},c),{},{components:t})):n.createElement(m,s({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=g;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2109:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=t(58168),o=(t(96540),t(15680));const a={id:"backend-framework-starters-geojson",title:"GeoJSON starter",slug:"/development/backend/framework/starters/geojson/"},s=void 0,i={unversionedId:"development/backend/framework/starters/backend-framework-starters-geojson",id:"version-1.11.0/development/backend/framework/starters/backend-framework-starters-geojson",title:"GeoJSON starter",description:"Purpose",source:"@site/versioned_docs/version-1.11.0/development/backend/framework/starters/geojson-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/geojson/",permalink:"/docs/1.11.0/development/backend/framework/starters/geojson/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/backend/framework/starters/geojson-starter.md",tags:[],version:"1.11.0",frontMatter:{id:"backend-framework-starters-geojson",title:"GeoJSON starter",slug:"/development/backend/framework/starters/geojson/"},sidebar:"dev",previous:{title:"Feign starter",permalink:"/docs/1.11.0/development/backend/framework/starters/feign/"},next:{title:"GSON starter",permalink:"/docs/1.11.0/development/backend/framework/starters/gson/"}},l={},d=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"How to use the starter",id:"how-to-use-the-starter",level:3},{value:"How to build geometry",id:"how-to-build-geometry",level:3}],c={toc:d},p="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(p,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"purpose"},"Purpose"),(0,o.yg)("p",null,"This starter is an implementation of the ",(0,o.yg)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7946"},"RFC 7946 -  The GeoJSON Format"),"."),(0,o.yg)("h2",{id:"configuration"},"Configuration"),(0,o.yg)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>geojson-starter</artifactId>\n</dependency>\n")),(0,o.yg)("p",null,"Business dependency"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>geojson-starter</artifactId>\n</dependency>\n")),(0,o.yg)("p",null,"Dependency :"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/gson/"},"GSON starter"))),(0,o.yg)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,o.yg)("p",null,"Starter autoconfigures Gson to (de)serialize base objects. At the moment, only Gson can do this properly."),(0,o.yg)("h2",{id:"how-to"},"How to"),(0,o.yg)("h3",{id:"how-to-use-the-starter"},"How to use the starter"),(0,o.yg)("p",null,"You can use default ",(0,o.yg)("inlineCode",{parentName:"p"},"Feature")," class or implements your own feature extending ",(0,o.yg)("inlineCode",{parentName:"p"},"AbstractFeature")," to customize your ID type and your properties wrapper."),(0,o.yg)("h3",{id:"how-to-build-geometry"},"How to build geometry"),(0,o.yg)("p",null,"The interface and builder class ",(0,o.yg)("inlineCode",{parentName:"p"},"IGeometry")," helps you building valid geometry objects."))}u.isMDXComponent=!0}}]);