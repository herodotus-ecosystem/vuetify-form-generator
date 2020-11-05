!(function (e, n) {
    'object' == typeof exports && 'undefined' != typeof module
        ? n(require('vuetify/lib'), require('@hecate/h-form-renderer'))
        : 'function' == typeof define && define.amd
        ? define(['vuetify/lib', '@hecate/h-form-renderer'], n)
        : n((e = 'undefined' != typeof globalThis ? globalThis : e || self).Vuetify);
})(this, function (e) {
    'use strict';
    function n(e, n, t, o, i, r, s, d, f, c) {
        'boolean' != typeof s && ((f = d), (d = s), (s = !1));
        const u = 'function' == typeof t ? t.options : t;
        let l;
        if (
            (e &&
                e.render &&
                ((u.render = e.render),
                (u.staticRenderFns = e.staticRenderFns),
                (u._compiled = !0),
                i && (u.functional = !0)),
            o && (u._scopeId = o),
            r
                ? ((l = function (e) {
                      (e =
                          e ||
                          (this.$vnode && this.$vnode.ssrContext) ||
                          (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                          'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                          (e = __VUE_SSR_CONTEXT__),
                          n && n.call(this, f(e)),
                          e && e._registeredComponents && e._registeredComponents.add(r);
                  }),
                  (u._ssrRegister = l))
                : n &&
                  (l = s
                      ? function (e) {
                            n.call(this, c(e, this.$root.$options.shadowRoot));
                        }
                      : function (e) {
                            n.call(this, d(e));
                        }),
            l)
        )
            if (u.functional) {
                const e = u.render;
                u.render = function (n, t) {
                    return l.call(t), e(n, t);
                };
            } else {
                const e = u.beforeCreate;
                u.beforeCreate = e ? [].concat(e, l) : [l];
            }
        return t;
    }
    const t = n(
        {
            render: function () {
                var e = this.$createElement;
                return (this._self._c || e)('v-form');
            },
            staticRenderFns: [],
        },
        undefined,
        { components: { VForm: e.VForm }, name: 'HFormRuntime' },
        undefined,
        false,
        undefined,
        !1,
        void 0,
        void 0,
        void 0
    );
    (t.install = function (e) {
        e.component(t.name, t);
    }),
        null != typeof window && window.Vue && t.install(window.Vue);
});
