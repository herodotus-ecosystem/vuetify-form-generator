module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                // 配置"modules": false是因为rollup会处理es6模块语法，其余的es6语法才由babel处理
                modules: false,
                useBuiltIns: 'usage',
                shippedProposals: true,
                corejs: { version: 3, proposals: true },
                targets: '> 0.25%, not dead'
            }
        ]
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        // 避免在每个模块的头部重复引用相同的"helpers"方法，只需要在构建完的bundle头部引入一次就够了
        '@babel/plugin-external-helpers',
        [
            '@babel/plugin-transform-runtime',
            {
                // 这里的corejs与presets里设置的corejs是不同的，这里的corejs指定了一个runtime-corejs的版本，因此使用时也需要通过 NPM 安装对应的包
                // https://blog.windstone.cc/es6/babel/@babel/plugin-transform-runtime.html#%E4%BD%BF%E7%94%A8-babel-plugin-transform-runtime-%E7%9A%84%E5%8E%9F%E5%9B%A0
                corejs: { version: 3, proposals: true },
                useESModules: true
            }
        ]
    ],
    sourceType: 'unambiguous'
};
