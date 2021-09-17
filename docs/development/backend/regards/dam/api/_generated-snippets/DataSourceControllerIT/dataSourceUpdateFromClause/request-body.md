**Data params**

```json
{
  "id" : 16,
  "pluginId" : "MockDatasourcePlugin",
  "label" : "dsFromClause",
  "businessId" : "8f4fedb8-d395-4735-97f5-b4441aa686ac",
  "priorityOrder" : 0,
  "active" : true,
  "parameters" : [ {
    "name" : "mapping",
    "type" : "COLLECTION",
    "value" : [ {
      "name" : "providerId",
      "type" : "LONG",
      "nameDS" : "id",
      "attributeType" : "STATIC"
    }, {
      "name" : "label",
      "type" : "STRING",
      "nameDS" : "name",
      "attributeType" : "STATIC"
    }, {
      "name" : "alt",
      "type" : "INTEGER",
      "namespace" : "geometry",
      "nameDS" : "altitude",
      "attributeType" : "DYNAMIC"
    }, {
      "name" : "lat",
      "type" : "DOUBLE",
      "namespace" : "geometry",
      "nameDS" : "latitude",
      "attributeType" : "DYNAMIC"
    }, {
      "name" : "long",
      "type" : "DOUBLE",
      "namespace" : "geometry",
      "nameDS" : "longitude",
      "attributeType" : "DYNAMIC"
    }, {
      "name" : "creationDate1",
      "type" : "DATE_ISO8601",
      "namespace" : "hello",
      "nameDS" : "timeStampWithoutTimeZone",
      "attributeType" : "DYNAMIC"
    }, {
      "name" : "creationDate2",
      "type" : "DATE_ISO8601",
      "namespace" : "hello",
      "nameDS" : "timeStampWithoutTimeZone",
      "attributeType" : "DYNAMIC"
    }, {
      "name" : "date",
      "type" : "DATE_ISO8601",
      "namespace" : "hello",
      "nameDS" : "date",
      "attributeType" : "DYNAMIC"
    }, {
      "name" : "timeStampWithTimeZone",
      "type" : "DATE_ISO8601",
      "namespace" : "hello",
      "nameDS" : "timeStampWithTimeZone",
      "attributeType" : "DYNAMIC"
    }, {
      "name" : "isUpdate",
      "type" : "BOOLEAN",
      "namespace" : "hello",
      "nameDS" : "update",
      "attributeType" : "DYNAMIC"
    } ],
    "dynamic" : false
  }, {
    "name" : "fromClause",
    "type" : "STRING",
    "value" : "from table where table.id>1000",
    "dynamic" : false
  }, {
    "name" : "modelName",
    "type" : "STRING",
    "value" : "VALIDATION_MODEL_2",
    "dynamic" : false
  }, {
    "name" : "connection",
    "type" : "PLUGIN",
    "value" : "5ee77f36-45cf-4397-adb9-496ba660fd08",
    "dynamic" : false
  } ]
}
```
