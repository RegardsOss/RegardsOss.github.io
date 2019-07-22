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
    "id" : 58,
    "pluginId" : "MockDatasourcePlugin",
    "label" : "the label of the data source with from clause",
    "version" : "alpha",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.dam.rest.datasources.MockDatasourcePlugin",
    "interfaceNames" : [ "fr.cnes.regards.modules.dam.domain.datasources.plugins.IDBDataSourcePlugin", "fr.cnes.regards.modules.dam.domain.datasources.plugins.IDataSourcePlugin" ],
    "parameters" : [ {
      "id" : 28,
      "name" : "mapping",
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
      "dynamic" : false,
      "dynamicsValues" : [ ],
      "onlyDynamic" : false
    }, {
      "id" : 29,
      "name" : "fromClause",
      "value" : "from T_TEST_PLUGIN_DATA_SOURCE",
      "dynamic" : false,
      "dynamicsValues" : [ ],
      "onlyDynamic" : false
    }, {
      "id" : 30,
      "name" : "modelName",
      "value" : "VALIDATION_MODEL_2",
      "dynamic" : false,
      "dynamicsValues" : [ ],
      "onlyDynamic" : false
    }, {
      "id" : 31,
      "name" : "connection",
      "pluginConfiguration" : {
        "id" : 57,
        "pluginId" : "MockConnectionPlugin",
        "label" : "fd65aa10-6f60-4bf5-85be-33f36455d633",
        "version" : "alpha",
        "priorityOrder" : 0,
        "active" : true,
        "pluginClassName" : "fr.cnes.regards.modules.dam.rest.datasources.MockConnectionPlugin",
        "interfaceNames" : [ "fr.cnes.regards.modules.dam.domain.datasources.plugins.IDBConnectionPlugin", "fr.cnes.regards.modules.dam.domain.datasources.plugins.IConnectionPlugin" ],
        "parameters" : [ {
          "id" : 23,
          "name" : "dbPort",
          "value" : "5432",
          "dynamic" : false,
          "dynamicsValues" : [ ],
          "onlyDynamic" : false
        }, {
          "id" : 24,
          "name" : "password",
          "value" : "azertyuiop123456789",
          "dynamic" : false,
          "dynamicsValues" : [ ],
          "onlyDynamic" : false
        }, {
          "id" : 25,
          "name" : "dbName",
          "value" : "rs_testdb_tux",
          "dynamic" : false,
          "dynamicsValues" : [ ],
          "onlyDynamic" : false
        }, {
          "id" : 26,
          "name" : "dbHost",
          "value" : "rs-postgres",
          "dynamic" : false,
          "dynamicsValues" : [ ],
          "onlyDynamic" : false
        }, {
          "id" : 27,
          "name" : "user",
          "value" : "azertyuiop123456789",
          "dynamic" : false,
          "dynamicsValues" : [ ],
          "onlyDynamic" : false
        } ]
      },
      "dynamic" : false,
      "dynamicsValues" : [ ],
      "onlyDynamic" : false
    } ]
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/datasources/58"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/datasources/58"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/datasources"
  } ]
}
        ```