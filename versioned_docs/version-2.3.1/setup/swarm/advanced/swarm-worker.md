---
title: Worker setup
slug: /setup/swarm/advanced/worker-setup
sidebar_position: 2.6
---

This guide allows you to deploy a [worker](../../../development/concepts/08-workers.md) thanks to your inventory.

:::info Workers Configuration
Edit your inventory file `inventories/<your inventory>/group_vars/regards_nodes/workers.yml` to configure workers
information
:::

The following configuration deploys 1 worker with image name `xxx-worker` and image tag `group_docker_tags.workers`.

```yaml title="Minimal worker configuration"
# WORKERS
group_docker_workers:
  - name: xxx-worker
    replicas: 1
    tag: "{{ group_docker_tags.workers }}"
```

### Basic production ready example

You should consider the following as a ready to production minimal example :

- a [node placement constraint](./swarm-placement-constraint.md), to avoid this worker to boot on the logging server for example
- [prometheus metrics REST API](#prometheus) available on port `9093` exposed
- ressource limit defined (see [Docker compose specification](https://docs.docker.com/reference/compose-file/deploy/#resources))
- healthcheck defined (with environment variables `THC_PORT` and `THC_PATH` required
  by [paketo Buildpack](https://paketo.io/))

```yaml title="Ready to production minimal worker configuration"
# WORKERS
group_docker_workers:
  - name: xxx-worker
    replicas: 1
    tag: "{{ group_docker_tags.workers }}"
    node_label_placement_constraint:
      key: type
      value: yyyyy
    prometheus:
      port: 9093
    resources:
      limits:
        cpus: '1'
        memory: 900m
        pids: 100000
    healthcheck:
      test: [ 'CMD', '/layers/paketo-buildpacks_health-checker/thc/bin/thc' ]
      interval: 30s
      timeout: 10s
      retries: 10
      start_period: 2m
    configuration:
      environment:
        THC_PORT: 9093
        THC_PATH: /actuator/health
```

### Configure volumes

By default, Docker Swarm will create you a `tmpfs` montage on `/tmp`.

If you want to mount additional volumes, you can follow the same documentation as any REGARDS service.  
Check the [documentation](./swarm-volumes.md#mount-volume-to-services).

```yaml title="Ready to production minimal worker configuration"
# WORKERS
group_docker_workers:
  - name: xxx-worker
    replicas: 5
    volumes:
      # direct mount from the VM
      - source: /nfs
        destination: /nfs
      # Also a direct mount from the VM
      # Usefull to create a local workspace from the VM disk
      # Be careful you may have all 5 replicas working on the same VM disk (check REPLICATION_INSTANCE_ID environnement variable)
      - source: "{{ group_workdir_local }}{{ group_stack_name }}/workspace/regards/workers/swot-file-extraction-worker/workspace"
        destination: /workspace
        create: true
      # Example of named volume - must refer to a volume defined inside mounts.yml
      - source: regards-xxx-worker-volume
        destination: /config
```

### Environment variables

By default, Docker Swarm will give you the value of the `{{.Task.Slot}}` inside the environment
variable `REPLICATION_INSTANCE_ID`.

:::info
This value is commonly used to create a custom local workspace, as this value is different for every worker.
:::

You can add your custom environment variables like this:

```yaml
# WORKERS
group_docker_workers:
  - name: xxx-worker
    configuration:
      environment:
        CUSTOM_ENV: <custom value>
```

### Mount configs and secrets to workers

If you want to mount some config and/or secrets to your worker, you can follow the same documentation as any REGARDS
service.  
Check the [documentation](./swarm-volumes.md#mount-configs-and-secrets-to-services).

```yaml {1,7-8} title="Config file on worker example"
# Ensure the config file ALTITUDE_GRILLE_GAUSS.yml is defined inside mounts.yml

# WORKERS
group_docker_workers:
  - name: xxx-worker
    configs:
      - source: ALTITUDE_GRILLE_GAUSS.yml
        destination: /worker/workspace/datatypes/ALTITUDE_GRILLE_GAUSS.yml
    secrets:
    # same API
```

### Worker Configuration

The REGARDS team also creates their own workers with a Java + Spring cloud stream core. _This core is not yet
open-source._  
To allow such workers to use the [rs-config](../../../development/services/config/overview.md) microservice API, we've
created a special `config` property on the worker definition that allows to :

- create a configuration file inside rs-config files
- mount this file inside `/tmp/{{ worker.name }}.yml` inside the container.

```yaml
# WORKERS
group_docker_workers:
  - name: xxx-worker
    config:
      worker:
        tenants: "{{ global_regards.project_name }}"
```

The generated file attached to the  [rs-config](../../../development/services/config/overview.md) and the worker would
look like this:

```yaml
worker:
  tenants: project1
```

:::info When to use it?
If you do plan to deploy a Java REGARDS worker, you should prefer
to [mount a basic config file instead](#mount-configs-and-secrets-to-workers)
:::

### Ports

You can mount any port like this:

```yaml
# WORKERS
group_docker_workers:
  - name: xxx-worker
    ports:
      - "8080:8080"
```

If you deploy a Java worker build using [paketo Buildpack](https://paketo.io/), you can use open the `jdwp` port like
this, as it also provides the `BPL_DEBUG_ENABLED=true` environment variable:

```yaml
# WORKERS
group_docker_workers:
  - name: xxx-worker
    ports:
      - "8080:8080"
```

### Docker image customisation

By default, the Docker registry hosting your worker image will be the same as the one defined
in `group_docker_stack_domain`.
Also, the worker image name is retrieved from the `name` value (`xxx-worker` in this documentation).

You can override these configurations like this:

```yaml title="Example that fetches an image named nexus.mycompany.fr/yyy-worker:1.0"
# WORKERS
group_docker_workers:
  - name: xxx-worker
    # Stop using group_docker_stack_domain value
    docker_registry: nexus.mycompany.fr
    # Stop using name attribute value (here xxx-worker), but yyy-worker
    image: yyy-worker
    tag: 1.0
```

:::danger Image parameter
Do not override the image name if you have defined the `config` property (
see [Worker Configuration](#worker-configuration)).  
Use `image` parameter wisely, only when required.
:::

### Prometheus

When you configure the prometheus configuration object inside a worker, you are configuring how the Prometheus service
will reach your worker to fetch metrics.  
The value provided here is only used to create the Prometheus configuration file.

You can define the prometheus port and the `metrics_path`. If you do provide a port but not the `metrics_path`
parameter, default value will be `/actuator/prometheus`.

```yaml title="Prometheus will query all instances of xxx-worker with URL xxx-worker:9093/metrics"
# WORKERS
group_docker_workers:
  - name: xxx-worker
    prometheus:
      port: 9093
      metrics_path: /metrics
```
