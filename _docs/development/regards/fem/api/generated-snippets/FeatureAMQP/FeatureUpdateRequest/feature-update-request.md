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
      "id": "String",
      "geometry" : {
        "coordinates" : [ "Double" ],
        "type" : "String"
      },
      "normalizedGeometry" : {
        "coordinates" : [ "Double" ],
        "type" : "String"
      },
      "properties": [
        "Custom"
      ],
      "type": "Enum"
    }],
    "metadata": {
      "sessionOwner": "String",
      "session": "String",
      "storages": [ "String" ],
      "priority": "Enum"
    },
    "requestId": "String",
    "requestDate": "Date"
  }
}
```