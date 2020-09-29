import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import strip from '@rollup/plugin-strip';
import multi from '@rollup/plugin-multi-entry';
import { terser } from 'rollup-plugin-terser';

const utils = require('./build/utils');

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
const globals = {
    moment: 'moment',
    lodash: 'lodash',
    shortid: 'shortid',
    sweetalert2: 'Swal',
    localforage: 'localForage',
};

const external = [
    // 不被打包的库，比如在项目中会被引入
    'moment',
    'sweetalert2',
    'shortid',
    'localforage',
    'lodash',
];

const plugins = [
    json(),
    strip(),
    multi(),
    nodeResolve(),
    babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
    }),
    terser(),
    commonjs(),
];

/**
 * amd – 异步模块定义，用于像RequireJS这样的模块加载器
 * cjs – CommonJS，适用于 Node 和 Browserify/Webpack
 * esm – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
 * iife – 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
 * umd – 通用模块定义，以amd，cjs 和 iife 为一体
 * system - SystemJS 加载器格式
 */
const createOutputType = (entryKey, entryValue, format) => {
    let path = JSON.parse(JSON.stringify(entryValue));

    let result = {};
    if (format === 'iife') {
        result.file = path.replace('./src', 'dist').replace('js', 'min.js');
    } else {
        result.file = path.replace('./src', 'dist').replace('js', format + '.js');
    }

    result.format = format;
    result.globals = globals;
    if (format === 'umd' || format === 'iife') {
        result.name = entryKey;
    }

    return result;
};

const createOutput = (name, path) => {
    return [
        createOutputType(name, path, 'umd'),
        createOutputType(name, path, 'esm'),
        createOutputType(name, path, 'iife'),
    ];
};

const createEntry = (name, path) => {
    return {
        input: path,
        output: createOutput(name, path),
        plugins: plugins,
        external: external,
    };
};

const entries = (() => {
    let entries = utils.getEntries(['./src/lib', './src/locales'], /^index\.js$/);
    entries['Hecate'] = './src/index.js';

    let result = [];
    for (let item in entries) {
        let entry = createEntry(item, entries[item]);
        result.push(entry);
    }

    return result;
})();

export default entries;
