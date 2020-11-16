const { rollups } = require('../../../scripts');

/**
 * globals配置写法与import配置写法正好相反
 * 例如：
 * Main.js:
 *
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 *
 * config.js
 *
 * export default {
 *   external: ['react', 'react-dom'],
 *   globals: {
 *     'react': 'React',
 *     'react-dom': 'ReactDOM'
 *   },
 * };
 */
const configs = {
    types: ['umd', 'iife', 'esm'],
    globals: {
        '@hecate/h-form-renderer': 'HFormRenderer',
        'vee-validate': 'vee-validate',
    },
    external: [
        // 不被打包的库，比如在项目中会被引入
        '@hecate/h-form-renderer',
        'vee-validate',
    ],
};

const entries = (() => {
    let entries = {};
    entries['main'] = './src/index.js';

    let result = rollups.establish(entries, configs);
    return result;
})();

export default entries;
