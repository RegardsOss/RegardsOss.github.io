"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[50409],{36620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=n(74848),s=n(28453);const o={id:"backend-framework-getting-started",title:"Getting started with REGARDS framework",sidebar_label:"Getting started",sidebar_position:1,slug:"/development/backend/framework/getting-started/"},i=void 0,d={id:"development/framework/backend-framework-getting-started",title:"Getting started with REGARDS framework",description:"Technology stack",source:"@site/docs/development/framework/getting-started.md",sourceDirName:"development/framework",slug:"/development/backend/framework/getting-started/",permalink:"/docs/development/backend/framework/getting-started/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/framework/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"backend-framework-getting-started",title:"Getting started with REGARDS framework",sidebar_label:"Getting started",sidebar_position:1,slug:"/development/backend/framework/getting-started/"},sidebar:"dev",previous:{title:"Static configuration",permalink:"/docs/development/services/worker-manager/configuration/static_configuration"},next:{title:"Database Migration",permalink:"/docs/development/framework/modules/generate-db-migration"}},a={},l=[{value:"Technology stack",id:"technology-stack",level:2},{value:"Bill Of Materials (i.e. BOM)",id:"bill-of-materials-ie-bom",level:2},{value:"Starters",id:"starters",level:2},{value:"Modules",id:"modules",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"technology-stack",children:"Technology stack"}),"\n",(0,r.jsxs)(t.p,{children:["REGARDS framework is built on top of ",(0,r.jsx)(t.a,{href:"https://spring.io/",children:"Spring projects"}),":"]}),"\n",(0,r.jsx)(t.p,{children:"At the moment, the framework relies on:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"JDK Eclipse Temurin v17.0.3+"}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://spring.io/projects/spring-boot#learn",children:"Spring Boot"})," ",(0,r.jsx)(t.code,{children:"2.6.4"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://spring.io/projects/spring-cloud#learn",children:"Spring Cloud"})," ",(0,r.jsx)(t.code,{children:"2021.0.1"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(91045).A+"",width:"890",height:"591"})}),"\n",(0,r.jsx)(t.h2,{id:"bill-of-materials-ie-bom",children:"Bill Of Materials (i.e. BOM)"}),"\n",(0,r.jsx)(t.p,{children:"To use REGARDS framework building blocks, you have to import its BOM in your pom.xml."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["All dependencies are expressed in term of ",(0,r.jsx)(t.strong,{children:"Maven dependencies"}),"."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:"    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>fr.cnes.regards</groupId>\n                <artifactId>regards-dependencies</artifactId>\n                <version>3.0.0-RELEASE</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"starters",children:"Starters"}),"\n",(0,r.jsxs)(t.p,{children:["REGARDS framework provides ",(0,r.jsx)(t.a,{href:"/docs/development/backend/framework/starters/",children:"building blocks (aka starters)"})," to ease modules and microservices development."]}),"\n",(0,r.jsxs)(t.p,{children:["Go to the ",(0,r.jsx)(t.a,{href:"/docs/development/backend/framework/starters/",children:"dedicated section"})," to learn more."]}),"\n",(0,r.jsx)(t.h2,{id:"modules",children:"Modules"}),"\n",(0,r.jsxs)(t.p,{children:["REGARDS framework provides common modules to manage ",(0,r.jsx)(t.a,{href:"/docs/development/backend/framework/modules/jobs/",children:"jobs"}),", ",(0,r.jsx)(t.a,{href:"/docs/development/backend/framework/modules/plugins/",children:"plugins"}),", templates and workspaces."]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},91045:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/microservice_architecture_spring-a11b6be393f1aba359073e6c1d314324.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);