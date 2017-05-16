---
layout: classic-docs
title: REGARDS Installation manual
short-title: Installation manual
categories:
  - reference
---

# 1\. Download REGARDS Product

You can download the **REGARDS installer package** from [our github page](https://github.com/RegardsOss/RegardsOss.github.io).  
The installer is an [**IzPack** package](http://izpack.org/).

To run the REGARDS installer, run the command :<br>
`java -jar REGARDS-OSS-Installer-1.0.0.jar`

# 2\. Requirements

For any backend component:
- Java JRE 1.8
- Database PostgreSQL
- RabbitMQ Server
  - The server and the management plugin
  - A user having rights to create virtual hosts and to add rights to other users on the broker.

Only for component `Data Management`:
- ElasticSearch

# 3\. Installation directory
On each host you want to install one or more REGARDS component you will be asked to provide the installation directory :

![](/assets/images/installation/select-directory.png)

Afterwards, you will need be prompted to choose how you want to install the software on the current host.

# 3\. Monolitic Installation

The monolitic installation of the REGARDS product consists in installing all parts of the system on the **same physical or virtual host**.  

To do so, select the first option when you are asked to choose how to install the system :

![](/assets/images/installation/monolithic-installation.png)

# 4\. Cloud installation

The cloud installation allows you to install the REGARDS product components in **multiple physical or virtual hosts**. The only requirement is that all the hosts could communicate throught **HTTPS protocol**.

To do so, run the IzPack installation package on each host and select the second option when you are asked to choose how to install the system :

![](/assets/images/installation/cloud-installation.png)

Then select the component(s) you want to install.

With this installation system you can install **multiple instances of each microservice**. In the first place you can install one instance of each needed microservice and if the performances of the system are to low, you can install more instances later.

**NOTE :** You can install any component in any order, **but** you always need to start and configure the Configuration server first. For a cloud installation, the table bellow explain the mandatory components and the start order.

Component                | Mandatory                   | Start Order | Multiple instances          | Description
------------------------ | :-------------------------: | :---------: | :-------------------------: | --------------------------------------------------------------------
**Frontend**             | ![](/assets/images/nok.png) |             | ![](/assets/images/nok.png) | Provide WEB interfaces to access REGARDS services
**Configuration**        | ![](/assets/images/ok.png)  | 1           | ![](/assets/images/nok.png) | Provide configuration parameters for all REGARDS components
**Registry**             | ![](/assets/images/ok.png)  | 2           | ![](/assets/images/nok.png) | Provide the adress registry for all the REGARDS components
**Admin**                | ![](/assets/images/ok.png)  | 3           | ![](/assets/images/nok.png) | Provide the administration features of the system
**Gateway**              | ![](/assets/images/ok.png)  |             | ![](/assets/images/nok.png) | Provide a unique and secure entry point for all the REGARDS services
**Other components**     | ![](/assets/images/nok.png) |             | ![](/assets/images/ok.png)  | Provide the REGARDS functionalities

# 5\. REGARDS Components configuration

After that, you will need to configure all the components you selected for the installation on the current host.

## 5.1 Configuration

The configuration server is the first component to start, it provides the global configuration parameters to all REGARDS components. It only needs a starter port.

## 5.2 Registry

The Registry server is the second component to start, it provides the global components registry. This server is access by all REGARDS components to know the adresses of other ones.<br>
It needs a starter port and the adress of the configuration server.

## 5.3 Gateway

The Gateway is the secured entry point to the REGARDS system. It ensures the authentication system by providing an authentication Service Provider (SP) and redirect the REGARDS services requests to the installed microservices.<br>
This component also handles load-balancing in order to redirect requests to the least requested instance of a microservice.

## 5.4 Frontend

The Frontend component provides the WEB interfaces to administrate and use the REGARDS fonctionnalities. This component is not mandatory, you can either access all the REGARDS functionnalities by REST requests to the Gateway server with a tool like **Curl**

![](/assets/images/installation/frontend.png)

## 5.5 Other components

For any other selected component(s), you will have to configure :

- Each instance `host` and `port`
- Specifics configuration parameters

Exemple for the archival storage microservice configuration :

![](/assets/images/installation/admin.png)

# 6\. Start the system

In order to start REGARDS, you will have to run specific commands.

- If the `Security Level` you chose was `Enforce`
  - and you installed **all** the components, you can start the whole system in a single command:
  ```shell
  sudo {install_dir}/REGARDS/sbin/microservice_regards.sh start
  ```
  - and you installed **some** components, you will need to start each component installed with the following command (remember to always begin with `Config` and `Registry`):
  ```shell
  sudo {install_dir}/REGARDS/sbin/microservice_regards.sh -t {component_name} start
  ```

- If the `Security Level` you chose was `Standard`, you will need to start each component installed with the following command (again, remember to always begin with `Config` and `Registry`):
```shell
{install_dir}/REGARDS/bin/start_microservice.sh -t {component_name}
```

# 7\. Check the components status
You can check if a given component is currently running.

- If the `Security Level` you chose was `Enforce`, use the command:
  ```shell
  sudo {install_dir}/REGARDS/sbin/microservice_regards.sh -t {component_name} status
  ```

- If the `Security Level` you chose was `Standard`, you will need to start each component installed with the following command (again, remember to always begin with `Config` and `Registry`):
```shell
{install_dir}/REGARDS/bin/status_microservice.sh -t {component_name}
```

# 8\. Stop the components
You can stop a given component which is currently running.

- If the `Security Level` you chose was `Enforce`, use the command:
  ```shell
  sudo {install_dir}/REGARDS/sbin/microservice_regards.sh -t {component_name} stop
  ```

- If the `Security Level` you chose was `Standard`, you will need to start each component installed with the following command (again, remember to always begin with `Config` and `Registry`):
```shell
{install_dir}/REGARDS/bin/stop_microservice.sh -t {component_name}
```
