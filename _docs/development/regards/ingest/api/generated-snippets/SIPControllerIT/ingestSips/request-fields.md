    |Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|
        |metadata.ingestChain| `String` |The ingest processing chain to used||
        |metadata.session| `String` |The ingestion session name||
        |metadata.sessionOwner| `String` |The ingestion session source||
        |metadata.storages| `Array` |Target storages||
        |metadata.storages[].pluginBusinessId| `String` |Storage identifier||
        |metadata.storages[].targetTypes| `Array` |List of data object types accepted by this storage location (when storing AIPs)||
        |type| `String` |Feature collection|Must not be null|
        |features| `Array` |Array of feature||
        |features[].id| `String` |SIP id||
        |features[].ipType| `String` |GeoJson type representation - RFC 7946 -August 2016|Must not be null|
        |features[].geometry| `Object` |GeoJson base feature representation - RFC 7946 -August 2016||
        |features[].bbox| `Array` |An optional bounding box||
        |features[].properties| `Object` |properties||
        |features[].properties.contentInformations[]| `Array` |A set of information that is the original target of preservation or that includes part or all of that information. It is an information object composed of its content data object and its representation information.||
        |features[].properties.contentInformations[].representationInformation| `Object` |The information that maps a data object into more meaningful concepts.|Must not be null|
        |features[].properties.contentInformations[].representationInformation.syntax| `Object` |A data objet syntax|Must not be null|
        |features[].properties.contentInformations[].representationInformation.syntax.name| `String` |A syntax name||
        |features[].properties.contentInformations[].representationInformation.syntax.description| `String` |A description||
        |features[].properties.contentInformations[].representationInformation.syntax.mimeType| `String` |A two-part identifier for file formats and format contents||
        |features[].properties.contentInformations[].dataObject| `Object` |A data object|Must not be null|
        |features[].properties.contentInformations[].dataObject.regardsDataType| `String` |REGARDS data object type|Must not be null. Allowed values : RAWDATA, QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD, DOCUMENT, THUMBNAIL, OTHER, AIP, DESCRIPTION|
        |features[].properties.contentInformations[].dataObject.filename| `String` |The data object file name|Must not be blank|
        |features[].properties.contentInformations[].dataObject.locations| `Array` |A set of locations|Must not be empty|
        |features[].properties.contentInformations[].dataObject.locations[].url| `String` |URL location associated to optional storage property||
        |features[].properties.contentInformations[].dataObject.fileSize| `Long` |The data object size in bytes||
        |features[].properties.contentInformations[].dataObject.checksum| `String` |The calculated data object checksum||
        |features[].properties.contentInformations[].dataObject.algorithm| `String` |The checksum algorithm used|see https://docs.oracle.com/javase/8/docs/api/java/security/MessageDigest.html[java.security.MessageDigest]|
        |features[].properties.pdi| `Object` |The information which is necessary for adequate preservation of the Content Information|Must not be null|
        |features[].properties.pdi.contextInformation.tags[]| `Array` |A set of tags||
        |features[].properties.pdi.referenceInformation| `Object` |additional identifier||
        |features[].properties.pdi.fixityInformation| `Object` |The information which documents the mechanisms that ensure that the content information object has not been altered in an undocumented manner. An example is a Cyclical Redundancy Check (CRC) code for a file. |Must not be null|
        |features[].properties.pdi.provenanceInformation| `Object` |The information that documents the history of the content information|Must not be null|
        |features[].properties.pdi.provenanceInformation.history[]| `String` |A list of events|Must not be null|
        |features[].properties.pdi.provenanceInformation.history[].type| `String` |The event's type||
        |features[].properties.pdi.provenanceInformation.history[].comment| `String` |The event's comment||
        |features[].properties.pdi.provenanceInformation.history[].date| `String` |ISO Date time|Must not be null. . Required format : yyyy-MM-dd’T’HH:mm:ss.SSSZ|
        |features[].properties.pdi.provenanceInformation.facility| `String` |A facility||
        |features[].properties.pdi.provenanceInformation.instrument| `String` |An instrument||
        |features[].properties.pdi.provenanceInformation.filter| `String` |A filter||
        |features[].properties.pdi.provenanceInformation.detector| `String` |A detector||
        |features[].properties.pdi.provenanceInformation.proposal| `String` |A proposal||
        |features[].properties.pdi.provenanceInformation.additional| `String` |An additional information||
        |features[].properties.pdi.accessRightInformation| `Object` |The information that identifies the access restrictions pertaining to the content information, including the legal framework, licensing terms, and access control.|Must not be null|
        |features[].properties.pdi.accessRightInformation.licence| `String` |The licence||
        |features[].properties.pdi.accessRightInformation.dataRights| `String` |A data access rights|Must not be null|
        |features[].properties.pdi.accessRightInformation.publicReleaseDate| `String` |ISO Date time|Required format : yyyy-MM-dd’T’HH:mm:ss.SSSZ|
    {:.table.table-striped}
