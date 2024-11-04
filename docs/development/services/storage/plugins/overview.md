---
title: Plugins
sidebar_label: Available plugins
slug: /development/services/storage/plugins/overview
sidebar_position: 1
---
As described in the [conception section](../conception.md), the storage microservice delegates actual storage actions (
e.g., copy, retrieval) to plugins that serve as interfaces with the physical storage (COTS).

:::info Developer's Advice
If you want to create your own implementation of one of these extension points, you need to extend the specific
interface indicated.
:::

## Online storage location plugins

All the following plugins implements
the [IOnlineStorageLocation interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-file-access/file-access-plugin/file-access-plugin-domain/src/main/java/fr/cnes/regards/modules/fileaccess/plugin/domain/IOnlineStorageLocation.java).

| Plugin image                  | Plugin name | Description                                                                              | 
|-------------------------------|-------------|------------------------------------------------------------------------------------------|
| local-storage-location-plugin | Local       | Stores the files on the file system were REGARDS is deployed (uses the file:// protocol) | 
| s3-storage-plugin             | S3          | Stores the files on an Amazon S3 Tier 2 server.                                          | 

## Nearline storage location plugins

All the following plugins implements
the [INearlineStorageLocation interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-file-access/file-access-plugin/file-access-plugin-domain/src/main/java/fr/cnes/regards/modules/fileaccess/plugin/domain/INearlineStorageLocation.java).

| Plugin image      | Plugin name | Description                                               | 
|-------------------|-------------|-----------------------------------------------------------|
| s3-storage-plugin | S3Glacier   | Stores the files on an Amazon S3 Tier 3 (glacier) server. | 

## File Naming Strategy

Each storage plugin has a parameter named **File Naming Strategy**. There are two options for defining how files are
named when they are stored:

- **CHECKSUM**: This is the default option. The file will be stored using its checksum as the name.
- **FILENAME**: The file will be stored using its original name.

## Allow physical deletion of files

Each storage plugin has a parameter named **Allow physical deletion of files**. If set to false, when a file is "
deleted," it will only be removed from the microservice database and won't actually be deleted from the storage. The
file will be unknown to REGARDS but will still exist physically.
