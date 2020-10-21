---
layout: classic-docs
title: REGARDS ansible tasks
short-title: ansible tasks
---

{% include toc.md %}

## Ansible tasks

> If users are not in sudoers you can add `--ask-become-pass` option to an ansible-playbook command to become superuser when required.
{: .tip .info}

### setup-vm.yml

This ansible task install & configure docker swarm environement on each nodes configured in your inventory `hosts` file.

```shell
ansible-playbook -i inventories/demo setup-vm.yml
```

### regards.yml

This ansible task install & configure & run REGARDS on each nodes configured in your inventory `hosts` file.


```shell
ansible-playbook -i inventories/demo regards.yml
```

### regards-config.yml

This ansible task update REGARDS deployed stack that refers to the provided inventory.

```shell
ansible-playbook -i inventories/demo regards-config.yml
```

### regards-shutdown.yml

This ansible task shutdown REGARDS deployed stack that refers to the provided inventory.

```shell
ansible-playbook -i inventories/demo regards-shutdown.yml
```

### regards-delete.yml

This ansible task delete REGARDS deployed stack that refers to the provided inventory.

```shell
ansible-playbook -i inventories/demo regards-delete.yml
```
