**Data params**

```json
{
  "label" : "sebbbbb",
  "active" : true,
  "pluginId" : "ParamTestPlugin",
  "version" : "1.0.0",
  "priorityOrder" : 1,
  "parameters" : [ {
    "dynamic" : true,
    "value" : "file:/home/msordi/git/rs-storage/storage/storage-service/target/AIPServiceIT",
    "type" : "STRING",
    "name" : "pString",
    "dynamicsValues" : [ "toto", "titi", "tutu" ]
  }, {
    "dynamic" : false,
    "value" : 130,
    "type" : "BYTE",
    "name" : "pByte"
  }, {
    "dynamic" : false,
    "value" : 50000,
    "type" : "SHORT",
    "name" : "pShort"
  }, {
    "dynamic" : true,
    "value" : 1000000000000000000000,
    "type" : "INTEGER",
    "name" : "pInteger",
    "dynamicsValues" : [ 10, 20, 30 ]
  }, {
    "dynamic" : false,
    "value" : -1000000000000000000000,
    "type" : "LONG",
    "name" : "pLong"
  }, {
    "dynamic" : false,
    "value" : 1000000000000000000000000000000000000000000000000000,
    "type" : "FLOAT",
    "name" : "pFloat"
  }, {
    "dynamic" : false,
    "value" : -1000000.556,
    "type" : "DOUBLE",
    "name" : "pDouble"
  }, {
    "dynamic" : false,
    "value" : true,
    "type" : "BOOLEAN",
    "name" : "pBoolean"
  }, {
    "dynamic" : false,
    "value" : [ "test" ],
    "type" : "COLLECTION",
    "clazz" : "java.lang.String",
    "name" : "sList"
  }, {
    "dynamic" : false,
    "value" : {
      "1513011860928" : "test"
    },
    "type" : "MAP",
    "clazz" : "java.lang.String",
    "name" : "ssMap"
  }, {
    "dynamic" : false,
    "value" : {
      "message" : "test"
    },
    "type" : "POJO",
    "clazz" : "fr.cnes.regards.framework.modules.plugins.rest.ParamTestPlugin$Pojo",
    "name" : "pojo"
  }, {
    "dynamic" : false,
    "value" : {
      "constraints" : [ {
        "pattern" : "test",
        "enabled" : true
      } ]
    },
    "type" : "POJO",
    "clazz" : "fr.cnes.regards.framework.modules.plugins.rest.ParamTestPlugin$Constraints",
    "name" : "constraints"
  }, {
    "dynamic" : false,
    "value" : {
      "1513011806553" : {
        "pattern" : "ff",
        "enabled" : false
      }
    },
    "type" : "MAP",
    "clazz" : "fr.cnes.regards.framework.modules.plugins.rest.ParamTestPlugin$Constraint",
    "name" : "scMap"
  }, {
    "dynamic" : false,
    "type" : "PLUGIN",
    "name" : "innerPlugin",
    "value" : "e55e203d-80e9-47fc-af6d-178b6db4c1e0"
  } ]
}
```
