---
id: minio
title: MinIO
slug: /setup/swarm/advanced/minio/
sidebar_position: 6
---

This guide allows you to deploy a [MinIO service](https://min.io) thanks to your inventory.

## Configuration

Edit your inventory file `inventories/<your inventory>/group_vars/regards_nodes/main.yml` to add MinIO information:

```yaml
group_docker_stack_domain: regards-cnes.host.com

group_docker_cots:
  minio:
    tag: "{{ group_docker_tags.cots }}"
    admin: 9001
    client: 9000
    ssl:
      domain: "{{ group_docker_stack_domain }}"
      crt: "{{ group_docker_stack_domain }}.crt"
      key: "{{ group_docker_stack_domain }}.key"
    region: fr-regards-1
    key: xxxxxxxx
    secret: "{{ regards_vault.group_docker_cots.minio.regards.secret }}"
```

| Properties | Description                                                                               | default      |
|:-----------|:------------------------------------------------------------------------------------------|:-------------|
| admin      | Port to connect to MinIO admin dashboard                                                  |              |
| client     | Port to connect to S3 MinIO                                                               |              |
| ssl        | Optional. To configure TLS certificates for MinIO when accessing through public host name |              |
| region     | global region of the MinIO server                                                         | fr-regards-1 |
| key        | root admin user login                                                                     | regards      |
| secret     | root admin user password. Must be store inside [a Vault file](./ansible-vault.md)         | regardspwd   |

## Single node deployment

If you want to deploy only one node of MinIO and your swarm stack has several nodes, you need to add a nfs disk to
MinIO.   
To do so, edit your inventory file `inventories/<your inventory>/group_vars/regards_nodes/mounts.yml`

- add nfs definition and add it to minio conf

```yaml
group_docker_mounts:
  nfs:
    - name: minio-nfs
      config:
        [ ... nfs configuration ]
  [...]
  minio:
    - nfs: minio-nfs
      destination: /data-01
      [ ... mount configuration ]
```

To learn more about volume configuration, see [Mount volumes, configs... guide](swarm-volumes.md)

## Cluster deployment

If you want to deploy a MinIO cluster on your swarm stack, you need to provide the cluster url pattern as describe
in [MinIO documentation](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html#sequential-hostnames).

Here is some example with 4 nodes:

- node1 : regards-cnes-01.host.com
- node2 : regards-cnes-02.host.com
- node3 : regards-cnes-03.host.com
- node4 : regards-cnes-04.host.com

With these nodes, cluster url will be : `regards-cnes-0{1...4}.host.com/data-01`.

```yaml
group_docker_cots:
  minio:
    [...]
    global_service: true
    cluster_url: regards-cnes-0{1...4}.host.com/data-01
    [...]
```

| Properties     | Description                                                                                       | default |
|:---------------|:--------------------------------------------------------------------------------------------------|:--------|
| global_service | True to deploy a MinIO cluster on each swarm nodes                                                |  false  |
| cluster_url    | Cluster url pattern as describe in MinIO documentation. Needed when global_service is set to true |         |

## TLS Configuration

:::info Internal SSL
You should provide internal SSL certificates to allow MinIO replicates to communicate between each nodes
:::

To generate the internal certificate and key, you can
use [this MinIO tool](https://github.com/minio/minio/blob/master/docs/tls/README.md#generate-use-self-signed-keys-certificates).

For example:

- generate ssl_internal certificate and key with command :

```bash
./certgen-linux-amd64 -host 'regards-cnes-01.host.com,regards-cnes-02.host.com,regards-cnes-03.host.com,regards-cnes-04.host.com' -duration 8760h0m0s
```

- put these files inside folder `<inventory>/static/ssl/`
- edit MinIO configuration like this:

```yaml
group_docker_cots:
  minio:
    [...]
    ssl_internal:
      ca: minio-nodes.ca.crt
      crt: minio-nodes.crt
      key: minio-nodes.key
    [...]
```

## Multi-drive deployment

If you want to deploy with multiple drives (max of 2 drives for now) on each nodes, you have to define the local drive
source path (identical on each node).  
To do so, edit your inventory file `inventories/<your inventory>/group_vars/regards_nodes/mouts.yml`

- add drive mount definition

```yaml
group_docker_mounts:
  [...]
  minio:
    - local: true
      source: /mnt/minio-drive-1
      destination: /data-01
    - local: true
      source: /mnt/minio-drive-2
      destination: /data-02
```

To learn more about volume configuration, see [Mount volumes, configs... guide](swarm-volumes.md)

Then, you need to adapt the `cluster_url` provided to MinIO like this:

```yaml
group_docker_cots:
  minio:
    [...]
    cluster_url: regards-cnes-0{1...4}.host.com/data-0{1...2}
    [...]
```

MinIO will understand there is 4 nodes and 2 drives with such URL.
