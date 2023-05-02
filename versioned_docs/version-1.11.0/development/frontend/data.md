---
id: frontend-data-ui
title: REGARDS UI data
sidebar_label: Data store & Request
slug: /development/frontend/data/ui-data/
---


## Data management in REGARDS UI

REGARDS frontend uses [Redux](http://redux.js.org/) to centralize and manage data. It also setups some middlewares above it, discuss later on. One of those middleware, [Redux API middleware](https://www.npmjs.com/package/redux-api-middleware), is transforming Redux actions holding a `RSAA` field into network requests. Those actions define indeed 3 actions, that will be reduced normally by the reducer:
* `\*_REQUEST`: A request action. It is the action that gets really progated when dispatching an RSAA action. REGARDS reducers will, most of the time, mark the data `fetching`.
* `\*_SUCESS`: A request success action. It is propagated by the API middleware. REGARDS reducers will, most of the time, mark the data `no longer fetching` and store fetching results.
* `\*_FAILURE`: A request failure action. It is propagated by the API middleware. REGARDS reducers will, most of the time, mark the data `no longer fetching and in error` and store error data.

Due to that system, REGARDS fetches and displays data as following:
1. Dispatch a RSAA action, that will fetch data thanks to Redux API middleware.
2. Receive and reduce, using Redux reducer, the action result. That requires the reducer to be registed. Note: reduce means here that data result is optionnaly converted then stored in Redux store.
3. Use selector to retrieve data and/or error in redux store and provide it to the components.

## Data

The `webapp\web_modules\data` folder holds data management systems related to the behavior previously explained. Each aspect of that behavior has been split into a single responsability module.

### API

The `webapp\web_modules\data\api` module holds conversion systems. In REGARDS frontend, the backend data conversion into frontend model is performed using [Normalizr](https://github.com/paularmstrong/normalizr). That conversion consists most of the time in:
* transforming arrays into maps, where objects keys are their database identifier
* resolving any unadequate type like raw JSON into equivalent JS object that can be used easier in frontend code.  

That module contains required Normalizr schemas and configurations to convert all backend results in application. They are dispatched into folders named after the corresponding microservice.


*Normalizr schema and configuration example. We define here the converter for an order files (webapp/web_modules/data/api/src/order/OrderFile.js):*
```js
import { Schema, arrayOf } from 'normalizr'

const OrderFileConfiguration = {
  entityKey: 'id', // ID field returned by the backend
  normalizrKey: 'orderFiles', // key for entities map in redux store
}

const order = new Schema(OrderFileConfiguration.normalizrKey, {
  idAttribute: entity => // transform array into map by object ID
    entity.content[OrderFileConfiguration.entityKey]
  ,
})

// Schemas for API responses.
module.exports = {
  ORDER_FILE: order,
  ORDER_FILE_ARRAY: arrayOf(order),
  OrderFileConfiguration,
}
```

*Normalizr use example:*
```js
import { normalize } from 'normalizr'
import { ORDER_FILE_ARRAY } from '@regardsoss/api'
  
  // ...
  normalize(backendResults, this.schemaTypes.ORDER_FILE_ARRAY)
  // ...
```

### Client 

The `webapp\web_modules\data\client` module holds actions to dispatch in order to fetch data on server with corresponding reducers and selectors. The actions build indeed the RSAA actions mentioned before, although most of the time they are hidden by the REGARDS abstraction classes from store-utils (BasicListActions, BasicSignalActions, ...). Clients are dispatched into folders named after the corresponding microservice.

<!-- TODO link to store utils -->
<!-- TODO Example for Action / reducer / selectors -->

Recently, REGARDS UI developers have been adding all backend related clients in this module. Thus that is currently considered as the good practice. However, some legacy actions/reducer/selectors working with server can still be encountered in other modules.

Note: Client module also holds front-end only actions/reudcer/selectors, that are not performing any network request, for the specific cases of complex components and modules that need to share a state through Redux store.

### Domain

The `webapp\web_modules\data\domain` module holds constants and enumeration corresponding to server results. Those constants are meant to be used in presentation code, providing an abstraction layer when dealing with states, types, and so on. They are dispatched into folders named after the corresponding microservice.

*Order files status enumeration and enumeration values example - note that values array is especially useful for prop types: *
```js
// webapp/web_modules/data/domain/order/OrderFileStatus.js
import values from 'lodash/values'

export const ORDER_FILE_STATUS_ENUM = {
  PENDING: 'PENDING',
  AVAILABLE: 'AVAILABLE',
  ONLINE: 'ONLINE',
  DOWNLOADED: 'DOWNLOADED',
  DOWNLOAD_ERROR: 'DOWNLOAD_ERROR',
  ERROR: 'ERROR',
}

export const ORDER_FILE_STATUS = values(ORDER_FILE_STATUS_ENUM)
```

### Shape

The `webapp\web_modules\data\shape` module holds shapes of server fetching results `after conversion`. Those shapes are meant to be used as components `propTypes` - see [PropTypes](https://github.com/facebook/prop-types) - and ensure the server and converters provided the expected result. When not matching, the PropTypes API raises a warning through console.

Note: PropTypes are removed in production mode to avoid lowering runtime performances.

*Order file shape example:* 
```js
// webapp/web_modules/data/shape/src/rs-order/OrderFile.js
import values from 'lodash/values'
import { OrderDomain } from '@regardsoss/domain'
import { dataFileFields } from '../rs-dam/DataFile'

/** Raw shape */
export const OrderFile = PropTypes.shape({
  id: PropTypes.number.isRequired,
  orderId: PropTypes.number.isRequired,
  state: PropTypes.oneOf(OrderDomain.ORDER_FILE_STATUS),
  ...dataFileFields,
})

/** Object as returned by server (content / links) */
export const OrderFileWithContent = PropTypes.shape({
  content: OrderFile,
})

/** Converted results as reduced in pages maps  */
export const OrderFilesList = PropTypes.objectOf(OrderFileWithContent)
```

### Store

The `webapp\web_modules\data\store` module holds Redux store configuration and corresponding tools:
* Store configuration (webapp/web_modules/data/store/src/configureStore.js): Configures REGARDS UI store to set up required middlewares. It is called at application start, no matter the application. The complete list of magical middlewares set up here is:
  * `thunk`: allows dispatching condition actions (reports results evaluation), required when working with RSAA actions
  * `SessionLockedMiddleware`: handles automatically locking session
  * `formatURLMiddleware`: escapes invalid URL characters in requests
  * `headersMiddleware`: appends authentication, scope and accept type headers on requests
  * `apiMiddleware`: transforms actions with RSAA field into network requests, as mentioned before.
  * `errorMiddleware`: catches RSAA failure actions to show user an error message
* Custom middlewares mentionned above
* Reducers registering tools

*Example: how the middlewares are initialized using store module*
```jsx
// webapp/src/main.jsx
import * as ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { configureStore } from '@regardsoss/store'
import rootReducer from './rootReducer'
import rootRouter from './rootRouter'
import './cdppResources'
// ...
const store = configureStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    { /* ... */ }
  </Provider>,
  document.getElementById('app'),
)
```



