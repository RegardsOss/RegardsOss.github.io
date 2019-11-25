    ***Data params**

```json
    {
    "feature": {
      "urn": "String",
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
      "normalizedGeometry" : "GeoJSON",
      "properties": [
        "Custom"
      ],
      "type": "Enum"
    },
    "metadata": {
      "sessionOwner": "String",
      "session": "String",
      "storages": [ "String" ],
      "priority": "Enum"
    },
    "requestId": "String",
    "requestDate": "Date"
  }
```