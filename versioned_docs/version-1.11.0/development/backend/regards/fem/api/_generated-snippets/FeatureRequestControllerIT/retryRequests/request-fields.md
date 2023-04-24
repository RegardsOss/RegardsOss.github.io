|Path|Type|Description|Constraints|
|:--:|:--:|:---------:|:---------:|
|filters.source| `String` |Source of the request||
|filters.session| `String` |Session of the request||
|filters.providerId| `String` |ProviderId of the associated feature||
|filters.from| `Date ISO-8601` |Search for requests with registrationDate greather than this parameter||
|filters.to| `Date ISO-8601` |Search for requests with registrationDate lower than this parameter||
|filters.state| `String` |State of the requests to search for||
|requestIds| `String[]` |Array of requests ids to search for or to exclude form search. Depends on requestIdSelectionMode.||
|requestIdSelectionMode| `String` |requestIds selection mode. Default value = INCLUDE|[INCLUDE, EXCLUDE]|
{:.table.table-striped}
