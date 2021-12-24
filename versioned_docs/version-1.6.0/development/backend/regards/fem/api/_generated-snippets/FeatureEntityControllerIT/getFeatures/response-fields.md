|Path|Type|Description|Constraints|
|:--:|:--:|:---------:|:---------:|
|metadata| `Object` |Pagination information||
|content| `Array` |Current page of features||
|content[].content.id| `Long` |Feature identifier||
|content[].content.urn| `String` |Feature Uniforme Resource Name||
|content[].content.providerId| `String` |Feature provider identifier||
|content[].content.source| `Boolean` |Source of the feature||
|content[].content.session| `String` |Acquisition session name of the feature||
|content[].content.version| `Integer` |Feature version||
|content[].content.lastUpdate| `Date ISO-8601` |Last update date of the feature|2021-09-16T20:05:48.357Z|
|content[].content.feature| `Geojson` |Feature content geojson format||
|content[].links| `Array` |Hateoas links fot he current feature||
|links| `Array` |Hateoas links information about results||
{:.table.table-striped}
