---
id: backend-framework-modules-plugins
title: Plugins introduction
sidebar_label: Plugins introduction
slug: /development/backend/framework/modules/plugins
---

## Purpose

Plugin module is used to promote service adaptability.

## Configuration

Add module dependency to your POM (version depends on the BOM)

```xml
<dependency>
    <groupId>fr.cnes.regards.framework.modules.plugins</groupId>
    <artifactId>plugins-service</artifactId>
</dependency>
```

Properties :

```properties
# Comma separated list of plugin packages from which system detects and loads plugin implementations
# Fallback to fr.cnes.regards if not specified
regards.plugins.packages-to-scan=
```

vregards.plugins.packages-to-scan

## Autoconfiguration

Module autoconfigures:

* `PluginService` to manage plugin lifecycle.

The module relies on a **plugin utility library** to discover and instanciate a plugin. This library can be directly imported for implementation and test purpose with the following configuration :

```xml
<dependency>
    <groupId>fr.cnes.regards.framework.utils</groupId>
    <artifactId>plugin-utils</artifactId>
</dependency>
```

## How to define an extension point

To define an extension point, you have to declare a **service contract** annotated with `PluginInterface`:

```java
@PluginInterface(description = "Hello sample plugin interface")
public interface IHelloPlugin {
    String hello(String name);
}
```

## How to create a plugin

On a functionnal point of view, creating a **plugin** is defining a new way to respect a **service contract**. On a developper point of view, it means creating a new class annotated `Plugin` implementing the plugin interface.

```java
@Plugin(author = "REGARDS Team", id = "echo", version = "1.0.0", licence = "GPLv3", owner = "CNES")
public class HelloPlugin implements IHelloPlugin {
    
    @PluginParameter(label = "Message", defaultValue="Hello %s!")
    private String message;

    @PluginInit
    private void init() {
        // Init something after plugin instanciation
    }

    @Override
    public String hello(String name) {
        return String.format(message, name);
    }
}
```
As we can see in the above example, `HelloPlugin` fulfils the `IHelloPlugin` service contract.

## Plugin reference documentation

### Annotations

#### `PluginInterface`

This annotation identifies an extension point, also called a service contract that is used in business service workflow allowing to adapt behaviour to project requirements.

#### `Plugin`

This annotation identifies an implementation of an extension point and allows to give useful information on the plugin such as its `id`, `decription` `version`, etc.

#### `PluginInit`

This annotation is **optional** and is used to initialize a plugin. If used, it must annotates a no-arg method. This method is called after parameter injection on plugin instanciation.

#### `PluginDestroy`

This annotation is **optional** and is used to properly destroy a plugin. If used, it must annotates a no-arg method. This method is called when plugin is destroyed by the plugin service.

#### `PluginParameter`

This annotation is **optional** and can be used several times, as many times as there are parameters. It allows accurate plugin configuration.

Plugin parameters are injected after plugin class instanciation and before init method was called.

Plugin parameters supports following types:

* String
* Byte
* Short
* Integer
* Long
* Float
* Double
* Boolean
* Collection
* Plugin interface
* Map
* Plain Old Java Object (i.e. POJO)

:::danger
Parameter configurations are backed up as plain JSON objects so all parameters must be serializabled unequivocally!
:::

:::danger
All parameters (i.e. class fields), even in complex objects, must be annotated with `PluginParameter`!
:::

### Plugin development

As seen above, develop a plugin just means implementing **pure plain JAVA objects**.

Start by implementing a service contract interface and afterwards, just annotate your implementation with required plugin annotations.

Before deploying plugin, you should test it using `PluginUtils`.

Hereunder, this is a sample test built with JUnit.

```java
    @Test
    public void helloPluginTest() {

        String helloFormat = "Welcome %s!";
        String name = "John";
        // Set parameter configuration (override default)
        Set<PluginParameter> parameters = PluginParametersFactory.build().addParameter("message", helloFormat).getParameters();
        // Init plugin instanciation context
        PluginUtils.setup("your.root.package");
        // Instanciate plugin
        IHelloPlugin hello = PluginUtils.getPlugin(parameters, HelloPlugin.class, new HashMap<>());
        // Test plugin
        Assert.assertEquals(String.format(helloFormat, name), hello.hello());
    }
```

### Plugin deployment

:::caution
Plugins are loaded in the same classloader as the microservice so you have to be very careful with their deployments. Plugin library and dependencies have to be compatible with the target microservice.
:::

To deploy your plugin, we advise you this procedure :

* Build you plugin as a simple JAR,
* Deploy this JAR and all its **specific dependencies** in the plugin directory of the target microservice,
* Be careful not to add library already loaded by microservice to avoid library inconsistency.
* Restart the microservice.

:::caution
To be loaded in a microservice, plugin scanned packages has to be declared properly in microservice properties. By default, only the package `fr.cnes.regards` is scanned (Look at the properties above).
:::
