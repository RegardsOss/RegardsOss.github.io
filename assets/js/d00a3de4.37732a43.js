"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[99264],{57317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(74848),r=n(28453);const i={layout:"classic-docs",title:"Generate Database Migration","short-title":"Database migration"},o=void 0,a={id:"development/backend/framework/module/generate-db-migration",title:"Generate Database Migration",description:"How to generate script migration",source:"@site/versioned_docs/version-1.14/development/backend/framework/module/generate-db-migration.md",sourceDirName:"development/backend/framework/module",slug:"/development/backend/framework/module/generate-db-migration",permalink:"/docs/1.14/development/backend/framework/module/generate-db-migration",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/framework/module/generate-db-migration.md",tags:[],version:"1.14",frontMatter:{layout:"classic-docs",title:"Generate Database Migration","short-title":"Database migration"}},d={},c=[{value:"How to generate script migration",id:"how-to-generate-script-migration",level:2},{value:"Overview",id:"overview",level:2}];function l(e){const t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"how-to-generate-script-migration",children:"How to generate script migration"}),"\n",(0,s.jsx)(t.p,{children:"We're using the automatic generation of HBM2DDL to migrate without loosing data. Here is what you should do :"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Create a class test in your DAO layer nammed ",(0,s.jsx)(t.code,{children:"*Generator*"})]}),"\n",(0,s.jsxs)(t.li,{children:["Make that class extends ",(0,s.jsx)(t.code,{children:"AbstractScriptGeneratorTest"})]}),"\n",(0,s.jsx)(t.li,{children:"Remove and recreate public schema on the PostGres database that you use on tests"}),"\n",(0,s.jsx)(t.li,{children:"Run your class test"}),"\n",(0,s.jsxs)(t.li,{children:["Open the file ",(0,s.jsx)(t.code,{children:"<module>-dao/target/project_script.sql"})]}),"\n",(0,s.jsxs)(t.li,{children:["Create your own migration script ",(0,s.jsx)(t.code,{children:"<module>-dao/src/main/resources/scripts/Vx.y.z__<description>.sql"})]}),"\n",(0,s.jsxs)(t.li,{children:["On the content of ",(0,s.jsx)(t.code,{children:"<module>-dao/target/project_script.sql"}),", remove all SQL not related to the current module and just keep differences. Finally, convert these differences into minimal updates."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"TODO TRAD FR->EN"}),"\n",(0,s.jsx)(t.p,{children:"La gestion des structures des bases de donn\xe9es de production n'\xe9tant plus r\xe9alis\xe9e avec HBM2DDL(Hibernate) mais FlyWay, lorsque une entit\xe9 est modifi\xe9e, il faut propager cette modification aux scripts sql permettant la mise en place des structures de bases de donn\xe9es correspondantes."}),"\n",(0,s.jsxs)(t.p,{children:["Les scripts sont r\xe9alis\xe9s par module et donc disponible dans la couche dao de chacun d'eux. Soit par d\xe9faut, dans le r\xe9pertoire ",(0,s.jsx)(t.code,{children:"<module>/<module>-dao/src/main/resources/scripts/<module>"})," (instancescripts pour instance!)."]}),"\n",(0,s.jsx)(t.p,{children:"Flyway poss\xe9dant une table de m\xe9tadonn\xe9es pour chaque module lui permettant de g\xe9rer le lancement automatique des scripts et de contr\xf4ler la conformit\xe9 des scripts existants avec ceux d\xe9j\xe0 pass\xe9s (somme de contr\xf4le), la mise \xe0 jour de la structure de la base de donn\xe9es peut se traduire :"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"avec suppression du sch\xe9ma existant et perte des donn\xe9es"}),"\n",(0,s.jsx)(t.li,{children:"par la modification d'un script existant,"}),"\n",(0,s.jsx)(t.li,{children:"ou avec compatibilit\xe9 ascendante (sans perte de donn\xe9es) en cr\xe9ant un nouveau script versionn\xe9."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Les scripts respectent le format suivant:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'Vx.y.z__*.sql(Version__nom.sql, et oui il y a bien 2 "_" entre la version et le nom). Chaque module peut d\xe9finir un fichier "dbmodule.properties" (optionnel) permettant de sp\xe9cifier les d\xe9pendances entre modules.'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Vous devez vous assurer de :"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"d'avoir nomm\xe9 toutes les contraintes d'int\xe9grit\xe9"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);