    |Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|
        |state| `String` |State of the AIP|Available values: REJECTED, VALID, PENDING, DATAFILES_STORED, WRITING_METADATA, STORING_METADATA, STORED, STORAGE_ERROR, PARTIAL_DELETION, DELETED|
        |session| `String` |Retrieves AIPs with a submission date before the provided value||
        |providerId| `String` |Provider id||
        |from| `OffsetDateTime` |Retrieves AIPs with a submission date above the provided value||
        |to| `OffsetDateTime` |Retrieves AIPs with a submission date before the provided value||
        |aipIds| `Set` |A set of AIPs id (included)||
        |aipIdsExcluded| `Set` |A set of AIPs id excluded||
        |tags| `List` |List of tags that AIPs must have to be included||
        |storedOn| `List` |Set of data storage id on which at least one file of the AIP has to be stored||
        |tagsToRemove| `List` |Tags to remove to AIPs||
    {:.table.table-striped}
