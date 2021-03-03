---
id: backend-architecture-concepts
title: REGARDS architecture concepts
sidebar_label: Concepts
slug: /development/backend/architecture/concepts
---

## OAIS recommandation

The System design leans on the OAIS (Open Archival Information System) recommendation of the [CCSDS](https://public.ccsds.org).

![](/schemas/architecture/oais.png)

Thus the system allows high-performance ingestion of data package called **SIP** (Submission Information Package), either in standard or non-standard formats.

Afterwards, these SIP are processed into **AIP** (Archival Information Package) and stored in archival storage. Both metadata and data files are stored.

All or part of the AIP metadata are harvested to offer smart search and access to the data.

Finally, requested data are retrieve under **DIP** (Dissemination Information Package).

## OAIS REGARDS implementation

The schema below shows the correspondence between the OAIS recommandation and the REGARDS implementation. Note we're just displaying here a subset of all REGARDS features, as REGARDS can do a lot more.

![](/schemas/architecture/overview_regards_oais.png)

REGARDS processes SIP, transforms them into AIP, stores them, extracts metadata from AIP (i.e. harvesting) to populate a catalog to provide fast access to metadata.

Then users can discover through our rich web application, order and download data in an efficient and simple way.
