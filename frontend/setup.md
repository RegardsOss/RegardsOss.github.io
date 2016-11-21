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
chmod +x ./scripts/bootstrap.sh
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

To run the frontend - then opens your browser at <http://localhost:3333/> :

```
npm run start
```

To run tests - creates a report in `path/to/folder/webapp/reports/mocha/` folder:

```
npm run test
```

To run storybook - then opens your browser at <http://localhost:6006/>

```
npm run storybook:start
```

To run tests with coverage - creates coverage reports (lcov, xunit) inside `path/to/folder/webapp/reports/coverage/` folder:

```
npm run test:coverage
```

To export a static storybook inside `path/to/folder/webapp/reports/storybook/` folder:

```
npm run storybook:build
```

# Know issues

- JSDoc is not compatible with Typescript
- Sonar is not compatible with Typescript
- mocha-webpack fails to create HTML coverage files with Typescript
- `npm run bootstrap` is not cross platform and cannot be executed on Windows (except on Windows 10 Bash)

# Update

## Update dependencies and devDependencies

Execute the following:

```
npm update
```

When release, we hope to use the platform <https://greenkeeper.io/> to prevent drawback.

## Update Typings

Typings from Typescript are outdated every ~3 weeks. At the end of `npm install`, if you encouter the following:

```
> rm -rf typings && typings install

typings WARN deprecated 2016-09-25: "registry:dt/node#6.0.0+20160919063032" is deprecated (updated, replaced or removed)
```

You can update that Typing with the following command:

```
npm run typings dt~node
```

You need to provides the `dt~` prefix to specify that you want to update using the [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) repository.

# Webpack build pipelines

Webpack offers several services to simplify our workflow.

## Webpack common configuration

All webpack configurations inherits from the common configuration.

- the main files of this REGARDS-frontend is `src/main.tsx`
- webpack resolves dependencies inside web_modules folder and inside node_modules.
- when a dependency is required by a package, webpack fallback to the node_modules of the frontend app
- Typescript files are handled using a pipeline that

  - first use ts-loader to translate Typescript into ES6
  - then bable translates ES6 into ES5

- css, js, json, jpg, woff, ttf, eot, svg are handled by their corresponding handler
