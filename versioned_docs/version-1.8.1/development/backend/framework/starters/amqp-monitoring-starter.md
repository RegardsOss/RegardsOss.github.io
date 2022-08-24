---
id: backend-framework-starters-amqp-monitoring
title: AMQP monitoring starter
slug: /development/backend/framework/starters/amqp-monitoring/
---



# 1\. Configuration

Add starter dependency to your POM (version depends on the REGARDS BOM)
```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>amqp-monitoring-regards-starter</artifactId>
</dependency>
```
# 2\. Autoconfiguration

Starter autoconfigures:

- `regardsAmqpAppender` is a logback appender. It is responsible to publish some **LogEvent** to a publisher for the current tenant.
- `IMonitoringLogEvent` is used subcribe to **LogEvent** form all known tenants.

# 3\. The **Metrics** module

The **Metrics** module define a subscriber to subscribe to the **LogEvent** publish for all the tenants. And for each tenant, each **LogEvent** are persisted to the tenant's database. The `LogEventHandler` implements `ILogEventHandler` and define a method `handle`.

# 4\. How to

## 4.1. How to publish **LogEvent** to the **Metrics** module
To publish **LogEvent** to the **Metrics** module, it is necessary to add the logback appender **regardsAmqpAppender** to the logback.xml file. This is done in logback.xml file from each microservice's bootstrap.
```xml
<appender name="regardsAmqpAppender"
  class="ch.qos.logback.ext.spring.DelegatingLogbackAppender">
  <filter
    class="fr.cnes.regards.framework.logbackappender.RegardsAmqpAppenderFilter">
    <level>INFO</level>
  </filter>
</appender>

<logger name="fr.cnes.regards" level="INFO" additivity="true">
  <appender-ref ref="regardsAmqpAppender" />
</logger>
```

The `RegardsAmqpAppenderFilter` defined a list of package for which each log should be publish to the **Metrics** module.

## 4.2\. How to log events to SYSLOG
```xml
<include resource="fr/cnes/regards/framework/logbackappender/defaults.xml" />

<appender name="SYSLOG" class="ch.qos.logback.classic.net.SyslogAppender">
  <syslogHost>localhost</syslogHost>
  <facility>LOCAL0</facility>
  <suffixPattern>${SYSLOG_PATTERN}</suffixPattern>
  <port>514</port>
</appender>

<root level="info">
  <appender-ref ref="SYSLOG" />
</root>
```

The pattern **SYSLOG_PATTERN** is defined in `fr/cnes/regards/framework/logbackappender/defaults.xml`.

## 4.3\. How to log security events to SYSLOG
```xml
<include resource="fr/cnes/regards/framework/logbackappender/defaults.xml" />

<appender name="SYSLOG-SECU" class="ch.qos.logback.classic.net.SyslogAppender">
  <syslogHost>localhost</syslogHost>
  <facility>LOCAL1</facility>
  <suffixPattern>${SYSLOG_SECURITY_PATTERN}</suffixPattern>
  <port>514</port>
</appender>

<!-- Log the user request authentication -->
<logger name="fr.cnes.regards.framework.authentication" level="INFO">
  <appender-ref ref="SYSLOG-SECU" />
</logger>
```

The pattern **SYSLOG_SECURITY_PATTERN** is defined in `fr/cnes/regards/framework/logbackappender/defaults.xml`.
