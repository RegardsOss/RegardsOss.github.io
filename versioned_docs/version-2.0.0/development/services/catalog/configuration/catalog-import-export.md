---
id: backend-catalog-import-export
title: Import/Export
sidebar_label: Import/Export
slug: /development/backend/services/catalog/configuration/import-export
---

## Configuration

Dynamic settings can be updated by exporting and importing a JSON configuration file through the admin API or admin interface.
It's a configuration per tenant.

See [this REST endpoint](../api-guides/rest/api-swagger#tag/module-manager-controller/operation/importConfiguration) to 
import a configuration.

| Configuration type | Available | Description |
| ------------------ | --------- | ----------- |
| Import configuration in json format | True |  |
| Export configuration in json format | True |  |
| Reset configuration before import | True |  |

## OpenSearch Plugin configuration

### Description

This plugin let you override the following configuration :

| Name                      | Type                            | Optional | Description                              |
|---------------------------|---------------------------------|----------|------------------------------------------|
| engineConfiguration       | `EngineConfiguration`           | N        | Configuration for the search engine      |
| timeExtension             | `{"activated": boolean}`        | N        | Open search time extension               |
| regardsExtension          | `{"activated": boolean}`        | N        | Open search REGARDS extension            |
| mediaExtension            | `{"activated": boolean}`        | N        | Open search media extension              |
| earthObservationExtension | `{"activated": boolean}`        | N        | Open search Earth Observation extension  |
| parametersConfiguration   | `List<ParameterConfiguration\>` | Y        | Configuration for Open search parameters |

With `EngineConfiguration` containing the following parameters:

| Name              | Type   | Optional | Description                                                                                                         |
|-------------------|--------|----------|---------------------------------------------------------------------------------------------------------------------|
| searchTitle       | string | N        | Search title for response metadata. <br/>Used to construct metadatas for atom+xml and geo+json responses            |
| searchDescription | string | N        | Description for response metadatas. <br/>Used to construct metadatas for atom+xml and geo+json responses            |
| contact           | string | Y        | Email to contact                                                                                                    |
| tags              | string | Y        | Optional tags to add in Open search descriptor XML file. Each tag must be separated by a blank white space caracter |
| shortName         | string | N        | Engine short name                                                                                                   |
| longName          | string | Y        | Engine long name                                                                                                    |
| image             | string | Y        | Optional image URL                                                                                                  |
| attribution       | string | N        | Attribution of the search engine                                                                                    |

With `ParameterConfiguration` containing the following parameters:

| Name                   | Type    | Optional | Description                                                                                                         |
|------------------------|---------|----------|---------------------------------------------------------------------------------------------------------------------|
| allias                 | string  | N        | Name of the parameter that will be used in opensearch requests. If not specified the attributeModelJsonPath is used |
| name                   | string  | N        | Name that will be handled by opensearch parameters extensions                                                       |
| namespace              | string  | N        | Namespace that will be handled by opensearch parameters extensions                                                  |
| optionsEnabled         | boolean | N        | If true, enable the generation of possible values for the parameter in the OpenSearch descriptor XML file           |
| optionsCardinality     | integer | Y        | Limit of possible values for the parameter in the opensearch descriptor xml file                                    |
| attributeModelJsonPath | string  | N        | Full json path of associated REGARDS attribute                                                                      |

### Example

```json title="Catalog Open search engine plugin configuration example"
{
  "key": "fr.cnes.regards.modules.search.domain.plugin.SearchEngineConfiguration",
  "value": {
    "label": "GEODE",
    "configuration": {
      "pluginId": "opensearch",
      "label": "{label}",
      "businessId": "{uniqueIdentifier}",
      "version": "1.0.0",
      "priorityOrder": 0,
      "active": true,
      "parameters": [
        {
          "name": "engineConfiguration",
          "type": "POJO",
          "value": {
            "contact": "{contact email}",
            "searchTitle": "{search title}",
            "searchDescription": "{search description}",
            "tags": "{list of tags}",
            "shortName" : "{engine short name}",
            "longName": "{engine long name}",
            "image": "{url of an icon}",
            "attribution": "{engine attribution}"
                    
          }
        },
        {
          "name": "timeExtension",
          "type": "POJO",
          "value": {
            "activated": "{true or false}"
          }
        },
        {
          "name": "regardsExtension",
          "type": "POJO",
          "value": {
            "activated": "{true or false}"
          }
        },
        {
          "name": "mediaExtension",
          "type": "POJO",
          "value": {
            "activated": "{true or false}"
          }
        },
        {
          "name": "parametersConfiguration",
          "type": "COLLECTION",
          "value": [
            {
              "name": "name of the parameter 1",
              "allias": "alias of the parameter 1",
              "namespace": "namespafe of the parameter 1",
              "optionsEnabled": "{true or false}",
              "attributeModelJsonPath": "properties.<optional fragment name>.<attribute name>"
            },
            {
              "name": "name of the parameter 2",
              "allias": "alias of the parameter 2",
              "namespace": "namespafe of the parameter 2",
              "optionsEnabled": "{true or false}",
              "attributeModelJsonPath": " properties.<optional fragment name>.<attribute name>"
            }
          ]
        }
      ]
    }
  }
}
```

## Stac Plugin configuration

### Description

This plugin let you override the following configuration :

| Name                                   | Type                                | Optional | Description                                                                                                |
|----------------------------------------|-------------------------------------|----------|------------------------------------------------------------------------------------------------------------|
| stac-api-title                         | string                              | Y        | Title for the root STAC catalog                                                                            |
| stac-api-description                   | string                              | Y        | Description for the root STAC catalog                                                                      |
| stac-api-root-static-collection-title  | string                              | Y        | Displayed label for the static collections root                                                            |
| stac-api-root-dynamic-collection-title | string                              | Y        | Displayed label for the dynamic collections root                                                           |
| stac-api-datetime-property             | `StacDatetimePropertyConfiguration` | N        | Configuration for the datetime property, corresponding to the 'temporal' aspect of the STAC specifications |
| stac-api-links-property                | `StacSourcePropertyConfiguration`   | Y        | STAC links property                                                                                        |
| stac-api-assets-property               | `StacSourcePropertyConfiguration`   | Y        | STAC assets property                                                                                       |
| stac-properties                        | `List<StacPropertyConfiguration\>`  | Y        | List of STAC properties to be mapped to product properties                                                 |
| stac-collection-dataset-properties     | `List<CollectionConfiguration\>`    | N        | Configuration for Open search parameters                                                                   |
| eodag-properties                       | `EODAGConfiguration`                | Y        | EODAG configuration to be injected in python script template                                               |
| histogram-property-path                | string                              | Y        | Fully qualified property path from data model                           <br/>                              |

With `StacDatetimePropertyConfiguration` containing the following parameters:

| Name                        | Type    | Optional | Description                                                                                            |
|-----------------------------|---------|----------|--------------------------------------------------------------------------------------------------------|
| sourcePropertyPath          | string  | Y        | Path to the model attribute and its corresponding source property in a product                         |
| sourceJsonPropertyPath      | string  | Y        | If the model attribute is of type JSON, defines the path in the JSON structure where to read the value |
| stacDynamicCollectionLevel  | integer | Y        | STAC dynamic collection level                                                                          |
| stacDynamicCollectionFormat | string  | Y        | STAC dynamic collection format                                                                         |

With `StacSourcePropertyConfiguration` containing the following parameters:

| Name                   | Type   | Optional | Description                                                                                            |
|------------------------|--------|----------|--------------------------------------------------------------------------------------------------------|
| sourcePropertyPath     | string | N        | Path to the model attribute and its corresponding source property in a product                         |
| sourceJsonPropertyPath | string | Y        | If the model attribute is of type JSON, defines the path in the JSON structure where to read the value |
| sourcePropertyFormat   | string | Y        | Format for the source property valu                                                                    |

With `StacPropertyConfiguration` containing the following parameters:

| Name                        | Type    | Optional | Description                                                                                                                                                       |
|-----------------------------|---------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| stacComputeSummary          | boolean | N        | If true, a summary should be computed for this property in the collection. Only applicable for STAC type value among 'ANGLE', 'LENGTH', 'PERCENTAGE' and 'NUMBER' |
| stacDynamicCollectionLevel  | integer | Y        | STAC dynamic collection level                                                                                                                                     |
| stacDynamicCollectionFormat | string  | Y        | STAC dynamic collection format                                                                                                                                    |

With `CollectionConfiguration` containing the following parameters:

| Name        | Type                           | Optional | Description                                                    |
|-------------|--------------------------------|----------|----------------------------------------------------------------|
| datasetUrns | `List<string\>`                | Y        | URN of the datasets concerned by this collection configuration |
| license     | string                         | Y        | License this collection is running under                       |
| keywords    | `List<string\>`                | Y        | Keywords this collection corresponds to                        |
| providers   | `List<ProviderConfiguration\>` | Y        | Providers for dataset URN                                      |

With `ProviderConfiguration` containing the following parameters:

| Name                | Type            | Optional | Description                                                                                                                     |
|---------------------|-----------------|----------|---------------------------------------------------------------------------------------------------------------------------------|
| providerName        | string          | Y        | Name of the institution which provides this collection                                                                          |
| providerDescription | string          | Y        | Description of the institution which provides this collection                                                                   |
| providerUrl         | string          | Y        | URL to the institution which provides this collectio                                                                            |
| providerRoles       | `List<string/>` | Y        | Roles of the institution which provides this collection among the following values: 'LICENSOR', 'PRODUCER', 'PROCESSOR', 'HOST' |

With `EODAGConfiguration` containing the following parameters:

| Name       | Type   | Optional | Description                                                    |
|------------|--------|----------|----------------------------------------------------------------|
| portalName | string | Y        | Name of the portal to render in downloaded script              |
| provider   | string | Y        | Name of EODAG provider variable to render in downloaded script |
| apiKey     | string | Y        | EODAG virtual environment variable for API Key                 |

### Example

```json title="Catalog STAC plugin configuration example"
{
        "pluginId": "stac",
        "label": "{label}",
        "businessId": "{uniqueIdentifier}",
        "version": "1.0.0",
        "priorityOrder": 1,
        "active": true,
        "parameters": [{
                "name": "stac-api-title",
                "type": "STRING",
                "value": "{stac root title}"
            },
            {
                "name": "stac-api-description",
                "type": "STRING",
                "value": "{stac root description}"
            },
            {
                "name": "stac-api-root-static-collection-title",
                "type": "STRING",
                "value": "{static collection root label}"
            },
            {
                "name": "stac-api-root-dynamic-collection-title",
                "type": "STRING",
              "value": "{dynamic collection root label}"
            },
            {
                "name": "stac-api-datetime-property",
                "type": "POJO",
                "value": {
                    "sourcePropertyPath": "datetime"
                }
            },
            {
                "name": "stac-properties",
                "type": "COLLECTION",
                "value": [{
                        "stacPropertyName": "{property1}",
                        "sourcePropertyPath": "{path property1}",
                        "stacComputeSummary": "{true or false}",
                        "stacPropertyExtension": "{property1 extension}",
                        "stacDynamicCollectionLevel": 1
                    },
                    {
                      "stacPropertyName": "{property2}",
                      "sourcePropertyPath": "{path property2}",
                      "stacComputeSummary": "{true or false}",
                      "stacPropertyExtension": "{property2 extension}",
                      "stacDynamicCollectionLevel": 1
                    }
                ]
            },
            {
                "name": "stac-collection-dataset-properties",
                "type": "COLLECTION",
                "value": [{
                    "license": "{license name}",
                    "datasetUrns": ["{URN of the dataset}"],
                   "keywords": ["{keyword1}", "{keyword2}"]
                }]
            }
        ]
    }
```


## Catalog services plugins configuration

| Name               | Type    | Default Value | Description                                                                                  |
|--------------------|---------|---------------|----------------------------------------------------------------------------------------------|
| applyToAllDatasets | boolean | `false`       | If not true, then the user has to configure each dataset to allow <br/>access to the service |

### Download plugin configuration

| Name                   | Type    | Default Value  | Description                                                    |
|------------------------|---------|----------------|----------------------------------------------------------------|
| maxFilesToDownload     | integer | `1000`         | Maximum number of files that the plugin allows to download     |
| maxFilesSizeToDownload | integer | `100`          | Maximum total size in Mo of selected files for one download    |
| archiveFileName        | String  | `download.zip` | Name of the archive containing all selected files for download |

### Meta Link Download plugin configuration

| Name       | Type    | Default Value | Description                                                                           |
|------------|---------|---------------|---------------------------------------------------------------------------------------|
| onlyImages | boolean | `false`       | If set to true, metalink file will only contains image files of the selected products |

### Export CSV plugin configuration

| Name                        | Type            | Default Value | Description                                                                                  |
|-----------------------------|-----------------|---------------|----------------------------------------------------------------------------------------------|
| dynamicCsvFilename          | String          |               | Name of the exported CSV file. If absent, name is `csv_export_<current_date>.csv` by default |
| maxDataObjectsToExport      | integer         | `10000`       | Maximum number of exportable products in the csv                                             |
| basicPropertiesToExclude    | `List<String\>` |               | Basic properties to exclude from the csv file                                                |
| dynamicPropertiesToRetrieve | `List<String\>` |               | Json paths to retrieve dynamic properties from the selected data                             |
