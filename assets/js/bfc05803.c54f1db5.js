"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[5358],{59438:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var d=t(74848),o=t(28453);const s={id:"frontend-packages-lazy-modules-embedded-html",title:"Frontend - Dynamic module Embedded HTML",sidebar_label:"Embedded HTML",slug:"/development/frontend/packages/lazy-modules/embedded-html/"},i=void 0,l={id:"development/frontend/modules/frontend-packages-lazy-modules-embedded-html",title:"Frontend - Dynamic module Embedded HTML",description:"Description",source:"@site/versioned_docs/version-1.14/development/frontend/modules/embedded-html.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/embedded-html/",permalink:"/docs/1.14/development/frontend/packages/lazy-modules/embedded-html/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/frontend/modules/embedded-html.md",tags:[],version:"1.14",frontMatter:{id:"frontend-packages-lazy-modules-embedded-html",title:"Frontend - Dynamic module Embedded HTML",sidebar_label:"Embedded HTML",slug:"/development/frontend/packages/lazy-modules/embedded-html/"},sidebar:"dev",previous:{title:"Authentication",permalink:"/docs/1.14/development/frontend/packages/lazy-modules/authentication/"},next:{title:"Licences",permalink:"/docs/1.14/development/frontend/packages/lazy-modules/licenses/"}},a={},r=[{value:"Description",id:"description",level:2},{value:"Module structure",id:"module-structure",level:2},{value:"Route",id:"route",level:2},{value:"Exposed functions",id:"exposed-functions",level:2},{value:"Internationalization",id:"internationalization",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.p,{children:"This module is a dynamic configurable module to be used in REGARDS user interfaces. It acts as an IFrame container to embed HTML content by its URL. It may be used to create banner, footer, page content and so on..."}),"\n",(0,d.jsx)(n.h2,{id:"module-structure",children:"Module structure"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:" .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file  \n \u2514\u2500\u2500 README.md  \n"})}),"\n",(0,d.jsx)(n.h2,{id:"route",children:"Route"}),"\n",(0,d.jsxs)(n.p,{children:["This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/",":module_id"," where module_id is the configuration identifier of the module."]}),"\n",(0,d.jsx)(n.h2,{id:"exposed-functions",children:"Exposed functions"}),"\n",(0,d.jsx)(n.p,{children:"This module as a dynamic configurable module exposes its own:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"moduleContainer  : Main module React component used to display this module,"}),"\n",(0,d.jsx)(n.li,{children:"adminContainer   : Main module React component used to display the administration panel of this module,"}),"\n",(0,d.jsx)(n.li,{children:"reducer          : To configure the general Redux Store."}),"\n",(0,d.jsx)(n.li,{children:"styles           : Styles of the module"}),"\n",(0,d.jsx)(n.li,{children:"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"}),"\n",(0,d.jsx)(n.li,{children:"dependencies     : The needed resources (backend enpoints) to display each part of the module"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"internationalization",children:"Internationalization"}),"\n",(0,d.jsx)(n.p,{children:"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var d=t(96540);const o={},s=d.createContext(o);function i(e){const n=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);