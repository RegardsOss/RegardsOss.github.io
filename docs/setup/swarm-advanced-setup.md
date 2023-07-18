---
id: swarm-setup
title: Inventory configuration
slug: /setup/swarm/advanced-setup/
---

## Deployment

### Introduction

This page covers some of the possibilities offered by our inventory, specially the file `regards-playbook/inventories/regards-cnes/group_vars/all/main.yml`.

### Users & groups

Let's see how users created by the demo inventory are used:

| User                  | Group                                                        | Description                                                                                                         | Tips                                                  |
| :-------------------- | :----------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------- |
| `dockermapuid`        | `dockermapgid`                                               | Used by the docker daemon                                                                                           | This group is internal to the server                  |
|                       | `gregards_admin`                                             | Regroup all users that are allowed to monitor the stack                                                             | Facultative, `johndoe` can also replace this one      |
| `docker-regards-data` | `gregards_data`                                              | IPA User/Group owning all files created by REGARDS, **must be able to access network disk `group_workdir_network`** | Your user should be inside that group                 |
| `johndoe`             | `johndoe`, `dockermapgid`, `gregards_admin`, `gregards_data` | Your personnal user                                                                                                 | Your user has access to Docker, to the stack and data |
| `mariecurie`          | `mariecurie`, `gregards_data`                                | Some user                                                                                                           | She has access to data, not the stack itself          |

To setup these users and groups, you must follow these requirements:

| User or group          | Value requirement                                                   |
| :--------------------- | :------------------------------------------------------------------ |
| `dockermapuid`         | `name_space_uid`                                                    |
| `dockermapgid`         | `name_space_gid`                                                    |
| `johndoe`,`mariecurie` |  Any value inferior to `name_space_uid`                             |
| `gregards_admin`       |  Any value inferior to `name_space_gid`. That user can be no login. |
| `docker-regards-data`  | `group_container_run_uid + name_space_uid`                          |
| `gregards_data`        | `group_container_run_gid + name_space_gid`                          |

### Inventories configuration properties

Global properties :

| Path                               | Type     | Description                                                             | Constraints                                                               |
| :--------------------------------- | :------- | :---------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| `group_workdir_network`            | `String` | Network disk shared accross every nodes                                 | Required                                                                  |
| `group_workdir_network_allow_root` | `Bool`   | Do we allow root inside the network volume?                             | Required                                                                  |
| `group_workdir_local`              | `String` | Local folder where regards is installed on every node                   | Required                                                                  |
| `group_stack_name`                 | `String` | Unique stack name (for swarm)                                           | Required. `[a-z-]+`                                                       |
| `group_setype`                     | `String` | SELinux type                                                            | Required                                                                  |
| `group_seuser`                     | `String` | SELinux user                                                            | Required                                                                  |
| `group_container_root_user`        | `String` | User owning the REGARDS folder tree, Docker must have read/write access | Required                                                                  |
| `group_container_root_group`       | `String` | Group owning the REGARDS folder tree                                    | Required                                                                  |
| `group_enable_setup_regards_users` | `Bool`   | Do we need to create `root_group`, `run_group` and `run_user` locally ? | Facultative. Default to true.                                             |
| `group_container_run_user`         | `String` | All files created by containers will use this user                      | Required                                                                  |
| `group_container_run_group`        | `String` | All files created by containers will use this group                     | Required                                                                  |
| `group_container_run_uid`          | `Int`    | Run user id. (See `group_container_run_user`)                           | Required                                                                  |
| `group_container_run_gid`          | `Int`    | Run group id. (See `group_container_run_group`)                         | Required                                                                  |
| `group_docker_network_name`        | `String` | Docker network name. Automatically created by Ansible                   | Required                                                                  |
| `group_docker_network_ip_network`  | `String` | Docker network ip                                                       | Required. If a basic IPV4 looks like `A.B.C.D`, you must provide `A.B.C.` |
| `group_docker_registry`            | `String` | Docker registry holding REGARDS images                                  | Required                                                                  |

Microservices properties :

| Path                                                   | Type     | Description                                                                        | Constraints                                                                                                                      |
| :----------------------------------------------------- | :------- | :--------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `group_docker_tag`                                     | `String` | Used to store docker image tag version                                             | Facultative. Only used in this file.                                                                                             |
| `group_docker_plugins`                                 | `Array`  | Used to store docker plugins to execute.                                           | Required. Can be empty.                                                                                                          |
| `group_docker_plugins[].image`                         | `String` | Docker image name of the plugin that stores plugins you want to install on REGARDS | Required.                                                                                                                        |
| `group_docker_plugins[].tag`                           | `String` | Docker image tag                                                                   | Required.                                                                                                                        |
| `group_docker_mservices`                               | `Object` | List of microservices that will be deployed                                        | Required. Some of these keys are facultative, but config, registry, gateway, admin_instance, admin & front should not be removed |
| `group_docker_mservices.<anybackendmicroservice>.tag`  | `String` | Docker image tag that will be deployed                                             | Required.                                                                                                                        |
| `group_docker_mservices.<anybackendmicroservice>.http` | `String` | Open the public HTTP port of the service (bypass reverse proxy + gateway)          | Facultative.                                                                                                                     |
| `group_docker_mservices.<anybackendmicroservice>.jdwp` | `String` | Open a public port to debug a microservice with your IDE                           | Facultative.                                                                                                                     |
| `group_docker_mservices.<anybackendmicroservice>.jmx`  | `String` | Open the JMX port                                                                  | Facultative.                                                                                                                     |
| `group_docker_mservices.front`                         | `Object` | When defined, boots the frontend, which is also the reverse proxy to the gateway   | Required.                                                                                                                        |
| `group_docker_mservices.front.tag`                     | `String` | Docker image tag that will be deployed                                             | Required.                                                                                                                        |
| `group_docker_mservices.front.port`                    | `Int`    | Open the HTTP port of the NGINX to let users access to the front                   | Required.                                                                                                                        |
| `group_docker_mservices.front.protocol`                | `Int`    | Protocol used to access to the front                                               | Required.                                                                                                                        |
| `group_docker_mservices.front.host`                    | `String` | Host used to access to the front                                                   | Required.                                                                                                                        |

If you don't have mutualised COTS, don't worry. You can deploy yours and use mutualised ones later.

| Path                                                              | Type     | Description                                                                                                             | Constraints                                                                                                                              |
| :---------------------------------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `group_docker_cots`                                               | `Object` | List COTS that will be deployed                                                                                         | Required. Can be empty.                                                                                                                  |
| `group_docker_cots.elasticsearch`                                 | `Object` | When defined, boots an ElasticSearch                                                                                    | Facultative.                                                                                                                             |
| `group_docker_cots.elasticsearch.http`                            | `Int`    | When defined, opens the HTTP port                                                                                       | Facultative.                                                                                                                             |
| `group_docker_cots.elasticsearch.client`                          | `Int`    | When defined, opens the client port                                                                                     | Facultative.                                                                                                                             |
| `group_docker_cots.elasticsearch_logs`                            | `Object` | When defined, boots an ElasticSearch to store logs                                                                      | Facultative.                                                                                                                             |
| `group_docker_cots.elasticsearch_logs.http`                       | `Int`    | When defined, opens the HTTP port                                                                                       | Facultative.                                                                                                                             |
| `group_docker_cots.elasticsearch_logs.client`                     | `Int`    | When defined, opens the client port                                                                                     | Facultative.                                                                                                                             |
| `group_docker_cots.kibana`                                        | `Object` | When defined, boots a Kibana linked to `elasticsearch`                                                                  | Facultative.                                                                                                                             |
| `group_docker_cots.kibana.http`                                   | `Int`    | When defined, opens the HTTP port                                                                                       | Facultative.                                                                                                                             |
| `group_docker_cots.kibana_logs`                                   | `Object` | When defined, boots a Kibana linked to `elasticsearch_logs`                                                             | Facultative.                                                                                                                             |
| `group_docker_cots.kibana_logs.http`                              | `Int`    | When defined, opens the HTTP port                                                                                       | Facultative.                                                                                                                             |
| `group_docker_cots.fluent`                                        | `Object` | When defined, boots Fluentd                                                                                             | Facultative. Empty.                                                                                                                      |
| `group_docker_cots.maildev`                                       | `Object` | When defined, boots a local SMTP server Mailchimp                                                                       | Facultative.                                                                                                                             |
| `group_docker_cots.maildev.http`                                  | `Int`    | When defined, opens the HTTP port                                                                                       | Facultative.                                                                                                                             |
| `group_docker_cots.postgres`                                      | `Object` | When defined, boots Postgres                                                                                            | Facultative. Empty.                                                                                                                      |
| `group_docker_cots.postgres.client`                               | `Int`    | When defined, open the TCP port                                                                                         | Facultative.                                                                                                                             |
| `group_docker_cots.phppgadmin`                                    | `Object` | When defined, boots a PGAdmin                                                                                           | Facultative.                                                                                                                             |
| `group_docker_cots.phppgadmin.http`                               | `Int`    | When defined, open the HTTP port                                                                                        | Facultative.                                                                                                                             |
| `group_docker_cots.rabbitmq`                                      | `Object` | When defined, boots a RabbitMQ                                                                                          | Facultative.                                                                                                                             |
| `group_docker_cots.rabbitmq.client`                               | `Int`    | When defined, open the TCP port                                                                                         | Facultative.                                                                                                                             |
| `group_docker_cots.rabbitmq.http`                                 | `Int`    | When defined, open the HTTP port                                                                                        | Facultative.                                                                                                                             |
| `group_docker_cots.rabbitmq.additional_users`                     | `Array`  | When defined, adds or updates a RabbitMQ user in addition to the REGARDS admin (see `group_docker_mservices.amqp.user`) | Facultative.                                                                                                                             |
| `group_docker_cots.rabbitmq.additional_users.name`                | `String` | Username of the RabbitMQ user                                                                                           | Required.                                                                                                                                |
| `group_docker_cots.rabbitmq.additional_users.password`            | `String` | Password of the RabbitMQ user                                                                                           | Required.                                                                                                                                |
| `group_docker_cots.rabbitmq.additional_users.tags`                | `String` | Tags of the RabbitMQ user                                                                                               | Required. Can be empty, or a comma separated string with one of these values: `management`, `policymaker`, `monitoring`, `administrator` |
| `group_docker_cots.rabbitmq.user_permissions`                     | `Array`  | When defined, adds a RabbitMQ user permission                                                                           | Facultative.                                                                                                                             |
| `group_docker_cots.rabbitmq.user_permissions.user`                | `String` | Username of this RabbitMQ user permission                                                                               | Required.                                                                                                                                |
| `group_docker_cots.rabbitmq.user_permissions.vhost`               | `String` | VirtualHost of the RabbitMQ user                                                                                        | Required. Can be `/`, `regards.multitenant.manager` or `regards.instance.manager`                                                        |
| `group_docker_cots.rabbitmq.user_permissions.configure`           | `String` | Configuration authorisation of the RabbitMQ user                                                                        | Required. Can be empty, `.*` or any other valid value                                                                                    |
| `group_docker_cots.rabbitmq.user_permissions.write`               | `String` | Write authorisation of the RabbitMQ user                                                                                | Required. Can be empty, `.*` or any other valid value                                                                                    |
| `group_docker_cots.rabbitmq.user_permissions.read`                | `String` | Read authorisation of the RabbitMQ user                                                                                 | Required. Can be empty, `.*` or any other valid value                                                                                    |
| `group_docker_cots.rabbitmq.additional_parameters`                | `Array`  | The `parameters` field of the `definitions.json` file, used for example to configure shovel                             | Facultative. `Download broker definitions` on your RabbitMQ to see valid format                                                          |
| `group_docker_cots.doc`                                           | `Object` | When defined, boots the REGARDS documentation                                                                           | Facultative.                                                                                                                             |
| `group_docker_cots.doc.tag`                                       | `String` | Documentation docker image tag that will be deployed                                                                    | Required.                                                                                                                                |
| `group_docker_cots.doc.http`                                      | `Int`    | When defined, open the HTTP port                                                                                        | Facultative.                                                                                                                             |
| `group_docker_cots_configuration`                                 | `Object` | List COTS specific configuration                                                                                        | Required. Can be empty                                                                                                                   |
| `group_docker_cots_configuration.postgres.nbTenant`               | `Int`    | Use to deduce the number of connections Postgres should allow                                                           | Required when `group_docker_cots.postgres` is defined                                                                                    |
| `group_docker_cots_configuration.elasticsearch.cluster_name`      | `Int`    | Elasticsearch cluster name                                                                                              | Required when `group_docker_cots.elasticsearch` is defined                                                                               |
| `group_docker_cots_configuration.elasticsearch_logs.cluster_name` | `Int`    | Logging elasticsearch cluster name                                                                                      | Required when `group_docker_cots.elasticsearch_logs` is defined                                                                          |
| `group_docker_cots_configuration.use_ungranular_workspace_on_workdir_network` | `Bool`    | When true, it means you don't have rights to elevate (sudo) on group_workdir_network folders                     | Facultative. Default to false                                                                                                                            |

The last but not least, the configuration of microservices :

| Path                                             | Type     | Description                              | Constraints                                  |
| :----------------------------------------------- | :------- | :--------------------------------------- | :------------------------------------------- |
| `group_config_mservices`                         | `Object` | Microservices configuration              | Required.                                    |
| `group_docker_mservices.init_project`            | `String` | Name of the default project              | Required.                                    |
| `group_docker_mservices.instance_admin`          | `Object` | Instance admin account definition        | Facultative.                                 |
| `group_docker_mservices.instance_admin.user`     | `String` | Name of the instance admin               | Facultative. Default: `regards-admin@c-s.fr` |
| `group_docker_mservices.instance_admin.password` | `String` | Password of the instance admin           | Facultative. Default: `root_admin`           |
| `group_docker_mservices.jwt_secret`              | `String` | JWT secret                               | Facultative. Recommended for production.     |
| `group_docker_mservices.access_token_validity`   | `String` | Access token validity period in seconds  | Facultative. Default: 1 hour                 |
| `group_docker_mservices.cipher_iv`               | `String` | Cipher IV                                | Facultative. Recommended for production.     |
| `group_docker_mservices.mail`                    | `Object` | Mail configuration used by microservices | Facultative.                                 |
| `group_docker_mservices.mail.host`               | `String` | SMTP Host                                | Facultative. Default: `rs-maildev`           |
| `group_docker_mservices.mail.port`               | `Int`    | SMTP port                                | Facultative. Default: `1025`                 |
| `group_docker_mservices.mail.username`           | `String` | SMTP username                            | Facultative. Empty by default                |
| `group_docker_mservices.mail.password`           | `String` | SMTP password                            | Facultative. Empty by default                |
| `group_docker_mservices.mail.noreply`            | `String` | No reply adress                          | Facultative. Default: `regards@noreply.fr`   |
| `group_docker_mservices.amqp`                    | `Object` | AMQP configuration                       | Facultative.                                 |
| `group_docker_mservices.amqp.user`               | `String` | AMQP username                            | Facultative. Default: `guest`                |
| `group_docker_mservices.amqp.password`           | `String` | AMQP password                            | Facultative. Default: `guest`                |
| `group_docker_mservices.postgres`                | `Object` | Postgres configuration                   | Facultative.                                 |
| `group_docker_mservices.postgres.instance.user`  | `String` | Postgres instance username               | Facultative. Default: `azertyuiop123456789`  |
| `group_docker_mservices.postgres.instance.password` | `String` | Postgres instance password            | Facultative. Default: `azertyuiop123456789`  |
| `group_docker_mservices.postgres.instance.host`  | `String` | Postgres instance host                   | Facultative. Empty by default                |
| `group_docker_mservices.postgres.instance.port`  | `Int`    | Postgres instance port                   | Facultative. Empty by default                |
| `group_docker_mservices.postgres.instance.db`    | `String` | Postgres instance db                     | Facultative. Empty by default                |
| `group_docker_mservices.postgres.init_project.user`  | `String` | Postgres init project username       | Facultative. Default: `azertyuiop123456789`  |
| `group_docker_mservices.postgres.init_project.password` | `String` | Postgres init project password    | Facultative. Default: `azertyuiop123456789`  |
| `group_docker_mservices.postgres.init_project.host`  | `String` | Postgres init project host           | Facultative. Empty by default                |
| `group_docker_mservices.postgres.init_project.port`  | `Int`    | Postgres init project port           | Facultative. Empty by default                |
| `group_docker_mservices.postgres.init_project.db`    | `String` | Postgres init project db             | Facultative. Empty by default                |
| `group_docker_mservices.proxy`                   | `Object` | Proxy configuration                      | Facultative.                                 |
| `group_docker_mservices.proxy.url`               | `String` | Proxy URL                                | Facultative, false, or a valid URL           |
| `group_docker_mservices.proxy.username`          | `String` | Proxy username                           | Facultative. Empty by default                |
| `group_docker_mservices.proxy.password`          | `String` | Proxy password                           | Facultative. Empty by default                |
| `group_docker_mservices.session`                   | `Object` | Source/Session services configuration. Sessions are used by microservices to monitor products activity                      | Facultative.                                 |
| `group_docker_mservices.session.retention_days`                   | `Int` | Number of retention days for inactive source/sessions in database                      | Facultative.                                 |

### Add RabbitMQ shovel

Here is an exemple for RabbitMQ shovel, here it receives some products from another system into the FEM (additional_parameters) and allows that system to receive setup another shovel using `myuser` (additional_users and user_permissions):  

```
group_docker_cots:
  [...]
  rabbitmq:
    [...]
    additional_users:
      - name: myuser
        password: myuserpw
        tags: ''
    user_permissions:
      - user: chronos
        vhost: regards.multitenant.manager
        configure: ''
        write: ''
        read: .*
    additional_parameters:
      - component: shovel
        name: Chronos events to Geode
        vhost: regards.multitenant.manager
        value:
          ack-mode: on-confirm
          dest-add-forward-headers: false
          dest-protocol: amqp091
          dest-exchange: regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionRequestEvent
          dest-uri: amqp://guest:guest@localhost/regards.multitenant.manager
          src-delete-after: never
          src-protocol: amqp091
          src-queue: postprocess.external.messages.geode
          src-uri: amqp://geode:geodepw@chronos.cnes.fr:5672
```
