(window.webpackJsonp=window.webpackJsonp||[]).push([[1706],{1780:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),r=(n(0),n(2708)),o={id:"frontend-service-plugins",title:"Plugin service",sidebar_label:"Services",slug:"/development/frontend/plugins/service/"},l={unversionedId:"development/frontend/plugins/frontend-service-plugins",id:"version-1.4.0/development/frontend/plugins/frontend-service-plugins",isDocsHomePage:!1,title:"Plugin service",description:"Presentation",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/frontend/plugins/plugin-services.md",slug:"/development/frontend/plugins/service/",permalink:"/fr/docs/1.4.0/development/frontend/plugins/service/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/frontend/plugins/plugin-services.md",version:"1.4.0",sidebar_label:"Services",sidebar:"version-1.4.0/dev",previous:{title:"Plugin criterion",permalink:"/fr/docs/1.4.0/development/frontend/plugins/criteria/"},next:{title:"REGARDS layout configuration",permalink:"/fr/docs/1.4.0/development/frontend/configuration/layout/"}},c=[{value:"Presentation",id:"presentation",children:[]},{value:"Main principles",id:"main-principles",children:[]},{value:"Frontend plugin service VS Catalog plugin",id:"frontend-plugin-service-vs-catalog-plugin",children:[]},{value:"Life cycle",id:"life-cycle",children:[]},{value:"Specific configuration (plugin-info.json fields)",id:"specific-configuration-plugin-infojson-fields",children:[]},{value:"Specific runtime properties",id:"specific-runtime-properties",children:[{value:"target property",id:"target-property",children:[]},{value:"configuration property",id:"configuration-property",children:[]},{value:"onClose property",id:"onclose-property",children:[]}]},{value:"Handling targets seamlessly",id:"handling-targets-seamlessly",children:[]},{value:"Going further",id:"going-further",children:[]}],s={toc:c};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"presentation"},"Presentation"),Object(r.b)("p",null,"A front-end service plugin is a javascript bundle used by ",Object(r.b)("a",{parentName:"p",href:"../../packages/lazy-modules/search-results/"},"search results modules")," to add a graphical service onto a given entity or entities selection."),Object(r.b)("p",null,Object(r.b)("img",{src:n(2717).default}),"\n",Object(r.b)("em",{parentName:"p"},"Some services example: on lines, services for one entity. On header, services for current selection.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Notes"),":  Service plugin also respects main plugin consideration. Thus, make sure reading ",Object(r.b)("a",{parentName:"p",href:"../../plugins/"},"plugins page")," first!"),Object(r.b)("p",null,"A service may work for one or for many data objects. It allows defining administrator (static) and user (dynamic) parameters for execution. "),Object(r.b)("h2",{id:"main-principles"},"Main principles"),Object(r.b)("p",null,"Each service plugin:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"displays a ",Object(r.b)("strong",{parentName:"li"},"custom graphical component")," for a given object or selection"),Object(r.b)("li",{parentName:"ul"},"defines working modes (one entity or selection / query)"),Object(r.b)("li",{parentName:"ul"},"receives optionally, at runtime, two layers of configuration",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"a static layer, configured by project administrator"),Object(r.b)("li",{parentName:"ul"},"a dynamic layer, configured by current user just before running the service.")))),Object(r.b)("h2",{id:"frontend-plugin-service-vs-catalog-plugin"},"Frontend plugin service VS Catalog plugin"),Object(r.b)("p",null,"A frontend service and a catalog plugin are both able to provide services for a set of data. However, their purpose and constraints are slightly different:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The catalog plugin, by design, can only build a file as execution result. It has better data retrieving and computing performances, as it runs on a server node. That consideration is highly important when dealing with huge data amounts."),Object(r.b)("li",{parentName:"ul"},"The frontend service shows graphical components, charts, and so on... It has low CPU and memory resources as it runs in user web browser.")),Object(r.b)("p",null,"Therefore, the catalog plugin should be preferred when a simple file, downloaded by user and opened externally, can fully provide the service. On the other hand, frontend service should be preferred when a new interface functionality is required."),Object(r.b)("p",null,"It can occur that such a new functionality is required ",Object(r.b)("strong",{parentName:"p"},"and must work with heavy data volumes"),". In such cases, it is usually a good solution to couple a catalog plugin with a frontend service, delegating tasks as following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Catalog service receives data retrieval request and prepares a file holding data to be used by the front-end service"),Object(r.b)("li",{parentName:"ul"},"Frontend service starts the catalog service, waits for resulting file then consumes it to show user view.")),Object(r.b)("h2",{id:"life-cycle"},"Life cycle"),Object(r.b)("p",null,"The plugin service life cycle is compound of the following steps:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A. Administration configuration",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Plugin declaration (see common plugin page)"),Object(r.b)("li",{parentName:"ol"},"Service configuration creation, by administrator."))),Object(r.b)("li",{parentName:"ul"},"B. Service running (can be iterated)",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Service runtime configuration, by user. That step is skipped if service has no dynamic configuration layer."),Object(r.b)("li",{parentName:"ol"},"Service display")))),Object(r.b)("p",null,Object(r.b)("img",{src:n(2760).default}),Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("em",{parentName:"p"},"An example of service configuration creation (A.2 step)")),Object(r.b)("p",null,Object(r.b)("img",{src:n(2761).default}),Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("em",{parentName:"p"},"An example of service runtime configuration (B.1 step)")),Object(r.b)("p",null,Object(r.b)("img",{src:n(2762).default}),Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("em",{parentName:"p"},"An example of service display (B.2 step)")),Object(r.b)("h2",{id:"specific-configuration-plugin-infojson-fields"},"Specific configuration (plugin-info.json fields)"),Object(r.b)("p",null,"First of all, the plugin-info.json file field ",Object(r.b)("strong",{parentName:"p"},'"type"')," should indicate ",Object(r.b)("strong",{parentName:"p"},'"SERVICE"'),", to ensure it is considered as a service, and not as a criterion."),Object(r.b)("p",null,"Then, the plugin must indicate its ",Object(r.b)("strong",{parentName:"p"},"application mode")," (one entity and / or many entities), the ",Object(r.b)("strong",{parentName:"p"},"entity types")," he expects to work with and its configuration (static and dynamic, see previous sections for more detail). Therefore, the ",Object(r.b)("strong",{parentName:"p"},'"conf"')," field, in ",Object(r.b)("strong",{parentName:"p"},"plugin-info.json")," file,  contains the following specific fields:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"applicationModes"'),": ",Object(r.b)("em",{parentName:"li"},"{array}")," a required array that can contain one or both the following values:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},'"ONE"'),": the service applies to one entity"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},'"MANY"'),": the service applies to many entities"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"entityTypes"'),": ",Object(r.b)("em",{parentName:"li"},"{array}")," a required array that can contain some or all the following values:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},'"DATA"'),": The service works with data objects"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},'"COLLECTION"'),": The service works with collections, ",Object(r.b)("em",{parentName:"li"},"not supported yet")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},'"DATASET"'),": The service works with datasets, ",Object(r.b)("em",{parentName:"li"},"not supported yet")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"showButtonsBar"'),": ",Object(r.b)("em",{parentName:"li"},"{boolean}")," When true, service launcher button bar is displayed below the service, after configuration, allowing the user to step back to runtime configuration anb close the service. When false, button bar is hidden and the service should handle closing by itself."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"static"),": ",Object(r.b)("em",{parentName:"li"},"{object}")," an optional object of parameters defining the static configuration layer. Each parameter in that object will be defined as following:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"{object key}"),": property key, as it will be used by the plugin at runtime. It is also used as label in the administrator configuration form"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"type")," : ",Object(r.b)("em",{parentName:"li"},"{string}")," It determines the type that will actually be received at runtime by the plugin. One of ",Object(r.b)("strong",{parentName:"li"},'"bool"'),", ",Object(r.b)("strong",{parentName:"li"},'"char"'),", ",Object(r.b)("strong",{parentName:"li"},'"date"'),", ",Object(r.b)("strong",{parentName:"li"},'"float"'),", ",Object(r.b)("strong",{parentName:"li"},'"int"'),", ",Object(r.b)("strong",{parentName:"li"},'"string"')," types. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"required"),": ",Object(r.b)("em",{parentName:"li"},"{boolean}")," When true, null or undefined values will be forbidden for the property."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dynamic"),": ",Object(r.b)("em",{parentName:"li"},"{object}")," an optional object of parameters defining the dynamic configuration layer.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"{object key}"),": property key, as it will be used by the plugin at runtime."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"type")," : ",Object(r.b)("em",{parentName:"li"},"{string}")," working like corresponding element in ",Object(r.b)("strong",{parentName:"li"},"static")," field"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"required")," : ",Object(r.b)("em",{parentName:"li"},"{boolean}")," working like corresponding element in ",Object(r.b)("strong",{parentName:"li"},"static")," field"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"label"),": ",Object(r.b)("em",{parentName:"li"},"{string}")," Parameter label, that will be shown to user when filling dynamic configuration form")))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Note that administrator is allowed setting a default value for all dynamic parameters. That value will be used, when provided, as initial parameter value, but the user will still be allowed modifying it")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-plugin",\n  "description": "It is my plugin",\n  "version" : "1.0.0",\n  "author" : "Someone",\n  "company" : "Some company",\n  "email" : "someone@some-company.com",\n  "url" : "www.my-plugin-is-awesome.com",\n  "license": "GPL-V3",\n  "type" : "SERVICE",\n  "conf" : {\n    "applicationModes": [\n      "ONE",\n      "MANY"\n    ],\n    "entityTypes": [\n      "DATA"\n    ],\n    "showButtonsBar": true,\n    "static": {\n      "adminParam1": {\n        "type": "string",\n        "required": false\n      },\n    },\n    "dynamic": {\n      "userParam1": {\n        "label": "A boolean",\n        "type": "bool",\n        "required": true\n      },\n      "userParam2": {\n        "label": "A char",\n        "type": "char",\n        "required": false\n      },\n    }\n  }\n}\n')),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"An example of plugin-info.json for service criterion")),Object(r.b)("h2",{id:"specific-runtime-properties"},"Specific runtime properties"),Object(r.b)("p",null,"The main service component - the one exported in main.js file - will receive the following properties at runtime: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"  static propTypes = {\n    pluginInstanceId: React.PropTypes.string,\n    target: AccessShapes.PluginTarget.isRequired,\n    configuration: AccessShapes.RuntimeConfiguration.isRequired,\n    onClose: PropTypes.func.isRequired,\n  }\n")),Object(r.b)("p",null,"Those properties, excepted pluginInstanceId which is a common plugin property, are detailed in following subsections."),Object(r.b)("h3",{id:"target-property"},"target property"),Object(r.b)("p",null,"Target property exact shape depends on current target type. However, the following fields are always present:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"type"),": The current target type from ",Object(r.b)("inlineCode",{parentName:"li"},"AccessDomain.RuntimeTargetTypes")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"searchContext"),": the current search context, with fields:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"engineType"),": name of the search engine currently used"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"searchParameters"),": search parameters to retrieve entities for which service currently runs"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"entitiesCount"),": number of entities for which service currently runs"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"entityType"),": type of entities for which service currently runs")),Object(r.b)("p",null,"According with service configuration, some of those fields may be constants. For instance, ",Object(r.b)("em",{parentName:"p"},"target.entityTypes")," would always be ",Object(r.b)("em",{parentName:"p"},"'DATA'")," if service configuration specifies ",Object(r.b)("inlineCode",{parentName:"p"},'"entityTypes": ["DATA"]'),". In the same way, ",Object(r.b)("em",{parentName:"p"},"target.entitiesCount")," is always ",Object(r.b)("em",{parentName:"p"},"1")," if service is currently running for a single entity."),Object(r.b)("p",null,"Each target type also adds a custom field:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When type is ",Object(r.b)("inlineCode",{parentName:"li"},"AccessDomain.RuntimeTargetTypes.ONE"),", ",Object(r.b)("inlineCode",{parentName:"li"},"entity")," field is added in target. It holds the entity for which service currently runs, matching CatalogShapes.Entity shape"),Object(r.b)("li",{parentName:"ul"},"When type is ",Object(r.b)("inlineCode",{parentName:"li"},"AccessDomain.RuntimeTargetTypes.MANY"),", ",Object(r.b)("inlineCode",{parentName:"li"},"entities")," field is added in target. It holds the list of entities for which service currently runs, matching PropTypes.arrayOf(CatalogShapes.Entity)"),Object(r.b)("li",{parentName:"ul"},"When type is ",Object(r.b)("inlineCode",{parentName:"li"},"AccessDomain.RuntimeTargetTypes.QUERY"),", ",Object(r.b)("inlineCode",{parentName:"li"},"excludedEntities")," field is added in target. It holds the list of entities that should be ignored in current search context, matching PropTypes.arrayOf(CatalogShapes.Entity)")),Object(r.b)("p",null,"Finally, please note that a plugin ",Object(r.b)("strong",{parentName:"p"},"will never receive a target that does not match what was specified")," in configuration fields ",Object(r.b)("em",{parentName:"p"},"applicationModes")," and ",Object(r.b)("em",{parentName:"p"},"entityTypes")),Object(r.b)("h3",{id:"configuration-property"},"configuration property"),Object(r.b)("p",null,"When launched, the service plugin main component receives the property ",Object(r.b)("inlineCode",{parentName:"p"},"configuration"),". That object represents the runtime configuration.\nIt has the following fields:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"static"),": ",Object(r.b)("em",{parentName:"li"},"{object}")," This field contains the static configuration layer map, filled by administrator. The keys in map are ",Object(r.b)("em",{parentName:"li"},"parameter names")," and the values are those entered by the administrator, matching type specified in plugin-info.json. Every parameter that was marked as ",Object(r.b)("inlineCode",{parentName:"li"},"required")," is granted here to be defined (never null nor undefined). Other ones should be checked before using."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dynamic"),": ",Object(r.b)("em",{parentName:"li"},"{object}")," This field contains the dynamic configuration layer map, filled by user. It works exactly the same than static field. ")),Object(r.b)("h3",{id:"onclose-property"},"onClose property"),Object(r.b)("p",null,"That property can be used to close the service at any moment, by performing"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"onUserIsRude = () => {\n  this.props.onClose() // He's gone too far now!\n}\n")),Object(r.b)("h2",{id:"handling-targets-seamlessly"},"Handling targets seamlessly"),Object(r.b)("p",null,"REGARDS source code provide a small tool to handle seamlessly any target type. It allows reducing selected entities - see ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce"},"reduce method documentation"),", imitating a simple array reduction. To be able using it, it must be declared in mapStateToProps method (see ",Object(r.b)("a",{parentName:"p",href:"https://react-redux.js.org/using-react-redux/connect-mapdispatch"},"Redux documentation")," if you are not familiar with that method)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"// ...\nimport { TargetEntitiesResolver } from '@regardsoss/plugins-api'\n// ...\nclass MyServiceContainer extends React.Component {\n  // ...\n  static mapDispatchToProps = (dispatch, { target }) => ({\n    // we apply partially the method getReducePromise to ignore dispatch reference at runtime\n    getReducePromise: (reducer, initialValue) => TargetEntitiesResolver.getReducePromise(dispatch, target, reducer, initialValue),\n  })\n\n  static propTypes = {\n    pluginInstanceId: PropTypes.string.isRequired, // Plugin identifier (unused here)\n    target: AccessShapes.PluginTarget.isRequired,\n    configuration: AccessShapes.RuntimeConfiguration.isRequired,\n    // ...\n    // From mapDispatchToProps\n    getReducePromise: PropTypes.func.isRequired,\n  }\n  \n  // ...\n\ncomponentDidMount() {\n    const { getReducePromise } = this.props\n    getReducePromise((previousResult, entity, index) => {\n      // retreat the entity and append treament result to previously managed entities array\n      return [...previousResults, this.doSomethingWithEntity(entity)]\n    }, []) // initial value, here an empty array\n    .then((results) => this.onResolved(results)\n    .catch((e) => this.onResolutionError(e))\n  }\n\n// ...\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Notes:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Although it is not exposed, that method may perform network calls in background. Hence, when the payload is important, it may be very time consuming."),Object(r.b)("li",{parentName:"ul"},"Appending all entities in memory, without modifying them to cut down their weight, is a bad practice, once again due to the possible payload size.")),Object(r.b)("h2",{id:"going-further"},"Going further"),Object(r.b)("p",null,"The React container ExampleContainer, from ",Object(r.b)("em",{parentName:"p"},"webapp/plugin/services/example"),", in ",Object(r.b)("em",{parentName:"p"},"rs-frontend")," repository, illustrates using the plugin service configuration and target to show entities partitions. It uses ",Object(r.b)("inlineCode",{parentName:"p"},"getReducePromise")," to avoid handling manually the target types when fetching data, recovering it through actions, test react components... Reading that example should be a good starting point from here."))}p.isMDXComponent=!0},2708:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=i,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2717:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/services-example-d82acec2d90c6a78d8830e68ed5e56a6.png"},2760:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/service-configuration-declaration-e0df93cc4e5c4f60ac0f8142ad11c2f0.png"},2761:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/service-runtime-configuration-64cd7d87295265bc8189ee9b0f6439ff.png"},2762:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/service-results-display-b6ea83d0d24b7d87ccdac43d476c6599.png"}}]);