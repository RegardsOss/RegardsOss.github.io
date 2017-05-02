---
layout: enterprise
title: "Custom Root CA"
category: [resources]
order: 4
description: "Using a custom Root Certificate Authority (CA) with CircleCI Enterprise."
hide: true
---

## Supporting Custom Root CA

Some installation environments use internal root certificate authorities for encrypting
and establishing trust between servers.  If using a root certificate, you may need to
imported and mark it as a trusted certificate at CircleCI Enterprise instances.
CircleCI will respect such trust when communicating with GitHub and webhook api calls.


You can establish that trust by ssh into the Services box machine as `ubuntu` and running
the following script

```
$ # Let's trust the root CA -- but first confirm that the root CA isn't trusted
$ curl -I https://ghe.example.com/
$ # The previous command should fail with root CA error
$ # Now let's add it to the trusted store
$ sudo ccie-ssl-ca-certificate-install internal_root_ca.crt
$ # or something like `curl -k https://path_to_internal_crt | sudo
ccie-ssl-ca-certificate-install
$ # Now confirm that the cert got imported correctly -- this time it should work
$ curl -I https://ghe.example.com/
```

Then navigate to the system console at port 8800 - now you can change the
protocol to upgraded, you can change the protocol to "HTTPS (TLS/SSLEnabled)"
setting.  When trying "Test GitHub Authentication" you should get Success now
rather than x509 related error.

New builders deployed from now on will automatically trust this root CA as well.
