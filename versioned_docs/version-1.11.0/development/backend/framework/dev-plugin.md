---
id: backend-framework-dev-plugin
title: Develop a plugin
sidebar_label: How to create a plugin
slug: /development/backend/framework/dev-plugin/
---

REGARDS plugins are designed to customize functionalities for business specifics needs. The available extension points are defined for each microservice in this documentation under specific microservice section.

## Requirements for development:

- Git client
- Maven v3.8.4+
- JDK Eclipse Temurin v17.0.3+

## Set-up

Clone mandatory common github repositories :  
* git clone https://github.com/RegardsOss/regards-backend.git
* git clone https://github.com/RegardsOss/regards-plugins.git


Now compile each repository with maven `mvn clean install -DskipTests` with the here under order :
 1. regards-backend
 2. regards-plugins

## Create your plugin maven module

Create a new maven module in the `regards-plugins` repository under the associated microservice module. For exemple to create a Catalog microservice plugin named 'MyCatalogPlugin' create it in `regards-plugins/catalog-plugins/myCatalogPlugin`.
  
Edit your `pom.xml` and add the here under standard plugin information :
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>fr.cnes.regards.modules.catalog.plugins</groupId>
  <artifactId>myPlugin</artifactId>
  <description>TODO</description>

  <parent>
    <groupId>fr.cnes.regards.modules.catalog.plugins</groupId>
    <artifactId>catalog-plugins</artifactId>
    <version>1.8.0</version>
  </parent

  <url>https://github.com/RegardsOss/RegardsOss.github.io</url>
  <inceptionYear>2019</inceptionYear>
  <licenses>
    <license>
      <name>GNU General Public License (GNU GPL)</name>
      <url>http://www.gnu.org/licenses/gpl.html</url>
      <distribution>repo</distribution>
    </license>
  </licenses>

  <organization>
    <name>CNES</name>
    <url>https://cnes.fr/fr</url>
  </organization>

  <developers>
    <developer>
      <name>TODO</name>
      <organization>TODO</organization>
      <organizationUrl>TODO</organizationUrl>
    </developer>
  </developers>

  <dependencies>
    <dependency>
      <groupId>fr.cnes.regards.modules</groupId>
      <artifactId>catalog-services-plugin</artifactId>
      <scope>provided</scope>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
          <groupId>org.apache.maven.plugins</groupId>
          <artifactId>maven-shade-plugin</artifactId>
          <executions>
            <execution>
                <phase>package</phase>
                <goals>
                  <goal>shade</goal>
                </goals>
                <configuration>
                <minimizeJar>false</minimizeJar>
                <artifactSet>
                  <includes>
                    <include>fr.cnes.regards.modules.catalog.plugins.myPlugin:*</include>
                  </includes>
                </artifactSet>
              </configuration>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
</project>
```

:::caution
The shaded plugin is mandatory to build your plugin in order to ensure the compiled jar is self sufficient (include all his dependencies)
:::

You can now develop your plugin implementation following the documentation of the extension point found in this github documentation.
See [plugins API](../regards/common/api/plugins-api.md) for more information.

Here under is an exemple of an empty implementation :

![](/img/docs/backend-plugin-impl-exemple.png)


## References 

You can also find a tutorial documentation on how to build REGARDS plugins and microservices [here](/docs/regards-backend-tutorial.odp)  
