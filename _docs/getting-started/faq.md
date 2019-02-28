---
layout: classic-docs
title: Frequently Asked Questions
short-title: FAQ
---

{% include toc.md %}

## Microservices are not accessible by IHMs

In some cases, when you try to access REGARDS IHMs, you may have trouble to access microservices fonctionalities. It appears with an IHM printing without any theme (blank background) and with an error during authentication like `Server not accessible`.

This maybe due to Cross-origin request. This problem occurs when the domain of the IHMs are different with the domain of the gateway microservice. Indeed, all REGARDS microservices are accessed trough gateway microservice.

To correct this issue, you have to configure the REGARDS IHM to ensure that the domain of the gateway microservice is the same as the IHM one.

If you access IHM trough http://regards.domain, your gateway microservice must be accessible on the same domain name and you can configure in `/install/directory/REGARDS/www/config/StaticConfiguration.js`.

```javascript
GATEWAY_HOSTNAME = 'http://regards.domain'
```

This web server configuration is done with the step "Reverse Proxy" in our [Server configuration - Reverse Proxy](/getting-started/configuration/#httpd) guide. The httpd or Nginx web server supply access to IHM and to Gateway in the same vhost.

```bash
ProxyPass "/api/v1/" -> For gateway
ProxyPass "/" -> For IHMs
```

## IHMs doesn't appear

REGARDS use new features of HTML5 and CSS3, so your web browser have to be updated recently. Here under are the minimum version of
web browsers compatible :

    - `Google chrome`: 64.0
    - `Firefox` : 58.0
    - `Safari` : 11.1
    - `Microsoft Edge` : 16.0
    - `Microsoft Internet Explorer` : Not compatible
