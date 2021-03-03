    |Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|
        |content.id| `Number` |Attribute Model identifier|Must be positive|
        |content.name| `String` |Attribute name|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 1 and 32 inclusive|
        |content.description| `String` |Attribute description||
        |content.defaultValue| `String` |Attribute default value||
        |content.type| `String` |Attribute type|Must not be null. Available values: STRING, INTEGER, DOUBLE, DATE_ISO8601, URL, BOOLEAN, STRING_ARRAY, INTEGER_ARRAY, DOUBLE_ARRAY, DATE_ARRAY, INTEGER_INTERVAL, DOUBLE_INTERVAL, DATE_INTERVAL, LONG, LONG_INTERVAL, LONG_ARRAY|
        |content.unit| `String` |Attribute unit useful for number based attributes|Max length: 16 characters|
        |content.precision| `Number` |Attribute precision useful for double based attributes||
        |content.arraySize| `Number` |Attribute array size useful for array based attributes||
        |content.fragment| `Object` |Attribute Fragment|Should respect Fragment structure|
        |content.fragment.id| `Number` |Fragment identifier|Must be a whole number|
        |content.fragment.name| `String` |Fragment Name|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 1 and 32 inclusive|
        |content.fragment.description| `String` |Fragment description|Optional|
        |content.fragment.version| `String` |Fragment Version|Size must be between 0 and 16 inclusive. Optional|
        |content.alterable| `Boolean` |Whether this attribute can be altered by users|Defaults to true|
        |content.optional| `Boolean` |Whether this attribute is optional|defaults to false|
        |content.label| `String` |Attribute label|Must not be blank, Size must be between 0 and 20 inclusive|
        |content.restriction| `Object` |Attribute applicable restriction||
        |content.restriction.id| `Number` |Restriction identifier||
        |content.restriction.type| `String` |Restriction type|Available values: NO_RESTRICTION, PATTERN, ENUMERATION, DATE_ISO8601, INTEGER_RANGE, LONG_RANGE, DOUBLE_RANGE, URL, GEOMETRY|
        |content.restriction.min| `Number` |Minimum possible value|Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|
        |content.restriction.max| `Number` |Maximum possible value|Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|
        |content.restriction.minExcluded| `Boolean` |Whether the minimum values is to be excluded from the range|Defaults to false. Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|
        |content.restriction.maxExcluded| `Boolean` |Whether the maximum values is to be excluded from the range|Defaults to false. Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|
        |content.restriction.acceptableValues| `Array` |Acceptable values|Apply to restriction type ENUMERATION|
        |content.restriction.pattern| `String` |Validation pattern|Apply to restriction type PATTERN|
        |content.group| `String` |Attribute group for displaying purpose|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Size must be between 1 and 32 inclusive|
        |content.properties| `Array` |Custom attribute properties||
        |content.properties[].id| `Number` |Attribute property identifier||
        |content.properties[].key| `String` |Custom key||
        |content.properties[].value| `String` |Custom value||
        |content.dynamic| `Boolean` |Used in search request parsing only|Defaults to true|
        |content.internal| `Boolean` |Used in search request parsing only|Defaults to false|
        |content.jsonPath| `String` |Used in search request. Define the JSON path to the related values in entities||
    
