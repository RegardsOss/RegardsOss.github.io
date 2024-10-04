"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[99492],{96448:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var o=i(74848),t=i(28453);const s={id:"frontend-packages-lazy-modules-menu",title:"Frontend - Dynamic module Menu",sidebar_label:"Menu",slug:"/development/frontend/packages/lazy-modules/menu/"},d=void 0,l={id:"development/frontend/modules/frontend-packages-lazy-modules-menu",title:"Frontend - Dynamic module Menu",description:"Description",source:"@site/versioned_docs/version-1.13.0/development/frontend/modules/menu.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/menu/",permalink:"/docs/1.13.0/development/frontend/packages/lazy-modules/menu/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/frontend/modules/menu.md",tags:[],version:"1.13.0",frontMatter:{id:"frontend-packages-lazy-modules-menu",title:"Frontend - Dynamic module Menu",sidebar_label:"Menu",slug:"/development/frontend/packages/lazy-modules/menu/"},sidebar:"dev",previous:{title:"Licences",permalink:"/docs/1.13.0/development/frontend/packages/lazy-modules/licenses/"},next:{title:"Order cart",permalink:"/docs/1.13.0/development/frontend/packages/lazy-modules/order-cart/"}},a={},r=[{value:"Description",id:"description",level:2},{value:"Module structure",id:"module-structure",level:2},{value:"Route",id:"route",level:2},{value:"Exposed functions",id:"exposed-functions",level:2},{value:"Internationalization",id:"internationalization",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"This module is a dynamic configurable module to be used in REGARDS user interfaces. It displays display as an horizontal bar containing the following elements:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Title (when displayMode is ADMIN_* mode)"}),"\n",(0,o.jsx)(n.li,{children:"Navigation links and sections (when displayMode is USER or PREVIEW), enabled by configuration"}),"\n",(0,o.jsx)(n.li,{children:"Authentication (enabled by configuration)"}),"\n",(0,o.jsx)(n.li,{children:"Theme selector (enabled by configuration)"}),"\n",(0,o.jsx)(n.li,{children:"Language selector (enabled by configuration)"}),"\n",(0,o.jsx)(n.li,{children:"Project about page (enabled by configuration)"}),"\n",(0,o.jsx)(n.li,{children:"Contacts (enabled by configuration)"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"module-structure",children:"Module structure"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:" .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file  \n \u2514\u2500\u2500 README.md  \n"})}),"\n",(0,o.jsx)(n.h2,{id:"route",children:"Route"}),"\n",(0,o.jsxs)(n.p,{children:["This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/",":module_id"," where module_id is the configuration identifier of the module."]}),"\n",(0,o.jsx)(n.h2,{id:"exposed-functions",children:"Exposed functions"}),"\n",(0,o.jsx)(n.p,{children:"This module as a dynamic configurable module exposes its own:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"moduleContainer  : Main module React component used to display this module,"}),"\n",(0,o.jsx)(n.li,{children:"adminContainer   : Main module React component used to display the administration panel of this module,"}),"\n",(0,o.jsx)(n.li,{children:"reducer          : To configure the general Redux Store."}),"\n",(0,o.jsx)(n.li,{children:"styles           : Styles of the module"}),"\n",(0,o.jsx)(n.li,{children:"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"}),"\n",(0,o.jsx)(n.li,{children:"dependencies     : The needed resources (backend enpoints) to display each part of the module"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"internationalization",children:"Internationalization"}),"\n",(0,o.jsx)(n.p,{children:"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var o=i(96540);const t={},s=o.createContext(t);function d(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);