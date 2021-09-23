"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18936],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},89523:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],l={id:"backend-framework-modules-plugins",title:"Plugins introduction",sidebar_label:"Plugins introduction",slug:"/development/backend/framework/modules/plugins/"},s=void 0,p={unversionedId:"development/backend/framework/modules/backend-framework-modules-plugins",id:"development/backend/framework/modules/backend-framework-modules-plugins",isDocsHomePage:!1,title:"Plugins introduction",description:"Purpose",source:"@site/docs/development/backend/framework/modules/plugins.md",sourceDirName:"development/backend/framework/modules",slug:"/development/backend/framework/modules/plugins/",permalink:"/fr/docs/development/backend/framework/modules/plugins/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/framework/modules/plugins.md",version:"current",frontMatter:{id:"backend-framework-modules-plugins",title:"Plugins introduction",sidebar_label:"Plugins introduction",slug:"/development/backend/framework/modules/plugins/"},sidebar:"dev",previous:{title:"How to create a microservice",permalink:"/fr/docs/development/backend/framework/dev-microservice/"},next:{title:"How to create a plugin",permalink:"/fr/docs/development/backend/framework/dev-plugin/"}},u=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]},{value:"How to define an extension point",id:"how-to-define-an-extension-point",children:[]},{value:"How to create a plugin",id:"how-to-create-a-plugin",children:[]},{value:"Plugin reference documentation",id:"plugin-reference-documentation",children:[{value:"Annotations",id:"annotations",children:[]},{value:"Plugin development",id:"plugin-development",children:[]},{value:"Plugin deployment",id:"plugin-deployment",children:[]}]}],d={toc:u};function c(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"Plugin module is used to promote service adaptability."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Add module dependency to your POM (version depends on the BOM)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>fr.cnes.regards.framework.modules.plugins</groupId>\n    <artifactId>plugins-service</artifactId>\n</dependency>\n")),(0,r.kt)("p",null,"Properties :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# Comma separated list of plugin packages from which system detects and loads plugin implementations\n# Fallback to fr.cnes.regards if not specified\nregards.plugins.packages-to-scan=\n")),(0,r.kt)("p",null,"vregards.plugins.packages-to-scan"),(0,r.kt)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,r.kt)("p",null,"Module autoconfigures:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PluginService")," to manage plugin lifecycle.")),(0,r.kt)("p",null,"The module relies on a ",(0,r.kt)("strong",{parentName:"p"},"plugin utility library")," to discover and instanciate a plugin. This library can be directly imported for implementation and test purpose with the following configuration :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>fr.cnes.regards.framework.utils</groupId>\n    <artifactId>plugin-utils</artifactId>\n</dependency>\n")),(0,r.kt)("h2",{id:"how-to-define-an-extension-point"},"How to define an extension point"),(0,r.kt)("p",null,"To define an extension point, you have to declare a ",(0,r.kt)("strong",{parentName:"p"},"service contract")," annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"PluginInterface"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@PluginInterface(description = "Hello sample plugin interface")\npublic interface IHelloPlugin {\n    String hello(String name);\n}\n')),(0,r.kt)("h2",{id:"how-to-create-a-plugin"},"How to create a plugin"),(0,r.kt)("p",null,"On a functionnal point of view, creating a ",(0,r.kt)("strong",{parentName:"p"},"plugin")," is defining a new way to respect a ",(0,r.kt)("strong",{parentName:"p"},"service contract"),". On a developper point of view, it means creating a new class annotated ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugin")," implementing the plugin interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(author = "REGARDS Team", id = "echo", version = "1.0.0", licence = "GPLv3", owner = "CNES")\npublic class HelloPlugin implements IHelloPlugin {\n    \n    @PluginParameter(label = "Message", defaultValue="Hello %s!")\n    private String message;\n\n    @PluginInit\n    private void init() {\n        // Init something after plugin instanciation\n    }\n\n    @Override\n    public String hello(String name) {\n        return String.format(message, name);\n    }\n}\n')),(0,r.kt)("p",null,"As we can see in the above example, ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloPlugin")," fulfils the ",(0,r.kt)("inlineCode",{parentName:"p"},"IHelloPlugin")," service contract."),(0,r.kt)("h2",{id:"plugin-reference-documentation"},"Plugin reference documentation"),(0,r.kt)("h3",{id:"annotations"},"Annotations"),(0,r.kt)("h4",{id:"plugininterface"},(0,r.kt)("inlineCode",{parentName:"h4"},"PluginInterface")),(0,r.kt)("p",null,"This annotation identifies an extension point, also called a service contract that is used in business service workflow allowing to adapt behaviour to project requirements."),(0,r.kt)("h4",{id:"plugin"},(0,r.kt)("inlineCode",{parentName:"h4"},"Plugin")),(0,r.kt)("p",null,"This annotation identifies an implementation of an extension point and allows to give useful information on the plugin such as its ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"decription")," ",(0,r.kt)("inlineCode",{parentName:"p"},"version"),", etc."),(0,r.kt)("h4",{id:"plugininit"},(0,r.kt)("inlineCode",{parentName:"h4"},"PluginInit")),(0,r.kt)("p",null,"This annotation is ",(0,r.kt)("strong",{parentName:"p"},"optional")," and is used to initialize a plugin. If used, it must annotates a no-arg method. This method is called after parameter injection on plugin instanciation."),(0,r.kt)("h4",{id:"plugindestroy"},(0,r.kt)("inlineCode",{parentName:"h4"},"PluginDestroy")),(0,r.kt)("p",null,"This annotation is ",(0,r.kt)("strong",{parentName:"p"},"optional")," and is used to properly destroy a plugin. If used, it must annotates a no-arg method. This method is called when plugin is destroyed by the plugin service."),(0,r.kt)("h4",{id:"pluginparameter"},(0,r.kt)("inlineCode",{parentName:"h4"},"PluginParameter")),(0,r.kt)("p",null,"This annotation is ",(0,r.kt)("strong",{parentName:"p"},"optional")," and can be used several times, as many times as there are parameters. It allows accurate plugin configuration."),(0,r.kt)("p",null,"Plugin parameters are injected after plugin class instanciation and before init method was called."),(0,r.kt)("p",null,"Plugin parameters supports following types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"String"),(0,r.kt)("li",{parentName:"ul"},"Byte"),(0,r.kt)("li",{parentName:"ul"},"Short"),(0,r.kt)("li",{parentName:"ul"},"Integer"),(0,r.kt)("li",{parentName:"ul"},"Long"),(0,r.kt)("li",{parentName:"ul"},"Float"),(0,r.kt)("li",{parentName:"ul"},"Double"),(0,r.kt)("li",{parentName:"ul"},"Boolean"),(0,r.kt)("li",{parentName:"ul"},"Collection"),(0,r.kt)("li",{parentName:"ul"},"Plugin interface"),(0,r.kt)("li",{parentName:"ul"},"Map"),(0,r.kt)("li",{parentName:"ul"},"Plain Old Java Object (i.e. POJO)")),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Parameter configurations are backed up as plain JSON objects so all parameters must be serializabled unequivocally!"))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All parameters (i.e. class fields), even in complex objects, must be annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"PluginParameter"),"!"))),(0,r.kt)("h3",{id:"plugin-development"},"Plugin development"),(0,r.kt)("p",null,"As seen above, develop a plugin just means implementing ",(0,r.kt)("strong",{parentName:"p"},"pure plain JAVA objects"),"."),(0,r.kt)("p",null,"Start by implementing a service contract interface and afterwards, just annotate your implementation with required plugin annotations."),(0,r.kt)("p",null,"Before deploying plugin, you should test it using ",(0,r.kt)("inlineCode",{parentName:"p"},"PluginUtils"),"."),(0,r.kt)("p",null,"Hereunder, this is a sample test built with JUnit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    @Test\n    public void helloPluginTest() {\n\n        String helloFormat = "Welcome %s!";\n        String name = "John";\n        // Set parameter configuration (override default)\n        Set<PluginParameter> parameters = PluginParametersFactory.build().addParameter("message", helloFormat).getParameters();\n        // Init plugin instanciation context\n        PluginUtils.setup("your.root.package");\n        // Instanciate plugin\n        IHelloPlugin hello = PluginUtils.getPlugin(parameters, HelloPlugin.class, new HashMap<>());\n        // Test plugin\n        Assert.assertEquals(String.format(helloFormat, name), hello.hello());\n    }\n')),(0,r.kt)("h3",{id:"plugin-deployment"},"Plugin deployment"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Plugins are loaded in the same classloader as the microservice so you have to be very careful with their deployments. Plugin library and dependencies have to be compatible with the target microservice."))),(0,r.kt)("p",null,"To deploy your plugin, we advise you this procedure :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Build you plugin as a simple JAR,"),(0,r.kt)("li",{parentName:"ul"},"Deploy this JAR and all its ",(0,r.kt)("strong",{parentName:"li"},"specific dependencies")," in the plugin directory of the target microservice,"),(0,r.kt)("li",{parentName:"ul"},"Be careful not to add library already loaded by microservice to avoid library inconsistency."),(0,r.kt)("li",{parentName:"ul"},"Restart the microservice.")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To be loaded in a microservice, plugin scanned packages has to be declared properly in microservice properties. By default, only the package ",(0,r.kt)("inlineCode",{parentName:"p"},"fr.cnes.regards")," is scanned (Look at the properties above)."))))}c.isMDXComponent=!0}}]);