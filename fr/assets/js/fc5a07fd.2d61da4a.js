(window.webpackJsonp=window.webpackJsonp||[]).push([[2593],{2667:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),o=(n(0),n(2708)),i={id:"frontend-data-ui",title:"REGARDS UI data",sidebar_label:"Data store & Request",slug:"/development/frontend/data/ui-data/"},s={unversionedId:"development/frontend/frontend-data-ui",id:"development/frontend/frontend-data-ui",isDocsHomePage:!1,title:"REGARDS UI data",description:"Data management in REGARDS UI",source:"@site/docs/development/frontend/data.md",slug:"/development/frontend/data/ui-data/",permalink:"/fr/docs/development/frontend/data/ui-data/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/data.md",version:"current",sidebar_label:"Data store & Request",sidebar:"dev",previous:{title:"How to develop new features",permalink:"/fr/docs/development/frontend/introduction/index/"},next:{title:"Backend interactions",permalink:"/fr/docs/development/frontend/data/clients/"}},d=[{value:"Data management in REGARDS UI",id:"data-management-in-regards-ui",children:[]},{value:"Data",id:"data",children:[{value:"API",id:"api",children:[]},{value:"Client",id:"client",children:[]},{value:"Domain",id:"domain",children:[]},{value:"Shape",id:"shape",children:[]},{value:"Store",id:"store",children:[]}]}],l={toc:d};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"data-management-in-regards-ui"},"Data management in REGARDS UI"),Object(o.b)("p",null,"REGARDS frontend uses ",Object(o.b)("a",{parentName:"p",href:"http://redux.js.org/"},"Redux")," to centralize and manage data. It also setups some middlewares above it, discuss later on. One of those middleware, ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/redux-api-middleware"},"Redux API middleware"),", is transforming Redux actions holding a ",Object(o.b)("inlineCode",{parentName:"p"},"RSAA")," field into network requests. Those actions define indeed 3 actions, that will be reduced normally by the reducer:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"\\*_REQUEST"),": A request action. It is the action that gets really progated when dispatching an RSAA action. REGARDS reducers will, most of the time, mark the data ",Object(o.b)("inlineCode",{parentName:"li"},"fetching"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"\\*_SUCESS"),": A request success action. It is propagated by the API middleware. REGARDS reducers will, most of the time, mark the data ",Object(o.b)("inlineCode",{parentName:"li"},"no longer fetching")," and store fetching results."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"\\*_FAILURE"),": A request failure action. It is propagated by the API middleware. REGARDS reducers will, most of the time, mark the data ",Object(o.b)("inlineCode",{parentName:"li"},"no longer fetching and in error")," and store error data.")),Object(o.b)("p",null,"Due to that system, REGARDS fetches and displays data as following:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Dispatch a RSAA action, that will fetch data thanks to Redux API middleware."),Object(o.b)("li",{parentName:"ol"},"Receive and reduce, using Redux reducer, the action result. That requires the reducer to be registed. Note: reduce means here that data result is optionnaly converted then stored in Redux store."),Object(o.b)("li",{parentName:"ol"},"Use selector to retrieve data and/or error in redux store and provide it to the components.")),Object(o.b)("h2",{id:"data"},"Data"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"webapp\\web_modules\\data")," folder holds data management systems related to the behavior previously explained. Each aspect of that behavior has been split into a single responsability module."),Object(o.b)("h3",{id:"api"},"API"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"webapp\\web_modules\\data\\api")," module holds conversion systems. In REGARDS frontend, the backend data conversion into frontend model is performed using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/paularmstrong/normalizr"},"Normalizr"),". That conversion consists most of the time in:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"transforming arrays into maps, where objects keys are their database identifier"),Object(o.b)("li",{parentName:"ul"},"resolving any unadequate type like raw JSON into equivalent JS object that can be used easier in frontend code.  ")),Object(o.b)("p",null,"That module contains required Normalizr schemas and configurations to convert all backend results in application. They are dispatched into folders named after the corresponding microservice."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Normalizr schema and configuration example. We define here the converter for an order files (webapp/web_modules/data/api/src/order/OrderFile.js):")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Schema, arrayOf } from 'normalizr'\n\nconst OrderFileConfiguration = {\n  entityKey: 'id', // ID field returned by the backend\n  normalizrKey: 'orderFiles', // key for entities map in redux store\n}\n\nconst order = new Schema(OrderFileConfiguration.normalizrKey, {\n  idAttribute: entity => // transform array into map by object ID\n    entity.content[OrderFileConfiguration.entityKey]\n  ,\n})\n\n// Schemas for API responses.\nmodule.exports = {\n  ORDER_FILE: order,\n  ORDER_FILE_ARRAY: arrayOf(order),\n  OrderFileConfiguration,\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Normalizr use example:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { normalize } from 'normalizr'\nimport { ORDER_FILE_ARRAY } from '@regardsoss/api'\n  \n  // ...\n  normalize(backendResults, this.schemaTypes.ORDER_FILE_ARRAY)\n  // ...\n")),Object(o.b)("h3",{id:"client"},"Client"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"webapp\\web_modules\\data\\client")," module holds actions to dispatch in order to fetch data on server with corresponding reducers and selectors. The actions build indeed the RSAA actions mentioned before, although most of the time they are hidden by the REGARDS abstraction classes from store-utils (BasicListActions, BasicSignalActions, ...). Clients are dispatched into folders named after the corresponding microservice."),Object(o.b)("p",null,"Recently, REGARDS UI developers have been adding all backend related clients in this module. Thus that is currently considered as the good practice. However, some legacy actions/reducer/selectors working with server can still be encountered in other modules."),Object(o.b)("p",null,"Note: Client module also holds front-end only actions/reudcer/selectors, that are not performing any network request, for the specific cases of complex components and modules that need to share a state through Redux store."),Object(o.b)("h3",{id:"domain"},"Domain"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"webapp\\web_modules\\data\\domain")," module holds constants and enumeration corresponding to server results. Those constants are meant to be used in presentation code, providing an abstraction layer when dealing with states, types, and so on. They are dispatched into folders named after the corresponding microservice."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Order files status enumeration and enumeration values example - note that values array is especially useful for prop types: ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// webapp/web_modules/data/domain/order/OrderFileStatus.js\nimport values from 'lodash/values'\n\nexport const ORDER_FILE_STATUS_ENUM = {\n  PENDING: 'PENDING',\n  AVAILABLE: 'AVAILABLE',\n  ONLINE: 'ONLINE',\n  DOWNLOADED: 'DOWNLOADED',\n  DOWNLOAD_ERROR: 'DOWNLOAD_ERROR',\n  ERROR: 'ERROR',\n}\n\nexport const ORDER_FILE_STATUS = values(ORDER_FILE_STATUS_ENUM)\n")),Object(o.b)("h3",{id:"shape"},"Shape"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"webapp\\web_modules\\data\\shape")," module holds shapes of server fetching results ",Object(o.b)("inlineCode",{parentName:"p"},"after conversion"),". Those shapes are meant to be used as components ",Object(o.b)("inlineCode",{parentName:"p"},"propTypes")," - see ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/prop-types"},"PropTypes")," - and ensure the server and converters provided the expected result. When not matching, the PropTypes API raises a warning through console."),Object(o.b)("p",null,"Note: PropTypes are removed in production mode to avoid lowering runtime performances."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Order file shape example:")," "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// webapp/web_modules/data/shape/src/rs-order/OrderFile.js\nimport values from 'lodash/values'\nimport { OrderDomain } from '@regardsoss/domain'\nimport { dataFileFields } from '../rs-dam/DataFile'\n\n/** Raw shape */\nexport const OrderFile = PropTypes.shape({\n  id: PropTypes.number.isRequired,\n  orderId: PropTypes.number.isRequired,\n  state: PropTypes.oneOf(OrderDomain.ORDER_FILE_STATUS),\n  ...dataFileFields,\n})\n\n/** Object as returned by server (content / links) */\nexport const OrderFileWithContent = PropTypes.shape({\n  content: OrderFile,\n})\n\n/** Converted results as reduced in pages maps  */\nexport const OrderFilesList = PropTypes.objectOf(OrderFileWithContent)\n")),Object(o.b)("h3",{id:"store"},"Store"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"webapp\\web_modules\\data\\store")," module holds Redux store configuration and corresponding tools:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Store configuration (webapp/web_modules/data/store/src/configureStore.js): Configures REGARDS UI store to set up required middlewares. It is called at application start, no matter the application. The complete list of magical middlewares set up here is:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"thunk"),": allows dispatching condition actions (reports results evaluation), required when working with RSAA actions"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SessionLockedMiddleware"),": handles automatically locking session"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"formatURLMiddleware"),": escapes invalid URL characters in requests"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"headersMiddleware"),": appends authentication, scope and accept type headers on requests"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"apiMiddleware"),": transforms actions with RSAA field into network requests, as mentioned before."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"errorMiddleware"),": catches RSAA failure actions to show user an error message"))),Object(o.b)("li",{parentName:"ul"},"Custom middlewares mentionned above"),Object(o.b)("li",{parentName:"ul"},"Reducers registering tools")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example: how the middlewares are initialized using store module")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// webapp/src/main.jsx\nimport * as ReactDOM from 'react-dom'\nimport { Router, browserHistory } from 'react-router'\nimport { Provider } from 'react-redux'\nimport { configureStore } from '@regardsoss/store'\nimport rootReducer from './rootReducer'\nimport rootRouter from './rootRouter'\nimport './cdppResources'\n// ...\nconst store = configureStore(rootReducer)\n\nReactDOM.render(\n  <Provider store={store}>\n    { /* ... */ }\n  </Provider>,\n  document.getElementById('app'),\n)\n")))}c.isMDXComponent=!0},2708:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);