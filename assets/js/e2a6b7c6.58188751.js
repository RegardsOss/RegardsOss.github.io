"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[33725],{28871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(74848),o=n(28453);const s={id:"backend-framework-starters-authentication",title:"Authentication starter",slug:"/development/backend/framework/starters/authentication/"},i=void 0,a={id:"development/backend/framework/starters/backend-framework-starters-authentication",title:"Authentication starter",description:"Purpose",source:"@site/versioned_docs/version-1.15/development/backend/framework/starters/authentication-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/authentication/",permalink:"/docs/1.15/development/backend/framework/starters/authentication/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/framework/starters/authentication-starter.md",tags:[],version:"1.15",frontMatter:{id:"backend-framework-starters-authentication",title:"Authentication starter",slug:"/development/backend/framework/starters/authentication/"},sidebar:"dev",previous:{title:"AMQP starter",permalink:"/docs/1.15/development/backend/framework/starters/amqp/"},next:{title:"Cloud starter",permalink:"/docs/1.15/development/backend/framework/starters/cloud/"}},d={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"How to use",id:"how-to-use",level:3},{value:"How to override default behaviour",id:"how-to-override-default-behaviour",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"purpose",children:"Purpose"}),"\n",(0,r.jsx)(t.p,{children:"This starter is used to retrieve current user properties regardless of the authentication management."}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(t.p,{children:"Add starter dependency to your POM (version depends on the REGARDS BOM)"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>authentication-regards-starter</artifactId>\n</dependency>\n"})}),"\n",(0,r.jsx)(t.p,{children:"Business dependency"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>authentication-regards</artifactId>\n</dependency>\n"})}),"\n",(0,r.jsx)(t.p,{children:"Dependency :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"None"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Used by :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/1.15/development/backend/framework/starters/security/",children:"Security starter"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"autoconfiguration",children:"Autoconfiguration"}),"\n",(0,r.jsxs)(t.p,{children:["Starter autoconfigures beans ",(0,r.jsx)(t.strong,{children:"unless it already exists"})," :"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"IAuthenticationResolver"})," to retrieve current user and role at runtime,"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsxs)(t.p,{children:["In production, the implementation of ",(0,r.jsx)(t.code,{children:"IAuthenticationResolver"})," must be ",(0,r.jsx)(t.strong,{children:"thread safe"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"how-to",children:"How to"}),"\n",(0,r.jsx)(t.h3,{id:"how-to-use",children:"How to use"}),"\n",(0,r.jsx)(t.p,{children:"Just inject bean in your component."}),"\n",(0,r.jsx)(t.h3,{id:"how-to-override-default-behaviour",children:"How to override default behaviour"}),"\n",(0,r.jsxs)(t.p,{children:["Create your own ",(0,r.jsx)(t.code,{children:"IAuthenticationResolver"})," bean to implement your own authentication info retrieval."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);