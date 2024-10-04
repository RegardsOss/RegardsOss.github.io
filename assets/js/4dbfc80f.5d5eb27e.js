"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[22336],{62357:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=a(74848),s=a(28453);const r={title:"Elasticsearch",slug:"/setup/swarm/advanced/elasticsearch/"},i=void 0,o={id:"setup/swarm/advanced/swarm-elasticsearch",title:"Elasticsearch",description:"This guide allows you to configure the mandatory Elasticsearch server deployed with your Regards swarm stack.",source:"@site/docs/setup/swarm/advanced/swarm-elasticsearch.md",sourceDirName:"setup/swarm/advanced",slug:"/setup/swarm/advanced/elasticsearch/",permalink:"/docs/setup/swarm/advanced/elasticsearch/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/setup/swarm/advanced/swarm-elasticsearch.md",tags:[],version:"current",frontMatter:{title:"Elasticsearch",slug:"/setup/swarm/advanced/elasticsearch/"},sidebar:"install",previous:{title:"Web Application Firewall",permalink:"/docs/setup/swarm/advanced/web-application-firewall/"},next:{title:"Placement constraint",permalink:"/docs/setup/swarm/advanced/placement-constraint"}},c={},l=[{value:"Cluster configuration",id:"cluster-configuration",level:2},{value:"Memory configuration",id:"memory-configuration",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This guide allows you to configure the mandatory Elasticsearch server deployed with your Regards swarm stack."}),"\n",(0,t.jsx)(n.admonition,{title:"Elasticsearch Configuration",type:"info",children:(0,t.jsxs)(n.p,{children:["Edit your inventory file ",(0,t.jsx)(n.code,{children:"inventories/<your inventory>/group_vars/regards_nodes/main.yml"})," to override Elasticsearch\ninformation"]})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"For operational environments, it is essential to deploy Elasticsearch in a cluster."})}),"\n",(0,t.jsx)(n.h2,{id:"cluster-configuration",children:"Cluster configuration"}),"\n",(0,t.jsxs)(n.p,{children:["To deploy a cluster of Elasticsearch nodes, you need to set ",(0,t.jsx)(n.code,{children:"global_service"})," to ",(0,t.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"group_docker_cots:\n  elasticsearch:\n    global_service: true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you don't want all your Swarm nodes to receive a Elasticsearch replica, use ",(0,t.jsx)(n.a,{href:"/docs/setup/swarm/advanced/placement-constraint",children:"Swarm label node placement constraint"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"group_docker_cots:\n  elasticsearch:\n    global_service: true\n    node_label_placement_constraint:\n      key: type\n      value: cots\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This example tells Swarm to deploy a replica of Elasticsearch on every node having a property ",(0,t.jsx)(n.code,{children:"type"})," valued to ",(0,t.jsx)(n.code,{children:"cots"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"memory-configuration",children:"Memory configuration"}),"\n",(0,t.jsx)(n.p,{children:"Elasticsearch heavily relies on the Java heap memory for storing and managing data structures, caches, and buffers. The\nmore memory available, the better the performance of the cluster."}),"\n",(0,t.jsxs)(n.p,{children:["You can configure the heap size using the property ",(0,t.jsx)(n.code,{children:"memoryLimit"})," and the container limit using ",(0,t.jsx)(n.code,{children:"containerLimit"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"group_docker_cots:\n  elasticsearch:\n    memoryLimit: 3.75g\n    containerLimit: 5g\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"You cannot set a maximum heap size value to more than 75% of the container's memory limit."})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var t=a(96540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);