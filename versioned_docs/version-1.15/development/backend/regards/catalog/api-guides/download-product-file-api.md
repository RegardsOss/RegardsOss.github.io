---
id: backend-catalog-download-product-file-api
title: Download product file API
sidebar_label: Download product file API
slug: /development/backend/services/catalog/download-product-file-api/
---
_This page assumes you know how [to authenticate](./../../authentication/api-guides/get-token-curl.md) your REST API
requests_

This section introduces you the API provided by REGARDS to download product files.

- [Search products and files](#search-products-and-files) gives you the status of the file and where to download it.
- [Download file](#download-file) to download

## Search products and files

REGARDS offers many ways to search product, you can refer to [product search guide](search-api.md).

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
      to **[check and restore product files when required](./product-file-restoration-api.mdx)** first.
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
It means you need to [check and restore product files when required](./product-file-restoration-api.mdx) before trying
to download.
:::

## Download file

The [download product file endpoint](../catalog-api-swagger.mdx#tag/catalog-download-controller/operation/downloadFile)
requires the product URN and file checksum.  
Download is possible only if:

* the file is [available](./product-file-restoration-api.mdx#check-product-availability-endpoint)
* user has access right
* license of the dataset has been accepted (needed if license is not public)


