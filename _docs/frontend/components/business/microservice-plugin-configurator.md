---
layout: classic-docs
title: regardsoss/business-components/microservice-plugin-configurator
short-title: Microservice plugin configurator
---

{% include toc.md %}

# Description

This business component is common standard tool to render a configurator form for any plugin of any microservice.  
This component uses the standard plugin API of any microservice to retrieve plugins meta informations needed for configuration.

# PluginFormContainer

Component to display a plugin form editor


```jsx
import { PluginFormContainer } from '@regardsoss/microservice-plugin-configurator'
import { DataManagementShapes } from '@regardsoss/shape'

export class ExampleContainer extends React.component {

	static propTypes = {}
	
	render() {
		return (
			<PluginFormContainer
				microserviceName='rs-catalog' // Microservice of the plugin to configure
				pluginId='' // Plugin unique identifier to configure
				pluginConfigurationId='' // Only for edition of an existing plugin configuration
				formMode='create||edit||copy'
				backUrl='' // Return route (back button on editor bottom)
			/>
		)
	}
}
```

# PluginListContainer

Component to display a select field containing all possible plugin implemtations of a given plugin type.

```jsx
import { PluginFormContainer } from '@regardsoss/microservice-plugin-configurator'
import { DataManagementShapes } from '@regardsoss/shape'

export class ExampleContainer extends React.component {

	static propTypes = {}
	
	onPluginSelection = (pluginDefinition) => {
		console.info('selected plugin',pluginDefinition.id)
	}
	
	render() {
		return (
			<PluginListContainer
				title='' // Title of the list
				selectLabel='' // Hint text of the select field
				microserviceName='rs-catalog' // Microservice of the plugin type
				pluginType='' // Plugin type
				selectedPluginId='' // Default selected plugin identifier
				handleSelect={this.onPluginSelection} // Function callback when a plugin implemtentation is selected.
				errorText='' // error message to display on top of the list or null if no error.
			/>
		)
	}
}
```
