|Path|Type|Description|Constraints|
|:--:|:--:|:---------:|:---------:|
|id| `Long` |Unique identifier||
|pluginId| `String` |Plugin configuration identifier||
|label| `String` |A label to identify the configuration|Must not be blank|
|version| `String` |The version of the configuration||
|priorityOrder| `Integer` |The priority order of the configuration|Must not be null|
|active| `Boolean` |If true, the configuration is active||
|iconUrl| `URL` |Icon of the plugin|It must be an URL to a svg file|
|parameters| `Array` |The parameters configuration of the plugin||
|parameters[].name| `String` |The parameter name|Must not be blank|
|parameters[].value| `String` |The parameter name||
|parameters[].dynamic| `Boolean` |The parameter is dynamic||
{:.table.table-striped}
