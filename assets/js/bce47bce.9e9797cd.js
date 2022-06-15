"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[35176],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(g,i(i({ref:n},l),{},{components:t})):r.createElement(g,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},17569:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],u={id:"crawler-configure-connection",title:"Configure external database connection",slug:"/user-guide/crawler/configure-connection/"},c=void 0,s={unversionedId:"user-documentation/crawler/crawler-configure-connection",id:"version-1.7.1/user-documentation/crawler/crawler-configure-connection",title:"Configure external database connection",description:"Pour configurer une connexion \xe0 une base de donn\xe9es externe, veuillez suivre les \xe9tapes suivantes.",source:"@site/versioned_docs/version-1.7.1/user-documentation/5-crawler/configure-database.md",sourceDirName:"user-documentation/5-crawler",slug:"/user-guide/crawler/configure-connection/",permalink:"/docs/1.7.1/user-guide/crawler/configure-connection/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/user-documentation/5-crawler/configure-database.md",tags:[],version:"1.7.1",frontMatter:{id:"crawler-configure-connection",title:"Configure external database connection",slug:"/user-guide/crawler/configure-connection/"},sidebar:"manual",previous:{title:"Introduction",permalink:"/docs/1.7.1/user-guide/crawler/introduction/"},next:{title:"Configure datasources introduction",permalink:"/docs/1.7.1/user-guide/crawler/configure-datasources/"}},l={},d=[],p={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Pour configurer une connexion \xe0 une base de donn\xe9es externe, veuillez suivre les \xe9tapes suivantes.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Depuis ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Add data"))," et la carte ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Crawling")),", cliquez sur ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Configure connection to external databases"))," puis sur ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Add")),".")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-connections.png",alt:"database",width:"800"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Donnez le nom de la connexion, s\xe9lectionnez un plugin de connexion \xe0 une base de donn\xe9es selon votre type de base. Entrez un utilisateur, son mot de passe, une adresse d\u2019acc\xe8s \xe0 une base de donn\xe9es, son port et son nom.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-connection.png",alt:"database",width:"800"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cliquez sur ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Save"))),(0,a.kt)("li",{parentName:"ul"},"Testez ensuite la connexion en appuyant sur le bouton ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"play")),", un message s\u2019affiche pour indiquer que la connexion est fonctionnelle.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-connected.png",alt:"connected",width:"800"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Appuyez sur ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Previous"))," pour revenir \xe0 la carte ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Crawling")))),(0,a.kt)("p",null,"Vous pouvez d\xe9sormais ",(0,a.kt)("a",{parentName:"p",href:"../configure-datasources/external-databases/"},"ajouter des \xe9l\xe9ments au catalogue depuis cette nouvelle source de donn\xe9es")))}m.isMDXComponent=!0}}]);