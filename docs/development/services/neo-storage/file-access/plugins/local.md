---
title: Local Plugin
sidebar_label: Local
slug: /development/services/file-access/plugins/local
sidebar_position: 2
---

## Description

The Local storage plugin uses the file system where regards is deployed to store files.

## Small files management

Not managed

## Configuration

| Parameter Name                    | Type          | Description                                                                                    | 
|-----------------------------------|---------------|------------------------------------------------------------------------------------------------|
| Root Directory                    | Path (String) | Root path on the file system where the files will be stored (/rootPath/subdirectory/checksum)  | 
| Enable physical deletion of files | Boolean       | If false, the files won't be deleted from the file system when they are deleted from REGARDS   |
| File Naming Strategy              | Enum (String) | Either CHECKSUM (default) or FILENAME, determine how the file will be named on the file system |
