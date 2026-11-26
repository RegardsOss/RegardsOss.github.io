---
id: concepts-observability
title: REGARDS concepts observability
sidebar_label: Observability
slug: /development/concepts/observability/
---

Each REGARDS microservice provides a set of metrics for monitoring its health. These metrics are provided via the [spring boot actuator library](https://docs.spring.io/spring-boot/reference/actuator/metrics.html).

To see the list of metrics provided by each microservice, refer to the metrics section of the documentation for each microservice, for example [rs-storage](../services/storage/metrics.md). 

To see the list common to all microservices, you can consult the [common](../services/common/common-metrics.mdx) section.