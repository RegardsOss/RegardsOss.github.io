#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `Expires:0`
        `X-Frame-Options:DENY`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Access-Control-Max-Age:3600`
        `Content-Type:application/json;charset=UTF-8`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

        **Content:**

```json
    
[ {
  "content" : {
    "associatedDatasets" : 0,
    "id" : 55,
    "pluginId" : "MockDatasourcePlugin",
    "label" : "the label of the data source with table name",
    "businessId" : "4337901c-e265-463e-bcb8-e14e81796ba1",
    "version" : "alpha",
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
      "value" : "96872e1e-6780-46d7-896e-313697e4c9a7",
      "dynamic" : false
    } ]
  },
  "links" : [ {
    "rel" : "delete",
    "href" : "http://localhost:8080/datasources/4337901c-e265-463e-bcb8-e14e81796ba1"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/datasources"
  } ]
}, {
  "content" : {
    "associatedDatasets" : 0,
    "id" : 56,
    "pluginId" : "MockDatasourcePlugin",
    "label" : "69124c40-7feb-482c-9429-84168f883244",
    "businessId" : "d54795e3-f269-4ca1-bcab-4a4a54a9daf7",
    "version" : "alpha",
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
      "value" : "96872e1e-6780-46d7-896e-313697e4c9a7",
      "dynamic" : false
    }, {
      "name" : "table",
      "type" : "STRING",
      "value" : "t_test_plugin_data_source",
      "dynamic" : false
    } ]
  },
  "links" : [ {
    "rel" : "delete",
    "href" : "http://localhost:8080/datasources/d54795e3-f269-4ca1-bcab-4a4a54a9daf7"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/datasources"
  } ]
} ]
```
