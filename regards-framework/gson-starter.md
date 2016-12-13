---
layout: classic-docs
title: GSON starter
short-title: GSON starter
categories:
  - regards-framework
---

# 1\. Configuration

```properties
# Scan package for Gsonable annotation
regards.gson.scan-prefix=fr.cnes.regards
```

# 2\. Autoconfiguration

Starter exposes a bean **GsonHttpMessageConverter** that has to be injected in Spring MVC web configuration.

GSON is customize through **GsonBuilder** to :

- dynamically create adapter factories for **Gsonable** element (polymorphic factories),
- dynamically register **TypeAdapterFactory** annotated with **GsonTypeAdapterFactory**,
- dynamically register Spring **TypeAdapterFactory** annotated with **GsonTypeAdapterFactoryBean** or Spring **Component**,
- add an exclusion strategy based on **GSonIgnore** annotation,
- add a **PathAdapter** for **Path** class.

# 3\. How to register a custom factory

- With **GsonTypeAdapterFactory** annotation

This annotation allows to register automatically a **TypeAdapterFactory** with a no arg constructor.

- With **GsonTypeAdapterFactoryBean** or **Component** annotation

Useful for Spring based factories allowing dependency injection. The factory must implement GSON **TypeAdapterFactory**.

# 4\. How to use polymorphic element (de)serialization

- With **Gsonable** annotation on a base hierarchy type

This annotation allows to register a dynamically created **PolymorphicTypeAdapterFactory**.

You optionnaly can specify the discriminator name in **Gsonable** and the discriminator values on sub types through **GsonDiscriminator**.

- Creating a sub class of **PolymorphicTypeAdapterFactory** and registering it with annotation

# 5\. How to instanciate polymorphic factory

Init an instance of **PolymorphicTypeAdapterFactory** or a subclasses and **registerSubtype** on it.

**Sub type can be registered even if factory has already been created at runtime.**
