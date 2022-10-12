---
id: swarm-quick-setup
title: Quick setup
slug: /setup/
---

## Introduction

This section introduce how to deploy a REGARDS stack thanks to ansible on a docker swarm environment.  
All REGARDS docker images are available on our [github repository](https://github.com/orgs/RegardsOss/packages).

:::caution
As we install REGARDS docker swarm in a securized way, the docker configuration is rewritten by our ansible playbook on every nodes configured, or you need to setup your own docker swarm.
:::

## Prerequisites

:::info
Docker swarm installation of REGARDS is available for CentOS, Ubuntu, Debian and Fedora linux distributions.
:::

1. Install Ansible version `2.9.27` at least [docs.ansible.com](https://docs.ansible.com/ansible/latest/installation_guide/installation_distros.html)
1. Download [regards-docker playbooks](https://codeload.github.com/RegardsOss/regards-docker/zip/refs/heads/master).
1. Your user is sudoer. Note that all command on this tutorial shall not be runned with root user.

## Create your inventory

### Create your hosts file

Once you download and extract the `regards-docker-master`, you need to create an inventory that saves the configuration of your setup. Create a folder inside the `regards-docker-master/inventories/`, using by example a subset of the server hostname you want to install REGARDS on.

Let's suppose we want to create an inventory on a computer named `regards-cnes.host.com` :

```bash
mkdir regards-docker-master/inventories/regards-cnes
cd regards-docker-master/inventories/regards-cnes
```

Let's create an `hosts` file that defines nodes that will be used during this deployment.

```bash
cat >> hosts << FIN_CAT
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

Remove all lines begining with `[1-7]` and make appropriate changes following your needs. You have two examples provided inside regards-docker-master: `inventories/demo/hosts` and `inventories/multihosts/hosts`.

### Create your group_vars folder

Now you've configured where you want to install REGARDS, you need to configure what and how you want to install, using a folder named `group_vars` inside your inventory.

#### Copy an existing group_vars folder

First, you need to initialise the `group_vars` folder using one of these commands, depending of the number of servers you have :

```bash
# cd regards-docker-master/inventories/regards-cnes
# Install REGARDS on one server - using demo inventory
cp -R ../../demo/group_vars ./

# Install REGARDS on one server when you don't want any security activated. 
# In that case, you need to setup SWARM by YOURSELF, as this is trivial and documented out there
# Use it when you install REGARDS on your own developper PC and not a distant server.
cp -R ../../demo-insecure/group_vars ./

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
| `global_regards.project_name`                | Name of the first project created on REGARDS automagically                                                                                                          |

#### Customise a demo's based inventory

Edit the file `regards-cnes/group_vars/all/main.yml` with :

| Variable                                | Description                                                                                                                            |
| :-------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `global_stack.master_node_host_name`    | Server hostname where the regards stack is installed. For local installation you can use the `hostname` unix command to find it        |
| `global_stack.workdir`                  | REGARDS swarm stack install directory                                                                                                  |
| `global_stack.docker.workdir`           | Docker working directory                                                                                                               |
| `global_stack.docker.network_interface` | Name of the network interface used to access to your server. For local installation you can use the `ifconfig` unix command to find it |
| `global_regards.your_user` | The name of your user. All REGARDS process and created files will be owned by your linux user |
| `global_regards.your_user_id` | The id related to your user. Runs the command `id` to get that value |
| `global_regards.version`                | Version of REGARDS to install                                                   
| `global_regards.project_name`                | Name of the first project created on REGARDS automagically                                                                                                          |

#### Customise a multihosts's based inventory

Edit the file `regards-cnes/group_vars/all/main.yml` with :

| Variable                                | Description                                                                                                                            |
| :-------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `global_stack.master_node_host_name`    | Server hostname where the regards stack is installed. For local installation you can use the `hostname` unix command to find it        |
| `global_stack.workdir`                  | REGARDS swarm stack install directory                                                                                                  |
| `global_stack.docker.workdir`           | Docker working directory                                                                                                               |
| `global_stack.docker.network_interface` | Name of the network interface used to access to your server. For local installation you can use the `ifconfig` unix command to find it |
| `global_regards.version`                | Version of REGARDS to install                                                                                                          |
| `global_regards.project_name`                | Name of the first project created on REGARDS automagically                                                                                                          |

:::caution
In multi nodes deployment mode, the `global_stack.workdir` value have to be the same accessible directory on each nodes (e.g. NFS mount).
:::

## Install the stack

### Preamble

Once inventory configuration has been saved, you can install Docker SWARM and REGARDS.  
If you want an insecure REGARDS install on your desktop and you know what you're doing, you can search for a tutorial out there to install Docker SWARM on your computer then executes the playbook `regards.yml`.
If you're OK with a secure installation of SWARM, execute the playbook `setup-vm.yml` which setup swarm and secures it, then pursue with the `regards.yml` playbook.

:::info
Run the command `python --version` on the server where you want to install REGARDS.  
If it returns `v2.x`, you need to : 
- edit the file `inventories/<inventory name>/docker_nodes/main.yml` and edit the value used on `python_version`. Set that value to `python_version: 2`.
- if `ansible-playbook` does not work, you can try to use `ansible-playbook-2.7` instead.
:::

### Ansible CLI overview

Let's see how you can use Ansible playbook CLI.

```bash
# cd regards-docker-master/
ansible-playbook -i inventories/<inventory name> <playbook file>.yml <additional parameters>
```

With :

- `<inventory name>` is the name of the inventory you've created
- `<additional parameters>` can be replaced by `--ask-become-pass` if you need to give the password when you switch to root, empty otherwise
- `<playbook file>.yml` are playbook you're executing, here we want to install SWARM then REGARDS.

These commands will succeed with one of these lovely message :

```bash
[..]
PLAY RECAP *******************************************************************************************************
regards-master                 : ok=23   changed=8    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0
regards-slave                 : ok=23   changed=8    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0
```

:::info
Seeing red lines is normal, as some tasks produce error that can safely ignored if they do not block the playbook execution. What really matters is `failed=0` in the recap.
:::

### Secure SWARM install

Let's see how to do a secure installation:

```bash
# cd regards-docker-master/
ansible-playbook -i inventories/<inventory name> setup-vm.yml <additional parameters>


```

With an example :

```bash
# cd regards-docker-master/
> ansible-playbook -i inventories/regards-cnes setup-vm.yml --ask-become-pass
[..]
PLAY RECAP *******************************************************************************************************
regards-master   : ok=158 changed=8 unreachable=0 failed=0 skipped=22 rescued=0 ignored=0
regards-slave-1  : ok=86 changed=8 unreachable=0 failed=0 skipped=4 rescued=0 ignored=0
```

:::info
If you are installing locally REGARDS (ansible_connection=local inside inventories/`<inventory name>`/hosts),
the `setup-vm.yml` has added you into a group but it won't be effective until you've restarted your session.
Ensures the command id return you the group `dockermapgid` or the next playbook will timeout.
:::


### Login to Docker registry

We're currently storing our Docker image on Github. To be able to fetch them, you require an access token.

Follow the [first 7 steps in this guide](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) to get an overview of the Github interface and how to create a personal token.  

**Create a token with a `read:packages` scope.**

To sum up the [official guide](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry), execute the following two commands:

```
# Connect threw SSH to your master node and use the token to login in to Github 
export CR_PAT=<your token access>
echo $CR_PAT | docker login ghcr.io --password-stdin -u <your username>
```

:::info
If you do not fetch image directly on Github, adapt this step to your environment, as you may need to login on your private Docker registry.
:::

### REGARDS install

```bash
# cd regards-docker-master/
ansible-playbook -i inventories/<inventory name> regards.yml <additional parameters>
```

With an example :

```bash
> ansible-playbook -i inventories/regards-cnes regards.yml --ask-become-pass
[..]
PLAY RECAP *******************************************************************************************************
regards-master   : ok=23 changed=8 unreachable=0 failed=0 skipped=1 rescued=0 ignored=0
regards-slave-1  : ok=23 changed=8 unreachable=0 failed=0 skipped=1 rescued=0 ignored=0
```

### Test REGARDS is up

Connect to the master node of your stack, and open the REGARDS working directory.  
To do that, you need these two values from your inventories :

```yaml
group_workdir_local: /opt/regards/
group_stack_name: regards
```

It means your stack is installed inside `/opt/regards/regards`.

Open this folder and go to the cli folder:

```bash
cd /opt/regards/regards/cli
```

Execute `./health.sh all`, you should get the following :

```bash
$ ./health.sh all
[200]	admin
[200]	dam
[200]	access_project
[200]	admin_instance
[200]	catalog
[200]	access_instance
[200]	authentication
```

You can monitor and administrate the deployed stack thanks to cli commands as explained [here](swarm/cli/)

### Quick setup conclusion

Still there ? Congratulations, you've just finished the first step of the install!

Several web interfaces are accessible on your server now :

- Instance administration : http://`<server name>`/admin
- Administration : http://`<server name>`/admin/`<first project>`
- User interface : http://`<server name>`/user/`<first project>`
- Portal : http://`<server name>`
- Fake SMTP server : http://`<server name>`:5081
- Phppgadmin : http://`<server name>`:5080
- RabbitMQ admin : http://`<server name>`:15672


:::info Don't go away !
You've just deployed the heart of REGARDS, but many REGARDS microservices are still missing...  
**Click on the link Introduction just below**, you'll discover how to customize your inventory to improve your deployment. 
:::
