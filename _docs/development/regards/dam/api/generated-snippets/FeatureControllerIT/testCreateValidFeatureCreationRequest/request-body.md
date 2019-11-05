    ***Data params**

```json
    {
  "metadata" : {
    "sessionOwner" : "me",
    "session" : "session",
    "storages" : [ {
      "pluginBusinessId" : "id",
      "targetTypes" : [ ]
    } ],
    "priority" : "AVERAGE"
  },
  "features" : [ {
    "entityType" : "DATA",
    "model" : "FEATURE01",
    "files" : [ {
      "locations" : [ {
        "storage" : "storage",
        "url" : "www.test.com"
      } ],
      "attributes" : {
        "dataType" : "DOCUMENT",
        "mimeType" : "application/xml",
        "filename" : "filename",
        "filesize" : 100,
        "algorithm" : "MD5",
        "checksum" : "checksum"
      }
    } ],
    "id" : "id",
    "geometry" : {
      "coordinates" : [ 10.0, 20.0 ],
      "type" : "Point"
    },
    "normalizedGeometry" : null,
    "properties" : [ {
      "data_type" : "TYPE01"
    } ],
    "type" : "Feature"
  } ],
  "type" : "FeatureCollection"
}
```
