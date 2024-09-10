---
id: development-manual
title: REGARDS Developer Documentation
sidebar_label: Overview
slug: /development/
---

**Welcome to the REGARDS Developer Documentation !**

You will find relevant information to help you **to interact or develop on the REGARDS system**:

- [Concepts](./concepts/01-overview.md) is the place to go if you are new to REGARDS, it introduces the **philosophy**
  of
  the REGARDS system design. **Highly recommended**
- [REGARDS Services](./services/overview.md) contains all microservice documentation of the REGARDS system :
  presentation,
  architecture, REST & AMQP API, examples...
    - [Access project](./backend/regards/access/access.md)
    - [Access instance](./backend/regards/access/access.md)
    - [Admin project](./backend/regards/admin/admin.md)
    - [Admin instance](./backend/regards/admin-instance/overview.md)
    - [Authentication](services/authentication/authentication-overview.md) : **Authentication** or **rs-authentication** microservice manage 
      [project or tenant](./concepts/03-multitenant.md) users authentication.
    - [Catalog](services/catalog/overview.md): **Catalog** or **rs-catalog** microservice is used to consult 
      products in the Regards meta-catalogue
    - [Data management](./backend/regards/dam/dam.md)
    - [Data provider](./services/dataprovider/dataprovider-overview.md) : **Data provider** or **rs-data-provider** microservice is used to detect files on disk, 
      create products in SIP format from these files and finally send these SIPs to the rs-ingest service.
    - [Delivery](services/delivery/delivery-overview.md)
    - [Feature manager (rs-fem)](services/fem/overview.md) : **Feature manager** or **rs-fem** microservice is used to 
    - [Gateway](./services/gateway/gateway.md)
    - [Ingest](services/ingest/overview.md) : **Ingest** or **rs-ingest** microservice manage the
      Regards [OAIS](appendices/01-oais.md) catalog.
    - [LTA Manager](services/lta-manager/lta-manager.md) : **Lta manager** or **rs-lta-manager** microservice manage the products archival requests.
      It is a simplified way to add products in the OAIS catalog.
    - [Notifier](services/notifier/overview.md): **Notifier** or **rs-notifier** microservice is used to broadcast messages from
      notifications received, such as products managed by REGARDS internal catalogs, to different recipients according to broadcast rules.
    - [Order](./backend/regards/order/order.md)
    - [Processing](services/processing/overview.md): **Processing** or **rs-processing** microservice, driven by order 
      microservice registry and the load balancing.
    - [Storage](./backend/regards/storage/storage.md)
    - [Worker Manager](./backend/regards/worker-manager/storage.md)
- [Web UI](./frontend/arch.md) introduces you the architecture and design of the REGARDS interface.