"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[43974],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>d});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),u=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(l.Provider,{value:r},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),p=n,d=m["".concat(l,".").concat(p)]||m[p]||g[p]||o;return t?a.createElement(d,s(s({ref:r},c),{},{components:t})):a.createElement(d,s({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},95925:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=t(58168),n=(t(96540),t(15680));const o={id:"crawler-fem",title:"Crawl data from GeoJson Feature internal datasource",slug:"/user-guide/crawler/configure-datasources/fem/"},s=void 0,i={unversionedId:"user-documentation/crawler/crawler-fem",id:"version-1.13.0/user-documentation/crawler/crawler-fem",title:"Crawl data from GeoJson Feature internal datasource",description:"Peuplez le catalogue avec les donn\xe9es contenues depuis le feature manager",source:"@site/versioned_docs/version-1.13.0/user-documentation/5-crawler/fem.md",sourceDirName:"user-documentation/5-crawler",slug:"/user-guide/crawler/configure-datasources/fem/",permalink:"/docs/1.13.0/user-guide/crawler/configure-datasources/fem/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/user-documentation/5-crawler/fem.md",tags:[],version:"1.13.0",frontMatter:{id:"crawler-fem",title:"Crawl data from GeoJson Feature internal datasource",slug:"/user-guide/crawler/configure-datasources/fem/"},sidebar:"manual",previous:{title:"Crawl data from OAIS internal datasource",permalink:"/docs/1.13.0/user-guide/crawler/configure-datasources/aips/"},next:{title:"Monitor crawling",permalink:"/docs/1.13.0/user-guide/crawler/monitor-crawling/"}},l={},u=[],c={toc:u},m="wrapper";function g(e){let{components:r,...t}=e;return(0,n.yg)(m,(0,a.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Peuplez le catalogue avec les donn\xe9es contenues depuis le feature manager")),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Vous devez d\xe9j\xe0 avoir :"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"cr\xe9\xe9 des features depuis le feature manager, r\xe9f\xe9rez-vous \xe0 la section ",(0,n.yg)("a",{parentName:"li",href:"/docs/1.13.0/user-guide/import-data/fem/introduction/"},"Import data - FEM")," si ce n'est d\xe9j\xe0 fait."))),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Depuis le menu ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Add data"))," et la carte ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Crawling")),", cliquez sur ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Map data sources to internal models"))," et effectuez les actions suivantes :"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Depuis l'\xe9cran ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Map data sources to internal models")),", cliquez sur ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Add"))),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource.png",alt:"add datasource",width:"800"}))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"S\xe9lectionnez l'option ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"crawling features from feature manager"))))),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource-fem.png",alt:"features",width:"800"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Vous serez redirig\xe9 vers l'\xe9cran ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Create a new features datasource"))," sur lequel, vous devez compl\xe9ter deux champs :",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Name")),", o\xf9 vous pr\xe9ciserez le nom de la source de donn\xe9es."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Data model")),", o\xf9 vous devrez obligatoirement choisir dans la liste d\xe9roulante le mod\xe8le ayant servi \xe0 la cr\xe9ation des features que vous souhaitez r\xe9f\xe9rencer dans le catalogue"))),(0,n.yg)("li",{parentName:"ul"},"Appuyez ensuite sur ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Save"))),(0,n.yg)("li",{parentName:"ul"},"V\xe9rifiez que votre source de donn\xe9es se trouve dans la liste"),(0,n.yg)("li",{parentName:"ul"},"Rendez-vous ensuite dans la section ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},(0,n.yg)("a",{parentName:"em",href:"/docs/1.13.0/user-guide/crawler/monitor-crawling/"},"Monitor data crawling")))," pour suivre l'aspiration de vos features.")))}g.isMDXComponent=!0}}]);