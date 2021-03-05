(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{2699:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),l=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),b=a,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||s;return r?n.a.createElement(d,o(o({ref:t},c),{},{components:r})):n.a.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=b;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},70:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),s=(r(0),r(2699)),i={id:"fem-manage-features",title:"Manage features",slug:"/user-guide/import-data/fem/manage-features"},o={unversionedId:"user-documentation/4_3-fem/fem-manage-features",id:"version-1.4.0/user-documentation/4_3-fem/fem-manage-features",isDocsHomePage:!1,title:"Manage features",description:"G\xe9rez vos features par messages AMQP.",source:"@site/versioned_docs/version-1.4.0/user-documentation/4_3-fem/manage-features.md",slug:"/user-guide/import-data/fem/manage-features",permalink:"/docs/1.4.0/user-guide/import-data/fem/manage-features",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/user-documentation/4_3-fem/manage-features.md",version:"1.4.0",sidebar:"version-1.4.0/manual",previous:{title:"Introduction",permalink:"/docs/1.4.0/user-guide/import-data/fem/introduction"},next:{title:"Introduction",permalink:"/docs/1.4.0/user-guide/crawler/introduction"}},u=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Cr\xe9er des features',id:"cr\xe9er-des-features",children:[{value:"Par le service feature",id:"par-le-service-feature",children:[]},{value:"Par le service feature provider",id:"par-le-service-feature-provider",children:[]}]},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> G\xe9rez les features',id:"g\xe9rez-les-features",children:[]}],c={toc:u};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"G\xe9rez vos features par messages AMQP.")),Object(s.b)("hr",null),Object(s.b)("h2",{id:"cr\xe9er-des-features"},Object(s.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Cr\xe9er des features"),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Avant de pouvoir importer des features dans REGARDS, vous devrez obligatoirement avoir ",Object(s.b)("a",{parentName:"p",href:"../../data-organization/models"},"cr\xe9\xe9 un mod\xe8le de donn\xe9es")," de type ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Data"))," pour qu'elles puissent \xeatre interpr\xe9t\xe9es."))),Object(s.b)("p",null,"Pour cr\xe9er des features, il existe deux types de services propos\xe9s par le feature manager :"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"feature"))," permet de directement soumettre des fichiers contenant des features par messages AMQP."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"feature provider")),", permet de cr\xe9er des features \xe0 partir de scans de fichiers de donn\xe9es. Cette op\xe9ration n\xe9cessite l'utilisation de plugins, qui seront ensuite r\xe9f\xe9renc\xe9s dans la configuration du microservice fem.")),Object(s.b)("h3",{id:"par-le-service-feature"},"Par le service feature"),Object(s.b)("p",null,"Pour envoyer des features dans REGARDS, suivez le tutoriel ",Object(s.b)("a",{parentName:"p",href:"../../../development/backend/fem/api/amqp"},"Feature Manager AMQP API"),".\nIl vous expliquera comment :"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Cr\xe9er des fichiers afin de stocker des features dans REGARDS. Ceux-ci sont compos\xe9s de trois parties principales :",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"$headers"))," :",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"regards.tenant")),", le projet sur lequel vous souhaites ajouter des features"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"regards.request.id")),", l'identifiant de la requ\xeate envoy\xe9e"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"regards.request.date")),", la date \xe0 laquelle la demande est soumise au format ISO 8601"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"regards.request.owner")),", le propri\xe9taire de la donn\xe9e"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"metadata")),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"session"))," le nom identifiant le groupe de donn\xe9es ajout\xe9"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"sessionOwner")),", le fournisseur de donn\xe9es"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"storages")),", la liste des espaces de stockage sur lesquels vous souhaitez sauvegarder des fichiers suppl\xe9mentaires. Cette liste peut \xeatre vide."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"priority")),", permet de prioriser la prise en compte de la requ\xeate de r\xe9f\xe9rencement (",Object(s.b)("em",{parentName:"li"},"HIGH"),", ",Object(s.b)("em",{parentName:"li"},"NORMAL"),", ou ",Object(s.b)("em",{parentName:"li"},"LOW"),")"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"feature")),", une liste de features au format GeoJSON"))),Object(s.b)("li",{parentName:"ul"},"Publier des requ\xeates de cr\xe9ation de features"),Object(s.b)("li",{parentName:"ul"},"Suivre le statut des requ\xeates envoy\xe9es")),Object(s.b)("h3",{id:"par-le-service-feature-provider"},"Par le service feature provider"),Object(s.b)("p",null,"Pour d\xe9velopper des plugins de cr\xe9ation de features par extraction de donn\xe9es, suivez le tutoriel ",Object(s.b)("a",{parentName:"p",href:"../../../development/backend/fem/plugins/feature-factory"},"Feature Factory Plugins")),Object(s.b)("h2",{id:"g\xe9rez-les-features"},Object(s.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," G\xe9rez les features"),Object(s.b)("p",null,"Le tutoriel ",Object(s.b)("a",{parentName:"p",href:"../../../development/backend/fem/api/amqp"},"Feature Manager AMQP API")," vous expliquera \xe9galement comment modifier et supprimer des features par messages AMQP."),Object(s.b)("p",null,"Par ailleurs, vous pouvez aussi g\xe9rer les features depuis le catalogue \xe0 l'aide de ",Object(s.b)("a",{parentName:"p",href:"../../data-services/ui-services"},"plugins d'interface suppl\xe9mentaires"),". Notez que vous devrez obligatoirement avoir configur\xe9 une ",Object(s.b)("a",{parentName:"p",href:"../../crawler/configure-datasources/fem"},"aspiration de donn\xe9es depuis le feature manager"),"."))}l.isMDXComponent=!0}}]);