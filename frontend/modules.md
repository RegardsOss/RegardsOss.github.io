---
layout: classic-docs
title: Modules
short-title: Modules
categories:
  - frontend
---

Modules are created by node using `package.json` files. The rs-access `package.json` express several internal dependencies. That allows us to:

- provides cleanner interfaces with the minimal list of exposed services
- these dependencies are accessible from the outside using the module name `@regardsoss/<module name>` instead of using only ES6 paths (between 2 modules)
- expressing dependency inside the package.json of a module is not mandatory, because Webpack provides a dependnecy fallback, so when a module requires smth that is a expressed inside the package.json, webpack uses the node_modules of the global app instead.

# Create a new module

- add the corresponding new module inside `package.json`

```
"dependencies": {
    [..]
    "@regardsoss/plugins": "0.0.1",
  }
```

- add a new local typing defintion inside `typings.json` :

```
{
  "globalDependencies": {
    "@regardsoss/admin": "file:./web_modules/modules/admin/index.d.ts",
    [..]
  },
  [or]
  "dependencies": {
    "@regardsoss/access-rights": "file:./web_modules/utils/access-rights/index.d.ts",
  }
}
```

On typings construction, with `npm run postinstall`, typings will crash if the dependency that you set inside dependendencies is a globalDependencies.

- Now create the corresponding module

  ```
  cd <module type>
  mkdir <module name>
  touch package.json readme.md index.d.ts src/main.ts
  ```

- Add the following to package.json

```
{
  "name": "@regardsoss/<module name>",
  "version": "0.0.1",
  "private": true,
  "description": "",
  "main": "src/main.ts",
  "author": "CS-SI",
  "license": "ISC"
}
```

- At least, add the following to index.d.ts

```
declare module "@regardsoss/<module name>" {
  // Define here object that are accessible for the outside of the module
}
```

- There are several ways to link your app with your new module. If you want to develop with the auto-reload, you need to `npm link` your app with your modules. Edit the scripts/bootstrap.sh file to add the corresponding command.

```
npm link web_modules/<module type>/<module name>
```

If you don't auto reload, you can build your module with `cd web_modules/<module type>/<module name> && npm install @regardsoss/<module name> -g`

- Everytime you make a modification of the application typing, you need to rebuild it :

  ```
  npm run typings:reset
  ```
