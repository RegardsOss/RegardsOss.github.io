    |Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|
        |requestType| `String` |Request type filter|Optional. Multiple values allowed. Allowed values : INGEST, UPDATE, AIP_UPDATES_CREATOR, STORE_METADATA, OAIS_DELETION, OAIS_DELETION_CREATOR|
        |state| `String` |State|Optional. Multiple values allowed. Allowed values : TO_SCHEDULE, CREATED, BLOCKED, RUNNING, ERROR, ABORTED|
        |stateExcluded| `String` |State excluded (ignored)|Optional. Multiple values allowed. Allowed values : TO_SCHEDULE, CREATED, BLOCKED, RUNNING, ERROR, ABORTED|
        |creationDate.from| `OffsetDateTime` |ISO Date time filtering on creation date|Optional. Required format : yyyy-MM-dd'T'HH:mm:ss.SSSZ|
        |creationDate.to| `OffsetDateTime` |ISO Date time filtering on creation date|Optional. Required format : yyyy-MM-dd'T'HH:mm:ss.SSSZ|
        |providerId| `String` |Provider id filter|Optional. If you add the % character, we will use the like operator to match entities|
        |sessionOwner| `String` |Session owner filter|Optional.|
        |session| `String` |Session filter|Optional.|
    
