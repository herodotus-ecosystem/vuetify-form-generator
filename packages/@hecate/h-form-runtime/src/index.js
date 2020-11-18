import HFormRuntime from './HFormRuntime.vue';

HFormRuntime.install = function (Vue) {
    Vue.component(HFormRuntime.name, HFormRuntime);
};

if (typeof window != undefined && window.Vue) {
    HFormRuntime.install(window.Vue);
}

export { HFormRuntime };
