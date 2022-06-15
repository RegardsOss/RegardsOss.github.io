"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[69195],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31071:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return l}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],u={id:"project-configuration-users-authentication-openid",title:"Configure OpenID Connect",slug:"/user-guide/project-configuration/users/openid/"},s=void 0,p={unversionedId:"user-documentation/project-configuration/project-configuration-users-authentication-openid",id:"version-1.5.0/user-documentation/project-configuration/project-configuration-users-authentication-openid",title:"Configure OpenID Connect",description:"Configurez les param\xe8tres de connexion \xe0 un Service provider pour authentification via OpenID Connect.",source:"@site/versioned_docs/version-1.5.0/user-documentation/2-project-configuration/users-authentication-openid.md",sourceDirName:"user-documentation/2-project-configuration",slug:"/user-guide/project-configuration/users/openid/",permalink:"/docs/1.5.0/user-guide/project-configuration/users/openid/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/user-documentation/2-project-configuration/users-authentication-openid.md",tags:[],version:"1.5.0",frontMatter:{id:"project-configuration-users-authentication-openid",title:"Configure OpenID Connect",slug:"/user-guide/project-configuration/users/openid/"},sidebar:"version-1.5.0/manual",previous:{title:"Manage authentications",permalink:"/docs/1.5.0/user-guide/project-configuration/users/authentication/"},next:{title:"Customize user interface",permalink:"/docs/1.5.0/user-guide/project-configuration/user-interface/"}},c={},l=[],d={toc:l};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Configurez les param\xe8tres de connexion \xe0 un Service provider pour authentification via OpenID Connect"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.4/2-project-configuration/users/service-provider-openid-connect.png",alt:"OpenID Connect",width:"800"})),(0,a.kt)("p",null,"L'\xe9cran ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Ajouter un nouveau fournisseur de service"))," est d\xe9coup\xe9 en deux parties :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Param\xe8tres g\xe9n\xe9raux")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Nom")),' est le nom choisi pour ce Service provider. Ce nom devra \xeatre r\xe9percut\xe9 dans le champs "Oauth2 redirect URI".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"URL"))," est l'URL du formulaire de login du service d'authentification externe. L'URL doit \xeatre compl\xe8te, c'est \xe0 dire qu'elle doit inclure l'ID client, l'URL de redirection vers Regards ou autres param\xe8tres requis pas le fournisseur de service d'authentification externe."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Param\xe8tres sp\xe9cifiques au plugin OpenID Connect")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Libill\xe9"))," est un alias donn\xe9 \xe0 la configuration du plugin OpenID Connect cr\xe9\xe9e pour ce Service provider."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Client Id"))," est l'identifiant client r\xe9pertoriant Regards en tant qu'utilisateur du Service provider aupr\xe8s sur fournisseur de service d'authentification externe."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Client Secret"))," est le code secret associ\xe9 \xe0 l'identifiant client ci-dessus, d\xe9livr\xe9 par le fournisseur de service d'authentification externe."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},'"token" endpoint URL'))," est l'URL du endpoint HTTP du service d'authentification externe permettant de r\xe9cup\xe9rer un token Oauth2."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Oauth2 redirect URI"))," est l'URL vers la page de redirection utilis\xe9e par le fournisseur de service externe pour renvoyer le navigateur de l'utilisateur sur Regards apr\xe8s une authentification r\xe9ussie."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},'"user info" endpoint URL'))," est l'URL du endpoint HTTP du service d'authentification externe permettant de r\xe9cup\xe9rer les informations de l'utilisateur connect\xe9."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Email mapping field"))," est le nom du champs JSON pr\xe9sent dans la r\xe9ponse \xe0 un appel au endpoint \"user info\" permettant \xe0 Regards de r\xe9cup\xe9rer l'adresse email de l'utilisateur."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Firstname mapping field")),' est le nom du champs JSON pr\xe9sent dans la r\xe9ponse \xe0 un appel au endpoint "user info" permettant \xe0 Regards de r\xe9cup\xe9rer le pr\xe9nom de l\'utilisateur.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Lastname mapping field")),' est le nom du champs JSON pr\xe9sent dans la r\xe9ponse \xe0 un appel au endpoint "user info" permettant \xe0 Regards de r\xe9cup\xe9rer le nom de l\'utilisateur.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},'"revoke" endpoint URL'))," est l'URL du endpoint HTTP du service d'authentification externe permettant d'invalider le token Oauth2 en fin de sessions, lors d'une d\xe9connexion de l'utilisateur.")))))}m.isMDXComponent=!0}}]);