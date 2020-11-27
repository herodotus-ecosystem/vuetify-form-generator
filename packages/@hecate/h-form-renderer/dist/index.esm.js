import 'core-js/modules/es.function.name';
import e from '@babel/runtime-corejs3/helpers/esm/typeof';
import t from '@babel/runtime-corejs3/core-js/object/define-property';
import i from '@babel/runtime-corejs3/core-js/object/define-properties';
import r from '@babel/runtime-corejs3/core-js/object/get-own-property-descriptors';
import n from '@babel/runtime-corejs3/core-js/object/get-own-property-descriptor';
import l from '@babel/runtime-corejs3/core-js/object/get-own-property-symbols';
import 'core-js/modules/es.symbol';
import 'core-js/modules/es.symbol.description';
import 'core-js/modules/es.number.constructor';
import 'core-js/modules/es.regexp.exec';
import 'core-js/modules/es.string.replace';
import s from '@babel/runtime-corejs3/core-js/instance/filter';
import a from '@babel/runtime-corejs3/core-js/instance/includes';
import o from '@babel/runtime-corejs3/core-js/instance/find';
import u from '@babel/runtime-corejs3/core-js/object/keys';
import c from '@babel/runtime-corejs3/core-js/instance/for-each';
import h from '@babel/runtime-corejs3/core-js/json/stringify';
import m from '@babel/runtime-corejs3/core-js/instance/concat';
import p from '@babel/runtime-corejs3/core-js/instance/starts-with';
import f from '@babel/runtime-corejs3/helpers/esm/defineProperty';
import d from '@babel/runtime-corejs3/core-js/object/assign';
import 'core-js/modules/es.regexp.constructor';
import 'core-js/modules/es.regexp.to-string';
import 'core-js/modules/es.string.match';
import v from '@babel/runtime-corejs3/core-js/array/is-array';
import 'core-js/modules/es.string.split';
import b from '@babel/runtime-corejs3/core-js/instance/map';
import y from '@babel/runtime-corejs3/core-js/parse-int';
import S from '@babel/runtime-corejs3/core-js/instance/slice';
import g from '@babel/runtime-corejs3/core-js/parse-float';
import 'core-js/modules/es.array.iterator';
import 'core-js/modules/es.object.to-string';
import 'core-js/modules/es.promise';
import 'core-js/modules/es.string.iterator';
import 'core-js/modules/web.dom-collections.iterator';
import O from '@babel/runtime-corejs3/helpers/esm/toConsumableArray';
import x from '@babel/runtime-corejs3/regenerator';
import 'regenerator-runtime/runtime';
import P from '@babel/runtime-corejs3/helpers/esm/asyncToGenerator';
import j from '@babel/runtime-corejs3/core-js/promise';
import I from '@babel/runtime-corejs3/core-js/get-iterator';
import k from '@babel/runtime-corejs3/core-js/get-iterator-method';
import w from '@babel/runtime-corejs3/core-js/symbol';
import C from '@babel/runtime-corejs3/core-js/array/from';
import 'core-js/modules/es.array.filter';
import 'core-js/modules/es.string.search';
import T from '@babel/runtime-corejs3/core-js/instance/index-of';
import D from '@babel/runtime-corejs3/core-js/instance/reverse';
import V from '@babel/runtime-corejs3/core-js/instance/ends-with';
import L from '@babel/runtime-corejs3/core-js/instance/reduce';
import $ from 'vue-runtime-helpers/dist/normalize-component.mjs';
import {
    VAvatar as K,
    VAutocomplete as q,
    VBtn as M,
    VCard as R,
    VCardActions as A,
    VCardText as F,
    VCardTitle as E,
    VCheckbox as U,
    VChip as N,
    VColorPicker as H,
    VCombobox as _,
    VContainer as z,
    VDatePicker as W,
    VDialog as B,
    VExpansionPanels as G,
    VExpansionPanel as J,
    VExpansionPanelHeader as Z,
    VExpansionPanelContent as Y,
    VCol as Q,
    VFileInput as X,
    VIcon as ee,
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
function Pe(e, t) {
    var i = u(e);
    if (l) {
        var r = l(e);
        t &&
            (r = s(r).call(r, function (t) {
                return n(e, t).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function je(e) {
    for (var l = arguments, s = 1; s < arguments.length; s++) {
        var a,
            o = null != l[s] ? l[s] : {};
        if (s % 2)
            c((a = Pe(Object(o), !0))).call(a, function (t) {
                f(e, t, o[t]);
            });
        else if (r) i(e, r(o));
        else {
            var u;
            c((u = Pe(Object(o)))).call(u, function (i) {
                t(e, i, n(o, i));
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
    (xe.get_json_pointer = function (e, t, i) {
        var r, n, l;
        (n = e
            .replace(/\\\//, '#SLASH#')
            .replace(/\//g, '.')
            .replace(/#SLASH#/, '/')),
            c((r = u(i))).call(r, function (e) {
                n = n.replace(e, i[e]);
            }),
            '.' === (n = n.replace(new RegExp('^' + xe.pathtoken), ''))[0] && (n = n.substr(1, n.length - 1));
        try {
            xe.debug, (l = Oe.getter(n)(t));
        } catch (e) {
            l = '';
        }
        return l;
    }),
    (xe.replace = function (t, i, r, n) {
        var l, s, a, o, c, h;
        for (l in ((c = []), t))
            null != (h = t[l]) && null != h[xe.reftoken]
                ? ((s = h[xe.reftoken]),
                  u(h).length,
                  v(s)
                      ? (s = xe.replace(s, i, r, n))
                      : null != i[s]
                      ? (t[l] = i[s])
                      : String(s).match(new RegExp('^' + xe.pathtoken)) && (t[l] = xe.get_json_pointer(s, r, n)),
                  null != (null != (a = t[l]) ? a.length : void 0) &&
                      0 === (null != (o = t[l]) ? o.length : void 0) &&
                      xe.debug,
                  c.push(void 0))
                : 'object' === e(h)
                ? c.push(xe.replace(h, i, r, n))
                : c.push(void 0);
        return c;
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
        var i;
        return (i = {}), xe.findIds(e, i), xe.debug && u(i).length, xe.replace(e, i, e, t), e;
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
        return b((t = u(e || {}))).call(t, function (t) {
            return je(je({}, e[t]), {}, { key: t });
        });
    };
Ie.prepareFullSchema = function (t, i) {
    var r,
        n,
        l,
        p,
        f = JSON.parse(h(t));
    (f.pattern && (f.patternRegexp = new RegExp(f.pattern)), v(f.type)) &&
        ((f.nullable = a((r = f.type)).call(r, 'null')),
        (f.type = o((n = f.type)).call(n, function (e) {
            return 'null' !== e;
        })),
        f.nullable &&
            f.enum &&
            (f.enum = s((l = f.enum)).call(l, function (e) {
                return null !== e;
            })));
    if ('object' !== f.type) return f;
    ((f.properties = JSON.parse(h(ke(f.properties)))),
    (f.required = f.required || []),
    (f.dependencies = f.dependencies || {}),
    f.dependencies) &&
        c((p = u(f.dependencies))).call(p, function (t) {
            var r,
                n,
                l,
                s,
                o,
                c = f.dependencies[t];
            if (i) {
                var h = (function (e, t) {
                    for (var i = t.split('.'), r = 0; r < i.length; r++) {
                        var n;
                        if (a((n = [null, void 0])).call(n, e)) break;
                        e = e[i[r]];
                    }
                    return e;
                })(i, t);
                a((r = [null, void 0, !1])).call(r, h) ||
                    (v(h) && 0 === h.length) ||
                    ('object' === e(h) && 0 === u(h).length) ||
                    ((f.required = m((n = f.required)).call(n, c.required || [])),
                    (f.properties = m((l = f.properties)).call(l, ke(c.properties))),
                    c.oneOf && (f.oneOf = m((s = f.oneOf || [])).call(s, c.oneOf)),
                    c.allOf && (f.allOf = m((o = f.allOf || [])).call(o, c.allOf)));
            }
        });
    return f;
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
                r = new Date(m((i = ''.concat(new Date().toISOString().split('T')[0], 'T'))).call(i, e));
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
    var i = u(e);
    if (l) {
        var r = l(e);
        t &&
            (r = s(r).call(r, function (t) {
                return n(e, t).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function Le(e) {
    for (var l = arguments, s = 1; s < arguments.length; s++) {
        var a,
            o = null != l[s] ? l[s] : {};
        if (s % 2)
            c((a = Ve(Object(o), !0))).call(a, function (t) {
                f(e, t, o[t]);
            });
        else if (r) i(e, r(o));
        else {
            var u;
            c((u = Ve(Object(o)))).call(u, function (i) {
                t(e, i, n(o, i));
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
                    i = o((e = u(t))).call(e, function (e) {
                        return !!t[e].const;
                    });
                if (i)
                    return Le(
                        Le({}, t[i]),
                        {},
                        { key: i, htmlDescription: this.fullOptions.markdown(t[i].description || '') }
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
                        o((e = this.fullSchema.required)).call(e, function (e) {
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
                (e.properties || e.allOf || v(e.items)) &&
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
                var i, r;
                if (this.fullSchema.allOf)
                    c((i = this.fullSchema.allOf)).call(i, function (i, r) {
                        t.$set(t.subModels, 'allOf-' + r, JSON.parse(h(e)));
                    });
                if (((this.currentOneOf = null), this.subSchemas && !this.currentOneOf && this.subSchemasConstProp))
                    if (e && e[this.subSchemasConstProp.key])
                        this.currentOneOf = o((r = this.subSchemas)).call(r, function (i) {
                            return i.properties[t.subSchemasConstProp.key].const === e[t.subSchemasConstProp.key];
                        });
                    else if (this.fullSchema.default) {
                        var n;
                        this.currentOneOf = o((n = this.subSchemas)).call(n, function (e) {
                            return (
                                e.properties[t.subSchemasConstProp.key].const ===
                                t.fullSchema.default[t.subSchemasConstProp.key]
                            );
                        });
                    }
                this.currentOneOf
                    ? this.$set(this.subModels, 'currentOneOf', JSON.parse(h(e)))
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
                                      href: m(
                                          (n = m((l = '#tab-'.concat(this.fullOptions.idPrefix))).call(
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
                                      value: m(
                                          (s = m((a = 'tab-'.concat(this.fullOptions.idPrefix))).call(
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
        renderChildProp: function (e, t, i, r, n) {
            var l = this,
                s = i ? this.subModels : this.value,
                a = i || t.key,
                o = s[a];
            return (
                void 0 === o &&
                    ((o = this.defaultValue(t)),
                    void 0 !== t.default && (o = JSON.parse(h(t.default))),
                    null != o && (this.$set(s, a, o), this.input(this.value))),
                e('h-form-renderer', {
                    props: {
                        schema: Le({ readOnly: this.fullSchema.readOnly }, t),
                        value: o,
                        modelRoot: this.modelRoot || this.value,
                        modelKey: a,
                        parentKey: ''.concat(this.fullKey, '.'),
                        options: this.fullOptions,
                        sectionDepth: r,
                    },
                    on: {
                        error: function (e) {
                            return l.$emit('error', e);
                        },
                        input: function (e) {
                            void 0 === e
                                ? v(s) && y(a) < s.length - 1
                                    ? l.$set(s, a, e)
                                    : l.$delete(s, a)
                                : l.$set(s, a, e),
                                l.$emit('input', l.value);
                        },
                        change: function (e) {
                            return l.$emit('change', l.value);
                        },
                    },
                })
            );
        },
        renderObjectContainer: function (e) {
            var t,
                i,
                r,
                n = this;
            if ('object' === this.fullSchema.type || v(this.fullSchema.items)) {
                if (((this.isObjectContainer = !0), a((t = [void 0, null])).call(t, this.value))) return [];
                var l,
                    o,
                    u,
                    h = [],
                    p = [];
                if (this.fullSchema.properties)
                    c((l = this.fullSchema.properties)).call(l, function (t) {
                        if (n.isSection(t)) {
                            var i = n.renderChildProp(e, t, null, n.sectionDepth + 1);
                            p = m(p).call(p, n.renderSection(e, t, null, i));
                        } else h.push(n.renderChildProp(e, t, null, n.sectionDepth));
                    });
                if (v(this.fullSchema.items))
                    c((o = this.fullSchema.items)).call(o, function (t, i) {
                        var r = Le(Le({}, t), {}, { key: '' + i }),
                            l = n.value.length > i || (n.fullSchema.minItems && n.fullSchema.minItems > i);
                        if (n.isSection(t)) {
                            var s = n.renderChildProp(e, r, null, n.sectionDepth + 1, l);
                            p = m(p).call(p, n.renderSection(e, r, null, s));
                        } else h.push(n.renderChildProp(e, r, null, n.sectionDepth, l));
                    });
                if (this.fullSchema.allOf)
                    c((u = this.fullSchema.allOf)).call(u, function (t, i) {
                        var r = Le(Le({}, t), {}, { type: 'object', key: '' + i });
                        if (n.isSection(t)) {
                            var l = n.renderChildProp(e, r, 'allOf-' + i, n.sectionDepth + 1);
                            p = m(p).call(p, n.renderSection(e, r, 'allOf-' + i, l));
                        } else h.push(n.renderChildProp(e, r, 'allOf-' + i, n.sectionDepth));
                    });
                if ('expansion-panels' === this.display && p.length) {
                    var f = Le(Le({}, this.fullOptions.expansionPanelsProps), this.fullSchema['x-props']);
                    p = [e('v-expansion-panels', { props: f }, p)];
                }
                if ('tabs' === this.display && p.length) {
                    var d = Le(Le({}, this.fullOptions.tabsProps), this.fullSchema['x-props']);
                    this.currentTab &&
                        this.childrenInputs[this.currentTab] &&
                        this.childrenInputs[this.currentTab].hasValidatedChildError &&
                        (d.sliderColor = 'error'),
                        (p = [
                            e(
                                'v-tabs',
                                {
                                    props: d,
                                    on: {
                                        change: function (e) {
                                            n.currentTab = e.split('-').pop();
                                        },
                                    },
                                },
                                p
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
                                items: s((b = this.subSchemas)).call(b, function (e) {
                                    return e.properties && e.properties[n.subSchemasConstProp.key];
                                }),
                                required: this.subSchemasRequired,
                                clearable: !this.subSchemasRequired,
                                itemValue: function (e) {
                                    return e.properties[n.subSchemasConstProp.key].const;
                                },
                                itemText: 'title',
                                rules: this.subSchemasRules,
                                returnObject: !0,
                            }
                        ),
                        S = {
                            input: function (e) {
                                n.currentOneOf = e;
                            },
                        };
                    h.push(e('v-select', { props: y, on: S }, [this.renderTooltip(e, 'append-outer')])),
                        this.currentOneOf &&
                            this.showCurrentOneOf &&
                            h.push(
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
                        m(
                            (i = m(
                                (r = [
                                    this.fullSchema.description &&
                                        e('v-col', {
                                            props: { cols: 12 },
                                            class: { 'pa-0': !0 },
                                            domProps: { innerHTML: this.htmlDescription },
                                        }),
                                ])
                            ).call(r, h))
                        ).call(i, p)
                    ),
                ];
            }
        },
    },
};
function Ke(e, t) {
    var i = u(e);
    if (l) {
        var r = l(e);
        t &&
            (r = s(r).call(r, function (t) {
                return n(e, t).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function qe(e) {
    for (var l = arguments, s = 1; s < arguments.length; s++) {
        var a,
            o = null != l[s] ? l[s] : {};
        if (s % 2)
            c((a = Ke(Object(o), !0))).call(a, function (t) {
                f(e, t, o[t]);
            });
        else if (r) i(e, r(o));
        else {
            var u;
            c((u = Ke(Object(o)))).call(u, function (i) {
                t(e, i, n(o, i));
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
                    u = e.getTimezoneOffset(),
                    c = m((t = ''.concat(Me(y(Math.abs(u / 60))), ':'))).call(t, Me(Math.abs(u % 60)));
                return (
                    (o = u < 0 ? '+'.concat(c) : u > 0 ? '-'.concat(c) : 'Z'),
                    m(
                        (i = m(
                            (r = m(
                                (n = m(
                                    (l = m(
                                        (s = m((a = ''.concat(e.getFullYear(), '-'))).call(
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
    Fe = {
        data: function () {
            return { dateProp: { tab: 'tab-date', menu: !1, parts: [null, null], lastValue: null } };
        },
        methods: {
            renderDateProp: function (e) {
                var t,
                    i = this;
                if (
                    'string' === this.fullSchema.type &&
                    a((t = ['date', 'date-time', 'time'])).call(t, this.fullSchema.format)
                ) {
                    var r,
                        n,
                        l,
                        s,
                        o,
                        u,
                        c = this.fullOptions.icons.calendar;
                    if ('time' === this.fullSchema.format)
                        (r = e('v-time-picker', {
                            props: qe(
                                { value: ((u = this.value), u ? S(u).call(u, 0, 5) : '') },
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
                                    m(
                                        (l = m((s = ''.concat(n.getFullYear(), '-'))).call(
                                            s,
                                            Me(n.getMonth() + 1),
                                            '-'
                                        ))
                                    ).call(l, Me(n.getDate())),
                                    m((o = ''.concat(Me(n.getHours()), ':'))).call(o, Me(n.getMinutes())),
                                ])),
                            (this.dateProp.lastValue = this.value);
                        var h = function () {
                                if (i.dateProp.parts[1]) {
                                    var e = Re(i.dateProp.parts);
                                    i.input(e), i.change(e);
                                }
                            },
                            p = [
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
                            p
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
function Ee(e, t) {
    var i = u(e);
    if (l) {
        var r = l(e);
        t &&
            (r = s(r).call(r, function (t) {
                return n(e, t).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function Ue(e) {
    for (var l = arguments, s = 1; s < arguments.length; s++) {
        var a,
            o = null != l[s] ? l[s] : {};
        if (s % 2)
            c((a = Ee(Object(o), !0))).call(a, function (t) {
                f(e, t, o[t]);
            });
        else if (r) i(e, r(o));
        else {
            var u;
            c((u = Ee(Object(o)))).call(u, function (i) {
                t(e, i, n(o, i));
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
                a((e = ['number', 'integer'])).call(e, this.fullSchema.type) ||
                'boolean' === this.fullSchema.type ||
                ('array' === this.fullSchema.type &&
                    a((t = ['string', 'number', 'integer'])).call(t, this.fullSchema.items.type))
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
                    o = {},
                    u = {
                        input: function (e) {
                            return r.input(e);
                        },
                        change: function (e) {
                            return r.change(e);
                        },
                    };
                if (
                    (a((t = ['number', 'integer'])).call(t, this.fullSchema.type) &&
                        (u.input = function (e) {
                            r.input('integer' === r.fullSchema.type ? y(e, 10) : g(e));
                        }),
                    'boolean' === this.fullSchema.type &&
                        (u.change = function (e) {
                            r.input(e || !1), r.change(e || !1);
                        }),
                    'array' === this.fullSchema.type &&
                        a((i = ['string', 'number', 'integer'])).call(i, this.fullSchema.items.type) &&
                        'string' !== this.fullSchema.items.type &&
                        ((n.type = 'number'),
                        (u.input = function (e) {
                            var t,
                                i = s(
                                    (t = b(e).call(e, function (e) {
                                        return 'integer' === r.fullSchema.items.type ? y(e, 10) : g(e);
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
                var c = this.fullSchema['x-rules'];
                return c
                    ? [
                          e('validation-provider', {
                              props: { name: n.label, rules: c },
                              scopedSlots: {
                                  default: function (t) {
                                      var i = t.errors;
                                      return e(
                                          r.fullSchema.tag,
                                          {
                                              props: Ue(Ue({}, n), {}, { required: !0, 'error-messages': i }),
                                              on: u,
                                              scopedSlots: o,
                                          },
                                          l
                                      );
                                  },
                              },
                          }),
                      ]
                    : [e(this.fullSchema.tag, { props: n, on: u, scopedSlots: o }, l)];
            }
        },
    },
};
function He(e, t) {
    var i = u(e);
    if (l) {
        var r = l(e);
        t &&
            (r = s(r).call(r, function (t) {
                return n(e, t).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function _e(e) {
    for (var l = arguments, s = 1; s < arguments.length; s++) {
        var a,
            o = null != l[s] ? l[s] : {};
        if (s % 2)
            c((a = He(Object(o), !0))).call(a, function (t) {
                f(e, t, o[t]);
            });
        else if (r) i(e, r(o));
        else {
            var u;
            c((u = He(Object(o)))).call(u, function (i) {
                t(e, i, n(o, i));
            });
        }
    }
    return e;
}
var ze = function (e) {
        return new j(function (t) {
            var i = new FileReader();
            (i.onload = function () {
                return t(i.result);
            }),
                i.readAsDataURL(e);
        });
    },
    We = (function () {
        var e = P(
            x.mark(function e(t, i, r) {
                var n, l;
                return x.wrap(function (e) {
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
                                return (e.next = 5), ze(t);
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
    Be = {
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
                        l = O(this.renderPropSlots(e)),
                        s = {
                            change:
                                ((n = P(
                                    x.mark(function e(i) {
                                        var r, n;
                                        return x.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if ('array' !== t.fullSchema.type) {
                                                            e.next = 8;
                                                            break;
                                                        }
                                                        return (
                                                            (e.next = 3),
                                                            j.all(
                                                                b(i).call(i, function (e) {
                                                                    return We(
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
                                                            We(i, t.resolvedSchema, t.fullOptions.filesAsDataUrl)
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
function Ge(e, t) {
    var i = u(e);
    if (l) {
        var r = l(e);
        t &&
            (r = s(r).call(r, function (t) {
                return n(e, t).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function Je(e) {
    for (var l = arguments, s = 1; s < arguments.length; s++) {
        var a,
            o = null != l[s] ? l[s] : {};
        if (s % 2)
            c((a = Ge(Object(o), !0))).call(a, function (t) {
                f(e, t, o[t]);
            });
        else if (r) i(e, r(o));
        else {
            var u;
            c((u = Ge(Object(o)))).call(u, function (i) {
                t(e, i, n(o, i));
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
                                            props: Je(
                                                Je(
                                                    Je({ flat: !0 }, t.fullOptions.colorPickerProps),
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
                                    props: Je(
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
        getSelectItems: function (t, i, r, n) {
            var l = [];
            if (t)
                if (
                    ('object' === i.type && i.properties && u(i.properties).length) ||
                    ('array' === i.type &&
                        i.items &&
                        'object' === i.items.type &&
                        i.items.properties &&
                        u(i.items.properties).length)
                ) {
                    var s,
                        a = i.properties
                            ? b((s = i.properties)).call(s, function (e) {
                                  return e.key;
                              })
                            : u(i.items.properties);
                    c(t).call(t, function (e) {
                        var t = {};
                        c(a).call(a, function (i) {
                            void 0 !== e[i] && (t[i] = e[i]);
                        }),
                            l.push(t);
                    });
                } else
                    c(t).call(t, function (t) {
                        if ('object' === e(t)) l.push(t);
                        else {
                            var i = f({}, r, t);
                            n && (i[n] = t), l.push(i);
                        }
                    });
            else;
            return l;
        },
    },
    Qe = function (e, t, i) {
        var r, n;
        return !a((r = [null, void 0])).call(r, e) && !a((n = [null, void 0])).call(n, t) && h(e[i]) === h(t[i]);
    };
function Xe(e, t) {
    var i;
    if (void 0 === w || null == k(e)) {
        if (
            v(e) ||
            (i = (function (e, t) {
                var i;
                if (!e) return;
                if ('string' == typeof e) return et(e, t);
                var r = S((i = Object.prototype.toString.call(e))).call(i, 8, -1);
                'Object' === r && e.constructor && (r = e.constructor.name);
                if ('Map' === r || 'Set' === r) return C(e);
                if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return et(e, t);
            })(e)) ||
            (t && e && 'number' == typeof e.length)
        ) {
            i && (e = i);
            var r = 0,
                n = function () {};
            return {
                s: n,
                n: function () {
                    return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                },
                e: function (e) {
                    throw e;
                },
                f: n,
            };
        }
        throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
    }
    var l,
        s = !0,
        a = !1;
    return {
        s: function () {
            i = I(e);
        },
        n: function () {
            var e = i.next();
            return (s = e.done), e;
        },
        e: function (e) {
            (a = !0), (l = e);
        },
        f: function () {
            try {
                s || null == i.return || i.return();
            } finally {
                if (a) throw l;
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
    var i = u(e);
    if (l) {
        var r = l(e);
        t &&
            (r = s(r).call(r, function (t) {
                return n(e, t).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function it(e) {
    for (var l = arguments, s = 1; s < arguments.length; s++) {
        var a,
            o = null != l[s] ? l[s] : {};
        if (s % 2)
            c((a = tt(Object(o), !0))).call(a, function (t) {
                f(e, t, o[t]);
            });
        else if (r) i(e, r(o));
        else {
            var u;
            c((u = tt(Object(o)))).call(u, function (i) {
                t(e, i, n(o, i));
            });
        }
    }
    return e;
}
(Ye.fillSelectItems = function (e, t, i, r, n) {
    if (t)
        if ('array' === e.type) {
            var l, s;
            c(
                (l = D(
                    (s = b(t).call(t, function (e) {
                        return e;
                    }))
                ).call(s))
            ).call(l, function (e) {
                var t = n ? e : f({}, r, e);
                o(i).call(i, function (e) {
                    return Qe(e, t, r);
                }) || i.push(t);
            });
        } else {
            var a = n ? t : f({}, r, t);
            o(i).call(i, function (e) {
                return Qe(e, a, r);
            }) || i.push(a);
        }
}),
    (Ye.fillList = function (e, t, i, r) {
        if (t)
            return i.length
                ? (c(i).call(i, function (e) {
                      o(t).call(t, function (t) {
                          return Qe(e, t, r);
                      }) || t.push(e);
                  }),
                  c(t).call(t, function (e, n) {
                      o(i).call(i, function (t) {
                          return Qe(t, e, r);
                      }) || (t[n] = null);
                  }),
                  s(t).call(t, function (e) {
                      return !!e;
                  }))
                : [];
    });
var rt = require('match-all'),
    nt = require('debounce');
function lt(e, t) {
    var i = u(e);
    if (l) {
        var r = l(e);
        t &&
            (r = s(r).call(r, function (t) {
                return n(e, t).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function st(e) {
    for (var l = arguments, s = 1; s < arguments.length; s++) {
        var a,
            o = null != l[s] ? l[s] : {};
        if (s % 2)
            c((a = lt(Object(o), !0))).call(a, function (t) {
                f(e, t, o[t]);
            });
        else if (r) i(e, r(o));
        else {
            var u;
            c((u = lt(Object(o)))).call(u, function (i) {
                t(e, i, n(o, i));
            });
        }
    }
    return e;
}
function at(e, t) {
    var i = u(e);
    if (l) {
        var r = l(e);
        t &&
            (r = s(r).call(r, function (t) {
                return n(e, t).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function ot(e) {
    for (var l = arguments, s = 1; s < arguments.length; s++) {
        var a,
            o = null != l[s] ? l[s] : {};
        if (s % 2)
            c((a = at(Object(o), !0))).call(a, function (t) {
                f(e, t, o[t]);
            });
        else if (r) i(e, r(o));
        else {
            var u;
            c((u = at(Object(o)))).call(u, function (i) {
                t(e, i, n(o, i));
            });
        }
    }
    return e;
}
var ut = $(
    {},
    undefined,
    {
        name: 'HFormRenderer',
        components: {
            VAvatar: K,
            VAutocomplete: q,
            VBtn: M,
            VCard: R,
            VCardActions: A,
            VCardText: F,
            VCardTitle: E,
            VCheckbox: U,
            VChip: N,
            VColorPicker: H,
            VCombobox: _,
            VContainer: z,
            VDatePicker: W,
            VDialog: B,
            VExpansionPanels: G,
            VExpansionPanel: J,
            VExpansionPanelHeader: Z,
            VExpansionPanelContent: Y,
            VCol: Q,
            VFileInput: X,
            VIcon: ee,
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
            $(
                {},
                undefined,
                {
                    name: 'HAssemblyRenderder',
                    mixins: [
                        $e,
                        Ne,
                        Fe,
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
                                            !a((e = ['string', 'integer', 'number'])).call(
                                                e,
                                                this.fullSchema.items.type
                                            ) ||
                                            !this.fullSchema.items.oneOf
                                        ) ||
                                        !(
                                            !a((t = ['string', 'integer', 'number'])).call(t, this.fullSchema.type) ||
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
                                        -1 === T((e = this.fullSchema['x-fromUrl'])).call(e, '{q}')
                                    );
                                },
                                fromUrlKeys: function () {
                                    var e;
                                    return this.fullSchema['x-fromUrl']
                                        ? s((e = rt(this.fullSchema['x-fromUrl'], /\{(.*?)\}/g).toArray())).call(
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
                                        (this.rawSelectItems = b(
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
                                    var r,
                                        n = this.modelRoot ? 'modelRoot.' : 'value.';
                                    (this.fullSchema['x-fromData'] &&
                                        this.$watch(
                                            n + this.fullSchema['x-fromData'],
                                            function (e) {
                                                i.rawSelectItems = e;
                                            },
                                            { immediate: !0 }
                                        ),
                                    this.fromUrlKeys) &&
                                        c((r = this.fromUrlKeys)).call(r, function (e) {
                                            p(e).call(e, 'context.')
                                                ? i.$watch(
                                                      'options.' + e,
                                                      function (t) {
                                                          (i.fromUrlParams[e] = t), i.fetchSelectItems();
                                                      },
                                                      { immediate: !0 }
                                                  )
                                                : i.$watch(
                                                      n + e,
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
                                            var t,
                                                i = e.fullSchema['x-fromUrl'].replace('{q}', e.q || ''),
                                                r = Xe(e.fromUrlKeys);
                                            try {
                                                for (r.s(); !(t = r.n()).done; ) {
                                                    var n = t.value;
                                                    if (void 0 === e.fromUrlParams[n]) return;
                                                    i = i.replace('{'.concat(n, '}'), e.fromUrlParams[n]);
                                                }
                                            } catch (e) {
                                                r.e(e);
                                            } finally {
                                                r.f();
                                            }
                                            (e.loading = !0),
                                                e.fullOptions.httpLib
                                                    .get(i)
                                                    .then(function (t) {
                                                        var r = t.data || t.body,
                                                            n = e.fullSchema['x-itemsProp']
                                                                ? r[e.fullSchema['x-itemsProp']]
                                                                : r;
                                                        if (!v(n))
                                                            throw new Error(
                                                                'Result of http fetch '.concat(i, ' is not an array')
                                                            );
                                                        (e.rawSelectItems = n), (e.loading = !1);
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
                                        h(e) !== h(this.selectItems) && (this.selectItems = e);
                                },
                                renderSelectIcon: function (e, t) {
                                    if (this.itemIcon) {
                                        var i = t[this.itemIcon];
                                        if (i) {
                                            var r = e('v-icon', null, i);
                                            return (
                                                p(i).call(i, 'http://') || p(i).call(i, 'https://')
                                                    ? (r = e('img', {
                                                          domProps: { src: i },
                                                          style: 'height:100%;width:100%;',
                                                      }))
                                                    : (p(i).call(i, '<?xml') || p(i).call(i, '<svg')) &&
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
                                                class: m(
                                                    (t = 'v-label theme--'.concat(
                                                        this.theme.isDark ? 'dark' : 'light',
                                                        ' '
                                                    ))
                                                ).call(t, this.hasError ? 'error--text' : ''),
                                            },
                                            this.commonFieldProps.label
                                        ),
                                        o = b((i = this.selectItems)).call(i, function (t) {
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
                                                    m((r = [a])).call(r, O(o))
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
                                            m((t = [])).call(
                                                t,
                                                O(
                                                    b((i = this.selectItems)).call(i, function (t) {
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
                                        if (a((t = ['checkbox', 'switch'])).call(t, this.display))
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
                                            l = O(this.renderPropSlots(e));
                                        this.htmlDescription && l.push(this.renderTooltip(e, 'append-outer'));
                                        var s = 'v-select',
                                            o = it(
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
                                                (o.noDataText = this.fullOptions.messages.noData),
                                                (o.placeholder = this.fullOptions.messages.search),
                                                this.fromUrlWithQuery
                                                    ? ((o.filter = function () {
                                                          return !0;
                                                      }),
                                                      (o.searchInput = this.q),
                                                      (r['update:search-input'] = function (e) {
                                                          i.q = e;
                                                      }))
                                                    : (o.filter = function (e, t) {
                                                          var r;
                                                          return a(
                                                              (r = (e[i.itemTitle] || e[i.itemKey]).toLowerCase())
                                                          ).call(r, t.toLowerCase());
                                                      })),
                                            (s = this.customTag ? this.customTag : s),
                                            [e(s, { props: o, on: r, scopedSlots: n }, l)]
                                        );
                                    }
                                },
                            },
                        },
                        Be,
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
                                        var t = JSON.parse(h(this.fullSchema.items));
                                        if (((t.readOnly = !0), this.itemTitle)) {
                                            var i, r;
                                            if (
                                                (t.properties &&
                                                    t.properties[this.itemTitle] &&
                                                    (t.properties[this.itemTitle]['x-display'] = 'hidden'),
                                                t.oneOf)
                                            )
                                                c((i = t.oneOf)).call(i, function (t) {
                                                    t.properties[e.itemTitle] &&
                                                        (t.properties[e.itemTitle]['x-display'] = 'hidden');
                                                });
                                            if (this.fullSchema.items.allOf)
                                                c((r = t.allOf)).call(r, function (t) {
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
                                        (V((n = this.fullOptions.idPrefix)).call(n, '--dialog--') ||
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
                                                                (l.editabledArrayProp.editItem = JSON.parse(h(t))),
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
                                            value: JSON.parse(h(t)),
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
                                                a,
                                                o = b(
                                                    (l = s((a = this.value)).call(a, function (e) {
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
                                                                                        r = s((e = t.value)).call(
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
                                                    ? o
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
                                                              o
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
                                    return L((e = this.inputs)).call(
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
                                        !!o((e = this.inputs)).call(e, function (e) {
                                            return e.hasError;
                                        }) || !!this.containerError
                                    );
                                },
                                hasValidatedChildError: function () {
                                    var e;
                                    return !!o((e = this.inputs)).call(e, function (e) {
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
                                    this.inputs = s((t = this.inputs)).call(t, function (t) {
                                        return t._uid !== e._uid;
                                    });
                                },
                                validate: function (e) {
                                    var t;
                                    return (
                                        (this.validated = !0),
                                        0 ===
                                            s((t = this.inputs)).call(t, function (t) {
                                                return !t.validate(e);
                                            }).length
                                    );
                                },
                                reset: function () {
                                    var e;
                                    c((e = this.inputs)).call(e, function (e) {
                                        return e.reset();
                                    });
                                },
                                resetValidation: function () {
                                    var e;
                                    (this.shouldValidate = !1),
                                        (this.validated = !1),
                                        c((e = this.inputs)).call(e, function (e) {
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
                                t = d({}, we, this.options || {}, this.resolvedSchema['x-options'] || {});
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
                                (t.icons = ot(ot({}, De[i]), t.icons)),
                                (t.messages = ot(ot({}, Ce[t.locale] || Ce.en), t.messages)),
                                (t.formats = ot(ot({}, Te), t.formats)),
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
                                    u = [];
                                if (
                                    (i &&
                                        u.push(function (e) {
                                            return (null != e && '' !== e) || t.messages.required;
                                        }),
                                    'array' === e.type && void 0 !== e.minItems)
                                ) {
                                    var c = t.messages.minItems.replace(
                                        '{minItems}',
                                        e.minItems.toLocaleString(t.locale)
                                    );
                                    u.push(function (t) {
                                        return !t || t.length >= e.minItems || c;
                                    });
                                }
                                if ('array' === e.type && void 0 !== e.maxItems) {
                                    var p = t.messages.maxItems.replace(
                                        '{maxItems}',
                                        e.maxItems.toLocaleString(t.locale)
                                    );
                                    u.push(function (t) {
                                        return !t || t.length <= e.maxItems || p;
                                    });
                                }
                                if ('string' === e.type && void 0 !== e.minLength) {
                                    var f = t.messages.minLength.replace(
                                        '{minLength}',
                                        e.minLength.toLocaleString(t.locale)
                                    );
                                    u.push(function (t) {
                                        return null == t || t.length >= e.minLength || f;
                                    });
                                }
                                if ('string' === e.type && void 0 !== e.maxLength) {
                                    var d = t.messages.maxLength.replace(
                                        '{maxLength}',
                                        e.maxLength.toLocaleString(t.locale)
                                    );
                                    u.push(function (t) {
                                        return null == t || t.length <= e.maxLength || d;
                                    });
                                }
                                if ('string' === e.type && void 0 !== e.patternRegexp) {
                                    var v = t.messages.pattern.replace('{pattern}', e.pattern);
                                    u.push(function (t) {
                                        return null == t || !!t.match(e.patternRegexp) || v;
                                    });
                                }
                                if (a((n = ['number', 'integer'])).call(n, e.type) && void 0 !== e.maximum) {
                                    var y = t.messages.maximum.replace('{maximum}', e.maximum.toLocaleString(t.locale));
                                    u.push(function (t) {
                                        return null == t || t <= e.maximum || y;
                                    });
                                }
                                if (a((l = ['number', 'integer'])).call(l, e.type) && void 0 !== e.minimum) {
                                    var S = t.messages.minimum.replace('{minimum}', e.minimum.toLocaleString(t.locale));
                                    u.push(function (t) {
                                        return null == t || t >= e.minimum || S;
                                    });
                                }
                                e.enum &&
                                    u.push(function (t) {
                                        var i;
                                        return (
                                            null == t ||
                                            !!o((i = e.enum)).call(i, function (e) {
                                                return h(e) === h(t);
                                            }) ||
                                            ''
                                        );
                                    }),
                                    'array' === e.type &&
                                        e.items.enum &&
                                        u.push(function (t) {
                                            return (
                                                null == t ||
                                                !o(t).call(t, function (t) {
                                                    var i;
                                                    return !o((i = e.items.enum)).call(i, function (e) {
                                                        return h(e) === h(t);
                                                    });
                                                }) ||
                                                ''
                                            );
                                        }),
                                    r &&
                                        'array' !== e.type &&
                                        u.push(function (t) {
                                            var i;
                                            return (
                                                null == t ||
                                                !!o((i = e.oneOf)).call(i, function (e) {
                                                    return e.const === t;
                                                }) ||
                                                ''
                                            );
                                        }),
                                    r &&
                                        'array' === e.type &&
                                        u.push(function (t) {
                                            return (
                                                null == t ||
                                                !o(t).call(t, function (t) {
                                                    var i;
                                                    return !o((i = e.items.oneOf)).call(i, function (e) {
                                                        return e.const === t;
                                                    });
                                                }) ||
                                                ''
                                            );
                                        });
                                var g = b((s = e['x-ruless'] || [])).call(s, function (e) {
                                    return 'string' == typeof e
                                        ? t.rules && t.rules[e]
                                        : 'function' == typeof e
                                        ? e
                                        : void 0;
                                });
                                return m(u).call(u, g);
                            })(this.fullSchema, this.fullOptions, this.required, this.isOneOfSelect);
                        },
                        disabled: function () {
                            return this.fullOptions.disableAll || this.fullSchema.readOnly;
                        },
                        slotName: function () {
                            var e;
                            return this.fullSchema['x-display'] &&
                                p((e = this.fullSchema['x-display'])).call(e, 'custom-')
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
                            return ot(
                                ot(
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
                                    this.fullOptions.fieldProps
                                ),
                                this.fullSchema['x-props']
                            );
                        },
                        propertyClass: function () {
                            var e;
                            return m((e = 'vjsf-property vjsf-property-'.concat(this.dashKey, ' pa-0 '))).call(
                                e,
                                this.fullSchema['x-class'] || ''
                            );
                        },
                        xSlots: function () {
                            return ot({}, this.fullSchema['x-slots']);
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
                                    h(this.fullSchema) !== this.lastFullSchema &&
                                    ((this.lastFullSchema = h(this.fullSchema)),
                                    this.initFromSchema(),
                                    this.fixProperties(),
                                    (this.ready = !0));
                            },
                            immediate: !0,
                        },
                    },
                    render: function (e) {
                        var t, i;
                        if (
                            !(
                                !this.fullSchema ||
                                void 0 !== this.fullSchema.const ||
                                'hidden' === this.display ||
                                (this.fullSchema.readOnly && this.fullOptions.hideReadOnly)
                            )
                        ) {
                            var r = [];
                            if (
                                (this.$scopedSlots.before
                                    ? r.push(this.$scopedSlots.before(this.slotParams))
                                    : this.$slots.before
                                    ? c((t = this.$slots.before)).call(t, function (e) {
                                          return r.push(e);
                                      })
                                    : this.xSlots.before &&
                                      r.push(
                                          e('div', {
                                              domProps: { innerHTML: this.fullOptions.markdown(this.xSlots.before) },
                                          })
                                      ),
                                this.$scopedSlots.default)
                            )
                                r.push(this.$scopedSlots.default(this.slotParams));
                            else if (
                                this.fullSchema['x-display'] &&
                                this.fullSchema['x-display'] &&
                                this.$scopedSlots[this.fullSchema['x-display']]
                            )
                                r.push(this.$scopedSlots[this.fullSchema['x-display']](this.slotParams));
                            else {
                                var n =
                                    this.renderDateProp(e) ||
                                    this.renderSelectProp(e) ||
                                    this.renderFileProp(e) ||
                                    this.renderSimpleProp(e) ||
                                    this.renderObjectContainer(e) ||
                                    [];
                                c(n).call(n, function (e) {
                                    return r.push(e);
                                });
                            }
                            this.$scopedSlots.after
                                ? r.push(this.$scopedSlots.after(this.slotParams))
                                : this.$slots.after
                                ? c((i = this.$slots.after)).call(i, function (e) {
                                      return r.push(e);
                                  })
                                : this.xSlots.after &&
                                  r.push(
                                      e('div', {
                                          domProps: { innerHTML: this.fullOptions.markdown(this.xSlots.after) },
                                      })
                                  );
                            var l = ot({}, this.fullOptions.fieldColProps);
                            return (
                                this.fullSchema['x-cols'] && (l.cols = this.fullSchema['x-cols']),
                                e(
                                    'v-col',
                                    { props: l, class: this.propertyClass, style: this.fullSchema['x-style'] || '' },
                                    r
                                )
                            );
                        }
                    },
                    methods: {
                        renderPropSlots: function (e) {
                            var t,
                                i,
                                r = this,
                                n = [];
                            return (
                                c((t = u(this.xSlots))).call(t, function (t) {
                                    n.push(
                                        e('div', {
                                            slot: t,
                                            domProps: { innerHTML: r.fullOptions.markdown(r.xSlots[t]) },
                                        })
                                    );
                                }),
                                c((i = u(this.$slots))).call(i, function (t) {
                                    n.push(e('template', { slot: t }, r.$slots[t]));
                                }),
                                n
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
                            var e,
                                t = this;
                            if (
                                'object' === this.fullSchema.type &&
                                !!(
                                    (this.fullSchema.properties && this.fullSchema.properties.length) ||
                                    (u(this.subModels).length &&
                                        !this.fullSchema['x-fromData'] &&
                                        !this.fullSchema['x-fromUrl'])
                                )
                            ) {
                                var i;
                                if (
                                    (this.fullOptions.removeAdditionalProperties ||
                                        !1 === this.fullSchema.additionalProperties) &&
                                    this.value
                                )
                                    c((i = u(this.value))).call(i, function (e) {
                                        var i;
                                        o((i = t.fullSchema.properties || [])).call(i, function (t) {
                                            return t.key === e;
                                        }) || t.$delete(t.value, e);
                                    });
                                c((e = u(this.subModels))).call(e, function (e) {
                                    var i;
                                    c((i = u(t.subModels[e]))).call(i, function (i) {
                                        t.value[i] !== t.subModels[e][i] && t.$set(t.value, i, t.subModels[e][i]);
                                    });
                                });
                            }
                        },
                        initFromSchema: function () {
                            var e;
                            if (
                                ((this.initiallyDefined = void 0 !== this.value && null !== this.value),
                                'array' === this.fullSchema.type &&
                                    (this.initiallyDefined = !(!this.value || !this.value.length)),
                                'object' === this.fullSchema.type &&
                                    (this.initiallyDefined = !(!this.value || !u(this.value).length)),
                                this.fullSchema.readOnly && this.fullOptions.deleteReadOnly)
                            )
                                return this.input(void 0);
                            var t = this.value;
                            'object' === this.fullSchema.type &&
                                a((e = [void 0, null])).call(e, t) &&
                                !this.isSelectProp &&
                                (t = {}),
                                void 0 !== this.fullSchema.const && (t = this.fullSchema.const),
                                this.initSelectProp(t),
                                this.initObjectContainer(t),
                                'array' === this.fullSchema.type &&
                                    (t = s(t).call(t, function (e) {
                                        var t;
                                        return !a((t = [void 0, null])).call(t, e);
                                    })),
                                this.input(t);
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
(ut.install = function (e) {
    e.component(ut.name, ut);
}),
    null != ('undefined' == typeof window ? 'undefined' : e(window)) && window.Vue && ut.install(window.Vue);
export { ut as HFormRenderer };
