---
id: postgres-database
title: Posgres database
slug: /setup/swarm/postgres-database/
---

Supported Postgres version: 11  
Posgis extension: Facultative 

Edit your inventory file `inventories/<your inventory>/group_vars/regards_nodes/main.yml` 
- add connection informations
```yaml
group_config_mservices:
  [...]
  postgres:
    instance:
      host: database-inst.cnes.fr
      port: 5432
      user: <some user>
      password: <some password>
      db: <instance database name>
    init_project:
      host: database-first-project.cnes.fr
      port: 5432
      user: <some user>
      password: <some password>
      db: <first project database name>
```
- remove the Postgres service that was deployed inside `group_docker_cots`
```yaml
# Before
group_docker_cots:
  postgres:
    tag: "{{ group_docker_tags.cots }}"
    [...]

# After
group_docker_cots:
```
- if you do not have Postgis on your `database-inst.cnes.fr` database, edit the `access_instance` service to explicit there is no Postgis available:
```yaml
# Before
group_docker_mservices:
  access_instance:
    tag: "{{ group_docker_tags.back }}"
    [...]

# After
group_docker_mservices:
  access_instance:
    tag: "{{ group_docker_tags.back }}"
    postgis: false
    [...]
```
- update the phppgadmin service that was deployed inside `group_docker_cots`
  - either remove this component, as we did for postgres
  - or edit it like this, to be able to use phppgadmin on your mutualized Postgres: 
```yaml
  phppgadmin:
    [...]
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
