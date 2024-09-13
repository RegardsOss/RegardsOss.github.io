---
title: Configuration Importation/Exportation
sidebar_label: Importation/Exportation
slug: /development/services/worker-manager/configuration/import_export
sidebar_position: 1
---

The rs-worker-manager configuration is imported or exported in Json format (see in UI
Administrator : Microservices menu > rs-worker/manager > Manage backups). The configuration is stored in database.

Microservices settings regroup a set of settings that are specific by [tenant](../../../concepts/03-multitenant.md)
and stored in the microservice database.

## Import/Export API

To configure some microservice settings for a specific tenant, you need to follow the [generic Import/Export service
configuration guide](../../common/import-export-configuration.md), it will help you understand the expected JSON
file payload that you can send to the
[import configuration endpoint](../api-guides/rest/api-swagger.mdx#tag/module-manager-controller/operation/importConfiguration).

This configuration can also be imported or exported
through the [administrator UI](../../../../user-documentation/2-project-configuration/microservices.md).

### Configurable parameters

| Name             | Type           | Default value | Description                                                                       |
|------------------|----------------|---------------|-----------------------------------------------------------------------------------|
| skipContentTypes | List of String |               | List of ignored content types by the rs-worker-manager while dispatching requests |

### Configuration for worker :

| Name              | Type           | Description                                       |
|-------------------|----------------|---------------------------------------------------|
| workerType        | String         | Worker type (maximum length 128: [a-zA-Z0-9-_.]*) |
| contentTypeInputs | List of String | List of content type in worker input              |
| contentTypeOutput | String         | Content type in worker output                     |

This worker configuration is used in `rs-worker-manager` to determine which content type is accepted by the worker. This
content type output is useful in workflow case.

### Configuration for workflow of worker :

| Name         | Type   | Description                                       |
|--------------|--------|---------------------------------------------------|
| workflowType | String | Workflow type (maximum length 256)                |
| steps        | -      | List of steps for a workflow                      |
| stepNumber   | Digit  | Step number in workflow (unique)                  |
| workerType   | String | Worker type (maximum length 128: [a-zA-Z0-9-_.]*) |

This configuration indicate the different steps of the workflow and their order.
The parameter **contentTypeOutput** must be a valid with the parameter **contentTypeInput** defined in the worker by
configuration (contentTypeOutput worker1 = contentTypeInput worker2 : for valid chaining between the worker1 to the
worker2).

### Example

```json title='rs-worker-manager configuration file example'
{
  "microservice": "rs-worker-manager",
  "modules": [
    {
      "module": {
        "id": "workermanager",
        "name": "Worker Manager module",
        "description": "Dispatch request to workers",
        "version": "1.8.0",
        "author": "REGARDS",
        "legalOwner": "CNES",
        "documentation": "https://github.com/RegardsOss"
      },
      "resetBeforeImport": true,
      "configuration": [
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "skipContentTypes",
            "description": "List of content-types to ignore for requests dispatch.",
            "value": "[]",
            "defaultValue": "[]",
            "className": "java.util.ArrayList"
          }
        },
        {
          "key": "fr.cnes.regards.modules.workermanager.dto.WorkflowConfigDto",
          "value": {
            "workflowType": "lta-request",
            "steps": [
              {
                "stepNumber": 1,
                "workerType": "lta-product-zip-extraction-worker"
              },
              {
                "stepNumber": 2,
                "workerType": "lta-sip-generator-worker"
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.modules.workermanager.dto.WorkerConfigDto",
          "value": {
            "workerType": "lta-product-zip-extraction-worker",
            "contentTypeInputs": [
              "lta-to-extract-request"
            ],
            "contentTypeOutput": "lta-extracted-request"
          }
        },
        {
          "key": "fr.cnes.regards.modules.workermanager.dto.WorkerConfigDto",
          "value": {
            "workerType": "lta-sip-generator-worker",
            "contentTypeInputs": [
              "lta-extracted-request"
            ]
          }
        },
        {
          "key": "fr.cnes.regards.modules.workermanager.dto.WorkerConfigDto",
          "value": {
            "workerType": "delete-files-worker",
            "contentTypeInputs": [
              "delete-files-request"
            ]
          }
        }
      ]
    }
  ]
}
```