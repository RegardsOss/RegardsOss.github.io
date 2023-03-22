---
id: regards-https
title: Securise using HTTPS
slug: /setup/swarm/advanced/regards-https/
---

This guide walks you through the configuration to expose REGARDS through HTTPS.

- If you have a `p12` file, use these commands to generate `crt` and `key` files.
```bash
openssl pkcs12 -in <your domain>.p12 -nocerts -out         <your domain>.key
openssl pkcs12 -in <your domain>.p12 -clcerts -nokeys -out <your domain>.crt 
```
- If the `<your domain>.key` file contains `BEGIN ENCRYPTED PRIVATE KEY`, you need to remove the encryption by doing:
```bash
# Rename the file
mv <your domain>.key <your domain>.encrypted.key
# Remove the encryption by giving your temporary pass phrase
openssl rsa -in <your domain>.encrypted.key -out <your domain>.key
```
- Create the folder `<inventory>/group_vars/regards_nodes/files/ssl` in your inventory then open this folder using your terminal 

- Using [Ansible Vault - Encrypt file](../ansible-vault/#encrypt-file), generates an encrypted version of the `<your domain>.key` file
- Copy the `<your domain>.key` file without any Ansible Vault encryption (it's not a sensitive information)
- Edit your inventory file `inventories/<your inventory>/group_vars/regards_nodes/main.yml` 
```yaml
group_docker_mservices:
  [...]
  front:
    protocol: https
    host: <your domain>
    port: 443
    tag: "{{ group_docker_tags.front }}"
    ssl:
      crt: <your domain>.crt
      key: <your domain>.key
```
That's it ! Deploy using Ansible then connect to REGARDS using `https://<your domain>`
