    ***Data params**

        ```json
    {
  "id" : 60,
  "pluginId" : "MockDatasourcePlugin",
  "label" : "the label of the data source with from clause",
  "version" : "alpha",
  "priorityOrder" : 0,
  "active" : true,
  "pluginClassName" : "fr.cnes.regards.modules.dam.rest.datasources.MockDatasourcePlugin",
  "interfaceNames" : [ "fr.cnes.regards.modules.dam.domain.datasources.plugins.IDBDataSourcePlugin", "fr.cnes.regards.modules.dam.domain.datasources.plugins.IDataSourcePlugin" ],
  "parameters" : [ {
    "id" : 37,
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
    "id" : 38,
    "name" : "fromClause",
    "value" : "from T_TEST_PLUGIN_DATA_SOURCE",
    "dynamic" : false,
    "dynamicsValues" : [ ],
    "onlyDynamic" : false
  }, {
    "id" : 39,
    "name" : "modelName",
    "value" : "VALIDATION_MODEL_2",
    "dynamic" : false,
    "dynamicsValues" : [ ],
    "onlyDynamic" : false
  }, {
    "id" : 40,
    "name" : "connection",
    "pluginConfiguration" : {
      "id" : 61,
      "pluginId" : "MockConnectionPlugin",
      "label" : "64fab5c6-3daf-4efa-b803-e07f9e5fb23f",
      "version" : "alpha",
      "priorityOrder" : 0,
      "active" : true,
      "pluginClassName" : "fr.cnes.regards.modules.dam.rest.datasources.MockConnectionPlugin",
      "interfaceNames" : [ "fr.cnes.regards.modules.dam.domain.datasources.plugins.IDBConnectionPlugin", "fr.cnes.regards.modules.dam.domain.datasources.plugins.IConnectionPlugin" ],
      "parameters" : [ {
        "id" : 41,
        "name" : "dbPort",
        "value" : "5432",
        "dynamic" : false,
        "dynamicsValues" : [ ],
        "onlyDynamic" : false
      }, {
        "id" : 42,
        "name" : "password",
        "value" : "azertyuiop123456789",
        "dynamic" : false,
        "dynamicsValues" : [ ],
        "onlyDynamic" : false
      }, {
        "id" : 43,
        "name" : "dbName",
        "value" : "rs_testdb_tux",
        "dynamic" : false,
        "dynamicsValues" : [ ],
        "onlyDynamic" : false
      }, {
        "id" : 44,
        "name" : "dbHost",
        "value" : "rs-postgres",
        "dynamic" : false,
        "dynamicsValues" : [ ],
        "onlyDynamic" : false
      }, {
        "id" : 45,
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
