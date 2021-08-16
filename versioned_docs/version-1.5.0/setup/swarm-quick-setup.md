---
id: swarm-quick-setup
title: Quick setup
slug: /setup/
---

## Introduction

This section introduce how to deploy a REGARDS stack thanks to ansible on a docker swarm environment.  
All REGARDS docker images are available on our [github repository](https://github.com/orgs/RegardsOss/packages?repo_name=regards-deployment).

:::caution
As we install REGARDS docker swarm in a securized way, the docker configuration is rewritten by our ansible playbook on every nodes configured.
:::

## Prerequisites

:::info
Docker swarm installation of REGARDS is available for CentOS, Ubuntu and fedora linux distributions.
:::

1. Install Ansible version `2.9.2.23` at least [docs.ansible.com](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)
1. Download [regards-playbook](https://github.com/RegardsOss/RegardsOss.github.io/releases/download/V1.2.1/regards-playbook.zip).

## Create your inventory

### Create your hosts file

Once you download and extract the `regards-playbook`, you need to create an inventory that saves the configuration of your setup. Create a folder inside the `regards-playbook/inventories/`, using by exemple a subset of the server hostname you want to install REGARDS on.

Let's suppose we want to create an inventory on a computer named `regards-cnes.host.com` :

```bash
mkdir regards-playbook/inventories/regards-cnes
cd regards-playbook/inventories/regards-cnes
```

Let's create an `hosts` file that defines nodes that will be used during this deployment.

```bash
cat >> hosts << FIN_CAT
[ansible_host]
ansible ansible_connection=local ansible_python_interpreter='{{ansible_playbook_python}}'

[ansible_host:vars]
gen_certificates_group_name=docker_nodes

[regards_nodes]
[1] Keep next line if you run Ansible on the server where REGARDS will be installed. Do not edit ansible_host value.
regards-master ansible_host='{{ global_stack.master_node_host_name }}' ansible_connection=local
[2] Keep next line if you don't run Ansible on the server where REGARDS will be installed. Do not edit ansible_host value.
regards-master ansible_host='{{ global_stack.master_node_host_name }}' ansible_user=XXX ansible_password=XXX
[3] Keep next lines if you have more than 1 server.
regards-slave-1 ansible_host=host-server2 ansible_user=XXX ansible_password=XXX
regards-slave-2 ansible_host=host-server3 ansible_user=XXX ansible_password=XXX
[4] You can omit ansible_user=XXX and ansible_password=XXX" if you don't need user/password to log on that node


[master]
regards-master

[slaves]
[5] Removes the next line if you have only one server, or adapt
regards-slave-[1:2]

[docker_nodes]
regards-master
[6] Removes the next line if you have only one server, or adapt
regards-slave-[1:2]

[swarm_manager]
regards-master

[swarm_workers]
[7] Removes the next line if you have only one server, or adapt
regards-slave-[1:2]
FIN_CAT
```

| Variable           | Description                                           |
| :----------------- | :---------------------------------------------------- |
| `ansible_host`     | hostname of the server                                |
| `ansible_user`     | user login to log on by ssh to configure & install    |
| `ansible_password` | user password to log on by ssh to configure & install |

Remove all lines begining with `[1-7]` and make appropriate changes following your needs. You have two exemples provided inside regards-playbook: `inventories/demo/hosts` and `inventories/multihosts/hosts`.

### Create your group_vars folder

Now you've configured where you want to install REGARDS, you need to configure what and how you want to install, using a folder named `group_vars` inside your inventory.

#### Copy an existing group_vars folder

First, you need to initialise the `group_vars` folder using one of these commands, depending of the number of servers you have :

```bash
# cd regards-playbook/inventories/regards-cnes
# Install REGARDS on one server - using demo inventory
cp -R ../../demo/group_vars ./

# Install REGARDS on several servers - using multihosts inventory
cp -R ../../multihosts/group_vars ./
```

Following chapter explains how to adapt these configurations to your needs, dependending the inventory you choosed. You can find [here](swarm/advanced-setup/) the full list of possibilities that our playbook offers.

#### Customise a demo's based inventory

Edit the file `regards-cnes/group_vars/all/main.yml` with :

| Variable                                | Description                                                                                                                            |
| :-------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `global_stack.master_node_host_name`    | Server hostname where the regards stack is installed. For local installation you can use the `hostname` unix command to find it        |
| `global_stack.workdir`                  | REGARDS swarm stack install directory                                                                                                  |
| `global_stack.docker.workdir`           | Docker working directory                                                                                                               |
| `global_stack.docker.network_interface` | Name of the network interface used to access to your server. For local installation you can use the `ifconfig` unix command to find it |
| `global_regards.version`                | Version of REGARDS to install                                                                                                          |

#### Customise a multihosts's based inventory

Edit the file `regards-cnes/group_vars/all/main.yml` with :

| Variable                                | Description                                                                                                                            |
| :-------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `global_stack.master_node_host_name`    | Server hostname where the regards stack is installed. For local installation you can use the `hostname` unix command to find it        |
| `global_stack.workdir`                  | REGARDS swarm stack install directory                                                                                                  |
| `global_stack.docker.workdir`           | Docker working directory                                                                                                               |
| `global_stack.docker.network_interface` | Name of the network interface used to access to your server. For local installation you can use the `ifconfig` unix command to find it |
| `global_regards.version`                | Version of REGARDS to install                                                                                                          |

:::caution
In multi nodes deployment mode, the `global_stack.workdir` value have to be the same accessible directory on each nodes (e.g. NFS mount).
:::

## Login to Docker registry

We're currently storing our Docker image on Github. To be able to fetch them, you require an access token.

Visit [this link](https://docs.github.com/en/packages/guides/configuring-docker-for-use-with-github-packages#authenticating-with-a-personal-access-token) and [this link](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) to get an overview on how to let your Docker engine be able to fetch REGARDS images.

:::info
If you do not fetch image directly on Github, adapt this step to your environment, as you may need to login on your private Docker registry.
:::

## Install the stack

When configuration has been saved, you need to run the following command :

```bash
# cd regards-playbook/
ansible-playbook -i inventories/<inventory name> setup-vm.yml <additional parameters>

# Connect threw SSH to your master node and login to Github or adapt it to your environment
# cat ~/TOKEN.txt | docker login https://docker.pkg.github.com -u <MY USERNAME> --password-stdin

# If you are installing locally REGARDS (ansible_connection=local inside inventories/<inventory name>/hosts),
# the setup-vm.yml has added you into a group but it won't be effective until you've restarted your session.
# Ensures the command id return you the group `dockermapgid` or the next playbook will timeout

ansible-playbook -i inventories/<inventory name> regards.yml <additional parameters>
```

With :

- `<inventory name>` is the name of the inventory you've created
- `<additional parameters>` can be replaced by `--ask-become-pass` if you need to give the password when you switch to root, empty otherwise
- `[setup-vm|regards].yml` are playbook you're executing, here we want to install SWARM then REGARDS.

These commands will succeed with one of these lovely message :

```bash
[..]
PLAY RECAP *******************************************************************************************************
regards-master                 : ok=23   changed=8    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0
regards-slave                 : ok=23   changed=8    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0
```

With an exemple :

```bash
# cd regards-playbook/
> ansible-playbook -i inventories/regards-cnes setup-vm.yml --ask-become-pass
[..]
PLAY RECAP *******************************************************************************************************
regards-master   : ok=158 changed=8 unreachable=0 failed=0 skipped=22 rescued=0 ignored=0
regards-slave-1  : ok=86 changed=8 unreachable=0 failed=0 skipped=4 rescued=0 ignored=0

# I don't need to connect to the remote VM using SSH as:
# - on my specific setup, Docker images are stored on a private repository
# - the playbook is runned from my desktop and not directly on regards-master

> ansible-playbook -i inventories/regards-cnes regards.yml --ask-become-pass
[..]
PLAY RECAP *******************************************************************************************************
regards-master   : ok=23 changed=8 unreachable=0 failed=0 skipped=1 rescued=0 ignored=0
regards-slave-1  : ok=23 changed=8 unreachable=0 failed=0 skipped=1 rescued=0 ignored=0
```

:::info
Seeing red lines is normal, as some tasks produce error that can safely ignored if they do not block the playbook execution. What really matters is `failed=0` in the recap.
:::

Congratulations, your REGARDS installation is over. System is starting and will be up soon. You can access web interfaces at :

- Instance administration : http://<master_node_host_name>
- Administration : http://<master_node_host_name>/admin/demo
- Portal : http://<master_node_host_name>
- User interface : http://<master_node_host_name>/user/demo

You can now monitor and administrate the deployed stack thanks to cli commands as explained [here](swarm/cli/)
