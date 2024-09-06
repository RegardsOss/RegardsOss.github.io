---
title: Download product file API
sidebar_label: Download product file
slug: /development/backend/services/catalog/api-guides/rest/download-product-file-api/
sidebar_position: 5
---

_This page assumes you know how [to authenticate](../../../../services/authentication/api-guides/rest/authent-oauth2.mdx) your REST API
requests_

This section introduces you the API provided by REGARDS to download product files.

## Download principle

When a product is available for the user, the user can download it with a request to the `Catalog` service.
When the service receives such a request, several steps are performed:
* First, the service checks the access rights of the product. It ensures that the user has the rights to download the 
  product and that the license of the dataset of the product has been accepted.
* If users has the proper rights and has not reached its download quota, the `Catalog` service calls the `Storage` 
  service through its REST Client. `Storage` is the microservice responsible for retrieving the product from its 
  storage location.

This guide introduce you **2 endpoints** related to downloading:

- [Search products and files](#search-products-and-files) gives you the status of the file and where to download it.
- [Download file](#download-file) to download

## Search products and files

REGARDS offers many ways to search product, you can refer to [Search engine guide](legacy-search-api.mdx).

```json title="A nearline product file - standard lucene search engine"
{
  "id": "URN:FEATURE:DATA:tenant:50fe35a3-e085-3eb1-bb61-86ab3fdeb7dd:V3",
  "providerId": "DATA-06-20220613-2390",
  "entityType": "DATA",
  ...,
  "files": {
    "RAWDATA": [
      {
        "dataType": "RAWDATA",
        "reference": false,
        "uri": "https://regards.host.com/api/v1/rs-catalog/downloads/URN:FEATURE:DATA:tenant:50fe35a3-e085-3eb1-bb61-86ab3fdeb7dd:V3/files/BF39BC048B52618838529D9D98043190",
        "mimeType": "application/xml",
        "online": false,
        "checksum": "BF39BC048B52618838529D9D98043190",
        "digestAlgorithm": "MD5",
        "filesize": 190,
        "filename": "iso.xml",
        "types": []
      }
    ]
  }
}
```

On every product files returned by standard lucene search engine, you have an

* `online` attribute:
    * `true` means the file is always available, and you can [download it](#download-file) without restore it.
    * `false` means the file is **nearline**, you need
      to **[check and restore product files when required](product-file-restoration-api.mdx)** first.
* `reference` attribute:
    * `true` means the file is provided by another service, external to REGARDS.
    * `false` means REGARDS provides an URI to download the product files.

:::info Reference attribute and authentication
Tips : In the response, if `reference` value is **true**, authentication token is not needed, because file is not
stored by REGARDS.
:::

:::note Differences between search engines
If you don't use the standard lucene search engine (like STAC or OpenSearch), the response does not contain the `online`
and `reference` attribute.  
It means you need to [check and restore product files when required](product-file-restoration-api.mdx) before trying
to download.
:::

## Download file

### Endpoint

| Endpoint                                                                                                     | Verb |
|--------------------------------------------------------------------------------------------------------------|------|
| [/downloads/{aip_id}/files/{checksum}](./api-swagger#tag/catalog-download-controller/operation/downloadFile) | GET  |

Download is possible only if:

* the file is [available](file-restoration-api#check-product-availability-endpoint)
* user has access right 
* user didn't reach its download quotas yet.
* license of the dataset has been accepted (needed if license is not public)


