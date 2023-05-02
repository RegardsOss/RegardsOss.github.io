"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[40239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const s={id:"data-organization-collections-datasets",title:"Collections & Datasets",slug:"/user-guide/data-organization/collections-datasets/"},o=void 0,i={unversionedId:"user-documentation/data-organization/data-organization-collections-datasets",id:"version-1.11.0/user-documentation/data-organization/data-organization-collections-datasets",title:"Collections & Datasets",description:"Les collections et les jeux de donn\xe9es sont incontournables dans REGARDS. Ils vous permettent de regrouper vos donn\xe9es par th\xe9matique, vous pourrez les utiliser pour identifier plus facilement des groupes de donn\xe9es dans le catalogue ou restreindre leur acc\xe8s \xe0 certains groupes d'utilisateurs.",source:"@site/versioned_docs/version-1.11.0/user-documentation/3-data-organization/dataset-collection.md",sourceDirName:"user-documentation/3-data-organization",slug:"/user-guide/data-organization/collections-datasets/",permalink:"/docs/1.11.0/user-guide/data-organization/collections-datasets/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/user-documentation/3-data-organization/dataset-collection.md",tags:[],version:"1.11.0",frontMatter:{id:"data-organization-collections-datasets",title:"Collections & Datasets",slug:"/user-guide/data-organization/collections-datasets/"},sidebar:"manual",previous:{title:"Model configuration",permalink:"/docs/1.11.0/user-guide/data-organization/models/"},next:{title:"Configure data access rights",permalink:"/docs/1.11.0/user-guide/data-organization/data-access-rights/"}},l={},u=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Cr\xe9er une collection',id:"-cr\xe9er-une-collection",level:2},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Cr\xe9er un jeu de donn\xe9es',id:"-cr\xe9er-un-jeu-de-donn\xe9es",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Les collections et les jeux de donn\xe9es sont incontournables dans REGARDS. Ils vous permettent de regrouper vos donn\xe9es par th\xe9matique, vous pourrez les utiliser pour identifier plus facilement des groupes de donn\xe9es dans le catalogue ou restreindre leur acc\xe8s \xe0 certains groupes d'utilisateurs.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Une collection est un regroupement de donn\xe9es \xe9troitement li\xe9. C'est une information suppl\xe9mentaire aidant \xe0 la compr\xe9hension de la donn\xe9e. Elle n'est pas obligatoire, mais il est recommand\xe9 d'en faire usage lorsque votre syst\xe8me commence \xe0 contenir une grande quantit\xe9 de donn\xe9es, d'autant plus lorsqu'elles proviennent d'origines diverses et vari\xe9es. Selon les recommandations OAIS, un syst\xe8me d'archivage doit fournir une m\xe9thode efficace de classification et d'organisation. Plus le syst\xe8me pourra compartimenter les informations, plus elles pourront \xeatre restitu\xe9es de mani\xe8re fiable et rapide.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Un jeu de donn\xe9es est bas\xe9 sur le m\xeame principe, \xe0 la diff\xe9rence pr\xe8s que les donn\xe9es sont issues d'une m\xeame source. R\xe9f\xe9rez-vous \xe0 la partie ",(0,r.kt)("a",{parentName:"em",href:"../../crawler/introduction/"},"Crawler")," pour en savoir plus sur les sources de donn\xe9es.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Il permet \xe9galement de restreindre l'acc\xe8s \xe0 toutes les donn\xe9es qu'il contient, en se basant sur l'utilisation de r\xf4les. Pour en savoir plus, suivez la ",(0,r.kt)("a",{parentName:"em",href:"../data-access-rights/"},"Configure data access rights"),". Ce n'est pas le cas des collections.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"/images/user-documentation/v1.4/3-data-organization/dataset-collection/dataset-menu.png",alt:"dataset menu",width:"800"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"-cr\xe9er-une-collection"},(0,r.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Cr\xe9er une collection"),(0,r.kt)("p",null,"Avant de cr\xe9er une collection, vous devez avoir cr\xe9\xe9 un ",(0,r.kt)("a",{parentName:"p",href:"../models/"},"mod\xe8le de donn\xe9es")," de type ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Collection")),"."),(0,r.kt)("p",null,"Acc\xe9dez \xe0 l'onglet ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Collections & Datasets")),", depuis la carte ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Collections")),", appuyez sur le bouton ",(0,r.kt)("img",{src:"/images/user-documentation/regards-icons/admin/add.png",alt:"add",height:"25",width:"25"})," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Add"))," pour cr\xe9er votre premi\xe8re collection de donn\xe9es."),(0,r.kt)("p",null,"Il y a trois \xe9tapes principales."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Etape 1. Configurer les param\xe8tres de la collection")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"/images/user-documentation/v1.4/3-data-organization/dataset-collection/collection-create-1.png",alt:"step 1",width:"800"})),(0,r.kt)("p",null,"Renseignez les champs suivants :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Supplier identifier"))," ",(0,r.kt)("em",{parentName:"li"},"[Obligatoire]")," l'identifiant unique de la collection"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Label"))," ",(0,r.kt)("em",{parentName:"li"},"[Obligatoire]")," d\xe9signe le nom donn\xe9 \xe0 la collection"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Geometry"))," ",(0,r.kt)("em",{parentName:"li"},"[Optionnel]")," la zone g\xe9ographique de la collection standardis\xe9e au format GeoJson"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Collection models"))," ",(0,r.kt)("em",{parentName:"li"},"[Obligatoire]")," \xe9tant le mod\xe8le associ\xe9 \xe0 votre collection")),(0,r.kt)("p",null,"Lorsque vous aurez choisi le mod\xe8le de donn\xe9es, il vous sera demand\xe9 de compl\xe9ter les attributs si n\xe9cessaire comme dans l'exemple ci-dessous."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"/images/user-documentation/v1.4/3-data-organization/dataset-collection/collection-example.png",alt:"step 1",width:"800"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Etape 2. Associer des fichiers")),(0,r.kt)("p",null,"Vous pouvez si vous le souhaitez, ajouter des informations li\xe9es \xe0 la collection. Ce n'est pas obligatoire. Celles-ci seront visibles lorsque vous acc\xe9derez \xe0 une donn\xe9e de la collection dans le catalogue."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Thumbnail"))," est une image miniature repr\xe9sentant la collection"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Description"))," d\xe9crit la collection. Vous pouvez ajouter des fichiers au format pdf, html, markdown.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"/images/user-documentation/v1.4/3-data-organization/dataset-collection/collection-create-2.png",alt:"step 2",width:"800"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Etape 3. Associer des collections")),(0,r.kt)("p",null,"Vous pourrez lier cette collection entre elles. Pour ce faire, recherchez dans la liste de gauche celles que vous voulez associer et ajoutez-les. Vous pouvez \xe9galement ajouter des tags pour les identifier rapidement dans le catalogue."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"/images/user-documentation/v1.4/3-data-organization/dataset-collection/collection-create-3.png",alt:"step 3",width:"800"})),(0,r.kt)("p",null,"Une fois que vous avez termin\xe9, appuyez sur le bouton ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Save"))," vous serez automatiquement redirig\xe9 vers l'\xe9cran ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Collection"))," o\xf9 vous retrouverez la collection que vous venez de cr\xe9er."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"-cr\xe9er-un-jeu-de-donn\xe9es"},(0,r.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Cr\xe9er un jeu de donn\xe9es"),(0,r.kt)("p",null,"Avant de construire un jeu de donn\xe9es, vous devez avoir :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cr\xe9\xe9 un ",(0,r.kt)("a",{parentName:"li",href:"../models/"},"mod\xe8le de donn\xe9es")," de type ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Dataset")),"."),(0,r.kt)("li",{parentName:"ul"},"cr\xe9\xe9 une ",(0,r.kt)("a",{parentName:"li",href:"../../crawler/introduction/"},"source de donn\xe9es"),", les donn\xe9es contenues dans un jeu repr\xe9sente une sous-partie d'une source de donn\xe9es.")),(0,r.kt)("p",null,"Une fois ces \xe9tapes effectu\xe9es, cr\xe9ez votre premier jeu de donn\xe9es en cliquant sur le bouton ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Add"))," de la carte ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Datasets"))," accessible depuis le menu ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Collections & Datasets")),"."),(0,r.kt)("p",null,"Commencez par lier la source de donn\xe9es \xe0 votre jeu dans la liste d\xe9roulante. Appuyez ensuite sur le bouton ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Next")),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"/images/user-documentation/v1.4/3-data-organization/dataset-collection/dataset-create-0.png",alt:"step 0",width:"800"})),(0,r.kt)("p",null,"Les images suivantes contiennent des champs d\xe9j\xe0 remplis. Il s'agit d'une aide \xe0 titre indicatif, vous n'\xeates absolument pas tenus de suivre ces renseignements."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Etape 1. Configurer les param\xe8tres du jeu de donn\xe9es")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"/images/user-documentation/v1.4/3-data-organization/dataset-collection/dataset-create-1.png",alt:"step 1",width:"800"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Supplier identifier"))," ",(0,r.kt)("em",{parentName:"li"},"[Obligatoire]")," l'identifiant unique du jeu de donn\xe9es"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Label"))," ",(0,r.kt)("em",{parentName:"li"},"[Obligatoire]")," d\xe9signant le nom donn\xe9 au jeu de donn\xe9es"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Geometry"))," ",(0,r.kt)("em",{parentName:"li"},"[Optionnel]")," la zone g\xe9ographique de la collection standardis\xe9e au format GeoJson"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Data model"))," ",(0,r.kt)("em",{parentName:"li"},"[Obligatoire]")," \xe9tant le mod\xe8le associ\xe9 \xe0 votre jeu de donn\xe9es")),(0,r.kt)("p",null,"Compl\xe9tez les valeurs des attributs si celles-ci sont requises."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Etape 2. Ajouter des param\xe8tres suppl\xe9mentaires")),(0,r.kt)("p",null,"Cette \xe9tape est cruciale pour construire votre jeu de donn\xe9es. \xc9crivez dans le champ ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Filter request in OpenSearch")),', le crit\xe8re devant diff\xe9rencier votre sous-ensemble de donn\xe9es du reste des donn\xe9es. Dans l\'exemple suivant, les produits aspir\xe9s poss\xe8de le tag "DATA-01". Ainsi, seuls produits r\xe9pondant \xe0 ce crit\xe8re repr\xe9senteront le jeu de donn\xe9es. Si vous ne pr\xe9cisez aucun filtre, tous les \xe9l\xe9ments de la source de donn\xe9es seront inclus. Les attributs de recherche sont list\xe9s dans la colonne de gauche.'),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"/images/user-documentation/v1.4/3-data-organization/dataset-collection/dataset-create-2.png",alt:"step 2",width:"800"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Etape 3. Associer des fichiers")),(0,r.kt)("p",null,"Vous pouvez si vous le souhaitez ajouter des informations li\xe9es \xe0 votre jeu de donn\xe9es. Ce n'est obligatoire. Celles-ci seront visibles lorsque vous acc\xe9derez \xe0 une donn\xe9e du jeu dans le catalogue."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Thumbnail"))," est une image miniature repr\xe9sentant la collection"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Description"))," d\xe9crit la collection. Vous pouvez ajouter des fichiers au format pdf, html, markdown.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"/images/user-documentation/v1.4/3-data-organization/dataset-collection/dataset-create-3.png",alt:"step 3",width:"800"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Etape 4. Associez des collections")),(0,r.kt)("p",null,"Vous pourrez lier ce jeu de donn\xe9es \xe0 une ou plusieurs collections. Pour ce faire, recherchez dans la liste celles correspondantes et ajoutez-les. Vous pouvez \xe9galement ajouter des tags pour identifier le jeu de donn\xe9es plus rapidement dans le catalogue."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"/images/user-documentation/v1.4/3-data-organization/dataset-collection/dataset-create-4.png",alt:"step 4",width:"800"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Etape 5. Ajouter \xe9ventuellement des plugins, des services ihm ou des traitements associ\xe9s \xe0 votre jeu")),(0,r.kt)("p",null,"S\xe9lectionnez ici les ",(0,r.kt)("a",{parentName:"p",href:"../../data-services/processing-services/"},"services de traitement"),", les ",(0,r.kt)("a",{parentName:"p",href:"../../data-services/ui-services/"},"services ihm")," ou les ",(0,r.kt)("a",{parentName:"p",href:"../../order/processing/"},"traitements")," qui seront associ\xe9s \xe0 toutes les donn\xe9es appartenant \xe0 votre jeu.\nSi vous n'avez pas encore cr\xe9\xe9 ces fonctionnalit\xe9s, vous pourrez toujours le faire plus tard, et r\xe9-\xe9diter ce jeu en cliquant sur le bouton ",(0,r.kt)("img",{src:"/images/user-documentation/regards-icons/admin/edit.png",alt:"edit",height:"25",width:"25"})," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Edit"))," de votre jeu de donn\xe9es accessible depuis l'\xe9cran ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Datasets"))," (bouton ",(0,r.kt)("img",{src:"/images/user-documentation/regards-icons/admin/list.png",alt:"list",height:"25",width:"25"})," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"List"))," de la carte ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Datasets")),")."),(0,r.kt)("p",null,"Une fois toutes ces \xe9tapes effectu\xe9es, appuyez sur le bouton ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Finish")),". Votre jeu de donn\xe9es est \xe0 pr\xe9sent visible dans la liste."))}p.isMDXComponent=!0}}]);