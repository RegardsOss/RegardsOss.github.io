"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[65005],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,g=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={id:"backend-authentication-plugins",title:"Authentication plugins",sidebar_label:"Authentication plugins",slug:"/development/backend/services/authentication/plugins/"},o=void 0,s={unversionedId:"development/backend/regards/authentication/plugins/backend-authentication-plugins",id:"development/backend/regards/authentication/plugins/backend-authentication-plugins",title:"Authentication plugins",description:"This extension point allows to define an authentication protocol.",source:"@site/docs/development/backend/regards/authentication/plugins/authentication-plugins.md",sourceDirName:"development/backend/regards/authentication/plugins",slug:"/development/backend/services/authentication/plugins/",permalink:"/docs/development/backend/services/authentication/plugins/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/authentication/plugins/authentication-plugins.md",tags:[],version:"current",frontMatter:{id:"backend-authentication-plugins",title:"Authentication plugins",sidebar_label:"Authentication plugins",slug:"/development/backend/services/authentication/plugins/"},sidebar:"dev",previous:{title:"Authentication API (legacy)",permalink:"/docs/development/backend/services/authentication/api/"},next:{title:"API",permalink:"/docs/development/backend/services/authentication/api-swagger"}},c={},l=[{value:"IDP (Identity provider)",id:"idp-identity-provider",level:2},{value:"Interface",id:"interface",level:3},{value:"SP (Service Provider)",id:"sp-service-provider",level:2},{value:"Interface",id:"interface-1",level:3}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This extension point allows to define an authentication protocol."),(0,a.kt)("p",{parentName:"admonition"},"By default, if no authentication system is defined, REGARDS handles its own authentication system based on JWT tokens. However, it is possible to externalize user management with IDP and/or SP.")),(0,a.kt)("h2",{id:"idp-identity-provider"},"IDP (Identity provider)"),(0,a.kt)("p",null,"Authentication system managed by REGARDS which user base is deported on an external base. This operation allow to connect to an LDAP base for example."),(0,a.kt)("h3",{id:"interface"},"Interface"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-domain/src/main/java/fr/cnes/regards/modules/authentication/domain/plugin/IAuthenticationPlugin.java"},"IAuthenticationPlugin"))),(0,a.kt)("p",null,"REGARDS provides many implementation of this extension point :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/identityprovider/regards/RegardsInternalAuthenticationPlugin.java"},"RegardsInternalAuthenticationPlugin")," : Authenticate users with internal managed accounts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/identityprovider/ldap/LdapAuthenticationPlugin.java"},"LdapAuthenticationPlugin")," : Authenticate users through a configured LDAP server")),(0,a.kt)("h2",{id:"sp-service-provider"},"SP (Service Provider)"),(0,a.kt)("p",null,"Authentication system fully externalized. This operation allow to connect through external SSO like github for example."),(0,a.kt)("h3",{id:"interface-1"},"Interface"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-domain/src/main/java/fr/cnes/regards/modules/authentication/domain/plugin/IServiceProviderPlugin.java"},"IServiceProviderPlugin"))),(0,a.kt)("p",null,"REGARDS provides one implementation of this extension point :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/serviceprovider/openid/OpenIdConnectPlugin.java"},"OpenIdConnectPlugin")," : Authenticate users through a configured OpenID Connect server")))}d.isMDXComponent=!0}}]);