import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './routers';
import vuetify from './plugins/vuetify';
import VeeValidate from './plugins/vee-validate';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import Draggable from 'vuedraggable';

Vue.config.productionTip = false;

Vue.use(VeeValidate);

Vue.component('draggable', Draggable);

new Vue({
    router,
    vuetify,
    render: (h) => h(App)
}).$mount('#app');
