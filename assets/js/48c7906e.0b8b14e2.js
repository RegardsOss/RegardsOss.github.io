"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[31147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,y=c["".concat(i,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const s={id:"ansible-vault",title:"Ansible Vault",slug:"/setup/swarm/advanced/ansible-vault"},o=void 0,l={unversionedId:"setup/advanced/ansible-vault",id:"setup/advanced/ansible-vault",title:"Ansible Vault",description:"Your inventory may contain some passwords that you do not want to share under source control.",source:"@site/docs/setup/advanced/ansible-vault.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/ansible-vault",permalink:"/docs/setup/swarm/advanced/ansible-vault",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/setup/advanced/ansible-vault.md",tags:[],version:"current",frontMatter:{id:"ansible-vault",title:"Ansible Vault",slug:"/setup/swarm/advanced/ansible-vault"},sidebar:"install",previous:{title:"Microservices optimizations",permalink:"/docs/setup/swarm/advanced/optimizations/"},next:{title:"Mount volumes, configs...",permalink:"/docs/setup/swarm/advanced/swarm-mount"}},i={},u=[{value:"Encrypt inventory value",id:"encrypt-inventory-value",level:2},{value:"Encrypt file",id:"encrypt-file",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Your inventory may contain some passwords that you do not want to share under source control.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/user_guide/vault.html"},"Ansible Vault")," allows you to crypt variable values and files content inside your inventory.",(0,r.kt)("br",{parentName:"p"}),"\n","After that, you will need to add ",(0,r.kt)("inlineCode",{parentName:"p"}," --ask-vault-pass")," when running ",(0,r.kt)("inlineCode",{parentName:"p"},"ansible-playbook")," to let Ansible decrypt crypted values on the fly."),(0,r.kt)("h2",{id:"encrypt-inventory-value"},"Encrypt inventory value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-vault encrypt_string --ask-vault-pass '<the password to crypt>'\n")),(0,r.kt)("p",null,"Ansible will asks you two times your Vault password. Type your Vault password and get your encrypted value : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"New Vault password: \nConfirm New Vault password:\n!vault |\n          $ANSIBLE_VAULT;1.1;AES256\n          6336633533303433346562653239613162613835643230....\n          66333964366631333331653166633634366563343562376562336435626330303663\nEncryption successful\n")),(0,r.kt)("p",null,"Save the value into your inventory. Let's say that was the Postgres instance password we crypted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"group_config_mservices:\n  [...]\n  postgres:\n    instance:\n      host: database-inst.cnes.fr\n      port: 5432\n      user: <some user>\n      password: !vault |\n          $ANSIBLE_VAULT;1.1;AES256\n          39353136383065313730383734653439663330313663653761353434663935653033373833333830\n          3936356462383664616563633732623934643838383065300a646462616265316232623336376336\n          34373432613662633436626233616262653037643065616564336130393762653037343032396532\n          3464393534663433660a313530376634393864366233633561326338356463366532396566636361\n          65313136633339333161666238366239653639383431336634373236323932313036\n      db: <instance database name>\n")),(0,r.kt)("p",null,"Well done! You can now place encrypted content (but never commit your Vault password) under source control and share it more safely."),(0,r.kt)("p",null,"If you need to, you can check the value is correctly accessible on the fly using vault password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ansible --ask-vault-pass -m ansible.builtin.debug all -a var="group_config_mservices" -i inventories/<inventory name>/\n')),(0,r.kt)("h2",{id:"encrypt-file"},"Encrypt file"),(0,r.kt)("p",null,"You can also encrypt the content of a file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-vault create --ask-vault-pass <file.to.encryt>\n")),(0,r.kt)("p",null,"This command asks you for the vault password, then opens the vi program to let you write the content.",(0,r.kt)("br",{parentName:"p"}),"\n","Don't forget to press ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," before writing inside the file, then save the content by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Escape"),", then input ",(0,r.kt)("inlineCode",{parentName:"p"},":wq")," and finally press ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter")),(0,r.kt)("p",null,"The file ",(0,r.kt)("inlineCode",{parentName:"p"},"<file.to.encryt>")," must not exist before running this command."))}d.isMDXComponent=!0}}]);