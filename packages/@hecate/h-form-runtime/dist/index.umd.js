!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(
              exports,
              require('core-js/modules/es.function.name'),
              require('@babel/runtime-corejs3/helpers/esm/typeof'),
              require('vuetify/lib'),
              require('vee-validate'),
              require('@hecate/h-form-renderer'),
              require('vue-runtime-helpers/dist/normalize-component.mjs')
          )
        : 'function' == typeof define && define.amd
        ? define([
              'exports',
              'core-js/modules/es.function.name',
              '@babel/runtime-corejs3/helpers/esm/typeof',
              'vuetify/lib',
              'vee-validate',
              '@hecate/h-form-renderer',
              'vue-runtime-helpers/dist/normalize-component.mjs',
          ], t)
        : t(
              ((e = 'undefined' != typeof globalThis ? globalThis : e || self).main = {}),
              null,
              e._typeof,
              e.Vuetify,
              e['vee-validate'],
              e.HFormRenderer,
              e.__vue_normalize__
          );
})(this, function (e, t, r, o, n, i, a) {
    'use strict';
    function l(e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
    }
    var s = l(r),
        d = l(a),
        u = {
            name: 'HFormRuntime',
            components: {
                ValidationObserver: n.ValidationObserver,
                HFormRenderer: i.HFormRenderer,
                VIcon: o.VIcon,
                VTooltip: o.VTooltip,
                VToolbarTitle: o.VToolbarTitle,
                VToolbar: o.VToolbar,
                VDivider: o.VDivider,
                VBtn: o.VBtn,
                VForm: o.VForm,
                VCol: o.VCol,
                VRow: o.VRow,
                VCard: o.VCard,
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
        c = d.default(
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
                                    r('v-toolbar-title', { staticClass: 'pl-0 font-weight-light' }, [
                                        e._v(e._s(e.title)),
                                    ]),
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
            u,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        );
    (c.install = function (e) {
        e.component(c.name, c);
    }),
        null != ('undefined' == typeof window ? 'undefined' : s.default(window)) && window.Vue && c.install(window.Vue),
        (e.HFormRuntime = c),
        Object.defineProperty(e, '__esModule', { value: !0 });
});
