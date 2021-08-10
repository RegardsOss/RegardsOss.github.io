    ***Data params**

```json
    {
  "pluginId" : "MockDatasourcePlugin",
  "label" : "6be79a75-8dac-41be-9669-3a70afb3eba4",
  "businessId" : "a307a268-a9f3-4368-8e9b-963f81d63232",
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
    "value" : "from T_TEST_PLUGIN_DATA_SOURCE",
    "dynamic" : false
  }, {
    "name" : "modelName",
    "type" : "STRING",
    "value" : "VALIDATION_MODEL_2",
    "dynamic" : false
  }, {
    "name" : "connection",
    "type" : "PLUGIN",
    "value" : "d0850bd4-8900-4a5b-8783-4457ea3478e0",
    "dynamic" : false
  } ]
}
```
