"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[83254],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(g,r(r({ref:n},u),{},{components:t})):a.createElement(g,r({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41318:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const l={id:"backend-framework-modules-plugins",title:"Plugins introduction",sidebar_label:"Plugins introduction",slug:"/development/backend/framework/modules/plugins/"},r=void 0,o={unversionedId:"development/backend/framework/modules/backend-framework-modules-plugins",id:"version-1.7.1/development/backend/framework/modules/backend-framework-modules-plugins",title:"Plugins introduction",description:"Purpose",source:"@site/versioned_docs/version-1.7.1/development/backend/framework/modules/plugins.md",sourceDirName:"development/backend/framework/modules",slug:"/development/backend/framework/modules/plugins/",permalink:"/docs/1.7.1/development/backend/framework/modules/plugins/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/development/backend/framework/modules/plugins.md",tags:[],version:"1.7.1",frontMatter:{id:"backend-framework-modules-plugins",title:"Plugins introduction",sidebar_label:"Plugins introduction",slug:"/development/backend/framework/modules/plugins/"},sidebar:"dev",previous:{title:"How to create a microservice",permalink:"/docs/1.7.1/development/backend/framework/dev-microservice/"},next:{title:"How to create a plugin",permalink:"/docs/1.7.1/development/backend/framework/dev-plugin/"}},p={},s=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to define an extension point",id:"how-to-define-an-extension-point",level:2},{value:"How to create a plugin",id:"how-to-create-a-plugin",level:2},{value:"Plugin reference documentation",id:"plugin-reference-documentation",level:2},{value:"Annotations",id:"annotations",level:3},{value:"<code>PluginInterface</code>",id:"plugininterface",level:4},{value:"<code>Plugin</code>",id:"plugin",level:4},{value:"<code>PluginInit</code>",id:"plugininit",level:4},{value:"<code>PluginDestroy</code>",id:"plugindestroy",level:4},{value:"<code>PluginParameter</code>",id:"pluginparameter",level:4},{value:"Plugin development",id:"plugin-development",level:3},{value:"Plugin deployment",id:"plugin-deployment",level:3}],u={toc:s},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"purpose"},"Purpose"),(0,i.kt)("p",null,"Plugin module is used to promote service adaptability."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Add module dependency to your POM (version depends on the BOM)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>fr.cnes.regards.framework.modules.plugins</groupId>\n    <artifactId>plugins-service</artifactId>\n</dependency>\n")),(0,i.kt)("p",null,"Properties :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"# Comma separated list of plugin packages from which system detects and loads plugin implementations\n# Fallback to fr.cnes.regards if not specified\nregards.plugins.packages-to-scan=\n")),(0,i.kt)("p",null,"vregards.plugins.packages-to-scan"),(0,i.kt)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,i.kt)("p",null,"Module autoconfigures:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PluginService")," to manage plugin lifecycle.")),(0,i.kt)("p",null,"The module relies on a ",(0,i.kt)("strong",{parentName:"p"},"plugin utility library")," to discover and instanciate a plugin. This library can be directly imported for implementation and test purpose with the following configuration :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>fr.cnes.regards.framework.utils</groupId>\n    <artifactId>plugin-utils</artifactId>\n</dependency>\n")),(0,i.kt)("h2",{id:"how-to-define-an-extension-point"},"How to define an extension point"),(0,i.kt)("p",null,"To define an extension point, you have to declare a ",(0,i.kt)("strong",{parentName:"p"},"service contract")," annotated with ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginInterface"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@PluginInterface(description = "Hello sample plugin interface")\npublic interface IHelloPlugin {\n    String hello(String name);\n}\n')),(0,i.kt)("h2",{id:"how-to-create-a-plugin"},"How to create a plugin"),(0,i.kt)("p",null,"On a functionnal point of view, creating a ",(0,i.kt)("strong",{parentName:"p"},"plugin")," is defining a new way to respect a ",(0,i.kt)("strong",{parentName:"p"},"service contract"),". On a developper point of view, it means creating a new class annotated ",(0,i.kt)("inlineCode",{parentName:"p"},"Plugin")," implementing the plugin interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(author = "REGARDS Team", id = "echo", version = "1.0.0", licence = "GPLv3", owner = "CNES")\npublic class HelloPlugin implements IHelloPlugin {\n    \n    @PluginParameter(label = "Message", defaultValue="Hello %s!")\n    private String message;\n\n    @PluginInit\n    private void init() {\n        // Init something after plugin instanciation\n    }\n\n    @Override\n    public String hello(String name) {\n        return String.format(message, name);\n    }\n}\n')),(0,i.kt)("p",null,"As we can see in the above example, ",(0,i.kt)("inlineCode",{parentName:"p"},"HelloPlugin")," fulfils the ",(0,i.kt)("inlineCode",{parentName:"p"},"IHelloPlugin")," service contract."),(0,i.kt)("h2",{id:"plugin-reference-documentation"},"Plugin reference documentation"),(0,i.kt)("h3",{id:"annotations"},"Annotations"),(0,i.kt)("h4",{id:"plugininterface"},(0,i.kt)("inlineCode",{parentName:"h4"},"PluginInterface")),(0,i.kt)("p",null,"This annotation identifies an extension point, also called a service contract that is used in business service workflow allowing to adapt behaviour to project requirements."),(0,i.kt)("h4",{id:"plugin"},(0,i.kt)("inlineCode",{parentName:"h4"},"Plugin")),(0,i.kt)("p",null,"This annotation identifies an implementation of an extension point and allows to give useful information on the plugin such as its ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"decription")," ",(0,i.kt)("inlineCode",{parentName:"p"},"version"),", etc."),(0,i.kt)("h4",{id:"plugininit"},(0,i.kt)("inlineCode",{parentName:"h4"},"PluginInit")),(0,i.kt)("p",null,"This annotation is ",(0,i.kt)("strong",{parentName:"p"},"optional")," and is used to initialize a plugin. If used, it must annotates a no-arg method. This method is called after parameter injection on plugin instanciation."),(0,i.kt)("h4",{id:"plugindestroy"},(0,i.kt)("inlineCode",{parentName:"h4"},"PluginDestroy")),(0,i.kt)("p",null,"This annotation is ",(0,i.kt)("strong",{parentName:"p"},"optional")," and is used to properly destroy a plugin. If used, it must annotates a no-arg method. This method is called when plugin is destroyed by the plugin service."),(0,i.kt)("h4",{id:"pluginparameter"},(0,i.kt)("inlineCode",{parentName:"h4"},"PluginParameter")),(0,i.kt)("p",null,"This annotation is ",(0,i.kt)("strong",{parentName:"p"},"optional")," and can be used several times, as many times as there are parameters. It allows accurate plugin configuration."),(0,i.kt)("p",null,"Plugin parameters are injected after plugin class instanciation and before init method was called."),(0,i.kt)("p",null,"Plugin parameters supports following types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"String"),(0,i.kt)("li",{parentName:"ul"},"Byte"),(0,i.kt)("li",{parentName:"ul"},"Short"),(0,i.kt)("li",{parentName:"ul"},"Integer"),(0,i.kt)("li",{parentName:"ul"},"Long"),(0,i.kt)("li",{parentName:"ul"},"Float"),(0,i.kt)("li",{parentName:"ul"},"Double"),(0,i.kt)("li",{parentName:"ul"},"Boolean"),(0,i.kt)("li",{parentName:"ul"},"Collection"),(0,i.kt)("li",{parentName:"ul"},"Plugin interface"),(0,i.kt)("li",{parentName:"ul"},"Map"),(0,i.kt)("li",{parentName:"ul"},"Plain Old Java Object (i.e. POJO)")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Parameter configurations are backed up as plain JSON objects so all parameters must be serializabled unequivocally!")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"All parameters (i.e. class fields), even in complex objects, must be annotated with ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginParameter"),"!")),(0,i.kt)("h3",{id:"plugin-development"},"Plugin development"),(0,i.kt)("p",null,"As seen above, develop a plugin just means implementing ",(0,i.kt)("strong",{parentName:"p"},"pure plain JAVA objects"),"."),(0,i.kt)("p",null,"Start by implementing a service contract interface and afterwards, just annotate your implementation with required plugin annotations."),(0,i.kt)("p",null,"Before deploying plugin, you should test it using ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginUtils"),"."),(0,i.kt)("p",null,"Hereunder, this is a sample test built with JUnit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    @Test\n    public void helloPluginTest() {\n\n        String helloFormat = "Welcome %s!";\n        String name = "John";\n        // Set parameter configuration (override default)\n        Set<PluginParameter> parameters = PluginParametersFactory.build().addParameter("message", helloFormat).getParameters();\n        // Init plugin instanciation context\n        PluginUtils.setup("your.root.package");\n        // Instanciate plugin\n        IHelloPlugin hello = PluginUtils.getPlugin(parameters, HelloPlugin.class, new HashMap<>());\n        // Test plugin\n        Assert.assertEquals(String.format(helloFormat, name), hello.hello());\n    }\n')),(0,i.kt)("h3",{id:"plugin-deployment"},"Plugin deployment"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Plugins are loaded in the same classloader as the microservice so you have to be very careful with their deployments. Plugin library and dependencies have to be compatible with the target microservice.")),(0,i.kt)("p",null,"To deploy your plugin, we advise you this procedure :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Build you plugin as a simple JAR,"),(0,i.kt)("li",{parentName:"ul"},"Deploy this JAR and all its ",(0,i.kt)("strong",{parentName:"li"},"specific dependencies")," in the plugin directory of the target microservice,"),(0,i.kt)("li",{parentName:"ul"},"Be careful not to add library already loaded by microservice to avoid library inconsistency."),(0,i.kt)("li",{parentName:"ul"},"Restart the microservice.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"To be loaded in a microservice, plugin scanned packages has to be declared properly in microservice properties. By default, only the package ",(0,i.kt)("inlineCode",{parentName:"p"},"fr.cnes.regards")," is scanned (Look at the properties above).")))}c.isMDXComponent=!0}}]);