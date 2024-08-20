"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[93367],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=c(a),m=r,g=l["".concat(p,".").concat(m)]||l[m]||u[m]||s;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},99450:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const s={id:"postgres-database",title:"Posgres database",slug:"/setup/swarm/advanced/postgres-database/",sidebar_position:4},o=void 0,i={unversionedId:"setup/swarm/advanced/postgres-database",id:"setup/swarm/advanced/postgres-database",title:"Posgres database",description:"Supported Postgres version: 11",source:"@site/docs/setup/swarm/advanced/swarm-database.md",sourceDirName:"setup/swarm/advanced",slug:"/setup/swarm/advanced/postgres-database/",permalink:"/docs/next/setup/swarm/advanced/postgres-database/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/setup/swarm/advanced/swarm-database.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"postgres-database",title:"Posgres database",slug:"/setup/swarm/advanced/postgres-database/",sidebar_position:4},sidebar:"install",previous:{title:"Logging stack",permalink:"/docs/next/setup/swarm/advanced/logging-stack/"},next:{title:"RabbitMQ",permalink:"/docs/next/setup/swarm/advanced/rabbitmq/"}},p={},c=[],d={toc:c},l="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Supported Postgres version: 11",(0,r.kt)("br",{parentName:"p"}),"\n","Posgis extension: Facultative"),(0,r.kt)("p",null,"Edit your inventory file ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your inventory>/group_vars/regards_nodes/main.yml")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add connection information")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"group_config_mservices:\n  [ ... ]\n  postgres:\n    instance:\n      host: database-inst.cnes.fr\n      port: 5432\n      user: <some user>\n      password: <some password>\n      db: <instance database name>\n    init_project:\n      host: database-first-project.cnes.fr\n      port: 5432\n      user: <some user>\n      password: <some password>\n      db: <first project database name>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"remove the Postgres service that was deployed inside ",(0,r.kt)("inlineCode",{parentName:"li"},"group_docker_cots"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# Before\ngroup_docker_cots:\n  postgres:\n    tag: "{{ group_docker_tags.cots }}"\n    [ ... ]\n\n# After\ngroup_docker_cots:\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if you do not have Postgis on your ",(0,r.kt)("inlineCode",{parentName:"li"},"database-inst.cnes.fr")," database, edit the ",(0,r.kt)("inlineCode",{parentName:"li"},"access_instance")," service to indicate\nthere is no Postgis available:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# Before\ngroup_docker_mservices:\n  access_instance:\n    tag: "{{ group_docker_tags.back }}"\n    [ ... ]\n\n# After\ngroup_docker_mservices:\n  access_instance:\n    tag: "{{ group_docker_tags.back }}"\n    postgis: false\n    [ ... ]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"update the phppgadmin service that was deployed inside ",(0,r.kt)("inlineCode",{parentName:"li"},"group_docker_cots"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"either remove this component, as we did for postgres"),(0,r.kt)("li",{parentName:"ul"},"or edit it like this, to be able to use phppgadmin on your mutualized Postgres:")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  phppgadmin:\n    [ ... ]\n    db:\n      - name: DB Instance\n        host: database-inst.cnes.fr\n        port: 5432\n        defaultdb: <instance database name>\n        theme: cappuccino\n      - name: DB Project\n        host: database-first-project.cnes.fr\n        port: 5432\n        defaultdb: <first project database name>\n        theme: cappuccino\n    setting_main_theme: cappuccino\n")))}u.isMDXComponent=!0}}]);