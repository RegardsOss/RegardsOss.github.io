---
layout: classic-docs
title: Plugins starter
short-title: Plugins starter
---
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

Before creating a new **Plugin**, it is mandatory to define the corresponding plugin's type. To do so, you need to create a **contract**, defined by an **interface** annotated `PluginInterface`.

```java
@PluginInterface(description = "hello sample plugin interface")
public interface ISamplePlugin {
    String echo(String pMessage);

    int add(int pFirst, int pSecond);
}
```

## 3.2\. How to define a new Plugin

On a functionnal point of view, defining a new **plugin** is defining a new way to respect its **contract**. On a developper point of view, it means creating a new class annotated `Plugin` that implements an interface annotated `PluginInterface`

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

As we can see in the above example, *SamplePlugin* is a **Plugin** that respect its **contract**: *ISamplePlugin*. In this example, *SamplePlugin* needs parameters to help him respect its **contract** depending on the context. Those parameters are identified by the `PluginParameter` annotation which is detailed further below. *SamplePlugin* also needs to do some stuff while it is initialized, this method is identified by the `PluginInit` annotation.

To sum up on a more technical point of view:
 - the class `SamplePlugin` is a plugin because it is annotated `Plugin`
 - `ISamplePlugin` is `SamplePlugin` contract
 - suffix, coef, isActive are plugin parameters given thanks a `PluginConfiguration`
 - any thing that needs to be done before the plugin is fully ready to use and after the plugin parameters has been set must be in a method annotated `PluginInit`

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

## 3.5 How to generate a plugin jar

Plugins aren't deployed with microservices standard code. They are deployed thanks to a **jar** which will be scanned at the microservice launch. Plugin jars should not embed any of the microservice standard code. To do so, with maven, you can declare framework dependencies with the scope **provided**. Moreover, our maven configuration does not generate a self suffisent jar by itself, you need to instruct it to. Lets take the `CatalogSecurityDelegation` plugin example.

`CatalogSecurityDelegation` is a plugin used by the microservice **rs-storage** allowing to apply access rights defined in microservice **rs-dam** throught results returned by **rs-catalog**. This plugin is defined in the *catalog-security-delegation* module and within its pom we can find this:
```xml
<dependencies>
	<dependency>
		<groupId>fr.cnes.regards.modules.search</groupId>
		<artifactId>search-client</artifactId>
	</dependency>
	<dependency>
		<groupId>fr.cnes.regards.modules.accessrights</groupId>
		<artifactId>accessrights-client</artifactId>
	</dependency>
	<dependency>
		<groupId>fr.cnes.regards.modules.models</groupId>
		<artifactId>models-client</artifactId>
	</dependency>
	<dependency>
		<groupId>fr.cnes.regards.modules.entities</groupId>
		<artifactId>entities-gson</artifactId>
	</dependency>
	<!-- Provided: dependencies that are already included by the microservice -->
	<dependency>
		<groupId>fr.cnes.regards.framework</groupId>
		<artifactId>authentication-regards-starter</artifactId>
		<scope>provided</scope>
	</dependency>
	<dependency>
		<groupId>fr.cnes.regards.framework</groupId>
		<artifactId>feign-regards-starter</artifactId>
		<scope>provided</scope>
	</dependency>
	<dependency>
		<groupId>fr.cnes.regards.modules.storage</groupId>
		<artifactId>storage-dao</artifactId>
		<scope>provided</scope>
	</dependency>
	<!-- Tests -->
	<dependency>
		<groupId>fr.cnes.regards.framework.test</groupId>
		<artifactId>regards-integration-test</artifactId>
		<scope>test</scope>
	</dependency>
	<dependency>
		<groupId>fr.cnes.regards.framework.modules.plugins</groupId>
		<artifactId>plugins-service</artifactId>
		<scope>test</scope>
	</dependency>
	<dependency>
		<groupId>fr.cnes.regards.modules.storage</groupId>
		<artifactId>storage-service</artifactId>
		<scope>test</scope>
	</dependency>
	<dependency>
		<groupId>commons-io</groupId>
		<artifactId>commons-io</artifactId>
		<scope>test</scope>
	</dependency>
</dependencies>

<build>
	<plugins>
		<plugin>
			<groupId>org.apache.maven.plugins</groupId>
			<artifactId>maven-shade-plugin</artifactId>
		</plugin>
	</plugins>
</build>
```

`CatalogSecurityDelegation` being a plugin from **rs-storage**, all dependencies to **rs-storage** code are provided: storage-dao. Dependencies to the framework, feign-regards-starter and authentication-regards-starter, are also provided as they are being shipped with **rs-storage**. On the other hand, dependencies to **rs-dam** and **rs-catalog** are not provided, respecfully accessright-client, model-client, entities-gson and search-client. To embed these dependencies, we need to tell maven to use the **maven-shade-plugin**, here we are using our default **maven-shade-plugin** configuration which is defined in **regards-parent** pom in the **pluginManagement** section. In case this configuration is not suited for you, you can simply override it in your pom.

Considering we are using the default configuration, maven build will now generate one more jar: a **shaded** jar. This is what we called here a plugin jar. It, at least should, contains everything that your plugin needs to work properly within tis microservice.

Once generated, the **shaded** jar just needs to be put in the right directoy, the one pointed by **loader.path** Java property.