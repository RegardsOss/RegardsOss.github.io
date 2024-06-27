"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[81659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"regards-https",title:"Securise using HTTPS",slug:"/setup/swarm/advanced/regards-https/"},i=void 0,s={unversionedId:"setup/advanced/regards-https",id:"version-1.11.0/setup/advanced/regards-https",title:"Securise using HTTPS",description:"This guide walks you through the configuration to expose REGARDS through HTTPS.",source:"@site/versioned_docs/version-1.11.0/setup/advanced/swarm-regards-https.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/regards-https/",permalink:"/docs/1.11.0/setup/swarm/advanced/regards-https/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/setup/advanced/swarm-regards-https.md",tags:[],version:"1.11.0",frontMatter:{id:"regards-https",title:"Securise using HTTPS",slug:"/setup/swarm/advanced/regards-https/"},sidebar:"install",previous:{title:"Networks",permalink:"/docs/1.11.0/setup/swarm/advanced/swarm-networks"},next:{title:"Administration",permalink:"/docs/1.11.0/setup/swarm/cli/"}},p={},l=[],u={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide walks you through the configuration to expose REGARDS through HTTPS."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you have a ",(0,a.kt)("inlineCode",{parentName:"li"},"p12")," file, use these commands to generate ",(0,a.kt)("inlineCode",{parentName:"li"},"crt")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"key")," files.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"openssl pkcs12 -in <your domain>.p12 -nocerts -out         <your domain>.key\nopenssl pkcs12 -in <your domain>.p12 -clcerts -nokeys -out <your domain>.crt \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the ",(0,a.kt)("inlineCode",{parentName:"li"},"<your domain>.key")," file contains ",(0,a.kt)("inlineCode",{parentName:"li"},"BEGIN ENCRYPTED PRIVATE KEY"),", you need to remove the encryption by doing:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Rename the file\nmv <your domain>.key <your domain>.encrypted.key\n# Remove the encryption by giving your temporary pass phrase\nopenssl rsa -in <your domain>.encrypted.key -out <your domain>.key\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"<inventory>/group_vars/regards_nodes/files/ssl")," in your inventory then open this folder using your terminal ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Using ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.11.0/setup/swarm/advanced/ansible-vault#encrypt-file"},"Ansible Vault - Encrypt file"),", generates an encrypted version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<your domain>.key")," file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"<your domain>.key")," file without any Ansible Vault encryption (it's not a sensitive information)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Edit your inventory file ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your inventory>/group_vars/regards_nodes/main.yml")," "))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'group_docker_mservices:\n  [...]\n  front:\n    protocol: https\n    host: <your domain>\n    port: 443\n    tag: "{{ group_docker_tags.front }}"\n    ssl:\n      crt: <your domain>.crt\n      key: <your domain>.key\n')),(0,a.kt)("p",null,"That's it ! Deploy using Ansible then connect to REGARDS using ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<your domain>")))}d.isMDXComponent=!0}}]);