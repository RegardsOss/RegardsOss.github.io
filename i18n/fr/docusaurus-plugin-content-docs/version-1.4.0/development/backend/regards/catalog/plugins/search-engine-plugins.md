---
id: backend-catalog-search-engine-plugins
title: Search engine plugins
sidebar_label: Search engine
slug: /development/backend/catalog/search-engine-plugins/
---

## Overview

:::note
This extension point allows to define a new search protocol to request REGARDS catalog.
:::

REGARDS provides many implementation of this extension point :
 - [LegacySearchEngine](https://github.com/RegardsOss/regards-catalog/blob/master/search/search-rest/src/main/java/fr/cnes/regards/modules/search/rest/engine/plugin/legacy/LegacySearchEngine.java) : First search engine defined for REGARDS frontend.
 - [OpenSearchEngine](https://github.com/RegardsOss/regards-catalog/blob/master/search/search-rest/src/main/java/fr/cnes/regards/modules/search/rest/engine/plugin/opensearch/OpenSearchEngine.java) : Standard opensearch protocol.

## Interface

   [ISearchEngine](https://github.com/RegardsOss/regards-catalog/blob/master/search/search-domain/src/main/java/fr/cnes/regards/modules/search/domain/plugin/ISearchEngine.java)

## Implementation

To learn more about how to create your own plugin see [Plugins](../../framework/modules/plugins/)

To lean more about the implemented search engines see [Search API](../search-api/)


