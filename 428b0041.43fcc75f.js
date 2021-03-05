(window.webpackJsonp=window.webpackJsonp||[]).push([[670],{2699:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},742:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(2699)),i={id:"global-configuration-projects",title:"Manage projects",slug:"/user-guide/global-configuration/projects"},s={unversionedId:"user-documentation/1-global-configuration/global-configuration-projects",id:"user-documentation/1-global-configuration/global-configuration-projects",isDocsHomePage:!1,title:"Manage projects",description:"Cr\xe9ez et g\xe9rez vos projets depuis le menu ***Projects*** de l'administration de l'instance REGARDS.",source:"@site/docs/user-documentation/1-global-configuration/project-configuration.md",slug:"/user-guide/global-configuration/projects",permalink:"/docs/user-guide/global-configuration/projects",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/1-global-configuration/project-configuration.md",version:"current",sidebar:"manual",previous:{title:"Customize portal interface",permalink:"/docs/user-guide/global-configuration/portal"},next:{title:"Manage user accounts",permalink:"/docs/user-guide/global-configuration/users"}},c=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Cr\xe9er un nouveau projet',id:"cr\xe9er-un-nouveau-projet",children:[{value:"Etape 1 : Informations g\xe9n\xe9rales",id:"etape-1--informations-g\xe9n\xe9rales",children:[]},{value:"Etape 2 : Base de donn\xe9es",id:"etape-2--base-de-donn\xe9es",children:[]}]},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Supprimer un projet',id:"supprimer-un-projet",children:[]},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Modifier la licence d&#39;un projet',id:"modifier-la-licence-dun-projet",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Cr\xe9ez et g\xe9rez vos projets depuis le menu ",Object(o.b)("strong",{parentName:"em"},Object(o.b)("em",{parentName:"strong"},"Projects"))," de l'administration de l'instance REGARDS.")),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/1-global-configuration/projects-menu.png",alt:"interface admin",width:"800"})),Object(o.b)("hr",null),Object(o.b)("h2",{id:"cr\xe9er-un-nouveau-projet"},Object(o.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Cr\xe9er un nouveau projet"),Object(o.b)("p",null,"Pour commencer \xe0 utiliser REGARDS, cr\xe9ez et configurez votre premier projet. Depuis l'interface d'administration de l'instance du syst\xe8me REGARDS, s\xe9lectionnez le menu ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Projects"))," et cliquez sur le bouton ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Add"))," en bas \xe0 droite."),Object(o.b)("h3",{id:"etape-1--informations-g\xe9n\xe9rales"},"Etape 1 : Informations g\xe9n\xe9rales"),Object(o.b)("p",null,"Vous serez redirig\xe9 vers l'\xe9cran de cr\xe9ation d'un nouveau projet, remplissez les champs suivants :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Project name"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]"),", l'identifiant unique de votre projet. Il sera utilis\xe9 par le syst\xe8me pour faire r\xe9f\xe9rence \xe0 votre projet."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Project label"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]"),", le libell\xe9 de pr\xe9sentation du projet dans les interfaces web. Contrairement \xe0 l'identifiant, vous pouvez mettre des espaces pour plus de clart\xe9."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Description"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]"),", la pr\xe9sentation succincte de votre projet. Vous pourrez la retrouver dans la liste des projets."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"HTTP link to icon"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]"),", l'adresse web d'acc\xe8s \xe0 l'ic\xf4ne de repr\xe9sentation du projet. Elle est utilis\xe9e dans le ",Object(o.b)("a",{parentName:"li",href:"portal"},"portail d'acc\xe8s")," aux projets et comme favicon de l'interface web utilisateur."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"HTTP link to project license"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]"),", l'adresse web d'acc\xe8s au fichier de licence du projet au format ",Object(o.b)("em",{parentName:"li"},"html"),", ",Object(o.b)("em",{parentName:"li"},"markdown")," ou ",Object(o.b)("em",{parentName:"li"},"pdf"),". Cette license devra \xeatre accept\xe9e par les utilisateurs avant de pouvoir acc\xe9der aux donn\xe9es."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"REGARDS gateway public address"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]"),", l'adresse publique d'acc\xe8s \xe0 la passerelle REGARDS. Cette URL est l'unique point d'acc\xe8s au syst\xe8me REGARDS depuis l'ext\xe9rieur. Il correspond le plus souvent \xe0 l'adresse publique de votre reverse-proxy."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Public project"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]"),", autorise l'acc\xe8s au projet aux utilisateurs non enregistr\xe9s. Par d\xe9faut, le projet est priv\xe9."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Accessible project"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]"),", affiche le projet dans le ",Object(o.b)("a",{parentName:"li",href:"portal"},"portail d'acc\xe8s")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Geometries Coordinate reference system")),", le syst\xe8me de r\xe9f\xe9rence utilis\xe9 pour la gestion des donn\xe9es g\xe9o-r\xe9f\xe9renc\xe9es du projet."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Handle polar cap polygons")),", ajoute une transformation sur les donn\xe9es g\xe9o-r\xe9f\xe9renc\xe9es passant par les p\xf4les. Attention, le format des g\xe9om\xe9tries des donn\xe9es r\xe9f\xe9renc\xe9s doivent ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"toutes"))," respecter la r\xe8gle de la main droite pour les cercles ext\xe9rieurs.")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Attention, l'adresse d'acc\xe8s publique configur\xe9e sera utilis\xe9e par le syst\xe8me pour g\xe9n\xe9rer les adresses d'acc\xe8s aux donn\xe9es (t\xe9l\xe9chargements compris)."))),Object(o.b)("h3",{id:"etape-2--base-de-donn\xe9es"},"Etape 2 : Base de donn\xe9es"),Object(o.b)("p",null,"Chaque projet du syst\xe8me REGARDS utilise une base de donn\xe9es de type postgres d\xe9di\xe9e. Une fois votre projet cr\xe9\xe9, configurez l'acc\xe8s \xe0 celle-ci pour tous les microservices. Les informations suivantes vous seront alors demand\xe9es :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Database ip address"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]"),", h\xf4te de la base de donn\xe9es posgres"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Database port"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]"),", port de connexion \xe0 la base de donn\xe9es"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Database name"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]"),", nom de la base de donn\xe9es"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"User"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]"),", identifiant de connexion \xe0 la base de donn\xe9es"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Password"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]"),", mot de passe de connexion \xe0 la base de donn\xe9es")),Object(o.b)("p",null,"Une fois cette \xe9tape termin\xe9e, vous obtiendrez la liste des connexions aux sch\xe9mas de la base de donn\xe9es. L'\xe9tat de chacune d'entre elles est indiqu\xe9e par le ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Configuration status")),". Apr\xe8s un temps d'initialisation, n\xe9cessaire \xe0 la cr\xe9ation des sch\xe9mas, toutes les connexions doivent appara\xeetre actives."),Object(o.b)("p",null,"Dans le cas contraire, vous pouvez retourner sur la page listant les projets pour reconfigurer les acc\xe8s \xe0 la base de donn\xe9es via le bouton ",Object(o.b)("img",{src:"/images/user-documentation/regards-icons/admin/link.png",alt:"link",height:"25"})," ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Configure database connections")),"."),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/1-global-configuration/project-connexions.png",alt:"project connexions",width:"800"})),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Par d\xe9faut tous les services REGARDS utiliseront la m\xeame base de donn\xe9es en cr\xe9ant un sch\xe9ma d\xe9di\xe9. Si vous voulez configurer une base de donn\xe9es d\xe9di\xe9e \xe0 chaque service, il vous faut pour cela d\xe9cocher la case ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Use this configuration for all microservices of the project"))," en bas du formulaire de configuration."))),Object(o.b)("h2",{id:"supprimer-un-projet"},Object(o.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Supprimer un projet"),Object(o.b)("p",null,"Depuis l'interface d'administration de REGARDS, vous avez la possibilit\xe9 de d\xe9sactiver un projet avec le bouton ",Object(o.b)("img",{src:"/images/user-documentation/regards-icons/admin/delete.png",alt:"deactivated",height:"25"}),Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Remove"))," ."),Object(o.b)("p",null,"Le projet ne sera plus accessible depuis les diverses interfaces et le syst\xe8me ne traitera plus aucune action li\xe9e \xe0 celui-ci ; n\xe9anmoins les donn\xe9es associ\xe9es seront toujours conserv\xe9es en base."),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/1-global-configuration/project-delete.png",alt:"project deletion",width:"800"})),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Attention : Cette action est ",Object(o.b)("strong",{parentName:"p"},"irr\xe9versible"),". Toutefois, vous pouvez recr\xe9er un nouveau projet associ\xe9 \xe0 la m\xeame base de donn\xe9es pour r\xe9cup\xe9rer les informations qu'elle contenait."))),Object(o.b)("h2",{id:"modifier-la-licence-dun-projet"},Object(o.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Modifier la licence d'un projet"),Object(o.b)("p",null,"La license de votre projet est un document configur\xe9 lors de la cr\xe9ation du projet. Elle devra \xeatre accept\xe9e par tous les utilisateurs se connectant aux interfaces web. Il est possible au cours de la vie du projet de modifier cette license. Dans ce cas, vous pouvez imposer aux utilisateurs de votre projet, d'accepter de nouveau la license lors de leur prochaine connexion."),Object(o.b)("p",null,"Pour modifier la licence du projet, appuyez sur le bouton ",Object(o.b)("img",{src:"/images/user-documentation/regards-icons/admin/licence.png",alt:"licence",height:"25"})," ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Licence changed"))," associ\xe9 \xe0 votre projet depuis la page ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Projects")),"."),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/1-global-configuration/project-update-licence.png",alt:"project update licence",width:"800"})))}p.isMDXComponent=!0}}]);