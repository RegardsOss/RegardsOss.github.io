---
id: ansible-vault
title: Ansible Vault
slug: /setup/swarm/advanced/ansible-vault
sidebar_position: 8
---

Your inventory may contain some passwords that you do not want to share under source control.  
[Ansible Vault](https://docs.ansible.com/ansible/latest/user_guide/vault.html) allows you to crypt variable values and
files content inside your inventory.  
After that, you will need to add ` --ask-vault-pass` when running `ansible-playbook` to let Ansible decrypt crypted
values on the fly.

:::info Why
You can encrypt the content of a file, like the **certificate key**, or **create an inventory file** to store encrypted
properties / values (password, IP...).
:::

:::danger vi usage
Ansible Vault uses the `vi` program to write the content of the file.  
Don't forget to press `i` before writing inside the file, then save the content by pressing `Escape`, then input `:wq`
and finally press `Enter`.
:::

## Create file

```bash
ansible-vault create --ask-vault-pass <file.to.encryt>
```

This command asks you for the vault password, then opens the vi program to let you write the content.  

The file `<file.to.encryt>` must not exist before running this command.

## Edit encrypt file

You can also edit an encrypt file.

```bash
ansible-vault edit --ask-vault-pass <file.encryted>
```

:::info nano editor
You can use the nano editor using : 
`env EDITOR=nano ansible-vault edit --ask-vault-pass <file.encryted>`
:::


## docker_nodes Vault file

Here is an exemple of a Vault file that you can store inside `inventories/<inventory name>/group_vars/docker_nodes/vault`

```
docker_vault:
  # Subnet/netmask address. Basically, it cannot end with .0
  docker_bip: xx.xx.xx.xx/24
  docker_ingress_network:  xx.xx.xx.xx/24
  docker_ingress_network_gateway: xx.xx.xx.1
  docker_gwbridge_network: xx.xx.xx.xx/24
```

## regards_nodes Vault file

Here is an exemple of a Vault file that you can store inside `inventories/<inventory name>/group_vars/regards_nodes/vault`

```
regards_vault:
  # Configuration related to Regards Docker network
  group_docker_network_ip_network: xx.xx.xx
  # Configuration related to REGARDS microservices
  # see group_config_mservices for usage
  group_config_mservices:
    # Instance admin account configuration
    instance_admin:
      password: xxx
    # Configure JWT secret token
    authentication:
      jwt_secret: xxxxx
      jwt_key_hs256: xxxxx
      jwt_key_hs384: xxxxx
      jwt_key_hs512: xxxxx
      order_jwt_secret: xxxxx
      # Password to crypt DB secret (16 characters max)
      cipher_iv: xxxxx
    # Configuration related to REGARDS Postgres databases
    postgres:
      # Internal database used by REGARDS to allow multitenancy
      instance:
        password: xxx
      # First tenant database used by REGARDS on first boot
      init_project:
        password: xxx
  # Configuration related to COTS
  # RabbitMQ, Grafana, MinIO...
  # see group_docker_cots for usage
  group_docker_cots:
    # Configuration related to AMQP / RabbitMQ
    rabbitmq:
      # Used by REGARDS to connect to RabbitMQ
      regards:
        password: xxxx
      additional_users:
        # Add any missionized account here under
        # yyyy is the component name that connects to your instance. Ex: airbus, nasa, chronos...
        yyyy:
          password: xxxx
    # Configuration related to MinIO server
    minio:
      # Used by REGARDS to connect to MinIO
      regards:
        secret: xxxx
    supervision:
      # Configuration related to databases used by Grafana to allow supervision
      grafana:
        datasources:
          custom:
            # Used by Grafana to access to tenants databases
            # Must be "read only" users
            postgres:
              foe_tenant:
                password: xxx
  # Exemple of S3 configuration. Remove if not used
  s3:
    # Used to connect to the datalake
    datalake:
      staf:
        t2:
          secret: xxxx
```
