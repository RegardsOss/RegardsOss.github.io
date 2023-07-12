---
id: backend-dataprovider-overview
title: REGARDS dataprovider microservice
sidebar_label: Overview
slug: /development/backend/services/dataprovider/overview/
---


## Overview

`Dataprovider` reponsabilities:

* Data discovery through a data driven mechanism,
* Products creation (i.e. group of consistent files),
* Metadata generation,
* Transform products to SIPs and ingest them.

![Data provider plugins](/schemas/microservices/dataprovider.svg)

## Available APIs

* [Data provider](dataprovider-api-swagger.mdx)

## Available Extension points

* [Scan plugins](plugins/scan-plugins.md)
* [Validation plugins](plugins/validation-plugins.md)
* [Product genertor plugins](plugins/product-plugins.md)
* [SIP generation plugins](plugins/sip-generation-plugins.md)
* [Post processing plugins](plugins/post-processing-plugins.md)
