|Path|Type|Description|Constraints|
|:--:|:--:|:---------:|:---------:|
|metadata| `Object` |Pagination information||
|info.nbErrors| `Integer` |Total number of requests in ERROR state matching the search parameters||
|content| `Array` |List of results requests||
|content[].content| `Object` |Request||
|content[].content.id| `Long` |Request unique identifier||
|content[].content.urn| `String` |Associated feature Uniform Resource Name||
|content[].content.providerId| `String` |Associated feature provider identifier||
|content[].content.state| `String` |Associated feature provider identifier|[GRANTED, DENIED, SUCCESS, ERROR]|
|content[].content.processing| `Boolean` |Does the request is processing ?||
|content[].content.registrationDate| `Date ISO-8601` |Request registration date|2021-09-16T20:06:18.431Z|
|content[].content.type| `String` |Request type|[COPY, UPDATE, NOTIFICATION, CREATION, DELETION, SAVE_METADATA]|
|content[].content.source| `String` |Source of the request||
|content[].content.session| `String` |Session of the request||
|content[].links| `Array` |Hateoas links fot he current request||
|links| `Array` |Hateoas links information about results||
{:.table.table-striped}
