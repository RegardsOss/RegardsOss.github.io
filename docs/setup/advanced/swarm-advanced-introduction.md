---
id: advanced-introduction
title: Introduction
slug: /setup/swarm/advanced/introduction
---

There is a lot of available configuration that you can customize directly from your inventory, as there is many ways to deploy a REGARDS instance on yours servers.

:::info 
We assume you've successfully deployed REGARDS using the [Quick setup](/docs/setup/)
:::

### Guides

- [Deploy required microservices](/docs/setup/swarm/microservice-setup) will cover all REGARDS microservices, what do they offer and how to enable them
- [Postgres Database](/docs/setup/swarm/postgres-database/) will configure microservices to use an external Database for REGARDS itself. **Highly recommended**
- [Microservices optimizations](/docs/setup/swarm/optimizations/) will cover all REGARDS microservices optimizations and how to tune them from your inventory


### Run changes after inventory modification

Once you've edited your inventory, you must execute the following command to update the stack:

```bash
# cd regards-docker-master/
ansible-playbook -i inventories/<inventory name> regards.yml <additional parameters>
```

Whatever the modification you've done, that's the only command you need to know!
