"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[20060],{39686:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(74848),s=t(28453);const r={id:"frontend-data-clients",title:"Backend interactions",sidebar_label:"Backend interactions",slug:"/development/frontend/data/clients/"},i=void 0,a={id:"development/frontend/components/frontend-data-clients",title:"Backend interactions",description:"Description",source:"@site/versioned_docs/version-1.15/development/frontend/components/clients.md",sourceDirName:"development/frontend/components",slug:"/development/frontend/data/clients/",permalink:"/docs/1.15/development/frontend/data/clients/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/frontend/components/clients.md",tags:[],version:"1.15",frontMatter:{id:"frontend-data-clients",title:"Backend interactions",sidebar_label:"Backend interactions",slug:"/development/frontend/data/clients/"},sidebar:"dev",previous:{title:"Data store & Request",permalink:"/docs/1.15/development/frontend/data/ui-data/"},next:{title:"Internationalization",permalink:"/docs/1.15/development/frontend/view/international/"}},d={},l=[{value:"Description",id:"description",level:2},{value:"How to",id:"how-to",level:2},{value:"Create your client",id:"create-your-client",level:3},{value:"1. Create the ModelClient.js",id:"1-create-the-modelclientjs",level:4},{value:"2. Link the reducer to the global application reducers.",id:"2-link-the-reducer-to-the-global-application-reducers",level:4},{value:"3. Use your client into a React container",id:"3-use-your-client-into-a-react-container",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["As explain in the general frontend archicteture (",(0,o.jsx)(n.a,{href:"/docs/1.15/development/frontend/data/ui-data/",children:"REGARDS UI data"}),"), REGARDS is based on Redux and Redux API middleware librairies to fetch network data and store it. This page instantiate a client using client definitions from ",(0,o.jsx)(n.code,{children:"@regardsoss/client"}),", that defines most of existing REGARDS endpoints"]}),"\n",(0,o.jsx)(n.h2,{id:"how-to",children:"How to"}),"\n",(0,o.jsx)(n.h3,{id:"create-your-client",children:"Create your client"}),"\n",(0,o.jsxs)(n.p,{children:["First of all you have to create a ",(0,o.jsx)(n.code,{children:"client.js"})," file to define the 3 ",(0,o.jsx)(n.code,{children:"Redux"})," standard notions:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"reducers : To reduce response results into an object to save in the store"}),"\n",(0,o.jsx)(n.li,{children:"actions : To send requests"}),"\n",(0,o.jsx)(n.li,{children:"selectors : To read results from the store"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The example bellow illustrates how to create a ",(0,o.jsx)(n.code,{children:"ModelClient.js"})," to request models from rs-dam."]}),"\n",(0,o.jsx)(n.h4,{id:"1-create-the-modelclientjs",children:"1. Create the ModelClient.js"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import { DataManagementClient } from '@regardsoss/client'\n\nconst ENTITIES_STORE_PATH = ['example', 'data-management', 'model-management', 'model']\nconst REDUX_ACTION_NAMESPACE = 'admin-data-model-management'\n\nconst modelReducer = DataManagementClient.ModelReducer(REDUX_ACTION_NAMESPACE)\nconst modelActions = new DataManagementClient.ModelActions(REDUX_ACTION_NAMESPACE)\nconst modelSelectors = DataManagementClient.ModelSelectors(ENTITIES_STORE_PATH)\n\nexport default {\n  modelReducer,\n  modelActions,\n  modelSelectors,\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Notes :"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"ENTITIES_STORE_PATH : Is the full path into redux store to store backend responses."}),"\n",(0,o.jsx)(n.li,{children:"REDUX_ACTION_NAMESPACE : Name of the action sent to redux. It must be unique among all application clients to avoid multiple reducers handling the same actions."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"2-link-the-reducer-to-the-global-application-reducers",children:"2. Link the reducer to the global application reducers."}),"\n",(0,o.jsx)(n.p,{children:"Add associated reducers to your module reducers :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import { combineReducers } from 'redux'\nimport { modelReducer } from 'ModelClient'\n\nconst modelDataManagementReducer = combineReducers({\n  model: modelReducer,\n})\n\nexport default modelDataManagementReducer\n"})}),"\n",(0,o.jsx)(n.h4,{id:"3-use-your-client-into-a-react-container",children:"3. Use your client into a React container"}),"\n",(0,o.jsx)(n.p,{children:"The example demonstrates how to send a request for all model then display the retrieved list."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import { modelActions, modelSelectors } from 'ModelClient'\nimport { DataManagementShapes } from '@regardsoss/shape'\n\nexport class ExampleContainer extends React.component {\n\n  static propTypes = {\n    // from mapStateToProps\n    modelList: DataManagementShapes.ModelList,\n    // from mapDispatchToProps\n    fetchModelList: PropTypes.func,\n  }\n  \n  componentDidMount() {\n    // send the request\n    this.props.fetchModelList()\n  }\n  \n  render() {\n    return (\n      <ul>\n        {map(modelList, (model, i) => (\n          <li>{model.content.name}</li>\n        ))}\n      </ul>)\n  }\n}\n\nconst mapStateToProps = state => ({\n  modelList: modelSelectors.getList(state), // retrieve the request result\n})\nconst mapDispatchToProps = dispatch => ({\n  fetchModelList: () => dispatch(modelActions.fetchEntityList()), // function to perform request\n})\n\nexport default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer)\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);