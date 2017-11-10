---
layout: classic-docs
title: REGARDS Ingest API
shot-title: REGARDS Ingest API
categories:
  - api
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# REGARDS STORAGE API

Base API URL may vary and is not mentioned here. So in production, each URL specified here must be prefixed with this base URL.

## Submit AIP
---
Allows to make bulk AIP storage request.

* **URL**:

  `/aips`

* **Method:**

  `POST`

* **Headers**

  `Content-Type: application/geo+json;charset=UTF-8`\
  `Accept: application/json`

* **URL Params**

  None.

* **Query Params**

  None.

* **Data Params**

  **Required:**

    ```json
    {
    "features" : [ {
        "ipType" : "DATA",
        "id" : "URN:AIP:DATA:PROJECT:d0e7eb09-a443-4f70-ae9c-519654667110:V1",
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
            "url" : "file:/home/svissier/workspace/REGARDS/rs-storage/storage/storage-rest/src/test/resources/data.txt",
            "algorithm" : "MD5",
            "checksum" : "de89a907d33a9716d11765582102b2e0"
            }
        } ],
        "pdi" : {
            "contextInformation" : { },
            "referenceInformation" : { },
            "provenanceInformation" : {
            "facility" : "CS",
            "history" : [ {
                "type" : "SUBMISSION",
                "comment" : "test event",
                "date" : "2017-10-31T08:49:38.246Z"
            } ]
            },
            "fixityInformation" : { },
            "accessRightInformation" : {
            "dataRights" : "public"
            }
        },
        "descriptiveInformation" : { }
        },
        "type" : "Feature"
    } ],
    "type" : "FeatureCollection"
    }
    ```
### Responses
---

* **Success Response:**

    * **Code:** 204 No Content

      **Headers:**

      `X-Content-Type-Options: nosniff`\
      `X-XSS-Protection: 1; mode=block`\
      `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`\
      `Pragma: no-cache`\
      `Expires: 0`\
      `X-Frame-Options: DENY`\
      `Access-Control-Allow-Origin: *`\
      `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`\
      `Access-Control-Allow-Headers: authorization, content-type, scope`\
      `Access-Control-Max-Age: 3600`\
      `X-Application-Context: storage-service-test:default,test:-1`\
