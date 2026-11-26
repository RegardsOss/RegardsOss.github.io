---
title: rs-feature-datasource-plugin
sidebar_label: feature-datasource
---

## Description

This plugin allows to index GeoJson products from the `rs-fem` microservice.

## Parameter configuration

| Parameter Name               | Type    | Optional | Default | Description                                                                                                                            | 
|------------------------------|---------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------|
| modelName                    | String  | false    |         | Model name of the products to be indexed                                                                                               | 
| refreshRate                  | Integer | false    | 60      | Harvesting refresh rate in second (minimum delay between two consecutive harvesting)                                                   |
| overlap                      | Integer | false    | 0       | For active datasource, harvest data since latest harvesting date minus this overlap to prevent data loss                               |
| searchLimitFromNowInSeconds  | Integer | false    | 0       | Duration in seconds to retrieve entities by maximum date limit to avoid retrieving entities too close with the current aspiration date |
| dateRangeHistogramProperties | Object  | true     |         | Allows to fulfill a date range property from two date properties                                                                       |

For date range histogram properties, 3 parameters are to be defined :

| Parameter Name                         | Type   | Optional | Default | Description                                     | 
|----------------------------------------|--------|----------|---------|-------------------------------------------------| 
| _source-property-path-for-lower-bound_ | String | false    |         | Source property path for date range LOWER bound |
| _source-property-path-for-upper-bound_ | String | false    |         | Source property path for date range UPPER bound |
| _target-property-path_                 | String | false    |         | Target date range property path                 |
