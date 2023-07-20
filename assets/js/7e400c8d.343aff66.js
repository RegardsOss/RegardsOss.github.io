"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[95542],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={id:"1.11-to-1.12",title:"V1.11 to V1.12",slug:"/setup/swarm/migration/1.11-to-1.12"},i=void 0,l={unversionedId:"setup/migration/1.11-to-1.12",id:"setup/migration/1.11-to-1.12",title:"V1.11 to V1.12",description:"Steps to migrate REGARDS from version 1.11 to 1.12",source:"@site/docs/setup/migration/1.11-to-1.12.md",sourceDirName:"setup/migration",slug:"/setup/swarm/migration/1.11-to-1.12",permalink:"/docs/setup/swarm/migration/1.11-to-1.12",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/setup/migration/1.11-to-1.12.md",tags:[],version:"current",frontMatter:{id:"1.11-to-1.12",title:"V1.11 to V1.12",slug:"/setup/swarm/migration/1.11-to-1.12"},sidebar:"install",previous:{title:"V1.8 to V1.11",permalink:"/docs/setup/swarm/migration/1.8-to-1.11"},next:{title:"Tasks",permalink:"/docs/setup/ansible-tasks/"}},s={},u=[],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Steps to migrate REGARDS from version 1.11 to 1.12"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shutdown REGARDS using the playbook")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook -i [...] regards-shutdown.yml [...]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download last playbook version and move your inventory inside the new playbook"),(0,a.kt)("li",{parentName:"ul"},"Edit your inventory file ",(0,a.kt)("inlineCode",{parentName:"li"},"group_vars/all/main.yml")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Replace \n  version: 1.11.1\n# Into \n  version: 1.12.0\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When this guide has been writen, last version was 1.12.0. Check if there is an updated version available ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/RegardsOss/packages/container/package/rs-authentication"},"here"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Edit your inventory file ",(0,a.kt)("inlineCode",{parentName:"li"},"group_vars/regards_nodes/main.yml")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Add new property enable_healthcheck and enable_resource_limits\ngroup_docker_cots_configuration:\n  enable_healthcheck: true\n  enable_resource_limits: true\n  [...]\n\ngroup_config_mservices:\n  enable_healthcheck: true\n  enable_resource_limits: true\n  [...]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install REGARDS using the playbook")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook -i [...] regards.yml [...]\n")))}m.isMDXComponent=!0}}]);