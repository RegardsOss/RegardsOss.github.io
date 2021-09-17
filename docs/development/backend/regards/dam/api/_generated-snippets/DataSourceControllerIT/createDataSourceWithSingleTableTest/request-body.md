**Data params**

```json
{
  "pluginId" : "MockDatasourcePlugin",
  "label" : "dsSingleTable",
  "businessId" : "9923d6ef-7e9f-4679-b3ae-b0c5a43f80c4",
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
    "name" : "modelName",
    "type" : "STRING",
    "value" : "VALIDATION_MODEL_2",
    "dynamic" : false
  }, {
    "name" : "connection",
    "type" : "PLUGIN",
    "value" : "2e8346d1-9bc1-46ec-90b5-82a33b8d6c42",
    "dynamic" : false
  }, {
    "name" : "table",
    "type" : "STRING",
    "value" : "t_test_plugin_data_source",
    "dynamic" : false
  } ]
}
```
