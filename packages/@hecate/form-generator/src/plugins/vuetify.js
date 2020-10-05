import Vue from 'vue';
import Vuetify, { VContainer, VRow, VCol, VTextField, VCard, VMain } from 'vuetify/lib';
import zhHans from 'vuetify/es5/locale/zh-Hans';

Vue.use(Vuetify, {
    components: { VContainer, VRow, VCol, VTextField, VCard, VMain },
});

export default new Vuetify({
    rtl: false,
    theme: {
        options: {
            customProperties: true,
        },
    },
    lang: {
        locales: { zhHans },
        current: 'zh-Hans',
    },
});
