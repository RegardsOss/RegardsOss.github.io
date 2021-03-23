(window.webpackJsonp=window.webpackJsonp||[]).push([[1830],{1902:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),i=(t(0),t(2704)),o={id:"backend-fem-feature-factory-plugins",title:"Feature Factory Plugin",sidebar_label:"Feature Factory",slug:"/development/backend/services/fem/plugins/feature-factory/"},l={unversionedId:"development/backend/regards/fem/plugins/backend-fem-feature-factory-plugins",id:"development/backend/regards/fem/plugins/backend-fem-feature-factory-plugins",isDocsHomePage:!1,title:"Feature Factory Plugin",description:"Available implementations",source:"@site/docs/development/backend/regards/fem/plugins/feature-factory-plugins.md",slug:"/development/backend/services/fem/plugins/feature-factory/",permalink:"/fr/docs/development/backend/services/fem/plugins/feature-factory/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/fem/plugins/feature-factory-plugins.md",version:"current",sidebar_label:"Feature Factory",sidebar:"dev",previous:{title:"Feature Manager AMQP API",permalink:"/fr/docs/development/backend/services/fem/api/amqp/"},next:{title:"Notifier microservice",permalink:"/fr/docs/development/backend/services/notifier/overview/"}},c=[{value:"Available implementations",id:"available-implementations",children:[]},{value:"How to implement a new feature factory plugin",id:"how-to-implement-a-new-feature-factory-plugin",children:[{value:"Interface to implement",id:"interface-to-implement",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"How your parameters will be received",id:"how-your-parameters-will-be-received",children:[]}]}],u={toc:c};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"available-implementations"},"Available implementations"),Object(i.b)("p",null,"Currently, there is no distributed implementation of the Feature Factory Plugin. The generation of features depends entirely on your project and has to be validated against your own model."),Object(i.b)("h2",{id:"how-to-implement-a-new-feature-factory-plugin"},"How to implement a new feature factory plugin"),Object(i.b)("h3",{id:"interface-to-implement"},"Interface to implement"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'@PluginInterface(description = "Generate a feature from a reference request")\npublic interface IFeatureFactoryPlugin {\n\n    /**\n     * Generate a {@link Feature} from {@link FeatureExtractionRequest} parameters.\n     * @param parameters free extraction parameters\n     * @return generated {@link Feature}\n     */\n    Feature generateFeature(JsonObject parameters) throws ModuleException;\n}\n')),Object(i.b)("h3",{id:"implementation"},"Implementation"),Object(i.b)("p",null,"The implementation of this plugin depends on your specific needs. Therefore, a feature can be generated in many different ways based on generic parameters."),Object(i.b)("p",null,"Here is a dummy example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.google.gson.JsonObject;\nimport fr.cnes.regards.framework.module.rest.exception.ModuleException;\nimport fr.cnes.regards.framework.modules.plugins.annotations.Plugin;\nimport fr.cnes.regards.framework.modules.plugins.annotations.PluginInit;\nimport fr.cnes.regards.framework.modules.plugins.annotations.PluginParameter;\nimport fr.cnes.regards.framework.urn.EntityType;\nimport fr.cnes.regards.modules.feature.dto.Feature;\nimport fr.cnes.regards.modules.featureprovider.domain.plugin.IFeatureFactoryPlugin;\n\n@Plugin(author = "REGARDS Team",\n        description = "Extract a dummy feature from the url of data file to reference",\n        id = DummyFeatureFactoryPlugin.PLUGIN_ID, version = "1.0.0", contact = "regards@c-s.fr", license = "GPLv3",\n        owner = "CNES", url = "https://regardsoss.github.io/")\npublic class DummyFeatureFactoryPlugin implements IFeatureFactoryPlugin {\n\n    public static final String PLUGIN_ID = "DummyExtract";\n\n    @Override\n    public Feature generateFeature(JsonObject parameters) throws ModuleException {\n        String url = parameters.get("url");\n        return Feature.build("Some Id" + url, "documentation", null, null, EntityType.DATA, "someModelNamedExample");\n    }\n\n}\n')),Object(i.b)("p",null,"For more information on how to implement plugins, refer to ",Object(i.b)("a",{parentName:"p",href:"../../../../framework/modules/plugins/"},"Plugin documentation"),"."),Object(i.b)("h3",{id:"how-your-parameters-will-be-received"},"How your parameters will be received"),Object(i.b)("p",null,"When ",Object(i.b)("a",{parentName:"p",href:"../../api/amqp#feature-creation-request-by-file-reference"},"requesting an extraction"),", the field ",Object(i.b)("inlineCode",{parentName:"p"},"parameters")," of the request contains the parameters given to this plugin when the method ",Object(i.b)("inlineCode",{parentName:"p"},"IFeatureFactoryPlugin#generateFeature")," is called"))}p.isMDXComponent=!0},2704:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=p(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),d=n,f=s["".concat(o,".").concat(d)]||s[d]||m[d]||i;return t?a.a.createElement(f,l(l({ref:r},u),{},{components:t})):a.a.createElement(f,l({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);