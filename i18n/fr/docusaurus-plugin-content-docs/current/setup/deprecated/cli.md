---
id: depracated-cli
title: REGARDS Command line interface
slug: /setup/deprecated/cli
---

## Start the system

In order to start REGARDS, you will have to run specific commands.

- If the `Security Level` you choosed was `Enforce`

  - and you installed **all** the components on the current host, you can start the whole system in a single command:

  ```shell
  /opt/regards/REGARDS/sbin/microservice_regards.sh start
  ```

  Previously, it is necessary to add these commands to the **sudoers** configuration file:

  ```shell
  vi /etc/sudoers.d/regards
  %rsadmin      ALL=(regards)       NOPASSWD: /opt/regards/REGARDS/bin/start_microservice.sh
  %rsadmin      ALL=(regards)       NOPASSWD: /opt/regards/REGARDS/bin/status_microservice.sh
  %rsadmin      ALL=(regards)       NOPASSWD: /opt/regards/REGARDS/bin/stop_microservice.sh
  ```

  - and you installed **some** components on the current host, you will need to start each component installed with the following command (remember to always begin the components in the good start order):

  ```shell
  /opt/regards/REGARDS/sbin/microservice_regards.sh -t {component_name} start
  ```

- If the `Security Level` you choosed was `Standard`, you will need to start each component installed with the following command (remember to always begin the components in the good start order):

```shell
/opt/regards/REGARDS/bin/start_microservice.sh -t {component_name}
```

Microservices start order :

1.  `config` : All microservices get their centralized configuration from this microservice
2.  `registry` : All microservices register themself to this registry
3.  `admin-instance` : All microservices get their database connections information from this microservice
4.  `admin` : All microservices get users information from this microservice
5.  `dam` : Handle data management

Once those microservices are up you start all remaining microservices

1.  `authentication` : All microservices use this microservice to check user authentications
2.  `catalog` : Handle project catalog
3.  `storage` : Handle data files storage
4.  `ingest` : Handle SIP ingestion
5.  `fem` : Feature manager. Handle GeoJson features
6.  `dataprovider` : Handle SIP generation
7.  `order` : handle orders
8.  `frontend` : All microservices use this microservice to check user authentications
9.  `access-instance` : Configuration of instance HMI (admin instance & portal)
10. `access-project` : Configration of projet HMI
11. `gateway` : Load balancer

## Check the components status

You can check if a given component is currently running.

```shell
/opt/regards/REGARDS/sbin/microservice_regards.sh -t {component_name} status
```

## Stop the components

You can stop a given component which is currently running.

```shell
/opt/regards/REGARDS/bin/stop_microservice.sh -t {component_name} stop
```

## Contents of the installation directory

The contents of the installation directory with all the microservices is :

```shell
bin/
bootstrap-access-instance.jar
bootstrap-access-project.jar
bootstrap-administration.jar
bootstrap-authentication.jar
bootstrap-catalog.jar
bootstrap-config.jar
bootstrap-dam.jar
bootstrap-dataprovider.jar
bootstrap-frontend.war
bootstrap-order.jar
bootstrap-registry.jar
bootstrap-ingest.jar
bootstrap-gateway.jar
config/
lib/
logs/
plugins/
sbin/
run/
www/
```

The **config** folder contains among others the logback configuration file for each microservice, in the the subfolders **config/logback/{microservice-name}**. This subfolders contains the log4j context configuration file as [logback.xml](https://logback.qos.ch/manual/configuration.html).

The **plugins** folder contains a subfolder foreach microservice **plugins/{microservice-name}**. This subfolders must contains the plugins to used for the specified microservice.
