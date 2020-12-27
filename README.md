# 简介

我是一个后端老炮，在做工作流服务时，深感动态表单的重要性。所以，慢慢摸索和学习，结合自己的需求，搭建了本套动态表单系统。

-   本系统是基于 lerna 和 yarn workspaces 构建的， monorepo 方式管理代码的项目（很喜欢这种方式，和 Maven 的模块化工程一样，最主要是不用每个项目一堆 node_modules）
-   基于 Vue 2.0 和 Vuetify 2.3.XX 构建。没有使用 Vue3，主要是 Vuetify 3 还在开发中。
-   共性组件采用 rollup 进行编译，并且做了已有认知范围内，能够做到的所有性能优化处理
-   example 模块，基于 vue webpack 方式，对工程打包进行了深入优化。
-   项目中会有很多组件，原本是想把以往工作中涉及的通用性的东西，逐步构建出一个组件库（这个动态表单系统本身也是一个组件）。研究过一下规范化的组件库，感觉以本人现在水平做不到，因此才采用了 monorepo 方式。

# [一]、开发环境配置（Windows）

## 一、安装及配置 Nodejs

### （1）Nodejs 安装

下载 Windows 版的 Nodejs，进行按照提示安装即可，记得选择将 nodejs 增加到 PATH 一项，如果界面上没有，应该就是默认帮你搞定了，可以忽略我这句废话。

> 注意：当前应用必须使用 node.js v12 版本。虽然最新是 node.js v14, 但是 nuxt 在这个版本有问题，主要是在 windows 环境下 fibers 的编译问题。
> 当然，如果不介意安装 VS Studio 也可以。
> 如果在你的环境中，使用 node.js v14，运行没有问题，也请告诉我。以便我验证，和修改说明。

### （2）验证是否安装成功

在 CMD 中，输入以下命令，

```cmd
node -v

npm -v
```

如果正常显示版本号，即安装成功。

### （3）配置 Nodejs 环境变量

Nodejs 安装完成之后，默认会将 node.exe 的路径，添加到系统的环境变量中，如果没有请手动添加。除此之外还要进行其他的配置。

#### 1、配置 prefix 和 cache 目录

node.js 安装成功之后，prefix 和 cache 目录默认是在 C:盘，可以重新配置 prefix 和 cache 目录，减少 C 盘空间的占用。

-   改变 npm 全局安装位置

```cmd
npm config set prefix "你的磁盘路径"
```

本示例目录地址为：C:\Program Files\nodejs，可根据你的实际情况进行修改

```cmd
npm config set prefix “C:\Program Files\nodejs\node_global”
```

-   改变 npm 缓存位置

```cmd
npm config set cache "你的磁盘路径"
```

本示例目录地址为：C:\Program Files\nodejs，可根据你的实际情况进行修改

```cmd
npm config set cache  “C:\Program Files\nodejs\node_cache
```

#### 2、配置环境变量

右击“计算机”—>"属性"—>"高级系统设置"—>"环境变量"

**在"系统变量"中,设置 NODE_PATH**。在系统变量里新建 NODE_PATH ,值为

```
C:\Program Files\nodejs\node_global\node_modules
```

> 这个值就是**配置 prefix 和 cache 目录**步骤中，通过 **“npm config set prefix”** 设置的路径，加上**node_modules**。可以，用下面命令查看
>
> ```
> npm config get prefix
> ```

**在"用户变量"中,修改 path**。修改用户变量中的 path，添加 C:\Program Files\nodejs\node_global\。

> 这个值就是**配置 prefix 和 cache 目录**步骤中，通过 **“npm config set prefix”** 设置的路径。

#### 3、配置阿里源

将 npm 使用的源，修改为阿里源，以提升速度

```
npm config set registry https://registry.npm.taobao.org
```

## 二、安装及配置 Yarn

### （1）Yarn 简介

yarn 是 facebook 发布的一款取代 npm 的包管理工具。

yarn 的特点：

-   速度超快。Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。
-   超级安全。在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。
-   超级可靠。使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作。

### （2）Yarn 安装

-   方式一：使用 npm 安装

```
npm install -g yarn
```

-   方式二：使用安装文件安装

> 即在官网中下载 exe 文件安装（Windows），其它系统根据实际情况安装。

### （3）配置 prefix 和 cache 目录

-   改变 yarn 全局安装位置

```
yarn config set global-folder "你的磁盘路径"
```

本示例目录地址为：C:\Program Files\yarn，可根据你的实际情况进行修改

```
yarn config set global-folder "C:\Program Files\yarn\global"
```

-   改变 yarn 缓存位置

```
yarn config set cache-folder "你的磁盘路径"
```

本示例目录地址为：C:\Program Files\yarn，可根据你的实际情况进行修改

```
yarn config set cache-folder "C:\Program Files\yarn\cache"
```

> 或者在你的系统用户目录找到 `.yarnrc` 的文件，打开它，直接进行编辑

### （4）配置环境变量

在我们使用**全局安装**包的时候，会在 “C:\Program Files\yarn\global”（上面的示例路径，要根据自己的实际情况配置） 下生成 node_modules\.bin 目录

我们需要将 C:\Program Files\yarn\global\node_modules\.bin 整个目录 添加到**系统环境变量**中去，否则通过 yarn 添加的全局包 在 cmd 中是找不到的。

检查当前 yarn 的 bin 的 位置

```
yarn global bin
```

检查当前 yarn 的 全局安装位置

```
yarn global dir
```

### （5）Yarn 配置阿里源量

#### 1、查看一下当前源

```
yarn config get registry
```

#### 2、切换为淘宝源

```
yarn config set registry https://registry.npm.taobao.org
yarn config set sass_binary_site "https://npm.taobao.org/mirrors/node-sass/"
yarn config set phantomjs_cdnurl "http://cnpmjs.org/downloads"
yarn config set electron_mirror "https://npm.taobao.org/mirrors/electron/"
yarn config set sqlite3_binary_host_mirror "https://foxgis.oss-cn-shanghai.aliyuncs.com/"
yarn config set profiler_binary_host_mirror "https://npm.taobao.org/mirrors/node-inspector/"
yarn config set chromedriver_cdnurl "https://cdn.npm.taobao.org/dist/chromedriver"
```

# [二]、全局安装

如果要正确运行本系统，需要提前安装一些全局工具，以便一些命令可以正常运行。

> 请首先确保上面的环境变量配置正确。

```
// 请提前全局安装一下组件
npm install -g yarn
yarn global add lerna @vue/cli
```

# [三]、工程中各个包用途说明

| 包名                     | 当前版本 | 用途                 | 说明                                                                                                                                                                                   |
| ------------------------ | -------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @hecate/core             | 1.0.0    | 通用工具代码、组件包 | 包含 localforage、lodash、moment、shortid、sweetalert2 以及通用工具代码                                                                                                                |
| @hecate/example          | 1.0.0    | 组件示例及运行工程   | 可以在该工程中，运行和使用已有组件，也可以理解为组件的开发环境                                                                                                                         |
| @hecate/form-service     | 1.0.0    | Nuxt 环境            | 动态表单的 SSR 验证环境                                                                                                                                                                |
| @hecate/h-bpmn-moddle    | 1.0.0    | Camunda 模型编辑器   | 预留包，目前还不可用，相关代码尚未迁移过来（后续会安排迁移）                                                                                                                           |
| @hecate/h-button         | 1.0.0    | 自定义按钮组件       | 自己封装的有 Tooltip 的 button                                                                                                                                                         |
| @hecate/h-code-editor    | 1.0.0    | 代码编辑器组件       | 基于 codemirror 封装的代码编辑器，支持多种语言，通过界面菜单等进行控制。有代码提示以及各式化等功能。                                                                                   |
| @hecate/h-code-mirror    | 1.0.0    | 代码编辑器基础组件   | 基于 codemirror 封装的代码编辑器，支持多种语言，没有参数控制界面，需要手动传递参数                                                                                                     |
| @hecate/h-form-generator | 1.0.0    | 动态表单编辑组件     | 基于 Vuetify 的动态表单设计器                                                                                                                                                          |
| @hecate/h-form-renderer  | 1.0.0    | 动态表单组件绘制组件 | 动态表单渲染核心组件，参考[koumoul-dev/vuetify-jsonschema-form](https://github.com/koumoul-dev/vuetify-jsonschema-form) 。目前，尚未重构完成，需要根据支持组件的不断添加，逐步重构完善 |
| @hecate/h-form-runtime   | 1.0.0    | 动态表单预览组件     | 基于生成的 Schema 显示表单组件                                                                                                                                                         |
| @hecate/h-icon-list      | 1.0.0    | Icon 选择组件        | 基于 material design icons 封装的图标查询和选择组件                                                                                                                                    |

# [四]、常用命令

-   指定包，在某个包下执行 yarn 命令

```
yarn ws:**

// 例如：
// 添加包（从npm中添加）
yarn ws:example add lodash -D

// 删除包
yarn ws:example remove lodash

// 运行example
yarn ws:example serve
```

-   添加本工程中的组件作为依赖包（尚未上传至 npm）

```
// 将工程中的h-button 添加至example中
// 注意：不支持批量添加多个，要一个一个加
lerna add @hecate/h-button --scope @hecate/example

// 删除本工程中的组件，使用yarn命令即可
yarn ws:example remove @hecate/h-button
```

-   在根目录添加依赖包

```
// -W 意思是指工作区，想要操作工程级的包，这个参数不能缺
// -D 指定devDependencies的意思
// 添加组件
yarn add lodash -D -W

// 删除组件
yarn add lodash -W
```

-   升级依赖包

```
yarn upgrade-interactive --latest

// 升级全局依赖包
yarn global upgrade-interactive --latest
```

-   编译所有组件

```
lerna run lib
```

-   清空组件 dist

```
lerna run clean
```

-   清除组件中的 node_modules

```
lerna clean
```

-   让各个组件中重新关联依赖包

```
lerna bootstrap 或 yarn install
```

-   提交代码

```
yarn push
```

# [五]、问题解决

## 问题一：升级依赖包时出错

使用**yarn upgrade-interactive --latest**命令升级依赖包的时候，特别是@hecate/form-service 中，有依赖包可以升级时（目测是由于使用了 Nuxt），经常会出现下面的错误。

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

> 这个问题是 yarn 本身的 Bug，虽然 yarn 已经升级到了 1.22.10，但是一会好一会不好的。

### （1）解决办法一

在工程中将 yarn 的版本，降到 1.19.XX。这种方法，只对本工程有效，这样其它工程仍旧可以使用最新版的 yarn，避免了全局安装低版本 yarn 的问题

```
yarn policies set-version 1.19.XX

// .yarn 目录生成后，执行
yarn install
```

> 这个命令会在工程中生成一个.yarn 目录以及一个.yarnrc 文件，并在其中指定 yarn 版本。

### （2）解决办法二

这种办法土一点，但是可以不用去理会 yarn 的不管问题。

```
// 1、先查询看看那些包可以升级
yarn upgrade-interactive --latest

// 2、到指定的包的package.json中，手工修改版本号

// 3、清除组件包的依赖
lerna clean

// 4、重新关联依赖
lerna bootstrap

或

yarn install
```

## 问题二：运行命令是出现禁止脚本运行的错误

解决方法：打开 PowerShell（在小娜里搜就行），输入：

```
set-executionpolicy remotesigned
```

之后选择 Y，问题就解决了。

# [六]、依赖说明

## 以下依赖包暂时不要升级

| 依赖包                     | 当前使用版本 | 最新版本 | 说明                                                    |
| -------------------------- | ------------ | -------- | ------------------------------------------------------- |
| compression-webpack-plugin | 6.1.1        | > 7.0.0  | 目前不要升级该包，会抛错误                              |
| remark-footnotes           | 2.0.0        | = 3.0.0  | 目前不要升级该包，该包是为了解决 Nuxt 启动 Warning 问题 |
| rollup-plugin-vue          | 5.1.9        | > 6.0.0  | 目前不要升级该包，等工程变更为 Vue3 在进行升级          |
| vee-validate               | 3.4.5        | > 4.0.0  | 目前不要升级该包，等工程变更为 Vue3 在进行升级          |
| webpack                    | 4.44.2       | > 5.9.0  | 目前不要升级该包，需要等到使用相关 Vue 版本升级后再考虑 |

# [七]、PR 鸣谢

-   [koumoul-dev](https://github.com/koumoul-dev)
-   [Mr_HJ](https://gitee.com/mrhj)

# [八]、开源协议

[MIT](https://opensource.org/licenses/MIT)

# 捐赠

如果你觉得本项目对你有所帮助，可以请作者喝杯咖啡。你的支持，才是本项目前进的最大动力。

# Issue

欢迎提 [Issue](https://gitee.com/pointer_v/hecate-monorepo/issues)，我会尽所能尽量完善。
