"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[23936],{85471:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=o(74848),s=o(28453);const r={id:"frontend-packages-lazy-modules-order-history",title:"Frontend - Dynamic module Order History",sidebar_label:"Order history",slug:"/development/frontend/packages/lazy-modules/order-history/"},i=void 0,d={id:"development/frontend/modules/frontend-packages-lazy-modules-order-history",title:"Frontend - Dynamic module Order History",description:"Description",source:"@site/docs/development/frontend/modules/order-history.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/order-history/",permalink:"/docs/development/frontend/packages/lazy-modules/order-history/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/modules/order-history.md",tags:[],version:"current",frontMatter:{id:"frontend-packages-lazy-modules-order-history",title:"Frontend - Dynamic module Order History",sidebar_label:"Order history",slug:"/development/frontend/packages/lazy-modules/order-history/"},sidebar:"dev",previous:{title:"Order cart",permalink:"/docs/development/frontend/packages/lazy-modules/order-cart/"},next:{title:"Project about page",permalink:"/docs/development/frontend/packages/lazy-modules/project-about-page/"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Module structure",id:"module-structure",level:2},{value:"Route",id:"route",level:2},{value:"Exposed functions",id:"exposed-functions",level:2},{value:"Internationalization",id:"internationalization",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This module is a dynamic configurable module to be used in REGARDS user interfaces. It displays the history of a logged user orders. It is also used to show all users orders history in project administration interface."}),"\n",(0,t.jsx)(n.h2,{id:"module-structure",children:"Module structure"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:" .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file  \n \u2514\u2500\u2500 README.md  \n"})}),"\n",(0,t.jsx)(n.h2,{id:"route",children:"Route"}),"\n",(0,t.jsxs)(n.p,{children:["This module is routed as a dynamic module to show user order history.\nDynamic modules are only displayed when the interface route is /modules/",":module_id"," where module_id is the configuration identifier of the module."]}),"\n",(0,t.jsx)(n.h2,{id:"exposed-functions",children:"Exposed functions"}),"\n",(0,t.jsx)(n.p,{children:"This module as a dynamic configurable module exposes its own:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"moduleContainer  : Main module React component used to display this module,"}),"\n",(0,t.jsx)(n.li,{children:"adminContainer   : Main module React component used to display the administration panel of this module,"}),"\n",(0,t.jsx)(n.li,{children:"reducer          : To configure the general Redux Store."}),"\n",(0,t.jsx)(n.li,{children:"styles           : Styles of the module"}),"\n",(0,t.jsx)(n.li,{children:"messages         : Messages and labels internationalization objcet (default : imported index.js from messages/)"}),"\n",(0,t.jsx)(n.li,{children:"dependencies     : The needed resources (backend enpoints) to display each part of the module"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"internationalization",children:"Internationalization"}),"\n",(0,t.jsx)(n.p,{children:"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>d});var t=o(96540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);