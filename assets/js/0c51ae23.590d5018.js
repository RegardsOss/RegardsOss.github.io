"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[1948],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return t?o.createElement(g,s(s({ref:n},p),{},{components:t})):o.createElement(g,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2358:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),s=["components"],i={id:"catalog-toponyms",title:"Toponyms server",slug:"/user-guide/catalog/toponyms/"},l=void 0,u={unversionedId:"user-documentation/catalog-consultation/catalog-toponyms",id:"version-1.5.0/user-documentation/catalog-consultation/catalog-toponyms",title:"Toponyms server",description:"Qu'est-ce qu'un toponyme ?",source:"@site/versioned_docs/version-1.5.0/user-documentation/6-catalog-consultation/toponyms-server.md",sourceDirName:"user-documentation/6-catalog-consultation",slug:"/user-guide/catalog/toponyms/",permalink:"/docs/1.5.0/user-guide/catalog/toponyms/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/user-documentation/6-catalog-consultation/toponyms-server.md",tags:[],version:"1.5.0",frontMatter:{id:"catalog-toponyms",title:"Toponyms server",slug:"/user-guide/catalog/toponyms/"},sidebar:"version-1.5.0/manual",previous:{title:"Use the catalog",permalink:"/docs/1.5.0/user-guide/catalog/use/"},next:{title:"Interoperability protocols",permalink:"/docs/1.5.0/user-guide/catalog/protocols/"}},p=[{value:"Qu&#39;est-ce qu&#39;un toponyme ?",id:"quest-ce-quun-toponyme-",children:[],level:2},{value:"Utilisation des toponymes dans REGARDS",id:"utilisation-des-toponymes-dans-regards",children:[],level:2},{value:"Ajout de nouveaux toponymes",id:"ajout-de-nouveaux-toponymes",children:[],level:2}],c={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"quest-ce-quun-toponyme-"},"Qu'est-ce qu'un toponyme ?"),(0,a.kt)("p",null,"Un toponyme est un nom permettant de qualifier un lieu repr\xe9sent\xe9 par une zone g\xe9ographique. Les toponymes peuvent \xeatre de tout type comme des pays, des continents, des r\xe9gions ou des lacs par exemple."),(0,a.kt)("h2",{id:"utilisation-des-toponymes-dans-regards"},"Utilisation des toponymes dans REGARDS"),(0,a.kt)("p",null,"Dans le but de faciliter les recherches g\xe9ographiques sur le catalogue de donn\xe9es, REGARDS met \xe0 disposition un serveur de toponymes. Ce serveur de toponymes, d\xe9ploy\xe9 au sein du microservice ",(0,a.kt)("inlineCode",{parentName:"p"},"access-instance"),",  fourni par d\xe9faut des toponymes pour l'ensemble des pays du monde en se basant sur des donn\xe9es g\xe9or\xe9f\xe9renc\xe9es obtenues depuis ",(0,a.kt)("a",{parentName:"p",href:"https://hub.arcgis.com/"},"arcgis"),".\nCe serveur est utilis\xe9 par l'interface utilisateur, sur la partie de repr\xe9sentation g\xe9ographique des donn\xe9es, pour proposer un crit\xe8re de recherche par zone g\xe9ographique correspondant aux toponymes du serveur."),(0,a.kt)("h2",{id:"ajout-de-nouveaux-toponymes"},"Ajout de nouveaux toponymes"),(0,a.kt)("p",null,"Il vous est possible d'ajouter tout type de toponymes dans la base de donn\xe9es associ\xe9e. Pour ce faire nous pr\xe9conisons l'utilisation de ",(0,a.kt)("a",{parentName:"p",href:"https://gdal.org/"},"gdal")," et plus pr\xe9cis\xe9ment ",(0,a.kt)("a",{parentName:"p",href:"https://gdal.org/programs/ogr2ogr.html"},"ogr2ogr")," afin de faciliter l'insertion des donn\xe9es g\xe9or\xe9f\xe9renc\xe9es de type shapefile ou geojson."),(0,a.kt)("p",null,"Les toponymes sont stock\xe9s dans la base de donn\xe9es associ\xe9e lors de l'installation de REGARDS au microservice d'instance dans le schema ",(0,a.kt)("inlineCode",{parentName:"p"},"accessinstance")," et dans la table ",(0,a.kt)("inlineCode",{parentName:"p"},"t_toponyms"),"."),(0,a.kt)("p",null,"Voici ci-dessous la commande \xe0 utiliser avec ogr2ogr pour pouvoir ajouter des donn\xe9es provenant d'un fichier shapefile.",(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'ogr2ogr -f "PostgreSQL" \\\n-update -append \\\n-lco FID=id \\\n-lco SCHEMA=toponyms \\\n-skipfailures \\\n-nln accessinstance.t_toponyms \\\n"PG:host=<b><db_host> user=<db_user> password=<db_password> dbname=<db_name>" \\\n-lco GEOMETRY_NAME=geom \\\n-nlt GEOMETRY \\\n-sql "SELECT <label_field> AS label,  <label_fr_field> AS label_fr,  <owner_field> as copyright,  <unqiue_id_field> AS bid from <shapeFile>"  \\\n-lco PRECISION=no -nlt PROMOTE_TO_MULTI \\\n<shapeFile>.shp\n')),(0,a.kt)("p",null,"Vous devez remplacer dans cette commande les informations concernant :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"l'acc\xe8s \xe0 la base de donn\xe9es "),(0,a.kt)("li",{parentName:"ul"},"les propri\xe9t\xe9s \xe0 lire dans le fichier shapefile correspondant aux propri\xe9t\xe9s n\xe9cessaires pour la cr\xe9ation d'un toponyme"),(0,a.kt)("li",{parentName:"ul"},"le nom du fichier shapefile")),(0,a.kt)("p",null,"Les informations n\xe9cessaires pour ajouter des toponymes dans la base de donn\xe9es correspondent aux colonnes de la table ",(0,a.kt)("inlineCode",{parentName:"p"},"t_toponyms")," du schema ",(0,a.kt)("inlineCode",{parentName:"p"},"accessinstance")," de la base de donn\xe9es associ\xe9e au microservice ",(0,a.kt)("inlineCode",{parentName:"p"},"acccess-instance")," :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bid")," : Identifiant unique du toponyme"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"label")," : Nom anglais du toponyme. Il s'agit du label qui sera propos\xe9 \xe0 l'IHM lors de la recherche"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"label_fr")," : Nom francais du toponyme."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"copyright")," : Qui est le propri\xe9taire de l'information."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"description")," : ","[Optionel]"," Une description du toponyme."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"geom")," : La g\xe9om\xe9trie au format geo de postgis.")),(0,a.kt)("p",null,"Apr\xe8s avoir ajouter un ou plusieurs toponymes en base de donn\xe9es, vous pouvez interroger le serveur aux adresses :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Recherche d'un toponyme : ",(0,a.kt)("inlineCode",{parentName:"li"},"http://<host>/api/v1/access-instance/toponyms/{bid}")),(0,a.kt)("li",{parentName:"ul"},"Recherche des toponymes correspond \xe0 une recherche textuelle sur le nom : ",(0,a.kt)("inlineCode",{parentName:"li"},"http://<host>/api/v1/access-instance/toponyms/search?partialLabel=<label to search>"))))}d.isMDXComponent=!0}}]);