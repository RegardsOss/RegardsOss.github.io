* **URL**:

  `/aips`

* **Method:**

  `POST`

* **Headers**:

  `Authorization: Bearer {token}`
  `Content-Type: application/geo+json;charset=UTF-8`
  `Accept: application/json`
  `Accept: application/octet-stream`

* **URL Params**

  {% for urlParam in test.urlParams %}
  `{{urlParam.name}}: {{urlParam.description}}`  
  {% else %}
  None.  
  {% endfor %}

* **Query Params**

  {% for queryParam in test.queryParams %}
  `{{queryParam.name}}: {{queryParam.description}}`  
  {% else %}
  None.  
  {% endfor %}

* **Data Params**

  **Required:**

```json
  
{
  "features" : [ {
    "ipType" : "DATA",
    "id" : "URN:AIP:DATA:PROJECT:0371d92b-9b3e-4d0a-96ca-72ab6099497a:V1",
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
          "urls" : [ "file:/home/svissier/workspace/REGARDS/rs-storage/storage/storage-rest/src/test/resources/data.txt" ],
          "algorithm" : "MD5"
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
            "date" : "2018-04-23T16:35:47.632Z"
          } ],
          "facility" : "CS"
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
  } ],
  "type" : "FeatureCollection"
}
```