---
title: Placement constraint
slug: /setup/swarm/advanced/placement-constraint
---

This guide allows you to
configure [Docker services placement constraint](https://docs.docker.com/reference/compose-file/deploy/#placement).  
It allows to specify required property the platform's node must fulfill to run a service container on it.

## Configure node label

When you configure your inventory host file, you can define property on VMs using the `labels` property:

```ini {4} title="The demo-performance inventory hosts file defines 3 types of node property = cots, log and common"
regards-master-1                             ansible_host=server01.regards.fr ansible_connection=local
regards-master-2                             ansible_host=server02.regards.fr
regards-master-3                             ansible_host=server03.regards.fr
regards-slave-1  labels='{"type": "cots"}'   ansible_host=server04.regards.fr
regards-slave-2  labels='{"type": "cots"}'   ansible_host=server05.regards.fr
regards-slave-3  labels='{"type": "cots"}'   ansible_host=server06.regards.fr
regards-slave-4  labels='{"type": "log"}'    ansible_host=server07.regards.fr
regards-slave-5  labels='{"type": "common"}' ansible_host=server08.regards.fr
regards-slave-6  labels='{"type": "common"}' ansible_host=server09.regards.fr
regards-slave-7  labels='{"type": "common"}' ansible_host=server10.regards.fr
```

When you [install Docker Swarm using the playbook `setup-vm.yml`](../01-quick-setup.md), it will add the label to the
node:

```bash {5}
$ docker node inspect server04.regards.fr
    [..]
    "Spec": {
        "Labels": {
            "type": "cots"
        },
        "Role": "worker",
        "Availability": "active"
    },
```

## Configure service constraint

Every service (REGARDS service, Elasticsearch, RabbitMQ, Prometheus, Workers...) that you deploy thanks to the REGARDS
Ansible inventory can define the `node_label_placement_constraint` property:

```yaml {4-6,13-15}
# WORKERS
group_docker_workers:
  - name: some-worker
    node_label_placement_constraint:
      key: type
      value: common

# COTS
group_docker_cots:
  elasticsearch:
    tag: "{{ group_docker_tags.cots }}"
    global_service: true
    node_label_placement_constraint:
      key: type
      value: cots
```

This example creates two services:

- a worker that can run on any node having `labels='{"type": "common"}'`
- an elasticsearch cluster that will run on all node having `labels='{"type": "cots"}'`

:::info Global services
Global services are replicated on any node that accept it. `global_service` can be combined
with `node_label_placement_constraint` to create a cluster on specific nodes.
:::
