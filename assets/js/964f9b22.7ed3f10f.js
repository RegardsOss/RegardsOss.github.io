"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[98804],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},25881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={layout:"classic-docs",title:"Generate Database Migration","short-title":"Database migration"},i=void 0,s={unversionedId:"development/backend/regards/module/generate-db-migration",id:"version-1.5.0/development/backend/regards/module/generate-db-migration",title:"Generate Database Migration",description:"How to generate script migration",source:"@site/versioned_docs/version-1.5.0/development/backend/regards/module/generate-db-migration.md",sourceDirName:"development/backend/regards/module",slug:"/development/backend/regards/module/generate-db-migration",permalink:"/docs/1.5.0/development/backend/regards/module/generate-db-migration",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/backend/regards/module/generate-db-migration.md",tags:[],version:"1.5.0",frontMatter:{layout:"classic-docs",title:"Generate Database Migration","short-title":"Database migration"}},l={},d=[{value:"How to generate script migration",id:"how-to-generate-script-migration",level:2},{value:"Overview",id:"overview",level:2}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-generate-script-migration"},"How to generate script migration"),(0,a.kt)("p",null,"We're using the automatic generation of HBM2DDL to migrate without loosing data. Here is what you should do : "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a class test in your DAO layer nammed ",(0,a.kt)("inlineCode",{parentName:"li"},"*Generator*")),(0,a.kt)("li",{parentName:"ol"},"Make that class extends ",(0,a.kt)("inlineCode",{parentName:"li"},"AbstractScriptGeneratorTest")),(0,a.kt)("li",{parentName:"ol"},"Remove and recreate public schema on the PostGres database that you use on tests"),(0,a.kt)("li",{parentName:"ol"},"Run your class test"),(0,a.kt)("li",{parentName:"ol"},"Open the file ",(0,a.kt)("inlineCode",{parentName:"li"},"<module>-dao/target/project_script.sql")),(0,a.kt)("li",{parentName:"ol"},"Create your own migration script ",(0,a.kt)("inlineCode",{parentName:"li"},"<module>-dao/src/main/resources/scripts/Vx.y.z__<description>.sql")),(0,a.kt)("li",{parentName:"ol"},"On the content of ",(0,a.kt)("inlineCode",{parentName:"li"},"<module>-dao/target/project_script.sql"),", remove all SQL not related to the current module and just keep differences. Finally, convert these differences into minimal updates. ")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"TODO TRAD FR->EN"),(0,a.kt)("p",null,"La gestion des structures des bases de donn\xe9es de production n'\xe9tant plus r\xe9alis\xe9e avec HBM2DDL(Hibernate) mais FlyWay, lorsque une entit\xe9 est modifi\xe9e, il faut propager cette modification aux scripts sql permettant la mise en place des structures de bases de donn\xe9es correspondantes."),(0,a.kt)("p",null,"Les scripts sont r\xe9alis\xe9s par module et donc disponible dans la couche dao de chacun d'eux. Soit par d\xe9faut, dans le r\xe9pertoire ",(0,a.kt)("inlineCode",{parentName:"p"},"<module>/<module>-dao/src/main/resources/scripts/<module>")," (instancescripts pour instance!). "),(0,a.kt)("p",null,"Flyway poss\xe9dant une table de m\xe9tadonn\xe9es pour chaque module lui permettant de g\xe9rer le lancement automatique des scripts et de contr\xf4ler la conformit\xe9 des scripts existants avec ceux d\xe9j\xe0 pass\xe9s (somme de contr\xf4le), la mise \xe0 jour de la structure de la base de donn\xe9es peut se traduire :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"avec suppression du sch\xe9ma existant et perte des donn\xe9es"),(0,a.kt)("li",{parentName:"ul"},"par la modification d'un script existant,"),(0,a.kt)("li",{parentName:"ul"},"ou avec compatibilit\xe9 ascendante (sans perte de donn\xe9es) en cr\xe9ant un nouveau script versionn\xe9.")),(0,a.kt)("p",null,"Les scripts respectent le format suivant:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vx.y.z",(0,a.kt)("strong",{parentName:"li"},"*.sql(Version"),'nom.sql, et oui il y a bien 2 "_" entre la version et le nom). Chaque module peut d\xe9finir un fichier "dbmodule.properties" (optionnel) permettant de sp\xe9cifier les d\xe9pendances entre modules.')),(0,a.kt)("p",null,"Vous devez vous assurer de :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"d'avoir nomm\xe9 toutes les contraintes d'int\xe9grit\xe9")))}u.isMDXComponent=!0}}]);