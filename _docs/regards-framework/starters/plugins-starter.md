{% comment %}
---
layout: classic-docs
title: Plugins starter
short-title: Plugins starter
---
{% endcomment %}
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [1\. Configuration](#1%5C-configuration)
- [2\. Autoconfiguration](#2%5C-autoconfiguration)
- [3\. How to](#3%5C-how-to)
  - [3.1\. How to define a new plugin's type](#31%5C-how-to-define-a-new-plugins-type)
  - [3.2\. How to define a new Plugin](#32%5C-how-to-define-a-new-plugin)
  - [3.3 How to use the REGARDS plugin's module](#33-how-to-use-the-regards-plugins-module)
  - [3.4 How to interact with plugins updates](#34-how-to-interact-with-plugins-updates)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 1\. Configuration

```properties
# Scan packages for Plugin and PluginInterface annotations
regards.plugins.packages-to-scan=fr.cnes.regards.plugins,fr.cnes.regards.plugins.utils
```

It is possible to add a new package to scan by using the the method `addPluginPackage` from the `PluginService`.

# 2\. Autoconfiguration

# 3\. How to

## 3.1\. How to define a new plugin's type

Before to create a new **Plugin**, it is mandatory to define the corresponding plugin's type. To do so, it constits to define a **contract**, defined by an **interface**. Defining an interface is similar to create a new class with the annotation `PluginInterface`.

```java
@PluginInterface(description = "hello sample plugin interface")
public interface ISamplePlugin {
    String echo(String pMessage);

    int add(int pFirst, int pSecond);
}
```

## 3.2\. How to define a new Plugin

To define a new **Plugin**, it constits to define a new class that implements a **PluginInterface** with the annotation `Plugin`.

```java
@Plugin(author = "CSSI", description = "Sample plugin test", id = "aSamplePlugin", version = "12345-6789-11")
public class SamplePlugin implements ISamplePlugin {

    @PluginParameter(description = "string parameter", name = "a suffix paramereter")
    private String suffix;

    @PluginParameter(description = "int parameter", name = "a coeff parameter")
    private Integer coef;

    @PluginParameter(description = "boolean parameter", name = "a boolean parameter")
    private Boolean isActive;

    @Override
    public String echo(final String pMessage) {
        final StringBuffer str = new StringBuffer();
        if (this.isActive) {
            str.append(this.getClass().getName() + " -> " + pMessage + " - " + this.suffix);
        } else {
            str.append(this.getClass().getName() + ":is not active");
        }
        return str.toString();
    }

    @Override
    public int add(final int pFist, final int pSecond) {
        final int res = this.coef * (pFist + pSecond);
        LOGGER.info("add result : " + res);
        return res;
    }

    @PluginInit
    private void aInit() {
        LOGGER.info("Init method call : " + this.getClass().getName() + "suffixe:" + this.suffix + "|active:"
                + this.isActive + "|coeff:" + this.coef);
    }

}
```

As we can see in the above example, a **Plugin** used the specific annotations :

- `PluginParameter` : this annotation is used to define an attribute as a parameter of the **Plugin**. For more information, refer to the plugin parameter section below
- `PluginInit` : this annotation is used to defined a method to execute before to create an instance of the **Plugin**

### 3.2.1 How to define plugin parameters

`PluginParameter` annotation can be used to define different type of plugin parameters: 
  - Primitive types
  - Plugins
  - Objects
  - Collections

The first one is pretty simple to use, just define a plugin parameter as in the example.

The plugins, here we directly provide you with an instance of the plugin wanted.

The objects and collections, they are jsonified so deserialization issues can appaer. In particular, our default JSON library is GSON and GSON does not always handle well deserialization of parametrized objects which is the case of collections, if you encounter issues with this, you can either: 
  - create a wrapper object
  - use the `type` attribute from the `PluginParameter` annotation, provide the `Class` object representing the parameter of your collection and it should be good. For now, we do not handle "complex" collection which parameter is a parametrized object.( ie `List<Some<Thing>>`)

Note that attributes into objects will only be taken into account if they annotated `PluginParameter`

## 3.3 How to use the REGARDS plugin's module

To use a **Plugin**, it is necessary to create a **PluginConfiguration** to define the plugin's parameters.

The REGARDS's module plugins provide all the methods to managed the **Plugin**. It can be done with the **PluginService** in a REGARDS Java module, or with the REST API provided by the **PluginController**.

## 3.4 How to interact with plugins updates

You can be aware of plugin configuration modification by listening via AMQP to PluginConfigurationEvent. PluginConfigurationEvent contains the following attributes:

- pluginConfId: the plugin configuration id
- pluginType: the interface name the configuration is related to
- action: the action at the origin of the event : CREATE, ACTIVATE, DESACTIVATE, DELETE
