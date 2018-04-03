---
layout: classic-docs
title: REGARDS Ingest API
categories:
  - api
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# REGARDS BASKET API

Base API URL may vary and is not mentioned here. So in production, each URL specified here must be prefixed with this base URL.

## Add a selection to the basket
---
Allows to create a basket or adding a data selection to current one.

* **URL**:

  `/order/basket/selection`

* **Method:**

  `POST`

* **Headers**

  `Content-Type: application/json;charset=UTF-8`\
  `Accept: application/json`\

* **URL Params**

  None.

* **Query Params**

  None.

* **Data Params**

  **Required:**

An opensearch request:

```json
{
  "selectAllOpenSearchRequest" : "tags:"URN%3AAIP%3ADATASET%3AOlivier%3A33c675a0-ccc9-42cc-8d2d-3a2875eb80d3%3AV1""
}
```
OR an opensearch request with a list of data objects IP_IDs to evict:

```json
{
  "selectAllOpenSearchRequest" : "tags:"URN%3AAIP%3ADATASET%3AOlivier%3A33c675a0-ccc9-42cc-8d2d-3a2875eb80d3%3AV1"",
  "ipIds" : [ "URN:AIP:DATA:project2:77d75611-fac4-3047-8d3b-e0468fe1063e:V1" ]
}
```
OR a list of data objects IP_IDs to add:
```json
{
  "ipIds" : [ "URN:AIP:DATA:project2:77d75611-fac4-3047-8d3b-e0468fe1063e:V1" ]
}
```
### Responses
---

* **Success Response:**
  * **Code:** 200 <br />
    **Content:**
```json
{
   "content":{
      "id":552,
      "owner":"olivier.rousselot@c-s.fr",
      "datasetSelections":[
         {
            "id":602,
            "datasetIpid":"URN:AIP:DATASET:Olivier:33c675a0-ccc9-42cc-8d2d-3a2875eb80d3:V1",
            "datasetLabel":"Dataset Olivier",
            "openSearchRequest":"((tags:\"URN:AIP:DATASET:Olivier:33c675a0-ccc9-42cc-8d2d-3a2875eb80d3:V1\") AND creationDate:[* TO 2018-04-03T15:37:07.235Z])",
            "objectsCount":5,
            "filesCount":5,
            "filesSize":6651117568,
            "itemsSelections":[
               {
                  "date":"2018-04-03T15:37:07.235Z",
                  "openSearchRequest":"(tags:\"URN:AIP:DATASET:Olivier:33c675a0-ccc9-42cc-8d2d-3a2875eb80d3:V1\") AND creationDate:[* TO 2018-04-03T15:37:07.235Z]",
                  "objectsCount":5,
                  "filesCount":5,
                  "filesSize":6651117568
               }
            ]
         }
      ]
   },
   "links":[

   ]
}
```
* **Error Response:**
If selection contains no data to be ordered:
  * **Code:** 204 No Content
```json
{
  "messages" : [ "This selection contains no file that can be ordered" ]
}
```
If request is empty (no opensearch request nor IP_IDs list provided):
* **Code:** 417 Expectation Failed
  **Content:**

```json
{
  "messages" : [ "If opensearch request is null, at least on IP_ID must be provided" ]
}
```
