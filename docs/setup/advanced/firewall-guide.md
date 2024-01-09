---
id: web-application-firewall
title: Web Application Firewall
slug: /setup/swarm/advanced/web-application-firewall/
---

### Microservices

If you have a Web Application Firewall between REGARDS and the Internet, you can use the following table to set up a
whitelist
or a blacklist to restrict access to microservices that are not used by users while they browse the User app.

| REGARDS MicroServices | Reachable by browsing on User app | Should be blocked by firewall | Not proxyfied |
|-----------------------|-----------------------------------|-------------------------------|---------------|
| rs-config             |                                   |                               | Yes           |
| rs-registry           |                                   |                               | Yes           |
| rs-gateway            | Yes                               |                               |               |
| rs-admin-instance     | Partially                         | Yes                           |               |
| rs-admin              | Partially                         | Yes                           |               |
| rs-authentication     | Yes                               | Yes                           |               |
| rs-dam                | Partially                         | Yes                           |               |
| rs-notifier           |                                   | Yes                           |               |
| rs-fem                |                                   | Yes                           |               |
| rs-catalog            | Yes                               |                               |               |
| rs-access-instance    | Yes                               |                               |               |
| rs-access-project     | Yes                               |                               |               |
| rs-storage            |                                   | Yes                           |               |
| rs-order              | Yes                               |                               |               |
| rs-ingest             |                                   | Yes                           |               |
| rs-dataprovider       |                                   | Yes                           |               |
| rs-worker-manager     |                                   | Yes                           |               |
| rs-delivery           |                                   | Yes                           |               |
| rs-lta-manager        |                                   | Yes                           |               |
| rs-processing         |                                   | Yes                           |               |
| rs-file-catalog       |                                   | Yes                           |               |
| rs-file-access        |                                   | Yes                           |               |
| rs-file-packager      |                                   | Yes                           |               |

If a microservice should be blocked by the Web Application Firewall, you can add `/<microservice name>/` to your
blacklist, which will block any call to `https://host.com/api/v1/<microservice name>/some/path`.

Microservices marked as reachable by browsing on **User app** means they expose an alternative microservice
name `/<microservice name>-public/`, which means users on the User app side will reach
`https://host.com/api/v1/<microservice name>-public/some/path` and
not `https://host.com/api/v1/<microservice name>/some/path` (notice the `-public` postfix).  
You can safely blacklist `/<microservice name>/` as users on User app are hitting `/<microservice name>-public/`.

:::info Unproxyfied services
Microservices CONFIG and REGISTRY are not available through the gateway as only REGARDS microservices needs to contact
them.
:::

### Endpoints

You should block the following path in your Web Application Firewall:

| Endpoint path | Description                                 |
|---------------|---------------------------------------------|
| /actuator/    | Provides prometheus statistics, healthiness |
| /swagger-ui/  | Provides endpoints descriptor               |
| /admin/       | REGARDS Admin HMI                           |

