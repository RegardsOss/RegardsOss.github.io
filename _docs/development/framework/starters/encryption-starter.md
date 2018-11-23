---
layout: classic-docs
title: Encryption starter
short-title: Encryption starter
wip: true
---

{% include toc.md %}

## Purpose

This stater enables encryption, and decryption, for sensible plugin parameters and databases password.

## Configuration

Add stater dependency to your POM (version depends on the REGARDS BOM)

```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>encryption-starter</artifactId>
</dependency>
```

This stater defines its own properties. It can be found in CipherProperties class.
```properties
regards.cipher.key-location=<path to cipher key>
regards.cipher.iv=<value of initialization vector>
```

## Autoconfiguration

Starter autoconfigures: 
  - IEncryptionService to manage encryption and decryption. By default we use AESEncryptionService.
