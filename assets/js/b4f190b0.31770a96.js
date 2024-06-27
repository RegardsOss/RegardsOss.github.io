"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[63576],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),g=a,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},65194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={id:"1.8-to-1.11",title:"V1.8 to V1.11",slug:"/setup/swarm/migration/1.8-to-1.11"},i=void 0,s={unversionedId:"setup/migration/1.8-to-1.11",id:"version-1.14/setup/migration/1.8-to-1.11",title:"V1.8 to V1.11",description:"Steps to migrate REGARDS from version 1.8 to 1.11",source:"@site/versioned_docs/version-1.14/setup/migration/1.8-to-1.11.md",sourceDirName:"setup/migration",slug:"/setup/swarm/migration/1.8-to-1.11",permalink:"/docs/1.14/setup/swarm/migration/1.8-to-1.11",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/setup/migration/1.8-to-1.11.md",tags:[],version:"1.14",frontMatter:{id:"1.8-to-1.11",title:"V1.8 to V1.11",slug:"/setup/swarm/migration/1.8-to-1.11"},sidebar:"install",previous:{title:"Common issues",permalink:"/docs/1.14/setup/swarm/common-issues"},next:{title:"V1.11 to V1.12",permalink:"/docs/1.14/setup/swarm/migration/1.11-to-1.12"}},l={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Steps to migrate REGARDS from version 1.8 to 1.11"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shutdown REGARDS using the playbook")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook -i [...] regards-shutdown.yml [...]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download last playbook version and move your inventory inside the new playbook"),(0,a.kt)("li",{parentName:"ul"},"Edit your inventory file ",(0,a.kt)("inlineCode",{parentName:"li"},"group_vars/all/main.yml")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Replace \n  version: 1.8.1\n# Into \n  version: 1.11.1\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When this guide has been writen, last version was 1.11.1. Check if there is an updated version available ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/RegardsOss/packages/container/package/rs-authentication"},"here"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Edit your inventory file ",(0,a.kt)("inlineCode",{parentName:"li"},"group_vars/regards_nodes/main.yml")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# Remove property legacy: true from elasticsearch and elasticsearch_logs\n# Before\ngroup_docker_cots:\n  elasticsearch:\n    tag: "{{ group_docker_tags.cots }}"\n    legacy: true\n#  elasticsearch_logs:\n#    tag: "{{ group_docker_tags.cots }}"\n#    legacy: true\n\n# After \ngroup_docker_cots:\n  elasticsearch:\n    tag: "{{ group_docker_tags.cots }}"\n#  elasticsearch_logs:\n#    tag: "{{ group_docker_tags.cots }}"\n\n# Remove property legacy_spring: true\n# Before\ngroup_config_mservices:\n  legacy_spring: true\n  init_project: "{{ global_regards.project_name }}"\n\n# After \ngroup_config_mservices:\n  init_project: "{{ global_regards.project_name }}"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remove files from RabbitMQ and Elasticsearch on every node:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /<path/to/regards>/workspace/\nsudo rm -rf elasticsearch/* rabbitmq/*\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Execute the playbook file ",(0,a.kt)("inlineCode",{parentName:"li"},"regards.yml"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook -i [...] regards.yml [...]\n")))}m.isMDXComponent=!0}}]);