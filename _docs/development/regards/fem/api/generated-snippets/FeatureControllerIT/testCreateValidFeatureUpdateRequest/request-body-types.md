```json
    {
  "metadata" : {
    "storages" : [ {
      "pluginBusinessId" : "String",
      "targetTypes" : [ "Enum" ]
    } ],
    "priority" : "Enum"
  },
  "features" : [ {
    "urn" : "String",
    "entityType" : "Enum",
    "model" : "String",
    "files" : [ {
      "locations" : [ {
        "storage" : "String",
        "url" : "String"
      } ],
      "attributes" : {
        "dataType" : "Enum",
        "mimeType" : "String",
        "filename" : "String",
        "filesize" : "Integer",
        "algorithm" : "String",
        "checksum" : "String"
      }
    } ],
    "id" : "String",
    "geometry" : {
      "coordinates" : [ "Integer" ],
      "type" : "Enum"
    },
    "properties" : [ {
      "Custom"
    } ],
    "type" : "Enum"
  } ],
  "type" : "Enum"
}
```
