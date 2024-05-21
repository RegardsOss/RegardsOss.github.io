"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[1485],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),u=o,y=d["".concat(s,".").concat(u)]||d[u]||g[u]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93748:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(58168),o=(r(96540),r(15680));const a={id:"appendices-geometry",title:"REGARDS products geometry",sidebar_label:"REGARDS products geometry",slug:"/development/appendices/geometry/"},i=void 0,p={unversionedId:"development/appendices/appendices-geometry",id:"version-1.13.0/development/appendices/appendices-geometry",title:"REGARDS products geometry",description:"Products geometry",source:"@site/versioned_docs/version-1.13.0/development/appendices/geometry.md",sourceDirName:"development/appendices",slug:"/development/appendices/geometry/",permalink:"/docs/1.13.0/development/appendices/geometry/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/appendices/geometry.md",tags:[],version:"1.13.0",frontMatter:{id:"appendices-geometry",title:"REGARDS products geometry",sidebar_label:"REGARDS products geometry",slug:"/development/appendices/geometry/"},sidebar:"dev",previous:{title:"REGARDS XML Models format",permalink:"/docs/1.13.0/development/appendices/create-model/"}},s={},l=[{value:"Products geometry",id:"products-geometry",level:2},{value:"REGARDS projects geometry configuration",id:"regards-projects-geometry-configuration",level:2}],c={toc:l},d="wrapper";function g(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"products-geometry"},"Products geometry"),(0,o.yg)("p",null,'REGARDS use GeoJson format for indexed products. Geometry associated to a product is defined in "geometry" field like here under exemples.'),(0,o.yg)("p",null,"As REGARDS uses GeoJson standard, geometries need to respect GeoJson format as defined in ",(0,o.yg)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7946#section-3.1.6"},"RFC 7946"),"."),(0,o.yg)("p",null,"Principal rules to generate geometries are :"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"External ring of polygones MUST be oriented counterclockwise")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Distance between two successive points cannot be larger than 180\xb0"),(0,o.yg)("p",{parentName:"li"},"If those two rules are respected, REGARDS will take your geometry into account and will cut polygons which cross antimeridian into multi polygons to allow catalog research using WGS84."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"Valid polygons")))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "Feature",\n    "id": "file_1.txt",\n    "ipType": "DATA",\n    "geometry": {\n        "type":"MultiPolygon",\n        "coordinates":[[[[-170,28],[-170,10],[-180,10],[-180,28],[-170,28]]],[[[180,28],[170,28],[170,10],[180,10],[180,28]]]]\n    },\n    "properties": {}\n}\n')),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Invalid polygon (wrong rotation way)")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "Feature",\n    "id": "file_1.txt",\n    "ipType": "DATA",\n    "geometry": {\n        "type":"Polygon",\n        "coordinates":[[[-50,28],[-50,10],[-20,10],[-120,28],[-50,28]]]\n    },\n    "properties": {}\n}\n')),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Invalid polygon crossing antimeridian (distance between two successive points too large and right rotation way)")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "Feature",\n    "id": "file_1.txt",\n    "ipType": "DATA",\n    "geometry": {\n        "type":"Polygon",\n        "coordinates":[[[50,-50],[-20, -50],[-20,10],[50,10],[-50,-50]]]\n    },\n    "properties": {}\n}\n')),(0,o.yg)("h2",{id:"regards-projects-geometry-configuration"},"REGARDS projects geometry configuration"),(0,o.yg)("p",null,"For each projet of a REGARDS instance, administrator can configure how geometry will be handled with two parameters :"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Projection : Choose between REGARDS handled projections WGS84 (for earth geometries), Mars or Celestial vault."),(0,o.yg)("li",{parentName:"ul"},"handle polar cap polygons : If true, polygons are transformed using a spherical projection and then polygons should respect the previous second rule defined (distance between too consecutive points).")),(0,o.yg)("p",null,"Those two parameters are configurable through admin instance HMI during ",(0,o.yg)("a",{parentName:"p",href:"/docs/1.13.0/user-guide/global-configuration/projects/"},"project configuration"),"."))}g.isMDXComponent=!0}}]);