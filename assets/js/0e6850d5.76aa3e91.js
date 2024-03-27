"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[96862],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=a,y=c["".concat(s,".").concat(g)]||c[g]||m[g]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},32863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={id:"1.12-to-1.13",title:"V1.12 to V1.13",slug:"/setup/swarm/migration/1.12-to-1.13"},i=void 0,l={unversionedId:"setup/migration/1.12-to-1.13",id:"version-1.14/setup/migration/1.12-to-1.13",title:"V1.12 to V1.13",description:"Steps to migrate REGARDS from version 1.12 to 1.13",source:"@site/versioned_docs/version-1.14/setup/migration/1.12-to-1.13.md",sourceDirName:"setup/migration",slug:"/setup/swarm/migration/1.12-to-1.13",permalink:"/docs/setup/swarm/migration/1.12-to-1.13",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/setup/migration/1.12-to-1.13.md",tags:[],version:"1.14",frontMatter:{id:"1.12-to-1.13",title:"V1.12 to V1.13",slug:"/setup/swarm/migration/1.12-to-1.13"},sidebar:"install",previous:{title:"V1.11 to V1.12",permalink:"/docs/setup/swarm/migration/1.11-to-1.12"},next:{title:"V1.13 to V1.14",permalink:"/docs/setup/swarm/migration/1.13-to-1.14"}},s={},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Steps to migrate REGARDS from version 1.12 to 1.13"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Shutdown REGARDS using the playbook")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook -i [...] regards-shutdown.yml [...]\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Download last playbook version and move your inventory inside the new playbook"),(0,a.yg)("li",{parentName:"ul"},"Edit your inventory file ",(0,a.yg)("inlineCode",{parentName:"li"},"group_vars/all/main.yml")," :")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"# Replace \n  version: 1.12.0\n# Into \n  version: 1.13.1\n")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"When this guide has been writen, last version was 1.13.1. Check if there is an updated version available ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/orgs/RegardsOss/packages/container/package/rs-authentication"},"here"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add a property ",(0,a.yg)("inlineCode",{parentName:"li"},"active_mail_on_admin_instance")," inside your inventory file ",(0,a.yg)("inlineCode",{parentName:"li"},"group_vars/regards_nodes/main.yml"),":")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"# Add new property active_mail_on_admin_instance\ngroup_config_mservices:\n  enable_healthcheck: true\n  enable_resource_limits: true\n  active_mail_on_admin_instance: true\n  [...]\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Also, add a property ",(0,a.yg)("inlineCode",{parentName:"p"},"security")," inside the same file to the frontend service:"),(0,a.yg)("p",{parentName:"li"},"on the front service:"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"group_docker_mservices:\n  [...]\n  front:\n    [...]\n    securised: true\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Install REGARDS using the playbook")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook -i [...] regards.yml [...]\n")))}m.isMDXComponent=!0}}]);