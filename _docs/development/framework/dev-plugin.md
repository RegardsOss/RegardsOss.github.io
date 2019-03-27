---
layout: classic-docs
title: Develop a plugin
short-title: Develop plugin
---

REGARDS plugins are designed to customize functionalities for business specifics needs. The available extension points are defined for each microservice in this documentation under specific microservice section.

{% include toc.md %}

## Requirements for development:

- Git client
- Maven 3.x
- JDK 1.8

## Set-up

Clone mandatory common github repositories :  
* git clone https://github.com/RegardsOss/regards-bom.git
* git clone https://github.com/RegardsOss/regards-microservice.git
* git clone https://github.com/RegardsOss/regards-admin.git
* git clone https://github.com/RegardsOss/regards-plugins.git

Clone specific github repositories for the plugin you want to generate. For exemple if you want to generate a plugin of the "Catalog" microservice, you need to clone the Catalog microservice repository.
 * git clone https://github.com/RegardsOss/regards-catalog.git

Now compile each repository with maven `mvn clean install -DskipTests` with the here under order :
 1. regards-bom
 2. regards-microservice
 3. regards-admin
 4. regards-catalog (or other microservice repository)

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
  <version>1.0.0</version>

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

  <parent>
    <groupId>fr.cnes.regards.modules.catalog.plugins</groupId>
    <artifactId>catalog-plugins</artifactId>
    <version>3.1.0-RC</version>
  </parent

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

> The shaded plugin is mandatory to build your plugin in order to ensure the compiled jar is self sufficient (include all his dependencies)

You can now develop your plugin implementation following the documentation of the extension point found in this github documentation.
For exemple to develop a catalog plugin you can see the [Catalog service plugin page](http://localhost:4000/development/regards/catalog/plugins/catalog-service-plugins/#section=backend)

Here under is an exemple of an empty implementation :

![](/assets/img/docs/backend-plugin-impl-exemple.png)


## References 

> You can also find a tutorial documentation on how to build REGARDS plugins and microservices [here](/assets/docs/regards-backend-tutorial.odp)  
