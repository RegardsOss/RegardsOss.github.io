| Path | Type | Description | Constraints |  
| :--: | :--: | :---------: | :---------: |  
| content.id | `Number` | Model attribute association identifier |  |  
| content.attribute | `Object` | Model attribute association attribute | Must not be null |  
| content.attribute.id | `Number` | Attribute Model identifier | Must be positive |  
| content.attribute.name | `String` | Attribute name | Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 3 and 32 inclusive |  
| content.attribute.description | `String` | Attribute description |  |  
| content.attribute.defaultValue | `String` | Attribute default value |  |  
| content.attribute.type | `String` | Attribute type | Must not be null. Available values: STRING, INTEGER, DOUBLE, DATE_ISO8601, URL, BOOLEAN, STRING_ARRAY, INTEGER_ARRAY, DOUBLE_ARRAY, DATE_ARRAY, INTEGER_INTERVAL, DOUBLE_INTERVAL, DATE_INTERVAL, LONG, LONG_INTERVAL, LONG_ARRAY |  
| content.attribute.unit | `String` | Attribute unit useful for number based attributes | Max length: 16 characters |  
| content.attribute.precision | `Number` | Attribute precision useful for double based attributes |  |  
| content.attribute.arraySize | `Number` | Attribute array size useful for array based attributes |  |  
| content.attribute.fragment | `Object` | Attribute Fragment | Should respect Fragment structure |  
| content.attribute.fragment.id | `Number` | Fragment identifier | Must be a whole number |  
| content.attribute.fragment.name | `String` | Fragment Name | Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 3 and 32 inclusive |  
| content.attribute.fragment.description | `String` | Fragment description | Optional |  
| content.attribute.fragment.version | `String` | Fragment Version | Size must be between 0 and 16 inclusive. Optional |  
| content.attribute.alterable | `Boolean` | Whether this attribute can be altered by users | Defaults to true |  
| content.attribute.optional | `Boolean` | Whether this attribute is optional | defaults to false |  
| content.attribute.label | `String` | Attribute label | Must not be blank, Size must be between 0 and 20 inclusive |  
| content.attribute.restriction | `Object` | Attribute applicable restriction |  |  
| content.attribute.restriction.id | `Number` | Restriction identifier |  |  
| content.attribute.restriction.type | `String` | Restriction type | Available values: NO_RESTRICTION, PATTERN, ENUMERATION, DATE_ISO8601, INTEGER_RANGE, LONG_RANGE, DOUBLE_RANGE, URL, GEOMETRY |  
| content.attribute.restriction.min | `Number` | Minimum possible value | Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE |  
| content.attribute.restriction.max | `Number` | Maximum possible value | Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE |  
| content.attribute.restriction.minExcluded | `Boolean` | Whether the minimum values is to be excluded from the range | Defaults to false. Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE |  
| content.attribute.restriction.maxExcluded | `Boolean` | Whether the maximum values is to be excluded from the range | Defaults to false. Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE |  
| content.attribute.restriction.acceptableValues | `Array` | Acceptable values | Apply to restriction type ENUMERATION |  
| content.attribute.restriction.pattern | `String` | Validation pattern | Apply to restriction type PATTERN |  
| content.attribute.group | `String` | Attribute group for displaying purpose | Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Size must be between 3 and 32 inclusive |  
| content.attribute.properties | `Array` | Custom attribute properties |  |  
| content.attribute.properties[].id | `Number` | Attribute property identifier |  |  
| content.attribute.properties[].key | `String` | Custom key |  |  
| content.attribute.properties[].value | `String` | Custom value |  |  
| content.attribute.dynamic | `Boolean` | Used in search request parsing only | Defaults to true |  
| content.attribute.internal | `Boolean` | Used in search request parsing only | Defaults to false |  
| content.attribute.jsonPath | `String` | Used in search request. Define the JSON path to the related values in entities |  |  
| content.model | `Object` | Model attribute association model |  |  
| content.model.id | `Number` | model identifier |  |  
| content.model.name | `String` | model name | Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 3 and 32 inclusive |  
| content.model.description | `String` | model description |  |  
| content.model.version | `String` | model version |  |  
| content.model.type | `String` | model type | Must not be null. Available values: COLLECTION, DOCUMENT, DATA, DATASET |  
| content.computationConf | `Object` | Computation plugin configuration | Should respect PluginConfiguration structure |  
| content.pos | `Number` | Position (allows to sort attribute in model) | Should be a whole number. Defaults to 0 |  
{: .table .table-striped}
