"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[48784],{65450:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=n(74848),r=n(28453);const i={id:"swarm-quick-setup",title:"Quick setup",slug:"/setup/"},l=void 0,o={id:"setup/swarm-quick-setup",title:"Quick setup",description:"Introduction",source:"@site/versioned_docs/version-1.15/setup/swarm-quick-setup.md",sourceDirName:"setup",slug:"/setup/",permalink:"/docs/1.15/setup/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/setup/swarm-quick-setup.md",tags:[],version:"1.15",frontMatter:{id:"swarm-quick-setup",title:"Quick setup",slug:"/setup/"},sidebar:"install",next:{title:"Introduction",permalink:"/docs/1.15/setup/swarm/advanced/introduction"}},d={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create your inventory",id:"create-your-inventory",level:2},{value:"Create your hosts file",id:"create-your-hosts-file",level:3},{value:"Create your group_vars folder",id:"create-your-group_vars-folder",level:3},{value:"Copy an existing group_vars folder",id:"copy-an-existing-group_vars-folder",level:4},{value:"Customise a demo&#39;s based inventory",id:"customise-a-demos-based-inventory",level:4},{value:"Customise a demo&#39;s based inventory",id:"customise-a-demos-based-inventory-1",level:4},{value:"Customise a multihosts&#39;s based inventory",id:"customise-a-multihostss-based-inventory",level:4},{value:"Install the stack",id:"install-the-stack",level:2},{value:"Preamble",id:"preamble",level:3},{value:"Ansible CLI overview",id:"ansible-cli-overview",level:3},{value:"Secure SWARM install",id:"secure-swarm-install",level:3},{value:"Login to Docker registry",id:"login-to-docker-registry",level:3},{value:"REGARDS install",id:"regards-install",level:3},{value:"Test REGARDS is up",id:"test-regards-is-up",level:3},{value:"Quick setup conclusion",id:"quick-setup-conclusion",level:3}];function c(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(s.p,{children:["This section introduce how to deploy a REGARDS stack thanks to ansible on a docker swarm environment.",(0,t.jsx)(s.br,{}),"\n","All REGARDS docker images are available on our ",(0,t.jsx)(s.a,{href:"https://github.com/orgs/RegardsOss/packages",children:"github repository"}),"."]}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsx)(s.p,{children:"As we install REGARDS docker swarm in a securized way, the docker configuration is rewritten by our ansible playbook on every nodes configured, or you need to setup your own docker swarm."})}),"\n",(0,t.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"Docker swarm installation of REGARDS is available for CentOS, Ubuntu, Debian and Fedora linux distributions."})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Install Ansible version ",(0,t.jsx)(s.code,{children:"2.9.27"})," at least ",(0,t.jsx)(s.a,{href:"https://docs.ansible.com/ansible/latest/installation_guide/installation_distros.html",children:"docs.ansible.com"})]}),"\n",(0,t.jsxs)(s.li,{children:["Download ",(0,t.jsx)(s.a,{href:"https://codeload.github.com/RegardsOss/regards-docker/zip/refs/heads/master",children:"regards-docker playbooks"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Your user is sudoer. Note that all command on this tutorial shall not be runned with root user."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"create-your-inventory",children:"Create your inventory"}),"\n",(0,t.jsx)(s.h3,{id:"create-your-hosts-file",children:"Create your hosts file"}),"\n",(0,t.jsxs)(s.p,{children:["Once you download and extract the ",(0,t.jsx)(s.code,{children:"regards-docker-master"}),", you need to create an inventory that saves the configuration of your setup. Create a folder inside the ",(0,t.jsx)(s.code,{children:"regards-docker-master/inventories/"}),", using by example a subset of the server hostname you want to install REGARDS on."]}),"\n",(0,t.jsxs)(s.p,{children:["Let's suppose we want to create an inventory on a computer named ",(0,t.jsx)(s.code,{children:"regards-cnes.host.com"})," :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"mkdir regards-docker-master/inventories/regards-cnes\ncd regards-docker-master/inventories/regards-cnes\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Let's create an ",(0,t.jsx)(s.code,{children:"hosts"})," file that defines nodes that will be used during this deployment."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cat >> hosts << FIN_CAT\n[regards_nodes]\n[1] Keep next line if you run Ansible on the server where REGARDS will be installed. Do not edit ansible_host value.\nregards-master ansible_host='{{ global_stack.master_node_host_name }}' ansible_connection=local\n[2] Keep next line if you don't run Ansible on the server where REGARDS will be installed. Do not edit ansible_host value.\nregards-master ansible_host='{{ global_stack.master_node_host_name }}' ansible_user=XXX ansible_password=XXX\n[3] Keep next lines if you have more than 1 server.\nregards-slave-1 ansible_host=host-server2 ansible_user=XXX ansible_password=XXX\nregards-slave-2 ansible_host=host-server3 ansible_user=XXX ansible_password=XXX\n[4] You can omit ansible_user=XXX and ansible_password=XXX\" if you don't need user/password to log on that node\n\n\n[master]\nregards-master\n\n[slaves]\n[5] Removes the next line if you have only one server, or adapt\nregards-slave-[1:2]\n\n[docker_nodes]\nregards-master\n[6] Removes the next line if you have only one server, or adapt\nregards-slave-[1:2]\n\n[swarm_manager]\nregards-master\n\n[swarm_workers]\n[7] Removes the next line if you have only one server, or adapt\nregards-slave-[1:2]\nFIN_CAT\n"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Variable"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"ansible_host"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"hostname of the server"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"ansible_user"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"user login to log on by ssh to configure & install"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"ansible_password"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"user password to log on by ssh to configure & install"})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Remove all lines begining with ",(0,t.jsx)(s.code,{children:"[1-7]"})," and make appropriate changes following your needs. You have two examples provided inside regards-docker-master: ",(0,t.jsx)(s.code,{children:"inventories/demo/hosts"})," and ",(0,t.jsx)(s.code,{children:"inventories/multihosts/hosts"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"create-your-group_vars-folder",children:"Create your group_vars folder"}),"\n",(0,t.jsxs)(s.p,{children:["Now you've configured where you want to install REGARDS, you need to configure what and how you want to install, using a folder named ",(0,t.jsx)(s.code,{children:"group_vars"})," inside your inventory."]}),"\n",(0,t.jsx)(s.h4,{id:"copy-an-existing-group_vars-folder",children:"Copy an existing group_vars folder"}),"\n",(0,t.jsxs)(s.p,{children:["First, you need to initialise the ",(0,t.jsx)(s.code,{children:"group_vars"})," folder using one of these commands, depending of the number of servers you have :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# cd regards-docker-master/inventories/regards-cnes\n# Install REGARDS on one server - using demo inventory\ncp -R ../../demo/group_vars ./\n\n# Install REGARDS on one server when you don't want any security activated. \n# In that case, you need to setup SWARM by YOURSELF, as this is trivial and documented out there\n# Use it when you install REGARDS on your own developper PC and not a distant server.\ncp -R ../../demo-insecure/group_vars ./\n\n# Install REGARDS on several servers - using multihosts inventory\ncp -R ../../multihosts/group_vars ./\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Following chapter explains how to adapt these configurations to your needs, dependending the inventory you choosed. You can find ",(0,t.jsx)(s.a,{href:"/docs/1.15/setup/swarm/advanced/introduction",children:"here"})," the full list of possibilities that our playbook offers."]}),"\n",(0,t.jsx)(s.h4,{id:"customise-a-demos-based-inventory",children:"Customise a demo's based inventory"}),"\n",(0,t.jsxs)(s.p,{children:["Edit the file ",(0,t.jsx)(s.code,{children:"regards-cnes/group_vars/all/main.yml"})," with :"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Variable"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_stack.master_node_host_name"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["Server hostname where the regards stack is installed. For local installation you can use the ",(0,t.jsx)(s.code,{children:"hostname"})," unix command to find it"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_stack.workdir"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"REGARDS swarm stack install directory"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_stack.docker.workdir"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Docker working directory"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_stack.docker.network_interface"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["Name of the network interface used to access to your server. For local installation you can use the ",(0,t.jsx)(s.code,{children:"ifconfig"})," unix command to find it"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_regards.version"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Version of REGARDS to install"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_regards.project_name"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Name of the first project created on REGARDS automagically"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"customise-a-demos-based-inventory-1",children:"Customise a demo's based inventory"}),"\n",(0,t.jsxs)(s.p,{children:["Edit the file ",(0,t.jsx)(s.code,{children:"regards-cnes/group_vars/all/main.yml"})," with :"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Variable"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_stack.master_node_host_name"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["Server hostname where the regards stack is installed. For local installation you can use the ",(0,t.jsx)(s.code,{children:"hostname"})," unix command to find it"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_stack.workdir"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"REGARDS swarm stack install directory"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_stack.docker.workdir"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Docker working directory"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_stack.docker.network_interface"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["Name of the network interface used to access to your server. For local installation you can use the ",(0,t.jsx)(s.code,{children:"ifconfig"})," unix command to find it"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_regards.your_user"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"The name of your user. All REGARDS process and created files will be owned by your linux user"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_regards.your_user_id"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["The id related to your user. Runs the command ",(0,t.jsx)(s.code,{children:"id"})," to get that value"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_regards.version"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Version of REGARDS to install"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_regards.project_name"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Name of the first project created on REGARDS automagically"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"customise-a-multihostss-based-inventory",children:"Customise a multihosts's based inventory"}),"\n",(0,t.jsxs)(s.p,{children:["Edit the file ",(0,t.jsx)(s.code,{children:"regards-cnes/group_vars/all/main.yml"})," with :"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Variable"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_stack.master_node_host_name"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["Server hostname where the regards stack is installed. For local installation you can use the ",(0,t.jsx)(s.code,{children:"hostname"})," unix command to find it"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_stack.workdir"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"REGARDS swarm stack install directory"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_stack.docker.workdir"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Docker working directory"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_stack.docker.network_interface"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["Name of the network interface used to access to your server. For local installation you can use the ",(0,t.jsx)(s.code,{children:"ifconfig"})," unix command to find it"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_regards.version"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Version of REGARDS to install"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"global_regards.project_name"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Name of the first project created on REGARDS automagically"})]})]})]}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsxs)(s.p,{children:["In multi nodes deployment mode, the ",(0,t.jsx)(s.code,{children:"global_stack.workdir"})," value have to be the same accessible directory on each nodes (e.g. NFS mount)."]})}),"\n",(0,t.jsx)(s.h2,{id:"install-the-stack",children:"Install the stack"}),"\n",(0,t.jsx)(s.h3,{id:"preamble",children:"Preamble"}),"\n",(0,t.jsxs)(s.p,{children:["Once inventory configuration has been saved, you can install Docker SWARM and REGARDS.",(0,t.jsx)(s.br,{}),"\n","If you want an insecure REGARDS install on your desktop and you know what you're doing, you can search for a tutorial out there to install Docker SWARM on your computer then executes the playbook ",(0,t.jsx)(s.code,{children:"regards.yml"}),".\nIf you're OK with a secure installation of SWARM, execute the playbook ",(0,t.jsx)(s.code,{children:"setup-vm.yml"})," which setup swarm and secures it, then pursue with the ",(0,t.jsx)(s.code,{children:"regards.yml"})," playbook."]}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsxs)(s.p,{children:["Run the command ",(0,t.jsx)(s.code,{children:"python --version"})," on the server where you want to install REGARDS.",(0,t.jsx)(s.br,{}),"\n","If it returns ",(0,t.jsx)(s.code,{children:"v2.x"}),", you need to :"]}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["edit the file ",(0,t.jsx)(s.code,{children:"inventories/<inventory name>/docker_nodes/main.yml"})," and edit the value used on ",(0,t.jsx)(s.code,{children:"python_version"}),". Set that value to ",(0,t.jsx)(s.code,{children:"python_version: 2"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["if ",(0,t.jsx)(s.code,{children:"ansible-playbook"})," does not work, you can try to use ",(0,t.jsx)(s.code,{children:"ansible-playbook-2.7"})," instead."]}),"\n"]})]}),"\n",(0,t.jsx)(s.h3,{id:"ansible-cli-overview",children:"Ansible CLI overview"}),"\n",(0,t.jsx)(s.p,{children:"Let's see how you can use Ansible playbook CLI."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# cd regards-docker-master/\nansible-playbook -i inventories/<inventory name> <playbook file>.yml <additional parameters>\n"})}),"\n",(0,t.jsx)(s.p,{children:"With :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"<inventory name>"})," is the name of the inventory you've created"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"<additional parameters>"})," can be replaced by ",(0,t.jsx)(s.code,{children:"--ask-become-pass"})," if you need to give the password when you switch to root, empty otherwise"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"<playbook file>.yml"})," are playbook you're executing, here we want to install SWARM then REGARDS."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"These commands will succeed with one of these lovely message :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"[..]\nPLAY RECAP *******************************************************************************************************\nregards-master                 : ok=23   changed=8    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0\nregards-slave                 : ok=23   changed=8    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["Seeing red lines is normal, as some tasks produce error that can safely ignored if they do not block the playbook execution. What really matters is ",(0,t.jsx)(s.code,{children:"failed=0"})," in the recap."]})}),"\n",(0,t.jsx)(s.h3,{id:"secure-swarm-install",children:"Secure SWARM install"}),"\n",(0,t.jsx)(s.p,{children:"Let's see how to do a secure installation:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# cd regards-docker-master/\nansible-playbook -i inventories/<inventory name> setup-vm.yml <additional parameters>\n\n\n"})}),"\n",(0,t.jsx)(s.p,{children:"With an example :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# cd regards-docker-master/\n> ansible-playbook -i inventories/regards-cnes setup-vm.yml --ask-become-pass\n[..]\nPLAY RECAP *******************************************************************************************************\nregards-master   : ok=158 changed=8 unreachable=0 failed=0 skipped=22 rescued=0 ignored=0\nregards-slave-1  : ok=86 changed=8 unreachable=0 failed=0 skipped=4 rescued=0 ignored=0\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["If you are installing locally REGARDS (ansible_connection=local inside inventories/",(0,t.jsx)(s.code,{children:"<inventory name>"}),"/hosts),\nthe ",(0,t.jsx)(s.code,{children:"setup-vm.yml"})," has added you into a group but it won't be effective until you've restarted your session.\nEnsures the command id return you the group ",(0,t.jsx)(s.code,{children:"dockermapgid"})," or the next playbook will timeout."]})}),"\n",(0,t.jsx)(s.h3,{id:"login-to-docker-registry",children:"Login to Docker registry"}),"\n",(0,t.jsx)(s.p,{children:"We're currently storing our Docker image on Github. To be able to fetch them, you require an access token."}),"\n",(0,t.jsxs)(s.p,{children:["Follow the ",(0,t.jsx)(s.a,{href:"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token",children:"first 7 steps in this guide"})," to get an overview of the Github interface and how to create a personal token."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.strong,{children:["Create a token with a ",(0,t.jsx)(s.code,{children:"read:packages"})," scope."]})}),"\n",(0,t.jsxs)(s.p,{children:["To sum up the ",(0,t.jsx)(s.a,{href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry",children:"official guide"}),", execute the following two commands:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"# Connect threw SSH to your master node and use the token to login in to Github \nexport CR_PAT=<your token access>\necho $CR_PAT | docker login ghcr.io --password-stdin -u <your username>\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"If you do not fetch image directly on Github, adapt this step to your environment, as you may need to login on your private Docker registry."})}),"\n",(0,t.jsx)(s.h3,{id:"regards-install",children:"REGARDS install"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# cd regards-docker-master/\nansible-playbook -i inventories/<inventory name> regards.yml <additional parameters>\n"})}),"\n",(0,t.jsx)(s.p,{children:"With an example :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"> ansible-playbook -i inventories/regards-cnes regards.yml --ask-become-pass\n[..]\nPLAY RECAP *******************************************************************************************************\nregards-master   : ok=23 changed=8 unreachable=0 failed=0 skipped=1 rescued=0 ignored=0\nregards-slave-1  : ok=23 changed=8 unreachable=0 failed=0 skipped=1 rescued=0 ignored=0\n"})}),"\n",(0,t.jsx)(s.h3,{id:"test-regards-is-up",children:"Test REGARDS is up"}),"\n",(0,t.jsxs)(s.p,{children:["Connect to the master node of your stack, and open the REGARDS working directory.",(0,t.jsx)(s.br,{}),"\n","To do that, you need these two values from your inventories :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"group_workdir_local: /opt/regards/\ngroup_stack_name: regards\n"})}),"\n",(0,t.jsxs)(s.p,{children:["It means your stack is installed inside ",(0,t.jsx)(s.code,{children:"/opt/regards/regards"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Open this folder and go to the cli folder:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cd /opt/regards/regards/cli\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Execute ",(0,t.jsx)(s.code,{children:"./health.sh all"}),", you should get the following :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"$ ./health.sh all\n[200]\tadmin\n[200]\tdam\n[200]\taccess_project\n[200]\tadmin_instance\n[200]\tcatalog\n[200]\taccess_instance\n[200]\tauthentication\n"})}),"\n",(0,t.jsxs)(s.p,{children:["You can monitor and administrate the deployed stack thanks to cli commands as explained ",(0,t.jsx)(s.a,{href:"/docs/1.15/setup/swarm/cli/",children:"here"})]}),"\n",(0,t.jsx)(s.h3,{id:"quick-setup-conclusion",children:"Quick setup conclusion"}),"\n",(0,t.jsx)(s.p,{children:"Still there ? Congratulations, you've just finished the first step of the install!"}),"\n",(0,t.jsx)(s.p,{children:"Several web interfaces are accessible on your server now :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Instance administration : http://",(0,t.jsx)(s.code,{children:"<server name>"}),"/admin"]}),"\n",(0,t.jsxs)(s.li,{children:["Administration : http://",(0,t.jsx)(s.code,{children:"<server name>"}),"/admin/",(0,t.jsx)(s.code,{children:"<first project>"})]}),"\n",(0,t.jsxs)(s.li,{children:["User interface : http://",(0,t.jsx)(s.code,{children:"<server name>"}),"/user/",(0,t.jsx)(s.code,{children:"<first project>"})]}),"\n",(0,t.jsxs)(s.li,{children:["Portal : http://",(0,t.jsx)(s.code,{children:"<server name>"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fake SMTP server : http://",(0,t.jsx)(s.code,{children:"<server name>"}),":5081"]}),"\n",(0,t.jsxs)(s.li,{children:["Phppgadmin : http://",(0,t.jsx)(s.code,{children:"<server name>"}),":5080"]}),"\n",(0,t.jsxs)(s.li,{children:["RabbitMQ admin : http://",(0,t.jsx)(s.code,{children:"<server name>"}),":15672"]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{title:"Don't go away !",type:"info",children:(0,t.jsxs)(s.p,{children:["You have just deployed the core of REGARDS, but many REGARDS microservices are still missing...",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.strong,{children:"Click on the link Introduction just below"}),", you will discover how to customize your inventory to improve your deployment."]})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>o});var t=n(96540);const r={},i=t.createContext(r);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);