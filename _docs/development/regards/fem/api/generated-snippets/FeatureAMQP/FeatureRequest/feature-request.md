    ***Data params**

```json
{"metadata": {
      "sessionOwner": "String",
      "session": "String",
      "storages": [ "String" ],
      "priority": "Enum"
    },
    "feature": {
      "entityType": "Enum",
      "model": "String",
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
      "id": "String",
      "geometry" : "GeoJSON",
      "properties": [
        "Custom"
      ],
      "type": "Enum"
    },
    "requestId": "String",
    "requestDate": "Date"
  }
```