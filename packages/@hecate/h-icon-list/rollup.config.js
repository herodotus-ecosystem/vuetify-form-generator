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
    types: ['umd', 'iife'],
    globals: {
        jshint: 'jshint',
        csslint: 'csslint',
        jsonlint: 'jsonlint',
        htmlhint: 'htmlhint',
        'vue-codemirror': 'vueCodemirror',
    },
    external: [
        // 不被打包的库，比如在项目中会被引入
        'csslint',
        'file',
        'htmlhint',
        'jshint',
        'jsonlint',
        'script-loader',
        'system',
        'vue-codemirror',
        'script-loader!jsonlint',
    ],
};

const entries = (() => {
    let entries = {};
    entries['main'] = './src/index.js';

    let result = rollups.establish(entries, configs);
    return result;
})();

export default entries;
