    |Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|
        |content[].content.state| `String` |State|Allowed values : ACQUIRING, COMPLETED, FINISHED, INVALID, UPDATED|
        |content[].content.sipState| `String` | SIP State|Allowed values : NOT_SCHEDULED, NOT_SCHEDULED_INVALID, SCHEDULED, SCHEDULED_INTERRUPTED, GENERATION_ERROR, SUBMITTED, INGESTION_FAILED|
        |content[].content.error| `String` |Error details when product state is in error state||
        |content[].content.lastUpdate| `String` |ISO 8601 last product update||
        |content[].content.productName| `String` |Product name|Must not be blank|
        |content[].content.session| `String` |Session name|Must not be blank|
        |content[].content.sip| `Object` |Generated SIP||
        |content[].content.ipId| `String` |SIP IP ID||
    {:.table.table-striped}
