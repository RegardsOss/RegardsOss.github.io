(window.webpackJsonp=window.webpackJsonp||[]).push([[501],{2701:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),s=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=s.a.createContext({}),p=function(e){var t=s.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},b=s.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(r),b=n,d=l["".concat(i,".").concat(b)]||l[b]||m[b]||a;return r?s.a.createElement(d,o(o({ref:t},c),{},{components:r})):s.a.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},573:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),s=r(7),a=(r(0),r(2701)),i={id:"oais-files-submit-products",title:"Submit OAIS products",slug:"/user-guide/import-data/oais-files/submit-products"},o={unversionedId:"user-documentation/4_1-ingest/oais-files-submit-products",id:"user-documentation/4_1-ingest/oais-files-submit-products",isDocsHomePage:!1,title:"Submit OAIS products",description:"D\xe9posez des fichiers de donn\xe9es contenant des Submission Information Packages (SIPs). Un SIP est un support de base utilis\xe9 pour cr\xe9er des Archival Information Packages (AIPs), qui stockeront les donn\xe9es spatiales et toutes les m\xe9tadonn\xe9es n\xe9cessaires \xe0 la p\xe9rennisation des objets et leur contenus.",source:"@site/docs/user-documentation/4_1-ingest/submit-products.md",slug:"/user-guide/import-data/oais-files/submit-products",permalink:"/fr/docs/user-guide/import-data/oais-files/submit-products",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/4_1-ingest/submit-products.md",version:"current",sidebar:"manual",previous:{title:"Configure ingestion chains",permalink:"/fr/docs/user-guide/import-data/oais-files/configure-ingestion-chains"},next:{title:"Manage OAIS products",permalink:"/fr/docs/user-guide/import-data/oais-files/manage-products"}},u=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Pr\xe9-requis',id:"pr\xe9-requis",children:[]},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Soumettre des SIPs',id:"soumettre-des-sips",children:[]}],c={toc:u};function p(e){var t=e.components,r=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"D\xe9posez des fichiers de donn\xe9es contenant des Submission Information Packages (SIPs). Un SIP est un support de base utilis\xe9 pour cr\xe9er des Archival Information Packages (AIPs), qui stockeront les donn\xe9es spatiales et toutes les m\xe9tadonn\xe9es n\xe9cessaires \xe0 la p\xe9rennisation des objets et leur contenus.")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"pr\xe9-requis"},Object(a.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Pr\xe9-requis"),Object(a.b)("p",null,"Vous devez importer des fichiers avec un format sp\xe9cifique pour qu'ils puissent \xeatre interpr\xe9t\xe9s et trait\xe9s par REGARDS.\nPour construire votre fichier, lisez la page ",Object(a.b)("a",{parentName:"p",href:"../../../development/appendices/oais"},"REGARDS OAIS implementation"),"."),Object(a.b)("p",null,"Un fichier de d\xe9p\xf4t est compos\xe9 de deux parties principales :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"metadata"))," d\xe9crit la fa\xe7on dont REGARDS doit ing\xe9rer le fichier. Le champ ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"ingestChain"))," pr\xe9cise la cha\xeene d'ingestion \xe0 utiliser pour traiter les SIPs, ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"storages"))," est une liste de paths utilis\xe9e lorsque que vous souhaitez enregistrer des fichiers suppl\xe9mentaires. Dans cas, vous devrez indiquer quel type de fichier il faudra stocker et sur quel ",Object(a.b)("a",{parentName:"li",href:"../../project-configuration/storages"},"espace"),". Cette ent\xeate fournit \xe9galement des informations utiles au suivi de l'avancement de l'ingestion au travers des champs ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Session"))," et ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Session Owner"))," ; ainsi que l'ajout de ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"categories"))," utiles \xe0 l'identification de votre groupe de donn\xe9es."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"features"))," qui contient la liste des SIPs, appel\xe9es ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Features")),", \xe0 stocker et transformer en AIP. Ils sont compos\xe9s de tous les r\xe9f\xe9rencements de donn\xe9es spatiales et leurs m\xe9tadonn\xe9es.")),Object(a.b)("p",null,"Une fois, ce fichier cr\xe9\xe9, vous pourrez le soumettre \xe0 REGARDS."),Object(a.b)("h2",{id:"soumettre-des-sips"},Object(a.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Soumettre des SIPs"),Object(a.b)("p",null,"Cliquez sur le bouton ",Object(a.b)("img",{src:"/images/user-documentation/regards-icons/admin/add.png",alt:"add products",height:"25"})," ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Submit products"))," de la carte ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Products Manager (OAIS)"))," accessible depuis ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Add data")),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Depuis l'\xe9cran ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Data submission")),", appuyez sur le bouton ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Select file containing data to submit"))," et choisissez le fichier JSON que vous venez de cr\xe9er.")),Object(a.b)("div",{align:"center"},Object(a.b)("img",{src:"/images/user-documentation/4_1-ingest/ingest-submit-products.png",alt:"submit products",width:"800"})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Appuyez ensuite sur ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Submit"))),Object(a.b)("li",{parentName:"ul"},"Vous acc\xe8derez ensuite \xe0 un rapport r\xe9sumant la demande de d\xe9p\xf4t des sips, vous y trouverez :",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"une ligne indiquant si les sips, aussi appel\xe9es ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"features")),", ont \xe9t\xe9 soumis. Si tel est le cas, le syst\xe8me vous communiquera le nombre de sips envoy\xe9es au syst\xe8me de stockage.\nDans le cas contraire, une erreur s'affichera pour vous informer que le fichier n'a pas un format valide. Vous pourrez donc le modifier et le r\xe9importer."),Object(a.b)("li",{parentName:"ul"},"un bouton vous permettant de suivre l'ingestion des donn\xe9es. Voir la page ",Object(a.b)("em",{parentName:"li"},Object(a.b)("a",{parentName:"em",href:"../scanned-files/monitor-sessions"},"Acquisition session"))," pour comprendre comment suivre vos donn\xe9es et savoir si elles ont correctement \xe9t\xe9 stock\xe9es par le syst\xe8me. Suivez ensuite la page ",Object(a.b)("em",{parentName:"li"},Object(a.b)("a",{parentName:"em",href:"manage-products"},"Manage products"))," pour g\xe9rer vos produits."),Object(a.b)("li",{parentName:"ul"},"un bouton vous permettant de d\xe9poser \xe0 nouveau un fichier contenant des sips.")))),Object(a.b)("div",{align:"center"},Object(a.b)("img",{src:"/images/user-documentation/4_1-ingest/ingest-data-summary.png",alt:"product data summary chain",width:"800"})))}p.isMDXComponent=!0}}]);