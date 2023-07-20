"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[46680],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return t?o.createElement(f,i(i({ref:n},l),{},{components:t})):o.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[d]="string"==typeof e?e:r,i[1]=a;for(var p=2;p<s;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},87960:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const s={id:"frontend-packages-business-components",title:"REGARDS business components",sidebar_label:"Overview - Business components",slug:"/development/frontend/packages/business-components/"},i=void 0,a={unversionedId:"development/frontend/components/frontend-packages-business-components",id:"version-1.11.0/development/frontend/components/frontend-packages-business-components",title:"REGARDS business components",description:"Description",source:"@site/versioned_docs/version-1.11.0/development/frontend/components/business-index.md",sourceDirName:"development/frontend/components",slug:"/development/frontend/packages/business-components/",permalink:"/docs/1.11.0/development/frontend/packages/business-components/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/frontend/components/business-index.md",tags:[],version:"1.11.0",frontMatter:{id:"frontend-packages-business-components",title:"REGARDS business components",sidebar_label:"Overview - Business components",slug:"/development/frontend/packages/business-components/"},sidebar:"dev",previous:{title:"Re-usable components",permalink:"/docs/1.11.0/development/frontend/packages/components/"},next:{title:"Microservice plugin configurator",permalink:"/docs/1.11.0/development/frontend/packages/business-components/microservice-plugin-configurator/"}},c={},p=[{value:"Description",id:"description",level:2}],l={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"webapp/business")," folder provides re-usable business oriented modules, each of them holding a set of React Component often shared between admin and user applications. The complete list of those modules is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"admin-data-entities-attributes-management: Component to display a REGARDS entity (DATASET, COLLECTION, DOCUMENT, ..) attributes configurator form "),(0,r.kt)("li",{parentName:"ul"},"attributes-common: Components to display a REGARDS attribute configuration field for standard, dynamic and regroupements attributes"),(0,r.kt)("li",{parentName:"ul"},"endpoints-common: Backend global client to retrieve access rights on microservices endpoints "),(0,r.kt)("li",{parentName:"ul"},"entities-common: Components to display a REGARDS entity (DATASET, COLLECTION, DOCUMENT, DATA, ....) description or apply a service on entity"),(0,r.kt)("li",{parentName:"ul"},"global-system-error: Application decorator to handle server requests errors"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.11.0/development/frontend/packages/business-components/microservice-plugin-configurator/"},"microservice-plugin-configurator"),": Component to configure any backend plugin of any REGARDS microservice "),(0,r.kt)("li",{parentName:"ul"},"order-common: Components to handle REGARDS orders"),(0,r.kt)("li",{parentName:"ul"},"project-handler: Application decorator to retrieve current project "),(0,r.kt)("li",{parentName:"ul"},"user-metadata-common: Component to display a REGARDS user metadata configator fields. Used for user creation/updates")))}u.isMDXComponent=!0}}]);