const { utils, rollups } = require('../../../scripts');

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
    types: ['umd', 'esm', 'iife'],
    globals: {
        moment: 'moment',
        lodash: 'lodash',
        shortid: 'shortid',
        sweetalert2: 'Swal',
        localforage: 'localForage',
    },
    external: [
        // 不被打包的库，比如在项目中会被引入
        'moment',
        'sweetalert2',
        'shortid',
        'localforage',
        'lodash',
    ],
};

const entries = (() => {
    let entries = utils.getEntries(['./src/lib', './src/locales', './src/convertor'], /^index\.js$/);
    entries['main'] = './src/index.js';

    let result = rollups.establish(entries, configs);
    return result;
})();

export default entries;
