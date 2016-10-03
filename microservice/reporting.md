---
layout: classic-docs 
title: Requirement report 
short-title: Requirement report 
categories:
	- microservice-core
---

Prerequisites
=============

Automatic reporting collection is running with **JUnit tests**.

Report annotation
=================

Add dependency to test artifact (if not already defined) :

```xml
<dependency>
  <groupId>fr.cnes.regards.microservices</groupId>
	<artifactId>microservice-core-test</artifactId>
	<scope>test</scope>
</dependency>
```

Use :

```java
@Requirement("DSL_REQUIREMENT?")
```

many times to identify all requirements associated to your test.

Use :

```java
@Purpose("Purpose of your test?")
```

to describe the unit test.

Sample
======

```java
@Requirement("REGARDS_DSL_DAM_MOD_010")
@Requirement("REGARDS_DSL_DAM_MOD_020")
@Purpose("Get model attributes to manage data models")
@Test
public void testSomething() {
}
```

How to generate requirement reports?
====================================

Maven test plugins has to be configured to add a specific reporting listener.

```xml
<plugins>
  <plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-failsafe-plugin</artifactId>
    <configuration>
      <properties>
        <property>
          <name>listener</name>
          <value>fr.cnes.regards.microservices.core.test.report.RequirementMatrixReportListener</value>
        </property>
      </properties>
    </configuration>
    <executions>
      <execution>
        <goals>
          <goal>integration-test</goal>
          <goal>verify</goal>
        </goals>
      </execution>
    </executions>
  </plugin>
  <plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <configuration>
      <properties>
        <property>
          <name>listener</name>
          <value>fr.cnes.regards.microservices.core.test.report.RequirementMatrixReportListener</value>
        </property>
      </properties>
    </configuration>
  </plugin>
</plugins>
</pluginManagement>
```

Where reports are generated?
============================

Reports are generated in maven default build directory (i.e. target) under **requirement-reports** directory. A report starts with **RQMT-** prefix and is saved as an XML file.

How to generate an aggregated report
====================================

Use REGARDS \**Maven report plugin".

From the root directory of your microservice :

```bash
mvn fr.cnes.regards.microservices:report-maven-plugin:1.0-SNAPSHOT:gen --non-recursive
```

An XLSX file (Windows office document) is created under target directory.
