"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[30302],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(y,s(s({ref:t},u),{},{components:r})):n.createElement(y,s({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"regards-https",title:"Securise using HTTPS",slug:"/setup/swarm/advanced/regards-https/"},s=void 0,i={unversionedId:"setup/advanced/regards-https",id:"setup/advanced/regards-https",title:"Securise using HTTPS",description:"This guide walks you through the configuration to expose REGARDS through HTTPS.",source:"@site/docs/setup/advanced/swarm-regards-https.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/regards-https/",permalink:"/docs/setup/swarm/advanced/regards-https/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/setup/advanced/swarm-regards-https.md",tags:[],version:"current",frontMatter:{id:"regards-https",title:"Securise using HTTPS",slug:"/setup/swarm/advanced/regards-https/"},sidebar:"install",previous:{title:"Networks",permalink:"/docs/setup/swarm/advanced/swarm-networks"},next:{title:"Administration",permalink:"/docs/setup/swarm/cli/"}},p={},l=[],u={toc:l},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide walks you through the configuration to expose REGARDS through HTTPS."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you have a ",(0,a.kt)("inlineCode",{parentName:"li"},"p12")," file, use these commands to generate ",(0,a.kt)("inlineCode",{parentName:"li"},"crt")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"key")," files.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"openssl pkcs12 -in <your domain>.p12 -nocerts -nodes  -out <your domain>.key\nopenssl pkcs12 -in <your domain>.p12 -clcerts -nokeys -out <your domain>.crt \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"<inventory>/group_vars/regards_nodes/files/ssl")," in your inventory then open this folder using your terminal ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Using ",(0,a.kt)("a",{parentName:"p",href:"/docs/setup/swarm/advanced/ansible-vault#encrypt-file"},"Ansible Vault - Encrypt file"),", generates an encrypted version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<your domain>.key")," file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"<your domain>.key")," file without any Ansible Vault encryption (it's not a sensitive information)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Edit your inventory file ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your inventory>/group_vars/regards_nodes/main.yml")," "))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'group_docker_mservices:\n  [...]\n  front:\n    protocol: https\n    host: <your domain>\n    port: 443\n    tag: "{{ group_docker_tags.front }}"\n    ssl:\n      crt: <your domain>.crt\n      key: <your domain>.key\n')),(0,a.kt)("p",null,"That's it ! Deploy using Ansible then connect to REGARDS using ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<your domain>")))}d.isMDXComponent=!0}}]);