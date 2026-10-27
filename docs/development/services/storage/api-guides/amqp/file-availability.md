---
id: backend-storage-file-availability-api
title: File availability guide
sidebar_label: File availability
slug: /development/backend/services/storage/file-availability-api
---

## File available AMQP message

### How to

When the [restoration of product files](../catalog/api-guides/rest/file-restoration-api) is requested, the 
restoration request is forwarded to the `rs-storage` microservice. This microservice provides an AMQP endpoint to 
listen to file availability events. These events are published when a requested file becomes available, and when the
restoration process failed.

### Exchange

When a file becomes available or when the file restoration failed, an AMQP message is sent to:

| Exchange                            | Routing key                                        | Virtual host                  |
|-------------------------------------|----------------------------------------------------|-------------------------------|
| `regards.storage.file.notification` | `regards.file.availability.status.<source_tenant>` | `regards.multitenant.manager` |

`<source_tenant>` is the name of the project where the file restoration has occurred.

To listen to file availability events of a specific project `A`, define a queue bound to this exchange, with a binding 
key equal to `regards.file.availability.status.A`. Using project-specific queues is recommended to ensure
confidentiality and improve efficiency.

To have a queue receive all file availability events whatever the project they originate from, use the binding key 
`regards.file.availability.status.*`.

### Message content

#### Properties

| Parameter        | Type    | Description                                                          |
|------------------|---------|----------------------------------------------------------------------|
| priority         | Integer | Standard RabbitMQ property to sort messages by priority order.       |
| content_encoding | String  | Standard RabbitMQ property for the encoding type of the message      |
| content_type     | String  | Standard RabbitMQ property for the MIME Type of the message sent     |
| delivery_mode    | Integer | Standard RabbitMQ property for the delivery mode (persistent or not) |

#### Headers

| Header           | Value                                                     |
|------------------|-----------------------------------------------------------|
| `regards.tenant` | Name of the project where the file restoration occurred.  |

To restore a file, [see catalog doc](../catalog/api-guides/rest/file-restoration-api)

#### Body

| Property         | Type    | Optional | Description                                                                             |
|------------------|---------|:--------:|-----------------------------------------------------------------------------------------|
| `checksum`       | String  |    No    | File checksum                                                                           |
| `available`      | Boolean |    No    | `true` if the file was restored successfully, `false` if the restore process failed.    |
| `expirationDate` | Date    |   Yes    | When the file will be not available anymore. `null` when `available` is `false`.        |

##### Examples

Body for a file restoration success:

```json
{
  "checksum": "696DF19D7604AA1FEA11E88321D7E3D0",
  "available": true,
  "expiration_date": "2026-10-13T12:07:15.903932Z"
}
```

Body for a file restoration error:

```json
{
  "checksum": "696DF19D7604AA1FEA11E88321D7E3D0",
  "available": false
}
```