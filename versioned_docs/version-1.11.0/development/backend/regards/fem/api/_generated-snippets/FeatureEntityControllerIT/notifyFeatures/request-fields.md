|Path|Type|Description|Constraints|
|:--:|:--:|:---------:|:---------:|
|filters.source| `String` |Source of the feature||
|filters.session| `String` |Session of the feature||
|filters.providerId| `String` |ProviderId of the feature||
|filters.from| `Date ISO-8601` |Search for features with lastupdate date greather than this parameter||
|filters.to| `Date ISO-8601` |Search for features with lastupdate date lower than this parameter||
|filters.model| `String` |Model of the features to search for||
|featureIds| `String[]` |Array of feature ids to search for or to exclude form search. Depends on featureIdsSelectionMode.||
|featureIdsSelectionMode| `String` |featureIds selection mode. Default value = INCLUDE|[INCLUDE, EXCLUDE]|
{:.table.table-striped}
