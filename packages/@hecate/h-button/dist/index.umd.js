!(function (n, e) {
    'object' == typeof exports && 'undefined' != typeof module
        ? e(require('vuetify/lib'))
        : 'function' == typeof define && define.amd
        ? define(['vuetify/lib'], e)
        : e((n = 'undefined' != typeof globalThis ? globalThis : n || self).Vuetify);
})(this, function (n) {
    'use strict';
    function e(n, e, t, o, i, s, r, c, l, d) {
        'boolean' != typeof r && ((l = c), (c = r), (r = !1));
        const f = 'function' == typeof t ? t.options : t;
        let a;
        if (
            (n &&
                n.render &&
                ((f.render = n.render),
                (f.staticRenderFns = n.staticRenderFns),
                (f._compiled = !0),
                i && (f.functional = !0)),
            o && (f._scopeId = o),
            s
                ? ((a = function (n) {
                      (n =
                          n ||
                          (this.$vnode && this.$vnode.ssrContext) ||
                          (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                          'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                          (n = __VUE_SSR_CONTEXT__),
                          e && e.call(this, l(n)),
                          n && n._registeredComponents && n._registeredComponents.add(s);
                  }),
                  (f._ssrRegister = a))
                : e &&
                  (a = r
                      ? function (n) {
                            e.call(this, d(n, this.$root.$options.shadowRoot));
                        }
                      : function (n) {
                            e.call(this, c(n));
                        }),
            a)
        )
            if (f.functional) {
                const n = f.render;
                f.render = function (e, t) {
                    return a.call(t), n(e, t);
                };
            } else {
                const n = f.beforeCreate;
                f.beforeCreate = n ? [].concat(n, a) : [a];
            }
        return t;
    }
    const t = e(
        {
            render: function () {
                var n = this,
                    e = n.$createElement,
                    t = n._self._c || e;
                return t(
                    'v-tooltip',
                    {
                        attrs: { bottom: '' },
                        scopedSlots: n._u([
                            {
                                key: 'activator',
                                fn: function (e) {
                                    var o = e.on;
                                    return [
                                        t(
                                            'v-btn',
                                            n._g(
                                                {
                                                    attrs: { color: n.color, icon: n.icon },
                                                    on: {
                                                        click: function (e) {
                                                            return n.handleClick();
                                                        },
                                                    },
                                                },
                                                o
                                            ),
                                            [t('v-icon', [n._v(n._s(n.iconName))])],
                                            1
                                        ),
                                    ];
                                },
                            },
                        ]),
                    },
                    [n._v(' '), t('span', [n._v(n._s(n.tooltip))])]
                );
            },
            staticRenderFns: [],
        },
        undefined,
        {
            components: { VIcon: n.VIcon, VBtn: n.VBtn, VTooltip: n.VTooltip },
            name: 'HButton',
            props: { btnClass: String, color: String, icon: Boolean, iconName: String, tooltip: String },
            methods: {
                handleClick() {
                    this.$emit('click');
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
    (t.install = function (n) {
        n.component(t.name, t);
    }),
        null != typeof window && window.Vue && t.install(window.Vue);
});
