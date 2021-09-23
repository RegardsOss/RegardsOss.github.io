"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2941],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65294:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={layout:"classic-docs",title:"Generate Database Migration","short-title":"Database migration"},l=void 0,c={unversionedId:"development/backend/regards/module/generate-db-migration",id:"version-1.4.0/development/backend/regards/module/generate-db-migration",isDocsHomePage:!1,title:"Generate Database Migration",description:"How to generate script migration",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/module/generate-db-migration.md",sourceDirName:"development/backend/regards/module",slug:"/development/backend/regards/module/generate-db-migration",permalink:"/docs/1.4.0/development/backend/regards/module/generate-db-migration",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/module/generate-db-migration.md",version:"1.4.0",frontMatter:{layout:"classic-docs",title:"Generate Database Migration","short-title":"Database migration"}},u=[{value:"How to generate script migration",id:"how-to-generate-script-migration",children:[]},{value:"Overview",id:"overview",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-generate-script-migration"},"How to generate script migration"),(0,o.kt)("p",null,"We're using the automatic generation of HBM2DDL to migrate without loosing data. Here is what you should do : "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a class test in your DAO layer nammed ",(0,o.kt)("inlineCode",{parentName:"li"},"*Generator*")),(0,o.kt)("li",{parentName:"ol"},"Make that class extends ",(0,o.kt)("inlineCode",{parentName:"li"},"AbstractScriptGeneratorTest")),(0,o.kt)("li",{parentName:"ol"},"Remove and recreate public schema on the PostGres database that you use on tests"),(0,o.kt)("li",{parentName:"ol"},"Run your class test"),(0,o.kt)("li",{parentName:"ol"},"Open the file ",(0,o.kt)("inlineCode",{parentName:"li"},"<module>-dao/target/project_script.sql")),(0,o.kt)("li",{parentName:"ol"},"Create your own migration script ",(0,o.kt)("inlineCode",{parentName:"li"},"<module>-dao/src/main/resources/scripts/Vx.y.z__<description>.sql")),(0,o.kt)("li",{parentName:"ol"},"On the content of ",(0,o.kt)("inlineCode",{parentName:"li"},"<module>-dao/target/project_script.sql"),", remove all SQL not related to the current module and just keep differences. Finally, convert these differences into minimal updates. ")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"TODO TRAD FR->EN"),(0,o.kt)("p",null,"La gestion des structures des bases de donn\xe9es de production n'\xe9tant plus r\xe9alis\xe9e avec HBM2DDL(Hibernate) mais FlyWay, lorsque une entit\xe9 est modifi\xe9e, il faut propager cette modification aux scripts sql permettant la mise en place des structures de bases de donn\xe9es correspondantes."),(0,o.kt)("p",null,"Les scripts sont r\xe9alis\xe9s par module et donc disponible dans la couche dao de chacun d'eux. Soit par d\xe9faut, dans le r\xe9pertoire ",(0,o.kt)("inlineCode",{parentName:"p"},"<module>/<module>-dao/src/main/resources/scripts/<module>")," (instancescripts pour instance!). "),(0,o.kt)("p",null,"Flyway poss\xe9dant une table de m\xe9tadonn\xe9es pour chaque module lui permettant de g\xe9rer le lancement automatique des scripts et de contr\xf4ler la conformit\xe9 des scripts existants avec ceux d\xe9j\xe0 pass\xe9s (somme de contr\xf4le), la mise \xe0 jour de la structure de la base de donn\xe9es peut se traduire :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"avec suppression du sch\xe9ma existant et perte des donn\xe9es"),(0,o.kt)("li",{parentName:"ul"},"par la modification d'un script existant,"),(0,o.kt)("li",{parentName:"ul"},"ou avec compatibilit\xe9 ascendante (sans perte de donn\xe9es) en cr\xe9ant un nouveau script versionn\xe9.")),(0,o.kt)("p",null,"Les scripts respectent le format suivant:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vx.y.z",(0,o.kt)("strong",{parentName:"li"},"*.sql(Version"),'nom.sql, et oui il y a bien 2 "_" entre la version et le nom). Chaque module peut d\xe9finir un fichier "dbmodule.properties" (optionnel) permettant de sp\xe9cifier les d\xe9pendances entre modules.')),(0,o.kt)("p",null,"Vous devez vous assurer de :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"d'avoir nomm\xe9 toutes les contraintes d'int\xe9grit\xe9")))}p.isMDXComponent=!0}}]);