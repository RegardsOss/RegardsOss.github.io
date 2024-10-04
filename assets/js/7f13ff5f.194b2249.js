"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[42085],{50238:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var o=t(74848),s=t(28453);const i={id:"frontend-packages-lazy-modules-project-list",title:"Frontend - Dynamic module Project List",sidebar_label:"Project list",slug:"/development/frontend/packages/lazy-modules/project-list/"},l=void 0,d={id:"development/frontend/modules/frontend-packages-lazy-modules-project-list",title:"Frontend - Dynamic module Project List",description:"Description",source:"@site/versioned_docs/version-1.13.0/development/frontend/modules/projects-list.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/project-list/",permalink:"/docs/1.13.0/development/frontend/packages/lazy-modules/project-list/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/frontend/modules/projects-list.md",tags:[],version:"1.13.0",frontMatter:{id:"frontend-packages-lazy-modules-project-list",title:"Frontend - Dynamic module Project List",sidebar_label:"Project list",slug:"/development/frontend/packages/lazy-modules/project-list/"},sidebar:"dev",previous:{title:"Project about page",permalink:"/docs/1.13.0/development/frontend/packages/lazy-modules/project-about-page/"},next:{title:"Search graph",permalink:"/docs/1.13.0/development/frontend/packages/lazy-modules/search-graph/"}},r={},a=[{value:"Description",id:"description",level:2},{value:"Module structure",id:"module-structure",level:2},{value:"Route",id:"route",level:2},{value:"Exposed functions",id:"exposed-functions",level:2},{value:"Internationalization",id:"internationalization",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"This module is a dynamic configurable module to be used in REGARDS user interfaces. It displays a REGARDS instance projects list and allows accessing their user interface."}),"\n",(0,o.jsx)(n.h2,{id:"module-structure",children:"Module structure"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:" .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file   \n \u2514\u2500\u2500 README.md  \n"})}),"\n",(0,o.jsx)(n.h2,{id:"route",children:"Route"}),"\n",(0,o.jsxs)(n.p,{children:["This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/",":module_id"," where module_id is the configuration identifier of the module."]}),"\n",(0,o.jsx)(n.h2,{id:"exposed-functions",children:"Exposed functions"}),"\n",(0,o.jsx)(n.p,{children:"This module as a dynamic configurable module exposes its own:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"moduleContainer  : Main module React component used to display this module,"}),"\n",(0,o.jsx)(n.li,{children:"adminContainer   : Main module React component used to display the administration panel of this module,"}),"\n",(0,o.jsx)(n.li,{children:"reducer          : To configure the general Redux Store."}),"\n",(0,o.jsx)(n.li,{children:"styles           : Styles of the module"}),"\n",(0,o.jsx)(n.li,{children:"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"}),"\n",(0,o.jsx)(n.li,{children:"dependencies     : The needed resources (backend enpoints) to display each part of the module"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"internationalization",children:"Internationalization"}),"\n",(0,o.jsx)(n.p,{children:"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var o=t(96540);const s={},i=o.createContext(s);function l(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);