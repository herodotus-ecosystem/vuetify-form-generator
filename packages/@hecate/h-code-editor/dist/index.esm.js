import 'core-js/modules/es.function.name.js';
import e from '@babel/runtime-corejs3/helpers/esm/typeof';
import {
    VIcon as o,
    VBtn as t,
    VToolbarTitle as r,
    VSpacer as a,
    VSwitch as n,
    VSelect as i,
    VToolbar as d,
    VCard as l,
} from 'vuetify/lib';
import { HButton as s } from '@hecate/h-button';
import { HCodeMirror as c } from '@hecate/h-code-mirror';
import m from 'vue-runtime-helpers/dist/normalize-component.mjs';
var h = m(
    {
        render: function () {
            var e = this,
                o = e.$createElement,
                t = e._self._c || o;
            return t(
                'v-card',
                [
                    t(
                        'v-toolbar',
                        { attrs: { dense: '', color: 'blue darken-3', dark: '' } },
                        [
                            t('v-btn', { attrs: { large: '', icon: '' } }, [t('v-icon', [e._v('mdi-volleyball')])], 1),
                            e._v(' '),
                            t('v-toolbar-title', [e._v('Hecate Code Editor')]),
                            e._v(' '),
                            t('v-spacer'),
                            e._v(' '),
                            t('h-button', { attrs: { icon: '', 'icon-name': 'mdi-lock-reset', tooltip: '重置' } }),
                            e._v(' '),
                            t('v-switch', {
                                staticClass: 'ml-3',
                                attrs: {
                                    label: e.readOnlyLabel,
                                    'true-value': !1,
                                    'false-value': !0,
                                    inset: '',
                                    'hide-details': '',
                                },
                                model: {
                                    value: e.readOnly,
                                    callback: function (o) {
                                        e.readOnly = o;
                                    },
                                    expression: 'readOnly',
                                },
                            }),
                            e._v(' '),
                            t('v-select', {
                                staticClass: 'ml-3',
                                attrs: {
                                    items: e.themeOptions,
                                    flat: '',
                                    'solo-inverted': '',
                                    'hide-details': '',
                                    dense: '',
                                    label: '请选择主题',
                                    'prepend-inner-icon': 'mdi-theme-light-dark',
                                    'no-data-text': '没有数据',
                                },
                                on: { change: e.onThemeChange },
                            }),
                            e._v(' '),
                            t('v-select', {
                                staticClass: 'ml-3',
                                attrs: {
                                    items: e.modeOptions,
                                    flat: '',
                                    'solo-inverted': '',
                                    'hide-details': '',
                                    dense: '',
                                    label: '请选择编辑模式',
                                    'prepend-inner-icon': 'mdi-codepen',
                                    'no-data-text': '没有数据',
                                },
                                on: { change: e.onModeChange },
                            }),
                            e._v(' '),
                            t('v-btn', { attrs: { icon: '' } }, [t('v-icon', [e._v('mdi-apps')])], 1),
                        ],
                        1
                    ),
                    e._v(' '),
                    t('h-code-mirror', {
                        attrs: { mode: e.codeMirrorMode, theme: e.codeMirrorTheme, 'read-only': e.readOnly },
                        model: {
                            value: e.sourceCode,
                            callback: function (o) {
                                e.sourceCode = o;
                            },
                            expression: 'sourceCode',
                        },
                    }),
                ],
                1
            );
        },
        staticRenderFns: [],
    },
    undefined,
    {
        name: 'HCodeEditor',
        components: {
            HButton: s,
            HCodeMirror: c,
            VIcon: o,
            VBtn: t,
            VToolbarTitle: r,
            VSpacer: a,
            VSwitch: n,
            VSelect: i,
            VToolbar: d,
            VCard: l,
        },
        data: function () {
            return {
                modeOptions: [
                    'default',
                    'json',
                    'dockerfile',
                    'html',
                    'http',
                    'javascript',
                    'jsx',
                    'markdown',
                    'powershell',
                    'properties',
                    'python',
                    'sass',
                    'shell',
                    'sql',
                    'css',
                    'xml',
                    'yaml',
                    'vue',
                ],
                themeOptions: [
                    'default',
                    '3024-day',
                    '3024-night',
                    'abcdef',
                    'ambiance',
                    'ayu-dark',
                    'ayu-mirage',
                    'base16-dark',
                    'base16-light',
                    'bespin',
                    'blackboard',
                    'cobalt',
                    'colorforth',
                    'darcula',
                    'dracula',
                    'duotone-dark',
                    'duotone-light',
                    'eclipse',
                    'elegant',
                    'erlang-dark',
                    'gruvbox-dark',
                    'hopscotch',
                    'icecoder',
                    'idea',
                    'isotope',
                    'lesser-dark',
                    'liquibyte',
                    'lucario',
                    'material',
                    'material-darker',
                    'material-palenight',
                    'material-ocean',
                    'mbo',
                    'mdn-like',
                    'midnight',
                    'monokai',
                    'moxer',
                    'neat',
                    'neo',
                    'night',
                    'nord',
                    'oceanic-next',
                    'panda-syntax',
                    'paraiso-dark',
                    'paraiso-light',
                    'pastel-on-dark',
                    'railscasts',
                    'rubyblue',
                    'seti',
                    'shadowfox',
                    'solarized dark',
                    'solarized light',
                    'the-matrix',
                    'tomorrow-night-bright',
                    'tomorrow-night-eighties',
                    'ttcn',
                    'twilight',
                    'vibrant-ink',
                    'xq-dark',
                    'xq-light',
                    'yeti',
                    'yonce',
                    'zenburn',
                ],
                codeMirrorMode: 'default',
                codeMirrorTheme: 'default',
                sourceCode: '',
                readOnly: !1,
            };
        },
        computed: {
            readOnlyLabel: function () {
                return this.readOnly ? '只读' : '编辑';
            },
        },
        methods: {
            switchCodeMirrorMode: function (e) {
                switch (e) {
                    case 'json':
                        return 'application/json';
                    case 'html':
                        return 'htmlmixed';
                    default:
                        return e;
                }
            },
            onModeChange: function (e) {
                this.codeMirrorMode = this.switchCodeMirrorMode(e);
            },
            onThemeChange: function (e) {
                this.codeMirrorTheme = e;
            },
        },
    },
    undefined,
    false,
    undefined,
    !1,
    void 0,
    void 0,
    void 0
);
(h.install = function (e) {
    e.component(h.name, h);
}),
    null != ('undefined' == typeof window ? 'undefined' : e(window)) && window.Vue && h.install(window.Vue);
export { h as HCodeEditor };
