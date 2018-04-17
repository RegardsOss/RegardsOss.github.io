---
layout: classic-docs
title: Development setup and build
short-title: Setup and build
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Requirements](#requirements)
- [Local installation](#local-installation)
- [Run options](#run-options)
  - [Production build](#production-build)
  - [Run tests](#run-tests)
  - [Run test:coverage](#run-testcoverage)
  - [Lint](#lint)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Requirements

You should
* use Unix or Linux based operating system. Windows systems may also work but no support is provided on those platforms
* be able connecting as super user on your computer
* have an installed npm version  greater than or equal to 5.7.1
* have an installed node version greater than or equal to 8.10.0

> **Important**  
> As REGARDS frontend is developed around two main libraries, [React](https://facebook.github.io/react/){:target="_blank"} and [Redux](http://redux.js.org){:target="_blank"}, we highly recommand new developers to start by watching the here under [Egghead](https://egghead.io) videos to learn the basics of these two libraries.
>   - [React](https://egghead.io/courses/react-native-fundamentals){:target="_blank"}
>   - [Redux](https://egghead.io/courses/getting-started-with-redux){:target="_blank"}  
>  
>New developers can also check at the [Material-ui](http://www.material-ui.com/#/components/app-bar){:target="_blank"} library which is used to design all components of the REGARDS frontend.

# Local installation

Clone the `rs-frontend` repository, available here for [GitHub](https://github.com/RegardsOss/regards-frontend) and open the webapp folder in cloned repository using your terminal:

```sh
cd regards-frontend/webapp
```
Then install all dependencies, and produce all required webpack DLL:

```sh
npm install
```

**Congratulation you're now ready to launch the frontend.**

Optionally, you may also build the plugins, using the following command in webapp folder:
```sh
./scripts/build-all-plugins dev all
```

# Run options

Run frontend with real backend microservices :
```
npm start:*
```
Here you will have to configure a runner for your server URLs. It implies:
* Adding a new task in webapp/package.json (likely to be named start:with-my-server for instance)
* Defining its content as something like:
```sh
webpack-dev-server --progress --config webpack.dev.myserver.config.js
```
* Pasting the `webpack.dev.myserver.config.js` from `webpack.dev.vmperf.config.js` to provide your own GATEWAY_HOSTNAME URL, pointing out to the backend instance.

After that you may run in terminal the following command:
```sh
npm start:with-my-server
```
Finally open a tab in your favorite browser at URL 'localhost:3333'. REGARDS portal UI should now be visible.

Notes:
* _It is also possible to modify the REGARDS webpack configurations_
* _Some REGARDS NPM tasks provide runnable using the proxy mock server. You may want to look deeper in those tasks when developping new features or without backend_
* _REGARDS NPM tasks are currently defined for continous integration servers at [CS SI](https://www.c-s.fr/)_

## Production build

```
npm build:production
```

## Run tests

The following command runs application tests and reports in `webapp/reports/mocha/` folder:

```
npm test
```

## Run test:coverage

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
