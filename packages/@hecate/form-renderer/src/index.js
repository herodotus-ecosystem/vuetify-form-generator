import HFormRenderer from './components/HFormRenderer.vue';

HFormRenderer.install = function (Vue) {
    Vue.component(HFormRenderer.name, HFormRenderer);
};

if (typeof window != undefined && window.Vue) {
    HFormRenderer.install(window.Vue);
}

export { HFormRenderer };
