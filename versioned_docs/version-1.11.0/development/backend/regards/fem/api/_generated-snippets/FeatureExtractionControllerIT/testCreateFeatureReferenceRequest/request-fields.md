|Path|Type|Description|Constraints|
|:--:|:--:|:---------:|:---------:|
|factory| `String` |Extraction plugin business ID|Must not be blank|
|parameters| `Array` |Extraction plugin parameters|Must not be empty|
|metadata.override| `Boolean` |If we want to override previous version||
|metadata.session| `String` |The session name||
|metadata.sessionOwner| `String` |The session owner||
|metadata.storages| `Array` |Target storages||
|metadata.storages[].pluginBusinessId| `String` |Storage identifier||
{:.table.table-striped}
