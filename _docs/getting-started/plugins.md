---
layout: classic-docs
title: Plugins installation
short-title: Plugins
---

{% include toc.md %}

## Find plugins

To find available plugins for REGARDS microservices you can check the [official plugin repository on github](https://github.com/RegardsOss/regards-plugins/releases)

## Add new plugin to a microservice

To add a new plugin to a microservice, you have to copy the 'jar' file of the plugin into the 'plugins/\<microservice\>' directory of the REGARDS install directory.

```bash
cp plugin.jar /home/REGARDS/plugins/<microservice>/
chown <regards_exec_user> /home/REGARDS/plugins/<microservice>/plugin.jar
chmod 640 /home/REGARDS/plugins/<microservice>/plugin.jar
```

After a new plugin is added to a microservice, you need to restart it. To do so, stop and start the microservice as explained in [Regards CLI](/getting-started/cli/)

Then you can see that the plugin is well installed from the project IHM in the 'microservices' section.  
  
Exemple for list `catalog microservice plugins` :   
> https://regards/admin/project1/microservice/rs-catalog/plugin/list

