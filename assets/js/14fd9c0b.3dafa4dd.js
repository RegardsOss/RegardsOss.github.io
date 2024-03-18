"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[7752],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,d=c["".concat(s,".").concat(m)]||c[m]||g[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13430:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=r(58168),a=(r(96540),r(15680));const o={id:"project-configuration-users-authentication-ldap",title:"LDAP Authentication",slug:"/user-guide/project-configuration/users/ldap/"},i=void 0,u={unversionedId:"user-documentation/project-configuration/project-configuration-users-authentication-ldap",id:"user-documentation/project-configuration/project-configuration-users-authentication-ldap",title:"LDAP Authentication",description:"Configuration",source:"@site/docs/user-documentation/2-project-configuration/users-authentication-ldap.md",sourceDirName:"user-documentation/2-project-configuration",slug:"/user-guide/project-configuration/users/ldap/",permalink:"/docs/user-guide/project-configuration/users/ldap/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/2-project-configuration/users-authentication-ldap.md",tags:[],version:"current",frontMatter:{id:"project-configuration-users-authentication-ldap",title:"LDAP Authentication",slug:"/user-guide/project-configuration/users/ldap/"},sidebar:"manual",previous:{title:"SSO Authentication - OpenID Connect",permalink:"/docs/user-guide/project-configuration/users/openid/"},next:{title:"Customize user interface",permalink:"/docs/user-guide/project-configuration/user-interface/"}},s={},l=[{value:"Configuration",id:"configuration",level:3},{value:"Exemple",id:"exemple",level:3}],p={toc:l},c="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"configuration"},"Configuration"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"/images/user-documentation/v1.6/2-project-configuration/users/identity-provider-ldap-connect.png",alt:"OpenID Connect",width:"800"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"Param\xe8tres de configuration :"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("em",{parentName:"strong"},"Libell\xe9"))," : Nom de configuration du serveur LDAP"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("em",{parentName:"strong"},"LDAP serveur adresse"))," : Adresse du serveur LDAP \xe0 contacter"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("em",{parentName:"strong"},"LDAP serveur port"))," : Port du serveur LDAP \xe0 contacter"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("em",{parentName:"strong"},"LDAP Bind DN"))," : Syst\xe8me BIND DN pour l'authentification sur le serveur LDAP"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("em",{parentName:"strong"},"LDAP UID"))," : Nom du champ uid sur le serveur LDAP"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("em",{parentName:"strong"},"LDAP Filter"))," : Filtres LDAP a appliquer"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("em",{parentName:"strong"},"LDAP email attribute"))," : Nom du champ email sur le serveur LDAP")),(0,a.yg)("h3",{id:"exemple"},"Exemple"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("em",{parentName:"strong"},"Libell\xe9"))," : LDAP example"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("em",{parentName:"strong"},"LDAP serveur adresse"))," : 172.10.11.12"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("em",{parentName:"strong"},"LDAP serveur port"))," : 389"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("em",{parentName:"strong"},"LDAP Bind DN"))," : ou=users,ou=all,o=CSGROUP"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("em",{parentName:"strong"},"LDAP UID"))," : uid"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("em",{parentName:"strong"},"LDAP email attribute"))," : email")))}g.isMDXComponent=!0}}]);