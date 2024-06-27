"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[88602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={id:"global-configuration-projects",title:"Manage projects",slug:"/user-guide/global-configuration/projects/"},i=void 0,s={unversionedId:"user-documentation/global-configuration/global-configuration-projects",id:"version-1.14/user-documentation/global-configuration/global-configuration-projects",title:"Manage projects",description:"Cr\xe9ez et g\xe9rez vos projets depuis le menu ***Projects*** de l'administration de l'instance REGARDS.",source:"@site/versioned_docs/version-1.14/user-documentation/1-global-configuration/project-configuration.md",sourceDirName:"user-documentation/1-global-configuration",slug:"/user-guide/global-configuration/projects/",permalink:"/docs/1.14/user-guide/global-configuration/projects/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/user-documentation/1-global-configuration/project-configuration.md",tags:[],version:"1.14",frontMatter:{id:"global-configuration-projects",title:"Manage projects",slug:"/user-guide/global-configuration/projects/"},sidebar:"manual",previous:{title:"Customize portal interface",permalink:"/docs/1.14/user-guide/global-configuration/portal/"},next:{title:"Manage user accounts",permalink:"/docs/1.14/user-guide/global-configuration/users/"}},l={},u=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Cr\xe9er un nouveau projet',id:"-cr\xe9er-un-nouveau-projet",level:2},{value:"Etape 1 : Informations g\xe9n\xe9rales",id:"etape-1--informations-g\xe9n\xe9rales",level:3},{value:"Etape 2 : Base de donn\xe9es",id:"etape-2--base-de-donn\xe9es",level:3},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Supprimer un projet',id:"-supprimer-un-projet",level:2},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Modifier la licence d&#39;un projet',id:"-modifier-la-licence-dun-projet",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Cr\xe9ez et g\xe9rez vos projets depuis le menu ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)("em",{parentName:"strong"},"Projects"))," de l'administration de l'instance REGARDS.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.4/1-global-configuration/projects-menu.png",alt:"interface admin",width:"800"})),(0,a.kt)("admonition",{title:"Quel est l'inter\xeat de cr\xe9er des projets ?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Un projet REGARDS peut avoir autant de mod\xe8les de donn\xe9es et le catalogue peut \xeatre peupl\xe9 depuis autant de source de donn\xe9es que n\xe9cessaire. La cr\xe9ation de plusieurs projets permet de s\xe9parer les donn\xe9es dans des catalogues distincts, comme si vous d\xe9ployez autant d'instance de REGARDS.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"-cr\xe9er-un-nouveau-projet"},(0,a.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Cr\xe9er un nouveau projet"),(0,a.kt)("p",null,"Pour commencer \xe0 utiliser REGARDS, cr\xe9ez et configurez votre premier projet. Depuis l'interface d'administration de l'instance du syst\xe8me REGARDS, s\xe9lectionnez le menu ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Projects"))," et cliquez sur le bouton ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Add"))," en bas \xe0 droite."),(0,a.kt)("h3",{id:"etape-1--informations-g\xe9n\xe9rales"},"Etape 1 : Informations g\xe9n\xe9rales"),(0,a.kt)("p",null,"Vous serez redirig\xe9 vers l'\xe9cran de cr\xe9ation d'un nouveau projet, remplissez les champs suivants :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Project name"))," ",(0,a.kt)("em",{parentName:"li"},"[Obligatoire]"),", l'identifiant unique de votre projet. Il sera utilis\xe9 par le syst\xe8me pour faire r\xe9f\xe9rence \xe0 votre projet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Project label"))," ",(0,a.kt)("em",{parentName:"li"},"[Obligatoire]"),", le libell\xe9 de pr\xe9sentation du projet dans les interfaces web. Contrairement \xe0 l'identifiant, vous pouvez mettre des espaces pour plus de clart\xe9."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Description"))," ",(0,a.kt)("em",{parentName:"li"},"[Optionnel]"),", la pr\xe9sentation succincte de votre projet. Vous pourrez la retrouver dans la liste des projets."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"HTTP link to icon"))," ",(0,a.kt)("em",{parentName:"li"},"[Optionnel]"),", l'adresse web d'acc\xe8s \xe0 l'ic\xf4ne de repr\xe9sentation du projet. Elle est utilis\xe9e dans le ",(0,a.kt)("a",{parentName:"li",href:"/docs/1.14/user-guide/global-configuration/portal/"},"portail d'acc\xe8s")," aux projets et comme favicon de l'interface web utilisateur."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"HTTP link to project license"))," ",(0,a.kt)("em",{parentName:"li"},"[Optionnel]"),", l'adresse web d'acc\xe8s au fichier de licence du projet au format ",(0,a.kt)("em",{parentName:"li"},"html"),", ",(0,a.kt)("em",{parentName:"li"},"markdown")," ou ",(0,a.kt)("em",{parentName:"li"},"pdf"),". Cette license devra \xeatre accept\xe9e par les utilisateurs avant de pouvoir acc\xe9der aux donn\xe9es."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"REGARDS gateway public address"))," ",(0,a.kt)("em",{parentName:"li"},"[Obligatoire]"),", l'adresse publique d'acc\xe8s \xe0 la passerelle REGARDS. Cette URL est l'unique point d'acc\xe8s au syst\xe8me REGARDS depuis l'ext\xe9rieur. Il correspond le plus souvent \xe0 l'adresse publique de votre reverse-proxy."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Public project"))," ",(0,a.kt)("em",{parentName:"li"},"[Optionnel]"),", autorise l'acc\xe8s au projet aux utilisateurs non enregistr\xe9s. Par d\xe9faut, le projet est priv\xe9."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Accessible project"))," ",(0,a.kt)("em",{parentName:"li"},"[Optionnel]"),", affiche le projet dans le ",(0,a.kt)("a",{parentName:"li",href:"/docs/1.14/user-guide/global-configuration/portal/"},"portail d'acc\xe8s")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Geometries Coordinate reference system")),", le syst\xe8me de r\xe9f\xe9rence utilis\xe9 pour la gestion des donn\xe9es g\xe9o-r\xe9f\xe9renc\xe9es du projet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Handle polar cap polygons")),", ajoute une transformation sur les donn\xe9es g\xe9o-r\xe9f\xe9renc\xe9es passant par les p\xf4les. Attention, le format des g\xe9om\xe9tries des donn\xe9es r\xe9f\xe9renc\xe9s doivent ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"toutes"))," respecter la r\xe8gle de la main droite pour les cercles ext\xe9rieurs.")),(0,a.kt)("p",null,"For further information about geometry in REGARDS see ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.14/development/appendices/geometry/"},"REGARDS geometry appendice")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Attention, l'adresse d'acc\xe8s publique configur\xe9e sera utilis\xe9e par le syst\xe8me pour g\xe9n\xe9rer les adresses d'acc\xe8s aux donn\xe9es (t\xe9l\xe9chargements compris).")),(0,a.kt)("h3",{id:"etape-2--base-de-donn\xe9es"},"Etape 2 : Base de donn\xe9es"),(0,a.kt)("p",null,"Une fois votre projet cr\xe9\xe9, configurez l'acc\xe8s \xe0 celle-ci pour tous les microservices. "),(0,a.kt)("admonition",{title:"1 tenant = 1 base de donn\xe9es",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Chaque projet du syst\xe8me REGARDS utilise une base de donn\xe9es de type postgres d\xe9di\xe9e. Autrement dit, si vous avez 10 projets enregistr\xe9 sur votre instance REGARDS, vous aurez 10 bases de donn\xe9es (une pour chaque tenant) et une base de donn\xe9es en plus pour la partie Instance.",(0,a.kt)("br",{parentName:"p"}),"\n","Si vous avez un environnement de qualification et un environnement d'exploitation, alors vous auriez 10 bases de donn\xe9es pour la qualification, 10 bases de donn\xe9es pour l'exploitation, 1 base de donn\xe9es pour la partie Instance en qualification et 1 base de donn\xe9es pour la partie Instance en exploitation.")),(0,a.kt)("p",null,"Les informations suivantes vous seront alors demand\xe9es :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Database ip address"))," ",(0,a.kt)("em",{parentName:"li"},"[Obligatoire]"),", h\xf4te de la base de donn\xe9es posgres"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Database port"))," ",(0,a.kt)("em",{parentName:"li"},"[Obligatoire]"),", port de connexion \xe0 la base de donn\xe9es"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Database name"))," ",(0,a.kt)("em",{parentName:"li"},"[Obligatoire]"),", nom de la base de donn\xe9es"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"User"))," ",(0,a.kt)("em",{parentName:"li"},"[Obligatoire]"),", identifiant de connexion \xe0 la base de donn\xe9es. Cet utilisateur doit avoir les ",(0,a.kt)("strong",{parentName:"li"},"droits de cr\xe9ation et suppression des sch\xe9mas")," de la base de donn\xe9es sp\xe9cifi\xe9e ci-dessus"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Password"))," ",(0,a.kt)("em",{parentName:"li"},"[Obligatoire]"),", mot de passe de connexion \xe0 la base de donn\xe9es")),(0,a.kt)("p",null,"Une fois cette \xe9tape termin\xe9e, vous obtiendrez la liste des connexions aux sch\xe9mas de la base de donn\xe9es. L'\xe9tat de chacune d'entre elles est indiqu\xe9e par le ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Configuration status")),". Apr\xe8s un temps d'initialisation, n\xe9cessaire \xe0 la cr\xe9ation des sch\xe9mas, toutes les connexions doivent appara\xeetre actives."),(0,a.kt)("p",null,"Dans le cas contraire, vous pouvez retourner sur la page listant les projets pour reconfigurer les acc\xe8s \xe0 la base de donn\xe9es via le bouton ",(0,a.kt)("img",{src:"/images/user-documentation/regards-icons/admin/link.png",alt:"link",height:"25",width:"25"})," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Configure database connections")),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.4/1-global-configuration/project-connexions.png",alt:"project connexions",width:"800"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Par d\xe9faut tous les services REGARDS utiliseront la m\xeame base de donn\xe9es en cr\xe9ant un sch\xe9ma d\xe9di\xe9. Si vous voulez configurer une base de donn\xe9es d\xe9di\xe9e \xe0 chaque service, il vous faut pour cela d\xe9cocher la case ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Use this configuration for all microservices of the project"))," en bas du formulaire de configuration.")),(0,a.kt)("h2",{id:"-supprimer-un-projet"},(0,a.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Supprimer un projet"),(0,a.kt)("p",null,"Depuis l'interface d'administration de REGARDS, vous avez la possibilit\xe9 de d\xe9sactiver un projet avec le bouton ",(0,a.kt)("img",{src:"/images/user-documentation/regards-icons/admin/delete.png",alt:"deactivated",height:"25",width:"25"}),(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Remove"))," ."),(0,a.kt)("p",null,"Le projet ne sera plus accessible depuis les diverses interfaces et le syst\xe8me ne traitera plus aucune action li\xe9e \xe0 celui-ci ; n\xe9anmoins les donn\xe9es associ\xe9es seront toujours conserv\xe9es en base."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.4/1-global-configuration/project-delete.png",alt:"project deletion",width:"800"})),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Attention : Cette action est ",(0,a.kt)("strong",{parentName:"p"},"irr\xe9versible"),". Toutefois, vous pouvez recr\xe9er un nouveau projet associ\xe9 \xe0 la m\xeame base de donn\xe9es pour r\xe9cup\xe9rer les informations qu'elle contenait.")),(0,a.kt)("h2",{id:"-modifier-la-licence-dun-projet"},(0,a.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Modifier la licence d'un projet"),(0,a.kt)("p",null,"La license de votre projet est un document configur\xe9 lors de la cr\xe9ation du projet. Elle devra \xeatre accept\xe9e par tous les utilisateurs se connectant aux interfaces web. Il est possible au cours de la vie du projet de modifier cette license. Dans ce cas, vous pouvez imposer aux utilisateurs de votre projet, d'accepter de nouveau la license lors de leur prochaine connexion."),(0,a.kt)("p",null,"Pour modifier la licence du projet, appuyez sur le bouton ",(0,a.kt)("img",{src:"/images/user-documentation/regards-icons/admin/licence.png",alt:"licence",height:"25",width:"25"})," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Licence changed"))," associ\xe9 \xe0 votre projet depuis la page ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Projects")),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.4/1-global-configuration/project-update-licence.png",alt:"project update licence",width:"800"})))}d.isMDXComponent=!0}}]);