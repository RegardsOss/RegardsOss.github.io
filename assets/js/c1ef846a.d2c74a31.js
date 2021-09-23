"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[50533],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92267:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],u={id:"project-configuration-users-authentication",title:"Introduction",slug:"/user-guide/project-configuration/users/authentication/"},s=void 0,c={unversionedId:"user-documentation/project-configuration/project-configuration-users-authentication",id:"user-documentation/project-configuration/project-configuration-users-authentication",isDocsHomePage:!1,title:"Introduction",description:"Le syst\xe8me REGARDS vous permet de g\xe9rer de multiples m\xe9thodes d'authentification pour vos utilisateurs.",source:"@site/docs/user-documentation/2-project-configuration/users-authentication.md",sourceDirName:"user-documentation/2-project-configuration",slug:"/user-guide/project-configuration/users/authentication/",permalink:"/docs/user-guide/project-configuration/users/authentication/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/2-project-configuration/users-authentication.md",tags:[],version:"current",frontMatter:{id:"project-configuration-users-authentication",title:"Introduction",slug:"/user-guide/project-configuration/users/authentication/"},sidebar:"manual",previous:{title:"Manage project users",permalink:"/docs/user-guide/project-configuration/users/"},next:{title:"SSO Authentication - OpenID Connect",permalink:"/docs/user-guide/project-configuration/users/openid/"}},p=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Utilisation de comptes utilisateur internes',id:"-utilisation-de-comptes-utilisateur-internes",children:[]},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Utilisation de comptes utilisateur externes',id:"-utilisation-de-comptes-utilisateur-externes",children:[]}],l={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Le syst\xe8me REGARDS vous permet de g\xe9rer de multiples m\xe9thodes d'authentification pour vos utilisateurs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Un syst\xe8me de compte interne \xe0 REGARDS"),(0,o.kt)("li",{parentName:"ul"},"Un syst\xe8me de d\xe9l\xe9gation des comptes"),(0,o.kt)("li",{parentName:"ul"},"Un syst\xe8me de d\xe9l\xe9gation compl\xe8te de l'authentification")),(0,o.kt)("p",null,"Vous pouvez acc\xe9der \xe0 la configuration de ces syst\xe8mes d'authentication depuis le menu ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Users"))," de l'administration du projet et la carte ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Authentification systems")),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/images/user-documentation/v1.4/2-project-configuration/users/users.png",alt:"user menu",width:"800"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"-utilisation-de-comptes-utilisateur-internes"},(0,o.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Utilisation de comptes utilisateur internes"),(0,o.kt)("p",null,"Pour ce syst\xe8me d'authentification, vous n'avez aucune configuration sp\xe9cifique \xe0 r\xe9aliser. Dans ce cas les utilisateurs seront cr\xe9\xe9s dans la base de donn\xe9es interne \xe0 REGARDS et leurs informations d'authentification seront conserv\xe9es cript\xe9es en base de donn\xe9es."),(0,o.kt)("h2",{id:"-utilisation-de-comptes-utilisateur-externes"},(0,o.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Utilisation de comptes utilisateur externes"),(0,o.kt)("p",null,"REGARDS permet la connexion d'utilisateurs depuis un syst\xe8me ext\xe9rieur. Il ne g\xe9rera ainsi pas les comptes en interne."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/images/user-documentation/v1.4/2-project-configuration/users/authentication-list.png",alt:"authentication systems",width:"800"})),(0,o.kt)("p",null,"La connexion peut se faire par le biais d'un syst\xe8me d'authentification d\xe9port\xe9 (Identity provider) ou externalis\xe9 (Service provider)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"L'unique plugin d'authentification d\xe9port\xe9 fourni par d\xe9faut permet la connexion \xe0 un ",(0,o.kt)("a",{parentName:"li",href:"../ldap/"},"annuaire LDAP"),"."),(0,o.kt)("li",{parentName:"ul"},"L'unique plugin d'authentification externe fourni par d\xe9faut permet la connexion par ",(0,o.kt)("a",{parentName:"li",href:"../openid/"},"OpenID Connect"),".")),(0,o.kt)("p",null,"Pour ajouter un syst\xe8me d'authentification, cliquez sur le bouton ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Liste"))," de la carte ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Authentication system")),", choisissez ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Ajouter un identity provider"))," ou ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Ajouter un service provider"))," et configurez-le. Vous pourrez ensuite le retrouver dans la liste des syst\xe8mes d'authentification."))}d.isMDXComponent=!0}}]);