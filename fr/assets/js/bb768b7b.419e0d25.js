"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[99294],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29182:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],u={id:"global-configuration-users",title:"Manage user accounts",slug:"/user-guide/global-configuration/users/"},s=void 0,c={unversionedId:"user-documentation/global-configuration/global-configuration-users",id:"user-documentation/global-configuration/global-configuration-users",isDocsHomePage:!1,title:"Manage user accounts",description:"_Tout utilisateur d'un projet est associ\xe9 \xe0 une instance de REGARDS, ainsi, un m\xeame utilisateur peut avoir acc\xe8s \xe0 plusieurs projets.",source:"@site/docs/user-documentation/1-global-configuration/user-accounts.md",sourceDirName:"user-documentation/1-global-configuration",slug:"/user-guide/global-configuration/users/",permalink:"/fr/docs/user-guide/global-configuration/users/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/1-global-configuration/user-accounts.md",tags:[],version:"current",frontMatter:{id:"global-configuration-users",title:"Manage user accounts",slug:"/user-guide/global-configuration/users/"},sidebar:"manual",previous:{title:"Manage projects",permalink:"/fr/docs/user-guide/global-configuration/projects/"},next:{title:"Introduction",permalink:"/fr/docs/user-guide/project-configuration/introduction/"}},l=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Valider des comptes utilisateurs',id:"-valider-des-comptes-utilisateurs",children:[]},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Supprimer un compte utilisateur',id:"-supprimer-un-compte-utilisateur",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Tout utilisateur d'un projet est associ\xe9 \xe0 une instance de REGARDS, ainsi, un m\xeame utilisateur peut avoir acc\xe8s \xe0 plusieurs projets.\nDepuis le menu ",(0,i.kt)("strong",{parentName:"em"},(0,i.kt)("em",{parentName:"strong"},"Account"))," de l'interface d'administration, vous pourrez voir et g\xe9rer la liste des utilisateurs de l'instance, param\xe9trer et valider les demandes de cr\xe9ation de compte.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/images/user-documentation/v1.4/1-global-configuration/accounts-menu.png",alt:"interface admin",width:"800"})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"-valider-des-comptes-utilisateurs"},(0,i.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Valider des comptes utilisateurs"),(0,i.kt)("p",null,"Lorsqu'un utilisateur demande la cr\xe9ation d'un nouveau compte, il est possible de configurer le syst\xe8me pour demander deux niveaux d'acceptation de la demande :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Validation du compte au niveau du projet. Pour plus d'information, reportez-vous \xe0 la page ",(0,i.kt)("a",{parentName:"li",href:"../../project-configuration/users/"},"Manage project users")),(0,i.kt)("li",{parentName:"ol"},"Validation du compte au niveau de l'instance")),(0,i.kt)("p",null,"La validation du compte au niveau instance est configurable depuis la section ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Accounts"))," de l'interface administration."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/images/user-documentation/v1.4/1-global-configuration/accounts-settings.png",alt:"account settings",width:"800"})),(0,i.kt)("p",null,"Deux configurations sont alors possibles :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Automatic"))," : Aucune validation manuelle de niveau instance ne sera demand\xe9e et le compte sera automatiquement cr\xe9\xe9 et activ\xe9."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Manual"))," : Toute demande de compte devra \xeatre valid\xe9e par un administrateur de l'instance REGARDS.")),(0,i.kt)("p",null,"Dans le cas d'une validation manuelle, l'administrateur d'instance doit valider la demande comme pr\xe9sent\xe9 dans l'\xe9cran ci-dessous."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/images/user-documentation/v1.4/1-global-configuration/account-validation.png",alt:"account validation",width:"800"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dans le menu ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Accounts")),", un compteur indique le nombre d'utilisateurs en attente de validation."),(0,i.kt)("li",{parentName:"ul"},"Dans l'onglet ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"New accounts"))," les utilisateurs en attente de validation sont list\xe9s."),(0,i.kt)("li",{parentName:"ul"},"Deux actions sont alors possibles, accepter (cadre vert) ou refuser le compte (cadre rouge).")),(0,i.kt)("p",null,"Une fois les comptes accept\xe9s, ils sont pr\xe9sents dans l'onglet ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"All Users")),"."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/images/user-documentation/v1.4/1-global-configuration/accounts.png",alt:"accounts",width:"800"})),(0,i.kt)("p",null,"La validation des comptes au niveau de l'instance est termin\xe9e, mais leur validation au niveau projet peut \xeatre encore n\xe9cessaire."),(0,i.kt)("h3",{id:"-supprimer-un-compte-utilisateur"},(0,i.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Supprimer un compte utilisateur"),(0,i.kt)("p",null,"Vous pouvez supprimer un compte que si celui-ci n'est associ\xe9 \xe0 aucun utilisateur projet. Dans ce cas, l'ic\xf4ne de suppression est accessible appara\xeet sur pour le compte concern\xe9."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/images/user-documentation/v1.4/1-global-configuration/account-deletion.png",alt:"account deletion",width:"800"})))}d.isMDXComponent=!0}}]);