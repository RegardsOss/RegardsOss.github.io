"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[91192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=c(n),m=a,g=l["".concat(p,".").concat(m)]||l[m]||u[m]||s;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={id:"postgres-database",title:"Posgres database",slug:"/setup/swarm/advanced/postgres-database/"},o=void 0,i={unversionedId:"setup/advanced/postgres-database",id:"version-1.11.0/setup/advanced/postgres-database",title:"Posgres database",description:"Supported Postgres version: 11",source:"@site/versioned_docs/version-1.11.0/setup/advanced/swarm-database.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/postgres-database/",permalink:"/docs/1.11.0/setup/swarm/advanced/postgres-database/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/setup/advanced/swarm-database.md",tags:[],version:"1.11.0",frontMatter:{id:"postgres-database",title:"Posgres database",slug:"/setup/swarm/advanced/postgres-database/"},sidebar:"install",previous:{title:"Deploy required microservices",permalink:"/docs/1.11.0/setup/swarm/advanced/microservice-setup"},next:{title:"Microservices optimizations",permalink:"/docs/1.11.0/setup/swarm/advanced/optimizations/"}},p={},c=[],d={toc:c},l="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Supported Postgres version: 11",(0,a.kt)("br",{parentName:"p"}),"\n","Posgis extension: Facultative "),(0,a.kt)("p",null,"Edit your inventory file ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your inventory>/group_vars/regards_nodes/main.yml")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add connection information")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"group_config_mservices:\n  [...]\n  postgres:\n    instance:\n      host: database-inst.cnes.fr\n      port: 5432\n      user: <some user>\n      password: <some password>\n      db: <instance database name>\n    init_project:\n      host: database-first-project.cnes.fr\n      port: 5432\n      user: <some user>\n      password: <some password>\n      db: <first project database name>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"remove the Postgres service that was deployed inside ",(0,a.kt)("inlineCode",{parentName:"li"},"group_docker_cots"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# Before\ngroup_docker_cots:\n  postgres:\n    tag: "{{ group_docker_tags.cots }}"\n    [...]\n\n# After\ngroup_docker_cots:\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if you do not have Postgis on your ",(0,a.kt)("inlineCode",{parentName:"li"},"database-inst.cnes.fr")," database, edit the ",(0,a.kt)("inlineCode",{parentName:"li"},"access_instance")," service to indicate there is no Postgis available:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# Before\ngroup_docker_mservices:\n  access_instance:\n    tag: "{{ group_docker_tags.back }}"\n    [...]\n\n# After\ngroup_docker_mservices:\n  access_instance:\n    tag: "{{ group_docker_tags.back }}"\n    postgis: false\n    [...]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"update the phppgadmin service that was deployed inside ",(0,a.kt)("inlineCode",{parentName:"li"},"group_docker_cots"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"either remove this component, as we did for postgres"),(0,a.kt)("li",{parentName:"ul"},"or edit it like this, to be able to use phppgadmin on your mutualized Postgres: ")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  phppgadmin:\n    [...]\n    db: \n      - name: DB Instance\n        host: database-inst.cnes.fr\n        port: 5432\n        defaultdb: <instance database name>\n        theme: cappuccino\n      - name: DB Project\n        host: database-first-project.cnes.fr\n        port: 5432\n        defaultdb: <first project database name>\n        theme: cappuccino\n    setting_main_theme: cappuccino\n")))}u.isMDXComponent=!0}}]);