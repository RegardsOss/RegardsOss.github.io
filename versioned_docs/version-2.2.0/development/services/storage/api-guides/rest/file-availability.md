---
id: backend-storage-file-availability-api
title: File availability guide
sidebar_label: File availability
slug: /development/backend/services/storage/file-availability-api
---

## File available AMQP message

After restoring a file, an AMQP message is sent to:

| Exchange                            | Routing key                        | Virtual host                  |
|-------------------------------------|------------------------------------|-------------------------------|
| `regards.storage.file.notification` | `regards.file.availability.status` | `regards.multitenant.manager` |

With following content:

| Parameter      | Type    | Optional | Description                                                |
|----------------|---------|:--------:|------------------------------------------------------------|
| checksum       | String  |    No    | File checksum                                              |
| available      | Boolean |    No    | File availability                                          |
| expirationDate | Date    |   Yes    | Indicate date when the file will be not available anymore. |

To restore a file, [see catalog doc](../catalog/api-guides/rest/file-restoration-api)
