---
layout: classic-docs
title: REGARDS Installation manual
short-title: Installation manual
categories:
  - reference
---

# 1\. Download REGARDS Product

You can download the **REGARDS installer package** from our github page <https://github.com/RegardsOss/RegardsOss.github.io><br>
The installer is a **IzPack** package ( <http://izpack.org/> ).

To run the REGARDS installer, run the command :<br>
`java -jar REGARDS-OSS-Installer-1.0.0.jar`

# 2\. Requirements

1. Java JRE 1.8
2. RabbitMQ Server
3. Database PostgresSQL
4. ElasticSearch

# 3\. Monolitic Installation

The monolitic installation of the REGARDS product consist in installing all parts of the system on the **same physical or virtual host**.<br>
To do so, run the installer package and select the installation of all the componennts :

![](./images/installation/full-install.png)

Then fill the configuration properties needed by the installer.

# 4\. Cloud installation

The cloud installation allow you to install the REGARDS product components in **multiples physical or virtual host**. The only requirement is that all the hosts could communicate throught **HTTPS protocol**.

To do so, run the IzPack installation package on each host and select the component(s) you want to install on each one.

With this installation system you can install **multiple instances of each microservice**. In the first place you can install one instance of each needed microservice and if the performances of the system are to low, you can install more instances later.

**NOTE :** You always need to install and configure the Configuration server first. For a cloud installation, the table bellow explain the mandatory components and the installation order.

Component                | Mandatory             | Installation Order | Mulitple instances    | Description
------------------------ | --------------------- | ------------------ | --------------------- | --------------------------------------------------------------------
**Configuration server** | ![](./images/ok.png)  | 1                  | ![](./images/nok.png) | Provide configuration parameters for all REGARDS components
**Eureka server**        | ![](./images/ok.png)  | 2                  | ![](./images/nok.png) | Provide the adress registry for all the REGARDS components
**Gateway**              | ![](./images/ok.png)  |                    | ![](./images/nok.png) | Provide a unique and secure entry point for all the REGARDS services
**Frontend**             | ![](./images/nok.png) |                    | ![](./images/nok.png) | Provide WEB interfaces to access REGARDS services
**Microservices**        | ![](./images/nok.png) |                    | ![](./images/ok.png)  | Provide the REGARDS fonctionalities

# 5\. REGARDS Components configuration

On each host you want to install one or more REGARDS component you will be asked to provide the installation directory :

![](./images/installation/select-directory.png)

After that, you'll need to configure all the components you selected for the installation on the current host.

## 5.1 Configuration server

The configuration server is the first component to install, it provides the global configuration parameters to all REGARDS components. It only needs a starter port.

## 5.2 Eureka server

The Eureka server is the second component to install, it provides the global components registry. This server is access by all REGARDS components to know the adresses of other ones.<br>
It needs a starter port and the adress of the configuration server

## 5.3 Gateway

The Gateway is the secured entry point to the REGARDS system. It assure the authentication system by providing an authentication Service Provider (SP) and redirect the REGARDS services requests to the installed microservices.<br>
This component assure the load-balancing in order to redirect requests to the less current use microservice.

## 5.4 Frontend

The Frontend component provides the WEB interfaces to administrate and use the REGARDS fonctionnalities. This component is not mandatory, you can either access all the REGARDS functionnalities by REST requests to the Gateway server with a tool like **Curl**

![](./images/installation/frontend.png)

## 5.5 Microservices

When you select the installation of microservices, the next configuration screen ask you for which microserice and how many instances you want to install.

![](./images/installation/microservices.png)

Next you have to configure for each selected microservice :

- Starter port(s)
- Number of istances
- Specifics configuration parameters

Exemple for the archival storage microservice configuration :

![](./images/installation/archival-storage.png)

# 6\. Run REGARDS System

To run the REGARDS system, you have to run each component independly with the only condition to run Configuration server first and Eureka server next.

`cd {regards_intall_pall}<br> ./runConfigServer.sh<br> ./runEurekaServer.sh<br> ./runGateway.sh<br> ./runFrontend.sh<br> ./runMicroservice.sh [microservice-name]`
