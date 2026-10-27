---
title: S3 Glacier Plugin
sidebar_label: S3 Glacier
slug: /development/services/file-access/plugins/s3glacier
sidebar_position: 4
---

## Description

The S3 Glacier storage plugin stores file on an Amazon S3 Tier 3 (glacier) server.

## Small files management

It's more efficient to manage large files than many small files on the S3 Glacier server. For this reason, instead of
storing small files individually, an archive containing them is created and stored once it reaches a certain size or
age. This process is handled by REGARDS on a workspace that the 'file-packager' microservice must be able to access.
This workspace is used to store small files until the archive is created and stored (this occurs when an archive reaches
either a certain age or size), and to restore small file archives when one of the files they contain needs to be
retrieved.

## External cache

It is possible to use Tier 2 storage on an S3 Glacier server in place of the REGARDS cache. In this case, the files are
copied directly from the Tier 2 server and are never stored in the REGARDS external cache (on the filesystem where
REGARDS is deployed).

## Configuration

| Parameter Name                                     | Type                   | Description                                                                                                      | 
|----------------------------------------------------|------------------------|------------------------------------------------------------------------------------------------------------------|
| Standard storage class name                        | String                 | The name of the storage class were files are moved to be available (Tier 2)                                      |
| Enable external cache                              | Boolean                | If true, this storage will use the cache of the S3 Server instead of the cache of REGARDS                        |
| S3 server endpoint                                 | Url (String)           | Endpoint where to reach the desired S3 server, this should contain the whole url and stop just before the bucket |
| S3 server region                                   | String                 | Region of the S3 server, this must match the region configured on the server                                     |
| S3 server key                                      | String                 | Key (user) to access the server                                                                                  |
| S3 server secret                                   | String                 | Secret (password) to access the server                                                                           |
| S3 server bucket                                   | String                 | Name of the S3 bucket where the files should be stored                                                           |
| Storage root path                                  | Path (String)          | Root path on the S3 server where the files will be stored (host/pathtobucket/rootPath/subdirectory/checksum)     |
| MultiPart upload : Size of a part in Mb (>= 5)     | Integer (in megabytes) | For multipart upload, the file will be cut in part of this size                                                  |
| MultiPart upload : Number of parts read in memory. | Integer                | For multipart upload, number of parts that will be loaded in memory in REGARDS                                   |
| Enable physical deletion of files                  | Boolean                | If false, the files won't be deleted from the file system when they are deleted from regards                     |
| File Naming Strategy                               | Enum (String)          | Either CHECKSUM (default) or FILENAME, determine how the file will be named on the file system                   |
| Number of availability requests in parallel        | Integer                | Number of parallel tasks for file availability.                                                                  |

