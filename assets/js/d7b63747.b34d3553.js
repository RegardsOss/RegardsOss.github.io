"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[23209],{15680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>m});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),p=a,m=d["".concat(u,".").concat(p)]||d[p]||g[p]||o;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7422:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(58168),a=(t(96540),t(15680));const o={id:"crawler-introduction",title:"Introduction",slug:"/user-guide/crawler/introduction/"},i=void 0,s={unversionedId:"user-documentation/crawler/crawler-introduction",id:"version-1.11.0/user-documentation/crawler/crawler-introduction",title:"Introduction",description:"REGARDS permet d\u2019aspirer des donn\xe9es depuis n\u2019importe quelle source. Celle-ci sert \xe0 l\u2019indexation du catalogue de donn\xe9es accessible depuis l\u2019IHM utilisateur. Ce catalogue permet de consulter les donn\xe9es et leurs m\xe9tadonn\xe9es, r\xe9f\xe9renc\xe9es dans le syst\xe8me.",source:"@site/versioned_docs/version-1.11.0/user-documentation/5-crawler/introduction-crawler.md",sourceDirName:"user-documentation/5-crawler",slug:"/user-guide/crawler/introduction/",permalink:"/docs/1.11.0/user-guide/crawler/introduction/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/user-documentation/5-crawler/introduction-crawler.md",tags:[],version:"1.11.0",frontMatter:{id:"crawler-introduction",title:"Introduction",slug:"/user-guide/crawler/introduction/"},sidebar:"manual",previous:{title:"FEM Settings",permalink:"/docs/1.11.0/user-guide/import-data/fem/manage-features-settings/"},next:{title:"Configure external database connection",permalink:"/docs/1.11.0/user-guide/crawler/configure-connection/"}},u={},c=[{value:'<img src="/images/user-documentation/regards-icons/admin/database.png" alt="database" height="30" width="30"/> Configure connection to external databases',id:"-configure-connection-to-external-databases",level:3},{value:'<img src="/images/user-documentation/regards-icons/admin/configure.png" alt="configure" height="30" width="30"/> Map data sources to internal databases',id:"-map-data-sources-to-internal-databases",level:3},{value:'<img src="/images/user-documentation/regards-icons/admin/monitor.png" alt="monitor" height="30" width="30"/> Monitor data crawling',id:"-monitor-data-crawling",level:3},{value:'<img src="/images/user-documentation/regards-icons/admin/delete.png" alt="reset" height="30" width="30"/> Reset data catalog',id:"-reset-data-catalog",level:3}],l={toc:c},d="wrapper";function g(e){let{components:r,...t}=e;return(0,a.yg)(d,(0,n.A)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"REGARDS permet d\u2019aspirer des donn\xe9es depuis n\u2019importe quelle source. Celle-ci sert \xe0 l\u2019indexation du catalogue de donn\xe9es accessible depuis l\u2019IHM utilisateur. Ce catalogue permet de consulter les donn\xe9es et leurs m\xe9tadonn\xe9es, r\xe9f\xe9renc\xe9es dans le syst\xe8me.")),(0,a.yg)("p",null,"Dans le menu lat\xe9ral, cliquez sur ",(0,a.yg)("strong",{parentName:"p"},"Add data")," et observez la carte ",(0,a.yg)("strong",{parentName:"p"},"Crawling"),"."),(0,a.yg)("img",{src:"/images/user-documentation/regards-icons/admin/menu-add-data.png",height:"200"}),(0,a.yg)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawling-card.png",height:"200"}),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"-configure-connection-to-external-databases"},(0,a.yg)("img",{src:"/images/user-documentation/regards-icons/admin/database.png",alt:"database",height:"30",width:"30"})," Configure connection to external databases"),(0,a.yg)("p",null,"REGARDS peut automatiquement se connecter \xe0 une base de donn\xe9es externe afin de compl\xe9ter votre catalogue. Avant de pouvoir ajouter des donn\xe9es par ce biais, vous devez configurer une nouvelle connexion externe."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/1.11.0/user-guide/crawler/configure-connection/"},"Learn how to configure a connection to an external database")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"-map-data-sources-to-internal-databases"},(0,a.yg)("img",{src:"/images/user-documentation/regards-icons/admin/configure.png",alt:"configure",height:"30",width:"30"})," Map data sources to internal databases"),(0,a.yg)("p",null,"Vous pouvez configurer et g\xe9rer des aspirations dans cette cat\xe9gorie. Celles-ci vont vous permettre d'enrichir le catalogue REGARDS au travers de multiples sources de donn\xe9es.\nIl existe actuellement quatre mani\xe8res d'ajouter des donn\xe9es au catalogue :"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"depuis des ",(0,a.yg)("a",{parentName:"li",href:"/docs/1.11.0/user-guide/crawler/configure-datasources/aips/"},"AIPs au format GeoJSON")),(0,a.yg)("li",{parentName:"ul"},"depuis des ",(0,a.yg)("a",{parentName:"li",href:"/docs/1.11.0/user-guide/crawler/configure-datasources/fem/"},"features du feature manager")),(0,a.yg)("li",{parentName:"ul"},"depuis une ",(0,a.yg)("a",{parentName:"li",href:"/docs/1.11.0/user-guide/crawler/configure-datasources/external-databases/"},"base de donn\xe9es externe")),(0,a.yg)("li",{parentName:"ul"},"depuis une ",(0,a.yg)("a",{parentName:"li",href:"/docs/1.11.0/user-guide/crawler/configure-datasources/opensearch/"},"source web OpenSearch"))),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/1.11.0/user-guide/crawler/configure-datasources/"},"Learn how to map data sources to internal models")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"-monitor-data-crawling"},(0,a.yg)("img",{src:"/images/user-documentation/regards-icons/admin/monitor.png",alt:"monitor",height:"30",width:"30"})," Monitor data crawling"),(0,a.yg)("p",null,"Une fois les aspirations de donn\xe9es configur\xe9es, vous pouvez suivre leur avancement dans la rubrique de suivi des traitements."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/1.11.0/user-guide/crawler/monitor-crawling/"},"Learn how to monitor data crawling")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"-reset-data-catalog"},(0,a.yg)("img",{src:"/images/user-documentation/regards-icons/admin/delete.png",alt:"reset",height:"30",width:"30"})," Reset data catalog"),(0,a.yg)("p",null,"Cette derni\xe8re fonctionnalit\xe9 vous permet de r\xe9initialiser le catalogue. Cela pourra s'av\xe9rer utile si vous n'\xeates pas s\xfbr du contenu du catalogue. Cette op\xe9ration recr\xe9era toutes les donn\xe9es \xe0 la date de r\xe9initialisation en fonction des sources d'aspiration configur\xe9es."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/1.11.0/user-guide/crawler/reset-catalog/"},"Learn how to reset data catalog")))}g.isMDXComponent=!0}}]);