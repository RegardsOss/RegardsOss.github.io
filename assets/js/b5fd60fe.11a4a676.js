"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[12795],{2289:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=n(74848),a=n(28453);const r={id:"postgres-database",title:"Posgres database",slug:"/setup/swarm/advanced/postgres-database/",sidebar_position:4},o=void 0,i={id:"setup/swarm/advanced/postgres-database",title:"Posgres database",description:"Supported Postgres version: 11",source:"@site/docs/setup/swarm/advanced/swarm-database.md",sourceDirName:"setup/swarm/advanced",slug:"/setup/swarm/advanced/postgres-database/",permalink:"/docs/setup/swarm/advanced/postgres-database/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/setup/swarm/advanced/swarm-database.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"postgres-database",title:"Posgres database",slug:"/setup/swarm/advanced/postgres-database/",sidebar_position:4},sidebar:"install",previous:{title:"Logging stack",permalink:"/docs/setup/swarm/advanced/logging-stack/"},next:{title:"RabbitMQ",permalink:"/docs/setup/swarm/advanced/rabbitmq/"}},d={},c=[{value:"Configure phppgadmin",id:"configure-phppgadmin",level:3},{value:"Use internal postgres",id:"use-internal-postgres",level:4},{value:"Use external postgres",id:"use-external-postgres",level:4},{value:"Use external postgres",id:"use-external-postgres-1",level:3}];function p(e){const s={br:"br",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Supported Postgres version: 11",(0,t.jsx)(s.br,{}),"\n","Posgis extension: Facultative"]}),"\n",(0,t.jsx)(s.h3,{id:"configure-phppgadmin",children:"Configure phppgadmin"}),"\n",(0,t.jsx)(s.h4,{id:"use-internal-postgres",children:"Use internal postgres"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"No yet documented"})}),"\n",(0,t.jsx)(s.h4,{id:"use-external-postgres",children:"Use external postgres"}),"\n",(0,t.jsxs)(s.p,{children:["Edit your inventory file ",(0,t.jsx)(s.code,{children:"inventories/<your inventory>/group_vars/regards_nodes/main.yml"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"  phppgadmin:\n    [ ... ]\n    db:\n      - name: DB Instance\n        host: database-inst.cnes.fr\n        port: 5432\n        defaultdb: <instance database name>\n        theme: cappuccino\n      - name: DB Project\n        host: database-first-project.cnes.fr\n        port: 5432\n        defaultdb: <first project database name>\n        theme: cappuccino\n    setting_main_theme: cappuccino\n"})}),"\n",(0,t.jsx)(s.h3,{id:"use-external-postgres-1",children:"Use external postgres"}),"\n",(0,t.jsxs)(s.p,{children:["Edit your inventory file ",(0,t.jsx)(s.code,{children:"inventories/<your inventory>/group_vars/regards_nodes/main.yml"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"add connection information"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'group_config_mservices:\n  [ ... ]\n  postgres:\n    instance:\n      host: database-inst.cnes.fr\n      port: 5432\n      db: <instance database name>\n      user: <some user>\n      password: "{{ regards_vault.group_config_mservices.postgres.instance.password }}"\n    init_project:\n      host: database-first-project.cnes.fr\n      port: 5432\n      db: <first project database name>\n      user: <some user>\n      password: "{{ regards_vault.group_config_mservices.init_project.instance.password }}"\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["remove the Postgres service that was deployed inside ",(0,t.jsx)(s.code,{children:"group_docker_cots"})]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'# Before\ngroup_docker_cots:\n  postgres:\n    tag: "{{ group_docker_tags.cots }}"\n    [ ... ]\n\n# After\ngroup_docker_cots:\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["if you do not have Postgis on your ",(0,t.jsx)(s.code,{children:"database-inst.cnes.fr"})," database, edit the ",(0,t.jsx)(s.code,{children:"access_instance"})," service to indicate\nthere is no Postgis available:"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'# Before\ngroup_docker_mservices:\n  access_instance:\n    tag: "{{ group_docker_tags.back }}"\n    [ ... ]\n\n# After\ngroup_docker_mservices:\n  access_instance:\n    tag: "{{ group_docker_tags.back }}"\n    postgis: false\n    [ ... ]\n'})})]})}function l(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>i});var t=n(96540);const a={},r=t.createContext(a);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);