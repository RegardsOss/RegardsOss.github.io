---
layout: classic-docs
title: Integrated development environments
short-title: IDE
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Available IDEs](#available-ides)
- [VSCode](#vscode)
  - [Download](#download)
  - [Extensions](#extensions)
  - [Project configuration](#project-configuration)
  - [Shortcut configuration](#shortcut-configuration)
  - [Templates configuration](#templates-configuration)
    - [Javacript templates](#javacript-templates)
    - [Javascript React code templates](#javascript-react-code-templates)
- [IntelliJ](#intellij)
  - [Download](#download-1)
  - [Configuration](#configuration)
  - [Code templates](#code-templates)
    - [React component template](#react-component-template)
      - [Definition](#definition)
      - [Variables at creation](#variables-at-creation)
      - [Template](#template)
    - [React component test template](#react-component-test-template)
      - [Definition](#definition-1)
      - [Variables at creation](#variables-at-creation-1)
      - [Template](#template-1)
    - [React messages test template](#react-messages-test-template)
      - [Definition](#definition-2)
      - [Variables at creation](#variables-at-creation-2)
      - [Template](#template-2)
    - [Redux entity test template](#redux-entity-test-template)
      - [Definition](#definition-3)
      - [Variables at creation](#variables-at-creation-3)
      - [Template](#template-3)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Available IDEs

Currently, REGARDS developers use one of the following Integrated Development environments:
* VSCode: lightweight editor for JavaScript and React, with good NPM and ESLint integration.
* IntelliJ or WebStorm: full flavored IDE for Java, JavaScript...

Although IntelliJ was the initial team choice, we are now tending to replace it with VSCode, as IntelliJ misses ESLint support and is slightly heavier... However, both of those IDEs are a good choice to develop on rs-frontend project. Some resources will be provided in the next sections to setup and configure those IDEs.

# VSCode

## Download

VSCode download package is available [here](https://code.visualstudio.com/download). It can be installed on all major operating systems.

## Extensions

When VSCode is installed, we recommand adding it the following extensions using VSCode extensions tab:
* Bookmarks: Allows adding bookmarks in code and navigate between them - native IntelliJ functionnality
* Code outline: Shows code file outline - native IntelliJ functionnality
* Debugger for Chrome: Allows linking the VSCode debugger with a Chrome browser instance
* ESLint: Shows ESLint warning and errors in code files
* GitLens: Shows git annotation and history in files - native IntelliJ functionnality
* Local History: Keeps a local history for files - native IntelliJ functionnality
* Material Icon Theme: Icon theme for VSCode explorer tree
* Multiple clipboards for VSCode: Handles the clipboard copy operations as a round buffer
* React Standard Style code snippets: Provides snippets to write react code faster
* Todo Tree: Shows project TODO and FIXME comments

Note: to use material icon theme, open VSCode menu file/preferences/icon theme.

## Project configuration

VS code project configuration must be placed in a `.vscode` folder, in `rs-frontend` project folder. The steps below aims at setting a convenient IDE configuration to work in REGARDS. You must paste each file content to enable the corresponding functionalities.

* `rs-frontend/.vscode/launch.json` file, describes browsers runnable and debugger (can be launched with F5 shortcut)
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome instance admin",
      "url": "http://localhost:3333/",
      "webRoot": "${workspaceRoot}/webapp"
    },
    {
      "type": "chrome",
      "request": "attach",
      "name": "Attach to Chrome",
      "port": 9222,
      "webRoot": "${workspaceRoot}/webapp"
    }
  ]
}
```
* `rs-frontend/.vscode/settings.json` file, describes browsers runnable and debugger (can be launched with F5 shortcut)
```json
{
  "todo-tree.flat": true,
  "editor.tabSize": 2,
  "eslint.autoFixOnSave": true
}
```
* `rs-frontend/.vscode/tasks.json` file, describes NPM runnables (not required, but removes the prompt before running NPM task) 
```json
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "type": "npm",
      "script": "start:withpreprod",
      "path": "webapp/",
      "problemMatcher": [
        "$eslint-stylish"
      ]
    },
    {
      "type": "npm",
      "script": "start:withmock",
      "path": "webapp/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "test:watch",
      "path": "webapp/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "lint:fix",
      "path": "webapp/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "test:mocha",
      "path": "webapp/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "start:withmock-proxy-vm-preprod",
      "path": "webapp/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "lint",
      "path": "webapp/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "build:dll",
      "path": "webapp/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "build:production-core-dll",
      "path": "webapp/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "build:production-coreoss-dll",
      "path": "webapp/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "build:production-dll",
      "path": "webapp/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "start:withvmperf",
      "path": "webapp/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "start:mock-proxy-server-vm-perf",
      "path": "webapp/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "start:withmock-proxy-vm-perf",
      "path": "webapp/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "bootstrap",
      "path": "webapp/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "start:withic",
      "path": "webapp/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "build:production",
      "path": "webapp/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "start:mock-proxy-server-vm-preprod",
      "path": "webapp/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "build:watch",
      "path": "webapp/",
      "path": "plugins/criterion/enumerated/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "build:watch",
      "path": "webapp/",
      "path": "plugins/service/example/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "build:watch",
      "path": "webapp/",
      "path": "plugins/criterion/temporal/",
      "problemMatcher": []
    },
    {
      "type": "npm",
      "script": "build:watch",
      "path": "webapp/",
      "path": "plugins/criterion/two-temporal/",
      "problemMatcher": []
    }
  ]
}
```

## Shortcut configuration

To configure the VSCode shortcuts, oepn menu `file/preferences/shortcut`. Then click on keybindings.json link to import the shortcut below, if they match your needs:

```json
// Placez vos combinaisons de touches dans ce fichier pour remplacer les valeurs par défaut
[
    {
        "key": "ctrl+down",
        "command": "editor.action.copyLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+up",
        "command": "editor.action.copyLinesUpAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "shift+delete",
        "command": "editor.action.deleteLines",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+f3",
        "command": "editor.action.addSelectionToNextFindMatch",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+s",
        "command": "workbench.action.files.saveAll"
    },
    {
        "key": "ctrl+alt+o",
        "command": "workbench.action.closeOtherEditors",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+b",
        "command": "bookmarks.toggle",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+p",
        "command": "bookmarks.jumpToPrevious",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+n",
        "command": "bookmarks.jumpToNext",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+c",
        "command": "bookmarks.clearFromAllFiles",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+[IntlBackslash]",
        "command": "workbench.action.closeEditorsToTheRight"
    },
    {
        "key": "ctrl+[IntlBackslash]",
        "command": "workbench.action.closeEditorsToTheLeft"
    },
    {
        "key": "ctrl+alt+t",
        "command": "workbench.action.tasks.runTask"
    },
    {
        "key": "ctrl+r",
        "command": "editor.action.quickFix",
        "when": "editorHasCodeActionsProvider && editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+[Comma]",
        "command": "-editor.action.quickFix",
        "when": "editorHasCodeActionsProvider && editorTextFocus && !editorReadonly"
    },
    {
        "key": "alt+[KeyM]",
        "command": "-gitlens.diffWithPrevious",
        "when": "editorTextFocus && gitlens:activeIsTracked && gitlens:keymap == 'standard'"
    },
    {
        "key": "ctrl+meta+w",
        "command": "-workbench.action.toggleTabsVisibility"
    },
    {
        "key": "ctrl+k ctrl+h",
        "command": "-workbench.action.output.toggleOutput"
    },
    {
        "key": "ctrl+alt+f",
        "command": "workbench.action.toggleZenMode"
    },
    {
        "key": "ctrl+k z",
        "command": "-workbench.action.toggleZenMode"
    },
    {
        "key": "ctrl+shift+[Period]",
        "command": "-editor.action.commentLine",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+a",
        "command": "-editor.action.blockComment",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "f7",
        "command": "editor.action.goToImplementation",
        "when": "editorHasImplementationProvider && editorTextFocus && !isInEmbeddedEditor"
    },
    {
        "key": "ctrl+f12",
        "command": "-editor.action.goToImplementation",
        "when": "editorHasImplementationProvider && editorTextFocus && !isInEmbeddedEditor"
    },
    {
        "key": "alt+z",
        "command": "-editor.action.toggleWordWrap"
    },
    {
        "key": "alt+f1",
        "command": "-editor.action.showAccessibilityHelp",
        "when": "editorFocus"
    },
    {
        "key": "contextmenu",
        "command": "editor.action.showContextMenu",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+f10",
        "command": "-editor.action.showContextMenu",
        "when": "editorTextFocus"
    },
    {
        "key": "f1",
        "command": "editor.action.showHover",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+k ctrl+i",
        "command": "-editor.action.showHover",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+k ctrl+p",
        "command": "-workbench.action.showAllEditors"
    },
    {
        "key": "f1",
        "command": "-workbench.action.showCommands"
    },
    {
        "key": "ctrl+d",
        "command": "-editor.action.addSelectionToNextFindMatch",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+numpad_divide",
        "command": "editor.action.addCommentLine",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+k ctrl+c",
        "command": "-editor.action.addCommentLine",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+f10",
        "command": "editor.action.previewDeclaration",
        "when": "editorHasDefinitionProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor"
    },
    {
        "key": "ctrl+shift+f10",
        "command": "-editor.action.previewDeclaration",
        "when": "editorHasDefinitionProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor"
    },
    {
        "key": "ctrl+o",
        "command": "workbench.action.gotoSymbol"
    },
    {
        "key": "ctrl+shift+o",
        "command": "-workbench.action.gotoSymbol"
    },
    {
        "key": "shift+alt+l",
        "command": "-bookmarks.expandSelectionToNext",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+j",
        "command": "-bookmarks.expandSelectionToPrevious",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+k",
        "command": "-bookmarks.shrinkSelection",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+k",
        "command": "-bookmarks.toggle",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+l",
        "command": "-bookmarks.jumpToNext",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+j",
        "command": "-bookmarks.jumpToPrevious",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+k m",
        "command": "-workbench.action.editor.changeLanguageMode"
    },
    {
        "key": "ctrl+shift+g shift+[Comma]",
        "command": "-gitlens.diffWithNext",
        "when": "editorTextFocus && gitlens:activeIsTracked && gitlens:keymap == 'chorded'"
    },
    {
        "key": "shift+alt+[Comma]",
        "command": "-gitlens.diffWithNext",
        "when": "editorTextFocus && gitlens:activeIsTracked && gitlens:keymap == 'standard'"
    },
    {
        "key": "ctrl+shift+g [KeyM]",
        "command": "-gitlens.diffWithPrevious",
        "when": "editorTextFocus && gitlens:activeIsTracked && gitlens:keymap == 'chorded'"
    },
    {
        "key": "shift+alt+w",
        "command": "-gitlens.diffWithWorking",
        "when": "editorTextFocus && gitlens:activeIsTracked && gitlens:keymap == 'standard'"
    },
    {
        "key": "ctrl+shift+g shift+w",
        "command": "-gitlens.diffWithWorking",
        "when": "editorTextFocus && gitlens:activeIsTracked && gitlens:keymap == 'chorded'"
    },
    {
        "key": "meta+[BracketRight]",
        "command": "workbench.files.action.compareWithClipboard"
    },
    {
        "key": "ctrl+k c",
        "command": "-workbench.files.action.compareWithClipboard"
    },
    {
        "key": "ctrl+shift+g [IntlBackslash]",
        "command": "-gitlens.diffLineWithPrevious",
        "when": "editorTextFocus && gitlens:activeIsTracked && gitlens:keymap == 'chorded'"
    },
    {
        "key": "alt+[IntlBackslash]",
        "command": "-gitlens.diffLineWithPrevious",
        "when": "editorTextFocus && gitlens:activeIsTracked && gitlens:keymap == 'standard'"
    },
    {
        "key": "alt+w",
        "command": "-gitlens.diffLineWithWorking",
        "when": "editorTextFocus && gitlens:activeIsTracked && gitlens:keymap == 'standard'"
    },
    {
        "key": "ctrl+shift+g w",
        "command": "-gitlens.diffLineWithWorking",
        "when": "editorTextFocus && gitlens:activeIsTracked && gitlens:keymap == 'chorded'"
    },
    {
        "key": "ctrl+shift+y",
        "command": "-workbench.debug.action.toggleRepl"
    },
    {
        "key": "ctrl+shift+alt+down",
        "command": "-editor.action.copyLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+alt+up",
        "command": "-editor.action.copyLinesUpAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "f1",
        "command": "editor.debug.action.showDebugHover",
        "when": "editorTextFocus && inDebugMode"
    },
    {
        "key": "ctrl+k ctrl+i",
        "command": "-editor.debug.action.showDebugHover",
        "when": "editorTextFocus && inDebugMode"
    },
    {
        "key": "shift+f9",
        "command": "-editor.debug.action.toggleColumnBreakpoint",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+x",
        "command": "editor.action.trimTrailingWhitespace",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+k ctrl+x",
        "command": "-editor.action.trimTrailingWhitespace",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+pagedown",
        "command": "-workbench.action.moveEditorRightInGroup"
    },
    {
        "key": "ctrl+shift+pageup",
        "command": "-workbench.action.moveEditorLeftInGroup"
    },
    {
        "key": "shift+alt+1",
        "command": "-workbench.action.moveEditorToFirstGroup"
    },
    {
        "key": "shift+alt+2",
        "command": "-workbench.action.moveEditorToSecondGroup"
    },
    {
        "key": "shift+alt+3",
        "command": "-workbench.action.moveEditorToThirdGroup"
    },
    {
        "key": "ctrl+k ctrl+d",
        "command": "-editor.action.moveSelectionToNextFindMatch",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+k right",
        "command": "-workbench.action.moveActiveEditorGroupRight"
    },
    {
        "key": "ctrl+k left",
        "command": "-workbench.action.moveActiveEditorGroupLeft"
    },
    {
        "key": "ctrl+numpad_add",
        "command": "editor.unfoldAll",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+k ctrl+j",
        "command": "-editor.unfoldAll",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+k ctrl+9",
        "command": "-editor.unfoldAllMarkerRegions",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+right",
        "command": "-editor.action.smartSelect.grow",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+i",
        "command": "workbench.action.tasks.build"
    },
    {
        "key": "ctrl+shift+b",
        "command": "-workbench.action.tasks.build"
    },
    {
        "key": "ctrl+shift+down",
        "command": "-workbench.action.terminal.scrollDown",
        "when": "terminalFocus"
    },
    {
        "key": "shift+pagedown",
        "command": "-workbench.action.terminal.scrollDownPage",
        "when": "terminalFocus"
    },
    {
        "key": "ctrl+shift+up",
        "command": "-workbench.action.terminal.scrollUp",
        "when": "terminalFocus"
    },
    {
        "key": "shift+pageup",
        "command": "-workbench.action.terminal.scrollUpPage",
        "when": "terminalFocus"
    },
    {
        "key": "ctrl+shift+w",
        "command": "-workbench.action.closeWindow"
    },
    {
        "key": "shift+escape",
        "command": "-workbench.action.closeMessages",
        "when": "globalMessageVisible"
    },
    {
        "key": "escape",
        "command": "-workbench.action.closeMessages",
        "when": "globalMessageVisible"
    },
    {
        "key": "ctrl+k ctrl+w",
        "command": "-workbench.action.closeAllEditors"
    },
    {
        "key": "meta+f1",
        "command": "workbench.action.terminal.focusAtIndex1"
    },
    {
        "key": "meta+f2",
        "command": "workbench.action.terminal.focusAtIndex2"
    },
    {
        "key": "meta+f3",
        "command": "workbench.action.terminal.focusAtIndex3"
    },
    {
        "key": "meta+f4",
        "command": "workbench.action.terminal.focusAtIndex4"
    },
    {
        "key": "meta+f5",
        "command": "workbench.action.terminal.focusAtIndex5"
    },
    {
        "key": "alt+w",
        "command": "-gitlens.diffLineWithWorking",
        "when": "editorTextFocus && gitlens:activeIsTracked && gitlens:keymap == 'alternate'"
    },
    {
        "key": "alt+[BracketRight]",
        "command": "gitlens.diffLineWithPrevious",
        "when": "editorTextFocus && gitlens:activeIsTracked && gitlens:keymap == 'alternate'"
    },
    {
        "key": "alt+[IntlBackslash]",
        "command": "-gitlens.diffLineWithPrevious",
        "when": "editorTextFocus && gitlens:activeIsTracked && gitlens:keymap == 'alternate'"
    },
    {
        "key": "ctrl+shift+i",
        "command": "eslint.executeAutofix"
    }
]
```

## Templates configuration

To configure templates in VSCode, you have to open menu `file/preferences/user code templates` then type Javascript or javascript react to edit the corresponding JSON file. For REGARDS we defined the following code templates. You may paste the code in corresponding VSCode templates files.

### Javacript templates
```json
{
  "console error": {
    "prefix": "cerr",
    "body": [
      "console.error('$1')"
    ],
    "description": "Log output to console error"
  },
  "console warn": {
    "prefix": "cwarn",
    "body": [
      "console.warn('$1')"
    ],
    "description": "Log output to console warning"
  },
  "console info": {
    "prefix": "cinf",
    "body": [
      "console.info('$1')"
    ],
    "description": "Log output to console info"
  },
  "console log": {
    "prefix": "clog",
    "body": [
      "console.log('$1')"
    ],
    "description": "Log output to console log"
  },
  "Insert author": {
    "prefix": "author",
    "body": [
      "@author Raphaël Mechali"
    ]
  },
  "Intialize file": {
    "prefix": "license",
    "body": [
      "/**",
      " * Copyright 2017 CNES - CENTRE NATIONAL d'ETUDES SPATIALES",
      " *",
      " * This file is part of REGARDS.",
      " *",
      " * REGARDS is free software: you can redistribute it and/or modify",
      " * it under the terms of the GNU General Public License as published by",
      " * the Free Software Foundation, either version 3 of the License, or",
      " * (at your option) any later version.",
      " *",
      " * REGARDS is distributed in the hope that it will be useful,",
      " * but WITHOUT ANY WARRANTY; without even the implied warranty of",
      " * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the",
      " * GNU General Public License for more details.",
      " *",
      " * You should have received a copy of the GNU General Public License",
      " * along with REGARDS. If not, see <http://www.gnu.org/licenses/>.",
      " **/"
    ]
  },
  "React add Intl": {
    "prefix": "react-intl-context",
    "body": [
      "import { i18nContextType } from '@regardsoss/i18n'",
      "static contextTypes = {",
      "...i18nContextType,",
      "}"
    ]
  },
  "client": {
    "prefix": "client",
    "body": [
      "/**",
      " * Copyright 2017 CNES - CENTRE NATIONAL d'ETUDES SPATIALES",
      " *",
      " * This file is part of REGARDS.",
      " *",
      " * REGARDS is free software: you can redistribute it and/or modify",
      " * it under the terms of the GNU General Public License as published by",
      " * the Free Software Foundation, either version 3 of the License, or",
      " * (at your option) any later version.",
      " *",
      " * REGARDS is distributed in the hope that it will be useful,",
      " * but WITHOUT ANY WARRANTY; without even the implied warranty of",
      " * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the",
      " * GNU General Public License for more details.",
      " *",
      " * You should have received a copy of the GNU General Public License",
      " * along with REGARDS. If not, see <http://www.gnu.org/licenses/>.",
      " **/",
      "import { ${1:ClientModule} } from '@regardsoss/client'",
      "",
      "const namespace = '${5:namespace}'",
      "const ${2:entityNameLower}Actions = new ${1:ClientModule}.${3:EntityNameUpper}Actions(namespace)",
      "const ${2:entityNameLower}Reducer = ${1:ClientModule}.get${3:EntityNameUpper}Reducer(namespace)",
      "const ${2:entityNameLower}Selectors = ${1:ClientModule}.get${3:EntityNameUpper}Selectors([${4:Path elements}])",
      "",
      "module.exports = {",
      "${2:entityNameLower}Actions,",
      "${2:entityNameLower}Reducer,",
      "${2:entityNameLower}Selectors,",
      "}",
      ""
    ]
  },
  "Test: redux entity": {
    "prefix": "test-redux-entity",
    "body": [
      "/**",
      " * Copyright 2017 CNES - CENTRE NATIONAL d'ETUDES SPATIALES",
      " *",
      " * This file is part of REGARDS.",
      " *",
      " * REGARDS is free software: you can redistribute it and/or modify",
      " * it under the terms of the GNU General Public License as published by",
      " * the Free Software Foundation, either version 3 of the License, or",
      " * (at your option) any later version.",
      " *",
      " * REGARDS is distributed in the hope that it will be useful,",
      " * but WITHOUT ANY WARRANTY; without even the implied warranty of",
      " * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the",
      " * GNU General Public License for more details.",
      " *",
      " * You should have received a copy of the GNU General Public License",
      " * along with REGARDS. If not, see <http://www.gnu.org/licenses/>.",
      " **/",
      "import { ReduxEntityTester } from '@regardsoss/tests-helpers'",
      "import { ${1: Model name} } from '@regardsoss/model'",
      "import ${1: Model name}Actions from '../../src/model/${1: Model name}Actions'",
      "import ${1: Model name}Reducers from '../../src/model/${1: Model name}Reducers'",
      "import ${1: Model name}Selectors from '../../src/model/${1: Model name}Selectors'",
      "",
      "//TODO: define elements here or load an external dump",
      "const backendServerResultList = {",
      "  content: [{",
      "    content: {",
      "      id: 1,",
      "    },",
      "    links: [],",
      "  }],",
      "  metadata: {",
      "    number: '0',",
      "    size: '100',",
      "    totalElements: 1,",
      "  },",
      "  links: [],",
      "}",
      "// URL options and parameters",
      "const options = {}",
      "",
      "const entityTester = new ReduxEntityTester(${1: Model name}Actions, ${1: Model name}Reducers, ${1: Model name}Selectors, React.PropTypes.objectOf(${1: Model name}).isRequired, backendServerResultList, options)",
      "",
      "describe('[${2: Module name}] Testing model ${1: Model name}', () => {",
      "  before(() => {",
      "    entityTester.beforeAll()",
      "  })",
      "  after(() => {",
      "    entityTester.afterAll()",
      "  })",
      "  it('should retrieve the list of items, reduce it, and store it within the store.', (done) => {",
      "    entityTester.runTests(done)",
      "  })",
      "})"
    ]
  }
}
```

### Javascript React code templates
```json
{
  "console error": {
    "prefix": "cerr",
    "body": [
      "console.error('$1')"
    ],
    "description": "Log output to console error"
  },
  "console warn": {
    "prefix": "cwarn",
    "body": [
      "console.warn('$1')"
    ],
    "description": "Log output to console warning"
  },
  "console info": {
    "prefix": "cinf",
    "body": [
      "console.info('$1')"
    ],
    "description": "Log output to console info"
  },
  "console log": {
    "prefix": "clog",
    "body": [
      "console.log('$1')"
    ],
    "description": "Log output to console log"
  },
  "Intialize file": {
    "prefix": "license",
    "body": [
      "/**",
      " * Copyright 2017 CNES - CENTRE NATIONAL d'ETUDES SPATIALES",
      " *",
      " * This file is part of REGARDS.",
      " *",
      " * REGARDS is free software: you can redistribute it and/or modify",
      " * it under the terms of the GNU General Public License as published by",
      " * the Free Software Foundation, either version 3 of the License, or",
      " * (at your option) any later version.",
      " *",
      " * REGARDS is distributed in the hope that it will be useful,",
      " * but WITHOUT ANY WARRANTY; without even the implied warranty of",
      " * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the",
      " * GNU General Public License for more details.",
      " *",
      " * You should have received a copy of the GNU General Public License",
      " * along with REGARDS. If not, see <http://www.gnu.org/licenses/>.",
      " **/"
    ]
  },
  "Insert author": {
    "prefix": "author",
    "body": [
      "@author Raphaël Mechali"
    ]
  },
  "React define intl": {
    "prefix": "react-with-intl",
    "body": [
      "import compose from 'lodash/fp/compose'",
      "import { withI18n } from '@regardsoss/i18n'",
      "import messages from '${1: path to i18n}/i18n'",
      "compose(",
      "connect(${TM_FILENAME_BASE}.mapStateToProps, ${TM_FILENAME_BASE}.mapDispatchToProps),",
      "withI18n(messages))(${TM_FILENAME_BASE})"
    ]
  },
  "React define styles": {
    "prefix": "react-with-styles",
    "body": [
      "import compose from 'lodash/fp/compose'",
      "import { withModuleStyle } from '@regardsoss/theme'",
      "import styles from '${1: path to style}/styles'",
      "compose(",
      "connect(${TM_FILENAME_BASE}.mapStateToProps, ${TM_FILENAME_BASE}.mapDispatchToProps),",
      "withModuleStyle(styles))(${TM_FILENAME_BASE})"
    ]
  },
  "React define intl and styles": {
    "prefix": "react-with-all",
    "body": [
      "import compose from 'lodash/fp/compose'",
      "import { withI18n } from '@regardsoss/i18n'",
      "import { withModuleStyle } from '@regardsoss/theme'",
      "import messages from '${1: path to i18n}/i18n'",
      "import styles from '${1: path to style}/styles'",
      "compose(",
      "connect(${TM_FILENAME_BASE}.mapStateToProps, ${TM_FILENAME_BASE}.mapDispatchToProps),",
      "withI18n(messages), withModuleStyle(styles))(${TM_FILENAME_BASE})"
    ]
  },
  "React add Intl": {
    "prefix": "react-intl-context",
    "body": [
      "import { i18nContextType } from '@regardsoss/i18n'",
      "static contextTypes = {",
      "...i18nContextType,",
      "}",
      "const { intl: { formatMessage } } = this.context "
    ]
  },
  "React add theme context": {
    "prefix": "react-theme-context",
    "body": [
      "import { themeContextType } from '@regardsoss/theme'",
      "static contextTypes = {",
      "  ...themeContextType,",
      "}",
      "const { muiTheme, moduleTheme } = this.context"
    ]
  },
  "React add all context": {
    "prefix": "react-all-contexts",
    "body": [
      "import { i18nContextType } from '@regardsoss/i18n'",
      "import { themeContextType } from '@regardsoss/theme'",
      "static contextTypes = {",
      "  ...themeContextType,",
      "  ...i18nContextType,",
      "}",
      "const { intl: { formatMessage }, muiTheme, moduleTheme } = this.context"
    ]
  },
  "Eslint - disable unused proptype": {
    "prefix": "eslint-disable-next-line for prop type",
    "body": [
      "// eslint-disable-next-line react/no-unused-prop-types"
    ]
  },
  "React component": {
    "prefix": "react-component",
    "body": [
      "/**",
      " * Copyright 2017 CNES - CENTRE NATIONAL d'ETUDES SPATIALES",
      " *",
      " * This file is part of REGARDS.",
      " *",
      " * REGARDS is free software: you can redistribute it and/or modify",
      " * it under the terms of the GNU General Public License as published by",
      " * the Free Software Foundation, either version 3 of the License, or",
      " * (at your option) any later version.",
      " *",
      " * REGARDS is distributed in the hope that it will be useful,",
      " * but WITHOUT ANY WARRANTY; without even the implied warranty of",
      " * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the",
      " * GNU General Public License for more details.",
      " *",
      " * You should have received a copy of the GNU General Public License",
      " * along with REGARDS. If not, see <http://www.gnu.org/licenses/>.",
      " **/",
      "",
      "/**",
      " * ${1:Comment Here}",
      " * @author Raphaël Mechali",
      " */",
      "class ${TM_FILENAME_BASE} extends React.Component{",
      "",
      "static propTypes = {}",
      "",
      "static defaultProps = {}",
      "",
      " render(){",
      " const { maProp } = this.props",
      "   return (",
      " <div />",
      ")",
      " }",
      "}",
      "export default ${TM_FILENAME_BASE}",
      ""
    ]
  },
  "React container": {
    "prefix": "react-container",
    "body": [
      "/**",
      " * Copyright 2017 CNES - CENTRE NATIONAL d'ETUDES SPATIALES",
      " *",
      " * This file is part of REGARDS.",
      " *",
      " * REGARDS is free software: you can redistribute it and/or modify",
      " * it under the terms of the GNU General Public License as published by",
      " * the Free Software Foundation, either version 3 of the License, or",
      " * (at your option) any later version.",
      " *",
      " * REGARDS is distributed in the hope that it will be useful,",
      " * but WITHOUT ANY WARRANTY; without even the implied warranty of",
      " * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the",
      " * GNU General Public License for more details.",
      " *",
      " * You should have received a copy of the GNU General Public License",
      " * along with REGARDS. If not, see <http://www.gnu.org/licenses/>.",
      " **/",
      "import { connect } from '@regardsoss/redux'",
      "import ${TM_FILENAME_BASE/(.*)Container$/$1/}Component from '../${1: back to src}components/${2: path to component}${TM_FILENAME_BASE/(.*)Container$/$1/}Component'",
      "",
      "/**",
      " * ${3:Comment Here}",
      " * @author Raphaël Mechali",
      " */",
      "export class ${TM_FILENAME_BASE} extends React.Component{",
      "",
      "/** ",
      " * Redux: map state to props function",
      " * @param {*} state: current redux state",
      " * @param {*} props: (optional) current component properties (excepted those from mapStateToProps and mapDispatchToProps)",
      " * @return {*} list of component properties extracted from redux state",
      " */",
      "static mapStateToProps(state) {",
      "  return {}",
      "}",
      "",
      "/** ",
      " * Redux: map dispatch to props function",
      " * @param {*} dispatch: redux dispatch function",
      " * @param {*} props: (optional)  current component properties (excepted those from mapStateToProps and mapDispatchToProps)",
      " * @return {*} list of component properties extracted from redux state",
      " */",
      "static mapDispatchToProps(dispatch) {",
      "  return {}",
      "}",
      "",
      "static propTypes = {",
      "// from mapStateToProps",
      "// from mapDispatchToProps",
      "}",
      "",
      " render(){",
      " const { maProp } = this.props",
      "   return (",
      " <div />",
      ")",
      " }",
      "}",
      "export default connect(",
      "  ${TM_FILENAME_BASE}.mapStateToProps,",
      "  ${TM_FILENAME_BASE}.mapDispatchToProps)(${TM_FILENAME_BASE})",
      ""
    ]
  },
  "React container: props update": {
    "prefix": "react-properties-changed",
    "body": [
      " /**",
      "  * Lifecycle method: component will mount. Used here to detect first properties change and update local state",
      "  */",
      "  componentWillMount = () => this.onPropertiesUpdated({}, this.props)",
      "",
      " /**",
      "  * Lifecycle method: component receive props. Used here to detect properties change and update local state",
      "  * @param {*} nextProps next component properties",
      "  */",
      " componentWillReceiveProps = nextProps => this.onPropertiesUpdated(this.props, nextProps)",
      " ",
      " /**",
      "  * Properties change detected: update local state",
      "  * @param oldProps previous component properties",
      "  * @param newProps next component properties",
      "  */",
      " onPropertiesUpdated = (oldProps, newProps) => {",
      "   // TODO",
      " }"
    ]
  },
  "Test: react component": {
    "prefix": "test-react-component",
    "body": [
      "/**",
      " * Copyright 2017 CNES - CENTRE NATIONAL d'ETUDES SPATIALES",
      " *",
      " * This file is part of REGARDS.",
      " *",
      " * REGARDS is free software: you can redistribute it and/or modify",
      " * it under the terms of the GNU General Public License as published by",
      " * the Free Software Foundation, either version 3 of the License, or",
      " * (at your option) any later version.",
      " *",
      " * REGARDS is distributed in the hope that it will be useful,",
      " * but WITHOUT ANY WARRANTY; without even the implied warranty of",
      " * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the",
      " * GNU General Public License for more details.",
      " *",
      " * You should have received a copy of the GNU General Public License",
      " * along with REGARDS. If not, see <http://www.gnu.org/licenses/>.",
      " **/",
      "import { shallow } from 'enzyme'",
      "import { assert } from 'chai'",
      "import { buildTestContext, testSuiteHelpers } from '@regardsoss/tests-helpers'",
      "import ${TM_FILENAME_BASE/(.*)\\..+$/$1/} from '../../${1: back to src}src/components/${2: component path}${TM_FILENAME_BASE/(.*)\\..+$/$1/}'",
      "import styles from '../../${1: back to src}src/styles'",
      "",
      "const context = buildTestContext(styles)",
      "",
      "/**",
      " * Test ${TM_FILENAME_BASE/(.*)\\..+$/$1/}",
      " * @author Raphaël Mechali",
      " */",
      "describe('[${3: Module name}] Testing ${TM_FILENAME_BASE/(.*)\\..+$/$1/}', () => {",
      "before(testSuiteHelpers.before)",
      "after(testSuiteHelpers.after)",
      "",
      "  it('should exists', () => {",
      "    assert.isDefined(${TM_FILENAME_BASE/(.*)\\..+$/$1/})",
      "  })",
      "  it('should render correctly', () => {",
      "    const props = {",
      "    //  TODO properties",
      "    }",
      "    const enzymeWrapper = shallow(<${TM_FILENAME_BASE/(.*)\\..+$/$1/} {...props} />, { context })",
      "    // TODO test",
      "  })",
      "",
      "})"
    ]
  },
  "Test: react container": {
    "prefix": "test-react-container",
    "body": [
      "/**",
      " * Copyright 2017 CNES - CENTRE NATIONAL d'ETUDES SPATIALES",
      " *",
      " * This file is part of REGARDS.",
      " *",
      " * REGARDS is free software: you can redistribute it and/or modify",
      " * it under the terms of the GNU General Public License as published by",
      " * the Free Software Foundation, either version 3 of the License, or",
      " * (at your option) any later version.",
      " *",
      " * REGARDS is distributed in the hope that it will be useful,",
      " * but WITHOUT ANY WARRANTY; without even the implied warranty of",
      " * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the",
      " * GNU General Public License for more details.",
      " *",
      " * You should have received a copy of the GNU General Public License",
      " * along with REGARDS. If not, see <http://www.gnu.org/licenses/>.",
      " **/",
      "import { shallow } from 'enzyme'",
      "import { assert } from 'chai'",
      "import { buildTestContext, testSuiteHelpers } from '@regardsoss/tests-helpers'",
      "import ${TM_FILENAME_BASE/(.*)Container\\..+$/$1/}Component from '../../${1: back To src}src/components/${2: component path}${TM_FILENAME_BASE/(.*)Container\\..+$/$1/}Component'",
      "import { ${TM_FILENAME_BASE/(.*)\\..+$/$1/} } from '../../${1: back To src}src/containers/${2: component path}${TM_FILENAME_BASE/(.*)\\..+$/$1/}'",
      "import styles from '../../${1: back to src}src/styles'",
      "",
      "const context = buildTestContext(styles)",
      "",
      "/**",
      " * Test ${TM_FILENAME_BASE/(.*)\\..+$/$1/}",
      " * @author Raphaël Mechali",
      " */",
      "describe('[${3: Module name}] Testing ${TM_FILENAME_BASE/(.*)\\..+$/$1/}', () => {",
      "    before(testSuiteHelpers.before)",
      "    after(testSuiteHelpers.after)",
      "",
      "  it('should exists', () => {",
      "    assert.isDefined(${TM_FILENAME_BASE/(.*)\\..+$/$1/})",
      "  })",
      "  it('should render correctly', () => {",
      "    const props = {",
      "      // TODO props",
      "    }",
      "    const enzymeWrapper = shallow(<${TM_FILENAME_BASE/(.*)\\..+$/$1/} {...props} />, { context })",
      "    const componentWrapper = enzymeWrapper.find(${TM_FILENAME_BASE/(.*)Container\\..+$/$1/}Component)",
      "    assert.lengthOf(componentWrapper, 1, 'There should be the corresponding component')",
      "    testSuiteHelpers.assertWrapperProperties(componentWrapper, {",
      "    // TODO",
      "    }, 'Component should define the expected properties')",
      "  })",
      "",
      "})"
    ]
  }
}
```

# IntelliJ

## Download

IntelliJ download package is available [here](https://www.jetbrains.com/idea/download/). It can be installed on all major operating systems.

## Configuration

Default IntelliJ configuration works nicely with REGARDS. IntelliJ will prompt you with the adequate extensions while you are working on files.

## Code templates

To create or import a code template, right click anywhere in project tree to open the context menu and select 'New > Edit file templates'. Use the templates provided below or create new ones in templates view - see picture below.  

![](/assets/images/frontend/intelliJ-templates/create.png)

*Note: the templates below may be a bit outdated, as team members are no longer using that IDE*

### React component template

#### Definition

- **Name**: React component
- **extension**: jsx
- **Reformat according to style**: yes
- **Enabled live templates**: yes

#### Variables at creation

- **Name**: File name, use the container's / component's name to create, like 'BubbleSandwitchComponent' or 'ApplePieContainer'
- **Comment**: container / component description

#### Template

```javascript

/**
 * LICENSE_PLACEHOLDER
 */
  
/**
 * ${comment}
 */
class ${NAME} extends React.Component{

  static propTypes = {
  
  }

  static defaultProps = {

  }

  render(){
    return (
      <div>Component</div>
    )
  }
}
 
export default ${NAME}

```

### React component test template

#### Definition

- **Name**: React component test 
- **extension**: test.jsx
- **Reformat according to style**: yes
- **Enabled live templates**: yes

#### Variables at creation

- **Name**: File name, use the container's / component's name to test, like 'BubbleSandwitchComponent' or 'ApplePieContainer'
- **MODULE_NAME**: Name of the parent module (for test console output)

#### Template

```javascript

/**
 * LICENSE_PLACEHOLDER
 */
import { shallow } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'
import { IntlStub } from '@regardsoss/tests-helpers'
import ${NAME} from '../../src/components/${NAME}'

import styles from '../../src/styles/styles'

describe('[${MODULE_NAME}] Testing ${NAME}', () => {
  // Since react will console.error propType warnings, that which we'd rather have
  // as errors, we use sinon.js to stub it into throwing these warning as errors
  // instead.
  before(() => {
    sinon.stub(console, 'error', (warning) => { throw new Error(warning) })
  })
  after(() => {
    console.error.restore()
  })
  it('should exists', () => {
    assert.isDefined(${NAME})
  })
  const context = {
    intl: IntlStub,
    muiTheme: {
      palette: {
      },
    },
    moduleTheme: styles({}),
  }
  // TODO test some rendering
  it('Render properly', () => {
    const props = {
    }
    const enzymeWrapper = shallow(<${NAME} {...props} />, { context })
    // TODO something like that
    expect(enzymeWrapper.find(AComponent)).to.have.length(ALENGTH)
    // TODO or something like that
    assert.isFalse(enzymeWrapper.find(AComponent).props().isLoading, 'Loading should be false')
  })

})

```

### React messages test template

#### Definition

- **Name**: React messages test 
- **extension**: test.js
- **Reformat according to style**: yes
- **Enabled live templates**: yes

#### Variables at creation

- **Name**: File name, enter 'messages' here (to create 'messages.test.js')
- **MODULE_NAME**: Name of the parent module (for test console output)

#### Template

```javascript

/**
 * LICENSE_PLACEHOLDER
 */
import { assert } from 'chai'
import { keys } from 'lodash'
import MessagesEN from '../../src/i18n/messages.en.i18n'
import MessagesFR from '../../src/i18n/messages.fr.i18n'

describe('[${MODULE_NAME}] Testing i18n', () => {
  it('should exist', () => {
    assert.isDefined(MessagesEN)
    assert.isDefined(MessagesFR)
  })
  it('should define same sentences', () => {
    assert.deepEqual(keys(MessagesFR), keys(MessagesEN))
  })
})

```
### Redux entity test template

#### Definition

- **Name**: Redux entity test 
- **extension**: test.js
- **Reformat according to style**: yes
- **Enabled live templates**: yes

#### Variables at creation

- **Name**: File name, enter here the model name to test (like 'Collection' for CollectionActions / CollectionReducers / CollectionSelectors)
- **MODULE_NAME**: Name of the parent module (for test console output)

#### Template

```javascript

/**
 * LICENSE_PLACEHOLDER
 */
import { ReduxEntityTester } from '@regardsoss/tests-helpers'
import { ${NAME} } from '@regardsoss/model'
import ${NAME}Actions from '../../src/model/${NAME}Actions'
import ${NAME}Reducers from '../../src/model/${NAME}Reducers'
import ${NAME}Selectors from '../../src/model/${NAME}Selectors'

const backendServerResultList = {
  content: [{
    content: {
      id: 1,
    },
    links: [],
  }],
  metadata: {
    number: '0',
    size: '100',
    totalElements: 1,
  },
  links: [],
}
// URL options and parameters
const options = {}

const entityTester = new ReduxEntityTester(${NAME}Actions, ${NAME}Reducers, ${NAME}Selectors, React.PropTypes.objectOf(${NAME}).isRequired, backendServerResultList, options)

describe('[${MODULE_NAME}] Testing model ${NAME}', () => {
  before(() => {
    entityTester.beforeAll()
  })
  after(() => {
    entityTester.afterAll()
  })
  it('should retrieve the list of items, reduce it, and store it within the store.', (done) => {
    entityTester.runTests(done)
  })
})

```



