import HCodeMirror from './HCodeMirror.vue';

import { JSHINT } from 'jshint';
import csslint from 'csslint';
window.JSHINT = JSHINT;
window.CSSLint = csslint;
import { parser } from 'jsonlint';
window.jsonlint = parser;

HCodeMirror.install = function (Vue) {
    Vue.component(HCodeMirror.name, HCodeMirror);
};

if (typeof window != undefined && window.Vue) {
    HCodeMirror.install(window.Vue);
}

export default HCodeMirror;
