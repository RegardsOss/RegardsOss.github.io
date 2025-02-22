---
id: postgres-database
title: Posgres database
slug: /setup/swarm/advanced/postgres-database/
sidebar_position: 4
---

Supported Postgres version: 11  
Posgis extension: Facultative

### Configure phppgadmin

#### Use internal postgres

_No yet documented_

#### Use external postgres

Edit your inventory file `inventories/<your inventory>/group_vars/regards_nodes/main.yml`

```yaml
  phppgadmin:
    [ ... ]
    db:
      - name: DB Instance
        host: database-inst.cnes.fr
        port: 5432
        defaultdb: <instance database name>
        theme: cappuccino
      - name: DB Project
        host: database-first-project.cnes.fr
        port: 5432
        defaultdb: <first project database name>
        theme: cappuccino
    setting_main_theme: cappuccino
```

### Use external postgres

Edit your inventory file `inventories/<your inventory>/group_vars/regards_nodes/main.yml`

- add connection information

```yaml
group_config_mservices:
  [ ... ]
  postgres:
    instance:
      host: database-inst.cnes.fr
      port: 5432
      db: <instance database name>
      user: <some user>
      password: "{{ regards_vault.group_config_mservices.postgres.instance.password }}"
    init_project:
      host: database-first-project.cnes.fr
      port: 5432
      db: <first project database name>
      user: <some user>
      password: "{{ regards_vault.group_config_mservices.init_project.instance.password }}"
```

- remove the Postgres service that was deployed inside `group_docker_cots`

```yaml
# Before
group_docker_cots:
  postgres:
    tag: "{{ group_docker_tags.cots }}"
    [ ... ]

# After
group_docker_cots:
```

- if you do not have Postgis on your `database-inst.cnes.fr` database, edit the `access_instance` service to indicate
  there is no Postgis available:

```yaml
# Before
group_docker_mservices:
  access_instance:
    tag: "{{ group_docker_tags.back }}"
    [ ... ]

# After
group_docker_mservices:
  access_instance:
    tag: "{{ group_docker_tags.back }}"
    postgis: false
    [ ... ]
```
