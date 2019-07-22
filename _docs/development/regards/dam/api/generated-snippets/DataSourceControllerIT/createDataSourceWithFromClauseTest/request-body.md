    ***Data params**

        ```json
    {
  "label" : "the label of the data source with from clause",
  "version" : "alpha",
  "priorityOrder" : 0,
  "active" : true,
  "pluginClassName" : "fr.cnes.regards.modules.dam.rest.datasources.MockDatasourcePlugin",
  "interfaceNames" : [ ],
  "parameters" : [ {
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
    "name" : "fromClause",
    "value" : "from T_TEST_PLUGIN_DATA_SOURCE",
    "dynamic" : false,
    "dynamicsValues" : [ ],
    "onlyDynamic" : false
  }, {
    "name" : "modelName",
    "value" : "VALIDATION_MODEL_2",
    "dynamic" : false,
    "dynamicsValues" : [ ],
    "onlyDynamic" : false
  }, {
    "name" : "connection",
    "pluginConfiguration" : {
      "id" : 64,
      "pluginId" : "MockConnectionPlugin",
      "label" : "868fc85c-153c-47cb-9458-c33f55393a3e",
      "version" : "alpha",
      "priorityOrder" : 0,
      "active" : true,
      "pluginClassName" : "fr.cnes.regards.modules.dam.rest.datasources.MockConnectionPlugin",
      "interfaceNames" : [ "fr.cnes.regards.modules.dam.domain.datasources.plugins.IDBConnectionPlugin", "fr.cnes.regards.modules.dam.domain.datasources.plugins.IConnectionPlugin" ],
      "parameters" : [ {
        "id" : 55,
        "name" : "dbPort",
        "value" : "5432",
        "dynamic" : false,
        "dynamicsValues" : [ ],
        "onlyDynamic" : false
      }, {
        "id" : 56,
        "name" : "password",
        "value" : "azertyuiop123456789",
        "dynamic" : false,
        "dynamicsValues" : [ ],
        "onlyDynamic" : false
      }, {
        "id" : 57,
        "name" : "dbName",
        "value" : "rs_testdb_tux",
        "dynamic" : false,
        "dynamicsValues" : [ ],
        "onlyDynamic" : false
      }, {
        "id" : 58,
        "name" : "dbHost",
        "value" : "rs-postgres",
        "dynamic" : false,
        "dynamicsValues" : [ ],
        "onlyDynamic" : false
      }, {
        "id" : 59,
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
}
        ```
