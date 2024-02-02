"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[46220],{95788:(e,r,t)=>{t.d(r,{Iu:()=>g,yg:()=>c});var a=t(11504);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),l=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},g=function(e){var r=l(e.components);return a.createElement(u.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=l(t),d=n,c=p["".concat(u,".").concat(d)]||p[d]||m[d]||s;return t?a.createElement(c,i(i({ref:r},g),{},{components:t})):a.createElement(c,i({ref:r},g))}));function c(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},600:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=t(45072),n=(t(11504),t(95788));const s={id:"fem-manage-features",title:"Manage features",slug:"/user-guide/import-data/fem/manage-features/"},i=void 0,o={unversionedId:"user-documentation/4_3-fem/fem-manage-features",id:"version-1.12.0/user-documentation/4_3-fem/fem-manage-features",title:"Manage features",description:"G\xe9rez vos features par messages AMQP.",source:"@site/versioned_docs/version-1.12.0/user-documentation/4_3-fem/manage-features.md",sourceDirName:"user-documentation/4_3-fem",slug:"/user-guide/import-data/fem/manage-features/",permalink:"/docs/1.12.0/user-guide/import-data/fem/manage-features/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/user-documentation/4_3-fem/manage-features.md",tags:[],version:"1.12.0",frontMatter:{id:"fem-manage-features",title:"Manage features",slug:"/user-guide/import-data/fem/manage-features/"},sidebar:"manual",previous:{title:"Introduction",permalink:"/docs/1.12.0/user-guide/import-data/fem/introduction/"},next:{title:"Feature dissemination",permalink:"/docs/1.12.0/user-guide/import-data/fem/features-dissemination/"}},u={},l=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Cr\xe9er des features',id:"-cr\xe9er-des-features",level:2},{value:"Par le service feature",id:"par-le-service-feature",level:3},{value:"Par le service feature provider",id:"par-le-service-feature-provider",level:3},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> G\xe9rer des features',id:"-g\xe9rer-des-features",level:2},{value:"Les filtres",id:"les-filtres",level:3},{value:"Les actions",id:"les-actions",level:3}],g={toc:l},p="wrapper";function m(e){let{components:r,...t}=e;return(0,n.yg)(p,(0,a.c)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"G\xe9rez vos features par messages AMQP.")),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"-cr\xe9er-des-features"},(0,n.yg)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Cr\xe9er des features"),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Avant de pouvoir importer des features dans REGARDS, vous devrez obligatoirement avoir ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.12.0/user-guide/data-organization/models/"},"cr\xe9\xe9 un mod\xe8le de donn\xe9es")," de type ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Data"))," pour qu'elles puissent \xeatre interpr\xe9t\xe9es.")),(0,n.yg)("p",null,"Pour cr\xe9er des features, il existe deux types de services propos\xe9s par le feature manager :"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"feature"))," permet de directement soumettre des fichiers contenant des features par messages AMQP."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"feature provider")),", permet de cr\xe9er des features \xe0 partir de scans de fichiers de donn\xe9es. Cette op\xe9ration n\xe9cessite l'utilisation de plugins, qui seront ensuite r\xe9f\xe9renc\xe9s dans la configuration du microservice fem.")),(0,n.yg)("h3",{id:"par-le-service-feature"},"Par le service feature"),(0,n.yg)("p",null,"Pour envoyer des features dans REGARDS, suivez le tutoriel ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.12.0/development/backend/services/fem/api/amqp/"},"Feature Manager AMQP API"),".\nIl vous expliquera comment :"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Cr\xe9er des fichiers afin de stocker des features dans REGARDS. Ceux-ci sont compos\xe9s de trois parties principales :",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"$headers"))," :",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"regards.tenant")),", le projet sur lequel vous souhaites ajouter des features"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"regards.request.id")),", l'identifiant de la requ\xeate envoy\xe9e"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"regards.request.date")),", la date \xe0 laquelle la demande est soumise au format ISO 8601"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"regards.request.owner")),", le propri\xe9taire de la donn\xe9e"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"metadata")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"session"))," le nom identifiant le groupe de donn\xe9es ajout\xe9"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"sessionOwner")),", le fournisseur de donn\xe9es"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"storages")),", la liste des espaces de stockage sur lesquels vous souhaitez sauvegarder des fichiers suppl\xe9mentaires. Cette liste peut \xeatre vide."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"priority")),", permet de prioriser la prise en compte de la requ\xeate de r\xe9f\xe9rencement (",(0,n.yg)("em",{parentName:"li"},"HIGH"),", ",(0,n.yg)("em",{parentName:"li"},"NORMAL"),", ou ",(0,n.yg)("em",{parentName:"li"},"LOW"),")"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"feature")),", une liste de features au format GeoJSON"))),(0,n.yg)("li",{parentName:"ul"},"Publier des requ\xeates de cr\xe9ation de features"),(0,n.yg)("li",{parentName:"ul"},"Suivre le statut des requ\xeates envoy\xe9es")),(0,n.yg)("h3",{id:"par-le-service-feature-provider"},"Par le service feature provider"),(0,n.yg)("p",null,"Pour d\xe9velopper des plugins de cr\xe9ation de features par extraction de donn\xe9es, suivez le tutoriel ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.12.0/development/backend/services/fem/plugins/feature-factory/"},"Feature Factory Plugins")),(0,n.yg)("h2",{id:"-g\xe9rer-des-features"},(0,n.yg)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," G\xe9rer des features"),(0,n.yg)("p",null,"Les ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"features"))," aussi appel\xe9s ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"produits GeoJson"))," import\xe9s sont visibles dans l'IHM admin depuis le menu ",(0,n.yg)("strong",{parentName:"p"},"Add data")," et la carte ",(0,n.yg)("strong",{parentName:"p"},"Products Manager (GeoJson)"),"."),(0,n.yg)("img",{src:"/images/user-documentation/regards-icons/admin/menu-add-data.png",alt:"menu",height:"200"}),(0,n.yg)("img",{src:"/images/user-documentation/v1.6/4_3-fem/fem-card.png",alt:"fem card",height:"200"}),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Cet \xe9cran vous permettra de ",(0,n.yg)("strong",{parentName:"p"},"consulter les features")," import\xe9es, de les ",(0,n.yg)("strong",{parentName:"p"},"renotifier")," ou de les ",(0,n.yg)("strong",{parentName:"p"},"supprimer"),". Il vous permettra \xe9galement d'avoir une ",(0,n.yg)("strong",{parentName:"p"},"vision d'ensemble sur les diff\xe9rents types de requ\xeates")," effectu\xe9es et de les relancer en cas d'erreur. A noter que seules les requ\xeates termin\xe9es en succ\xe8s se supprimeront."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"/images/user-documentation/v1.6/4_3-fem/fem-screen.png",alt:"feature screen",width:"800"})),(0,n.yg)("p",null,"L'\xe9cran est principalement d\xe9coup\xe9 en deux parties :"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"en haut"),", une barre permettant de filtrer les features ou les requ\xeates , "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"sur la partie principale"),", des onglets et leurs \xe9crans associ\xe9s. ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Products"))," pr\xe9sente les features import\xe9es, les autres onglets correspondent aux diff\xe9rents types de requ\xeates associ\xe9s aux services d'",(0,n.yg)("strong",{parentName:"li"},"extraction"),", de ",(0,n.yg)("strong",{parentName:"li"},"cr\xe9ation"),", de ",(0,n.yg)("strong",{parentName:"li"},"mise \xe0 jour"),", de ",(0,n.yg)("strong",{parentName:"li"},"suppression")," ou de ",(0,n.yg)("strong",{parentName:"li"},"notification"),".")),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Pensez \xe0 appuyer r\xe9guli\xe8rement sur le bouton de rafra\xeechissement pour obtenir des informations \xe0 jour.")),(0,n.yg)("h3",{id:"les-filtres"},"Les filtres"),(0,n.yg)("p",null,"Vous pouvez filtrer les features ou les requ\xeates selon les crit\xe8res suivants : "),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Sur les features"))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Source"))," d\xe9signe le fournisseur de donn\xe9es"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Session"))," identifie le groupe d'appartenance de la donn\xe9e"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Provider Id"))," correspond \xe0 l'identifiant de la feature")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Sur les requ\xeates"))," "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"From/To"))," permet de filtrer sur la date de cr\xe9ation de la requ\xeate"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"State"))," informe du status de la requ\xeate parmi ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Any status")),", ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Granted")),", ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Denied")),", ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Error")),". Pour rappel, les requ\xeates en succ\xe8s sont supprim\xe9es.")),(0,n.yg)("h3",{id:"les-actions"},"Les actions"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Sur les features"))),(0,n.yg)("p",null,"Vous pouvez ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"notifier"))," ou ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"supprimer"))," une s\xe9lection de features. A noter que la notification est une \xe9tape d\xe9j\xe0 int\xe9gr\xe9e au workflow de traitement d'une requ\xeate de feature, cette action vous permettra donc d'en lancer une nouvelle si n\xe9cessaire. "),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"La modification d'une feature uniquement se fait uniquement par requ\xeate, pour cela r\xe9f\xe9rez-vous au tutoriel ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.12.0/development/backend/services/fem/api/amqp/"},"Feature Manager AMQP API"))),(0,n.yg)("p",null,"Vous pouvez \xe9galement consulter, supprimer ou notifier une feature individuellement."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Sur les requ\xeates"))),(0,n.yg)("p",null,"Lorsque une ou plusieurs requ\xeates sont en erreur, vous avez la possibilit\xe9 de les relancer ou de les supprimer."))}m.isMDXComponent=!0}}]);