(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(2701)),i={id:"frontend-data-clients",title:"Backend interactions",sidebar_label:"Backend interactions",slug:"/development/frontend/data/clients"},c={unversionedId:"development/frontend/components/frontend-data-clients",id:"development/frontend/components/frontend-data-clients",isDocsHomePage:!1,title:"Backend interactions",description:"Description",source:"@site/docs/development/frontend/components/clients.md",slug:"/development/frontend/data/clients",permalink:"/fr/docs/development/frontend/data/clients",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/components/clients.md",version:"current",sidebar_label:"Backend interactions",sidebar:"dev",previous:{title:"REGARDS UI data",permalink:"/fr/docs/development/frontend/data/ui-data"},next:{title:"Internationalization",permalink:"/fr/docs/development/frontend/view/international"}},l=[{value:"Description",id:"description",children:[]},{value:"How to",id:"how-to",children:[{value:"Create your client",id:"create-your-client",children:[]}]}],s={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"As explain in the general frontend archicteture (",Object(a.b)("a",{parentName:"p",href:"ui-data"},"REGARDS UI data"),") page, REGARDS is based on Redux and Redux API middleware librairies to fetch network data and store it. This page instantiate a client using client definitions from ",Object(a.b)("inlineCode",{parentName:"p"},"@regardsoss/client"),", that defines most of existing REGARDS endpoints"),Object(a.b)("h2",{id:"how-to"},"How to"),Object(a.b)("h3",{id:"create-your-client"},"Create your client"),Object(a.b)("p",null,"First of all you have to create a ",Object(a.b)("inlineCode",{parentName:"p"},"client.js")," file to define the 3 ",Object(a.b)("inlineCode",{parentName:"p"},"Redux")," standard notions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"reducers : To reduce response results into an object to save in the store"),Object(a.b)("li",{parentName:"ul"},"actions : To send requests"),Object(a.b)("li",{parentName:"ul"},"selectors : To read results from the store")),Object(a.b)("p",null,"The example bellow illustrates how to create a ",Object(a.b)("inlineCode",{parentName:"p"},"ModelClient.js")," to request models from rs-dam."),Object(a.b)("h4",{id:"1-create-the-modelclientjs"},"1","."," Create the ModelClient.js"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import { DataManagementClient } from '@regardsoss/client'\n\nconst ENTITIES_STORE_PATH = ['example', 'data-management', 'model-management', 'model']\nconst REDUX_ACTION_NAMESPACE = 'admin-data-model-management'\n\nconst modelReducer = DataManagementClient.ModelReducer(REDUX_ACTION_NAMESPACE)\nconst modelActions = new DataManagementClient.ModelActions(REDUX_ACTION_NAMESPACE)\nconst modelSelectors = DataManagementClient.ModelSelectors(ENTITIES_STORE_PATH)\n\nexport default {\n  modelReducer,\n  modelActions,\n  modelSelectors,\n}\n")),Object(a.b)("p",null,"Notes : "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ENTITIES_STORE_PATH : Is the full path into redux store to store backend responses."),Object(a.b)("li",{parentName:"ul"},"REDUX_ACTION_NAMESPACE : Name of the action sent to redux. It must be unique among all application clients to avoid multiple reducers handling the same actions.")),Object(a.b)("h4",{id:"2-link-the-reducer-to-the-global-application-reducers"},"2","."," Link the reducer to the global application reducers."),Object(a.b)("p",null,"Add associated reducers to your module reducers :"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import { combineReducers } from 'redux'\nimport { modelReducer } from 'ModelClient'\n\nconst modelDataManagementReducer = combineReducers({\n  model: modelReducer,\n})\n\nexport default modelDataManagementReducer\n")),Object(a.b)("h4",{id:"3-use-your-client-into-a-react-container"},"3","."," Use your client into a React container"),Object(a.b)("p",null,"The example demonstrates how to send a request for all model then display the retrieved list."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import { modelActions, modelSelectors } from 'ModelClient'\nimport { DataManagementShapes } from '@regardsoss/shape'\n\nexport class ExampleContainer extends React.component {\n\n  static propTypes = {\n    // from mapStateToProps\n    modelList: DataManagementShapes.ModelList,\n    // from mapDispatchToProps\n    fetchModelList: PropTypes.func,\n  }\n  \n  componentDidMount() {\n    // send the request\n    this.props.fetchModelList()\n  }\n  \n  render() {\n    return (\n      <ul>\n        {map(modelList, (model, i) => (\n          <li>{model.content.name}</li>\n        ))}\n      </ul>)\n  }\n}\n\nconst mapStateToProps = state => ({\n  modelList: modelSelectors.getList(state), // retrieve the request result\n})\nconst mapDispatchToProps = dispatch => ({\n  fetchModelList: () => dispatch(modelActions.fetchEntityList()), // function to perform request\n})\n\nexport default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer)\n")))}d.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);