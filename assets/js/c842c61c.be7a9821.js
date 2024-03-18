"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[16275],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),y=a,g=c["".concat(p,".").concat(y)]||c[y]||d[y]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},45738:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(58168),a=(r(96540),r(15680));const o={id:"regards-https",title:"Securise using HTTPS",slug:"/setup/swarm/advanced/regards-https/"},i=void 0,s={unversionedId:"setup/advanced/regards-https",id:"setup/advanced/regards-https",title:"Securise using HTTPS",description:"This guide walks you through the configuration to expose REGARDS through HTTPS.",source:"@site/docs/setup/advanced/swarm-regards-https.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/regards-https/",permalink:"/docs/setup/swarm/advanced/regards-https/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/setup/advanced/swarm-regards-https.md",tags:[],version:"current",frontMatter:{id:"regards-https",title:"Securise using HTTPS",slug:"/setup/swarm/advanced/regards-https/"},sidebar:"install",previous:{title:"Networks",permalink:"/docs/setup/swarm/advanced/swarm-networks"},next:{title:"Web Application Firewall",permalink:"/docs/setup/swarm/advanced/web-application-firewall/"}},p={},l=[],u={toc:l},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This guide walks you through the configuration to expose REGARDS through HTTPS."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"If you have a ",(0,a.yg)("inlineCode",{parentName:"li"},"p12")," file, use these commands to generate ",(0,a.yg)("inlineCode",{parentName:"li"},"crt")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"key")," files.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"openssl pkcs12 -in <your domain>.p12 -nocerts -nodes  -out <your domain>.key\nopenssl pkcs12 -in <your domain>.p12 -clcerts -nokeys -out <your domain>.crt \n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Create the folder ",(0,a.yg)("inlineCode",{parentName:"p"},"<inventory>/group_vars/regards_nodes/files/ssl")," in your inventory then open this folder using your terminal ")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Using ",(0,a.yg)("a",{parentName:"p",href:"/docs/setup/swarm/advanced/ansible-vault#encrypt-file"},"Ansible Vault - Encrypt file"),", generates an encrypted version of the ",(0,a.yg)("inlineCode",{parentName:"p"},"<your domain>.key")," file")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Copy the ",(0,a.yg)("inlineCode",{parentName:"p"},"<your domain>.crt")," file without any Ansible Vault encryption (it's not a sensitive information) to the folder ",(0,a.yg)("inlineCode",{parentName:"p"},"<inventory>/group_vars/regards_nodes/files/ssl/"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Edit your inventory file ",(0,a.yg)("inlineCode",{parentName:"p"},"inventories/<your inventory>/group_vars/regards_nodes/main.yml")," "))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'group_docker_mservices:\n  [...]\n  front:\n    protocol: https\n    host: <your domain>\n    port: 443\n    tag: "{{ group_docker_tags.front }}"\n    ssl:\n      crt: <your domain>.crt\n      key: <your domain>.key\n')),(0,a.yg)("p",null,"That's it ! Deploy using Ansible then connect to REGARDS using ",(0,a.yg)("inlineCode",{parentName:"p"},"https://<your domain>")))}d.isMDXComponent=!0}}]);