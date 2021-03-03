---
id: backend-framework-starters-module
title: Module starter
slug: /development/backend/framework/starters/module
---



## Purpose

This starter :

* Gives access to standard system exceptions,
* Centralizes system exception transformation into REST exception,
* Brings the module manager engine logic.

## Configuration

Add starter dependency to your POM (version depends on the BOM)

```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>module-regards-starter</artifactId>
</dependency>
```

Business dependency

```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>module-regards</artifactId>
</dependency>
```

## How to

### Implement a module manager

To do this, you have to implement a module manager inheriting abstract class `AbstractModuleManager` (and implementing `IModuleManager`) and **annotated as a Spring component**.

In the same package as your module configuration manager, you have to create a `module.properties` file containing following required properties:

```properties
# Your module properties
module.id=<your module id>
module.name=<your module name for display purpose>
module.description=<your module description for display purpose>
module.version=<your module version>
module.author=<author>
module.legalOwner=<author,client, ...>
module.documentation=<url>
```

By default, `IModuleManager#importConfiguration` will only be called if imported file matches the same `module.id` properties.

At last, to adjust your exported JSON configuration, you can annotate your exported POJO with `@ConfigIgnore`.

#### Import/export configuration

For instance,

```java
@Service
public class MyModuleManager extends AbstractModuleManager {

    @Override
    public void importConfiguration(ModuleConfiguration configuration) throws ModuleException {
        for (ModuleConfigurationItem<?> item : configuration.getConfiguration()) {
            if (MyPOJO.class.isAssignableFrom(item.getKey())) {
                MyPOJO pojo = item.getTypedValue();
                // Do something to import configuration
            }
        }
    }

    @Override
    public ModuleConfiguration exportConfiguration() {
        List<ModuleConfigurationItem<?>> configuration = new ArrayList<>();
        // Fill list using ModuleConfigurationItem#build
        return ModuleConfiguration.build(info, configuration);
    }
}
```

#### Ready

Override default method. 

`isReady` is only called if `isReadyImplemented` return `true`.

```java
    default ModuleReadinessReport<S> isReady() {
        throw new UnsupportedOperationException("Ready feature not implemented");
    }

    default boolean isReadyImplemented() {
        return false;
    }
```

#### Restart

Override default method.

`restart` is only called if `isRestartImplemented` return `true`.

```java
    default ModuleRestartReport restart() {
        throw new UnsupportedOperationException("Restart feature not implemented");
    }

    default boolean isRestartImplemented() {
        return false;
    }
```





