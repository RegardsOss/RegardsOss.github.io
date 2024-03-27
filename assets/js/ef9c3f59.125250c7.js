"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[33243],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=c(n),g=r,m=l["".concat(p,".").concat(g)]||l[g]||u[g]||s;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},68201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const s={id:"postgres-database",title:"Posgres database",slug:"/setup/swarm/advanced/postgres-database/"},o=void 0,i={unversionedId:"setup/advanced/postgres-database",id:"setup/advanced/postgres-database",title:"Posgres database",description:"Supported Postgres version: 11",source:"@site/docs/setup/advanced/swarm-database.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/postgres-database/",permalink:"/docs/next/setup/swarm/advanced/postgres-database/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/setup/advanced/swarm-database.md",tags:[],version:"current",frontMatter:{id:"postgres-database",title:"Posgres database",slug:"/setup/swarm/advanced/postgres-database/"},sidebar:"install",previous:{title:"Logging stack",permalink:"/docs/next/setup/swarm/advanced/logging-stack/"},next:{title:"MinIO",permalink:"/docs/next/setup/swarm/advanced/minio/"}},p={},c=[],d={toc:c},l="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(l,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Supported Postgres version: 11",(0,r.yg)("br",{parentName:"p"}),"\n","Posgis extension: Facultative "),(0,r.yg)("p",null,"Edit your inventory file ",(0,r.yg)("inlineCode",{parentName:"p"},"inventories/<your inventory>/group_vars/regards_nodes/main.yml")," "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"add connection information")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"group_config_mservices:\n  [...]\n  postgres:\n    instance:\n      host: database-inst.cnes.fr\n      port: 5432\n      user: <some user>\n      password: <some password>\n      db: <instance database name>\n    init_project:\n      host: database-first-project.cnes.fr\n      port: 5432\n      user: <some user>\n      password: <some password>\n      db: <first project database name>\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"remove the Postgres service that was deployed inside ",(0,r.yg)("inlineCode",{parentName:"li"},"group_docker_cots"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'# Before\ngroup_docker_cots:\n  postgres:\n    tag: "{{ group_docker_tags.cots }}"\n    [...]\n\n# After\ngroup_docker_cots:\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"if you do not have Postgis on your ",(0,r.yg)("inlineCode",{parentName:"li"},"database-inst.cnes.fr")," database, edit the ",(0,r.yg)("inlineCode",{parentName:"li"},"access_instance")," service to indicate there is no Postgis available:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'# Before\ngroup_docker_mservices:\n  access_instance:\n    tag: "{{ group_docker_tags.back }}"\n    [...]\n\n# After\ngroup_docker_mservices:\n  access_instance:\n    tag: "{{ group_docker_tags.back }}"\n    postgis: false\n    [...]\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"update the phppgadmin service that was deployed inside ",(0,r.yg)("inlineCode",{parentName:"li"},"group_docker_cots"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"either remove this component, as we did for postgres"),(0,r.yg)("li",{parentName:"ul"},"or edit it like this, to be able to use phppgadmin on your mutualized Postgres: ")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"  phppgadmin:\n    [...]\n    db: \n      - name: DB Instance\n        host: database-inst.cnes.fr\n        port: 5432\n        defaultdb: <instance database name>\n        theme: cappuccino\n      - name: DB Project\n        host: database-first-project.cnes.fr\n        port: 5432\n        defaultdb: <first project database name>\n        theme: cappuccino\n    setting_main_theme: cappuccino\n")))}u.isMDXComponent=!0}}]);