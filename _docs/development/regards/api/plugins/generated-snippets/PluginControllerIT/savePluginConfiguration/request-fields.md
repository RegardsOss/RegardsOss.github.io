| Path | Type | Description | Constraints |  
| :--: | :--: | :---------: | :---------: |  
| pluginId | `String` | Plugin configuration identifier |  |  
| label | `String` | A label to identify the configuration | Must not be blank |  
| version | `String` | The version of the configuration |  |  
| priorityOrder | `Integer` | The priority order of the configuration | Must not be null |  
| active | `Boolean` | If true, the configuration is active |  |  
| pluginClassName | `String` | The plugin class name |  |  
| interfaceNames | `Array` | The interfaces that implements the @PluginInterace annotation and implemented by the pluginClassName |  |  
| iconUrl | `URL` | Icon of the plugin | It must be an URL to a svg file |  
| parameters | `Array` | The parameters configuration of the plugin |  |  
| parameters[].name | `String` | The parameter name | Must not be null |  
| parameters[].value | `String` | The parameter name |  |  
| parameters[].dynamic | `Boolean` | The parameter is dynamic |  |  
| parameters[].dynamicsValues | `Array` | The set of possible values for the dynamic parameter |  |  
| parameters[].onlyDynamic | `Boolean` | The parameter is only dynamic |  |  

