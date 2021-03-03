---
id: depracated-installation-source
title: Installation from source
slug: /setup/deprecated/installation-source
---

Here is the tutorial to compile the IzPack installer that you can use to install REGARDS on any server.  
If you do not care about compiling REGARDS by yourself, jump [to the next step].

## Requirements

Build relies on :

- Maven 3.3+
- OpenJDK 8
- Groovy 2.4+
- Node.js 8.10+
- Npm 5.7.1+

Permissions :

- You shall not use the root user while compiling REGARDS, as any other software.

## Build

First, you need to compile every REGARDS server components and the HMI.

```bash
git clone https://github.com/RegardsOss/regards-bom.git
cd regards-bom
mvn install -DskipTests -P install

cd ..
git clone https://github.com/RegardsOss/regards-microservice.git
cd regards-microservice
mvn install -DskipTests -P install,delivery

cd ..
git clone https://github.com/RegardsOss/regards-admin.git
cd regards-admin
mvn install -DskipTests -P install,delivery

cd ..
git clone https://github.com/RegardsOss/regards-cloud.git
cd regards-cloud
mvn install -DskipTests -P install,delivery

cd ..
git clone https://github.com/RegardsOss/regards-storage.git
cd regards-storage
mvn install -DskipTests -P install,delivery

cd ..
git clone https://github.com/RegardsOss/regards-dam.git
cd regards-dam
mvn clean install -Dmaven.test.skip=true -P install,delivery

cd ..
git clone https://github.com/RegardsOss/regards-catalog.git
cd regards-catalog
mvn install -DskipTests -P install,delivery

cd ..
git clone https://github.com/RegardsOss/regards-access.git
cd regards-access
mvn install -DskipTests -P install,delivery

cd ..
git clone https://github.com/RegardsOss/regards-ingest.git
cd regards-ingest
mvn install -DskipTests -P install,delivery

cd ..
git clone https://github.com/RegardsOss/regards-dataprovider.git
cd regards-dataprovider
mvn install -DskipTests -P install,delivery

cd ..
git clone https://github.com/RegardsOss/regards-order.git
cd regards-order
mvn install -DskipTests -P install,delivery

cd ..
git clone https://github.com/RegardsOss/regards-frontend.git
cd regards-frontend/webapp
npm install
npm run build:production
npm run build:plugins
cd ../frontend-boot/
mvn clean install -DskipTests -Dwebapp.dir=../webapp -P install
```

Now every REGARDS components are installed, the last step is to generate the REGARDS Izpack installer.

```bash
cd ../..
git clone https://github.com/RegardsOss/regards-deployment.git
cd regards-deployment
mvn install -DskipTests -P install,delivery
```

Inside the `regards-deployment` repository, grab the IzPack installer located in `./izpack/installer/target/REGARDS-OSS-Installer.jar`.  
You will use that file [in the IzPack setup] to continue the installation.

## Install with root

There is no known issue with Java to compile with the root user.  
If you want to run the regards-frontend compilation, you have to add the hereunder line in your .npmrc file.
If your root user does not have any .npmrc file yet, you can create it in your root user home directory. You can read [npm documentation about npmrc here](https://docs.npmjs.com/files/npmrc).

```sh
unsafe-perm=true
```
