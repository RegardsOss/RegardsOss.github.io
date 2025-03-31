---
title: Local Plugin
sidebar_label: Local
slug: /development/services/storage/plugins/local
sidebar_position: 2
---

## Description

The Local storage plugin uses the file system where regards is deployed to store files.

## Small files management

When storing a new file in this location, small files are not stored directly in the directory but are stored instead in a
zip archive.

## Configuration

| Parameter Name                    | Type                | Description                                                                                    | 
|-----------------------------------|---------------------|------------------------------------------------------------------------------------------------|
| Root Directory                    | Path (String)       | Root path on the file system where the files will be stored (/rootPath/subdirectory/checksum)  | 
| Enable physical deletion of files | Boolean             | If false, the files won't be deleted from the file system when they are deleted from regards   |
| Files maximum size for zips       | Integer (in bytes)  | Maximal size of a file to be considered a small file so it uses the small file archival system |
| Maximum zip size                  | Integer (in bytes ) | Maximal size of an archive, no more files will be added once it reaches this size              |
| File Naming Strategy              | Enum (String)       | Either CHECKSUM (default) or FILENAME, determine how the file will be named on the file system |