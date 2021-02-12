###########
Quick setup
###########

**********
Deployment
**********

Introduction
============

This section introduce how to deploy a REGARDS stack thanks to ansible on a docker swarm environment.  
All REGARDS docker images are available on our `Github repository <https://github.com/orgs/RegardsOss/packages?repo_name=regards-deployment>`_.

.. warning::
   
   As REGARDS docker swarm environment installed is securized, the docker configuration is rewritten by our ansible scripts for each nodes configured. As REGARDS docker swarm environment installed is securized, the docker configuration is rewritten by our ansible scripts for each nodes configured.


Pre-requisites
==============

.. tip::
   
   Docker swarm installation of REGARDS is available for CentOS, Ubuntu and Fedora linux distributions.


#. Install Ansible `docs.ansible.com <https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html>`_
#. Download ansible `regards-playbook <https://github.com/RegardsOss/RegardsOss.github.io/releases/download/V1.2.1/regards-playbook.zip>`_
#. Extract downloaded ansible regards-playbook zip archive 

Deploy demo
===========

The demo inventory is preconfigured to deploy REGARDS stack on one docker node.
You need to edit the `inventories/demo/group_vars/all/main.yml` to configure installation with :

.. list-table:: Demo variables
   :header-rows: 1

   * - Variable
     - Description
   * - ``global_stack.master_node_host_name``
     - Hostname of server to install regards stack. For local installation you can use the `hostname` unix command to find it
   * - ``global_stack.workdir``
     - REGARDS swarm stack install directory
   * - ``global_stack.docker.workdir``
     - Docker install directory
   * - ``global_stack.docker.network_interface``
     - Docker network interface to use. For local installation you can use the `ifconfig` unix command to find it
   * - ``global_regards.version``
     - Version of REGARDS to install

global_stack.master_node_host_name
   Hostname of server to install regards stack. For local installation you can use the `hostname` unix command to find it

global_stack.workdir
   REGARDS swarm stack install directory

global_stack.docker.workdir
   Docker install directory

global_stack.docker.network_interface
   Docker network interface to use. For local installation you can use the `ifconfig` unix command to find it

global_regards.version
   Version of REGARDS to install

When configuration is done run :

.. code-block:: bash

   $ ansible-playbook -i inventories/demo setup-vm.yml --ask-become-pass
   $ ansible-playbook -i inventories/demo regards.yml --ask-become-pass

   [..]
   PLAY RECAP *******************************************************************************************************
   regards-master                 : ok=23   changed=8    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0

Congratulations your REGARDS installation is over. System is starting and will be up soon. You can access web interfaces at :

* Instance administration : ``http://<master_node_host_name>``
* Administration : ``http://<master_node_host_name>/admin/demo``
* Portal : ``http://<master_node_host_name>``
* User interface : ``http://<master_node_host_name>/user/demo``

You can now monitor and administrate the deployed stack thanks to cli commands as explained at [Stack administration](/getting-started/swarm-cli).

.. note::

   TODO cross reference

Deploy multihosts
=================

The multihosts inventory is preconfigured to deploy regards stack on multiple nodes.  
You need to cnfigure the ``inventories/multihosts/group_vars/all/main.yml`` file with :

.. list-table:: Multihost variables
   :header-rows: 1

   * - Variable
     - Description
   * - ``global_stack.master_node_host_name``
     - Hostname of server to install regards stack. For local installation you can use the `hostname` unix command to find it
   * - ``global_stack.workdir``
     - REGARDS swarm stack install directory
   * - ``global_stack.docker.workdir``
     - Docker install directory
   * - ``global_stack.docker.network_interface``
     - Docker network interface to use. For local installation you can use the `ifconfig` unix command to find it
   * - ``global_regards.version``
     - Version of REGARDS to install

And ``inventories/multihosts/hosts`` to configure access to nodes regards-master and regards-slave for :

.. list-table:: Multihost specific variables
   :header-rows: 1

   * - Variable
     - Description
   * - ``ansible_host``
     - Hostname of the server
   * - ``ansible_user``
     - User login to log on by ssh to configure & install
   * - ``ansible_password``
     - User password to log on by ssh to configure & install

.. note::

   In multi nodes deployment mode the ``global_stack.workdir`` variable have to be the same accessible directory on each nodes as a NFS mount.

When configuration is done run :

.. code-block:: bash

   $ ansible-playbook -i inventories/multihosts setup-vm.yml --ask-become-pass
   $ ansible-playbook -i inventories/multihosts regards.yml --ask-become-pass

   [..]
   PLAY RECAP *******************************************************************************************************
   regards-master                 : ok=23   changed=8    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0
   regards-slave                 : ok=23   changed=8    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0


Congratulations your REGARDS installation is over. System is starting and will be up soon. You can access web interfaces at :

* Instance administration : ``http://<master_node_host_name>``
* Administration : ``http://<master_node_host_name>/admin/demo``
* Portal : ``http://<master_node_host_name>``
* User interface : ``http://<master_node_host_name>/user/demo``

You can now monitor and administrate the deployed stack thanks to cli commands as explained at [Stack administration](/getting-started/swarm-cli).

.. note::

   TODO cross reference
