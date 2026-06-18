---
id: storage-metrics
title: Metrics monitoring
sidebar_label: Metrics
sidebar_position: 6
slug: /development/services/storage/metrics/
---
import CommonMetrics from '../common/common-metrics.mdx';


<CommonMetrics />

## Specific service metrics

| Metric label                            | Type    | Description                                                                                          |
|-----------------------------------------|---------|------------------------------------------------------------------------------------------------------|
| file_deletion_request_job               | Timer   | Duration in milliseconds for storage FileDeletionRequestJob jobs                                     |
| file_storage_request_amqp_handler       | Timer   | Duration in milliseconds for storage amqp store requests handler                                     |
| file_storage_request_job                | Timer   | Duration in milliseconds for storage FileStorageRequestJob jobs                                      |
| storage_check_requests_groups_done      | Timer   | Duration in milliseconds for scheduled process that calculates the terminated group of requests done |
| storage_request_counter                 | Counter | Number of storage requests received                                                                  |
| storage_request_error_counter           | Counter | Number of storage requestes terminated in error                                                      |
| storage_request_success_counter         | Counter | Number of storage requests terminated in success                                                     |
| storage_restore_request_counter         | Counter | Number of restoration requests received                                                              |
| storage_restore_request_error_counter   | Counter | Number of restoration requests terminated in error                                                   |
| storage_restore_request_success_counter | Counter | Number of restoration requests terminated in success                                                 |






