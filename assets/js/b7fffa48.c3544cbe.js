"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[54681],{54738:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=o(74848),n=o(28453);const s={id:"backend-framework-starters-hateoas",title:"HATEOAS starter",slug:"/development/backend/framework/starters/hateoas/"},a="1. Configuration",i={id:"development/framework/starters/backend-framework-starters-hateoas",title:"HATEOAS starter",description:"Nothing to configure at the moment.",source:"@site/docs/development/framework/starters/hateoas-starter.md",sourceDirName:"development/framework/starters",slug:"/development/backend/framework/starters/hateoas/",permalink:"/docs/development/backend/framework/starters/hateoas/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/framework/starters/hateoas-starter.md",tags:[],version:"current",frontMatter:{id:"backend-framework-starters-hateoas",title:"HATEOAS starter",slug:"/development/backend/framework/starters/hateoas/"},sidebar:"dev",previous:{title:"GSON starter",permalink:"/docs/development/backend/framework/starters/gson/"},next:{title:"JPA instance starter",permalink:"/docs/development/backend/framework/starters/jpa-instance/"}},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"1-configuration",children:"1. Configuration"})}),"\n",(0,r.jsx)(t.p,{children:"Nothing to configure at the moment."}),"\n",(0,r.jsx)(t.p,{children:"Dependency :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/development/backend/framework/starters/security/",children:"Security starter"})}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["At the moment, this starter only accepts ",(0,r.jsx)(t.strong,{children:"@RequestMapping"})," annotation to work fine."]})}),"\n",(0,r.jsx)(t.h1,{id:"2-autoconfiguration",children:"2. Autoconfiguration"}),"\n",(0,r.jsxs)(t.p,{children:["Starter autoconfigures an ",(0,r.jsx)(t.strong,{children:"IResourceService"})," that helps to expose HATEAOS links according to security access configuration."]}),"\n",(0,r.jsx)(t.h1,{id:"3-how-to",children:"3. How to"}),"\n",(0,r.jsxs)(t.p,{children:["If your controller manages a single POJO, implements ",(0,r.jsx)(t.code,{children:"IResourceController <T\\>"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In its ",(0,r.jsx)(t.strong,{children:"toResource"})," method, define all links using an autowired ",(0,r.jsx)(t.strong,{children:"IResourceService"})," regardless security authorization. Only authorized links will be really exposed."]}),"\n",(0,r.jsx)(t.p,{children:"Sample :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'@RestController\n@RequestMapping("/pojos")\npublic class MyPojoController implements IResourceController<MyPojo> {\n\t...\n\t@Autowired\n\tprivate IResourceService resourceService;\n\t...\n    @ResourceAccess(description = "List all pojos")\n    @GetMapping\n    public ResponseEntity<List<Resource<MyPojo>>> getPojos() {\n        final List<MyPojo> pojos = ...\n        return ResponseEntity.ok(toResources(pojos));\n    }\n\t...\n    @ResourceAccess(description = "Get a pojo")\n    @GetMapping("/{pPojoId}")\n    public ResponseEntity<Resource<MyPojo>> getPojo(@PathVariable Long pPojoId) {\n        final MyPojo pojo = ...\n        return ResponseEntity.ok(toResource(pojo));\n    }\n\t...\n\t@Override\n    public Resource<MyPojo> toResource(MyPojo pPojo) {\n        final Resource<MyPojo> resource = resourceService.toResource(pPojo);\n        resourceService.addLink(resource, this.getClass(), "getPojo", LinkRels.SELF,\n                                MethodParamFactory.build(Long.class, pPojo.getId()));\n        ...\n        return resource;\n    }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var r=o(96540);const n={},s=r.createContext(n);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);