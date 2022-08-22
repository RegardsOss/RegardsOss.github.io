"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[21450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={id:"frontend-data-clients",title:"Backend interactions",sidebar_label:"Backend interactions",slug:"/development/frontend/data/clients/"},l=void 0,i={unversionedId:"development/frontend/components/frontend-data-clients",id:"version-1.8.0/development/frontend/components/frontend-data-clients",title:"Backend interactions",description:"Description",source:"@site/versioned_docs/version-1.8.0/development/frontend/components/clients.md",sourceDirName:"development/frontend/components",slug:"/development/frontend/data/clients/",permalink:"/docs/1.8.0/development/frontend/data/clients/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.8.0/development/frontend/components/clients.md",tags:[],version:"1.8.0",frontMatter:{id:"frontend-data-clients",title:"Backend interactions",sidebar_label:"Backend interactions",slug:"/development/frontend/data/clients/"},sidebar:"dev",previous:{title:"Data store & Request",permalink:"/docs/1.8.0/development/frontend/data/ui-data/"},next:{title:"Internationalization",permalink:"/docs/1.8.0/development/frontend/view/international/"}},s={},d=[{value:"Description",id:"description",level:2},{value:"How to",id:"how-to",level:2},{value:"Create your client",id:"create-your-client",level:3},{value:"1. Create the ModelClient.js",id:"1-create-the-modelclientjs",level:4},{value:"2. Link the reducer to the global application reducers.",id:"2-link-the-reducer-to-the-global-application-reducers",level:4},{value:"3. Use your client into a React container",id:"3-use-your-client-into-a-react-container",level:4}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"As explain in the general frontend archicteture (",(0,r.kt)("a",{parentName:"p",href:"../ui-data/"},"REGARDS UI data")," page), REGARDS is based on Redux and Redux API middleware librairies to fetch network data and store it. This page instantiate a client using client definitions from ",(0,r.kt)("inlineCode",{parentName:"p"},"@regardsoss/client"),", that defines most of existing REGARDS endpoints"),(0,r.kt)("h2",{id:"how-to"},"How to"),(0,r.kt)("h3",{id:"create-your-client"},"Create your client"),(0,r.kt)("p",null,"First of all you have to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"client.js")," file to define the 3 ",(0,r.kt)("inlineCode",{parentName:"p"},"Redux")," standard notions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"reducers : To reduce response results into an object to save in the store"),(0,r.kt)("li",{parentName:"ul"},"actions : To send requests"),(0,r.kt)("li",{parentName:"ul"},"selectors : To read results from the store")),(0,r.kt)("p",null,"The example bellow illustrates how to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ModelClient.js")," to request models from rs-dam."),(0,r.kt)("h4",{id:"1-create-the-modelclientjs"},"1","."," Create the ModelClient.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { DataManagementClient } from '@regardsoss/client'\n\nconst ENTITIES_STORE_PATH = ['example', 'data-management', 'model-management', 'model']\nconst REDUX_ACTION_NAMESPACE = 'admin-data-model-management'\n\nconst modelReducer = DataManagementClient.ModelReducer(REDUX_ACTION_NAMESPACE)\nconst modelActions = new DataManagementClient.ModelActions(REDUX_ACTION_NAMESPACE)\nconst modelSelectors = DataManagementClient.ModelSelectors(ENTITIES_STORE_PATH)\n\nexport default {\n  modelReducer,\n  modelActions,\n  modelSelectors,\n}\n")),(0,r.kt)("p",null,"Notes : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ENTITIES_STORE_PATH : Is the full path into redux store to store backend responses."),(0,r.kt)("li",{parentName:"ul"},"REDUX_ACTION_NAMESPACE : Name of the action sent to redux. It must be unique among all application clients to avoid multiple reducers handling the same actions.")),(0,r.kt)("h4",{id:"2-link-the-reducer-to-the-global-application-reducers"},"2","."," Link the reducer to the global application reducers."),(0,r.kt)("p",null,"Add associated reducers to your module reducers :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { combineReducers } from 'redux'\nimport { modelReducer } from 'ModelClient'\n\nconst modelDataManagementReducer = combineReducers({\n  model: modelReducer,\n})\n\nexport default modelDataManagementReducer\n")),(0,r.kt)("h4",{id:"3-use-your-client-into-a-react-container"},"3","."," Use your client into a React container"),(0,r.kt)("p",null,"The example demonstrates how to send a request for all model then display the retrieved list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { modelActions, modelSelectors } from 'ModelClient'\nimport { DataManagementShapes } from '@regardsoss/shape'\n\nexport class ExampleContainer extends React.component {\n\n  static propTypes = {\n    // from mapStateToProps\n    modelList: DataManagementShapes.ModelList,\n    // from mapDispatchToProps\n    fetchModelList: PropTypes.func,\n  }\n  \n  componentDidMount() {\n    // send the request\n    this.props.fetchModelList()\n  }\n  \n  render() {\n    return (\n      <ul>\n        {map(modelList, (model, i) => (\n          <li>{model.content.name}</li>\n        ))}\n      </ul>)\n  }\n}\n\nconst mapStateToProps = state => ({\n  modelList: modelSelectors.getList(state), // retrieve the request result\n})\nconst mapDispatchToProps = dispatch => ({\n  fetchModelList: () => dispatch(modelActions.fetchEntityList()), // function to perform request\n})\n\nexport default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer)\n")))}p.isMDXComponent=!0}}]);