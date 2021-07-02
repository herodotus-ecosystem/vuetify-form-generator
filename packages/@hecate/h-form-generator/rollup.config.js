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
        '@hecate/core': '_core',
        '@hecate/h-code-mirror': 'HCodeMirror',
        '@hecate/h-form-runtime': 'HFormRuntime',
        '@hecate/h-form-renderer': 'HFormRenderer',
        '@hecate/h-icon-list': 'HIconList',
        'throttle-debounce': 'throttleDebounce',
    },
    external: [
        // 不被打包的库，比如在项目中会被引入
        '@hecate/core',
        '@hecate/h-code-mirror',
        '@hecate/h-form-renderer',
        '@hecate/h-form-runtime',
        '@hecate/h-icon-list',
        'throttle-debounce',
    ],
};

const entries = (() => {
    let entries = {};
    entries['main'] = './src/index.js';

    let result = rollups.establish(entries, configs);
    return result;
})();

export default entries;
