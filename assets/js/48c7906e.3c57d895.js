"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[87673],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,m=c["".concat(i,".").concat(d)]||c[d]||y[d]||s;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},41398:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=t(58168),r=(t(96540),t(15680));const s={id:"ansible-vault",title:"Ansible Vault",slug:"/setup/swarm/advanced/ansible-vault"},o=void 0,l={unversionedId:"setup/advanced/ansible-vault",id:"setup/advanced/ansible-vault",title:"Ansible Vault",description:"Your inventory may contain some passwords that you do not want to share under source control.",source:"@site/docs/setup/advanced/ansible-vault.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/ansible-vault",permalink:"/docs/setup/swarm/advanced/ansible-vault",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/setup/advanced/ansible-vault.md",tags:[],version:"current",frontMatter:{id:"ansible-vault",title:"Ansible Vault",slug:"/setup/swarm/advanced/ansible-vault"},sidebar:"install",previous:{title:"Microservices optimizations",permalink:"/docs/setup/swarm/advanced/optimizations/"},next:{title:"Mount volumes, configs...",permalink:"/docs/setup/swarm/advanced/swarm-mount"}},i={},u=[{value:"Encrypt inventory value",id:"encrypt-inventory-value",level:2},{value:"Encrypt file",id:"encrypt-file",level:2}],p={toc:u},c="wrapper";function y(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Your inventory may contain some passwords that you do not want to share under source control.",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/user_guide/vault.html"},"Ansible Vault")," allows you to crypt variable values and files content inside your inventory.",(0,r.yg)("br",{parentName:"p"}),"\n","After that, you will need to add ",(0,r.yg)("inlineCode",{parentName:"p"}," --ask-vault-pass")," when running ",(0,r.yg)("inlineCode",{parentName:"p"},"ansible-playbook")," to let Ansible decrypt crypted values on the fly."),(0,r.yg)("h2",{id:"encrypt-inventory-value"},"Encrypt inventory value"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"ansible-vault encrypt_string --ask-vault-pass '<the password to crypt>'\n")),(0,r.yg)("p",null,"Ansible will asks you two times your Vault password. Type your Vault password and get your encrypted value : "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"New Vault password: \nConfirm New Vault password:\n!vault |\n          $ANSIBLE_VAULT;1.1;AES256\n          6336633533303433346562653239613162613835643230....\n          66333964366631333331653166633634366563343562376562336435626330303663\nEncryption successful\n")),(0,r.yg)("p",null,"Save the value into your inventory. Let's say that was the Postgres instance password we crypted:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"group_config_mservices:\n  [...]\n  postgres:\n    instance:\n      host: database-inst.cnes.fr\n      port: 5432\n      user: <some user>\n      password: !vault |\n          $ANSIBLE_VAULT;1.1;AES256\n          39353136383065313730383734653439663330313663653761353434663935653033373833333830\n          3936356462383664616563633732623934643838383065300a646462616265316232623336376336\n          34373432613662633436626233616262653037643065616564336130393762653037343032396532\n          3464393534663433660a313530376634393864366233633561326338356463366532396566636361\n          65313136633339333161666238366239653639383431336634373236323932313036\n      db: <instance database name>\n")),(0,r.yg)("p",null,"Well done! You can now place encrypted content (but never commit your Vault password) under source control and share it more safely."),(0,r.yg)("p",null,"If you need to, you can check the value is correctly accessible on the fly using vault password:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'ansible --ask-vault-pass -m ansible.builtin.debug all -a var="group_config_mservices" -i inventories/<inventory name>/\n')),(0,r.yg)("h2",{id:"encrypt-file"},"Encrypt file"),(0,r.yg)("p",null,"You can also encrypt the content of a file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"ansible-vault create --ask-vault-pass <file.to.encryt>\n")),(0,r.yg)("p",null,"This command asks you for the vault password, then opens the vi program to let you write the content.",(0,r.yg)("br",{parentName:"p"}),"\n","Don't forget to press ",(0,r.yg)("inlineCode",{parentName:"p"},"i")," before writing inside the file, then save the content by pressing ",(0,r.yg)("inlineCode",{parentName:"p"},"Escape"),", then input ",(0,r.yg)("inlineCode",{parentName:"p"},":wq")," and finally press ",(0,r.yg)("inlineCode",{parentName:"p"},"Enter")),(0,r.yg)("p",null,"The file ",(0,r.yg)("inlineCode",{parentName:"p"},"<file.to.encryt>")," must not exist before running this command."))}y.isMDXComponent=!0}}]);