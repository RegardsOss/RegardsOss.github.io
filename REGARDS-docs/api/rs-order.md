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
          "owner":"{user_email}",
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

  datasetSelectionId: dataset selection id (from basket).
  itemsSelectionDate: date from dated selection under dataset selection (from basket).

* **Data Params**

  None.

* **Success Response:**<br/>
  **Code:** 200 <br/>
  **Content:**

    ```json
    {
       "content":{
          "id":{basket_id},
          "owner":"{user_email}",
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

  datasetSelectionId: dataset selection id (from basket).

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
          "owner":"{user_email}",
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
          "owner":"{user_email}",
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

# REGARDS ORDER API

Base API URL may vary and is not mentioned here. So in production, each URL specified here must be prefixed with this base URL.

## Create an order
---
Allows to validate current basket and create corresponding order.

* **URL**:

  `/user/orders`

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

    ```json
    {
       "onSuccessUrl":"/user/Olivier/redirect?module=order-history"
    }
    ```

    * **Success Response**<br/>
      **Code:** 200 <br/>
      **Content:**
    
    ```json
    {  
       "content":{  
          "id":{order_id},
          "owner":"{user_email}",
          "creationDate":"{creation_date}",
          "expirationDate":"{creation_date + 3 days}",
          "percentCompleted":0,
          "filesInErrorCount":0,
          "availableFilesCount":0,
          "status":"RUNNING",
          "statusDate":"{running_status_date}",
          "waitingForUser":false,
          "datasetTasks":[  
             {  
                "id":{dataset_task_id},
                "datasetLabel":"{dataset_label}",
                "objectsCount":{dataset_objects_count},
                "filesCount":{dataset_files_count},
                "filesSize":{dataset_total_files_size}
             },
             ...
          ]
       },
       "links":[  
    
       ]
    }
    ```

* **Error Responses:**

  * If basket doesn't exist or is empty:

     **Code:** 204 No Content<br/>

## Retrieve an order
---
Allows to retrieve specified order.

* **URL**:

  `/user/orders/{orderId}`

* **Method:**

  `GET`

* **Headers**

  `Content-Type: application/json;charset=UTF-8`\
  `Accept: application/json`\

* **URL Params**

  orderId: order id (from order creation).

* **Query Params**

  None.

* **Data Params**

  **Required:**

    ```json
    {
       "onSuccessUrl":"{on_success_url}"
    }
    ```

* **Success Response**<br/>
  **Code:** 200 <br/>
  **Content:**

```json
{
   "content":{
      "id":{order_id},
      "owner":"{user_email}",
      "creationDate":"{creation_date}",
      "expirationDate":"{creation_date + 3 days}",
      "percentCompleted":0,
      "filesInErrorCount":0,
      "availableFilesCount":0,
      "status":"RUNNING",
      "statusDate":"{running_status_date}",
      "waitingForUser":false,
      "datasetTasks":[
         {
            "id":{dataset_task_id},
            "datasetLabel":"{dataset_label}",
            "objectsCount":{dataset_objects_count},
            "filesCount":{dataset_files_count},
            "filesSize":{dataset_total_files_size}
         },
         ...
      ]
   },
   "links":[

   ]
}
```

* **Error Responses:**

  * If basket doesn't exist or is empty:

     **Code:** 204 No Content<br/>

## Pause an order
---
Allows to pause specified order.

* **URL**:

  `/user/orders/pause/{orderId}`

* **Method:**

  `PUT`

* **Headers**

  `Content-Type: application/json;charset=UTF-8`\
  `Accept: application/json`\

* **URL Params**

  orderId: order id (from order creation).

* **Query Params**

  None.

* **Data Params**

  None.

* **Success Response**<br/>
  **Code:** 200 <br/>

* **Error Responses:**

  * If order cannot be paused:

     **Code:** 401 Unauthorized<br/>
     **Content:**

   ```json
   {
       "messages": [
           "ORDER_MUST_BE_PENDING_OR_RUNNING"
       ]
   }
   ```

## Resume an order
---
Allows to resume specified order.

* **URL**:

  `/user/orders/resume/{orderId}`

* **Method:**

  `PUT`

* **Headers**

  `Content-Type: application/json;charset=UTF-8`\
  `Accept: application/json`\

* **URL Params**

  orderId: order id (from order creation).

* **Query Params**

  None.

* **Data Params**

  None.

* **Success Response**<br/>
  **Code:** 200 <br/>

* **Error Responses:**

  * If order cannot be resumed:

     **Code:** 401 Unauthorized<br/>
     **Content:**

   ```json
   {
    "messages": [
        "ONLY_PAUSED_ORDER_CAN_BE_RESUMED"
    ]
  }
   ```

## Delete an order
---
Allows to delete specified order (still present into database).

* **URL**:

  `/user/orders/{orderId}`

* **Method:**

  `DELETE`

* **Headers**

  `Content-Type: application/json;charset=UTF-8`\
  `Accept: application/json`\

* **URL Params**

  orderId: order id (from order creation).

* **Query Params**

  None.

* **Data Params**

  None.

* **Success Response**<br/>
  **Code:** 200 <br/>

* **Error Responses:**

  * If order cannot be deleted:

     **Code:** 401 Unauthorized<br/>
     **Content:**

   ```json
   {
    "messages": [
        "ORDER_MUST_BE_PAUSED_BEFORE_BEING_DELETED"
    ]
  }
   ```

## Remove an order
---
Allows to remove specified order (delete from database).

* **URL**:

  `/user/orders/remove/{orderId}`

* **Method:**

  `DELETE`

* **Headers**

  `Content-Type: application/json;charset=UTF-8`\
  `Accept: application/json`\

* **URL Params**

  orderId: order id (from order creation).

* **Query Params**

  None.

* **Data Params**

  None.

* **Success Response**<br/>
  **Code:** 200 <br/>

* **Error Responses:**

  * If order cannot be removed:

     **Code:** 401 Unauthorized<br/>
     **Content:**

   ```json
   {
    "messages": [
        "ORDER_MUST_NOT_BE_RUNNING"
    ]
  }
   ```

## Find all orders or all specified user orders
---
Allows to find all specified user orders or all users orders

* **URL**:

  `/orders`

* **Method:**

  `GET`

* **Headers**

  `Content-Type: application/json;charset=UTF-8`\
  `Accept: application/json`\

* **URL Params**

  None.

* **Query Params**

  user: user email (Optional).
  page: page number (0 is th first one).
  size: page size.


* **Data Params**

  None.

* **Success Response**<br/>
  **Code:** 200 <br/>
  **Content:**

```json
{
   "metadata":{
      "size":{page_size},
      "totalElements":{elements_count},
      "totalPages":{total_pages_count},
      "number":{page_number}
   },
   "content":[
      {
         "content":{
            "id":{order_id},
            "owner":"{user_email}",
            "creationDate":"{creation_date}",
            "expirationDate":"{expiration_date}",
            "percentCompleted":{completion_percentage},
            "filesInErrorCount":{files_in_error_count},
            "availableFilesCount":{available_to_download_files_count},
            "status":"{status}",
            "statusDate":"{date_of_last_status_change}",
            "waitingForUser":true|false,
            "datasetTasks":[
               {
                  "id":{dataset_task_id},
                  "datasetLabel":"{dataset_label}",
                  "objectsCount":{dataset_objects_count},
                  "filesCount":[dataset_files_count},
                  "filesSize":{dataset_total_files_size}
               }
            ]
         },
         "links":[

         ]
      },
      ...
   ],
   "links":[
      {
        ...
      }
   ]
}
```
* **Error Responses:**

  None.

## Generate a CSV file with all orders
---
Allows to create a CSV file containing all users orders

* **URL**:

  `/orders`

* **Method:**

  `GET`

* **Headers**

  `Content-Type: application/json;charset=UTF-8`\
  `Accept: test/csv`\

* **URL Params**

  None.

* **Query Params**

  None.

* **Data Params**

  None.

* **Success Response**<br/>
  **Code:** 200 <br/>
  **Content:**

```json

ORDER_ID;CREATION_DATE;EXPIRATION_DATE;OWNER;STATUS;STATUS_DATE;PERCENT_COMPLETE;FILES_IN_ERROR
453;2018-04-03T14:20:00.383Z;2018-04-06T14:20:00.383Z;default_user@regards.fr;PENDING;2018-04-03T14:20:00.383Z;0;0
...
```
* **Error Responses:**

  None.

## Find all current user orders
---
Allows to find all specified user orders or all users orders

* **URL**:

  `/user/orders`

* **Method:**

  `GET`

* **Headers**

  `Content-Type: application/json;charset=UTF-8`\
  `Accept: application/json`\

* **URL Params**

  None.

* **Query Params**

  page: page number (0 is th first one).
  size: page size.


* **Data Params**

  None.

* **Success Response**<br/>
  **Code:** 200 <br/>
  **Content:**

```json
{
   "metadata":{
      "size":{page_size},
      "totalElements":{elements_count},
      "totalPages":{total_pages_count},
      "number":{page_number}
   },
   "content":[
      {
         "content":{
            "id":{order_id},
            "owner":"{curren_user_email}",
            "creationDate":"{creation_date}",
            "expirationDate":"{expiration_date}",
            "percentCompleted":{completion_percentage},
            "filesInErrorCount":{files_in_error_count},
            "availableFilesCount":{available_to_download_files_count},
            "status":"{status}",
            "statusDate":"{date_of_last_status_change}",
            "waitingForUser":true|false,
            "datasetTasks":[
               {
                  "id":{dataset_task_id},
                  "datasetLabel":"{dataset_label}",
                  "objectsCount":{dataset_objects_count},
                  "filesCount":[dataset_files_count},
                  "filesSize":{dataset_total_files_size}
               }
            ]
         },
         "links":[

         ]
      },
      ...
   ],
   "links":[
      {
        ...
      }
   ]
}
```
* **Error Responses:**

  None.

## Download current order files
---
Allows to download a zip file containing all currently available order files.

* **URL**:

  `/user/orders/{orderId}/download`

* **Method:**

  `GET`

* **Headers**

  `Content-Type: application/json;charset=UTF-8`\
  `Accept: application/json`\

* **URL Params**

  orderId: order id (from order creation).

* **Query Params**

  None.

* **Data Params**

  None.

* **Success Response**<br/>
  **Code:** 200 <br/>
  **Headers:**

    `Content-disposition: attachment;filename=order_{date}.zip`\
    `Content-Type: application/octet-stream`\
    `Expires: Thu, 01 Jan 1970 00:00:00 GMT`\
    `Connection: keep-alive`

  **Content:**

  Zip file (to be downloaded).

* **Error Responses:**

  * If order doesn't exist:

     **Code:** 404 No Found<br/>
     **Content:**

     ```json
     {
         "messages": [
             "Entity fr.cnes.regards.modules.order.domain.Order with id : {order_id} doesn't exist"
         ]
     }
     ```

## Download order metalink file
---
Allows to download a metalink with all order files.

* **URL**:

  `/user/orders/{orderId}/metalink/download`

* **Method:**

  `GET`

* **Headers**

  `Content-Type: application/json;charset=UTF-8`\
  `Accept: application/json`\

* **URL Params**

  orderId: order id (from order creation).

* **Query Params**

  None.

* **Data Params**

  None.

* **Success Response**<br/>
  **Code:** 200 <br/>
  **Headers:**

    `Content-disposition: attachment;filename=order_{date}.metalink`\
    `Content-Type: application/metalink+xml`\
    `Expires: Thu, 01 Jan 1970 00:00:00 GMT`\
    `Connection: keep-alive`

  **Content:**

  Metalink file (to be downloaded).

* **Error Responses:**

  * If order doesn't exist:

     **Code:** 404 No Found<br/>
     **Content:**

     ```json
     {
         "messages": [
             "Entity fr.cnes.regards.modules.order.domain.Order with id : {order_id} doesn't exist"
         ]
     }
     ```

## Download order metalink file with public token
---
Allows to download a metalink with all order files with public generated token (given into sent email)

* **URL**:

  `/user/orders/metalink/download`

* **Method:**

  `GET`

* **Headers**

  `Content-Type: application/json;charset=UTF-8`\
  `Accept: application/json`\

* **URL Params**

  None.

* **Query Params**

  orderToken: token generated at order creation and sent by email to user.

* **Data Params**

  None.

* **Success Response**<br/>
  **Code:** 200 <br/>
  **Headers:**

    `Content-disposition: attachment;filename=order_{date}.metalink`\
    `Content-Type: application/metalink+xml`\
    `Expires: Thu, 01 Jan 1970 00:00:00 GMT`\
    `Connection: keep-alive`

  **Content:**

  Metalink file (to be downloaded).

* **Error Responses:**

  * If order doesn't exist:

     **Code:** 404 No Found<br/>
     **Content:**

     ```json
     {
         "messages": [
             "Entity fr.cnes.regards.modules.order.domain.Order with id : {order_id} doesn't exist"
         ]
     }
     ```

   * If token is not correct:

     **Code:** 401 Unauthorized<br/>
     **Content:**

     None.