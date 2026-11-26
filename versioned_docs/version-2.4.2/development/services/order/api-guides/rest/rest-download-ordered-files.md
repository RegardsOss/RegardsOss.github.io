---
id: backend-order-download-ordered-files
title: Download ordered files
sidebar_label: Download ordered files
sidebar_position: 4
slug: /development/backend/services/order/guides/download-ordered-files
---

*This page assumes you know how
to [authenticate](../../../authentication/api-guides/rest/authent-oauth2.mdx)
your REST API requests *

Once your order request is processed, you can download the order result as a zip archive file using the here-under
endpoint.

| description                                         | url                                                     | verb | 
|-----------------------------------------------------|---------------------------------------------------------|------|
| Download all available files from provided order ID | `<HOST>/api/v1/rs-order/user/orders/{orderId}/download` | GET  |

`Request headers` :

```json
"Authorization: Bearer <token>"
```

| Parameter | Type   | Optional | Description                                                                                               |
|-----------|--------|:--------:|-----------------------------------------------------------------------------------------------------------|
| `orderId` | Int    |    No    | Order identifier                                                                                          |
| `token`   | String |    No    | [Authentication token](../../../authentication/api-guides/rest/authent-oauth2.mdx) |

The downloaded file is named `order_<orderId>_<date>.zip`.  
Example: `order_1_2023-01-24T09_21_50.727542704Z.zip`

:::info
This endpoint will download currently available files from your order.  
This file is a zip archive file containing all files associated to ordered products.  
You can use this endpoint everytime new files are available.
:::

### cURL example

```bash
curl -v -O "<HOST>/api/v1/rs-order/user/orders/1234/download" \
  -H "Authorization: Bearer <token>"
```
