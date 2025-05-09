---
title: GeoJson format
sidebar_label: GeoJson format
sidebar_position: 3
slug: /development/backend/services/fem/guides/geojson-feature-format
---


Regardless of the API used, payload of each API is expected in [GeoJSON format](https://geojson.org/).

The basic structure is described as follows:

* A required `id`,
* A required `type` with value `Feature`,
* An optional [geometry in GeoJSON format](https://tools.ietf.org/html/rfc7946#section-3.1),
* An optional set of `properties`.

```json
{
    "id": "FeatureId",
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
            125.6,
            10.1
        ]
    },
    "properties": {
        "name": "Dinagat Islands"
    }
}
```

For the purposes of this microservice, the GeoJSON structure is extended with the following properties :

* An `urn` (uniform resource name as unique identifier) generated by the microservice when creating a new reference and **expected only** when updating a reference.
* A required `model` representing the name of the model defining the expected `properties` field structure (and previously configured).
* A required `entityType` defining the reference business type.
* An optional `files` property with a fixed structure that allows to store or reference physical data (service delegated to another microservice called `Storage Management`).

```json
{
    "id": "FeatureId",
    "urn": "UniqueFeatureId",
    "model": "RelatedModelName",
    "entityType": "DATA",
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
            125.6,
            10.1
        ]
    },
    "properties": {
        "name": "Dinagat Islands"
    },
    "files": [
        {
            "locations": [
                {
                    "storage": "DISK",
                    "url": "file://home/user/regards/file.zip"
                }
            ],
            "attributes": {
                "dataType": "RAWDATA",
                "mimeType": "application/zip",
                "filename": "file.zip",
                "filesize": 8013,
                "algorithm": "MD5",
                "checksum": "4e188bd8a6288164c25c3728ce394927"
            }
        }
    ]
}
```

### Payload detailed properties

#### Feature

|    Path    |              Type               |                                 Description                                  | Optional |
|:----------:|:-------------------------------:|:----------------------------------------------------------------------------:|:--------:|
|     id     |            `String`             |                               Id from provider                               |          |
|    urn     |            `String`             | Unique feature identifer based on provider identifier with TEST:REQUEST:2342 |          |
|    type    |            `String`             |                             Value is `"Feature"`                             |          |
|  geometry  | [GeoJSON](https://geojson.org/) |                Description of the feature geometry in GeoJSON                |   true   |
| entityType |            `String`             |        Whether we are dealing with `DATA`, `COLLECTION` or `DATASET`         |          | 
|   files    |            `String`             |        Whether we are dealing with `DATA`, `COLLECTION` or `DATASET`         |          | 
|   model    |            `String`             |        Whether we are dealing with `DATA`, `COLLECTION` or `DATASET`         |          | 
|  history   |            `String`             |        Whether we are dealing with `DATA`, `COLLECTION` or `DATASET`         |          | 


:::danger
URN is only expected in update and deletion requests
:::

#### Files

|         Path         |   Type   |                                     Description                                     | Optional |
|:--------------------:|:--------:|:-----------------------------------------------------------------------------------:|:--------:|
| locations[].storage  | `String` |                                       Storage                                       |   true   |
|   locations[].url    | `String` |                                    Url location                                     |          |
| attributes.dataType  | `String` | RAWDATA, QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD, DOCUMENT, THUMBNAIL, DESCRIPTION |          |
| attributes.mimeType  | `String` |                                      MIME type                                      |          |
| attributes.filename  | `String` |                                      Filename                                       |          |
| attributes.filesize  | `Number` |                                      File size                                      |   true   |
| attributes.algorithm | `String` |                                 Checksum algorithm                                  |   true   |
| attributes.checksum  | `String` |                                      Checksum                                       |   true   |


:::danger
Algorithm & checksum are required if data has to be stored by `Storage Management`.
:::

<a name="metadatappt"></a>