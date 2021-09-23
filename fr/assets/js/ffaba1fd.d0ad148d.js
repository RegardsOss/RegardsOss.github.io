"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[83353],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},27492:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={id:"backend-framework-starters-geojson",title:"GeoJSON starter",slug:"/development/backend/framework/starters/geojson/"},u=void 0,c={unversionedId:"development/backend/framework/starters/backend-framework-starters-geojson",id:"development/backend/framework/starters/backend-framework-starters-geojson",isDocsHomePage:!1,title:"GeoJSON starter",description:"Purpose",source:"@site/docs/development/backend/framework/starters/geojson-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/geojson/",permalink:"/fr/docs/development/backend/framework/starters/geojson/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/framework/starters/geojson-starter.md",tags:[],version:"current",frontMatter:{id:"backend-framework-starters-geojson",title:"GeoJSON starter",slug:"/development/backend/framework/starters/geojson/"},sidebar:"dev",previous:{title:"Feign starter",permalink:"/fr/docs/development/backend/framework/starters/feign/"},next:{title:"GSON starter",permalink:"/fr/docs/development/backend/framework/starters/gson/"}},l=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]},{value:"How to",id:"how-to",children:[{value:"How to use the starter",id:"how-to-use-the-starter",children:[]},{value:"How to build geometry",id:"how-to-build-geometry",children:[]}]}],d={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"This starter is an implementation of the ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7946"},"RFC 7946 -  The GeoJSON Format"),"."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>geojson-starter</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"Business dependency"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>geojson-starter</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"Dependency :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../gson/"},"GSON starter"))),(0,a.kt)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,a.kt)("p",null,"Starter autoconfigures Gson to (de)serialize base objects. At the moment, only Gson can do this properly."),(0,a.kt)("h2",{id:"how-to"},"How to"),(0,a.kt)("h3",{id:"how-to-use-the-starter"},"How to use the starter"),(0,a.kt)("p",null,"You can use default ",(0,a.kt)("inlineCode",{parentName:"p"},"Feature")," class or implements your own feature extending ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractFeature")," to customize your ID type and your properties wrapper."),(0,a.kt)("h3",{id:"how-to-build-geometry"},"How to build geometry"),(0,a.kt)("p",null,"The interface and builder class ",(0,a.kt)("inlineCode",{parentName:"p"},"IGeometry")," helps you building valid geometry objects."))}p.isMDXComponent=!0}}]);