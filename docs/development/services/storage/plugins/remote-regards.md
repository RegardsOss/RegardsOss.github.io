---
title: Remote REGARDS Plugin
sidebar_label: Remote REGARDS
slug: /development/services/storage/plugins/remote-regards
sidebar_position: 5
---

## Description

The Remote REGARDS storage plugin enables access to files stored on another instance of REGARDS.

:::info
Contrary to other storage plugins, this plugin is read-only. This means it only supports retrieving files from 
another REGARDS instance, it does not support storing files on another instance.
:::

## Pre-requisites

Using this plugin involves two instances of REGARDS: the **local** instance, where products contain references to 
the files on the other instance, and the **remote** instance, where files are actually stored.

On the remote instance, only one project may be accessed by an instance of the plugin: this project is called the 
**remote project** (or *remote tenant*).

### Version requirements

* The local instance of REGARDS must be at least version 2.5.0
* The remote instance of REGARDS must be at least version 2.5.0

### Network requirements

* The local REGARDS instance must be able to access the remote REGARDS instance's public port (by default 443)
* **One** of these conditions:
  * The local REGARDS instance must be able to access the remote REGARDS instance's RabbitMQ port
  * The remote REGARDS instance must be able to access the local REGARDS instance's RabbitMQ port

### Account requirements

* A dedicated account must be created on the remote REGARDS instance for the use of the local REGARDS instance
* This account must be registered with the *Operator* role in the remote project
* This account must belong to a group that is given full access by the dataset(s) providing the products that may be 
  retrieved by the local REGARDS instance
* The account details (email, password) must be shared with the administrator setting up the plugin on the local 
  instance

## File URL

This plugin supports URLs using the following format:

```
regards://remoteTenant/providerId/productURN/checksum
```

In order to resolve the URL, an instance of the plugin must be configured to associate `remoteTenant` to an actual 
REGARDS server. The `productURN` and `checksum` parts are used to locate a product and a file on the remote server.

You may configure several storage locations that use this plugin in a single project, provided that each storage 
location is configured for a different `remoteTenant` value.

## Configuration

| Parameter Name                              | Type               | Description                                                                                                                                                                                                                                                                                                                                                                                                                              | 
|---------------------------------------------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `remoteRegardsUrl`                          | URL                | URL of the remote REGARDS instance. It must not include any trailing path. Examples: `https://regards.cnes.fr`, `https://regards.cnes.fr/`.                                                                                                                                                                                                                                                                                              |
| `remoteTenant`                              | String             | Name of the project (tenant) on the remote REGARDS instance.                                                                                                                                                                                                                                                                                                                                                                             |
| `userEmail`                                 | String             | Account email used on the remote REGARDS project to download files. See the [Account Requirements](#account_requirements) section above.                                                                                                                                                                                                                                                                                                 |
| `password`                                  | String             | Account password used on the remote REGARDS project to download files.                                                                                                                                                                                                                                                                                                                                                                   |
| `fileNotificationExchange`                  | String (optional)  | Name of the exchange where file availability events of the remote REGARDS instance are sent. This exchange must be on the local RabbitMQ instance. A shovel should be set up to forward the file availability events of the remote REGARDS instance onto this exchange. The default value is `regards.storage.remote.file.notification.<tenantAlias>`. This exchange is automatically created by the plugin if it doesn't already exist. |
| `fileNotificationQueue`                     | String (optional)  | Name of the queue where file availability events of the remote REGARDS instance are sent. This queue must be on the local RabbitMQ instance, and bound to the exchange defined in `fileNotificationExchange`. The default value is the same value as the value of `fileNotificationExchange`. This queue is automatically created if it doesn't already exist.                                                                           |
| `requestTimeout`                            | Integer (optional) | Maximum allowed duration in milliseconds of an HTTP request to the remote REGARDS instance. A retrieve error is issued if any request takes longer than this duration.                                                                                                                                                                                                                                                                   |
| `fileRestoreTimeout`                        | Integer (optional) | Maximum allowed delay in milliseconds between a file restore request to the remote REGARDS instance and the availability of the requested file(s). A retrieve error is issued if any restore process exceeds this delay.                                                                                                                                                                                                                 |
| `productAvailabilityStatusRequestBatchSize` | Integer (optional) | Maximum count of products requested in a single availability status request to the remote REGARDS instance. This value must be chosen in order not to exceed the maximum count of files allowed in a single availability status request on the remote instance (setting `regards.catalog.availability.request.product.bulk.limit`) divided by the maximum count of files per product.                                                    |
| `productRestoreRequestBatchSize`            | Integer (optional) | Maximum count of products requested in a single restore request to the remote REGARDS instance. This value must be chosen in order not to exceed the maximum count of files allowed in a single product restore request on the remote instance (setting `regards.catalog.availability.request.product.bulk.limit`) divided by the maximum count of files per product.                                                                    |

## Additional configuration on the remote REGARDS instance

:::info
This section may be ignored if all referenced files on the remote project are stored in an **online** storage.
:::

The plugin requires listening to events emitted by the remote REGARDS instance, so a dedicated message route must be 
set up from the remote REGARDS instance to the local REGARDS instance.

This route must forward messages:
* From the exchange [`regards.storage.file.notification`](../../../backend/services/storage/file-availability-api) (on 
  the remote instance) with binding key `regards.file.availability.status.<remoteTenant>`
* To the queue (on the local instance) configured in the plugin configuration in the `fileNotificationQueue` 
  parameter (default value: `regards.storage.remote.file.notification.<remoteTenant>`)

To achieve this, the recommended approach is:

1. On the local instance, define a storage location using the Remote REGARDS plugin, and leave the parameters
   `fileNotificationExchange` and `fileNotificationQueue` empty, to use their default value. This will automatically
   create an exchange and a queue named `regards.storage.remote.file.notification.<remoteTenant>`. 
2. On the remote instance, define a queue named `regards.storage.file.notification.<remoteTenant>` bound to the 
   exchange `regards.storage.file.notification` with binding key `regards.file.availability.status.<remoteTenant>`.
3. Either on the local or the remote instance, define a shovel that forwards messages from the **queue**
  `regards.storage.file.notification.<remoteTenant>` (on the remote instance) to the **exchange**
  `regards.storage.remote.file.notification.<remoteTenant>` (on the local instance).

For all involved queues, exchanges and shovels, the virtual host ("vhost") to use is `regards.multitenant.manager`.

Steps 2 and 3 can be achieved in the remote instance's inventory by defining the following nodes in file
`group_vars/regards_nodes/main.yml`:

```
group_docker_cots:
  rabbitmq:
    additional_exchanges:
      - name: regards.storage.file.notification
        vhost: regards.multitenant.manager
        type: topic
        durable: true
        internal: false
    additional_queues:
      - name: regards.storage.file.notification.<remoteTenant>
        vhost: regards.multitenant.manager
        durable: true
        auto_delete: false
        arguments:
          x-dead-letter-exchange: regards.DLX
          x-dead-letter-routing-key: regards.storage.file.notification.<remoteTenant>.DLQ
          x-max-priority: 255
      - name: regards.storage.file.notification.<remoteTenant>.DLQ
        vhost: regards.multitenant.manager
        durable: true
        auto_delete: false
        arguments:
          x-max-priority: 255
    additional_bindings:
      - source: regards.storage.file.notification
        vhost: regards.multitenant.manager
        destination: regards.storage.file.notification.<remoteTenant>
        destination_type: queue
        routing_key: regards.file.availability.status.<remoteTenant>
      - source: regards.DLX
        vhost: regards.multitenant.manager
        destination: regards.storage.file.notification.<remoteTenant>.DLQ
        destination_type: queue
        routing_key: regards.storage.file.notification.<remoteTenant>.DLQ
    additional_parameters:
      - component: shovel
        name: pwh-notification-shovel
        vhost: regards.multitenant.manager
        value:
          ack-mode: on-confirm
          dest-add-forward-headers: false
          dest-protocol: amqp091
          dest-exchange: regards.storage.remote.file.notification.<remoteTenant>
          dest-uri: amqp://<local_rabbit_user>:<local_rabbit_password>@<local_rabbit_instance>:<local_rabbit_port>/regards.multitenant.manager
          src-delete-after: never
          src-protocol: amqp091
          src-queue: regards.storage.file.notification.<remoteTenant>
          src-uri: amqp:///regards.multitenant.manager
```
:::note
In the above document, `<remoteTenant>`, `<local_rabbit_user>`, `<local_rabbit_password>`,
`<local_rabbit_instance>`, `<local_rabbit_port>` must be replaced by their actual value.
It is recommended to use a reference to a vault to define `<local_rabbit_password>`.
:::