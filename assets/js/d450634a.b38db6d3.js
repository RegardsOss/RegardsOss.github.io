"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[57965],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93551:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={id:"crawler-monitor-crawling",title:"Monitor crawling",slug:"/user-guide/crawler/monitor-crawling/"},o=void 0,s={unversionedId:"user-documentation/crawler/crawler-monitor-crawling",id:"version-1.15/user-documentation/crawler/crawler-monitor-crawling",title:"Monitor crawling",description:"Pour suivre les aspirations de donn\xe9es, cliquez sur Ajout de donn\xe9es dans le menu lat\xe9ral de REGARDS, puis dans la carte Crawling, cliquez sur  Monitor data crawling .",source:"@site/versioned_docs/version-1.15/user-documentation/5-crawler/monitor-crawling.md",sourceDirName:"user-documentation/5-crawler",slug:"/user-guide/crawler/monitor-crawling/",permalink:"/docs/user-guide/crawler/monitor-crawling/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/user-documentation/5-crawler/monitor-crawling.md",tags:[],version:"1.15",frontMatter:{id:"crawler-monitor-crawling",title:"Monitor crawling",slug:"/user-guide/crawler/monitor-crawling/"},sidebar:"manual",previous:{title:"Crawl data from GeoJson Feature internal datasource",permalink:"/docs/user-guide/crawler/configure-datasources/fem/"},next:{title:"Reset catalog",permalink:"/docs/user-guide/crawler/reset-catalog/"}},l={},u=[],c={toc:u},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pour suivre les aspirations de donn\xe9es, cliquez sur ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Ajout de donn\xe9es"))," dans le menu lat\xe9ral de REGARDS, puis dans la carte ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Crawling")),", cliquez sur ",(0,a.kt)("img",{src:"/images/user-documentation/regards-icons/admin/monitor.png",alt:"monitor",height:"25",width:"25"})," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Monitor data crawling"))," ."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"L'\xe9cran pr\xe9sente la liste des aspirations de donn\xe9es en cours ou termin\xe9es. "),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-monitor.png",alt:"add datasource",width:"800"})),(0,a.kt)("p",null,"Plusieurs informations sont disponibles :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Label"))," correspond au nom donn\xe9 \xe0 la cha\xeene d'aspiration lors de sa cr\xe9ation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Last ingest date"))," indique la derni\xe8re date de scan de la source d'aspiration"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Duration"))," dur\xe9e de la derni\xe8re aspiration en secondes. Celle-ci n'est pas affich\xe9e dans le cas o\xf9 la colonne ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Status"))," n'est pas ",(0,a.kt)("em",{parentName:"li"},"FINISHED")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Status"))," indique le statut du traitement de l'aspiration, accompagn\xe9 d'un panneau cliquable d\xe9crivant la stacktrace du traitement Il y a sept \xe9tats possibles :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"NEW"),", si la datasource n'a encore jamais \xe9t\xe9 scann\xe9e,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"STARTED"),", si la datasource a \xe9t\xe9 prise en compte et est en train d'\xeatre scann\xe9e,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"FINISHED"),", si la derni\xe8re aspiration de donn\xe9es s'est termin\xe9e sans erreur,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"FINISHED_WITH_WARNINGS"),", si la derni\xe8re aspiration de donn\xe9es s'est termin\xe9e avec des alertes,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"ERROR"),", si la derni\xe8re aspiration de donn\xe9es s'est termin\xe9e en erreur,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"NOT_FINISHED"),", si la derni\xe8re aspiration ne s'est pas enti\xe8rement termin\xe9e,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"INACTIVE"),", si l'aspiration de donn\xe9es n'est pas activ\xe9e"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Number of entities"))," indique le nombre de donn\xe9es trait\xe9es lors de la derni\xe8re aspiration."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Next ingest date"))," affiche la prochaine date d'aspiration de donn\xe9es pr\xe9vue.")),(0,a.kt)("p",null,"Il y a \xe9galement des boutons d'action :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{src:"/images/user-documentation/regards-icons/admin/refresh.png",alt:"refresh",height:"20",width:"100"})," le bouton ",(0,a.kt)("b",null,(0,a.kt)("i",null,"Refresh"))," mets \xe0 jour les informations de la page"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{src:"/images/user-documentation/regards-icons/admin/clock.png",alt:"clock",height:"30",width:"30"})," les boutons ",(0,a.kt)("b",null,(0,a.kt)("i",null,"Schedule an ingestion"))," permettent de d\xe9marrer une nouvelle aspiration. Cela n'a un impact que sur les nouvelles donn\xe9es n'ayant pas encore \xe9t\xe9 aspir\xe9es. Cette fonctionnalit\xe9 est utile si vous ne souhaitez pas attendre la prochaine aspiration programm\xe9e."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{src:"/images/user-documentation/regards-icons/admin/delete.png",alt:"reset",height:"30",width:"30"})," les boutons ",(0,a.kt)("b",null,(0,a.kt)("i",null,"Delete"))," suppriment les donn\xe9es aspir\xe9es dans le catalogue et relancent l'aspiration de la totalit\xe9 de la source.")))}p.isMDXComponent=!0}}]);