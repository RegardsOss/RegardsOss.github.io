---
id: s3-online-storage-worker
title: S3 Online Storage Worker
sidebar_label: S3 Online Storage Worker
slug: /development/backend/services/neo-storage/storage-workers/s3-online-storage-worker/
---

## Overview

**The S3 online storage worker** is an independent application that handles physical file storage operations on Amazon S3 standard ([online storage](../neo-storage-overview.md#online-storage)). It works in coordination with **the file access microservice** through **the worker manager microservice** to perform actual file transfers to S3 buckets.

## Purpose

This worker is responsible for:
- Downloading files from source URLs
- Uploading files to Amazon S3 standard storage
- Extracting file metadata (size, checksum, image dimensions)
- Verifying file integrity using checksums
- Reporting storage results back to **the file access microservice**

## Architecture

- **Worker Type**: `s3-online-storage-worker`
- **Storage Plugin**: Works with the `S3OnlineStorage` plugin configured in **the file access microservice**

## How It Works

1. **Request Reception**: The worker listens on AMQP queues for `StorageWorkerRequestEvent` messages from the worker manager
2. **File Download**: Downloads the file from the provided source URL
3. **Integrity Verification**: Validates the file checksum matches the expected value
4. **Metadata Extraction**: Extracts file size and, for images, width and height dimensions
5. **S3 Upload**: Uploads the file to Amazon S3 using the AWS SDK
   - Uses multipart upload for large files
   - Handles retry logic for failed uploads
6. **Response**: Sends a `ResponseEvent` back with success/failure status and S3 URL

## Scalability

The S3 online storage worker can be scaled horizontally:
- **Multiple instances** can run in parallel
- Each instance processes requests from the same queue

## Configuration

The worker is configured through:
- **Worker Manager dynamic tenant settings**: Worker type registration and AMQP queue configuration
- **File Access Plugin**: S3 storage location configuration (AWS credentials, S3 bucket, region, path prefix, encryption settings)

## Relationship with Other Components

- **File Access Microservice**: Sends storage requests and receives completion notifications
- **Worker Manager**: Routes storage requests to available worker instances
- **S3OnlineStorage Plugin**: Provides AWS credentials and S3 configuration

## Source Code

Worker source code is available on [GitHub](https://github.com/RegardsOss/regards-oss-worker/tree/master/storage-workers/s3-online-storage-worker).