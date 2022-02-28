"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[45155],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,c=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return n?a.createElement(c,s(s({ref:t},m),{},{components:n})):a.createElement(c,s({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},24268:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],o={id:"data-organization-model-configuration",title:"Model configuration",slug:"/user-guide/data-organization/models/"},l=void 0,u={unversionedId:"user-documentation/data-organization/data-organization-model-configuration",id:"version-1.7.1/user-documentation/data-organization/data-organization-model-configuration",title:"Model configuration",description:"_Les mod\xe8les de donn\xe9es sont indispensables \xe0 REGARDS. Ils peuvent \xeatre utilis\xe9s dans les collections, les jeux de donn\xe9es ou encore servir \xe0 d\xe9finir le processus automatis\xe9 d'aspiration de donn\xe9es vers le catalogue.",source:"@site/versioned_docs/version-1.7.1/user-documentation/3-data-organization/models.md",sourceDirName:"user-documentation/3-data-organization",slug:"/user-guide/data-organization/models/",permalink:"/docs/1.7.1/user-guide/data-organization/models/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/user-documentation/3-data-organization/models.md",tags:[],version:"1.7.1",frontMatter:{id:"data-organization-model-configuration",title:"Model configuration",slug:"/user-guide/data-organization/models/"},sidebar:"manual",previous:{title:"Introduction",permalink:"/docs/1.7.1/user-guide/data-organization/introduction/"},next:{title:"Collections & Datasets",permalink:"/docs/1.7.1/user-guide/data-organization/collections-datasets/"}},m=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Cr\xe9er un mod\xe8le',id:"-cr\xe9er-un-mod\xe8le",children:[{value:"Cr\xe9er des fragments",id:"cr\xe9er-des-fragments",children:[],level:3},{value:"Cr\xe9er des attributs du mod\xe8le",id:"cr\xe9er-des-attributs-du-mod\xe8le",children:[],level:3},{value:"Cr\xe9er vos propres plugins de calcul",id:"cr\xe9er-vos-propres-plugins-de-calcul",children:[],level:3},{value:"Lier les attributs au mod\xe8le",id:"lier-les-attributs-au-mod\xe8le",children:[],level:3}],level:2},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> G\xe9rer les mod\xe8les de donn\xe9es',id:"-g\xe9rer-les-mod\xe8les-de-donn\xe9es",children:[],level:2}],d={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Les mod\xe8les de donn\xe9es sont indispensables \xe0 REGARDS. Ils peuvent \xeatre utilis\xe9s dans les collections, les jeux de donn\xe9es ou encore servir \xe0 d\xe9finir le processus automatis\xe9 d'aspiration de donn\xe9es vers le catalogue.\nLa gestion des mod\xe8les de donn\xe9es s'effectue depuis l'onglet ",(0,i.kt)("strong",{parentName:"em"},(0,i.kt)("em",{parentName:"strong"},"Data models")),". Vous trouverez quatre cartes :")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Models"))," ",(0,i.kt)("em",{parentName:"li"},"sont des fichiers au format XML d\xe9finissant la structure des donn\xe9es attendues dans REGARDS. Ils sont compos\xe9s d'un ensemble d'attributs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Attributs"))," ",(0,i.kt)("em",{parentName:"li"},"d\xe9crivent les caract\xe9ristiques du mod\xe8le.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Fragments"))," ",(0,i.kt)("em",{parentName:"li"},"regroupent les attributs par signification. Ils ne sont pas obligatoires mais fortement recommand\xe9s lorsque le mod\xe8le a de nombreux attributs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Attribute calculation plugins"))," ",(0,i.kt)("em",{parentName:"li"},"sont utiles pour calculer automatiquement certains attributs du mod\xe8le."))),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/images/user-documentation/v1.4/3-data-organization/models/model-menu.png",alt:"model menu",width:"800"})),(0,i.kt)("p",null,"Dans la partie suivante, vous apprendrez \xe0 cr\xe9er et g\xe9rer un mod\xe8le de donn\xe9es \xe9tape par \xe9tape."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"-cr\xe9er-un-mod\xe8le"},(0,i.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Cr\xe9er un mod\xe8le"),(0,i.kt)("p",null,"Depuis ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Data models"))," et la carte ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Models"))," cliquez sur le bouton ",(0,i.kt)("img",{src:"/images/user-documentation/regards-icons/admin/add.png",alt:"add",height:"25",width:"25"})," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Add"))," ."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/images/user-documentation/v1.4/3-data-organization/models/model-create-model.png",alt:"create model",width:"800"})),(0,i.kt)("p",null,"Vous avez deux mani\xe8res de cr\xe9er un mod\xe8le de donn\xe9es :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Manuellement en renseignant les champs suivants (1) :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Name"))," le nom du mod\xe8le"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Description"))," la description du mod\xe8le"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Type"))," le type du mod\xe8le parmi ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Collection")),", ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Data"))," ou ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Dataset")),". D\xe9finissez-le selon vos besoins :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Collection"))," est utilis\xe9 par les ",(0,i.kt)("a",{parentName:"li",href:"../collections-datasets/"},"collections de donn\xe9es")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Dataset"))," est utilis\xe9 par les ",(0,i.kt)("a",{parentName:"li",href:"../collections-datasets/"},"jeux de donn\xe9es")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Data"))," est utilis\xe9 par les ",(0,i.kt)("a",{parentName:"li",href:"../../crawler/introduction/"},"crawlers")," afin d'\xe9tablir une correspondance entre vos donn\xe9es aspir\xe9es et le catalogue REGARDS"))))),(0,i.kt)("li",{parentName:"ul"},"En important un fichier de donn\xe9es au format XML (2). C'est une solution qui est \xe0 privil\xe9gi\xe9e car elle permet de cr\xe9er avec un seul fichier le mod\xe8le, ses attributs et \xe9ventuellement ses fragments. Pour sa r\xe9daction, veuillez vous r\xe9f\xe9rez \xe0 la page ",(0,i.kt)("a",{parentName:"li",href:"../../../development/appendices/create-model/"},"Create a model")," et importez le mod\xe8le en appuyant sur le bouton ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Select a file")),".")),(0,i.kt)("p",null,"Si vous avez choisi la cr\xe9ation manuelle, suivez les \xe9tapes ci-dessous pour ajouter des attributs et des fragments au mod\xe8le de donn\xe9es."),(0,i.kt)("h3",{id:"cr\xe9er-des-fragments"},"Cr\xe9er des fragments"),(0,i.kt)("p",null,"Avant de cr\xe9er des attributs, vous pouvez cr\xe9er des fragments qui serviront \xe0 les regrouper.\nDepuis ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Data models"))," et la carte ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Fragments")),", appuyez sur le bouton ",(0,i.kt)("img",{src:"/images/user-documentation/regards-icons/admin/add.png",alt:"add",height:"30",width:"30"})," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Add")),"."),(0,i.kt)("p",null,"Vous pouvez :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"soit cr\xe9er un fragment manuellement en renseignant les champs ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Fragment name"))," et ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Description"))," puis appuyer sur le bouton ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Save"))),(0,i.kt)("li",{parentName:"ul"},"soit importer un fichier XML qui importera directement un fragment et ses attributs. Lire ",(0,i.kt)("a",{parentName:"li",href:"../../../development/appendices/create-model/"},"Create a model")," pour \xe9crire ce fichier.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/images/user-documentation/v1.4/3-data-organization/models/model-create-fragment.png",alt:"create fragment",width:"800"})),(0,i.kt)("p",null,"Si vous avez choisi de cr\xe9er manuellement un fragment, ou si vous voulez ajouter des attributs sans que ceci soient regroup\xe9s dans un fragment, suivez les \xe9tapes ci-dessous."),(0,i.kt)("h3",{id:"cr\xe9er-des-attributs-du-mod\xe8le"},"Cr\xe9er des attributs du mod\xe8le"),(0,i.kt)("p",null,"Depuis ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Data models"))," et la carte ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Model attributes")),", appuyez sur le bouton ",(0,i.kt)("img",{src:"/images/user-documentation/regards-icons/admin/add.png",alt:"add",height:"25",width:"25"})," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Add")),"."),(0,i.kt)("p",null,"Remplissez les champs :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Attribute name"))," ",(0,i.kt)("em",{parentName:"li"},"[Obligatoire]")," qui sera l'identifiant utilis\xe9 pour l'attribut. Il ne doit pas avoir d'espace,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Attribute label"))," ",(0,i.kt)("em",{parentName:"li"},"[Obligatoire]")," le nom usuel utilis\xe9 pour d\xe9signer l'attribut."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Description"))," ",(0,i.kt)("em",{parentName:"li"},"[Optionnel]")," pour vous aider \xe0 vous rappeler la signification de l'attribut."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Type"))," ",(0,i.kt)("em",{parentName:"li"},"[Obligatoire]")," le type de l'attribut"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Fragment"))," ",(0,i.kt)("em",{parentName:"li"},"[Optionnel]")," par d\xe9faut, les attributs ne sont pas associ\xe9s \xe0 des fragments. Pr\xe9cisez un fragment que vous avez pr\xe9c\xe9demment cr\xe9\xe9 si vous souhaitez que l'attribut appartienne \xe0 cette cat\xe9gorie."),(0,i.kt)("li",{parentName:"ul"},"case ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Alterable"))," ",(0,i.kt)("em",{parentName:"li"},"[Optionnel]")," indique si l'attribut est modifiable."),(0,i.kt)("li",{parentName:"ul"},"case ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Optional"))," ",(0,i.kt)("em",{parentName:"li"},"[Optionnel]")," indique si l'attribut doit obligatoirement \xeatre renseign\xe9 dans le mod\xe8le.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/images/user-documentation/v1.4/3-data-organization/models/model-create-attribute.png",alt:"create attribute",width:"800"})),(0,i.kt)("p",null,"Une fois les attributs et, ou les fragments cr\xe9\xe9s, vous pouvez les lier au mod\xe8le \xe9tabli pr\xe9c\xe9demment."),(0,i.kt)("h3",{id:"cr\xe9er-vos-propres-plugins-de-calcul"},"Cr\xe9er vos propres plugins de calcul"),(0,i.kt)("p",null,"Les plugins de calculs sont des algorithmiques permettant de calculer automatiquement des valeurs sur les mod\xe8les de type ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Dataset")),". REGARDS en fournit de base :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"CountPlugin"))," calcule le nombre de donn\xe9es dans un jeu de donn\xe9es"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"IntSumComputePlugin"))," calcule la somme des attributs de type Integer d'un jeu de donn\xe9es"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"LongSumComputePlugin"))," calcule la somme des attributs de type Long d'un jeu de donn\xe9es"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"MaxDateComputePlugin"))," trouve la date la plus r\xe9cente d'un jeu de donn\xe9es"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"MinDateComputePlugin"))," trouve la date la plus ancienne d'un jeu de donn\xe9es")),(0,i.kt)("p",null,"Pour configurer une instance de plugin de calcul, cliquez sur le bouton ",(0,i.kt)("img",{src:"/images/user-documentation/regards-icons/admin/add.png",alt:"add",height:"25",width:"25"})," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Add"))," de la carte ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Attribute calculation plugins")),". Choisissez le plugin de calcul, remplissez \xe9ventuellement les param\xe8tres et cliquez sur le bouton ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Add")),". Vous serez ensuite redirig\xe9 vers l'\xe9cran listant toutes les configurations de plugins de calcul."),(0,i.kt)("p",null,"Vous pouvez ensuite lier ce plugin \xe0 un attribut du mod\xe8le"),(0,i.kt)("h3",{id:"lier-les-attributs-au-mod\xe8le"},"Lier les attributs au mod\xe8le"),(0,i.kt)("p",null,"Revenez sur la page des mod\xe8les dans ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Data models"))," et la carte ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Models"))," et cliquez sur le bouton ",(0,i.kt)("img",{src:"/images/user-documentation/regards-icons/admin/list.png",alt:"list",height:"25",width:"25"})," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"List")),"."),(0,i.kt)("p",null,"Vous trouverez ici la liste de tous les mod\xe8les que vous avez cr\xe9\xe9s. Appuyez sur le bouton ",(0,i.kt)("img",{src:"/images/user-documentation/regards-icons/admin/link.png",alt:"mapping",height:"25",width:"25"})," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Link attributes"))," pour lier des attributs au mod\xe8le."),(0,i.kt)("p",null,"Vous y trouverez l'interface suivante :"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/images/user-documentation/v1.4/3-data-organization/models/model-link-attribute.png",alt:"map attribute",width:"800"})),(0,i.kt)("p",null,"Sur la gauche, les attributs appartenant au mod\xe8le et sur la droite, l'ensemble des attributs et \xe9ventuellement des fragments disponibles dans le projet. Les fragments sont repr\xe9sent\xe9s par des blocs contenant des titres. Pour ajouter un attribut ou un fragment, effectuez simple un drag and drop de la gauche vers la droite."),(0,i.kt)("p",null,"Si votre mod\xe8le est de type ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Dataset")),", vous pourrez ajouter un plugin de calcul sur un attribut en appuyant sur le bouton ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Use a plugin")),". Le type de retour du plugin doit \xeatre compatible avec le type d'attribut. Si la case est gris\xe9e, cela signifie qu'aucun plugin de calcul ne correspond \xe0 l'attribut en question."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/images/user-documentation/v1.4/3-data-organization/models/model-link-attribute-dataset.png",alt:"dataset",width:"800"})),(0,i.kt)("p",null,"Une fois l'ensemble des \xe9l\xe9ments ajout\xe9s \xe0 votre mod\xe8le, il sera pr\xeat \xe0 \xeatre utilis\xe9."),(0,i.kt)("h2",{id:"-g\xe9rer-les-mod\xe8les-de-donn\xe9es"},(0,i.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," G\xe9rer les mod\xe8les de donn\xe9es"),(0,i.kt)("p",null,"Pour g\xe9rer les mod\xe8les de donn\xe9es, appuyez sur le bouton ",(0,i.kt)("img",{src:"/images/user-documentation/regards-icons/admin/list.png",alt:"list",height:"25",width:"25"})," de la carte ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Models")),"."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/images/user-documentation/v1.4/3-data-organization/models/model-list-model.png",alt:"list",width:"800"})),(0,i.kt)("p",null,"Les boutons d'action vous permette d'effectuer diff\xe9rentes t\xe2ches :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:"/images/user-documentation/regards-icons/admin/download.png",alt:"download",height:"25",width:"25"})," ",(0,i.kt)("b",null,(0,i.kt)("i",null,"Download"))," exporte le mod\xe8le au format XML"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:"/images/user-documentation/regards-icons/admin/link.png",alt:"mapping",height:"25",width:"25"})," ",(0,i.kt)("b",null,(0,i.kt)("i",null,"Link attributes"))," \xe9dite les attributs et les fragments li\xe9s au mod\xe8le"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:"/images/user-documentation/regards-icons/admin/edit.png",alt:"edit",height:"25",width:"25"})," ",(0,i.kt)("b",null,(0,i.kt)("i",null,"Edit"))," permet de changer la description du mod\xe8le"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:"/images/user-documentation/regards-icons/admin/duplicate.png",alt:"duplicate",height:"25",width:"25"})," ",(0,i.kt)("b",null,(0,i.kt)("i",null,"Duplicate"))," duplique le mod\xe8le. Attention, les plugins de calcul associ\xe9s aux attributs du mod\xe8le d'origine ne seront pas copi\xe9s."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:"/images/user-documentation/regards-icons/admin/delete.png",alt:"delete",height:"25",width:"25"})," ",(0,i.kt)("b",null,(0,i.kt)("i",null,"Delete"))," il n'est pour le moment pas possible de supprimer un mod\xe8le de donn\xe9es")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Vous pouvez filtrer les mod\xe8les par nom pour les rechercher plus facilement dans la liste"))))}p.isMDXComponent=!0}}]);