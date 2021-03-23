(window.webpackJsonp=window.webpackJsonp||[]).push([[1740],{1812:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(2704)),o={id:"project-configuration-users-authentication-openid",title:"Configure OpenID Connect",slug:"/user-guide/project-configuration/users/openid/"},c={unversionedId:"user-documentation/2-project-configuration/project-configuration-users-authentication-openid",id:"user-documentation/2-project-configuration/project-configuration-users-authentication-openid",isDocsHomePage:!1,title:"Configure OpenID Connect",description:"Configurez les param\xe8tres de connexion \xe0 un Service provider pour authentification via OpenID Connect.",source:"@site/docs/user-documentation/2-project-configuration/users-authentication-openid.md",slug:"/user-guide/project-configuration/users/openid/",permalink:"/fr/docs/user-guide/project-configuration/users/openid/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/2-project-configuration/users-authentication-openid.md",version:"current",sidebar:"manual",previous:{title:"Manage authentications",permalink:"/fr/docs/user-guide/project-configuration/users/authentication/"},next:{title:"Customize user interface",permalink:"/fr/docs/user-guide/project-configuration/user-interface/"}},u=[],s={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Configurez les param\xe8tres de connexion \xe0 un Service provider pour authentification via OpenID Connect"),"."),Object(i.b)("div",{align:"center"},Object(i.b)("img",{src:"/images/user-documentation/2-project-configuration/users/service-provider-openid-connect.png",alt:"OpenID Connect",width:"800"})),Object(i.b)("p",null,"L'\xe9cran ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Ajouter un nouveau fournisseur de service"))," est d\xe9coup\xe9 en deux parties :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"Param\xe8tres g\xe9n\xe9raux")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"Nom")),' est le nom choisi pour ce Service provider. Ce nom devra \xeatre r\xe9percut\xe9 dans le champs "Oauth2 redirect URI".'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"URL"))," est l'URL du formulaire de login du service d'authentification externe. L'URL doit \xeatre compl\xe8te, c'est \xe0 dire qu'elle doit inclure l'ID client, l'URL de redirection vers Regards ou autres param\xe8tres requis pas le fournisseur de service d'authentification externe."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"Param\xe8tres sp\xe9cifiques au plugin OpenID Connect")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"Libill\xe9"))," est un alias donn\xe9 \xe0 la configuration du plugin OpenID Connect cr\xe9\xe9e pour ce Service provider."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"Client Id"))," est l'identifiant client r\xe9pertoriant Regards en tant qu'utilisateur du Service provider aupr\xe8s sur fournisseur de service d'authentification externe."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"Client Secret"))," est le code secret associ\xe9 \xe0 l'identifiant client ci-dessus, d\xe9livr\xe9 par le fournisseur de service d'authentification externe."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},'"token" endpoint URL'))," est l'URL du endpoint HTTP du service d'authentification externe permettant de r\xe9cup\xe9rer un token Oauth2."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"Oauth2 redirect URI"))," est l'URL vers la page de redirection utilis\xe9e par le fournisseur de service externe pour renvoyer le navigateur de l'utilisateur sur Regards apr\xe8s une authentification r\xe9ussie."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},'"user info" endpoint URL'))," est l'URL du endpoint HTTP du service d'authentification externe permettant de r\xe9cup\xe9rer les informations de l'utilisateur connect\xe9."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"Email mapping field"))," est le nom du champs JSON pr\xe9sent dans la r\xe9ponse \xe0 un appel au endpoint \"user info\" permettant \xe0 Regards de r\xe9cup\xe9rer l'adresse email de l'utilisateur."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"Firstname mapping field")),' est le nom du champs JSON pr\xe9sent dans la r\xe9ponse \xe0 un appel au endpoint "user info" permettant \xe0 Regards de r\xe9cup\xe9rer le pr\xe9nom de l\'utilisateur.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"Lastname mapping field")),' est le nom du champs JSON pr\xe9sent dans la r\xe9ponse \xe0 un appel au endpoint "user info" permettant \xe0 Regards de r\xe9cup\xe9rer le nom de l\'utilisateur.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},'"revoke" endpoint URL'))," est l'URL du endpoint HTTP du service d'authentification externe permettant d'invalider le token Oauth2 en fin de sessions, lors d'une d\xe9connexion de l'utilisateur.")))))}p.isMDXComponent=!0},2704:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,b=l["".concat(o,".").concat(m)]||l[m]||d[m]||i;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);