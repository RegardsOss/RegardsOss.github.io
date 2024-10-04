"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[60431],{97111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(74848),o=n(28453);const r={layout:"classic-docs",title:"Database Migration",sidebar_label:"Database Migration",sidebar_position:1,"short-title":"Database migration"},s=void 0,a={id:"development/framework/modules/generate-db-migration",title:"Database Migration",description:"How to generate script migration",source:"@site/docs/development/framework/modules/generate-db-migration.md",sourceDirName:"development/framework/modules",slug:"/development/framework/modules/generate-db-migration",permalink:"/docs/development/framework/modules/generate-db-migration",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/framework/modules/generate-db-migration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{layout:"classic-docs",title:"Database Migration",sidebar_label:"Database Migration",sidebar_position:1,"short-title":"Database migration"},sidebar:"dev",previous:{title:"Getting started",permalink:"/docs/development/backend/framework/getting-started/"},next:{title:"Jobs",permalink:"/docs/development/backend/framework/modules/jobs/"}},d={},l=[{value:"How to generate script migration",id:"how-to-generate-script-migration",level:2},{value:"Overview",id:"overview",level:2}];function c(e){const t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"how-to-generate-script-migration",children:"How to generate script migration"}),"\n",(0,i.jsx)(t.p,{children:"We're using the automatic generation of HBM2DDL to migrate without loosing data. Here is what you should do :"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Create a class test in your DAO layer nammed ",(0,i.jsx)(t.code,{children:"*Generator*"})]}),"\n",(0,i.jsxs)(t.li,{children:["Make that class extends ",(0,i.jsx)(t.code,{children:"AbstractScriptGeneratorTest"})]}),"\n",(0,i.jsx)(t.li,{children:"Remove and recreate public schema on the PostGres database that you use on tests"}),"\n",(0,i.jsx)(t.li,{children:"Run your class test"}),"\n",(0,i.jsxs)(t.li,{children:["Open the file ",(0,i.jsx)(t.code,{children:"<module>-dao/target/project_script.sql"})]}),"\n",(0,i.jsxs)(t.li,{children:["Create your own migration script ",(0,i.jsx)(t.code,{children:"<module>-dao/src/main/resources/scripts/Vx.y.z__<description>.sql"})]}),"\n",(0,i.jsxs)(t.li,{children:["On the content of ",(0,i.jsx)(t.code,{children:"<module>-dao/target/project_script.sql"}),", remove all SQL not related to the current module and just\nkeep differences. Finally, convert these differences into minimal updates."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"As the management of production database structures is no longer carried out with HBM2DDL(Hibernate) but with FlyWay,\nwhen an entity is modified, this modification must be propagated to the sql scripts enabling the corresponding database\nstructures to be set up."}),"\n",(0,i.jsxs)(t.p,{children:["Scripts are created for each module and are therefore available in the dao layer for each module. By default, in the\ndirectory ",(0,i.jsx)(t.code,{children:"<module>/<module>-dao/src/main/resources/scripts/<module>"})," (instancescripts for instance!)."]}),"\n",(0,i.jsx)(t.p,{children:"As Flyway has a metadata table for each module, enabling it to manage the automatic launch of scripts and to check the\nconformity of existing scripts with those already passed (checksum), updating the database structure can result in :"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"deleting the existing schema and losing the data"}),"\n",(0,i.jsx)(t.li,{children:"by modifying an existing script,"}),"\n",(0,i.jsx)(t.li,{children:"or with backward compatibility (without loss of data) by creating a new versioned script."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Scripts follow the following format : ",(0,i.jsx)(t.strong,{children:"Vx.y.z__name.sql"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Each module can define a \u2018dbmodule.properties\u2019 file (optional) to specify the dependencies between modules."})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);