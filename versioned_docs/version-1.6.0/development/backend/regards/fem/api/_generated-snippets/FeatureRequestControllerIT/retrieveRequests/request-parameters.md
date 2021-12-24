* **Query params**

|Parameter|Type|Description|Constraints|
|:-------:|:--:|:---------:|:---------:|
| `source` |String|Source of the requests to search for||
| `session` |String|Session of the requests to search for||
| `providerId` |String|providerId of the requests to search for||
| `from` |Date ISO-8601|Search for requests with registrationDate greather than this parameter|2021-09-16T20:06:18.424Z|
| `to` |Date ISO-8601|Search for requests with registrationDate lower than this parameter|2021-09-16T20:06:18.424Z|
| `state` |String|state of the requests to search for|[GRANTED, DENIED, SUCCESS, ERROR]|
| `page` |Integer|Number of the page to retrieve||
| `size` |Integer|Number of elements by page||
{:.table.table-striped}
