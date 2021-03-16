(window.webpackJsonp=window.webpackJsonp||[]).push([[1017],{1087:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(2701)),i={id:"backend-fem-feature-factory-plugins",title:"Feature Factory Plugin",sidebar_label:"Feature Factory",slug:"/development/backend/fem/plugins/feature-factory"},l={unversionedId:"development/backend/regards/fem/plugins/backend-fem-feature-factory-plugins",id:"version-1.4.0/development/backend/regards/fem/plugins/backend-fem-feature-factory-plugins",isDocsHomePage:!1,title:"Feature Factory Plugin",description:"Available implementations",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/fem/plugins/feature-factory-plugins.md",slug:"/development/backend/fem/plugins/feature-factory",permalink:"/docs/1.4.0/development/backend/fem/plugins/feature-factory",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/fem/plugins/feature-factory-plugins.md",version:"1.4.0",sidebar_label:"Feature Factory",sidebar:"version-1.4.0/dev",previous:{title:"Feature Manager AMQP API",permalink:"/docs/1.4.0/development/backend/fem/api/amqp"},next:{title:"Notifier microservice",permalink:"/docs/1.4.0/development/backend/notifier/overview"}},u=[{value:"Available implementations",id:"available-implementations",children:[]},{value:"How to implement a new feature factory plugin",id:"how-to-implement-a-new-feature-factory-plugin",children:[{value:"Interface to implement",id:"interface-to-implement",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"How your parameters will be received",id:"how-your-parameters-will-be-received",children:[]}]}],c={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"available-implementations"},"Available implementations"),Object(o.b)("p",null,"Currently, there is no distributed implementation of the Feature Factory Plugin. The generation of features depends entirely on your project and has to be validated against your own model."),Object(o.b)("h2",{id:"how-to-implement-a-new-feature-factory-plugin"},"How to implement a new feature factory plugin"),Object(o.b)("h3",{id:"interface-to-implement"},"Interface to implement"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'@PluginInterface(description = "Generate a feature from a reference request")\npublic interface IFeatureFactoryPlugin {\n\n    /**\n     * Generate a {@link Feature} from {@link FeatureExtractionRequest} parameters.\n     * @param parameters free extraction parameters\n     * @return generated {@link Feature}\n     */\n    Feature generateFeature(JsonObject parameters) throws ModuleException;\n}\n')),Object(o.b)("h3",{id:"implementation"},"Implementation"),Object(o.b)("p",null,"The implementation of this plugin depends on your specific needs. Therefore, a feature can be generated in many different ways based on generic parameters."),Object(o.b)("p",null,"Here is a dummy example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'import com.google.gson.JsonObject;\nimport fr.cnes.regards.framework.module.rest.exception.ModuleException;\nimport fr.cnes.regards.framework.modules.plugins.annotations.Plugin;\nimport fr.cnes.regards.framework.modules.plugins.annotations.PluginInit;\nimport fr.cnes.regards.framework.modules.plugins.annotations.PluginParameter;\nimport fr.cnes.regards.framework.urn.EntityType;\nimport fr.cnes.regards.modules.feature.dto.Feature;\nimport fr.cnes.regards.modules.featureprovider.domain.plugin.IFeatureFactoryPlugin;\n\n@Plugin(author = "REGARDS Team",\n        description = "Extract a dummy feature from the url of data file to reference",\n        id = DummyFeatureFactoryPlugin.PLUGIN_ID, version = "1.0.0", contact = "regards@c-s.fr", license = "GPLv3",\n        owner = "CNES", url = "https://regardsoss.github.io/")\npublic class DummyFeatureFactoryPlugin implements IFeatureFactoryPlugin {\n\n    public static final String PLUGIN_ID = "DummyExtract";\n\n    @Override\n    public Feature generateFeature(JsonObject parameters) throws ModuleException {\n        String url = parameters.get("url");\n        return Feature.build("Some Id" + url, "documentation", null, null, EntityType.DATA, "someModelNamedExample");\n    }\n\n}\n')),Object(o.b)("p",null,"For more information on how to implement plugins, refer to ",Object(o.b)("a",{parentName:"p",href:"../../framework/modules/plugins/"},"Plugin documentation"),"."),Object(o.b)("h3",{id:"how-your-parameters-will-be-received"},"How your parameters will be received"),Object(o.b)("p",null,"When ",Object(o.b)("a",{parentName:"p",href:"../api/amqp#feature-creation-request-by-file-reference"},"requesting an extraction"),", the field ",Object(o.b)("inlineCode",{parentName:"p"},"parameters")," of the request contains the parameters given to this plugin when the method ",Object(o.b)("inlineCode",{parentName:"p"},"IFeatureFactoryPlugin#generateFeature")," is called"))}p.isMDXComponent=!0},2701:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return r?a.a.createElement(f,l(l({ref:t},c),{},{components:r})):a.a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);