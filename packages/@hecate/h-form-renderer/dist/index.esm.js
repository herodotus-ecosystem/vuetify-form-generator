import 'core-js/modules/es.function.name.js';
import e from '@babel/runtime-corejs3/helpers/esm/typeof';
import 'core-js/modules/es.regexp.constructor.js';
import 'core-js/modules/es.regexp.exec.js';
import 'core-js/modules/es.regexp.to-string.js';
import 'core-js/modules/es.string.match.js';
import 'core-js/modules/es.string.replace.js';
import t from '@babel/runtime-corejs3/core-js/array/is-array';
import i from '@babel/runtime-corejs3/core-js/object/keys';
import r from '@babel/runtime-corejs3/core-js/instance/for-each';
import n from '@babel/runtime-corejs3/core-js/object/define-property';
import l from '@babel/runtime-corejs3/core-js/object/define-properties';
import s from '@babel/runtime-corejs3/core-js/object/get-own-property-descriptors';
import a from '@babel/runtime-corejs3/core-js/object/get-own-property-descriptor';
import o from '@babel/runtime-corejs3/core-js/object/get-own-property-symbols';
import 'core-js/modules/es.string.split.js';
import u from '@babel/runtime-corejs3/core-js/instance/concat';
import c from '@babel/runtime-corejs3/core-js/instance/filter';
import h from '@babel/runtime-corejs3/core-js/instance/find';
import m from '@babel/runtime-corejs3/core-js/json/stringify';
import p from '@babel/runtime-corejs3/core-js/instance/includes';
import f from '@babel/runtime-corejs3/helpers/esm/defineProperty';
import d from '@babel/runtime-corejs3/core-js/instance/map';
import 'core-js/modules/es.symbol.js';
import 'core-js/modules/es.symbol.description.js';
import v from '@babel/runtime-corejs3/core-js/parse-int';
import 'core-js/modules/es.number.constructor.js';
import b from '@babel/runtime-corejs3/core-js/instance/slice';
import y from '@babel/runtime-corejs3/core-js/parse-float';
import 'core-js/modules/es.array.iterator.js';
import 'core-js/modules/es.object.to-string.js';
import 'core-js/modules/es.promise.js';
import 'core-js/modules/es.string.iterator.js';
import 'core-js/modules/web.dom-collections.iterator.js';
import S from '@babel/runtime-corejs3/helpers/esm/toConsumableArray';
import g from '@babel/runtime-corejs3/regenerator';
import 'regenerator-runtime/runtime.js';
import O from '@babel/runtime-corejs3/helpers/esm/asyncToGenerator';
import x from '@babel/runtime-corejs3/core-js/promise';
import j from '@babel/runtime-corejs3/core-js/get-iterator';
import P from '@babel/runtime-corejs3/core-js/get-iterator-method';
import I from '@babel/runtime-corejs3/core-js/symbol';
import k from '@babel/runtime-corejs3/core-js/array/from';
import 'core-js/modules/es.array.filter.js';
import 'core-js/modules/es.string.search.js';
import w from '@babel/runtime-corejs3/core-js/instance/starts-with';
import C from '@babel/runtime-corejs3/core-js/instance/index-of';
import T from '@babel/runtime-corejs3/core-js/instance/reverse';
import D from '@babel/runtime-corejs3/core-js/instance/ends-with';
import V from '@babel/runtime-corejs3/core-js/instance/reduce';
import L from 'vue-runtime-helpers/dist/normalize-component.mjs';
import {
    VAvatar as $,
    VAutocomplete as K,
    VBtn as q,
    VCard as M,
    VCardActions as R,
    VCardText as A,
    VCardTitle as E,
    VCheckbox as F,
    VChip as U,
    VColorPicker as N,
    VCombobox as H,
    VContainer as _,
    VDatePicker as W,
    VDialog as z,
    VExpansionPanels as J,
    VExpansionPanel as B,
    VExpansionPanelHeader as G,
    VExpansionPanelContent as Z,
    VCol as Y,
    VFileInput as Q,
    VIcon as X,
    VImg as ee,
    VInput as te,
    VRow as ie,
    VListItemContent as re,
    VListItemTitle as ne,
    VMenu as le,
    VRadio as se,
    VRadioGroup as ae,
    VRangeSlider as oe,
    VSelect as ue,
    VSlider as ce,
    VSpacer as he,
    VSubheader as me,
    VSwitch as pe,
    VTabs as fe,
    VTab as de,
    VTabItem as ve,
    VTextarea as be,
    VTextField as ye,
    VTimePicker as Se,
    VTooltip as ge,
} from 'vuetify/lib';
var Oe = require('property-expr'),
    xe = {};
function je(e, t) {
    var r = i(e);
    if (o) {
        var n = o(e);
        t &&
            (n = c(n).call(n, function (t) {
                return a(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Pe(e) {
    for (var t = arguments, i = 1; i < arguments.length; i++) {
        var o,
            u = null != t[i] ? t[i] : {};
        if (i % 2)
            r((o = je(Object(u), !0))).call(o, function (t) {
                f(e, t, u[t]);
            });
        else if (s) l(e, s(u));
        else {
            var c;
            r((c = je(Object(u)))).call(c, function (t) {
                n(e, t, a(u, t));
            });
        }
    }
    return e;
}
(xe.cache = {}),
    (xe.extendtoken = '$extend'),
    (xe.reftoken = '$ref'),
    (xe.pathtoken = '#'),
    (xe.debug = !1),
    (xe.clone = function (t) {
        var i, r;
        if (null === t || 'object' !== e(t) || 'function' == typeof t) return t;
        for (i in ((r = t.constructor()), t)) r[i] = xe.clone(t[i]);
        return r;
    }),
    (xe.findIds = function (t, i) {
        var r, n, l, s;
        for (n in ((r = !1), (l = {}), t))
            (s = t[n]),
                null != t.id && (r = t.id),
                r && 'id' !== n && (l[n] = s),
                'object' === e(s) && xe.findIds(s, i);
        if (r) return (i[r] = l), l;
    }),
    (xe.get_json_pointer = function (e, t, n) {
        var l, s, a;
        (s = e
            .replace(/\\\//, '#SLASH#')
            .replace(/\//g, '.')
            .replace(/#SLASH#/, '/')),
            r((l = i(n))).call(l, function (e) {
                s = s.replace(e, n[e]);
            }),
            '.' === (s = s.replace(new RegExp('^' + xe.pathtoken), ''))[0] && (s = s.substr(1, s.length - 1));
        try {
            xe.debug, (a = Oe.getter(s)(t));
        } catch (e) {
            a = '';
        }
        return a;
    }),
    (xe.replace = function (r, n, l, s) {
        var a, o, u, c, h, m;
        for (a in ((h = []), r))
            null != (m = r[a]) && null != m[xe.reftoken]
                ? ((o = m[xe.reftoken]),
                  i(m).length,
                  t(o)
                      ? (o = xe.replace(o, n, l, s))
                      : null != n[o]
                      ? (r[a] = n[o])
                      : String(o).match(new RegExp('^' + xe.pathtoken)) && (r[a] = xe.get_json_pointer(o, l, s)),
                  null != (null != (u = r[a]) ? u.length : void 0) &&
                      0 === (null != (c = r[a]) ? c.length : void 0) &&
                      xe.debug,
                  h.push(void 0))
                : 'object' === e(m)
                ? h.push(xe.replace(m, n, l, s))
                : h.push(void 0);
        return h;
    }),
    (xe.extend = function (t, i) {
        var r, n, l, s, a, o;
        if ('object' === e(t)) {
            for (r in ((l = []), t)) {
                if (((o = t[r]), r === xe.extendtoken && null != o[xe.reftoken])) {
                    for (s in ((n = xe.get_json_pointer(o[xe.reftoken], t, i)), o))
                        (a = o[s]), s !== xe.reftoken && (n[s] = a);
                    delete t[r];
                }
                'object' === e(o) ? l.push((o = xe.extend(o))) : l.push(void 0);
            }
            return l;
        }
    }),
    (xe.resolve = function (e, t) {
        var r;
        return (r = {}), xe.findIds(e, r), xe.debug && i(r).length, xe.replace(e, r, e, t), e;
    }),
    (xe.evaluate = function (t, i, r) {
        var n, l, s;
        for (n in (null == r && (r = xe.evaluateStr), (l = xe.clone(t))))
            'string' == typeof (s = l[n]) && (t[n] = r(s, i)), 'object' === e(s) && (t[n] = xe.evaluate(s, i));
        return t;
    }),
    (xe.evaluateStr = function (e, t) {
        if ('string' != typeof e) return e;
        if ('{' !== e[0] || '}' !== e[e.length - 1])
            return e.replace(/(\{)(.*?)(\})/g, function (e, i, r) {
                var n;
                if (((n = ''), null == t || null == r)) return n;
                if (null != t[r] && 'function' == typeof t[r]) n = t[r]();
                else if (null != t[r]) n = t[r];
                else {
                    try {
                        (r = r.replace(new RegExp('^' + xe.pathtoken + '/'), '').replace(/\//g, '.')),
                            (n = Oe.getter(r)(t));
                    } catch (e) {
                        (err = e), (n = '');
                    }
                    null == n && (n = '');
                }
                return xe.evaluateStr(n, t), n;
            });
        try {
            return Oe.getter(e.replace(/^{/, '').replace(/}$/, ''))(t);
        } catch (e) {
            return null;
        }
    });
var Ie = {},
    ke = function (e) {
        var t;
        return d((t = i(e || {}))).call(t, function (t) {
            return Pe(Pe({}, e[t]), {}, { key: t });
        });
    };
Ie.prepareFullSchema = function (n, l) {
    var s,
        a,
        o,
        f,
        d = JSON.parse(m(n));
    (d.pattern && (d.patternRegexp = new RegExp(d.pattern)), t(d.type)) &&
        ((d.nullable = p((s = d.type)).call(s, 'null')),
        (d.type = h((a = d.type)).call(a, function (e) {
            return 'null' !== e;
        })),
        d.nullable &&
            d.enum &&
            (d.enum = c((o = d.enum)).call(o, function (e) {
                return null !== e;
            })));
    if ('object' !== d.type) return d;
    ((d.properties = JSON.parse(m(ke(d.properties)))),
    (d.required = d.required || []),
    (d.dependencies = d.dependencies || {}),
    d.dependencies) &&
        r((f = i(d.dependencies))).call(f, function (r) {
            var n,
                s,
                a,
                o,
                c,
                h = d.dependencies[r];
            if (l) {
                var m = (function (e, t) {
                    for (var i = t.split('.'), r = 0; r < i.length; r++) {
                        var n;
                        if (p((n = [null, void 0])).call(n, e)) break;
                        e = e[i[r]];
                    }
                    return e;
                })(l, r);
                p((n = [null, void 0, !1])).call(n, m) ||
                    (t(m) && 0 === m.length) ||
                    ('object' === e(m) && 0 === i(m).length) ||
                    ((d.required = u((s = d.required)).call(s, h.required || [])),
                    (d.properties = u((a = d.properties)).call(a, ke(h.properties))),
                    h.oneOf && (d.oneOf = u((o = d.oneOf || [])).call(o, h.oneOf)),
                    h.allOf && (d.allOf = u((c = d.allOf || [])).call(c, h.allOf)));
            }
        });
    return d;
};
var we = {
        locale: 'en',
        rootDisplay: '',
        objectContainerClass: '',
        sectionsClass: 'pl-2 pt-2',
        sectionsTitlesClasses: ['title', 'subtitle-1', 'subtitle-2'],
        childrenClass: 'pr-2',
        fieldProps: {},
        fieldColProps: { cols: 12 },
        textFieldProps: {},
        textareaProps: { filled: !0 },
        numberProps: {},
        sliderProps: {},
        checkboxProps: {},
        switchProps: {},
        comboboxProps: {},
        selectProps: {},
        fileInputProps: {},
        radioGroupProps: {},
        radioItemProps: {},
        tabsProps: { grow: !0 },
        expansionPanelsProps: { mandatory: !0 },
        dialogProps: { maxWidth: 500 },
        dialogCardProps: {},
        colorPickerProps: {},
        timePickerProps: {},
        datePickerProps: { scrollable: !0 },
        arrayItemCardProps: { tile: !0 },
        arrayItemColProps: { cols: 12 },
        removeAdditionalProperties: !0,
        disableAll: !1,
        hideReadOnly: !1,
        deleteReadOnly: !1,
        filesAsDataUrl: !1,
        hideTooltips: !1,
        disableSorting: !1,
        context: {},
        rules: {},
        initialValidation: 'defined',
        idPrefix: '',
        markdownit: {},
    },
    Ce = {
        en: {
            required: 'This information is required',
            noData: 'No matching value found',
            search: 'Search...',
            minimum: 'Value must be more than {minimum}',
            maximum: 'Value must be less than {maximum}',
            minLength: '{minLength} characters minimum',
            maxLength: '{maxLength} characters maximum',
            minItems: 'No less than {minItems} items',
            maxItems: 'No more than {maxItems} items',
            pattern: 'The expected pattern is not satisfied',
        },
        fr: {
            required: 'Cette information est obligatoire',
            noData: 'Aucun élément correspondant',
            search: 'Recherchez...',
            minimum: 'La valeur doit être supérieure à {minimum}',
            maximum: 'La valeur doit être inférieure à {maximum}',
            minLength: '{minLength} caractères minimum',
            maxLength: '{maxLength} caractères maximum',
            minItems: 'Au moins {minItems} éléments',
            maxItems: 'Au plus {maxItems} éléments',
            pattern: "Le format attendu n'est pas respecté",
        },
        es: {
            required: 'Esta información es requerida',
            noData: 'No se encontraron valores coincidentes',
            search: 'Buscar...',
            minimum: 'El valor debe ser mayor que {minimum}',
            maximum: 'El valor debe ser inferior a {maximum}',
            minLength: '{minLength} caracteres mínimo',
            maxLength: '{maxLength} caractères máximo',
            minItems: 'Al menos {minItems} articulos',
            maxItems: 'Hasta {maxItems} articulos',
            pattern: 'El formato esperado no se respeta',
        },
        de: {
            required: 'Diese Informationen sind erforderlich',
            noData: 'Keine passenden Artikel',
            search: 'Suche...',
            minimum: 'Der Wert muss größer als {minimum} sein',
            maximum: 'Der Wert muss kleiner als {maximum} sein',
            minLength: 'Mindestens {minLength} Zeichen',
            maxLength: 'Maximal {maxLength} Zeichen',
            minItems: 'Mindestens {minItems} Elemente',
            maxItems: 'Bis zu {maxItems} Artikel',
            pattern: 'Das erwartete Format wird nicht eingehalten',
        },
        ar: {
            required: 'هذه المعلومة مطلوبة',
            noData: 'لم يتم العثور على قيمة',
            search: 'جاري البحث...',
            minimum: '{minimum} القيمة يجب أن تكون أكبر من',
            maximum: '{maximum} القيمة يجب أن تكون أقل من',
            minLength: '{minLength} الحد الأدنى للحروف المطلوبة هو',
            maxLength: '{maxLength} الحد الأقصى للحروف المطلوبة هو',
            minItems: 'قطع {minItems} لا يمكن اختيار أقل من ',
            maxItems: 'قطع {maxItems} لا يمكن اختيار أكثر من ',
            pattern: 'لا يوجد تشابه مع النموذج المطلوب',
        },
        tr: {
            required: 'Zorunlu alan',
            noData: 'Bilgi yok',
            search: 'Arıyor...',
            minimum: 'Değer {minimum} dan büyük olmalı',
            maximum: 'Değer {maximum} dan küçük olmalı',
            minLength: '{minLength} asgari karakter sayısı',
            maxLength: '{maxLength} azami  karakter sayısı',
            minItems: 'En az seçenek sayısı {minItems}',
            maxItems: 'En çok seçenek sayısı {maxItems}',
            pattern: 'İstenilen paten tutmuyor',
        },
        nl: {
            required: 'Deze informatie is vereist',
            noData: 'Geen overeenkomstig resultaat gevonden',
            search: 'Zoeken...',
            minimum: 'Waarde moet meer zijn dan {minimum}',
            maximum: 'Waarde moet minder zijn dan {maximum}',
            minLength: 'Minimaal {minLength} tekens',
            maxLength: 'Maximaal {maxLength} tekens',
            minItems: 'Minimaal {minItems} antwoorden',
            maxItems: 'Maximaal {maxItems} antwoorden',
            pattern: 'Invoer voldoet niet aan verwachte patroon',
        },
    },
    Te = {
        time: function (e, t) {
            var i,
                r = new Date(u((i = ''.concat(new Date().toISOString().split('T')[0], 'T'))).call(i, e));
            return new Date(r.getTime() + 6e4 * r.getTimezoneOffset()).toLocaleTimeString(t);
        },
        date: function (e, t) {
            var i = new Date(e);
            return new Date(i.getTime() + 6e4 * i.getTimezoneOffset()).toLocaleDateString(t);
        },
        'date-time': function (e, t) {
            return new Date(e).toLocaleString(t);
        },
    },
    De = {
        mdi: {
            calendar: 'mdi-calendar',
            clock: 'mdi-clock',
            info: 'mdi-information',
            add: 'mdi-plus',
            edit: 'mdi-pencil',
            delete: 'mdi-delete',
        },
        md: { calendar: 'event', clock: 'clock', info: 'info', add: 'add', edit: 'create', delete: 'delete' },
        fa: {
            calendar: 'fa-calendar',
            clock: 'fa-clock',
            info: 'fa-info',
            add: 'fa-plus',
            edit: 'fa-edit',
            delete: 'fa-trash',
        },
    };
function Ve(e, t) {
    var r = i(e);
    if (o) {
        var n = o(e);
        t &&
            (n = c(n).call(n, function (t) {
                return a(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Le(e) {
    for (var t = arguments, i = 1; i < arguments.length; i++) {
        var o,
            u = null != t[i] ? t[i] : {};
        if (i % 2)
            r((o = Ve(Object(u), !0))).call(o, function (t) {
                f(e, t, u[t]);
            });
        else if (s) l(e, s(u));
        else {
            var c;
            r((c = Ve(Object(u)))).call(c, function (t) {
                n(e, t, a(u, t));
            });
        }
    }
    return e;
}
var $e = {
    data: function () {
        return { currentOneOf: null, currentTab: null, showCurrentOneOf: !0, subModels: {} };
    },
    computed: {
        subSchemas: function () {
            return this.fullSchema.oneOf || this.fullSchema.anyOf;
        },
        subSchemasConstProp: function () {
            var e;
            if (this.subSchemas) {
                var t = this.subSchemas[0].properties,
                    r = h((e = i(t))).call(e, function (e) {
                        return !!t[e].const;
                    });
                if (r)
                    return Le(
                        Le({}, t[r]),
                        {},
                        { key: r, htmlDescription: this.fullOptions.markdown(t[r].description || '') }
                    );
            }
        },
        subSchemasRequired: function () {
            var e,
                t = this;
            return (
                !(!this.subSchemas || !this.subSchemasConstProp) &&
                (!!this.fullSchema.oneOf ||
                    !!(
                        this.fullSchema.anyOf &&
                        this.fullSchema.required &&
                        h((e = this.fullSchema.required)).call(e, function (e) {
                            return e === t.oneOfConstProp.key;
                        })
                    ) ||
                    void 0)
            );
        },
        subSchemasRules: function () {
            var e = this,
                t = [];
            return (
                this.subSchemasRequired &&
                    t.push(function (t) {
                        return (null != t && '' !== t) || e.fullOptions.messages.required;
                    }),
                t
            );
        },
    },
    watch: {
        currentOneOf: function (e, t) {
            var i = this;
            (this.showCurrentOneOf = !1),
                this.$nextTick(function () {
                    (i.showCurrentOneOf = !0),
                        i.currentOneOf ? i.fixProperties() : i.$set(i.subModels, 'currentOneOf', {}),
                        i.input(i.value),
                        i.$emit('change', i.value);
                });
        },
        subModels: {
            handler: function () {
                this.fixProperties();
            },
            deep: !0,
        },
    },
    methods: {
        isSection: function (e) {
            return (
                (e.properties || e.allOf || t(e.items)) &&
                e.title &&
                !e['x-fromUrl'] &&
                !e['x-fromData'] &&
                !e.contentMediaType &&
                'file' !== e['x-display']
            );
        },
        initObjectContainer: function (e) {
            var t = this;
            if ('object' === this.fullSchema.type) {
                var i, n;
                if (this.fullSchema.allOf)
                    r((i = this.fullSchema.allOf)).call(i, function (i, r) {
                        t.$set(t.subModels, 'allOf-' + r, JSON.parse(m(e)));
                    });
                if (((this.currentOneOf = null), this.subSchemas && !this.currentOneOf && this.subSchemasConstProp))
                    if (e && e[this.subSchemasConstProp.key])
                        this.currentOneOf = h((n = this.subSchemas)).call(n, function (i) {
                            return i.properties[t.subSchemasConstProp.key].const === e[t.subSchemasConstProp.key];
                        });
                    else if (this.fullSchema.default) {
                        var l;
                        this.currentOneOf = h((l = this.subSchemas)).call(l, function (e) {
                            return (
                                e.properties[t.subSchemasConstProp.key].const ===
                                t.fullSchema.default[t.subSchemasConstProp.key]
                            );
                        });
                    }
                this.currentOneOf
                    ? this.$set(this.subModels, 'currentOneOf', JSON.parse(m(e)))
                    : this.$set(this.subModels, 'currentOneOf', {});
            }
        },
        renderSection: function (e, t, i, r) {
            if (r) {
                var n,
                    l,
                    s,
                    a,
                    o = i || t.key;
                return 'hidden' === t['x-display'] || (t.readOnly && this.fullOptions.hideReadOnly)
                    ? [r]
                    : 'expansion-panels' === this.display
                    ? [
                          e('v-expansion-panel', [
                              e(
                                  'v-expansion-panel-header',
                                  {
                                      class: {
                                          'error--text':
                                              this.childrenInputs[o] && this.childrenInputs[o].hasValidatedChildError,
                                      },
                                  },
                                  [t.title]
                              ),
                              e('v-expansion-panel-content', { props: { eager: !0 } }, [r]),
                          ]),
                      ]
                    : 'tabs' === this.display
                    ? [
                          e(
                              'v-tab',
                              {
                                  props: {
                                      href: u(
                                          (n = u((l = '#tab-'.concat(this.fullOptions.idPrefix))).call(
                                              l,
                                              this.dashKey,
                                              '-'
                                          ))
                                      ).call(n, o),
                                  },
                              },
                              [
                                  e(
                                      'span',
                                      {
                                          class: {
                                              'error--text':
                                                  this.childrenInputs[o] &&
                                                  this.childrenInputs[o].hasValidatedChildError,
                                          },
                                      },
                                      [t.title]
                                  ),
                              ]
                          ),
                          e(
                              'v-tab-item',
                              {
                                  props: {
                                      value: u(
                                          (s = u((a = 'tab-'.concat(this.fullOptions.idPrefix))).call(
                                              a,
                                              this.dashKey,
                                              '-'
                                          ))
                                      ).call(s, o),
                                      eager: !0,
                                  },
                              },
                              [e('v-card', { props: { tile: !0, flat: !0 } }, [e('v-card-text', [r])])]
                          ),
                      ]
                    : [
                          e('v-row', { class: 'ma-0 '.concat(this.fullOptions.sectionsClass) }, [
                              e(
                                  'span',
                                  {
                                      class:
                                          'py-2 ' +
                                          (this.fullOptions.sectionsTitlesClasses[this.sectionDepth] ||
                                              this.fullOptions.sectionsTitlesClasses[
                                                  this.fullOptions.sectionsTitlesClasses.length - 1
                                              ]),
                                  },
                                  [''.concat(t.title, ' ')]
                              ),
                              r,
                          ]),
                      ];
            }
        },
        renderChildProp: function (e, i, r, n, l) {
            var s = this,
                a = r ? this.subModels : this.value,
                o = r || i.key,
                u = a[o];
            return (
                void 0 === u &&
                    ((u = this.defaultValue(i)),
                    void 0 !== i.default && (u = JSON.parse(m(i.default))),
                    null != u && (this.$set(a, o, u), this.input(this.value))),
                e('h-form-renderer', {
                    props: {
                        schema: Le({ readOnly: this.fullSchema.readOnly }, i),
                        value: u,
                        modelRoot: this.modelRoot || this.value,
                        modelKey: o,
                        parentKey: ''.concat(this.fullKey, '.'),
                        options: this.fullOptions,
                        sectionDepth: n,
                    },
                    on: {
                        error: function (e) {
                            return s.$emit('error', e);
                        },
                        input: function (e) {
                            void 0 === e
                                ? t(a) && v(o) < a.length - 1
                                    ? s.$set(a, o, e)
                                    : s.$delete(a, o)
                                : s.$set(a, o, e),
                                s.$emit('input', s.value);
                        },
                        change: function (e) {
                            return s.$emit('change', s.value);
                        },
                    },
                })
            );
        },
        renderObjectContainer: function (e) {
            var i,
                n,
                l,
                s = this;
            if ('object' === this.fullSchema.type || t(this.fullSchema.items)) {
                if (((this.isObjectContainer = !0), p((i = [void 0, null])).call(i, this.value))) return [];
                var a,
                    o,
                    h,
                    m = [],
                    f = [];
                if (this.fullSchema.properties)
                    r((a = this.fullSchema.properties)).call(a, function (t) {
                        if (s.isSection(t)) {
                            var i = s.renderChildProp(e, t, null, s.sectionDepth + 1);
                            f = u(f).call(f, s.renderSection(e, t, null, i));
                        } else m.push(s.renderChildProp(e, t, null, s.sectionDepth));
                    });
                if (t(this.fullSchema.items))
                    r((o = this.fullSchema.items)).call(o, function (t, i) {
                        var r = Le(Le({}, t), {}, { key: '' + i }),
                            n = s.value.length > i || (s.fullSchema.minItems && s.fullSchema.minItems > i);
                        if (s.isSection(t)) {
                            var l = s.renderChildProp(e, r, null, s.sectionDepth + 1, n);
                            f = u(f).call(f, s.renderSection(e, r, null, l));
                        } else m.push(s.renderChildProp(e, r, null, s.sectionDepth, n));
                    });
                if (this.fullSchema.allOf)
                    r((h = this.fullSchema.allOf)).call(h, function (t, i) {
                        var r = Le(Le({}, t), {}, { type: 'object', key: '' + i });
                        if (s.isSection(t)) {
                            var n = s.renderChildProp(e, r, 'allOf-' + i, s.sectionDepth + 1);
                            f = u(f).call(f, s.renderSection(e, r, 'allOf-' + i, n));
                        } else m.push(s.renderChildProp(e, r, 'allOf-' + i, s.sectionDepth));
                    });
                if ('expansion-panels' === this.display && f.length) {
                    var d = Le(Le({}, this.fullOptions.expansionPanelsProps), this.fullSchema['x-props']);
                    f = [e('v-expansion-panels', { props: d }, f)];
                }
                if ('tabs' === this.display && f.length) {
                    var v = Le(Le({}, this.fullOptions.tabsProps), this.fullSchema['x-props']);
                    this.currentTab &&
                        this.childrenInputs[this.currentTab] &&
                        this.childrenInputs[this.currentTab].hasValidatedChildError &&
                        (v.sliderColor = 'error'),
                        (f = [
                            e(
                                'v-tabs',
                                {
                                    props: v,
                                    on: {
                                        change: function (e) {
                                            s.currentTab = e.split('-').pop();
                                        },
                                    },
                                },
                                f
                            ),
                        ]);
                }
                if (this.subSchemas && this.subSchemas.length) {
                    var b,
                        y = Le(
                            Le({}, this.commonFieldProps),
                            {},
                            {
                                value: this.currentOneOf,
                                label:
                                    (this.subSchemasConstProp && this.subSchemasConstProp.title) ||
                                    this.fullSchema.title,
                                items: c((b = this.subSchemas)).call(b, function (e) {
                                    return e.properties && e.properties[s.subSchemasConstProp.key];
                                }),
                                required: this.subSchemasRequired,
                                clearable: !this.subSchemasRequired,
                                itemValue: function (e) {
                                    return e.properties[s.subSchemasConstProp.key].const;
                                },
                                itemText: 'title',
                                rules: this.subSchemasRules,
                                returnObject: !0,
                            }
                        ),
                        S = {
                            input: function (e) {
                                s.currentOneOf = e;
                            },
                        };
                    m.push(e('v-select', { props: y, on: S }, [this.renderTooltip(e, 'append-outer')])),
                        this.currentOneOf &&
                            this.showCurrentOneOf &&
                            m.push(
                                this.renderChildProp(
                                    e,
                                    Le(Le({}, this.currentOneOf), {}, { type: 'object', title: null }),
                                    'currentOneOf',
                                    this.sectionDepth + 1
                                )
                            );
                }
                return [
                    e(
                        'v-row',
                        { class: 'ma-0 '.concat(this.fullOptions.objectContainerClass) },
                        u(
                            (n = u(
                                (l = [
                                    this.fullSchema.description &&
                                        e('v-col', {
                                            props: { cols: 12 },
                                            class: { 'pa-0': !0 },
                                            domProps: { innerHTML: this.htmlDescription },
                                        }),
                                ])
                            ).call(l, m))
                        ).call(n, f)
                    ),
                ];
            }
        },
    },
};
function Ke(e, t) {
    var r = i(e);
    if (o) {
        var n = o(e);
        t &&
            (n = c(n).call(n, function (t) {
                return a(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function qe(e) {
    for (var t = arguments, i = 1; i < arguments.length; i++) {
        var o,
            u = null != t[i] ? t[i] : {};
        if (i % 2)
            r((o = Ke(Object(u), !0))).call(o, function (t) {
                f(e, t, u[t]);
            });
        else if (s) l(e, s(u));
        else {
            var c;
            r((c = Ke(Object(u)))).call(c, function (t) {
                n(e, t, a(u, t));
            });
        }
    }
    return e;
}
var Me = function (e) {
        var t = '' + e;
        return 1 === t.length ? '0' + t : t;
    },
    Re = function (e) {
        var t = new Date(),
            i = e[0].split('-');
        t.setFullYear(Number(i[0])), t.setMonth(Number(i[1]) - 1), t.setDate(Number(i[2]));
        var r = e[1].split(':');
        return (
            t.setHours(Number(r[0] || '00')),
            t.setMinutes(Number(r[1] || '00')),
            t.setSeconds(0),
            (function (e) {
                var t,
                    i,
                    r,
                    n,
                    l,
                    s,
                    a,
                    o,
                    c = e.getTimezoneOffset(),
                    h = u((t = ''.concat(Me(v(Math.abs(c / 60))), ':'))).call(t, Me(Math.abs(c % 60)));
                return (
                    (o = c < 0 ? '+'.concat(h) : c > 0 ? '-'.concat(h) : 'Z'),
                    u(
                        (i = u(
                            (r = u(
                                (n = u(
                                    (l = u(
                                        (s = u((a = ''.concat(e.getFullYear(), '-'))).call(
                                            a,
                                            Me(e.getMonth() + 1),
                                            '-'
                                        ))
                                    ).call(s, Me(e.getDate()), 'T'))
                                ).call(l, Me(e.getHours()), ':'))
                            ).call(n, Me(e.getMinutes()), ':'))
                        ).call(r, Me(e.getSeconds())))
                    ).call(i, o)
                );
            })(t)
        );
    },
    Ae = function (e) {
        return e + ':00Z';
    },
    Ee = {
        data: function () {
            return { dateProp: { tab: 'tab-date', menu: !1, parts: [null, null], lastValue: null } };
        },
        methods: {
            renderDateProp: function (e) {
                var t,
                    i = this;
                if (
                    'string' === this.fullSchema.type &&
                    p((t = ['date', 'date-time', 'time'])).call(t, this.fullSchema.format)
                ) {
                    var r,
                        n,
                        l,
                        s,
                        a,
                        o,
                        c = this.fullOptions.icons.calendar;
                    if ('time' === this.fullSchema.format)
                        (r = e('v-time-picker', {
                            props: qe(
                                { value: ((o = this.value), o ? b(o).call(o, 0, 5) : '') },
                                this.fullSchema['x-props']
                            ),
                            on: {
                                input: function (e) {
                                    return i.input(Ae(e));
                                },
                                change: function (e) {
                                    return i.change(Ae(e));
                                },
                            },
                        })),
                            (c = this.fullOptions.icons.clock);
                    else if ('date' === this.fullSchema.format)
                        r = e('v-date-picker', {
                            props: qe({ value: this.value }, this.fullSchema['x-props']),
                            on: {
                                input: function (e) {
                                    i.input(e), (i.dateProp.menu = !1);
                                },
                                change: function (e) {
                                    return i.change(e);
                                },
                            },
                        });
                    else {
                        this.value !== this.dateProp.lastValue &&
                            (this.dateProp.parts =
                                ((n = new Date(this.value)),
                                [
                                    u(
                                        (l = u((s = ''.concat(n.getFullYear(), '-'))).call(
                                            s,
                                            Me(n.getMonth() + 1),
                                            '-'
                                        ))
                                    ).call(l, Me(n.getDate())),
                                    u((a = ''.concat(Me(n.getHours()), ':'))).call(a, Me(n.getMinutes())),
                                ])),
                            (this.dateProp.lastValue = this.value);
                        var h = function () {
                                if (i.dateProp.parts[1]) {
                                    var e = Re(i.dateProp.parts);
                                    i.input(e), i.change(e);
                                }
                            },
                            m = [
                                e('v-tab', { props: { href: '#tab-date' } }, [
                                    e('v-icon', [this.fullOptions.icons.calendar]),
                                ]),
                                e('v-tab', { props: { href: '#tab-time', disabled: !this.dateProp.parts[0] } }, [
                                    e('v-icon', [this.fullOptions.icons.clock]),
                                ]),
                                e('v-tab-item', { props: { value: 'tab-date' } }, [
                                    e('v-date-picker', {
                                        props: qe(
                                            qe({}, this.fullOptions.datePickerProps),
                                            {},
                                            { locale: this.fullOptions.locale, value: this.dateProp.parts[0] }
                                        ),
                                        on: {
                                            input: function (e) {
                                                (i.dateProp.parts[0] = e), (i.dateProp.tab = 'tab-time'), h();
                                            },
                                        },
                                    }),
                                ]),
                                e('v-tab-item', { props: { value: 'tab-time' } }, [
                                    e('v-time-picker', {
                                        props: qe(
                                            qe({}, this.fullOptions.timePickerProps),
                                            {},
                                            { locale: this.fullOptions.locale, value: this.dateProp.parts[1] }
                                        ),
                                        on: {
                                            input: function (e) {
                                                (i.dateProp.parts[1] = e), h();
                                            },
                                        },
                                    }),
                                ]),
                            ];
                        r = e(
                            'v-tabs',
                            {
                                props: { grow: !0, value: this.dateProp.tab },
                                on: {
                                    input: function (e) {
                                        i.dateProp.tab = e;
                                    },
                                },
                                class: 'vjsf-date-time',
                            },
                            m
                        );
                    }
                    var f = {
                        activator: function (t) {
                            var r = t.on;
                            return e(
                                'v-text-field',
                                {
                                    props: qe(
                                        qe({}, i.commonFieldProps),
                                        {},
                                        {
                                            value: i.formattedValue,
                                            clearable: !i.required,
                                            readonly: !0,
                                            prependIcon: c,
                                        }
                                    ),
                                    on: qe(
                                        qe({}, r),
                                        {},
                                        {
                                            input: function (e) {
                                                return i.input(e);
                                            },
                                            change: function (e) {
                                                return i.change(e);
                                            },
                                        }
                                    ),
                                },
                                [i.renderTooltip(e, 'append-outer')]
                            );
                        },
                    };
                    return [
                        e(
                            'v-menu',
                            {
                                scopedSlots: f,
                                props: {
                                    value: this.dateProp.menu,
                                    disabled: this.disabled,
                                    closeOnContentClick: !1,
                                    nudgeRight: 40,
                                    transition: 'scale-transition',
                                    offsetY: !0,
                                    fullWidth: !0,
                                    minWidth: '290px',
                                },
                                on: {
                                    input: function (e) {
                                        (i.dateProp.menu = e), (i.dateProp.tab = 'tab-date');
                                    },
                                },
                            },
                            [r]
                        ),
                    ];
                }
            },
        },
    };
function Fe(e, t) {
    var r = i(e);
    if (o) {
        var n = o(e);
        t &&
            (n = c(n).call(n, function (t) {
                return a(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Ue(e) {
    for (var t = arguments, i = 1; i < arguments.length; i++) {
        var o,
            u = null != t[i] ? t[i] : {};
        if (i % 2)
            r((o = Fe(Object(u), !0))).call(o, function (t) {
                f(e, t, u[t]);
            });
        else if (s) l(e, s(u));
        else {
            var c;
            r((c = Fe(Object(u)))).call(c, function (t) {
                n(e, t, a(u, t));
            });
        }
    }
    return e;
}
var Ne = {
    computed: {
        isSimpleProp: function () {
            var e, t;
            return (
                'string' === this.fullSchema.type ||
                p((e = ['number', 'integer'])).call(e, this.fullSchema.type) ||
                'boolean' === this.fullSchema.type ||
                ('array' === this.fullSchema.type &&
                    p((t = ['string', 'number', 'integer'])).call(t, this.fullSchema.items.type))
            );
        },
    },
    methods: {
        renderSimpleProp: function (e) {
            var t,
                i,
                r = this;
            if (this.isSimpleProp) {
                var n = Ue({}, this.commonFieldProps),
                    l = [],
                    s = {},
                    a = {
                        input: function (e) {
                            return r.input(e);
                        },
                        change: function (e) {
                            return r.change(e);
                        },
                    };
                if (
                    (p((t = ['number', 'integer'])).call(t, this.fullSchema.type) &&
                        (a.input = function (e) {
                            r.input('integer' === r.fullSchema.type ? v(e, 10) : y(e));
                        }),
                    'boolean' === this.fullSchema.type &&
                        (a.change = function (e) {
                            r.input(e || !1), r.change(e || !1);
                        }),
                    'array' === this.fullSchema.type &&
                        p((i = ['string', 'number', 'integer'])).call(i, this.fullSchema.items.type) &&
                        'string' !== this.fullSchema.items.type &&
                        ((n.type = 'number'),
                        (a.input = function (e) {
                            var t,
                                i = c(
                                    (t = d(e).call(e, function (e) {
                                        return 'integer' === r.fullSchema.items.type ? v(e, 10) : y(e);
                                    }))
                                ).call(t, function (e) {
                                    return !isNaN(e);
                                });
                            r.input(i);
                        })),
                    this.htmlDescription)
                ) {
                    l.push(this.renderTooltip(e, 'append-outer'));
                }
                var o = this.fullSchema['x-rules'];
                return o
                    ? [
                          e('validation-provider', {
                              props: { name: n.label, rules: o },
                              scopedSlots: {
                                  default: function (t) {
                                      var i = t.errors;
                                      return e(
                                          r.fullSchema.tag,
                                          {
                                              props: Ue(Ue({}, n), {}, { required: !0, 'error-messages': i }),
                                              on: a,
                                              scopedSlots: s,
                                          },
                                          l
                                      );
                                  },
                              },
                          }),
                      ]
                    : [e(this.fullSchema.tag, { props: n, on: a, scopedSlots: s }, l)];
            }
        },
    },
};
function He(e, t) {
    var r = i(e);
    if (o) {
        var n = o(e);
        t &&
            (n = c(n).call(n, function (t) {
                return a(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function _e(e) {
    for (var t = arguments, i = 1; i < arguments.length; i++) {
        var o,
            u = null != t[i] ? t[i] : {};
        if (i % 2)
            r((o = He(Object(u), !0))).call(o, function (t) {
                f(e, t, u[t]);
            });
        else if (s) l(e, s(u));
        else {
            var c;
            r((c = He(Object(u)))).call(c, function (t) {
                n(e, t, a(u, t));
            });
        }
    }
    return e;
}
var We = function (e) {
        return new x(function (t) {
            var i = new FileReader();
            (i.onload = function () {
                return t(i.result);
            }),
                i.readAsDataURL(e);
        });
    },
    ze = (function () {
        var e = O(
            g.mark(function e(t, i, r) {
                var n, l;
                return g.wrap(function (e) {
                    for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                if (
                                    ((n = t),
                                    !(
                                        'string' === i.type ||
                                        (i.properties.data && 'string' === i.properties.data.type)
                                    ))
                                ) {
                                    e.next = 7;
                                    break;
                                }
                                return (e.next = 5), We(t);
                            case 5:
                                (l = e.sent), (n = r ? l : l.split(';base64,')[1]);
                            case 7:
                                if ('string' !== i.type) {
                                    e.next = 9;
                                    break;
                                }
                                return e.abrupt('return', n);
                            case 9:
                                return e.abrupt('return', {
                                    name: t.name,
                                    lastModified: new Date(t.lastModified).toISOString(),
                                    size: t.size,
                                    type: t.type,
                                    data: n,
                                });
                            case 10:
                            case 'end':
                                return e.stop();
                        }
                }, e);
            })
        );
        return function (t, i, r) {
            return e.apply(this, arguments);
        };
    })(),
    Je = {
        computed: {
            isFileProp: function () {
                return (
                    !(
                        'string' !== this.fullSchema.type ||
                        (!this.fullSchema.contentMediaType && 'file' !== this.display)
                    ) ||
                    !(
                        'array' !== this.fullSchema.type ||
                        !this.fullSchema.items ||
                        'string' !== this.fullSchema.items.type ||
                        (!this.fullSchema.items.contentMediaType &&
                            'file' !== this.display &&
                            'file' !== this.fullSchema.items['x-display'])
                    ) ||
                    !(
                        'object' !== this.fullSchema.type ||
                        (!this.fullSchema.contentMediaType && 'file' !== this.display)
                    ) ||
                    !(
                        'array' !== this.fullSchema.type ||
                        !this.fullSchema.items ||
                        'object' !== this.fullSchema.items.type ||
                        (!this.fullSchema.items.contentMediaType &&
                            'file' !== this.display &&
                            'file' !== this.fullSchema.items['x-display'])
                    )
                );
            },
        },
        created: function () {
            this.isFileProp && this.fullSchema.writeOnly;
        },
        methods: {
            renderFileProp: function (e) {
                var t = this;
                if (this.isFileProp) {
                    var i = _e(_e({}, this.commonFieldProps), this.fullOptions.fileInputProps);
                    delete i.value;
                    var r = {};
                    this.fullSchema.contentMediaType && (r.accept = this.fullSchema.contentMediaType),
                        this.fullSchema.items &&
                            this.fullSchema.items.contentMediaType &&
                            (r.accept = this.fullSchema.items.contentMediaType),
                        'array' === this.fullSchema.type && (r.multiple = !0);
                    var n,
                        l = S(this.renderPropSlots(e)),
                        s = {
                            change:
                                ((n = O(
                                    g.mark(function e(i) {
                                        var r, n;
                                        return g.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if ('array' !== t.fullSchema.type) {
                                                            e.next = 8;
                                                            break;
                                                        }
                                                        return (
                                                            (e.next = 3),
                                                            x.all(
                                                                d(i).call(i, function (e) {
                                                                    return ze(
                                                                        e,
                                                                        t.fullSchema.items,
                                                                        t.fullOptions.filesAsDataUrl
                                                                    );
                                                                })
                                                            )
                                                        );
                                                    case 3:
                                                        (r = e.sent), t.input(r), t.change(r), (e.next = 13);
                                                        break;
                                                    case 8:
                                                        return (
                                                            (e.next = 10),
                                                            ze(i, t.resolvedSchema, t.fullOptions.filesAsDataUrl)
                                                        );
                                                    case 10:
                                                        (n = e.sent), t.input(n), t.change(n);
                                                    case 13:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function (e) {
                                    return n.apply(this, arguments);
                                }),
                        };
                    return (
                        this.htmlDescription && l.push(this.renderTooltip(e, 'append-outer')),
                        [e('v-file-input', { props: i, attrs: r, on: s }, l)]
                    );
                }
            },
        },
    };
function Be(e, t) {
    var r = i(e);
    if (o) {
        var n = o(e);
        t &&
            (n = c(n).call(n, function (t) {
                return a(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Ge(e) {
    for (var t = arguments, i = 1; i < arguments.length; i++) {
        var o,
            u = null != t[i] ? t[i] : {};
        if (i % 2)
            r((o = Be(Object(u), !0))).call(o, function (t) {
                f(e, t, u[t]);
            });
        else if (s) l(e, s(u));
        else {
            var c;
            r((c = Be(Object(u)))).call(c, function (t) {
                n(e, t, a(u, t));
            });
        }
    }
    return e;
}
var Ze = {
        computed: {
            isColorProp: function () {
                return (
                    'string' === this.fullSchema.type &&
                    ('hexcolor' === this.fullSchema.format || 'color-picker' === this.display)
                );
            },
        },
        methods: {
            renderColorProp: function (e) {
                var t = this;
                if (this.isColorProp) {
                    var i = [this.renderTooltip(e, 'append')];
                    return (
                        i.push(
                            e('v-menu', {
                                props: { closeOnContentClick: !1, closeOneClick: !0, direction: 'bottom', offsetY: !0 },
                                scopedSlots: {
                                    activator: function (i) {
                                        var r = i.on;
                                        return e('div', {
                                            on: r,
                                            style: 'background-color: '.concat(t.value, ';margin-left: 10px;'),
                                            class: t.value
                                                ? 'color-picker-trigger'
                                                : 'color-picker-trigger color-picker-trigger-empty',
                                        });
                                    },
                                    default: function () {
                                        return e('v-color-picker', {
                                            props: Ge(
                                                Ge(
                                                    Ge({ flat: !0 }, t.fullOptions.colorPickerProps),
                                                    t.fullSchema['x-props']
                                                ),
                                                {},
                                                { value: t.value || '' }
                                            ),
                                            on: {
                                                input: function (e) {
                                                    t.input(e), t.change(e);
                                                },
                                            },
                                        });
                                    },
                                },
                            })
                        ),
                        [
                            e(
                                'v-input',
                                {
                                    props: Ge(
                                        {
                                            name: this.fullKey,
                                            label: this.label,
                                            required: this.required,
                                            rules: this.rules,
                                            disabled: this.disabled,
                                        },
                                        this.fullOptions.fieldProps
                                    ),
                                },
                                i
                            ),
                        ]
                    );
                }
            },
        },
    },
    Ye = {
        getSelectItems: function (t, n, l, s) {
            var a = [];
            if (t)
                if (
                    ('object' === n.type && n.properties && i(n.properties).length) ||
                    ('array' === n.type &&
                        n.items &&
                        'object' === n.items.type &&
                        n.items.properties &&
                        i(n.items.properties).length)
                ) {
                    var o,
                        u = n.properties
                            ? d((o = n.properties)).call(o, function (e) {
                                  return e.key;
                              })
                            : i(n.items.properties);
                    r(t).call(t, function (e) {
                        var t = {};
                        r(u).call(u, function (i) {
                            void 0 !== e[i] && (t[i] = e[i]);
                        }),
                            a.push(t);
                    });
                } else
                    r(t).call(t, function (t) {
                        if ('object' === e(t)) a.push(t);
                        else {
                            var i = f({}, l, t);
                            s && (i[s] = t), a.push(i);
                        }
                    });
            else;
            return a;
        },
    },
    Qe = function (e, t, i) {
        var r, n;
        return !p((r = [null, void 0])).call(r, e) && !p((n = [null, void 0])).call(n, t) && m(e[i]) === m(t[i]);
    };
function Xe(e, i) {
    var r;
    if (void 0 === I || null == P(e)) {
        if (
            t(e) ||
            (r = (function (e, t) {
                var i;
                if (!e) return;
                if ('string' == typeof e) return et(e, t);
                var r = b((i = Object.prototype.toString.call(e))).call(i, 8, -1);
                'Object' === r && e.constructor && (r = e.constructor.name);
                if ('Map' === r || 'Set' === r) return k(e);
                if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return et(e, t);
            })(e)) ||
            (i && e && 'number' == typeof e.length)
        ) {
            r && (e = r);
            var n = 0,
                l = function () {};
            return {
                s: l,
                n: function () {
                    return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                },
                e: function (e) {
                    throw e;
                },
                f: l,
            };
        }
        throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
    }
    var s,
        a = !0,
        o = !1;
    return {
        s: function () {
            r = j(e);
        },
        n: function () {
            var e = r.next();
            return (a = e.done), e;
        },
        e: function (e) {
            (o = !0), (s = e);
        },
        f: function () {
            try {
                a || null == r.return || r.return();
            } finally {
                if (o) throw s;
            }
        },
    };
}
function et(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, r = new Array(t); i < t; i++) r[i] = e[i];
    return r;
}
function tt(e, t) {
    var r = i(e);
    if (o) {
        var n = o(e);
        t &&
            (n = c(n).call(n, function (t) {
                return a(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function it(e) {
    for (var t = arguments, i = 1; i < arguments.length; i++) {
        var o,
            u = null != t[i] ? t[i] : {};
        if (i % 2)
            r((o = tt(Object(u), !0))).call(o, function (t) {
                f(e, t, u[t]);
            });
        else if (s) l(e, s(u));
        else {
            var c;
            r((c = tt(Object(u)))).call(c, function (t) {
                n(e, t, a(u, t));
            });
        }
    }
    return e;
}
(Ye.fillSelectItems = function (e, t, i, n, l) {
    if (t)
        if ('array' === e.type) {
            var s, a;
            r(
                (s = T(
                    (a = d(t).call(t, function (e) {
                        return e;
                    }))
                ).call(a))
            ).call(s, function (e) {
                var t = l ? e : f({}, n, e);
                h(i).call(i, function (e) {
                    return Qe(e, t, n);
                }) || i.push(t);
            });
        } else {
            var o = l ? t : f({}, n, t);
            h(i).call(i, function (e) {
                return Qe(e, o, n);
            }) || i.push(o);
        }
}),
    (Ye.fillList = function (e, t, i, n) {
        if (t)
            return i.length
                ? (r(i).call(i, function (e) {
                      h(t).call(t, function (t) {
                          return Qe(e, t, n);
                      }) || t.push(e);
                  }),
                  r(t).call(t, function (e, r) {
                      h(i).call(i, function (t) {
                          return Qe(t, e, n);
                      }) || (t[r] = null);
                  }),
                  c(t).call(t, function (e) {
                      return !!e;
                  }))
                : [];
    });
var rt = require('match-all'),
    nt = require('debounce');
function lt(e, t) {
    var r = i(e);
    if (o) {
        var n = o(e);
        t &&
            (n = c(n).call(n, function (t) {
                return a(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function st(e) {
    for (var t = arguments, i = 1; i < arguments.length; i++) {
        var o,
            u = null != t[i] ? t[i] : {};
        if (i % 2)
            r((o = lt(Object(u), !0))).call(o, function (t) {
                f(e, t, u[t]);
            });
        else if (s) l(e, s(u));
        else {
            var c;
            r((c = lt(Object(u)))).call(c, function (t) {
                n(e, t, a(u, t));
            });
        }
    }
    return e;
}
var at = L(
    {},
    undefined,
    {
        name: 'HFormRenderer',
        components: {
            VAvatar: $,
            VAutocomplete: K,
            VBtn: q,
            VCard: M,
            VCardActions: R,
            VCardText: A,
            VCardTitle: E,
            VCheckbox: F,
            VChip: U,
            VColorPicker: N,
            VCombobox: H,
            VContainer: _,
            VDatePicker: W,
            VDialog: z,
            VExpansionPanels: J,
            VExpansionPanel: B,
            VExpansionPanelHeader: G,
            VExpansionPanelContent: Z,
            VCol: Y,
            VFileInput: Q,
            VIcon: X,
            VImg: ee,
            VInput: te,
            VRow: ie,
            VListItemContent: re,
            VListItemTitle: ne,
            VMenu: le,
            VRadio: se,
            VRadioGroup: ae,
            VRangeSlider: oe,
            VSelect: ue,
            VSlider: ce,
            VSpacer: he,
            VSubheader: me,
            VSwitch: pe,
            VTabs: fe,
            VTab: de,
            VTabItem: ve,
            VTextarea: be,
            VTextField: ye,
            VTimePicker: Se,
            VTooltip: ge,
        },
        mixins: [
            L(
                {},
                undefined,
                {
                    name: 'HAssemblyRenderder',
                    mixins: [
                        $e,
                        Ne,
                        Ee,
                        Ze,
                        {
                            data: function () {
                                return { rawSelectItems: null, selectItems: null, q: '', fromUrlParams: {} };
                            },
                            computed: {
                                isSelectProp: function () {
                                    return (
                                        'list' !== this.display &&
                                        (!!this.fullSchema.enum ||
                                            !(
                                                'array' !== this.fullSchema.type ||
                                                !this.fullSchema.items ||
                                                !this.fullSchema.items.enum
                                            ) ||
                                            !!this.oneOfSelect ||
                                            !!this.fromUrl ||
                                            !!this.fromData)
                                    );
                                },
                                oneOfSelect: function () {
                                    var e, t;
                                    return (
                                        !(
                                            'array' !== this.fullSchema.type ||
                                            !p((e = ['string', 'integer', 'number'])).call(
                                                e,
                                                this.fullSchema.items.type
                                            ) ||
                                            !this.fullSchema.items.oneOf
                                        ) ||
                                        !(
                                            !p((t = ['string', 'integer', 'number'])).call(t, this.fullSchema.type) ||
                                            !this.fullSchema.oneOf
                                        )
                                    );
                                },
                                fromUrl: function () {
                                    return this.fullSchema['x-fromUrl'];
                                },
                                fromUrlWithQuery: function () {
                                    var e;
                                    return !(
                                        !this.fullSchema['x-fromUrl'] ||
                                        -1 === C((e = this.fullSchema['x-fromUrl'])).call(e, '{q}')
                                    );
                                },
                                fromUrlKeys: function () {
                                    var e;
                                    return this.fullSchema['x-fromUrl']
                                        ? c((e = rt(this.fullSchema['x-fromUrl'], /\{(.*?)\}/g).toArray())).call(
                                              e,
                                              function (e) {
                                                  return 'q' !== e;
                                              }
                                          )
                                        : null;
                                },
                                fromData: function () {
                                    return this.fullSchema['x-fromData'];
                                },
                                itemKey: function () {
                                    return this.fullSchema['x-itemKey'] || 'key';
                                },
                                itemTitle: function () {
                                    return this.fullSchema['x-itemTitle'] || 'title';
                                },
                                itemIcon: function () {
                                    return (
                                        this.fullSchema['x-itemIcon'] || ('icon' === this.display ? this.itemKey : null)
                                    );
                                },
                                returnObject: function () {
                                    return (
                                        'object' === this.fullSchema.type ||
                                        (this.fullSchema.items && 'object' === this.fullSchema.items.type)
                                    );
                                },
                            },
                            watch: {
                                q: function () {
                                    (this.value && this.value[this.itemTitle] === this.q) || this.fetchSelectItems();
                                },
                                rawSelectItems: {
                                    handler: function () {
                                        this.updateSelectItems();
                                    },
                                    immediate: !0,
                                },
                            },
                            methods: {
                                initSelectProp: function (e) {
                                    var t,
                                        i = this;
                                    (this.fromUrlWithQuery &&
                                        e &&
                                        void 0 !== e[this.itemTitle] &&
                                        (this.q = e[this.itemTitle]),
                                    this.fromUrl && this.fetchSelectItems(),
                                    (('array' === this.fullSchema.type && this.fullSchema.items.enum) ||
                                        this.fullSchema.enum) &&
                                        (this.rawSelectItems =
                                            'array' === this.fullSchema.type
                                                ? this.fullSchema.items.enum
                                                : this.fullSchema.enum),
                                    this.oneOfSelect) &&
                                        (this.rawSelectItems = d(
                                            (t = ('array' === this.fullSchema.type
                                                ? this.fullSchema.items
                                                : this.fullSchema
                                            ).oneOf)
                                        ).call(t, function (e) {
                                            var t;
                                            return it(
                                                it({}, e),
                                                {},
                                                (f((t = {}), i.itemKey, e.const || (e.enum && e.enum[0])),
                                                f(t, i.itemTitle, e.title),
                                                t)
                                            );
                                        }));
                                    var n,
                                        l = this.modelRoot ? 'modelRoot.' : 'value.';
                                    (this.fullSchema['x-fromData'] &&
                                        this.$watch(
                                            l + this.fullSchema['x-fromData'],
                                            function (e) {
                                                i.rawSelectItems = e;
                                            },
                                            { immediate: !0 }
                                        ),
                                    this.fromUrlKeys) &&
                                        r((n = this.fromUrlKeys)).call(n, function (e) {
                                            w(e).call(e, 'context.')
                                                ? i.$watch(
                                                      'options.' + e,
                                                      function (t) {
                                                          (i.fromUrlParams[e] = t), i.fetchSelectItems();
                                                      },
                                                      { immediate: !0 }
                                                  )
                                                : i.$watch(
                                                      l + e,
                                                      function (t) {
                                                          (i.fromUrlParams[e] = t), i.fetchSelectItems();
                                                      },
                                                      { immediate: !0 }
                                                  );
                                        });
                                },
                                fetchSelectItems: function () {
                                    var e = this;
                                    if (!this.fullOptions.httpLib)
                                        return this.$emit('error', 'No http lib found to perform ajax request');
                                    (this.debouncedFetch =
                                        this.debouncedFetch ||
                                        nt(function () {
                                            var i,
                                                r = e.fullSchema['x-fromUrl'].replace('{q}', e.q || ''),
                                                n = Xe(e.fromUrlKeys);
                                            try {
                                                for (n.s(); !(i = n.n()).done; ) {
                                                    var l = i.value;
                                                    if (void 0 === e.fromUrlParams[l]) return;
                                                    r = r.replace('{'.concat(l, '}'), e.fromUrlParams[l]);
                                                }
                                            } catch (e) {
                                                n.e(e);
                                            } finally {
                                                n.f();
                                            }
                                            (e.loading = !0),
                                                e.fullOptions.httpLib
                                                    .get(r)
                                                    .then(function (i) {
                                                        var n = i.data || i.body,
                                                            l = e.fullSchema['x-itemsProp']
                                                                ? n[e.fullSchema['x-itemsProp']]
                                                                : n;
                                                        if (!t(l))
                                                            throw new Error(
                                                                'Result of http fetch '.concat(r, ' is not an array')
                                                            );
                                                        (e.rawSelectItems = l), (e.loading = !1);
                                                    })
                                                    .catch(function (t) {
                                                        e.$emit('error', t.message), (e.loading = !1);
                                                    });
                                        }, 250)),
                                        this.debouncedFetch();
                                },
                                updateSelectItems: function () {
                                    var e = Ye.getSelectItems(
                                        this.rawSelectItems,
                                        this.fullSchema,
                                        this.itemKey,
                                        this.itemIcon
                                    );
                                    'list' === this.display &&
                                        this.input(Ye.fillList(this.fullSchema, this.value, e, this.itemKey)),
                                        Ye.fillSelectItems(
                                            this.fullSchema,
                                            this.value,
                                            e,
                                            this.itemKey,
                                            this.returnObject
                                        ),
                                        m(e) !== m(this.selectItems) && (this.selectItems = e);
                                },
                                renderSelectIcon: function (e, t) {
                                    if (this.itemIcon) {
                                        var i = t[this.itemIcon];
                                        if (i) {
                                            var r = e('v-icon', null, i);
                                            return (
                                                w(i).call(i, 'http://') || w(i).call(i, 'https://')
                                                    ? (r = e('img', {
                                                          domProps: { src: i },
                                                          style: 'height:100%;width:100%;',
                                                      }))
                                                    : (w(i).call(i, '<?xml') || w(i).call(i, '<svg')) &&
                                                      (r = e('div', { domProps: { innerHTML: i } })),
                                                e('v-avatar', { props: { tile: !0, size: 20 }, class: 'mr-2' }, [r])
                                            );
                                        }
                                    }
                                },
                                renderSelectItem: function (e, t) {
                                    return e('v-list-item-content', [
                                        e('v-list-item-title', t[this.itemTitle] || t[this.itemKey]),
                                    ]);
                                },
                                renderSelectionControlItem: function (e, t) {
                                    var i = this,
                                        r = {
                                            change: function (e) {
                                                i.input(e), i.$emit('change', e);
                                            },
                                        },
                                        n = {
                                            label: t[this.itemTitle] || t[this.itemKey],
                                            value: t[this.itemKey],
                                            inputValue: this.value,
                                            multiple: 'array' === this.fullSchema.type,
                                            hideDetails: !0,
                                        };
                                    return e('v-'.concat(this.display), { props: n, on: r, class: 'pb-1' });
                                },
                                renderSelectionControlGroup: function (e) {
                                    var t,
                                        i,
                                        r,
                                        n = this,
                                        l = {
                                            change: function (e) {
                                                n.input(e), n.change(e);
                                            },
                                        },
                                        s = it(
                                            it({}, this.commonFieldProps),
                                            {},
                                            { multiple: 'array' === this.fullSchema.type, label: null }
                                        ),
                                        a = e(
                                            'legend',
                                            {
                                                class: u(
                                                    (t = 'v-label theme--'.concat(
                                                        this.theme.isDark ? 'dark' : 'light',
                                                        ' '
                                                    ))
                                                ).call(t, this.hasError ? 'error--text' : ''),
                                            },
                                            this.commonFieldProps.label
                                        ),
                                        o = d((i = this.selectItems)).call(i, function (t) {
                                            return n.renderSelectionControlItem(e, t);
                                        });
                                    return [
                                        e(
                                            'v-input',
                                            {
                                                props: s,
                                                on: l,
                                                class:
                                                    'v-input--selection-controls v-input--radio-group v-input--radio-group--column',
                                            },
                                            [
                                                e(
                                                    'div',
                                                    { class: 'v-input--radio-group__input' },
                                                    u((r = [a])).call(r, S(o))
                                                ),
                                                this.renderTooltip(e, 'append'),
                                            ]
                                        ),
                                    ];
                                },
                                renderRadioItem: function (e, t) {
                                    var i = t[this.itemTitle] || t[this.itemKey],
                                        r = t[this.itemKey];
                                    return e('v-radio', {
                                        props: it(it({}, this.fullOptions.radioItemProps), {}, { label: i, value: r }),
                                    });
                                },
                                renderRadioGroup: function (e) {
                                    var t,
                                        i,
                                        r = this,
                                        n = it(it({}, this.commonFieldProps), this.fullOptions.radioGroupProps);
                                    return [
                                        e(
                                            'v-radio-group',
                                            {
                                                props: n,
                                                on: {
                                                    change: function (e) {
                                                        r.input(e), r.change(e);
                                                    },
                                                },
                                            },
                                            u((t = [])).call(
                                                t,
                                                S(
                                                    d((i = this.selectItems)).call(i, function (t) {
                                                        return r.renderRadioItem(e, t);
                                                    })
                                                ),
                                                [this.renderTooltip(e, 'append')]
                                            )
                                        ),
                                    ];
                                },
                                renderSelectProp: function (e) {
                                    var t,
                                        i = this;
                                    if (this.isSelectProp) {
                                        if ('radio' === this.display && 'array' !== this.fullSchema.type)
                                            return this.renderRadioGroup(e);
                                        if (p((t = ['checkbox', 'switch'])).call(t, this.display))
                                            return this.renderSelectionControlGroup(e);
                                        var r = {
                                                input: function (e) {
                                                    return i.input(e);
                                                },
                                                change: function (e) {
                                                    return i.change(e);
                                                },
                                            },
                                            n = {
                                                selection: function (t) {
                                                    var r = t.item[i.itemTitle] || t.item[i.itemKey];
                                                    return (
                                                        'array' === i.fullSchema.type &&
                                                            t.index !== i.value.length - 1 &&
                                                            (r += ',&nbsp;'),
                                                        e(
                                                            'div',
                                                            {
                                                                class: {
                                                                    'v-select__selection': !0,
                                                                    'v-select__selection--comma': !0,
                                                                    'v-select__selection--disabled': i.disabled,
                                                                },
                                                            },
                                                            [
                                                                i.renderSelectIcon(e, t.item),
                                                                e('span', {
                                                                    domProps: { innerHTML: r },
                                                                    class: 'mt-1',
                                                                }),
                                                            ]
                                                        )
                                                    );
                                                },
                                                item: function (t) {
                                                    return [
                                                        i.renderSelectIcon(e, t.item),
                                                        i.renderSelectItem(e, t.item),
                                                    ];
                                                },
                                            },
                                            l = S(this.renderPropSlots(e));
                                        this.htmlDescription && l.push(this.renderTooltip(e, 'append-outer'));
                                        var s = 'v-select',
                                            a = it(
                                                it(it({}, this.commonFieldProps), this.fullOptions.selectProps),
                                                {},
                                                {
                                                    clearable: !this.required,
                                                    multiple: 'array' === this.fullSchema.type,
                                                    itemValue: this.itemKey,
                                                    items: this.selectItems,
                                                    returnObject: this.returnObject,
                                                }
                                            );
                                        return (
                                            (this.fromUrlWithQuery ||
                                                (this.rawSelectItems && this.rawSelectItems.length > 20)) &&
                                                ((s = 'v-autocomplete'),
                                                (a.noDataText = this.fullOptions.messages.noData),
                                                (a.placeholder = this.fullOptions.messages.search),
                                                this.fromUrlWithQuery
                                                    ? ((a.filter = function () {
                                                          return !0;
                                                      }),
                                                      (a.searchInput = this.q),
                                                      (r['update:search-input'] = function (e) {
                                                          i.q = e;
                                                      }))
                                                    : (a.filter = function (e, t) {
                                                          var r;
                                                          return p(
                                                              (r = (e[i.itemTitle] || e[i.itemKey]).toLowerCase())
                                                          ).call(r, t.toLowerCase());
                                                      })),
                                            (s = this.customTag ? this.customTag : s),
                                            [e(s, { props: a, on: r, scopedSlots: n }, l)]
                                        );
                                    }
                                },
                            },
                        },
                        Je,
                        {
                            data: function () {
                                return { editabledArrayProp: { currentDialog: null, editItem: null, editedItems: {} } };
                            },
                            computed: {
                                isEditableArray: function () {
                                    if (
                                        'array' === this.fullSchema.type &&
                                        this.fullSchema.items &&
                                        'object' === this.fullSchema.items.type
                                    )
                                        return !0;
                                },
                                readonlyItemSchema: function () {
                                    var e = this;
                                    if (this.fullSchema.items) {
                                        var t = JSON.parse(m(this.fullSchema.items));
                                        if (((t.readOnly = !0), this.itemTitle)) {
                                            var i, n;
                                            if (
                                                (t.properties &&
                                                    t.properties[this.itemTitle] &&
                                                    (t.properties[this.itemTitle]['x-display'] = 'hidden'),
                                                t.oneOf)
                                            )
                                                r((i = t.oneOf)).call(i, function (t) {
                                                    t.properties[e.itemTitle] &&
                                                        (t.properties[e.itemTitle]['x-display'] = 'hidden');
                                                });
                                            if (this.fullSchema.items.allOf)
                                                r((n = t.allOf)).call(n, function (t) {
                                                    t.properties[e.itemTitle] &&
                                                        (t.properties[e.itemTitle]['x-display'] = 'hidden');
                                                });
                                        }
                                        return t;
                                    }
                                },
                            },
                            watch: {},
                            methods: {
                                renderArrayItemModal: function (e, t, i) {
                                    var r,
                                        n,
                                        l = this,
                                        s = -1 === i;
                                    this.editabledArrayProp.currentDialog === i &&
                                        (D((n = this.fullOptions.idPrefix)).call(n, '--dialog--') ||
                                            (this.fullOptions.idPrefix = this.fullOptions.idPrefix + '--dialog--'),
                                        (r = e(
                                            'v-jsf',
                                            {
                                                props: {
                                                    schema: this.fullSchema.items,
                                                    value: this.editabledArrayProp.editItem,
                                                    modelRoot: this.modelRoot || this.value,
                                                    modelKey: i,
                                                    parentKey: ''.concat(this.fullKey, '.'),
                                                    options: this.fullOptions,
                                                    sectionDepth: this.sectionDepth + 1,
                                                    separateValidation: !0,
                                                },
                                                scopedSlots: this.childScopedSlots(this.fullSchema.key),
                                                on: {
                                                    error: function (e) {
                                                        return l.$emit('error', e);
                                                    },
                                                    input: function (e) {
                                                        l.editabledArrayProp.editItem = e;
                                                    },
                                                },
                                            },
                                            this.childSlots(e, this.fullSchema.key)
                                        )));
                                    var a = {
                                            activator: function () {
                                                return e(
                                                    'v-btn',
                                                    {
                                                        on: {
                                                            click: function () {
                                                                (l.editabledArrayProp.editItem = JSON.parse(m(t))),
                                                                    (l.editabledArrayProp.currentDialog = i);
                                                            },
                                                        },
                                                        attrs: {
                                                            id:
                                                                l.fullOptions.idPrefix +
                                                                l.dashKey +
                                                                '-' +
                                                                (s ? '-add' : i + '--edit') +
                                                                '-button',
                                                        },
                                                        class: { 'vjsf-array-add-button': !0, 'ml-3': s },
                                                        props: { icon: !s, fab: s, small: s, color: 'primary' },
                                                    },
                                                    [
                                                        e(
                                                            'v-icon',
                                                            s ? l.fullOptions.icons.add : l.fullOptions.icons.edit
                                                        ),
                                                    ]
                                                );
                                            },
                                        },
                                        o = function () {
                                            r.componentInstance.resetValidation(),
                                                (l.editabledArrayProp.currentDialog = null);
                                        };
                                    return e(
                                        'v-dialog',
                                        {
                                            props: st(
                                                st({}, this.fullOptions.dialogProps),
                                                {},
                                                {
                                                    value: this.editabledArrayProp.currentDialog === i,
                                                    closeOnContentClick: !1,
                                                }
                                            ),
                                            scopedSlots: a,
                                            on: { 'click:outside': o },
                                        },
                                        [
                                            e('v-card', { props: this.fullOptions.dialogCardProps }, [
                                                e('v-card-title', this.itemTitle && t[this.itemTitle]),
                                                e('v-card-text', [r]),
                                                e('v-card-actions', [
                                                    e('v-spacer'),
                                                    e(
                                                        'v-btn',
                                                        {
                                                            props: { text: !0 },
                                                            on: { click: o },
                                                            attrs: {
                                                                id:
                                                                    this.fullOptions.idPrefix +
                                                                    this.dashKey +
                                                                    '--dialog-cancel-button',
                                                            },
                                                            class: { 'vjsf-array-dialog-cancel-button': !0 },
                                                        },
                                                        'cancel'
                                                    ),
                                                    e(
                                                        'v-btn',
                                                        {
                                                            props: { color: 'primary' },
                                                            on: {
                                                                click: function () {
                                                                    r.componentInstance.validate(!0) &&
                                                                        (s
                                                                            ? ((l.editabledArrayProp.editedItems[
                                                                                  l.value.length
                                                                              ] = !0),
                                                                              l.value.push(
                                                                                  l.editabledArrayProp.editItem
                                                                              ))
                                                                            : ((l.editabledArrayProp.editedItems[
                                                                                  i
                                                                              ] = !0),
                                                                              l.$set(
                                                                                  l.value,
                                                                                  i,
                                                                                  l.editabledArrayProp.editItem
                                                                              ),
                                                                              l.$nextTick(function () {
                                                                                  return l.$refs[
                                                                                      'roItem-' + i
                                                                                  ].initFromSchema();
                                                                              })),
                                                                        l.input(l.value),
                                                                        l.$emit('change', l.value),
                                                                        (l.shouldValidate = !0),
                                                                        (l.editabledArrayProp.currentDialog = null));
                                                                },
                                                            },
                                                            attrs: {
                                                                id:
                                                                    this.fullOptions.idPrefix +
                                                                    this.dashKey +
                                                                    '--dialog-ok-button',
                                                            },
                                                            class: { 'vjsf-array-dialog-ok-button': !0 },
                                                        },
                                                        'ok'
                                                    ),
                                                ]),
                                            ]),
                                        ]
                                    );
                                },
                                renderArrayItemRO: function (e, t, i) {
                                    var r = this;
                                    return e('v-jsf', {
                                        props: {
                                            schema: this.readonlyItemSchema,
                                            value: JSON.parse(m(t)),
                                            modelRoot: this.modelRoot || this.value,
                                            modelKey: i,
                                            parentKey: ''.concat(this.fullKey, '.'),
                                            options: st(
                                                st({}, this.fullOptions),
                                                {},
                                                {
                                                    hideReadOnly: !1,
                                                    fieldProps: st(
                                                        st({}, this.fullOptions.fieldProps),
                                                        {},
                                                        { dense: !0 }
                                                    ),
                                                }
                                            ),
                                            sectionDepth: this.sectionDepth + 1,
                                            separateValidation: !0,
                                        },
                                        ref: 'roItem-' + i,
                                        on: {
                                            input: function (e) {
                                                r.editabledArrayProp.editedItems[i] || r.$set(r.value, i, e);
                                            },
                                        },
                                    });
                                },
                                renderEditableArray: function (e) {
                                    var t = this;
                                    if (this.isEditableArray) {
                                        var i = [];
                                        this.disabled ||
                                            this.fromUrl ||
                                            this.fullSchema.fromData ||
                                            i.push(
                                                this.renderArrayItemModal(
                                                    e,
                                                    this.fullSchema.items.default ||
                                                        this.defaultValue(this.fullSchema.items),
                                                    -1
                                                )
                                            );
                                        var r,
                                            n = e(
                                                'v-input',
                                                {
                                                    class: 'mt-2 pr-1',
                                                    props: {
                                                        label: this.label,
                                                        rules: this.rules,
                                                        value: this.value,
                                                        validateOnBlur: !this.shouldValidate,
                                                        hideDetails: !this.hasError,
                                                    },
                                                },
                                                i
                                            );
                                        if (this.value && this.value.length) {
                                            var l,
                                                s,
                                                a = d(
                                                    (l = c((s = this.value)).call(s, function (e) {
                                                        return !!e;
                                                    }))
                                                ).call(l, function (i, r) {
                                                    return e('v-col', { props: t.fullOptions.arrayItemColProps }, [
                                                        e('v-card', { props: t.fullOptions.arrayItemCardProps }, [
                                                            e(
                                                                'v-card-title',
                                                                { props: { primaryTitle: !0 } },
                                                                t.itemTitle && i[t.itemTitle]
                                                            ),
                                                            e('v-card-text', { class: 'pb-0' }, [
                                                                t.renderArrayItemRO(e, i, r),
                                                            ]),
                                                            e('v-card-actions', [
                                                                e('v-spacer'),
                                                                !t.disabled && t.renderArrayItemModal(e, i, r),
                                                                !t.disabled &&
                                                                    !t.fromUrl &&
                                                                    !t.fullSchema.fromData &&
                                                                    e(
                                                                        'v-btn',
                                                                        {
                                                                            props: { icon: !0, color: 'warning' },
                                                                            attrs: {
                                                                                id:
                                                                                    t.fullOptions.idPrefix +
                                                                                    t.dashKey +
                                                                                    '-' +
                                                                                    r +
                                                                                    '--delete-button',
                                                                            },
                                                                            class: { 'vjsf-array-delete-button': !0 },
                                                                            on: {
                                                                                click: function () {
                                                                                    var e,
                                                                                        r = c((e = t.value)).call(
                                                                                            e,
                                                                                            function (e) {
                                                                                                return e !== i;
                                                                                            }
                                                                                        );
                                                                                    t.input(r),
                                                                                        t.$emit('change', r),
                                                                                        (t.shouldValidate = !0),
                                                                                        n.componentInstance.validate();
                                                                                },
                                                                            },
                                                                        },
                                                                        [e('v-icon', t.fullOptions.icons.delete)]
                                                                    ),
                                                            ]),
                                                        ]),
                                                    ]);
                                                });
                                            r = e(
                                                'v-row',
                                                {
                                                    props: { gridListMd: !0 },
                                                    class: 'pt-0 px-2 ' + this.fullOptions.objectContainerClass,
                                                },
                                                this.fullOptions.disableSorting
                                                    ? a
                                                    : [
                                                          e(
                                                              'draggable',
                                                              {
                                                                  props: { value: this.value },
                                                                  class: 'row',
                                                                  style: 'cursor: move;',
                                                                  on: {
                                                                      input: function (e) {
                                                                          t.input(e),
                                                                              t.$emit('change', e),
                                                                              (t.shouldValidate = !0),
                                                                              t.$nextTick(function () {
                                                                                  for (var i = 0; i < e.length; i++)
                                                                                      t.$refs[
                                                                                          'roItem-' + i
                                                                                      ].initFromSchema();
                                                                              });
                                                                      },
                                                                  },
                                                              },
                                                              a
                                                          ),
                                                      ]
                                            );
                                        }
                                        return [n, r];
                                    }
                                },
                            },
                        },
                        {
                            data: function () {
                                return { tooltip: { show: !1, maxWidth: 200 } };
                            },
                            mounted: function () {
                                this.htmlDescription &&
                                    this.$el &&
                                    this.$el.getBoundingClientRect &&
                                    (this.tooltip.maxWidth = this.$el.getBoundingClientRect().left - 80);
                            },
                            methods: {
                                renderTooltip: function (e, t) {
                                    var i = this;
                                    if (this.htmlDescription && !this.fullOptions.hideTooltips)
                                        return e(
                                            'v-tooltip',
                                            {
                                                slot: t,
                                                props: {
                                                    value: this.tooltip.show,
                                                    left: !0,
                                                    openOnHover: !1,
                                                    openOnClick: !1,
                                                    contentClass: 'vjsf-tooltip',
                                                },
                                                scopedSlots: {
                                                    activator: function () {
                                                        return e(
                                                            'v-btn',
                                                            {
                                                                on: {
                                                                    click: function () {
                                                                        i.tooltip.show = !i.tooltip.show;
                                                                    },
                                                                },
                                                                props: { icon: !0 },
                                                                style: 'pointer-events: auto',
                                                            },
                                                            [e('v-icon', {}, i.fullOptions.icons.info)]
                                                        );
                                                    },
                                                },
                                            },
                                            [
                                                e('div', {
                                                    style: 'max-width: '.concat(this.tooltip.maxWidth, 'px'),
                                                    domProps: { innerHTML: this.htmlDescription },
                                                }),
                                            ]
                                        );
                                },
                            },
                        },
                        {
                            inject: ['form'],
                            provide: function () {
                                return { form: { register: this.register, unregister: this.unregister } };
                            },
                            props: { separateValidation: { type: Boolean, default: !1 } },
                            data: function () {
                                return { inputs: [], validated: !1, shouldValidate: !1 };
                            },
                            computed: {
                                childrenInputs: function () {
                                    var e;
                                    return V((e = this.inputs)).call(
                                        e,
                                        function (e, t, i) {
                                            return (e[t.modelKey || i] = t), e;
                                        },
                                        {}
                                    );
                                },
                                hasError: function () {
                                    var e;
                                    return (
                                        !!h((e = this.inputs)).call(e, function (e) {
                                            return e.hasError;
                                        }) || !!this.containerError
                                    );
                                },
                                hasValidatedChildError: function () {
                                    var e;
                                    return !!h((e = this.inputs)).call(e, function (e) {
                                        return (
                                            e.hasValidatedChildError ||
                                            (e.hasError && (e.validated || e.shouldValidate))
                                        );
                                    });
                                },
                            },
                            created: function () {
                                this.separateValidation || (this.form && this.form.register(this));
                            },
                            mounted: function () {
                                var e = this.fullOptions.initialValidation;
                                'all' !== e || this.modelRoot || this.validate(!0),
                                    'defined' === e &&
                                        this.initiallyDefined &&
                                        !this.isObjectContainer &&
                                        this.validate(!0);
                            },
                            beforeDestroy: function () {
                                this.separateValidation || (this.form && this.form.unregister(this));
                            },
                            methods: {
                                register: function (e) {
                                    this.inputs.push(e);
                                },
                                unregister: function (e) {
                                    var t;
                                    this.inputs = c((t = this.inputs)).call(t, function (t) {
                                        return t._uid !== e._uid;
                                    });
                                },
                                validate: function (e) {
                                    var t;
                                    return (
                                        (this.validated = !0),
                                        0 ===
                                            c((t = this.inputs)).call(t, function (t) {
                                                return !t.validate(e);
                                            }).length
                                    );
                                },
                                reset: function () {
                                    var e;
                                    r((e = this.inputs)).call(e, function (e) {
                                        return e.reset();
                                    });
                                },
                                resetValidation: function () {
                                    var e;
                                    (this.shouldValidate = !1),
                                        (this.validated = !1),
                                        r((e = this.inputs)).call(e, function (e) {
                                            return e.resetValidation();
                                        });
                                },
                            },
                        },
                    ],
                    inject: ['theme'],
                    props: {
                        value: { required: !0 },
                        schema: { type: Object, required: !0 },
                        options: { type: Object },
                        modelRoot: { type: Object },
                        modelKey: { type: [String, Number], default: 'root' },
                        parentKey: { type: String, default: '' },
                        required: { type: Boolean, default: !1 },
                        sectionDepth: { type: Number, default: 0 },
                    },
                    data: function () {
                        return { ready: !1, loading: !1 };
                    },
                    computed: {
                        fullOptions: function () {
                            var e =
                                    ('undefined' != typeof window && window) ||
                                    ('undefined' != typeof global && global) ||
                                    {},
                                t = Object.assign({}, we, this.options || {}, this.resolvedSchema['x-options'] || {});
                            (t.markdown =
                                t.markdown ||
                                (e.markdownit &&
                                    function (i) {
                                        return e.markdownit(t.markdownit).render(i);
                                    }) ||
                                function (e) {
                                    return e;
                                }),
                                (t.httpLib = t.httpLib || this.axios || this.$http || this.$axios || e.axios);
                            var i = (this.$vuetify.icons && this.$vuetify.icons.iconfont) || 'mdi';
                            return (
                                (t.icons = Object.assign({}, De[i], t.icons)),
                                (t.messages = Object.assign({}, Ce[t.locale] || Ce.en, t.messages)),
                                (t.formats = Object.assign({}, Te, t.formats)),
                                t.deleteReadOnly && (t.hideReadOnly = !0),
                                t
                            );
                        },
                        resolvedSchema: function () {
                            return 'root' === this.modelKey
                                ? xe.resolve(this.schema, {
                                      '~$locale~': (this.options && this.options.locale) || 'en',
                                  })
                                : this.schema;
                        },
                        fullSchema: function () {
                            return Ie.prepareFullSchema(this.resolvedSchema, this.value);
                        },
                        htmlDescription: function () {
                            return this.fullSchema && this.fullSchema.description
                                ? this.fullOptions.markdown(this.fullSchema.description)
                                : null;
                        },
                        fullKey: function () {
                            return (this.parentKey + this.modelKey).replace('root.', '');
                        },
                        label: function () {
                            return this.fullSchema.title || ('string' == typeof this.modelKey ? this.modelKey : '');
                        },
                        display: function () {
                            return 'root' === this.modelKey && this.fullOptions.rootDisplay
                                ? this.fullOptions.rootDisplay
                                : this.fullSchema['x-display'];
                        },
                        customTag: function () {
                            return this.fullSchema['x-tag'];
                        },
                        rules: function () {
                            return (function (e, t, i, r) {
                                var n,
                                    l,
                                    s,
                                    a = [];
                                if (
                                    (i &&
                                        a.push(function (e) {
                                            return (null != e && '' !== e) || t.messages.required;
                                        }),
                                    'array' === e.type && void 0 !== e.minItems)
                                ) {
                                    var o = t.messages.minItems.replace(
                                        '{minItems}',
                                        e.minItems.toLocaleString(t.locale)
                                    );
                                    a.push(function (t) {
                                        return !t || t.length >= e.minItems || o;
                                    });
                                }
                                if ('array' === e.type && void 0 !== e.maxItems) {
                                    var c = t.messages.maxItems.replace(
                                        '{maxItems}',
                                        e.maxItems.toLocaleString(t.locale)
                                    );
                                    a.push(function (t) {
                                        return !t || t.length <= e.maxItems || c;
                                    });
                                }
                                if ('string' === e.type && void 0 !== e.minLength) {
                                    var f = t.messages.minLength.replace(
                                        '{minLength}',
                                        e.minLength.toLocaleString(t.locale)
                                    );
                                    a.push(function (t) {
                                        return null == t || t.length >= e.minLength || f;
                                    });
                                }
                                if ('string' === e.type && void 0 !== e.maxLength) {
                                    var v = t.messages.maxLength.replace(
                                        '{maxLength}',
                                        e.maxLength.toLocaleString(t.locale)
                                    );
                                    a.push(function (t) {
                                        return null == t || t.length <= e.maxLength || v;
                                    });
                                }
                                if ('string' === e.type && void 0 !== e.patternRegexp) {
                                    var b = t.messages.pattern.replace('{pattern}', e.pattern);
                                    a.push(function (t) {
                                        return null == t || !!t.match(e.patternRegexp) || b;
                                    });
                                }
                                if (p((n = ['number', 'integer'])).call(n, e.type) && void 0 !== e.maximum) {
                                    var y = t.messages.maximum.replace('{maximum}', e.maximum.toLocaleString(t.locale));
                                    a.push(function (t) {
                                        return null == t || t <= e.maximum || y;
                                    });
                                }
                                if (p((l = ['number', 'integer'])).call(l, e.type) && void 0 !== e.minimum) {
                                    var S = t.messages.minimum.replace('{minimum}', e.minimum.toLocaleString(t.locale));
                                    a.push(function (t) {
                                        return null == t || t >= e.minimum || S;
                                    });
                                }
                                e.enum &&
                                    a.push(function (t) {
                                        var i;
                                        return (
                                            null == t ||
                                            !!h((i = e.enum)).call(i, function (e) {
                                                return m(e) === m(t);
                                            }) ||
                                            ''
                                        );
                                    }),
                                    'array' === e.type &&
                                        e.items.enum &&
                                        a.push(function (t) {
                                            return (
                                                null == t ||
                                                !h(t).call(t, function (t) {
                                                    var i;
                                                    return !h((i = e.items.enum)).call(i, function (e) {
                                                        return m(e) === m(t);
                                                    });
                                                }) ||
                                                ''
                                            );
                                        }),
                                    r &&
                                        'array' !== e.type &&
                                        a.push(function (t) {
                                            var i;
                                            return (
                                                null == t ||
                                                !!h((i = e.oneOf)).call(i, function (e) {
                                                    return e.const === t;
                                                }) ||
                                                ''
                                            );
                                        }),
                                    r &&
                                        'array' === e.type &&
                                        a.push(function (t) {
                                            return (
                                                null == t ||
                                                !h(t).call(t, function (t) {
                                                    var i;
                                                    return !h((i = e.items.oneOf)).call(i, function (e) {
                                                        return e.const === t;
                                                    });
                                                }) ||
                                                ''
                                            );
                                        });
                                var g = d((s = e['x-ruless'] || [])).call(s, function (e) {
                                    return 'string' == typeof e
                                        ? t.rules && t.rules[e]
                                        : 'function' == typeof e
                                        ? e
                                        : void 0;
                                });
                                return u(a).call(a, g);
                            })(this.fullSchema, this.fullOptions, this.required, this.isOneOfSelect);
                        },
                        disabled: function () {
                            return this.fullOptions.disableAll || this.fullSchema.readOnly;
                        },
                        slotName: function () {
                            return this.fullSchema['x-display'] && this.fullSchema['x-display'].startsWith('custom-')
                                ? this.fullSchema['x-display']
                                : this.fullKey;
                        },
                        slotParams: function () {
                            var e = this;
                            return {
                                value: this.value,
                                modelKey: this.modelKey,
                                schema: this.schema,
                                fullKey: this.fullKey,
                                fullSchema: this.fullSchema,
                                label: this.label,
                                disabled: this.disabled,
                                required: this.required,
                                rules: this.rules,
                                options: this.fullOptions,
                                htmlDescription: this.htmlDescription,
                                on: {
                                    input: function (t) {
                                        return e.input(t instanceof Event ? t.target.value : t);
                                    },
                                    change: function (t) {
                                        return e.change(t);
                                    },
                                },
                            };
                        },
                        dashKey: function () {
                            return this.fullKey.replace(/\./g, '-');
                        },
                        commonFieldProps: function () {
                            return Object.assign(
                                {},
                                {
                                    value: this.value,
                                    inputValue: this.value,
                                    label: this.label,
                                    name: this.fullKey,
                                    id: this.fullOptions.idPrefix + this.dashKey,
                                    disabled: this.disabled,
                                    rules: this.rules,
                                    required: this.required,
                                },
                                this.fullOptions.fieldProps,
                                this.fullSchema['x-props']
                            );
                        },
                        propertyClass: function () {
                            return (
                                'vjsf-property vjsf-property-' +
                                this.dashKey +
                                ' pa-0 ' +
                                (this.fullSchema['x-class'] || '')
                            );
                        },
                        xSlots: function () {
                            return Object.assign({}, this.fullSchema['x-slots']);
                        },
                        formattedValue: function () {
                            return (
                                this.value &&
                                this.fullSchema.format &&
                                this.fullOptions.formats[this.fullSchema.format] &&
                                this.fullOptions.formats[this.fullSchema.format](this.value, this.fullOptions.locale)
                            );
                        },
                    },
                    watch: {
                        fullSchema: {
                            handler: function () {
                                this.fullSchema &&
                                    JSON.stringify(this.fullSchema) !== this.lastFullSchema &&
                                    ((this.lastFullSchema = JSON.stringify(this.fullSchema)),
                                    this.initFromSchema(),
                                    this.fixProperties(),
                                    (this.ready = !0));
                            },
                            immediate: !0,
                        },
                    },
                    render: function (e) {
                        if (
                            !(
                                !this.fullSchema ||
                                void 0 !== this.fullSchema.const ||
                                'hidden' === this.display ||
                                (this.fullSchema.readOnly && this.fullOptions.hideReadOnly)
                            )
                        ) {
                            var t = [];
                            if (
                                (this.$scopedSlots.before
                                    ? t.push(this.$scopedSlots.before(this.slotParams))
                                    : this.$slots.before
                                    ? this.$slots.before.forEach(function (e) {
                                          return t.push(e);
                                      })
                                    : this.xSlots.before &&
                                      t.push(
                                          e('div', {
                                              domProps: { innerHTML: this.fullOptions.markdown(this.xSlots.before) },
                                          })
                                      ),
                                this.$scopedSlots.default)
                            )
                                t.push(this.$scopedSlots.default(this.slotParams));
                            else if (
                                this.fullSchema['x-display'] &&
                                this.fullSchema['x-display'] &&
                                this.$scopedSlots[this.fullSchema['x-display']]
                            )
                                t.push(this.$scopedSlots[this.fullSchema['x-display']](this.slotParams));
                            else {
                                (
                                    this.renderDateProp(e) ||
                                    this.renderSelectProp(e) ||
                                    this.renderFileProp(e) ||
                                    this.renderSimpleProp(e) ||
                                    this.renderObjectContainer(e) ||
                                    []
                                ).forEach(function (e) {
                                    return t.push(e);
                                });
                            }
                            this.$scopedSlots.after
                                ? t.push(this.$scopedSlots.after(this.slotParams))
                                : this.$slots.after
                                ? this.$slots.after.forEach(function (e) {
                                      return t.push(e);
                                  })
                                : this.xSlots.after &&
                                  t.push(
                                      e('div', {
                                          domProps: { innerHTML: this.fullOptions.markdown(this.xSlots.after) },
                                      })
                                  );
                            var i = Object.assign({}, this.fullOptions.fieldColProps);
                            return (
                                this.fullSchema['x-cols'] && (i.cols = this.fullSchema['x-cols']),
                                e(
                                    'v-col',
                                    { props: i, class: this.propertyClass, style: this.fullSchema['x-style'] || '' },
                                    t
                                )
                            );
                        }
                    },
                    methods: {
                        renderPropSlots: function (e) {
                            var t = this,
                                i = [];
                            return (
                                Object.keys(this.xSlots).forEach(function (r) {
                                    i.push(
                                        e('div', {
                                            slot: r,
                                            domProps: { innerHTML: t.fullOptions.markdown(t.xSlots[r]) },
                                        })
                                    );
                                }),
                                Object.keys(this.$slots).forEach(function (r) {
                                    i.push(e('template', { slot: r }, t.$slots[r]));
                                }),
                                i
                            );
                        },
                        change: function () {
                            this.$emit('change', this.value);
                        },
                        input: function (e) {
                            null == e || '' === e ? this.$emit('input', void 0) : this.$emit('input', e);
                        },
                        defaultValue: function (e) {
                            return 'object' !== e.type || e['x-fromUrl'] || e['x-fromData'] || e.enum
                                ? 'array' === e.type
                                    ? []
                                    : 'v-range-slider' === e.tag
                                    ? [0, 10]
                                    : null
                                : {};
                        },
                        fixProperties: function () {
                            var e = this;
                            'object' === this.fullSchema.type &&
                                (!(
                                    (this.fullSchema.properties && this.fullSchema.properties.length) ||
                                    (Object.keys(this.subModels).length &&
                                        !this.fullSchema['x-fromData'] &&
                                        !this.fullSchema['x-fromUrl'])
                                ) ||
                                    ((this.fullOptions.removeAdditionalProperties ||
                                        !1 === this.fullSchema.additionalProperties) &&
                                        this.value &&
                                        Object.keys(this.value).forEach(function (t) {
                                            (e.fullSchema.properties || []).find(function (e) {
                                                return e.key === t;
                                            }) || e.$delete(e.value, t);
                                        }),
                                    Object.keys(this.subModels).forEach(function (t) {
                                        Object.keys(e.subModels[t]).forEach(function (i) {
                                            e.value[i] !== e.subModels[t][i] && e.$set(e.value, i, e.subModels[t][i]);
                                        });
                                    })));
                        },
                        initFromSchema: function () {
                            if (
                                ((this.initiallyDefined = void 0 !== this.value && null !== this.value),
                                'array' === this.fullSchema.type &&
                                    (this.initiallyDefined = !(!this.value || !this.value.length)),
                                'object' === this.fullSchema.type &&
                                    (this.initiallyDefined = !(!this.value || !Object.keys(this.value).length)),
                                this.fullSchema.readOnly && this.fullOptions.deleteReadOnly)
                            )
                                return this.input(void 0);
                            var e = this.value;
                            'object' === this.fullSchema.type &&
                                [void 0, null].includes(e) &&
                                !this.isSelectProp &&
                                (e = {}),
                                void 0 !== this.fullSchema.const && (e = this.fullSchema.const),
                                this.initSelectProp(e),
                                this.initObjectContainer(e),
                                'array' === this.fullSchema.type &&
                                    (e = e.filter(function (e) {
                                        return ![void 0, null].includes(e);
                                    })),
                                this.input(e);
                        },
                    },
                },
                undefined,
                undefined,
                undefined,
                !1,
                void 0,
                void 0,
                void 0
            ),
        ],
    },
    undefined,
    undefined,
    undefined,
    !1,
    void 0,
    void 0,
    void 0
);
(at.install = function (e) {
    e.component(at.name, at);
}),
    null != ('undefined' == typeof window ? 'undefined' : e(window)) && window.Vue && at.install(window.Vue);
export { at as HFormRenderer };
