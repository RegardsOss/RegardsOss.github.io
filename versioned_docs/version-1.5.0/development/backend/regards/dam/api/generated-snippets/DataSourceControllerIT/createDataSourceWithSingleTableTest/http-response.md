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
    
{
  "content" : {
    "associatedDatasets" : 0,
    "id" : 63,
    "pluginId" : "MockDatasourcePlugin",
    "label" : "ac6fcd4c-2780-4a85-862a-44bb66f28b97",
    "businessId" : "02fa086a-b98d-4af7-8b53-333d68eca9d0",
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
      "value" : "638f9b06-d09d-491d-bbac-044c1a82a7b1",
      "dynamic" : false
    }, {
      "name" : "table",
      "type" : "STRING",
      "value" : "t_test_plugin_data_source",
      "dynamic" : false
    } ]
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/datasources/02fa086a-b98d-4af7-8b53-333d68eca9d0"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/datasources/02fa086a-b98d-4af7-8b53-333d68eca9d0"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/datasources/02fa086a-b98d-4af7-8b53-333d68eca9d0"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/datasources"
  } ]
}
```
