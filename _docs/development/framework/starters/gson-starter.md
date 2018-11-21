---
layout: classic-docs
title: GSON starter
short-title: GSON starter
---

* automatic table of content
{:toc}

# 1\. Configuration

```properties
# Scan package for Gsonable annotation
regards.gson.scan-prefix=fr.cnes.regards
```

To avoid conflict between Jackson and GSON with SPRING, set the following property :

```properties
spring.http.converters.preferred-json-mapper=gson
```

# 2\. Autoconfiguration

Starter autoconfigures a **GsonHttpMessageConverter** automatically injected in available HTTP message converters.

GSON is customize through **GsonBuilder** to :

- dynamically create adapter factories for **Gsonable** element (polymorphic factories),
- dynamically register a **TypeAdapter** annotated with **GsonTypeAdapterBean**,
- dynamically register **TypeAdapterFactory** annotated with **GsonTypeAdapterFactory**,
- dynamically register Spring **TypeAdapterFactory** annotated with **GsonTypeAdapterFactoryBean** or Spring **Component**,
- add an exclusion strategy based on **GSonIgnore** annotation,
- add a **PathAdapter** for **Path** class,
- add a SpringFox adapter factory if [Swagger starter](/regards-framework/starters/swagger-starter/) is on the classpath.

# 3\. How to

## 3.1\. How to use dependency injection in a type adapter

If you annotate your custom type adapter with **GsonTypeAdapterBean** annotation, you will be able to use Spring dependency injection in your type adapter.

## 3.2\. How to register a custom factory

- With **GsonTypeAdapterFactory** annotation

This annotation allows to register automatically a **TypeAdapterFactory** with a no arg constructor.

- With **GsonTypeAdapterFactoryBean** or **Component** annotation

Useful for Spring based factories allowing dependency injection. The factory must implement GSON **TypeAdapterFactory**.

## 3.3\. How to use polymorphic element (de)serialization

- With **Gsonable** annotation on a base hierarchy type

This annotation allows to register a dynamically created **PolymorphicTypeAdapterFactory**.

You optionnaly can specify the discriminator name in **Gsonable** and the discriminator values on sub types through **GsonDiscriminator**.

- Creating a sub class of **PolymorphicTypeAdapterFactory** and registering it with annotation

## 3.4\. How to instanciate polymorphic factory

Init an instance of **PolymorphicTypeAdapterFactory** or a subclasses and **registerSubtype** on it.

**Sub type can be registered even if factory has already been created at runtime.**

## 3.5\. How to use exclusion strategy

Just annotate field with **GsonIgnore** to exclude a particular field.
