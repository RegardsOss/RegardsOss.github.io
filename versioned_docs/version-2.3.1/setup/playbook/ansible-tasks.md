---
id: ansible-tasks
title: Ansible tasks
sidebar_label: Tasks
slug: /setup/ansible-tasks/
---

## Ansible tasks

:::info Sudoer specific parameter
If users are not in sudoers you can add `--ask-become-pass` option to an `ansible-playbook` command to become superuser
when required. You should not run any of these tasks using root user.
:::

:::info What's an inventory ?
Your inventory is a folder containing a `hosts` file that refers to nodes you want to run the install on, and a
folder `group_vars` containing all the specific configuration of your setup.
:::

## Docker SWARM

### Setup SWARM

#### setup-vm.yml

This ansible task install & configure docker swarm environement on each nodes.

```shell
ansible-playbook -i inventories/<your inventory> setup-vm.yml
```

### Stop SWARM

#### delete-swarm.yml

This ansible task disconnect all nodes from the docker swarm. You need to execute this task **first** if you want to
execute `setup-vm.yml` again.

```shell
ansible-playbook -i inventories/<your inventory> delete-swarm.yml
```

## REGARDS

### Setup REGARDS

These tasks install REGARDS fully or partially.

#### regards.yml

This ansible task install & configure & run REGARDS on each nodes. You can run this task as many times you want.

```shell
ansible-playbook -i inventories/<your inventory> regards.yml
```

#### regards-config.yml

This ansible task update REGARDS deployed stack that refers to the provided inventory.

```shell
ansible-playbook -i inventories/<your inventory> regards-config.yml
```

#### regards-plugins.yml

This ansible task update REGARDS plugins on all servers. You need to reboot the microservice to let these changes be
live.

```shell
ansible-playbook -i inventories/<your inventory> regards-plugins.yml
```

#### regards-stack.yml

This ansible task only updates the SWARM files that boots REGARDS. Very effective way to updates a port or remove a
microservice.

```shell
ansible-playbook -i inventories/<your inventory> regards-stack.yml
```

### Stop REGARDS

#### regards-shutdown.yml

This ansible task shutdown REGARDS that refers to the provided inventory without removing any file.

```shell
ansible-playbook -i inventories/<your inventory> regards-shutdown.yml
```

### Erase REGARDS

#### regards-delete.yml

This ansible task delete REGARDS deployed stack that refers to the provided inventory. This task does not remove data
from external COTS.

```shell
ansible-playbook -i inventories/<your inventory> regards-delete.yml
```
