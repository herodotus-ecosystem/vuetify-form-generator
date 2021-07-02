module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        [
            '@babel/preset-env',
            {
                // 配置"modules": false是因为rollup会处理es6模块语法，其余的es6语法才由babel处理
                modules: false,
                useBuiltIns: 'usage',
                shippedProposals: true,
                corejs: { version: 3, proposals: true },
                targets: '> 0.25%, not dead',
            },
        ],
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        // 避免在每个模块的头部重复引用相同的"helpers"方法，只需要在构建完的bundle头部引入一次就够了
        '@babel/plugin-external-helpers',
        [
            '@babel/plugin-transform-runtime',
            {
                corejs: { version: 3, proposals: true },
                useESModules: true,
            },
        ],
    ],
    sourceType: 'unambiguous',
};
