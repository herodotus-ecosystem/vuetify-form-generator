!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(require('vuetify/lib'))
        : 'function' == typeof define && define.amd
        ? define(['vuetify/lib'], t)
        : t((e = 'undefined' != typeof globalThis ? globalThis : e || self).Vuetify);
})(this, function (e) {
    'use strict';
    function t(e, t, n, i, o, s, r, l, d, c) {
        'boolean' != typeof r && ((d = l), (l = r), (r = !1));
        const f = 'function' == typeof n ? n.options : n;
        let a;
        if (
            (e &&
                e.render &&
                ((f.render = e.render),
                (f.staticRenderFns = e.staticRenderFns),
                (f._compiled = !0),
                o && (f.functional = !0)),
            i && (f._scopeId = i),
            s
                ? ((a = function (e) {
                      (e =
                          e ||
                          (this.$vnode && this.$vnode.ssrContext) ||
                          (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                          'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                          (e = __VUE_SSR_CONTEXT__),
                          t && t.call(this, d(e)),
                          e && e._registeredComponents && e._registeredComponents.add(s);
                  }),
                  (f._ssrRegister = a))
                : t &&
                  (a = r
                      ? function (e) {
                            t.call(this, c(e, this.$root.$options.shadowRoot));
                        }
                      : function (e) {
                            t.call(this, l(e));
                        }),
            a)
        )
            if (f.functional) {
                const e = f.render;
                f.render = function (t, n) {
                    return a.call(n), e(t, n);
                };
            } else {
                const e = f.beforeCreate;
                f.beforeCreate = e ? [].concat(e, a) : [a];
            }
        return n;
    }
    const n = t(
        {
            render: function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n(
                    'div',
                    { staticClass: 'text-center' },
                    [
                        n(
                            'v-menu',
                            {
                                attrs: { 'offset-y': '' },
                                scopedSlots: e._u([
                                    {
                                        key: 'activator',
                                        fn: function (t) {
                                            var i = t.on,
                                                o = t.attrs;
                                            return [
                                                n(
                                                    'v-btn',
                                                    e._g(
                                                        e._b({ attrs: { color: 'primary', dark: '' } }, 'v-btn', o, !1),
                                                        i
                                                    ),
                                                    [e._v('\n                Dropdown\n            ')]
                                                ),
                                            ];
                                        },
                                    },
                                ]),
                            },
                            [
                                e._v(' '),
                                n(
                                    'v-list',
                                    e._l(e.items, function (t, i) {
                                        return n(
                                            'v-list-item',
                                            { key: i },
                                            [n('v-list-item-title', [e._v(e._s(t.title))])],
                                            1
                                        );
                                    }),
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
            components: {
                VBtn: e.VBtn,
                VListItemTitle: e.VListItemTitle,
                VListItem: e.VListItem,
                VList: e.VList,
                VMenu: e.VMenu,
            },
            name: 'HIconList',
            data: () => ({
                items: [{ title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me 2' }],
            }),
        },
        undefined,
        false,
        undefined,
        !1,
        void 0,
        void 0,
        void 0
    );
    (n.install = function (e) {
        e.component(n.name, n);
    }),
        null != typeof window && window.Vue && n.install(window.Vue);
});
