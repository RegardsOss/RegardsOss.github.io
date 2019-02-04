---
layout: classic-docs
title: REGARDS Command line interface
short-title: REGARDS CLI
---

{% include toc.md %}

## Start the system

In order to start REGARDS, you will have to run specific commands.

- If the `Security Level` you choosed was `Enforce`
  - and you installed **all** the components on the current host, you can start the whole system in a single command:
  ```shell
  sudo /opt/regards/REGARDS/sbin/microservice_regards.sh start
  ```

    Previously, it is necessary to add this command to the **sudoers** configuration file:
  ```shell
  vi /etc/sudoers.d/regards
  rsadmin      ALL=(root)       NOPASSWD: /opt/regards/REGARDS/sbin/microservice_regards.sh
  ```

  - and you installed **some** components on the current host, you will need to start each component installed with the following command (remember to always begin the components in the good start order):
  ```shell
  sudo /opt/regards/REGARDS/sbin/microservice_regards.sh -t {component_name} start
  ```


- If the `Security Level` you choosed was `Standard`, you will need to start each component installed with the following command (remember to always begin the components in the good start order):
```shell
/opt/regards/REGARDS/bin/start_microservice.sh -t {component_name}
```

## Check the components status
You can check if a given component is currently running.

- If the `Security Level` you chose was `Enforce`, use the command:
  ```shell
  sudo /opt/regards/REGARDS/sbin/microservice_regards.sh -t {component_name} status
  ```

- If the `Security Level` you chose was `Standard`, use the following command:
```shell
/opt/regards/REGARDS/bin/status_microservice.sh -t {component_name}
```

## Stop the components
You can stop a given component which is currently running.

- If the `Security Level` you chose was `Enforce`, use the command:
  ```shell
  sudo /opt/regards/REGARDS/sbin/microservice_regards.sh -t {component_name} stop
  ```

- If the `Security Level` you chose was `Standard`, use the following command:
```shell
/opt/regards/REGARDS/bin/stop_microservice.sh -t {component_name}
```



## Contents of the installation directory
The contents of the installation directory with all the microservices is :
```shell
ll
bin/
bootstrap-access-instance.jar
bootstrap-access-project.jar
bootstrap-administration.jar
bootstrap-authentication.jar
bootstrap-catalog.jar
bootstrap-config.jar
bootstrap-dam.jar
bootstrap-frontend.war
bootstrap-registry.jar
bootstrap-gateway.jar
config/
lib/
logs/
plugins/
sbin/
run/
www/
```
The **config** folder contains among others the logback configuration file for each microservice, in the the subfolders **config/logback/{microservice-name}**.

The **plugins** folder contains a subfolder foreach microservice **plugins/{microservice-name}**. This subfolders must contains the plugins to used for the specified microservice.