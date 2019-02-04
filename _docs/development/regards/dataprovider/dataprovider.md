---
layout: classic-docs
title: REGARDS dataprovider microservice
short-title: Dataprovider
categories:
  - development
---

## Overview

`Dataprovider` reponsabilities:

* Data discovery through a data driven mechanism,
* Products creation (i.e. group of consistent files),
* Metadata generation,
* Transform products to SIPs and ingest them.

![Data provider plugins](/assets/schemas/microservices/dataprovider.svg)

## Available APIs

* [Data provider](/development/regards/dataprovider/api/acquisition-api/)

## Available Extension points

* [Scan plugins](/development/regards/dataprovider/plugins/scan-plugins/)
* [Validation plugins](/development/regards/dataprovider/plugins/validation-plugins/)
* [Product genertor plugins](/development/regards/dataprovider/plugins/product-plugins/)
* [SIP generation plugins](/development/regards/dataprovider/plugins/sip-generation-plugins/)
* [Post processing plugins](/development/regards/dataprovider/plugins/post-processing-plugins/)