**Data params**

```json
{
  "requestOwner" : "test",
  "metadata" : {
    "sessionOwner" : "owner",
    "session" : "session",
    "storages" : [ {
      "pluginBusinessId" : "disk"
    } ],
    "priority" : "NORMAL"
  },
  "features" : [ {
    "urn" : null,
    "entityType" : "DATA",
    "model" : "FEATURE01",
    "history" : {
      "createdBy" : "owner",
      "updatedBy" : null,
      "deletedBy" : null
    },
    "files" : [ {
      "locations" : [ {
        "storage" : null,
        "url" : "http://www.test.com/filename.xml"
      } ],
      "attributes" : {
        "dataType" : "RAWDATA",
        "mimeType" : "application/xml",
        "filename" : "filename",
        "filesize" : 100,
        "algorithm" : "MD5",
        "checksum" : "checksum"
      }
    } ],
    "last" : false,
    "id" : "MyId",
    "geometry" : {
      "coordinates" : [ 10.0, 20.0 ],
      "type" : "Point",
      "bbox" : null,
      "crs" : null
    },
    "normalizedGeometry" : null,
    "properties" : {
      "data_type" : "TYPE01",
      "file_characterization" : {
        "valid" : true
      }
    },
    "type" : "Feature"
  } ],
  "type" : "FeatureCollection"
}
```
