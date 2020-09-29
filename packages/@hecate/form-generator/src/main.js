import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './routers';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import Draggable from 'vuedraggable';
import * as core from '@hecate/core';

Vue.config.productionTip = false;

Vue.component('draggable', Draggable);

new Vue({
    router,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
