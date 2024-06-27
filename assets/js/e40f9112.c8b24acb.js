"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[91177],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),c=o,f=p["".concat(d,".").concat(c)]||p[c]||m[c]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},14617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={id:"backend-framework-starters-module",title:"Module starter",slug:"/development/backend/framework/starters/module/"},i=void 0,l={unversionedId:"development/backend/framework/starters/backend-framework-starters-module",id:"version-1.11.0/development/backend/framework/starters/backend-framework-starters-module",title:"Module starter",description:"Purpose",source:"@site/versioned_docs/version-1.11.0/development/backend/framework/starters/module-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/module/",permalink:"/docs/1.11.0/development/backend/framework/starters/module/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/backend/framework/starters/module-starter.md",tags:[],version:"1.11.0",frontMatter:{id:"backend-framework-starters-module",title:"Module starter",slug:"/development/backend/framework/starters/module/"},sidebar:"dev",previous:{title:"Microservice starter",permalink:"/docs/1.11.0/development/backend/framework/starters/microservice/"},next:{title:"Multitenant starter",permalink:"/docs/1.11.0/development/backend/framework/starters/multitenant/"}},d={},u=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"How to",id:"how-to",level:2},{value:"Implement a module manager",id:"implement-a-module-manager",level:3},{value:"Import/export configuration",id:"importexport-configuration",level:4},{value:"Ready",id:"ready",level:4},{value:"Restart",id:"restart",level:4}],s={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"This starter :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gives access to standard system exceptions,"),(0,o.kt)("li",{parentName:"ul"},"Centralizes system exception transformation into REST exception,"),(0,o.kt)("li",{parentName:"ul"},"Brings the module manager engine logic.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Add starter dependency to your POM (version depends on the BOM)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>module-regards-starter</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,"Business dependency"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>module-regards</artifactId>\n</dependency>\n")),(0,o.kt)("h2",{id:"how-to"},"How to"),(0,o.kt)("h3",{id:"implement-a-module-manager"},"Implement a module manager"),(0,o.kt)("p",null,"To do this, you have to implement a module manager inheriting abstract class ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractModuleManager")," (and implementing ",(0,o.kt)("inlineCode",{parentName:"p"},"IModuleManager"),") and ",(0,o.kt)("strong",{parentName:"p"},"annotated as a Spring component"),"."),(0,o.kt)("p",null,"In the same package as your module configuration manager, you have to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"module.properties")," file containing following required properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"# Your module properties\nmodule.id=<your module id>\nmodule.name=<your module name for display purpose>\nmodule.description=<your module description for display purpose>\nmodule.version=<your module version>\nmodule.author=<author>\nmodule.legalOwner=<author,client, ...>\nmodule.documentation=<url>\n")),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"IModuleManager#importConfiguration")," will only be called if imported file matches the same ",(0,o.kt)("inlineCode",{parentName:"p"},"module.id")," properties."),(0,o.kt)("p",null,"At last, to adjust your exported JSON configuration, you can annotate your exported POJO with ",(0,o.kt)("inlineCode",{parentName:"p"},"@ConfigIgnore"),"."),(0,o.kt)("h4",{id:"importexport-configuration"},"Import/export configuration"),(0,o.kt)("p",null,"For instance,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Service\npublic class MyModuleManager extends AbstractModuleManager {\n\n    @Override\n    public void importConfiguration(ModuleConfiguration configuration) throws ModuleException {\n        for (ModuleConfigurationItem<?> item : configuration.getConfiguration()) {\n            if (MyPOJO.class.isAssignableFrom(item.getKey())) {\n                MyPOJO pojo = item.getTypedValue();\n                // Do something to import configuration\n            }\n        }\n    }\n\n    @Override\n    public ModuleConfiguration exportConfiguration() {\n        List<ModuleConfigurationItem<?>> configuration = new ArrayList<>();\n        // Fill list using ModuleConfigurationItem#build\n        return ModuleConfiguration.build(info, configuration);\n    }\n}\n")),(0,o.kt)("h4",{id:"ready"},"Ready"),(0,o.kt)("p",null,"Override default method. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"isReady")," is only called if ",(0,o.kt)("inlineCode",{parentName:"p"},"isReadyImplemented")," return ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    default ModuleReadinessReport<S> isReady() {\n        throw new UnsupportedOperationException("Ready feature not implemented");\n    }\n\n    default boolean isReadyImplemented() {\n        return false;\n    }\n')),(0,o.kt)("h4",{id:"restart"},"Restart"),(0,o.kt)("p",null,"Override default method."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"restart")," is only called if ",(0,o.kt)("inlineCode",{parentName:"p"},"isRestartImplemented")," return ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    default ModuleRestartReport restart() {\n        throw new UnsupportedOperationException("Restart feature not implemented");\n    }\n\n    default boolean isRestartImplemented() {\n        return false;\n    }\n')))}m.isMDXComponent=!0}}]);