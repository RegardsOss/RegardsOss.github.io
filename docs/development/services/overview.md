---
id: services-overview
title: REGARDS services overview
sidebar_label: Overview
slug: /development/services/overview/
---

This section provides documentation about REGARDS microservices :

- [Access project](./access-project/overview.md) : **Access project** or **rs-access-project** microservice is
  used as a **backend for frontend**. This service is used by the Web UI to retrieve its configuration and to aggregate
  some microservices information.
- [Access instance](./access-instance/overview.md) : **Access instance** or **rs-access-instance**  microservice manage
  the configuration of instance UI such as the portal and administration.
- [Admin project](./admin/overview.md) : **Admin project** or **rs-admin** manages project
  users and roles
- [Admin instance](./admin-instance/overview.md) : : **Admin instance** or **rs-admin-instance** microservice has been
  designed to centralize processes for the administration of Regards for all projets.
- [Authentication](./authentication/authentication-overview.md) : **Authentication** or
  **rs-authentication** microservice manage [project or tenant](../concepts/03-multitenant.md) users authentication.
- [Catalog](./catalog/overview.md): **Catalog** or **rs-catalog** microservice is used to consult products in the
  Regards meta-catalogue
- [Data management (rs-dam)](./overview.md): **Data management** or **rs-dam** microservice mainly handle meta catalog
  population.
- [Data provider](./dataprovider/dataprovider-overview.md) : **Data provider** or **rs-data-provider** microservice is
  used to detect files on disk, create products in SIP format from these files and finally send these SIPs to the
  rs-ingest service.
- [Delivery](./delivery/delivery-overview.md): **Delivery** or **rs-delivery** microservice manage products orders
  delivery to configured locations.
- [Feature manager (rs-fem)](./fem/overview.md) : **Feature manager** or **rs-fem** microservice is used to manage
  products in GeoJson format
- [Gateway](./gateway/gateway.md): **Gateway** or **rs-gateway** manage the front proxy for the
  global [microservice architecture](../concepts/02-microservices.md).
- [Ingest](./ingest/overview.md) : **Ingest** or **rs-ingest** microservice manage the
  Regards [OAIS](../appendices/01-oais.md) catalog.
- [LTA Manager](./lta-manager/lta-manager.md) : **Lta manager** or **rs-lta-manager** microservice manage the products
  archival requests.  
  It is a simplified way to add products in the OAIS catalog.
- [Notifier](./notifier/overview.md): **Notifier** or **rs-notifier** microservice is used to broadcast messages from
  notifications received, such as products managed by REGARDS internal catalogs, to different
  recipients according to broadcast rules.
- [Order](./order/overview.md):  **Order** or **rs-order** microservice manage users product orders.
- [Processing](./processing/overview.md): **Processing** or **rs-processing** microservice, driven by order
  microservice.
- [Registry](./registry/overview.md): **Registry** or **rs-registry** microservice manages the microservices registry of
  the global [microservice architecture](../concepts/02-microservices.md).
- [Storage](./storage/overview.md): **Storage** or **rs-storage** microservice manages the storage and the deletion of
  files associated to products of **OAIS catalog rs-ingest** and **GeoJson catalog rs-fem**.
- [Downloader](./downloader/overview.md): **Downloader** or **rs-downloader** microservice manages the file downloads.
- [Worker Manager](./worker-manager/overview.md): **Worker Manager** or **rs-worker-manager** microservice is designed
  to act as an entry point for all processing requests dedicated to
  all [workers](../concepts/08-workers.md) on the system