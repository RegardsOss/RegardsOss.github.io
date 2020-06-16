    |Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|
        |content[].content.id| `Number` |Request id||
        |content[].content.creationDate| `OffsetDateTime` |Date of Request creation||
        |content[].content.remoteStepDeadline| `OffsetDateTime` |Date of Request timeout||
        |content[].content.state| `String` |Request state. Allowed values : TO_SCHEDULE, CREATED, BLOCKED, RUNNING, ERROR, ABORTED||
        |content[].content.dtype| `String` |Request type. Allowed values : INGEST, UPDATE, AIP_UPDATES_CREATOR, STORE_METADATA, OAIS_DELETION, OAIS_DELETION_CREATOR||
        |content[].content.sessionOwner| `String` |Session owner||
        |content[].content.session| `String` |Session||
        |content[].content.providerId| `String` |Provider id||
        |content[].content.errors| `Array` |List of errors associated to the request||
    {:.table.table-striped}
