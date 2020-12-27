import HButton from './HButton.vue';

HButton.install = function (Vue) {
    Vue.component(HButton.name, HButton);
};

if (typeof window != undefined && window.Vue) {
    HButton.install(window.Vue);
}

export { HButton };
