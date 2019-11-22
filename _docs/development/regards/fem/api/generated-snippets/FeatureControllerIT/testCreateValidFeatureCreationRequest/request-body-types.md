    ***Data params**

```json
    {
  "metadata" : {
    "sessionOwner" : "String",
    "session" : "String",
    "storages" : [ {
      "pluginBusinessId" : "String",
      "targetTypes" : [ "Enum"]
    } ],
    "priority" : "Enum"
  },
  "features" : [ {
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
      "coordinates" : [ "Double" ],
      "type" : "String"
    },
    "normalizedGeometry" : {
      "coordinates" : [ "Double" ],
      "type" : "String"
    },
    "properties" : [ {
      "data_type" : "String"
    } ],
    "type" : "Enum"
  } ],
  "type" : "Enum"
}
```
