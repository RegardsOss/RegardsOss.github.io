"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[13998],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=o,f=m["".concat(d,".").concat(c)]||m[c]||p[c]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98724:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"backend-framework-starters-module",title:"Module starter",slug:"/development/backend/framework/starters/module/"},d=void 0,u={unversionedId:"development/backend/framework/starters/backend-framework-starters-module",id:"version-1.6.0/development/backend/framework/starters/backend-framework-starters-module",title:"Module starter",description:"Purpose",source:"@site/versioned_docs/version-1.6.0/development/backend/framework/starters/module-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/module/",permalink:"/docs/1.6.0/development/backend/framework/starters/module/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/backend/framework/starters/module-starter.md",tags:[],version:"1.6.0",frontMatter:{id:"backend-framework-starters-module",title:"Module starter",slug:"/development/backend/framework/starters/module/"},sidebar:"version-1.6.0/dev",previous:{title:"Microservice starter",permalink:"/docs/1.6.0/development/backend/framework/starters/microservice/"},next:{title:"Multitenant starter",permalink:"/docs/1.6.0/development/backend/framework/starters/multitenant/"}},s=[{value:"Purpose",id:"purpose",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"How to",id:"how-to",children:[{value:"Implement a module manager",id:"implement-a-module-manager",children:[{value:"Import/export configuration",id:"importexport-configuration",children:[],level:4},{value:"Ready",id:"ready",children:[],level:4},{value:"Restart",id:"restart",children:[],level:4}],level:3}],level:2}],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"This starter :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gives access to standard system exceptions,"),(0,a.kt)("li",{parentName:"ul"},"Centralizes system exception transformation into REST exception,"),(0,a.kt)("li",{parentName:"ul"},"Brings the module manager engine logic.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Add starter dependency to your POM (version depends on the BOM)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>module-regards-starter</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"Business dependency"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>module-regards</artifactId>\n</dependency>\n")),(0,a.kt)("h2",{id:"how-to"},"How to"),(0,a.kt)("h3",{id:"implement-a-module-manager"},"Implement a module manager"),(0,a.kt)("p",null,"To do this, you have to implement a module manager inheriting abstract class ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractModuleManager")," (and implementing ",(0,a.kt)("inlineCode",{parentName:"p"},"IModuleManager"),") and ",(0,a.kt)("strong",{parentName:"p"},"annotated as a Spring component"),"."),(0,a.kt)("p",null,"In the same package as your module configuration manager, you have to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"module.properties")," file containing following required properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Your module properties\nmodule.id=<your module id>\nmodule.name=<your module name for display purpose>\nmodule.description=<your module description for display purpose>\nmodule.version=<your module version>\nmodule.author=<author>\nmodule.legalOwner=<author,client, ...>\nmodule.documentation=<url>\n")),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"IModuleManager#importConfiguration")," will only be called if imported file matches the same ",(0,a.kt)("inlineCode",{parentName:"p"},"module.id")," properties."),(0,a.kt)("p",null,"At last, to adjust your exported JSON configuration, you can annotate your exported POJO with ",(0,a.kt)("inlineCode",{parentName:"p"},"@ConfigIgnore"),"."),(0,a.kt)("h4",{id:"importexport-configuration"},"Import/export configuration"),(0,a.kt)("p",null,"For instance,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Service\npublic class MyModuleManager extends AbstractModuleManager {\n\n    @Override\n    public void importConfiguration(ModuleConfiguration configuration) throws ModuleException {\n        for (ModuleConfigurationItem<?> item : configuration.getConfiguration()) {\n            if (MyPOJO.class.isAssignableFrom(item.getKey())) {\n                MyPOJO pojo = item.getTypedValue();\n                // Do something to import configuration\n            }\n        }\n    }\n\n    @Override\n    public ModuleConfiguration exportConfiguration() {\n        List<ModuleConfigurationItem<?>> configuration = new ArrayList<>();\n        // Fill list using ModuleConfigurationItem#build\n        return ModuleConfiguration.build(info, configuration);\n    }\n}\n")),(0,a.kt)("h4",{id:"ready"},"Ready"),(0,a.kt)("p",null,"Override default method. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isReady")," is only called if ",(0,a.kt)("inlineCode",{parentName:"p"},"isReadyImplemented")," return ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    default ModuleReadinessReport<S> isReady() {\n        throw new UnsupportedOperationException("Ready feature not implemented");\n    }\n\n    default boolean isReadyImplemented() {\n        return false;\n    }\n')),(0,a.kt)("h4",{id:"restart"},"Restart"),(0,a.kt)("p",null,"Override default method."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"restart")," is only called if ",(0,a.kt)("inlineCode",{parentName:"p"},"isRestartImplemented")," return ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    default ModuleRestartReport restart() {\n        throw new UnsupportedOperationException("Restart feature not implemented");\n    }\n\n    default boolean isRestartImplemented() {\n        return false;\n    }\n')))}m.isMDXComponent=!0}}]);