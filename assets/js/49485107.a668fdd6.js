(window.webpackJsonp=window.webpackJsonp||[]).push([[730],{2704:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(m,c(c({ref:t},p),{},{components:r})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var p=2;p<a;p++)s[p]=r[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},804:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(2704)),s={id:"backend-framework-starters-hateoas",title:"HATEOAS starter",slug:"/development/backend/framework/starters/hateoas/"},c={unversionedId:"development/backend/framework/starters/backend-framework-starters-hateoas",id:"version-1.4.0/development/backend/framework/starters/backend-framework-starters-hateoas",isDocsHomePage:!1,title:"HATEOAS starter",description:"1\\. Configuration",source:"@site/versioned_docs/version-1.4.0/development/backend/framework/starters/hateoas-starter.md",slug:"/development/backend/framework/starters/hateoas/",permalink:"/docs/1.4.0/development/backend/framework/starters/hateoas/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/framework/starters/hateoas-starter.md",version:"1.4.0",sidebar:"version-1.4.0/dev",previous:{title:"GSON starter",permalink:"/docs/1.4.0/development/backend/framework/starters/gson/"},next:{title:"JPA instance starter",permalink:"/docs/1.4.0/development/backend/framework/starters/jpa-instance/"}},i=[],p={toc:i};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"1-configuration"},"1","."," Configuration"),Object(a.b)("p",null,"Nothing to configure at the moment."),Object(a.b)("p",null,"Dependency :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../security/"},"Security starter"))),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"At the moment, this starter only accepts ",Object(a.b)("strong",{parentName:"p"},"@RequestMapping")," annotation to work fine."))),Object(a.b)("h1",{id:"2-autoconfiguration"},"2","."," Autoconfiguration"),Object(a.b)("p",null,"Starter autoconfigures an ",Object(a.b)("strong",{parentName:"p"},"IResourceService")," that helps to expose HATEAOS links according to security access configuration."),Object(a.b)("h1",{id:"3-how-to"},"3","."," How to"),Object(a.b)("p",null,"If your controller manages a single POJO, implements ",Object(a.b)("strong",{parentName:"p"},"IResourceController <T",">"),"."),Object(a.b)("p",null,"In its ",Object(a.b)("strong",{parentName:"p"},"toResource")," method, define all links using an autowired ",Object(a.b)("strong",{parentName:"p"},"IResourceService")," regardless security authorization. Only authorized links will be really exposed."),Object(a.b)("p",null,"Sample :"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/pojos")\npublic class MyPojoController implements IResourceController<MyPojo> {\n    ...\n    @Autowired\n    private IResourceService resourceService;\n    ...\n    @ResourceAccess(description = "List all pojos")\n    @GetMapping\n    public ResponseEntity<List<Resource<MyPojo>>> getPojos() {\n        final List<MyPojo> pojos = ...\n        return ResponseEntity.ok(toResources(pojos));\n    }\n    ...\n    @ResourceAccess(description = "Get a pojo")\n    @GetMapping("/{pPojoId}")\n    public ResponseEntity<Resource<MyPojo>> getPojo(@PathVariable Long pPojoId) {\n        final MyPojo pojo = ...\n        return ResponseEntity.ok(toResource(pojo));\n    }\n    ...\n    @Override\n    public Resource<MyPojo> toResource(MyPojo pPojo) {\n        final Resource<MyPojo> resource = resourceService.toResource(pPojo);\n        resourceService.addLink(resource, this.getClass(), "getPojo", LinkRels.SELF,\n                                MethodParamFactory.build(Long.class, pPojo.getId()));\n        ...\n        return resource;\n    }\n}\n')))}l.isMDXComponent=!0}}]);