import Vue from 'vue';
import Vuetify, { VContainer, VRow, VCol, VTextField, VCard, VMain } from 'vuetify/lib';
import zhHans from 'vuetify/lib/locale/zh-Hans';

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
