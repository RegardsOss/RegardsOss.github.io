**Data params**

```json
{
  "requests" : [ {
    "engineType" : "legacy",
    "datasetUrn" : "URN:AIP:DATASET:complex_search:da1678c0-ef1b-4f1f-bd79-c4331d40f10b:V1",
    "searchParameters" : {
      "q" : [ "planet_type:\"Gas giant\"" ]
    },
    "entityIdsToExclude" : [ ],
    "searchDateLimit" : "2021-09-16T18:43:26.858Z"
  }, {
    "engineType" : "opensearch",
    "searchParameters" : {
      "planet" : [ "Mercury" ]
    },
    "entityIdsToExclude" : [ ],
    "searchDateLimit" : "2021-09-16T18:43:26.858Z"
  } ],
  "dataTypes" : [ "RAWDATA", "QUICKLOOK_SD", "QUICKLOOK_MD", "QUICKLOOK_HD", "DOCUMENT", "THUMBNAIL", "OTHER", "AIP", "DESCRIPTION" ],
  "page" : 0,
  "size" : 20
}
```
