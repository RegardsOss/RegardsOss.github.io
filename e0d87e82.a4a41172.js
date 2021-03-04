(window.webpackJsonp=window.webpackJsonp||[]).push([[2300],{2370:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(2701)),i={layout:"classic-docs",title:"Generate Database Migration","short-title":"Database migration"},s={unversionedId:"development/backend/regards/module/generate-db-migration",id:"development/backend/regards/module/generate-db-migration",isDocsHomePage:!1,title:"Generate Database Migration",description:"How to generate script migration",source:"@site/docs/development/backend/regards/module/generate-db-migration.md",slug:"/development/backend/regards/module/generate-db-migration",permalink:"/docs/next/development/backend/regards/module/generate-db-migration",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/module/generate-db-migration.md",version:"current"},c=[{value:"How to generate script migration",id:"how-to-generate-script-migration",children:[]},{value:"Overview",id:"overview",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-to-generate-script-migration"},"How to generate script migration"),Object(o.b)("p",null,"We're using the automatic generation of HBM2DDL to migrate without loosing data. Here is what you should do : "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a class test in your DAO layer nammed ",Object(o.b)("inlineCode",{parentName:"li"},"*Generator*")),Object(o.b)("li",{parentName:"ol"},"Make that class extends ",Object(o.b)("inlineCode",{parentName:"li"},"AbstractScriptGeneratorTest")),Object(o.b)("li",{parentName:"ol"},"Remove and recreate public schema on the PostGres database that you use on tests"),Object(o.b)("li",{parentName:"ol"},"Run your class test"),Object(o.b)("li",{parentName:"ol"},"Open the file ",Object(o.b)("inlineCode",{parentName:"li"},"<module>-dao/target/project_script.sql")),Object(o.b)("li",{parentName:"ol"},"Create your own migration script ",Object(o.b)("inlineCode",{parentName:"li"},"<module>-dao/src/main/resources/scripts/Vx.y.z__<description>.sql")),Object(o.b)("li",{parentName:"ol"},"On the content of ",Object(o.b)("inlineCode",{parentName:"li"},"<module>-dao/target/project_script.sql"),", remove all SQL not related to the current module and just keep differences. Finally, convert these differences into minimal updates. ")),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"TODO TRAD FR->EN"),Object(o.b)("p",null,"La gestion des structures des bases de donn\xe9es de production n'\xe9tant plus r\xe9alis\xe9e avec HBM2DDL(Hibernate) mais FlyWay, lorsque une entit\xe9 est modifi\xe9e, il faut propager cette modification aux scripts sql permettant la mise en place des structures de bases de donn\xe9es correspondantes."),Object(o.b)("p",null,"Les scripts sont r\xe9alis\xe9s par module et donc disponible dans la couche dao de chacun d'eux. Soit par d\xe9faut, dans le r\xe9pertoire ",Object(o.b)("inlineCode",{parentName:"p"},"<module>/<module>-dao/src/main/resources/scripts/<module>")," (instancescripts pour instance!). "),Object(o.b)("p",null,"Flyway poss\xe9dant une table de m\xe9tadonn\xe9es pour chaque module lui permettant de g\xe9rer le lancement automatique des scripts et de contr\xf4ler la conformit\xe9 des scripts existants avec ceux d\xe9j\xe0 pass\xe9s (somme de contr\xf4le), la mise \xe0 jour de la structure de la base de donn\xe9es peut se traduire :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"avec suppression du sch\xe9ma existant et perte des donn\xe9es"),Object(o.b)("li",{parentName:"ul"},"par la modification d'un script existant,"),Object(o.b)("li",{parentName:"ul"},"ou avec compatibilit\xe9 ascendante (sans perte de donn\xe9es) en cr\xe9ant un nouveau script versionn\xe9.")),Object(o.b)("p",null,"Les scripts respectent le format suivant:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Vx.y.z",Object(o.b)("strong",{parentName:"li"},"*.sql(Version"),'nom.sql, et oui il y a bien 2 "_" entre la version et le nom). Chaque module peut d\xe9finir un fichier "dbmodule.properties" (optionnel) permettant de sp\xe9cifier les d\xe9pendances entre modules.')),Object(o.b)("p",null,"Vous devez vous assurer de :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"d'avoir nomm\xe9 toutes les contraintes d'int\xe9grit\xe9")))}u.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);