"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[3173],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},88167:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],a={layout:"classic-docs",title:"Microservice security initialization","short-title":"Security"},c=void 0,l={unversionedId:"development/backend/framework/modules/security",id:"version-1.5.0/development/backend/framework/modules/security",title:"Microservice security initialization",description:'Every microservice generated with the "microservice-archetype" use the security-regards module to handle secured access to his endpoints.',source:"@site/versioned_docs/version-1.5.0/development/backend/framework/modules/security.md",sourceDirName:"development/backend/framework/modules",slug:"/development/backend/framework/modules/security",permalink:"/fr/docs/1.5.0/development/backend/framework/modules/security",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/backend/framework/modules/security.md",tags:[],version:"1.5.0",frontMatter:{layout:"classic-docs",title:"Microservice security initialization","short-title":"Security"}},u=[{value:"User roles",id:"user-roles",children:[],level:2}],d={toc:u};function p(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(78654).Z,width:"1069",height:"449"})),(0,i.kt)("p",null,'Every microservice generated with the "microservice-archetype" use the ',(0,i.kt)("strong",{parentName:"p"},"security-regards")," module to handle secured access to his endpoints.  "),(0,i.kt)("p",null,"To do so, every microservice include a ",(0,i.kt)("strong",{parentName:"p"},"remote-tenant-resolver"),' module which is used to communicate with the central "administration-service".',(0,i.kt)("br",{parentName:"p"}),"\n",'The only exception is for microservice "administration" which includes a "local-tenant-resolver" to use internal services instead of REST controllers.'),(0,i.kt)("p",null,"At startup the ",(0,i.kt)("strong",{parentName:"p"},"security-regards")," module is initialized with the here-under steps :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get all tenants"),(0,i.kt)("li",{parentName:"ol"},"For each tenants register his endpoints to the administration service. At this step, the administration service merge the default configuration of the endpoints supplied by the microservice and the saved configuration of endpoints."),(0,i.kt)("li",{parentName:"ol"},"Retrieve for each tenants his endpoints configuration."),(0,i.kt)("li",{parentName:"ol"},"Listen for event to update the endpoints configuration. This event is send by the administration microservice at every single change on the endpoints configuration.")),(0,i.kt)("p",null,"The configuration of a microservice endpoints consists to defined which user Roles are allowed to access the endpoints. This configuration can be update with the resourcesController of the administration service.  "),(0,i.kt)("h2",{id:"user-roles"},"User roles"),(0,i.kt)("p",null,"Here under is the list of default roles created at application startup.",(0,i.kt)("br",{parentName:"p"}),"\n","The ",(0,i.kt)("strong",{parentName:"p"},"Five first ones")," are standard roles which can be assigned to every users of the system.",(0,i.kt)("br",{parentName:"p"}),"\n","The ",(0,i.kt)("strong",{parentName:"p"},"Instance Admin")," role is a virtual role assigned to the unique instance administrator user. The instance administrator user is the only one created by default in the Regards system.",(0,i.kt)("br",{parentName:"p"}),"\n","The ",(0,i.kt)("strong",{parentName:"p"},"System")," role is a virtual role as the ",(0,i.kt)("strong",{parentName:"p"},"Instance Role")," except no user can be assigned to this role. This role is only used by microservices themselves to communicate with each others.  "),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(7762).Z,width:"401",height:"505"})),(0,i.kt)("p",null,"The two specific roles ",(0,i.kt)("strong",{parentName:"p"},"Instance Admin")," and ",(0,i.kt)("strong",{parentName:"p"},"System")," are associated to the associated security voters ",(0,i.kt)("strong",{parentName:"p"},"IInstanceAdminAccessVoter")," and *",(0,i.kt)("em",{parentName:"p"},"IRoleSysAccessVoter"),". Those two voters are defined in each microservice to allow all access to each endpoints. Nevertheless, it is possible to override theme to handle specifics access to those two roles."))}p.isMDXComponent=!0},7762:function(e,t,r){t.Z=r.p+"assets/images/roles-925bee70cacc8272ccbe9acd3a4a8415.png"},78654:function(e,t,r){t.Z=r.p+"assets/images/security-2d1f04ae7dee79a01d53941365568c35.png"}}]);