---
id: appendices-oais
title: REGARDS OAIS implementation
sidebar_label: REGARDS OAIS
slug: /development/appendices/oais/
---

## Overview

REGARDS allows to populate its [OAIS catalog](../../overview/functional-overview/03-oais-catalog-services.md) with products by
following
the [OAIS recommendation](https://public.ccsds.org/Pubs/650x0m2%28F%29.pdf).

:::info
This section define the global format of OAIS products.
:::

To learn more about how to populate Regards catalog with OAIS products,
see [REST API Guide](../services/ingest/api-guides/rest/submit-sip.mdx)
or [AMQP API Guide](../services/ingest/api-guides/amqp/ingest-amqp-publish-product.mdx)

## OAIS Product format

### GeoJson base structure

Product formated for OAIS recommendation is based on GeoJson standard with some specific properties.

Example :

```json
{
  "type": "Feature",
  "id": "regards-2296-data-1",
  "ipType": "DATA",
  "geometry": {
    "crs": "WGS84",
    "type": "Point",
    "coordinates": [
      30,
      10
    ]
  },
  "properties": {
    "contentInformations": [
      {
        "dataObject": {
          "regardsDataType": "RAWDATA",
          "filename": "regards-2296-data-1.dat",
          "locations": [
            {
              "url": "file:///regards-input/validation/data/2296/regards-2296-data-1.dat"
            }
          ],
          "checksum": "9a964ed3be0e2e2786d82ace9d971e90",
          "algorithm": "MD5"
        },
        "representationInformation": {
          "syntax": {
            "name": "TEXT",
            "mimeType": "text/plain"
          }
        }
      }
    ],
    "pdi": {
      "contextInformation": {
        "tags": [
          "KEYWORD"
        ]
      },
      "provenanceInformation": {
        "history": []
      },
      "accessRightInformation": {}
    },
    "descriptiveInformation": {
      "property1": 11056,
      "date": "2018-01-20T17:22:48Z",
      "property2": 35.56598,
      "property3": [
        "type_01",
        "type_02"
      ],
      "property4": "REGARDS demo",
      "property5": [
        10,
        20
      ]
    }
  }
}
```

| Property               | Mandatory | Description                                                                                                                                                                        |                                      Possible values                                      |
|:-----------------------|:---------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------:|
| type                   |     x     | Feature type. Fixed value                                                                                                                                                          |                                         `Feature`                                         |
| id                     |     x     | (Your) Identifier of the product to acquire. This identifier must be unique. If two features have the same id then we consider there is two different versions of the same product |                                         any text                                          |
| ipType                 |     x     | REGARDS type of feature                                                                                                                                                            |                              `COLLECTION`, `DATA`, `DATASET`                              |
| geometry               |           | Standard GeoJson geometry of the feature                                                                                                                                           | RFC7946 `Point`, `LineString`, `Polygon`, `MultiPoint`, `MultiLineString`, `MultiPolygon` |
| contentInformations    |     x     | Feature associated files                                                                                                                                                           |                                       Can be empty                                        |
| pdi                    |     x     | Preservation Description Information                                                                                                                                               |                                             -                                             |
| descriptiveInformation |     x     | A group key/value containing all specific information about the product                                                                                                            |                                             -                                             |

### ContentInformation section

`dataObject`

```json
{
  "dataObject": {
    "regardsDataType": "RAWDATA",
    "filename": "regards-2296-data-1.dat",
    "locations": [
      {
        "url": "file:///regards-input/validation/data/2296/regards-2296-data-1.dat"
      }
    ],
    "checksum": "9a964ed3be0e2e2786d82ace9d971e90",
    "algorithm": "MD5"
  }
}
```

| Property        | Mandatory | Description                                                                                                                       |                                               Possible values                                               |
|:----------------|:---------:|:----------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------:|
| regardsDataType |     x     | REGARDS type of file                                                                                                              | `RAWDATA` , `QUICKLOOK_SD`, `QUICKLOOK_MD`, `QUICKLOOK_HD`,  `DOCUMENT`,  `THUMBNAIL`, `AIP`, `DESCRIPTION` |
| filename        |     x     | Name of the file to acquire                                                                                                       |                                                      -                                                      |
| locations       |     x     | Location of the file to acquire. Locations are described under this table.                                                        |                                                      -                                                      |
| checksum        |     x     | Checksum of the file to acquire                                                                                                   |                                                      -                                                      |
| algorithm       |     x     | Algorithm used to generate file checksum                                                                                          |                                                  `MD5`...                                                   |
| fileSize        |           | Size in bytes of the file to acquire. This property will be automaticaly calculated if the file to acquire is directly accessible |                                                      -                                                      |

`dataObject locations`

```json
{
  "locations": [
    {
      "url": "file:///regards/demo/data-1.dat"
    },
    {
      "storage": "FTP Server",
      "url": "ftp:/172.125.10.1/regards/demo/ftp/data-1.dat"
    }
  ]
}
```

| Property | Mandatory | Description                                                                                                                                                                                                                                                                                                                                                                | Possible values |
|:---------|:---------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------:|
| storage  |           | Storage location of the file. If this property is provided, then the file is already stored and REGARDS will only keep the reference to the file. There will be no move file operation. If the storage is a configured storage in REGARDS system so the file can be accessed, if not the file will be considered as offline.                                               |    Any text     |
| url      |     x     | Location of the file. If previous property `storage` is not provided, then the file will be copyed from this url to the storages defined in the metadata bloc, so ensure this url must be an accessible `file:///` url protocol from the Storage microservice. If a storage has been provided then this url can be any text that can be a known url for the given storage. |    any text     |

:::note
To reference an online file accessible through HTTP protocol, you have to use the reference system as the
example bellow.  
With this reference, the file will be known by REGARDS as an online referenced file and will be
accessible without any needs to configure a storage location associated.  
With this type of reference, the file url
provided by REGARDS meta-catalog will be the original provided url.
:::

```json
{
  "locations": [
    {
      "storage": "web",
      "url": "https://regardsoss.github.io/appendices/oais"
    }
  ]
}
``` 

`representationInformation`

```json
{
  "representationInformation": {
    "semantic": {},
    "syntax": {
      "name": "TEXT",
      "mimeType": "text/plain"
    }
  }
}
```

| Property | Mandatory | Description                                                                                                                                                        | Possible values |
|:---------|:---------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------:|
| semantic |           |                                                                                                                                                                    |        -        |
| name     |     x     | Name of the mime type of the file                                                                                                                                  |
| mimeType |     x     | Mime type of the file to acquire                                                                                                                                   |
| height   |           | Optional property to define in pixel the height of an image. This property will be automaticaly fill if the file to acquire is an image and is directly accessible | Number in pixel |
| width    |           | Optional property to define in pixel the height of an image. This property will be automaticaly fill if the file to acquire is an image and is directly accessible | Number in pixel |

### Preservation Description Information (pdi) section

```json
{
  "pdi": {
    "contextInformation": {
      "tags": [
        "KEYWORD"
      ]
    },
    "provenanceInformation": {
      "history": [],
      "additional": {
        "urn": ""
      }
    },
    "accessRightInformation": {
    }
  }
}
```

| Property                             | Mandatory | Description                                                         | Possible values |
|:-------------------------------------|:---------:|:--------------------------------------------------------------------|:---------------:|
| tags                                 |           | keywords to add to each feature                                     |    any text     |
| provenanceInformation                |           | Description of the origin and history of the feature.               |                 |
| provenanceInformation.additional.urn |           | Original urn of the product, in case of dissemination for instance. |    Valid urn    |
| accessRightInformation               |           | Description of the feature access rights                            |                 |

### REGARDS Data types

| Type           | Description                                                        |
|:---------------|:-------------------------------------------------------------------|
| `RAWDATA`      | Type to reference a data file.                                     |
| `QUICKLOOK_SD` | Type to reference a small resolution image of the product preview  |
| `QUICKLOOK_MD` | Type to reference a medium resolution image of the product preview |
| `QUICKLOOK_HD` | Type to reference a large resolution image of the product preview  |
| `DOCUMENT`     | Type to reference a document associated to the product             |
| `THUMBNAIL`    | Type to reference a thumbnail of the product                       |
| `AIP`          | Type to reference the metadata file of the product                 |
| `DESCRIPTION`  | Type to reference a description of the product                     |

