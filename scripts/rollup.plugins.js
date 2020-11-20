const babel = require('@rollup/plugin-babel').babel;
const buble = require('@rollup/plugin-buble');
const commonjs = require('@rollup/plugin-commonjs');
const filesize = require('rollup-plugin-filesize');
const image = require('@rollup/plugin-image');
const json = require('@rollup/plugin-json');
const multi = require('@rollup/plugin-multi-entry');
const nodeResolve = require('@rollup/plugin-node-resolve').nodeResolve;
const postcss = require('rollup-plugin-postcss');
const progress = require('rollup-plugin-progress');
const sizes = require('rollup-plugin-sizes');
const strip = require('@rollup/plugin-strip');
const terser = require('rollup-plugin-terser').terser;
const url = require('@rollup/plugin-url');
const vue = require('rollup-plugin-vue');
const vuetify = require('rollup-plugin-vuetify');

const nested = require('postcss-nested');
const cssnext = require('postcss-cssnext');
const cssnano = require('cssnano');

module.exports = {
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
    url,
    vue,
    vuetify,
    nested,
    cssnext,
    cssnano,
};
