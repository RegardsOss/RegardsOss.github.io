"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[92080],{95788:(e,t,n)=>{n.d(t,{Iu:()=>l,yg:()=>h});var i=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),c=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,h=d["".concat(u,".").concat(g)]||d[g]||p[g]||r;return n?i.createElement(h,o(o({ref:t},l),{},{components:n})):i.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},95732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(45072),a=(n(11504),n(95788));const r={id:"backend-authentication-plugins",title:"Authentication plugins",sidebar_label:"Authentication plugins",slug:"/development/backend/services/authentication/contributor-guides/plugins/"},o=void 0,s={unversionedId:"development/backend/regards/authentication/contributor-guides/backend-authentication-plugins",id:"development/backend/regards/authentication/contributor-guides/backend-authentication-plugins",title:"Authentication plugins",description:"This extension point allows to define an authentication protocol.",source:"@site/docs/development/backend/regards/authentication/contributor-guides/authentication-plugins.md",sourceDirName:"development/backend/regards/authentication/contributor-guides",slug:"/development/backend/services/authentication/contributor-guides/plugins/",permalink:"/docs/development/backend/services/authentication/contributor-guides/plugins/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/authentication/contributor-guides/authentication-plugins.md",tags:[],version:"current",frontMatter:{id:"backend-authentication-plugins",title:"Authentication plugins",sidebar_label:"Authentication plugins",slug:"/development/backend/services/authentication/contributor-guides/plugins/"},sidebar:"dev",previous:{title:"Retrieve token REST",permalink:"/docs/development/backend/services/authentication/api-guides/retrieve-token-rest/"},next:{title:"REST API",permalink:"/docs/development/backend/services/authentication/api-swagger"}},u={},c=[{value:"Identity provider",id:"identity-provider",level:2},{value:"Interface",id:"interface",level:3},{value:"Service Provider",id:"service-provider",level:2},{value:"Interface",id:"interface-1",level:3}],l={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,i.c)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"This extension point allows to define an authentication protocol."),(0,a.yg)("p",{parentName:"admonition"},"By default, if no authentication system is defined, REGARDS handles its own authentication system based on JWT tokens. However, it is possible to externalize user management with IDP and/or SP.")),(0,a.yg)("h2",{id:"identity-provider"},"Identity provider"),(0,a.yg)("p",null,"Authentication system managed by REGARDS which user base is deported on an external base. This operation allows to connect to an LDAP base for example."),(0,a.yg)("h3",{id:"interface"},"Interface"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-domain/src/main/java/fr/cnes/regards/modules/authentication/domain/plugin/IAuthenticationPlugin.java"},"IAuthenticationPlugin"))),(0,a.yg)("p",null,"REGARDS provides many implementations of this extension point :"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/identityprovider/regards/RegardsInternalAuthenticationPlugin.java"},"RegardsInternalAuthenticationPlugin")," : Authenticate users with internal managed accounts."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/identityprovider/ldap/LdapAuthenticationPlugin.java"},"LdapAuthenticationPlugin")," : Authenticate users through a configured LDAP server")),(0,a.yg)("h2",{id:"service-provider"},"Service Provider"),(0,a.yg)("p",null,"Authentication system fully externalized. This operation allows to connect through external SSO like github for example."),(0,a.yg)("h3",{id:"interface-1"},"Interface"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-domain/src/main/java/fr/cnes/regards/modules/authentication/domain/plugin/IServiceProviderPlugin.java"},"IServiceProviderPlugin"))),(0,a.yg)("p",null,"REGARDS provides one implementation of this extension point :"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/serviceprovider/openid/OpenIdConnectPlugin.java"},"OpenIdConnectPlugin")," : Authenticate users through a configured OpenID Connect server")))}p.isMDXComponent=!0}}]);