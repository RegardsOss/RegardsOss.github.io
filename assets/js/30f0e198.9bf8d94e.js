"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[51919],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=s.createContext({}),p=function(e){var t=s.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return s.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return r?s.createElement(g,a(a({ref:t},l),{},{components:r})):s.createElement(g,a({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:n,a[1]=o;for(var p=2;p<i;p++)a[p]=r[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10349:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var s=r(87462),n=(r(67294),r(3905));const i={id:"oais-files-submit-products",title:"Submit OAIS products",slug:"/user-guide/import-data/oais-files/submit-products/"},a=void 0,o={unversionedId:"user-documentation/4_1-ingest/oais-files-submit-products",id:"user-documentation/4_1-ingest/oais-files-submit-products",title:"Submit OAIS products",description:"D\xe9posez des fichiers de donn\xe9es contenant des Submission Information Packages (SIPs). Un SIP est un support de base utilis\xe9 pour cr\xe9er des Archival Information Packages (AIPs), qui stockeront les donn\xe9es spatiales et toutes les m\xe9tadonn\xe9es n\xe9cessaires \xe0 la p\xe9rennisation des objets et leur contenus.",source:"@site/docs/user-documentation/4_1-ingest/submit-products.md",sourceDirName:"user-documentation/4_1-ingest",slug:"/user-guide/import-data/oais-files/submit-products/",permalink:"/docs/next/user-guide/import-data/oais-files/submit-products/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/4_1-ingest/submit-products.md",tags:[],version:"current",frontMatter:{id:"oais-files-submit-products",title:"Submit OAIS products",slug:"/user-guide/import-data/oais-files/submit-products/"},sidebar:"manual",previous:{title:"Configure ingestion chains",permalink:"/docs/next/user-guide/import-data/oais-files/configure-ingestion-chains/"},next:{title:"Build OAIS products by scanning files",permalink:"/docs/next/user-guide/import-data/scanned-files/manage-acquisition-chains/"}},u={},p=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Pr\xe9-requis',id:"-pr\xe9-requis",level:2},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Soumettre des SIPs',id:"-soumettre-des-sips",level:2}],l={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"D\xe9posez des fichiers de donn\xe9es contenant des Submission Information Packages (SIPs). Un SIP est un support de base utilis\xe9 pour cr\xe9er des Archival Information Packages (AIPs), qui stockeront les donn\xe9es spatiales et toutes les m\xe9tadonn\xe9es n\xe9cessaires \xe0 la p\xe9rennisation des objets et leur contenus.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"-pr\xe9-requis"},(0,n.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Pr\xe9-requis"),(0,n.kt)("p",null,"Vous devez importer des fichiers avec un format sp\xe9cifique pour qu'ils puissent \xeatre interpr\xe9t\xe9s et trait\xe9s par REGARDS.\nPour construire votre fichier, lisez la page ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/development/appendices/oais/"},"REGARDS OAIS implementation"),"."),(0,n.kt)("p",null,"Un fichier de d\xe9p\xf4t est compos\xe9 de deux parties principales :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"metadata"))," d\xe9crit la fa\xe7on dont REGARDS doit ing\xe9rer le fichier. Le champ ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"ingestChain"))," pr\xe9cise la cha\xeene d'ingestion \xe0 utiliser pour traiter les SIPs, ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"storages"))," est une liste de paths utilis\xe9e lorsque que vous souhaitez enregistrer des fichiers suppl\xe9mentaires. Dans cas, vous devrez indiquer quel type de fichier il faudra stocker et sur quel ",(0,n.kt)("a",{parentName:"li",href:"/docs/next/user-guide/project-configuration/storages/"},"espace"),". Cette ent\xeate fournit \xe9galement des informations utiles au suivi de l'avancement de l'ingestion au travers des champs ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Session"))," et ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Session Owner"))," ; ainsi que l'ajout de ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"categories"))," utiles \xe0 l'identification de votre groupe de donn\xe9es."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"features"))," qui contient la liste des SIPs, appel\xe9es ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Features")),", \xe0 stocker et transformer en AIP. Ils sont compos\xe9s de tous les r\xe9f\xe9rencements de donn\xe9es spatiales et leurs m\xe9tadonn\xe9es.")),(0,n.kt)("p",null,"Une fois, ce fichier cr\xe9\xe9, vous pourrez le soumettre \xe0 REGARDS."),(0,n.kt)("h2",{id:"-soumettre-des-sips"},(0,n.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Soumettre des SIPs"),(0,n.kt)("p",null,"Cliquez sur le bouton ",(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/admin/add.png",alt:"add products",height:"25",width:"25"})," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Submit products"))," de la carte ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Products Manager (OAIS)"))," accessible depuis ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Add data")),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Depuis l'\xe9cran ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Data submission")),", appuyez sur le bouton ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Select file containing data to submit"))," et choisissez le fichier JSON que vous venez de cr\xe9er.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"/images/user-documentation/v1.4/4_1-ingest/ingest-submit-products.png",alt:"submit products",width:"800"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Appuyez ensuite sur ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Submit"))),(0,n.kt)("li",{parentName:"ul"},"Vous acc\xe8derez ensuite \xe0 un rapport r\xe9sumant la demande de d\xe9p\xf4t des sips, vous y trouverez :",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"une ligne indiquant si les sips, aussi appel\xe9es ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"features")),", ont \xe9t\xe9 soumis. Si tel est le cas, le syst\xe8me vous communiquera le nombre de sips envoy\xe9es au syst\xe8me de stockage.\nDans le cas contraire, une erreur s'affichera pour vous informer que le fichier n'a pas un format valide. Vous pourrez donc le modifier et le r\xe9importer."),(0,n.kt)("li",{parentName:"ul"},"un bouton vous permettant de suivre l'ingestion des donn\xe9es. Voir la page ",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"/docs/next/user-guide/monitoring/dashboard"},"Acquisition session"))," pour comprendre comment suivre vos donn\xe9es et savoir si elles ont correctement \xe9t\xe9 stock\xe9es par le syst\xe8me. Suivez ensuite la page ",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"/docs/next/user-guide/import-data/oais-files/manage-products/"},"Manage products"))," pour g\xe9rer vos produits."),(0,n.kt)("li",{parentName:"ul"},"un bouton vous permettant de d\xe9poser \xe0 nouveau un fichier contenant des sips.")))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"/images/user-documentation/v1.4/4_1-ingest/ingest-data-summary.png",alt:"product data summary chain",width:"800"})))}m.isMDXComponent=!0}}]);