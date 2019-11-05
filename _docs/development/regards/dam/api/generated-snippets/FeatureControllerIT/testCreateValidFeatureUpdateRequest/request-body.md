    ***Data params**

```json
    {
  "metadata" : {
    "storages" : [ {
      "pluginBusinessId" : "id",
      "targetTypes" : [ ]
    } ],
    "priority" : "AVERAGE"
  },
  "features" : [ {
    "urn" : "URN:FEATURE:DATA:tenant:56d8a033-8433-4941-9da9-fe5737972b19:V1",
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
