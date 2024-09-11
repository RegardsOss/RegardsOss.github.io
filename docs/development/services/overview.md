---
id: services-overview
title: REGARDS services overview
sidebar_label: Overview
slug: /development/services/overview/
---

This section provides documentation about REGARDS microservices :

- [Access project](../backend/regards/access/access.md)
- [Access instance](../backend/regards/access/access.md)
- [Admin project](../backend/regards/admin/admin.md)
- [Admin instance](../backend/regards/admin-instance/overview.md)
- [Authentication](authentication/authentication-overview.md) : **Authentication** or **rs-authentication** microservice manage
  [project or tenant](../concepts/03-multitenant.md) users authentication.
- [Catalog](catalog/overview.md): **Catalog** or **rs-catalog** microservice is used to consult products in the Regards 
  meta-catalogue
- [Data management (rs-dam)](./dam/overview.md): **Data management** or **rs-dam** microservice mainly handle meta catalog population.
- [Data provider](dataprovider/dataprovider-overview.md) : **Data provider** or **rs-data-provider** microservice is used to detect files on disk,
  create products in SIP format from these files and finally send these SIPs to the rs-ingest service.
- [Delivery](delivery/delivery-overview.md)
- [Feature manager (rs-fem)](fem/overview.md) : **Feature manager** or **rs-fem** microservice is used to manage 
  products 
  in GeoJson format
- [Gateway](gateway/gateway.md)
- [Ingest](ingest/overview.md) : **Ingest** or **rs-ingest** microservice manage the
  Regards [OAIS](../appendices/01-oais.md) catalog.
- [LTA Manager](lta-manager/lta-manager.md) : **Lta manager** or **rs-lta-manager** microservice manages the 
  products archival requests. 
  It is a simplified way to add products in the OAIS catalog.
- [Notifier](notifier/overview.md): **Notifier** or **rs-notifier** microservice is used to broadcast messages from 
  notifications received, such as products managed by REGARDS internal catalogs, to different recipients according to broadcast rules.
- [Order](../backend/regards/order/order.md)
- [Processing](processing/overview.md): **Processing** or **rs-processing** microservice, driven by order microservice, 
- [Registry](registry/overview.md): **Registry** or **rs-registry** microservice manages the 
- [Storage](../backend/regards/storage/storage.md)
- [Worker Manager](../backend/regards/worker-manager/storage.md)