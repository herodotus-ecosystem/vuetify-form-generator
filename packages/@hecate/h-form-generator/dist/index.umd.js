!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(
              exports,
              require('core-js/modules/es.function.name.js'),
              require('@babel/runtime-corejs3/helpers/esm/typeof'),
              require('vuetify/lib'),
              require('core-js/modules/es.array.join.js'),
              require('core-js/modules/es.regexp.exec.js'),
              require('core-js/modules/es.string.replace.js'),
              require('@babel/runtime-corejs3/core-js/instance/repeat'),
              require('@babel/runtime-corejs3/core-js/instance/map'),
              require('@babel/runtime-corejs3/core-js/object/assign'),
              require('@hecate/core'),
              require('@babel/runtime-corejs3/core-js/json/stringify'),
              require('@babel/runtime-corejs3/core-js/parse-int'),
              require('core-js/modules/es.regexp.constructor.js'),
              require('core-js/modules/es.regexp.to-string.js'),
              require('@babel/runtime-corejs3/core-js/instance/concat'),
              require('throttle-debounce'),
              require('vue-runtime-helpers/dist/normalize-component.mjs'),
              require('@hecate/h-form-renderer'),
              require('@hecate/h-icon-list'),
              require('@hecate/h-code-mirror'),
              require('@hecate/h-form-runtime')
          )
        : 'function' == typeof define && define.amd
        ? define([
              'exports',
              'core-js/modules/es.function.name.js',
              '@babel/runtime-corejs3/helpers/esm/typeof',
              'vuetify/lib',
              'core-js/modules/es.array.join.js',
              'core-js/modules/es.regexp.exec.js',
              'core-js/modules/es.string.replace.js',
              '@babel/runtime-corejs3/core-js/instance/repeat',
              '@babel/runtime-corejs3/core-js/instance/map',
              '@babel/runtime-corejs3/core-js/object/assign',
              '@hecate/core',
              '@babel/runtime-corejs3/core-js/json/stringify',
              '@babel/runtime-corejs3/core-js/parse-int',
              'core-js/modules/es.regexp.constructor.js',
              'core-js/modules/es.regexp.to-string.js',
              '@babel/runtime-corejs3/core-js/instance/concat',
              'throttle-debounce',
              'vue-runtime-helpers/dist/normalize-component.mjs',
              '@hecate/h-form-renderer',
              '@hecate/h-icon-list',
              '@hecate/h-code-mirror',
              '@hecate/h-form-runtime',
          ], t)
        : t(
              ((e = 'undefined' != typeof globalThis ? globalThis : e || self).main = {}),
              null,
              e._typeof,
              e.Vuetify,
              null,
              null,
              null,
              e._repeatInstanceProperty,
              e._mapInstanceProperty,
              e._Object$assign,
              e._core,
              e._JSON$stringify,
              e._parseInt,
              null,
              null,
              e._concatInstanceProperty,
              e.throttleDebounce,
              e.__vue_normalize__,
              e.HFormRenderer,
              e.HIconList,
              e.HCodeMirror,
              e.HFormRuntime
          );
})(this, function (e, t, s, a, n, o, r, i, l, p, c, d, u, m, v, h, b, f, g, x, _, k) {
    'use strict';
    function I(e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
    }
    var w = I(s),
        y = I(i),
        C = I(l),
        $ = I(p),
        V = I(d),
        S = I(h),
        H = I(f),
        P = 'DRAWING_CANVAS',
        T = 'DRAWING_CANVAS_VERSION',
        L = function (e) {
            return e ? JSON.parse(e) : null;
        };
    function O(e) {
        c.lib.storageSync.setItem(P, V.default(e));
    }
    var E = {
            TEXT_FIELD: {
                index: 'TEXT_FIELD',
                schema: {
                    type: 'string',
                    title: '单行文本',
                    tag: 'v-text-field',
                    'x-props': { 'loader-height': 2, outlined: !0, type: 'text' },
                    'x-rules': '',
                },
            },
            TEXT_AREA: {
                index: 'TEXT_AREA',
                schema: {
                    type: 'string',
                    title: '多行文本',
                    tag: 'v-textarea',
                    'x-props': { 'loader-height': 2, outlined: !0, 'row-height': 24, rows: 2, type: 'text' },
                    'x-display': 'textarea',
                    'x-rules': '',
                },
            },
            SLIDER: {
                index: 'SLIDER',
                schema: {
                    type: 'integer',
                    title: '滑块',
                    tag: 'v-slider',
                    'x-props': { 'loader-height': 2, min: 0, max: 100, step: 1, 'thumb-size': 32, 'tick-size': 2 },
                    'x-display': 'slider',
                },
            },
            RANGE_SLIDER: {
                index: 'RANGE_SLIDER',
                schema: {
                    type: 'integer',
                    title: '范围滑块',
                    tag: 'v-range-slider',
                    'x-props': { 'loader-height': 2, min: 0, max: 100, step: 1, 'thumb-size': 32, 'tick-size': 2 },
                    'x-display': 'range-slider',
                },
            },
            CHECKBOX: {
                index: 'CHECKBOX',
                schema: { type: 'boolean', title: '复选框', tag: 'v-checkbox', 'x-props': {} },
            },
            SWITCHS: {
                index: 'SWITCHS',
                schema: { type: 'boolean', title: '开关', tag: 'v-switch', 'x-display': 'switch', 'x-props': {} },
            },
            DATE_PICKER: {
                index: 'DATE_PICKER',
                schema: {
                    type: 'string',
                    title: '日期选择',
                    tag: 'v-date-picker',
                    format: 'date',
                    'x-props': { 'first-day-of-week': 0, locale: 'zh-cn', type: 'date' },
                },
            },
            TIME_PICKER: {
                index: 'TIME_PICKER',
                schema: { type: 'string', title: '时间选择', tag: 'v-time-picker', format: 'time', 'x-props': {} },
            },
            SELECT_SINGLE: {
                index: 'SELECT_SINGLE',
                schema: {
                    type: 'string',
                    title: '单项下拉',
                    tag: 'v-select',
                    'x-props': { 'no-data-text': '没有可用选项', outlined: !0 },
                    enum: ['value 1', 'value 2'],
                },
            },
            COMBOBOX: {
                index: 'COMBOBOX',
                schema: {
                    type: 'array',
                    title: '组合框',
                    tag: 'v-combobox',
                    'x-props': { 'no-data-text': '没有可用选项', outlined: !0 },
                    items: { type: 'string' },
                },
            },
            SELECT_MULTIPLE: {
                index: 'SELECT_MULTIPLE',
                schema: {
                    type: 'array',
                    title: '多项下拉',
                    tag: 'v-select',
                    'x-display': 'icon',
                    'x-props': {},
                    items: {
                        type: 'string',
                        oneOf: [
                            { const: 'value1', title: 'Value 1' },
                            { const: 'value2', title: 'Value 2' },
                        ],
                    },
                },
            },
            COLOR_PICKER: {
                index: 'COLOR_PICKER',
                schema: {
                    type: 'string',
                    title: '颜色选择',
                    tag: 'v-color-picker',
                    format: 'hexcolor',
                    properties: { outlined: !0, 'hide-details': !0 },
                },
            },
            CASCADE_SELECT: {
                index: 'CASCADE_SELECT',
                schema: { type: 'string', title: '级联下拉', tag: 'v-select', oneOf: [] },
            },
            AJAX_SELECT: {
                index: 'AJAX_SELECT',
                schema: {
                    type: 'array',
                    title: '异步选择',
                    tag: 'v-select',
                    'x-display': 'icon',
                    properties: {},
                    items: {
                        type: 'string',
                        oneOf: [
                            { const: 'value1', title: 'Value 1' },
                            { const: 'value2', title: 'Value 2' },
                        ],
                    },
                },
            },
            RADIO: {
                index: 'RADIO',
                schema: {
                    type: 'string',
                    title: '单选框组',
                    tag: 'v-radio-group',
                    'x-display': 'radio',
                    properties: {},
                    enum: ['value 1', 'value 2'],
                },
            },
            FILE_INPUT: {
                index: 'FILE_INPUT',
                schema: {
                    type: 'string',
                    title: '上传',
                    tag: 'v-file-input',
                    contentMediaType: 'image/png',
                    writeOnly: !0,
                    properties: {},
                },
            },
        },
        D = [
            {
                title: '输入型组件',
                list: [
                    {
                        configs: {
                            title: E.TEXT_FIELD.schema.title,
                            icon: 'mdi-form-textbox',
                            name: 'TextField',
                            document: 'https://vuetifyjs.com/zh-Hans/components/text-fields/',
                            schema: E.TEXT_FIELD.index,
                        },
                    },
                    {
                        configs: {
                            title: E.TEXT_AREA.schema.title,
                            icon: 'mdi-form-textarea',
                            name: 'TextArea',
                            document: 'https://vuetifyjs.com/zh-Hans/components/textareas/',
                            schema: E.TEXT_AREA.index,
                        },
                    },
                ],
            },
            {
                title: '选择型组件',
                list: [
                    {
                        configs: {
                            title: E.SLIDER.schema.title,
                            icon: 'mdi-tune-variant',
                            name: 'Slider',
                            document: 'https://vuetifyjs.com/zh-Hans/components/sliders/',
                            schema: E.SLIDER.index,
                        },
                    },
                    {
                        configs: {
                            title: E.RANGE_SLIDER.schema.title,
                            icon: 'mdi-valve-closed',
                            name: 'Range_Slider',
                            document: 'https://vuetifyjs.com/zh-Hans/components/sliders/',
                            schema: E.RANGE_SLIDER.index,
                        },
                    },
                    {
                        configs: {
                            title: E.CHECKBOX.schema.title,
                            icon: 'mdi-checkbox-marked',
                            name: 'Checkbox',
                            document: 'https://vuetifyjs.com/zh-Hans/components/checkboxes/',
                            schema: E.CHECKBOX.index,
                        },
                    },
                    {
                        configs: {
                            title: E.SWITCHS.schema.title,
                            icon: 'mdi-toggle-switch',
                            name: 'Switch',
                            document: 'https://vuetifyjs.com/zh-Hans/components/switches/',
                            schema: E.SWITCHS.index,
                        },
                    },
                    {
                        configs: {
                            title: E.DATE_PICKER.schema.title,
                            icon: 'mdi-calendar',
                            name: 'Date',
                            document: 'https://vuetifyjs.com/zh-Hans/components/date-pickers/',
                            schema: E.DATE_PICKER.index,
                        },
                    },
                    {
                        configs: {
                            title: E.TIME_PICKER.schema.title,
                            icon: 'mdi-clock-outline',
                            name: 'Time',
                            document: 'https://vuetifyjs.com/zh-Hans/components/time-pickers/',
                            schema: E.TIME_PICKER.index,
                        },
                    },
                    {
                        configs: {
                            title: E.SELECT_SINGLE.schema.title,
                            icon: 'mdi-form-dropdown',
                            name: 'Select',
                            document: 'https://vuetifyjs.com/zh-Hans/components/selects/',
                            schema: E.SELECT_SINGLE.index,
                        },
                    },
                    {
                        configs: {
                            title: E.COMBOBOX.schema.title,
                            icon: 'mdi-vector-difference-ab',
                            name: 'Combobox',
                            document: 'https://vuetifyjs.com/zh-Hans/components/combobox/',
                            schema: E.COMBOBOX.index,
                        },
                    },
                    {
                        configs: {
                            title: E.SELECT_MULTIPLE.schema.title,
                            icon: 'mdi-form-dropdown',
                            name: 'Select',
                            document: 'https://vuetifyjs.com/zh-Hans/components/selects/',
                            schema: E.SELECT_MULTIPLE.index,
                        },
                    },
                    {
                        configs: {
                            title: E.CASCADE_SELECT.schema.title,
                            icon: 'mdi-file-tree-outline',
                            name: 'Select',
                            document: 'https://vuetifyjs.com/zh-Hans/components/selects/',
                            schema: E.CASCADE_SELECT.index,
                        },
                    },
                    {
                        configs: {
                            title: E.RADIO.schema.title,
                            icon: 'mdi-checkbox-marked-circle',
                            name: 'Select',
                            document: 'https://vuetifyjs.com/zh-Hans/components/selection-controls/',
                            schema: E.RADIO.index,
                        },
                    },
                    {
                        configs: {
                            title: E.COLOR_PICKER.schema.title,
                            icon: 'mdi-calendar',
                            name: 'Select',
                            document: 'https://vuetifyjs.com/zh-Hans/components/color-pickers/',
                            schema: E.COLOR_PICKER.index,
                        },
                    },
                    {
                        configs: {
                            title: E.FILE_INPUT.schema.title,
                            icon: 'mdi-calendar',
                            name: 'Select',
                            document: 'https://vuetifyjs.com/zh-Hans/components/file-inputs/',
                            schema: E.FILE_INPUT.index,
                        },
                    },
                ],
            },
            {
                title: '布局型组件',
                list: [
                    {
                        title: '行容器',
                        configs: {
                            layout: 'rowFormItem',
                            tagIcon: 'mdi-view-column-outline',
                            layoutTree: !0,
                            document: 'https://element.eleme.cn/#/zh-CN/component/layout#row-attributes',
                        },
                        type: 'default',
                        justify: 'start',
                        align: 'top',
                    },
                    {
                        title: '按钮',
                        configs: {
                            showtitle: !0,
                            changeTag: !0,
                            titleWidth: null,
                            tag: 'el-button',
                            tagIcon: 'mdi-gesture-tap-button',
                            span: 24,
                            layout: 'columnLayoutItem',
                            document: 'https://element.eleme.cn/#/zh-CN/component/button',
                        },
                        slot: { default: '主要按钮' },
                        type: 'primary',
                        icon: 'el-icon-search',
                        round: !1,
                        size: 'medium',
                        plain: !1,
                        circle: !1,
                        disabled: !1,
                    },
                ],
            },
        ],
        F = {
            annotations: {
                xprops: 'x-props',
                xslots: 'x-slots',
                xrules: 'x-rules',
                xdisplay: 'x-display',
                xclass: 'x-class',
                xstyle: 'x-style',
                xoptions: 'x-options',
                xfromUrl: 'x-fromUrl',
                xfromData: 'x-fromData',
                xitemKey: 'x-itemKey',
                xitemTitle: 'x-itemTitle',
                xitemIcon: 'x-itemIcon',
            },
            tags: {
                AlignContent: 'align-content',
                AllowOverflow: 'allow-overflow',
                AutoSelectFirst: 'auto-select-first',
                AmpmInTitle: 'ampm-in-title',
                AppendIcon: 'append-icon',
                AppendOuterIcon: 'append-outer-icon',
                AutoGrow: 'auto-grow',
                BackgroundColor: 'background-color',
                CacheItems: 'cache-items',
                ClearIcon: 'clear-icon',
                DeletableChips: 'deletable-chips',
                DisableLookup: 'disable-lookup',
                FalseValue: 'false-value',
                FirstDayOfWeek: 'first-day-of-week',
                FullWidth: 'full-width',
                HeaderColor: 'header-color',
                HideDetails: 'hide-details',
                HideNoData: 'hide-no-data',
                HideSelected: 'hide-selected',
                IndeterminateIcon: 'indeterminate-icon',
                InverseLabel: 'inverse-label',
                ItemColor: 'item-color',
                ItemDisabled: 'item-disabled',
                ItemText: 'item-text',
                ItemValue: 'item-value',
                LazyValidation: 'lazy-validation',
                LoaderHeight: 'loader-height',
                LocaleFirstDayOfYear: 'locale-first-day-of-year',
                MenuProps: 'menu-props',
                NextIcon: 'next-icon',
                NextMonthAriaLabel: 'next-month-aria-label',
                NextYearAriaLabel: 'next-year-aria-label',
                NoDataText: 'no-data-text',
                NoGutters: 'no-gutters',
                NoFilter: 'no-filter',
                NoResize: 'no-resize',
                NoTitle: 'no-title',
                OffIcon: 'off-icon',
                OnIcon: 'on-icon',
                OpenOnClear: 'open-on-clear',
                PersistentHint: 'persistent-hint',
                PickerDate: 'picker-date',
                PrependIcon: 'prepend-icon',
                PrependInnerIcon: 'prepend-inner-icon',
                PrevIcon: 'prev-icon',
                PrevMonthAriaLabel: 'prev-month-aria-label',
                PrevYearAriaLabel: 'prev-year-aria-label',
                ReturnObject: 'return-object',
                RowHeight: 'row-height',
                SelectedItemsText: 'selected-items-text',
                ShowCurrent: 'show-current',
                ShowWeek: 'show-week',
                SingleLine: 'single-line',
                SmallChips: 'small-chips',
                SoloInverted: 'solo-inverted',
                ThumbColor: 'thumb-color',
                ThumbLabel: 'thumb-label',
                ThumbSize: 'thumb-size',
                TickSize: 'tick-size',
                TrackColor: 'track-color',
                TrackFillCcolor: 'track-fill-color',
                TrueValue: 'true-value',
                UseSeconds: 'use-seconds',
                ValidateOnBlur: 'validate-on-blur',
                YearIcon: 'year-icon',
            },
            class: { switch: 'mt-0 pt-0' },
        };
    function A(e, t, s, a) {
        var n = { configs: {}, type: 'object', properties: {} },
            o = t + '_' + c.lib.shortid.generate();
        return (
            (n.configs.formId = o),
            (n.configs.renderKey = +new Date()),
            (n.configs.name = t),
            (n.configs.document = s),
            (n.configs.panel = a),
            (n.properties[o] = c.lib.lodash.cloneDeep(e)),
            n
        );
    }
    function R(e, t) {
        if (t) return e.properties[t];
        var s = e.configs.formId;
        return e.properties[s];
    }
    function j(e) {
        if (!c.lib.lodash.isEmpty(e)) {
            var t = R(e),
                s = (function (e) {
                    return !c.lib.lodash.isEmpty(e) && c.lib.lodash.has(e, F.annotations.xprops)
                        ? e[F.annotations.xprops]
                        : {};
                })(t),
                a = {};
            (a.tag = t.tag),
                (a.attributes = {}),
                (a.attributes['v-model'] = e.configs.formId),
                (a.attributes.label = t.title),
                $.default(a.attributes, s);
            var n = c.convertor.json2html.build(a);
            return c.lib.lodash.replace(n, /="true"/g, '');
        }
        return null;
    }
    function B(e) {
        return '<v-container fluid>\n        <v-row>\n            <v-col>\n                <v-card>\n                   '.concat(
            e,
            '\n                </v-card>\n            </v-col>\n        </v-row>\n    </v-container>'
        );
    }
    function N(e) {
        var t = (function (e) {
                var t,
                    s = C.default((t = c.lib.lodash)).call(t, e, j);
                return c.lib.lodash.isEmpty(s) ? '' : c.lib.lodash.join(s, '\n' + y.default('\t').call('\t', 7));
            })(e),
            s = (function (e) {
                var t = {};
                return (
                    c.lib.lodash.isEmpty(e) ||
                        C.default(e).call(e, function (e, s, a) {
                            var n = e.configs.formId,
                                o = R(e);
                            t[n] = (function (e) {
                                if (!e) return null;
                                switch (e.toLowerCase()) {
                                    case 'string':
                                        return '';
                                    case 'array':
                                        return [];
                                    case 'object':
                                        return {};
                                    case 'number':
                                        return 0;
                                    case 'boolean':
                                        return !1;
                                    default:
                                        return null;
                                }
                            })(o.type);
                        }),
                    t
                );
            })(e);
        return {
            code: (function (e, t) {
                var s,
                    a = B(e);
                return S.default(
                    (s = '<template>\n    '.concat(
                        a,
                        '\n</template>\n\n<script>\nexport default {\n    data: () => ({\n        '
                    ))
                ).call(s, t, '\n    }),\n};\n</script>');
            })(
                t,
                (function (e) {
                    var t = V.default(e);
                    t = (t = t.replace('{', '')).replace('}', '');
                    var s = new RegExp(',', 'g');
                    return t.replace(s, ',\n' + y.default('\t').call('\t', 3));
                })(s)
            ),
            template: B(t),
            data: s,
        };
    }
    var M = {
            components: {
                VIcon: a.VIcon,
                VBtn: a.VBtn,
                VCardActions: a.VCardActions,
                VCard: a.VCard,
                VCol: a.VCol,
                VRow: a.VRow,
                VContainer: a.VContainer,
            },
            name: 'HCanvasContainer',
            created: function () {},
            data: function () {
                return {};
            },
        },
        z = M,
        W = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-container',
                        [
                            s(
                                'v-row',
                                [
                                    s(
                                        'v-col',
                                        { staticClass: 'canvas-body' },
                                        [
                                            s(
                                                'v-card',
                                                { staticClass: 'ml-1 mr-1' },
                                                [
                                                    s(
                                                        'v-card-actions',
                                                        [
                                                            s(
                                                                'v-btn',
                                                                { attrs: { icon: '' } },
                                                                [s('v-icon', [e._v('mdi-heart')])],
                                                                1
                                                            ),
                                                            e._v(' '),
                                                            s(
                                                                'v-btn',
                                                                { attrs: { icon: '' } },
                                                                [s('v-icon', [e._v('mdi-bookmark')])],
                                                                1
                                                            ),
                                                            e._v(' '),
                                                            s(
                                                                'v-btn',
                                                                { attrs: { icon: '' } },
                                                                [s('v-icon', [e._v('mdi-share-variant')])],
                                                                1
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                    e._v(' '),
                                                    e._t('default'),
                                                ],
                                                2
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
            z,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        G = {
            name: 'HDraggableItem',
            components: {
                HFormRenderer: g.HFormRenderer,
                VListItemContent: a.VListItemContent,
                VIcon: a.VIcon,
                VBtn: a.VBtn,
                VListItemAction: a.VListItemAction,
                VListItem: a.VListItem,
                VCard: a.VCard,
                VHover: a.VHover,
            },
            props: { schema: { type: Object, default: function () {} }, selectedItemId: [String, Number] },
            computed: {
                isHover: function () {
                    return function (e) {
                        return e ? 12 : 0;
                    };
                },
            },
            data: function () {
                return { model: {}, isSelected: !1 };
            },
            watch: {
                selectedItemId: {
                    handler: function (e, t) {
                        this.isSelected = this.schema.configs.renderKey === e;
                    },
                    immediate: !0,
                },
            },
            methods: {
                canvasItemSelect: function () {
                    (this.isSelected = !0), this.$emit('select', this.schema);
                },
                canvasItemCopy: function () {
                    this.$emit('copy', this.schema);
                },
                canvasItemDelete: function () {
                    this.$emit('delete', this.schema.configs.formId);
                },
            },
        },
        q = G,
        K = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s('v-hover', {
                        scopedSlots: e._u([
                            {
                                key: 'default',
                                fn: function (t) {
                                    var a = t.hover;
                                    return [
                                        s(
                                            'v-card',
                                            {
                                                class: [
                                                    'ma-2',
                                                    e.isSelected && !a ? 'canvas-item-selected' : 'canvas-item-body',
                                                ],
                                                attrs: { elevation: a ? 12 : 2, dense: '' },
                                                on: { click: e.canvasItemSelect },
                                            },
                                            [
                                                s(
                                                    'v-list-item',
                                                    [
                                                        s(
                                                            'v-list-item-content',
                                                            [
                                                                s('h-form-renderer', {
                                                                    attrs: { schema: e.schema },
                                                                    model: {
                                                                        value: e.model,
                                                                        callback: function (t) {
                                                                            e.model = t;
                                                                        },
                                                                        expression: 'model',
                                                                    },
                                                                }),
                                                            ],
                                                            1
                                                        ),
                                                        e._v(' '),
                                                        e.isSelected
                                                            ? s(
                                                                  'v-list-item-action',
                                                                  { staticClass: 'justify-start' },
                                                                  [
                                                                      s(
                                                                          'v-btn',
                                                                          {
                                                                              attrs: { 'x-small': '', icon: '' },
                                                                              on: {
                                                                                  click: function (t) {
                                                                                      return (
                                                                                          t.stopPropagation(),
                                                                                          e.canvasItemCopy(t)
                                                                                      );
                                                                                  },
                                                                              },
                                                                          },
                                                                          [
                                                                              s(
                                                                                  'v-icon',
                                                                                  { attrs: { color: 'primary' } },
                                                                                  [e._v('mdi-content-duplicate')]
                                                                              ),
                                                                          ],
                                                                          1
                                                                      ),
                                                                      e._v(' '),
                                                                      s(
                                                                          'v-btn',
                                                                          {
                                                                              attrs: { 'x-small': '', icon: '' },
                                                                              on: {
                                                                                  click: function (t) {
                                                                                      return (
                                                                                          t.stopPropagation(),
                                                                                          e.canvasItemDelete(t)
                                                                                      );
                                                                                  },
                                                                              },
                                                                          },
                                                                          [
                                                                              s(
                                                                                  'v-icon',
                                                                                  { attrs: { color: 'error' } },
                                                                                  [e._v('mdi-close-box')]
                                                                              ),
                                                                          ],
                                                                          1
                                                                      ),
                                                                  ],
                                                                  1
                                                              )
                                                            : e._e(),
                                                    ],
                                                    1
                                                ),
                                            ],
                                            1
                                        ),
                                    ];
                                },
                            },
                        ]),
                    });
                },
                staticRenderFns: [],
            },
            undefined,
            q,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        X = {
            components: {
                VExpansionPanelHeader: a.VExpansionPanelHeader,
                VList: a.VList,
                VExpansionPanelContent: a.VExpansionPanelContent,
                VExpansionPanel: a.VExpansionPanel,
            },
            name: 'HExpansionPanel',
            props: { index: { type: String, required: !0 }, header: { type: String, required: !0 } },
        },
        Y = X,
        U = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panel',
                        { key: e.index },
                        [
                            s('v-expansion-panel-header', [e._v(e._s(e.header))]),
                            e._v(' '),
                            s(
                                'v-expansion-panel-content',
                                [s('v-list', { staticClass: 'ml-1 mr-1' }, [e._t('default')], 2)],
                                1
                            ),
                        ],
                        1
                    );
                },
                staticRenderFns: [],
            },
            undefined,
            Y,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        J = {
            components: {
                VSelect: a.VSelect,
                VListItemContent: a.VListItemContent,
                VIcon: a.VIcon,
                VTooltip: a.VTooltip,
                VListItemAction: a.VListItemAction,
                VListItem: a.VListItem,
            },
            name: 'HPanelSelect',
            props: {
                value: { required: !0 },
                label: String,
                tooltip: String,
                disabled: { type: Boolean, default: !1 },
                items: {
                    type: Array,
                    default: function () {
                        return [];
                    },
                },
            },
            data: function () {
                return { selectedValue: '' };
            },
            watch: {
                value: {
                    handler: function (e, t) {
                        this.selectedValue = e;
                    },
                    immediate: !0,
                },
                selectedValue: {
                    handler: function (e, t) {
                        this.$emit('input', e);
                    },
                },
            },
        },
        Q = J,
        Z = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-list-item',
                        { staticClass: 'pa-0', attrs: { dense: '' } },
                        [
                            s(
                                'v-list-item-content',
                                [
                                    s('v-select', {
                                        staticClass: 'ml-1 pr-2',
                                        attrs: {
                                            items: e.items,
                                            label: e.label,
                                            disabled: e.disabled,
                                            outlined: '',
                                            dense: '',
                                            'hide-details': '',
                                            clearable: '',
                                            'no-data-text': '空',
                                        },
                                        model: {
                                            value: e.selectedValue,
                                            callback: function (t) {
                                                e.selectedValue = t;
                                            },
                                            expression: 'selectedValue',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            e.tooltip
                                ? s(
                                      'v-list-item-action',
                                      [
                                          s(
                                              'v-tooltip',
                                              {
                                                  attrs: { left: '', 'max-width': '200px' },
                                                  scopedSlots: e._u(
                                                      [
                                                          {
                                                              key: 'activator',
                                                              fn: function (t) {
                                                                  var a = t.on,
                                                                      n = t.attrs;
                                                                  return [
                                                                      s(
                                                                          'v-icon',
                                                                          e._g(
                                                                              e._b(
                                                                                  {
                                                                                      attrs: {
                                                                                          color: 'grey lighten-1',
                                                                                          dark: '',
                                                                                      },
                                                                                  },
                                                                                  'v-icon',
                                                                                  n,
                                                                                  !1
                                                                              ),
                                                                              a
                                                                          ),
                                                                          [e._v('mdi-information')]
                                                                      ),
                                                                  ];
                                                              },
                                                          },
                                                      ],
                                                      null,
                                                      !1,
                                                      36085519
                                                  ),
                                              },
                                              [e._v(' '), s('span', [e._v(e._s(e.tooltip))])]
                                          ),
                                      ],
                                      1
                                  )
                                : e._e(),
                        ],
                        1
                    );
                },
                staticRenderFns: [],
            },
            undefined,
            Q,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        ee = {
            components: {
                VCombobox: a.VCombobox,
                VListItemContent: a.VListItemContent,
                VIcon: a.VIcon,
                VTooltip: a.VTooltip,
                VListItemAction: a.VListItemAction,
                VListItem: a.VListItem,
            },
            name: 'HPanelArray',
            props: {
                value: {
                    type: Array,
                    default: function () {
                        return [];
                    },
                },
                label: String,
                tooltip: String,
                disabled: { type: Boolean, default: !1 },
            },
            data: function () {
                return { selectedValues: [] };
            },
            watch: {
                value: {
                    handler: function (e, t) {
                        this.selectedValues = e;
                    },
                    immediate: !0,
                },
                selectedValues: {
                    handler: function (e, t) {
                        this.$emit('input', e);
                    },
                },
            },
        },
        te = ee,
        se = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-list-item',
                        { staticClass: 'pa-0', attrs: { dense: '' } },
                        [
                            s(
                                'v-list-item-content',
                                [
                                    s('v-combobox', {
                                        staticClass: 'ml-1 pr-2',
                                        attrs: {
                                            items: e.selectedValues,
                                            label: e.label,
                                            disabled: e.disabled,
                                            chips: '',
                                            clearable: '',
                                            dense: '',
                                            'deletable-chips': '',
                                            'hide-no-data': '',
                                            'hide-details': '',
                                            multiple: '',
                                            outlined: '',
                                            'small-chips': '',
                                        },
                                        model: {
                                            value: e.selectedValues,
                                            callback: function (t) {
                                                e.selectedValues = t;
                                            },
                                            expression: 'selectedValues',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            e.tooltip
                                ? s(
                                      'v-list-item-action',
                                      [
                                          s(
                                              'v-tooltip',
                                              {
                                                  attrs: { left: '', 'max-width': '200px' },
                                                  scopedSlots: e._u(
                                                      [
                                                          {
                                                              key: 'activator',
                                                              fn: function (t) {
                                                                  var a = t.on,
                                                                      n = t.attrs;
                                                                  return [
                                                                      s(
                                                                          'v-icon',
                                                                          e._g(
                                                                              e._b(
                                                                                  {
                                                                                      attrs: {
                                                                                          color: 'grey lighten-1',
                                                                                          dark: '',
                                                                                      },
                                                                                  },
                                                                                  'v-icon',
                                                                                  n,
                                                                                  !1
                                                                              ),
                                                                              a
                                                                          ),
                                                                          [e._v('mdi-information')]
                                                                      ),
                                                                  ];
                                                              },
                                                          },
                                                      ],
                                                      null,
                                                      !1,
                                                      36085519
                                                  ),
                                              },
                                              [e._v(' '), s('span', [e._v(e._s(e.tooltip))])]
                                          ),
                                      ],
                                      1
                                  )
                                : e._e(),
                        ],
                        1
                    );
                },
                staticRenderFns: [],
            },
            undefined,
            te,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        ae = {
            components: {
                VTextField: a.VTextField,
                VListItemContent: a.VListItemContent,
                VIcon: a.VIcon,
                VTooltip: a.VTooltip,
                VListItemAction: a.VListItemAction,
                VListItem: a.VListItem,
            },
            name: 'HPanelColor',
            props: {
                value: { type: String, default: '#ffffff' },
                label: String,
                tooltip: String,
                disabled: { type: Boolean, default: !1 },
            },
            data: function () {
                return { color: '' };
            },
            watch: {
                value: {
                    handler: function (e, t) {
                        this.color = e;
                    },
                    immediate: !0,
                },
                color: {
                    handler: function (e, t) {
                        this.$emit('input', e);
                    },
                },
            },
        },
        ne = ae,
        oe = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-list-item',
                        { staticClass: 'pa-1', attrs: { dense: '' } },
                        [
                            s(
                                'v-list-item-content',
                                [
                                    s('v-text-field', {
                                        attrs: {
                                            label: e.label,
                                            disabled: e.disabled,
                                            outlined: '',
                                            dense: '',
                                            'hide-details': '',
                                            type: 'color',
                                        },
                                        model: {
                                            value: e.color,
                                            callback: function (t) {
                                                e.color = t;
                                            },
                                            expression: 'color',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            e.tooltip
                                ? s(
                                      'v-list-item-action',
                                      [
                                          s(
                                              'v-tooltip',
                                              {
                                                  attrs: { left: '', 'max-width': '200px' },
                                                  scopedSlots: e._u(
                                                      [
                                                          {
                                                              key: 'activator',
                                                              fn: function (t) {
                                                                  var a = t.on,
                                                                      n = t.attrs;
                                                                  return [
                                                                      s(
                                                                          'v-icon',
                                                                          e._g(
                                                                              e._b(
                                                                                  {
                                                                                      attrs: {
                                                                                          color: 'grey lighten-1',
                                                                                          dark: '',
                                                                                      },
                                                                                  },
                                                                                  'v-icon',
                                                                                  n,
                                                                                  !1
                                                                              ),
                                                                              a
                                                                          ),
                                                                          [e._v('mdi-information')]
                                                                      ),
                                                                  ];
                                                              },
                                                          },
                                                      ],
                                                      null,
                                                      !1,
                                                      36085519
                                                  ),
                                              },
                                              [e._v(' '), s('span', [e._v(e._s(e.tooltip))])]
                                          ),
                                      ],
                                      1
                                  )
                                : e._e(),
                        ],
                        1
                    );
                },
                staticRenderFns: [],
            },
            undefined,
            ne,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        re = {
            name: 'HPanelIcon',
            components: {
                HIconList: x.HIconList,
                VListItemTitle: a.VListItemTitle,
                VListItemContent: a.VListItemContent,
                VIcon: a.VIcon,
                VTooltip: a.VTooltip,
                VListItemAction: a.VListItemAction,
                VListItem: a.VListItem,
            },
            props: {
                value: { type: String },
                label: String,
                tooltip: String,
                disabled: { type: Boolean, default: !1 },
            },
            data: function () {
                return { icon: '' };
            },
            watch: {
                value: {
                    handler: function (e, t) {
                        e && (this.icon = e);
                    },
                },
                icon: {
                    handler: function (e, t) {
                        this.$emit('input', e);
                    },
                },
            },
        },
        ie = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-list-item',
                        { staticClass: 'pa-0 ml-1', attrs: { dense: '' } },
                        [
                            s(
                                'v-list-item-content',
                                [
                                    e.label ? s('v-list-item-title', [e._v(e._s(e.label))]) : e._e(),
                                    e._v(' '),
                                    s('h-icon-list', {
                                        attrs: { dense: '', disabled: e.disabled },
                                        model: {
                                            value: e.icon,
                                            callback: function (t) {
                                                e.icon = t;
                                            },
                                            expression: 'icon',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            e.tooltip
                                ? s(
                                      'v-list-item-action',
                                      [
                                          s(
                                              'v-tooltip',
                                              {
                                                  attrs: { left: '', 'max-width': '200px' },
                                                  scopedSlots: e._u(
                                                      [
                                                          {
                                                              key: 'activator',
                                                              fn: function (t) {
                                                                  var a = t.on,
                                                                      n = t.attrs;
                                                                  return [
                                                                      s(
                                                                          'v-icon',
                                                                          e._g(
                                                                              e._b(
                                                                                  {
                                                                                      class: [e.label ? 'pt-3' : ''],
                                                                                      attrs: {
                                                                                          color: 'grey lighten-1',
                                                                                          dark: '',
                                                                                      },
                                                                                  },
                                                                                  'v-icon',
                                                                                  n,
                                                                                  !1
                                                                              ),
                                                                              a
                                                                          ),
                                                                          [
                                                                              e._v(
                                                                                  '\n                    mdi-information'
                                                                              ),
                                                                          ]
                                                                      ),
                                                                  ];
                                                              },
                                                          },
                                                      ],
                                                      null,
                                                      !1,
                                                      2116843834
                                                  ),
                                              },
                                              [e._v(' '), s('span', [e._v(e._s(e.tooltip))])]
                                          ),
                                      ],
                                      1
                                  )
                                : e._e(),
                        ],
                        1
                    );
                },
                staticRenderFns: [],
            },
            undefined,
            re,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        le = {
            components: {
                VTextField: a.VTextField,
                VListItemContent: a.VListItemContent,
                VIcon: a.VIcon,
                VTooltip: a.VTooltip,
                VListItemAction: a.VListItemAction,
                VListItem: a.VListItem,
            },
            name: 'HPanelNumber',
            props: {
                value: [Number, String],
                label: String,
                tooltip: String,
                disabled: { type: Boolean, default: !1 },
                min: { type: [Number, String], default: 0 },
                max: { type: [Number, String], default: 100 },
                step: { type: [Number, String], default: 1 },
            },
            data: function () {
                return { numberValue: null };
            },
            watch: {
                value: {
                    handler: function (e, t) {
                        this.numberValue = e;
                    },
                    immediate: !0,
                },
                numberValue: {
                    handler: function (e, t) {
                        this.$emit('input', e);
                    },
                },
            },
        },
        pe = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-list-item',
                        { staticClass: 'pa-0', attrs: { dense: '' } },
                        [
                            s(
                                'v-list-item-content',
                                [
                                    s('v-text-field', {
                                        staticClass: 'ml-1 pr-2',
                                        attrs: {
                                            label: e.label,
                                            disabled: e.disabled,
                                            min: e.min,
                                            max: e.max,
                                            step: e.step,
                                            outlined: '',
                                            dense: '',
                                            'hide-details': '',
                                            type: 'number',
                                        },
                                        model: {
                                            value: e.numberValue,
                                            callback: function (t) {
                                                e.numberValue = t;
                                            },
                                            expression: 'numberValue',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            e.tooltip
                                ? s(
                                      'v-list-item-action',
                                      [
                                          s(
                                              'v-tooltip',
                                              {
                                                  attrs: { left: '', 'max-width': '200px' },
                                                  scopedSlots: e._u(
                                                      [
                                                          {
                                                              key: 'activator',
                                                              fn: function (t) {
                                                                  var a = t.on,
                                                                      n = t.attrs;
                                                                  return [
                                                                      s(
                                                                          'v-icon',
                                                                          e._g(
                                                                              e._b(
                                                                                  {
                                                                                      attrs: {
                                                                                          color: 'grey lighten-1',
                                                                                          dark: '',
                                                                                      },
                                                                                  },
                                                                                  'v-icon',
                                                                                  n,
                                                                                  !1
                                                                              ),
                                                                              a
                                                                          ),
                                                                          [e._v('mdi-information')]
                                                                      ),
                                                                  ];
                                                              },
                                                          },
                                                      ],
                                                      null,
                                                      !1,
                                                      36085519
                                                  ),
                                              },
                                              [e._v(' '), s('span', [e._v(e._s(e.tooltip))])]
                                          ),
                                      ],
                                      1
                                  )
                                : e._e(),
                        ],
                        1
                    );
                },
                staticRenderFns: [],
            },
            undefined,
            le,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        ce = {
            components: {
                VSwitch: a.VSwitch,
                VListItemContent: a.VListItemContent,
                VIcon: a.VIcon,
                VTooltip: a.VTooltip,
                VListItemAction: a.VListItemAction,
                VListItem: a.VListItem,
            },
            name: 'HPanelSwitch',
            props: {
                value: Boolean,
                label: String,
                tooltip: String,
                disabled: { type: Boolean, default: !1 },
                trueValue: { type: [String, Boolean, Array, Object], default: !0 },
                falseValue: { type: [String, Boolean, Array, Object], default: !1 },
            },
            data: function () {
                return { checkedValue: !1 };
            },
            watch: {
                value: {
                    handler: function (e, t) {
                        this.checkedValue = e;
                    },
                    immediate: !0,
                },
                checkedValue: {
                    handler: function (e, t) {
                        this.$emit('input', e);
                    },
                },
            },
        },
        de = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-list-item',
                        { staticClass: 'pa-0', attrs: { dense: '' } },
                        [
                            s(
                                'v-list-item-content',
                                [
                                    s('v-switch', {
                                        staticClass: 'mt-0 ml-2 pt-0',
                                        attrs: {
                                            label: e.label,
                                            disabled: e.disabled,
                                            'true-value': e.trueValue,
                                            'false-value': e.falseValue,
                                            dense: '',
                                            inset: '',
                                            'hide-details': '',
                                        },
                                        model: {
                                            value: e.checkedValue,
                                            callback: function (t) {
                                                e.checkedValue = t;
                                            },
                                            expression: 'checkedValue',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            e.tooltip
                                ? s(
                                      'v-list-item-action',
                                      [
                                          s(
                                              'v-tooltip',
                                              {
                                                  attrs: { left: '', 'max-width': '200px' },
                                                  scopedSlots: e._u(
                                                      [
                                                          {
                                                              key: 'activator',
                                                              fn: function (t) {
                                                                  var a = t.on,
                                                                      n = t.attrs;
                                                                  return [
                                                                      s(
                                                                          'v-icon',
                                                                          e._g(
                                                                              e._b(
                                                                                  {
                                                                                      attrs: {
                                                                                          color: 'grey lighten-1',
                                                                                          dark: '',
                                                                                      },
                                                                                  },
                                                                                  'v-icon',
                                                                                  n,
                                                                                  !1
                                                                              ),
                                                                              a
                                                                          ),
                                                                          [e._v('mdi-information')]
                                                                      ),
                                                                  ];
                                                              },
                                                          },
                                                      ],
                                                      null,
                                                      !1,
                                                      36085519
                                                  ),
                                              },
                                              [e._v(' '), s('span', [e._v(e._s(e.tooltip))])]
                                          ),
                                      ],
                                      1
                                  )
                                : e._e(),
                        ],
                        1
                    );
                },
                staticRenderFns: [],
            },
            undefined,
            ce,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        ue = {
            components: {
                VSwitch: a.VSwitch,
                VTextField: a.VTextField,
                VListItemContent: a.VListItemContent,
                VIcon: a.VIcon,
                VTooltip: a.VTooltip,
                VListItemIcon: a.VListItemIcon,
                VListItemAction: a.VListItemAction,
                VListItem: a.VListItem,
            },
            name: 'HCombineBooleanInput',
            props: {
                value: [Boolean, String],
                label: String,
                tooltip: String,
                disabled: { type: Boolean, default: !1 },
                trueValue: { type: [String, Boolean, Array, Object], default: !0 },
                falseValue: { type: [String, Boolean, Array, Object], default: !1 },
            },
            data: function () {
                return { content: null, isSwitch: !1 };
            },
            watch: {
                value: {
                    handler: function (e, t) {
                        this.content = e;
                    },
                },
                content: {
                    handler: function (e, t) {
                        this.$emit('input', e);
                    },
                },
            },
        },
        me = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-list-item',
                        { staticClass: 'pa-0', attrs: { dense: '' } },
                        [
                            s(
                                'v-list-item-content',
                                [
                                    e.isSwitch
                                        ? s('v-switch', {
                                              staticClass: 'mt-0 ml-2 pt-0',
                                              attrs: {
                                                  value: e.content,
                                                  label: e.label,
                                                  disabled: e.disabled,
                                                  'true-value': e.trueValue,
                                                  'false-value': e.falseValue,
                                                  dense: '',
                                                  inset: '',
                                                  'hide-details': '',
                                              },
                                          })
                                        : s('v-text-field', {
                                              staticClass: 'ml-1 pr-2',
                                              attrs: {
                                                  value: e.content,
                                                  label: e.label,
                                                  disabled: e.disabled,
                                                  outlined: '',
                                                  dense: '',
                                                  'hide-details': '',
                                                  clearable: '',
                                              },
                                          }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'v-list-item-icon',
                                { staticClass: 'align-self-center' },
                                [
                                    s(
                                        'v-tooltip',
                                        {
                                            attrs: { left: '' },
                                            scopedSlots: e._u([
                                                {
                                                    key: 'activator',
                                                    fn: function (t) {
                                                        var a = t.on,
                                                            n = t.attrs;
                                                        return [
                                                            s(
                                                                'v-icon',
                                                                e._g(
                                                                    e._b(
                                                                        {
                                                                            on: {
                                                                                click: function (t) {
                                                                                    e.isSwitch = !e.isSwitch;
                                                                                },
                                                                            },
                                                                        },
                                                                        'v-icon',
                                                                        n,
                                                                        !1
                                                                    ),
                                                                    a
                                                                ),
                                                                [
                                                                    e._v(
                                                                        e._s(
                                                                            e.isSwitch
                                                                                ? 'mdi-form-textbox'
                                                                                : 'mdi-toggle-switch'
                                                                        )
                                                                    ),
                                                                ]
                                                            ),
                                                        ];
                                                    },
                                                },
                                            ]),
                                        },
                                        [
                                            e._v(' '),
                                            s('span', [e._v(e._s(e.isSwitch ? '切换为文本输入' : '切换为滑块输入'))]),
                                        ]
                                    ),
                                ],
                                1
                            ),
                            e._v(' '),
                            e.tooltip
                                ? s(
                                      'v-list-item-action',
                                      { staticClass: 'mr-1' },
                                      [
                                          s(
                                              'v-tooltip',
                                              {
                                                  attrs: { left: '', 'max-width': '200px' },
                                                  scopedSlots: e._u(
                                                      [
                                                          {
                                                              key: 'activator',
                                                              fn: function (t) {
                                                                  var a = t.on,
                                                                      n = t.attrs;
                                                                  return [
                                                                      s(
                                                                          'v-icon',
                                                                          e._g(
                                                                              e._b(
                                                                                  {
                                                                                      attrs: {
                                                                                          color: 'grey lighten-1',
                                                                                          dark: '',
                                                                                      },
                                                                                  },
                                                                                  'v-icon',
                                                                                  n,
                                                                                  !1
                                                                              ),
                                                                              a
                                                                          ),
                                                                          [e._v('mdi-information')]
                                                                      ),
                                                                  ];
                                                              },
                                                          },
                                                      ],
                                                      null,
                                                      !1,
                                                      36085519
                                                  ),
                                              },
                                              [e._v(' '), s('span', [e._v(e._s(e.tooltip))])]
                                          ),
                                      ],
                                      1
                                  )
                                : e._e(),
                        ],
                        1
                    );
                },
                staticRenderFns: [],
            },
            undefined,
            ue,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        ve = {
            components: {
                VTextField: a.VTextField,
                VListItemContent: a.VListItemContent,
                VIcon: a.VIcon,
                VTooltip: a.VTooltip,
                VListItemAction: a.VListItemAction,
                VListItem: a.VListItem,
            },
            name: 'HPanelTextField',
            props: { value: String, label: String, tooltip: String, disabled: { type: Boolean, default: !1 } },
            data: function () {
                return { inputValue: '' };
            },
            watch: {
                value: {
                    handler: function (e, t) {
                        this.inputValue = e;
                    },
                    immediate: !0,
                },
                inputValue: {
                    handler: function (e, t) {
                        this.$emit('input', e);
                    },
                },
            },
        },
        he = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-list-item',
                        { staticClass: 'pa-0', attrs: { dense: '' } },
                        [
                            s(
                                'v-list-item-content',
                                [
                                    s('v-text-field', {
                                        staticClass: 'ml-1 pr-2',
                                        attrs: {
                                            label: e.label,
                                            disabled: e.disabled,
                                            outlined: '',
                                            dense: '',
                                            'hide-details': '',
                                            clearable: '',
                                        },
                                        model: {
                                            value: e.inputValue,
                                            callback: function (t) {
                                                e.inputValue = t;
                                            },
                                            expression: 'inputValue',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            e.tooltip
                                ? s(
                                      'v-list-item-action',
                                      [
                                          s(
                                              'v-tooltip',
                                              {
                                                  attrs: { left: '', 'max-width': '200px' },
                                                  scopedSlots: e._u(
                                                      [
                                                          {
                                                              key: 'activator',
                                                              fn: function (t) {
                                                                  var a = t.on,
                                                                      n = t.attrs;
                                                                  return [
                                                                      s(
                                                                          'v-icon',
                                                                          e._g(
                                                                              e._b(
                                                                                  {
                                                                                      attrs: {
                                                                                          color: 'grey lighten-1',
                                                                                          dark: '',
                                                                                      },
                                                                                  },
                                                                                  'v-icon',
                                                                                  n,
                                                                                  !1
                                                                              ),
                                                                              a
                                                                          ),
                                                                          [e._v('mdi-information')]
                                                                      ),
                                                                  ];
                                                              },
                                                          },
                                                      ],
                                                      null,
                                                      !1,
                                                      36085519
                                                  ),
                                              },
                                              [e._v(' '), s('span', [e._v(e._s(e.tooltip))])]
                                          ),
                                      ],
                                      1
                                  )
                                : e._e(),
                        ],
                        1
                    );
                },
                staticRenderFns: [],
            },
            undefined,
            ve,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        be = {
            components: {
                VTextField: a.VTextField,
                VForm: a.VForm,
                VListItemContent: a.VListItemContent,
                VIcon: a.VIcon,
                VTooltip: a.VTooltip,
                VListItemAction: a.VListItemAction,
                VListItem: a.VListItem,
            },
            name: 'HPanelBetween',
            props: { value: String, label: String, tooltip: String, disabled: { type: Boolean, default: !1 } },
            data: function () {
                return { valid: !0, betweenParam: '', min: '', max: '' };
            },
            computed: {
                minRule: function () {
                    var e = this;
                    return [
                        function (t) {
                            if (t) {
                                var s = parseInt(t);
                                return s < 0
                                    ? 'min参数的值必须要大于等于0'
                                    : !e.max || !(s >= parseInt(e.max)) || 'min值必须小于max值';
                            }
                            return '请设置min参数的值';
                        },
                    ];
                },
                maxRule: function () {
                    var e = this;
                    return [
                        function (t) {
                            if (t) {
                                var s = parseInt(t);
                                return s <= 0
                                    ? 'max参数的值必须要大于0'
                                    : e.min && s <= parseInt(e.min)
                                    ? 'max值必须大于min值'
                                    : ((e.valid = !0), !0);
                            }
                            return '请设置max参数的值';
                        },
                    ];
                },
            },
            watch: {
                value: {
                    handler: function (e, t) {
                        (this.betweenParam = e), this.setParamValue(this.betweenParam);
                    },
                    immediate: !0,
                },
                betweenParam: {
                    handler: function (e, t) {
                        this.$emit('input', e);
                    },
                },
                min: {
                    handler: function (e, t) {
                        this.betweenParam = e + ',' + this.max;
                    },
                },
                max: {
                    handler: function (e, t) {
                        this.betweenParam = this.min + ',' + e;
                    },
                },
            },
            methods: {
                validate: function () {
                    this.$refs.form.validate();
                },
                reset: function () {
                    this.$refs.form.reset();
                },
                setParamValue: function (e) {
                    if (e && -1 != e.search(',')) {
                        var t = this.$lib.lodash.split(e, ',');
                        t && ((this.min = t[0]), (this.max = t[1]));
                    }
                },
            },
        },
        fe = {
            name: 'HRuleExpansionPanel',
            components: {
                HExpansionPanel: U,
                HPanelBetween: H.default(
                    {
                        render: function () {
                            var e = this,
                                t = e.$createElement,
                                s = e._self._c || t;
                            return s(
                                'v-list-item',
                                { staticClass: 'pa-0', attrs: { dense: '' } },
                                [
                                    s(
                                        'v-list-item-content',
                                        { staticClass: 'pb-0' },
                                        [
                                            s(
                                                'v-form',
                                                {
                                                    ref: 'form',
                                                    model: {
                                                        value: e.valid,
                                                        callback: function (t) {
                                                            e.valid = t;
                                                        },
                                                        expression: 'valid',
                                                    },
                                                },
                                                [
                                                    s('v-text-field', {
                                                        staticClass: 'ml-1 mb-0 pr-2',
                                                        attrs: {
                                                            label: 'Min',
                                                            disabled: e.disabled,
                                                            rules: e.minRule,
                                                            placeholder: '请输入min值',
                                                            type: 'number',
                                                            outlined: '',
                                                            dense: '',
                                                            clearable: '',
                                                            required: '',
                                                            min: '0',
                                                        },
                                                        model: {
                                                            value: e.min,
                                                            callback: function (t) {
                                                                e.min = t;
                                                            },
                                                            expression: 'min',
                                                        },
                                                    }),
                                                    e._v(' '),
                                                    s('v-text-field', {
                                                        staticClass: 'ml-1 mb-0 pr-2',
                                                        attrs: {
                                                            label: 'Max',
                                                            disabled: e.disabled,
                                                            rules: e.maxRule,
                                                            placeholder: '请输入Max值',
                                                            type: 'number',
                                                            outlined: '',
                                                            dense: '',
                                                            clearable: '',
                                                            required: '',
                                                        },
                                                        model: {
                                                            value: e.max,
                                                            callback: function (t) {
                                                                e.max = t;
                                                            },
                                                            expression: 'max',
                                                        },
                                                    }),
                                                ],
                                                1
                                            ),
                                        ],
                                        1
                                    ),
                                    e._v(' '),
                                    e.tooltip
                                        ? s(
                                              'v-list-item-action',
                                              [
                                                  s(
                                                      'v-tooltip',
                                                      {
                                                          attrs: { left: '', 'max-width': '200px' },
                                                          scopedSlots: e._u(
                                                              [
                                                                  {
                                                                      key: 'activator',
                                                                      fn: function (t) {
                                                                          var a = t.on,
                                                                              n = t.attrs;
                                                                          return [
                                                                              s(
                                                                                  'v-icon',
                                                                                  e._g(
                                                                                      e._b(
                                                                                          {
                                                                                              attrs: {
                                                                                                  color:
                                                                                                      'grey lighten-1',
                                                                                                  dark: '',
                                                                                              },
                                                                                          },
                                                                                          'v-icon',
                                                                                          n,
                                                                                          !1
                                                                                      ),
                                                                                      a
                                                                                  ),
                                                                                  [e._v('mdi-information')]
                                                                              ),
                                                                          ];
                                                                      },
                                                                  },
                                                              ],
                                                              null,
                                                              !1,
                                                              36085519
                                                          ),
                                                      },
                                                      [e._v(' '), s('span', [e._v(e._s(e.tooltip))])]
                                                  ),
                                              ],
                                              1
                                          )
                                        : e._e(),
                                ],
                                1
                            );
                        },
                        staticRenderFns: [],
                    },
                    undefined,
                    be,
                    undefined,
                    false,
                    undefined,
                    !1,
                    void 0,
                    void 0,
                    void 0
                ),
                VSubheader: a.VSubheader,
                VIcon: a.VIcon,
                VListItemAvatar: a.VListItemAvatar,
                VListItemTitle: a.VListItemTitle,
                VListItemSubtitle: a.VListItemSubtitle,
                VListItemContent: a.VListItemContent,
                VListItem: a.VListItem,
                VListItemGroup: a.VListItemGroup,
                VDivider: a.VDivider,
                VSelect: a.VSelect,
                VBtn: a.VBtn,
                VCol: a.VCol,
                VRow: a.VRow,
            },
            props: { value: { type: String, default: '' } },
            data: function () {
                return {
                    expressions: '',
                    ruleItems: [],
                    ruleParamSettingPanel: '',
                    ruleParam: '',
                    selectedItems: [],
                    selectedRule: {},
                };
            },
            watch: {
                value: {
                    handler: function (e, t) {
                        (this.expressions = e),
                            this.$lib.lodash.isEmpty(this.ruleItems) && (this.ruleItems = this.$rules),
                            this.readExpressions(this.expressions);
                    },
                    immediate: !0,
                },
                expressions: {
                    handler: function (e, t) {
                        this.$emit('input', e);
                    },
                },
                selectedRule: {
                    handler: function (e, t) {
                        e
                            ? this.changeRuleSettingPanel(e.type)
                            : ((this.ruleParamSettingPanel = ''), (this.ruleParam = ''));
                    },
                },
                selectedItems: {
                    handler: function (e, t) {
                        this.expressions = this.constructExpression(e);
                    },
                },
            },
            computed: {
                isButtonDisabled: function () {
                    return !!this.$lib.lodash.isEmpty(this.selectedRule);
                },
            },
            methods: {
                changeRuleSettingPanel: function (e) {
                    var t = '',
                        s = '';
                    switch (e) {
                        case 'between':
                            (t = 'HPanelBetween'), (s = this.readSelectedItemParam(e));
                            break;
                        default:
                            (t = ''), (s = '');
                    }
                    (this.ruleParamSettingPanel = t), (this.ruleParam = s);
                },
                readSelectedItemParam: function (e) {
                    var t = this.$lib.lodash.find(this.selectedItems, function (t) {
                        return t.type === e;
                    });
                    return t && t.param ? t.param : '';
                },
                findRuleItemByType: function (e) {
                    return this.$lib.lodash.find(this.ruleItems, function (t) {
                        return t.type === e;
                    });
                },
                changeRuleItemStatus: function (e, t) {
                    void 0 === t && (t = !0), (this.findRuleItemByType(e.type).disabled = t);
                },
                pushSelectedItem: function (e) {
                    e && (this.selectedItems.push(e), this.changeRuleItemStatus(e, !0));
                },
                removeSelectedItem: function (e) {
                    (this.selectedItems = this.$lib.lodash.remove(this.selectedItems, function (t) {
                        return t.type !== e.type;
                    })),
                        this.changeRuleItemStatus(e, !1),
                        (this.selectedRule = {});
                },
                parseExpression: function (e) {
                    var t = {};
                    if (e)
                        if (-1 != e.search(':')) {
                            var s = this.$lib.lodash.split(value, ':');
                            s && ((t.type = s[0]), (t.param = s[1]));
                        } else (t.type = e), (t.param = '');
                    return t;
                },
                addSelectedItemByExpression: function (e) {
                    var t = this.parseExpression(e),
                        s = this.findRuleItemByType(t.type);
                    t.param && (s.param = t.param), this.pushSelectedItem(s);
                },
                readExpressions: function (e) {
                    if (e)
                        if (-1 !== e.indexOf('|')) {
                            var t = this.$lib.lodash.split(e, '|');
                            for (var s in t) this.addSelectedItemByExpression(s);
                        } else this.addSelectedItemByExpression(e);
                },
                readSelectedRule: function () {
                    if (this.$lib.lodash.isEmpty(this.selectedRule)) return '';
                    var e = Object.assign({}, this.selectedRule);
                    return this.ruleParam && (e.param = this.ruleParam), e;
                },
                addSelectedItemBySelector: function () {
                    var e = this.readSelectedRule();
                    this.pushSelectedItem(e);
                },
                addRule: function () {
                    this.ruleParamSettingPanel
                        ? (this.$refs.rulePanel.validate(),
                          this.$refs.rulePanel.valid && this.addSelectedItemBySelector())
                        : this.addSelectedItemBySelector();
                },
                constructExpression: function (e) {
                    if (e)
                        return e
                            .map(function (e) {
                                return e.param ? e.type + ':' + e.param : e.type;
                            })
                            .join('|');
                },
            },
        },
        ge = {
            name: 'HTextFieldPanel',
            components: {
                HExpansionPanel: U,
                HPanelColor: oe,
                HPanelIcon: ie,
                HPanelNumber: pe,
                HPanelSelect: Z,
                HPanelSwitch: de,
                HPanelTextField: he,
                HRuleExpansionPanel: H.default(
                    {
                        render: function () {
                            var e = this,
                                t = e.$createElement,
                                s = e._self._c || t;
                            return s(
                                'h-expansion-panel',
                                { attrs: { index: 'rules', header: '校验' } },
                                [
                                    s('v-subheader', [e._v('已配置规则')]),
                                    e._v(' '),
                                    s(
                                        'v-list-item-group',
                                        { staticClass: 'mb-1', attrs: { color: 'primary' } },
                                        e._l(e.selectedItems, function (t, a) {
                                            return s(
                                                'v-list-item',
                                                { key: a, staticClass: 'pl-2 pr-2', attrs: { dense: '' } },
                                                [
                                                    s(
                                                        'v-list-item-avatar',
                                                        { attrs: { size: '28' } },
                                                        [
                                                            s(
                                                                'v-icon',
                                                                {
                                                                    staticClass: 'error lighten-1 white--text',
                                                                    attrs: { small: '' },
                                                                    on: {
                                                                        click: function (s) {
                                                                            return e.removeSelectedItem(t);
                                                                        },
                                                                    },
                                                                },
                                                                [e._v('mdi-delete-alert')]
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                    e._v(' '),
                                                    s(
                                                        'v-list-item-content',
                                                        [
                                                            s('v-list-item-title', {
                                                                domProps: { textContent: e._s(t.name) },
                                                            }),
                                                            e._v(' '),
                                                            s('v-list-item-subtitle', {
                                                                domProps: { textContent: e._s(t.message) },
                                                            }),
                                                        ],
                                                        1
                                                    ),
                                                ],
                                                1
                                            );
                                        }),
                                        1
                                    ),
                                    e._v(' '),
                                    s('v-divider'),
                                    e._v(' '),
                                    s(
                                        'v-list-item',
                                        { staticClass: 'pa-0', attrs: { dense: '' } },
                                        [
                                            s(
                                                'v-list-item-content',
                                                [
                                                    s(
                                                        'v-row',
                                                        [
                                                            s(
                                                                'v-col',
                                                                { staticClass: 'pt-0 pb-0' },
                                                                [
                                                                    s('v-select', {
                                                                        staticClass: 'ml-1 pr-2',
                                                                        attrs: {
                                                                            items: e.ruleItems,
                                                                            'item-value': 'type',
                                                                            'item-text': 'name',
                                                                            label: '规则',
                                                                            outlined: '',
                                                                            dense: '',
                                                                            clearable: '',
                                                                            'return-object': '',
                                                                            'no-data-text': '空',
                                                                        },
                                                                        model: {
                                                                            value: e.selectedRule,
                                                                            callback: function (t) {
                                                                                e.selectedRule = t;
                                                                            },
                                                                            expression: 'selectedRule',
                                                                        },
                                                                    }),
                                                                    e._v(' '),
                                                                    s(e.ruleParamSettingPanel, {
                                                                        ref: 'rulePanel',
                                                                        tag: 'component',
                                                                        model: {
                                                                            value: e.ruleParam,
                                                                            callback: function (t) {
                                                                                e.ruleParam = t;
                                                                            },
                                                                            expression: 'ruleParam',
                                                                        },
                                                                    }),
                                                                    e._v(' '),
                                                                    s(
                                                                        'v-btn',
                                                                        {
                                                                            staticClass: 'ml-1',
                                                                            attrs: {
                                                                                color: 'primary',
                                                                                small: '',
                                                                                disabled: e.isButtonDisabled,
                                                                            },
                                                                            on: { click: e.addRule },
                                                                        },
                                                                        [e._v('添加')]
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
                    fe,
                    undefined,
                    false,
                    undefined,
                    !1,
                    void 0,
                    void 0,
                    void 0
                ),
                VExpansionPanels: a.VExpansionPanels,
            },
            props: { element: { type: Object, default: function () {} } },
            data: function () {
                return {
                    constants: F,
                    dataObject: {},
                    typeItems: [
                        { value: 'text', text: '文字输入模式（默认）' },
                        { value: 'password', text: '密码模式' },
                        { value: 'number', text: '数字模式' },
                        { value: 'color', text: '选择颜色模式' },
                        { value: 'datetime-local', text: '选择日期时间模式' },
                        { value: 'time', text: '选择时间模式' },
                        { value: 'date', text: '选择日期模式' },
                        { value: 'week', text: '选择周模式' },
                        { value: 'month', text: '选择月模式' },
                    ],
                };
            },
            computed: {
                properties: function () {
                    return this.dataObject[this.constants.annotations.xprops];
                },
                rules: {
                    get: function () {
                        return this.dataObject[this.constants.annotations.xrules];
                    },
                    set: function (e) {
                        this.dataObject[this.constants.annotations.xrules] = e;
                    },
                },
                isNumberType: function () {
                    return 'number' === this.properties.type;
                },
            },
            watch: {
                element: {
                    handler: function (e, t) {
                        this.dataObject = e;
                    },
                    immediate: !0,
                },
            },
        },
        xe = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dense : 紧凑显示' },
                                        model: {
                                            value: e.properties.dense,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dense', t);
                                            },
                                            expression: 'properties.dense',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Filled : 使用填充样式',
                                            disabled: e.properties.outlined || e.properties.solo,
                                        },
                                        model: {
                                            value: e.properties.filled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'filled', t);
                                            },
                                            expression: 'properties.filled',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Flat : 移除阴影',
                                            tooltip: '当使用solo或者solo-inverted属性时，移除添加到元素的标高（阴影）',
                                        },
                                        model: {
                                            value: e.properties.flat,
                                            callback: function (t) {
                                                e.$set(e.properties, 'flat', t);
                                            },
                                            expression: 'properties.flat',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Full Width : 全宽度', tooltip: '指定输入类型为全宽度' },
                                        model: {
                                            value: e.properties[e.constants.tags.FullWidth],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.FullWidth, t);
                                            },
                                            expression: 'properties[constants.tags.FullWidth]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Hide Details : 隐藏细节区域' },
                                        model: {
                                            value: e.properties[e.constants.tags.HideDetails],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideDetails, t);
                                            },
                                            expression: 'properties[constants.tags.HideDetails]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Outlined : 显示轮廓' },
                                        model: {
                                            value: e.properties.outlined,
                                            callback: function (t) {
                                                e.$set(e.properties, 'outlined', t);
                                            },
                                            expression: 'properties.outlined',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        class: e.constants.class.switch,
                                        attrs: {
                                            label: 'Rounded : 椭圆边框',
                                            disabled:
                                                !e.properties.filled && !e.properties.outlined && !e.properties.solo,
                                            dense: '',
                                            tooltip: '向输入添加边框半径, 需要配合设置Filled、Outlined、或Solo任意一项',
                                        },
                                        model: {
                                            value: e.properties.rounded,
                                            callback: function (t) {
                                                e.$set(e.properties, 'rounded', t);
                                            },
                                            expression: 'properties.rounded',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Shaped : 圆角边框',
                                            tooltip:
                                                '如果Outlined则为圆形，如果Filled则增加border-radius。必须与Outlined 或Filled 一起使用',
                                            disabled:
                                                !e.properties.outlined && !e.properties.filled && !e.properties.solo,
                                        },
                                        model: {
                                            value: e.properties.shaped,
                                            callback: function (t) {
                                                e.$set(e.properties, 'shaped', t);
                                            },
                                            expression: 'properties.shaped',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Single Line : 标题不移动',
                                            tooltip: '标签在 focus/dirty 上不移动',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SingleLine],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SingleLine, t);
                                            },
                                            expression: 'properties[constants.tags.SingleLine]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Solo : 凸起样式', disabled: e.properties.filled },
                                        model: {
                                            value: e.properties.solo,
                                            callback: function (t) {
                                                e.$set(e.properties, 'solo', t);
                                            },
                                            expression: 'properties.solo',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Solo Inverted : 单反',
                                            tooltip: '减少元素的不透明度，知道获得焦点',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SoloInverted],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SoloInverted, t);
                                            },
                                            expression: 'properties[constants.tags.SoloInverted]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: { label: 'Height : 设置高度', min: '1' },
                                        model: {
                                            value: e.properties.height,
                                            callback: function (t) {
                                                e.$set(e.properties, 'height', t);
                                            },
                                            expression: 'properties.height',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Auto Focus : 启用自动聚焦' },
                                        model: {
                                            value: e.properties.autofocus,
                                            callback: function (t) {
                                                e.$set(e.properties, 'autofocus', t);
                                            },
                                            expression: 'properties.autofocus',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Loading : 加载状态',
                                            tooltip:
                                                '显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。',
                                        },
                                        model: {
                                            value: e.properties.loading,
                                            callback: function (t) {
                                                e.$set(e.properties, 'loading', t);
                                            },
                                            expression: 'properties.loading',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Loader Height : 加载器高度',
                                            min: '1',
                                            disabled: !e.properties.loading,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.LoaderHeight],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.LoaderHeight, t);
                                            },
                                            expression: 'properties[constants.tags.LoaderHeight]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Reverse : 反转输入方向' },
                                        model: {
                                            value: e.properties.reverse,
                                            callback: function (t) {
                                                e.$set(e.properties, 'reverse', t);
                                            },
                                            expression: 'properties.reverse',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Validate On Blur : 延迟验证',
                                            tooltip: '延迟验证直到失去焦点的事件被触发',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ValidateOnBlur],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ValidateOnBlur, t);
                                            },
                                            expression: 'properties[constants.tags.ValidateOnBlur]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s('h-rule-expansion-panel', {
                                model: {
                                    value: e.rules,
                                    callback: function (t) {
                                        e.rules = t;
                                    },
                                    expression: 'rules',
                                },
                            }),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'icon', header: '图标' } },
                                [
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Icon',
                                            tooltip: '在组件上附加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Outer Icon',
                                            tooltip: '在组件的外部添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendOuterIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendOuterIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendOuterIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Icon',
                                            tooltip: '在组件前添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Inner Icon',
                                            tooltip: '在组件的输入中添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependInnerIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependInnerIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependInnerIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Clearable : 显示清除按钮' },
                                        model: {
                                            value: e.properties.clearable,
                                            callback: function (t) {
                                                e.$set(e.properties, 'clearable', t);
                                            },
                                            expression: 'properties.clearable',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Clear Icon',
                                            tooltip: '当使用 clearable 且有输入值时应用',
                                            disabled: !e.properties.clearable,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ClearIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ClearIcon, t);
                                            },
                                            expression: 'properties[constants.tags.ClearIcon]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Persistent Hint : 强制显示提示',
                                            tooltip: '强制提示总是可见的',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PersistentHint],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PersistentHint, t);
                                            },
                                            expression: 'properties[constants.tags.PersistentHint]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Hint : 提示文本' },
                                        model: {
                                            value: e.properties.hint,
                                            callback: function (t) {
                                                e.$set(e.properties, 'hint', t);
                                            },
                                            expression: 'properties.hint',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'PlaceHolder : 占位符文本' },
                                        model: {
                                            value: e.properties.placeHolder,
                                            callback: function (t) {
                                                e.$set(e.properties, 'placeHolder', t);
                                            },
                                            expression: 'properties.placeHolder',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Prefix : 前缀文本' },
                                        model: {
                                            value: e.properties.prefix,
                                            callback: function (t) {
                                                e.$set(e.properties, 'prefix', t);
                                            },
                                            expression: 'properties.prefix',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Suffix : 后缀文本' },
                                        model: {
                                            value: e.properties.suffix,
                                            callback: function (t) {
                                                e.$set(e.properties, 'suffix', t);
                                            },
                                            expression: 'properties.suffix',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-select', {
                                        attrs: {
                                            label: 'Type: 输入类型',
                                            tooltip: '设置不同的输入类型',
                                            items: e.typeItems,
                                        },
                                        model: {
                                            value: e.properties.type,
                                            callback: function (t) {
                                                e.$set(e.properties, 'type', t);
                                            },
                                            expression: 'properties.type',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Min : 数字类型最小值',
                                            min: '0',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.min,
                                            callback: function (t) {
                                                e.$set(e.properties, 'min', t);
                                            },
                                            expression: 'properties.min',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Max : 数字类型最大值',
                                            min: '1',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.max,
                                            callback: function (t) {
                                                e.$set(e.properties, 'max', t);
                                            },
                                            expression: 'properties.max',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Step : 数字类型步长',
                                            min: '1',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.step,
                                            callback: function (t) {
                                                e.$set(e.properties, 'step', t);
                                            },
                                            expression: 'properties.step',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: { label: 'Background Color : 背景颜色', tooltip: '输入框背景颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.BackgroundColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.BackgroundColor, t);
                                            },
                                            expression: 'properties[constants.tags.BackgroundColor]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
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
            ge,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        _e = {
            name: 'HTextAreaPanel',
            components: {
                HExpansionPanel: U,
                HPanelColor: oe,
                HPanelIcon: ie,
                HPanelNumber: pe,
                HPanelSelect: Z,
                HPanelSwitch: de,
                HPanelTextField: he,
                VExpansionPanels: a.VExpansionPanels,
            },
            props: { element: { type: Object, default: function () {} } },
            data: function () {
                return {
                    constants: F,
                    dataObject: {},
                    typeItems: [
                        { value: 'text', text: '文字模式(默认)' },
                        { value: 'password', text: '密码模式' },
                        { value: 'number', text: '数字模式' },
                        { value: 'color', text: '颜色模式' },
                        { value: 'datetime-local', text: '日期时间模式' },
                        { value: 'time', text: '时间模式' },
                        { value: 'date', text: '日期模式' },
                        { value: 'week', text: '周模式' },
                        { value: 'month', text: '月模式' },
                    ],
                };
            },
            computed: {
                properties: function () {
                    return this.dataObject[this.constants.annotations.xprops];
                },
                isNumberType: function () {
                    return 'number' === this.properties.type;
                },
            },
            watch: {
                element: {
                    handler: function (e, t) {
                        this.dataObject = e;
                    },
                    immediate: !0,
                },
            },
        },
        ke = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dense : 紧凑显示' },
                                        model: {
                                            value: e.properties.dense,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dense', t);
                                            },
                                            expression: 'properties.dense',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Filled : 使用填充样式',
                                            disabled: e.properties.outlined || e.properties.solo,
                                        },
                                        model: {
                                            value: e.properties.filled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'filled', t);
                                            },
                                            expression: 'properties.filled',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Flat : 移除阴影',
                                            tooltip: '当使用solo或者solo-inverted属性时，移除添加到元素的标高（阴影）',
                                        },
                                        model: {
                                            value: e.properties.flat,
                                            callback: function (t) {
                                                e.$set(e.properties, 'flat', t);
                                            },
                                            expression: 'properties.flat',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Full Width : 全宽度', tooltip: '指定输入类型为全宽度' },
                                        model: {
                                            value: e.properties[e.constants.tags.FullWidth],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.FullWidth, t);
                                            },
                                            expression: 'properties[constants.tags.FullWidth]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Hide Details : 隐藏细节区域' },
                                        model: {
                                            value: e.properties[e.constants.tags.HideDetails],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideDetails, t);
                                            },
                                            expression: 'properties[constants.tags.HideDetails]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Outlined : 显示轮廓' },
                                        model: {
                                            value: e.properties.outlined,
                                            callback: function (t) {
                                                e.$set(e.properties, 'outlined', t);
                                            },
                                            expression: 'properties.outlined',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        class: e.constants.class.switch,
                                        attrs: {
                                            label: 'Rounded : 椭圆边框',
                                            disabled:
                                                !e.properties.filled && !e.properties.outlined && !e.properties.solo,
                                            dense: '',
                                            tooltip: '向输入添加边框半径, 需要配合设置Filled、Outlined、或Solo任意一项',
                                        },
                                        model: {
                                            value: e.properties.rounded,
                                            callback: function (t) {
                                                e.$set(e.properties, 'rounded', t);
                                            },
                                            expression: 'properties.rounded',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Shaped : 圆角边框',
                                            tooltip:
                                                '如果Outlined则为圆形，如果Filled则增加border-radius。必须与Outlined 或Filled 一起使用',
                                            disabled:
                                                !e.properties.outlined && !e.properties.filled && !e.properties.solo,
                                        },
                                        model: {
                                            value: e.properties.shaped,
                                            callback: function (t) {
                                                e.$set(e.properties, 'shaped', t);
                                            },
                                            expression: 'properties.shaped',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Single Line : 标题不移动',
                                            tooltip: '标签在 focus/dirty 上不移动',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SingleLine],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SingleLine, t);
                                            },
                                            expression: 'properties[constants.tags.SingleLine]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Solo : 凸起样式', disabled: e.properties.filled },
                                        model: {
                                            value: e.properties.solo,
                                            callback: function (t) {
                                                e.$set(e.properties, 'solo', t);
                                            },
                                            expression: 'properties.solo',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Solo Inverted : 单反',
                                            tooltip: '减少元素的不透明度，知道获得焦点',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SoloInverted],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SoloInverted, t);
                                            },
                                            expression: 'properties[constants.tags.SoloInverted]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: { label: 'Height : 设置高度', min: '1' },
                                        model: {
                                            value: e.properties.height,
                                            callback: function (t) {
                                                e.$set(e.properties, 'height', t);
                                            },
                                            expression: 'properties.height',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Auto Grow : 自动增长', tooltip: '根据文本数量自动增长文本' },
                                        model: {
                                            value: e.properties[e.constants.tags.AutoGrow],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AutoGrow, t);
                                            },
                                            expression: 'properties[constants.tags.AutoGrow]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Row Height : 每行的高度值',
                                            min: '1',
                                            disabled: !e.properties[e.constants.tags.AutoGrow],
                                            tooltip: '每行的高度值。 需要使用 auto-grow 属性',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.RowHeight],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.RowHeight, t);
                                            },
                                            expression: 'properties[constants.tags.RowHeight]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Rows : 默认行数',
                                            min: '1',
                                            tooltip: 'Textarea默认显示的行数',
                                        },
                                        model: {
                                            value: e.properties.rows,
                                            callback: function (t) {
                                                e.$set(e.properties, 'rows', t);
                                            },
                                            expression: 'properties.rows',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Auto Focus : 启用自动聚焦' },
                                        model: {
                                            value: e.properties.autofocus,
                                            callback: function (t) {
                                                e.$set(e.properties, 'autofocus', t);
                                            },
                                            expression: 'properties.autofocus',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Loading : 加载状态',
                                            tooltip:
                                                '显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。',
                                        },
                                        model: {
                                            value: e.properties.loading,
                                            callback: function (t) {
                                                e.$set(e.properties, 'loading', t);
                                            },
                                            expression: 'properties.loading',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Loader Height : 加载器高度',
                                            min: '1',
                                            disabled: !e.properties.loading,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.LoaderHeight],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.LoaderHeight, t);
                                            },
                                            expression: 'properties[constants.tags.LoaderHeight]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'No Resize : 移除调整大小的句柄' },
                                        model: {
                                            value: e.properties[e.constants.tags.NoResize],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.NoResize, t);
                                            },
                                            expression: 'properties[constants.tags.NoResize]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Reverse : 反转输入方向' },
                                        model: {
                                            value: e.properties.reverse,
                                            callback: function (t) {
                                                e.$set(e.properties, 'reverse', t);
                                            },
                                            expression: 'properties.reverse',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Validate On Blur : 延迟验证',
                                            tooltip: '延迟验证直到失去焦点的事件被触发',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ValidateOnBlur],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ValidateOnBlur, t);
                                            },
                                            expression: 'properties[constants.tags.ValidateOnBlur]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'icon', header: '图标' } },
                                [
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Icon',
                                            tooltip: '在组件上附加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Outer Icon',
                                            tooltip: '在组件的外部添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendOuterIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendOuterIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendOuterIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Icon',
                                            tooltip: '在组件前添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Inner Icon',
                                            tooltip: '在组件的输入中添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependInnerIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependInnerIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependInnerIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Clearable : 显示清除按钮' },
                                        model: {
                                            value: e.properties.clearable,
                                            callback: function (t) {
                                                e.$set(e.properties, 'clearable', t);
                                            },
                                            expression: 'properties.clearable',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Clear Icon',
                                            tooltip: '当使用 clearable 且有输入值时应用',
                                            disabled: !e.properties.clearable,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ClearIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ClearIcon, t);
                                            },
                                            expression: 'properties[constants.tags.ClearIcon]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Persistent Hint : 强制显示提示',
                                            tooltip: '强制提示总是可见的',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PersistentHint],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PersistentHint, t);
                                            },
                                            expression: 'properties[constants.tags.PersistentHint]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Hint : 提示文本' },
                                        model: {
                                            value: e.properties.hint,
                                            callback: function (t) {
                                                e.$set(e.properties, 'hint', t);
                                            },
                                            expression: 'properties.hint',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'PlaceHolder : 占位符文本' },
                                        model: {
                                            value: e.properties.placeHolder,
                                            callback: function (t) {
                                                e.$set(e.properties, 'placeHolder', t);
                                            },
                                            expression: 'properties.placeHolder',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Prefix : 前缀文本' },
                                        model: {
                                            value: e.properties.prefix,
                                            callback: function (t) {
                                                e.$set(e.properties, 'prefix', t);
                                            },
                                            expression: 'properties.prefix',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Suffix : 后缀文本' },
                                        model: {
                                            value: e.properties.suffix,
                                            callback: function (t) {
                                                e.$set(e.properties, 'suffix', t);
                                            },
                                            expression: 'properties.suffix',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-select', {
                                        attrs: {
                                            label: 'Type: 输入类型',
                                            tooltip: '设置不同的输入类型',
                                            items: e.typeItems,
                                        },
                                        model: {
                                            value: e.properties.type,
                                            callback: function (t) {
                                                e.$set(e.properties, 'type', t);
                                            },
                                            expression: 'properties.type',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Min : 数字类型最小值',
                                            min: '0',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.min,
                                            callback: function (t) {
                                                e.$set(e.properties, 'min', t);
                                            },
                                            expression: 'properties.min',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Max : 数字类型最大值',
                                            min: '1',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.max,
                                            callback: function (t) {
                                                e.$set(e.properties, 'max', t);
                                            },
                                            expression: 'properties.max',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Step : 数字类型步长',
                                            min: '1',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.step,
                                            callback: function (t) {
                                                e.$set(e.properties, 'step', t);
                                            },
                                            expression: 'properties.step',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: { label: 'Background Color : 背景颜色', tooltip: '输入框背景颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.BackgroundColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.BackgroundColor, t);
                                            },
                                            expression: 'properties[constants.tags.BackgroundColor]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
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
            _e,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        Ie = {
            name: 'HSliderPanel',
            components: {
                HExpansionPanel: U,
                HPanelArray: se,
                HPanelColor: oe,
                HPanelIcon: ie,
                HPanelNumber: pe,
                HPanelSwitch: de,
                HPanelSwitchTextField: me,
                HPanelTextField: he,
                VExpansionPanels: a.VExpansionPanels,
            },
            props: { element: { type: Object, default: function () {} } },
            data: function () {
                return { constants: F, dataObject: {} };
            },
            computed: {
                properties: function () {
                    return this.dataObject[this.constants.annotations.xprops];
                },
            },
            watch: {
                element: {
                    handler: function (e, t) {
                        this.dataObject = e;
                    },
                    immediate: !0,
                },
            },
        },
        we = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dense : 紧凑显示' },
                                        model: {
                                            value: e.properties.dense,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dense', t);
                                            },
                                            expression: 'properties.dense',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Hide Details : 隐藏细节区域' },
                                        model: {
                                            value: e.properties[e.constants.tags.HideDetails],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideDetails, t);
                                            },
                                            expression: 'properties[constants.tags.HideDetails]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Inverse Label : 反转标签位置',
                                            tooltip: '使用 rtl 反转标签位置',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.InverseLabel],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.InverseLabel, t);
                                            },
                                            expression: 'properties[constants.tags.InverseLabel]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Vertical : 垂直', tooltip: '将滑块方向切换为垂直方向' },
                                        model: {
                                            value: e.properties.vertical,
                                            callback: function (t) {
                                                e.$set(e.properties, 'vertical', t);
                                            },
                                            expression: 'properties.vertical',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: { label: 'Height : 设置高度', min: '1' },
                                        model: {
                                            value: e.properties.height,
                                            callback: function (t) {
                                                e.$set(e.properties, 'height', t);
                                            },
                                            expression: 'properties.height',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'thumb', header: '缩略图标签' } },
                                [
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Thumb Color : 缩略图颜色',
                                            tooltip: '设置缩略图和缩略图标签颜色',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ThumbColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ThumbColor, t);
                                            },
                                            expression: 'properties[constants.tags.ThumbColor]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch-text-field', {
                                        attrs: {
                                            label: 'Thumb Label : 缩略图标签',
                                            tooltip:
                                                "显示缩略图标签。如果 true，使用滑块时将显示缩略图标签。如果设置为 'always' ，它总是显示缩略图标签",
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ThumbLabel],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ThumbLabel, t);
                                            },
                                            expression: 'properties[constants.tags.ThumbLabel]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: { label: 'Thumb Size : 缩略图大小', min: '1', max: '100', step: '1' },
                                        model: {
                                            value: e.properties[e.constants.tags.ThumbSize],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ThumbSize, t);
                                            },
                                            expression: 'properties[constants.tags.ThumbSize]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'tick', header: '刻度线' } },
                                [
                                    s('h-panel-array', {
                                        attrs: { label: 'Tick Labels : 刻度线标签', tooltip: '按回车添加多个标签' },
                                        model: {
                                            value: e.properties[e.constants.tags.TickLabels],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TickLabels, t);
                                            },
                                            expression: 'properties[constants.tags.TickLabels]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch-text-field', {
                                        attrs: {
                                            label: 'Ticks : 刻度线',
                                            tooltip:
                                                "显示刻度线。如果 true，使用滑块时将显示刻度线。如果设置为 'always' ，它总是显示刻度线。",
                                        },
                                        model: {
                                            value: e.properties.ticks,
                                            callback: function (t) {
                                                e.$set(e.properties, 'ticks', t);
                                            },
                                            expression: 'properties.ticks',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: { label: 'Tick Size : 刻度线大小', min: '1', max: '100', step: '1' },
                                        model: {
                                            value: e.properties[e.constants.tags.TickSize],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TickSize, t);
                                            },
                                            expression: 'properties[constants.tags.TickSize]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Loading : 加载状态',
                                            tooltip:
                                                '显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。',
                                        },
                                        model: {
                                            value: e.properties.loading,
                                            callback: function (t) {
                                                e.$set(e.properties, 'loading', t);
                                            },
                                            expression: 'properties.loading',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Loader Height : 加载器高度',
                                            min: '1',
                                            disabled: !e.properties.loading,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.LoaderHeight],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.LoaderHeight, t);
                                            },
                                            expression: 'properties[constants.tags.LoaderHeight]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Validate On Blur : 延迟验证',
                                            tooltip: '延迟验证直到失去焦点的事件被触发',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ValidateOnBlur],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ValidateOnBlur, t);
                                            },
                                            expression: 'properties[constants.tags.ValidateOnBlur]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Min : 数字类型最小值',
                                            min: '0',
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.min,
                                            callback: function (t) {
                                                e.$set(e.properties, 'min', t);
                                            },
                                            expression: 'properties.min',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Max : 数字类型最大值',
                                            min: '1',
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.max,
                                            callback: function (t) {
                                                e.$set(e.properties, 'max', t);
                                            },
                                            expression: 'properties.max',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Step : 数字类型步长',
                                            min: '1',
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.step,
                                            callback: function (t) {
                                                e.$set(e.properties, 'step', t);
                                            },
                                            expression: 'properties.step',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'icon', header: '图标' } },
                                [
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Icon',
                                            tooltip: '在组件上附加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Icon',
                                            tooltip: '在组件前添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependIcon]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Persistent Hint : 强制显示提示',
                                            tooltip: '强制提示总是可见的',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PersistentHint],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PersistentHint, t);
                                            },
                                            expression: 'properties[constants.tags.PersistentHint]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Hint : 提示文本' },
                                        model: {
                                            value: e.properties.hint,
                                            callback: function (t) {
                                                e.$set(e.properties, 'hint', t);
                                            },
                                            expression: 'properties.hint',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: { label: 'Background Color : 背景颜色', tooltip: '输入框背景颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.BackgroundColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.BackgroundColor, t);
                                            },
                                            expression: 'properties[constants.tags.BackgroundColor]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-color', {
                                        attrs: { label: 'Track Color : 轨道颜色', tooltip: '设置滑块轨道颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.TrackColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TrackColor, t);
                                            },
                                            expression: 'properties[constants.tags.TrackColor]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Track Fill Color : 轨道填充颜色',
                                            tooltip: '设置滑块轨道填充颜色',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.TrackFillColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TrackFillColor, t);
                                            },
                                            expression: 'properties[constants.tags.TrackFillColor]',
                                        },
                                    }),
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
            Ie,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        ye = {
            name: 'HRangeSliderPanel',
            components: {
                HExpansionPanel: U,
                HPanelArray: se,
                HPanelColor: oe,
                HPanelIcon: ie,
                HPanelNumber: pe,
                HPanelSwitch: de,
                HPanelSwitchTextField: me,
                HPanelTextField: he,
                VExpansionPanels: a.VExpansionPanels,
            },
            props: { element: { type: Object, default: function () {} } },
            data: function () {
                return { constants: F, dataObject: {} };
            },
            computed: {
                properties: function () {
                    return this.dataObject[this.constants.annotations.xprops];
                },
            },
            watch: {
                element: {
                    handler: function (e, t) {
                        this.dataObject = e;
                    },
                    immediate: !0,
                },
            },
        },
        Ce = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dense : 紧凑显示' },
                                        model: {
                                            value: e.properties.dense,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dense', t);
                                            },
                                            expression: 'properties.dense',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Hide Details : 隐藏细节区域' },
                                        model: {
                                            value: e.properties[e.constants.tags.HideDetails],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideDetails, t);
                                            },
                                            expression: 'properties[constants.tags.HideDetails]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Inverse Label : 反转标签位置',
                                            tooltip: '使用 rtl 反转标签位置',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.InverseLabel],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.InverseLabel, t);
                                            },
                                            expression: 'properties[constants.tags.InverseLabel]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Vertical : 垂直', tooltip: '将滑块方向切换为垂直方向' },
                                        model: {
                                            value: e.properties.vertical,
                                            callback: function (t) {
                                                e.$set(e.properties, 'vertical', t);
                                            },
                                            expression: 'properties.vertical',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: { label: 'Height : 设置高度', min: '1' },
                                        model: {
                                            value: e.properties.height,
                                            callback: function (t) {
                                                e.$set(e.properties, 'height', t);
                                            },
                                            expression: 'properties.height',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'thumb', header: '缩略图标签' } },
                                [
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Thumb Color : 缩略图颜色',
                                            tooltip: '设置缩略图和缩略图标签颜色',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ThumbColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ThumbColor, t);
                                            },
                                            expression: 'properties[constants.tags.ThumbColor]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch-text-field', {
                                        attrs: {
                                            label: 'Thumb Label : 缩略图标签',
                                            tooltip:
                                                "显示缩略图标签。如果 true，使用滑块时将显示缩略图标签。如果设置为 'always' ，它总是显示缩略图标签",
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ThumbLabel],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ThumbLabel, t);
                                            },
                                            expression: 'properties[constants.tags.ThumbLabel]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: { label: 'Thumb Size : 缩略图大小', min: '1', max: '100', step: '1' },
                                        model: {
                                            value: e.properties[e.constants.tags.ThumbSize],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ThumbSize, t);
                                            },
                                            expression: 'properties[constants.tags.ThumbSize]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'tick', header: '刻度线' } },
                                [
                                    s('h-panel-array', {
                                        attrs: { label: 'Tick Labels : 刻度线标签', tooltip: '按回车添加多个标签' },
                                        model: {
                                            value: e.properties[e.constants.tags.TickLabels],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TickLabels, t);
                                            },
                                            expression: 'properties[constants.tags.TickLabels]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch-text-field', {
                                        attrs: {
                                            label: 'Ticks : 刻度线',
                                            tooltip:
                                                "显示刻度线。如果 true，使用滑块时将显示刻度线。如果设置为 'always' ，它总是显示刻度线。",
                                        },
                                        model: {
                                            value: e.properties.ticks,
                                            callback: function (t) {
                                                e.$set(e.properties, 'ticks', t);
                                            },
                                            expression: 'properties.ticks',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: { label: 'Tick Size : 刻度线大小', min: '1', max: '100', step: '1' },
                                        model: {
                                            value: e.properties[e.constants.tags.TickSize],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TickSize, t);
                                            },
                                            expression: 'properties[constants.tags.TickSize]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Loading : 加载状态',
                                            tooltip:
                                                '显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。',
                                        },
                                        model: {
                                            value: e.properties.loading,
                                            callback: function (t) {
                                                e.$set(e.properties, 'loading', t);
                                            },
                                            expression: 'properties.loading',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Loader Height : 加载器高度',
                                            min: '1',
                                            disabled: !e.properties.loading,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.LoaderHeight],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.LoaderHeight, t);
                                            },
                                            expression: 'properties[constants.tags.LoaderHeight]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Validate On Blur : 延迟验证',
                                            tooltip: '延迟验证直到失去焦点的事件被触发',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ValidateOnBlur],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ValidateOnBlur, t);
                                            },
                                            expression: 'properties[constants.tags.ValidateOnBlur]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Min : 数字类型最小值',
                                            min: '0',
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.min,
                                            callback: function (t) {
                                                e.$set(e.properties, 'min', t);
                                            },
                                            expression: 'properties.min',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Max : 数字类型最大值',
                                            min: '1',
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.max,
                                            callback: function (t) {
                                                e.$set(e.properties, 'max', t);
                                            },
                                            expression: 'properties.max',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Step : 数字类型步长',
                                            min: '1',
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.step,
                                            callback: function (t) {
                                                e.$set(e.properties, 'step', t);
                                            },
                                            expression: 'properties.step',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'icon', header: '图标' } },
                                [
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Icon',
                                            tooltip: '在组件上附加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Icon',
                                            tooltip: '在组件前添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependIcon]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Persistent Hint : 强制显示提示',
                                            tooltip: '强制提示总是可见的',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PersistentHint],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PersistentHint, t);
                                            },
                                            expression: 'properties[constants.tags.PersistentHint]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Hint : 提示文本' },
                                        model: {
                                            value: e.properties.hint,
                                            callback: function (t) {
                                                e.$set(e.properties, 'hint', t);
                                            },
                                            expression: 'properties.hint',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: { label: 'Background Color : 背景颜色', tooltip: '输入框背景颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.BackgroundColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.BackgroundColor, t);
                                            },
                                            expression: 'properties[constants.tags.BackgroundColor]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-color', {
                                        attrs: { label: 'Track Color : 轨道颜色', tooltip: '设置滑块轨道颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.TrackColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TrackColor, t);
                                            },
                                            expression: 'properties[constants.tags.TrackColor]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Track Fill Color : 轨道填充颜色',
                                            tooltip: '设置滑块轨道填充颜色',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.TrackFillColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TrackFillColor, t);
                                            },
                                            expression: 'properties[constants.tags.TrackFillColor]',
                                        },
                                    }),
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
            ye,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        $e = {
            name: 'HCheckboxPanel',
            components: {
                HExpansionPanel: U,
                HPanelColor: oe,
                HPanelIcon: ie,
                HPanelSwitch: de,
                HPanelTextField: he,
                VExpansionPanels: a.VExpansionPanels,
            },
            props: { element: { type: Object, default: function () {} } },
            data: function () {
                return { constants: F, dataObject: {} };
            },
            computed: {
                properties: function () {
                    return this.dataObject[this.constants.annotations.xprops];
                },
            },
            watch: {
                element: {
                    handler: function (e, t) {
                        this.dataObject = e;
                    },
                    immediate: !0,
                },
            },
        },
        Ve = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dense : 紧凑显示' },
                                        model: {
                                            value: e.properties.dense,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dense', t);
                                            },
                                            expression: 'properties.dense',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Hide Details : 隐藏细节区域' },
                                        model: {
                                            value: e.properties[e.constants.tags.HideDetails],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideDetails, t);
                                            },
                                            expression: 'properties[constants.tags.HideDetails]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Multiple : 多选', tooltip: '将预期模型更改为数组' },
                                        model: {
                                            value: e.properties.multiple,
                                            callback: function (t) {
                                                e.$set(e.properties, 'multiple', t);
                                            },
                                            expression: 'properties.multiple',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Validate On Blur : 延迟验证',
                                            tooltip: '延迟验证直到失去焦点的事件被触发',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ValidateOnBlur],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ValidateOnBlur, t);
                                            },
                                            expression: 'properties[constants.tags.ValidateOnBlur]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: {
                                            label: 'False Value : 设置假值',
                                            tooltip: '设置Checkbox未被勾选时的值',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.FalseValue],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.FalseValue, t);
                                            },
                                            expression: 'properties[constants.tags.FalseValue]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'True Value : 设置真值', tooltip: '设置Checkbox被勾选时的值' },
                                        model: {
                                            value: e.properties[e.constants.tags.TrueValue],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TrueValue, t);
                                            },
                                            expression: 'properties[constants.tags.TrueValue]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'icon', header: '图标' } },
                                [
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Icon',
                                            tooltip: '在组件上附加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Icon',
                                            tooltip: '在组件前添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: { label: 'Off Icon', tooltip: '未被勾选时使用的图标' },
                                        model: {
                                            value: e.properties[e.constants.tags.OffIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.OffIcon, t);
                                            },
                                            expression: 'properties[constants.tags.OffIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: { label: 'On Icon', tooltip: '被勾选时使用的图标' },
                                        model: {
                                            value: e.properties[e.constants.tags.OnIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.OnIcon, t);
                                            },
                                            expression: 'properties[constants.tags.OnIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: {
                                            label: 'Indeterminate : 不确定状态',
                                            tooltip: '为复选框设置不确定状态',
                                        },
                                        model: {
                                            value: e.properties.indeterminate,
                                            callback: function (t) {
                                                e.$set(e.properties, 'indeterminate', t);
                                            },
                                            expression: 'properties.indeterminate',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Indeterminate Icon',
                                            tooltip: '处于不确定状态时使用的图标',
                                            disabled: !e.properties.indeterminate,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.IndeterminateIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.IndeterminateIcon, t);
                                            },
                                            expression: 'properties[constants.tags.IndeterminateIcon]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Persistent Hint : 强制显示提示',
                                            tooltip: '强制提示总是可见的',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PersistentHint],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PersistentHint, t);
                                            },
                                            expression: 'properties[constants.tags.PersistentHint]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Hint : 提示文本' },
                                        model: {
                                            value: e.properties.hint,
                                            callback: function (t) {
                                                e.$set(e.properties, 'hint', t);
                                            },
                                            expression: 'properties.hint',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: { label: 'Background Color : 背景颜色', tooltip: '输入框背景颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.BackgroundColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.BackgroundColor, t);
                                            },
                                            expression: 'properties[constants.tags.BackgroundColor]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
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
            $e,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        Se = {
            name: 'HSwitchPanel',
            components: {
                HExpansionPanel: U,
                HPanelColor: oe,
                HPanelIcon: ie,
                HPanelSwitch: de,
                HPanelTextField: he,
                VExpansionPanels: a.VExpansionPanels,
            },
            props: { element: { type: Object, default: function () {} } },
            data: function () {
                return { constants: F, dataObject: {} };
            },
            computed: {
                properties: function () {
                    return this.dataObject[this.constants.annotations.xprops];
                },
            },
            watch: {
                element: {
                    handler: function (e, t) {
                        this.dataObject = e;
                    },
                    immediate: !0,
                },
            },
        },
        He = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dense : 紧凑显示' },
                                        model: {
                                            value: e.properties.dense,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dense', t);
                                            },
                                            expression: 'properties.dense',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Flat : 移除阴影', tooltip: '移除组件的阴影。' },
                                        model: {
                                            value: e.properties.flat,
                                            callback: function (t) {
                                                e.$set(e.properties, 'flat', t);
                                            },
                                            expression: 'properties.flat',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Hide Details : 隐藏细节区域' },
                                        model: {
                                            value: e.properties[e.constants.tags.HideDetails],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideDetails, t);
                                            },
                                            expression: 'properties[constants.tags.HideDetails]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Inset : 扩展', tooltip: '扩展 v-switch 开关以包含缩略图' },
                                        model: {
                                            value: e.properties.inset,
                                            callback: function (t) {
                                                e.$set(e.properties, 'inset', t);
                                            },
                                            expression: 'properties.inset',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Loading : 加载状态',
                                            tooltip:
                                                '显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。',
                                        },
                                        model: {
                                            value: e.properties.loading,
                                            callback: function (t) {
                                                e.$set(e.properties, 'loading', t);
                                            },
                                            expression: 'properties.loading',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Multiple : 多选', tooltip: '将预期模型更改为数组' },
                                        model: {
                                            value: e.properties.multiple,
                                            callback: function (t) {
                                                e.$set(e.properties, 'multiple', t);
                                            },
                                            expression: 'properties.multiple',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Validate On Blur : 延迟验证',
                                            tooltip: '延迟验证直到失去焦点的事件被触发',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ValidateOnBlur],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ValidateOnBlur, t);
                                            },
                                            expression: 'properties[constants.tags.ValidateOnBlur]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'False Value : 设置假值', tooltip: '设置Switch关闭时的值' },
                                        model: {
                                            value: e.properties[e.constants.tags.FalseValue],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.FalseValue, t);
                                            },
                                            expression: 'properties[constants.tags.FalseValue]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'True Value : 设置真值', tooltip: '设置Switch开启时的值' },
                                        model: {
                                            value: e.properties[e.constants.tags.TrueValue],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TrueValue, t);
                                            },
                                            expression: 'properties[constants.tags.TrueValue]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'icon', header: '图标' } },
                                [
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Icon',
                                            tooltip: '在组件上附加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Icon',
                                            tooltip: '在组件前添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: { label: 'Off Icon', tooltip: '未被勾选时使用的图标' },
                                        model: {
                                            value: e.properties[e.constants.tags.OffIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.OffIcon, t);
                                            },
                                            expression: 'properties[constants.tags.OffIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: { label: 'On Icon', tooltip: '被勾选时使用的图标' },
                                        model: {
                                            value: e.properties[e.constants.tags.OnIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.OnIcon, t);
                                            },
                                            expression: 'properties[constants.tags.OnIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: {
                                            label: 'Indeterminate : 不确定状态',
                                            tooltip: '为复选框设置不确定状态',
                                        },
                                        model: {
                                            value: e.properties.indeterminate,
                                            callback: function (t) {
                                                e.$set(e.properties, 'indeterminate', t);
                                            },
                                            expression: 'properties.indeterminate',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Indeterminate Icon',
                                            tooltip: '处于不确定状态时使用的图标',
                                            disabled: !e.properties.indeterminate,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.IndeterminateIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.IndeterminateIcon, t);
                                            },
                                            expression: 'properties[constants.tags.IndeterminateIcon]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Persistent Hint : 强制显示提示',
                                            tooltip: '强制提示总是可见的',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PersistentHint],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PersistentHint, t);
                                            },
                                            expression: 'properties[constants.tags.PersistentHint]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Hint : 提示文本' },
                                        model: {
                                            value: e.properties.hint,
                                            callback: function (t) {
                                                e.$set(e.properties, 'hint', t);
                                            },
                                            expression: 'properties.hint',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: { label: 'Background Color : 背景颜色', tooltip: '输入框背景颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.BackgroundColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.BackgroundColor, t);
                                            },
                                            expression: 'properties[constants.tags.BackgroundColor]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
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
            Se,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        Pe = {
            name: 'HDatePickerPanel',
            components: {
                HExpansionPanel: U,
                HPanelColor: oe,
                HPanelIcon: ie,
                HPanelNumber: pe,
                HPanelSelect: Z,
                HPanelSwitch: de,
                HPanelTextField: he,
                VExpansionPanels: a.VExpansionPanels,
            },
            props: { element: { type: Object, default: function () {} } },
            data: function () {
                return {
                    constants: F,
                    dataObject: {},
                    typeItems: [
                        { value: 'date', text: '日期模式（默认）' },
                        { value: 'month', text: '月模式' },
                    ],
                };
            },
            computed: {
                properties: function () {
                    return this.dataObject[this.constants.annotations.xprops];
                },
            },
            watch: {
                element: {
                    handler: function (e, t) {
                        this.dataObject = e;
                    },
                    immediate: !0,
                },
            },
        },
        Te = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Elevation : 阴影',
                                            min: '0',
                                            max: '24',
                                            tooltip: '组件的海拔可接受 0 到 24 之间的值。',
                                            disabled: e.properties.flat,
                                        },
                                        model: {
                                            value: e.properties.elevation,
                                            callback: function (t) {
                                                e.$set(e.properties, 'elevation', t);
                                            },
                                            expression: 'properties.elevation',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Flat : 移除阴影', tooltip: '移除添加到元素的标高（阴影）' },
                                        model: {
                                            value: e.properties.flat,
                                            callback: function (t) {
                                                e.$set(e.properties, 'flat', t);
                                            },
                                            expression: 'properties.flat',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Full Width : 全宽度', tooltip: '指定输入类型为全宽度' },
                                        model: {
                                            value: e.properties[e.constants.tags.FullWidth],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.FullWidth, t);
                                            },
                                            expression: 'properties[constants.tags.FullWidth]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Landscape : 水平方向', tooltip: '水平方向选择器' },
                                        model: {
                                            value: e.properties.landscape,
                                            callback: function (t) {
                                                e.$set(e.properties, 'landscape', t);
                                            },
                                            expression: 'properties.landscape',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'No Title', tooltip: '隐藏选择器标题' },
                                        model: {
                                            value: e.properties[e.constants.tags.NoTitle],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.NoTitle, t);
                                            },
                                            expression: 'properties[constants.tags.NoTitle]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Width : 选择器宽度',
                                            min: '1',
                                            max: '1024',
                                            step: '2',
                                            tooltip: '选择器宽度',
                                        },
                                        model: {
                                            value: e.properties.width,
                                            callback: function (t) {
                                                e.$set(e.properties, 'width', t);
                                            },
                                            expression: 'properties.width',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Multiple : 多选', tooltip: '将预期模型更改为数组' },
                                        model: {
                                            value: e.properties.multiple,
                                            callback: function (t) {
                                                e.$set(e.properties, 'multiple', t);
                                            },
                                            expression: 'properties.multiple',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: {
                                            label: 'Selected Items Text : 所选日期文本',
                                            tooltip:
                                                '使用 multiple 属性时用于翻译所选日期数的文本。 也可以在 Internationalization 中进行全局定制',
                                            disabled: !e.properties.multiple,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SelectedItemsText],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SelectedItemsText, t);
                                            },
                                            expression: 'properties[constants.tags.SelectedItemsText]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Range', tooltip: '允许选择日期范围' },
                                        model: {
                                            value: e.properties.range,
                                            callback: function (t) {
                                                e.$set(e.properties, 'range', t);
                                            },
                                            expression: 'properties.range',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Reactive', tooltip: '自动更改 月份/年份 时更新选择器模型' },
                                        model: {
                                            value: e.properties.reactive,
                                            callback: function (t) {
                                                e.$set(e.properties, 'reactive', t);
                                            },
                                            expression: 'properties.reactive',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Scrollable : 滚动',
                                            tooltip: '允许通过鼠标滚动更改显示的月份',
                                        },
                                        model: {
                                            value: e.properties.scrollable,
                                            callback: function (t) {
                                                e.$set(e.properties, 'scrollable', t);
                                            },
                                            expression: 'properties.scrollable',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'icon', header: '图标' } },
                                [
                                    s('h-panel-icon', {
                                        attrs: { label: 'Prev Icon', tooltip: '设置上一个 月/年 按钮的图标' },
                                        model: {
                                            value: e.properties[e.constants.tags.PrevIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrevIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrevIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: { label: 'Next Icon', tooltip: '设置下一个 月/年 按钮的图标' },
                                        model: {
                                            value: e.properties[e.constants.tags.NextIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.NextIcon, t);
                                            },
                                            expression: 'properties[constants.tags.NextIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: { label: 'Year Icon', tooltip: '设置年份选择按钮中的图标' },
                                        model: {
                                            value: e.properties[e.constants.tags.YearIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.YearIcon, t);
                                            },
                                            expression: 'properties[constants.tags.YearIcon]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'First Day Of Week : 周的起始天',
                                            min: '0',
                                            max: '6',
                                            tooltip: '设置一周的第一天，从周日的 0 开始。',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.FirstDayOfWeek],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.FirstDayOfWeek, t);
                                            },
                                            expression: 'properties[constants.tags.FirstDayOfWeek]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Locale First Day Of Year',
                                            min: '0',
                                            max: '6',
                                            tooltip:
                                                '设置决定一年中第一周的日期，从 0 开始，星期日。对于 ISO 8601，应该是 4。',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.LocaleFirstDayOfYear],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.LocaleFirstDayOfYear, t);
                                            },
                                            expression: 'properties[constants.tags.LocaleFirstDayOfYear]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Max', tooltip: '允许的最大 日期/月份（ISO 8601格式）' },
                                        model: {
                                            value: e.properties.max,
                                            callback: function (t) {
                                                e.$set(e.properties, 'max', t);
                                            },
                                            expression: 'properties.max',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Min', tooltip: '允许的最小 日期/月份（ISO 8601格式）' },
                                        model: {
                                            value: e.properties.min,
                                            callback: function (t) {
                                                e.$set(e.properties, 'min', t);
                                            },
                                            expression: 'properties.min',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Picker Date', tooltip: '显示 年/月' },
                                        model: {
                                            value: e.properties[e.constants.tags.PickerDate],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PickerDate, t);
                                            },
                                            expression: 'properties[constants.tags.PickerDate]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Prev Month Aria Label' },
                                        model: {
                                            value: e.properties[e.constants.tags.PrevMonthAriaLabel],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrevMonthAriaLabel, t);
                                            },
                                            expression: 'properties[constants.tags.PrevMonthAriaLabel]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Prev Year Aria Label' },
                                        model: {
                                            value: e.properties[e.constants.tags.PrevYearAriaLabel],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrevYearAriaLabel, t);
                                            },
                                            expression: 'properties[constants.tags.PrevYearAriaLabel]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Next Month Aria Label' },
                                        model: {
                                            value: e.properties[e.constants.tags.NextMonthAriaLabel],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.NextMonthAriaLabel, t);
                                            },
                                            expression: 'properties[constants.tags.NextMonthAriaLabel]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Next Year Aria Label' },
                                        model: {
                                            value: e.properties[e.constants.tags.NextYearAriaLabel],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.NextYearAriaLabel, t);
                                            },
                                            expression: 'properties[constants.tags.NextYearAriaLabel]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Show Current : 显示为当前日期',
                                            tooltip:
                                                '切换当前 日期/月份 大纲的可见性或将提供的 日期/月份 显示为当前日期',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ShowCurrent],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ShowCurrent, t);
                                            },
                                            expression: 'properties[constants.tags.ShowCurrent]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Show Week : 显示星期',
                                            tooltip: '切换日历正文中星期几的可见性',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ShowWeek],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ShowWeek, t);
                                            },
                                            expression: 'properties[constants.tags.ShowWeek]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-select', {
                                        attrs: {
                                            label: 'Type: 输入类型',
                                            tooltip: '设置不同的输入类型',
                                            items: e.typeItems,
                                        },
                                        model: {
                                            value: e.properties.type,
                                            callback: function (t) {
                                                e.$set(e.properties, 'type', t);
                                            },
                                            expression: 'properties.type',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Header Color : 标题颜色',
                                            tooltip:
                                                '定义标题颜色。如果未指定，将使用由 color 属性或默认选择器颜色定义的颜色',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.HeaderColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HeaderColor, t);
                                            },
                                            expression: 'properties[constants.tags.HeaderColor]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
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
            Pe,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        Le = {
            name: 'HTimePickerPanel',
            components: {
                HExpansionPanel: U,
                HPanelColor: oe,
                HPanelNumber: pe,
                HPanelSelect: Z,
                HPanelSwitch: de,
                HPanelTextField: he,
                VExpansionPanels: a.VExpansionPanels,
            },
            props: { element: { type: Object, default: function () {} } },
            data: function () {
                return {
                    constants: F,
                    dataObject: {},
                    formatItems: [
                        { value: 'ampm', text: 'ampm（默认）' },
                        { value: '24hr', text: '24hr' },
                    ],
                };
            },
            computed: {
                properties: function () {
                    return this.dataObject[this.constants.annotations.xprops];
                },
            },
            watch: {
                element: {
                    handler: function (e, t) {
                        this.dataObject = e;
                    },
                    immediate: !0,
                },
            },
        },
        Oe = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Elevation : 阴影',
                                            min: '0',
                                            max: '24',
                                            tooltip: '组件的海拔可接受 0 到 24 之间的值。',
                                            disabled: e.properties.flat,
                                        },
                                        model: {
                                            value: e.properties.elevation,
                                            callback: function (t) {
                                                e.$set(e.properties, 'elevation', t);
                                            },
                                            expression: 'properties.elevation',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Flat : 移除阴影', tooltip: '移除添加到元素的标高（阴影）' },
                                        model: {
                                            value: e.properties.flat,
                                            callback: function (t) {
                                                e.$set(e.properties, 'flat', t);
                                            },
                                            expression: 'properties.flat',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Full Width : 全宽度', tooltip: '指定输入类型为全宽度' },
                                        model: {
                                            value: e.properties[e.constants.tags.FullWidth],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.FullWidth, t);
                                            },
                                            expression: 'properties[constants.tags.FullWidth]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Landscape : 水平方向', tooltip: '水平方向选择器' },
                                        model: {
                                            value: e.properties.landscape,
                                            callback: function (t) {
                                                e.$set(e.properties, 'landscape', t);
                                            },
                                            expression: 'properties.landscape',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'No Title', tooltip: '隐藏选择器标题' },
                                        model: {
                                            value: e.properties[e.constants.tags.NoTitle],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.NoTitle, t);
                                            },
                                            expression: 'properties[constants.tags.NoTitle]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Width : 选择器宽度',
                                            min: '1',
                                            max: '1024',
                                            step: '2',
                                            tooltip: '选择器宽度',
                                        },
                                        model: {
                                            value: e.properties.width,
                                            callback: function (t) {
                                                e.$set(e.properties, 'width', t);
                                            },
                                            expression: 'properties.width',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Scrollable : 滚动',
                                            tooltip: '允许通过鼠标滚动更改显示的月份',
                                        },
                                        model: {
                                            value: e.properties.scrollable,
                                            callback: function (t) {
                                                e.$set(e.properties, 'scrollable', t);
                                            },
                                            expression: 'properties.scrollable',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Ampm In Title',
                                            tooltip: '将 AM/PM 开关放置在标题中，不在时钟附近',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AmpmInTitle],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AmpmInTitle, t);
                                            },
                                            expression: 'properties[constants.tags.AmpmInTitle]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-select', {
                                        attrs: {
                                            label: 'Format',
                                            tooltip: '定义在选择器中显示的时间格式。可用的选项是 ampm 和 24hr',
                                            items: e.formatItems,
                                        },
                                        model: {
                                            value: e.properties.format,
                                            callback: function (t) {
                                                e.$set(e.properties, 'format', t);
                                            },
                                            expression: 'properties.format',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Max', tooltip: '允许的最大 日期/月份（ISO 8601格式）' },
                                        model: {
                                            value: e.properties.max,
                                            callback: function (t) {
                                                e.$set(e.properties, 'max', t);
                                            },
                                            expression: 'properties.max',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Min', tooltip: '允许的最小 日期/月份（ISO 8601格式）' },
                                        model: {
                                            value: e.properties.min,
                                            callback: function (t) {
                                                e.$set(e.properties, 'min', t);
                                            },
                                            expression: 'properties.min',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Use Seconds', tooltip: '切换选择器中秒的使用' },
                                        model: {
                                            value: e.properties[e.constants.tags.UseSeconds],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.UseSeconds, t);
                                            },
                                            expression: 'properties[constants.tags.UseSeconds]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Header Color : 标题颜色',
                                            tooltip:
                                                '定义标题颜色。如果未指定，将使用由 color 属性或默认选择器颜色定义的颜色',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.HeaderColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HeaderColor, t);
                                            },
                                            expression: 'properties[constants.tags.HeaderColor]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
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
            Le,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        Ee = {
            name: 'HSingleSelectPanel',
            components: {
                HExpansionPanel: U,
                HPanelColor: oe,
                HPanelIcon: ie,
                HPanelNumber: pe,
                HPanelSelect: Z,
                HPanelSwitch: de,
                HPanelTextField: he,
                VExpansionPanels: a.VExpansionPanels,
            },
            props: { element: { type: Object, default: function () {} } },
            data: function () {
                return {
                    constants: F,
                    dataObject: {},
                    typeItems: [
                        { value: 'text', text: '文字输入模式（默认）' },
                        { value: 'password', text: '密码模式' },
                        { value: 'number', text: '数字模式' },
                        { value: 'color', text: '选择颜色模式' },
                        { value: 'datetime-local', text: '选择日期时间模式' },
                        { value: 'time', text: '选择时间模式' },
                        { value: 'date', text: '选择日期模式' },
                        { value: 'week', text: '选择周模式' },
                        { value: 'month', text: '选择月模式' },
                    ],
                };
            },
            computed: {
                properties: function () {
                    return this.dataObject[this.constants.annotations.xprops];
                },
                isNumberType: function () {
                    return 'number' === this.properties.type;
                },
            },
            watch: {
                element: {
                    handler: function (e, t) {
                        this.dataObject = e;
                    },
                    immediate: !0,
                },
            },
        },
        De = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Chips : 纸片显示',
                                            tooltip: '改变一个已选择项为小纸片（chips）的显示方式',
                                        },
                                        model: {
                                            value: e.properties.chips,
                                            callback: function (t) {
                                                e.$set(e.properties, 'chips', t);
                                            },
                                            expression: 'properties.chips',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Deletable Chips',
                                            tooltip: '添加一个去除图标的到选定的小纸片（chips）',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.DeletableChips],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.DeletableChips, t);
                                            },
                                            expression: 'properties[constants.tags.DeletableChips]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Small Chips : 标题不移动',
                                            tooltip: '标签在 focus/dirty 上不移动',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SmallChips],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SmallChips, t);
                                            },
                                            expression: 'properties[constants.tags.SmallChips]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dense : 紧凑显示' },
                                        model: {
                                            value: e.properties.dense,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dense', t);
                                            },
                                            expression: 'properties.dense',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Filled : 使用填充样式',
                                            disabled: e.properties.outlined || e.properties.solo,
                                        },
                                        model: {
                                            value: e.properties.filled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'filled', t);
                                            },
                                            expression: 'properties.filled',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Flat : 移除阴影',
                                            tooltip: '当使用solo或者solo-inverted属性时，移除添加到元素的标高（阴影）',
                                        },
                                        model: {
                                            value: e.properties.flat,
                                            callback: function (t) {
                                                e.$set(e.properties, 'flat', t);
                                            },
                                            expression: 'properties.flat',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Full Width : 全宽度', tooltip: '指定输入类型为全宽度' },
                                        model: {
                                            value: e.properties[e.constants.tags.FullWidth],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.FullWidth, t);
                                            },
                                            expression: 'properties[constants.tags.FullWidth]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Hide Details : 隐藏细节区域' },
                                        model: {
                                            value: e.properties[e.constants.tags.HideDetails],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideDetails, t);
                                            },
                                            expression: 'properties[constants.tags.HideDetails]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Hide Selected', tooltip: '不要在选择菜单中显示已选择的项' },
                                        model: {
                                            value: e.properties[e.constants.tags.HideSelected],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideSelected, t);
                                            },
                                            expression: 'properties[constants.tags.HideSelected]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Outlined : 显示轮廓' },
                                        model: {
                                            value: e.properties.outlined,
                                            callback: function (t) {
                                                e.$set(e.properties, 'outlined', t);
                                            },
                                            expression: 'properties.outlined',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        class: e.constants.class.switch,
                                        attrs: {
                                            label: 'Rounded : 椭圆边框',
                                            disabled:
                                                !e.properties.filled && !e.properties.outlined && !e.properties.solo,
                                            dense: '',
                                            tooltip: '向输入添加边框半径, 需要配合设置Filled、Outlined、或Solo任意一项',
                                        },
                                        model: {
                                            value: e.properties.rounded,
                                            callback: function (t) {
                                                e.$set(e.properties, 'rounded', t);
                                            },
                                            expression: 'properties.rounded',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Shaped : 圆角边框',
                                            tooltip:
                                                '如果Outlined则为圆形，如果Filled则增加border-radius。必须与Outlined 或Filled 一起使用',
                                            disabled:
                                                !e.properties.outlined && !e.properties.filled && !e.properties.solo,
                                        },
                                        model: {
                                            value: e.properties.shaped,
                                            callback: function (t) {
                                                e.$set(e.properties, 'shaped', t);
                                            },
                                            expression: 'properties.shaped',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Single Line : 标题不移动',
                                            tooltip: '标签在 focus/dirty 上不移动',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SingleLine],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SingleLine, t);
                                            },
                                            expression: 'properties[constants.tags.SingleLine]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Solo : 凸起样式', disabled: e.properties.filled },
                                        model: {
                                            value: e.properties.solo,
                                            callback: function (t) {
                                                e.$set(e.properties, 'solo', t);
                                            },
                                            expression: 'properties.solo',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Solo Inverted : 单反',
                                            tooltip: '减少元素的不透明度，知道获得焦点',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SoloInverted],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SoloInverted, t);
                                            },
                                            expression: 'properties[constants.tags.SoloInverted]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: { label: 'Height : 设置高度', min: '1' },
                                        model: {
                                            value: e.properties.height,
                                            callback: function (t) {
                                                e.$set(e.properties, 'height', t);
                                            },
                                            expression: 'properties.height',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'No Data Text', tooltip: '当没有数据时显示的文本' },
                                        model: {
                                            value: e.properties[e.constants.tags.NoDataText],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.NoDataText, t);
                                            },
                                            expression: 'properties[constants.tags.NoDataText]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Auto Focus : 启用自动聚焦' },
                                        model: {
                                            value: e.properties.autofocus,
                                            callback: function (t) {
                                                e.$set(e.properties, 'autofocus', t);
                                            },
                                            expression: 'properties.autofocus',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Cache Items',
                                            tooltip: '保留已经通过 items 属性的项在本地的唯一副本',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.CacheItems],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.CacheItems, t);
                                            },
                                            expression: 'properties[constants.tags.CacheItems]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disable Lookup', tooltip: '禁用键盘查询' },
                                        model: {
                                            value: e.properties[e.constants.tags.DisableLookup],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.DisableLookup, t);
                                            },
                                            expression: 'properties[constants.tags.DisableLookup]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Eager',
                                            tooltip:
                                                '将强制组件内容在加载时呈现。如果存在内容的话，则不会在 DOM 中渲染，如果你想优化 SEO，这是非常有用的。',
                                        },
                                        model: {
                                            value: e.properties.eager,
                                            callback: function (t) {
                                                e.$set(e.properties, 'eager', t);
                                            },
                                            expression: 'properties.eager',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Loading : 加载状态',
                                            tooltip:
                                                '显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。',
                                        },
                                        model: {
                                            value: e.properties.loading,
                                            callback: function (t) {
                                                e.$set(e.properties, 'loading', t);
                                            },
                                            expression: 'properties.loading',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Loader Height : 加载器高度',
                                            min: '1',
                                            disabled: !e.properties.loading,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.LoaderHeight],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.LoaderHeight, t);
                                            },
                                            expression: 'properties[constants.tags.LoaderHeight]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Multiple : 多选', tooltip: '将预期模型更改为数组' },
                                        model: {
                                            value: e.properties.multiple,
                                            callback: function (t) {
                                                e.$set(e.properties, 'multiple', t);
                                            },
                                            expression: 'properties.multiple',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Return Object',
                                            tooltip: '将选择器的行为更改为直接返回对象，而不是 item-value 指定的值',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ReturnObject],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ReturnObject, t);
                                            },
                                            expression: 'properties[constants.tags.ReturnObject]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Reverse : 反转输入方向' },
                                        model: {
                                            value: e.properties.reverse,
                                            callback: function (t) {
                                                e.$set(e.properties, 'reverse', t);
                                            },
                                            expression: 'properties.reverse',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Validate On Blur : 延迟验证',
                                            tooltip: '延迟验证直到失去焦点的事件被触发',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ValidateOnBlur],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ValidateOnBlur, t);
                                            },
                                            expression: 'properties[constants.tags.ValidateOnBlur]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-color', {
                                        attrs: { label: 'Item Color : Item颜色', tooltip: '设置选中项目的颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.ItemColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ItemColor, t);
                                            },
                                            expression: 'properties[constants.tags.ItemColor]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Item Disabled', tooltip: '禁用 items 的属性值' },
                                        model: {
                                            value: e.properties[e.constants.tags.ItemDisabled],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ItemDisabled, t);
                                            },
                                            expression: 'properties[constants.tags.ItemDisabled]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Item Text', tooltip: "设置items'属性的文本值" },
                                        model: {
                                            value: e.properties[e.constants.tags.ItemText],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ItemText, t);
                                            },
                                            expression: 'properties[constants.tags.ItemText]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: {
                                            label: 'Item Value',
                                            tooltip:
                                                '设置 items 的值的属性 - 必须是 primitive。支持点符号。注意： 目前不支持 v-combobox GitHub问题',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ItemValue],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ItemValue, t);
                                            },
                                            expression: 'properties[constants.tags.ItemValue]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'icon', header: '图标' } },
                                [
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Icon',
                                            tooltip: '在组件上附加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Outer Icon',
                                            tooltip: '在组件的外部添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendOuterIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendOuterIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendOuterIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Icon',
                                            tooltip: '在组件前添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Inner Icon',
                                            tooltip: '在组件的输入中添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependInnerIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependInnerIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependInnerIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Clearable : 显示清除按钮' },
                                        model: {
                                            value: e.properties.clearable,
                                            callback: function (t) {
                                                e.$set(e.properties, 'clearable', t);
                                            },
                                            expression: 'properties.clearable',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Clear Icon',
                                            tooltip: '当使用 clearable 且有输入值时应用',
                                            disabled: !e.properties.clearable,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ClearIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ClearIcon, t);
                                            },
                                            expression: 'properties[constants.tags.ClearIcon]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Open On Clear',
                                            tooltip:
                                                '当使用 clearable 属性, 一旦清除，选择菜单将打开或保持打开，这个取决于当前状态',
                                            disabled: !e.properties.clearable,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.OpenOnClear],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.OpenOnClear, t);
                                            },
                                            expression: 'properties[constants.tags.OpenOnClear]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Persistent Hint : 强制显示提示',
                                            tooltip: '强制提示总是可见的',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PersistentHint],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PersistentHint, t);
                                            },
                                            expression: 'properties[constants.tags.PersistentHint]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Hint : 提示文本' },
                                        model: {
                                            value: e.properties.hint,
                                            callback: function (t) {
                                                e.$set(e.properties, 'hint', t);
                                            },
                                            expression: 'properties.hint',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'PlaceHolder : 占位符文本' },
                                        model: {
                                            value: e.properties.placeHolder,
                                            callback: function (t) {
                                                e.$set(e.properties, 'placeHolder', t);
                                            },
                                            expression: 'properties.placeHolder',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Prefix : 前缀文本' },
                                        model: {
                                            value: e.properties.prefix,
                                            callback: function (t) {
                                                e.$set(e.properties, 'prefix', t);
                                            },
                                            expression: 'properties.prefix',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Suffix : 后缀文本' },
                                        model: {
                                            value: e.properties.suffix,
                                            callback: function (t) {
                                                e.$set(e.properties, 'suffix', t);
                                            },
                                            expression: 'properties.suffix',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-select', {
                                        attrs: {
                                            label: 'Type: 输入类型',
                                            tooltip: '设置不同的输入类型',
                                            items: e.typeItems,
                                        },
                                        model: {
                                            value: e.properties.type,
                                            callback: function (t) {
                                                e.$set(e.properties, 'type', t);
                                            },
                                            expression: 'properties.type',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Min : 数字类型最小值',
                                            min: '0',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.min,
                                            callback: function (t) {
                                                e.$set(e.properties, 'min', t);
                                            },
                                            expression: 'properties.min',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Max : 数字类型最大值',
                                            min: '1',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.max,
                                            callback: function (t) {
                                                e.$set(e.properties, 'max', t);
                                            },
                                            expression: 'properties.max',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Step : 数字类型步长',
                                            min: '1',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.step,
                                            callback: function (t) {
                                                e.$set(e.properties, 'step', t);
                                            },
                                            expression: 'properties.step',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: { label: 'Background Color : 背景颜色', tooltip: '输入框背景颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.BackgroundColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.BackgroundColor, t);
                                            },
                                            expression: 'properties[constants.tags.BackgroundColor]',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    e._v(' '),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
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
            Ee,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        Fe = {
            name: 'HComboBoxPanel',
            components: {
                HExpansionPanel: U,
                HPanelArray: se,
                HPanelColor: oe,
                HPanelIcon: ie,
                HPanelNumber: pe,
                HPanelSelect: Z,
                HPanelSwitch: de,
                HPanelTextField: he,
                VExpansionPanels: a.VExpansionPanels,
            },
            props: { element: { type: Object, default: function () {} } },
            data: function () {
                return {
                    constants: F,
                    dataObject: {},
                    typeItems: [
                        { value: 'text', text: '文字输入模式（默认）' },
                        { value: 'password', text: '密码模式' },
                        { value: 'number', text: '数字模式' },
                        { value: 'color', text: '选择颜色模式' },
                        { value: 'datetime-local', text: '选择日期时间模式' },
                        { value: 'time', text: '选择时间模式' },
                        { value: 'date', text: '选择日期模式' },
                        { value: 'week', text: '选择周模式' },
                        { value: 'month', text: '选择月模式' },
                    ],
                };
            },
            computed: {
                properties: function () {
                    return this.dataObject[this.constants.annotations.xprops];
                },
                isNumberType: function () {
                    return 'number' === this.properties.type;
                },
            },
            watch: {
                element: {
                    handler: function (e, t) {
                        this.dataObject = e;
                    },
                    immediate: !0,
                },
            },
        },
        Ae = {
            name: 'HPropertyPanel',
            components: {
                TEXT_FIELD: xe,
                TEXT_AREA: ke,
                SLIDER: we,
                RANGE_SLIDER: Ce,
                CHECKBOX: Ve,
                SWITCHS: He,
                DATE_PICKER: Te,
                TIME_PICKER: Oe,
                SELECT_SINGLE: De,
                COMBOBOX: H.default(
                    {
                        render: function () {
                            var e = this,
                                t = e.$createElement,
                                s = e._self._c || t;
                            return s(
                                'v-expansion-panels',
                                { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                                [
                                    s(
                                        'h-expansion-panel',
                                        { attrs: { index: 'appearance', header: '外观' } },
                                        [
                                            s('h-panel-switch', {
                                                attrs: { label: 'Allow Over flow', tooltip: '允许菜单溢出屏幕' },
                                                model: {
                                                    value: e.properties[e.constants.tags.AllowOverflow],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.AllowOverflow, t);
                                                    },
                                                    expression: 'properties[constants.tags.AllowOverflow]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'Chips : 纸片显示',
                                                    tooltip: '改变一个已选择项为小纸片（chips）的显示方式',
                                                },
                                                model: {
                                                    value: e.properties.chips,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'chips', t);
                                                    },
                                                    expression: 'properties.chips',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-icon', {
                                                attrs: {
                                                    label: 'Deletable Chips',
                                                    tooltip: '添加一个去除图标的到选定的小纸片（chips）',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.DeletableChips],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.DeletableChips, t);
                                                    },
                                                    expression: 'properties[constants.tags.DeletableChips]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'Small Chips : 标题不移动',
                                                    tooltip: '标签在 focus/dirty 上不移动',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.SmallChips],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.SmallChips, t);
                                                    },
                                                    expression: 'properties[constants.tags.SmallChips]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: { label: 'Dense : 紧凑显示' },
                                                model: {
                                                    value: e.properties.dense,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'dense', t);
                                                    },
                                                    expression: 'properties.dense',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'Filled : 使用填充样式',
                                                    disabled: e.properties.outlined || e.properties.solo,
                                                },
                                                model: {
                                                    value: e.properties.filled,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'filled', t);
                                                    },
                                                    expression: 'properties.filled',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'Flat : 移除阴影',
                                                    tooltip:
                                                        '当使用solo或者solo-inverted属性时，移除添加到元素的标高（阴影）',
                                                },
                                                model: {
                                                    value: e.properties.flat,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'flat', t);
                                                    },
                                                    expression: 'properties.flat',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'Full Width : 全宽度',
                                                    tooltip: '指定输入类型为全宽度',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.FullWidth],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.FullWidth, t);
                                                    },
                                                    expression: 'properties[constants.tags.FullWidth]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: { label: 'Hide Details : 隐藏细节区域' },
                                                model: {
                                                    value: e.properties[e.constants.tags.HideDetails],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.HideDetails, t);
                                                    },
                                                    expression: 'properties[constants.tags.HideDetails]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'Hide Selected',
                                                    tooltip: '不要在选择菜单中显示已选择的项',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.HideSelected],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.HideSelected, t);
                                                    },
                                                    expression: 'properties[constants.tags.HideSelected]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: { label: 'Outlined : 显示轮廓' },
                                                model: {
                                                    value: e.properties.outlined,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'outlined', t);
                                                    },
                                                    expression: 'properties.outlined',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                class: e.constants.class.switch,
                                                attrs: {
                                                    label: 'Rounded : 椭圆边框',
                                                    disabled:
                                                        !e.properties.filled &&
                                                        !e.properties.outlined &&
                                                        !e.properties.solo,
                                                    dense: '',
                                                    tooltip:
                                                        '向输入添加边框半径, 需要配合设置Filled、Outlined、或Solo任意一项',
                                                },
                                                model: {
                                                    value: e.properties.rounded,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'rounded', t);
                                                    },
                                                    expression: 'properties.rounded',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'Shaped : 圆角边框',
                                                    tooltip:
                                                        '如果Outlined则为圆形，如果Filled则增加border-radius。必须与Outlined 或Filled 一起使用',
                                                    disabled:
                                                        !e.properties.outlined &&
                                                        !e.properties.filled &&
                                                        !e.properties.solo,
                                                },
                                                model: {
                                                    value: e.properties.shaped,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'shaped', t);
                                                    },
                                                    expression: 'properties.shaped',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'Single Line : 标题不移动',
                                                    tooltip: '标签在 focus/dirty 上不移动',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.SingleLine],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.SingleLine, t);
                                                    },
                                                    expression: 'properties[constants.tags.SingleLine]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: { label: 'Solo : 凸起样式', disabled: e.properties.filled },
                                                model: {
                                                    value: e.properties.solo,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'solo', t);
                                                    },
                                                    expression: 'properties.solo',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'Solo Inverted : 单反',
                                                    tooltip: '减少元素的不透明度，知道获得焦点',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.SoloInverted],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.SoloInverted, t);
                                                    },
                                                    expression: 'properties[constants.tags.SoloInverted]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-number', {
                                                attrs: { label: 'Height : 设置高度', min: '1' },
                                                model: {
                                                    value: e.properties.height,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'height', t);
                                                    },
                                                    expression: 'properties.height',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-text-field', {
                                                attrs: { label: 'No Data Text', tooltip: '当没有数据时显示的文本' },
                                                model: {
                                                    value: e.properties[e.constants.tags.NoDataText],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.NoDataText, t);
                                                    },
                                                    expression: 'properties[constants.tags.NoDataText]',
                                                },
                                            }),
                                        ],
                                        1
                                    ),
                                    e._v(' '),
                                    s(
                                        'h-expansion-panel',
                                        { attrs: { index: 'control', header: '控制' } },
                                        [
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'Auto Select First',
                                                    tooltip: '搜索时，总是选中第一个选项',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.AutoSelectFirst],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.AutoSelectFirst, t);
                                                    },
                                                    expression: 'properties[constants.tags.AutoSelectFirst]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: { label: 'Auto Focus : 启用自动聚焦' },
                                                model: {
                                                    value: e.properties.autofocus,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'autofocus', t);
                                                    },
                                                    expression: 'properties.autofocus',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-array', {
                                                attrs: {
                                                    label: 'Delimiters',
                                                    tooltip:
                                                        '接受将在键入时触发新标记的字符串数组。不替换正常的 Tab 和 Enter keys。',
                                                },
                                                model: {
                                                    value: e.properties.delimiters,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'delimiters', t);
                                                    },
                                                    expression: 'properties.delimiters',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'Cache Items',
                                                    tooltip: '保留已经通过 items 属性的项在本地的唯一副本',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.CacheItems],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.CacheItems, t);
                                                    },
                                                    expression: 'properties[constants.tags.CacheItems]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: { label: 'Disable Lookup', tooltip: '禁用键盘查询' },
                                                model: {
                                                    value: e.properties[e.constants.tags.DisableLookup],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.DisableLookup, t);
                                                    },
                                                    expression: 'properties[constants.tags.DisableLookup]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: { label: 'Disabled : 禁用输入' },
                                                model: {
                                                    value: e.properties.disabled,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'disabled', t);
                                                    },
                                                    expression: 'properties.disabled',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'Eager',
                                                    tooltip:
                                                        '将强制组件内容在加载时呈现。如果存在内容的话，则不会在 DOM 中渲染，如果你想优化 SEO，这是非常有用的。',
                                                },
                                                model: {
                                                    value: e.properties.eager,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'eager', t);
                                                    },
                                                    expression: 'properties.eager',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'Hide No Data',
                                                    tooltip:
                                                        '当没有要显示的选项时，隐藏菜单。用于防止在异步获取结果之前打开菜单。也有打开菜单的效果，当“ items 数组改变，如果还没有打开。',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.HideNoData],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.HideNoData, t);
                                                    },
                                                    expression: 'properties[constants.tags.HideNoData]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'Loading : 加载状态',
                                                    tooltip:
                                                        '显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。',
                                                },
                                                model: {
                                                    value: e.properties.loading,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'loading', t);
                                                    },
                                                    expression: 'properties.loading',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-number', {
                                                attrs: {
                                                    label: 'Loader Height : 加载器高度',
                                                    min: '1',
                                                    disabled: !e.properties.loading,
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.LoaderHeight],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.LoaderHeight, t);
                                                    },
                                                    expression: 'properties[constants.tags.LoaderHeight]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: { label: 'Multiple : 多选', tooltip: '将预期模型更改为数组' },
                                                model: {
                                                    value: e.properties.multiple,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'multiple', t);
                                                    },
                                                    expression: 'properties.multiple',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'NoFilter',
                                                    tooltip: '搜索时不要应用过滤。在过滤服务器端数据时非常有用',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.NoFilter],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.NoFilter, t);
                                                    },
                                                    expression: 'properties[constants.tags.NoFilter]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: { label: 'Readonly : 只读状态' },
                                                model: {
                                                    value: e.properties.readonly,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'readonly', t);
                                                    },
                                                    expression: 'properties.readonly',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'Return Object',
                                                    tooltip:
                                                        '将选择器的行为更改为直接返回对象，而不是 item-value 指定的值',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.ReturnObject],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.ReturnObject, t);
                                                    },
                                                    expression: 'properties[constants.tags.ReturnObject]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: { label: 'Reverse : 反转输入方向' },
                                                model: {
                                                    value: e.properties.reverse,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'reverse', t);
                                                    },
                                                    expression: 'properties.reverse',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'Validate On Blur : 延迟验证',
                                                    tooltip: '延迟验证直到失去焦点的事件被触发',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.ValidateOnBlur],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.ValidateOnBlur, t);
                                                    },
                                                    expression: 'properties[constants.tags.ValidateOnBlur]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-color', {
                                                attrs: {
                                                    label: 'Item Color : Item颜色',
                                                    tooltip: '设置选中项目的颜色',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.ItemColor],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.ItemColor, t);
                                                    },
                                                    expression: 'properties[constants.tags.ItemColor]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-text-field', {
                                                attrs: { label: 'Item Disabled', tooltip: '禁用 items 的属性值' },
                                                model: {
                                                    value: e.properties[e.constants.tags.ItemDisabled],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.ItemDisabled, t);
                                                    },
                                                    expression: 'properties[constants.tags.ItemDisabled]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-text-field', {
                                                attrs: { label: 'Item Text', tooltip: "设置items'属性的文本值" },
                                                model: {
                                                    value: e.properties[e.constants.tags.ItemText],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.ItemText, t);
                                                    },
                                                    expression: 'properties[constants.tags.ItemText]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-text-field', {
                                                attrs: {
                                                    label: 'Item Value',
                                                    tooltip:
                                                        '设置 items 的值的属性 - 必须是 primitive。支持点符号。注意： 目前不支持 v-combobox GitHub问题',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.ItemValue],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.ItemValue, t);
                                                    },
                                                    expression: 'properties[constants.tags.ItemValue]',
                                                },
                                            }),
                                        ],
                                        1
                                    ),
                                    e._v(' '),
                                    s(
                                        'h-expansion-panel',
                                        { attrs: { index: 'icon', header: '图标' } },
                                        [
                                            s('h-panel-icon', {
                                                attrs: {
                                                    label: 'Append Icon',
                                                    tooltip: '在组件上附加一个图标，使用与 v-icon 相同的语法',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.AppendIcon],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.AppendIcon, t);
                                                    },
                                                    expression: 'properties[constants.tags.AppendIcon]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-icon', {
                                                attrs: {
                                                    label: 'Append Outer Icon',
                                                    tooltip: '在组件的外部添加一个图标，使用与 v-icon 相同的语法',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.AppendOuterIcon],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.AppendOuterIcon, t);
                                                    },
                                                    expression: 'properties[constants.tags.AppendOuterIcon]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-icon', {
                                                attrs: {
                                                    label: 'Prepend Icon',
                                                    tooltip: '在组件前添加一个图标，使用与 v-icon 相同的语法',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.PrependIcon],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.PrependIcon, t);
                                                    },
                                                    expression: 'properties[constants.tags.PrependIcon]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-icon', {
                                                attrs: {
                                                    label: 'Prepend Inner Icon',
                                                    tooltip: '在组件的输入中添加一个图标，使用与 v-icon 相同的语法',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.PrependInnerIcon],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.PrependInnerIcon, t);
                                                    },
                                                    expression: 'properties[constants.tags.PrependInnerIcon]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: { label: 'Clearable : 显示清除按钮' },
                                                model: {
                                                    value: e.properties.clearable,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'clearable', t);
                                                    },
                                                    expression: 'properties.clearable',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-icon', {
                                                attrs: {
                                                    label: 'Clear Icon',
                                                    tooltip: '当使用 clearable 且有输入值时应用',
                                                    disabled: !e.properties.clearable,
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.ClearIcon],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.ClearIcon, t);
                                                    },
                                                    expression: 'properties[constants.tags.ClearIcon]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'Open On Clear',
                                                    tooltip:
                                                        '当使用 clearable 属性, 一旦清除，选择菜单将打开或保持打开，这个取决于当前状态',
                                                    disabled: !e.properties.clearable,
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.OpenOnClear],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.OpenOnClear, t);
                                                    },
                                                    expression: 'properties[constants.tags.OpenOnClear]',
                                                },
                                            }),
                                        ],
                                        1
                                    ),
                                    e._v(' '),
                                    s(
                                        'h-expansion-panel',
                                        { attrs: { index: 'content', header: '内容' } },
                                        [
                                            s('h-panel-switch', {
                                                attrs: {
                                                    label: 'Persistent Hint : 强制显示提示',
                                                    tooltip: '强制提示总是可见的',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.PersistentHint],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.PersistentHint, t);
                                                    },
                                                    expression: 'properties[constants.tags.PersistentHint]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-text-field', {
                                                attrs: { label: 'Hint : 提示文本' },
                                                model: {
                                                    value: e.properties.hint,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'hint', t);
                                                    },
                                                    expression: 'properties.hint',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-text-field', {
                                                attrs: { label: 'PlaceHolder : 占位符文本' },
                                                model: {
                                                    value: e.properties.placeHolder,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'placeHolder', t);
                                                    },
                                                    expression: 'properties.placeHolder',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-text-field', {
                                                attrs: { label: 'Prefix : 前缀文本' },
                                                model: {
                                                    value: e.properties.prefix,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'prefix', t);
                                                    },
                                                    expression: 'properties.prefix',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-text-field', {
                                                attrs: { label: 'Suffix : 后缀文本' },
                                                model: {
                                                    value: e.properties.suffix,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'suffix', t);
                                                    },
                                                    expression: 'properties.suffix',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-select', {
                                                attrs: {
                                                    label: 'Type: 输入类型',
                                                    tooltip: '设置不同的输入类型',
                                                    items: e.typeItems,
                                                },
                                                model: {
                                                    value: e.properties.type,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'type', t);
                                                    },
                                                    expression: 'properties.type',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-number', {
                                                attrs: {
                                                    label: 'Min : 数字类型最小值',
                                                    min: '0',
                                                    disabled: !e.isNumberType,
                                                    tooltip: '当Type属性为‘数字类型’时可用',
                                                },
                                                model: {
                                                    value: e.properties.min,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'min', t);
                                                    },
                                                    expression: 'properties.min',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-number', {
                                                attrs: {
                                                    label: 'Max : 数字类型最大值',
                                                    min: '1',
                                                    disabled: !e.isNumberType,
                                                    tooltip: '当Type属性为‘数字类型’时可用',
                                                },
                                                model: {
                                                    value: e.properties.max,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'max', t);
                                                    },
                                                    expression: 'properties.max',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-number', {
                                                attrs: {
                                                    label: 'Step : 数字类型步长',
                                                    min: '1',
                                                    disabled: !e.isNumberType,
                                                    tooltip: '当Type属性为‘数字类型’时可用',
                                                },
                                                model: {
                                                    value: e.properties.step,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'step', t);
                                                    },
                                                    expression: 'properties.step',
                                                },
                                            }),
                                        ],
                                        1
                                    ),
                                    e._v(' '),
                                    s(
                                        'h-expansion-panel',
                                        { attrs: { index: 'color', header: '色彩' } },
                                        [
                                            s('h-panel-color', {
                                                attrs: {
                                                    label: 'Background Color : 背景颜色',
                                                    tooltip: '输入框背景颜色',
                                                },
                                                model: {
                                                    value: e.properties[e.constants.tags.BackgroundColor],
                                                    callback: function (t) {
                                                        e.$set(e.properties, e.constants.tags.BackgroundColor, t);
                                                    },
                                                    expression: 'properties[constants.tags.BackgroundColor]',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-color', {
                                                attrs: {
                                                    label: 'Color : 颜色',
                                                    tooltip:
                                                        '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                                },
                                                model: {
                                                    value: e.properties.color,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'color', t);
                                                    },
                                                    expression: 'properties.color',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: { label: 'Dark : 使用深色主题' },
                                                model: {
                                                    value: e.properties.dark,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'dark', t);
                                                    },
                                                    expression: 'properties.dark',
                                                },
                                            }),
                                            e._v(' '),
                                            s('h-panel-switch', {
                                                attrs: { label: 'Light : 使用浅色主题' },
                                                model: {
                                                    value: e.properties.light,
                                                    callback: function (t) {
                                                        e.$set(e.properties, 'light', t);
                                                    },
                                                    expression: 'properties.light',
                                                },
                                            }),
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
                    Fe,
                    undefined,
                    false,
                    undefined,
                    !1,
                    void 0,
                    void 0,
                    void 0
                ),
                VIcon: a.VIcon,
                VBtn: a.VBtn,
                VTooltip: a.VTooltip,
                VTab: a.VTab,
                VTabs: a.VTabs,
                VTextField: a.VTextField,
                VDivider: a.VDivider,
                VCard: a.VCard,
                VCol: a.VCol,
                VRow: a.VRow,
                VContainer: a.VContainer,
                VTabItem: a.VTabItem,
                VTabsItems: a.VTabsItems,
            },
            props: {
                selectedItem: { type: Object, default: function () {} },
                formSchema: { type: Object, default: function () {} },
            },
            data: function () {
                return {
                    constants: F,
                    tab: null,
                    tabs: [
                        { key: 'element', name: '组件属性' },
                        { key: 'form', name: '表单属性' },
                    ],
                    schema: {},
                    formSettings: {},
                };
            },
            computed: {
                currentPanel: function () {
                    return this.schema.configs.panel;
                },
                originalFormId: function () {
                    return this.schema.configs.formId;
                },
                element: function () {
                    return this.schema.properties[this.originalFormId];
                },
                properties: function () {
                    return this.element[this.constants.annotations.xprops];
                },
            },
            watch: {
                selectedItem: {
                    handler: function (e, t) {
                        this.schema = e;
                    },
                    immediate: !0,
                },
                formSchema: {
                    handler: function (e, t) {
                        this.formSettings = e;
                    },
                    immediate: !0,
                },
            },
            methods: {
                editFormId: function (e) {
                    var t = this.originalFormId;
                    e &&
                        t &&
                        e !== t &&
                        (this.$set(this.schema.properties, e, this.element),
                        this.$set(this.schema.configs, 'formId', e),
                        delete this.schema.properties[t]);
                },
                editId: function (e) {
                    e ? this.$set(this.properties, 'id', e) : delete this.properties.id;
                },
                editLabel: function (e) {
                    e && (this.$set(this.properties, 'label', e), this.$set(this.element, 'title', e));
                },
            },
        },
        Re = {
            name: 'HFormModeler',
            components: {
                HCanvasContainer: W,
                HDraggableItem: K,
                HPropertyPanel: H.default(
                    {
                        render: function () {
                            var e = this,
                                t = e.$createElement,
                                s = e._self._c || t;
                            return s(
                                'v-card',
                                [
                                    s(
                                        'v-tabs',
                                        {
                                            attrs: { 'background-color': 'transparent', grow: '' },
                                            model: {
                                                value: e.tab,
                                                callback: function (t) {
                                                    e.tab = t;
                                                },
                                                expression: 'tab',
                                            },
                                        },
                                        [
                                            s(
                                                'v-tab',
                                                { key: e.tabs[0].key },
                                                [
                                                    e._v('\n            ' + e._s(e.tabs[0].name) + '\n            '),
                                                    s(
                                                        'v-tooltip',
                                                        {
                                                            attrs: { bottom: '' },
                                                            scopedSlots: e._u([
                                                                {
                                                                    key: 'activator',
                                                                    fn: function (t) {
                                                                        var a = t.on,
                                                                            n = t.attrs;
                                                                        return [
                                                                            s(
                                                                                'v-btn',
                                                                                e._g(
                                                                                    e._b(
                                                                                        {
                                                                                            staticClass: 'ml-5',
                                                                                            attrs: {
                                                                                                icon: '',
                                                                                                tag: 'a',
                                                                                                target: '_blank',
                                                                                                href: e.schema.configs
                                                                                                    ? e.schema.configs
                                                                                                          .document
                                                                                                    : '#',
                                                                                            },
                                                                                        },
                                                                                        'v-btn',
                                                                                        n,
                                                                                        !1
                                                                                    ),
                                                                                    a
                                                                                ),
                                                                                [
                                                                                    s('v-icon', [
                                                                                        e._v('mdi-file-replace'),
                                                                                    ]),
                                                                                ],
                                                                                1
                                                                            ),
                                                                        ];
                                                                    },
                                                                },
                                                            ]),
                                                        },
                                                        [e._v(' '), s('span', [e._v('点击查看文档')])]
                                                    ),
                                                ],
                                                1
                                            ),
                                            e._v(' '),
                                            s('v-tab', { key: e.tabs[1].key }, [
                                                e._v('\n            ' + e._s(e.tabs[1].name) + '\n        '),
                                            ]),
                                        ],
                                        1
                                    ),
                                    e._v(' '),
                                    s(
                                        'v-tabs-items',
                                        {
                                            model: {
                                                value: e.tab,
                                                callback: function (t) {
                                                    e.tab = t;
                                                },
                                                expression: 'tab',
                                            },
                                        },
                                        [
                                            s(
                                                'v-tab-item',
                                                { key: e.tabs[0].key },
                                                [
                                                    s(
                                                        'v-container',
                                                        { staticClass: 'pb-0', attrs: { fluid: '' } },
                                                        [
                                                            s(
                                                                'v-row',
                                                                [
                                                                    s(
                                                                        'v-col',
                                                                        { staticClass: 'pb-0' },
                                                                        [
                                                                            e.schema.configs
                                                                                ? s(
                                                                                      'v-card',
                                                                                      { attrs: { flat: '' } },
                                                                                      [
                                                                                          s('v-text-field', {
                                                                                              attrs: {
                                                                                                  value:
                                                                                                      e.originalFormId,
                                                                                                  label: '字段名',
                                                                                                  dense: '',
                                                                                                  outlined: '',
                                                                                                  placeholder:
                                                                                                      '请输入字段名（v-model）',
                                                                                              },
                                                                                              on: {
                                                                                                  input: e.editFormId,
                                                                                              },
                                                                                          }),
                                                                                          e._v(' '),
                                                                                          s('v-text-field', {
                                                                                              attrs: {
                                                                                                  value:
                                                                                                      e.element.title,
                                                                                                  label: '标签',
                                                                                                  clearable: '',
                                                                                                  dense: '',
                                                                                                  outlined: '',
                                                                                                  placeholder:
                                                                                                      '请输入标签',
                                                                                              },
                                                                                              on: {
                                                                                                  input: e.editLabel,
                                                                                              },
                                                                                          }),
                                                                                          e._v(' '),
                                                                                          s('v-text-field', {
                                                                                              attrs: {
                                                                                                  value:
                                                                                                      e.properties.id,
                                                                                                  label: 'ID',
                                                                                                  clearable: '',
                                                                                                  dense: '',
                                                                                                  outlined: '',
                                                                                                  placeholder:
                                                                                                      '请输入元素ID（id）',
                                                                                              },
                                                                                              on: { input: e.editId },
                                                                                          }),
                                                                                          e._v(' '),
                                                                                          s('v-divider', {
                                                                                              staticClass: 'mb-3',
                                                                                          }),
                                                                                          e._v(' '),
                                                                                          s(e.currentPanel, {
                                                                                              tag: 'component',
                                                                                              attrs: {
                                                                                                  element: e.element,
                                                                                              },
                                                                                          }),
                                                                                      ],
                                                                                      1
                                                                                  )
                                                                                : e._e(),
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
                                            e._v(' '),
                                            s(
                                                'v-tab-item',
                                                { key: e.tabs[1].key },
                                                [
                                                    s(
                                                        'v-container',
                                                        { staticClass: 'pb-0', attrs: { fluid: '' } },
                                                        [
                                                            s(
                                                                'v-row',
                                                                [
                                                                    s(
                                                                        'v-col',
                                                                        { staticClass: 'pb-0' },
                                                                        [
                                                                            s(
                                                                                'v-card',
                                                                                { attrs: { flat: '' } },
                                                                                [
                                                                                    s('v-text-field', {
                                                                                        attrs: {
                                                                                            outlined: '',
                                                                                            dense: '',
                                                                                            label: '表单名',
                                                                                            placeholder:
                                                                                                '请输入表单名（ref）',
                                                                                        },
                                                                                        model: {
                                                                                            value:
                                                                                                e.formSettings.formRef,
                                                                                            callback: function (t) {
                                                                                                e.$set(
                                                                                                    e.formSettings,
                                                                                                    'formRef',
                                                                                                    t
                                                                                                );
                                                                                            },
                                                                                            expression:
                                                                                                'formSettings.formRef',
                                                                                        },
                                                                                    }),
                                                                                    e._v(' '),
                                                                                    s('v-text-field', {
                                                                                        attrs: {
                                                                                            outlined: '',
                                                                                            dense: '',
                                                                                            label: '表单模型',
                                                                                            placeholder:
                                                                                                '请输入数据模型',
                                                                                        },
                                                                                        model: {
                                                                                            value:
                                                                                                e.formSettings
                                                                                                    .formModel,
                                                                                            callback: function (t) {
                                                                                                e.$set(
                                                                                                    e.formSettings,
                                                                                                    'formModel',
                                                                                                    t
                                                                                                );
                                                                                            },
                                                                                            expression:
                                                                                                'formSettings.formModel',
                                                                                        },
                                                                                    }),
                                                                                    e._v(' '),
                                                                                    s('v-divider'),
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
                    Ae,
                    'data-v-350eb2ef',
                    false,
                    undefined,
                    !1,
                    void 0,
                    void 0,
                    void 0
                ),
                VIcon: a.VIcon,
                VDivider: a.VDivider,
                VNavigationDrawer: a.VNavigationDrawer,
                VCardText: a.VCardText,
                VCard: a.VCard,
                VRow: a.VRow,
                VCol: a.VCol,
                VForm: a.VForm,
                VMain: a.VMain,
                VApp: a.VApp,
            },
            props: { height: { type: String, default: '100vh' } },
            data: function () {
                return {
                    components: D,
                    drawingCanvas: [],
                    selectedCanvasItemId: '',
                    selectedCanvasItemData: {},
                    drawingCanvasForm: {},
                    saveDrawingCanvasDebounce: b.debounce(340, O),
                };
            },
            watch: {
                drawingCanvas: {
                    handler: function (e, t) {
                        this.saveDrawingCanvasDebounce(e);
                    },
                    deep: !0,
                },
            },
            created: function () {
                this.initModeler();
            },
            mounted: function () {
                var e = (function () {
                    if ('1.1' !== c.lib.storageSync.getItem(T)) return c.lib.storageSync.setItem(T, '1.1'), O([]), null;
                    var e = c.lib.storageSync.getItem(P);
                    return L(e);
                })();
                Array.isArray(e) &&
                    e.length > 0 &&
                    ((this.drawingCanvas = e), this.selectCanvasItem(this.drawingCanvas[0]));
            },
            methods: {
                initModeler: function () {
                    0 !== this.drawingCanvas.length && (this.selectedCanvasItemData = this.drawingCanvas[0]);
                },
                changeDrawingCanvas: function (e) {
                    this.drawingCanvas.push(e), this.selectCanvasItem(e);
                },
                addComponent: function (e) {
                    var t = (function (e) {
                        return A(
                            E[e.configs.schema].schema,
                            e.configs.name,
                            e.configs.document,
                            E[e.configs.schema].index
                        );
                    })(e);
                    this.changeDrawingCanvas(t);
                },
                onChange: function (e) {},
                selectCanvasItem: function (e) {
                    (this.selectedCanvasItemData = e), (this.selectedCanvasItemId = e.configs.renderKey);
                },
                copyCanvasItem: function (e) {
                    var t = (function (e) {
                        return A(R(e, e.configs.formId), e.configs.name, e.configs.document, e.configs.panel);
                    })(e);
                    this.changeDrawingCanvas(t);
                },
                deleteCanvasItem: function (e) {
                    var t = this,
                        s = this.$lib.lodash.remove(this.drawingCanvas, function (t) {
                            return t.configs.formId !== e;
                        });
                    this.$nextTick(function () {
                        t.drawingCanvas = s;
                        var e = t.drawingCanvas.length;
                        e && t.selectCanvasItem(t.drawingCanvas[e - 1]);
                    });
                },
            },
        },
        je = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-app',
                        { attrs: { id: 'modeler' } },
                        [
                            s('v-navigation-drawer', { attrs: { app: '', clipped: '', 'hide-overlay': '' } }, [
                                s(
                                    'div',
                                    { staticClass: 'components-list' },
                                    e._l(e.components, function (t, a) {
                                        return s(
                                            'div',
                                            { key: a },
                                            [
                                                s(
                                                    'div',
                                                    { staticClass: 'components-title' },
                                                    [
                                                        s('v-icon', [e._v('mdi-puzzle-outline')]),
                                                        e._v(
                                                            '\n                    ' +
                                                                e._s(t.title) +
                                                                '\n                '
                                                        ),
                                                    ],
                                                    1
                                                ),
                                                e._v(' '),
                                                s(
                                                    'draggable',
                                                    {
                                                        staticClass: 'components-draggable',
                                                        attrs: {
                                                            list: t.list,
                                                            group: { name: 'componentsGroup', pull: 'clone', put: !1 },
                                                            clone: e.addComponent,
                                                            draggable: '.components-item',
                                                            sort: !1,
                                                        },
                                                    },
                                                    e._l(t.list, function (t, a) {
                                                        return s(
                                                            'div',
                                                            {
                                                                key: a,
                                                                staticClass: 'components-item',
                                                                on: {
                                                                    click: function (s) {
                                                                        return e.addComponent(t);
                                                                    },
                                                                },
                                                            },
                                                            [
                                                                s(
                                                                    'div',
                                                                    { staticClass: 'components-body' },
                                                                    [
                                                                        s(
                                                                            'v-icon',
                                                                            {
                                                                                staticClass: 'mr-1',
                                                                                attrs: { small: '' },
                                                                            },
                                                                            [e._v(e._s(t.configs.icon))]
                                                                        ),
                                                                        e._v(
                                                                            '\n                            ' +
                                                                                e._s(t.configs.title) +
                                                                                '\n                        '
                                                                        ),
                                                                    ],
                                                                    1
                                                                ),
                                                            ]
                                                        );
                                                    }),
                                                    0
                                                ),
                                                e._v(' '),
                                                s('v-divider'),
                                            ],
                                            1
                                        );
                                    }),
                                    0
                                ),
                            ]),
                            e._v(' '),
                            s(
                                'v-main',
                                { staticClass: 'pa-0', attrs: { app: '' } },
                                [
                                    s(
                                        'h-canvas-container',
                                        [
                                            s(
                                                'validation-observer',
                                                { ref: 'observer' },
                                                [
                                                    s(
                                                        'v-form',
                                                        [
                                                            e.drawingCanvas.length > 0
                                                                ? s(
                                                                      'draggable',
                                                                      {
                                                                          attrs: {
                                                                              list: e.drawingCanvas,
                                                                              animation: 300,
                                                                              group: 'componentsGroup',
                                                                          },
                                                                          on: {
                                                                              change: e.onChange,
                                                                              start: function (t) {
                                                                                  e.drag = !0;
                                                                              },
                                                                              end: function (t) {
                                                                                  e.drag = !1;
                                                                              },
                                                                          },
                                                                      },
                                                                      e._l(e.drawingCanvas, function (t) {
                                                                          return s('h-draggable-item', {
                                                                              key: t.renderKey,
                                                                              ref: 'canvas',
                                                                              refInFor: !0,
                                                                              attrs: {
                                                                                  schema: t,
                                                                                  'selected-item-id':
                                                                                      e.selectedCanvasItemId,
                                                                              },
                                                                              on: {
                                                                                  select: e.selectCanvasItem,
                                                                                  copy: e.copyCanvasItem,
                                                                                  delete: e.deleteCanvasItem,
                                                                              },
                                                                          });
                                                                      }),
                                                                      1
                                                                  )
                                                                : s(
                                                                      'draggable',
                                                                      {
                                                                          attrs: {
                                                                              animation: 300,
                                                                              group: 'componentsGroup',
                                                                          },
                                                                      },
                                                                      [
                                                                          s(
                                                                              'v-row',
                                                                              [
                                                                                  s(
                                                                                      'v-col',
                                                                                      { attrs: { cols: '12' } },
                                                                                      [
                                                                                          s(
                                                                                              'v-row',
                                                                                              {
                                                                                                  attrs: {
                                                                                                      align: 'center',
                                                                                                      justify: 'center',
                                                                                                  },
                                                                                              },
                                                                                              [
                                                                                                  s(
                                                                                                      'v-card',
                                                                                                      {
                                                                                                          staticClass:
                                                                                                              'ma-12',
                                                                                                          attrs: {
                                                                                                              height:
                                                                                                                  '100',
                                                                                                              width:
                                                                                                                  '600',
                                                                                                          },
                                                                                                      },
                                                                                                      [
                                                                                                          s(
                                                                                                              'v-card-text',
                                                                                                              {
                                                                                                                  staticClass:
                                                                                                                      'text-center title',
                                                                                                              },
                                                                                                              [
                                                                                                                  e._v(
                                                                                                                      '从左侧拖入或点选组件进行表单设计'
                                                                                                                  ),
                                                                                                              ]
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
                            e._v(' '),
                            s(
                                'v-navigation-drawer',
                                { attrs: { clipped: '', app: '', 'hide-overlay': '', right: '', width: '360px' } },
                                [
                                    s('h-property-panel', {
                                        attrs: {
                                            'selected-item': e.selectedCanvasItemData,
                                            'form-schema': e.drawingCanvasForm,
                                        },
                                    }),
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
            Re,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        Be = {
            name: 'HFormCodeDrawer',
            components: {
                HCodeMirror: _.HCodeMirror,
                VIcon: a.VIcon,
                VBtn: a.VBtn,
                VToolbarTitle: a.VToolbarTitle,
                VSpacer: a.VSpacer,
                VToolbarItems: a.VToolbarItems,
                VToolbar: a.VToolbar,
                VNavigationDrawer: a.VNavigationDrawer,
            },
            props: { value: { type: Boolean, default: !1 }, source: { type: String, default: '' } },
            data: function () {
                return { drawer: !1, code: '' };
            },
            watch: {
                value: {
                    handler: function (e, t) {
                        this.drawer = e;
                    },
                    immediate: !0,
                },
                drawer: {
                    handler: function (e, t) {
                        this.$emit('input', e);
                    },
                },
                source: {
                    handler: function (e, t) {
                        this.code = e;
                    },
                    immediate: !0,
                },
            },
            methods: {},
        },
        Ne = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-navigation-drawer',
                        {
                            attrs: { fixed: '', temporary: '', 'hide-overlay': '', bottom: '', width: '100%' },
                            model: {
                                value: e.drawer,
                                callback: function (t) {
                                    e.drawer = t;
                                },
                                expression: 'drawer',
                            },
                        },
                        [
                            s(
                                'v-toolbar',
                                { staticClass: 'blue darken-3', attrs: { dark: '', dense: '' } },
                                [
                                    s(
                                        'v-btn',
                                        {
                                            attrs: { icon: '', dark: '' },
                                            on: {
                                                click: function (t) {
                                                    e.drawer = !1;
                                                },
                                            },
                                        },
                                        [s('v-icon', [e._v('mdi-close-box')])],
                                        1
                                    ),
                                    e._v(' '),
                                    s('v-toolbar-title', [e._v('查看Vue代码')]),
                                    e._v(' '),
                                    s('v-spacer'),
                                    e._v(' '),
                                    s(
                                        'v-toolbar-items',
                                        [
                                            s(
                                                'v-btn',
                                                {
                                                    attrs: { dark: '', text: '' },
                                                    on: {
                                                        click: function (t) {
                                                            e.drawer = !1;
                                                        },
                                                    },
                                                },
                                                [e._v('Save')]
                                            ),
                                        ],
                                        1
                                    ),
                                ],
                                1
                            ),
                            e._v(' '),
                            s('h-code-mirror', {
                                attrs: { mode: 'vue', 'read-only': '' },
                                model: {
                                    value: e.code,
                                    callback: function (t) {
                                        e.code = t;
                                    },
                                    expression: 'code',
                                },
                            }),
                        ],
                        1
                    );
                },
                staticRenderFns: [],
            },
            undefined,
            Be,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        ),
        Me = {
            name: 'HFormPreviewDrawer',
            components: {
                HCodeMirror: _.HCodeMirror,
                HFormRuntime: k.HFormRuntime,
                VIcon: a.VIcon,
                VBtn: a.VBtn,
                VToolbarTitle: a.VToolbarTitle,
                VSpacer: a.VSpacer,
                VToolbarItems: a.VToolbarItems,
                VToolbar: a.VToolbar,
                VCard: a.VCard,
                VCol: a.VCol,
                VRow: a.VRow,
                VNavigationDrawer: a.VNavigationDrawer,
            },
            props: { value: { type: Boolean, default: !1 }, source: { type: String, default: '' } },
            data: function () {
                return { drawer: !1, schema: {}, model: {}, config: '' };
            },
            watch: {
                value: {
                    handler: function (e, t) {
                        this.drawer = e;
                    },
                    immediate: !0,
                },
                drawer: {
                    handler: function (e, t) {
                        this.$emit('input', e);
                    },
                },
                source: {
                    handler: function (e, t) {
                        e && ((this.schema = JSON.parse(e)), (this.config = e));
                    },
                    immediate: !0,
                },
            },
        },
        ze = {
            name: 'HFormGenerator',
            components: {
                HFormModeler: je,
                HFormCodeDrawer: Ne,
                HFormPreviewDrawer: H.default(
                    {
                        render: function () {
                            var e = this,
                                t = e.$createElement,
                                s = e._self._c || t;
                            return s(
                                'v-navigation-drawer',
                                {
                                    attrs: { fixed: '', temporary: '', 'hide-overlay': '', bottom: '', width: '100%' },
                                    model: {
                                        value: e.drawer,
                                        callback: function (t) {
                                            e.drawer = t;
                                        },
                                        expression: 'drawer',
                                    },
                                },
                                [
                                    s(
                                        'v-toolbar',
                                        { staticClass: 'blue darken-3', attrs: { dark: '', dense: '' } },
                                        [
                                            s(
                                                'v-btn',
                                                {
                                                    attrs: { icon: '', dark: '' },
                                                    on: {
                                                        click: function (t) {
                                                            e.drawer = !1;
                                                        },
                                                    },
                                                },
                                                [s('v-icon', [e._v('mdi-close-box')])],
                                                1
                                            ),
                                            e._v(' '),
                                            s('v-toolbar-title', [e._v('表单预览')]),
                                            e._v(' '),
                                            s('v-spacer'),
                                            e._v(' '),
                                            s(
                                                'v-toolbar-items',
                                                [
                                                    s(
                                                        'v-btn',
                                                        {
                                                            attrs: { dark: '', text: '' },
                                                            on: {
                                                                click: function (t) {
                                                                    e.drawer = !1;
                                                                },
                                                            },
                                                        },
                                                        [e._v('Save')]
                                                    ),
                                                ],
                                                1
                                            ),
                                        ],
                                        1
                                    ),
                                    e._v(' '),
                                    s(
                                        'v-card',
                                        [
                                            s(
                                                'v-row',
                                                [
                                                    s(
                                                        'v-col',
                                                        { staticClass: 'pa-0', attrs: { cols: '12', md: '6' } },
                                                        [
                                                            s(
                                                                'v-card',
                                                                { attrs: { flat: '' } },
                                                                [
                                                                    s('h-code-mirror', {
                                                                        attrs: { 'read-only': '' },
                                                                        model: {
                                                                            value: e.config,
                                                                            callback: function (t) {
                                                                                e.config = t;
                                                                            },
                                                                            expression: 'config',
                                                                        },
                                                                    }),
                                                                ],
                                                                1
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                    e._v(' '),
                                                    s(
                                                        'v-col',
                                                        { attrs: { cols: '12', md: '6' } },
                                                        [
                                                            s('h-form-runtime', {
                                                                staticClass: 'mr-3',
                                                                attrs: { schema: e.schema },
                                                            }),
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
                    Me,
                    undefined,
                    false,
                    undefined,
                    !1,
                    void 0,
                    void 0,
                    void 0
                ),
                VIcon: a.VIcon,
                VBtn: a.VBtn,
                VToolbarTitle: a.VToolbarTitle,
                VSpacer: a.VSpacer,
                VTooltip: a.VTooltip,
                VAppBar: a.VAppBar,
                VMain: a.VMain,
                VApp: a.VApp,
            },
            data: function () {
                return {
                    windowWidth: document.documentElement.clientWidth,
                    windowHeight: document.documentElement.clientHeight,
                    codeDrawer: !1,
                    formDrawer: !1,
                    sourceCode: '',
                    schemaObject: '',
                };
            },
            computed: {
                contentHeight: function () {
                    return this.windowHeight - 48 + 'px';
                },
                canvas: function () {
                    return this.$refs.modeler.drawingCanvas;
                },
            },
            mounted: function () {
                var e = this;
                window.onresize = function () {
                    return (
                        (window.fullHeight = document.documentElement.clientHeight),
                        (window.fullWidth = document.documentElement.clientWidth),
                        (e.windowHeight = window.fullHeight),
                        void (e.windowWidth = window.fullWidth)
                    );
                };
            },
            methods: {
                codePreview: function () {
                    var e = N(this.canvas);
                    e && (this.sourceCode = e.code), (this.codeDrawer = !0);
                },
                formPreview: function () {
                    var e,
                        t,
                        s =
                            ((e = this.canvas),
                            (t = { type: 'object', properties: {} }),
                            c.lib.lodash.isEmpty(e)
                                ? {}
                                : (C.default(e).call(e, function (e, s, a) {
                                      var n = e.configs.formId,
                                          o = R(e);
                                      t.properties[n] = o;
                                  }),
                                  t));
                    s && (this.schemaObject = JSON.stringify(s, null, '\t')), (this.formDrawer = !0);
                },
            },
        },
        We = H.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-app',
                        { attrs: { id: 'generator' } },
                        [
                            s(
                                'v-app-bar',
                                {
                                    attrs: {
                                        dense: '',
                                        'clipped-left': '',
                                        'clipped-right': '',
                                        app: '',
                                        color: 'blue darken-3',
                                        dark: '',
                                    },
                                },
                                [
                                    s(
                                        'v-btn',
                                        { attrs: { large: '', icon: '' } },
                                        [s('v-icon', [e._v('mdi-volleyball')])],
                                        1
                                    ),
                                    e._v(' '),
                                    s('v-toolbar-title', [e._v('Hecate Form Generator')]),
                                    e._v(' '),
                                    s('v-spacer'),
                                    e._v(' '),
                                    s(
                                        'v-tooltip',
                                        {
                                            attrs: { bottom: '' },
                                            scopedSlots: e._u([
                                                {
                                                    key: 'activator',
                                                    fn: function (t) {
                                                        var a = t.on,
                                                            n = t.attrs;
                                                        return [
                                                            s(
                                                                'v-btn',
                                                                e._g(
                                                                    e._b(
                                                                        {
                                                                            attrs: { large: '', dark: '', icon: '' },
                                                                            on: { click: e.formPreview },
                                                                        },
                                                                        'v-btn',
                                                                        n,
                                                                        !1
                                                                    ),
                                                                    a
                                                                ),
                                                                [s('v-icon', [e._v('mdi-delete-empty')])],
                                                                1
                                                            ),
                                                        ];
                                                    },
                                                },
                                            ]),
                                        },
                                        [e._v(' '), s('span', [e._v('清空')])]
                                    ),
                                    e._v(' '),
                                    s(
                                        'v-tooltip',
                                        {
                                            attrs: { bottom: '' },
                                            scopedSlots: e._u([
                                                {
                                                    key: 'activator',
                                                    fn: function (t) {
                                                        var a = t.on,
                                                            n = t.attrs;
                                                        return [
                                                            s(
                                                                'v-btn',
                                                                e._g(
                                                                    e._b(
                                                                        {
                                                                            attrs: { large: '', dark: '', icon: '' },
                                                                            on: { click: e.formPreview },
                                                                        },
                                                                        'v-btn',
                                                                        n,
                                                                        !1
                                                                    ),
                                                                    a
                                                                ),
                                                                [s('v-icon', [e._v('mdi-code-braces')])],
                                                                1
                                                            ),
                                                        ];
                                                    },
                                                },
                                            ]),
                                        },
                                        [e._v(' '), s('span', [e._v('表单预览')])]
                                    ),
                                    e._v(' '),
                                    s(
                                        'v-tooltip',
                                        {
                                            attrs: { bottom: '' },
                                            scopedSlots: e._u([
                                                {
                                                    key: 'activator',
                                                    fn: function (t) {
                                                        var a = t.on,
                                                            n = t.attrs;
                                                        return [
                                                            s(
                                                                'v-btn',
                                                                e._g(
                                                                    e._b(
                                                                        {
                                                                            attrs: { large: '', dark: '', icon: '' },
                                                                            on: { click: e.codePreview },
                                                                        },
                                                                        'v-btn',
                                                                        n,
                                                                        !1
                                                                    ),
                                                                    a
                                                                ),
                                                                [s('v-icon', [e._v('mdi-play-box-multiple-outline')])],
                                                                1
                                                            ),
                                                        ];
                                                    },
                                                },
                                            ]),
                                        },
                                        [e._v(' '), s('span', [e._v('查看代码')])]
                                    ),
                                ],
                                1
                            ),
                            e._v(' '),
                            s(
                                'v-main',
                                [s('h-form-modeler', { ref: 'modeler', attrs: { height: e.contentHeight } })],
                                1
                            ),
                            e._v(' '),
                            s('h-form-code-drawer', {
                                attrs: { source: e.sourceCode },
                                model: {
                                    value: e.codeDrawer,
                                    callback: function (t) {
                                        e.codeDrawer = t;
                                    },
                                    expression: 'codeDrawer',
                                },
                            }),
                            e._v(' '),
                            s('h-form-preview-drawer', {
                                attrs: { source: e.schemaObject },
                                model: {
                                    value: e.formDrawer,
                                    callback: function (t) {
                                        e.formDrawer = t;
                                    },
                                    expression: 'formDrawer',
                                },
                            }),
                        ],
                        1
                    );
                },
                staticRenderFns: [],
            },
            undefined,
            ze,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        );
    (We.install = function (e) {
        e.component(We.name, We);
    }),
        null != ('undefined' == typeof window ? 'undefined' : w.default(window)) &&
            window.Vue &&
            We.install(window.Vue),
        (e.HFormGenerator = We),
        Object.defineProperty(e, '__esModule', { value: !0 });
});
