import {
    VIcon as e,
    VTextField as t,
    VListItemIcon as n,
    VListItemTitle as s,
    VListItemContent as i,
    VBtn as o,
    VListItem as r,
    VVirtualScroll as c,
    VList as l,
    VMenu as a
} from 'vuetify/lib';
import * as d from '@mdi/js';
import { lib as h } from '@hecate/core';
function u(e, t, n, s, i, o, r, c, l, a) {
    'boolean' != typeof r && ((l = c), (c = r), (r = !1));
    const d = 'function' == typeof n ? n.options : n;
    let h;
    if (
        (e &&
            e.render &&
            ((d.render = e.render),
            (d.staticRenderFns = e.staticRenderFns),
            (d._compiled = !0),
            i && (d.functional = !0)),
        s && (d._scopeId = s),
        o
            ? ((h = function(e) {
                  (e =
                      e ||
                      (this.$vnode && this.$vnode.ssrContext) ||
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                      'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                      (e = __VUE_SSR_CONTEXT__),
                      t && t.call(this, l(e)),
                      e && e._registeredComponents && e._registeredComponents.add(o);
              }),
              (d._ssrRegister = h))
            : t &&
              (h = r
                  ? function(e) {
                        t.call(this, a(e, this.$root.$options.shadowRoot));
                    }
                  : function(e) {
                        t.call(this, c(e));
                    }),
        h)
    )
        if (d.functional) {
            const e = d.render;
            d.render = function(t, n) {
                return h.call(n), e(t, n);
            };
        } else {
            const e = d.beforeCreate;
            d.beforeCreate = e ? [].concat(e, h) : [h];
        }
    return n;
}
const m = u(
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
                                                                                  { attrs: { color: 'primary' } },
                                                                                  [e._v(' mdi-' + e._s(e.search) + ' ')]
                                                                              )
                                                                            : e._e(),
                                                                        e._v(' '),
                                                                        n('code', { staticClass: 'mx-1 py-1' }, [
                                                                            e._v('mdi-')
                                                                        ])
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
                                                                    domProps: { textContent: e._s(s.substring(4)) }
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
    {
        components: {
            VIcon: e,
            VTextField: t,
            VListItemIcon: n,
            VListItemTitle: s,
            VListItemContent: i,
            VBtn: o,
            VListItem: r,
            VVirtualScroll: c,
            VList: l,
            VMenu: a
        },
        name: 'HIconList',
        props: {
            value: String,
            dense: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            itemHeight: { type: Number, default: 40 }
        },
        data: () => ({ isSelected: !1, icons: [], menu: !1, search: '' }),
        computed: {
            filteredIcons() {
                return this.icons.length && this.search
                    ? this.search
                        ? this.isSelected
                            ? []
                            : this.icons.filter((e) => e.toLowerCase().match(this.search.toLowerCase()))
                        : this.icons
                    : [];
            }
        },
        watch: {
            value: {
                handler(e, t) {
                    e && h.lodash.startsWith(e, 'mdi-') ? (this.search = e.substring(4)) : (this.search = e);
                },
                immediate: !0
            },
            search: {
                handler(e, t) {
                    this.filteredIcons.length > 0 && !this.menu
                        ? (this.menu = !0)
                        : this.filteredIcons.length || (this.menu = !1),
                        e && !h.lodash.startsWith(e, 'mdi-') ? this.$emit('input', 'mdi-' + e) : this.$emit('input', e);
                }
            }
        },
        mounted() {
            this.icons = Object.keys(d).map((e) => h.lodash.kebabCase(e));
        },
        methods: {
            select(e) {
                (this.search = e.substring(4)), (this.isSelected = !0);
            },
            reset() {
                (this.menu = !1), (this.isSelected = !1), (this.search = '');
            }
        }
    },
    undefined,
    false,
    undefined,
    !1,
    void 0,
    void 0,
    void 0
);
(m.install = function(e) {
    e.component(m.name, m);
}),
    null != typeof window && window.Vue && m.install(window.Vue);
