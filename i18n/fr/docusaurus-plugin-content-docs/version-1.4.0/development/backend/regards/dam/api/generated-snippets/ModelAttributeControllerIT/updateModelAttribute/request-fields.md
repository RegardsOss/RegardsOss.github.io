    |Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|
        |id| `Number` |Model attribute association identifier||
        |attribute| `Object` |Model attribute association attribute|Must not be null|
        |attribute.id| `Number` |Attribute Model identifier|Must be positive|
        |attribute.name| `String` |Attribute name|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 1 and 32 inclusive|
        |attribute.description| `String` |Attribute description||
        |attribute.defaultValue| `String` |Attribute default value||
        |attribute.type| `String` |Attribute type|Must not be null. Available values: STRING, INTEGER, DOUBLE, DATE_ISO8601, URL, BOOLEAN, STRING_ARRAY, INTEGER_ARRAY, DOUBLE_ARRAY, DATE_ARRAY, INTEGER_INTERVAL, DOUBLE_INTERVAL, DATE_INTERVAL, LONG, LONG_INTERVAL, LONG_ARRAY|
        |attribute.unit| `String` |Attribute unit useful for number based attributes|Max length: 16 characters|
        |attribute.precision| `Number` |Attribute precision useful for double based attributes||
        |attribute.arraySize| `Number` |Attribute array size useful for array based attributes||
        |attribute.fragment| `Object` |Attribute Fragment|Should respect Fragment structure|
        |attribute.fragment.id| `Number` |Fragment identifier|Must be a whole number|
        |attribute.fragment.name| `String` |Fragment Name|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 1 and 32 inclusive|
        |attribute.fragment.description| `String` |Fragment description|Optional|
        |attribute.fragment.version| `String` |Fragment Version|Size must be between 0 and 16 inclusive. Optional|
        |attribute.alterable| `Boolean` |Whether this attribute can be altered by users|Defaults to true|
        |attribute.optional| `Boolean` |Whether this attribute is optional|defaults to false|
        |attribute.label| `String` |Attribute label|Must not be blank, Size must be between 0 and 20 inclusive|
        |attribute.restriction| `Object` |Attribute applicable restriction||
        |attribute.restriction.id| `Number` |Restriction identifier||
        |attribute.restriction.type| `String` |Restriction type|Available values: NO_RESTRICTION, PATTERN, ENUMERATION, DATE_ISO8601, INTEGER_RANGE, LONG_RANGE, DOUBLE_RANGE, URL, GEOMETRY|
        |attribute.restriction.min| `Number` |Minimum possible value|Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|
        |attribute.restriction.max| `Number` |Maximum possible value|Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|
        |attribute.restriction.minExcluded| `Boolean` |Whether the minimum values is to be excluded from the range|Defaults to false. Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|
        |attribute.restriction.maxExcluded| `Boolean` |Whether the maximum values is to be excluded from the range|Defaults to false. Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|
        |attribute.restriction.acceptableValues| `Array` |Acceptable values|Apply to restriction type ENUMERATION|
        |attribute.restriction.pattern| `String` |Validation pattern|Apply to restriction type PATTERN|
        |attribute.group| `String` |Attribute group for displaying purpose|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Size must be between 1 and 32 inclusive|
        |attribute.properties| `Array` |Custom attribute properties||
        |attribute.properties[].id| `Number` |Attribute property identifier||
        |attribute.properties[].key| `String` |Custom key||
        |attribute.properties[].value| `String` |Custom value||
        |attribute.dynamic| `Boolean` |Used in search request parsing only|Defaults to true|
        |attribute.internal| `Boolean` |Used in search request parsing only|Defaults to false|
        |attribute.jsonPath| `String` |Used in search request. Define the JSON path to the related values in entities||
        |model| `Object` |Model attribute association model||
        |model.id| `Number` |model identifier||
        |model.name| `String` |model name|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 1 and 32 inclusive|
        |model.description| `String` |model description||
        |model.version| `String` |model version||
        |model.type| `String` |model type|Must not be null. Available values: COLLECTION, DATA, DATASET|
        |computationConf| `Object` |Computation plugin configuration|Should respect PluginConfiguration structure|
        |pos| `Number` |Position (allows to sort attribute in model)|Should be a whole number. Defaults to 0|
    
