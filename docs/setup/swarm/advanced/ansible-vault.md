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

## Encrypt inventory value

```bash
ansible-vault encrypt_string --ask-vault-pass '<the password to crypt>'
```

Ansible will asks you two times your Vault password. Type your Vault password and get your encrypted value :

```bash
New Vault password: 
Confirm New Vault password:
!vault |
          $ANSIBLE_VAULT;1.1;AES256
          6336633533303433346562653239613162613835643230....
          66333964366631333331653166633634366563343562376562336435626330303663
Encryption successful
```

Save the value into your inventory. Let's say that was the Postgres instance password we crypted:

```yaml
group_config_mservices:
  [ ... ]
  postgres:
    instance:
      host: database-inst.cnes.fr
      port: 5432
      user: <some user>
      password: !vault |
        $ANSIBLE_VAULT;1.1;AES256
        39353136383065313730383734653439663330313663653761353434663935653033373833333830
        3936356462383664616563633732623934643838383065300a646462616265316232623336376336
        34373432613662633436626233616262653037643065616564336130393762653037343032396532
        3464393534663433660a313530376634393864366233633561326338356463366532396566636361
        65313136633339333161666238366239653639383431336634373236323932313036
      db: <instance database name>
```

Well done! You can now place encrypted content (but never commit your Vault password) under source control and share it
more safely.

If you need to, you can check the value is correctly accessible on the fly using vault password:

```
ansible --ask-vault-pass -m ansible.builtin.debug all -a var="group_config_mservices" -i inventories/<inventory name>/
```

## Encrypt file

You can also encrypt the content of a file.

```bash
ansible-vault create --ask-vault-pass <file.to.encryt>
```

This command asks you for the vault password, then opens the vi program to let you write the content.  
Don't forget to press `i` before writing inside the file, then save the content by pressing `Escape`, then input `:wq`
and finally press `Enter`

The file `<file.to.encryt>` must not exist before running this command.
