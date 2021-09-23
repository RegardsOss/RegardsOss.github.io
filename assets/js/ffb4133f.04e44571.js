"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[39108],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2562:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"frontend-service-plugins",title:"Plugin service",sidebar_label:"Services",slug:"/development/frontend/plugins/service/"},s=void 0,p={unversionedId:"development/frontend/plugins/frontend-service-plugins",id:"development/frontend/plugins/frontend-service-plugins",isDocsHomePage:!1,title:"Plugin service",description:"Presentation",source:"@site/docs/development/frontend/plugins/plugin-services.md",sourceDirName:"development/frontend/plugins",slug:"/development/frontend/plugins/service/",permalink:"/docs/development/frontend/plugins/service/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/plugins/plugin-services.md",tags:[],version:"current",frontMatter:{id:"frontend-service-plugins",title:"Plugin service",sidebar_label:"Services",slug:"/development/frontend/plugins/service/"},sidebar:"dev",previous:{title:"Criteria",permalink:"/docs/development/frontend/plugins/criteria/"},next:{title:"Layout configuration",permalink:"/docs/development/frontend/configuration/layout/"}},c=[{value:"Presentation",id:"presentation",children:[]},{value:"Main principles",id:"main-principles",children:[]},{value:"Frontend plugin service VS Catalog plugin",id:"frontend-plugin-service-vs-catalog-plugin",children:[]},{value:"Life cycle",id:"life-cycle",children:[]},{value:"Specific configuration (plugin-info.json fields)",id:"specific-configuration-plugin-infojson-fields",children:[]},{value:"Specific runtime properties",id:"specific-runtime-properties",children:[{value:"target property",id:"target-property",children:[]},{value:"configuration property",id:"configuration-property",children:[]},{value:"onClose property",id:"onclose-property",children:[]}]},{value:"Handling targets seamlessly",id:"handling-targets-seamlessly",children:[]},{value:"Going further",id:"going-further",children:[]}],u={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"presentation"},"Presentation"),(0,a.kt)("p",null,"A front-end service plugin is a javascript bundle used by ",(0,a.kt)("a",{parentName:"p",href:"../../packages/lazy-modules/search-results/"},"search results modules")," to add a graphical service onto a given entity or entities selection."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(81465).Z}),"\n",(0,a.kt)("em",{parentName:"p"},"Some services example: on lines, services for one entity. On header, services for current selection.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes"),":  Service plugin also respects main plugin consideration. Thus, make sure reading ",(0,a.kt)("a",{parentName:"p",href:"../../plugins/"},"plugins page")," first!"),(0,a.kt)("p",null,"A service may work for one or for many data objects. It allows defining administrator (static) and user (dynamic) parameters for execution. "),(0,a.kt)("h2",{id:"main-principles"},"Main principles"),(0,a.kt)("p",null,"Each service plugin:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"displays a ",(0,a.kt)("strong",{parentName:"li"},"custom graphical component")," for a given object or selection"),(0,a.kt)("li",{parentName:"ul"},"defines working modes (one entity or selection / query)"),(0,a.kt)("li",{parentName:"ul"},"receives optionally, at runtime, two layers of configuration",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"a static layer, configured by project administrator"),(0,a.kt)("li",{parentName:"ul"},"a dynamic layer, configured by current user just before running the service.")))),(0,a.kt)("h2",{id:"frontend-plugin-service-vs-catalog-plugin"},"Frontend plugin service VS Catalog plugin"),(0,a.kt)("p",null,"A frontend service and a catalog plugin are both able to provide services for a set of data. However, their purpose and constraints are slightly different:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The catalog plugin, by design, can only build a file as execution result. It has better data retrieving and computing performances, as it runs on a server node. That consideration is highly important when dealing with huge data amounts."),(0,a.kt)("li",{parentName:"ul"},"The frontend service shows graphical components, charts, and so on... It has low CPU and memory resources as it runs in user web browser.")),(0,a.kt)("p",null,"Therefore, the catalog plugin should be preferred when a simple file, downloaded by user and opened externally, can fully provide the service. On the other hand, frontend service should be preferred when a new interface functionality is required."),(0,a.kt)("p",null,"It can occur that such a new functionality is required ",(0,a.kt)("strong",{parentName:"p"},"and must work with heavy data volumes"),". In such cases, it is usually a good solution to couple a catalog plugin with a frontend service, delegating tasks as following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Catalog service receives data retrieval request and prepares a file holding data to be used by the front-end service"),(0,a.kt)("li",{parentName:"ul"},"Frontend service starts the catalog service, waits for resulting file then consumes it to show user view.")),(0,a.kt)("h2",{id:"life-cycle"},"Life cycle"),(0,a.kt)("p",null,"The plugin service life cycle is compound of the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A. Administration configuration",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Plugin declaration (see common plugin page)"),(0,a.kt)("li",{parentName:"ol"},"Service configuration creation, by administrator."))),(0,a.kt)("li",{parentName:"ul"},"B. Service running (can be iterated)",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Service runtime configuration, by user. That step is skipped if service has no dynamic configuration layer."),(0,a.kt)("li",{parentName:"ol"},"Service display")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(53003).Z}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"An example of service configuration creation (A.2 step)")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(35476).Z}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"An example of service runtime configuration (B.1 step)")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(74069).Z}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"An example of service display (B.2 step)")),(0,a.kt)("h2",{id:"specific-configuration-plugin-infojson-fields"},"Specific configuration (plugin-info.json fields)"),(0,a.kt)("p",null,"First of all, the plugin-info.json file field ",(0,a.kt)("strong",{parentName:"p"},'"type"')," should indicate ",(0,a.kt)("strong",{parentName:"p"},'"SERVICE"'),", to ensure it is considered as a service, and not as a criterion."),(0,a.kt)("p",null,"Then, the plugin must indicate its ",(0,a.kt)("strong",{parentName:"p"},"application mode")," (one entity and / or many entities), the ",(0,a.kt)("strong",{parentName:"p"},"entity types")," he expects to work with and its configuration (static and dynamic, see previous sections for more detail). Therefore, the ",(0,a.kt)("strong",{parentName:"p"},'"conf"')," field, in ",(0,a.kt)("strong",{parentName:"p"},"plugin-info.json")," file,  contains the following specific fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"applicationModes"'),": ",(0,a.kt)("em",{parentName:"li"},"{array}")," a required array that can contain one or both the following values:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'"ONE"'),": the service applies to one entity"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'"MANY"'),": the service applies to many entities"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"entityTypes"'),": ",(0,a.kt)("em",{parentName:"li"},"{array}")," a required array that can contain some or all the following values:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'"DATA"'),": The service works with data objects"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'"COLLECTION"'),": The service works with collections, ",(0,a.kt)("em",{parentName:"li"},"not supported yet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'"DATASET"'),": The service works with datasets, ",(0,a.kt)("em",{parentName:"li"},"not supported yet")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"showButtonsBar"'),": ",(0,a.kt)("em",{parentName:"li"},"{boolean}")," When true, service launcher button bar is displayed below the service, after configuration, allowing the user to step back to runtime configuration anb close the service. When false, button bar is hidden and the service should handle closing by itself."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"static"),": ",(0,a.kt)("em",{parentName:"li"},"{object}")," an optional object of parameters defining the static configuration layer. Each parameter in that object will be defined as following:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{object key}"),": property key, as it will be used by the plugin at runtime. It is also used as label in the administrator configuration form"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type")," : ",(0,a.kt)("em",{parentName:"li"},"{string}")," It determines the type that will actually be received at runtime by the plugin. One of ",(0,a.kt)("strong",{parentName:"li"},'"bool"'),", ",(0,a.kt)("strong",{parentName:"li"},'"char"'),", ",(0,a.kt)("strong",{parentName:"li"},'"date"'),", ",(0,a.kt)("strong",{parentName:"li"},'"float"'),", ",(0,a.kt)("strong",{parentName:"li"},'"int"'),", ",(0,a.kt)("strong",{parentName:"li"},'"string"')," types. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"required"),": ",(0,a.kt)("em",{parentName:"li"},"{boolean}")," When true, null or undefined values will be forbidden for the property."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dynamic"),": ",(0,a.kt)("em",{parentName:"li"},"{object}")," an optional object of parameters defining the dynamic configuration layer.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{object key}"),": property key, as it will be used by the plugin at runtime."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type")," : ",(0,a.kt)("em",{parentName:"li"},"{string}")," working like corresponding element in ",(0,a.kt)("strong",{parentName:"li"},"static")," field"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"required")," : ",(0,a.kt)("em",{parentName:"li"},"{boolean}")," working like corresponding element in ",(0,a.kt)("strong",{parentName:"li"},"static")," field"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"label"),": ",(0,a.kt)("em",{parentName:"li"},"{string}")," Parameter label, that will be shown to user when filling dynamic configuration form")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note that administrator is allowed setting a default value for all dynamic parameters. That value will be used, when provided, as initial parameter value, but the user will still be allowed modifying it")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-plugin",\n  "description": "It is my plugin",\n  "version" : "1.0.0",\n  "author" : "Someone",\n  "company" : "Some company",\n  "email" : "someone@some-company.com",\n  "url" : "www.my-plugin-is-awesome.com",\n  "license": "GPL-V3",\n  "type" : "SERVICE",\n  "conf" : {\n    "applicationModes": [\n      "ONE",\n      "MANY"\n    ],\n    "entityTypes": [\n      "DATA"\n    ],\n    "showButtonsBar": true,\n    "static": {\n      "adminParam1": {\n        "type": "string",\n        "required": false\n      },\n    },\n    "dynamic": {\n      "userParam1": {\n        "label": "A boolean",\n        "type": "bool",\n        "required": true\n      },\n      "userParam2": {\n        "label": "A char",\n        "type": "char",\n        "required": false\n      },\n    }\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"An example of plugin-info.json for service criterion")),(0,a.kt)("h2",{id:"specific-runtime-properties"},"Specific runtime properties"),(0,a.kt)("p",null,"The main service component - the one exported in main.js file - will receive the following properties at runtime: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  static propTypes = {\n    pluginInstanceId: React.PropTypes.string,\n    target: AccessShapes.PluginTarget.isRequired,\n    configuration: AccessShapes.RuntimeConfiguration.isRequired,\n    onClose: PropTypes.func.isRequired,\n  }\n")),(0,a.kt)("p",null,"Those properties, excepted pluginInstanceId which is a common plugin property, are detailed in following subsections."),(0,a.kt)("h3",{id:"target-property"},"target property"),(0,a.kt)("p",null,"Target property exact shape depends on current target type. However, the following fields are always present:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type"),": The current target type from ",(0,a.kt)("inlineCode",{parentName:"li"},"AccessDomain.RuntimeTargetTypes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"searchContext"),": the current search context, with fields:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"engineType"),": name of the search engine currently used"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"searchParameters"),": search parameters to retrieve entities for which service currently runs"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"entitiesCount"),": number of entities for which service currently runs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"entityType"),": type of entities for which service currently runs")),(0,a.kt)("p",null,"According with service configuration, some of those fields may be constants. For instance, ",(0,a.kt)("em",{parentName:"p"},"target.entityTypes")," would always be ",(0,a.kt)("em",{parentName:"p"},"'DATA'")," if service configuration specifies ",(0,a.kt)("inlineCode",{parentName:"p"},'"entityTypes": ["DATA"]'),". In the same way, ",(0,a.kt)("em",{parentName:"p"},"target.entitiesCount")," is always ",(0,a.kt)("em",{parentName:"p"},"1")," if service is currently running for a single entity."),(0,a.kt)("p",null,"Each target type also adds a custom field:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When type is ",(0,a.kt)("inlineCode",{parentName:"li"},"AccessDomain.RuntimeTargetTypes.ONE"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"entity")," field is added in target. It holds the entity for which service currently runs, matching CatalogShapes.Entity shape"),(0,a.kt)("li",{parentName:"ul"},"When type is ",(0,a.kt)("inlineCode",{parentName:"li"},"AccessDomain.RuntimeTargetTypes.MANY"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"entities")," field is added in target. It holds the list of entities for which service currently runs, matching PropTypes.arrayOf(CatalogShapes.Entity)"),(0,a.kt)("li",{parentName:"ul"},"When type is ",(0,a.kt)("inlineCode",{parentName:"li"},"AccessDomain.RuntimeTargetTypes.QUERY"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"excludedEntities")," field is added in target. It holds the list of entities that should be ignored in current search context, matching PropTypes.arrayOf(CatalogShapes.Entity)")),(0,a.kt)("p",null,"Finally, please note that a plugin ",(0,a.kt)("strong",{parentName:"p"},"will never receive a target that does not match what was specified")," in configuration fields ",(0,a.kt)("em",{parentName:"p"},"applicationModes")," and ",(0,a.kt)("em",{parentName:"p"},"entityTypes")),(0,a.kt)("h3",{id:"configuration-property"},"configuration property"),(0,a.kt)("p",null,"When launched, the service plugin main component receives the property ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration"),". That object represents the runtime configuration.\nIt has the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"static"),": ",(0,a.kt)("em",{parentName:"li"},"{object}")," This field contains the static configuration layer map, filled by administrator. The keys in map are ",(0,a.kt)("em",{parentName:"li"},"parameter names")," and the values are those entered by the administrator, matching type specified in plugin-info.json. Every parameter that was marked as ",(0,a.kt)("inlineCode",{parentName:"li"},"required")," is granted here to be defined (never null nor undefined). Other ones should be checked before using."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dynamic"),": ",(0,a.kt)("em",{parentName:"li"},"{object}")," This field contains the dynamic configuration layer map, filled by user. It works exactly the same than static field. ")),(0,a.kt)("h3",{id:"onclose-property"},"onClose property"),(0,a.kt)("p",null,"That property can be used to close the service at any moment, by performing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"onUserIsRude = () => {\n  this.props.onClose() // He's gone too far now!\n}\n")),(0,a.kt)("h2",{id:"handling-targets-seamlessly"},"Handling targets seamlessly"),(0,a.kt)("p",null,"REGARDS source code provide a small tool to handle seamlessly any target type. It allows reducing selected entities - see ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce"},"reduce method documentation"),", imitating a simple array reduction. To be able using it, it must be declared in mapStateToProps method (see ",(0,a.kt)("a",{parentName:"p",href:"https://react-redux.js.org/using-react-redux/connect-mapdispatch"},"Redux documentation")," if you are not familiar with that method)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// ...\nimport { TargetEntitiesResolver } from '@regardsoss/plugins-api'\n// ...\nclass MyServiceContainer extends React.Component {\n  // ...\n  static mapDispatchToProps = (dispatch, { target }) => ({\n    // we apply partially the method getReducePromise to ignore dispatch reference at runtime\n    getReducePromise: (reducer, initialValue) => TargetEntitiesResolver.getReducePromise(dispatch, target, reducer, initialValue),\n  })\n\n  static propTypes = {\n    pluginInstanceId: PropTypes.string.isRequired, // Plugin identifier (unused here)\n    target: AccessShapes.PluginTarget.isRequired,\n    configuration: AccessShapes.RuntimeConfiguration.isRequired,\n    // ...\n    // From mapDispatchToProps\n    getReducePromise: PropTypes.func.isRequired,\n  }\n  \n  // ...\n\ncomponentDidMount() {\n    const { getReducePromise } = this.props\n    getReducePromise((previousResult, entity, index) => {\n      // retreat the entity and append treament result to previously managed entities array\n      return [...previousResults, this.doSomethingWithEntity(entity)]\n    }, []) // initial value, here an empty array\n    .then((results) => this.onResolved(results)\n    .catch((e) => this.onResolutionError(e))\n  }\n\n// ...\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Although it is not exposed, that method may perform network calls in background. Hence, when the payload is important, it may be very time consuming."),(0,a.kt)("li",{parentName:"ul"},"Appending all entities in memory, without modifying them to cut down their weight, is a bad practice, once again due to the possible payload size.")),(0,a.kt)("h2",{id:"going-further"},"Going further"),(0,a.kt)("p",null,"The React container ExampleContainer, from ",(0,a.kt)("em",{parentName:"p"},"webapp/plugin/services/example"),", in ",(0,a.kt)("em",{parentName:"p"},"rs-frontend")," repository, illustrates using the plugin service configuration and target to show entities partitions. It uses ",(0,a.kt)("inlineCode",{parentName:"p"},"getReducePromise")," to avoid handling manually the target types when fetching data, recovering it through actions, test react components... Reading that example should be a good starting point from here."))}d.isMDXComponent=!0},53003:function(e,t,n){t.Z=n.p+"assets/images/service-configuration-declaration-e0df93cc4e5c4f60ac0f8142ad11c2f0.png"},74069:function(e,t,n){t.Z=n.p+"assets/images/service-results-display-b6ea83d0d24b7d87ccdac43d476c6599.png"},35476:function(e,t,n){t.Z=n.p+"assets/images/service-runtime-configuration-64cd7d87295265bc8189ee9b0f6439ff.png"},81465:function(e,t,n){t.Z=n.p+"assets/images/services-example-d82acec2d90c6a78d8830e68ed5e56a6.png"}}]);