"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[6451],{2741:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=o(74848),r=o(28453);const s={id:"appendices-geometry",title:"REGARDS products geometry",sidebar_label:"REGARDS products geometry",slug:"/development/appendices/geometry/"},i=void 0,c={id:"development/appendices/appendices-geometry",title:"REGARDS products geometry",description:"Products geometry",source:"@site/versioned_docs/version-1.15/development/appendices/geometry.md",sourceDirName:"development/appendices",slug:"/development/appendices/geometry/",permalink:"/docs/1.15/development/appendices/geometry/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/appendices/geometry.md",tags:[],version:"1.15",frontMatter:{id:"appendices-geometry",title:"REGARDS products geometry",sidebar_label:"REGARDS products geometry",slug:"/development/appendices/geometry/"},sidebar:"dev",previous:{title:"REGARDS XML Models format",permalink:"/docs/1.15/development/appendices/create-model/"}},d={},a=[{value:"Products geometry",id:"products-geometry",level:2},{value:"REGARDS projects geometry configuration",id:"regards-projects-geometry-configuration",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"products-geometry",children:"Products geometry"}),"\n",(0,t.jsx)(n.p,{children:'REGARDS use GeoJson format for indexed products. Geometry associated to a product is defined in "geometry" field like here under exemples.'}),"\n",(0,t.jsxs)(n.p,{children:["As REGARDS uses GeoJson standard, geometries need to respect GeoJson format as defined in ",(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7946#section-3.1.6",children:"RFC 7946"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Principal rules to generate geometries are :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"External ring of polygones MUST be oriented counterclockwise"}),"\n",(0,t.jsx)(n.li,{children:"Distance between two successive points cannot be larger than 180\xb0"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If those two rules are respected, REGARDS will take your geometry into account and will cut polygons which cross antimeridian into multi polygons to allow catalog research using WGS84."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Valid polygons"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "type": "Feature",\n    "id": "file_1.txt",\n    "ipType": "DATA",\n    "geometry": {\n        "type":"MultiPolygon",\n        "coordinates":[[[[-170,28],[-170,10],[-180,10],[-180,28],[-170,28]]],[[[180,28],[170,28],[170,10],[180,10],[180,28]]]]\n    },\n    "properties": {}\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Invalid polygon (wrong rotation way)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "type": "Feature",\n    "id": "file_1.txt",\n    "ipType": "DATA",\n    "geometry": {\n        "type":"Polygon",\n        "coordinates":[[[-50,28],[-50,10],[-20,10],[-120,28],[-50,28]]]\n    },\n    "properties": {}\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Invalid polygon crossing antimeridian (distance between two successive points too large and right rotation way)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "type": "Feature",\n    "id": "file_1.txt",\n    "ipType": "DATA",\n    "geometry": {\n        "type":"Polygon",\n        "coordinates":[[[50,-50],[-20, -50],[-20,10],[50,10],[-50,-50]]]\n    },\n    "properties": {}\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"regards-projects-geometry-configuration",children:"REGARDS projects geometry configuration"}),"\n",(0,t.jsx)(n.p,{children:"For each projet of a REGARDS instance, administrator can configure how geometry will be handled with two parameters :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Projection : Choose between REGARDS handled projections WGS84 (for earth geometries), Mars or Celestial vault."}),"\n",(0,t.jsx)(n.li,{children:"handle polar cap polygons : If true, polygons are transformed using a spherical projection and then polygons should respect the previous second rule defined (distance between too consecutive points)."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Those two parameters are configurable through admin instance HMI during ",(0,t.jsx)(n.a,{href:"/docs/1.15/user-guide/global-configuration/projects/",children:"project configuration"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var t=o(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);