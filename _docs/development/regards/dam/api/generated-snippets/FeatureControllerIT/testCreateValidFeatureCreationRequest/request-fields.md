    |Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|
        |metadata.storages| `Array` |Target storages||
        |metadata.storages[].pluginBusinessId| `String` |Storage identifier||
        |metadata.storages[].targetTypes| `Array` |List of data object types accepted by this storage location (when storing AIPs)||
        |features[].entityType| `String` |Entity Type||
        |metadata.session| `String` |The session name||
        |metadata.sessionOwner| `String` |The session owner||
        |features[].model| `String` |Model||
        |features[].id| `String` |Technical id||
        |features[].model| `String` |Model||
        |features[].geometry| `Object` |GeoJson Coordinates||
        |features[].properties| `Array` |Properties||
        |features[].files[].locations[].storage| `String` |Storage||
        |features[].files[].locations[].url| `String` |Url location||
        |features[].files[].attributes.dataType| `String` |Data type||
        |features[].files[].attributes.mimeType| `String` |Media type||
        |features[].files[].attributes.filename| `String` |File name||
        |features[].files[].attributes.filesize| `Number` |File size||
        |features[].files[].attributes.algorithm| `String` |Algorith for checksum computation||
        |features[].files[].attributes.checksum| `String` |Checksum||
    {:.table.table-striped}
