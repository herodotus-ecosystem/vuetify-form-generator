import HCodeMirror from './HCodeMirror.vue';

HCodeMirror.install = function(Vue) {
    Vue.component(HCodeMirror.name, HCodeMirror);
};

if (typeof window != undefined && window.Vue) {
    HCodeMirror.install(window.Vue);
}

export default HCodeMirror;
