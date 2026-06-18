---
id: s3-glacier-storage-worker
title: S3 Glacier Storage Worker
sidebar_label: S3 Glacier Storage Worker
slug: /development/backend/services/neo-storage/storage-workers/s3-glacier-storage-worker/
---

## Overview

**The S3 Glacier storage worker** is an independent application that handles physical file storage operations on Amazon S3 Glacier [nearline storage](../neo-storage-overview.md#nearline-storage). It works in coordination with **the file access microservice** through **the worker manager microservice** to perform actual file transfers to long-term archival storage.

## Purpose

This worker is responsible for:
- Downloading files from source URLs
- Uploading files to Amazon S3 Glacier storage
- Extracting file metadata (size, checksum, image dimensions)
- Verifying file integrity using checksums
- Reporting storage results back to **the file access microservice**

## Architecture

- **Worker Type**: `s3-glacier-storage-worker`
- **Storage Plugin**: Works with the `S3GlacierStorage` plugin configured in **the file access microservice**

## How It Works

1. **Request Reception**: The worker listens on AMQP queues for `StorageWorkerRequestEvent` messages from the worker manager
2. **File Download**: Downloads the file from the provided source URL
3. **Integrity Verification**: Validates the file checksum matches the expected value
4. **Metadata Extraction**: Extracts file size and, for images, width and height dimensions
5. **S3 Glacier Upload**: Uploads the file to Amazon S3 with Glacier storage class
   - Uses multipart upload for large files
   - Handles retry logic for failed uploads
6. **Response**: Sends a `ResponseEvent` back with success/failure status and S3 Glacier URL

:::info
S3 Glacier is a [**nearline storage**](../neo-storage-overview.md#nearline-storage) system, which means:
- Files are not immediately accessible after storage, files must be restored from deep archive before they can be downloaded
:::

## Scalability

The S3 Glacier storage worker can be scaled horizontally:
- **Multiple instances** can run in parallel
- Each instance processes requests from the same queue
- Load is automatically balanced across available instances

## Small File Optimization

S3 Glacier storage can work with the **the file packager microservice** to optimize file transfer:
- Small files are aggregated into packages before archival
- Reduces the number of Glacier objects
- Improves restoration efficiency (restore one archive, get many files)

## Configuration

The worker is configured through:
- **Worker Manager dynamic tenant settings**: Worker type registration and AMQP queue configuration
- **File Access Plugin**: S3 Glacier storage location configuration (AWS credentials, S3 bucket, region, path prefix, Glacier storage class, restoration tier, encryption settings)

## Relationship with Other Components

- **File Access Microservice**: Sends storage requests and receives completion notifications
- **Worker Manager**: Routes storage requests to available worker instances
- **S3GlacierStorage Plugin**: Provides AWS credentials and S3 Glacier configuration

## Source Code

Worker source code is available on [GitHub](https://github.com/RegardsOss/regards-oss-worker/tree/master/storage-workers/s3-glacier-storage-worker).