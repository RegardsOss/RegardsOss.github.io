"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[67470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={id:"global-configuration-users",title:"Manage user accounts",slug:"/user-guide/global-configuration/users/"},o=void 0,s={unversionedId:"user-documentation/global-configuration/global-configuration-users",id:"version-1.6.0/user-documentation/global-configuration/global-configuration-users",title:"Manage user accounts",description:"_Tout utilisateur d'un projet est associ\xe9 \xe0 une instance de REGARDS, ainsi, un m\xeame utilisateur peut avoir acc\xe8s \xe0 plusieurs projets.",source:"@site/versioned_docs/version-1.6.0/user-documentation/1-global-configuration/user-accounts.md",sourceDirName:"user-documentation/1-global-configuration",slug:"/user-guide/global-configuration/users/",permalink:"/docs/1.6.0/user-guide/global-configuration/users/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/user-documentation/1-global-configuration/user-accounts.md",tags:[],version:"1.6.0",frontMatter:{id:"global-configuration-users",title:"Manage user accounts",slug:"/user-guide/global-configuration/users/"},sidebar:"version-1.6.0/manual",previous:{title:"Manage projects",permalink:"/docs/1.6.0/user-guide/global-configuration/projects/"},next:{title:"Introduction",permalink:"/docs/1.6.0/user-guide/project-configuration/introduction/"}},u={},l=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Valider des comptes utilisateurs',id:"-valider-des-comptes-utilisateurs",level:3},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Supprimer un compte utilisateur',id:"-supprimer-un-compte-utilisateur",level:3}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Tout utilisateur d'un projet est associ\xe9 \xe0 une instance de REGARDS, ainsi, un m\xeame utilisateur peut avoir acc\xe8s \xe0 plusieurs projets.\nDepuis le menu ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)("em",{parentName:"strong"},"Account"))," de l'interface d'administration, vous pourrez voir et g\xe9rer la liste des utilisateurs de l'instance, param\xe9trer et valider les demandes de cr\xe9ation de compte.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.4/1-global-configuration/accounts-menu.png",alt:"interface admin",width:"800"})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-valider-des-comptes-utilisateurs"},(0,a.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Valider des comptes utilisateurs"),(0,a.kt)("p",null,"Lorsqu'un utilisateur demande la cr\xe9ation d'un nouveau compte, il est possible de configurer le syst\xe8me pour demander deux niveaux d'acceptation de la demande :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Validation du compte au niveau du projet. Pour plus d'information, reportez-vous \xe0 la page ",(0,a.kt)("a",{parentName:"li",href:"../../project-configuration/users/"},"Manage project users")),(0,a.kt)("li",{parentName:"ol"},"Validation du compte au niveau de l'instance")),(0,a.kt)("p",null,"La validation du compte au niveau instance est configurable depuis la section ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Accounts"))," de l'interface administration."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.4/1-global-configuration/accounts-settings.png",alt:"account settings",width:"800"})),(0,a.kt)("p",null,"Deux configurations sont alors possibles :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Automatic"))," : Aucune validation manuelle de niveau instance ne sera demand\xe9e et le compte sera automatiquement cr\xe9\xe9 et activ\xe9."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Manual"))," : Toute demande de compte devra \xeatre valid\xe9e par un administrateur de l'instance REGARDS.")),(0,a.kt)("p",null,"Dans le cas d'une validation manuelle, l'administrateur d'instance doit valider la demande comme pr\xe9sent\xe9 dans l'\xe9cran ci-dessous."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.4/1-global-configuration/account-validation.png",alt:"account validation",width:"800"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dans le menu ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Accounts")),", un compteur indique le nombre d'utilisateurs en attente de validation."),(0,a.kt)("li",{parentName:"ul"},"Dans l'onglet ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"New accounts"))," les utilisateurs en attente de validation sont list\xe9s."),(0,a.kt)("li",{parentName:"ul"},"Deux actions sont alors possibles, accepter (cadre vert) ou refuser le compte (cadre rouge).")),(0,a.kt)("p",null,"Une fois les comptes accept\xe9s, ils sont pr\xe9sents dans l'onglet ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"All Users")),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.4/1-global-configuration/accounts.png",alt:"accounts",width:"800"})),(0,a.kt)("p",null,"La validation des comptes au niveau de l'instance est termin\xe9e, mais leur validation au niveau projet peut \xeatre encore n\xe9cessaire."),(0,a.kt)("h3",{id:"-supprimer-un-compte-utilisateur"},(0,a.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Supprimer un compte utilisateur"),(0,a.kt)("p",null,"Vous pouvez supprimer un compte que si celui-ci n'est associ\xe9 \xe0 aucun utilisateur projet. Dans ce cas, l'ic\xf4ne de suppression est accessible appara\xeet sur pour le compte concern\xe9."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.4/1-global-configuration/account-deletion.png",alt:"account deletion",width:"800"})))}p.isMDXComponent=!0}}]);