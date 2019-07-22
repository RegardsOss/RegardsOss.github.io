---
layout: classic-docs
title: Bus message events
---

{% include toc.md %}

> To know more about bus message mechanism look at [AMQP starter](/development/framework/starters/amqp-starter/)

 | Event    | Target   | Mode    | Description     |
 | :----    | :----    | :------ | :-----------    |
 | [LinkPluginsDatasetsEvent](https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-domain/src/main/java/fr/cnes/regards/modules/catalog/services/domain/LinkPluginsDatasets.java) | ALL | Broadcast | Published when a link between a business service plugin and a dataset is created |