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

* [Data provider](../api/)

## Available Extension points

* [Scan plugins](../plugins/scan/)
* [Validation plugins](../plugins/validation/)
* [Product genertor plugins](../plugins/product/)
* [SIP generation plugins](../plugins/sip-generation/)
* [Post processing plugins](../plugins/post-processing/)
