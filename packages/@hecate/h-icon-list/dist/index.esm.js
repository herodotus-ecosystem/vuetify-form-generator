import 'core-js/modules/es.function.name';
import e from '@babel/runtime-corejs3/helpers/esm/typeof';
import 'core-js/modules/es.number.constructor';
import 'core-js/modules/es.regexp.exec';
import 'core-js/modules/es.string.match';
import 'core-js/modules/es.string.search';
import t from '@babel/runtime-corejs3/core-js/object/keys';
import i from '@babel/runtime-corejs3/core-js/instance/map';
import n from '@babel/runtime-corejs3/core-js/instance/starts-with';
import s from '@babel/runtime-corejs3/core-js/instance/filter';
import {
    VIcon as o,
    VTextField as r,
    VListItemIcon as c,
    VListItemTitle as l,
    VListItemContent as a,
    VBtn as m,
    VListItem as d,
    VVirtualScroll as u,
    VList as h,
    VMenu as f
} from 'vuetify/lib';
import * as p from '@mdi/js';
import { lib as v } from '@hecate/core';
import b from 'vue-runtime-helpers/dist/normalize-component.mjs';
var g = b(
    {
        render: function() {
            var e = this,
                t = e.$createElement,
                i = e._self._c || t;
            return i(
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
                                var n = t.on,
                                    s = t.attrs;
                                return [
                                    i(
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
                                                                            ? i(
                                                                                  'v-icon',
                                                                                  { attrs: { color: 'primary' } },
                                                                                  [e._v(' mdi-' + e._s(e.search) + ' ')]
                                                                              )
                                                                            : e._e(),
                                                                        e._v(' '),
                                                                        i('code', { staticClass: 'mx-1 py-1' }, [
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
                                                s,
                                                !1
                                            ),
                                            n
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
                    i(
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
                            i('v-virtual-scroll', {
                                attrs: {
                                    items: e.filteredIcons,
                                    'item-height': e.itemHeight,
                                    height: Math.min(e.filteredIcons.length * e.itemHeight, 300)
                                },
                                scopedSlots: e._u([
                                    {
                                        key: 'default',
                                        fn: function(t) {
                                            var n = t.item;
                                            return [
                                                i(
                                                    'v-list-item',
                                                    {
                                                        key: n,
                                                        attrs: { dense: e.dense },
                                                        on: {
                                                            click: function(t) {
                                                                return t.stopPropagation(), e.select(n);
                                                            }
                                                        }
                                                    },
                                                    [
                                                        i(
                                                            'v-list-item-icon',
                                                            [
                                                                i('v-icon', {
                                                                    staticClass: 'mr-2',
                                                                    attrs: { color: 'primary' },
                                                                    domProps: { textContent: e._s(n) }
                                                                })
                                                            ],
                                                            1
                                                        ),
                                                        e._v(' '),
                                                        i(
                                                            'v-list-item-content',
                                                            [
                                                                i('v-list-item-title', {
                                                                    domProps: { textContent: e._s(n.substring(4)) }
                                                                })
                                                            ],
                                                            1
                                                        ),
                                                        e._v(' '),
                                                        i(
                                                            'v-btn',
                                                            {
                                                                attrs: { icon: '' },
                                                                on: {
                                                                    click: function(t) {
                                                                        return t.stopPropagation(), e.select(n);
                                                                    }
                                                                }
                                                            },
                                                            [
                                                                i('v-icon', { attrs: { size: '20' } }, [
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
            VIcon: o,
            VTextField: r,
            VListItemIcon: c,
            VListItemTitle: l,
            VListItemContent: a,
            VBtn: m,
            VListItem: d,
            VVirtualScroll: u,
            VList: h,
            VMenu: f
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
                            : s((e = this.icons)).call(e, function(e) {
                                  return e.toLowerCase().match(t.search.toLowerCase());
                              })
                        : this.icons
                    : [];
            }
        },
        watch: {
            value: {
                handler: function(e, t) {
                    var i;
                    e && n((i = v.lodash)).call(i, e, 'mdi-') ? (this.search = e.substring(4)) : (this.search = e);
                },
                immediate: !0
            },
            search: {
                handler: function(e, t) {
                    var i;
                    this.filteredIcons.length > 0 && !this.menu
                        ? (this.menu = !0)
                        : this.filteredIcons.length || (this.menu = !1),
                        e && !n((i = v.lodash)).call(i, e, 'mdi-')
                            ? this.$emit('input', 'mdi-' + e)
                            : this.$emit('input', e);
                }
            }
        },
        mounted: function() {
            var e;
            this.icons = i((e = t(p))).call(e, function(e) {
                return v.lodash.kebabCase(e);
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
    undefined,
    false,
    undefined,
    !1,
    void 0,
    void 0,
    void 0
);
(g.install = function(e) {
    e.component(g.name, g);
}),
    null != ('undefined' == typeof window ? 'undefined' : e(window)) && window.Vue && g.install(window.Vue);
export { g as HIconList };
