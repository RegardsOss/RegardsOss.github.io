---
layout: classic-docs
title: REGARDS OAIS implementation
short-title: REGARDS OAIS
---

{% include toc.md %}

## OAIS recommendation

REGARDS allows to populate catalog with products provided through [OAIS recommendation](https://public.ccsds.org/Pubs/650x0m2%28F%29.pdf).  

## REGARDS OAIS implementation

To do so, administrator can provide a GeoJson file containing :
 - metadata : information about how to handle features to acquire.
 - features : List of SIP containing products to acquire

Exemple :  

```json
{
  "type": "FeatureCollection",
  "metadata": {
    "sessionOwner": "demo",
    "session": "exemple-1",
    "ingestChain": "DefaultProcessingChain",
    "categories": ["DEMO"],
    "storages": [
      {
        "pluginBusinessId": "Local",
        "storePath" : "/demo/exemple-1",
        "targetTypes": []
      }
    ]
  },
  "features": [
    { 
      "type": "Feature",
      "id": "regards-2296-data-1",
      "ipType": "DATA",
      "geometry": null,
      "properties": {
        "contentInformations": [
          {
            "dataObject": {
               "regardsDataType": "RAWDATA",
               "filename": "data-1.dat",
               "locations": [ 
                 {
                   "url": "file:///regards/demo/data-1.dat"
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
             "tags": ["KEYWORD"] 
          },
          "provenanceInformation": { "history": [] },
          "accessRightInformation": {} 
        },
        "descriptiveInformation": { 
          "longValue": 11056,
          "creationdate": "2018-01-20T17:22:48Z",
          "doubleValue": 35.56598,
          "dataSetType": "type_01",
          "label": "REGARDS 2296 generated data -1" 
        }
      }
    }
  ]
}
```

### Metadata

```json
  "metadata": {
    "sessionOwner": "demo",
    "session": "exemple-1",
    "ingestChain": "DefaultProcessingChain",
    "categories": ["DEMO"],
    "storages": [
      {
        "pluginBusinessId": "Local",
        "storePath" : "/demo/exemple-1",
        "targetTypes": []
      }
    ]
  }
```
| property | Mandatory | description | possible values |
| -------- | ----------| ----------- | --------------- |
| sessionOwner | x | Identifier of the data provider. Used to monitor all products of a same prodivder | any text |
| session | x | Identifier of the current group of data. Used to monitor all products of a same session. | any text |
| ingestChain | x | Name of the configured ingest chain. This chain can be configured through administration IHM and contains all information about how to generate final product or AIP from the provided SIPs. | Any chain name configured |
| categories |  | List of keyword. Thoses keywords can be used lately to select products to add in the metacalog | any text |
| storages | x | List of storage description where to store physical files associated to any feature | - |
| storages -> pluginBusinessId | x | Name of the configured storage. Each storage have to be configured though the administrator IHM | Any configured storage label |
| storages -> storePath |  | Optional property to define a directory into the storage location to store each files | subdirectory path |
| targetTypes |  | Optional property to define which REGARDS type of files need to be stored in the current storage. If empty all files are stored in the storage |  `RAWDATA` , `QUICKLOOK_SD`, `QUICKLOOK_MD`, `QUICKLOOK_HD`,  `DOCUMENT`,  `THUMBNAIL`, `AIP`, `DESCRIPTION` |

### Features

```json
{ 
      "type": "Feature",
      "id": "regards-2296-data-1",
      "ipType": "DATA",
      "geometry": {
        "crs" : "WGS84",
        "type" : "Point", 
        "coordinates": [30, 10]
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
             "tags": ["KEYWORD"] 
          },
          "provenanceInformation": { "history": [] },
          "accessRightInformation": {} 
        },
        "descriptiveInformation": { 
          "property1": 11056,
          "date": "2018-01-20T17:22:48Z",
          "property2": 35.56598,
          "property3": ["type_01", "type_02"],
          "property4": "REGARDS demo",
          "property5": [ 10, 20 ],
        }
      }
    }
```

A feature is a product to acquire in regards.

| property | Mandatory | description | possible values |
| -------- | ----------| ----------- | --------------- |
| type | x | Fixed field to define a feature | Feature |
| id | x | Identifier of the product to acquire. This identifier must be unique. If two features have the same id then there will be identified as the same product with a different version | any text |
| ipType | x | type of the feature | COLLECTION, DATA, DATASET |
| geometry |  | Standard GeoJson geometry format of the feature | RFC7946 |
| contentInformations | x | Content informations by their structure allow to give some informations on the files associated to an information package. | - |
| pdi | x | Preservation Description Information | - |
| descriptiveInformation | x | A group key/value containing all specific information about the product | - | 

#### ContentInformation

`dataObject`

| property | Mandatory | description | possible values |
| -------- | ----------| ----------- | --------------- |
| dataObject | files reference | - |
| dataObject -> regardsDataType | x | REGARDS type of file | `RAWDATA` , `QUICKLOOK_SD`, `QUICKLOOK_MD`, `QUICKLOOK_HD`,  `DOCUMENT`,  `THUMBNAIL`, `AIP`, `DESCRIPTION` |
| dataObject -> filename | x | Name of the file to acquire | - | 
| dataObject -> locations | x | Location of the file to acquire. Locations are described under this table. | - | 
| dataObject -> checksum | x | Check sum of the file to acquire | - | 
| dataObject -> algorithm | x | Algorithm used to generate file checksum | - | 
| dataObject -> fileSize |  | Size in bytes of the file to acquire. This property will be automaticaly calculated if the file to acquire is directly accessible | - |

`dataObject -> locations`

| property | Mandatory | description | possible values |
| -------- | ----------| ----------- | --------------- |
| location -> storage |  | Storage location of the file. If this property is provided, then the file is already stored and REGARDS will only reference the file. There will be no move file operation. If the storage is a configured storage in REGARDS system so the file can be access, if not the file will ne considered as offline. | Any text | 
| location -> url | x | Location of the file. If no storage has been provided in the previous property, then the file will be copyed from this url to the storages defined in the metadata bloc and this url must be an accessible "file:///" url protocol. If a storage as been provided then this url can be any text that can be a known url for the given storage. | any text |

`representationInformation`

| property | Mandatory | description | possible values |
| -------- | ----------| ----------- | --------------- |
| semantic |  |  |  - |
| syntax | x |  |  - |
| syntax -> name | x | Name of the mime type of the file |
| syntax -> mimeType | x | mime type of the file to acquire |
| syntax -> height |  | Optional property to define in pixel the height of an image. This property will be automaticaly fill if the file to acquire is an image and is directly accessible | Number in pixel |
| syntax -> width |  | Optional property to define in pixel the height of an image. This property will be automaticaly fill if the file to acquire is an image and is directly accessible | Number in pixel |

#### pdi

| property | Mandatory | description | possible values |
| -------- | ----------| ----------- | --------------- |
| contextInformation -> tags |  | keywords to add to each feature | any text |
| provenanceInformation |  | Description of the origine and history of the feature |
| accessRightInformation |  | Description of the feature access rights |

### REGARDS Data types

| type | description |
| ---- | ----------- |
| `RAWDATA` | Type to reference a data file. |
| `QUICKLOOK_SD` | Type to reference a small resolution image of the preview of the product |
| `QUICKLOOK_MD`| Type to reference a medium resolution image of the preview of the product |
| `QUICKLOOK_HD`| Type to reference a large resolution image of the preview of the product |
| `DOCUMENT` | Type to reference a document associated to the product |
| `THUMBNAIL` | Type to reference a thumbnail of the product |
| `AIP`| Type to reference the matadata file of the product |
| `DESCRIPTION` | Type to reference a description of the product |
