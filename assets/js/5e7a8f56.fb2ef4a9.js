"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={id:"project-configuration-users-authentication-openid",title:"SSO Authentication - OpenID Connect",slug:"/user-guide/project-configuration/users/openid/"},o=void 0,s={unversionedId:"user-documentation/project-configuration/project-configuration-users-authentication-openid",id:"version-1.7.1/user-documentation/project-configuration/project-configuration-users-authentication-openid",title:"SSO Authentication - OpenID Connect",description:"Configuration",source:"@site/versioned_docs/version-1.7.1/user-documentation/2-project-configuration/users-authentication-openid.md",sourceDirName:"user-documentation/2-project-configuration",slug:"/user-guide/project-configuration/users/openid/",permalink:"/docs/1.7.1/user-guide/project-configuration/users/openid/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/user-documentation/2-project-configuration/users-authentication-openid.md",tags:[],version:"1.7.1",frontMatter:{id:"project-configuration-users-authentication-openid",title:"SSO Authentication - OpenID Connect",slug:"/user-guide/project-configuration/users/openid/"},sidebar:"manual",previous:{title:"Introduction",permalink:"/docs/1.7.1/user-guide/project-configuration/users/authentication/"},next:{title:"LDAP Authentication",permalink:"/docs/1.7.1/user-guide/project-configuration/users/ldap/"}},u={},l=[{value:"Configuration",id:"configuration",level:3},{value:"Exemple de configuration avec un serveur keycloak",id:"exemple-de-configuration-avec-un-serveur-keycloak",level:3}],p={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.6/2-project-configuration/users/service-provider-openid-connect.png",alt:"OpenID Connect",width:"800"})),(0,a.kt)("p",null,"L'\xe9cran ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Ajouter un nouveau fournisseur de service"))," est d\xe9coup\xe9 en deux parties :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Param\xe8tres g\xe9n\xe9raux")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Nom")),' est le nom choisi pour ce Service provider. Ce nom devra \xeatre r\xe9percut\xe9 dans le champs "Oauth2 redirect URI".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Authentication URL"))," est l'URL du formulaire de login du service d'authentification externe. L'URL doit \xeatre compl\xe8te, c'est \xe0 dire qu'elle doit inclure l'ID client, l'URL de redirection vers Regards ou autres param\xe8tres requis pas le fournisseur de service d'authentification externe."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Logout URL"))," est l'URL du formulaire de logout du service d'authentification externe. "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Param\xe8tres sp\xe9cifiques au plugin OpenID Connect")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Libill\xe9"))," est un alias donn\xe9 \xe0 la configuration du plugin OpenID Connect cr\xe9\xe9e pour ce Service provider."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Client Id"))," est l'identifiant client r\xe9pertoriant Regards en tant qu'utilisateur du Service provider aupr\xe8s sur fournisseur de service d'authentification externe."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Client Secret"))," est le code secret associ\xe9 \xe0 l'identifiant client ci-dessus, d\xe9livr\xe9 par le fournisseur de service d'authentification externe."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"token endpoint URL"))," est l'URL du endpoint HTTP du service d'authentification externe permettant de r\xe9cup\xe9rer un token Oauth2."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Oauth2 redirect URI"))," est l'URL vers la page de redirection utilis\xe9e par le fournisseur de service externe pour renvoyer le navigateur de l'utilisateur sur Regards apr\xe8s une authentification r\xe9ussie."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"user info endpoint URL"))," est l'URL du endpoint HTTP du service d'authentification externe permettant de r\xe9cup\xe9rer les informations de l'utilisateur connect\xe9."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Email mapping field"))," est le nom du champs JSON pr\xe9sent dans la r\xe9ponse \xe0 un appel au endpoint \"user info\" permettant \xe0 Regards de r\xe9cup\xe9rer l'adresse email de l'utilisateur."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Firstname mapping field")),' est le nom du champs JSON pr\xe9sent dans la r\xe9ponse \xe0 un appel au endpoint "user info" permettant \xe0 Regards de r\xe9cup\xe9rer le pr\xe9nom de l\'utilisateur.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Lastname mapping field")),' est le nom du champs JSON pr\xe9sent dans la r\xe9ponse \xe0 un appel au endpoint "user info" permettant \xe0 Regards de r\xe9cup\xe9rer le nom de l\'utilisateur.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"revoke endpoint URL"))," est l'URL du endpoint HTTP du service d'authentification externe permettant d'invalider le token Oauth2 en fin de sessions, lors d'une d\xe9connexion de l'utilisateur."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Allow insecure SSL connection"))," permet d'autoriser l'utilisation de serveur SSO non s\xe9curis\xe9 via HTTPS. ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Attention, l'utilisation de cette propri\xe9t\xe9 n'est pas conseill\xe9 pour un environement de production")))))),(0,a.kt)("h3",{id:"exemple-de-configuration-avec-un-serveur-keycloak"},"Exemple de configuration avec un serveur keycloak"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Nom"))," : Keycloak"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Authentication URL"))," : ",(0,a.kt)("inlineCode",{parentName:"li"},"https://keycloak.cloud-espace.si.c-s.fr/auth/realms/main/protocol/openid-connect/auth?client_id=regards&redirect_uri=https://regards.csgroup.eu/authenticate/project/Keycloak&response_mode=fragment&response_type=code&scope=openid"),". L'URL d'authentification contient :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Le endpoint keycloak : ",(0,a.kt)("inlineCode",{parentName:"li"},"https://keycloak.cloud-espace.si.c-s.fr/auth/realms/main/protocol/openid-connect/auth")),(0,a.kt)("li",{parentName:"ul"},"client_id=regards : L'identifiant du client configur\xe9 sur keycloak pour permettre a REGARDS de s'authentifier sur keycloak"),(0,a.kt)("li",{parentName:"ul"},"redirect_uri : ",(0,a.kt)("inlineCode",{parentName:"li"},"http://regards.csgroup.eu/authenticate/{regards project name}/{openId conf name}"),". L'adresse de redirection apr\xe8s l'authentification. Cette adresse de rediction contient le nom du projet regards courant et le nom de la configuration openId courante"),(0,a.kt)("li",{parentName:"ul"},"response_mode=fragment"),(0,a.kt)("li",{parentName:"ul"},"response_type=code"),(0,a.kt)("li",{parentName:"ul"},"scope=openid"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Logout URL"))," : ",(0,a.kt)("inlineCode",{parentName:"li"},"https://keycloak.cloud-espace.si.c-s.fr/auth/realms/chronos/protocol/openid-connect/logout?post_logout_redirect_uri=https://regards.csgroup.eu/user/{regards project name}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Libell\xe9"))," : Keycloak"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Client id")),": regards"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Client secret")),": ","*","*","*","*"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Token endpoint"))," : ",(0,a.kt)("inlineCode",{parentName:"li"},"https://keycloak.cloud-espace.si.c-s.fr/auth/realms/main/protocol/openid-connect/token")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Oauth2 redirect uri"))," : ",(0,a.kt)("inlineCode",{parentName:"li"},"https://regards.csgroup.eu/authenticate/{regards project name}/{openId conf name}>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"User info endpoint"))," : ",(0,a.kt)("inlineCode",{parentName:"li"},"https://keycloak.cloud-espace.si.c-s.fr/auth/realms/chronos/protocol/openid-connect/userinfo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"email mapping field"))," : email"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"revoke endpoint"))," : ",(0,a.kt)("inlineCode",{parentName:"li"},"https://keycloak.cloud-espace.si.c-s.fr/auth/realms/chronos/protocol/openid-connect/revoke")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Allow insecure"))," : false")))}m.isMDXComponent=!0}}]);