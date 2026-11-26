---
id: fem-metrics
title: Metrics monitoring
sidebar_label: Metrics
sidebar_position: 6
slug: /development/services/fem/metrics/
---
import CommonMetrics from '../common/common-metrics.mdx';

<CommonMetrics />

## Specific service metrics


| Metric label | Type  | Description |
| ------------ | ----  | ----------- |
| feature_creation_job | Timer | Duration in milliseconds for a FeatureCreationJob job |
| feature_creation_job_scheduler | Timer | Duration in milliseconds for the scheduler process to run schedule new FeatureCreationJob jobs according to granted requests |
| feature_creation_request_batch_handle | Timer | Duration in milliseconds to handle AMQP batch creation requests |
| feature_find_all | Timer | Duration in milliseconds to find features in database |
| feature_notification_sender | Timer | Duration in milliseconds to send a batch of notification of features to notifier service |
| feature_request_handle_storage_deletion_success | Timer | Duration in milliseconds for the service to process a deletion success response from storage service |
| feature_request_handle_storage_storage_success | Timer | Duration in milliseconds for the service to process a storage success response from storage service |






