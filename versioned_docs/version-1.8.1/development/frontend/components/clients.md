---
id: frontend-data-clients
title: Backend interactions
sidebar_label: Backend interactions
slug: /development/frontend/data/clients/
---


## Description

As explain in the general frontend archicteture ([REGARDS UI data](../ui-data/) page), REGARDS is based on Redux and Redux API middleware librairies to fetch network data and store it. This page instantiate a client using client definitions from `@regardsoss/client`, that defines most of existing REGARDS endpoints

## How to

### Create your client

First of all you have to create a `client.js` file to define the 3 `Redux` standard notions:
 - reducers : To reduce response results into an object to save in the store
 - actions : To send requests
 - selectors : To read results from the store
 
The example bellow illustrates how to create a `ModelClient.js` to request models from rs-dam.

#### 1\. Create the ModelClient.js
```js
import { DataManagementClient } from '@regardsoss/client'

const ENTITIES_STORE_PATH = ['example', 'data-management', 'model-management', 'model']
const REDUX_ACTION_NAMESPACE = 'admin-data-model-management'

const modelReducer = DataManagementClient.ModelReducer(REDUX_ACTION_NAMESPACE)
const modelActions = new DataManagementClient.ModelActions(REDUX_ACTION_NAMESPACE)
const modelSelectors = DataManagementClient.ModelSelectors(ENTITIES_STORE_PATH)

export default {
  modelReducer,
  modelActions,
  modelSelectors,
}
```

Notes : 
 - ENTITIES_STORE_PATH : Is the full path into redux store to store backend responses.
 - REDUX_ACTION_NAMESPACE : Name of the action sent to redux. It must be unique among all application clients to avoid multiple reducers handling the same actions.
 
#### 2\. Link the reducer to the global application reducers.

Add associated reducers to your module reducers :
```js
import { combineReducers } from 'redux'
import { modelReducer } from 'ModelClient'

const modelDataManagementReducer = combineReducers({
  model: modelReducer,
})

export default modelDataManagementReducer
```

#### 3\. Use your client into a React container

The example demonstrates how to send a request for all model then display the retrieved list.
 
```jsx
import { modelActions, modelSelectors } from 'ModelClient'
import { DataManagementShapes } from '@regardsoss/shape'

export class ExampleContainer extends React.component {

  static propTypes = {
    // from mapStateToProps
    modelList: DataManagementShapes.ModelList,
    // from mapDispatchToProps
    fetchModelList: PropTypes.func,
  }
  
  componentDidMount() {
    // send the request
    this.props.fetchModelList()
  }
  
  render() {
    return (
      <ul>
        {map(modelList, (model, i) => (
          <li>{model.content.name}</li>
        ))}
      </ul>)
  }
}

const mapStateToProps = state => ({
  modelList: modelSelectors.getList(state), // retrieve the request result
})
const mapDispatchToProps = dispatch => ({
  fetchModelList: () => dispatch(modelActions.fetchEntityList()), // function to perform request
})

export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer)
```
