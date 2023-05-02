|Path|Type|Description|Constraints|
|:--:|:--:|:---------:|:---------:|
|content[].content.state| `String` |State|Must not be null. Allowed values : GENERATED, STORED, DELETED|
|content[].content.providerId| `String` |Provider id|Must not be blank|
|content[].content.aipId| `String` |AIP id|Must not be blank|
|content[].content.creationDate| `String` |Date of AIP creation|Must not be null|
|content[].content.lastUpdate| `String` |Date of last AIP update|Must not be null|
|content[].content.tags| `Array` |List of tags||
|content[].content.aip| `Object` |Generated AIP|Must not be null|
|content[].content.sessionOwner| `String` |Session owner|Must not be blank|
|content[].content.session| `String` |Session|Must not be blank|
|content[].content.storages| `Array` |List of storage||
|content[].content.categories| `Array` |List of categories||
{:.table.table-striped}
