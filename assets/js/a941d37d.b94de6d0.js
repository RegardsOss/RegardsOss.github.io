(window.webpackJsonp=window.webpackJsonp||[]).push([[1734],{1806:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var i=n(3),a=n(7),r=(n(0),n(2704)),o={id:"backend-authentication-plugins",title:"Authentication plugins",sidebar_label:"Authentication plugins",slug:"/development/backend/services/authentication/plugins/"},c={unversionedId:"development/backend/regards/authentication/plugins/backend-authentication-plugins",id:"development/backend/regards/authentication/plugins/backend-authentication-plugins",isDocsHomePage:!1,title:"Authentication plugins",description:"This extension point allows to define an authentication protocol.",source:"@site/docs/development/backend/regards/authentication/plugins/authentication-plugins.md",slug:"/development/backend/services/authentication/plugins/",permalink:"/docs/development/backend/services/authentication/plugins/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/authentication/plugins/authentication-plugins.md",version:"current",sidebar_label:"Authentication plugins",sidebar:"dev",previous:{title:"REGARDS authentication API",permalink:"/docs/development/backend/services/authentication/api/"},next:{title:"REGARDS admin microservice",permalink:"/docs/development/backend/services/admin/overview/"}},s=[{value:"IDP (Identity provider)",id:"idp-identity-provider",children:[{value:"Interface",id:"interface",children:[]}]},{value:"SP (Service Provider)",id:"sp-service-provider",children:[{value:"Interface",id:"interface-1",children:[]}]}],u={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This extension point allows to define an authentication protocol."),Object(r.b)("p",{parentName:"div"},"By default, if no authentication system is defined, REGARDS handles its own authentication system based on JWT tokens. However, it is possible to externalize user management with IDP and/or SP."))),Object(r.b)("h2",{id:"idp-identity-provider"},"IDP (Identity provider)"),Object(r.b)("p",null,"Authentication system managed by REGARDS which user base is deported on an external base. This operation allow to connect to an LDAP base for example."),Object(r.b)("h3",{id:"interface"},"Interface"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-cloud/blob/master/rs-authentication/authentication/authentication-domain/src/main/java/fr/cnes/regards/modules/authentication/domain/plugin/IAuthenticationPlugin.java"},"IAuthenticationPlugin"))),Object(r.b)("p",null,"REGARDS provides many implementation of this extension point :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-cloud/blob/master/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/identityprovider/regards/RegardsInternalAuthenticationPlugin.java"},"RegardsInternalAuthenticationPlugin")," : Authenticate users with internal managed accounts."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-cloud/blob/master/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/identityprovider/ldap/LdapAuthenticationPlugin.java"},"LdapAuthenticationPlugin")," : Authenticate users through a configured LDAP server")),Object(r.b)("h2",{id:"sp-service-provider"},"SP (Service Provider)"),Object(r.b)("p",null,"Authentication system fully externalized. This operation allow to connect through external SSO like github for example."),Object(r.b)("h3",{id:"interface-1"},"Interface"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-cloud/blob/master/rs-authentication/authentication/authentication-domain/src/main/java/fr/cnes/regards/modules/authentication/domain/plugin/IServiceProviderPlugin.java"},"IServiceProviderPlugin"))),Object(r.b)("p",null,"REGARDS provides one implementation of this extension point :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-cloud/blob/master/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/serviceprovider/openid/OpenIdConnectPlugin.java"},"OpenIdConnectPlugin")," : Authenticate users through a configured OpenID Connect server")))}l.isMDXComponent=!0},2704:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=i,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||r;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<r;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);