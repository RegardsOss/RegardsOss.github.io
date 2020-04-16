---
layout: classic-docs
title: Notifier configuration API
---

{% include toc.md %}

## Notifier configuration

In order to make the configuration simple and easily adjustable, we use the import/export REST API of the microservice.

> Be careful, import will overwrite an existing plugin configuration with same `business id`.
{: .tip .important}

{% include development/api/importexport/import-api.md %}

#### Example of configuration file to import

Value between brackets must be adapted!

```json
{
  "microservice": "rs-notifier",
  "modules": [
    {
      "module": {
        "id": "notifier",
        "name": "Notifier module",
        "description": "Notification reception and dissemination",
        "version": "1.0.0", 
        "author": "CS Group",
        "legalOwner": "CNES",
        "documentation": "https://github.com/RegardsOss"
      },
      "configuration": [
        { ... }
      ]
    }
  ]
}
```

{% include development/api/importexport/export-api.md %}

{% include development/api/importexport/download-api.md %}

