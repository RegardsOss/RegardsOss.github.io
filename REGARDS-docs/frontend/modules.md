---
layout: classic-docs
title: Modules
short-title: Modules
categories:
  - frontend
---

### Purpose

Modules are created by node using `package.json` files. The rs-access `package.json` express several internal dependencies. That allows us to:

- provides cleanner interfaces with the minimal list of exposed services
- these dependencies are accessible from the outside using the module name `@regardsoss/<module name>` instead of using only ES6 paths (between 2 modules)
- expressing dependency inside the package.json of a module is not mandatory, because Webpack provides a dependency fallback, so when a module requires smth that is a expressed inside the package.json, webpack uses the node_modules of the global app instead.

### Create a new module

- add the corresponding new module inside `package.json`

```
"dependencies": {
    [..]
    "@regardsoss/<module name>": "0.0.1",
  }
```

- Now create the corresponding module

  ```
  cd <module type>
  mkdir <module name> && cd <module name>
  touch package.json readme.md src/main.js tests/main.ts
  ```

- Add the following to package.json

```
{
  "name": "@regardsoss/<module name>",
  "version": "0.0.1",
  "private": true,
  "description": "",
  "main": "src/main.js",
  "author": "CS-SI",
  "license": "GPL-3.0"
}
```

- To let you develop your new module with the auto-reload, you need to create a `npm link` between `webapp/node_modules/@regardsoss/<your new module>` with your source folder. Edit the file `scripts/bootstrap.sh` file with the following:

```
npm link web_modules/<module type>/<module name>
```

On the other hand, if you don't need Webpack auto reload, you can add your module with `npm  install <module path>`
