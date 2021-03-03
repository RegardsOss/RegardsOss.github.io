---
id: backend-catalog-events
title: Bus message events
sidebar_label: Bus message events
slug: /development/backend/catalog/events
---

:::info
To know more about bus message mechanism look at [AMQP starter](../framework/starters/amqp)
:::

 | Event    | Target   | Mode    | Description     |
 | :----    | :----    | :------ | :-----------    |
 | [LinkPluginsDatasetsEvent](https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-domain/src/main/java/fr/cnes/regards/modules/catalog/services/domain/LinkPluginsDatasets.java) | ALL | Broadcast | Published when a link between a business service plugin and a dataset is created |
