---
layout: classic-docs
title: Deploy with IzPack
short-title: IzPack deployment
wip: true
categories:
  - getting-started
---

For now, the only way to deploy REGARDS on servers is to use an [**IzPack** package](http://izpack.org/).

If you don't have compiled the REGARDS IzPack installer, feel free to download it on our [github release page](https://github.com/RegardsOss/regards-deployment/releases).

Ensure you have [setup components that REGARDS relies on](/getting-started/configuration/#section=getting-started) before continuing this tutorial. 
## Prerequisites

In order to run the Izpack installer, you need these dependencies :  
- groovy 1.8.9
- OpenJDK 1.8

## Run command

To run the REGARDS installer, run the command:  
```bash
java -jar REGARDS-OSS-Installer.jar
```

After your first installation, you can provide an XML file to automatically fill the IzPack installer:  
```bash
java -jar REGARDS-OSS-Installer.jar auto-install-values.xml
```
The file `auto-install-values.xml` can be generated at the end of the manual installation. However IzPack do not save password in the file, you will need to edit the file to add password by yourself.

## Installation directory
On every host you install a REGARDS component. you will be asked to provide the installation directory :

![](/assets/images/installation/select-directory.png)

Afterwards, you will need to choose which components you want to install.

### Contents of the installation directory
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


## Cloud installation

The cloud installation allows you to install the REGARDS product components in **multiple physical or virtual hosts**. The only requirement is that all the hosts could communicate throught **HTTPS protocol**.

With this installation system you can install **multiple instances of each microservice**. In the first place you can install one instance of each needed microservice and if the performances of the system are too low, you can install more instances later.

Choose the components you want to install on the current host, then let the installer guide you through the preliminary configuration steps :

![](/assets/images/installation/packs.png)

**NOTE :** If you choose to not install the Configuration server, you will have to provide an existing Configuration server so that components you are currently installing can connect to it.

**NOTE :** You can install any component in any order and wherever you want, **but** you always need to start the Configuration server first, the Registry server second and the Admin server third. The table bellow lists the mandatory components and the start order.

Component                | Mandatory                   | Start Order | Multiple instances          | Description
------------------------ | :-------------------------: | :---------: | :-------------------------: | --------------------------------------------------------------------
**Frontend**             | ![](/assets/images/nok.png) | **4**       | ![](/assets/images/nok.png) | Provide WEB interfaces to access REGARDS services
**Configuration**        | ![](/assets/images/ok.png)  | **1**       | ![](/assets/images/nok.png) | Provide configuration parameters for all REGARDS components
**Registry**             | ![](/assets/images/ok.png)  | **2**       | ![](/assets/images/nok.png) | Provide the adress registry for all the REGARDS components
**Admin**                | ![](/assets/images/ok.png)  | **3**       | ![](/assets/images/nok.png) | Provide the administration features of the system
**Gateway**              | ![](/assets/images/ok.png)  | **3**       | ![](/assets/images/nok.png) | Provide a unique and secure entry point for all the REGARDS services
**Other components**     | ![](/assets/images/nok.png) | **4**       | ![](/assets/images/ok.png)  | Provide the REGARDS functionalities
{: .table .table-striped}

## REGARDS Components configuration

After that, you will need to configure all the components you selected for the installation on the current host.

### Configuration

The configuration server is the first component to start, it provides the global configuration parameters to all REGARDS components. It only needs a starter port.

### Registry

The Registry server is the second component to start, it provides the global components registry. This server is accessed by all REGARDS components to retrieve the adresses of other ones.<br>
It needs a starter port and the adress of the configuration server.

### Gateway

The Gateway is the secured entry point to the REGARDS system. It ensures the authentication system by providing an authentication Service Provider (SP) and redirect the REGARDS services requests to the installed microservices.<br>
This component also handles load-balancing in order to redirect requests to the least requested instance of a microservice.

### Frontend

The Frontend component provides the WEB interfaces to administrate and use the REGARDS fonctionnalities. This component is not mandatory, you can either access all the REGARDS functionnalities by REST requests to the Gateway server with a tool like **curl**

![](/assets/images/installation/frontend.png)

### 5.5 Other components

For any other selected component(s), you will have to configure :

- Each instance `port`
- Specific configuration parameters

Exemple for the Administration microservice configuration :

![](/assets/images/installation/admin.png)

## Start the system

In order to start REGARDS, you will have to run specific commands.

- If the `Security Level` you chose was `Enforce`
  - and you installed **all** the components on the current host, you can start the whole system in a single command:
  ```shell
  sudo {install_dir}/REGARDS/sbin/microservice_regards.sh start
  ```

    Previously, it is necessary to add this command to the **sudoers** configuration file:
  ```shell
  vi /etc/sudoers.d/regards
  rsadmin      ALL=(root)       NOPASSWD: {install_dir}/REGARDS/sbin/microservice_regards.sh
  ```

  - and you installed **some** components on the current host, you will need to start each component installed with the following command (remember to always begin the components in the good start order):
  ```shell
  sudo {install_dir}/REGARDS/sbin/microservice_regards.sh -t {component_name} start
  ```


- If the `Security Level` you chose was `Standard`, you will need to start each component installed with the following command (remember to always begin the components in the good start order):
```shell
{install_dir}/REGARDS/bin/start_microservice.sh -t {component_name}
```

## Check the components status
You can check if a given component is currently running.

- If the `Security Level` you chose was `Enforce`, use the command:
  ```shell
  sudo {install_dir}/REGARDS/sbin/microservice_regards.sh -t {component_name} status
  ```

- If the `Security Level` you chose was `Standard`, use the following command (remember to always begin the components in the good start order):
```shell
{install_dir}/REGARDS/bin/status_microservice.sh -t {component_name}
```

## Stop the components
You can stop a given component which is currently running.

- If the `Security Level` you chose was `Enforce`, use the command:
  ```shell
  sudo {install_dir}/REGARDS/sbin/microservice_regards.sh -t {component_name} stop
  ```

- If the `Security Level` you chose was `Standard`, use the following command (remember to always begin the components in the good start order):
```shell
{install_dir}/REGARDS/bin/stop_microservice.sh -t {component_name}
```
