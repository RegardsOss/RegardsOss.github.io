"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[95904],{95788:(e,r,t)=>{t.d(r,{Iu:()=>c,yg:()=>f});var n=t(11504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},14532:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(45072),a=(t(11504),t(95788));const o={id:"backend-fem-feature-factory-plugins",title:"Feature Factory Plugin",sidebar_label:"Feature Factory",slug:"/development/backend/services/fem/plugins/feature-factory/"},i=void 0,l={unversionedId:"development/backend/regards/fem/plugins/backend-fem-feature-factory-plugins",id:"version-1.13.0/development/backend/regards/fem/plugins/backend-fem-feature-factory-plugins",title:"Feature Factory Plugin",description:"Available implementations",source:"@site/versioned_docs/version-1.13.0/development/backend/regards/fem/plugins/feature-factory-plugins.md",sourceDirName:"development/backend/regards/fem/plugins",slug:"/development/backend/services/fem/plugins/feature-factory/",permalink:"/docs/1.13.0/development/backend/services/fem/plugins/feature-factory/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/regards/fem/plugins/feature-factory-plugins.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-fem-feature-factory-plugins",title:"Feature Factory Plugin",sidebar_label:"Feature Factory",slug:"/development/backend/services/fem/plugins/feature-factory/"},sidebar:"dev",previous:{title:"Feature Manager AMQP",permalink:"/docs/1.13.0/development/backend/services/fem/api/amqp/"},next:{title:"Overview",permalink:"/docs/1.13.0/development/backend/services/notifier/overview/"}},u={},s=[{value:"Available implementations",id:"available-implementations",level:2},{value:"How to implement a new feature factory plugin",id:"how-to-implement-a-new-feature-factory-plugin",level:2},{value:"Interface to implement",id:"interface-to-implement",level:3},{value:"Implementation",id:"implementation",level:3},{value:"How your parameters will be received",id:"how-your-parameters-will-be-received",level:3}],c={toc:s},p="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.c)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"available-implementations"},"Available implementations"),(0,a.yg)("p",null,"Currently, there is no distributed implementation of the Feature Factory Plugin. The generation of features depends entirely on your project and has to be validated against your own model."),(0,a.yg)("h2",{id:"how-to-implement-a-new-feature-factory-plugin"},"How to implement a new feature factory plugin"),(0,a.yg)("h3",{id:"interface-to-implement"},"Interface to implement"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'@PluginInterface(description = "Generate a feature from a reference request")\npublic interface IFeatureFactoryPlugin {\n\n    /**\n     * Generate a {@link Feature} from {@link FeatureExtractionRequest} parameters.\n     * @param parameters free extraction parameters\n     * @return generated {@link Feature}\n     */\n    Feature generateFeature(JsonObject parameters) throws ModuleException;\n}\n')),(0,a.yg)("h3",{id:"implementation"},"Implementation"),(0,a.yg)("p",null,"The implementation of this plugin depends on your specific needs. Therefore, a feature can be generated in many different ways based on generic parameters."),(0,a.yg)("p",null,"Here is a dummy example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'import com.google.gson.JsonObject;\nimport fr.cnes.regards.framework.module.rest.exception.ModuleException;\nimport fr.cnes.regards.framework.modules.plugins.annotations.Plugin;\nimport fr.cnes.regards.framework.modules.plugins.annotations.PluginInit;\nimport fr.cnes.regards.framework.modules.plugins.annotations.PluginParameter;\nimport fr.cnes.regards.framework.urn.EntityType;\nimport fr.cnes.regards.modules.feature.dto.Feature;\nimport fr.cnes.regards.modules.featureprovider.domain.plugin.IFeatureFactoryPlugin;\n\n@Plugin(author = "REGARDS Team",\n        description = "Extract a dummy feature from the url of data file to reference",\n        id = DummyFeatureFactoryPlugin.PLUGIN_ID, version = "1.0.0", contact = "regards@c-s.fr", license = "GPLv3",\n        owner = "CNES", url = "https://regardsoss.github.io/")\npublic class DummyFeatureFactoryPlugin implements IFeatureFactoryPlugin {\n\n    public static final String PLUGIN_ID = "DummyExtract";\n\n    @Override\n    public Feature generateFeature(JsonObject parameters) throws ModuleException {\n        String url = parameters.get("url");\n        return Feature.build("Some Id" + url, "documentation", null, null, EntityType.DATA, "someModelNamedExample");\n    }\n\n}\n')),(0,a.yg)("p",null,"For more information on how to implement plugins, refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/1.13.0/development/backend/framework/modules/plugins/"},"Plugin documentation"),"."),(0,a.yg)("h3",{id:"how-your-parameters-will-be-received"},"How your parameters will be received"),(0,a.yg)("p",null,"When ",(0,a.yg)("a",{parentName:"p",href:"/docs/1.13.0/development/backend/services/fem/api/amqp/#feature-creation-request-by-file-reference"},"requesting an extraction"),", the field ",(0,a.yg)("inlineCode",{parentName:"p"},"parameters")," of the request contains the parameters given to this plugin when the method ",(0,a.yg)("inlineCode",{parentName:"p"},"IFeatureFactoryPlugin#generateFeature")," is called"))}m.isMDXComponent=!0}}]);