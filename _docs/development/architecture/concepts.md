---
layout: classic-docs
title: REGARDS architecture concepts
short-title: Design concepts
categories:
  - development
---

## OAIS recommandation

The System design leans on the OAIS (Open Archival Information System) recommendation of the <a href="https://public.ccsds.org" target="blank_">CCSDS</a>.

![](/assets/schemas/architecture/oais.png)

Thus the system allows high-performance ingestion of data package called <b>SIP</b> (Submission Information Package), either in standard or non-standard formats.

Afterwards, these SIP are processed into <b>AIP</b> (Archival Information Package) and stored in archival storage. Both metadata  and data files are stored.

All or part of the AIP metadata are harvested to offer smart search and access to the data.

Finally, requested data are retrieve under <b>DIP</b> (Dissemination Information Package).

## OAIS REGARDS implementation

The schema below try to make the connection between OAIS recommandation and REGARDS implementation. This is only a zoom because REGARDS can do a lot more.

![](/assets/schemas/architecture/overview_regards_oais.png)

REGARDS processes SIP, transforms them in AIP that is stored, extracts metadata from AIP (i.e. harvesting) to populate a catalog and give fast access to metadata.

A user through a rich web application can then discover, order and download data in an efficient and simple way.
