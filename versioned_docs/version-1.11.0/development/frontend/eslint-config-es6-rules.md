---
id: frontend-introduction-eslint
title: REGARDS ESLint rules
sidebar_label: Lint
slug: /development/frontend/introduction/eslint/
---


## Presentation

The module `@regardsoss/eslint-config-es6-rules` (webapp/eslint-config-es6-rules/) provides REGARDS' ESLint configuration. It is referenced by root `webapp/.eslintrc` file, which is the root ESLint configuration file for REGARDS front-end project.

## Usage

We export here under ESLint configurations for your usage.

| rules package        | import mode   | comment                         |
| -------------------- | ------------- | ------------------------------- |
| eslint               | `recommended` | Standard Javascript rules provided by eslint | 
| eslint-config-airbnb |      `all`    | Additional standard and ES6 Javascript rules |
| plugin:react         | `recommended` | Specific rules for react library |
| plugin:react-perf    | `recommended` | Specific good practices rules for react library |
| plugin:lodash        | `recommended` | Specific rules for lodash library |
| plugin:promise       | `recommended` | Enforce best practices for JavaScript promises |


To use our configuration package add the code here under to your `.eslintrc` configuration file

```json
{
  "parser": "babel-eslint",
  "extends": [
    "@regardsoss/eslint-config-es6-rules"
  ]
}
```

You need to add the following dependencies to your package.json : 
```json
{
  "eslint": "^5.9.0",
  "eslint-config-airbnb": "~17.1.0",
  "eslint-plugin-import": "~2.14.0",
  "eslint-plugin-jsx-a11y": "~6.1.2",
  "eslint-plugin-lodash": "^3.1.0",
  "eslint-plugin-mocha": "^5.2.0",
  "eslint-plugin-promise": "^4.0.1",
  "eslint-plugin-react": "~7.11.1",
  "eslint-plugin-react-perf": "^2.0.9"
}
```

## Imported rules

In the next sections you can find for each rules package the custom configuration made for REGARDS project.
By default, all rules are imported without modification from each package the references rules here are disabled or modified.

### eslint rules

To see all javascript rules set by eslint : http://eslint.org/docs/rules/

Special configuration for eslint rules :

| rule               | Configuration | comment                         |
| ------------------ | ------------- | ------------------------------- |
| func-names         | `Disabled`    | Allow anonymous functions      |
| global-require     | `Disabled`    | |
| max-len            | `Disabled`    | |
| no-console         | `Disabled`    | |
| spaced-comment     | `Disabled`    | |
| no-unused-vars     | `Activated`   | Do not check arguments. Ignore unused variable on functions arguments |
| no-confusing-arrow | `Disabled`    | |
| no-warning-comments | `Activated`  | Raise a warning if a TODO or FIXME is find in comments |
| semi               | `Activated`   | Disallows semicolons as the end of statements (except to disambiguate statements beginning with [, (, /, +, or -) |
| no-mixed-operators | `Activated`   |  |
| prefer-destructuring | `Activated`   |  |
| function-paren-newline | `Disabled`   |  |


### eslint-config-airbnb

To see all javascript rules set by eslint-config-airbnb : https://github.com/airbnb/javascript

Special configuration for eslint-config-airbnb rules :

| rule                               | Configuration | comment                         |
| ---------------------------------- | ------------- | ------------------------------- |
| import/no-extraneous-dependencies  | `Disabled`    |   |
| import/no-named-as-default         | `Disabled`    |   |
| import/no-named-as-default-member  | `Disabled`    |   |
| import/prefer-default-export  | `Disabled`    |   |
| import/named  | `Disabled`    |   |
| import/no-commonjs  | `Activated`    | Prevent the usage of CommonJS, ignore for node  |


### plugin:react

To see all javascript rules set by plugin:react : https://github.com/yannickcr/eslint-plugin-react

Special configuration for plugin:react rules :

| rule                      | Configuration | comment                         |
| ------------------------- | ------------- | ------------------------------- |
| prefer-es6-class          | `Disabled`    |    |
| require-extension         | `Disabled`    |    |
| require-default-props     | `Disabled`    |    |
| prefer-stateless-function | `Disabled`    |    |
| react/display-name        | `Disabled`    |  Only detect sipaly names of components during debug  |
| jsx-uses-react            | `Activated`    |    |
| jsx-uses-vars             | `Activated`    |    |
| react-in-jsx-scope        | `Activated`    |    |
| jsx-no-undef              | `Activated`    |    |
| destructuring-assignment  | `Disabled`    |    |
| jsx-wrap-multilines       | `Disabled`    |    |
| no-access-state-in-setstate  | `Disabled`    |    |
| jsx-closing-tag-location     | `Disabled`    |    |


### plugin:react-perf

To see all javascript rules set by plugin:react-perf : https://github.com/cvazac/eslint-plugin-react-perf

Special configuration for plugin:react-perf rules : None

### plugin:lodash

To see all javascript rules set by plugin:lodash : https://github.com/wix/eslint-plugin-lodash

Special configuration for plugin:lodash rules : 

| rule                      | Configuration | comment                         |
| ------------------------- | ------------- | ------------------------------- |
| import-scope              | `Activated`   | For single method imports |
| prefer-noop               | `Disabled`    |  Disable useless rule (_.noop instead of empty annonnymous function) |
| prefer-lodash-method      | `Disabled`      |  This rule is not satisfying |
| prefer-constant           | `Disabled`      |  We do not use lodash constants factory |
| prop-shorthand            | `Disabled`      |  Not so readable |
| matches-prop-shorthand    | `Disabled`      | We prefer the explicit declaration |
| no-exclusive-tests          | `Activated`   | |
| max-top-level-suites          | `Activated`   | |
| handle-done-callback          | `Activated`   | |
| no-top-level-hooks          | `Activated`   | |
| no-return-and-callback          | `Activated`   | |
| no-sibling-hooks          | `Activated`   | |
| no-global-tests          | `Activated`   | |
| no-hooks-for-single-case   | `Disabled`  |  All React tests contains before and after whether having 1 or more tests |
| no-mocha-arrows   | `Disabled`  | |
| mocha/no-nested-tests   | `Activated`  | We do not use mocha context so we can use lambdas |
| mocha/no-skipped-tests   | `Activated`  | |
| mocha/no-nested-tests   | `Activated`  | |
| mocha/no-identical-title   | `Activated`  | |
| mocha/no-synchronous-tests   | `Disabled`  | We wrote sync tests |


### plugin:promise

To see all javascript rules set by plugin:promise : https://github.com/xjamundx/eslint-plugin-promise

Special configuration for plugin:promise rules : 

| rule                      | Configuration | comment                         |
| ------------------------- | ------------- | ------------------------------- |
| no-callback-in-promise    | `Disabled`      | We call done from Mocha inside async tests |
| no-nesting                | `Disabled`      | Rule is not adequate without async / await |
| avoid-new                 | `Disabled`      | This is handy to create custom promises! |
| catch-or-return           | `Disabled`      | We do not always return a promise on react component since most of the time nobody consumes them |
| always-return             | `Disabled`      | |

