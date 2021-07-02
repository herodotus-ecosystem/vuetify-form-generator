import HIconList from './HIconList.vue';

HIconList.install = function (Vue) {
    Vue.component(HIconList.name, HIconList);
};

if (typeof window != undefined && window.Vue) {
    HIconList.install(window.Vue);
}

export { HIconList };
