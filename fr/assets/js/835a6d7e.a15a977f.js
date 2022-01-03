"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[67305],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44153:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"frontend-data-ui",title:"REGARDS UI data",sidebar_label:"Data store & Request",slug:"/development/frontend/data/ui-data/"},d=void 0,l={unversionedId:"development/frontend/frontend-data-ui",id:"version-1.6.0/development/frontend/frontend-data-ui",isDocsHomePage:!1,title:"REGARDS UI data",description:"Data management in REGARDS UI",source:"@site/versioned_docs/version-1.6.0/development/frontend/data.md",sourceDirName:"development/frontend",slug:"/development/frontend/data/ui-data/",permalink:"/fr/docs/1.6.0/development/frontend/data/ui-data/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/frontend/data.md",tags:[],version:"1.6.0",frontMatter:{id:"frontend-data-ui",title:"REGARDS UI data",sidebar_label:"Data store & Request",slug:"/development/frontend/data/ui-data/"},sidebar:"version-1.6.0/dev",previous:{title:"Index",permalink:"/fr/docs/1.6.0/development/frontend/introduction/index/"},next:{title:"Backend interactions",permalink:"/fr/docs/1.6.0/development/frontend/data/clients/"}},p=[{value:"Data management in REGARDS UI",id:"data-management-in-regards-ui",children:[]},{value:"Data",id:"data",children:[{value:"API",id:"api",children:[]},{value:"Client",id:"client",children:[]},{value:"Domain",id:"domain",children:[]},{value:"Shape",id:"shape",children:[]},{value:"Store",id:"store",children:[]}]}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"data-management-in-regards-ui"},"Data management in REGARDS UI"),(0,o.kt)("p",null,"REGARDS frontend uses ",(0,o.kt)("a",{parentName:"p",href:"http://redux.js.org/"},"Redux")," to centralize and manage data. It also setups some middlewares above it, discuss later on. One of those middleware, ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/redux-api-middleware"},"Redux API middleware"),", is transforming Redux actions holding a ",(0,o.kt)("inlineCode",{parentName:"p"},"RSAA")," field into network requests. Those actions define indeed 3 actions, that will be reduced normally by the reducer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\*_REQUEST"),": A request action. It is the action that gets really progated when dispatching an RSAA action. REGARDS reducers will, most of the time, mark the data ",(0,o.kt)("inlineCode",{parentName:"li"},"fetching"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\*_SUCESS"),": A request success action. It is propagated by the API middleware. REGARDS reducers will, most of the time, mark the data ",(0,o.kt)("inlineCode",{parentName:"li"},"no longer fetching")," and store fetching results."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\*_FAILURE"),": A request failure action. It is propagated by the API middleware. REGARDS reducers will, most of the time, mark the data ",(0,o.kt)("inlineCode",{parentName:"li"},"no longer fetching and in error")," and store error data.")),(0,o.kt)("p",null,"Due to that system, REGARDS fetches and displays data as following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Dispatch a RSAA action, that will fetch data thanks to Redux API middleware."),(0,o.kt)("li",{parentName:"ol"},"Receive and reduce, using Redux reducer, the action result. That requires the reducer to be registed. Note: reduce means here that data result is optionnaly converted then stored in Redux store."),(0,o.kt)("li",{parentName:"ol"},"Use selector to retrieve data and/or error in redux store and provide it to the components.")),(0,o.kt)("h2",{id:"data"},"Data"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"webapp\\web_modules\\data")," folder holds data management systems related to the behavior previously explained. Each aspect of that behavior has been split into a single responsability module."),(0,o.kt)("h3",{id:"api"},"API"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"webapp\\web_modules\\data\\api")," module holds conversion systems. In REGARDS frontend, the backend data conversion into frontend model is performed using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paularmstrong/normalizr"},"Normalizr"),". That conversion consists most of the time in:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"transforming arrays into maps, where objects keys are their database identifier"),(0,o.kt)("li",{parentName:"ul"},"resolving any unadequate type like raw JSON into equivalent JS object that can be used easier in frontend code.  ")),(0,o.kt)("p",null,"That module contains required Normalizr schemas and configurations to convert all backend results in application. They are dispatched into folders named after the corresponding microservice."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Normalizr schema and configuration example. We define here the converter for an order files (webapp/web_modules/data/api/src/order/OrderFile.js):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Schema, arrayOf } from 'normalizr'\n\nconst OrderFileConfiguration = {\n  entityKey: 'id', // ID field returned by the backend\n  normalizrKey: 'orderFiles', // key for entities map in redux store\n}\n\nconst order = new Schema(OrderFileConfiguration.normalizrKey, {\n  idAttribute: entity => // transform array into map by object ID\n    entity.content[OrderFileConfiguration.entityKey]\n  ,\n})\n\n// Schemas for API responses.\nmodule.exports = {\n  ORDER_FILE: order,\n  ORDER_FILE_ARRAY: arrayOf(order),\n  OrderFileConfiguration,\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Normalizr use example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { normalize } from 'normalizr'\nimport { ORDER_FILE_ARRAY } from '@regardsoss/api'\n  \n  // ...\n  normalize(backendResults, this.schemaTypes.ORDER_FILE_ARRAY)\n  // ...\n")),(0,o.kt)("h3",{id:"client"},"Client"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"webapp\\web_modules\\data\\client")," module holds actions to dispatch in order to fetch data on server with corresponding reducers and selectors. The actions build indeed the RSAA actions mentioned before, although most of the time they are hidden by the REGARDS abstraction classes from store-utils (BasicListActions, BasicSignalActions, ...). Clients are dispatched into folders named after the corresponding microservice."),(0,o.kt)("p",null,"Recently, REGARDS UI developers have been adding all backend related clients in this module. Thus that is currently considered as the good practice. However, some legacy actions/reducer/selectors working with server can still be encountered in other modules."),(0,o.kt)("p",null,"Note: Client module also holds front-end only actions/reudcer/selectors, that are not performing any network request, for the specific cases of complex components and modules that need to share a state through Redux store."),(0,o.kt)("h3",{id:"domain"},"Domain"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"webapp\\web_modules\\data\\domain")," module holds constants and enumeration corresponding to server results. Those constants are meant to be used in presentation code, providing an abstraction layer when dealing with states, types, and so on. They are dispatched into folders named after the corresponding microservice."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Order files status enumeration and enumeration values example - note that values array is especially useful for prop types: ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// webapp/web_modules/data/domain/order/OrderFileStatus.js\nimport values from 'lodash/values'\n\nexport const ORDER_FILE_STATUS_ENUM = {\n  PENDING: 'PENDING',\n  AVAILABLE: 'AVAILABLE',\n  ONLINE: 'ONLINE',\n  DOWNLOADED: 'DOWNLOADED',\n  DOWNLOAD_ERROR: 'DOWNLOAD_ERROR',\n  ERROR: 'ERROR',\n}\n\nexport const ORDER_FILE_STATUS = values(ORDER_FILE_STATUS_ENUM)\n")),(0,o.kt)("h3",{id:"shape"},"Shape"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"webapp\\web_modules\\data\\shape")," module holds shapes of server fetching results ",(0,o.kt)("inlineCode",{parentName:"p"},"after conversion"),". Those shapes are meant to be used as components ",(0,o.kt)("inlineCode",{parentName:"p"},"propTypes")," - see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/prop-types"},"PropTypes")," - and ensure the server and converters provided the expected result. When not matching, the PropTypes API raises a warning through console."),(0,o.kt)("p",null,"Note: PropTypes are removed in production mode to avoid lowering runtime performances."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Order file shape example:")," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// webapp/web_modules/data/shape/src/rs-order/OrderFile.js\nimport values from 'lodash/values'\nimport { OrderDomain } from '@regardsoss/domain'\nimport { dataFileFields } from '../rs-dam/DataFile'\n\n/** Raw shape */\nexport const OrderFile = PropTypes.shape({\n  id: PropTypes.number.isRequired,\n  orderId: PropTypes.number.isRequired,\n  state: PropTypes.oneOf(OrderDomain.ORDER_FILE_STATUS),\n  ...dataFileFields,\n})\n\n/** Object as returned by server (content / links) */\nexport const OrderFileWithContent = PropTypes.shape({\n  content: OrderFile,\n})\n\n/** Converted results as reduced in pages maps  */\nexport const OrderFilesList = PropTypes.objectOf(OrderFileWithContent)\n")),(0,o.kt)("h3",{id:"store"},"Store"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"webapp\\web_modules\\data\\store")," module holds Redux store configuration and corresponding tools:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Store configuration (webapp/web_modules/data/store/src/configureStore.js): Configures REGARDS UI store to set up required middlewares. It is called at application start, no matter the application. The complete list of magical middlewares set up here is:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"thunk"),": allows dispatching condition actions (reports results evaluation), required when working with RSAA actions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SessionLockedMiddleware"),": handles automatically locking session"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"formatURLMiddleware"),": escapes invalid URL characters in requests"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"headersMiddleware"),": appends authentication, scope and accept type headers on requests"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"apiMiddleware"),": transforms actions with RSAA field into network requests, as mentioned before."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"errorMiddleware"),": catches RSAA failure actions to show user an error message"))),(0,o.kt)("li",{parentName:"ul"},"Custom middlewares mentionned above"),(0,o.kt)("li",{parentName:"ul"},"Reducers registering tools")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example: how the middlewares are initialized using store module")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// webapp/src/main.jsx\nimport * as ReactDOM from 'react-dom'\nimport { Router, browserHistory } from 'react-router'\nimport { Provider } from 'react-redux'\nimport { configureStore } from '@regardsoss/store'\nimport rootReducer from './rootReducer'\nimport rootRouter from './rootRouter'\nimport './cdppResources'\n// ...\nconst store = configureStore(rootReducer)\n\nReactDOM.render(\n  <Provider store={store}>\n    { /* ... */ }\n  </Provider>,\n  document.getElementById('app'),\n)\n")))}c.isMDXComponent=!0}}]);