---
layout: classic-docs
title: Deploy with IzPack
short-title: IzPack deployment
---

{% include toc.md %}

For now, the only way to deploy REGARDS on servers is to use an [**IzPack** package](http://izpack.org/).

If you don't have compiled the REGARDS IzPack installer, feel free to download it on our [github release page](https://github.com/RegardsOss/regards-deployment/releases).

Ensure you have [setup components (COTS) that REGARDS relies on](/getting-started/configuration/#section=getting-started) before continuing this tutorial. 

## Prerequisites

In order to run the Izpack installer, you need these dependencies :

- groovy 1.8.9
- OpenJDK 1.8

`Notice : ` Groovy must be accessible from default install path /usr/bin/groovy.
If not, you can create a link :
```bash
ln -s /custom/install/dir/groovy /usr/bin/groovy
```

> In case of securized installation, the REGARDS installation directory must be owned by the user who run the installation commands.

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

## Step-by-step installation

### Inital configuration

```txt
Target Path
------------------------
Select the installation path:  [/usr/local/regards]
```

Type `/opt/regards` to override the default value `/usr/local/regards`.

### Mandatory components to install

Afterwards, you will need to choose which components you want to install on the current server.
These mandatory components cannot be runned in multiples instances, but don't be afraid they don't have that much job to do.

> If you do not installed them on the current server, you'll need to install them somewhere else.
{: .tip .plus}

```txt
Select Installation Packages
------------------------
Select the packs you want to install:

  [x] Pack 'core' required
------------------------------------
  [x] Include optional pack 'config'
------------------------------------
```

The Configuration server is the first component to start, it provides the global configuration parameters to all REGARDS components.

```txt
--------------------------------------
  [x] Include optional pack 'registry'
--------------------------------------
```

The Registry server is the second component to start, it provides the global components registry. This server is accessed by all REGARDS components to retrieve the adresses of other ones.  

```txt
-------------------------------------
  [x] Include optional pack 'gateway'
-------------------------------------
```

The Gateway is the secured entry point to the REGARDS system. It ensures the authentication system by providing an authentication Service Provider (SP) and redirect the REGARDS services requests to the installed microservices.  
This component also handles load-balancing in order to redirect requests to the least requested instance of a microservice.

```txt
--------------------------------------------
  [x] Include optional pack 'admin-instance'
--------------------------------------------
```

The `admin-instance` microservice provides services (accounts, notifications, projects...) shared between all REGARDS projects.

```txt
-----------------------------------
  [x] Include optional pack 'admin'
-----------------------------------
```

The `admin` microservice provides services (users rights, users groups...) for each project.

```txt
--------------------------------------------
  [x] Include optional pack 'authentication'
--------------------------------------------
```

The `authentication` microservice validates users when they log in.


### Scalable microservices

With our IzPack, you can install **multiple instances of each microservice** on **multiple physical or virtual hosts**. The only requirement is that all these hosts can communicate throught **HTTPS protocol**.

> Start by installing one instance of each needed microservice and if the performances of the system are too low, you can install more instances later.
{: .tip .plus}

> If you choose to not install the Configuration server, you will have to provide an existing Configuration server so that components you are currently installing can connect to it.
{: .tip .plus}

```txt
-------------------------------------
  [ ] Include optional pack 'storage'
-------------------------------------
```

This is a facultative microservice that stores your data and metadata on a safe storage. If you have already a system that meets this need, you can safely ignore it.

```txt
---------------------------------
  [x] Include optional pack 'dam'
---------------------------------
```

The `DataManagement` microservice handle dynamic modelisation, crawling and indexation. **This microservice uses a lot of RAM and CPU.**


```txt
-------------------------------------
  [x] Include optional pack 'catalog'
-------------------------------------
```

The `Catalog` microservice makes REGARDS users research.

```txt
-----------------------------------
  [ ] Include optional pack 'order'
-----------------------------------
```

The `Order` microservice gathers data ordered by users.

```txt
------------------------------------
  [ ] Include optional pack 'ingest'
------------------------------------
------------------------------------------
  [ ] Include optional pack 'dataprovider'
------------------------------------------
```

The `Ingest` and `Data Provider` are facultatives microservices that scans data lakes and submit them to REGARDS indexation. 

### HMI services

```txt
---------------------------------------------
  [x] Include optional pack 'access-instance'
---------------------------------------------
--------------------------------------------
  [x] Include optional pack 'access-project'
--------------------------------------------
--------------------------------------
  [x] Include optional pack 'frontend'
--------------------------------------
```

The `frontend` service provides the React interface we've made and these `access-*` services store the HMI customisation and configuration.

### Security

```txt
What system security do you want to use?

0  [x] Normal
1  [ ] Enhanced
Input selection:
```

If you have correctly followed the [Configuration guide](/getting-started/configuration/#section=getting-started), you can select the Enhanced security mode. If you don't, just pass to the next section.

REGARDS needs to know which users and groups you have setup on your system. You can just accept default values.
```
────────────────────────────────────────────────────────────────────────────────
User Data
────────────────────────────────────────────────────────────────────────────────

Security customization

Exec user [regards] 


------------------------------------------

Regards group [regards] 

Exec group [rsexec] 

Admin group [rsadmin] 

Runtime group [rsrun]
```

### General parameters

```txt
General parameters

The first project to add [project1] 
```

The project name cannot be changed and will be used in the URI and by the API.

```txt
Public domain to access project: this is the public address users will use to access project user/admin interfaces and services. This address depends on your web server configuration.
Address [https://172.26.47.195/user/project1]
```

REGARDS needs to know how future users will be able to access using their browser to the server. You can edit this configuration later on the instance admin panel.

```txt
Proxy confguration for internet access
Host [] 

Port [0]
```

REGARDS can access to files store somewhere else. In that case, it will use that proxy configuration to retrieve the file.  
If you specify the NoProxy option, you need to separate every address by the `,` caracter. Every adress is considerated as a regex.  

```txt
Cipher key location[]
/opt/regards/regards.key
Cipher initialization vector [] 
1234567812345678
```

If you followed the [Configuration guide](/getting-started/configuration/#section=getting-started), the Cipher key location is `/opt/regards/regards.key`. The Cipher initialization vector must contain 16 digits.

### Microservice configuration

For every microservice you want to install, it will ask you :

```txt
<Microservice name> microservice

--> Row 1: Host [0.0.0.0] 
Port [9031]
```

The host value `0.0.0.0` means that every connection, either a local one (`127.0.0.1`) or a foreign one, is accepted.

> You can provide `127.0.0.1` if you don't install REGARDS on several servers AND you have a reverse proxy (otherwise the gateway would not answer)
{: .tip .plus}

Moreover, if a microservice depends on RabbitMQ, PostgresSQL or ElasticSearch, it will ask the configuration of the associated COTS.

- You should get the following RabbitMQ configuration

```txt
User Data
────────────────────────────────────────────────────────────────────────────────

Message broker configuration

RabbitMQ
Host [localhost] 
Port [5672] 
Username [] 
regards_adm
Password
regards_adm

------------------------------------------

RabbitMQ management
Host [localhost] 

Port [15672]
```

- PostgresSQL configuration

```txt
Cross projects database | OR | First project's database
Url [localhost:5432/rs_instance] 

Username [] 
rs_postgres
Password
***********
```

You should have two different databases, `rs_instance` and `rs_project1`.

- Elasticsearch

```txt
Elasticsearch
Host [localhost] 

Port [9200]
```

#### rs-config

```txt
The workspaces basic directory [/opt/regards/workspace]
```

#### rs-admin-instance

```txt
Administration instance microservice properties

Instance admin
Email [] 
regards@cnes.fr
Password
**********
```

It asks you the id of the most powerfull user of the system. Don't forget its password!

#### rs-storage

```txt
Jobs pool size [10] 

Jobs completion refresh rate
Value in ms [500000] 

Jobs period retention in days
Jobs successfully completed [1] 

Jobs completed with error [30] 

Cache directory [/opt/regards/rs-storage-cache]
```

Default values are fine to begin with.

#### rs-dam

```txt
Documents local storage folder
Path [/opt/regards/rs-dam-document-storage]
```

Store files associated with Documents, Collections and Datasets.


#### rs-order

```txt
Jobs pool size [10] 

Jobs completion refresh rate
Value in ms [500000] 

Orders bucket size in Mb [100] 

Orders validation period in days [3] 

Days before sending mail notification [7] 

Passphrase used to generate token [order's passphrase] 
la bonne longueur pour les jambes, c'est quand les pieds touchent bien par terre 
Maximum number of displayable files [5000] 

Maximum number of job's order per user [2] 

Jobs period retention in days
Jobs successfully completed [1] 

Jobs completed with error [30] 

Periodic files availability check (cron format)
Value [0 23 * * 7 *]
```

The `Passphrase used to generate token` needs to be long and unique

#### rs-ingest

```txt
Jobs pool size [10] 

Jobs completion refresh rate
Value in ms [500000] 

Jobs period retention in days
Jobs successfully completed [1] 

Jobs completed with error [30] 


------------------------------------------

AIPs bulk request size
Size [1000]
```

#### rs-data-provider

```txt
------------------------------------------

Jobs pool size [10] 

Jobs completion refresh rate
Value in ms [500000] 

Jobs period retention in days
Jobs successfully completed [1] 

Jobs completed with error [30] 


------------------------------------------

Waitings time

For ingestion of new SIPs [5000] 

For chains activation [300000] 


Folders

Cycles and ORF configuration [/opt/regards/config/regards/dataprovider] 

Translation files [plugins/translations] 

Plugins configuration [plugins/confs] 

Chain's cycles [/data/cycles] 

ORF file history [/data/chains/cycles]
```

Let default values

#### rs-admin-instance

```
Security

Which rules should follow the user accounts ?

Account period of validity in days [30] 


------------------------------------------

Passwords
Must match the regex [[a-z0-9]*] 

Or else users will receive the message [Password must contain letters or numbers] 

Period of validity (days) [350] 


------------------------------------------

When connecting
Number of attemps before locking the account [5] 
SMTP Configuration

REGARDS keeps you in touch via emails. You can provide a specific SMTP server or leave the default one.
Host [smtp.gmail.com] 

Port [465] 

Username [] 

Password

Mail address for no reply [regards@noreply.fr]
```

#### rs-frontend

```
Gateway
Url [http://localhost:8000]
```
Set the public URI of REGARDS

That's it ! You can jump to the [CLI guide](/getting-started/cli/#section=getting-started) to launch REGARDS.
