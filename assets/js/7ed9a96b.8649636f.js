"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[69277],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(g,o(o({ref:t},l),{},{components:n})):a.createElement(g,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51427:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],u={id:"backend-authentication-plugins",title:"Authentication plugins",sidebar_label:"Authentication plugins",slug:"/development/backend/authentication/plugins/"},s=void 0,c={unversionedId:"development/backend/regards/authentication/plugins/backend-authentication-plugins",id:"version-1.4.0/development/backend/regards/authentication/plugins/backend-authentication-plugins",title:"Authentication plugins",description:"Overview",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/authentication/plugins/authentication-plugins.md",sourceDirName:"development/backend/regards/authentication/plugins",slug:"/development/backend/authentication/plugins/",permalink:"/docs/1.4.0/development/backend/authentication/plugins/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/authentication/plugins/authentication-plugins.md",tags:[],version:"1.4.0",frontMatter:{id:"backend-authentication-plugins",title:"Authentication plugins",sidebar_label:"Authentication plugins",slug:"/development/backend/authentication/plugins/"},sidebar:"version-1.4.0/dev",previous:{title:"Authentication API",permalink:"/docs/1.4.0/development/backend/authentication/api/"},next:{title:"Overview",permalink:"/docs/1.4.0/development/backend/admin/overview/"}},l=[{value:"Overview",id:"overview",children:[],level:2},{value:"Interface",id:"interface",children:[],level:2},{value:"Implementation",id:"implementation",children:[],level:2}],p={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This extension point allows to define an authentication protocol."))),(0,r.kt)("p",null,"REGARDS provides many implementation of this extension point :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-cloud/blob/master/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/regards/RegardsInternalAuthenticationPlugin.java"},"RegardsInternalAuthenticationPlugin")," : Authenticate users with internal managed accounts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-cloud/blob/master/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/impl/ldap/LdapAuthenticationPlugin.java"},"LdapAuthenticationPlugin")," : Authenticate users through a configured LDAP server")),(0,r.kt)("h2",{id:"interface"},"Interface"),(0,r.kt)("p",null,"   ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-cloud/blob/master/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/IAuthenticationPlugin.java"},"IAuthenticationPlugin")),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"To learn more about how to create your own plugin see ",(0,r.kt)("a",{parentName:"p",href:"../../framework/modules/plugins/"},"Plugins")),(0,r.kt)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,r.kt)("b",null,"NOTE : ")," The only mandatory meta data on every authenticated users is an email adress. So each authentication protocol must be able to return email of authenticated users.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements IDataObjectAccessFilterPlugin {\n   \n   @Override\n   public AuthenticationPluginResponse authenticate(String userName, String userPassword, String scope) {\n           // Do authentication and return an AuthenticationPluginResponse\n           Boolean accessGranted = true;\n           String email = userName;\n           return new AuthenticationPluginResponse(accessGranted,email);\n   }\n}\n')))}d.isMDXComponent=!0}}]);