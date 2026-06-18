---
id: backend-downloader-conception
title: REGARDS storage microservice
sidebar_label: How it works
sidebar_position: 2
slug: /development/services/downloader/conception/
---

## Introduction

The Downloader microservice is developed using exactly the [same source code](https://github.com/RegardsOss/regards-backend/tree/master/rs-storage) as the Storage microservice.

:::warning
Contrary to other micro-services, Downloader does not use its own schema and database: it uses the same ones as the 
Storage microservice. This means that there is not specific
[project connection](../admin-instance/conception.md#module--project-instance) for it.
:::

The difference between the two microservices lies in the activation or non-activation of a **downloader** profile.

The “downloader” profile enables you to disable all Storage service functions that are not dedicated to downloading.

For example, in the [FileReferenceController](https://github.com/RegardsOss/regards-backend/blob/775a8fa39e12333446dde7703c04d892ff52554d/rs-storage/storage/storage-rest/src/main/java/fr/cnes/regards/modules/storage/rest/FileReferenceController.java#L78) controller, the annotation below indicates that this REST controller is not active, and therefore the functionality is not enabled in the service.

```java
@Profile({ "!downloader" })
@RestController
@RequestMapping(FileReferenceController.FILE_PATH)
public class FileReferenceController {
   ...
}
```

The downloader profile is enabled in the **boostrap-downloader** module, which represents the main module of the spring-boot downloader service.

This profile is simply not enabled in the boostrap-storage module, which represents the main module of the spring-boot storage service.

## How to download a file

The microservice downloader offers a single functional endpoint: **downloading a file**.

Download scalability therefore depends solely on the size of the Jetty application server thread pool.

By default, the size of this pool is set to **200** in deployment inventories.

If you want to be able to do more downloads in parallel, you can deploy more instances of the service or increase the size of the pool as indicated in the [installation manual](../../../setup/swarm/advanced/02-microservice-setup.md#scale-up-microservices).

To download files, this service only requires the unique key of the file to be downloaded, i.e. the file checksum.

Using this checksum, the service queries the database to retrieve the storage space where the file is located.

If the file is located on more than one storage space, the hot storage with the highest priority is selected first. If there is no hot storage, then the cold storage with the highest priority is selected.

Once the file storage space has been determined, the associated plugin is instantiated and the file upload interface is called.

As a reminder, the plugins used by the downloder service are the same as those used by the storage service. They are shared by both services on the same disk space during deployment.

The downloader service plugins can be consulted via the [storage service plugins description page](../storage/plugins/overview.md).
