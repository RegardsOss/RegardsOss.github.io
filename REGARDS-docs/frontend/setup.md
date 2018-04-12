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
  - [Run tests :](#run-tests-)
  - [Run test:coverage :](#run-testcoverage-)
  - [Lint :](#lint-)
- [Know issues](#know-issues)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Requirements

You shall
- use Linux or macOS
- be root on your computer
- having npm version above 5.8.0 (5.8.0 presents a bug and should be used)
- having node version greater than or equal to 9.8.0

> **Important**  
> As REGARDS frontend is developped around two main libraries, [React](https://facebook.github.io/react/){:target="_blank"} and [Redux](http://redux.js.org){:target="_blank"}, we highly recommand new developers to start by watching the here under [Egghead](https://egghead.io) videos to learn the basics of these two libraries.
>   - [React](https://egghead.io/courses/react-native-fundamentals){:target="_blank"}
>   - [Redux](https://egghead.io/courses/getting-started-with-redux){:target="_blank"}  
>  
>New developers can also check at the [Material-ui](http://www.material-ui.com/#/components/app-bar){:target="_blank"} library which is used to design all components of the REGARDS frontend.
>Check [lodash fp](https://github.com/lodash/lodash/wiki/FP-Guide) to understand how we write functionnal programming on REGARDS (using lodash *immutable auto-curried iteratee-first data-last methods*)

# Local installation

Clone the `rs-frontend` repository (available here for GitHub: https://github.com/RegardsOss/regards-frontend) and open the webapp folder using your terminal:

```sh
cd webapp
```
Then install all dependencies, devDependencies and compile all required webpack DLL:

```sh
npm install
```

**Congratulation you're now ready to launch the frontend.**

Optionally, you may also build the plugins, using the following command in webapp folder:
```sh
./scripts/build-all-plugins
```

# Run options


Run frontend with real backend microservices :
```
npm start
```

Run frontend with mocked micrservices (the real microservices don't need to be available with this mode) :
```
npm run start:withmock
```

Then opens your browser at :
 - portal : [http://localhost:3333/](http://localhost:3333/){:target="_blank"}
 - admin instance : [http://localhost:3333/admin](http://localhost:3333/admin){:target="_blank"} login : regards-admin@c-s.fr / root_admin
 - admin projet : [http://localhost:3333/admin/project1](http://localhost:3333/admin/project1){:target="_blank"} login : regards-admin@c-s.fr / root_admin
 - user projet : [http://localhost:3333/user/project1](http://localhost:3333/user/project1){:target="_blank"} login : regards-admin@c-s.fr / root_admin

## Production build

```
npm build:production
```

## Run tests :

It creates a report in `path/to/folder/webapp/reports/mocha/` folder:

```
npm test
```

## Run test:coverage :

To run tests with coverage - creates coverage reports (lcov, xunit) inside `path/to/folder/webapp/reports/coverage/` folder:

```
npm run test:coverage
```

## Lint :

You shall lint the entire app [using our Eslint](/frontend-modules/eslint-config-es6-rules) before commiting:
```
npm run lint:fix
```

# Know issues

- `npm run bootstrap` is not cross platform and cannot be executed on Windows (except on Windows 10 Bash)
- `./scripts/bootstrap.sh` is not executable? Run the following command: `chmod +x ./scripts/bootstrap.sh`
