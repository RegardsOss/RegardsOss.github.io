"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[34763],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57656:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={id:"backend-fem-feature-factory-plugins",title:"Feature Factory Plugin",sidebar_label:"Feature Factory",slug:"/development/backend/services/fem/plugins/feature-factory/"},u=void 0,s={unversionedId:"development/backend/regards/fem/plugins/backend-fem-feature-factory-plugins",id:"version-1.8.0/development/backend/regards/fem/plugins/backend-fem-feature-factory-plugins",title:"Feature Factory Plugin",description:"Available implementations",source:"@site/versioned_docs/version-1.8.0/development/backend/regards/fem/plugins/feature-factory-plugins.md",sourceDirName:"development/backend/regards/fem/plugins",slug:"/development/backend/services/fem/plugins/feature-factory/",permalink:"/docs/1.8.0/development/backend/services/fem/plugins/feature-factory/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.8.0/development/backend/regards/fem/plugins/feature-factory-plugins.md",tags:[],version:"1.8.0",frontMatter:{id:"backend-fem-feature-factory-plugins",title:"Feature Factory Plugin",sidebar_label:"Feature Factory",slug:"/development/backend/services/fem/plugins/feature-factory/"},sidebar:"dev",previous:{title:"Feature Manager AMQP",permalink:"/docs/1.8.0/development/backend/services/fem/api/amqp/"},next:{title:"Overview",permalink:"/docs/1.8.0/development/backend/services/notifier/overview/"}},c={},p=[{value:"Available implementations",id:"available-implementations",level:2},{value:"How to implement a new feature factory plugin",id:"how-to-implement-a-new-feature-factory-plugin",level:2},{value:"Interface to implement",id:"interface-to-implement",level:3},{value:"Implementation",id:"implementation",level:3},{value:"How your parameters will be received",id:"how-your-parameters-will-be-received",level:3}],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"available-implementations"},"Available implementations"),(0,o.kt)("p",null,"Currently, there is no distributed implementation of the Feature Factory Plugin. The generation of features depends entirely on your project and has to be validated against your own model."),(0,o.kt)("h2",{id:"how-to-implement-a-new-feature-factory-plugin"},"How to implement a new feature factory plugin"),(0,o.kt)("h3",{id:"interface-to-implement"},"Interface to implement"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@PluginInterface(description = "Generate a feature from a reference request")\npublic interface IFeatureFactoryPlugin {\n\n    /**\n     * Generate a {@link Feature} from {@link FeatureExtractionRequest} parameters.\n     * @param parameters free extraction parameters\n     * @return generated {@link Feature}\n     */\n    Feature generateFeature(JsonObject parameters) throws ModuleException;\n}\n')),(0,o.kt)("h3",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"The implementation of this plugin depends on your specific needs. Therefore, a feature can be generated in many different ways based on generic parameters."),(0,o.kt)("p",null,"Here is a dummy example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import com.google.gson.JsonObject;\nimport fr.cnes.regards.framework.module.rest.exception.ModuleException;\nimport fr.cnes.regards.framework.modules.plugins.annotations.Plugin;\nimport fr.cnes.regards.framework.modules.plugins.annotations.PluginInit;\nimport fr.cnes.regards.framework.modules.plugins.annotations.PluginParameter;\nimport fr.cnes.regards.framework.urn.EntityType;\nimport fr.cnes.regards.modules.feature.dto.Feature;\nimport fr.cnes.regards.modules.featureprovider.domain.plugin.IFeatureFactoryPlugin;\n\n@Plugin(author = "REGARDS Team",\n        description = "Extract a dummy feature from the url of data file to reference",\n        id = DummyFeatureFactoryPlugin.PLUGIN_ID, version = "1.0.0", contact = "regards@c-s.fr", license = "GPLv3",\n        owner = "CNES", url = "https://regardsoss.github.io/")\npublic class DummyFeatureFactoryPlugin implements IFeatureFactoryPlugin {\n\n    public static final String PLUGIN_ID = "DummyExtract";\n\n    @Override\n    public Feature generateFeature(JsonObject parameters) throws ModuleException {\n        String url = parameters.get("url");\n        return Feature.build("Some Id" + url, "documentation", null, null, EntityType.DATA, "someModelNamedExample");\n    }\n\n}\n')),(0,o.kt)("p",null,"For more information on how to implement plugins, refer to ",(0,o.kt)("a",{parentName:"p",href:"../../../../framework/modules/plugins/"},"Plugin documentation"),"."),(0,o.kt)("h3",{id:"how-your-parameters-will-be-received"},"How your parameters will be received"),(0,o.kt)("p",null,"When ",(0,o.kt)("a",{parentName:"p",href:"../../api/amqp#feature-creation-request-by-file-reference"},"requesting an extraction"),", the field ",(0,o.kt)("inlineCode",{parentName:"p"},"parameters")," of the request contains the parameters given to this plugin when the method ",(0,o.kt)("inlineCode",{parentName:"p"},"IFeatureFactoryPlugin#generateFeature")," is called"))}f.isMDXComponent=!0}}]);