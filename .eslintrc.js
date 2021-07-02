module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    plugins: ['vue'],
    rules: {
        'prettier/prettier': ['off', { quotes: 0 }],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-undef': 'off',
        //不能有声明后未被使用的变量或参数
        'no-unused-vars': ['off', { vars: 'all', args: 'after-used' }],
        'vue/no-unused-vars': ['off', { vars: 'all', args: 'after-used' }],
    },
};
