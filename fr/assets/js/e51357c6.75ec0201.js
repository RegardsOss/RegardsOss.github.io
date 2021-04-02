(window.webpackJsonp=window.webpackJsonp||[]).push([[2333],{2407:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),i=(n(0),n(2708)),l={id:"frontend-criteria-plugins",title:"Plugin criterion",sidebar_label:"Criteria",slug:"/development/frontend/plugins/criteria/"},o={unversionedId:"development/frontend/plugins/frontend-criteria-plugins",id:"development/frontend/plugins/frontend-criteria-plugins",isDocsHomePage:!1,title:"Plugin criterion",description:"Presentation",source:"@site/docs/development/frontend/plugins/plugin-criteria.md",slug:"/development/frontend/plugins/criteria/",permalink:"/fr/docs/development/frontend/plugins/criteria/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/plugins/plugin-criteria.md",version:"current",sidebar_label:"Criteria",sidebar:"dev",previous:{title:"REGARDS Frontend Plugins",permalink:"/fr/docs/development/frontend/plugins/"},next:{title:"Plugin service",permalink:"/fr/docs/development/frontend/plugins/service/"}},s=[{value:"Presentation",id:"presentation",children:[]},{value:"Main principles",id:"main-principles",children:[]},{value:"Specific configuration (plugin-info.json fields)",id:"specific-configuration-plugin-infojson-fields",children:[]},{value:"Specific runtime properties",id:"specific-runtime-properties",children:[{value:"attributes property",id:"attributes-property",children:[]},{value:"searchContext property",id:"searchcontext-property",children:[]},{value:"label",id:"label",children:[]},{value:"publishState",id:"publishstate",children:[]}]},{value:"Implementation",id:"implementation",children:[{value:"Working principles",id:"working-principles",children:[]},{value:"Criterion state design",id:"criterion-state-design",children:[]},{value:"Handling errors",id:"handling-errors",children:[]}]},{value:"Example",id:"example",children:[{value:"Writing plugin-info.json",id:"writing-plugin-infojson",children:[]},{value:"Initializing main file",id:"initializing-main-file",children:[]},{value:"Implementing main component",id:"implementing-main-component",children:[]},{value:"Handle state",id:"handle-state",children:[]},{value:"Update state and request",id:"update-state-and-request",children:[]},{value:"Rendering?",id:"rendering",children:[]},{value:"Graphical component implementation",id:"graphical-component-implementation",children:[]}]},{value:"Helpers",id:"helpers",children:[]},{value:"Going further",id:"going-further",children:[]}],p={toc:s};function c(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"presentation"},"Presentation"),Object(i.b)("p",null,"A front-end criterion plugin is a javascript bundle used in ",Object(i.b)("a",{parentName:"p",href:"../../packages/lazy-modules/search-results/"},"Search results modules")," to create form fields and panes. Each criterion plugin generates OpenSearch request parameters sent to the rs-catalog microservice in order to search resulting entities. Criterion plugins accept attributes to filter as configuration."),Object(i.b)("p",null,Object(i.b)("img",{src:n(2763).default}),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("em",{parentName:"p"},"Example of search form, using many criterion plugins")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Notes")," :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Criterion plugin also respects main plugin consideration. Thus, make sure reading ",Object(i.b)("a",{parentName:"li",href:"../../plugins/"},"plugins page")," first!"),Object(i.b)("li",{parentName:"ul"},"OpenSearch requests are expressed using the ",Object(i.b)("a",{parentName:"li",href:"https://lucene.apache.org/core/2_9_4/queryparsersyntax.html"},"Lucene format"),".")),Object(i.b)("h2",{id:"main-principles"},"Main principles"),Object(i.b)("p",null,"Each criterion plugin:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"shares its state with parent search-form. That state:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"can be initially undefined"),Object(i.b)("li",{parentName:"ul"},"will be saved / restored automatically"),Object(i.b)("li",{parentName:"ul"},"must be published together with new request parameters"))),Object(i.b)("li",{parentName:"ul"},"displays one or many table rows and columns in the form"),Object(i.b)("li",{parentName:"ul"},"builds requests parameters that can filter search results (assembling them is performed automatically by parent module).")),Object(i.b)("h2",{id:"specific-configuration-plugin-infojson-fields"},"Specific configuration (plugin-info.json fields)"),Object(i.b)("p",null,"First of all, the plugin-info.json file field ",Object(i.b)("strong",{parentName:"p"},'"type"')," should indicate ",Object(i.b)("strong",{parentName:"p"},'"CRITERIA"'),", to ensure it is considered as a criterion, and not as a service."),Object(i.b)("p",null,"Then, the plugin indicates a list of attributes he intends to use for building request parameters, and their type restrictions, in ",Object(i.b)("strong",{parentName:"p"},'"conf"."attributes"')," field. Please note that the field is mandatory, but can be left empty:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"attributes"),": ",Object(i.b)("em",{parentName:"li"},"{array}")," An array of attributes definitions, that indicates the number and type of attributes that should be provided to the criterion, when adding the criterion into a search form. Each array element defines the following fields:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name"),": ",Object(i.b)("em",{parentName:"li"},"{string}")," The name used in code to refer to that attribute. For instance, if an attribute is named ",Object(i.b)("inlineCode",{parentName:"li"},"myAttribute"),", it will be possible to access it, in the main criterion component, with the property ",Object(i.b)("inlineCode",{parentName:"li"},"this.props.attributes.myAttribute"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"description"),": ",Object(i.b)("em",{parentName:"li"},"{string}")," Description displayed to the administrator when he selects ",Object(i.b)("strong",{parentName:"li"},"actual attribute")," for this abstract attribute, at plugin configuration time."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"attributeType"),": ",Object(i.b)("em",{parentName:"li"},"{array}")," Accepted types for that attribute. Possible attributes types, from JAVA class ",Object(i.b)("strong",{parentName:"li"},"fr.cnes.regards.modules.models.domain.attributes.AttributeType"),", are ","[",Object(i.b)("inlineCode",{parentName:"li"},'"STRING"'),", ",Object(i.b)("inlineCode",{parentName:"li"},'"INTEGER"'),", ",Object(i.b)("inlineCode",{parentName:"li"},'"DOUBLE"'),", ",Object(i.b)("inlineCode",{parentName:"li"},'"DATE_ISO8601"'),", ",Object(i.b)("inlineCode",{parentName:"li"},'"URL"'),", ",Object(i.b)("inlineCode",{parentName:"li"},'"BOOLEAN"'),", ",Object(i.b)("inlineCode",{parentName:"li"},'"STRING_ARRAY"'),", ",Object(i.b)("inlineCode",{parentName:"li"},'"INTEGER_ARRAY"'),", ",Object(i.b)("inlineCode",{parentName:"li"},'"DOUBLE_ARRAY"'),", ",Object(i.b)("inlineCode",{parentName:"li"},'"DATE_ARRAY"'),", ",Object(i.b)("inlineCode",{parentName:"li"},'"INTEGER_INTERVAL"'),", ",Object(i.b)("inlineCode",{parentName:"li"},'"DOUBLE_INTERVAL"'),", ",Object(i.b)("inlineCode",{parentName:"li"},'"DATE_INTERVAL"'),", ",Object(i.b)("inlineCode",{parentName:"li"},'"LONG"'),", ",Object(i.b)("inlineCode",{parentName:"li"},'"LONG_INTERVAL"'),", ",Object(i.b)("inlineCode",{parentName:"li"},'"LONG_ARRAY"'),"]")))),Object(i.b)("p",null,"The following example illustrates a criterion that uses 3 attributes, first one being a date attribute, second one a string attribute and last one a number attribute."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Criterion plugin-info.json example")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-plugin",\n  "description": "It is my plugin",\n  "version": "1.0.0",\n  "author": "Someone",\n  "company": "Some company",\n  "email": "someone@some-company.com",\n  "url": "www.my-plugin-is-awesome.com",\n  "license": "GPL-V3",\n  "type": "CRITERIA",\n  "conf": {\n    "attributes": [\n      {\n        "name": "attributeA",\n        "description": "My first attribute",\n        "attributeType": ["DATE_ISO8601"]\n      },\n      {\n        "name": "attributeB",\n        "description": "My second attribute",\n        "attributeType": ["STRING"]\n      },\n      {\n        "name": "attributeC",\n        "description": "My third attribute",\n        "attributeType": ["INTEGER", "DOUBLE", "LONG"]\n      }\n    ]\n  }\n}\n')),Object(i.b)("h2",{id:"specific-runtime-properties"},"Specific runtime properties"),Object(i.b)("p",null,"The main criterion component - the one exported in main.js file - will receive the following properties at runtime:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"  static propTypes = {\n    /** Plugin instance identifier */\n    pluginInstanceId: PropTypes.string.isRequired,\n    /** Resolved attributes for configuration attributes, by attributes name, as described in previous plugin-info.json example */\n    attributes: PropTypes.shape({\n      attributeA: AttributeModelWithBounds.isRequired,\n      attributeB: AttributeModelWithBounds.isRequired,\n      attributeC: AttributeModelWithBounds.isRequired,\n    }).isRequired,\n    /** Criterion search context */\n    searchContext: CatalogShapes.SearchContext.isRequired,\n    // configured plugin label, where object key is locale and object value message\n    label: UIShapes.IntlMessage.isRequired,\n    // Callback to share state update with parent form like (state, requestParameters) => ()\n    publishState: PropTypes.func.isRequired,\n  }\n")),Object(i.b)("p",null,"Those properties, excepted pluginInstanceId which is a common plugin property, are detailed in following subsections."),Object(i.b)("h3",{id:"attributes-property"},"attributes property"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"For each attribute specified in plugin-info.json"),", the attributes object will hold an ",Object(i.b)("strong",{parentName:"p"},"AttributeModelWithBounds")," with ","[attribute.name]"," key. That object contains the following fields (the shape can be found in web_modules/utils/plugins/src/shapes/AttributeModelWithBounds.js):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"jsonPath"),": ",Object(i.b)("em",{parentName:"li"},"{string}")," Attribute path, to be used within OpenSearch requests"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"label"),": ",Object(i.b)("em",{parentName:"li"},"{string}")," Attribute label"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"description"),": ",Object(i.b)("em",{parentName:"li"},"{string}")," Attribute description"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"boundsInformation"),": ",Object(i.b)("em",{parentName:"li"},"{object}")," Current context's bounds information for range attributes (date or numbers), compound of fields:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"exists"),": ",Object(i.b)("em",{parentName:"li"},"{boolean}")," True when the attribute is a range type attribute DATE_ISO8601, INTEGER, DOUBLE or LONG"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"loading"),": ",Object(i.b)("em",{parentName:"li"},"{boolean}")," True when bounds are currently loading"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"error"),": ",Object(i.b)("em",{parentName:"li"},"{boolean}")," True when bounds loading finished in error"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"lowerBound"),": ",Object(i.b)("em",{parentName:"li"},"{number}")," Resolved lower attribute value, in current form context, when bounds exist, loading finished, there were no error while loading them and attribute has values in current search context"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"upperBound"),": ",Object(i.b)("em",{parentName:"li"},"{number}")," Resolved upper attribute value (works as lowerBound field)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type"),": ",Object(i.b)("em",{parentName:"li"},"{string}")," Attribute type (as specified in plugin-info.json, from ",Object(i.b)("strong",{parentName:"li"},"fr.cnes.regards.modules.models.domain.attributes.AttributeType"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"unit"),": ",Object(i.b)("em",{parentName:"li"},"{string}")," Unit if any (only for number type attributes)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"precision"),": ",Object(i.b)("em",{parentName:"li"},"{number}")," Precision if any (only for floating number types attributes)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"arraysize"),": ",Object(i.b)("em",{parentName:"li"},"{number}")," Array size if any (only for array type attributes)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"optional"),": ",Object(i.b)("em",{parentName:"li"},"{boolean}")," True when that attribute, in a given data object, can be omitted"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"defaultValue"),": ",Object(i.b)("em",{parentName:"li"},"{string}")," Default value if any"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fragment"),": ",Object(i.b)("em",{parentName:"li"},"{object}")," Attribute fragment, holding id, name and description fields"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name"),": ",Object(i.b)("em",{parentName:"li"},"{string}")," Attribute name"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"id"),": ",Object(i.b)("em",{parentName:"li"},"{number}")," Attribute database id")),Object(i.b)("h3",{id:"searchcontext-property"},"searchContext property"),Object(i.b)("p",null,'That property holds the current search context. It can be used to perform a query and check available choices for user (like performed in standard criterion "enumerated"). It is an object like:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"{\n  engineType: '...',\n  searchParameters: {\n    // ... parameters...\n  },\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," The searchContext does not include the request parameters this criterion built, to avoid blocking situations in form."),Object(i.b)("h3",{id:"label"},"label"),Object(i.b)("p",null,"Internationalized label provided, at configuration, by administrator. It holds locales as keys and corresponding message as value."),Object(i.b)("p",null,"It is an object like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"{\n  en: 'my label',\n  fr: 'mon libell\xe9',\n}\n")),Object(i.b)("h3",{id:"publishstate"},"publishState"),Object(i.b)("p",null,"That function allows publishing state and new request parameters from criterion to parent search-form. It expects the following parameters:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"New criterion state, as a JS object."),Object(i.b)("li",{parentName:"ol"},"New request parameters as a JS object where keys are the parameter name and values are the corresponding values. It can be an empty / null / undefined object. Please note that values types are restricted to:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"boolean"),Object(i.b)("li",{parentName:"ul"},"string"),Object(i.b)("li",{parentName:"ul"},"number"),Object(i.b)("li",{parentName:"ul"},"array, containing elements of previous types")),Object(i.b)("h2",{id:"implementation"},"Implementation"),Object(i.b)("h3",{id:"working-principles"},"Working principles"),Object(i.b)("p",null,"Criterion plugins, as parts of the search form, must respect the following requirements:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"They can emit, on user demand, some OpenSearch request parameters (or part of it)"),Object(i.b)("li",{parentName:"ul"},"Their state can be restored from one session to another"),Object(i.b)("li",{parentName:"ul"},"Their state can be shared using current browser URL")),Object(i.b)("p",null,"In order to provide those functionalities, while keeping plugins code light, the URL and session restoration systems are implemented within the parent search form. That results in parent form reading and updating, on need, criterion plugins state.",Object(i.b)("br",{parentName:"p"}),"\n","The following design was retained to achieve state sharing between form and plugins:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The application initialize the plugins state with",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"found state in URL, if any"),Object(i.b)("li",{parentName:"ul"},"found state in web browser storage, if any"),Object(i.b)("li",{parentName:"ul"},"undefined otherwise (the plugin should then chose an initial state)"))),Object(i.b)("li",{parentName:"ul"},"The criterion updates its state with interactions, then publishes new state and request parameters (after publishing, parent form will save the state into URL and web browser storage)")),Object(i.b)("h3",{id:"criterion-state-design"},"Criterion state design"),Object(i.b)("p",null,"The criterion state should hold each variable that will modify its OpenSearch output parameters. Each time the state changes, it must be published alongside with new requestParameters, using publishState callback from properties."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," As state is serialized, shorten field name is a good practice - especially due to limited URL size."),Object(i.b)("h3",{id:"handling-errors"},"Handling errors"),Object(i.b)("p",null,"Optionally, criterion state can hold the field ",Object(i.b)("strong",{parentName:"p"},"error"),", at state root. When that field is true, parent search form will disable search button, hence preventing search in current state."),Object(i.b)("p",null,Object(i.b)("img",{src:n(2764).default}),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("em",{parentName:"p"},"An example of criterion in error (note that search button is disabled, due to error)")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"To illustrate it, lets take the following example:\nwe want to implement a criterion plugin that selects any data object where value ",Object(i.b)("strong",{parentName:"p"},"IS EQUAL TO")," or ",Object(i.b)("strong",{parentName:"p"},"IS NOT EQUAL TO")," the user entered value. In that example, the user selects the operator to use and enters the value. To - artificially - manage an error state too, let's say the criterion is in error when user enters a negative number."),Object(i.b)("p",null,"The criterion request parameters would be expressed as following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When IS EQUAL TO operator is selected: ",Object(i.b)("inlineCode",{parentName:"li"},'{ q: "${attributeJsonPath}:${userEnteredValue}" }'),", like ",Object(i.b)("inlineCode",{parentName:"li"},"{ q: 'attr1: 18' }")," for instance."),Object(i.b)("li",{parentName:"ul"},"When IS NOT EQUAL TO operator is selected: ",Object(i.b)("inlineCode",{parentName:"li"},'{ q: "${attributeJsonPath}:!${userEnteredValue}" }'),", like ",Object(i.b)("inlineCode",{parentName:"li"},"{ q:' attr1:!18' }")," for instance.")),Object(i.b)("p",null,"*","Note that q is the search query parameter name. If multiple criteria provide a value for that parameter, it will hold all values like ",Object(i.b)("inlineCode",{parentName:"p"},"q: p1 AND p2 AND p3"),". Therefore many criteria can work with it at same time."),Object(i.b)("h3",{id:"writing-plugin-infojson"},"Writing plugin-info.json"),Object(i.b)("p",null,"First, the requested attribute should be added to the configuration. Doing so lets the criterion work for configured attribute, instead of using an hard coded constant attribute path. However, as we need to test negative values, we will restrain administrator possible choices to number attributes only."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "equal-or-different-criterion",\n  "description": "Criterion widget that returns all data what attribute is equal to / different of a given value",\n  "version": "1.0.0",\n  "author": "A super trainer!",\n  "company": "CNES (https://cnes.fr)",\n  "contributors": ["CS-SI <regards@c-s.fr> (https://www.c-s.fr)"],\n  "email": "regards@c-s.fr",\n  "url": "http://www.cnes.fr",\n  "license": "GPLv3",\n  "type": "CRITERIA",\n  "conf": {\n    "attributes": [\n      {\n        "name": "exampleAttribute",\n        "description": "Example attribute",\n        "attributeType": ["INTEGER", "DOUBLE", "LONG"]\n      }\n    ]\n  }\n}\n')),Object(i.b)("h3",{id:"initializing-main-file"},"Initializing main file"),Object(i.b)("p",null,"Lets name the main component ",Object(i.b)("inlineCode",{parentName:"p"},"ExampleCriterionContainer.jsx")," here. As we will not use any reducer for that example, the 'main.js' file should hold the following code:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"initPlugin(ExampleCriterionContainer, pluginInfo, getReducer, messages, styles);\n")),Object(i.b)("h3",{id:"implementing-main-component"},"Implementing main component"),Object(i.b)("h3",{id:"handle-state"},"Handle state"),Object(i.b)("p",null,"First we should define what is the main component state. To build the query, the component needs to know:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the operator currently selected by user (equal or different)"),Object(i.b)("li",{parentName:"ul"},"The value entered by the user")),Object(i.b)("p",null,"As we also handle here an error state (when user inputs a negative number), the state would look like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'state = {\n  operator: "...", // enumerated operator\n  value: X, // numeric value\n  error: true, // or false...\n};\n')),Object(i.b)("p",null,"Then, we need to identify when state and parameters will change. Here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When user inputs a new number"),Object(i.b)("li",{parentName:"ul"},"When user selects the other operator")),Object(i.b)("p",null,"With those elements, we can write the following code. Note that we provide a default state when parent search form sends us 'undefined', to not deal with undefined state cases."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'const Operators = {\n  EQUALS: "E", // use small constant for state serialization\n  DIFFERENT: "D",\n};\n\nexport class ExampleCriterionContainer extends React.Component {\n  static DEFAULT_STATE = {\n    value: null,\n    operator: Operators.EQUALS,\n    error: false,\n  };\n\n  static propTypes = {\n    attributes: PropTypes.shape({\n      // from plugin-info\n      exampleAttribute: AttributeModelWithBounds.isRequired,\n    }).isRequired,\n    label: UIShapes.IntlMessage.isRequired,\n    state: PropTypes.shape({\n      value: PropTypes.number,\n      operator: PropTypes.oneOf(operators.EQUAL, operators.DIFFERENT)\n        .isRequired,\n      error: PropTypes.bool.isRequired,\n    }),\n    publishState: PropTypes.func.isRequired,\n  };\n\n  static defaultProps = {\n    state: ExampleCriterionContainer.DEFAULT_STATE,\n  };\n\n  onNewValueInput = (newNumber) => {\n    // ...\n  };\n\n  onOperatorSelected = (newOperator) => {\n    // ...\n  };\n}\n')),Object(i.b)("h3",{id:"update-state-and-request"},"Update state and request"),Object(i.b)("p",null,"Now that the state is designed, the criterion should update it when callbacks are invoked (onNewValueInput / onOperatorSelected). To perform that update, we will use a common method, avoiding the need to copy/paste code..."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'// ... ExampleCriterionContainer code above\n\nonNewValueInput = (newNumber) =>\n  this.onUpdateState(newNumber, this.props.state.operator);\n\nonOperatorSelected = (newOperator) =>\n  this.onUpdateState(this.props.state.value, newOperator);\n\nonUpdateState = (value, operator) => {\n  const {\n    attributes: { exampleAttribute },\n    publishState,\n  } = this.props;\n  const nextState = {\n    value,\n    operator,\n    // we do not want to show an error here while user has not input any number!\n    error: !isNil(value) && value < 1,\n  };\n  publishState(newState, {\n    // cf. top section for request expression. Here we only need q parameter.\n    q: `${exampleAttribute.jsonPath}:${\n      operator === Operators.EQUALS ? "" : "!"\n    }${value}`,\n  });\n};\n')),Object(i.b)("p",null,"That code ensures that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When user inputs a number, criterion state (with error) and search request are updated"),Object(i.b)("li",{parentName:"ul"},"When user selects an operator, criterion state (with error) and search request are updated")),Object(i.b)("h3",{id:"rendering"},"Rendering?"),Object(i.b)("p",null,"Most of the time, in REGARDS, state management is performed in container and graphics are delegated to a component with the same name. So let's do it right, and render using that component. We provide at same time all the elements the component may use for graphical state feedback."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"// ... ExampleCriterionContainer code above\n\n  render(){\n    const { state: {value, operator, error}, label } = this.props\n    return <ExampleCriterionComponent\n      label={label}\n      value={value}\n      operator={operator}\n      error={error}\n      onNewValueInput={this.onNewValueInput}\n      onOperatorSelected={this.onOperatorSelected}\n    >\n  }\n")),Object(i.b)("h3",{id:"graphical-component-implementation"},"Graphical component implementation"),Object(i.b)("p",null,"The graphical implementation is quite straightforward. To keep the code light we'll suppose here to have an OperatorSelector that renders and selects one of Operators values and a NumberInput that renders errors and current value. Although it is not exactly the same operators, similar examples can be found in most default plugins.\nPlease note that the component renders itself in a table row, as search form is drawn using an HTML table. We will also use here the common application theme."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'export class ExampleCriterionComponent extends React.Component {\n  static propTypes = {\n    label: UIShapes.IntlMessage.isRequired,\n    value: PropTypes.number,\n    operator: PropTypes.string.isRequired,\n    error: PropTypes.bool.isRequired,\n    onNewValueInput: PropTypes.func.isRequired,\n    onOperatorSelected: PropTypes.func.isRequired,\n  };\n\n  static contextTypes = {\n    // enable muiTheme and moduleTheme access through this.context\n    ...themeContextType,\n    // enable intl access through this.context\n    ...i18nContextType,\n  };\n\n  render() {\n    const {\n      label,\n      value,\n      operator,\n      error,\n      onNewValueInput,\n      onOperatorSelected,\n    } = this.props;\n    const { intl, muiTheme } = this.context;\n    return (\n      <tr>\n        {/* 1. First column: label (current locale is found in intl context) */}\n        <td style={muiTheme.module.searchResults.searchPane.criteria.firstCell}>\n          {label[intl.locale]}\n        </td>\n        {/* 2. Second column: comparison selector */}\n        <td style={muiTheme.module.searchResults.searchPane.criteria.nextCell}>\n          <OperatorSelector operator={operator} onChange={onOperatorSelected} />\n        </td>\n        {/* 3. Third column: input box.\n         * we use here an intl message. It should be added, as key, in\n         * plugins/criterion/example-criterion/src/i18n/messages.en.i18n.js (and fr)\n         */}\n        <td style={muiTheme.module.searchResults.searchPane.criteria.nextCell}>\n          <NumberInput\n            hintText={intl.formatMessage({\n              id: "example.criterion.input.hint",\n            })}\n            error={error}\n            value={value}\n            onChange={onNewValueInput}\n          />\n        </td>\n      </tr>\n    );\n  }\n}\n')),Object(i.b)("h2",{id:"helpers"},"Helpers"),Object(i.b)("p",null,"Numerous helpers can be found in ",Object(i.b)("inlineCode",{parentName:"p"},"webapp/web_modules/utils/plugins-api"),". They are covering common plugin fields like computing hint text and tooltips according with attribute bounds, resolving constraints range intersection, and so on...."),Object(i.b)("h2",{id:"going-further"},"Going further"),Object(i.b)("p",null,"There are several criteria provided in ",Object(i.b)("em",{parentName:"p"},"webapp/plugin/criterion")," folder, of ",Object(i.b)("em",{parentName:"p"},"rs-frontend")," repository. ",Object(i.b)("inlineCode",{parentName:"p"},"full-text")," criterion illustrates a very simple criterion without attribute while ",Object(i.b)("inlineCode",{parentName:"p"},"enumerated")," shows a more complicated use case, fetching server data and handling error state. Those criteria should be a good starting point from here."))}c.isMDXComponent=!0},2708:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(m,o(o({ref:t},p),{},{components:n})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2763:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/search-form-small-397be52f6a6f1089630c4c5dae3b1bd6.png"},2764:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/criterion-error-55a0b90ef685575473d80b4303f1f6f3.png"}}]);