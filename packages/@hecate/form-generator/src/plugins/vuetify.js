import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueI18n from 'vue-i18n';

import { locales } from '@hecate/core';

Vue.use(Vuetify);
Vue.use(VueI18n);

const { en, zh } = locales;

const i18n = new VueI18n({
    locale: 'zh',
    messages: { zh, en }
});

export default new Vuetify({
    lang: {
        t: (key, ...params) => i18n.t(key, params)
    }
});
