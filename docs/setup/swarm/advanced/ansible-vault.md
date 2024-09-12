---
id: ansible-vault
title: Ansible Vault
slug: /setup/swarm/advanced/ansible-vault
sidebar_position: 8
---

Your inventory may contain some passwords that you do not want to share under source control.  
[Ansible Vault](https://docs.ansible.com/ansible/latest/user_guide/vault.html) allows you to crypt variable values and
files content inside your inventory.  
After that, you will need to add ` --ask-vault-pass` when running `ansible-playbook` to let Ansible decrypt crypted
values on the fly.

:::info Why
You can encrypt the content of a file, like the **certificate key**, or **create an inventory file** to store encrypted
properties / values (password, IP...).
:::

:::danger vi usage
Ansible Vault uses the `vi` program to write the content of the file.  
Don't forget to press `i` before writing inside the file, then save the content by pressing `Escape`, then input `:wq`
and finally press `Enter`.
:::

## Create file

```bash
ansible-vault create --ask-vault-pass <file.to.encryt>
```

This command asks you for the vault password, then opens the vi program to let you write the content.  

The file `<file.to.encryt>` must not exist before running this command.

## Edit encrypt file

You can also edit an encrypt file.

```bash
ansible-vault edit --ask-vault-pass <file.encryted>
```
