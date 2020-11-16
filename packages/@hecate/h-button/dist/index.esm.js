import { VIcon as n, VBtn as t, VTooltip as o } from 'vuetify/lib';
function e(n, t, o, e, i, r, s, c, l, d) {
    'boolean' != typeof s && ((l = c), (c = s), (s = !1));
    const a = 'function' == typeof o ? o.options : o;
    let f;
    if (
        (n &&
            n.render &&
            ((a.render = n.render),
            (a.staticRenderFns = n.staticRenderFns),
            (a._compiled = !0),
            i && (a.functional = !0)),
        e && (a._scopeId = e),
        r
            ? ((f = function (n) {
                  (n =
                      n ||
                      (this.$vnode && this.$vnode.ssrContext) ||
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                      'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                      (n = __VUE_SSR_CONTEXT__),
                      t && t.call(this, l(n)),
                      n && n._registeredComponents && n._registeredComponents.add(r);
              }),
              (a._ssrRegister = f))
            : t &&
              (f = s
                  ? function (n) {
                        t.call(this, d(n, this.$root.$options.shadowRoot));
                    }
                  : function (n) {
                        t.call(this, c(n));
                    }),
        f)
    )
        if (a.functional) {
            const n = a.render;
            a.render = function (t, o) {
                return f.call(o), n(t, o);
            };
        } else {
            const n = a.beforeCreate;
            a.beforeCreate = n ? [].concat(n, f) : [f];
        }
    return o;
}
const i = e(
    {
        render: function () {
            var n = this,
                t = n.$createElement,
                o = n._self._c || t;
            return o(
                'v-tooltip',
                {
                    attrs: { bottom: '' },
                    scopedSlots: n._u([
                        {
                            key: 'activator',
                            fn: function (t) {
                                var e = t.on;
                                return [
                                    o(
                                        'v-btn',
                                        n._g(
                                            {
                                                attrs: { color: n.color, icon: n.icon },
                                                on: {
                                                    click: function (t) {
                                                        return n.handleClick();
                                                    },
                                                },
                                            },
                                            e
                                        ),
                                        [o('v-icon', [n._v(n._s(n.iconName))])],
                                        1
                                    ),
                                ];
                            },
                        },
                    ]),
                },
                [n._v(' '), o('span', [n._v(n._s(n.tooltip))])]
            );
        },
        staticRenderFns: [],
    },
    undefined,
    {
        components: { VIcon: n, VBtn: t, VTooltip: o },
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
(i.install = function (n) {
    n.component(i.name, i);
}),
    null != typeof window && window.Vue && i.install(window.Vue);
