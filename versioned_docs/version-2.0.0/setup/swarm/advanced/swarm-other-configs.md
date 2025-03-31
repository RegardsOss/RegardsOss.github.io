---
id: microservices-configs
title: Microservices configs
slug: /setup/swarm/advanced/microservices-configs/
sidebar_position: 7.5
---

This page covers possibilities offered by our inventory that you can configure inside the inventory
file `inventories/<your inventory>/group_vars/regards_nodes/main.yml`.

### Security

You can configure JWT access token like this:

```yml
group_config_mservices:
  # Token secret (REGARDS API and Orders direct download links) - (64 characters max)
  jwt_secret: "{{ regards_vault.group_config_mservices.authentication.jwt_secret }}"
  jwt_key_hs256: "{{ regards_vault.group_config_mservices.authentication.jwt_key_hs256 }}"
  jwt_key_hs384: "{{ regards_vault.group_config_mservices.authentication.jwt_key_hs384 }}"
  jwt_key_hs512: "{{ regards_vault.group_config_mservices.authentication.jwt_key_hs512 }}"
  order_jwt_secret: "{{ regards_vault.group_config_mservices.authentication.order_jwt_secret }}"
  # Password to crypt DB secret (16 characters max)
  cipher_iv: "{{ regards_vault.group_config_mservices.authentication.cipher_iv }}"
```

| Path                                      | Type     | Description      | Constraints                                                                |
|:------------------------------------------|:---------|:-----------------|:---------------------------------------------------------------------------|
| `group_docker_mservices.jwt_secret`       | `String` | JWT secret       | Facultative. Recommended for production.                                   |
| `group_docker_mservices.jwt_key_hs256`    | `String` | JWT secret HS256 | Facultative. Recommended for production.                                   |
| `group_docker_mservices.jwt_key_hs384`    | `String` | JWT secret HS384 | Facultative. Recommended for production.                                   |
| `group_docker_mservices.jwt_key_hs512`    | `String` | JWT secret HS512 | Facultative. Recommended for production.                                   |
| `group_docker_mservices.order_jwt_secret` | `String` | JWT secret       | Facultative. Recommended for production. Used to authenticate order links. |
| `group_docker_mservices.cipher_iv`        | `String` | Cipher IV        | Facultative. 16 characters max. Recommended for production.                |

### Mail

Mail configuration used by microservices can be configured like this:

```yml
group_config_mservices:
  mail:
    host: smtprelay.regards.fr
    port: 25
    username: admin@regards.fr
    password: my vaulted password
    noreply: no-reply@regards.fr
```

| Path                                   | Type     | Description     | Constraints                                |
|:---------------------------------------|:---------|:----------------|:-------------------------------------------|
| `group_docker_mservices.mail.host`     | `String` | SMTP Host       | Facultative. Default: `rs-maildev`         |
| `group_docker_mservices.mail.port`     | `Int`    | SMTP port       | Facultative. Default: `1025`               |
| `group_docker_mservices.mail.username` | `String` | SMTP username   | Facultative. Empty by default              |
| `group_docker_mservices.mail.password` | `String` | SMTP password   | Facultative. Empty by default              |
| `group_docker_mservices.mail.noreply`  | `String` | No reply adress | Facultative. Default: `regards@noreply.fr` |

### Account password configuration

Mail configuration used by microservices can be configured like this:

```yml
group_config_mservices:
  password_config:
    regex: ^.+$
    info: Password must contains at least 1 character
```

| Path                                           | Type     | Description                                                |
|:-----------------------------------------------|:---------|:-----------------------------------------------------------|
| `group_docker_mservices.password_config.regex` | `Regex`  | Regex used by the backend service to validate new password |
| `group_docker_mservices.password_config.info`  | `String` | Password information displayed to users                    |

### Account and password validity

```yml
group_config_mservices:
  account_validity_in_days: 10
  account_password_validity_in_days: 10
```

| Path                                                       | Type  | Description                                                                                           |
|:-----------------------------------------------------------|:------|:------------------------------------------------------------------------------------------------------|
| `group_docker_mservices.account_validity_in_days`          | `Int` | Number of days before an account will be deactivated. If you provide 0, this check is disabled        |
| `group_docker_mservices.account_password_validity_in_days` | `Int` | Number of days before an account password must be generated. If you provide 0, this check is disabled |

### Token validity

```yml
group_config_mservices:
  access_token_validity: 2592000
```

| Path                                           | Type  | Description                    |
|:-----------------------------------------------|:------|:-------------------------------|
| `group_docker_mservices.access_token_validity` | `Int` | Number of seconds a token last |

### REGARDS Microservice Certificate Authorities

You can load additional certificate authorities into REGARDS JVM like this:

```yml
group_config_mservices:
  ca_certificates:
    - AC_SOME_AUTHORITY.crt
    - AC_ANOTHER_AUTHORITY.crt
```

Related files must be located inside `<your inventory>/static/ca-certificates`, like this:

```bash
$ cd 'inventories/<your inventory>/static/ca-certificates'
$ ls
AC_SOME_AUTHORITY.crt
AC_ANOTHER_AUTHORITY.crt
```

### REGARDS Proxy

If REGARDS microservices need a proxy to access to another system, you can configure it:

```yml
group_config_mservices:
  proxy:
    url: http://myproxy.regards.fr
    username: regards
    password: password
```

| Path                                    | Type     | Description    | Constraints                        |
|:----------------------------------------|:---------|:---------------|:-----------------------------------|
| `group_docker_mservices.proxy.url`      | `String` | Proxy URL      | Facultative, false, or a valid URL |
| `group_docker_mservices.proxy.username` | `String` | Proxy username | Facultative. Empty by default      |
| `group_docker_mservices.proxy.password` | `String` | Proxy password | Facultative. Empty by default      |

### REGARDS session

You can configure REGARDS session retention duration like this :

```yml
group_config_mservices:
  session:
    retention_days: 30
    dashboard_retention_days: 90
```

| Path                                                      | Type  | Description                                                                              |
|:----------------------------------------------------------|:------|:-----------------------------------------------------------------------------------------|
| `group_docker_mservices.session.retention_days`           | `Int` | Number of retention days of inactive sessions (agent side) in days. Default to 5 days    |
| `group_docker_mservices.session.dashboard_retention_days` | `Int` | Number of retention days of inactive sessions (manager side) in days. Default to 30 days |
