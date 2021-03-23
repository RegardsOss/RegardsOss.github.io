(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{202:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(2704)),o={id:"backend-framework-modules-plugins",title:"Plugins introduction",sidebar_label:"Plugins introduction",slug:"/development/backend/framework/modules/plugins/"},l={unversionedId:"development/backend/framework/modules/backend-framework-modules-plugins",id:"development/backend/framework/modules/backend-framework-modules-plugins",isDocsHomePage:!1,title:"Plugins introduction",description:"Purpose",source:"@site/docs/development/backend/framework/modules/plugins.md",slug:"/development/backend/framework/modules/plugins/",permalink:"/fr/docs/development/backend/framework/modules/plugins/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/framework/modules/plugins.md",version:"current",sidebar_label:"Plugins introduction",sidebar:"dev",previous:{title:"Develop a new microservice",permalink:"/fr/docs/development/backend/framework/dev-microservice/"},next:{title:"Develop a plugin",permalink:"/fr/docs/development/backend/framework/dev-plugin/"}},c=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]},{value:"How to define an extension point",id:"how-to-define-an-extension-point",children:[]},{value:"How to create a plugin",id:"how-to-create-a-plugin",children:[]},{value:"Plugin reference documentation",id:"plugin-reference-documentation",children:[{value:"Annotations",id:"annotations",children:[]},{value:"Plugin development",id:"plugin-development",children:[]},{value:"Plugin deployment",id:"plugin-deployment",children:[]}]}],s={toc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"purpose"},"Purpose"),Object(r.b)("p",null,"Plugin module is used to promote service adaptability."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Add module dependency to your POM (version depends on the BOM)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>fr.cnes.regards.framework.modules.plugins</groupId>\n    <artifactId>plugins-service</artifactId>\n</dependency>\n")),Object(r.b)("p",null,"Properties :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-properties"},"# Comma separated list of plugin packages from which system detects and loads plugin implementations\n# Fallback to fr.cnes.regards if not specified\nregards.plugins.packages-to-scan=\n")),Object(r.b)("p",null,"vregards.plugins.packages-to-scan"),Object(r.b)("h2",{id:"autoconfiguration"},"Autoconfiguration"),Object(r.b)("p",null,"Module autoconfigures:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PluginService")," to manage plugin lifecycle.")),Object(r.b)("p",null,"The module relies on a ",Object(r.b)("strong",{parentName:"p"},"plugin utility library")," to discover and instanciate a plugin. This library can be directly imported for implementation and test purpose with the following configuration :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>fr.cnes.regards.framework.utils</groupId>\n    <artifactId>plugin-utils</artifactId>\n</dependency>\n")),Object(r.b)("h2",{id:"how-to-define-an-extension-point"},"How to define an extension point"),Object(r.b)("p",null,"To define an extension point, you have to declare a ",Object(r.b)("strong",{parentName:"p"},"service contract")," annotated with ",Object(r.b)("inlineCode",{parentName:"p"},"PluginInterface"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@PluginInterface(description = "Hello sample plugin interface")\npublic interface IHelloPlugin {\n    String hello(String name);\n}\n')),Object(r.b)("h2",{id:"how-to-create-a-plugin"},"How to create a plugin"),Object(r.b)("p",null,"On a functionnal point of view, creating a ",Object(r.b)("strong",{parentName:"p"},"plugin")," is defining a new way to respect a ",Object(r.b)("strong",{parentName:"p"},"service contract"),". On a developper point of view, it means creating a new class annotated ",Object(r.b)("inlineCode",{parentName:"p"},"Plugin")," implementing the plugin interface."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@Plugin(author = "REGARDS Team", id = "echo", version = "1.0.0", licence = "GPLv3", owner = "CNES")\npublic class HelloPlugin implements IHelloPlugin {\n    \n    @PluginParameter(label = "Message", defaultValue="Hello %s!")\n    private String message;\n\n    @PluginInit\n    private void init() {\n        // Init something after plugin instanciation\n    }\n\n    @Override\n    public String hello(String name) {\n        return String.format(message, name);\n    }\n}\n')),Object(r.b)("p",null,"As we can see in the above example, ",Object(r.b)("inlineCode",{parentName:"p"},"HelloPlugin")," fulfils the ",Object(r.b)("inlineCode",{parentName:"p"},"IHelloPlugin")," service contract."),Object(r.b)("h2",{id:"plugin-reference-documentation"},"Plugin reference documentation"),Object(r.b)("h3",{id:"annotations"},"Annotations"),Object(r.b)("h4",{id:"plugininterface"},Object(r.b)("inlineCode",{parentName:"h4"},"PluginInterface")),Object(r.b)("p",null,"This annotation identifies an extension point, also called a service contract that is used in business service workflow allowing to adapt behaviour to project requirements."),Object(r.b)("h4",{id:"plugin"},Object(r.b)("inlineCode",{parentName:"h4"},"Plugin")),Object(r.b)("p",null,"This annotation identifies an implementation of an extension point and allows to give useful information on the plugin such as its ",Object(r.b)("inlineCode",{parentName:"p"},"id"),", ",Object(r.b)("inlineCode",{parentName:"p"},"decription")," ",Object(r.b)("inlineCode",{parentName:"p"},"version"),", etc."),Object(r.b)("h4",{id:"plugininit"},Object(r.b)("inlineCode",{parentName:"h4"},"PluginInit")),Object(r.b)("p",null,"This annotation is ",Object(r.b)("strong",{parentName:"p"},"optional")," and is used to initialize a plugin. If used, it must annotates a no-arg method. This method is called after parameter injection on plugin instanciation."),Object(r.b)("h4",{id:"plugindestroy"},Object(r.b)("inlineCode",{parentName:"h4"},"PluginDestroy")),Object(r.b)("p",null,"This annotation is ",Object(r.b)("strong",{parentName:"p"},"optional")," and is used to properly destroy a plugin. If used, it must annotates a no-arg method. This method is called when plugin is destroyed by the plugin service."),Object(r.b)("h4",{id:"pluginparameter"},Object(r.b)("inlineCode",{parentName:"h4"},"PluginParameter")),Object(r.b)("p",null,"This annotation is ",Object(r.b)("strong",{parentName:"p"},"optional")," and can be used several times, as many times as there are parameters. It allows accurate plugin configuration."),Object(r.b)("p",null,"Plugin parameters are injected after plugin class instanciation and before init method was called."),Object(r.b)("p",null,"Plugin parameters supports following types:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"String"),Object(r.b)("li",{parentName:"ul"},"Byte"),Object(r.b)("li",{parentName:"ul"},"Short"),Object(r.b)("li",{parentName:"ul"},"Integer"),Object(r.b)("li",{parentName:"ul"},"Long"),Object(r.b)("li",{parentName:"ul"},"Float"),Object(r.b)("li",{parentName:"ul"},"Double"),Object(r.b)("li",{parentName:"ul"},"Boolean"),Object(r.b)("li",{parentName:"ul"},"Collection"),Object(r.b)("li",{parentName:"ul"},"Plugin interface"),Object(r.b)("li",{parentName:"ul"},"Map"),Object(r.b)("li",{parentName:"ul"},"Plain Old Java Object (i.e. POJO)")),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Parameter configurations are backed up as plain JSON objects so all parameters must be serializabled unequivocally!"))),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"All parameters (i.e. class fields), even in complex objects, must be annotated with ",Object(r.b)("inlineCode",{parentName:"p"},"PluginParameter"),"!"))),Object(r.b)("h3",{id:"plugin-development"},"Plugin development"),Object(r.b)("p",null,"As seen above, develop a plugin just means implementing ",Object(r.b)("strong",{parentName:"p"},"pure plain JAVA objects"),"."),Object(r.b)("p",null,"Start by implementing a service contract interface and afterwards, just annotate your implementation with required plugin annotations."),Object(r.b)("p",null,"Before deploying plugin, you should test it using ",Object(r.b)("inlineCode",{parentName:"p"},"PluginUtils"),"."),Object(r.b)("p",null,"Hereunder, this is a sample test built with JUnit."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'    @Test\n    public void helloPluginTest() {\n\n        String helloFormat = "Welcome %s!";\n        String name = "John";\n        // Set parameter configuration (override default)\n        Set<PluginParameter> parameters = PluginParametersFactory.build().addParameter("message", helloFormat).getParameters();\n        // Init plugin instanciation context\n        PluginUtils.setup("your.root.package");\n        // Instanciate plugin\n        IHelloPlugin hello = PluginUtils.getPlugin(parameters, HelloPlugin.class, new HashMap<>());\n        // Test plugin\n        Assert.assertEquals(String.format(helloFormat, name), hello.hello());\n    }\n')),Object(r.b)("h3",{id:"plugin-deployment"},"Plugin deployment"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Plugins are loaded in the same classloader as the microservice so you have to be very careful with their deployments. Plugin library and dependencies have to be compatible with the target microservice."))),Object(r.b)("p",null,"To deploy your plugin, we advise you this procedure :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Build you plugin as a simple JAR,"),Object(r.b)("li",{parentName:"ul"},"Deploy this JAR and all its ",Object(r.b)("strong",{parentName:"li"},"specific dependencies")," in the plugin directory of the target microservice,"),Object(r.b)("li",{parentName:"ul"},"Be careful not to add library already loaded by microservice to avoid library inconsistency."),Object(r.b)("li",{parentName:"ul"},"Restart the microservice.")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"To be loaded in a microservice, plugin scanned packages has to be declared properly in microservice properties. By default, only the package ",Object(r.b)("inlineCode",{parentName:"p"},"fr.cnes.regards")," is scanned (Look at the properties above)."))))}p.isMDXComponent=!0},2704:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),b=a,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||r;return t?i.a.createElement(m,l(l({ref:n},s),{},{components:t})):i.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);