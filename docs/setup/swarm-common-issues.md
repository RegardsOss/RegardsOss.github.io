---
id: swarm-common-issues
title: Common issues
slug: /setup/swarm/common-issues
---

Here is some issues you may encounter while deploying REGARDS using our playbook.  

**[ISSUE] All my containers are restarting few minutes after I've started them**

You don't have enough ressources to deploy REGARDS on your VM. Your Docker daemon just died.

**[ISSUE] My container fails to reach another container if both are not located on the same server**

You should look for your Docker Swarm network configuration. You can view where packets are dropped using a tool like [wbitt/network-multitool](https://hub.docker.com/r/wbitt/network-multitool).
