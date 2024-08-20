---
id: logging-stack
title: Logging stack
slug: /setup/swarm/advanced/logging-stack/
sidebar_position: 3
---

This guide allows you to deploy logging and monitoring services thanks to your inventory.

## Active services

Add following services inside your inventory file `group_vars/regards_nodes/main.yml`:

```yaml
# COTS
group_docker_cots:
  [ ... ]
  elasticsearch_exporter:
    tag: "{{ group_docker_tags.cots }}"
  node_exporter:
    tag: "{{ group_docker_tags.cots }}"
  telegraf:
    tag: "{{ group_docker_tags.cots }}"
    # Telegraf, Node exporter and Fluentbit are global services
  kafka:
    tag: "{{ group_docker_tags.cots }}"
  fluentbit:
    tag: "{{ group_docker_tags.cots }}"
  fluentd:
    tag: "{{ group_docker_tags.cots }}"
  prometheus:
    tag: "{{ group_docker_tags.cots }}"
  loki:
    tag: "{{ group_docker_tags.cots }}"
  grafana:
    tag: "{{ group_docker_tags.cots }}"
    port: 3000
```

## Multi-nodes swarm cluster

If you have several nodes in your swarm cluster, you need to add `node_label_placement_constraint` to services that uses
local disk: `Loki` and `Prometheus`.

```yaml
group_docker_cots:
  [ ... ]
  prometheus:
    [ ... ]
    node_label_placement_constraint:
      key: type
      value: logging
  loki:
    [ ... ]
    node_label_placement_constraint:
      key: type
      value: logging
```

:::info
In a multi node swarm cluster, we recommend to dedicate a node for logging and monitoring purpose using Swarm placement
constraints
:::

To do that, you need to edit your inventory file `hosts` to add the label used as a `node_label_placement_constraint`:

```
# REGARDS
[regards_nodes]
regards-slaveX labels='{"type": "logging"}' ansible_host=[...]
```

:::info
If you've updated `labels` on the `hosts` file, you need to patch swarm nodes using `delete-swarm.yml`
then `setup-vm.yml` playbooks.
:::

## Configure Grafana service

### SSL

If you have SSL certificates (like the one used by [REGARDS frontend service](swarm-regards-https.md)), you can give
them to Grafana:

```yaml
group_docker_stack_domain: my-regards.cnes.fr
group_docker_cots:
  [ ... ]
  grafana:
    host: "{{ group_docker_stack_domain }}"
    ssl:
      crt: "{{ group_docker_stack_domain }}.crt"
      key: "{{ group_docker_stack_domain }}.key"
```

:::info
When SSL informations are provided inside inventory, Grafana is available through HTTPS protocol.
:::

### Elasticsearch

If you use the REGARDS Elasticsearch service (and not use a mutualised one), you can connect Grafana to see indexes from
Elasticsearch server. You need to list indexes like this:

```yaml
group_docker_cots:
  [ ... ]
  grafana:
    datasources:
      regards_cots:
        elasticsearch_indexes:
          - project1
          - project2
          - ...
          # list here the REGARDS tenant in lower case 
```

### Postgres

If you use a mutualised Postgres, you can configure how Grafana connects to each tenant

```yaml
group_docker_cots:
  [ ... ]
  grafana:
    datasources:
      custom:
        postgres:
          - name: BD Project <project name>
            url: <database URL>:<database port>
            user: <database user>
            password: <Database password - use Ansible Vault!>
            databases:
              - <database name>
          [ ... ]
```

That's it!
