"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[2168],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,k=c["".concat(s,".").concat(u)]||c[u]||p[u]||o;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7036:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"swarm-quick-setup",title:"Quick setup",slug:"/setup/"},s=void 0,d={unversionedId:"setup/swarm-quick-setup",id:"setup/swarm-quick-setup",title:"Quick setup",description:"Introduction",source:"@site/docs/setup/swarm-quick-setup.md",sourceDirName:"setup",slug:"/setup/",permalink:"/fr/docs/setup/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/setup/swarm-quick-setup.md",tags:[],version:"current",frontMatter:{id:"swarm-quick-setup",title:"Quick setup",slug:"/setup/"},sidebar:"install",next:{title:"Administration",permalink:"/fr/docs/setup/swarm/cli/"}},m=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Create your inventory",id:"create-your-inventory",children:[{value:"Create your hosts file",id:"create-your-hosts-file",children:[],level:3},{value:"Create your group_vars folder",id:"create-your-group_vars-folder",children:[{value:"Copy an existing group_vars folder",id:"copy-an-existing-group_vars-folder",children:[],level:4},{value:"Customise a demo&#39;s based inventory",id:"customise-a-demos-based-inventory",children:[],level:4},{value:"Customise a demo&#39;s based inventory",id:"customise-a-demos-based-inventory-1",children:[],level:4},{value:"Customise a multihosts&#39;s based inventory",id:"customise-a-multihostss-based-inventory",children:[],level:4}],level:3}],level:2},{value:"Install the stack",id:"install-the-stack",children:[{value:"Preamble",id:"preamble",children:[],level:3},{value:"Ansible CLI overview",id:"ansible-cli-overview",children:[],level:3},{value:"Secure SWARM install",id:"secure-swarm-install",children:[],level:3},{value:"Login to Docker registry",id:"login-to-docker-registry",children:[],level:3},{value:"REGARDS install",id:"regards-install",children:[],level:3},{value:"Conclusion",id:"conclusion",children:[],level:3}],level:2}],p={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This section introduce how to deploy a REGARDS stack thanks to ansible on a docker swarm environment.",(0,o.kt)("br",{parentName:"p"}),"\n","All REGARDS docker images are available on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/RegardsOss/packages"},"github repository"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"As we install REGARDS docker swarm in a securized way, the docker configuration is rewritten by our ansible playbook on every nodes configured, or you need to setup your own docker swarm."))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Docker swarm installation of REGARDS is available for CentOS, Ubuntu, Debian and Fedora linux distributions."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install Ansible version ",(0,o.kt)("inlineCode",{parentName:"li"},"2.9.2.23")," at least ",(0,o.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html"},"docs.ansible.com")),(0,o.kt)("li",{parentName:"ol"},"Download ",(0,o.kt)("a",{parentName:"li",href:"https://codeload.github.com/RegardsOss/regards-docker/zip/refs/heads/master"},"regards-docker playbooks"),".")),(0,o.kt)("h2",{id:"create-your-inventory"},"Create your inventory"),(0,o.kt)("h3",{id:"create-your-hosts-file"},"Create your hosts file"),(0,o.kt)("p",null,"Once you download and extract the ",(0,o.kt)("inlineCode",{parentName:"p"},"regards-docker-master"),", you need to create an inventory that saves the configuration of your setup. Create a folder inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"regards-docker-master/inventories/"),", using by example a subset of the server hostname you want to install REGARDS on."),(0,o.kt)("p",null,"Let's suppose we want to create an inventory on a computer named ",(0,o.kt)("inlineCode",{parentName:"p"},"regards-cnes.host.com")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir regards-docker-master/inventories/regards-cnes\ncd regards-docker-master/inventories/regards-cnes\n")),(0,o.kt)("p",null,"Let's create an ",(0,o.kt)("inlineCode",{parentName:"p"},"hosts")," file that defines nodes that will be used during this deployment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat >> hosts << FIN_CAT\n[ansible_host]\nansible ansible_connection=local ansible_python_interpreter='{{ansible_playbook_python}}'\n\n[ansible_host:vars]\ngen_certificates_group_name=docker_nodes\n\n[regards_nodes]\n[1] Keep next line if you run Ansible on the server where REGARDS will be installed. Do not edit ansible_host value.\nregards-master ansible_host='{{ global_stack.master_node_host_name }}' ansible_connection=local\n[2] Keep next line if you don't run Ansible on the server where REGARDS will be installed. Do not edit ansible_host value.\nregards-master ansible_host='{{ global_stack.master_node_host_name }}' ansible_user=XXX ansible_password=XXX\n[3] Keep next lines if you have more than 1 server.\nregards-slave-1 ansible_host=host-server2 ansible_user=XXX ansible_password=XXX\nregards-slave-2 ansible_host=host-server3 ansible_user=XXX ansible_password=XXX\n[4] You can omit ansible_user=XXX and ansible_password=XXX\" if you don't need user/password to log on that node\n\n\n[master]\nregards-master\n\n[slaves]\n[5] Removes the next line if you have only one server, or adapt\nregards-slave-[1:2]\n\n[docker_nodes]\nregards-master\n[6] Removes the next line if you have only one server, or adapt\nregards-slave-[1:2]\n\n[swarm_manager]\nregards-master\n\n[swarm_workers]\n[7] Removes the next line if you have only one server, or adapt\nregards-slave-[1:2]\nFIN_CAT\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ansible_host")),(0,o.kt)("td",{parentName:"tr",align:"left"},"hostname of the server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ansible_user")),(0,o.kt)("td",{parentName:"tr",align:"left"},"user login to log on by ssh to configure & install")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ansible_password")),(0,o.kt)("td",{parentName:"tr",align:"left"},"user password to log on by ssh to configure & install")))),(0,o.kt)("p",null,"Remove all lines begining with ",(0,o.kt)("inlineCode",{parentName:"p"},"[1-7]")," and make appropriate changes following your needs. You have two examples provided inside regards-docker-master: ",(0,o.kt)("inlineCode",{parentName:"p"},"inventories/demo/hosts")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"inventories/multihosts/hosts"),"."),(0,o.kt)("h3",{id:"create-your-group_vars-folder"},"Create your group_vars folder"),(0,o.kt)("p",null,"Now you've configured where you want to install REGARDS, you need to configure what and how you want to install, using a folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"group_vars")," inside your inventory."),(0,o.kt)("h4",{id:"copy-an-existing-group_vars-folder"},"Copy an existing group_vars folder"),(0,o.kt)("p",null,"First, you need to initialise the ",(0,o.kt)("inlineCode",{parentName:"p"},"group_vars")," folder using one of these commands, depending of the number of servers you have :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# cd regards-docker-master/inventories/regards-cnes\n# Install REGARDS on one server - using demo inventory\ncp -R ../../demo/group_vars ./\n\n# Install REGARDS on one server when you don't want any security activated. \n# In that case, you need to setup SWARM by yourself, as this is trivial and documented out there\ncp -R ../../demo-insecure/group_vars ./\n\n# Install REGARDS on several servers - using multihosts inventory\ncp -R ../../multihosts/group_vars ./\n")),(0,o.kt)("p",null,"Following chapter explains how to adapt these configurations to your needs, dependending the inventory you choosed. You can find ",(0,o.kt)("a",{parentName:"p",href:"swarm/advanced-setup/"},"here")," the full list of possibilities that our playbook offers."),(0,o.kt)("h4",{id:"customise-a-demos-based-inventory"},"Customise a demo's based inventory"),(0,o.kt)("p",null,"Edit the file ",(0,o.kt)("inlineCode",{parentName:"p"},"regards-cnes/group_vars/all/main.yml")," with :"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_stack.master_node_host_name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server hostname where the regards stack is installed. For local installation you can use the ",(0,o.kt)("inlineCode",{parentName:"td"},"hostname")," unix command to find it")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_stack.workdir")),(0,o.kt)("td",{parentName:"tr",align:"left"},"REGARDS swarm stack install directory")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_stack.docker.workdir")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Docker working directory")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_stack.docker.network_interface")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of the network interface used to access to your server. For local installation you can use the ",(0,o.kt)("inlineCode",{parentName:"td"},"ifconfig")," unix command to find it")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_regards.version")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Version of REGARDS to install")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_regards.project_name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of the first project created on REGARDS automagically")))),(0,o.kt)("h4",{id:"customise-a-demos-based-inventory-1"},"Customise a demo's based inventory"),(0,o.kt)("p",null,"Edit the file ",(0,o.kt)("inlineCode",{parentName:"p"},"regards-cnes/group_vars/all/main.yml")," with :"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_stack.master_node_host_name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server hostname where the regards stack is installed. For local installation you can use the ",(0,o.kt)("inlineCode",{parentName:"td"},"hostname")," unix command to find it")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_stack.workdir")),(0,o.kt)("td",{parentName:"tr",align:"left"},"REGARDS swarm stack install directory")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_stack.docker.workdir")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Docker working directory")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_stack.docker.network_interface")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of the network interface used to access to your server. For local installation you can use the ",(0,o.kt)("inlineCode",{parentName:"td"},"ifconfig")," unix command to find it")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_regards.your_user")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The name of your user. All REGARDS process and created files will be owned by your linux user")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_regards.your_user_id")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The id related to your user. Runs the command ",(0,o.kt)("inlineCode",{parentName:"td"},"id")," to get that value")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_regards.version")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Version of REGARDS to install")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_regards.project_name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of the first project created on REGARDS automagically")))),(0,o.kt)("h4",{id:"customise-a-multihostss-based-inventory"},"Customise a multihosts's based inventory"),(0,o.kt)("p",null,"Edit the file ",(0,o.kt)("inlineCode",{parentName:"p"},"regards-cnes/group_vars/all/main.yml")," with :"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_stack.master_node_host_name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server hostname where the regards stack is installed. For local installation you can use the ",(0,o.kt)("inlineCode",{parentName:"td"},"hostname")," unix command to find it")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_stack.workdir")),(0,o.kt)("td",{parentName:"tr",align:"left"},"REGARDS swarm stack install directory")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_stack.docker.workdir")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Docker working directory")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_stack.docker.network_interface")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of the network interface used to access to your server. For local installation you can use the ",(0,o.kt)("inlineCode",{parentName:"td"},"ifconfig")," unix command to find it")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_regards.version")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Version of REGARDS to install")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global_regards.project_name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of the first project created on REGARDS automagically")))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In multi nodes deployment mode, the ",(0,o.kt)("inlineCode",{parentName:"p"},"global_stack.workdir")," value have to be the same accessible directory on each nodes (e.g. NFS mount)."))),(0,o.kt)("h2",{id:"install-the-stack"},"Install the stack"),(0,o.kt)("h3",{id:"preamble"},"Preamble"),(0,o.kt)("p",null,"Once inventory configuration has been saved, you can install Docker SWARM and REGARDS.",(0,o.kt)("br",{parentName:"p"}),"\n","If you want an insecure REGARDS install on your desktop and you know what you're doing, you can search for a tutorial out there to install Docker SWARM on your computer then executes the playbook ",(0,o.kt)("inlineCode",{parentName:"p"},"regards.yml"),".\nIf you're OK with a secure installation of SWARM, execute the playbook ",(0,o.kt)("inlineCode",{parentName:"p"},"setup-vm.yml")," which setup swarm and secures it, then pursue with the ",(0,o.kt)("inlineCode",{parentName:"p"},"regards.yml")," playbook."),(0,o.kt)("h3",{id:"ansible-cli-overview"},"Ansible CLI overview"),(0,o.kt)("p",null,"Let's see how you can use Ansible playbook CLI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# cd regards-docker-master/\nansible-playbook -i inventories/<inventory name> <playbook file>.yml <additional parameters>\n")),(0,o.kt)("p",null,"With :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<inventory name>")," is the name of the inventory you've created"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<additional parameters>")," can be replaced by ",(0,o.kt)("inlineCode",{parentName:"li"},"--ask-become-pass")," if you need to give the password when you switch to root, empty otherwise"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<playbook file>.yml")," are playbook you're executing, here we want to install SWARM then REGARDS.")),(0,o.kt)("p",null,"These commands will succeed with one of these lovely message :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[..]\nPLAY RECAP *******************************************************************************************************\nregards-master                 : ok=23   changed=8    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0\nregards-slave                 : ok=23   changed=8    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Seeing red lines is normal, as some tasks produce error that can safely ignored if they do not block the playbook execution. What really matters is ",(0,o.kt)("inlineCode",{parentName:"p"},"failed=0")," in the recap."))),(0,o.kt)("h3",{id:"secure-swarm-install"},"Secure SWARM install"),(0,o.kt)("p",null,"Let's see how to do a secure installation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# cd regards-docker-master/\nansible-playbook -i inventories/<inventory name> setup-vm.yml <additional parameters>\n\n\n")),(0,o.kt)("p",null,"With an example :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# cd regards-docker-master/\n> ansible-playbook -i inventories/regards-cnes setup-vm.yml --ask-become-pass\n[..]\nPLAY RECAP *******************************************************************************************************\nregards-master   : ok=158 changed=8 unreachable=0 failed=0 skipped=22 rescued=0 ignored=0\nregards-slave-1  : ok=86 changed=8 unreachable=0 failed=0 skipped=4 rescued=0 ignored=0\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are installing locally REGARDS (ansible_connection=local inside inventories/",(0,o.kt)("inlineCode",{parentName:"p"},"<inventory name>"),"/hosts),\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"setup-vm.yml")," has added you into a group but it won't be effective until you've restarted your session.\nEnsures the command id return you the group ",(0,o.kt)("inlineCode",{parentName:"p"},"dockermapgid")," or the next playbook will timeout."))),(0,o.kt)("h3",{id:"login-to-docker-registry"},"Login to Docker registry"),(0,o.kt)("p",null,"We're currently storing our Docker image on Github. To be able to fetch them, you require an access token."),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token"},"first 7 steps in this guide")," to get an overview of the Github interface and how to create a personal token.  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Create a token with a ",(0,o.kt)("inlineCode",{parentName:"strong"},"read:packages")," scope.")),(0,o.kt)("p",null,"To sum up the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry"},"official guide"),", execute the following two commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Connect threw SSH to your master node and use the token to login in to Github \nexport CR_PAT=<your token access>\necho $CR_PAT | docker login ghcr.io --password-stdin -u <your username>\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you do not fetch image directly on Github, adapt this step to your environment, as you may need to login on your private Docker registry."))),(0,o.kt)("h3",{id:"regards-install"},"REGARDS install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# cd regards-docker-master/\nansible-playbook -i inventories/<inventory name> regards.yml <additional parameters>\n")),(0,o.kt)("p",null,"With an example :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"> ansible-playbook -i inventories/regards-cnes regards.yml --ask-become-pass\n[..]\nPLAY RECAP *******************************************************************************************************\nregards-master   : ok=23 changed=8 unreachable=0 failed=0 skipped=1 rescued=0 ignored=0\nregards-slave-1  : ok=23 changed=8 unreachable=0 failed=0 skipped=1 rescued=0 ignored=0\n")),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Congratulations, your REGARDS installation is over. System is starting and will be up soon. You can access web interfaces at :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Instance administration : http://",(0,o.kt)("inlineCode",{parentName:"li"},"value of global_stack.master_node_host_name")),(0,o.kt)("li",{parentName:"ul"},"Administration : http://",(0,o.kt)("inlineCode",{parentName:"li"},"value of global_stack.master_node_host_name"),"/admin/",(0,o.kt)("inlineCode",{parentName:"li"},"value of global_regards.project_name")),(0,o.kt)("li",{parentName:"ul"},"Portal : http://",(0,o.kt)("inlineCode",{parentName:"li"},"value of global_stack.master_node_host_name")),(0,o.kt)("li",{parentName:"ul"},"User interface : http://",(0,o.kt)("inlineCode",{parentName:"li"},"value of global_stack.master_node_host_name"),"/user/",(0,o.kt)("inlineCode",{parentName:"li"},"value of global_regards.project_name"))),(0,o.kt)("p",null,"You can now monitor and administrate the deployed stack thanks to cli commands as explained ",(0,o.kt)("a",{parentName:"p",href:"swarm/cli/"},"here")))}c.isMDXComponent=!0}}]);