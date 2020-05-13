    |Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|
        |content[].content.filePath| `String` |Local file path|Must not be null|
        |content[].content.state| `String` |State|Allowed values : IN_PROGRESS, VALID, INVALID, ACQUIRED, SUPERSEDED, SUPERSEDED_AFTER_ERROR, ERROR|
        |content[].content.error| `String` |Error details when acquisition file state is in ERROR||
        |content[].content.acqDate| `String` |ISO 8601 acquisition date|Must not be null|
    {:.table.table-striped}
