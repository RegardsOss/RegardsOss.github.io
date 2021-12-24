**Data params**

```json
{
  "requests" : [ {
    "engineType" : "legacy",
    "searchParameters" : {
      "q" : [ "planet_type:\"Gas giant\"" ]
    },
    "entityIdsToInclude" : [ "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-000601007632:V1" ],
    "entityIdsToExclude" : [ ],
    "searchDateLimit" : "2021-09-16T18:43:25.994Z"
  }, {
    "engineType" : "opensearch",
    "datasetUrn" : "URN:AIP:DATASET:complex_search:ccf397a0-b36d-4a95-a125-d0f062a08508:V1",
    "searchParameters" : {
      "planet" : [ "Mercury" ]
    },
    "entityIdsToExclude" : [ ],
    "searchDateLimit" : "2021-09-16T18:43:25.994Z"
  } ],
  "dataTypes" : [ "RAWDATA", "QUICKLOOK_SD", "QUICKLOOK_MD", "QUICKLOOK_HD", "DOCUMENT", "THUMBNAIL", "OTHER", "AIP", "DESCRIPTION" ],
  "page" : 0,
  "size" : 20
}
```
