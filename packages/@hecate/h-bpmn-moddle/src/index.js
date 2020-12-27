import HBpmnModdle from './HBpmnModdle.vue';

HBpmnModdle.install = function(Vue) {
    Vue.component(HBpmnModdle.name, HBpmnModdle);
};

if (typeof window != undefined && window.Vue) {
    HBpmnModdle.install(window.Vue);
}

export { HBpmnModdle };
