---
id: swarm-setup
title: Inventory configuration
slug: /setup/swarm/advanced-setup/
---

:::info
This documentation page may be outdated
:::

## Deployment

### Introduction

This page covers some of the possibilities offered by our inventory, specially the
file `regards-playbook/inventories/regards-cnes/group_vars/all/main.yml`.

### Users & groups

Let's see how users created by the demo inventory are used:

| User                  | Group                                                        | Description                                                                                                         | Tips                                                  |
|:----------------------|:-------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|
| `dockermapuid`        | `dockermapgid`                                               | Used by the docker daemon                                                                                           | This group is internal to the server                  |
|                       | `gregards_admin`                                             | Regroup all users that are allowed to monitor the stack                                                             | Facultative, `johndoe` can also replace this one      |
| `docker-regards-data` | `gregards_data`                                              | IPA User/Group owning all files created by REGARDS, **must be able to access network disk `group_workdir_network`** | Your user should be inside that group                 |
| `johndoe`             | `johndoe`, `dockermapgid`, `gregards_admin`, `gregards_data` | Your personnal user                                                                                                 | Your user has access to Docker, to the stack and data |
| `mariecurie`          | `mariecurie`, `gregards_data`                                | Some user                                                                                                           | She has access to data, not the stack itself          |

To setup these users and groups, you must follow these requirements:

| User or group          | Value requirement                                                  |
|:-----------------------|:-------------------------------------------------------------------|
| `dockermapuid`         | `name_space_uid`                                                   |
| `dockermapgid`         | `name_space_gid`                                                   |
| `johndoe`,`mariecurie` | Any value inferior to `name_space_uid`                             |
| `gregards_admin`       | Any value inferior to `name_space_gid`. That user can be no login. |
| `docker-regards-data`  | `group_container_run_uid + name_space_uid`                         |
| `gregards_data`        | `group_container_run_gid + name_space_gid`                         |

### Inventories configuration properties

Global properties :

| Path                               | Type     | Description                                                             | Constraints                                                               |
|:-----------------------------------|:---------|:------------------------------------------------------------------------|:--------------------------------------------------------------------------|
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

If you don't have mutualised COTS, don't worry. You can deploy yours and use mutualised ones later.

| Path                                                                          | Type     | Description                                                                                                             | Constraints                                                                                                                              |
|:------------------------------------------------------------------------------|:---------|:------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| `group_docker_cots_configuration`                                             | `Object` | List COTS specific configuration                                                                                        | Required. Can be empty                                                                                                                   |
| `group_docker_cots_configuration.postgres.nbTenant`                           | `Int`    | Use to deduce the number of connections Postgres should allow                                                           | Required when `group_docker_cots.postgres` is defined                                                                                    |
| `group_docker_cots_configuration.elasticsearch.cluster_name`                  | `Int`    | Elasticsearch cluster name                                                                                              | Required when `group_docker_cots.elasticsearch` is defined                                                                               |
| `group_docker_cots_configuration.elasticsearch_logs.cluster_name`             | `Int`    | Logging elasticsearch cluster name                                                                                      | Required when `group_docker_cots.elasticsearch_logs` is defined                                                                          |
