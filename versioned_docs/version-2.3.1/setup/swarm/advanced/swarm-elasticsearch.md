---
title: Elasticsearch
slug: /setup/swarm/advanced/elasticsearch/
---


This guide allows you to configure the mandatory Elasticsearch server deployed with your Regards swarm stack.

:::info Elasticsearch Configuration
Edit your inventory file `inventories/<your inventory>/group_vars/regards_nodes/main.yml` to override Elasticsearch
information
:::
:::info
For operational environments, it is essential to deploy Elasticsearch in a cluster.
:::
## Cluster configuration

To deploy a cluster of Elasticsearch nodes, you need to set `global_service` to `true`:

```yaml
group_docker_cots:
  elasticsearch:
    global_service: true
```

If you don't want all your Swarm nodes to receive a Elasticsearch replica, use [Swarm label node placement constraint](./swarm-placement-constraint.md):

```yaml
group_docker_cots:
  elasticsearch:
    global_service: true
    node_label_placement_constraint:
      key: type
      value: cots
```

This example tells Swarm to deploy a replica of Elasticsearch on every node having a property `type` valued to `cots`.

## Memory configuration

Elasticsearch heavily relies on the Java heap memory for storing and managing data structures, caches, and buffers. The
more memory available, the better the performance of the cluster.

You can configure the heap size using the property `memoryLimit` and the container limit using `containerLimit`:

```yaml
group_docker_cots:
  elasticsearch:
    memoryLimit: 3.75g
    containerLimit: 5g
```

:::danger
You cannot set a maximum heap size value to more than 75% of the container's memory limit.
:::
