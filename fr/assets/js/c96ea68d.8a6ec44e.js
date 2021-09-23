"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[13804],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73218:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={id:"backend-framework-starters-hateoas",title:"HATEOAS starter",slug:"/development/backend/framework/starters/hateoas/"},c="1. Configuration",l={unversionedId:"development/backend/framework/starters/backend-framework-starters-hateoas",id:"development/backend/framework/starters/backend-framework-starters-hateoas",isDocsHomePage:!1,title:"HATEOAS starter",description:"Nothing to configure at the moment.",source:"@site/docs/development/backend/framework/starters/hateoas-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/hateoas/",permalink:"/fr/docs/development/backend/framework/starters/hateoas/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/framework/starters/hateoas-starter.md",tags:[],version:"current",frontMatter:{id:"backend-framework-starters-hateoas",title:"HATEOAS starter",slug:"/development/backend/framework/starters/hateoas/"},sidebar:"dev",previous:{title:"GSON starter",permalink:"/fr/docs/development/backend/framework/starters/gson/"},next:{title:"JPA instance starter",permalink:"/fr/docs/development/backend/framework/starters/jpa-instance/"}},p=[],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-configuration"},"1","."," Configuration"),(0,a.kt)("p",null,"Nothing to configure at the moment."),(0,a.kt)("p",null,"Dependency :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../security/"},"Security starter"))),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"At the moment, this starter only accepts ",(0,a.kt)("strong",{parentName:"p"},"@RequestMapping")," annotation to work fine."))),(0,a.kt)("h1",{id:"2-autoconfiguration"},"2","."," Autoconfiguration"),(0,a.kt)("p",null,"Starter autoconfigures an ",(0,a.kt)("strong",{parentName:"p"},"IResourceService")," that helps to expose HATEAOS links according to security access configuration."),(0,a.kt)("h1",{id:"3-how-to"},"3","."," How to"),(0,a.kt)("p",null,"If your controller manages a single POJO, implements ",(0,a.kt)("strong",{parentName:"p"},"IResourceController <T",">"),"."),(0,a.kt)("p",null,"In its ",(0,a.kt)("strong",{parentName:"p"},"toResource")," method, define all links using an autowired ",(0,a.kt)("strong",{parentName:"p"},"IResourceService")," regardless security authorization. Only authorized links will be really exposed."),(0,a.kt)("p",null,"Sample :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/pojos")\npublic class MyPojoController implements IResourceController<MyPojo> {\n    ...\n    @Autowired\n    private IResourceService resourceService;\n    ...\n    @ResourceAccess(description = "List all pojos")\n    @GetMapping\n    public ResponseEntity<List<Resource<MyPojo>>> getPojos() {\n        final List<MyPojo> pojos = ...\n        return ResponseEntity.ok(toResources(pojos));\n    }\n    ...\n    @ResourceAccess(description = "Get a pojo")\n    @GetMapping("/{pPojoId}")\n    public ResponseEntity<Resource<MyPojo>> getPojo(@PathVariable Long pPojoId) {\n        final MyPojo pojo = ...\n        return ResponseEntity.ok(toResource(pojo));\n    }\n    ...\n    @Override\n    public Resource<MyPojo> toResource(MyPojo pPojo) {\n        final Resource<MyPojo> resource = resourceService.toResource(pPojo);\n        resourceService.addLink(resource, this.getClass(), "getPojo", LinkRels.SELF,\n                                MethodParamFactory.build(Long.class, pPojo.getId()));\n        ...\n        return resource;\n    }\n}\n')))}m.isMDXComponent=!0}}]);