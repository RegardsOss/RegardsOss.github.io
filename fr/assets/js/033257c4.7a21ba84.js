"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[90212],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(a),c=r,g=p["".concat(m,".").concat(c)]||p[c]||d[c]||i;return a?n.createElement(g,o(o({ref:t},l),{},{components:a})):n.createElement(g,o({ref:t},l))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var u={};for(var m in t)hasOwnProperty.call(t,m)&&(u[m]=t[m]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},80343:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],u={id:"backend-dam-computed-attribute-plugins",title:"Computed attribute plugins",sidebar_label:"Computed attribute",slug:"/development/backend/services/dam/plugins/computed-attribute/"},m=void 0,s={unversionedId:"development/backend/regards/dam/plugins/backend-dam-computed-attribute-plugins",id:"development/backend/regards/dam/plugins/backend-dam-computed-attribute-plugins",isDocsHomePage:!1,title:"Computed attribute plugins",description:"Overview",source:"@site/docs/development/backend/regards/dam/plugins/computed-attribute-plugins.md",sourceDirName:"development/backend/regards/dam/plugins",slug:"/development/backend/services/dam/plugins/computed-attribute/",permalink:"/fr/docs/development/backend/services/dam/plugins/computed-attribute/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dam/plugins/computed-attribute-plugins.md",version:"current",frontMatter:{id:"backend-dam-computed-attribute-plugins",title:"Computed attribute plugins",sidebar_label:"Computed attribute",slug:"/development/backend/services/dam/plugins/computed-attribute/"},sidebar:"dev",previous:{title:"Data access rights",permalink:"/fr/docs/development/backend/services/dam/plugins/data-access-rights/"},next:{title:"Datasource",permalink:"/fr/docs/development/backend/services/dam/plugins/datasource/"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Implementation",id:"implementation",children:[]}],d={toc:l};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This extension point allows to define a calculation method for a feature attribute value before indexation in REGARDS catalog. This calcul is made during the data source crawling process."))),(0,i.kt)("p",null,"REGARDS provides many implementation of this extension point :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/CountPlugin.java"},"CountPlugin")," : Allow to compute the number of dataobjects of a dataset."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/IntSumComputePlugin.java"},"IntSumComputePlugin")," : Allow to compute an integer sum of an attribute of each dataobjects in a dataset."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/LongSumComputePlugin.java"},"LongSumComputePlugin")," : Allow to compute the sum of an attribute of each dataobjects in a dataset."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/MaxDateComputePlugin.java"},"MaxDateComputePlugin")," : Allow to compute the minimum date of all dataobjects in a dataset."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/MinDateComputePlugin.java"},"MinDateComputePlugin")," : Allow to compute the maximum date of all dataobjects in a dataset.")),(0,i.kt)("h2",{id:"interface"},"Interface"),(0,i.kt)("p",null,"   ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/model/model-domain/src/main/java/fr/cnes/regards/modules/model/domain/IComputedAttribute.java"},"IComputedAttribute")),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"To learn more about how to create your own plugin see ",(0,i.kt)("a",{parentName:"p",href:"../../../../framework/modules/plugins/"},"Plugins")),(0,i.kt)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic.\nThis exemple show how to fill a feature attribute with the concatenation of two other ones."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\n@ComputationPlugin(supportedType = AttributeType.STRING)\npublic class Plugin implements IComputedAttribute<Dataobject, String> {\n\n    @PluginParameter(name = "attributeToComputeName", label = "Result attribute name",\n            description = "Name of attribute to compute (ie result attribute).", unconfigurable = true)\n    private String attributeToComputeName;\n\n    @PluginParameter(name = "attributeToComputeFragmentName", label = "Result fragment name",\n            description = "Name of attribute to compute fragment. If computed attribute belongs to "\n                    + "default fragment, this value can be set to null.", optional = true, unconfigurable = true)\n    private String attributeToComputeFragmentName;\n\n    private AttributeModel attributeToCompute;\n\n    private String value = "";\n\n    /**\n     * Plugin initialization method to retrieve AttributeModel from configuration\n     */\n    @PluginInit\n    public void init() {\n        attributeToCompute = attModelRepos.findByNameAndFragmentName(attributeToComputeName, Strings.isNullOrEmpty(\n                attributeToComputeFragmentName) ? Fragment.getDefaultName() : attributeToComputeFragmentName);\n    }\n\n    @Override\n    public String getResult() {\n        return value;\n    }\n\n    @Override\n    public void compute(Dataobject dataobject) {\n        value = String.format("computed value - %s - %s - ",\n            dataset.getProperty("property1").getValue().toString(),\n            dataset.getProperty("property2").getValue().toString()\n        );\n    }\n\n    @Override\n    public AttributeModel getAttributeToCompute() {\n        return attributeToCompute;\n    }\n}\n')))}p.isMDXComponent=!0}}]);