import HCodeEditor from './HCodeEditor.vue';

HCodeEditor.install = function(Vue) {
    Vue.component(HCodeEditor.name, HCodeEditor);
};

if (typeof window != undefined && window.Vue) {
    HCodeEditor.install(window.Vue);
}

export default HCodeEditor;
