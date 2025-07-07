---
id: backend-get-order-status-rest
title: Get Order status
sidebar_label: Get Order status
sidebar_position: 3
slug: /development/backend/services/order/guides/get-order-status-rest
---

*This page assumes you know how to [authenticate](../../../authentication/api-guides/rest/authent-oauth2.mdx) your REST
API requests *

This guide explains how to retrieve the **order status and available files links** to download them.

### Request

| description                                                                  | url                                                                           | verb | 
|------------------------------------------------------------------------------|-------------------------------------------------------------------------------|------|
| Retrieve order status and available files to download using order identifier | `<HOST>/api/v1/rs-order/user/orders/{orderId}/files/available?page=0&size=50` | GET  |

| Parameter | Type | Optional | Description                                           |
|-----------|------|:--------:|-------------------------------------------------------|
| orderId   | Int  |    No    | Order identifier.                                     |
| page      | Int  |   Yes    | Page number, default to `0`.                          |
| size      | Int  |   Yes    | Number of available files to display, default to `50` |

`Request headers`

```json
"Authorization: Bearer <token>"
```

### Response

| Http status | description                                                                  |
|-------------|------------------------------------------------------------------------------|
| `200`       | Your order request is over and all files available can be downloaded         |
| `204`       | Your order request is pending. No file is available for download yet         |
| `206`       | Your order request is pending. Some files are already available for download |
| `403`       | Access denied                                                                |

:::info How to use HTTP status?
You can request this endpoint as long as the response status is not `200`.  
If status is `206`, the order is not finished but there is some available files you can already download.  
If you order creates several SubOrders (your order contains many large files), your order request can be blocked until
you have successfully downloaded first available files.  
:::

```json
{
  "metadata": {
    "number": 0,
    "size:": 50,
    "totalElements": 2,
    "totalPages": 1
  },
  "content": [
    {
      "productId": "product",
      "checksum": "afc76dfea831352297b9097dd4b6c8ab",
      "fileSize": 1523654,
      "filename": "file.txt",
      "mimeType": "application/text",
      "uri": "<HOST>/api/v1/rs-catalog/{productURN}/files/{fileChecksum}"
    },
    {
      "productId": "product",
      "checksum": "f3fbc55040c2113d49220f81c8cfdb52",
      "fileSize": 1523654,
      "filename": "file2.txt",
      "mimeType": "application/text",
      "uri": "<HOST>/api/v1/rs-catalog/{productURN}/files/f3fbc55040c2113d49220f81c8cfdb52"
    }
  ]
}
```

:::info
This endpoint gives you files link that you can download.  
The [Download ordered files inside archive](./download-ordered-files) is another download endpoint that creates an
archive containing all availables files.
:::

### cURL example

```bash
curl -v "<HOST>/api/v1/rs-order/orders/{orderId}/files/available" \
  -H "Authorization: Bearer <token>"
```
