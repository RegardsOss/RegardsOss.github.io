|Path|Type|Description|Constraints|
|:--:|:--:|:---------:|:---------:|
|deletionMode| `String` |Type of deletion|Optional. Allowed values : BY_STATE, IRREVOCABLY|
|state| `String` |AIP Entity state filter|Optional. Multiple values allowed. Allowed values : GENERATED, STORED, DELETED|
|lastUpdate.from| `OffsetDateTime` |ISO Date time filtering on last update|Optional. Required format : yyyy-MM-dd'T'HH:mm:ss.SSSZ|
|lastUpdate.to| `OffsetDateTime` |ISO Date time filtering on last update|Optional. Required format : yyyy-MM-dd'T'HH:mm:ss.SSSZ|
|tags| `List` |A list of tags every entity must have|Optional.|
|providerIds| `String` |A list of provider ids filter|Optional. If you add the % character, we will use the like operator to match provider id|
|providerIds| `String` |A list of provider ids filter|Optional. If you add the % character, we will use the like operator to match provider id|
|sessionOwner| `String` |Session owner filter|Optional.|
|session| `String` |Session filter|Optional.|
|categories| `List` |A list of categories every entity must have|Optional.|
|storages| `List` |A list of storage names the entity must have, at least one|Optional.|
|aipIds| `List` |A list of aip ids|Optional.|
|last| `Boolean` |is it the last version?|Optional.|
|state| `String` |This attribute describe what the aipIds list mean.|Optional. Allowed values : INCLUDE, EXCLUDE|
{:.table.table-striped}
