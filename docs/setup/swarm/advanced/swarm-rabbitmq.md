---
id: rabbitmq
title: RabbitMQ
slug: /setup/swarm/advanced/rabbitmq/
sidebar_position: 5
---

This guide allows you to configure the mandatory RabbitMQ server deployed with your Regards swarm stack.

:::info RabbitMQ Configuration
Edit your inventory file `inventories/<your inventory>/group_vars/regards_nodes/main.yml` to override RabbitMQ
information
:::
:::info Format used
The REGARDS playbooks generates a definition file that is imported by the RabbitMQ
service. [Click here to get more info about this format](https://www.rabbitmq.com/docs/definitions).
:::

## Cluster configuration

To deploy a cluster of RabbitMQ nodes, you need to set `global_service` to `true`:

```yaml
group_docker_cots:
  rabbitmq:
    global_service: true
```

If you don't want all your Swarm nodes to receive a RabbitMQ replica, use Swarm label node placement constraint:

```yaml
group_docker_cots:
  rabbitmq:
    global_service: true
    node_label_placement_constraint:
      key: type
      value: cots
```

This example tells Swarm to deploy a replica of RabbitMQ on every node having a property `type` valued to `cots`.

## Client port configuration

Client configuration allows external programs to contact the RabbitMQ server deployed.

### No TLS (unsafe)

```yaml
group_docker_cots:
  rabbitmq:
    # Port to connect to RabbitMQ server
    client: 5672
```

### With TLS

To enable ssl on your RabbitMQ server, you need define the port (using `client_ssl` property):

```yaml
group_docker_cots:
  rabbitmq:
    # Port to connect to RabbitMQ server
    client: 5672
    # Port to connect to RabbitMQ server with ssl
    client_ssl: 5671
```

And you need to provide SSL certificates names inside your inventory:

```yaml title="Certificates used by RabbitMQ"
group_docker_cots_configuration:
  rabbitmq:
    ssl:
      crt: certificate.crt
      key: certificate.key
      ca: certificate.ca.crt
```

:::info Certificates location
Certificate files must be located inside `<my-inventory>/static/ssl/` folder in your inventory.  
In upper example, it means the file `<my-inventory>/static/ssl/certificate.crt` exists.
:::

## Admin port configuration

Our playbook let you configure the port used to administrate RabbitMQ using a browser.

### No TLS (unsafe)

```yaml
group_docker_cots:
  rabbitmq:
    # Port to connect to RabbitMQ admin dashboard
    http: 15672
```

### With TLS

On REGARDS Swarm deployment, it's the rs-front service that provides the RabbitMQ Admin UI through TLS.

```yaml
group_docker_mservices:
  front:
    rabbitmq_admin: 15672


group_docker_cots:
  rabbitmq:
  # rabbitmq admin HMI is open through rs-front, no property used here
```

## Configure admin

```yaml
group_docker_cots:
  rabbitmq:
    # Administrator user name for RabbitMQ Server
    user: my-admin
    # Administrator user password for RabbitMQ Server 
    # password is saved inside the Vault file
    password: "{{ regards_vault.group_docker_cots.rabbitmq.regards.password }}"

group_config_mservices:
  amqp:
    user: "{{ group_docker_cots.rabbitmq.user }}"
    password: "{{ group_docker_cots.rabbitmq.password }}"
```

:::note
If you do not override this property, admin will be the default RabbitMQ administrator `guest`.  
If you override the administrator name, user `guest` is not allowed
:::

## Configure users

```yaml
group_docker_cots:
  rabbitmq:
    # RabbitMQ configuration to automatically create users
    additional_users:
      - name: exemple-user
        password: XXXXX
        tags: ''
    # RabbitMQ configuration to automatically create users permissions 
    user_permissions:
      - user: exemple-user
        vhost: regards.multitenant.manager
        configure: ''
        write: ''
        read: ''
```

## Configure shovels

Our playbook provides following configuration to automatically create shovels

```yaml
group_docker_cots:
  rabbitmq:
    additional_parameters:
      - component: shovel
        name: Exemple shovel
        vhost: regards.multitenant.manager
        value:
          ack-mode: on-confirm
          dest-add-forward-headers: false
          dest-protocol: amqp091
          dest-exchange: exemple.exchange
          dest-uri: amqp:///regards.multitenant.manager
          src-delete-after: never
          src-protocol: amqp091
          src-queue: source.queue
          src-uri: amqp://user:password@other-amqp-server-adress:5672/vhost
```

:::info Shovels
Most of the time, a shovel takes messages from a distant queue and put them in a local exchange
:::

## Create queues, exchanges and bindings

Our playbook provides three different properties to automatically create RabbitMQ queues, exchanges and bindings:

- `additional_queues` property to manage queues
- `additional_exchanges` property to manage exchanges
- `additional_bindings` property to manage bindings

```yaml
group_docker_cots:
  rabbitmq:
    additional_exchanges:
      - name: exemple.exchange
        vhost: regards.multitenant.manager
        # type can be Direct / Fanout / Topic
        type: fanout
        durable: true
        internal: false
    additional_queues:
      - name: exemple.queue
        vhost: regards.multitenant.manager
        durable: true
        auto_delete: false
        arguments:
          x-dead-letter-exchange: regards.DLX
          x-dead-letter-routing-key: regards.DLQ
          x-max-priority: 255
    additional_bindings:
      - source: exemple.exchange
        vhost: regards.multitenant.manager
        destination: exemple.queue
        destination_type: queue
        routing_key: 'exemple'
```

### Consumer timeout

Our playbook provides following configuration to override default consumer timeout, which is by default `30 min`.

```yaml
group_docker_cots:
  rabbitmq:
    consumer_timeout_in_ms: 3600000
    # set to 1h
```

### Mutualised RabbitMQ

If you prefer to use a mutualised instance of RabbitMQ, ensure it
uses [the right version of RabbitMQ](../06-cots-version.md) and plugin `rabbitmq_delayed_message_exchange` is active
