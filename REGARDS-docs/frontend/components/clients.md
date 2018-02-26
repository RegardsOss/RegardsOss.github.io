---
layout: classic-docs
title: Backend interactions
short-title: Backend interactions
---

## Description

As explain in the general frontend archicteture ([Architecture](/frontend/arch.md/)), the `webapp/web_modules/data` section is used to send request to the backend microservices.

## How to

Due to the use of the `Redux` library our clients store request responses into the global `store` of the application.  
So, with the here under explanations you can define a specific part into this `store` to save your wanted request responses from the microservices backend.  

The   `webapp/web_modules/data/client` section allow you to interact most of all existing endpoints on all REGARDS standard microservices :
  - rs-access-instance
  - rs-access-project
  - rs-authentication
  - rs-admin
  - rs-admin-instance
  - rs-catalog
  - rs-dam
  - rs-dataprovider
  - rs-ingest
  - rs-order
  - rs-storage
  

### Create your client

First of all you have to create a `client.js` to defined the 3 `Redux` standard notions : 
 - reducers : To reduce response results into the store
 - actions : To send requests
 - selectors : To read results from the store
 
The example bellow show you how to create a `ModelClient.js` to request models from rs-dam.

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
 - REDUX_ACTION_NAMESPACE : Name of the action sent to redux.
 
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

### Use your client into your React container

The example bellow do :
 - Send request to rs-dam to request all models
 - When response is retrieved, display a list of all models.
 
 
```js
import { modelActions, modelSelectors } from 'ModelClient'
import { DataManagementShapes } from '@regardsoss/shape'

export class ExampleContainer extends React.component {

	static propTypes = {
		// from mapStateToProps
    	modelList: DataManagementShapes.ModelList,
    	// from mapDispatchToProps
    	fetchModelList: PropTypes.func,
	}
	
	componentWillMount() {
    	this.props.fetchModelList()
  	}
	
	render() {
	  return (
	  	<ul>
	  		{map(modelList, (model, i) => (
	  			<li>model.content.name</li>
	  		))}
	  	</ul>
	  )
	}

}

const mapStateToProps = state => ({
  modelList: modelSelectors.getList(state),
})
const mapDispatchToProps = dispatch => ({
  fetchModelList: () => dispatch(modelActions.fetchEntityList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer)
```
