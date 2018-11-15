---
layout: classic-docs
title: Install with IZPack
short-title: Installation manual
wip: true
categories:
  - getting-started
---

# 1\. Download REGARDS Product

You can download the **REGARDS installer package** from [our github page](https://github.com/RegardsOss/RegardsOss.github.io).  
The installer is an [**IzPack** package](http://izpack.org/).

To run the REGARDS installer, run the command :<br>
`java -jar REGARDS-OSS-Installer.jar`

It is possible to install REGARDS in an automatic mode, run the command:<br>
`java -jar REGARDS-OSS-Installer.jar auto-install-values.xml`<br>
the file **auto-install-values.xml** to used can be generated at the end of the manual installation. But this generated file does not contain all the password, it is necessary to add the password manually in the file, before to run the command.

### Prerequesites
Before to install REGARDS, this requirements are necessary :
- groovy 1.8.9
```shell
which groovy
/usr/bin/groovy
```
- Java JRE 1.8

# 2\. Requirements

For any backend component:
- Java JRE 1.8
- Database PostgreSQL 9.4+
- RabbitMQ Server 3.6+
  - The server and the management plugin
  - A user having rights to create virtual hosts and to add rights to other users on the broker.

For components `Data Management` and `Catalog`:
- ElasticSearch 5.4.2

### Prerequesites
If you want to install the component with limited access rights (ie `Security Level` to `Enforce`), you need to create users and groups:
```shell
groupadd regards
groupadd rsins
groupadd rsexec
groupadd rsadmin
groupadd rsrun
useradd rsins -g rsins -G regards,rsexec,rsadmin,rsrun
printf 'rsins\nrsinsPassword\n' | passwd rsins
useradd rsadmin -g regards -G rsadmin,rsrun
printf 'rsadmin\nrsadminPassword\n' | passwd rsadmin
useradd regards --no-create-home --shell=/sbin/nologin -g regards -G rsexec,rsrun
```

And you need to create the installation folder with the good access rights:
```shell
mkdir /opt/regards
chown :regards /opt/regards
chmod 1770 /opt/regards
```
In this case the installation folder should be, for example : **/opt/regards/folderInstallation**

# 3\. Installation directory
On each host you want to install one or more REGARDS component you will be asked to provide the installation directory :

![](/assets/images/installation/select-directory.png)

Afterwards, you will need be prompted to choose the different components you wish to install.

## 3.1\. Contents of the installation directory
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


# 4\. Cloud installation

The cloud installation allows you to install the REGARDS product components in **multiple physical or virtual hosts**. The only requirement is that all the hosts could communicate throught **HTTPS protocol**.

With this installation system you can install **multiple instances of each microservice**. In the first place you can install one instance of each needed microservice and if the performances of the system are to low, you can install more instances later.

Choose the components you want to install on the current host, then let the installer guide you through the preliminary configuration steps :

![](/assets/images/installation/packs.png)

**NOTE :** If you choose not to install the Configuration server, you will have to provide an existing Configuration server so that components you are currently installing can connect to it.

**NOTE :** You can install any component in any order and wherever you want, **but** you always need to start the Configuration server first, the Registry server second and the Admin server third. The table bellow lists the mandatory components and the start order.

Component                | Mandatory                   | Start Order | Multiple instances          | Description
------------------------ | :-------------------------: | :---------: | :-------------------------: | --------------------------------------------------------------------
**Frontend**             | ![](/assets/images/nok.png) | **4**       | ![](/assets/images/nok.png) | Provide WEB interfaces to access REGARDS services
**Configuration**        | ![](/assets/images/ok.png)  | **1**       | ![](/assets/images/nok.png) | Provide configuration parameters for all REGARDS components
**Registry**             | ![](/assets/images/ok.png)  | **2**       | ![](/assets/images/nok.png) | Provide the adress registry for all the REGARDS components
**Admin**                | ![](/assets/images/ok.png)  | **3**       | ![](/assets/images/nok.png) | Provide the administration features of the system
**Gateway**              | ![](/assets/images/ok.png)  | **3**       | ![](/assets/images/nok.png) | Provide a unique and secure entry point for all the REGARDS services
**Other components**     | ![](/assets/images/nok.png) | **4**       | ![](/assets/images/ok.png)  | Provide the REGARDS functionalities


# 5\. REGARDS Components configuration

After that, you will need to configure all the components you selected for the installation on the current host.

## 5.1 Configuration

The configuration server is the first component to start, it provides the global configuration parameters to all REGARDS components. It only needs a starter port.

## 5.2 Registry

The Registry server is the second component to start, it provides the global components registry. This server is accessed by all REGARDS components to retrieve the adresses of other ones.<br>
It needs a starter port and the adress of the configuration server.

## 5.3 Gateway

The Gateway is the secured entry point to the REGARDS system. It ensures the authentication system by providing an authentication Service Provider (SP) and redirect the REGARDS services requests to the installed microservices.<br>
This component also handles load-balancing in order to redirect requests to the least requested instance of a microservice.

## 5.4 Frontend

The Frontend component provides the WEB interfaces to administrate and use the REGARDS fonctionnalities. This component is not mandatory, you can either access all the REGARDS functionnalities by REST requests to the Gateway server with a tool like **curl**

![](/assets/images/installation/frontend.png)

## 5.5 Other components

For any other selected component(s), you will have to configure :

- Each instance `port`
- Specific configuration parameters

Exemple for the Administration microservice configuration :

![](/assets/images/installation/admin.png)

# 6\. Start the system

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

# 7\. Check the components status
You can check if a given component is currently running.

- If the `Security Level` you chose was `Enforce`, use the command:
  ```shell
  sudo {install_dir}/REGARDS/sbin/microservice_regards.sh -t {component_name} status
  ```

- If the `Security Level` you chose was `Standard`, use the following command (remember to always begin the components in the good start order):
```shell
{install_dir}/REGARDS/bin/status_microservice.sh -t {component_name}
```

# 8\. Stop the components
You can stop a given component which is currently running.

- If the `Security Level` you chose was `Enforce`, use the command:
  ```shell
  sudo {install_dir}/REGARDS/sbin/microservice_regards.sh -t {component_name} stop
  ```

- If the `Security Level` you chose was `Standard`, use the following command (remember to always begin the components in the good start order):
```shell
{install_dir}/REGARDS/bin/stop_microservice.sh -t {component_name}
```
