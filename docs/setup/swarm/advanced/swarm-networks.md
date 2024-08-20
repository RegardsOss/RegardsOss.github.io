---
id: swarm-networks
title: Networks
slug: /setup/swarm/advanced/swarm-networks
sidebar_position: 10
---

This guide allows you to tune SWARM networks thanks to your inventory.

### Internal network

:::danger ensure networks are reserved
Netmask, defined inside [Swarm networks](#swarm-network) and [REGARDS network](#regards-network), must be reserved by
your **corporation** to prevent the usage of these reserved masks.  
Otherwise, a machine that has an IP inside one of these reserved masks **would not be reachable from your REGARDS
cluster**.  
:::

#### Swarm networks

By default, *demo inventories* defines several communication networks used by Swarm nodes to communicate to each
other.  
Default values are :

```yml
# Inside inventories/<inventory name>/group_vars/docker_nodes/main.yml
docker_bip: 10.122.20.1/24
docker_ingress_network: 10.122.22.0/24
docker_ingress_network_gateway: 10.122.22.1
docker_gwbridge_network: 10.122.21.0/24
```

:::info
See more about these networks on the Docker documentation:

- [Ingress network for routing mesh](https://docs.docker.com/engine/swarm/ingress/) enables each node in the swarm to
  accept connections on published ports for any service running in the swarm
- [The docker_gwbridge is a virtual bridge](https://docs.docker.com/engine/swarm/networking/#customize-the-docker_gwbridge)
  that connects the overlay networks (including the ingress network) to an individual Docker daemon's physical network
- Docker uses a software bridge which lets containers connected to
  the [same bridge network communicate](https://docs.docker.com/network/drivers/bridge/#use-the-default-bridge-network)

:::

#### REGARDS network

By default, *demo inventories* defines an internal microservice communication network with the following value :

```yml
# Inside inventories/<inventory name>/group_vars/regards_nodes/main.yml
group_docker_network_ip_network: "10.11.7."
```

This property allows to create an *overlay* network dedicated to our microservices with:

* a subnet in *0/24*
* and its gateway.

### External networks

**This option is facultative.**

To define external access to microservices, you must first declare the **external networks** to use as follows:

```yml
group_config_mservices:
  external_networks:
    - network: foo
      name: net_foo
```

:::info Generated configuration
This configuration generates networks top-level element as defined in
the [compose specification](https://github.com/compose-spec/compose-spec/blob/master/spec.md#networks-top-level-element).
:::

:::warning Reminder
The creation of these **external networks** is not handled by regards playbook. You must create them beforehand by your
own!
:::

It is then possible to define specific connections to the following microservices: *gateway*, *authentication*,
*catalog* or *front*.

For instance:

```yml
group_docker_mservices:
  catalog:
    configuration:
      external_networks:
        - network: foo
          aliases:
            - foo.catalog
```

:::info Generated configuration
This configuration generates networks and optionnaly aliases as
defined [here](https://github.com/compose-spec/compose-spec/blob/master/spec.md#aliases).
:::

### Preferred networks

**This option is facultative.**

As a side effect when **several networks** are defined inside your SWARM network, you will have to specify the preferred
networks in order to microservice to talk to each other without network issue.

So to force internal microservice communication to use **internal network**, you will have to setup the following
properties:

For instance:

```yml
group_config_mservices:
  # Value depends on your internal network configuration
  preferred_networks: 10.11
```
