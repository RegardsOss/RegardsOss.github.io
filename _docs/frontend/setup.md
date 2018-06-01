---
layout: classic-docs
title: Development setup and build
short-title: Setup and build
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Requirements](#requirements)
- [Quick setup](#quick-setup)
- [Compile for production deployment](#compile-for-production-deployment)
- [Run for developement](#run-for-developement)
- [Run tests](#run-tests)
- [Run test:coverage](#run-test-coverage)
- [Lint](#lint)
- [Known issues](#known-issues)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Requirements

-	node v8.10
-	npm v5.7.1 (npm i -g npm to upgrade)

> **Important**  
> As REGARDS frontend is developed around two main libraries, [React](https://facebook.github.io/react/){:target="_blank"} and [Redux](http://redux.js.org){:target="_blank"}, we highly recommand new developers to start by watching the here under [Egghead](https://egghead.io) videos to learn the basics of these two libraries.
>   - [React](https://egghead.io/courses/react-native-fundamentals){:target="_blank"}
>   - [Redux](https://egghead.io/courses/getting-started-with-redux){:target="_blank"}  
>  
>New developers can also check at the [Material-ui](http://www.material-ui.com/#/components/app-bar){:target="_blank"} library which is used to design all components of the REGARDS frontend.

# Quick setup

Clone the `rs-frontend` repository, available here for [GitHub](https://github.com/RegardsOss/regards-frontend) and open the webapp folder in cloned repository using your terminal:

```sh
cd regards-frontend/webapp
```
Then install all dependencies, and produce all required webpack DLL:

```sh
npm install
```

## Compile for production deployment

This two commands will generate the entire webapp for production environement with all plugins compiled.
The result is in the `dist/prod` directory.

```
npm run build:production
npm run build:plugins
```

**Congratulation**, you're now ready to launch the application.

## Run for developement

The command below allow you to run the frontend webapp in development mode with sources hot reload.
To do so, you have to define the regards gateway server address by replacing `http://localhost:9300` by the address 
of your REGARDS gateway microservice in the command line below.

```
npm run start:local --rsgateway=http://localhost:9300
```
Optionally, you may also build the plugins, using the following command in webapp folder:
```sh
./scripts/build-all-plugins dev all
```
**Congratulation**, you're now ready to access yout local development server in a browser at the address `http://localhost:3333`.

Notes:
* _It is also possible to modify the REGARDS webpack configurations_
* _Some REGARDS NPM tasks provide runnable using the proxy mock server. You may want to look deeper in those tasks when developping new features or without backend_
* _REGARDS NPM tasks are currently defined for continous integration servers at [CS SI](https://www.c-s.fr/)_


## Run tests

The following command runs application tests and reports in `webapp/reports/mocha/` folder:

```
npm test
```

## Run test coverage

The following command runs application coverage (lcov, xunit) and reports in `webapp/reports/coverage/` folder:

```
npm run test:coverage
```

## Lint

The following command lint the REGARDS frontend application code and fixes automatically all formatting problems.

```
npm run lint:fix
```

The developers should always run that comment before committing code files.

## Known issues

When you install this application, all these NPM warnings can be safely ignored :  
- `npm WARN enoent SKIPPING OPTIONAL DEPENDENCY: ENOENT`
- `npm WARN optional SKIPPING OPTIONAL DEPENDENCY`
- `npm WARN enoent ENOENT: no such file or directory`
- `npm WARN <some dependency>@<version> requires a peer of <another dependency>@<version> but none is installed. You must install peer dependencies yourself.`
- `npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform`
- `npm WARN rollback Rolling back <some dependency>@<version> failed (this is probably harmless)`