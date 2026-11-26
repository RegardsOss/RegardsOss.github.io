---
id: local-storage-worker
title: Local Storage Worker
sidebar_label: Local Storage Worker
slug: /development/backend/services/neo-storage/storage-workers/local-storage-worker/
---

## Overview

**The local storage worker** is an independent application that handles physical file storage operations on local filesystems ([online storage](../neo-storage-overview.md#online-storage)). It works in coordination with **the file access microservice** through **the worker manager microservice** to perform actual file transfers to local disk storage.

## Purpose

This worker is responsible for:
- Downloading files from source URLs
- Storing files on local filesystem locations
- Extracting file metadata (size, checksum, image dimensions)
- Verifying file integrity using checksums
- Reporting storage results back to **the file access microservice**

## Architecture

- **Worker Type**: `local-storage-worker`
- **Storage Plugin**: Works with the `LocalDataStorage` plugin configured in **the file access microservice**

## How It Works

1. **Request Reception**: The worker listens on AMQP queues for `StorageWorkerRequestEvent` messages from the worker manager
2. **File Download**: Downloads the file from the provided source URL
3. **Integrity Verification**: Validates the file checksum matches the expected value
4. **Metadata Extraction**: Extracts file size and, for images, width and height dimensions
5. **Local Storage**: Stores the file in the configured local filesystem path
6. **Response**: Sends a `ResponseEvent` back with success/failure status and storage location

## Scalability

The local storage worker can be scaled horizontally:
- **Multiple instances** can run in parallel
- Each instance processes requests from the same queue
- Load is automatically balanced across available instances
- **Temporary storage** before archival to long-term storage

## Configuration

The worker is configured through:
- **Worker Manager dynamic tenant settings**: Worker type registration and AMQP queue configuration
- **File Access Plugin**: Storage location configuration (base path, permissions, etc.)

## Relationship with Other Components

- **File Access Microservice**: Sends storage requests and receives completion notifications
- **Worker Manager**: Routes storage requests to available worker instances
- **LocalDataStorage Plugin**: Provides configuration for file storage operations

## Source Code

Worker source code is available on [GitHub](https://github.com/RegardsOss/regards-oss-worker/tree/master/storage-workers/local-storage-worker).
