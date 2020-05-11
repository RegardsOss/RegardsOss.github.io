    ***Data params**

```json
    {
  "id" : 67,
  "pluginId" : "MockDatasourcePlugin",
  "label" : "666e0659-031a-4448-aa0b-b601707f9685",
  "businessId" : "1b8ae392-beb4-494c-b3b7-af1720c3058c",
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
    "value" : "308c2a4e-a580-4d7c-8e1d-456674f880d4",
    "dynamic" : false
  } ]
}
```
