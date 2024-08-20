---
id: advanced-introduction
title: Introduction
slug: /setup/swarm/advanced/introduction
---

There is a lot of available configurations that you can customize directly from your inventory, as there are many ways
to deploy a REGARDS instance on your servers.

:::info
We assume you have successfully deployed REGARDS using the [Quick setup](../01-quick-setup.md)
:::

### Guides

- [Deploy required microservices](02-microservice-setup.md) introduces you the REGARDS microservices and the way to
  enable them depending on your needs.
- [Logging stack guide](firewall-guide.md) shows you how to activate the monitoring stack for logs and metrics. **Highly
  recommended**
- [Postgres Database](swarm-database.md) shows you how to connect microservices to external databases. **Highly
  recommended**
- [RabbitMQ](swarm-rabbitmq.md) shows you how to configure RabbitMQ service.
- [MinIO](swarm-minio.md) shows you how to deploy a MinIO server for your regards swarm stack.
- [Microservices optimizations](swarm-optimizations.md) provides you all the possible inventory configurations to
  optimize microservices.
- [Ansible Vault](ansible-vault.md) allows you to crypt passwords inside your inventory and commit them on Git safely. *
  *Highly recommended**
- [Mount volumes, configs...](swarm-volumes.md) allows you to describe volumes, configs and secrets files containers
  have access to. **Highly recommended**
- [Network tuning](swarm-networks.md) allows you to understand and properly configure network properties.
- [Securise using HTTPS](swarm-regards-https.md) allows you to expose the REGARDS API and HMI through HTTPS. **Highly
  recommended**
- [Web application firewall guide](firewall-guide.md) lists URLs you should block access to users on untrusted networks.

### Run changes after inventory modification

Once you have edited your inventory, you must execute the following command to update the stack:

```bash
# cd regards-docker-master/
ansible-playbook -i inventories/<inventory name> regards.yml <additional parameters>
```

Whatever modifications you have done, this is the only command you need to know!
