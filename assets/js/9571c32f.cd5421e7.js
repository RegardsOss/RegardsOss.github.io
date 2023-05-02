"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[45393],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},76322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={id:"swarm-quick-setup",title:"Quick setup",slug:"/setup/"},i=void 0,l={unversionedId:"setup/swarm-quick-setup",id:"version-1.11.0/setup/swarm-quick-setup",title:"Quick setup",description:"Introduction",source:"@site/versioned_docs/version-1.11.0/setup/swarm-quick-setup.md",sourceDirName:"setup",slug:"/setup/",permalink:"/docs/1.11.0/setup/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/setup/swarm-quick-setup.md",tags:[],version:"1.11.0",frontMatter:{id:"swarm-quick-setup",title:"Quick setup",slug:"/setup/"},sidebar:"install",next:{title:"Introduction",permalink:"/docs/1.11.0/setup/swarm/advanced/introduction"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create your inventory",id:"create-your-inventory",level:2},{value:"Create your hosts file",id:"create-your-hosts-file",level:3},{value:"Create your group_vars folder",id:"create-your-group_vars-folder",level:3},{value:"Copy an existing group_vars folder",id:"copy-an-existing-group_vars-folder",level:4},{value:"Customise a demo&#39;s based inventory",id:"customise-a-demos-based-inventory",level:4},{value:"Customise a demo&#39;s based inventory",id:"customise-a-demos-based-inventory-1",level:4},{value:"Customise a multihosts&#39;s based inventory",id:"customise-a-multihostss-based-inventory",level:4},{value:"Install the stack",id:"install-the-stack",level:2},{value:"Preamble",id:"preamble",level:3},{value:"Ansible CLI overview",id:"ansible-cli-overview",level:3},{value:"Secure SWARM install",id:"secure-swarm-install",level:3},{value:"Login to Docker registry",id:"login-to-docker-registry",level:3},{value:"REGARDS install",id:"regards-install",level:3},{value:"Test REGARDS is up",id:"test-regards-is-up",level:3},{value:"Quick setup conclusion",id:"quick-setup-conclusion",level:3}],p={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This section introduce how to deploy a REGARDS stack thanks to ansible on a docker swarm environment.",(0,r.kt)("br",{parentName:"p"}),"\n","All REGARDS docker images are available on our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/RegardsOss/packages"},"github repository"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"As we install REGARDS docker swarm in a securized way, the docker configuration is rewritten by our ansible playbook on every nodes configured, or you need to setup your own docker swarm.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Docker swarm installation of REGARDS is available for CentOS, Ubuntu, Debian and Fedora linux distributions.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install Ansible version ",(0,r.kt)("inlineCode",{parentName:"li"},"2.9.27")," at least ",(0,r.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/installation_guide/installation_distros.html"},"docs.ansible.com")),(0,r.kt)("li",{parentName:"ol"},"Download ",(0,r.kt)("a",{parentName:"li",href:"https://codeload.github.com/RegardsOss/regards-docker/zip/refs/heads/master"},"regards-docker playbooks"),"."),(0,r.kt)("li",{parentName:"ol"},"Your user is sudoer. Note that all command on this tutorial shall not be runned with root user.")),(0,r.kt)("h2",{id:"create-your-inventory"},"Create your inventory"),(0,r.kt)("h3",{id:"create-your-hosts-file"},"Create your hosts file"),(0,r.kt)("p",null,"Once you download and extract the ",(0,r.kt)("inlineCode",{parentName:"p"},"regards-docker-master"),", you need to create an inventory that saves the configuration of your setup. Create a folder inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"regards-docker-master/inventories/"),", using by example a subset of the server hostname you want to install REGARDS on."),(0,r.kt)("p",null,"Let's suppose we want to create an inventory on a computer named ",(0,r.kt)("inlineCode",{parentName:"p"},"regards-cnes.host.com")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir regards-docker-master/inventories/regards-cnes\ncd regards-docker-master/inventories/regards-cnes\n")),(0,r.kt)("p",null,"Let's create an ",(0,r.kt)("inlineCode",{parentName:"p"},"hosts")," file that defines nodes that will be used during this deployment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat >> hosts << FIN_CAT\n[regards_nodes]\n[1] Keep next line if you run Ansible on the server where REGARDS will be installed. Do not edit ansible_host value.\nregards-master ansible_host='{{ global_stack.master_node_host_name }}' ansible_connection=local\n[2] Keep next line if you don't run Ansible on the server where REGARDS will be installed. Do not edit ansible_host value.\nregards-master ansible_host='{{ global_stack.master_node_host_name }}' ansible_user=XXX ansible_password=XXX\n[3] Keep next lines if you have more than 1 server.\nregards-slave-1 ansible_host=host-server2 ansible_user=XXX ansible_password=XXX\nregards-slave-2 ansible_host=host-server3 ansible_user=XXX ansible_password=XXX\n[4] You can omit ansible_user=XXX and ansible_password=XXX\" if you don't need user/password to log on that node\n\n\n[master]\nregards-master\n\n[slaves]\n[5] Removes the next line if you have only one server, or adapt\nregards-slave-[1:2]\n\n[docker_nodes]\nregards-master\n[6] Removes the next line if you have only one server, or adapt\nregards-slave-[1:2]\n\n[swarm_manager]\nregards-master\n\n[swarm_workers]\n[7] Removes the next line if you have only one server, or adapt\nregards-slave-[1:2]\nFIN_CAT\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ansible_host")),(0,r.kt)("td",{parentName:"tr",align:"left"},"hostname of the server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ansible_user")),(0,r.kt)("td",{parentName:"tr",align:"left"},"user login to log on by ssh to configure & install")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ansible_password")),(0,r.kt)("td",{parentName:"tr",align:"left"},"user password to log on by ssh to configure & install")))),(0,r.kt)("p",null,"Remove all lines begining with ",(0,r.kt)("inlineCode",{parentName:"p"},"[1-7]")," and make appropriate changes following your needs. You have two examples provided inside regards-docker-master: ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/demo/hosts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/multihosts/hosts"),"."),(0,r.kt)("h3",{id:"create-your-group_vars-folder"},"Create your group_vars folder"),(0,r.kt)("p",null,"Now you've configured where you want to install REGARDS, you need to configure what and how you want to install, using a folder named ",(0,r.kt)("inlineCode",{parentName:"p"},"group_vars")," inside your inventory."),(0,r.kt)("h4",{id:"copy-an-existing-group_vars-folder"},"Copy an existing group_vars folder"),(0,r.kt)("p",null,"First, you need to initialise the ",(0,r.kt)("inlineCode",{parentName:"p"},"group_vars")," folder using one of these commands, depending of the number of servers you have :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# cd regards-docker-master/inventories/regards-cnes\n# Install REGARDS on one server - using demo inventory\ncp -R ../../demo/group_vars ./\n\n# Install REGARDS on one server when you don't want any security activated. \n# In that case, you need to setup SWARM by YOURSELF, as this is trivial and documented out there\n# Use it when you install REGARDS on your own developper PC and not a distant server.\ncp -R ../../demo-insecure/group_vars ./\n\n# Install REGARDS on several servers - using multihosts inventory\ncp -R ../../multihosts/group_vars ./\n")),(0,r.kt)("p",null,"Following chapter explains how to adapt these configurations to your needs, dependending the inventory you choosed. You can find ",(0,r.kt)("a",{parentName:"p",href:"swarm/advanced-setup/"},"here")," the full list of possibilities that our playbook offers."),(0,r.kt)("h4",{id:"customise-a-demos-based-inventory"},"Customise a demo's based inventory"),(0,r.kt)("p",null,"Edit the file ",(0,r.kt)("inlineCode",{parentName:"p"},"regards-cnes/group_vars/all/main.yml")," with :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_stack.master_node_host_name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server hostname where the regards stack is installed. For local installation you can use the ",(0,r.kt)("inlineCode",{parentName:"td"},"hostname")," unix command to find it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_stack.workdir")),(0,r.kt)("td",{parentName:"tr",align:"left"},"REGARDS swarm stack install directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_stack.docker.workdir")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Docker working directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_stack.docker.network_interface")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the network interface used to access to your server. For local installation you can use the ",(0,r.kt)("inlineCode",{parentName:"td"},"ifconfig")," unix command to find it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_regards.version")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Version of REGARDS to install")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_regards.project_name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the first project created on REGARDS automagically")))),(0,r.kt)("h4",{id:"customise-a-demos-based-inventory-1"},"Customise a demo's based inventory"),(0,r.kt)("p",null,"Edit the file ",(0,r.kt)("inlineCode",{parentName:"p"},"regards-cnes/group_vars/all/main.yml")," with :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_stack.master_node_host_name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server hostname where the regards stack is installed. For local installation you can use the ",(0,r.kt)("inlineCode",{parentName:"td"},"hostname")," unix command to find it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_stack.workdir")),(0,r.kt)("td",{parentName:"tr",align:"left"},"REGARDS swarm stack install directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_stack.docker.workdir")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Docker working directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_stack.docker.network_interface")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the network interface used to access to your server. For local installation you can use the ",(0,r.kt)("inlineCode",{parentName:"td"},"ifconfig")," unix command to find it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_regards.your_user")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of your user. All REGARDS process and created files will be owned by your linux user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_regards.your_user_id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The id related to your user. Runs the command ",(0,r.kt)("inlineCode",{parentName:"td"},"id")," to get that value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_regards.version")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Version of REGARDS to install")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_regards.project_name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the first project created on REGARDS automagically")))),(0,r.kt)("h4",{id:"customise-a-multihostss-based-inventory"},"Customise a multihosts's based inventory"),(0,r.kt)("p",null,"Edit the file ",(0,r.kt)("inlineCode",{parentName:"p"},"regards-cnes/group_vars/all/main.yml")," with :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_stack.master_node_host_name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server hostname where the regards stack is installed. For local installation you can use the ",(0,r.kt)("inlineCode",{parentName:"td"},"hostname")," unix command to find it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_stack.workdir")),(0,r.kt)("td",{parentName:"tr",align:"left"},"REGARDS swarm stack install directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_stack.docker.workdir")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Docker working directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_stack.docker.network_interface")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the network interface used to access to your server. For local installation you can use the ",(0,r.kt)("inlineCode",{parentName:"td"},"ifconfig")," unix command to find it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_regards.version")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Version of REGARDS to install")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"global_regards.project_name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the first project created on REGARDS automagically")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In multi nodes deployment mode, the ",(0,r.kt)("inlineCode",{parentName:"p"},"global_stack.workdir")," value have to be the same accessible directory on each nodes (e.g. NFS mount).")),(0,r.kt)("h2",{id:"install-the-stack"},"Install the stack"),(0,r.kt)("h3",{id:"preamble"},"Preamble"),(0,r.kt)("p",null,"Once inventory configuration has been saved, you can install Docker SWARM and REGARDS.",(0,r.kt)("br",{parentName:"p"}),"\n","If you want an insecure REGARDS install on your desktop and you know what you're doing, you can search for a tutorial out there to install Docker SWARM on your computer then executes the playbook ",(0,r.kt)("inlineCode",{parentName:"p"},"regards.yml"),".\nIf you're OK with a secure installation of SWARM, execute the playbook ",(0,r.kt)("inlineCode",{parentName:"p"},"setup-vm.yml")," which setup swarm and secures it, then pursue with the ",(0,r.kt)("inlineCode",{parentName:"p"},"regards.yml")," playbook."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"python --version")," on the server where you want to install REGARDS.",(0,r.kt)("br",{parentName:"p"}),"\n","If it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.x"),", you need to : "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"edit the file ",(0,r.kt)("inlineCode",{parentName:"li"},"inventories/<inventory name>/docker_nodes/main.yml")," and edit the value used on ",(0,r.kt)("inlineCode",{parentName:"li"},"python_version"),". Set that value to ",(0,r.kt)("inlineCode",{parentName:"li"},"python_version: 2"),"."),(0,r.kt)("li",{parentName:"ul"},"if ",(0,r.kt)("inlineCode",{parentName:"li"},"ansible-playbook")," does not work, you can try to use ",(0,r.kt)("inlineCode",{parentName:"li"},"ansible-playbook-2.7")," instead."))),(0,r.kt)("h3",{id:"ansible-cli-overview"},"Ansible CLI overview"),(0,r.kt)("p",null,"Let's see how you can use Ansible playbook CLI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# cd regards-docker-master/\nansible-playbook -i inventories/<inventory name> <playbook file>.yml <additional parameters>\n")),(0,r.kt)("p",null,"With :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<inventory name>")," is the name of the inventory you've created"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<additional parameters>")," can be replaced by ",(0,r.kt)("inlineCode",{parentName:"li"},"--ask-become-pass")," if you need to give the password when you switch to root, empty otherwise"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<playbook file>.yml")," are playbook you're executing, here we want to install SWARM then REGARDS.")),(0,r.kt)("p",null,"These commands will succeed with one of these lovely message :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]\nPLAY RECAP *******************************************************************************************************\nregards-master                 : ok=23   changed=8    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0\nregards-slave                 : ok=23   changed=8    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Seeing red lines is normal, as some tasks produce error that can safely ignored if they do not block the playbook execution. What really matters is ",(0,r.kt)("inlineCode",{parentName:"p"},"failed=0")," in the recap.")),(0,r.kt)("h3",{id:"secure-swarm-install"},"Secure SWARM install"),(0,r.kt)("p",null,"Let's see how to do a secure installation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# cd regards-docker-master/\nansible-playbook -i inventories/<inventory name> setup-vm.yml <additional parameters>\n\n\n")),(0,r.kt)("p",null,"With an example :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# cd regards-docker-master/\n> ansible-playbook -i inventories/regards-cnes setup-vm.yml --ask-become-pass\n[..]\nPLAY RECAP *******************************************************************************************************\nregards-master   : ok=158 changed=8 unreachable=0 failed=0 skipped=22 rescued=0 ignored=0\nregards-slave-1  : ok=86 changed=8 unreachable=0 failed=0 skipped=4 rescued=0 ignored=0\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are installing locally REGARDS (ansible_connection=local inside inventories/",(0,r.kt)("inlineCode",{parentName:"p"},"<inventory name>"),"/hosts),\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"setup-vm.yml")," has added you into a group but it won't be effective until you've restarted your session.\nEnsures the command id return you the group ",(0,r.kt)("inlineCode",{parentName:"p"},"dockermapgid")," or the next playbook will timeout.")),(0,r.kt)("h3",{id:"login-to-docker-registry"},"Login to Docker registry"),(0,r.kt)("p",null,"We're currently storing our Docker image on Github. To be able to fetch them, you require an access token."),(0,r.kt)("p",null,"Follow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token"},"first 7 steps in this guide")," to get an overview of the Github interface and how to create a personal token.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create a token with a ",(0,r.kt)("inlineCode",{parentName:"strong"},"read:packages")," scope.")),(0,r.kt)("p",null,"To sum up the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry"},"official guide"),", execute the following two commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Connect threw SSH to your master node and use the token to login in to Github \nexport CR_PAT=<your token access>\necho $CR_PAT | docker login ghcr.io --password-stdin -u <your username>\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you do not fetch image directly on Github, adapt this step to your environment, as you may need to login on your private Docker registry.")),(0,r.kt)("h3",{id:"regards-install"},"REGARDS install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# cd regards-docker-master/\nansible-playbook -i inventories/<inventory name> regards.yml <additional parameters>\n")),(0,r.kt)("p",null,"With an example :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> ansible-playbook -i inventories/regards-cnes regards.yml --ask-become-pass\n[..]\nPLAY RECAP *******************************************************************************************************\nregards-master   : ok=23 changed=8 unreachable=0 failed=0 skipped=1 rescued=0 ignored=0\nregards-slave-1  : ok=23 changed=8 unreachable=0 failed=0 skipped=1 rescued=0 ignored=0\n")),(0,r.kt)("h3",{id:"test-regards-is-up"},"Test REGARDS is up"),(0,r.kt)("p",null,"Connect to the master node of your stack, and open the REGARDS working directory.",(0,r.kt)("br",{parentName:"p"}),"\n","To do that, you need these two values from your inventories :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"group_workdir_local: /opt/regards/\ngroup_stack_name: regards\n")),(0,r.kt)("p",null,"It means your stack is installed inside ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/regards/regards"),"."),(0,r.kt)("p",null,"Open this folder and go to the cli folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /opt/regards/regards/cli\n")),(0,r.kt)("p",null,"Execute ",(0,r.kt)("inlineCode",{parentName:"p"},"./health.sh all"),", you should get the following :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./health.sh all\n[200]   admin\n[200]   dam\n[200]   access_project\n[200]   admin_instance\n[200]   catalog\n[200]   access_instance\n[200]   authentication\n")),(0,r.kt)("p",null,"You can monitor and administrate the deployed stack thanks to cli commands as explained ",(0,r.kt)("a",{parentName:"p",href:"swarm/cli/"},"here")),(0,r.kt)("h3",{id:"quick-setup-conclusion"},"Quick setup conclusion"),(0,r.kt)("p",null,"Still there ? Congratulations, you've just finished the first step of the install!"),(0,r.kt)("p",null,"Several web interfaces are accessible on your server now :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Instance administration : http://",(0,r.kt)("inlineCode",{parentName:"li"},"<server name>"),"/admin"),(0,r.kt)("li",{parentName:"ul"},"Administration : http://",(0,r.kt)("inlineCode",{parentName:"li"},"<server name>"),"/admin/",(0,r.kt)("inlineCode",{parentName:"li"},"<first project>")),(0,r.kt)("li",{parentName:"ul"},"User interface : http://",(0,r.kt)("inlineCode",{parentName:"li"},"<server name>"),"/user/",(0,r.kt)("inlineCode",{parentName:"li"},"<first project>")),(0,r.kt)("li",{parentName:"ul"},"Portal : http://",(0,r.kt)("inlineCode",{parentName:"li"},"<server name>")),(0,r.kt)("li",{parentName:"ul"},"Fake SMTP server : http://",(0,r.kt)("inlineCode",{parentName:"li"},"<server name>"),":5081"),(0,r.kt)("li",{parentName:"ul"},"Phppgadmin : http://",(0,r.kt)("inlineCode",{parentName:"li"},"<server name>"),":5080"),(0,r.kt)("li",{parentName:"ul"},"RabbitMQ admin : http://",(0,r.kt)("inlineCode",{parentName:"li"},"<server name>"),":15672")),(0,r.kt)("admonition",{title:"Don't go away !",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You have just deployed the core of REGARDS, but many REGARDS microservices are still missing...",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Click on the link Introduction just below"),", you will discover how to customize your inventory to improve your deployment. ")))}u.isMDXComponent=!0}}]);