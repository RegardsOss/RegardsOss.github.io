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

    * An opensearch request:

    ```json
    {
      "selectAllOpenSearchRequest" : "{opensearch_request}"
    }
    ```
    * **OR** an opensearch request with a list of data objects IP_IDs to evict:

    ```json
    {
      "selectAllOpenSearchRequest" : "{opensearch_request}",
      "ipIds" : [ "{IP_ID1}", "{IP_ID2}", ... ]
    }
    ```
    * **OR** a list of data objects IP_IDs to add:
    ```json
    {
      "ipIds" : [ "{IP_ID1}", "{IP_ID2}", ...  ]
    }
    ```
### Responses
---

* **Success Response:**<br/>
  **Code:** 200 <br/>
  **Content:**

    ```json
    {
       "content":{
          "id":{basket_id},
          "owner":"olivier.rousselot@c-s.fr",
          "datasetSelections":[
             {
                "id":{dataset_selection_id},
                "datasetIpid":"{dataset_IP_ID}",
                "datasetLabel":"{dataset_label}",
                "openSearchRequest":"((({opensearch_request}) AND creationDate:[* TO {selection_date}]) OR ((({previous_opensearch_request}) AND creationDate:[* TO {previous_selection_date}])) OR ...)",
                "objectsCount":{objects_count},
                "filesCount":{files_count},
                "filesSize":{total_files_size},
                "itemsSelections":[
                   {
                      "date":"{selection_date}",
                      "openSearchRequest":"({opensearch_request}) AND creationDate:[* TO {selection_date}]",
                      "objectsCount":{selection_objects_count},
                      "filesCount":{selection_files_count},
                      "filesSize":{selection_total_files_count}
                   },
                   {
                      "date":"{previous_selection_date}",
                      "openSearchRequest":"({previous_opensearch_request}) AND creationDate:[* TO {previous_selection_date}]",
                      "objectsCount":{previous_selection_objects_count},
                      "filesCount":{previous_selection_files_count},
                      "filesSize":{previous_selection_total_files_count}
                   },
                   ...
                ]
             },
             ...
          ]
       },
       "links":[

       ]
    }
    ```

* **Error Responses:**

  * If selection contains no data to be ordered:

     **Code:** 204 No Content<br/>
     **Content:**

  ```json
  {
    "messages" : [ "This selection contains no file that can be ordered" ]
  }
  ```

  * If request is empty (no opensearch request nor IP_IDs list provided):

    **Code:** 417 Expectation Failed <br/>
    **Content:**

  ```json
  {
    "messages" : [ "If opensearch request is null, at least on IP_ID must be provided" ]
  }
  ```

## Remove a dated items selection from the basket
---
Allows to remove a dated data objects selection under dataset selection from current basket.

* **URL**:

  `/order/basket//dataset/{datasetSelectionId}/{itemsSelectionDate}`

* **Method:**

  `DELETE`

* **Headers**

  `Content-Type: application/json;charset=UTF-8`\
  `Accept: application/json`\

* **URL Params**

  None.

* **Query Params**

  None.

* **Data Params**

  None.

* **Success Response:**<br/>
  **Code:** 200 <br/>
  **Content:**

    ```json
    {
       "content":{
          "id":{basket_id},
          "owner":"olivier.rousselot@c-s.fr",
          "datasetSelections":[
             {
                "id":{dataset_selection_id},
                "datasetIpid":"{dataset_IP_ID}",
                "datasetLabel":"{dataset_label}",
                "openSearchRequest":"((({previous_opensearch_request}) AND creationDate:[* TO {previous_selection_date}])) OR ...)",
                "objectsCount":{objects_count},
                "filesCount":{files_count},
                "filesSize":{total_files_size},
                "itemsSelections":[
                   {
                      "date":"{previous_selection_date}",
                      "openSearchRequest":"({previous_opensearch_request}) AND creationDate:[* TO {previous_selection_date}]",
                      "objectsCount":{previous_selection_objects_count},
                      "filesCount":{previous_selection_files_count},
                      "filesSize":{previous_selection_total_files_count}
                   },
                   ...
                ]
             },
             ...
          ]
       },
       "links":[

       ]
    }
    ```

* **Error Responses:**

  * If basket doesn't exist:

     **Code:** 204 No Content<br/>

## Remove a complete dataset selection from the basket
---
Allows to remove a complete dataset data objects selection from current basket.

* **URL**:

  `/order/basket//dataset/{datasetSelectionId}`

* **Method:**

  `DELETE`

* **Headers**

  `Content-Type: application/json;charset=UTF-8`\
  `Accept: application/json`\

* **URL Params**

  None.

* **Query Params**

  None.

* **Data Params**

  None.

* **Success Response:**<br/>
  **Code:** 200 <br/>
  **Content:**

    ```json
    {
       "content":{
          "id":{basket_id},
          "owner":"olivier.rousselot@c-s.fr",
          "datasetSelections":[
             ...
          ]
       },
       "links":[

       ]
    }
    ```

* **Error Responses:**

  * If basket doesn't exist:

     **Code:** 204 No Content<br/>

## Get the basket
---
Allows to retrieve the current basket.

* **URL**:

  `/order/basket`

* **Method:**

  `GET`

* **Headers**

  `Content-Type: application/json;charset=UTF-8`\
  `Accept: application/json`\

* **URL Params**

  None.

* **Query Params**

  None.

* **Data Params**

  None.

### Responses
---

* **Success Response:**<br/>
  **Code:** 200 <br/>
  **Content:**

    ```json
    {
       "content":{
          "id":{basket_id},
          "owner":"olivier.rousselot@c-s.fr",
          "datasetSelections":[
             {
                "id":{dataset_selection_id},
                "datasetIpid":"{dataset_IP_ID}",
                "datasetLabel":"{dataset_label}",
                "openSearchRequest":"((({opensearch_request}) AND creationDate:[* TO {selection_date}]) OR ((({previous_opensearch_request}) AND creationDate:[* TO {previous_selection_date}])) OR ...)",
                "objectsCount":{objects_count},
                "filesCount":{files_count},
                "filesSize":{total_files_size},
                "itemsSelections":[
                   {
                      "date":"{selection_date}",
                      "openSearchRequest":"({opensearch_request}) AND creationDate:[* TO {selection_date}]",
                      "objectsCount":{selection_objects_count},
                      "filesCount":{selection_files_count},
                      "filesSize":{selection_total_files_count}
                   },
                   {
                      "date":"{previous_selection_date}",
                      "openSearchRequest":"({previous_opensearch_request}) AND creationDate:[* TO {previous_selection_date}]",
                      "objectsCount":{previous_selection_objects_count},
                      "filesCount":{previous_selection_files_count},
                      "filesSize":{previous_selection_total_files_count}
                   },
                   ...
                ]
             },
             ...
          ]
       },
       "links":[

       ]
    }
    ```

* **Error Responses:**

  * If basket doesn't exist:

     **Code:** 204 No Content<br/>

## Empty the basket
---
Allows to empty the current basket.

* **URL**:

  `/order/basket`

* **Method:**

  `DELETE`

* **Headers**

  `Content-Type: application/json;charset=UTF-8`\
  `Accept: application/json`\

* **URL Params**

  None.

* **Query Params**

  None.

* **Data Params**

  None.

### Responses
---

* **Success Response:**<br/>
  **Code:** 200 <br/>

* **Error Responses:**
  None.
