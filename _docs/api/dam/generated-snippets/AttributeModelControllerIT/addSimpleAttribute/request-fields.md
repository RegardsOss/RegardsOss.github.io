| Path | Type | Description | Constraints |  
| :--: | :--: | :---------: | :---------: |  
| name | `String` | Attribute name | Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 3 and 32 inclusive |  
| description | `String` | Attribute description |  |  
| defaultValue | `String` | Attribute default value |  |  
| type | `String` | Attribute type | Must not be null. Available values: STRING, INTEGER, DOUBLE, DATE_ISO8601, URL, BOOLEAN, STRING_ARRAY, INTEGER_ARRAY, DOUBLE_ARRAY, DATE_ARRAY, INTEGER_INTERVAL, DOUBLE_INTERVAL, DATE_INTERVAL, LONG, LONG_INTERVAL, LONG_ARRAY |  
| unit | `String` | Attribute unit useful for number based attributes | Max length: 16 characters |  
| precision | `Number` | Attribute precision useful for double based attributes |  |  
| arraySize | `Number` | Attribute array size useful for array based attributes |  |  
| fragment | `Object` | Attribute Fragment | Should respect Fragment structure |  
| fragment.id | `Number` | Fragment identifier | Must be a whole number |  
| fragment.name | `String` | Fragment Name | Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 3 and 32 inclusive |  
| fragment.description | `String` | Fragment description | Optional |  
| fragment.version | `String` | Fragment Version | Size must be between 0 and 16 inclusive. Optional |  
| alterable | `Boolean` | Whether this attribute can be altered by users | Defaults to true |  
| optional | `Boolean` | Whether this attribute is optional | defaults to false |  
| label | `String` | Attribute label | Must not be blank, Size must be between 0 and 20 inclusive |  
| restriction | `Object` | Attribute applicable restriction |  |  
| restriction.type | `String` | Restriction type | Available values: NO_RESTRICTION, PATTERN, ENUMERATION, DATE_ISO8601, INTEGER_RANGE, LONG_RANGE, DOUBLE_RANGE, URL, GEOMETRY |  
| restriction.min | `Number` | Minimum possible value | Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE |  
| restriction.max | `Number` | Maximum possible value | Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE |  
| restriction.minExcluded | `Boolean` | Whether the minimum values is to be excluded from the range | Defaults to false. Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE |  
| restriction.maxExcluded | `Boolean` | Whether the maximum values is to be excluded from the range | Defaults to false. Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE |  
| restriction.acceptableValues | `Array` | Acceptable values | Apply to restriction type ENUMERATION |  
| restriction.pattern | `String` | Validation pattern | Apply to restriction type PATTERN |  
| group | `String` | Attribute group for displaying purpose | Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Size must be between 3 and 32 inclusive |  
| properties | `Array` | Custom attribute properties |  |  
| properties[].key | `String` | Custom key |  |  
| properties[].value | `String` | Custom value |  |  
| dynamic | `Boolean` | Used in search request parsing only | Defaults to true |  
| jsonPath | `String` | Used in search request. Define the JSON path to the related values in entities |  |  
{: class="table table-striped"}

| Leo test | Type | Description | Constraints |  
| :--: | :--: | :---------: | :---------: |  
| name | `String` | Attribute name | Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 3 and 32 inclusive |  
| description | `String` | Attribute description |  |  
| defaultValue | `String` | Attribute default value |  |  
| type | `String` | Attribute type | Must not be null. Available values: STRING, INTEGER, DOUBLE, DATE_ISO8601, URL, BOOLEAN, STRING_ARRAY, INTEGER_ARRAY, DOUBLE_ARRAY, DATE_ARRAY, INTEGER_INTERVAL, DOUBLE_INTERVAL, DATE_INTERVAL, LONG, LONG_INTERVAL, LONG_ARRAY |  
| unit | `String` | Attribute unit useful for number based attributes | Max length: 16 characters |  
| precision | `Number` | Attribute precision useful for double based attributes |  |  
| arraySize | `Number` | Attribute array size useful for array based attributes |  |  
| fragment | `Object` | Attribute Fragment | Should respect Fragment structure |  
| fragment.id | `Number` | Fragment identifier | Must be a whole number |  
| fragment.name | `String` | Fragment Name | Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 3 and 32 inclusive |  
| fragment.description | `String` | Fragment description | Optional |  
| fragment.version | `String` | Fragment Version | Size must be between 0 and 16 inclusive. Optional |  
| alterable | `Boolean` | Whether this attribute can be altered by users | Defaults to true |  
| optional | `Boolean` | Whether this attribute is optional | defaults to false |  
| label | `String` | Attribute label | Must not be blank, Size must be between 0 and 20 inclusive |  
| restriction | `Object` | Attribute applicable restriction |  |  
| restriction.type | `String` | Restriction type | Available values: NO_RESTRICTION, PATTERN, ENUMERATION, DATE_ISO8601, INTEGER_RANGE, LONG_RANGE, DOUBLE_RANGE, URL, GEOMETRY |  
| restriction.min | `Number` | Minimum possible value | Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE |  
| restriction.max | `Number` | Maximum possible value | Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE |  
| restriction.minExcluded | `Boolean` | Whether the minimum values is to be excluded from the range | Defaults to false. Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE |  
| restriction.maxExcluded | `Boolean` | Whether the maximum values is to be excluded from the range | Defaults to false. Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE |  
| restriction.acceptableValues | `Array` | Acceptable values | Apply to restriction type ENUMERATION |  
| restriction.pattern | `String` | Validation pattern | Apply to restriction type PATTERN |  
| group | `String` | Attribute group for displaying purpose | Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Size must be between 3 and 32 inclusive |  
| properties | `Array` | Custom attribute properties |  |  
| properties[].key | `String` | Custom key |  |  
| properties[].value | `String` | Custom value |  |  
| dynamic | `Boolean` | Used in search request parsing only | Defaults to true |  
| jsonPath | `String` | Used in search request. Define the JSON path to the related values in entities |  |  
{: .table .table-striped}
