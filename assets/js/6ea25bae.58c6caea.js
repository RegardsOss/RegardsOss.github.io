"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[95058],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),g=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=g(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=g(a),p=r,c=m["".concat(l,".").concat(p)]||m[p]||d[p]||s;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<s;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},48902:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>g});var n=a(58168),r=(a(96540),a(15680));const s={id:"data-organization-model-configuration",title:"Model configuration",slug:"/user-guide/data-organization/models/"},i=void 0,o={unversionedId:"user-documentation/data-organization/data-organization-model-configuration",id:"version-1.12.0/user-documentation/data-organization/data-organization-model-configuration",title:"Model configuration",description:"_Les mod\xe8les de donn\xe9es sont indispensables \xe0 REGARDS. Ils peuvent \xeatre utilis\xe9s dans les collections, les jeux de donn\xe9es ou encore servir \xe0 d\xe9finir le processus automatis\xe9 d'aspiration de donn\xe9es vers le catalogue.",source:"@site/versioned_docs/version-1.12.0/user-documentation/3-data-organization/models.md",sourceDirName:"user-documentation/3-data-organization",slug:"/user-guide/data-organization/models/",permalink:"/docs/1.12.0/user-guide/data-organization/models/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/user-documentation/3-data-organization/models.md",tags:[],version:"1.12.0",frontMatter:{id:"data-organization-model-configuration",title:"Model configuration",slug:"/user-guide/data-organization/models/"},sidebar:"manual",previous:{title:"Introduction",permalink:"/docs/1.12.0/user-guide/data-organization/introduction/"},next:{title:"Collections & Datasets",permalink:"/docs/1.12.0/user-guide/data-organization/collections-datasets/"}},l={},g=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Cr\xe9er un mod\xe8le',id:"-cr\xe9er-un-mod\xe8le",level:2},{value:"Cr\xe9er des fragments",id:"cr\xe9er-des-fragments",level:3},{value:"Cr\xe9er des attributs du mod\xe8le",id:"cr\xe9er-des-attributs-du-mod\xe8le",level:3},{value:"Cr\xe9er vos propres plugins de calcul",id:"cr\xe9er-vos-propres-plugins-de-calcul",level:3},{value:"Lier les attributs au mod\xe8le",id:"lier-les-attributs-au-mod\xe8le",level:3},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> G\xe9rer les mod\xe8les de donn\xe9es',id:"-g\xe9rer-les-mod\xe8les-de-donn\xe9es",level:2}],u={toc:g},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Les mod\xe8les de donn\xe9es sont indispensables \xe0 REGARDS. Ils peuvent \xeatre utilis\xe9s dans les collections, les jeux de donn\xe9es ou encore servir \xe0 d\xe9finir le processus automatis\xe9 d'aspiration de donn\xe9es vers le catalogue.\nLa gestion des mod\xe8les de donn\xe9es s'effectue depuis l'onglet ",(0,r.yg)("strong",{parentName:"em"},(0,r.yg)("em",{parentName:"strong"},"Data models")),". Vous trouverez quatre cartes :")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Models"))," ",(0,r.yg)("em",{parentName:"li"},"sont des fichiers au format XML d\xe9finissant la structure des donn\xe9es attendues dans REGARDS. Ils sont compos\xe9s d'un ensemble d'attributs.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Attributs"))," ",(0,r.yg)("em",{parentName:"li"},"d\xe9crivent les caract\xe9ristiques du mod\xe8le.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Fragments"))," ",(0,r.yg)("em",{parentName:"li"},"regroupent les attributs par signification. Ils ne sont pas obligatoires mais fortement recommand\xe9s lorsque le mod\xe8le a de nombreux attributs.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Attribute calculation plugins"))," ",(0,r.yg)("em",{parentName:"li"},"sont utiles pour calculer automatiquement certains attributs du mod\xe8le."))),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"/images/user-documentation/v1.4/3-data-organization/models/model-menu.png",alt:"model menu",width:"800"})),(0,r.yg)("p",null,"Dans la partie suivante, vous apprendrez \xe0 cr\xe9er et g\xe9rer un mod\xe8le de donn\xe9es \xe9tape par \xe9tape."),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"-cr\xe9er-un-mod\xe8le"},(0,r.yg)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Cr\xe9er un mod\xe8le"),(0,r.yg)("p",null,"Depuis ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Data models"))," et la carte ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Models"))," cliquez sur le bouton ",(0,r.yg)("img",{src:"/images/user-documentation/regards-icons/admin/add.png",alt:"add",height:"25",width:"25"})," ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Add"))," ."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"/images/user-documentation/v1.4/3-data-organization/models/model-create-model.png",alt:"create model",width:"800"})),(0,r.yg)("p",null,"Vous avez deux mani\xe8res de cr\xe9er un mod\xe8le de donn\xe9es :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Manuellement en renseignant les champs suivants (1) :",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Name"))," le nom du mod\xe8le"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Description"))," la description du mod\xe8le"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Type"))," le type du mod\xe8le parmi ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Collection")),", ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Data"))," ou ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Dataset")),". D\xe9finissez-le selon vos besoins :",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Collection"))," est utilis\xe9 par les ",(0,r.yg)("a",{parentName:"li",href:"/docs/1.12.0/user-guide/data-organization/collections-datasets/"},"collections de donn\xe9es")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Dataset"))," est utilis\xe9 par les ",(0,r.yg)("a",{parentName:"li",href:"/docs/1.12.0/user-guide/data-organization/collections-datasets/"},"jeux de donn\xe9es")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Data"))," est utilis\xe9 par les ",(0,r.yg)("a",{parentName:"li",href:"/docs/1.12.0/user-guide/crawler/introduction/"},"crawlers")," afin d'\xe9tablir une correspondance entre vos donn\xe9es aspir\xe9es et le catalogue REGARDS"))))),(0,r.yg)("li",{parentName:"ul"},"En important un fichier de donn\xe9es au format XML (2). C'est une solution qui est \xe0 privil\xe9gi\xe9e car elle permet de cr\xe9er avec un seul fichier le mod\xe8le, ses attributs et \xe9ventuellement ses fragments. Pour sa r\xe9daction, veuillez vous r\xe9f\xe9rez \xe0 la page ",(0,r.yg)("a",{parentName:"li",href:"/docs/1.12.0/development/appendices/create-model/"},"Create a model")," et importez le mod\xe8le en appuyant sur le bouton ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Select a file")),".")),(0,r.yg)("p",null,"Si vous avez choisi la cr\xe9ation manuelle, suivez les \xe9tapes ci-dessous pour ajouter des attributs et des fragments au mod\xe8le de donn\xe9es."),(0,r.yg)("h3",{id:"cr\xe9er-des-fragments"},"Cr\xe9er des fragments"),(0,r.yg)("p",null,"Avant de cr\xe9er des attributs, vous pouvez cr\xe9er des fragments qui serviront \xe0 les regrouper.\nDepuis ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Data models"))," et la carte ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Fragments")),", appuyez sur le bouton ",(0,r.yg)("img",{src:"/images/user-documentation/regards-icons/admin/add.png",alt:"add",height:"30",width:"30"})," ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Add")),"."),(0,r.yg)("p",null,"Vous pouvez :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"soit cr\xe9er un fragment manuellement en renseignant les champs ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Fragment name"))," et ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Description"))," puis appuyer sur le bouton ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Save"))),(0,r.yg)("li",{parentName:"ul"},"soit importer un fichier XML qui importera directement un fragment et ses attributs. Lire ",(0,r.yg)("a",{parentName:"li",href:"/docs/1.12.0/development/appendices/create-model/"},"Create a model")," pour \xe9crire ce fichier.")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"/images/user-documentation/v1.4/3-data-organization/models/model-create-fragment.png",alt:"create fragment",width:"800"})),(0,r.yg)("p",null,"Si vous avez choisi de cr\xe9er manuellement un fragment, ou si vous voulez ajouter des attributs sans que ceci soient regroup\xe9s dans un fragment, suivez les \xe9tapes ci-dessous."),(0,r.yg)("h3",{id:"cr\xe9er-des-attributs-du-mod\xe8le"},"Cr\xe9er des attributs du mod\xe8le"),(0,r.yg)("p",null,"Depuis ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Data models"))," et la carte ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Model attributes")),", appuyez sur le bouton ",(0,r.yg)("img",{src:"/images/user-documentation/regards-icons/admin/add.png",alt:"add",height:"25",width:"25"})," ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Add")),"."),(0,r.yg)("p",null,"Remplissez les champs :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Attribute name"))," ",(0,r.yg)("em",{parentName:"li"},"[Obligatoire]")," qui sera l'identifiant utilis\xe9 pour l'attribut. Il ne doit pas avoir d'espace,"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Attribute label"))," ",(0,r.yg)("em",{parentName:"li"},"[Obligatoire]")," le nom usuel utilis\xe9 pour d\xe9signer l'attribut."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Description"))," ",(0,r.yg)("em",{parentName:"li"},"[Optionnel]")," pour vous aider \xe0 vous rappeler la signification de l'attribut."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Type"))," ",(0,r.yg)("em",{parentName:"li"},"[Obligatoire]")," le type de l'attribut"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Fragment"))," ",(0,r.yg)("em",{parentName:"li"},"[Optionnel]")," par d\xe9faut, les attributs ne sont pas associ\xe9s \xe0 des fragments. Pr\xe9cisez un fragment que vous avez pr\xe9c\xe9demment cr\xe9\xe9 si vous souhaitez que l'attribut appartienne \xe0 cette cat\xe9gorie."),(0,r.yg)("li",{parentName:"ul"},"case ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Alterable"))," ",(0,r.yg)("em",{parentName:"li"},"[Optionnel]")," indique si l'attribut est modifiable."),(0,r.yg)("li",{parentName:"ul"},"case ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Optional"))," ",(0,r.yg)("em",{parentName:"li"},"[Optionnel]")," indique si l'attribut doit obligatoirement \xeatre renseign\xe9 dans le mod\xe8le.")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"/images/user-documentation/v1.4/3-data-organization/models/model-create-attribute.png",alt:"create attribute",width:"800"})),(0,r.yg)("p",null,"Une fois les attributs et, ou les fragments cr\xe9\xe9s, vous pouvez les lier au mod\xe8le \xe9tabli pr\xe9c\xe9demment."),(0,r.yg)("h3",{id:"cr\xe9er-vos-propres-plugins-de-calcul"},"Cr\xe9er vos propres plugins de calcul"),(0,r.yg)("p",null,"Les plugins de calculs sont des algorithmiques permettant de calculer automatiquement des valeurs sur les mod\xe8les de type ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Dataset")),". REGARDS en fournit de base :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"CountPlugin"))," calcule le nombre de donn\xe9es dans un jeu de donn\xe9es"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"IntSumComputePlugin"))," calcule la somme des attributs de type Integer d'un jeu de donn\xe9es"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"LongSumComputePlugin"))," calcule la somme des attributs de type Long d'un jeu de donn\xe9es"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"MaxDateComputePlugin"))," trouve la date la plus r\xe9cente d'un jeu de donn\xe9es"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"MinDateComputePlugin"))," trouve la date la plus ancienne d'un jeu de donn\xe9es")),(0,r.yg)("p",null,"Pour configurer une instance de plugin de calcul, cliquez sur le bouton ",(0,r.yg)("img",{src:"/images/user-documentation/regards-icons/admin/add.png",alt:"add",height:"25",width:"25"})," ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Add"))," de la carte ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Attribute calculation plugins")),". Choisissez le plugin de calcul, remplissez \xe9ventuellement les param\xe8tres et cliquez sur le bouton ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Add")),". Vous serez ensuite redirig\xe9 vers l'\xe9cran listant toutes les configurations de plugins de calcul."),(0,r.yg)("p",null,"Vous pouvez ensuite lier ce plugin \xe0 un attribut du mod\xe8le"),(0,r.yg)("h3",{id:"lier-les-attributs-au-mod\xe8le"},"Lier les attributs au mod\xe8le"),(0,r.yg)("p",null,"Revenez sur la page des mod\xe8les dans ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Data models"))," et la carte ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Models"))," et cliquez sur le bouton ",(0,r.yg)("img",{src:"/images/user-documentation/regards-icons/admin/list.png",alt:"list",height:"25",width:"25"})," ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"List")),"."),(0,r.yg)("p",null,"Vous trouverez ici la liste de tous les mod\xe8les que vous avez cr\xe9\xe9s. Appuyez sur le bouton ",(0,r.yg)("img",{src:"/images/user-documentation/regards-icons/admin/link.png",alt:"mapping",height:"25",width:"25"})," ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Link attributes"))," pour lier des attributs au mod\xe8le."),(0,r.yg)("p",null,"Vous y trouverez l'interface suivante :"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"/images/user-documentation/v1.4/3-data-organization/models/model-link-attribute.png",alt:"map attribute",width:"800"})),(0,r.yg)("p",null,"Sur la gauche, les attributs appartenant au mod\xe8le et sur la droite, l'ensemble des attributs et \xe9ventuellement des fragments disponibles dans le projet. Les fragments sont repr\xe9sent\xe9s par des blocs contenant des titres. Pour ajouter un attribut ou un fragment, effectuez simple un drag and drop de la gauche vers la droite."),(0,r.yg)("p",null,"Si votre mod\xe8le est de type ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Dataset")),", vous pourrez ajouter un plugin de calcul sur un attribut en appuyant sur le bouton ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Use a plugin")),". Le type de retour du plugin doit \xeatre compatible avec le type d'attribut. Si la case est gris\xe9e, cela signifie qu'aucun plugin de calcul ne correspond \xe0 l'attribut en question."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"/images/user-documentation/v1.4/3-data-organization/models/model-link-attribute-dataset.png",alt:"dataset",width:"800"})),(0,r.yg)("p",null,"Une fois l'ensemble des \xe9l\xe9ments ajout\xe9s \xe0 votre mod\xe8le, il sera pr\xeat \xe0 \xeatre utilis\xe9."),(0,r.yg)("h2",{id:"-g\xe9rer-les-mod\xe8les-de-donn\xe9es"},(0,r.yg)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," G\xe9rer les mod\xe8les de donn\xe9es"),(0,r.yg)("p",null,"Pour g\xe9rer les mod\xe8les de donn\xe9es, appuyez sur le bouton ",(0,r.yg)("img",{src:"/images/user-documentation/regards-icons/admin/list.png",alt:"list",height:"25",width:"25"})," de la carte ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Models")),"."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"/images/user-documentation/v1.4/3-data-organization/models/model-list-model.png",alt:"list",width:"800"})),(0,r.yg)("p",null,"Les boutons d'action vous permette d'effectuer diff\xe9rentes t\xe2ches :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("img",{src:"/images/user-documentation/regards-icons/admin/download.png",alt:"download",height:"25",width:"25"})," ",(0,r.yg)("b",null,(0,r.yg)("i",null,"Download"))," exporte le mod\xe8le au format XML"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("img",{src:"/images/user-documentation/regards-icons/admin/link.png",alt:"mapping",height:"25",width:"25"})," ",(0,r.yg)("b",null,(0,r.yg)("i",null,"Link attributes"))," \xe9dite les attributs et les fragments li\xe9s au mod\xe8le"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("img",{src:"/images/user-documentation/regards-icons/admin/edit.png",alt:"edit",height:"25",width:"25"})," ",(0,r.yg)("b",null,(0,r.yg)("i",null,"Edit"))," permet de changer la description du mod\xe8le"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("img",{src:"/images/user-documentation/regards-icons/admin/duplicate.png",alt:"duplicate",height:"25",width:"25"})," ",(0,r.yg)("b",null,(0,r.yg)("i",null,"Duplicate"))," duplique le mod\xe8le. Attention, les plugins de calcul associ\xe9s aux attributs du mod\xe8le d'origine ne seront pas copi\xe9s."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("img",{src:"/images/user-documentation/regards-icons/admin/delete.png",alt:"delete",height:"25",width:"25"})," ",(0,r.yg)("b",null,(0,r.yg)("i",null,"Delete"))," il n'est pour le moment pas possible de supprimer un mod\xe8le de donn\xe9es")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Vous pouvez filtrer les mod\xe8les par nom pour les rechercher plus facilement dans la liste")))}d.isMDXComponent=!0}}]);