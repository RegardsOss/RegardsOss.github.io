---
title: Plugins
sidebar_label: Available plugins
slug: /development/backend/services/ingest/plugins/listing
sidebar_position: 1
---

As described in the [conception section](../conception.md), the `rs-ingest` microservice is based on **Ingest
chains** to
process products creation requests. An **Ingest chain** is a workflow composed of successive steps. Each step of the
workflow is an **extension point** implemented through plugins. Those extension points are :

- SIP validation
- SIP Pre processing
- AIP Metadata Generation
- AIP Storage Metadata Generation
- AIP Tagging
- SIP Post processing

:::info developers advice
If you want to create your own implementation of one of these extension points, you need to extend the specific
interface indicated.
:::

## SIP Validation plugins

All the following plugins implements
the [ISipValidation interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/ISipValidation.java).

| Plugin image                                      | Plugin name                   | Description                                              | 
|---------------------------------------------------|-------------------------------|----------------------------------------------------------|
| **Already** provided <br/>inside the microservice | DefaultSIPValidation          | Products are not validated                               | 
| **Already** provided <br/>inside the microservice | UniqueProviderIdSipValidation | Invalidate products if a previous version already exists |

## SIP Pre processing plugins

No plugin available yet.

All the following plugins implements
the [ISipPreprocessing interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/ISipPreprocessing.java).

## AIP Metadata generation

| Plugin image                                                                                                                                                     | Plugin name                                 | Description                                                                                      |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Already** provided <br/>inside the microservice                                                                                                                | DefaultSingleAIPGeneration                  | No metadata enhancement, SIP metadata are reported in the AIP                                    |
| [**rs-enhanced-descriptive-aip-generation-plugin**](https://github.com/orgs/RegardsOss/packages/container/package/rs-enhanced-descriptive-aip-generation-plugin) | StringEnhancedDescriptiveAipGeneration      | Add given key/value metadata (wih string value) to every AIP on descriptiveInformation section   |
| Not yet published                                                                                                                                                | StringArrayEnhancedDescriptiveAipGeneration | Add given key/values metadata (wih string values) to every AIP on descriptiveInformation section |

All the following plugins implements
the [IAipGeneration interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/IAipGeneration.java).

## AIP Storage metadata generation

| Plugin image                                      | Plugin name            | Description                                                                              | 
|---------------------------------------------------|------------------------|------------------------------------------------------------------------------------------|
| **Already** provided <br/>inside the microservice | VirtualStorageLocation | Transforms a configured virtual storage location into one or many real storage locations |

All the following plugins implements
the [IAIPStorageMetadataUpdate interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/IAIPStorageMetadataUpdate.java).

## AIP Tagging

| Plugin image                                      | Plugin name       | Description                           | 
|---------------------------------------------------|-------------------|---------------------------------------|
| **Already** provided <br/>inside the microservice | DefaultAIPTagging | Adds configured tags to every new AIP |

All the following plugins implements
the [IAipTagging interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/IAipTagging.java).

## SIP Post processing plugins

| Plugin image      | Plugin name                  | Description                                                     | 
|-------------------|------------------------------|-----------------------------------------------------------------|
| Not yet published | SendDeleteFilesWorkerRequest | Send an AMQP request to worker manager with all SIP input files |

All the following plugins implements
the [ISipPostprocessing interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/ISipPostprocessing.java).