"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[58142],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return t?n.createElement(f,o(o({ref:r},s),{},{components:t})):n.createElement(f,o({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55620:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"backend-fem-feature-factory-plugins",title:"Feature Factory Plugin",sidebar_label:"Feature Factory",slug:"/development/backend/services/fem/plugins/feature-factory/"},u=void 0,c={unversionedId:"development/backend/regards/fem/plugins/backend-fem-feature-factory-plugins",id:"development/backend/regards/fem/plugins/backend-fem-feature-factory-plugins",title:"Feature Factory Plugin",description:"Available implementations",source:"@site/docs/development/backend/regards/fem/plugins/feature-factory-plugins.md",sourceDirName:"development/backend/regards/fem/plugins",slug:"/development/backend/services/fem/plugins/feature-factory/",permalink:"/fr/docs/development/backend/services/fem/plugins/feature-factory/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/fem/plugins/feature-factory-plugins.md",tags:[],version:"current",frontMatter:{id:"backend-fem-feature-factory-plugins",title:"Feature Factory Plugin",sidebar_label:"Feature Factory",slug:"/development/backend/services/fem/plugins/feature-factory/"},sidebar:"dev",previous:{title:"Feature Manager AMQP",permalink:"/fr/docs/development/backend/services/fem/api/amqp/"},next:{title:"Overview",permalink:"/fr/docs/development/backend/services/notifier/overview/"}},s=[{value:"Available implementations",id:"available-implementations",children:[],level:2},{value:"How to implement a new feature factory plugin",id:"how-to-implement-a-new-feature-factory-plugin",children:[{value:"Interface to implement",id:"interface-to-implement",children:[],level:3},{value:"Implementation",id:"implementation",children:[],level:3},{value:"How your parameters will be received",id:"how-your-parameters-will-be-received",children:[],level:3}],level:2}],p={toc:s};function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"available-implementations"},"Available implementations"),(0,i.kt)("p",null,"Currently, there is no distributed implementation of the Feature Factory Plugin. The generation of features depends entirely on your project and has to be validated against your own model."),(0,i.kt)("h2",{id:"how-to-implement-a-new-feature-factory-plugin"},"How to implement a new feature factory plugin"),(0,i.kt)("h3",{id:"interface-to-implement"},"Interface to implement"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@PluginInterface(description = "Generate a feature from a reference request")\npublic interface IFeatureFactoryPlugin {\n\n    /**\n     * Generate a {@link Feature} from {@link FeatureExtractionRequest} parameters.\n     * @param parameters free extraction parameters\n     * @return generated {@link Feature}\n     */\n    Feature generateFeature(JsonObject parameters) throws ModuleException;\n}\n')),(0,i.kt)("h3",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"The implementation of this plugin depends on your specific needs. Therefore, a feature can be generated in many different ways based on generic parameters."),(0,i.kt)("p",null,"Here is a dummy example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.google.gson.JsonObject;\nimport fr.cnes.regards.framework.module.rest.exception.ModuleException;\nimport fr.cnes.regards.framework.modules.plugins.annotations.Plugin;\nimport fr.cnes.regards.framework.modules.plugins.annotations.PluginInit;\nimport fr.cnes.regards.framework.modules.plugins.annotations.PluginParameter;\nimport fr.cnes.regards.framework.urn.EntityType;\nimport fr.cnes.regards.modules.feature.dto.Feature;\nimport fr.cnes.regards.modules.featureprovider.domain.plugin.IFeatureFactoryPlugin;\n\n@Plugin(author = "REGARDS Team",\n        description = "Extract a dummy feature from the url of data file to reference",\n        id = DummyFeatureFactoryPlugin.PLUGIN_ID, version = "1.0.0", contact = "regards@c-s.fr", license = "GPLv3",\n        owner = "CNES", url = "https://regardsoss.github.io/")\npublic class DummyFeatureFactoryPlugin implements IFeatureFactoryPlugin {\n\n    public static final String PLUGIN_ID = "DummyExtract";\n\n    @Override\n    public Feature generateFeature(JsonObject parameters) throws ModuleException {\n        String url = parameters.get("url");\n        return Feature.build("Some Id" + url, "documentation", null, null, EntityType.DATA, "someModelNamedExample");\n    }\n\n}\n')),(0,i.kt)("p",null,"For more information on how to implement plugins, refer to ",(0,i.kt)("a",{parentName:"p",href:"../../../../framework/modules/plugins/"},"Plugin documentation"),"."),(0,i.kt)("h3",{id:"how-your-parameters-will-be-received"},"How your parameters will be received"),(0,i.kt)("p",null,"When ",(0,i.kt)("a",{parentName:"p",href:"../../api/amqp#feature-creation-request-by-file-reference"},"requesting an extraction"),", the field ",(0,i.kt)("inlineCode",{parentName:"p"},"parameters")," of the request contains the parameters given to this plugin when the method ",(0,i.kt)("inlineCode",{parentName:"p"},"IFeatureFactoryPlugin#generateFeature")," is called"))}m.isMDXComponent=!0}}]);