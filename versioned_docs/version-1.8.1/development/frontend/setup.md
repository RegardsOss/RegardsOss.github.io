---
id: frontend-introduction-setup
title: Development setup and build
sidebar_label: Setup
slug: /development/frontend/introduction/setup/
---


### Requirements

-	node v8.10
-	npm v5.7.1 (npm i -g npm to upgrade)

:::caution
As REGARDS frontend is developed around two main libraries, [React](https://reactjs.org) and [Redux](http://redux.js.org), we highly recommand new developers to start by watching the here under [Egghead](https://egghead.io) videos to learn the basics of these two libraries.
- [React](https://egghead.io/courses/react-native-fundamentals)
- [Redux](https://egghead.io/courses/getting-started-with-redux)
 
New developers can also check at the [Material-ui](https://v0.material-ui.com/#/components/app-bar) library which is used to design all components of the REGARDS frontend.
:::

## Quick setup

Clone the `rs-frontend` repository, available [on GitHub](https://github.com/RegardsOss/regards-frontend) and open the webapp folder in cloned repository using your terminal:

```sh
cd regards-frontend/webapp
```
Then install all dependencies, and produce all required webpack DLL:

```sh
npm install
```

*Please note that, after a new GIT branch checkout and when installed Node version is greater than 8, it may be required to delete all package-lock.json in project. It can be done using the following commands:*
```sh
cd webapp
find . -name 'package-lock*' -exec rm {} \;
```

### Compile for production deployment

This two commands will generate the entire webapp for production environement with all plugins compiled.
The result is in the `dist/prod` directory. You can ignore this step if you want to produce a production build.

```sh
npm run build:production
npm run build:plugins
```

**Congratulation**, you're now ready to launch the application !

### Run for developement

The command below allow you to run the frontend webapp in development mode with hot sources reload.
However, you need to override the REGARDS gateway address by replacing `http://172.26.47.107` by the address
of your local REGARDS gateway instance in the `/webapp/webpack.dev.preprod.config.js` file. Then you can launch :

```sh
npm run start:withpreprod
```

Optionally, you may also build the plugins, using the following command in webapp folder:

```sh
./scripts/build-all-plugins dev all
```

**Congratulation**, you're now ready to access to your local front instance at the address [localhost:3333](http://localhost:3333).

Notes:
-_Some REGARDS NPM tasks provide runnable using the proxy mock server. You may want to look deeper in those tasks when developping new features or without backend_
-_REGARDS NPM tasks are currently defined for continous integration servers at [CS SI](https://www.c-s.fr/)_

### Run tests

The following command runs the app tests and create reports in `webapp/reports/mocha/` folder:

```sh
npm test
```

### Run test coverage

The following command runs application coverage (lcov, xunit) and reports in `webapp/reports/coverage/` folder:

```sh
npm run test:coverage
```

### Lint

The following command lint the REGARDS frontend application code and fixes automatically all formatting problems.

```sh
npm run lint:fix
```

The developers should always run that comment before committing code files.

### Known issues

When you install this application, all these NPM warnings can be safely ignored :  
- `npm WARN enoent SKIPPING OPTIONAL DEPENDENCY: ENOENT`
- `npm WARN optional SKIPPING OPTIONAL DEPENDENCY`
- `npm WARN enoent ENOENT: no such file or directory`
- `npm WARN <some dependency>@<version> requires a peer of <another dependency>@<version> but none is installed. You must install peer dependencies yourself.`
- `npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform`
- `npm WARN rollback Rolling back <some dependency>@<version> failed (this is probably harmless)`
