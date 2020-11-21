!(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(
              exports,
              require('core-js/modules/es.function.name'),
              require('@babel/runtime-corejs3/helpers/esm/typeof'),
              require('core-js/modules/es.number.constructor'),
              require('core-js/modules/es.regexp.exec'),
              require('core-js/modules/es.string.match'),
              require('core-js/modules/es.string.search'),
              require('@babel/runtime-corejs3/core-js/object/keys'),
              require('@babel/runtime-corejs3/core-js/instance/map'),
              require('@babel/runtime-corejs3/core-js/instance/starts-with'),
              require('@babel/runtime-corejs3/core-js/instance/filter'),
              require('vuetify/lib'),
              require('@mdi/js'),
              require('@hecate/core'),
              require('vue-runtime-helpers/dist/normalize-component.mjs')
          )
        : 'function' == typeof define && define.amd
        ? define([
              'exports',
              'core-js/modules/es.function.name',
              '@babel/runtime-corejs3/helpers/esm/typeof',
              'core-js/modules/es.number.constructor',
              'core-js/modules/es.regexp.exec',
              'core-js/modules/es.string.match',
              'core-js/modules/es.string.search',
              '@babel/runtime-corejs3/core-js/object/keys',
              '@babel/runtime-corejs3/core-js/instance/map',
              '@babel/runtime-corejs3/core-js/instance/starts-with',
              '@babel/runtime-corejs3/core-js/instance/filter',
              'vuetify/lib',
              '@mdi/js',
              '@hecate/core',
              'vue-runtime-helpers/dist/normalize-component.mjs'
          ], t)
        : t(
              ((e = 'undefined' != typeof globalThis ? globalThis : e || self).main = {}),
              null,
              e._typeof,
              null,
              null,
              null,
              null,
              e._Object$keys,
              e._mapInstanceProperty,
              e._startsWithInstanceProperty,
              e._filterInstanceProperty,
              e.Vuetify,
              e['mdi-js'],
              e.core,
              e.__vue_normalize__
          );
})(this, function(e, t, n, s, i, r, o, c, l, u, a, d, m, f, h) {
    'use strict';
    function p(e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
    }
    function b(e) {
        if (e && e.__esModule) return e;
        var t = Object.create(null);
        return (
            e &&
                Object.keys(e).forEach(function(n) {
                    if ('default' !== n) {
                        var s = Object.getOwnPropertyDescriptor(e, n);
                        Object.defineProperty(
                            t,
                            n,
                            s.get
                                ? s
                                : {
                                      enumerable: !0,
                                      get: function() {
                                          return e[n];
                                      }
                                  }
                        );
                    }
                }),
            (t.default = e),
            Object.freeze(t)
        );
    }
    var v = p(n),
        j = p(c),
        y = p(l),
        g = p(u),
        _ = p(a),
        I = b(m),
        V = p(h),
        x = {
            components: {
                VIcon: d.VIcon,
                VTextField: d.VTextField,
                VListItemIcon: d.VListItemIcon,
                VListItemTitle: d.VListItemTitle,
                VListItemContent: d.VListItemContent,
                VBtn: d.VBtn,
                VListItem: d.VListItem,
                VVirtualScroll: d.VVirtualScroll,
                VList: d.VList,
                VMenu: d.VMenu
            },
            name: 'HIconList',
            props: {
                value: String,
                dense: { type: Boolean, default: !1 },
                disabled: { type: Boolean, default: !1 },
                itemHeight: { type: Number, default: 40 }
            },
            data: function() {
                return { isSelected: !1, icons: [], menu: !1, search: '' };
            },
            computed: {
                filteredIcons: function() {
                    var e,
                        t = this;
                    return this.icons.length && this.search
                        ? this.search
                            ? this.isSelected
                                ? []
                                : _.default((e = this.icons)).call(e, function(e) {
                                      return e.toLowerCase().match(t.search.toLowerCase());
                                  })
                            : this.icons
                        : [];
                }
            },
            watch: {
                value: {
                    handler: function(e, t) {
                        var n;
                        e && g.default((n = f.lib.lodash)).call(n, e, 'mdi-')
                            ? (this.search = e.substring(4))
                            : (this.search = e);
                    },
                    immediate: !0
                },
                search: {
                    handler: function(e, t) {
                        var n;
                        this.filteredIcons.length > 0 && !this.menu
                            ? (this.menu = !0)
                            : this.filteredIcons.length || (this.menu = !1),
                            e && !g.default((n = f.lib.lodash)).call(n, e, 'mdi-')
                                ? this.$emit('input', 'mdi-' + e)
                                : this.$emit('input', e);
                    }
                }
            },
            mounted: function() {
                var e;
                this.icons = y.default((e = j.default(I))).call(e, function(e) {
                    return f.lib.lodash.kebabCase(e);
                });
            },
            methods: {
                select: function(e) {
                    (this.search = e.substring(4)), (this.isSelected = !0);
                },
                reset: function() {
                    (this.menu = !1), (this.isSelected = !1), (this.search = '');
                }
            }
        },
        w = V.default(
            {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n(
                        'v-menu',
                        {
                            attrs: {
                                bottom: '',
                                'close-on-content-click': '',
                                'open-on-click': e.filteredIcons.length > 0,
                                'offset-y': '',
                                rounded: 'b-xl'
                            },
                            scopedSlots: e._u([
                                {
                                    key: 'activator',
                                    fn: function(t) {
                                        var s = t.on,
                                            i = t.attrs;
                                        return [
                                            n(
                                                'v-text-field',
                                                e._g(
                                                    e._b(
                                                        {
                                                            attrs: {
                                                                dense: e.dense,
                                                                loading: !e.icons,
                                                                disabled: e.disabled,
                                                                'hide-details': '',
                                                                clearable: '',
                                                                outlined: '',
                                                                placeholder: '搜索图标 (e.g. account)'
                                                            },
                                                            on: { 'click:clear': e.reset },
                                                            scopedSlots: e._u(
                                                                [
                                                                    {
                                                                        key: 'prepend-inner',
                                                                        fn: function() {
                                                                            return [
                                                                                e.isSelected
                                                                                    ? n(
                                                                                          'v-icon',
                                                                                          {
                                                                                              attrs: {
                                                                                                  color: 'primary'
                                                                                              }
                                                                                          },
                                                                                          [
                                                                                              e._v(
                                                                                                  ' mdi-' +
                                                                                                      e._s(e.search) +
                                                                                                      ' '
                                                                                              )
                                                                                          ]
                                                                                      )
                                                                                    : e._e(),
                                                                                e._v(' '),
                                                                                n(
                                                                                    'code',
                                                                                    { staticClass: 'mx-1 py-1' },
                                                                                    [e._v('mdi-')]
                                                                                )
                                                                            ];
                                                                        },
                                                                        proxy: !0
                                                                    }
                                                                ],
                                                                null,
                                                                !0
                                                            ),
                                                            model: {
                                                                value: e.search,
                                                                callback: function(t) {
                                                                    e.search = t;
                                                                },
                                                                expression: 'search'
                                                            }
                                                        },
                                                        'v-text-field',
                                                        i,
                                                        !1
                                                    ),
                                                    s
                                                )
                                            )
                                        ];
                                    }
                                }
                            ]),
                            model: {
                                value: e.menu,
                                callback: function(t) {
                                    e.menu = t;
                                },
                                expression: 'menu'
                            }
                        },
                        [
                            e._v(' '),
                            n(
                                'v-list',
                                {
                                    directives: [
                                        {
                                            name: 'show',
                                            rawName: 'v-show',
                                            value: e.filteredIcons.length > 0,
                                            expression: 'filteredIcons.length > 0'
                                        }
                                    ]
                                },
                                [
                                    n('v-virtual-scroll', {
                                        attrs: {
                                            items: e.filteredIcons,
                                            'item-height': e.itemHeight,
                                            height: Math.min(e.filteredIcons.length * e.itemHeight, 300)
                                        },
                                        scopedSlots: e._u([
                                            {
                                                key: 'default',
                                                fn: function(t) {
                                                    var s = t.item;
                                                    return [
                                                        n(
                                                            'v-list-item',
                                                            {
                                                                key: s,
                                                                attrs: { dense: e.dense },
                                                                on: {
                                                                    click: function(t) {
                                                                        return t.stopPropagation(), e.select(s);
                                                                    }
                                                                }
                                                            },
                                                            [
                                                                n(
                                                                    'v-list-item-icon',
                                                                    [
                                                                        n('v-icon', {
                                                                            staticClass: 'mr-2',
                                                                            attrs: { color: 'primary' },
                                                                            domProps: { textContent: e._s(s) }
                                                                        })
                                                                    ],
                                                                    1
                                                                ),
                                                                e._v(' '),
                                                                n(
                                                                    'v-list-item-content',
                                                                    [
                                                                        n('v-list-item-title', {
                                                                            domProps: {
                                                                                textContent: e._s(s.substring(4))
                                                                            }
                                                                        })
                                                                    ],
                                                                    1
                                                                ),
                                                                e._v(' '),
                                                                n(
                                                                    'v-btn',
                                                                    {
                                                                        attrs: { icon: '' },
                                                                        on: {
                                                                            click: function(t) {
                                                                                return t.stopPropagation(), e.select(s);
                                                                            }
                                                                        }
                                                                    },
                                                                    [
                                                                        n('v-icon', { attrs: { size: '20' } }, [
                                                                            e._v(' mdi-content-copy ')
                                                                        ])
                                                                    ],
                                                                    1
                                                                )
                                                            ],
                                                            1
                                                        )
                                                    ];
                                                }
                                            }
                                        ])
                                    })
                                ],
                                1
                            )
                        ],
                        1
                    );
                },
                staticRenderFns: []
            },
            undefined,
            x,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        );
    (w.install = function(e) {
        e.component(w.name, w);
    }),
        null != ('undefined' == typeof window ? 'undefined' : v.default(window)) && window.Vue && w.install(window.Vue),
        (e.HIconList = w),
        Object.defineProperty(e, '__esModule', { value: !0 });
});
