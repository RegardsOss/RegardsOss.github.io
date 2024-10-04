"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[99412],{88316:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=t(74848),n=t(28453);const s={id:"backend-framework-starters-geojson",title:"GeoJSON starter",slug:"/development/backend/framework/starters/geojson/"},a=void 0,d={id:"development/backend/framework/starters/backend-framework-starters-geojson",title:"GeoJSON starter",description:"Purpose",source:"@site/versioned_docs/version-1.13.0/development/backend/framework/starters/geojson-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/geojson/",permalink:"/docs/1.13.0/development/backend/framework/starters/geojson/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/framework/starters/geojson-starter.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-framework-starters-geojson",title:"GeoJSON starter",slug:"/development/backend/framework/starters/geojson/"},sidebar:"dev",previous:{title:"Feign starter",permalink:"/docs/1.13.0/development/backend/framework/starters/feign/"},next:{title:"GSON starter",permalink:"/docs/1.13.0/development/backend/framework/starters/gson/"}},i={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"How to use the starter",id:"how-to-use-the-starter",level:3},{value:"How to build geometry",id:"how-to-build-geometry",level:3}];function l(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"purpose",children:"Purpose"}),"\n",(0,o.jsxs)(r.p,{children:["This starter is an implementation of the ",(0,o.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946",children:"RFC 7946 -  The GeoJSON Format"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(r.p,{children:"Add starter dependency to your POM (version depends on the REGARDS BOM)"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-xml",children:"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>geojson-starter</artifactId>\n</dependency>\n"})}),"\n",(0,o.jsx)(r.p,{children:"Business dependency"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-xml",children:"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>geojson-starter</artifactId>\n</dependency>\n"})}),"\n",(0,o.jsx)(r.p,{children:"Dependency :"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/1.13.0/development/backend/framework/starters/gson/",children:"GSON starter"})}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"autoconfiguration",children:"Autoconfiguration"}),"\n",(0,o.jsx)(r.p,{children:"Starter autoconfigures Gson to (de)serialize base objects. At the moment, only Gson can do this properly."}),"\n",(0,o.jsx)(r.h2,{id:"how-to",children:"How to"}),"\n",(0,o.jsx)(r.h3,{id:"how-to-use-the-starter",children:"How to use the starter"}),"\n",(0,o.jsxs)(r.p,{children:["You can use default ",(0,o.jsx)(r.code,{children:"Feature"})," class or implements your own feature extending ",(0,o.jsx)(r.code,{children:"AbstractFeature"})," to customize your ID type and your properties wrapper."]}),"\n",(0,o.jsx)(r.h3,{id:"how-to-build-geometry",children:"How to build geometry"}),"\n",(0,o.jsxs)(r.p,{children:["The interface and builder class ",(0,o.jsx)(r.code,{children:"IGeometry"})," helps you building valid geometry objects."]})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>d});var o=t(96540);const n={},s=o.createContext(n);function a(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);