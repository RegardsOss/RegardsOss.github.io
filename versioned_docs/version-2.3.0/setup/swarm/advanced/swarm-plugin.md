---
title: Plugin setup
slug: /setup/swarm/advanced/plugin-setup
sidebar_position: 2.5
---

This guide allows you to deploy a REGARDS backend plugin thanks to your inventory.


:::info
When a REGARDS microservice boots, it scans on the disk for plugins (jar files) to make them available on the service.  
You need to configure the plugin to make it usable.
:::

### Inventory configuration

To deploy a plugin, you need to add the image name and tag inside `group_docker_plugins`:

```yml
# Plugins
group_docker_plugins:
  - image: <a plugin image name>
    tag: <a plugin image tag>
  - image: <another plugin image name>
    tag: <another pluginimage tag>
  - ...
```

If you want to add [the `aip-datasource` plugin](../../../development/services/dam/plugins/overview.md) to allow the
microservice DataManagement to crawl OAIS products, you need to add the image plugin in the `group_docker_plugins`
property, like this:

```yml
# Plugins
group_docker_plugins:
  - image: rs-aip-datasource-plugin
    tag: "{{ group_docker_tags.plugins }}"
```

:::info Plugin list

The documentation of every microservice list all available OSS plugins and their image name.  
Here is some examples:

- [rs-dam or DataManagement plugins](../../../development/services/dam/plugins/overview.md)
- [rs-notifier plugins](../../../development/services/notifier/plugins/overview.md)
- [rs-ingest plugins](../../../development/services/ingest/plugins/overview.md)
- [rs-catalog plugins](../../../development/services/catalog/plugins/overview.md)
- ...

:::

### Activate a plugin

To activate a plugin, you need to run the playbook:

```bash
# cd regards-docker/
ansible-playbook -i inventories/<inventory name> regards.yml <additional parameters>
```

This task will copy the plugin on the disk.

If your service did not reboot after the deployment, you need to reboot the service:

```bash
# go to cli folder, then run the folowing command:
./status.sh
# if the service did not reboot, run the folowing command:
./reboot.sh <name of the service>
```

### Remove all plugins

To remove all plugins, first shutdown REGARDS. Then you need to run the playbook:

```bash
# cd regards-docker/
ansible-playbook -i inventories/<inventory name> regards-delete-plugins.yml <additional parameters>
```

### Install or update all plugins

There is a direct Ansible task that copy all plugins:

```bash
# cd regards-docker/
ansible-playbook -i inventories/<inventory name> regards-plugins.yml <additional parameters>
```