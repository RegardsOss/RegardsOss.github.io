"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[16728],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85975:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"frontend-data-clients",title:"Backend interactions",sidebar_label:"Backend interactions",slug:"/development/frontend/data/clients/"},s=void 0,c={unversionedId:"development/frontend/components/frontend-data-clients",id:"version-1.5.0/development/frontend/components/frontend-data-clients",title:"Backend interactions",description:"Description",source:"@site/versioned_docs/version-1.5.0/development/frontend/components/clients.md",sourceDirName:"development/frontend/components",slug:"/development/frontend/data/clients/",permalink:"/fr/docs/1.5.0/development/frontend/data/clients/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/frontend/components/clients.md",tags:[],version:"1.5.0",frontMatter:{id:"frontend-data-clients",title:"Backend interactions",sidebar_label:"Backend interactions",slug:"/development/frontend/data/clients/"},sidebar:"version-1.5.0/dev",previous:{title:"Data store & Request",permalink:"/fr/docs/1.5.0/development/frontend/data/ui-data/"},next:{title:"Internationalization",permalink:"/fr/docs/1.5.0/development/frontend/view/international/"}},d=[{value:"Description",id:"description",children:[],level:2},{value:"How to",id:"how-to",children:[{value:"Create your client",id:"create-your-client",children:[{value:"1. Create the ModelClient.js",id:"1-create-the-modelclientjs",children:[],level:4},{value:"2. Link the reducer to the global application reducers.",id:"2-link-the-reducer-to-the-global-application-reducers",children:[],level:4},{value:"3. Use your client into a React container",id:"3-use-your-client-into-a-react-container",children:[],level:4}],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"As explain in the general frontend archicteture (",(0,a.kt)("a",{parentName:"p",href:"../ui-data/"},"REGARDS UI data")," page), REGARDS is based on Redux and Redux API middleware librairies to fetch network data and store it. This page instantiate a client using client definitions from ",(0,a.kt)("inlineCode",{parentName:"p"},"@regardsoss/client"),", that defines most of existing REGARDS endpoints"),(0,a.kt)("h2",{id:"how-to"},"How to"),(0,a.kt)("h3",{id:"create-your-client"},"Create your client"),(0,a.kt)("p",null,"First of all you have to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"client.js")," file to define the 3 ",(0,a.kt)("inlineCode",{parentName:"p"},"Redux")," standard notions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"reducers : To reduce response results into an object to save in the store"),(0,a.kt)("li",{parentName:"ul"},"actions : To send requests"),(0,a.kt)("li",{parentName:"ul"},"selectors : To read results from the store")),(0,a.kt)("p",null,"The example bellow illustrates how to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelClient.js")," to request models from rs-dam."),(0,a.kt)("h4",{id:"1-create-the-modelclientjs"},"1","."," Create the ModelClient.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { DataManagementClient } from '@regardsoss/client'\n\nconst ENTITIES_STORE_PATH = ['example', 'data-management', 'model-management', 'model']\nconst REDUX_ACTION_NAMESPACE = 'admin-data-model-management'\n\nconst modelReducer = DataManagementClient.ModelReducer(REDUX_ACTION_NAMESPACE)\nconst modelActions = new DataManagementClient.ModelActions(REDUX_ACTION_NAMESPACE)\nconst modelSelectors = DataManagementClient.ModelSelectors(ENTITIES_STORE_PATH)\n\nexport default {\n  modelReducer,\n  modelActions,\n  modelSelectors,\n}\n")),(0,a.kt)("p",null,"Notes : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ENTITIES_STORE_PATH : Is the full path into redux store to store backend responses."),(0,a.kt)("li",{parentName:"ul"},"REDUX_ACTION_NAMESPACE : Name of the action sent to redux. It must be unique among all application clients to avoid multiple reducers handling the same actions.")),(0,a.kt)("h4",{id:"2-link-the-reducer-to-the-global-application-reducers"},"2","."," Link the reducer to the global application reducers."),(0,a.kt)("p",null,"Add associated reducers to your module reducers :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { combineReducers } from 'redux'\nimport { modelReducer } from 'ModelClient'\n\nconst modelDataManagementReducer = combineReducers({\n  model: modelReducer,\n})\n\nexport default modelDataManagementReducer\n")),(0,a.kt)("h4",{id:"3-use-your-client-into-a-react-container"},"3","."," Use your client into a React container"),(0,a.kt)("p",null,"The example demonstrates how to send a request for all model then display the retrieved list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { modelActions, modelSelectors } from 'ModelClient'\nimport { DataManagementShapes } from '@regardsoss/shape'\n\nexport class ExampleContainer extends React.component {\n\n  static propTypes = {\n    // from mapStateToProps\n    modelList: DataManagementShapes.ModelList,\n    // from mapDispatchToProps\n    fetchModelList: PropTypes.func,\n  }\n  \n  componentDidMount() {\n    // send the request\n    this.props.fetchModelList()\n  }\n  \n  render() {\n    return (\n      <ul>\n        {map(modelList, (model, i) => (\n          <li>{model.content.name}</li>\n        ))}\n      </ul>)\n  }\n}\n\nconst mapStateToProps = state => ({\n  modelList: modelSelectors.getList(state), // retrieve the request result\n})\nconst mapDispatchToProps = dispatch => ({\n  fetchModelList: () => dispatch(modelActions.fetchEntityList()), // function to perform request\n})\n\nexport default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer)\n")))}u.isMDXComponent=!0}}]);