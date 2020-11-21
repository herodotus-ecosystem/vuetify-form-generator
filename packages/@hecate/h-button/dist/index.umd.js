!(function(e, n) {
    'object' == typeof exports && 'undefined' != typeof module
        ? n(
              exports,
              require('core-js/modules/es.function.name'),
              require('@babel/runtime-corejs3/helpers/esm/typeof'),
              require('vuetify/lib'),
              require('vue-runtime-helpers/dist/normalize-component.mjs')
          )
        : 'function' == typeof define && define.amd
        ? define([
              'exports',
              'core-js/modules/es.function.name',
              '@babel/runtime-corejs3/helpers/esm/typeof',
              'vuetify/lib',
              'vue-runtime-helpers/dist/normalize-component.mjs'
          ], n)
        : n(
              ((e = 'undefined' != typeof globalThis ? globalThis : e || self).main = {}),
              null,
              e._typeof,
              e.Vuetify,
              e.__vue_normalize__
          );
})(this, function(e, n, o, t, i) {
    'use strict';
    function r(e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
    }
    var l = r(o),
        u = r(i),
        s = {
            components: { VIcon: t.VIcon, VBtn: t.VBtn, VTooltip: t.VTooltip },
            name: 'HButton',
            props: { btnClass: String, color: String, icon: Boolean, iconName: String, tooltip: String },
            methods: {
                handleClick: function() {
                    this.$emit('click');
                }
            }
        },
        c = u.default(
            {
                render: function() {
                    var e = this,
                        n = e.$createElement,
                        o = e._self._c || n;
                    return o(
                        'v-tooltip',
                        {
                            attrs: { bottom: '' },
                            scopedSlots: e._u([
                                {
                                    key: 'activator',
                                    fn: function(n) {
                                        var t = n.on;
                                        return [
                                            o(
                                                'v-btn',
                                                e._g(
                                                    {
                                                        attrs: { color: e.color, icon: e.icon },
                                                        on: {
                                                            click: function(n) {
                                                                return e.handleClick();
                                                            }
                                                        }
                                                    },
                                                    t
                                                ),
                                                [o('v-icon', [e._v(e._s(e.iconName))])],
                                                1
                                            )
                                        ];
                                    }
                                }
                            ])
                        },
                        [e._v(' '), o('span', [e._v(e._s(e.tooltip))])]
                    );
                },
                staticRenderFns: []
            },
            undefined,
            s,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        );
    (c.install = function(e) {
        e.component(c.name, c);
    }),
        null != ('undefined' == typeof window ? 'undefined' : l.default(window)) && window.Vue && c.install(window.Vue),
        (e.HButton = c),
        Object.defineProperty(e, '__esModule', { value: !0 });
});
