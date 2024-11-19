"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[29107],{3470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=n(74848),r=n(28453);const i={id:"backend-authentication-token-oauth2",title:"Get JWT Token",sidebar_label:"Get JWT Token",slug:"/development/backend/services/authentication/api-guides/retrieve-token-oauth2/"},d=void 0,c={id:"development/services/authentication/api-guides/rest/backend-authentication-token-oauth2",title:"Get JWT Token",description:"Introduction",source:"@site/docs/development/services/authentication/api-guides/rest/authent-oauth2.mdx",sourceDirName:"development/services/authentication/api-guides/rest",slug:"/development/backend/services/authentication/api-guides/retrieve-token-oauth2/",permalink:"/docs/development/backend/services/authentication/api-guides/retrieve-token-oauth2/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/authentication/api-guides/rest/authent-oauth2.mdx",tags:[],version:"current",frontMatter:{id:"backend-authentication-token-oauth2",title:"Get JWT Token",sidebar_label:"Get JWT Token",slug:"/development/backend/services/authentication/api-guides/retrieve-token-oauth2/"},sidebar:"dev",previous:{title:"How it works",permalink:"/docs/development/backend/services/authentication/"},next:{title:"All endpoints (OpenAPI)",permalink:"/docs/development/backend/services/authentication/api-guides"}},o={},a=[{value:"Introduction",id:"introduction",level:2},{value:"REST API",id:"rest-api",level:2},{value:"How to",id:"how-to",level:3},{value:"Endpoint",id:"endpoint",level:3},{value:"Request headers",id:"request-headers",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Body parameters",id:"body-parameters",level:3},{value:"Response",id:"response",level:3},{value:"Example with cURL",id:"example-with-curl",level:3},{value:"Token usage",id:"token-usage",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:["This section describes how to authenticate through ",(0,s.jsx)(t.code,{children:"rs-authentication"})," microservice and retrieve a JWT Token.\nJWT token is mandatory to access every REGARDS microservice REST API."]}),"\n",(0,s.jsx)(t.h2,{id:"rest-api",children:"REST API"}),"\n",(0,s.jsx)(t.h3,{id:"how-to",children:"How to"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/docs/development/concepts/rest-api/",children:"Regards REST API concept"})," describes how REST interfaces must be handled to\nsubmit requests."]}),"\n",(0,s.jsx)(t.h3,{id:"endpoint",children:"Endpoint"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Endpoint"}),(0,s.jsx)(t.th,{children:"Verb"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/development/backend/services/authentication/api-guides#tag/aip-controller/operation/searchAIPs",children:"/oauth/token"})}),(0,s.jsx)(t.td,{children:"POST"})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"request-headers",children:"Request headers"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "Content-Type": "application/json;charset=UTF-8",\n  "Accept": "application/json",\n  "Authorization": "Basic Y2xpZW50OnNlY3JldA=="\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"query-parameters",children:"Query parameters"}),"\n",(0,s.jsxs)(t.p,{children:["The only query parameter needed is the scope parameter containing the\n",(0,s.jsx)(t.a,{href:"/docs/development/concepts/multitenant/",children:"project or tenant"})," to authenticate to."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Optional"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"scope"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsxs)(t.td,{children:["The REGARDS ",(0,s.jsx)(t.a,{href:"/docs/development/concepts/multitenant/",children:"project or tenant"})," to authenticate to"]})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"body-parameters",children:"Body parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Optional"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"grant-type"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsxs)(t.td,{children:["The authentication grant_type. REGARDS only allows ",(0,s.jsx)(t.code,{children:"password"})," value"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"scope"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsxs)(t.td,{children:["The REGARDS ",(0,s.jsx)(t.a,{href:"/docs/development/concepts/multitenant/",children:"project or tenant"})," to authenticate to"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"username"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(t.td,{children:"User login"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"password"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(t.td,{children:"User password"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(t.p,{children:["Below is a response exemple. The ",(0,s.jsx)(t.code,{children:"access_token"})," is the token you will need to access every REGARDS API endpoints."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey...",\n  "email": "user@regards.fr",\n  "expires_in": 43199,\n  "role": "USER_ROLE",\n  "scope": "project1",\n  "sub": "user@regards.fr",\n  "tenant": "project1",\n  "token_type": "bearer"\n}\n'})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"access_token"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"The JWT token to use in rest api"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"email"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"email of the authenticated user"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"expires_in"}),(0,s.jsx)(t.td,{children:"Number"}),(0,s.jsx)(t.td,{children:"The generated token will expires in this number os seconds"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"role"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Role of the authenticated user"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"scope"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/development/concepts/multitenant/",children:"project or tenant"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sub"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Login of the authenticated user"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tenant"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/development/concepts/multitenant/",children:"project or tenant"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"token_type"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsxs)(t.td,{children:["Always ",(0,s.jsx)(t.strong,{children:"bearer"})]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"example-with-curl",children:"Example with cURL"}),"\n",(0,s.jsxs)(t.p,{children:["You can access authentication endpoint with a ",(0,s.jsx)(t.code,{children:"cURL"})," request to the RS-AUTHENTICATION microservice"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl \'<host>/api/v1/rs-authentication/oauth/token?scope=<scope>\' \\\n--header \'Authorization: Basic Y2xpZW50OnNlY3JldA==\' \\\n--header \'Content-Type: application/json\' \\\n-d \'{"username": "my_username","password": "my_password","grant_type": "password"}\'\n'})}),"\n",(0,s.jsx)(t.h2,{id:"token-usage",children:"Token usage"}),"\n",(0,s.jsxs)(t.p,{children:["To lean how to use retrieved token to access all REGARDS microservices rest endpoints see\n",(0,s.jsx)(t.a,{href:"/docs/development/concepts/rest-api/",children:"REST API Guide section"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var s=n(96540);const r={},i=s.createContext(r);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);