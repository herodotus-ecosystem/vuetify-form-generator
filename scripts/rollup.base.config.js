const {
    babel,
    buble,
    commonjs,
    filesize,
    image,
    json,
    multi,
    nodeResolve,
    postcss,
    progress,
    sizes,
    strip,
    terser,
    vue,
    vuetify,
    nested,
    cssnext,
    cssnano,
} = require('./rollup.plugins');
const { path } = require('./utils');

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
        plugins: [nested(), cssnext({ warnForDuplicates: false }), cssnano()],
    }),
    vue({
        css: false,
    }),
    vuetify(),
    babel({
        exclude: ['node_modules/**'],
        babelHelpers: 'runtime',
        configFile: path.resolve('../../../', 'babel.config.js'),
    }),
    nodeResolve(),
    commonjs({
        include: 'node_modules/**',
    }),

    json(),
    image(),
    multi(),
    terser(),
    strip(),
    progress({
        clearLine: false,
    }),
    filesize(),
    buble(),
    sizes({
        details: true,
    }),
];

const defaultGlobal = {
    'vuetify/lib': 'Vuetify',
    '@mdi/js': 'mdi-js',
    '@babel/runtime-corejs3/core-js/array/from': '_Array$from',
    '@babel/runtime-corejs3/core-js/array/is-array': '_Array$isArray',
    '@babel/runtime-corejs3/core-js/get-iterator': '_getIterator',
    '@babel/runtime-corejs3/core-js/get-iterator-method': '_getIteratorMethod',
    '@babel/runtime-corejs3/core-js/json/stringify': '_JSON$stringify',
    '@babel/runtime-corejs3/core-js/object/define-property': '_Object$defineProperty',
    '@babel/runtime-corejs3/core-js/object/define-properties': '_Object$defineProperties',
    '@babel/runtime-corejs3/core-js/object/get-own-property-descriptors': '_Object$getOwnPropertyDescriptors',
    '@babel/runtime-corejs3/core-js/object/get-own-property-descriptor': '_Object$getOwnPropertyDescriptor',
    '@babel/runtime-corejs3/core-js/object/get-own-property-symbols': '_Object$getOwnPropertySymbols',
    '@babel/runtime-corejs3/core-js/object/keys': '_Object$keys',
    '@babel/runtime-corejs3/core-js/object/assign': '_Object$assign',
    '@babel/runtime-corejs3/core-js/parse-int': '_parseInt',
    '@babel/runtime-corejs3/core-js/parse-float': '_parseFloat',
    '@babel/runtime-corejs3/core-js/promise': '_Promise',
    '@babel/runtime-corejs3/core-js/symbol': '_Symbol',
    '@babel/runtime-corejs3/core-js/instance/map': '_mapInstanceProperty',
    '@babel/runtime-corejs3/core-js/instance/concat': '_concatInstanceProperty',
    '@babel/runtime-corejs3/core-js/instance/starts-with': '_startsWithInstanceProperty',
    '@babel/runtime-corejs3/core-js/instance/for-each': '_forEachInstanceProperty',
    '@babel/runtime-corejs3/core-js/instance/filter': '_filterInstanceProperty',
    '@babel/runtime-corejs3/core-js/instance/includes': '_includesInstanceProperty',
    '@babel/runtime-corejs3/core-js/instance/find': '_findInstanceProperty',
    '@babel/runtime-corejs3/core-js/instance/index-of': '_indexOfInstanceProperty',
    '@babel/runtime-corejs3/core-js/instance/reverse': '_reverseInstanceProperty',
    '@babel/runtime-corejs3/core-js/instance/ends-with': '_endsWithInstanceProperty',
    '@babel/runtime-corejs3/core-js/instance/reduce': '_reduceInstanceProperty',
    '@babel/runtime-corejs3/core-js/instance/slice': '_sliceInstanceProperty',
    '@babel/runtime-corejs3/helpers/esm/asyncToGenerator': '_asyncToGenerator',
    '@babel/runtime-corejs3/helpers/esm/defineProperty': '_defineProperty',
    '@babel/runtime-corejs3/helpers/esm/toConsumableArray': '_toConsumableArray',
    '@babel/runtime-corejs3/helpers/esm/typeof': '_typeof',
    '@babel/runtime-corejs3/regenerator': '_regeneratorRuntime',
    'vue-runtime-helpers/dist/normalize-component.mjs': '__vue_normalize__',
};
const defaultExternal = [
    'vuetify/lib',
    '@mdi/js',
    /core-js/,
    /@babel\/runtime-corejs3/,
    /vue-runtime-helpers/,
    /regenerator-runtime/,
];

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
