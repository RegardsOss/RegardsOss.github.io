"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[2611],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(g,i(i({ref:n},l),{},{components:t})):r.createElement(g,i({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const o={id:"crawler-configure-connection",title:"Configure external database connection",slug:"/user-guide/crawler/configure-connection/"},i=void 0,c={unversionedId:"user-documentation/crawler/crawler-configure-connection",id:"version-1.8.1/user-documentation/crawler/crawler-configure-connection",title:"Configure external database connection",description:"Pour configurer une connexion \xe0 une base de donn\xe9es externe, veuillez suivre les \xe9tapes suivantes.",source:"@site/versioned_docs/version-1.8.1/user-documentation/5-crawler/configure-database.md",sourceDirName:"user-documentation/5-crawler",slug:"/user-guide/crawler/configure-connection/",permalink:"/docs/1.8.1/user-guide/crawler/configure-connection/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.8.1/user-documentation/5-crawler/configure-database.md",tags:[],version:"1.8.1",frontMatter:{id:"crawler-configure-connection",title:"Configure external database connection",slug:"/user-guide/crawler/configure-connection/"},sidebar:"manual",previous:{title:"Introduction",permalink:"/docs/1.8.1/user-guide/crawler/introduction/"},next:{title:"Configure datasources introduction",permalink:"/docs/1.8.1/user-guide/crawler/configure-datasources/"}},s={},u=[],l={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Pour configurer une connexion \xe0 une base de donn\xe9es externe, veuillez suivre les \xe9tapes suivantes.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Depuis ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Add data"))," et la carte ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Crawling")),", cliquez sur ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Configure connection to external databases"))," puis sur ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Add")),".")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-connections.png",alt:"database",width:"800"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Donnez le nom de la connexion, s\xe9lectionnez un plugin de connexion \xe0 une base de donn\xe9es selon votre type de base. Entrez un utilisateur, son mot de passe, une adresse d\u2019acc\xe8s \xe0 une base de donn\xe9es, son port et son nom.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-connection.png",alt:"database",width:"800"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cliquez sur ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Save"))),(0,a.kt)("li",{parentName:"ul"},"Testez ensuite la connexion en appuyant sur le bouton ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"play")),", un message s\u2019affiche pour indiquer que la connexion est fonctionnelle.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-connected.png",alt:"connected",width:"800"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Appuyez sur ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Previous"))," pour revenir \xe0 la carte ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Crawling")))),(0,a.kt)("p",null,"Vous pouvez d\xe9sormais ",(0,a.kt)("a",{parentName:"p",href:"../configure-datasources/external-databases/"},"ajouter des \xe9l\xe9ments au catalogue depuis cette nouvelle source de donn\xe9es")))}p.isMDXComponent=!0}}]);