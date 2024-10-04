"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[68546],{1048:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var r=s(74848),i=s(28453);const d={id:"backend-rest-configure-settings",title:"Configure delivery settings",sidebar_label:"Configure settings",slug:"/development/backend/services/delivery/guides/rest/configure-settings"},n=void 0,o={id:"development/backend/regards/delivery/api-guides/rest/backend-rest-configure-settings",title:"Configure delivery settings",description:"Request",source:"@site/versioned_docs/version-1.15/development/backend/regards/delivery/api-guides/rest/rest-configure-settings.md",sourceDirName:"development/backend/regards/delivery/api-guides/rest",slug:"/development/backend/services/delivery/guides/rest/configure-settings",permalink:"/docs/1.15/development/backend/services/delivery/guides/rest/configure-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/regards/delivery/api-guides/rest/rest-configure-settings.md",tags:[],version:"1.15",frontMatter:{id:"backend-rest-configure-settings",title:"Configure delivery settings",sidebar_label:"Configure settings",slug:"/development/backend/services/delivery/guides/rest/configure-settings"},sidebar:"dev",previous:{title:"Subscribe to responses",permalink:"/docs/1.15/development/backend/services/delivery/guides/amqp/subscribe-to-delivery-responses"},next:{title:"REST API",permalink:"/docs/1.15/development/backend/services/delivery/guides/rest/api"}},c={},l=[{value:"Request",id:"request",level:2},{value:"Body",id:"body",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(t.p,{children:["To configure delivery settings, send a ",(0,r.jsx)(t.code,{children:"PUT"})," request on update operation of dynamic-tenant-setting-controller (\nsee ",(0,r.jsx)(t.a,{href:"/docs/1.15/development/backend/services/delivery/guides/rest/api",children:"rest api documentation"}),") for each setting that needs to be set."]}),"\n",(0,r.jsx)(t.h2,{id:"body",children:"Body"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default value"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"request_ttl"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"12"}),(0,r.jsx)(t.td,{children:"Request time to live in hours. Passed this delay, delivery requests will be deleted."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"s3_server"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:'{"scheme":"https","host":"rs-s3-minio","port":9000,"region":"fr-regards-1","key":"default-key","secret":"default-secret"'})}),(0,r.jsx)(t.td,{children:"Configuration to access S3 server. It has to be overridden to provide your own S3 configuration."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"build_bucket"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"default-build-bucket"}),(0,r.jsx)(t.td,{children:"Temporary bucket on which available files will be transferred before building final zips.  (Not used for now)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"delivery_bucket"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"default-delivery-bucket"}),(0,r.jsx)(t.td,{children:"Bucket on which the ZIP archives will be dropped once orders have been completed. It has to be overridden to provide your own delivery bucket."})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>o});var r=s(96540);const i={},d=r.createContext(i);function n(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);