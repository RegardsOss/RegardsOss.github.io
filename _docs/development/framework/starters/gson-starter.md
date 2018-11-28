---
layout: classic-docs
title: GSON starter
short-title: GSON starter
---

{% include toc.md %}

## Purpose

This starter is making easier the use of GSON with new features.

## Configuration

```properties
# Scan package for annotated adapters or factories
regards.gson.scan-prefix=fr.cnes.regards
```

To avoid conflict between Jackson and GSON with SPRING, set the following property :

```properties
spring.http.converters.preferred-json-mapper=gson
```

## Autoconfiguration

Starter autoconfigures a **GsonHttpMessageConverter** automatically injected in available HTTP message converters.

Il autoconfigures a `Gson` instance with default adapters and filters plus the introspected ones.

<!-- GSON is customize through **GsonBuilder** to :

- dynamically create adapter factories for **Gsonable** element (polymorphic factories),
- dynamically register a **TypeAdapter** annotated with **GsonTypeAdapterBean**,
- dynamically register **TypeAdapterFactory** annotated with **GsonTypeAdapterFactory**,
- dynamically register Spring **TypeAdapterFactory** annotated with **GsonTypeAdapterFactoryBean** or Spring **Component**,
- add an exclusion strategy based on **GSonIgnore** annotation,
- add a **PathAdapter** for **Path** class,
- add a SpringFox adapter factory if [Swagger starter](/regards-framework/starters/swagger-starter/) is on the classpath. -->

## How to

### Create type adapters or adapter factories

See [GSON reference project](https://github.com/google/gson).

### Register a type adapter

Just create a class extending `TypeAdapter` and annotated with `GsonTypeAdapter` with a **no arg constructor** :

```java
@GsonTypeAdapter(adapted = Your.class)
public class LinkAdapter extends TypeAdapter<Your> {
    ...
}
```

### Register a type adapter as a component

Just create a class extending `TypeAdapter` and annotated with `GsonTypeAdapterBean` :

```java
@GsonTypeAdapterBean(adapted = Your.class)
public class LinkAdapter extends TypeAdapter<Your> {

    @Autowired
    private MyService service;
    ...
}
```

### Register a type adapter factory

Just create a class implementing `TypeAdapterFactory` and annotated with `GsonTypeAdapterFactory` with a **no arg constructor**.

```java
@GsonTypeAdapterFactory
public class YourFactory implements TypeAdapterFactory {
    ...
}
```

### Register a type adapter factory as a component

Just create a class implementing `TypeAdapterFactory` and annotated with `GsonTypeAdapterFactoryBean` (or `Component`):

```java
@GsonTypeAdapterFactoryBean
public class YourFactory implements TypeAdapterFactory {

    @Autowired
    private MyService service;
    ...
}
```

### Work with polymorphic classes

#### Register a `Gsonable` polymorphic factory

Just annotate the top interface or abstract class of a hierarchical set of classes with `Gsonable`. Under the hood, the starter will register a dynamically created `PolymorphicTypeAdapterFactory`. You optionnaly can specify the discriminator name in `Gsonable` and the discriminator values on sub types through `GsonDiscriminator`.

During GSON serialization, factory will inject a discriminator property whose name is either `@type@` or the specified one and the value is either the class name or the specified discriminator value.  
During deserialization, factory build the target object according to its discriminator value.

#### Register a custom polymorphic factory

Just create a class extending `PolymorphicTypeAdapterFactory` and annotated with either `GsonTypeAdapterFactory` or `GsonTypeAdapterFactoryBean`.

```java
@GsonTypeAdapterFactory
public class YourAdapterFactory extends PolymorphicTypeAdapterFactory<YourInterface> {

    public EntityAdapterFactory() {
        super(YourInterface.class, "discriminatorName", true);
        registerSubtype(YourClass1.class, "disVal1");
        registerSubtype(YourClass2.class, "disVal2");
    }
}
```

### Exclude field from serialization

Just annotate field with `GsonIgnore` to exclude a particular field.
