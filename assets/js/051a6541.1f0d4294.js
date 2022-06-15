"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[27793],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return c}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=l(r),c=n,g=d["".concat(u,".").concat(c)]||d[c]||p[c]||s;return r?a.createElement(g,i(i({ref:t},m),{},{components:r})):a.createElement(g,i({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35221:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var a=r(83117),n=r(80102),s=(r(67294),r(3905)),i=["components"],o={id:"fem-manage-features",title:"Manage features",slug:"/user-guide/import-data/fem/manage-features/"},u=void 0,l={unversionedId:"user-documentation/4_3-fem/fem-manage-features",id:"version-1.7.1/user-documentation/4_3-fem/fem-manage-features",title:"Manage features",description:"G\xe9rez vos features par messages AMQP.",source:"@site/versioned_docs/version-1.7.1/user-documentation/4_3-fem/manage-features.md",sourceDirName:"user-documentation/4_3-fem",slug:"/user-guide/import-data/fem/manage-features/",permalink:"/docs/1.7.1/user-guide/import-data/fem/manage-features/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/user-documentation/4_3-fem/manage-features.md",tags:[],version:"1.7.1",frontMatter:{id:"fem-manage-features",title:"Manage features",slug:"/user-guide/import-data/fem/manage-features/"},sidebar:"manual",previous:{title:"Introduction",permalink:"/docs/1.7.1/user-guide/import-data/fem/introduction/"},next:{title:"Feature dissemination",permalink:"/docs/1.7.1/user-guide/import-data/fem/features-dissemination/"}},m={},p=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Cr\xe9er des features',id:"-cr\xe9er-des-features",level:2},{value:"Par le service feature",id:"par-le-service-feature",level:3},{value:"Par le service feature provider",id:"par-le-service-feature-provider",level:3},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> G\xe9rer des features',id:"-g\xe9rer-des-features",level:2},{value:"Les filtres",id:"les-filtres",level:3},{value:"Les actions",id:"les-actions",level:3}],d={toc:p};function c(e){var t=e.components,r=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"G\xe9rez vos features par messages AMQP.")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"-cr\xe9er-des-features"},(0,s.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Cr\xe9er des features"),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Avant de pouvoir importer des features dans REGARDS, vous devrez obligatoirement avoir ",(0,s.kt)("a",{parentName:"p",href:"../../../data-organization/models/"},"cr\xe9\xe9 un mod\xe8le de donn\xe9es")," de type ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Data"))," pour qu'elles puissent \xeatre interpr\xe9t\xe9es."))),(0,s.kt)("p",null,"Pour cr\xe9er des features, il existe deux types de services propos\xe9s par le feature manager :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"feature"))," permet de directement soumettre des fichiers contenant des features par messages AMQP."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"feature provider")),", permet de cr\xe9er des features \xe0 partir de scans de fichiers de donn\xe9es. Cette op\xe9ration n\xe9cessite l'utilisation de plugins, qui seront ensuite r\xe9f\xe9renc\xe9s dans la configuration du microservice fem.")),(0,s.kt)("h3",{id:"par-le-service-feature"},"Par le service feature"),(0,s.kt)("p",null,"Pour envoyer des features dans REGARDS, suivez le tutoriel ",(0,s.kt)("a",{parentName:"p",href:"../../../../development/backend/services/fem/api/amqp/"},"Feature Manager AMQP API"),".\nIl vous expliquera comment :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Cr\xe9er des fichiers afin de stocker des features dans REGARDS. Ceux-ci sont compos\xe9s de trois parties principales :",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"$headers"))," :",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"regards.tenant")),", le projet sur lequel vous souhaites ajouter des features"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"regards.request.id")),", l'identifiant de la requ\xeate envoy\xe9e"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"regards.request.date")),", la date \xe0 laquelle la demande est soumise au format ISO 8601"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"regards.request.owner")),", le propri\xe9taire de la donn\xe9e"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"metadata")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"session"))," le nom identifiant le groupe de donn\xe9es ajout\xe9"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"sessionOwner")),", le fournisseur de donn\xe9es"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"storages")),", la liste des espaces de stockage sur lesquels vous souhaitez sauvegarder des fichiers suppl\xe9mentaires. Cette liste peut \xeatre vide."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"priority")),", permet de prioriser la prise en compte de la requ\xeate de r\xe9f\xe9rencement (",(0,s.kt)("em",{parentName:"li"},"HIGH"),", ",(0,s.kt)("em",{parentName:"li"},"NORMAL"),", ou ",(0,s.kt)("em",{parentName:"li"},"LOW"),")"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"feature")),", une liste de features au format GeoJSON"))),(0,s.kt)("li",{parentName:"ul"},"Publier des requ\xeates de cr\xe9ation de features"),(0,s.kt)("li",{parentName:"ul"},"Suivre le statut des requ\xeates envoy\xe9es")),(0,s.kt)("h3",{id:"par-le-service-feature-provider"},"Par le service feature provider"),(0,s.kt)("p",null,"Pour d\xe9velopper des plugins de cr\xe9ation de features par extraction de donn\xe9es, suivez le tutoriel ",(0,s.kt)("a",{parentName:"p",href:"../../../../development/backend/services/fem/plugins/feature-factory/"},"Feature Factory Plugins")),(0,s.kt)("h2",{id:"-g\xe9rer-des-features"},(0,s.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," G\xe9rer des features"),(0,s.kt)("p",null,"Les ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"features"))," aussi appel\xe9s ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"produits GeoJson"))," import\xe9s sont visibles dans l'IHM admin depuis le menu ",(0,s.kt)("strong",{parentName:"p"},"Add data")," et la carte ",(0,s.kt)("strong",{parentName:"p"},"Products Manager (GeoJson)"),"."),(0,s.kt)("img",{src:"/images/user-documentation/regards-icons/admin/menu-add-data.png",alt:"menu",height:"200"}),(0,s.kt)("img",{src:"/images/user-documentation/v1.6/4_3-fem/fem-card.png",alt:"fem card",height:"200"}),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Cet \xe9cran vous permettra de ",(0,s.kt)("strong",{parentName:"p"},"consulter les features")," import\xe9es, de les ",(0,s.kt)("strong",{parentName:"p"},"renotifier")," ou de les ",(0,s.kt)("strong",{parentName:"p"},"supprimer"),". Il vous permettra \xe9galement d'avoir une ",(0,s.kt)("strong",{parentName:"p"},"vision d'ensemble sur les diff\xe9rents types de requ\xeates")," effectu\xe9es et de les relancer en cas d'erreur. A noter que seules les requ\xeates termin\xe9es en succ\xe8s se supprimeront."),(0,s.kt)("div",{align:"center"},(0,s.kt)("img",{src:"/images/user-documentation/v1.6/4_3-fem/fem-screen.png",alt:"feature screen",width:"800"})),(0,s.kt)("p",null,"L'\xe9cran est principalement d\xe9coup\xe9 en deux parties :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"en haut"),", une barre permettant de filtrer les features ou les requ\xeates , "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"sur la partie principale"),", des onglets et leurs \xe9crans associ\xe9s. ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"Products"))," pr\xe9sente les features import\xe9es, les autres onglets correspondent aux diff\xe9rents types de requ\xeates associ\xe9s aux services d'",(0,s.kt)("strong",{parentName:"li"},"extraction"),", de ",(0,s.kt)("strong",{parentName:"li"},"cr\xe9ation"),", de ",(0,s.kt)("strong",{parentName:"li"},"mise \xe0 jour"),", de ",(0,s.kt)("strong",{parentName:"li"},"suppression")," ou de ",(0,s.kt)("strong",{parentName:"li"},"notification"),".")),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Pensez \xe0 appuyer r\xe9guli\xe8rement sur le bouton de rafra\xeechissement pour obtenir des informations \xe0 jour."))),(0,s.kt)("h3",{id:"les-filtres"},"Les filtres"),(0,s.kt)("p",null,"Vous pouvez filtrer les features ou les requ\xeates selon les crit\xe8res suivants : "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Sur les features"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"Source"))," d\xe9signe le fournisseur de donn\xe9es"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"Session"))," identifie le groupe d'appartenance de la donn\xe9e"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"Provider Id"))," correspond \xe0 l'identifiant de la feature")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Sur les requ\xeates"))," "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"From/To"))," permet de filtrer sur la date de cr\xe9ation de la requ\xeate"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"State"))," informe du status de la requ\xeate parmi ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"Any status")),", ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"Granted")),", ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"Denied")),", ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"Error")),". Pour rappel, les requ\xeates en succ\xe8s sont supprim\xe9es.")),(0,s.kt)("h3",{id:"les-actions"},"Les actions"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Sur les features"))),(0,s.kt)("p",null,"Vous pouvez ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"notifier"))," ou ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"supprimer"))," une s\xe9lection de features. A noter que la notification est une \xe9tape d\xe9j\xe0 int\xe9gr\xe9e au workflow de traitement d'une requ\xeate de feature, cette action vous permettra donc d'en lancer une nouvelle si n\xe9cessaire. "),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"La modification d'une feature uniquement se fait uniquement par requ\xeate, pour cela r\xe9f\xe9rez-vous au tutoriel ",(0,s.kt)("a",{parentName:"p",href:"../../../../development/backend/services/fem/api/amqp/#feature-patch-request"},"Feature Manager AMQP API")))),(0,s.kt)("p",null,"Vous pouvez \xe9galement consulter, supprimer ou notifier une feature individuellement."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Sur les requ\xeates"))),(0,s.kt)("p",null,"Lorsque une ou plusieurs requ\xeates sont en erreur, vous avez la possibilit\xe9 de les relancer ou de les supprimer."))}c.isMDXComponent=!0}}]);