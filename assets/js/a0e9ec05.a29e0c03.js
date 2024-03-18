"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[98095],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>y});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||s;return r?n.createElement(y,i(i({ref:t},d),{},{components:r})):n.createElement(y,i({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48597:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=r(58168),o=(r(96540),r(15680));const s={layout:"classic-docs",title:"Microservice security initialization","short-title":"Security"},i=void 0,a={unversionedId:"development/backend/framework/modules/security",id:"version-1.13.0/development/backend/framework/modules/security",title:"Microservice security initialization",description:'Every microservice generated with the "microservice-archetype" use the security-regards module to handle secured access to his endpoints.',source:"@site/versioned_docs/version-1.13.0/development/backend/framework/modules/security.md",sourceDirName:"development/backend/framework/modules",slug:"/development/backend/framework/modules/security",permalink:"/docs/1.13.0/development/backend/framework/modules/security",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/framework/modules/security.md",tags:[],version:"1.13.0",frontMatter:{layout:"classic-docs",title:"Microservice security initialization","short-title":"Security"}},c={},l=[{value:"User roles",id:"user-roles",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...s}=e;return(0,o.yg)(p,(0,n.A)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("img",{src:r(90391).A,width:"1069",height:"449"})),(0,o.yg)("p",null,'Every microservice generated with the "microservice-archetype" use the ',(0,o.yg)("strong",{parentName:"p"},"security-regards")," module to handle secured access to his endpoints.  "),(0,o.yg)("p",null,"To do so, every microservice include a ",(0,o.yg)("strong",{parentName:"p"},"remote-tenant-resolver"),' module which is used to communicate with the central "administration-service".',(0,o.yg)("br",{parentName:"p"}),"\n",'The only exception is for microservice "administration" which includes a "local-tenant-resolver" to use internal services instead of REST controllers.'),(0,o.yg)("p",null,"At startup the ",(0,o.yg)("strong",{parentName:"p"},"security-regards")," module is initialized with the here-under steps :"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Get all tenants"),(0,o.yg)("li",{parentName:"ol"},"For each tenants register his endpoints to the administration service. At this step, the administration service merge the default configuration of the endpoints supplied by the microservice and the saved configuration of endpoints."),(0,o.yg)("li",{parentName:"ol"},"Retrieve for each tenants his endpoints configuration."),(0,o.yg)("li",{parentName:"ol"},"Listen for event to update the endpoints configuration. This event is send by the administration microservice at every single change on the endpoints configuration.")),(0,o.yg)("p",null,"The configuration of a microservice endpoints consists to defined which user Roles are allowed to access the endpoints. This configuration can be update with the resourcesController of the administration service.  "),(0,o.yg)("h2",{id:"user-roles"},"User roles"),(0,o.yg)("p",null,"Here under is the list of default roles created at application startup.",(0,o.yg)("br",{parentName:"p"}),"\n","The ",(0,o.yg)("strong",{parentName:"p"},"Five first ones")," are standard roles which can be assigned to every users of the system.",(0,o.yg)("br",{parentName:"p"}),"\n","The ",(0,o.yg)("strong",{parentName:"p"},"Instance Admin")," role is a virtual role assigned to the unique instance administrator user. The instance administrator user is the only one created by default in the Regards system.",(0,o.yg)("br",{parentName:"p"}),"\n","The ",(0,o.yg)("strong",{parentName:"p"},"System")," role is a virtual role as the ",(0,o.yg)("strong",{parentName:"p"},"Instance Role")," except no user can be assigned to this role. This role is only used by microservices themselves to communicate with each others.  "),(0,o.yg)("p",null,(0,o.yg)("img",{src:r(50170).A,width:"401",height:"505"})),(0,o.yg)("p",null,"The two specific roles ",(0,o.yg)("strong",{parentName:"p"},"Instance Admin")," and ",(0,o.yg)("strong",{parentName:"p"},"System")," are associated to the associated security voters ",(0,o.yg)("strong",{parentName:"p"},"IInstanceAdminAccessVoter")," and *",(0,o.yg)("em",{parentName:"p"},"IRoleSysAccessVoter"),". Those two voters are defined in each microservice to allow all access to each endpoints. Nevertheless, it is possible to override theme to handle specifics access to those two roles."))}u.isMDXComponent=!0},50170:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/roles-925bee70cacc8272ccbe9acd3a4a8415.png"},90391:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/security-2d1f04ae7dee79a01d53941365568c35.png"}}]);