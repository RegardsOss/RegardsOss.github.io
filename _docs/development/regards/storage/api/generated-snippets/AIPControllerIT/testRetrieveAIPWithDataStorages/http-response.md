#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `Expires:0`
        `X-Frame-Options:DENY`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Access-Control-Max-Age:3600`
        `Content-Type:application/json;charset=UTF-8`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

        **Content:**

```json
    
{
  "dataStorages" : [ {
    "id" : 151,
    "dataStorageConfiguration" : {
      "id" : 151,
      "pluginId" : "Local",
      "label" : "AIPControllerIT_DATA_STORAGE",
      "version" : "1.0",
      "priorityOrder" : 0,
      "active" : true,
      "pluginClassName" : "fr.cnes.regards.modules.storage.plugin.datastorage.local.LocalDataStorage",
      "interfaceNames" : [ "fr.cnes.regards.modules.storage.domain.plugin.IDataStorage", "fr.cnes.regards.modules.storage.domain.plugin.IOnlineDataStorage" ],
      "parameters" : [ {
        "id" : 84,
        "name" : "Storage_URL",
        "value" : "file:/app_to_build/storage/storage-rest/target/AIPControllerIT",
        "dynamic" : false,
        "dynamicsValues" : [ ],
        "onlyDynamic" : false
      }, {
        "id" : 85,
        "name" : "Local_Total_Space",
        "value" : 9000000000000000,
        "dynamic" : false,
        "dynamicsValues" : [ ],
        "onlyDynamic" : false
      } ]
    },
    "dataStorageType" : "ONLINE",
    "priority" : 0
  } ],
  "metadata" : {
    "size" : 1,
    "totalElements" : 1,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "aip" : {
        "providerId" : "providerId",
        "sipId" : "URN:SIP:DATA:PROJECT:cd73989e-d2de-489c-9ed9-ed62c438a2fd:V1",
        "state" : "STORED",
        "ipType" : "DATA",
        "id" : "URN:AIP:DATA:PROJECT:cd73989e-d2de-489c-9ed9-ed62c438a2fd:V1",
        "geometry" : null,
        "properties" : {
          "contentInformations" : [ {
            "representationInformation" : {
              "syntax" : {
                "description" : "description",
                "mimeType" : "text/plain",
                "name" : "text"
              }
            },
            "dataObject" : {
              "regardsDataType" : "RAWDATA",
              "reference" : false,
              "urls" : [ "file:/app_to_build/storage/storage-rest/target/AIPControllerIT/de8/de89a907d33a9716d11765582102b2e0" ],
              "filename" : "data.txt",
              "algorithm" : "MD5",
              "checksum" : "de89a907d33a9716d11765582102b2e0",
              "fileSize" : 445
            }
          } ],
          "pdi" : {
            "contextInformation" : {
              "tags" : [ "tag" ]
            },
            "referenceInformation" : { },
            "provenanceInformation" : {
              "history" : [ {
                "type" : "SUBMISSION",
                "comment" : "test event",
                "date" : "2019-07-19T17:01:58.013Z"
              }, {
                "type" : "SUBMISSION",
                "comment" : "Submission to REGARDS",
                "date" : "2019-07-19T17:01:58.072Z"
              }, {
                "type" : "STORAGE",
                "comment" : "File data.txt has been successfully stored",
                "date" : "2019-07-19T17:01:59.451Z"
              }, {
                "type" : "STORAGE",
                "comment" : "AIP metadata has been successfully stored into REGARDS",
                "date" : "2019-07-19T17:02:00.617Z"
              } ],
              "facility" : "CS",
              "session" : "Session123"
            },
            "fixityInformation" : { },
            "accessRightInformation" : {
              "dataRights" : "public"
            }
          },
          "descriptiveInformation" : { },
          "miscInformation" : { }
        },
        "type" : "Feature"
      },
      "dataStorageIds" : [ 151 ]
    },
    "links" : [ {
      "rel" : "list-with-datastorages",
      "href" : "http://localhost:8080/aips/search"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/aips/URN:AIP:DATA:PROJECT:cd73989e-d2de-489c-9ed9-ed62c438a2fd:V1"
    }, {
      "rel" : "deleteByQuery",
      "href" : "http://localhost:8080/aips/search/delete"
    }, {
      "rel" : "deleteByQueryOnSpecificDataStorages",
      "href" : "http://localhost:8080/aips/files/delete"
    } ]
  } ],
  "links" : [ {
    "rel" : "deleteByQuery",
    "href" : "http://localhost:8080/aips/search/delete"
  }, {
    "rel" : "deleteByQueryOnSpecificDataStorages",
    "href" : "http://localhost:8080/aips/files/delete"
  } ]
}
```
