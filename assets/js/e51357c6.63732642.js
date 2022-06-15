"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[99144],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85869:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],o={id:"frontend-criteria-plugins",title:"Plugin criterion",sidebar_label:"Criteria",slug:"/development/frontend/plugins/criteria/"},s=void 0,p={unversionedId:"development/frontend/plugins/frontend-criteria-plugins",id:"development/frontend/plugins/frontend-criteria-plugins",title:"Plugin criterion",description:"Presentation",source:"@site/docs/development/frontend/plugins/plugin-criteria.md",sourceDirName:"development/frontend/plugins",slug:"/development/frontend/plugins/criteria/",permalink:"/docs/development/frontend/plugins/criteria/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/plugins/plugin-criteria.md",tags:[],version:"current",frontMatter:{id:"frontend-criteria-plugins",title:"Plugin criterion",sidebar_label:"Criteria",slug:"/development/frontend/plugins/criteria/"},sidebar:"dev",previous:{title:"Plugins introduction",permalink:"/docs/development/frontend/plugins/"},next:{title:"Services",permalink:"/docs/development/frontend/plugins/service/"}},u={},m=[{value:"Presentation",id:"presentation",level:2},{value:"Main principles",id:"main-principles",level:2},{value:"Specific configuration (plugin-info.json fields)",id:"specific-configuration-plugin-infojson-fields",level:2},{value:"Specific runtime properties",id:"specific-runtime-properties",level:2},{value:"attributes property",id:"attributes-property",level:3},{value:"searchContext property",id:"searchcontext-property",level:3},{value:"label",id:"label",level:3},{value:"publishState",id:"publishstate",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Working principles",id:"working-principles",level:3},{value:"Criterion state design",id:"criterion-state-design",level:3},{value:"Handling errors",id:"handling-errors",level:3},{value:"Example",id:"example",level:2},{value:"Writing plugin-info.json",id:"writing-plugin-infojson",level:3},{value:"Initializing main file",id:"initializing-main-file",level:3},{value:"Implementing main component",id:"implementing-main-component",level:3},{value:"Handle state",id:"handle-state",level:3},{value:"Update state and request",id:"update-state-and-request",level:3},{value:"Rendering?",id:"rendering",level:3},{value:"Graphical component implementation",id:"graphical-component-implementation",level:3},{value:"Helpers",id:"helpers",level:2},{value:"Going further",id:"going-further",level:2}],d={toc:m};function c(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"presentation"},"Presentation"),(0,i.kt)("p",null,"A front-end criterion plugin is a javascript bundle used in ",(0,i.kt)("a",{parentName:"p",href:"../../packages/lazy-modules/search-results/"},"Search results modules")," to create form fields and panes. Each criterion plugin generates OpenSearch request parameters sent to the rs-catalog microservice in order to search resulting entities. Criterion plugins accept attributes to filter as configuration."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(29147).Z,width:"606",height:"946"}),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"Example of search form, using many criterion plugins")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notes")," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Criterion plugin also respects main plugin consideration. Thus, make sure reading ",(0,i.kt)("a",{parentName:"li",href:"../../plugins/"},"plugins page")," first!"),(0,i.kt)("li",{parentName:"ul"},"OpenSearch requests are expressed using the ",(0,i.kt)("a",{parentName:"li",href:"https://lucene.apache.org/core/2_9_4/queryparsersyntax.html"},"Lucene format"),".")),(0,i.kt)("h2",{id:"main-principles"},"Main principles"),(0,i.kt)("p",null,"Each criterion plugin:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"shares its state with parent search-form. That state:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"can be initially undefined"),(0,i.kt)("li",{parentName:"ul"},"will be saved / restored automatically"),(0,i.kt)("li",{parentName:"ul"},"must be published together with new request parameters"))),(0,i.kt)("li",{parentName:"ul"},"displays one or many table rows and columns in the form"),(0,i.kt)("li",{parentName:"ul"},"builds requests parameters that can filter search results (assembling them is performed automatically by parent module).")),(0,i.kt)("h2",{id:"specific-configuration-plugin-infojson-fields"},"Specific configuration (plugin-info.json fields)"),(0,i.kt)("p",null,"First of all, the plugin-info.json file field ",(0,i.kt)("strong",{parentName:"p"},'"type"')," should indicate ",(0,i.kt)("strong",{parentName:"p"},'"CRITERIA"'),", to ensure it is considered as a criterion, and not as a service."),(0,i.kt)("p",null,"Then, the plugin indicates a list of attributes he intends to use for building request parameters, and their type restrictions, in ",(0,i.kt)("strong",{parentName:"p"},'"conf"."attributes"')," field. Please note that the field is mandatory, but can be left empty:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attributes"),": ",(0,i.kt)("em",{parentName:"li"},"{array}")," An array of attributes definitions, that indicates the number and type of attributes that should be provided to the criterion, when adding the criterion into a search form. Each array element defines the following fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,i.kt)("em",{parentName:"li"},"{string}")," The name used in code to refer to that attribute. For instance, if an attribute is named ",(0,i.kt)("inlineCode",{parentName:"li"},"myAttribute"),", it will be possible to access it, in the main criterion component, with the property ",(0,i.kt)("inlineCode",{parentName:"li"},"this.props.attributes.myAttribute"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": ",(0,i.kt)("em",{parentName:"li"},"{string}")," Description displayed to the administrator when he selects ",(0,i.kt)("strong",{parentName:"li"},"actual attribute")," for this abstract attribute, at plugin configuration time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attributeType"),": ",(0,i.kt)("em",{parentName:"li"},"{array}")," Accepted types for that attribute. Possible attributes types, from JAVA class ",(0,i.kt)("strong",{parentName:"li"},"fr.cnes.regards.modules.models.domain.attributes.AttributeType"),", are ","[",(0,i.kt)("inlineCode",{parentName:"li"},'"STRING"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"INTEGER"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"DOUBLE"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"DATE_ISO8601"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"URL"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"BOOLEAN"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"STRING_ARRAY"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"INTEGER_ARRAY"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"DOUBLE_ARRAY"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"DATE_ARRAY"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"INTEGER_INTERVAL"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"DOUBLE_INTERVAL"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"DATE_INTERVAL"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"LONG"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"LONG_INTERVAL"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"LONG_ARRAY"'),"]")))),(0,i.kt)("p",null,"The following example illustrates a criterion that uses 3 attributes, first one being a date attribute, second one a string attribute and last one a number attribute."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Criterion plugin-info.json example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-plugin",\n  "description": "It is my plugin",\n  "version": "1.0.0",\n  "author": "Someone",\n  "company": "Some company",\n  "email": "someone@some-company.com",\n  "url": "www.my-plugin-is-awesome.com",\n  "license": "GPL-V3",\n  "type": "CRITERIA",\n  "conf": {\n    "attributes": [\n      {\n        "name": "attributeA",\n        "description": "My first attribute",\n        "attributeType": ["DATE_ISO8601"]\n      },\n      {\n        "name": "attributeB",\n        "description": "My second attribute",\n        "attributeType": ["STRING"]\n      },\n      {\n        "name": "attributeC",\n        "description": "My third attribute",\n        "attributeType": ["INTEGER", "DOUBLE", "LONG"]\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h2",{id:"specific-runtime-properties"},"Specific runtime properties"),(0,i.kt)("p",null,"The main criterion component - the one exported in main.js file - will receive the following properties at runtime:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  static propTypes = {\n    /** Plugin instance identifier */\n    pluginInstanceId: PropTypes.string.isRequired,\n    /** Resolved attributes for configuration attributes, by attributes name, as described in previous plugin-info.json example */\n    attributes: PropTypes.shape({\n      attributeA: AttributeModelWithBounds.isRequired,\n      attributeB: AttributeModelWithBounds.isRequired,\n      attributeC: AttributeModelWithBounds.isRequired,\n    }).isRequired,\n    /** Criterion search context */\n    searchContext: CatalogShapes.SearchContext.isRequired,\n    // configured plugin label, where object key is locale and object value message\n    label: UIShapes.IntlMessage.isRequired,\n    // Callback to share state update with parent form like (state, requestParameters) => ()\n    publishState: PropTypes.func.isRequired,\n  }\n")),(0,i.kt)("p",null,"Those properties, excepted pluginInstanceId which is a common plugin property, are detailed in following subsections."),(0,i.kt)("h3",{id:"attributes-property"},"attributes property"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For each attribute specified in plugin-info.json"),", the attributes object will hold an ",(0,i.kt)("strong",{parentName:"p"},"AttributeModelWithBounds")," with ","[attribute.name]"," key. That object contains the following fields (the shape can be found in web_modules/utils/plugins/src/shapes/AttributeModelWithBounds.js):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jsonPath"),": ",(0,i.kt)("em",{parentName:"li"},"{string}")," Attribute path, to be used within OpenSearch requests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"label"),": ",(0,i.kt)("em",{parentName:"li"},"{string}")," Attribute label"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": ",(0,i.kt)("em",{parentName:"li"},"{string}")," Attribute description"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boundsInformation"),": ",(0,i.kt)("em",{parentName:"li"},"{object}")," Current context's bounds information for range attributes (date or numbers), compound of fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exists"),": ",(0,i.kt)("em",{parentName:"li"},"{boolean}")," True when the attribute is a range type attribute DATE_ISO8601, INTEGER, DOUBLE or LONG"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loading"),": ",(0,i.kt)("em",{parentName:"li"},"{boolean}")," True when bounds are currently loading"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error"),": ",(0,i.kt)("em",{parentName:"li"},"{boolean}")," True when bounds loading finished in error"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lowerBound"),": ",(0,i.kt)("em",{parentName:"li"},"{number}")," Resolved lower attribute value, in current form context, when bounds exist, loading finished, there were no error while loading them and attribute has values in current search context"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"upperBound"),": ",(0,i.kt)("em",{parentName:"li"},"{number}")," Resolved upper attribute value (works as lowerBound field)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),": ",(0,i.kt)("em",{parentName:"li"},"{string}")," Attribute type (as specified in plugin-info.json, from ",(0,i.kt)("strong",{parentName:"li"},"fr.cnes.regards.modules.models.domain.attributes.AttributeType"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unit"),": ",(0,i.kt)("em",{parentName:"li"},"{string}")," Unit if any (only for number type attributes)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"precision"),": ",(0,i.kt)("em",{parentName:"li"},"{number}")," Precision if any (only for floating number types attributes)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"arraysize"),": ",(0,i.kt)("em",{parentName:"li"},"{number}")," Array size if any (only for array type attributes)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"optional"),": ",(0,i.kt)("em",{parentName:"li"},"{boolean}")," True when that attribute, in a given data object, can be omitted"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"defaultValue"),": ",(0,i.kt)("em",{parentName:"li"},"{string}")," Default value if any"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fragment"),": ",(0,i.kt)("em",{parentName:"li"},"{object}")," Attribute fragment, holding id, name and description fields"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,i.kt)("em",{parentName:"li"},"{string}")," Attribute name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,i.kt)("em",{parentName:"li"},"{number}")," Attribute database id")),(0,i.kt)("h3",{id:"searchcontext-property"},"searchContext property"),(0,i.kt)("p",null,'That property holds the current search context. It can be used to perform a query and check available choices for user (like performed in standard criterion "enumerated"). It is an object like:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  engineType: '...',\n  searchParameters: {\n    // ... parameters...\n  },\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The searchContext does not include the request parameters this criterion built, to avoid blocking situations in form."),(0,i.kt)("h3",{id:"label"},"label"),(0,i.kt)("p",null,"Internationalized label provided, at configuration, by administrator. It holds locales as keys and corresponding message as value."),(0,i.kt)("p",null,"It is an object like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  en: 'my label',\n  fr: 'mon libell\xe9',\n}\n")),(0,i.kt)("h3",{id:"publishstate"},"publishState"),(0,i.kt)("p",null,"That function allows publishing state and new request parameters from criterion to parent search-form. It expects the following parameters:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"New criterion state, as a JS object."),(0,i.kt)("li",{parentName:"ol"},"New request parameters as a JS object where keys are the parameter name and values are the corresponding values. It can be an empty / null / undefined object. Please note that values types are restricted to:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"boolean"),(0,i.kt)("li",{parentName:"ul"},"string"),(0,i.kt)("li",{parentName:"ul"},"number"),(0,i.kt)("li",{parentName:"ul"},"array, containing elements of previous types")),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("h3",{id:"working-principles"},"Working principles"),(0,i.kt)("p",null,"Criterion plugins, as parts of the search form, must respect the following requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"They can emit, on user demand, some OpenSearch request parameters (or part of it)"),(0,i.kt)("li",{parentName:"ul"},"Their state can be restored from one session to another"),(0,i.kt)("li",{parentName:"ul"},"Their state can be shared using current browser URL")),(0,i.kt)("p",null,"In order to provide those functionalities, while keeping plugins code light, the URL and session restoration systems are implemented within the parent search form. That results in parent form reading and updating, on need, criterion plugins state.",(0,i.kt)("br",{parentName:"p"}),"\n","The following design was retained to achieve state sharing between form and plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The application initialize the plugins state with",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"found state in URL, if any"),(0,i.kt)("li",{parentName:"ul"},"found state in web browser storage, if any"),(0,i.kt)("li",{parentName:"ul"},"undefined otherwise (the plugin should then chose an initial state)"))),(0,i.kt)("li",{parentName:"ul"},"The criterion updates its state with interactions, then publishes new state and request parameters (after publishing, parent form will save the state into URL and web browser storage)")),(0,i.kt)("h3",{id:"criterion-state-design"},"Criterion state design"),(0,i.kt)("p",null,"The criterion state should hold each variable that will modify its OpenSearch output parameters. Each time the state changes, it must be published alongside with new requestParameters, using publishState callback from properties."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," As state is serialized, shorten field name is a good practice - especially due to limited URL size."),(0,i.kt)("h3",{id:"handling-errors"},"Handling errors"),(0,i.kt)("p",null,"Optionally, criterion state can hold the field ",(0,i.kt)("strong",{parentName:"p"},"error"),", at state root. When that field is true, parent search form will disable search button, hence preventing search in current state."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(62594).Z,width:"603",height:"948"}),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"An example of criterion in error (note that search button is disabled, due to error)")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"To illustrate it, lets take the following example:\nwe want to implement a criterion plugin that selects any data object where value ",(0,i.kt)("strong",{parentName:"p"},"IS EQUAL TO")," or ",(0,i.kt)("strong",{parentName:"p"},"IS NOT EQUAL TO")," the user entered value. In that example, the user selects the operator to use and enters the value. To - artificially - manage an error state too, let's say the criterion is in error when user enters a negative number."),(0,i.kt)("p",null,"The criterion request parameters would be expressed as following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When IS EQUAL TO operator is selected: ",(0,i.kt)("inlineCode",{parentName:"li"},'{ q: "${attributeJsonPath}:${userEnteredValue}" }'),", like ",(0,i.kt)("inlineCode",{parentName:"li"},"{ q: 'attr1: 18' }")," for instance."),(0,i.kt)("li",{parentName:"ul"},"When IS NOT EQUAL TO operator is selected: ",(0,i.kt)("inlineCode",{parentName:"li"},'{ q: "${attributeJsonPath}:!${userEnteredValue}" }'),", like ",(0,i.kt)("inlineCode",{parentName:"li"},"{ q:' attr1:!18' }")," for instance.")),(0,i.kt)("p",null,"*","Note that q is the search query parameter name. If multiple criteria provide a value for that parameter, it will hold all values like ",(0,i.kt)("inlineCode",{parentName:"p"},"q: p1 AND p2 AND p3"),". Therefore many criteria can work with it at same time."),(0,i.kt)("h3",{id:"writing-plugin-infojson"},"Writing plugin-info.json"),(0,i.kt)("p",null,"First, the requested attribute should be added to the configuration. Doing so lets the criterion work for configured attribute, instead of using an hard coded constant attribute path. However, as we need to test negative values, we will restrain administrator possible choices to number attributes only."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "equal-or-different-criterion",\n  "description": "Criterion widget that returns all data what attribute is equal to / different of a given value",\n  "version": "1.0.0",\n  "author": "A super trainer!",\n  "company": "CNES (https://cnes.fr)",\n  "contributors": ["CS-SI <regards@c-s.fr> (https://www.c-s.fr)"],\n  "email": "regards@c-s.fr",\n  "url": "http://www.cnes.fr",\n  "license": "GPLv3",\n  "type": "CRITERIA",\n  "conf": {\n    "attributes": [\n      {\n        "name": "exampleAttribute",\n        "description": "Example attribute",\n        "attributeType": ["INTEGER", "DOUBLE", "LONG"]\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h3",{id:"initializing-main-file"},"Initializing main file"),(0,i.kt)("p",null,"Lets name the main component ",(0,i.kt)("inlineCode",{parentName:"p"},"ExampleCriterionContainer.jsx")," here. As we will not use any reducer for that example, the 'main.js' file should hold the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"initPlugin(ExampleCriterionContainer, pluginInfo, getReducer, messages, styles);\n")),(0,i.kt)("h3",{id:"implementing-main-component"},"Implementing main component"),(0,i.kt)("h3",{id:"handle-state"},"Handle state"),(0,i.kt)("p",null,"First we should define what is the main component state. To build the query, the component needs to know:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the operator currently selected by user (equal or different)"),(0,i.kt)("li",{parentName:"ul"},"The value entered by the user")),(0,i.kt)("p",null,"As we also handle here an error state (when user inputs a negative number), the state would look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'state = {\n  operator: "...", // enumerated operator\n  value: X, // numeric value\n  error: true, // or false...\n};\n')),(0,i.kt)("p",null,"Then, we need to identify when state and parameters will change. Here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When user inputs a new number"),(0,i.kt)("li",{parentName:"ul"},"When user selects the other operator")),(0,i.kt)("p",null,"With those elements, we can write the following code. Note that we provide a default state when parent search form sends us 'undefined', to not deal with undefined state cases."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'const Operators = {\n  EQUALS: "E", // use small constant for state serialization\n  DIFFERENT: "D",\n};\n\nexport class ExampleCriterionContainer extends React.Component {\n  static DEFAULT_STATE = {\n    value: null,\n    operator: Operators.EQUALS,\n    error: false,\n  };\n\n  static propTypes = {\n    attributes: PropTypes.shape({\n      // from plugin-info\n      exampleAttribute: AttributeModelWithBounds.isRequired,\n    }).isRequired,\n    label: UIShapes.IntlMessage.isRequired,\n    state: PropTypes.shape({\n      value: PropTypes.number,\n      operator: PropTypes.oneOf(operators.EQUAL, operators.DIFFERENT)\n        .isRequired,\n      error: PropTypes.bool.isRequired,\n    }),\n    publishState: PropTypes.func.isRequired,\n  };\n\n  static defaultProps = {\n    state: ExampleCriterionContainer.DEFAULT_STATE,\n  };\n\n  onNewValueInput = (newNumber) => {\n    // ...\n  };\n\n  onOperatorSelected = (newOperator) => {\n    // ...\n  };\n}\n')),(0,i.kt)("h3",{id:"update-state-and-request"},"Update state and request"),(0,i.kt)("p",null,"Now that the state is designed, the criterion should update it when callbacks are invoked (onNewValueInput / onOperatorSelected). To perform that update, we will use a common method, avoiding the need to copy/paste code..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'// ... ExampleCriterionContainer code above\n\nonNewValueInput = (newNumber) =>\n  this.onUpdateState(newNumber, this.props.state.operator);\n\nonOperatorSelected = (newOperator) =>\n  this.onUpdateState(this.props.state.value, newOperator);\n\nonUpdateState = (value, operator) => {\n  const {\n    attributes: { exampleAttribute },\n    publishState,\n  } = this.props;\n  const nextState = {\n    value,\n    operator,\n    // we do not want to show an error here while user has not input any number!\n    error: !isNil(value) && value < 1,\n  };\n  publishState(newState, {\n    // cf. top section for request expression. Here we only need q parameter.\n    q: `${exampleAttribute.jsonPath}:${\n      operator === Operators.EQUALS ? "" : "!"\n    }${value}`,\n  });\n};\n')),(0,i.kt)("p",null,"That code ensures that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When user inputs a number, criterion state (with error) and search request are updated"),(0,i.kt)("li",{parentName:"ul"},"When user selects an operator, criterion state (with error) and search request are updated")),(0,i.kt)("h3",{id:"rendering"},"Rendering?"),(0,i.kt)("p",null,"Most of the time, in REGARDS, state management is performed in container and graphics are delegated to a component with the same name. So let's do it right, and render using that component. We provide at same time all the elements the component may use for graphical state feedback."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// ... ExampleCriterionContainer code above\n\n  render(){\n    const { state: {value, operator, error}, label } = this.props\n    return <ExampleCriterionComponent\n      label={label}\n      value={value}\n      operator={operator}\n      error={error}\n      onNewValueInput={this.onNewValueInput}\n      onOperatorSelected={this.onOperatorSelected}\n    >\n  }\n")),(0,i.kt)("h3",{id:"graphical-component-implementation"},"Graphical component implementation"),(0,i.kt)("p",null,"The graphical implementation is quite straightforward. To keep the code light we'll suppose here to have an OperatorSelector that renders and selects one of Operators values and a NumberInput that renders errors and current value. Although it is not exactly the same operators, similar examples can be found in most default plugins.\nPlease note that the component renders itself in a table row, as search form is drawn using an HTML table. We will also use here the common application theme."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'export class ExampleCriterionComponent extends React.Component {\n  static propTypes = {\n    label: UIShapes.IntlMessage.isRequired,\n    value: PropTypes.number,\n    operator: PropTypes.string.isRequired,\n    error: PropTypes.bool.isRequired,\n    onNewValueInput: PropTypes.func.isRequired,\n    onOperatorSelected: PropTypes.func.isRequired,\n  };\n\n  static contextTypes = {\n    // enable muiTheme and moduleTheme access through this.context\n    ...themeContextType,\n    // enable intl access through this.context\n    ...i18nContextType,\n  };\n\n  render() {\n    const {\n      label,\n      value,\n      operator,\n      error,\n      onNewValueInput,\n      onOperatorSelected,\n    } = this.props;\n    const { intl, muiTheme } = this.context;\n    return (\n      <tr>\n        {/* 1. First column: label (current locale is found in intl context) */}\n        <td style={muiTheme.module.searchResults.searchPane.criteria.firstCell}>\n          {label[intl.locale]}\n        </td>\n        {/* 2. Second column: comparison selector */}\n        <td style={muiTheme.module.searchResults.searchPane.criteria.nextCell}>\n          <OperatorSelector operator={operator} onChange={onOperatorSelected} />\n        </td>\n        {/* 3. Third column: input box.\n         * we use here an intl message. It should be added, as key, in\n         * plugins/criterion/example-criterion/src/i18n/messages.en.i18n.js (and fr)\n         */}\n        <td style={muiTheme.module.searchResults.searchPane.criteria.nextCell}>\n          <NumberInput\n            hintText={intl.formatMessage({\n              id: "example.criterion.input.hint",\n            })}\n            error={error}\n            value={value}\n            onChange={onNewValueInput}\n          />\n        </td>\n      </tr>\n    );\n  }\n}\n')),(0,i.kt)("h2",{id:"helpers"},"Helpers"),(0,i.kt)("p",null,"Numerous helpers can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"webapp/web_modules/utils/plugins-api"),". They are covering common plugin fields like computing hint text and tooltips according with attribute bounds, resolving constraints range intersection, and so on...."),(0,i.kt)("h2",{id:"going-further"},"Going further"),(0,i.kt)("p",null,"There are several criteria provided in ",(0,i.kt)("em",{parentName:"p"},"webapp/plugin/criterion")," folder, of ",(0,i.kt)("em",{parentName:"p"},"rs-frontend")," repository. ",(0,i.kt)("inlineCode",{parentName:"p"},"full-text")," criterion illustrates a very simple criterion without attribute while ",(0,i.kt)("inlineCode",{parentName:"p"},"enumerated")," shows a more complicated use case, fetching server data and handling error state. Those criteria should be a good starting point from here."))}c.isMDXComponent=!0},62594:function(e,t,n){t.Z=n.p+"assets/images/criterion-error-55a0b90ef685575473d80b4303f1f6f3.png"},29147:function(e,t,n){t.Z=n.p+"assets/images/search-form-small-397be52f6a6f1089630c4c5dae3b1bd6.png"}}]);