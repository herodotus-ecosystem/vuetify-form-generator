import 'core-js/modules/es.function.name.js';
import e from '@babel/runtime-corejs3/helpers/esm/typeof';
import {
    VIcon as t,
    VTooltip as r,
    VToolbarTitle as o,
    VToolbar as i,
    VDivider as n,
    VBtn as a,
    VForm as s,
    VCol as l,
    VRow as m,
    VCard as d,
} from 'vuetify/lib';
import { ValidationObserver as c } from 'vee-validate';
import { HFormRenderer as v } from '@hecate/h-form-renderer';
import f from 'vue-runtime-helpers/dist/normalize-component.mjs';
var u = f(
    {
        render: function () {
            var e = this,
                t = e.$createElement,
                r = e._self._c || t;
            return r(
                'v-card',
                { staticClass: 'pa-2' },
                [
                    r(
                        'v-toolbar',
                        { attrs: { flat: '' } },
                        [
                            r(
                                'v-tooltip',
                                {
                                    attrs: { bottom: '' },
                                    scopedSlots: e._u([
                                        {
                                            key: 'activator',
                                            fn: function (t) {
                                                var o = t.on;
                                                return [
                                                    r(
                                                        'v-icon',
                                                        e._g(
                                                            {
                                                                staticClass: 'mr-2',
                                                                attrs: { tile: '', color: 'teal', large: '' },
                                                            },
                                                            o
                                                        ),
                                                        [e._v('mdi-clipboard-edit')]
                                                    ),
                                                ];
                                            },
                                        },
                                    ]),
                                },
                                [e._v(' '), r('span', [e._v('返回')])]
                            ),
                            e._v(' '),
                            r('v-toolbar-title', { staticClass: 'pl-0 font-weight-light' }, [e._v(e._s(e.title))]),
                        ],
                        1
                    ),
                    e._v(' '),
                    r('v-divider', { staticClass: 'mb-2' }),
                    e._v(' '),
                    r(
                        'v-row',
                        [
                            r(
                                'v-col',
                                [
                                    r(
                                        'ValidationObserver',
                                        { ref: 'observer' },
                                        [
                                            r(
                                                'v-form',
                                                { ref: 'form' },
                                                [
                                                    r('h-form-renderer', {
                                                        attrs: { schema: e.schema },
                                                        model: {
                                                            value: e.model,
                                                            callback: function (t) {
                                                                e.model = t;
                                                            },
                                                            expression: 'model',
                                                        },
                                                    }),
                                                    e._v(' '),
                                                    r(
                                                        'v-btn',
                                                        {
                                                            staticClass: 'mr-4',
                                                            attrs: { color: 'primary' },
                                                            on: { click: e.saveOrUpdate },
                                                        },
                                                        [e._v('保存')]
                                                    ),
                                                    e._v(' '),
                                                    r(
                                                        'v-btn',
                                                        {
                                                            staticClass: 'mr-4',
                                                            attrs: { color: 'warning' },
                                                            on: { click: e.clear },
                                                        },
                                                        [e._v('重置')]
                                                    ),
                                                ],
                                                1
                                            ),
                                        ],
                                        1
                                    ),
                                ],
                                1
                            ),
                        ],
                        1
                    ),
                ],
                1
            );
        },
        staticRenderFns: [],
    },
    undefined,
    {
        name: 'HFormRuntime',
        components: {
            ValidationObserver: c,
            HFormRenderer: v,
            VIcon: t,
            VTooltip: r,
            VToolbarTitle: o,
            VToolbar: i,
            VDivider: n,
            VBtn: a,
            VForm: s,
            VCol: l,
            VRow: m,
            VCard: d,
        },
        props: { schema: { type: Object, default: function () {} }, title: { type: String, default: '动态表单' } },
        data: function () {
            return { model: {} };
        },
        methods: {
            saveOrUpdate: function () {
                this.$refs.observer.validate().then(function (e) {});
            },
            clear: function () {
                (this.model = {}), this.$refs.form.reset(), this.$refs.observer.reset();
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
(u.install = function (e) {
    e.component(u.name, u);
}),
    null != ('undefined' == typeof window ? 'undefined' : e(window)) && window.Vue && u.install(window.Vue);
export { u as HFormRuntime };
