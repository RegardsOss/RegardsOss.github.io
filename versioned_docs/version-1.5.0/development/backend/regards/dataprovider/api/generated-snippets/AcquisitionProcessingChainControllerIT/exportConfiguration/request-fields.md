    |Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|
        |label| `String` |Label|Must not be blank|
        |active| `Boolean` |Activation status|Must not be null|
        |mode| `String` |Mode|Must not be null. Allowed values : MANUAL, AUTO|
        |session| `String` |Ingest session name for SIP submission||
        |categories| `interface java.util.List` |Ingest categories|Must not be null|
        |ingestChain| `String` |Ingest chain name for SIP submission|Must not be blank|
        |locked| `Boolean` |Internal chain processing lock|NA|
        |periodicity| `Long` |Automatic chain activation periodicity in second|Must match the regular expression `0 .*`|
        |fileInfos[]| `Array` |Arrays of file information / TODO||
        |fileInfos[].mandatory| `Boolean` |True if the product must contain this file|Must not be null|
        |fileInfos[].scanPlugin| `Object` |Scan plugin configuration / TODO|Must not be null|
        |fileInfos[].lastModificationDate| `String` |Most recent last modification ISO 8601 date of all scanned files||
        |fileInfos[].mimeType| `String` |File MIME type|Must not be null|
        |fileInfos[].dataType| `String` |REGARDS data type|Must not be null. Allowed values : RAWDATA, QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD, DOCUMENT, THUMBNAIL, OTHER, AIP, DESCRIPTION|
        |fileInfos[].comment| `String` |REGARDS data type||
        |validationPluginConf| `Object` |Validation plugin configuration / TODO|Must not be null|
        |productPluginConf| `Object` |Product plugin configuration / TODO|Must not be null|
        |generateSipPluginConf| `Object` |Generate SIP plugin configuration / TODO|Must not be null|
        |postProcessSipPluginConf| `Object` |Optional SIP post processing plugin configuration / TODO||
    
