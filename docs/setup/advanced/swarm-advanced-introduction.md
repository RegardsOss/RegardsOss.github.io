---
id: advanced-introduction
title: Introduction
slug: /setup/swarm/advanced/introduction
---

There is a lot of available configurations that you can customize directly from your inventory, as there are many ways to deploy a REGARDS instance on your servers.

:::info 
We assume you have successfully deployed REGARDS using the [Quick setup](/docs/setup/)
:::

### Guides

- [Deploy required microservices](/docs/setup/swarm/microservice-setup) introduces you the REGARDS microservices and the way to enable them depending on your needs.
- [Postgres Database](/docs/setup/swarm/postgres-database/) shows you how to connect microservices to external databases. **Highly recommended**
- [Microservices optimizations](/docs/setup/swarm/optimizations/) provides you all the possible inventory configurations to optimize microservices.


### Run changes after inventory modification

Once you have edited your inventory, you must execute the following command to update the stack:

```bash
# cd regards-docker-master/
ansible-playbook -i inventories/<inventory name> regards.yml <additional parameters>
```

Whatever modifications you have done, this is the only command you need to know!
