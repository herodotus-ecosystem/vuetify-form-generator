import HFormGenerator from './components/HFormGenerator.vue';

HFormGenerator.install = function (Vue) {
    Vue.component(HFormGenerator.name, HFormGenerator);
};

if (typeof window != undefined && window.Vue) {
    HFormGenerator.install(window.Vue);
}

export { HFormGenerator };
