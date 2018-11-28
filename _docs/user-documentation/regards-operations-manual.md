---
layout: classic-docs
title: REGARDS Operations manual
short-title: Operations manual
categories:
  - user-documentation
---

# Overview

1. Monitor Zull routing and load balancing (console)
2. Monitor Eureka server (console)
3. Monitor RabitMQ Message server
4. Consult logs

# 1\. Monitor Zull routing and load balancing (console)

TODO.

# 2\. Monitor Eureka server (console)

The Eureka Registry can be monitored throught an IHM only available from the host server at the address : <http://{host}:{eureka-port}/>.

This interface display all microservices currently in activity and shows many stats about them. The bellow exemple display the interface in a test environnement with two actives mircroserices.

![](/assets/images/operations/EurekaConsole.png)

# 4\. Monitore RabbitMQ Message server (console)

TOD.

# 3\. Consult logs

By default logs are redirected into {REGARDS_INSTALL_DIR}/REGARDS/logs/{microservice}.log.

If you want to log to syslog, you can add the folowing to each logback.xml, inside `configuration` element:
```xml
  <include resource="fr/cnes/regards/framework/logbackappender/syslog.xml" />
	
	<root level="info">
		<appender-ref ref="STDOUT" />
		<appender-ref ref="SYSLOG" />
		<appender-ref ref="SYSLOG-SECU" />
	</root>
```
By default, syslog appenders are configured for localhost on port 514. Normal logs are affected to facility LOCAL0 while security logs are affected to facility LOCAL1.
