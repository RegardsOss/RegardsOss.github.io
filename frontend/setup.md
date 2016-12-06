---
layout: classic-docs
title: Development setup and build
short-title: Setup and build
categories:
  - frontend
---

Open the webapp folder with a terminal:

```
cd path/to/folder/webapp/
```

Execute the following to link submodules inside `path/to/folder/webapp/web_modules/[data|modules|utils|view]/**` to the npm global user folder and then inside `webapp/node_modules/@regardsoss`

```
npm run bootstrap
```

Now, you can install dependencies and devDependencies

```
npm install
```

_Nota: By the end of the year_, when npm release a correct fix to `npm preinstall`, the `npm run-script bootstrap` will be renamed into `preinstall` and `npm install` would be sufficient.

# Production installation

```
cd path/to/folder/webapp/
chmod +x ./scripts/bootstrap.sh
npm run bootstrap
npm install --only=production
npm build:production
```

# Run options

### Run the frontend :

```
npm start
```

Then opens your browser at [http://localhost:3333/](http://localhost:3333/)  

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

### Run storybook :

Then opens your browser at <http://localhost:6006/>

```
npm run storybook:start
```
### Build storybook :

To export a static storybook inside `path/to/folder/webapp/reports/storybook/` folder:

```
npm run storybook:build
```

# Know issues

- `npm run bootstrap` is not cross platform and cannot be executed on Windows (except on Windows 10 Bash)

# Update

## Update dependencies and devDependencies

Execute the following:

```
npm update
```

When release, we hope to use the platform <https://greenkeeper.io/> to prevent drawback.

# Webpack build pipelines

Webpack offers several services to simplify our workflow.

## Webpack common configuration

All webpack configurations inherits from the common configuration.

- the main files of this REGARDS-frontend is `src/main.js`
- webpack resolves dependencies inside web_modules folder and inside node_modules.
- when a dependency is required by a package, webpack fallback to the node_modules of the frontend app
- js, jsx, css, js, json, jpg, woff, ttf, eot, svg are handled by their corresponding handler
- React is provided globally on all `jsx` files
