"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[96664],{72741:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=n(74848),a=n(28453);const r={id:"postgres-database",title:"Posgres database",slug:"/setup/swarm/advanced/postgres-database/"},o=void 0,i={id:"setup/advanced/postgres-database",title:"Posgres database",description:"Supported Postgres version: 11",source:"@site/versioned_docs/version-1.13.0/setup/advanced/swarm-database.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/postgres-database/",permalink:"/docs/1.13.0/setup/swarm/advanced/postgres-database/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/setup/advanced/swarm-database.md",tags:[],version:"1.13.0",frontMatter:{id:"postgres-database",title:"Posgres database",slug:"/setup/swarm/advanced/postgres-database/"},sidebar:"install",previous:{title:"Deploy required microservices",permalink:"/docs/1.13.0/setup/swarm/advanced/microservice-setup"},next:{title:"Microservices optimizations",permalink:"/docs/1.13.0/setup/swarm/advanced/optimizations/"}},d={},c=[];function p(e){const s={br:"br",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Supported Postgres version: 11",(0,t.jsx)(s.br,{}),"\n","Posgis extension: Facultative"]}),"\n",(0,t.jsxs)(s.p,{children:["Edit your inventory file ",(0,t.jsx)(s.code,{children:"inventories/<your inventory>/group_vars/regards_nodes/main.yml"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"add connection information"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"group_config_mservices:\n  [...]\n  postgres:\n    instance:\n      host: database-inst.cnes.fr\n      port: 5432\n      user: <some user>\n      password: <some password>\n      db: <instance database name>\n    init_project:\n      host: database-first-project.cnes.fr\n      port: 5432\n      user: <some user>\n      password: <some password>\n      db: <first project database name>\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["remove the Postgres service that was deployed inside ",(0,t.jsx)(s.code,{children:"group_docker_cots"})]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'# Before\ngroup_docker_cots:\n  postgres:\n    tag: "{{ group_docker_tags.cots }}"\n    [...]\n\n# After\ngroup_docker_cots:\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["if you do not have Postgis on your ",(0,t.jsx)(s.code,{children:"database-inst.cnes.fr"})," database, edit the ",(0,t.jsx)(s.code,{children:"access_instance"})," service to indicate there is no Postgis available:"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'# Before\ngroup_docker_mservices:\n  access_instance:\n    tag: "{{ group_docker_tags.back }}"\n    [...]\n\n# After\ngroup_docker_mservices:\n  access_instance:\n    tag: "{{ group_docker_tags.back }}"\n    postgis: false\n    [...]\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["update the phppgadmin service that was deployed inside ",(0,t.jsx)(s.code,{children:"group_docker_cots"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"either remove this component, as we did for postgres"}),"\n",(0,t.jsx)(s.li,{children:"or edit it like this, to be able to use phppgadmin on your mutualized Postgres:"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"  phppgadmin:\n    [...]\n    db: \n      - name: DB Instance\n        host: database-inst.cnes.fr\n        port: 5432\n        defaultdb: <instance database name>\n        theme: cappuccino\n      - name: DB Project\n        host: database-first-project.cnes.fr\n        port: 5432\n        defaultdb: <first project database name>\n        theme: cappuccino\n    setting_main_theme: cappuccino\n"})})]})}function l(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>i});var t=n(96540);const a={},r=t.createContext(a);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);