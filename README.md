# 依赖说明

## Node.js 版本

> 当前应用必须使用 node.js v12 版本。虽然最新是 node.js v14, 但是 nuxt 在这个版本有问题，主要是在 windows 环境下 fibers 的编译问题。
> 当然，如果不介意安装 VS Studio 也可以。

## 以下依赖包暂时不要升级

| 依赖包              | 当前使用版本 | 最新版本 | 说明                                                            |
| ------------------- | ------------ | -------- | --------------------------------------------------------------- |
| autoprefixer        | 9.8.6        | > 10.0.4 | 目前不要升级该包，需要等到 rollup-plugin-postcss 升级之后再考虑 |
| postcss             | 7.0.35       | > 8.1.10 | 目前不要升级该包，需要等到 rollup-plugin-postcss 升级之后再考虑 |
| postcss-nested      | 4.2.3        | > 5.0.1  | 目前不要升级该包，需要等到 rollup-plugin-postcss 升级之后再考虑 |
| postcss-simple-vars | 5.0.2        | > 6.0.1  | 目前不要升级该包，需要等到 rollup-plugin-postcss 升级之后再考虑 |
| remark-footnotes    | 2.0.0        | = 3.0.0  | 目前不要升级该包，该包是为了解决 Nuxt 启动 Warning 问题         |
| rollup-plugin-vue   | 5.1.9        | > 6.0.0  | 目前不要升级该包，等工程变更为 Vue3 在进行升级                  |
| webpack             | 4.44.2       | > 5.9.0  | 目前不要升级该包，需要等到使用相关 Vue 版本升级后再考虑         |
