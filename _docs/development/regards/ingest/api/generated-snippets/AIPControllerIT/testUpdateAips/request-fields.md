    |Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|
        |addTags| `List` |A list of tags every entity will have|Optional.|
        |removeTags| `List` |A list of tags every entity won't have anymore|Optional.|
        |addCategories| `List` |A list of categories every entity will have|Optional.|
        |removeCategories| `List` |A list of categories every entity won't have anymore|Optional.|
        |removeStorages| `List` |A list of storages every entity won't use anymore|Optional.|
        |criteria.state| `String` |AIP Entity state filter|Optional. Multiple values allowed. Allowed values : GENERATED, STORED, DELETED|
        |criteria.lastUpdate.from| `OffsetDateTime` |ISO Date time filtering on last update|Optional. Required format : yyyy-MM-dd'T'HH:mm:ss.SSSZ|
        |criteria.lastUpdate.to| `OffsetDateTime` |ISO Date time filtering on last update|Optional. Required format : yyyy-MM-dd'T'HH:mm:ss.SSSZ|
        |criteria.tags| `List` |A list of tags every entity must have|Optional.|
        |criteria.providerIds| `String` |A list of provider ids filter|Optional. If you add the % character, we will use the like operator to match provider id|
        |criteria.sessionOwner| `String` |Session owner filter|Optional.|
        |criteria.session| `String` |Session filter|Optional.|
        |criteria.categories| `List` |A list of categories every entity must have|Optional.|
        |criteria.storages| `List` |A list of storage names the entity must have, at least one|Optional.|
        |criteria.aipIds| `List` |A list of aip ids|Optional.|
        |criteria.aipIds| `List` |A list of aip ids|Optional.|
        |criteria.state| `String` |This attribute describe what the aipIds list mean.|Optional. Allowed values : INCLUDE, EXCLUDE|
    {:.table.table-striped}
