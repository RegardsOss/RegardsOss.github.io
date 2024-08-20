"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[90212],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,g=d["".concat(l,".").concat(c)]||d[c]||p[c]||i;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[d]="string"==typeof e?e:r,o[1]=u;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},38351:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={id:"backend-dam-computed-attribute-plugins",title:"Computed attribute plugins",sidebar_label:"Computed attribute",slug:"/development/backend/services/dam/plugins/computed-attribute/"},o=void 0,u={unversionedId:"development/backend/regards/dam/plugins/backend-dam-computed-attribute-plugins",id:"development/backend/regards/dam/plugins/backend-dam-computed-attribute-plugins",title:"Computed attribute plugins",description:"Overview",source:"@site/docs/development/backend/regards/dam/plugins/computed-attribute-plugins.md",sourceDirName:"development/backend/regards/dam/plugins",slug:"/development/backend/services/dam/plugins/computed-attribute/",permalink:"/docs/next/development/backend/services/dam/plugins/computed-attribute/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dam/plugins/computed-attribute-plugins.md",tags:[],version:"current",frontMatter:{id:"backend-dam-computed-attribute-plugins",title:"Computed attribute plugins",sidebar_label:"Computed attribute",slug:"/development/backend/services/dam/plugins/computed-attribute/"},sidebar:"dev",previous:{title:"Data access rights",permalink:"/docs/next/development/backend/services/dam/plugins/data-access-rights/"},next:{title:"Datasource",permalink:"/docs/next/development/backend/services/dam/plugins/datasource/"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}],m={toc:s},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This extension point allows to define a calculation method for a feature attribute value before indexation in REGARDS catalog. This calcul is made during the data source crawling process.")),(0,r.kt)("p",null,"REGARDS provides many implementation of this extension point :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/CountPlugin.java"},"CountPlugin")," : Allow to compute the number of dataobjects of a dataset."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/IntSumComputePlugin.java"},"IntSumComputePlugin")," : Allow to compute an integer sum of an attribute of each dataobjects in a dataset."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/LongSumComputePlugin.java"},"LongSumComputePlugin")," : Allow to compute the sum of an attribute of each dataobjects in a dataset."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/MaxDateComputePlugin.java"},"MaxDateComputePlugin")," : Allow to compute the minimum date of all dataobjects in a dataset."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/MinDateComputePlugin.java"},"MinDateComputePlugin")," : Allow to compute the maximum date of all dataobjects in a dataset.")),(0,r.kt)("h2",{id:"interface"},"Interface"),(0,r.kt)("p",null,"   ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/model/model-domain/src/main/java/fr/cnes/regards/modules/model/domain/IComputedAttribute.java"},"IComputedAttribute")),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"To learn more about how to create your own plugin see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/development/backend/framework/modules/plugins/"},"Plugins")),(0,r.kt)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic.\nThis exemple show how to fill a feature attribute with the concatenation of two other ones."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\n@ComputationPlugin(supportedType = AttributeType.STRING)\npublic class Plugin implements IComputedAttribute<Dataobject, String> {\n\n    @PluginParameter(name = "attributeToComputeName", label = "Result attribute name",\n            description = "Name of attribute to compute (ie result attribute).", unconfigurable = true)\n    private String attributeToComputeName;\n\n    @PluginParameter(name = "attributeToComputeFragmentName", label = "Result fragment name",\n            description = "Name of attribute to compute fragment. If computed attribute belongs to "\n                    + "default fragment, this value can be set to null.", optional = true, unconfigurable = true)\n    private String attributeToComputeFragmentName;\n\n    private AttributeModel attributeToCompute;\n\n    private String value = "";\n\n    /**\n     * Plugin initialization method to retrieve AttributeModel from configuration\n     */\n    @PluginInit\n    public void init() {\n        attributeToCompute = attModelRepos.findByNameAndFragmentName(attributeToComputeName, Strings.isNullOrEmpty(\n                attributeToComputeFragmentName) ? Fragment.getDefaultName() : attributeToComputeFragmentName);\n    }\n\n    @Override\n    public String getResult() {\n        return value;\n    }\n\n    @Override\n    public void compute(Dataobject dataobject) {\n        value = String.format("computed value - %s - %s - ",\n            dataset.getProperty("property1").getValue().toString(),\n            dataset.getProperty("property2").getValue().toString()\n        );\n    }\n\n    @Override\n    public AttributeModel getAttributeToCompute() {\n        return attributeToCompute;\n    }\n}\n')))}p.isMDXComponent=!0}}]);