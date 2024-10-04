"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[71120],{758:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=s(74848),t=s(28453);const o={id:"regards-https",title:"Securise using HTTPS",slug:"/setup/swarm/advanced/regards-https/"},i=void 0,d={id:"setup/advanced/regards-https",title:"Securise using HTTPS",description:"This guide walks you through the configuration to expose REGARDS through HTTPS.",source:"@site/versioned_docs/version-1.13.0/setup/advanced/swarm-regards-https.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/regards-https/",permalink:"/docs/1.13.0/setup/swarm/advanced/regards-https/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/setup/advanced/swarm-regards-https.md",tags:[],version:"1.13.0",frontMatter:{id:"regards-https",title:"Securise using HTTPS",slug:"/setup/swarm/advanced/regards-https/"},sidebar:"install",previous:{title:"Networks",permalink:"/docs/1.13.0/setup/swarm/advanced/swarm-networks"},next:{title:"Administration",permalink:"/docs/1.13.0/setup/swarm/cli/"}},a={},c=[];function l(e){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This guide walks you through the configuration to expose REGARDS through HTTPS."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you have a ",(0,r.jsx)(n.code,{children:"p12"})," file, use these commands to generate ",(0,r.jsx)(n.code,{children:"crt"})," and ",(0,r.jsx)(n.code,{children:"key"})," files."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl pkcs12 -in <your domain>.p12 -nocerts -out         <your domain>.key\nopenssl pkcs12 -in <your domain>.p12 -clcerts -nokeys -out <your domain>.crt \n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the ",(0,r.jsx)(n.code,{children:"<your domain>.key"})," file contains ",(0,r.jsx)(n.code,{children:"BEGIN ENCRYPTED PRIVATE KEY"}),", you need to remove the encryption by doing:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Rename the file\nmv <your domain>.key <your domain>.encrypted.key\n# Remove the encryption by giving your temporary pass phrase\nopenssl rsa -in <your domain>.encrypted.key -out <your domain>.key\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create the folder ",(0,r.jsx)(n.code,{children:"<inventory>/group_vars/regards_nodes/files/ssl"})," in your inventory then open this folder using your terminal"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.a,{href:"/docs/1.13.0/setup/swarm/advanced/ansible-vault#encrypt-file",children:"Ansible Vault - Encrypt file"}),", generates an encrypted version of the ",(0,r.jsx)(n.code,{children:"<your domain>.key"})," file"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Copy the ",(0,r.jsx)(n.code,{children:"<your domain>.key"})," file without any Ansible Vault encryption (it's not a sensitive information)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Edit your inventory file ",(0,r.jsx)(n.code,{children:"inventories/<your inventory>/group_vars/regards_nodes/main.yml"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'group_docker_mservices:\n  [...]\n  front:\n    protocol: https\n    host: <your domain>\n    port: 443\n    tag: "{{ group_docker_tags.front }}"\n    ssl:\n      crt: <your domain>.crt\n      key: <your domain>.key\n'})}),"\n",(0,r.jsxs)(n.p,{children:["That's it ! Deploy using Ansible then connect to REGARDS using ",(0,r.jsx)(n.code,{children:"https://<your domain>"})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var r=s(96540);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);