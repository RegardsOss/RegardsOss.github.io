"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[50778],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var a=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,s=function(e,r){if(null==e)return{};var t,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=a.createContext({}),c=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=c(e.components);return a.createElement(u.Provider,{value:r},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,s=e.mdxType,n=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=c(t),g=s,m=l["".concat(u,".").concat(g)]||l[g]||p[g]||n;return t?a.createElement(m,o(o({ref:r},d),{},{components:t})):a.createElement(m,o({ref:r},d))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var n=t.length,o=new Array(n);o[0]=g;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[l]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<n;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},797:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=t(87462),s=(t(67294),t(3905));const n={id:"crawler-configure-datasources",title:"Configure datasources",sidebar_label:"Configure datasources introduction",slug:"/user-guide/crawler/configure-datasources/"},o=void 0,i={unversionedId:"user-documentation/crawler/crawler-configure-datasources",id:"version-1.12.0/user-documentation/crawler/crawler-configure-datasources",title:"Configure datasources",description:"L'\xe9cran de configuration des aspirations de donn\xe9es (accessible depuis la carte Crawling, puis  Map data sources to internal models ), vous permet de cr\xe9er des aspirations ou de g\xe9rer celles que vous avez pr\xe9c\xe9demment configur\xe9es.",source:"@site/versioned_docs/version-1.12.0/user-documentation/5-crawler/configure-datasource.md",sourceDirName:"user-documentation/5-crawler",slug:"/user-guide/crawler/configure-datasources/",permalink:"/docs/1.12.0/user-guide/crawler/configure-datasources/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/user-documentation/5-crawler/configure-datasource.md",tags:[],version:"1.12.0",frontMatter:{id:"crawler-configure-datasources",title:"Configure datasources",sidebar_label:"Configure datasources introduction",slug:"/user-guide/crawler/configure-datasources/"},sidebar:"manual",previous:{title:"Configure external database connection",permalink:"/docs/1.12.0/user-guide/crawler/configure-connection/"},next:{title:"Crawl data from external database",permalink:"/docs/1.12.0/user-guide/crawler/configure-datasources/external-databases/"}},u={},c=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Cr\xe9er les sources d&#39;aspiration',id:"-cr\xe9er-les-sources-daspiration",level:2},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> G\xe9rer les sources d&#39;aspiration',id:"-g\xe9rer-les-sources-daspiration",level:2}],d={toc:c},l="wrapper";function p(e){let{components:r,...t}=e;return(0,s.kt)(l,(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"L'\xe9cran de configuration des aspirations de donn\xe9es (accessible depuis la carte ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Crawling")),", puis ",(0,s.kt)("img",{src:"/images/user-documentation/regards-icons/admin/configure.png",alt:"configure",height:"25",width:"25"})," ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Map data sources to internal models"))," ), vous permet de cr\xe9er des aspirations ou de g\xe9rer celles que vous avez pr\xe9c\xe9demment configur\xe9es."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"-cr\xe9er-les-sources-daspiration"},(0,s.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Cr\xe9er les sources d'aspiration"),(0,s.kt)("p",null,"Vous pouvez ajouter deux types de sources de donn\xe9es selon vos besoins."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Depuis des sources de donn\xe9es internes \xe0 REGARDS :",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"depuis des ",(0,s.kt)("a",{parentName:"li",href:"/docs/1.12.0/user-guide/crawler/configure-datasources/aips/"},"AIPs au format OAIS")),(0,s.kt)("li",{parentName:"ul"},"depuis des ",(0,s.kt)("a",{parentName:"li",href:"/docs/1.12.0/user-guide/crawler/configure-datasources/fem/"},"features du feature manager")))),(0,s.kt)("li",{parentName:"ul"},"Depuis des sources de donn\xe9es externes \xe0 REGARDS :",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"depuis une ",(0,s.kt)("a",{parentName:"li",href:"/docs/1.12.0/user-guide/crawler/configure-datasources/external-databases/"},"base de donn\xe9es externe")),(0,s.kt)("li",{parentName:"ul"},"depuis une ",(0,s.kt)("a",{parentName:"li",href:"/docs/1.12.0/user-guide/crawler/configure-datasources/opensearch/"},"source web OpenSearch"))))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"-g\xe9rer-les-sources-daspiration"},(0,s.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," G\xe9rer les sources d'aspiration"),(0,s.kt)("div",{align:"center"},(0,s.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-datasources.png",alt:"datasources",width:"800"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Vous pouvez activer ou d\xe9sactiver les aspirations avec les ",(0,s.kt)("img",{src:"/images/user-documentation/regards-icons/admin/toggle-button.png",alt:"toggle",height:"25",width:"25"})," toggles buttons. Si vous choisissez d'en d\xe9sactiver une, l'indexation du catalogue ne s'effectuera plus \xe0 partir de cette source de donn\xe9es."),(0,s.kt)("li",{parentName:"ul"},"Vous pouvez modifier les aspirations ou les supprimer. Attention, seules les sources de donn\xe9es non associ\xe9es \xe0 un jeu de donn\xe9es peuvent \xeatre supprim\xe9es. Cliquez ici pour en savoir plus sur les ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},(0,s.kt)("a",{parentName:"em",href:"/docs/1.12.0/user-guide/data-organization/collections-datasets/"},"Datasets"))))))}p.isMDXComponent=!0}}]);