"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[47322],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>y});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,y=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return t?i.createElement(y,o(o({ref:n},g),{},{components:t})):i.createElement(y,o({ref:n},g))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3706:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=t(58168),a=(t(96540),t(15680));const r={id:"frontend-service-plugins",title:"Plugin service",sidebar_label:"Services",slug:"/development/frontend/plugins/service/"},o=void 0,l={unversionedId:"development/frontend/plugins/frontend-service-plugins",id:"version-1.14/development/frontend/plugins/frontend-service-plugins",title:"Plugin service",description:"Presentation",source:"@site/versioned_docs/version-1.14/development/frontend/plugins/plugin-services.md",sourceDirName:"development/frontend/plugins",slug:"/development/frontend/plugins/service/",permalink:"/docs/development/frontend/plugins/service/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/frontend/plugins/plugin-services.md",tags:[],version:"1.14",frontMatter:{id:"frontend-service-plugins",title:"Plugin service",sidebar_label:"Services",slug:"/development/frontend/plugins/service/"},sidebar:"dev",previous:{title:"Criteria",permalink:"/docs/development/frontend/plugins/criteria/"},next:{title:"Layout configuration",permalink:"/docs/development/frontend/configuration/layout/"}},s={},p=[{value:"Presentation",id:"presentation",level:2},{value:"Main principles",id:"main-principles",level:2},{value:"Frontend plugin service VS Catalog plugin",id:"frontend-plugin-service-vs-catalog-plugin",level:2},{value:"Life cycle",id:"life-cycle",level:2},{value:"Specific configuration (plugin-info.json fields)",id:"specific-configuration-plugin-infojson-fields",level:2},{value:"Specific runtime properties",id:"specific-runtime-properties",level:2},{value:"target property",id:"target-property",level:3},{value:"configuration property",id:"configuration-property",level:3},{value:"onClose property",id:"onclose-property",level:3},{value:"Handling targets seamlessly",id:"handling-targets-seamlessly",level:2},{value:"Going further",id:"going-further",level:2}],g={toc:p},c="wrapper";function u(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,i.A)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"presentation"},"Presentation"),(0,a.yg)("p",null,"A front-end service plugin is a javascript bundle used by ",(0,a.yg)("a",{parentName:"p",href:"/docs/development/frontend/packages/lazy-modules/search-results/"},"search results modules")," to add a graphical service onto a given entity or entities selection."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(14909).A,width:"1680",height:"979"}),"\n",(0,a.yg)("em",{parentName:"p"},"Some services example: on lines, services for one entity. On header, services for current selection.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Notes"),":  Service plugin also respects main plugin consideration. Thus, make sure reading ",(0,a.yg)("a",{parentName:"p",href:"/docs/development/frontend/plugins/"},"plugins page")," first!"),(0,a.yg)("p",null,"A service may work for one or for many data objects. It allows defining administrator (static) and user (dynamic) parameters for execution. "),(0,a.yg)("h2",{id:"main-principles"},"Main principles"),(0,a.yg)("p",null,"Each service plugin:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"displays a ",(0,a.yg)("strong",{parentName:"li"},"custom graphical component")," for a given object or selection"),(0,a.yg)("li",{parentName:"ul"},"defines working modes (one entity or selection / query)"),(0,a.yg)("li",{parentName:"ul"},"receives optionally, at runtime, two layers of configuration",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"a static layer, configured by project administrator"),(0,a.yg)("li",{parentName:"ul"},"a dynamic layer, configured by current user just before running the service.")))),(0,a.yg)("h2",{id:"frontend-plugin-service-vs-catalog-plugin"},"Frontend plugin service VS Catalog plugin"),(0,a.yg)("p",null,"A frontend service and a catalog plugin are both able to provide services for a set of data. However, their purpose and constraints are slightly different:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The catalog plugin, by design, can only build a file as execution result. It has better data retrieving and computing performances, as it runs on a server node. That consideration is highly important when dealing with huge data amounts."),(0,a.yg)("li",{parentName:"ul"},"The frontend service shows graphical components, charts, and so on... It has low CPU and memory resources as it runs in user web browser.")),(0,a.yg)("p",null,"Therefore, the catalog plugin should be preferred when a simple file, downloaded by user and opened externally, can fully provide the service. On the other hand, frontend service should be preferred when a new interface functionality is required."),(0,a.yg)("p",null,"It can occur that such a new functionality is required ",(0,a.yg)("strong",{parentName:"p"},"and must work with heavy data volumes"),". In such cases, it is usually a good solution to couple a catalog plugin with a frontend service, delegating tasks as following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Catalog service receives data retrieval request and prepares a file holding data to be used by the front-end service"),(0,a.yg)("li",{parentName:"ul"},"Frontend service starts the catalog service, waits for resulting file then consumes it to show user view.")),(0,a.yg)("h2",{id:"life-cycle"},"Life cycle"),(0,a.yg)("p",null,"The plugin service life cycle is compound of the following steps:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"A. Administration configuration",(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},"Plugin declaration (see common plugin page)"),(0,a.yg)("li",{parentName:"ol"},"Service configuration creation, by administrator."))),(0,a.yg)("li",{parentName:"ul"},"B. Service running (can be iterated)",(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},"Service runtime configuration, by user. That step is skipped if service has no dynamic configuration layer."),(0,a.yg)("li",{parentName:"ol"},"Service display")))),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(85665).A,width:"1680",height:"979"}),(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("em",{parentName:"p"},"An example of service configuration creation (A.2 step)")),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(69561).A,width:"1680",height:"949"}),(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("em",{parentName:"p"},"An example of service runtime configuration (B.1 step)")),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(71391).A,width:"1680",height:"948"}),(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("em",{parentName:"p"},"An example of service display (B.2 step)")),(0,a.yg)("h2",{id:"specific-configuration-plugin-infojson-fields"},"Specific configuration (plugin-info.json fields)"),(0,a.yg)("p",null,"First of all, the plugin-info.json file field ",(0,a.yg)("strong",{parentName:"p"},'"type"')," should indicate ",(0,a.yg)("strong",{parentName:"p"},'"SERVICE"'),", to ensure it is considered as a service, and not as a criterion."),(0,a.yg)("p",null,"Then, the plugin must indicate its ",(0,a.yg)("strong",{parentName:"p"},"application mode")," (one entity and / or many entities), the ",(0,a.yg)("strong",{parentName:"p"},"entity types")," he expects to work with and its configuration (static and dynamic, see previous sections for more detail). Therefore, the ",(0,a.yg)("strong",{parentName:"p"},'"conf"')," field, in ",(0,a.yg)("strong",{parentName:"p"},"plugin-info.json")," file,  contains the following specific fields:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},'"applicationModes"'),": ",(0,a.yg)("em",{parentName:"li"},"{array}")," a required array that can contain one or both the following values:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},'"ONE"'),": the service applies to one entity"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},'"MANY"'),": the service applies to many entities"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},'"entityTypes"'),": ",(0,a.yg)("em",{parentName:"li"},"{array}")," a required array that can contain some or all the following values:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},'"DATA"'),": The service works with data objects"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},'"COLLECTION"'),": The service works with collections, ",(0,a.yg)("em",{parentName:"li"},"not supported yet")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},'"DATASET"'),": The service works with datasets, ",(0,a.yg)("em",{parentName:"li"},"not supported yet")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},'"showButtonsBar"'),": ",(0,a.yg)("em",{parentName:"li"},"{boolean}")," When true, service launcher button bar is displayed below the service, after configuration, allowing the user to step back to runtime configuration anb close the service. When false, button bar is hidden and the service should handle closing by itself."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"static"),": ",(0,a.yg)("em",{parentName:"li"},"{object}")," an optional object of parameters defining the static configuration layer. Each parameter in that object will be defined as following:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"{object key}"),": property key, as it will be used by the plugin at runtime. It is also used as label in the administrator configuration form"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"type")," : ",(0,a.yg)("em",{parentName:"li"},"{string}")," It determines the type that will actually be received at runtime by the plugin. One of ",(0,a.yg)("strong",{parentName:"li"},'"bool"'),", ",(0,a.yg)("strong",{parentName:"li"},'"char"'),", ",(0,a.yg)("strong",{parentName:"li"},'"date"'),", ",(0,a.yg)("strong",{parentName:"li"},'"float"'),", ",(0,a.yg)("strong",{parentName:"li"},'"int"'),", ",(0,a.yg)("strong",{parentName:"li"},'"string"')," types. "),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"required"),": ",(0,a.yg)("em",{parentName:"li"},"{boolean}")," When true, null or undefined values will be forbidden for the property."))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"dynamic"),": ",(0,a.yg)("em",{parentName:"li"},"{object}")," an optional object of parameters defining the dynamic configuration layer.",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"{object key}"),": property key, as it will be used by the plugin at runtime."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"type")," : ",(0,a.yg)("em",{parentName:"li"},"{string}")," working like corresponding element in ",(0,a.yg)("strong",{parentName:"li"},"static")," field"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"required")," : ",(0,a.yg)("em",{parentName:"li"},"{boolean}")," working like corresponding element in ",(0,a.yg)("strong",{parentName:"li"},"static")," field"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"label"),": ",(0,a.yg)("em",{parentName:"li"},"{string}")," Parameter label, that will be shown to user when filling dynamic configuration form")))),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Note that administrator is allowed setting a default value for all dynamic parameters. That value will be used, when provided, as initial parameter value, but the user will still be allowed modifying it")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-plugin",\n  "description": "It is my plugin",\n  "version" : "1.0.0",\n  "author" : "Someone",\n  "company" : "Some company",\n  "email" : "someone@some-company.com",\n  "url" : "www.my-plugin-is-awesome.com",\n  "license": "GPL-V3",\n  "type" : "SERVICE",\n  "conf" : {\n    "applicationModes": [\n      "ONE",\n      "MANY"\n    ],\n    "entityTypes": [\n      "DATA"\n    ],\n    "showButtonsBar": true,\n    "static": {\n      "adminParam1": {\n        "type": "string",\n        "required": false\n      },\n    },\n    "dynamic": {\n      "userParam1": {\n        "label": "A boolean",\n        "type": "bool",\n        "required": true\n      },\n      "userParam2": {\n        "label": "A char",\n        "type": "char",\n        "required": false\n      },\n    }\n  }\n}\n')),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"An example of plugin-info.json for service criterion")),(0,a.yg)("h2",{id:"specific-runtime-properties"},"Specific runtime properties"),(0,a.yg)("p",null,"The main service component - the one exported in main.js file - will receive the following properties at runtime: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"  static propTypes = {\n    pluginInstanceId: React.PropTypes.string,\n    target: AccessShapes.PluginTarget.isRequired,\n    configuration: AccessShapes.RuntimeConfiguration.isRequired,\n    onClose: PropTypes.func.isRequired,\n  }\n")),(0,a.yg)("p",null,"Those properties, excepted pluginInstanceId which is a common plugin property, are detailed in following subsections."),(0,a.yg)("h3",{id:"target-property"},"target property"),(0,a.yg)("p",null,"Target property exact shape depends on current target type. However, the following fields are always present:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"type"),": The current target type from ",(0,a.yg)("inlineCode",{parentName:"li"},"AccessDomain.RuntimeTargetTypes")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"searchContext"),": the current search context, with fields:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"engineType"),": name of the search engine currently used"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"searchParameters"),": search parameters to retrieve entities for which service currently runs"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"entitiesCount"),": number of entities for which service currently runs"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"entityType"),": type of entities for which service currently runs")),(0,a.yg)("p",null,"According with service configuration, some of those fields may be constants. For instance, ",(0,a.yg)("em",{parentName:"p"},"target.entityTypes")," would always be ",(0,a.yg)("em",{parentName:"p"},"'DATA'")," if service configuration specifies ",(0,a.yg)("inlineCode",{parentName:"p"},'"entityTypes": ["DATA"]'),". In the same way, ",(0,a.yg)("em",{parentName:"p"},"target.entitiesCount")," is always ",(0,a.yg)("em",{parentName:"p"},"1")," if service is currently running for a single entity."),(0,a.yg)("p",null,"Each target type also adds a custom field:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"When type is ",(0,a.yg)("inlineCode",{parentName:"li"},"AccessDomain.RuntimeTargetTypes.ONE"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"entity")," field is added in target. It holds the entity for which service currently runs, matching CatalogShapes.Entity shape"),(0,a.yg)("li",{parentName:"ul"},"When type is ",(0,a.yg)("inlineCode",{parentName:"li"},"AccessDomain.RuntimeTargetTypes.MANY"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"entities")," field is added in target. It holds the list of entities for which service currently runs, matching PropTypes.arrayOf(CatalogShapes.Entity)"),(0,a.yg)("li",{parentName:"ul"},"When type is ",(0,a.yg)("inlineCode",{parentName:"li"},"AccessDomain.RuntimeTargetTypes.QUERY"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"excludedEntities")," field is added in target. It holds the list of entities that should be ignored in current search context, matching PropTypes.arrayOf(CatalogShapes.Entity)")),(0,a.yg)("p",null,"Finally, please note that a plugin ",(0,a.yg)("strong",{parentName:"p"},"will never receive a target that does not match what was specified")," in configuration fields ",(0,a.yg)("em",{parentName:"p"},"applicationModes")," and ",(0,a.yg)("em",{parentName:"p"},"entityTypes")),(0,a.yg)("h3",{id:"configuration-property"},"configuration property"),(0,a.yg)("p",null,"When launched, the service plugin main component receives the property ",(0,a.yg)("inlineCode",{parentName:"p"},"configuration"),". That object represents the runtime configuration.\nIt has the following fields:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"static"),": ",(0,a.yg)("em",{parentName:"li"},"{object}")," This field contains the static configuration layer map, filled by administrator. The keys in map are ",(0,a.yg)("em",{parentName:"li"},"parameter names")," and the values are those entered by the administrator, matching type specified in plugin-info.json. Every parameter that was marked as ",(0,a.yg)("inlineCode",{parentName:"li"},"required")," is granted here to be defined (never null nor undefined). Other ones should be checked before using."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"dynamic"),": ",(0,a.yg)("em",{parentName:"li"},"{object}")," This field contains the dynamic configuration layer map, filled by user. It works exactly the same than static field. ")),(0,a.yg)("h3",{id:"onclose-property"},"onClose property"),(0,a.yg)("p",null,"That property can be used to close the service at any moment, by performing"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"onUserIsRude = () => {\n  this.props.onClose() // He's gone too far now!\n}\n")),(0,a.yg)("h2",{id:"handling-targets-seamlessly"},"Handling targets seamlessly"),(0,a.yg)("p",null,"REGARDS source code provide a small tool to handle seamlessly any target type. It allows reducing selected entities - see ",(0,a.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce"},"reduce method documentation"),", imitating a simple array reduction. To be able using it, it must be declared in mapStateToProps method (see ",(0,a.yg)("a",{parentName:"p",href:"https://react-redux.js.org/using-react-redux/connect-mapdispatch"},"Redux documentation")," if you are not familiar with that method)."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"// ...\nimport { TargetEntitiesResolver } from '@regardsoss/plugins-api'\n// ...\nclass MyServiceContainer extends React.Component {\n  // ...\n  static mapDispatchToProps = (dispatch, { target }) => ({\n    // we apply partially the method getReducePromise to ignore dispatch reference at runtime\n    getReducePromise: (reducer, initialValue) => TargetEntitiesResolver.getReducePromise(dispatch, target, reducer, initialValue),\n  })\n\n  static propTypes = {\n    pluginInstanceId: PropTypes.string.isRequired, // Plugin identifier (unused here)\n    target: AccessShapes.PluginTarget.isRequired,\n    configuration: AccessShapes.RuntimeConfiguration.isRequired,\n    // ...\n    // From mapDispatchToProps\n    getReducePromise: PropTypes.func.isRequired,\n  }\n  \n  // ...\n\ncomponentDidMount() {\n    const { getReducePromise } = this.props\n    getReducePromise((previousResult, entity, index) => {\n      // retreat the entity and append treament result to previously managed entities array\n      return [...previousResults, this.doSomethingWithEntity(entity)]\n    }, []) // initial value, here an empty array\n    .then((results) => this.onResolved(results)\n    .catch((e) => this.onResolutionError(e))\n  }\n\n// ...\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Notes:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Although it is not exposed, that method may perform network calls in background. Hence, when the payload is important, it may be very time consuming."),(0,a.yg)("li",{parentName:"ul"},"Appending all entities in memory, without modifying them to cut down their weight, is a bad practice, once again due to the possible payload size.")),(0,a.yg)("h2",{id:"going-further"},"Going further"),(0,a.yg)("p",null,"The React container ExampleContainer, from ",(0,a.yg)("em",{parentName:"p"},"webapp/plugin/services/example"),", in ",(0,a.yg)("em",{parentName:"p"},"rs-frontend")," repository, illustrates using the plugin service configuration and target to show entities partitions. It uses ",(0,a.yg)("inlineCode",{parentName:"p"},"getReducePromise")," to avoid handling manually the target types when fetching data, recovering it through actions, test react components... Reading that example should be a good starting point from here."))}u.isMDXComponent=!0},85665:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/service-configuration-declaration-e0df93cc4e5c4f60ac0f8142ad11c2f0.png"},71391:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/service-results-display-b6ea83d0d24b7d87ccdac43d476c6599.png"},69561:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/service-runtime-configuration-64cd7d87295265bc8189ee9b0f6439ff.png"},14909:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/services-example-d82acec2d90c6a78d8830e68ed5e56a6.png"}}]);