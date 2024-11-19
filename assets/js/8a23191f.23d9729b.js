"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[95360],{41406:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(74848),i=t(28453);const o={id:"development-manual",title:"Development manual",slug:"/development/"},s=void 0,l={id:"development/development-manual",title:"Development manual",description:"Development contexts",source:"@site/versioned_docs/version-1.15/development/regards-developpement-manual.md",sourceDirName:"development",slug:"/development/",permalink:"/docs/1.15/development/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/regards-developpement-manual.md",tags:[],version:"1.15",frontMatter:{id:"development-manual",title:"Development manual",slug:"/development/"},sidebar:"dev",next:{title:"Concepts",permalink:"/docs/1.15/development/backend/architecture/concepts/"}},d={},c=[{value:"Development contexts",id:"development-contexts",level:2},{value:"Backend",id:"backend",level:3},{value:"Frontend",id:"frontend",level:3},{value:"Create a new microservice",id:"create-a-new-microservice",level:2},{value:"Create a new Microservice plugin",id:"create-a-new-microservice-plugin",level:2},{value:"Contribute to REGARDS",id:"contribute-to-regards",level:2}];function a(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"development-contexts",children:"Development contexts"}),"\n",(0,r.jsx)(n.h3,{id:"backend",children:"Backend"}),"\n",(0,r.jsx)(n.p,{children:"REGARDS allows developers to extends the REGARDS backend functionnalities by creating their own :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/1.15/development/backend/framework/dev-microservice/",children:"Microservice"})," : In order to add new functionalities to REGARDS system throught new REST endpoints"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/1.15/development/backend/framework/modules/plugins/",children:"Microservice plugin"})," : In order to extend microservices functionalities throught defined extension points for each REGARDS Microservice"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Requirements :"})," You need a development environment with :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Maven v3.8.4+"}),"\n",(0,r.jsx)(n.li,{children:"JDK Eclipse Temurin v17.0.3+"}),"\n",(0,r.jsx)(n.li,{children:"Git client"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"frontend",children:"Frontend"}),"\n",(0,r.jsx)(n.p,{children:"REGARDS allows developers to extends REGARDS Frontend functionnalities by creating their own :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/1.15/development/frontend/plugins/service/",children:"UI service plugin"})," : In order to add new functionalities availables from the consultables data id the project user HMI."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/1.15/development/frontend/plugins/criteria/",children:"UI search criterion widget"})," : In order to add new criterion types in REGARDS search forms."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/1.15/development/frontend/plugins/",children:"UI Module plugin"})," : In order to add a totaly new bundle of functionalities"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Requirements :"})," You need a development environment with :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"node v8.10+"}),"\n",(0,r.jsx)(n.li,{children:"npm v16+ (npm i -g npm to upgrade)"}),"\n",(0,r.jsx)(n.li,{children:"Git client"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"create-a-new-microservice",children:"Create a new microservice"}),"\n",(0,r.jsxs)(n.p,{children:["Refer to ",(0,r.jsx)(n.a,{href:"/docs/1.15/development/backend/framework/dev-microservice/",children:"develop a new microservice"})," page to create your own microservice."]}),"\n",(0,r.jsx)(n.h2,{id:"create-a-new-microservice-plugin",children:"Create a new Microservice plugin"}),"\n",(0,r.jsx)(n.p,{children:"Refer to the following pages to develop your own plugins."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/1.15/development/backend/framework/modules/plugins/",children:"Backend plugins"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/1.15/development/frontend/plugins/",children:"Frontend plugins"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"contribute-to-regards",children:"Contribute to REGARDS"}),"\n",(0,r.jsx)(n.p,{children:"You can share your REGARDS developments to the REGARDS community by sending a pull request on our github with your package. Your request will be checked as soon as possible by our maintenance team."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);