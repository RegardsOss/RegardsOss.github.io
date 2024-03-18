"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[68118],{15680:(e,a,r)=>{r.d(a,{xA:()=>p,yg:()=>m});var t=r(96540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=t.createContext({}),u=function(e){var a=t.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},p=function(e){var a=u(e.components);return t.createElement(i.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),g=n,m=c["".concat(i,".").concat(g)]||c[g]||d[g]||s;return r?t.createElement(m,o(o({ref:a},p),{},{components:r})):t.createElement(m,o({ref:a},p))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=g;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<s;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},21106:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=r(58168),n=(r(96540),r(15680));const s={id:"crawler-external-databases",title:"Crawl data from external database",slug:"/user-guide/crawler/configure-datasources/external-databases/"},o=void 0,l={unversionedId:"user-documentation/crawler/crawler-external-databases",id:"version-1.11.0/user-documentation/crawler/crawler-external-databases",title:"Crawl data from external database",description:"Peuplez le catalogue avec les donn\xe9es contenues dans une base externe \xe0 REGARDS",source:"@site/versioned_docs/version-1.11.0/user-documentation/5-crawler/database.md",sourceDirName:"user-documentation/5-crawler",slug:"/user-guide/crawler/configure-datasources/external-databases/",permalink:"/docs/1.11.0/user-guide/crawler/configure-datasources/external-databases/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/user-documentation/5-crawler/database.md",tags:[],version:"1.11.0",frontMatter:{id:"crawler-external-databases",title:"Crawl data from external database",slug:"/user-guide/crawler/configure-datasources/external-databases/"},sidebar:"manual",previous:{title:"Configure datasources introduction",permalink:"/docs/1.11.0/user-guide/crawler/configure-datasources/"},next:{title:"Crawl data from opensearch web source",permalink:"/docs/1.11.0/user-guide/crawler/configure-datasources/opensearch/"}},i={},u=[],p={toc:u},c="wrapper";function d(e){let{components:a,...r}=e;return(0,n.yg)(c,(0,t.A)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Peuplez le catalogue avec les donn\xe9es contenues dans une base externe \xe0 REGARDS")),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Avant de pouvoir configurer une source de donn\xe9es depuis une base externe, vous devez obligatoirement avoir ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.11.0/user-guide/data-organization/models/"},"cr\xe9\xe9 un mod\xe8le de donn\xe9es")," de type ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Data")),", il servira \xe0 mettre en correspondance vos donn\xe9es et le mod\xe8le utilis\xe9 par le catalogue")),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Dans la carte ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Crawling")),", cliquez sur ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Map datasources to internal models"))," puis sur ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Add")),"."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource.png",alt:"add datasource",width:"800"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"S\xe9lectionnez ensuite le mode ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"crawl data from an external data source")),".")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource-database.png",alt:"database",width:"800"})),(0,n.yg)("p",null,"Vous entrez ensuite l'\xe9diteur de cr\xe9ation d'une source de donn\xe9es compos\xe9 de trois \xe9tapes successives."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Select a connection"))),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Choisissez dans la liste d\xe9roulante la connexion que vous venez de configurer puis appuyez\nsur ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Next"))))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Specify datasource attributes"))),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Configurez ensuite les attributs correspondants \xe0 votre source de donn\xe9es :",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"entrez le libell\xe9 de votre choix,"),(0,n.yg)("li",{parentName:"ul"},"la dur\xe9e entre deux rafraichissements en secondes. Celle-ci conditionnera la dur\xe9e entre deux scans de la source de donn\xe9es pour indexer le catalogue. Cela peut s'av\xe9rer utile lorsque des donn\xe9es sont r\xe9guli\xe8rement ajout\xe9es,"),(0,n.yg)("li",{parentName:"ul"},"choisissez ensuite le mod\xe8le que vous avez pr\xe9c\xe9demment import\xe9,"),(0,n.yg)("li",{parentName:"ul"},"le type de plugin pour d\xe9finir la mani\xe8re dont les donn\xe9es de la base de donn\xe9es externe vont \xeatre mapp\xe9es. Il y a actuellement deux types de mappings. Le plugin ",(0,n.yg)("em",{parentName:"li"},"postgresql-datasource")," permet de lier plusieurs attributs de plusieurs tables externes au mod\xe8le de donn\xe9es et ",(0,n.yg)("em",{parentName:"li"},"postgresql-datasource-single-table"),", permettant de lier les attributs d'une seule table."),(0,n.yg)("li",{parentName:"ul"},"Vous pouvez associer si vous le voulez une liste de tags aux donn\xe9es qui seront aspir\xe9es. Ils pourront faciliter les recherches dans le catalogue."))))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Data mapping"))," :"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"C'est sur cet \xe9cran que le mapping entre les donn\xe9es de la base externe et le mod\xe8le de REGARDS s\u2019effectue."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource-database-step-3.png",alt:"database",width:"800"}))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Dans le bloc ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Connection browser"))," vous pouvez visualiser les tables externes.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Quel que soit le plugin de mapping que vous utilisez :"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"vous devrez faire la correspondance des attributs dans la section ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Links between model attributes and the connection")),"."),(0,n.yg)("li",{parentName:"ul"},"dans la premi\xe8re colonne, vous trouverez les attributs communs \xe0 toutes les donn\xe9es dans REGARDS et les attributs sp\xe9cifiques au mod\xe8le que vous avez import\xe9."),(0,n.yg)("li",{parentName:"ul"},"dans la deuxi\xe8me colonne, vous devez remplir l'attribut correspondant dans votre table. Il y a des sp\xe9cificit\xe9s en fonction du plugin que vous avez choisi :"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Si vous avez choisi le plugin ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"postgresql-datasource"))," :"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"tout d'abord, s\xe9lectionnez les tables qui seront mapp\xe9es par REGARDS dans la clause FROM, WHERE, ","[","GROUP BY et HAVING]"),(0,n.yg)("li",{parentName:"ul"},"ensuite, s\xe9lectionnez chaque attribut individuellement avec la clause SELECT"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Si vous avez choisi le plugin ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"postgresql-datasource-single-table"))),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"s\xe9lectionnez la table qui sera utilis\xe9e pour le mapping."),(0,n.yg)("li",{parentName:"ul"},"la section ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Links between model attributes and the connection")),", vous propose deux mani\xe8res de s\xe9lectionner les attributs. Vous pouvez directement choisir l'attribut de la table gr\xe2ce \xe0 la liste d\xe9roulante ou cocher la case ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Use SQL"))," pour \xe9crire la clause du SELECT."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Cliquez ensuite sur le bouton ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Save")),". Vous serez ensuite redirig\xe9 vers la liste des aspirations de donn\xe9es.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"V\xe9rifiez la cr\xe9ation de votre aspiration de donn\xe9es. Une fois l'aspiration cr\xe9\xe9e vous pouvez suivre son traitement dans ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.11.0/user-guide/crawler/monitor-crawling/"},"Monitoring"),"."))))))}d.isMDXComponent=!0}}]);