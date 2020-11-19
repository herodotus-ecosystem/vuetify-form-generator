const babel = require('@rollup/plugin-babel').babel;
const nodeResolve = require('@rollup/plugin-node-resolve').nodeResolve;
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const strip = require('@rollup/plugin-strip');
const multi = require('@rollup/plugin-multi-entry');
const image = require('@rollup/plugin-image');
const vue = require('rollup-plugin-vue');
const postcss = require('rollup-plugin-postcss');
const vuetify = require('rollup-plugin-vuetify');
const terser = require('rollup-plugin-terser').terser;
const filesize = require('rollup-plugin-filesize');
const progress = require('rollup-plugin-progress');
const url = require('postcss-url');

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

const defaultPlugins = [
    image(),
    babel({
        exclude: '**/node_modules/**',
        babelHelpers: 'runtime',
    }),
    nodeResolve(),
    commonjs(),
    postcss({
        // extract: utils.path.resolve("dist/" + name + "/style.css"),

        // Extract CSS to the same location where JS file is generated but with .css extension.
        extract: true,
        // Use named exports alongside default export.
        namedExports: true,
        // Minimize CSS, boolean or options for cssnano.
        minimize: true,
        // Enable sourceMap.
        sourceMap: true,
        // This plugin will process files ending with these extensions and the extensions supported by custom loaders.
        extensions: ['.sass', '.scss', '.css'],
        plugins: [
            url({
                url: 'inline', // enable inline assets using base64 encoding
                maxSize: 10, // maximum file size to inline (in kilobytes)
                fallback: 'copy', // fallback method to use if max size is exceeded
            }),
        ],
    }),
    terser(),
    json(),
    strip(),
    multi(),
    vue({
        css: false,
    }),
    vuetify(),
    filesize(),
    progress({
        clearLine: false,
    }),
];

const defaultGlobal = {
    'vuetify/lib': 'Vuetify',
    '@mdi/js': 'mdi-js',
};
const defaultExternal = ['vuetify/lib', '@mdi/js'];

const assignGlobal = (param = {}) => {
    if (param && Object.keys(param).length > 0) {
        return Object.assign(defaultGlobal, param);
    } else {
        return defaultGlobal;
    }
};

const assignExternal = (param = []) => {
    if (param && param.length > 0) {
        return param.concat(defaultExternal);
    } else {
        return defaultExternal;
    }
};

/**
 * amd – 异步模块定义，用于像RequireJS这样的模块加载器
 * cjs – CommonJS，适用于 Node 和 Browserify/Webpack
 * esm – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
 * iife – 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
 * umd – 通用模块定义，以amd，cjs 和 iife 为一体
 * system - SystemJS 加载器格式
 */
const createOutputType = (entryKey, entryValue, format, globals = {}) => {
    let path = JSON.parse(JSON.stringify(entryValue));

    let result = {};
    if (format === 'iife') {
        result.file = path.replace('./src', 'dist').replace('js', 'min.js');
    } else {
        result.file = path.replace('./src', 'dist').replace('js', format + '.js');
    }

    result.format = format;
    result.globals = assignGlobal(globals);

    if (format === 'umd' || format === 'iife') {
        result.name = entryKey;
    }

    // console.log('[HRB] create output type: ', result);
    return result;
};

const createOutput = (name, path, configs) => {
    let result = [];
    if (configs.types && configs.types.length > 0) {
        for (let index in configs.types) {
            let output = createOutputType(name, path, configs.types[index], configs.globals);
            result.push(output);
        }
    } else {
        result.push(createOutputType(name, path, 'umd', configs.globals));
    }
    return result;
};

const createEntry = (name, path, configs) => {
    return {
        input: path,
        output: createOutput(name, path, configs),
        plugins: configs.plugins ? configs.plugins : defaultPlugins,
        external: assignExternal(configs.external),
    };
};

const establish = (entries, configs = {}) => {
    let result = [];
    for (let item in entries) {
        let entry = createEntry(item, entries[item], configs);
        // console.log('[HRB] create entry : ', entry);
        result.push(entry);
    }

    return result;
};

module.exports = { defaultPlugins, establish };
