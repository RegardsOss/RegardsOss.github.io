"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[64201],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),g=r,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||i;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},60088:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],s={id:"backend-framework-starters-plugins",title:"Plugins starter",slug:"/development/backend/framework/starters/plugins/"},l="1. Configuration",p={unversionedId:"development/backend/framework/starters/backend-framework-starters-plugins",id:"version-1.5.0/development/backend/framework/starters/backend-framework-starters-plugins",title:"Plugins starter",description:"It is possible to add a new package to scan by using the the method addPluginPackage from the PluginService.",source:"@site/versioned_docs/version-1.5.0/development/backend/framework/starters/plugins-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/plugins/",permalink:"/docs/1.5.0/development/backend/framework/starters/plugins/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/backend/framework/starters/plugins-starter.md",tags:[],version:"1.5.0",frontMatter:{id:"backend-framework-starters-plugins",title:"Plugins starter",slug:"/development/backend/framework/starters/plugins/"},sidebar:"version-1.5.0/dev",previous:{title:"OAIS starter",permalink:"/docs/1.5.0/development/backend/framework/starters/oais/"},next:{title:"Security starter",permalink:"/docs/1.5.0/development/backend/framework/starters/security/"}},d=[{value:"3.1. How to define a new plugin&#39;s type",id:"31-how-to-define-a-new-plugins-type",children:[],level:2},{value:"3.2. How to define a new Plugin",id:"32-how-to-define-a-new-plugin",children:[{value:"3.2.1 How to define plugin parameters",id:"321-how-to-define-plugin-parameters",children:[],level:3}],level:2},{value:"3.3 How to use the REGARDS plugin&#39;s module",id:"33-how-to-use-the-regards-plugins-module",children:[],level:2},{value:"3.4 How to interact with plugins updates",id:"34-how-to-interact-with-plugins-updates",children:[],level:2},{value:"3.5 How to generate a plugin jar",id:"35-how-to-generate-a-plugin-jar",children:[],level:2}],u={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-configuration"},"1","."," Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"# Scan packages for Plugin and PluginInterface annotations\nregards.plugins.packages-to-scan=fr.cnes.regards.plugins,fr.cnes.regards.plugins.utils\n")),(0,i.kt)("p",null,"It is possible to add a new package to scan by using the the method ",(0,i.kt)("inlineCode",{parentName:"p"},"addPluginPackage")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginService"),"."),(0,i.kt)("h1",{id:"2-autoconfiguration"},"2","."," Autoconfiguration"),(0,i.kt)("h1",{id:"3-how-to"},"3","."," How to"),(0,i.kt)("h2",{id:"31-how-to-define-a-new-plugins-type"},"3.1","."," How to define a new plugin's type"),(0,i.kt)("p",null,"Before creating a new ",(0,i.kt)("strong",{parentName:"p"},"Plugin"),", it is mandatory to define the corresponding plugin's type. To do so, you need to create a ",(0,i.kt)("strong",{parentName:"p"},"contract"),", defined by an ",(0,i.kt)("strong",{parentName:"p"},"interface")," annotated ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginInterface"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@PluginInterface(description = "hello sample plugin interface")\npublic interface ISamplePlugin {\n    String echo(String pMessage);\n\n    int add(int pFirst, int pSecond);\n}\n')),(0,i.kt)("h2",{id:"32-how-to-define-a-new-plugin"},"3.2","."," How to define a new Plugin"),(0,i.kt)("p",null,"On a functionnal point of view, defining a new ",(0,i.kt)("strong",{parentName:"p"},"plugin")," is defining a new way to respect its ",(0,i.kt)("strong",{parentName:"p"},"contract"),". On a developper point of view, it means creating a new class annotated ",(0,i.kt)("inlineCode",{parentName:"p"},"Plugin")," that implements an interface annotated ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginInterface")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(author = "CSSI", description = "Sample plugin test", id = "aSamplePlugin", version = "12345-6789-11")\npublic class SamplePlugin implements ISamplePlugin {\n\n    @PluginParameter(description = "string parameter", name = "a suffix paramereter")\n    private String suffix;\n\n    @PluginParameter(description = "int parameter", name = "a coeff parameter")\n    private Integer coef;\n\n    @PluginParameter(description = "boolean parameter", name = "a boolean parameter")\n    private Boolean isActive;\n\n    @Override\n    public String echo(final String pMessage) {\n        final StringBuffer str = new StringBuffer();\n        if (this.isActive) {\n            str.append(this.getClass().getName() + " -> " + pMessage + " - " + this.suffix);\n        } else {\n            str.append(this.getClass().getName() + ":is not active");\n        }\n        return str.toString();\n    }\n\n    @Override\n    public int add(final int pFist, final int pSecond) {\n        final int res = this.coef * (pFist + pSecond);\n        LOGGER.info("add result : " + res);\n        return res;\n    }\n\n    @PluginInit\n    private void aInit() {\n        LOGGER.info("Init method call : " + this.getClass().getName() + "suffixe:" + this.suffix + "|active:"\n                + this.isActive + "|coeff:" + this.coef);\n    }\n\n}\n')),(0,i.kt)("p",null,"As we can see in the above example, ",(0,i.kt)("em",{parentName:"p"},"SamplePlugin")," is a ",(0,i.kt)("strong",{parentName:"p"},"Plugin")," that respect its ",(0,i.kt)("strong",{parentName:"p"},"contract"),": ",(0,i.kt)("em",{parentName:"p"},"ISamplePlugin"),". In this example, ",(0,i.kt)("em",{parentName:"p"},"SamplePlugin")," needs parameters to help him respect its ",(0,i.kt)("strong",{parentName:"p"},"contract")," depending on the context. Those parameters are identified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginParameter")," annotation which is detailed further below. ",(0,i.kt)("em",{parentName:"p"},"SamplePlugin")," also needs to do some stuff while it is initialized, this method is identified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginInit")," annotation."),(0,i.kt)("p",null,"To sum up on a more technical point of view:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the class ",(0,i.kt)("inlineCode",{parentName:"li"},"SamplePlugin")," is a plugin because it is annotated ",(0,i.kt)("inlineCode",{parentName:"li"},"Plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ISamplePlugin")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"SamplePlugin")," contract"),(0,i.kt)("li",{parentName:"ul"},"suffix, coef, isActive are plugin parameters given thanks a ",(0,i.kt)("inlineCode",{parentName:"li"},"PluginConfiguration")),(0,i.kt)("li",{parentName:"ul"},"any thing that needs to be done before the plugin is fully ready to use and after the plugin parameters has been set must be in a method annotated ",(0,i.kt)("inlineCode",{parentName:"li"},"PluginInit"))),(0,i.kt)("h3",{id:"321-how-to-define-plugin-parameters"},"3.2.1 How to define plugin parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PluginParameter")," annotation can be used to define different type of plugin parameters: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Primitive types"),(0,i.kt)("li",{parentName:"ul"},"Plugins"),(0,i.kt)("li",{parentName:"ul"},"Objects"),(0,i.kt)("li",{parentName:"ul"},"Collections")),(0,i.kt)("p",null,"The first one is pretty simple to use, just define a plugin parameter as in the example."),(0,i.kt)("p",null,"The plugins, here we directly provide you with an instance of the plugin wanted."),(0,i.kt)("p",null,"The objects and collections, they are jsonified so deserialization issues can appaer. In particular, our default JSON library is GSON and GSON does not always handle well deserialization of parametrized objects which is the case of collections, if you encounter issues with this, you can either: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create a wrapper object"),(0,i.kt)("li",{parentName:"ul"},"use the ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," attribute from the ",(0,i.kt)("inlineCode",{parentName:"li"},"PluginParameter")," annotation, provide the ",(0,i.kt)("inlineCode",{parentName:"li"},"Class"),' object representing the parameter of your collection and it should be good. For now, we do not handle "complex" collection which parameter is a parametrized object.( ie ',(0,i.kt)("inlineCode",{parentName:"li"},"List<Some<Thing>>"),")")),(0,i.kt)("p",null,"Note that attributes into objects will only be taken into account if they annotated ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginParameter")),(0,i.kt)("h2",{id:"33-how-to-use-the-regards-plugins-module"},"3.3 How to use the REGARDS plugin's module"),(0,i.kt)("p",null,"To use a ",(0,i.kt)("strong",{parentName:"p"},"Plugin"),", it is necessary to create a ",(0,i.kt)("strong",{parentName:"p"},"PluginConfiguration")," to define the plugin's parameters."),(0,i.kt)("p",null,"The REGARDS's module plugins provide all the methods to managed the ",(0,i.kt)("strong",{parentName:"p"},"Plugin"),". It can be done with the ",(0,i.kt)("strong",{parentName:"p"},"PluginService")," in a REGARDS Java module, or with the REST API provided by the ",(0,i.kt)("strong",{parentName:"p"},"PluginController"),"."),(0,i.kt)("h2",{id:"34-how-to-interact-with-plugins-updates"},"3.4 How to interact with plugins updates"),(0,i.kt)("p",null,"You can be aware of plugin configuration modification by listening via AMQP to PluginConfigurationEvent. PluginConfigurationEvent contains the following attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pluginConfId: the plugin configuration id"),(0,i.kt)("li",{parentName:"ul"},"pluginType: the interface name the configuration is related to"),(0,i.kt)("li",{parentName:"ul"},"action: the action at the origin of the event : CREATE, ACTIVATE, DESACTIVATE, DELETE")),(0,i.kt)("h2",{id:"35-how-to-generate-a-plugin-jar"},"3.5 How to generate a plugin jar"),(0,i.kt)("p",null,"Plugins aren't deployed with microservices standard code. They are deployed thanks to a ",(0,i.kt)("strong",{parentName:"p"},"jar")," which will be scanned at the microservice launch. Plugin jars should not embed any of the microservice standard code. To do so, with maven, you can declare framework dependencies with the scope ",(0,i.kt)("strong",{parentName:"p"},"provided"),". Moreover, our maven configuration does not generate a self suffisent jar by itself, you need to instruct it to. Lets take the ",(0,i.kt)("inlineCode",{parentName:"p"},"CatalogSecurityDelegation")," plugin example."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CatalogSecurityDelegation")," is a plugin used by the microservice ",(0,i.kt)("strong",{parentName:"p"},"rs-storage")," allowing to apply access rights defined in microservice ",(0,i.kt)("strong",{parentName:"p"},"rs-dam")," throught results returned by ",(0,i.kt)("strong",{parentName:"p"},"rs-catalog"),". This plugin is defined in the ",(0,i.kt)("em",{parentName:"p"},"catalog-security-delegation")," module and within its pom we can find this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>fr.cnes.regards.modules.search</groupId>\n        <artifactId>search-client</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>fr.cnes.regards.modules.accessrights</groupId>\n        <artifactId>accessrights-client</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>fr.cnes.regards.modules.models</groupId>\n        <artifactId>models-client</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>fr.cnes.regards.modules.entities</groupId>\n        <artifactId>entities-gson</artifactId>\n    </dependency>\n    \x3c!-- Provided: dependencies that are already included by the microservice --\x3e\n    <dependency>\n        <groupId>fr.cnes.regards.framework</groupId>\n        <artifactId>authentication-regards-starter</artifactId>\n        <scope>provided</scope>\n    </dependency>\n    <dependency>\n        <groupId>fr.cnes.regards.framework</groupId>\n        <artifactId>feign-regards-starter</artifactId>\n        <scope>provided</scope>\n    </dependency>\n    <dependency>\n        <groupId>fr.cnes.regards.modules.storage</groupId>\n        <artifactId>storage-dao</artifactId>\n        <scope>provided</scope>\n    </dependency>\n    \x3c!-- Tests --\x3e\n    <dependency>\n        <groupId>fr.cnes.regards.framework.test</groupId>\n        <artifactId>regards-integration-test</artifactId>\n        <scope>test</scope>\n    </dependency>\n    <dependency>\n        <groupId>fr.cnes.regards.framework.modules.plugins</groupId>\n        <artifactId>plugins-service</artifactId>\n        <scope>test</scope>\n    </dependency>\n    <dependency>\n        <groupId>fr.cnes.regards.modules.storage</groupId>\n        <artifactId>storage-service</artifactId>\n        <scope>test</scope>\n    </dependency>\n    <dependency>\n        <groupId>commons-io</groupId>\n        <artifactId>commons-io</artifactId>\n        <scope>test</scope>\n    </dependency>\n</dependencies>\n\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-shade-plugin</artifactId>\n        </plugin>\n    </plugins>\n</build>\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CatalogSecurityDelegation")," being a plugin from ",(0,i.kt)("strong",{parentName:"p"},"rs-storage"),", all dependencies to ",(0,i.kt)("strong",{parentName:"p"},"rs-storage")," code are provided: storage-dao. Dependencies to the framework, feign-regards-starter and authentication-regards-starter, are also provided as they are being shipped with ",(0,i.kt)("strong",{parentName:"p"},"rs-storage"),". On the other hand, dependencies to ",(0,i.kt)("strong",{parentName:"p"},"rs-dam")," and ",(0,i.kt)("strong",{parentName:"p"},"rs-catalog")," are not provided, respecfully accessright-client, model-client, entities-gson and search-client. To embed these dependencies, we need to tell maven to use the ",(0,i.kt)("strong",{parentName:"p"},"maven-shade-plugin"),", here we are using our default ",(0,i.kt)("strong",{parentName:"p"},"maven-shade-plugin")," configuration which is defined in ",(0,i.kt)("strong",{parentName:"p"},"regards-parent")," pom in the ",(0,i.kt)("strong",{parentName:"p"},"pluginManagement")," section. In case this configuration is not suited for you, you can simply override it in your pom."),(0,i.kt)("p",null,"Considering we are using the default configuration, maven build will now generate one more jar: a ",(0,i.kt)("strong",{parentName:"p"},"shaded")," jar. This is what we called here a plugin jar. It, at least should, contains everything that your plugin needs to work properly within tis microservice."),(0,i.kt)("p",null,"Once generated, the ",(0,i.kt)("strong",{parentName:"p"},"shaded")," jar just needs to be put in the right directoy, the one pointed by ",(0,i.kt)("strong",{parentName:"p"},"loader.path")," Java property."))}c.isMDXComponent=!0}}]);