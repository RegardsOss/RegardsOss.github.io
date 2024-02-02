"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[63908],{95788:(e,n,r)=>{r.d(n,{Iu:()=>u,yg:()=>g});var t=r(11504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),d=a,g=c["".concat(p,".").concat(d)]||c[d]||y[d]||o;return r?t.createElement(g,i(i({ref:n},u),{},{components:r})):t.createElement(g,i({ref:n},u))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49944:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=r(45072),a=(r(11504),r(95788));const o={id:"regards-https",title:"Securise using HTTPS",slug:"/setup/swarm/advanced/regards-https/"},i=void 0,s={unversionedId:"setup/advanced/regards-https",id:"version-1.12.0/setup/advanced/regards-https",title:"Securise using HTTPS",description:"This guide walks you through the configuration to expose REGARDS through HTTPS.",source:"@site/versioned_docs/version-1.12.0/setup/advanced/swarm-regards-https.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/regards-https/",permalink:"/docs/1.12.0/setup/swarm/advanced/regards-https/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/setup/advanced/swarm-regards-https.md",tags:[],version:"1.12.0",frontMatter:{id:"regards-https",title:"Securise using HTTPS",slug:"/setup/swarm/advanced/regards-https/"},sidebar:"install",previous:{title:"Networks",permalink:"/docs/1.12.0/setup/swarm/advanced/swarm-networks"},next:{title:"Administration",permalink:"/docs/1.12.0/setup/swarm/cli/"}},p={},l=[],u={toc:l},c="wrapper";function y(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.c)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This guide walks you through the configuration to expose REGARDS through HTTPS."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"If you have a ",(0,a.yg)("inlineCode",{parentName:"li"},"p12")," file, use these commands to generate ",(0,a.yg)("inlineCode",{parentName:"li"},"crt")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"key")," files.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"openssl pkcs12 -in <your domain>.p12 -nocerts -out         <your domain>.key\nopenssl pkcs12 -in <your domain>.p12 -clcerts -nokeys -out <your domain>.crt \n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"If the ",(0,a.yg)("inlineCode",{parentName:"li"},"<your domain>.key")," file contains ",(0,a.yg)("inlineCode",{parentName:"li"},"BEGIN ENCRYPTED PRIVATE KEY"),", you need to remove the encryption by doing:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# Rename the file\nmv <your domain>.key <your domain>.encrypted.key\n# Remove the encryption by giving your temporary pass phrase\nopenssl rsa -in <your domain>.encrypted.key -out <your domain>.key\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Create the folder ",(0,a.yg)("inlineCode",{parentName:"p"},"<inventory>/group_vars/regards_nodes/files/ssl")," in your inventory then open this folder using your terminal ")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Using ",(0,a.yg)("a",{parentName:"p",href:"/docs/1.12.0/setup/swarm/advanced/ansible-vault#encrypt-file"},"Ansible Vault - Encrypt file"),", generates an encrypted version of the ",(0,a.yg)("inlineCode",{parentName:"p"},"<your domain>.key")," file")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Copy the ",(0,a.yg)("inlineCode",{parentName:"p"},"<your domain>.key")," file without any Ansible Vault encryption (it's not a sensitive information)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Edit your inventory file ",(0,a.yg)("inlineCode",{parentName:"p"},"inventories/<your inventory>/group_vars/regards_nodes/main.yml")," "))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'group_docker_mservices:\n  [...]\n  front:\n    protocol: https\n    host: <your domain>\n    port: 443\n    tag: "{{ group_docker_tags.front }}"\n    ssl:\n      crt: <your domain>.crt\n      key: <your domain>.key\n')),(0,a.yg)("p",null,"That's it ! Deploy using Ansible then connect to REGARDS using ",(0,a.yg)("inlineCode",{parentName:"p"},"https://<your domain>")))}y.isMDXComponent=!0}}]);