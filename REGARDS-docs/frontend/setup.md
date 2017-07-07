---
layout: classic-docs
title: Development setup and build
short-title: Setup and build
categories:
  - frontend
---

# Requirements

You shall
- use Linux or macOS
- be root on your computer
- having npm version between v3 and v4
- having node version between v6 and v7

The latest version of npm (v5) and node (v8) are not stable enough to be used with REGARDS. But when their issues will be fixed, the npm run-script `bootstrap` will be renamed into `preinstall` and `npm install` will be sufficient.


# Local installation

Clone the `rs-frontend` repository and open the webapp folder using your terminal:

```
cd path/to/folder/webapp/
```

Execute the following to link submodules inside `path/to/folder/webapp/web_modules/[data|modules|utils|...]/**` to the npm global user folder and then inside `webapp/node_modules/@regardsoss`. It allows you to edit these npm modules with auto reload.

```
npm run bootstrap
```

Now, you can install dependencies, devDependencies and compile all required webpack DLL:

```
npm install
```

**Congratulation**, you're now ready to launch the frontend.

# Run options

### Run the frontend :

```
npm start
```

Then opens your browser at [http://localhost:3333/](http://localhost:3333/)  

### Production build

```
npm build:production
```

### Run tests :

It creates a report in `path/to/folder/webapp/reports/mocha/` folder:

```
npm test
```

### Run test:coverage :

To run tests with coverage - creates coverage reports (lcov, xunit) inside `path/to/folder/webapp/reports/coverage/` folder:

```
npm run test:coverage
```

### Lint :

You shall lint the entire app [using our Eslint](/frontend-modules/eslint-config-es6-rules) before commiting:
```
npm run lint:fix
```

# Know issues

- `npm run bootstrap` is not cross platform and cannot be executed on Windows (except on Windows 10 Bash)
- `./scripts/bootstrap.sh` is not executable? Run the following command: `chmod +x ./scripts/bootstrap.sh`


# Webpack build pipelines

Webpack offers several services to simplify our workflow.

## Webpack common configuration

All webpack configurations inherits from the common configuration.

- the main files of this REGARDS-frontend is `src/main.js`
- webpack resolves dependencies inside web_modules folder and inside node_modules.
- when a dependency is required by a package, webpack fallback to the node_modules of the frontend app
- js, jsx, css, js, json, jpg, woff, ttf, eot, svg are handled by their corresponding handler
- React is provided globally on all `jsx` files
