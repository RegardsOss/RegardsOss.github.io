"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[93478],{54783:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=r(74848),t=r(28453);const o={id:"swarm-networks",title:"Networks",slug:"/setup/swarm/advanced/swarm-networks"},i=void 0,a={id:"setup/advanced/swarm-networks",title:"Networks",description:"This guide allows you to tune SWARM networks thanks to your inventory.",source:"@site/versioned_docs/version-1.15/setup/advanced/swarm-networks.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/swarm-networks",permalink:"/docs/1.15/setup/swarm/advanced/swarm-networks",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/setup/advanced/swarm-networks.md",tags:[],version:"1.15",frontMatter:{id:"swarm-networks",title:"Networks",slug:"/setup/swarm/advanced/swarm-networks"},sidebar:"install",previous:{title:"Mount volumes, configs...",permalink:"/docs/1.15/setup/swarm/advanced/swarm-mount"},next:{title:"Securise using HTTPS",permalink:"/docs/1.15/setup/swarm/advanced/regards-https/"}},c={},d=[{value:"Internal network",id:"internal-network",level:3},{value:"Swarm networks",id:"swarm-networks",level:4},{value:"REGARDS network",id:"regards-network",level:4},{value:"External networks",id:"external-networks",level:3},{value:"Preferred networks",id:"preferred-networks",level:3}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This guide allows you to tune SWARM networks thanks to your inventory."}),"\n",(0,s.jsx)(n.h3,{id:"internal-network",children:"Internal network"}),"\n",(0,s.jsx)(n.admonition,{title:"ensure networks are reserved",type:"danger",children:(0,s.jsxs)(n.p,{children:["Netmask, defined inside ",(0,s.jsx)(n.a,{href:"#swarm-network",children:"Swarm networks"})," and ",(0,s.jsx)(n.a,{href:"#regards-network",children:"REGARDS network"}),", must be reserved by\nyour ",(0,s.jsx)(n.strong,{children:"corporation"})," to prevent the usage of these reserved masks.",(0,s.jsx)(n.br,{}),"\n","Otherwise, a machine that has an IP inside one of these reserved masks ",(0,s.jsx)(n.strong,{children:"would not be reachable from your REGARDS\ncluster"}),"."]})}),"\n",(0,s.jsx)(n.h4,{id:"swarm-networks",children:"Swarm networks"}),"\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.em,{children:"demo inventories"})," defines several communication networks used by Swarm nodes to communicate to each\nother.",(0,s.jsx)(n.br,{}),"\n","Default values are :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Inside inventories/<inventory name>/group_vars/docker_nodes/main.yml\ndocker_bip: 10.122.20.1/24\ndocker_ingress_network: 10.122.22.0/24\ndocker_ingress_network_gateway: 10.122.22.1\ndocker_gwbridge_network: 10.122.21.0/24\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"See more about these networks on the Docker documentation:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/swarm/ingress/",children:"Ingress network for routing mesh"})," enables each node in the swarm to\naccept connections on published ports for any service running in the swarm"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/swarm/networking/#customize-the-docker_gwbridge",children:"The docker_gwbridge is a virtual bridge"}),"\nthat connects the overlay networks (including the ingress network) to an individual Docker daemon's physical network"]}),"\n",(0,s.jsxs)(n.li,{children:["Docker uses a software bridge which lets containers connected to\nthe ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/network/drivers/bridge/#use-the-default-bridge-network",children:"same bridge network communicate"})]}),"\n"]})]}),"\n",(0,s.jsx)(n.h4,{id:"regards-network",children:"REGARDS network"}),"\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.em,{children:"demo inventories"})," defines an internal microservice communication network with the following value :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# Inside inventories/<inventory name>/group_vars/regards_nodes/main.yml\ngroup_docker_network_ip_network: "10.11.7."\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This property allows to create an ",(0,s.jsx)(n.em,{children:"overlay"})," network dedicated to our microservices with:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["a subnet in ",(0,s.jsx)(n.em,{children:"0/24"})]}),"\n",(0,s.jsx)(n.li,{children:"and its gateway."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"external-networks",children:"External networks"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"This option is facultative."})}),"\n",(0,s.jsxs)(n.p,{children:["To define external access to microservices, you must first declare the ",(0,s.jsx)(n.strong,{children:"external networks"})," to use as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"group_config_mservices:\n  external_networks:\n    - network: foo\n      name: net_foo\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Generated configuration",type:"info",children:(0,s.jsxs)(n.p,{children:["This configuration generates networks top-level element as defined in\nthe ",(0,s.jsx)(n.a,{href:"https://github.com/compose-spec/compose-spec/blob/master/spec.md#networks-top-level-element",children:"compose specification"}),"."]})}),"\n",(0,s.jsx)(n.admonition,{title:"Reminder",type:"warning",children:(0,s.jsxs)(n.p,{children:["The creation of these ",(0,s.jsx)(n.strong,{children:"external networks"})," is not handled by regards playbook. You must create them beforehand by your\nown!"]})}),"\n",(0,s.jsxs)(n.p,{children:["It is then possible to define specific connections to the following microservices: ",(0,s.jsx)(n.em,{children:"gateway"}),", ",(0,s.jsx)(n.em,{children:"authentication"}),",\n",(0,s.jsx)(n.em,{children:"catalog"})," or ",(0,s.jsx)(n.em,{children:"front"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"For instance:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"group_docker_mservices:\n  catalog:\n    configuration:\n      external_networks:\n        - network: foo\n          aliases:\n            - foo.catalog\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Generated configuration",type:"info",children:(0,s.jsxs)(n.p,{children:["This configuration generates networks and optionnaly aliases as\ndefined ",(0,s.jsx)(n.a,{href:"https://github.com/compose-spec/compose-spec/blob/master/spec.md#aliases",children:"here"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"preferred-networks",children:"Preferred networks"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"This option is facultative."})}),"\n",(0,s.jsxs)(n.p,{children:["As a side effect when ",(0,s.jsx)(n.strong,{children:"several networks"})," are defined inside your SWARM network, you will have to specify the preferred\nnetworks in order to microservice to talk to each other without network issue."]}),"\n",(0,s.jsxs)(n.p,{children:["So to force internal microservice communication to use ",(0,s.jsx)(n.strong,{children:"internal network"}),", you will have to setup the following\nproperties:"]}),"\n",(0,s.jsx)(n.p,{children:"For instance:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"group_config_mservices:\n  # Value depends on your internal network configuration\n  preferred_networks: 10.11\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var s=r(96540);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);