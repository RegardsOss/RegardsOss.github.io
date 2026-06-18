---
title: Plugins
sidebar_label: Available plugins
slug: /development/backend/services/dataprovider/plugins/listing
sidebar_position: 1
---

As described in the [conception section](../dataprovider-conception.md), the `rs-data-provider` microservice is based on **Acquisition
chains** to
acquire products from files. An **Acquisition chain** is a workflow composed of successive steps. Each step of the
workflow is an **extension point** implemented through plugins. Those extension points are :

* [Scan plugins](#scan-plugins) to discover and read data.
* [Validation plugins](#validation-plugins) to make sure that these data respect some criterias.
* [Product generator plugins](#product-generator-plugins) to compute the product name from a specified file.
* [SIP generation plugins](#sip-generation-plugins) to generate a SIP from product.
* [Post processing plugins](#post-processing-plugins) to make some actions after SIP ingestion by Ingest
  service.

Only the **Post processing plugin** is not mandatory for an acquisition chain.

:::info developers advice
If you want to create your own implementation of one of these extension points, you need to extend the specific
interface indicated.
:::

## Scan plugins

This extension point allows to define how to find files to acquire.

All the following plugins implements
the [IScanPlugin interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/IScanPlugin.java)
or [IFluxScanPlugin interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/IFluxScanPlugin.java).

| Plugin image                                 | Plugin name                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Already** provided inside the microservice | RegexDiskScanning                    | Search for files in local directories matching a regex pattern                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Already** provided inside the microservice | GlobDiskScanning                     | Search for files in local directories matching a glob pattern                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Already** provided inside the microservice | GeoJsonFeatureCollectionParserPlugin | Scan a directory to find geojson files. For each geojson file found, generate a json file containing each feature of the geojson file. This plugin is used in combination with the [GeoJsonSIPGeneration](https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/GeoJsonSIPGeneration.java) to generate one SIP for each feature of a geojson FeatureCollection file |
| **Already** provided inside the microservice | RegexStreamDiskScanningPlugin        | Recursively scan directories and stream the detected files that were modified after the specified date and matching the given regex pattern                                                                                                                                                                                                                                                                                                                                                          |
| **Already** provided inside the microservice | GlobDiskStreamScanningPlugin         | Recursively scan directories and stream the detected files that were modified after the specified date and matching the given glob pattern                                                                                                                                                                                                                                                                                                                                                           |


## Validation plugins

This extension point allows to define how to validate a file to acquire. Each input file of the acquisition process is subject to this validation. If the validation fails, the file is rejected.

All the following plugins implements
the [IValidationPlugin interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/IValidationPlugin.java).

| Plugin image                                                                                                                                              | Plugin name                 | Description                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------ |
| **Already** provided <br/>inside the microservice                                                                                                         | DefaultFileValidation       | Check that the file is readable                                                      |
| [rs-custom-command-file-validation-plugin](https://github.com/RegardsOss/regards-plugins/tree/master/dataprovider-plugins/custom-command-file-validation) | CustomCommandFileValidation | Acquisition plugin to validate files to acquire by executing a custom system command |

## Product generator plugins

This extension point allows to define how to construct a `Product` from a list of files to acquire. A Product is a package of related files. At the end of the aquisition process each product is represented by a `Feature` in a `SIP Collection`.

All the following plugins implements
the [IProductPlugin interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/IProductPlugin.java).

| Plugin image                                                                                                                          | Plugin name                      | Description                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------- |
| **Already** provided <br/>inside the microservice                                                                                     | DefaultProductPlugin             | Construct one product for each scanned file                                        |
| [rs-radical-product-name-plugin](https://github.com/RegardsOss/regards-plugins/tree/master/dataprovider-plugins/radical-product-name) | ProductNameFromFilePatternPlugin | Plugin to calculate product name from file by removing some parts of the file name |

## SIP generation plugins

This extension point allows to define how to construct a `SIP` for a given `Product`. Products are composed of files generated by the `Product plugin` of the acquisition chain. This plugin is the one that fill the mata data of each SIP to ingest.

All the following plugins implements
the [ISipGenerationPlugin interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/ISipGenerationPlugin.java).

| Plugin image                                      | Plugin name          | Description                                                                                                     |
| ------------------------------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Already** provided <br/>inside the microservice | DefaultSIPGeneration | Only add files information in SIP (no specific descriptive information)                                         |
| **Already** provided <br/>inside the microservice | GeoJsonSIPGeneration | Read each product file to extract GeoJson features and generate SIP according to geometry and label information |

## Post processing plugins

This extension point allows to add a post processing action after a product is fully acquired and stored.

All the following plugins implements
the [IPostProcessingPlugin interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/IPostProcessingPlugin.java).

| Plugin image                                      | Plugin name               | Description                                                                                   |
| ------------------------------------------------- | ------------------------- | --------------------------------------------------------------------------------------------- |
| **Already** provided <br/>inside the microservice | CleanAndAcknowledgePlugin | create acknowledgement for each product file and clean all original product filesinformation) |
