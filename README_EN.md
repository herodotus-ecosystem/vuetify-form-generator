[中文](./README.md) &nbsp; | &nbsp; English

<p align="center"><img src="./readme/vuetify.svg" height="200" alt="logo"/></p>
<h1 align="center"> Vuetify Form Generator &nbsp;🚀 &nbsp;Form designer & code generator </h1>
<h3 align="center">Based on JSON schema, full component engineering, WYSIWYG</h3>

---

<p align="center">
    <a href="https://vuetifyjs.com/zh-Hans/" target="_blank"><img src="https://img.shields.io/badge/%20Vuetify-2.4.0-blue" alt="Vuetify 2.4.0"></a>
    <a href="https://cn.vuejs.org/"><img src="https://img.shields.io/badge/Vue-2.6.12-brightgreen" alt="Vue 2.6.12"></a>
    <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue" alt="License MIT"></a>
    <a href="https://gitee.com/herodotus/vuetify-form-generator"><img src="https://gitee.com/herodotus/vuetify-form-generator/badge/star.svg?theme=dark" alt="Gitee star"></a>
    <a href="https://gitee.com/herodotus/vuetify-form-generator"><img src="https://gitee.com/herodotus/vuetify-form-generator/badge/fork.svg?theme=dark" alt="Gitee fork"></a>
</p>

<p align="center">
    <a href="https://github.com/Pointerv/vuetify-form-generator">Github</a> &nbsp; | &nbsp; 
    <a href="https://gitee.com/herodotus/vuetify-form-generator">Gitee</a> &nbsp; | &nbsp;
    <a href="http://herodotus.gitee.io/vuetify-form-generator" target="_blank">Online Demo</a>
</p>

## Interface preview

#### 1. Overview

![输入图片说明](./readme/preview.gif)

#### 2. Icon and color settings display

![输入图片说明](./readme/color-and-icon.gif)

#### 3. Rule setting display

![输入图片说明](./readme/rules.gif)

## Brief introduction

When working as a workflow service, feel the importance of dynamic forms. Therefore, slowly explore and learn, combined with their own needs, set up this set of dynamic form system.

-   This system is built on lerna and yarn workspaces, managing code projects in a monorepo manner (like this approach, as with Maven's modular engineering, most not using a bunch of node_modules perproject).
-   Built on Vue 2.0 and Vuetify 2.3.XX. Vue3 is not used,mainly Vuetify 3 is still under development.
-   Common components are compiled using rollup and do all the performance optimizations that can be done within the existing cognitive scope
-   The example module, based on the vue webpack approach, is deeply optimized for engineering packaging.
-   There will be a lot of components in the project, which is to gradually extract the generality involved in previous work and build a component library (the dynamic form system itself is also a component).
-   Form validation is designed based on VeeValidate and can be dynamically configured through the property panel.
-   Form designer, highly componentized design, scale by modifying configurations and adding components.
-   Local browser storage uses localForage,whichsupports indexedDB,WebSQL, and localStorage storage modes (automatically loading the best drivers for you);

This project is the front end of the back-end old gun, breadth and depth is certainly not as good as the pure front end, do not like not spray, but also please more inclusive and more exchanges, mutual promotion of mutual growth.

## 1. Development environment configuration(Windows)

The configuration of the development environment and the configuration of the related component environment variables are more general. If necessary, see the documentation：

[https://blog.csdn.net/Pointer_v/article/details/105432529](https://blog.csdn.net/Pointer_v/article/details/105432529)

## 2. The global installation

If you want to run the system correctly, you need to install some global tools in advance so that some orders can function properly.

> First make sure that the environment variables above are configured correctly.

```
// Install the component
npm install -g yarn
yarn global add lerna @vue/cli
```

## 3. Run to start

```
// 1. Installation

yarn install

Or

lerna bootstrap

// 2. Start service

yarn ws:example serve

or

yarn ws:example dev

// 3. Access address
http://localhost:3000
```

> Other instructions, see：<a href="#command">5. Commands</a>

## 4. Description of the use of each package in the project

| The name of the package  | Use.                                           | Description                                                                                                                                                                                                                                                                                                           |
| ------------------------ | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @hecate/core             | Common tool code, component packs              | Contains localforage,lodash,moment,shortid,sweetalert2, and generic tool code                                                                                                                                                                                                                                         |
| @hecate/example          | Component examples and running works           | Existing components can be run and used in the project, or they can be understood as component development environments 境                                                                                                                                                                                            |
| @hecate/form-service     | Nuxt environment                               | The SSR validation environment for dynamic forms                                                                                                                                                                                                                                                                      |
| @hecate/h-button         | Custom button components                       | The button with Tooltip encapsulated by itself                                                                                                                                                                                                                                                                        |
| @hecate/h-code-editor    | The code editor component                      | Code editor based on codemirror encapsulation, multilingual support, control through interface menus, etc. There are code tips and various functions.                                                                                                                                                                 |
| @hecate/h-code-mirror    | The underlying component of the code editor    | Code editor based on codemirror encapsulation, multilingual support, no parameter control interface, need to manually pass parameters                                                                                                                                                                                 |
| @hecate/h-form-generator | Dynamic form editing component                 | Vuetify-based Dynamic Form Designer                                                                                                                                                                                                                                                                                   |
| @hecate/h-form-renderer  | The dynamic form component draws the component | Dynamic form rendering core components, refer to [koumoul-dev/vuetify-jsonschema-form](https://github.com/koumoul-dev/vuetify-jsonschema-form) 。At present, the refactoring has not been completed, and it needs to be gradually refactored and perfected according to the continuous addition of support components |
| @hecate/h-form-runtime   | Dynamic form preview component                 | Displays form components based on the generated Schema                                                                                                                                                                                                                                                                |
| @hecate/h-icon-list      | Icon selects the component                     | Icon queries and selection components based on the material design icons encapsulation 件                                                                                                                                                                                                                             |

## <a id="command">5. Commands</a>

-   Specify the package to execute the yarn command under a package

```
yarn ws:**

// For example：
// Add package(added   from
npm)
yarn ws:example add lodash -D

// Delete package
yarn ws:example remove lodash

// Run example
yarn ws:example serve
```

-   Add components in this project as dependent packages (not yet uploaded to npm)

```
// Add h-button in the  project to example
// Note:  Bulk addition is not supported, one by one with
lerna add @hecate/h-button --scope @hecate/example

// Remove components from the project, using the yarn
yarn ws:example remove @hecate/h-button
```

-   Add a dependency package to the root

```
// -W means workspace, want to operate engineering-grade packages, this  parameter can not be missing
// -D specifies the meaning of devDependencies
// Add dependency
yarn add lodash -D -W

// Remove dependency
yarn add lodash -W
```

-   Upgrade dependent packages

```
yarn upgrade-interactive --latest

// Upgrade global dependency package
yarn global upgrade-interactive --latest
```

-   Compile all components

```
lerna run lib
```

-   Empty the dist

```
lerna run clean
```

-   Clears the node_modules

```
lerna clean
```

-   Have dependency packages re-associated across components

```
lerna bootstrap or yarn install
```

-   Submit the code to the git

```
yarn push
```

## 6. Solve the problem

### Case One：There was an error upgrading the dependency package

When you upgrade a dependent package using the **yarn upgrade-interactive--latest** command, especially in @hecate/form-service, there are dependency packages that can be upgraded (visually due to the use of Nuxt),and the followingerrors often occur.

```
Invariant Violation: expected workspace package to exist for "autoprefixer"
    at invariant (D:\LocalCaches\yarn\global\node_modules\yarn\lib\cli.js:2314:15)
    at _loop2 (D:\LocalCaches\yarn\global\node_modules\yarn\lib\cli.js:94537:9)
    at PackageHoister.init (D:\LocalCaches\yarn\global\node_modules\yarn\lib\cli.js:94596:19)
    at PackageLinker.getFlatHoistedTree (D:\LocalCaches\yarn\global\node_modules\yarn\lib\cli.js:48744:20)
    at PackageLinker.<anonymous> (D:\LocalCaches\yarn\global\node_modules\yarn\lib\cli.js:48755:27)
    at Generator.next (<anonymous>)
    at step (D:\LocalCaches\yarn\global\node_modules\yarn\lib\cli.js:310:30)
    at D:\LocalCaches\yarn\global\node_modules\yarn\lib\cli.js:328:14
    at new Promise (<anonymous>)
    at new F (D:\LocalCaches\yarn\global\node_modules\yarn\lib\cli.js:5301:28)
```

> The problem is the bug of yarn itself, and although yarn has been upgraded to 1.22.10,it's going to be a while。

#### (1) Solution one

In the project, the version of yarn is reduced to 1.19.XX. This approach works only for this project, so that other projects can still use the latest version of yarn,avoiding the problem of installing low versions of yarn globally

```
yarn policies set-version 1.19.XX

// After the .yarn directory is generated, yarn
install is executed

yarn install
```

> This command generates a .yarn directory and a .yarnrc file in the project, where the yarn version is specified.

#### (2) Solution two

This approach is a bit earthy, but you can ignore yarn's problems.

```
// 1. first query to see whichpackages can be upgraded
yarn upgrade-interactive --latest

// 2. specified package.json, manually modify version number

// 3. clear the component package dependent
lerna clean

// 4. reassociate dependent
lerna bootstrap

or

yarn install
```

### Case Two: Running a command is an error that prevents the script from running

Workaround: Open PowerShell(just search in Cortana), enter:

```
set-executionpolicy remotesigned
```

Then select Y andthe problem is solved.

## 7. Depending on the description

### The following dependency packages do not upgrade for the time being

| Depending on the package   | The version is currently in use | The latest version | Description                                                                                                 |
| -------------------------- | ------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------- |
| compression-webpack-plugin | 6.1.1                           | > 7.0.0            | Don't upgrade the package at this time, you'll throw an error                                               |
| remark-footnotes           | 2.0.0                           | = 3.0.0            | Do not upgrade the package at this time to resolve the Nuxt Start Warning issue                             |
| rollup-plugin-vue          | 5.1.9                           | > 6.0.0            | Do not upgrade the package at this time, wait for the project to change to Vue3 in the upgrade 级           |
| vee-validate               | 3.4.5                           | > 4.0.0            | Do not upgrade the package at this time, wait for the project to change to Vue3 in the upgrade 级           |
| webpack                    | 4.44.2                          | > 5.9.0            | Don't upgrade the package at this time, you need to wait until you upgrade with the relevant Vue version 虑 |

## 8. The next step is planned

-   Depending on your actual usage, you're increasing the number of different types of Form form components
-   Simplify and refactor core Renderer code based on the growing number of Form form components
-   Combined with the development of a personal microserver project, this project will be gradually integrated with the Camunda workflow, including the integration of the Camunda editor.
-   Based on the development progress of Vuetify3, develop a version based on Vue3 and Vuetify3
-   New versions based on Vue3 and Vuetify3 will be developed with TypeScript

## 9. Thank you

-   [koumoul-dev](https://github.com/koumoul-dev)
-   [Mr_HJ](https://gitee.com/mrhj)

## 10. License

[MIT](https://opensource.org/licenses/MIT)

## Donation

Open source is not easy, please respect the author's labor results, if this project can help you, please order a Star to encourage, a cup of coffee is also love. Your support is the biggest driving force for this project.

## Issue

Welcome to [Issue](https://github.com/Pointerv/vuetify-form-generator/issues/new)，and I'll try my best to perfect it.
