!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(
              exports,
              require('core-js/modules/es.function.name'),
              require('@babel/runtime-corejs3/helpers/esm/typeof'),
              require('core-js/modules/es.symbol'),
              require('core-js/modules/es.symbol.description'),
              require('core-js/modules/es.number.constructor'),
              require('core-js/modules/es.regexp.exec'),
              require('core-js/modules/es.string.replace'),
              require('@babel/runtime-corejs3/core-js/object/define-property'),
              require('@babel/runtime-corejs3/core-js/object/define-properties'),
              require('@babel/runtime-corejs3/core-js/object/get-own-property-descriptors'),
              require('@babel/runtime-corejs3/core-js/object/get-own-property-descriptor'),
              require('@babel/runtime-corejs3/core-js/object/get-own-property-symbols'),
              require('@babel/runtime-corejs3/core-js/instance/filter'),
              require('@babel/runtime-corejs3/core-js/instance/includes'),
              require('@babel/runtime-corejs3/core-js/instance/find'),
              require('@babel/runtime-corejs3/core-js/object/keys'),
              require('@babel/runtime-corejs3/core-js/instance/for-each'),
              require('@babel/runtime-corejs3/core-js/json/stringify'),
              require('@babel/runtime-corejs3/core-js/instance/concat'),
              require('@babel/runtime-corejs3/core-js/instance/starts-with'),
              require('@babel/runtime-corejs3/helpers/esm/defineProperty'),
              require('@babel/runtime-corejs3/core-js/object/assign'),
              require('core-js/modules/es.regexp.constructor'),
              require('core-js/modules/es.regexp.to-string'),
              require('core-js/modules/es.string.match'),
              require('@babel/runtime-corejs3/core-js/array/is-array'),
              require('core-js/modules/es.string.split'),
              require('@babel/runtime-corejs3/core-js/instance/map'),
              require('@babel/runtime-corejs3/core-js/parse-int'),
              require('@babel/runtime-corejs3/core-js/instance/slice'),
              require('@babel/runtime-corejs3/core-js/parse-float'),
              require('core-js/modules/es.array.iterator'),
              require('core-js/modules/es.object.to-string'),
              require('core-js/modules/es.promise'),
              require('core-js/modules/es.string.iterator'),
              require('core-js/modules/web.dom-collections.iterator'),
              require('@babel/runtime-corejs3/helpers/esm/toConsumableArray'),
              require('@babel/runtime-corejs3/regenerator'),
              require('regenerator-runtime/runtime'),
              require('@babel/runtime-corejs3/helpers/esm/asyncToGenerator'),
              require('@babel/runtime-corejs3/core-js/promise'),
              require('core-js/modules/es.array.filter'),
              require('core-js/modules/es.string.search'),
              require('@babel/runtime-corejs3/core-js/get-iterator'),
              require('@babel/runtime-corejs3/core-js/get-iterator-method'),
              require('@babel/runtime-corejs3/core-js/symbol'),
              require('@babel/runtime-corejs3/core-js/array/from'),
              require('@babel/runtime-corejs3/core-js/instance/index-of'),
              require('@babel/runtime-corejs3/core-js/instance/reverse'),
              require('@babel/runtime-corejs3/core-js/instance/ends-with'),
              require('@babel/runtime-corejs3/core-js/instance/reduce'),
              require('vue-runtime-helpers/dist/normalize-component.mjs'),
              require('vuetify/lib')
          )
        : 'function' == typeof define && define.amd
        ? define([
              'exports',
              'core-js/modules/es.function.name',
              '@babel/runtime-corejs3/helpers/esm/typeof',
              'core-js/modules/es.symbol',
              'core-js/modules/es.symbol.description',
              'core-js/modules/es.number.constructor',
              'core-js/modules/es.regexp.exec',
              'core-js/modules/es.string.replace',
              '@babel/runtime-corejs3/core-js/object/define-property',
              '@babel/runtime-corejs3/core-js/object/define-properties',
              '@babel/runtime-corejs3/core-js/object/get-own-property-descriptors',
              '@babel/runtime-corejs3/core-js/object/get-own-property-descriptor',
              '@babel/runtime-corejs3/core-js/object/get-own-property-symbols',
              '@babel/runtime-corejs3/core-js/instance/filter',
              '@babel/runtime-corejs3/core-js/instance/includes',
              '@babel/runtime-corejs3/core-js/instance/find',
              '@babel/runtime-corejs3/core-js/object/keys',
              '@babel/runtime-corejs3/core-js/instance/for-each',
              '@babel/runtime-corejs3/core-js/json/stringify',
              '@babel/runtime-corejs3/core-js/instance/concat',
              '@babel/runtime-corejs3/core-js/instance/starts-with',
              '@babel/runtime-corejs3/helpers/esm/defineProperty',
              '@babel/runtime-corejs3/core-js/object/assign',
              'core-js/modules/es.regexp.constructor',
              'core-js/modules/es.regexp.to-string',
              'core-js/modules/es.string.match',
              '@babel/runtime-corejs3/core-js/array/is-array',
              'core-js/modules/es.string.split',
              '@babel/runtime-corejs3/core-js/instance/map',
              '@babel/runtime-corejs3/core-js/parse-int',
              '@babel/runtime-corejs3/core-js/instance/slice',
              '@babel/runtime-corejs3/core-js/parse-float',
              'core-js/modules/es.array.iterator',
              'core-js/modules/es.object.to-string',
              'core-js/modules/es.promise',
              'core-js/modules/es.string.iterator',
              'core-js/modules/web.dom-collections.iterator',
              '@babel/runtime-corejs3/helpers/esm/toConsumableArray',
              '@babel/runtime-corejs3/regenerator',
              'regenerator-runtime/runtime',
              '@babel/runtime-corejs3/helpers/esm/asyncToGenerator',
              '@babel/runtime-corejs3/core-js/promise',
              'core-js/modules/es.array.filter',
              'core-js/modules/es.string.search',
              '@babel/runtime-corejs3/core-js/get-iterator',
              '@babel/runtime-corejs3/core-js/get-iterator-method',
              '@babel/runtime-corejs3/core-js/symbol',
              '@babel/runtime-corejs3/core-js/array/from',
              '@babel/runtime-corejs3/core-js/instance/index-of',
              '@babel/runtime-corejs3/core-js/instance/reverse',
              '@babel/runtime-corejs3/core-js/instance/ends-with',
              '@babel/runtime-corejs3/core-js/instance/reduce',
              'vue-runtime-helpers/dist/normalize-component.mjs',
              'vuetify/lib',
          ], t)
        : t(
              ((e = 'undefined' != typeof globalThis ? globalThis : e || self).main = {}),
              null,
              e._typeof,
              null,
              null,
              null,
              null,
              null,
              e._Object$defineProperty,
              e._Object$defineProperties,
              e._Object$getOwnPropertyDescriptors,
              e._Object$getOwnPropertyDescriptor,
              e._Object$getOwnPropertySymbols,
              e._filterInstanceProperty,
              e._includesInstanceProperty,
              e._findInstanceProperty,
              e._Object$keys,
              e._forEachInstanceProperty,
              e._JSON$stringify,
              e._concatInstanceProperty,
              e._startsWithInstanceProperty,
              e._defineProperty,
              e._Object$assign,
              null,
              null,
              null,
              e._Array$isArray,
              null,
              e._mapInstanceProperty,
              e._parseInt,
              e._sliceInstanceProperty,
              e._parseFloat,
              null,
              null,
              null,
              null,
              null,
              e._toConsumableArray,
              e._regeneratorRuntime,
              null,
              e._asyncToGenerator,
              e._Promise,
              null,
              null,
              e._getIterator,
              e._getIteratorMethod,
              e._Symbol,
              e._Array$from,
              e._indexOfInstanceProperty,
              e._reverseInstanceProperty,
              e._endsWithInstanceProperty,
              e._reduceInstanceProperty,
              e.__vue_normalize__,
              e.Vuetify
          );
})(
    this,
    function (
        e,
        t,
        r,
        i,
        l,
        n,
        a,
        s,
        o,
        u,
        c,
        f,
        d,
        h,
        m,
        p,
        v,
        b,
        y,
        S,
        g,
        j,
        x,
        O,
        P,
        I,
        k,
        V,
        w,
        C,
        q,
        T,
        D,
        L,
        $,
        A,
        K,
        R,
        _,
        M,
        F,
        E,
        U,
        N,
        H,
        z,
        W,
        G,
        B,
        J,
        Z,
        Y,
        Q,
        X
    ) {
        'use strict';
        function ee(e) {
            return e && 'object' == typeof e && 'default' in e ? e : { default: e };
        }
        var te = ee(r),
            re = ee(o),
            ie = ee(u),
            le = ee(c),
            ne = ee(f),
            ae = ee(d),
            se = ee(h),
            oe = ee(m),
            ue = ee(p),
            ce = ee(v),
            fe = ee(b),
            de = ee(y),
            he = ee(S),
            me = ee(g),
            pe = ee(j),
            ve = ee(x),
            be = ee(k),
            ye = ee(w),
            Se = ee(C),
            ge = ee(q),
            je = ee(T),
            xe = ee(R),
            Oe = ee(_),
            Pe = ee(F),
            Ie = ee(E),
            ke = ee(H),
            Ve = ee(z),
            we = ee(W),
            Ce = ee(G),
            qe = ee(B),
            Te = ee(J),
            De = ee(Z),
            Le = ee(Y),
            $e = ee(Q),
            Ae = require('property-expr'),
            Ke = {};
        function Re(e, t) {
            var r = ce.default(e);
            if (ae.default) {
                var i = ae.default(e);
                t &&
                    (i = se.default(i).call(i, function (t) {
                        return ne.default(e, t).enumerable;
                    })),
                    r.push.apply(r, i);
            }
            return r;
        }
        function _e(e) {
            for (var t = arguments, r = 1; r < arguments.length; r++) {
                var i,
                    l = null != t[r] ? t[r] : {};
                if (r % 2)
                    fe.default((i = Re(Object(l), !0))).call(i, function (t) {
                        pe.default(e, t, l[t]);
                    });
                else if (le.default) ie.default(e, le.default(l));
                else {
                    var n;
                    fe.default((n = Re(Object(l)))).call(n, function (t) {
                        re.default(e, t, ne.default(l, t));
                    });
                }
            }
            return e;
        }
        (Ke.cache = {}),
            (Ke.extendtoken = '$extend'),
            (Ke.reftoken = '$ref'),
            (Ke.pathtoken = '#'),
            (Ke.debug = !1),
            (Ke.clone = function (e) {
                var t, r;
                if (null === e || 'object' !== te.default(e) || 'function' == typeof e) return e;
                for (t in ((r = e.constructor()), e)) r[t] = Ke.clone(e[t]);
                return r;
            }),
            (Ke.findIds = function (e, t) {
                var r, i, l, n;
                for (i in ((r = !1), (l = {}), e))
                    (n = e[i]),
                        null != e.id && (r = e.id),
                        r && 'id' !== i && (l[i] = n),
                        'object' === te.default(n) && Ke.findIds(n, t);
                if (r) return (t[r] = l), l;
            }),
            (Ke.get_json_pointer = function (e, t, r) {
                var i, l, n;
                (l = e
                    .replace(/\\\//, '#SLASH#')
                    .replace(/\//g, '.')
                    .replace(/#SLASH#/, '/')),
                    fe.default((i = ce.default(r))).call(i, function (e) {
                        l = l.replace(e, r[e]);
                    }),
                    '.' === (l = l.replace(new RegExp('^' + Ke.pathtoken), ''))[0] && (l = l.substr(1, l.length - 1));
                try {
                    Ke.debug, (n = Ae.getter(l)(t));
                } catch (e) {
                    n = '';
                }
                return n;
            }),
            (Ke.replace = function (e, t, r, i) {
                var l, n, a, s, o, u;
                for (l in ((o = []), e))
                    null != (u = e[l]) && null != u[Ke.reftoken]
                        ? ((n = u[Ke.reftoken]),
                          ce.default(u).length,
                          be.default(n)
                              ? (n = Ke.replace(n, t, r, i))
                              : null != t[n]
                              ? (e[l] = t[n])
                              : String(n).match(new RegExp('^' + Ke.pathtoken)) &&
                                (e[l] = Ke.get_json_pointer(n, r, i)),
                          null != (null != (a = e[l]) ? a.length : void 0) &&
                              0 === (null != (s = e[l]) ? s.length : void 0) &&
                              Ke.debug,
                          o.push(void 0))
                        : 'object' === te.default(u)
                        ? o.push(Ke.replace(u, t, r, i))
                        : o.push(void 0);
                return o;
            }),
            (Ke.extend = function (e, t) {
                var r, i, l, n, a, s;
                if ('object' === te.default(e)) {
                    for (r in ((l = []), e)) {
                        if (((s = e[r]), r === Ke.extendtoken && null != s[Ke.reftoken])) {
                            for (n in ((i = Ke.get_json_pointer(s[Ke.reftoken], e, t)), s))
                                (a = s[n]), n !== Ke.reftoken && (i[n] = a);
                            delete e[r];
                        }
                        'object' === te.default(s) ? l.push((s = Ke.extend(s))) : l.push(void 0);
                    }
                    return l;
                }
            }),
            (Ke.resolve = function (e, t) {
                var r;
                return (r = {}), Ke.findIds(e, r), Ke.debug && ce.default(r).length, Ke.replace(e, r, e, t), e;
            }),
            (Ke.evaluate = function (e, t, r) {
                var i, l, n;
                for (i in (null == r && (r = Ke.evaluateStr), (l = Ke.clone(e))))
                    'string' == typeof (n = l[i]) && (e[i] = r(n, t)),
                        'object' === te.default(n) && (e[i] = Ke.evaluate(n, t));
                return e;
            }),
            (Ke.evaluateStr = function (e, t) {
                if ('string' != typeof e) return e;
                if ('{' !== e[0] || '}' !== e[e.length - 1])
                    return e.replace(/(\{)(.*?)(\})/g, function (e, r, i) {
                        var l;
                        if (((l = ''), null == t || null == i)) return l;
                        if (null != t[i] && 'function' == typeof t[i]) l = t[i]();
                        else if (null != t[i]) l = t[i];
                        else {
                            try {
                                (i = i.replace(new RegExp('^' + Ke.pathtoken + '/'), '').replace(/\//g, '.')),
                                    (l = Ae.getter(i)(t));
                            } catch (e) {
                                (err = e), (l = '');
                            }
                            null == l && (l = '');
                        }
                        return Ke.evaluateStr(l, t), l;
                    });
                try {
                    return Ae.getter(e.replace(/^{/, '').replace(/}$/, ''))(t);
                } catch (e) {
                    return null;
                }
            });
        var Me = {},
            Fe = function (e) {
                var t;
                return ye.default((t = ce.default(e || {}))).call(t, function (t) {
                    return _e(_e({}, e[t]), {}, { key: t });
                });
            };
        Me.prepareFullSchema = function (e, t) {
            var r,
                i,
                l,
                n,
                a = JSON.parse(de.default(e));
            (a.pattern && (a.patternRegexp = new RegExp(a.pattern)), be.default(a.type)) &&
                ((a.nullable = oe.default((r = a.type)).call(r, 'null')),
                (a.type = ue.default((i = a.type)).call(i, function (e) {
                    return 'null' !== e;
                })),
                a.nullable &&
                    a.enum &&
                    (a.enum = se.default((l = a.enum)).call(l, function (e) {
                        return null !== e;
                    })));
            if ('object' !== a.type) return a;
            ((a.properties = JSON.parse(de.default(Fe(a.properties)))),
            (a.required = a.required || []),
            (a.dependencies = a.dependencies || {}),
            a.dependencies) &&
                fe.default((n = ce.default(a.dependencies))).call(n, function (e) {
                    var r,
                        i,
                        l,
                        n,
                        s,
                        o = a.dependencies[e];
                    if (t) {
                        var u = (function (e, t) {
                            for (var r = t.split('.'), i = 0; i < r.length; i++) {
                                var l;
                                if (oe.default((l = [null, void 0])).call(l, e)) break;
                                e = e[r[i]];
                            }
                            return e;
                        })(t, e);
                        oe.default((r = [null, void 0, !1])).call(r, u) ||
                            (be.default(u) && 0 === u.length) ||
                            ('object' === te.default(u) && 0 === ce.default(u).length) ||
                            ((a.required = he.default((i = a.required)).call(i, o.required || [])),
                            (a.properties = he.default((l = a.properties)).call(l, Fe(o.properties))),
                            o.oneOf && (a.oneOf = he.default((n = a.oneOf || [])).call(n, o.oneOf)),
                            o.allOf && (a.allOf = he.default((s = a.allOf || [])).call(s, o.allOf)));
                    }
                });
            return a;
        };
        var Ee = {
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
            Ue = {
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
            Ne = {
                time: function (e, t) {
                    var r,
                        i = new Date(
                            he.default((r = ''.concat(new Date().toISOString().split('T')[0], 'T'))).call(r, e)
                        );
                    return new Date(i.getTime() + 6e4 * i.getTimezoneOffset()).toLocaleTimeString(t);
                },
                date: function (e, t) {
                    var r = new Date(e);
                    return new Date(r.getTime() + 6e4 * r.getTimezoneOffset()).toLocaleDateString(t);
                },
                'date-time': function (e, t) {
                    return new Date(e).toLocaleString(t);
                },
            },
            He = {
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
        function ze(e, t) {
            var r = ce.default(e);
            if (ae.default) {
                var i = ae.default(e);
                t &&
                    (i = se.default(i).call(i, function (t) {
                        return ne.default(e, t).enumerable;
                    })),
                    r.push.apply(r, i);
            }
            return r;
        }
        function We(e) {
            for (var t = arguments, r = 1; r < arguments.length; r++) {
                var i,
                    l = null != t[r] ? t[r] : {};
                if (r % 2)
                    fe.default((i = ze(Object(l), !0))).call(i, function (t) {
                        pe.default(e, t, l[t]);
                    });
                else if (le.default) ie.default(e, le.default(l));
                else {
                    var n;
                    fe.default((n = ze(Object(l)))).call(n, function (t) {
                        re.default(e, t, ne.default(l, t));
                    });
                }
            }
            return e;
        }
        var Ge = {
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
                            r = ue.default((e = ce.default(t))).call(e, function (e) {
                                return !!t[e].const;
                            });
                        if (r)
                            return We(
                                We({}, t[r]),
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
                                ue.default((e = this.fullSchema.required)).call(e, function (e) {
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
                    var r = this;
                    (this.showCurrentOneOf = !1),
                        this.$nextTick(function () {
                            (r.showCurrentOneOf = !0),
                                r.currentOneOf ? r.fixProperties() : r.$set(r.subModels, 'currentOneOf', {}),
                                r.input(r.value),
                                r.$emit('change', r.value);
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
                        (e.properties || e.allOf || be.default(e.items)) &&
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
                        var r, i;
                        if (this.fullSchema.allOf)
                            fe.default((r = this.fullSchema.allOf)).call(r, function (r, i) {
                                t.$set(t.subModels, 'allOf-' + i, JSON.parse(de.default(e)));
                            });
                        if (
                            ((this.currentOneOf = null),
                            this.subSchemas && !this.currentOneOf && this.subSchemasConstProp)
                        )
                            if (e && e[this.subSchemasConstProp.key])
                                this.currentOneOf = ue.default((i = this.subSchemas)).call(i, function (r) {
                                    return (
                                        r.properties[t.subSchemasConstProp.key].const === e[t.subSchemasConstProp.key]
                                    );
                                });
                            else if (this.fullSchema.default) {
                                var l;
                                this.currentOneOf = ue.default((l = this.subSchemas)).call(l, function (e) {
                                    return (
                                        e.properties[t.subSchemasConstProp.key].const ===
                                        t.fullSchema.default[t.subSchemasConstProp.key]
                                    );
                                });
                            }
                        this.currentOneOf
                            ? this.$set(this.subModels, 'currentOneOf', JSON.parse(de.default(e)))
                            : this.$set(this.subModels, 'currentOneOf', {});
                    }
                },
                renderSection: function (e, t, r, i) {
                    if (i) {
                        var l,
                            n,
                            a,
                            s,
                            o = r || t.key;
                        return 'hidden' === t['x-display'] || (t.readOnly && this.fullOptions.hideReadOnly)
                            ? [i]
                            : 'expansion-panels' === this.display
                            ? [
                                  e('v-expansion-panel', [
                                      e(
                                          'v-expansion-panel-header',
                                          {
                                              class: {
                                                  'error--text':
                                                      this.childrenInputs[o] &&
                                                      this.childrenInputs[o].hasValidatedChildError,
                                              },
                                          },
                                          [t.title]
                                      ),
                                      e('v-expansion-panel-content', { props: { eager: !0 } }, [i]),
                                  ]),
                              ]
                            : 'tabs' === this.display
                            ? [
                                  e(
                                      'v-tab',
                                      {
                                          props: {
                                              href: he
                                                  .default(
                                                      (l = he
                                                          .default((n = '#tab-'.concat(this.fullOptions.idPrefix)))
                                                          .call(n, this.dashKey, '-'))
                                                  )
                                                  .call(l, o),
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
                                              value: he
                                                  .default(
                                                      (a = he
                                                          .default((s = 'tab-'.concat(this.fullOptions.idPrefix)))
                                                          .call(s, this.dashKey, '-'))
                                                  )
                                                  .call(a, o),
                                              eager: !0,
                                          },
                                      },
                                      [e('v-card', { props: { tile: !0, flat: !0 } }, [e('v-card-text', [i])])]
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
                                      i,
                                  ]),
                              ];
                    }
                },
                renderChildProp: function (e, t, r, i, l) {
                    var n = this,
                        a = r ? this.subModels : this.value,
                        s = r || t.key,
                        o = a[s];
                    return (
                        void 0 === o &&
                            ((o = this.defaultValue(t)),
                            void 0 !== t.default && (o = JSON.parse(de.default(t.default))),
                            null != o && (this.$set(a, s, o), this.input(this.value))),
                        e('h-form-renderer', {
                            props: {
                                schema: We({ readOnly: this.fullSchema.readOnly }, t),
                                value: o,
                                modelRoot: this.modelRoot || this.value,
                                modelKey: s,
                                parentKey: ''.concat(this.fullKey, '.'),
                                options: this.fullOptions,
                                sectionDepth: i,
                            },
                            on: {
                                error: function (e) {
                                    return n.$emit('error', e);
                                },
                                input: function (e) {
                                    void 0 === e
                                        ? be.default(a) && Se.default(s) < a.length - 1
                                            ? n.$set(a, s, e)
                                            : n.$delete(a, s)
                                        : n.$set(a, s, e),
                                        n.$emit('input', n.value);
                                },
                                change: function (e) {
                                    return n.$emit('change', n.value);
                                },
                            },
                        })
                    );
                },
                renderObjectContainer: function (e) {
                    var t,
                        r,
                        i,
                        l = this;
                    if ('object' === this.fullSchema.type || be.default(this.fullSchema.items)) {
                        if (((this.isObjectContainer = !0), oe.default((t = [void 0, null])).call(t, this.value)))
                            return [];
                        var n,
                            a,
                            s,
                            o = [],
                            u = [];
                        if (this.fullSchema.properties)
                            fe.default((n = this.fullSchema.properties)).call(n, function (t) {
                                if (l.isSection(t)) {
                                    var r = l.renderChildProp(e, t, null, l.sectionDepth + 1);
                                    u = he.default(u).call(u, l.renderSection(e, t, null, r));
                                } else o.push(l.renderChildProp(e, t, null, l.sectionDepth));
                            });
                        if (be.default(this.fullSchema.items))
                            fe.default((a = this.fullSchema.items)).call(a, function (t, r) {
                                var i = We(We({}, t), {}, { key: '' + r }),
                                    n = l.value.length > r || (l.fullSchema.minItems && l.fullSchema.minItems > r);
                                if (l.isSection(t)) {
                                    var a = l.renderChildProp(e, i, null, l.sectionDepth + 1, n);
                                    u = he.default(u).call(u, l.renderSection(e, i, null, a));
                                } else o.push(l.renderChildProp(e, i, null, l.sectionDepth, n));
                            });
                        if (this.fullSchema.allOf)
                            fe.default((s = this.fullSchema.allOf)).call(s, function (t, r) {
                                var i = We(We({}, t), {}, { type: 'object', key: '' + r });
                                if (l.isSection(t)) {
                                    var n = l.renderChildProp(e, i, 'allOf-' + r, l.sectionDepth + 1);
                                    u = he.default(u).call(u, l.renderSection(e, i, 'allOf-' + r, n));
                                } else o.push(l.renderChildProp(e, i, 'allOf-' + r, l.sectionDepth));
                            });
                        if ('expansion-panels' === this.display && u.length) {
                            var c = We(We({}, this.fullOptions.expansionPanelsProps), this.fullSchema['x-props']);
                            u = [e('v-expansion-panels', { props: c }, u)];
                        }
                        if ('tabs' === this.display && u.length) {
                            var f = We(We({}, this.fullOptions.tabsProps), this.fullSchema['x-props']);
                            this.currentTab &&
                                this.childrenInputs[this.currentTab] &&
                                this.childrenInputs[this.currentTab].hasValidatedChildError &&
                                (f.sliderColor = 'error'),
                                (u = [
                                    e(
                                        'v-tabs',
                                        {
                                            props: f,
                                            on: {
                                                change: function (e) {
                                                    l.currentTab = e.split('-').pop();
                                                },
                                            },
                                        },
                                        u
                                    ),
                                ]);
                        }
                        if (this.subSchemas && this.subSchemas.length) {
                            var d,
                                h = We(
                                    We({}, this.commonFieldProps),
                                    {},
                                    {
                                        value: this.currentOneOf,
                                        label:
                                            (this.subSchemasConstProp && this.subSchemasConstProp.title) ||
                                            this.fullSchema.title,
                                        items: se.default((d = this.subSchemas)).call(d, function (e) {
                                            return e.properties && e.properties[l.subSchemasConstProp.key];
                                        }),
                                        required: this.subSchemasRequired,
                                        clearable: !this.subSchemasRequired,
                                        itemValue: function (e) {
                                            return e.properties[l.subSchemasConstProp.key].const;
                                        },
                                        itemText: 'title',
                                        rules: this.subSchemasRules,
                                        returnObject: !0,
                                    }
                                ),
                                m = {
                                    input: function (e) {
                                        l.currentOneOf = e;
                                    },
                                };
                            o.push(e('v-select', { props: h, on: m }, [this.renderTooltip(e, 'append-outer')])),
                                this.currentOneOf &&
                                    this.showCurrentOneOf &&
                                    o.push(
                                        this.renderChildProp(
                                            e,
                                            We(We({}, this.currentOneOf), {}, { type: 'object', title: null }),
                                            'currentOneOf',
                                            this.sectionDepth + 1
                                        )
                                    );
                        }
                        return [
                            e(
                                'v-row',
                                { class: 'ma-0 '.concat(this.fullOptions.objectContainerClass) },
                                he
                                    .default(
                                        (r = he
                                            .default(
                                                (i = [
                                                    this.fullSchema.description &&
                                                        e('v-col', {
                                                            props: { cols: 12 },
                                                            class: { 'pa-0': !0 },
                                                            domProps: { innerHTML: this.htmlDescription },
                                                        }),
                                                ])
                                            )
                                            .call(i, o))
                                    )
                                    .call(r, u)
                            ),
                        ];
                    }
                },
            },
        };
        function Be(e, t) {
            var r = ce.default(e);
            if (ae.default) {
                var i = ae.default(e);
                t &&
                    (i = se.default(i).call(i, function (t) {
                        return ne.default(e, t).enumerable;
                    })),
                    r.push.apply(r, i);
            }
            return r;
        }
        function Je(e) {
            for (var t = arguments, r = 1; r < arguments.length; r++) {
                var i,
                    l = null != t[r] ? t[r] : {};
                if (r % 2)
                    fe.default((i = Be(Object(l), !0))).call(i, function (t) {
                        pe.default(e, t, l[t]);
                    });
                else if (le.default) ie.default(e, le.default(l));
                else {
                    var n;
                    fe.default((n = Be(Object(l)))).call(n, function (t) {
                        re.default(e, t, ne.default(l, t));
                    });
                }
            }
            return e;
        }
        var Ze = function (e) {
                var t = '' + e;
                return 1 === t.length ? '0' + t : t;
            },
            Ye = function (e) {
                var t = new Date(),
                    r = e[0].split('-');
                t.setFullYear(Number(r[0])), t.setMonth(Number(r[1]) - 1), t.setDate(Number(r[2]));
                var i = e[1].split(':');
                return (
                    t.setHours(Number(i[0] || '00')),
                    t.setMinutes(Number(i[1] || '00')),
                    t.setSeconds(0),
                    (function (e) {
                        var t,
                            r,
                            i,
                            l,
                            n,
                            a,
                            s,
                            o,
                            u = e.getTimezoneOffset(),
                            c = he
                                .default((t = ''.concat(Ze(Se.default(Math.abs(u / 60))), ':')))
                                .call(t, Ze(Math.abs(u % 60)));
                        return (
                            (o = u < 0 ? '+'.concat(c) : u > 0 ? '-'.concat(c) : 'Z'),
                            he
                                .default(
                                    (r = he
                                        .default(
                                            (i = he
                                                .default(
                                                    (l = he
                                                        .default(
                                                            (n = he
                                                                .default(
                                                                    (a = he
                                                                        .default((s = ''.concat(e.getFullYear(), '-')))
                                                                        .call(s, Ze(e.getMonth() + 1), '-'))
                                                                )
                                                                .call(a, Ze(e.getDate()), 'T'))
                                                        )
                                                        .call(n, Ze(e.getHours()), ':'))
                                                )
                                                .call(l, Ze(e.getMinutes()), ':'))
                                        )
                                        .call(i, Ze(e.getSeconds())))
                                )
                                .call(r, o)
                        );
                    })(t)
                );
            },
            Qe = function (e) {
                return e + ':00Z';
            },
            Xe = {
                data: function () {
                    return { dateProp: { tab: 'tab-date', menu: !1, parts: [null, null], lastValue: null } };
                },
                methods: {
                    renderDateProp: function (e) {
                        var t,
                            r = this;
                        if (
                            'string' === this.fullSchema.type &&
                            oe.default((t = ['date', 'date-time', 'time'])).call(t, this.fullSchema.format)
                        ) {
                            var i,
                                l,
                                n,
                                a,
                                s,
                                o,
                                u = this.fullOptions.icons.calendar;
                            if ('time' === this.fullSchema.format)
                                (i = e('v-time-picker', {
                                    props: Je(
                                        { value: ((o = this.value), o ? ge.default(o).call(o, 0, 5) : '') },
                                        this.fullSchema['x-props']
                                    ),
                                    on: {
                                        input: function (e) {
                                            return r.input(Qe(e));
                                        },
                                        change: function (e) {
                                            return r.change(Qe(e));
                                        },
                                    },
                                })),
                                    (u = this.fullOptions.icons.clock);
                            else if ('date' === this.fullSchema.format)
                                i = e('v-date-picker', {
                                    props: Je({ value: this.value }, this.fullSchema['x-props']),
                                    on: {
                                        input: function (e) {
                                            r.input(e), (r.dateProp.menu = !1);
                                        },
                                        change: function (e) {
                                            return r.change(e);
                                        },
                                    },
                                });
                            else {
                                this.value !== this.dateProp.lastValue &&
                                    (this.dateProp.parts =
                                        ((l = new Date(this.value)),
                                        [
                                            he
                                                .default(
                                                    (n = he
                                                        .default((a = ''.concat(l.getFullYear(), '-')))
                                                        .call(a, Ze(l.getMonth() + 1), '-'))
                                                )
                                                .call(n, Ze(l.getDate())),
                                            he
                                                .default((s = ''.concat(Ze(l.getHours()), ':')))
                                                .call(s, Ze(l.getMinutes())),
                                        ])),
                                    (this.dateProp.lastValue = this.value);
                                var c = function () {
                                        if (r.dateProp.parts[1]) {
                                            var e = Ye(r.dateProp.parts);
                                            r.input(e), r.change(e);
                                        }
                                    },
                                    f = [
                                        e('v-tab', { props: { href: '#tab-date' } }, [
                                            e('v-icon', [this.fullOptions.icons.calendar]),
                                        ]),
                                        e(
                                            'v-tab',
                                            { props: { href: '#tab-time', disabled: !this.dateProp.parts[0] } },
                                            [e('v-icon', [this.fullOptions.icons.clock])]
                                        ),
                                        e('v-tab-item', { props: { value: 'tab-date' } }, [
                                            e('v-date-picker', {
                                                props: Je(
                                                    Je({}, this.fullOptions.datePickerProps),
                                                    {},
                                                    { locale: this.fullOptions.locale, value: this.dateProp.parts[0] }
                                                ),
                                                on: {
                                                    input: function (e) {
                                                        (r.dateProp.parts[0] = e), (r.dateProp.tab = 'tab-time'), c();
                                                    },
                                                },
                                            }),
                                        ]),
                                        e('v-tab-item', { props: { value: 'tab-time' } }, [
                                            e('v-time-picker', {
                                                props: Je(
                                                    Je({}, this.fullOptions.timePickerProps),
                                                    {},
                                                    { locale: this.fullOptions.locale, value: this.dateProp.parts[1] }
                                                ),
                                                on: {
                                                    input: function (e) {
                                                        (r.dateProp.parts[1] = e), c();
                                                    },
                                                },
                                            }),
                                        ]),
                                    ];
                                i = e(
                                    'v-tabs',
                                    {
                                        props: { grow: !0, value: this.dateProp.tab },
                                        on: {
                                            input: function (e) {
                                                r.dateProp.tab = e;
                                            },
                                        },
                                        class: 'vjsf-date-time',
                                    },
                                    f
                                );
                            }
                            var d = {
                                activator: function (t) {
                                    var i = t.on;
                                    return e(
                                        'v-text-field',
                                        {
                                            props: Je(
                                                Je({}, r.commonFieldProps),
                                                {},
                                                {
                                                    value: r.formattedValue,
                                                    clearable: !r.required,
                                                    readonly: !0,
                                                    prependIcon: u,
                                                }
                                            ),
                                            on: Je(
                                                Je({}, i),
                                                {},
                                                {
                                                    input: function (e) {
                                                        return r.input(e);
                                                    },
                                                    change: function (e) {
                                                        return r.change(e);
                                                    },
                                                }
                                            ),
                                        },
                                        [r.renderTooltip(e, 'append-outer')]
                                    );
                                },
                            };
                            return [
                                e(
                                    'v-menu',
                                    {
                                        scopedSlots: d,
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
                                                (r.dateProp.menu = e), (r.dateProp.tab = 'tab-date');
                                            },
                                        },
                                    },
                                    [i]
                                ),
                            ];
                        }
                    },
                },
            };
        function et(e, t) {
            var r = ce.default(e);
            if (ae.default) {
                var i = ae.default(e);
                t &&
                    (i = se.default(i).call(i, function (t) {
                        return ne.default(e, t).enumerable;
                    })),
                    r.push.apply(r, i);
            }
            return r;
        }
        function tt(e) {
            for (var t = arguments, r = 1; r < arguments.length; r++) {
                var i,
                    l = null != t[r] ? t[r] : {};
                if (r % 2)
                    fe.default((i = et(Object(l), !0))).call(i, function (t) {
                        pe.default(e, t, l[t]);
                    });
                else if (le.default) ie.default(e, le.default(l));
                else {
                    var n;
                    fe.default((n = et(Object(l)))).call(n, function (t) {
                        re.default(e, t, ne.default(l, t));
                    });
                }
            }
            return e;
        }
        var rt = {
            computed: {
                isSimpleProp: function () {
                    var e, t;
                    return (
                        'string' === this.fullSchema.type ||
                        oe.default((e = ['number', 'integer'])).call(e, this.fullSchema.type) ||
                        'boolean' === this.fullSchema.type ||
                        ('array' === this.fullSchema.type &&
                            oe.default((t = ['string', 'number', 'integer'])).call(t, this.fullSchema.items.type))
                    );
                },
            },
            methods: {
                renderSimpleProp: function (e) {
                    var t,
                        r,
                        i = this;
                    if (this.isSimpleProp) {
                        var l = tt({}, this.commonFieldProps),
                            n = [],
                            a = {},
                            s = {
                                input: function (e) {
                                    return i.input(e);
                                },
                                change: function (e) {
                                    return i.change(e);
                                },
                            };
                        if (
                            (oe.default((t = ['number', 'integer'])).call(t, this.fullSchema.type) &&
                                (s.input = function (e) {
                                    i.input('integer' === i.fullSchema.type ? Se.default(e, 10) : je.default(e));
                                }),
                            'boolean' === this.fullSchema.type &&
                                (s.change = function (e) {
                                    i.input(e || !1), i.change(e || !1);
                                }),
                            'array' === this.fullSchema.type &&
                                oe.default((r = ['string', 'number', 'integer'])).call(r, this.fullSchema.items.type) &&
                                'string' !== this.fullSchema.items.type &&
                                ((l.type = 'number'),
                                (s.input = function (e) {
                                    var t,
                                        r = se
                                            .default(
                                                (t = ye.default(e).call(e, function (e) {
                                                    return 'integer' === i.fullSchema.items.type
                                                        ? Se.default(e, 10)
                                                        : je.default(e);
                                                }))
                                            )
                                            .call(t, function (e) {
                                                return !isNaN(e);
                                            });
                                    i.input(r);
                                })),
                            this.htmlDescription)
                        ) {
                            n.push(this.renderTooltip(e, 'append-outer'));
                        }
                        var o = this.fullSchema['x-rules'];
                        return o
                            ? [
                                  e('validation-provider', {
                                      props: { name: l.label, rules: o },
                                      scopedSlots: {
                                          default: function (t) {
                                              var r = t.errors;
                                              return e(
                                                  i.fullSchema.tag,
                                                  {
                                                      props: tt(tt({}, l), {}, { required: !0, 'error-messages': r }),
                                                      on: s,
                                                      scopedSlots: a,
                                                  },
                                                  n
                                              );
                                          },
                                      },
                                  }),
                              ]
                            : [e(this.fullSchema.tag, { props: l, on: s, scopedSlots: a }, n)];
                    }
                },
            },
        };
        function it(e, t) {
            var r = ce.default(e);
            if (ae.default) {
                var i = ae.default(e);
                t &&
                    (i = se.default(i).call(i, function (t) {
                        return ne.default(e, t).enumerable;
                    })),
                    r.push.apply(r, i);
            }
            return r;
        }
        function lt(e) {
            for (var t = arguments, r = 1; r < arguments.length; r++) {
                var i,
                    l = null != t[r] ? t[r] : {};
                if (r % 2)
                    fe.default((i = it(Object(l), !0))).call(i, function (t) {
                        pe.default(e, t, l[t]);
                    });
                else if (le.default) ie.default(e, le.default(l));
                else {
                    var n;
                    fe.default((n = it(Object(l)))).call(n, function (t) {
                        re.default(e, t, ne.default(l, t));
                    });
                }
            }
            return e;
        }
        var nt = function (e) {
                return new Ie.default(function (t) {
                    var r = new FileReader();
                    (r.onload = function () {
                        return t(r.result);
                    }),
                        r.readAsDataURL(e);
                });
            },
            at = (function () {
                var e = Pe.default(
                    Oe.default.mark(function e(t, r, i) {
                        var l, n;
                        return Oe.default.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        if (
                                            ((l = t),
                                            !(
                                                'string' === r.type ||
                                                (r.properties.data && 'string' === r.properties.data.type)
                                            ))
                                        ) {
                                            e.next = 7;
                                            break;
                                        }
                                        return (e.next = 5), nt(t);
                                    case 5:
                                        (n = e.sent), (l = i ? n : n.split(';base64,')[1]);
                                    case 7:
                                        if ('string' !== r.type) {
                                            e.next = 9;
                                            break;
                                        }
                                        return e.abrupt('return', l);
                                    case 9:
                                        return e.abrupt('return', {
                                            name: t.name,
                                            lastModified: new Date(t.lastModified).toISOString(),
                                            size: t.size,
                                            type: t.type,
                                            data: l,
                                        });
                                    case 10:
                                    case 'end':
                                        return e.stop();
                                }
                        }, e);
                    })
                );
                return function (t, r, i) {
                    return e.apply(this, arguments);
                };
            })(),
            st = {
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
                            var r = lt(lt({}, this.commonFieldProps), this.fullOptions.fileInputProps);
                            delete r.value;
                            var i = {};
                            this.fullSchema.contentMediaType && (i.accept = this.fullSchema.contentMediaType),
                                this.fullSchema.items &&
                                    this.fullSchema.items.contentMediaType &&
                                    (i.accept = this.fullSchema.items.contentMediaType),
                                'array' === this.fullSchema.type && (i.multiple = !0);
                            var l,
                                n = xe.default(this.renderPropSlots(e)),
                                a = {
                                    change:
                                        ((l = Pe.default(
                                            Oe.default.mark(function e(r) {
                                                var i, l;
                                                return Oe.default.wrap(function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if ('array' !== t.fullSchema.type) {
                                                                    e.next = 8;
                                                                    break;
                                                                }
                                                                return (
                                                                    (e.next = 3),
                                                                    Ie.default.all(
                                                                        ye.default(r).call(r, function (e) {
                                                                            return at(
                                                                                e,
                                                                                t.fullSchema.items,
                                                                                t.fullOptions.filesAsDataUrl
                                                                            );
                                                                        })
                                                                    )
                                                                );
                                                            case 3:
                                                                (i = e.sent), t.input(i), t.change(i), (e.next = 13);
                                                                break;
                                                            case 8:
                                                                return (
                                                                    (e.next = 10),
                                                                    at(
                                                                        r,
                                                                        t.resolvedSchema,
                                                                        t.fullOptions.filesAsDataUrl
                                                                    )
                                                                );
                                                            case 10:
                                                                (l = e.sent), t.input(l), t.change(l);
                                                            case 13:
                                                            case 'end':
                                                                return e.stop();
                                                        }
                                                }, e);
                                            })
                                        )),
                                        function (e) {
                                            return l.apply(this, arguments);
                                        }),
                                };
                            return (
                                this.htmlDescription && n.push(this.renderTooltip(e, 'append-outer')),
                                [e('v-file-input', { props: r, attrs: i, on: a }, n)]
                            );
                        }
                    },
                },
            };
        function ot(e, t) {
            var r = ce.default(e);
            if (ae.default) {
                var i = ae.default(e);
                t &&
                    (i = se.default(i).call(i, function (t) {
                        return ne.default(e, t).enumerable;
                    })),
                    r.push.apply(r, i);
            }
            return r;
        }
        function ut(e) {
            for (var t = arguments, r = 1; r < arguments.length; r++) {
                var i,
                    l = null != t[r] ? t[r] : {};
                if (r % 2)
                    fe.default((i = ot(Object(l), !0))).call(i, function (t) {
                        pe.default(e, t, l[t]);
                    });
                else if (le.default) ie.default(e, le.default(l));
                else {
                    var n;
                    fe.default((n = ot(Object(l)))).call(n, function (t) {
                        re.default(e, t, ne.default(l, t));
                    });
                }
            }
            return e;
        }
        var ct = {
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
                            var r = [this.renderTooltip(e, 'append')];
                            return (
                                r.push(
                                    e('v-menu', {
                                        props: {
                                            closeOnContentClick: !1,
                                            closeOneClick: !0,
                                            direction: 'bottom',
                                            offsetY: !0,
                                        },
                                        scopedSlots: {
                                            activator: function (r) {
                                                var i = r.on;
                                                return e('div', {
                                                    on: i,
                                                    style: 'background-color: '.concat(t.value, ';margin-left: 10px;'),
                                                    class: t.value
                                                        ? 'color-picker-trigger'
                                                        : 'color-picker-trigger color-picker-trigger-empty',
                                                });
                                            },
                                            default: function () {
                                                return e('v-color-picker', {
                                                    props: ut(
                                                        ut(
                                                            ut({ flat: !0 }, t.fullOptions.colorPickerProps),
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
                                            props: ut(
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
                                        r
                                    ),
                                ]
                            );
                        }
                    },
                },
            },
            ft = {
                getSelectItems: function (e, t, r, i) {
                    var l = [];
                    if (e)
                        if (
                            ('object' === t.type && t.properties && ce.default(t.properties).length) ||
                            ('array' === t.type &&
                                t.items &&
                                'object' === t.items.type &&
                                t.items.properties &&
                                ce.default(t.items.properties).length)
                        ) {
                            var n,
                                a = t.properties
                                    ? ye.default((n = t.properties)).call(n, function (e) {
                                          return e.key;
                                      })
                                    : ce.default(t.items.properties);
                            fe.default(e).call(e, function (e) {
                                var t = {};
                                fe.default(a).call(a, function (r) {
                                    void 0 !== e[r] && (t[r] = e[r]);
                                }),
                                    l.push(t);
                            });
                        } else
                            fe.default(e).call(e, function (e) {
                                if ('object' === te.default(e)) l.push(e);
                                else {
                                    var t = pe.default({}, r, e);
                                    i && (t[i] = e), l.push(t);
                                }
                            });
                    else;
                    return l;
                },
            },
            dt = function (e, t, r) {
                var i, l;
                return (
                    !oe.default((i = [null, void 0])).call(i, e) &&
                    !oe.default((l = [null, void 0])).call(l, t) &&
                    de.default(e[r]) === de.default(t[r])
                );
            };
        function ht(e, t) {
            var r;
            if (void 0 === we.default || null == Ve.default(e)) {
                if (
                    be.default(e) ||
                    (r = (function (e, t) {
                        var r;
                        if (!e) return;
                        if ('string' == typeof e) return mt(e, t);
                        var i = ge.default((r = Object.prototype.toString.call(e))).call(r, 8, -1);
                        'Object' === i && e.constructor && (i = e.constructor.name);
                        if ('Map' === i || 'Set' === i) return Ce.default(e);
                        if ('Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return mt(e, t);
                    })(e)) ||
                    (t && e && 'number' == typeof e.length)
                ) {
                    r && (e = r);
                    var i = 0,
                        l = function () {};
                    return {
                        s: l,
                        n: function () {
                            return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
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
            var n,
                a = !0,
                s = !1;
            return {
                s: function () {
                    r = ke.default(e);
                },
                n: function () {
                    var e = r.next();
                    return (a = e.done), e;
                },
                e: function (e) {
                    (s = !0), (n = e);
                },
                f: function () {
                    try {
                        a || null == r.return || r.return();
                    } finally {
                        if (s) throw n;
                    }
                },
            };
        }
        function mt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
            return i;
        }
        function pt(e, t) {
            var r = ce.default(e);
            if (ae.default) {
                var i = ae.default(e);
                t &&
                    (i = se.default(i).call(i, function (t) {
                        return ne.default(e, t).enumerable;
                    })),
                    r.push.apply(r, i);
            }
            return r;
        }
        function vt(e) {
            for (var t = arguments, r = 1; r < arguments.length; r++) {
                var i,
                    l = null != t[r] ? t[r] : {};
                if (r % 2)
                    fe.default((i = pt(Object(l), !0))).call(i, function (t) {
                        pe.default(e, t, l[t]);
                    });
                else if (le.default) ie.default(e, le.default(l));
                else {
                    var n;
                    fe.default((n = pt(Object(l)))).call(n, function (t) {
                        re.default(e, t, ne.default(l, t));
                    });
                }
            }
            return e;
        }
        (ft.fillSelectItems = function (e, t, r, i, l) {
            if (t)
                if ('array' === e.type) {
                    var n, a;
                    fe.default(
                        (n = Te.default(
                            (a = ye.default(t).call(t, function (e) {
                                return e;
                            }))
                        ).call(a))
                    ).call(n, function (e) {
                        var t = l ? e : pe.default({}, i, e);
                        ue.default(r).call(r, function (e) {
                            return dt(e, t, i);
                        }) || r.push(t);
                    });
                } else {
                    var s = l ? t : pe.default({}, i, t);
                    ue.default(r).call(r, function (e) {
                        return dt(e, s, i);
                    }) || r.push(s);
                }
        }),
            (ft.fillList = function (e, t, r, i) {
                if (t)
                    return r.length
                        ? (fe.default(r).call(r, function (e) {
                              ue.default(t).call(t, function (t) {
                                  return dt(e, t, i);
                              }) || t.push(e);
                          }),
                          fe.default(t).call(t, function (e, l) {
                              ue.default(r).call(r, function (t) {
                                  return dt(t, e, i);
                              }) || (t[l] = null);
                          }),
                          se.default(t).call(t, function (e) {
                              return !!e;
                          }))
                        : [];
            });
        var bt = require('match-all'),
            yt = require('debounce');
        function St(e, t) {
            var r = ce.default(e);
            if (ae.default) {
                var i = ae.default(e);
                t &&
                    (i = se.default(i).call(i, function (t) {
                        return ne.default(e, t).enumerable;
                    })),
                    r.push.apply(r, i);
            }
            return r;
        }
        function gt(e) {
            for (var t = arguments, r = 1; r < arguments.length; r++) {
                var i,
                    l = null != t[r] ? t[r] : {};
                if (r % 2)
                    fe.default((i = St(Object(l), !0))).call(i, function (t) {
                        pe.default(e, t, l[t]);
                    });
                else if (le.default) ie.default(e, le.default(l));
                else {
                    var n;
                    fe.default((n = St(Object(l)))).call(n, function (t) {
                        re.default(e, t, ne.default(l, t));
                    });
                }
            }
            return e;
        }
        function jt(e, t) {
            var r = ce.default(e);
            if (ae.default) {
                var i = ae.default(e);
                t &&
                    (i = se.default(i).call(i, function (t) {
                        return ne.default(e, t).enumerable;
                    })),
                    r.push.apply(r, i);
            }
            return r;
        }
        function xt(e) {
            for (var t = arguments, r = 1; r < arguments.length; r++) {
                var i,
                    l = null != t[r] ? t[r] : {};
                if (r % 2)
                    fe.default((i = jt(Object(l), !0))).call(i, function (t) {
                        pe.default(e, t, l[t]);
                    });
                else if (le.default) ie.default(e, le.default(l));
                else {
                    var n;
                    fe.default((n = jt(Object(l)))).call(n, function (t) {
                        re.default(e, t, ne.default(l, t));
                    });
                }
            }
            return e;
        }
        var Ot = {
                name: 'HAssemblyRenderder',
                mixins: [
                    Ge,
                    rt,
                    Xe,
                    ct,
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
                                        !oe
                                            .default((e = ['string', 'integer', 'number']))
                                            .call(e, this.fullSchema.items.type) ||
                                        !this.fullSchema.items.oneOf
                                    ) ||
                                    !(
                                        !oe
                                            .default((t = ['string', 'integer', 'number']))
                                            .call(t, this.fullSchema.type) || !this.fullSchema.oneOf
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
                                    -1 === qe.default((e = this.fullSchema['x-fromUrl'])).call(e, '{q}')
                                );
                            },
                            fromUrlKeys: function () {
                                var e;
                                return this.fullSchema['x-fromUrl']
                                    ? se
                                          .default((e = bt(this.fullSchema['x-fromUrl'], /\{(.*?)\}/g).toArray()))
                                          .call(e, function (e) {
                                              return 'q' !== e;
                                          })
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
                                return this.fullSchema['x-itemIcon'] || ('icon' === this.display ? this.itemKey : null);
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
                                    r = this;
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
                                    (this.rawSelectItems = ye
                                        .default(
                                            (t = ('array' === this.fullSchema.type
                                                ? this.fullSchema.items
                                                : this.fullSchema
                                            ).oneOf)
                                        )
                                        .call(t, function (e) {
                                            var t;
                                            return vt(
                                                vt({}, e),
                                                {},
                                                ((t = {}),
                                                pe.default(t, r.itemKey, e.const || (e.enum && e.enum[0])),
                                                pe.default(t, r.itemTitle, e.title),
                                                t)
                                            );
                                        }));
                                var i,
                                    l = this.modelRoot ? 'modelRoot.' : 'value.';
                                (this.fullSchema['x-fromData'] &&
                                    this.$watch(
                                        l + this.fullSchema['x-fromData'],
                                        function (e) {
                                            r.rawSelectItems = e;
                                        },
                                        { immediate: !0 }
                                    ),
                                this.fromUrlKeys) &&
                                    fe.default((i = this.fromUrlKeys)).call(i, function (e) {
                                        me.default(e).call(e, 'context.')
                                            ? r.$watch(
                                                  'options.' + e,
                                                  function (t) {
                                                      (r.fromUrlParams[e] = t), r.fetchSelectItems();
                                                  },
                                                  { immediate: !0 }
                                              )
                                            : r.$watch(
                                                  l + e,
                                                  function (t) {
                                                      (r.fromUrlParams[e] = t), r.fetchSelectItems();
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
                                    yt(function () {
                                        var t,
                                            r = e.fullSchema['x-fromUrl'].replace('{q}', e.q || ''),
                                            i = ht(e.fromUrlKeys);
                                        try {
                                            for (i.s(); !(t = i.n()).done; ) {
                                                var l = t.value;
                                                if (void 0 === e.fromUrlParams[l]) return;
                                                r = r.replace('{'.concat(l, '}'), e.fromUrlParams[l]);
                                            }
                                        } catch (e) {
                                            i.e(e);
                                        } finally {
                                            i.f();
                                        }
                                        (e.loading = !0),
                                            e.fullOptions.httpLib
                                                .get(r)
                                                .then(function (t) {
                                                    var i = t.data || t.body,
                                                        l = e.fullSchema['x-itemsProp']
                                                            ? i[e.fullSchema['x-itemsProp']]
                                                            : i;
                                                    if (!be.default(l))
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
                                var e = ft.getSelectItems(
                                    this.rawSelectItems,
                                    this.fullSchema,
                                    this.itemKey,
                                    this.itemIcon
                                );
                                'list' === this.display &&
                                    this.input(ft.fillList(this.fullSchema, this.value, e, this.itemKey)),
                                    ft.fillSelectItems(this.fullSchema, this.value, e, this.itemKey, this.returnObject),
                                    de.default(e) !== de.default(this.selectItems) && (this.selectItems = e);
                            },
                            renderSelectIcon: function (e, t) {
                                if (this.itemIcon) {
                                    var r = t[this.itemIcon];
                                    if (r) {
                                        var i = e('v-icon', null, r);
                                        return (
                                            me.default(r).call(r, 'http://') || me.default(r).call(r, 'https://')
                                                ? (i = e('img', {
                                                      domProps: { src: r },
                                                      style: 'height:100%;width:100%;',
                                                  }))
                                                : (me.default(r).call(r, '<?xml') || me.default(r).call(r, '<svg')) &&
                                                  (i = e('div', { domProps: { innerHTML: r } })),
                                            e('v-avatar', { props: { tile: !0, size: 20 }, class: 'mr-2' }, [i])
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
                                var r = this,
                                    i = {
                                        change: function (e) {
                                            r.input(e), r.$emit('change', e);
                                        },
                                    },
                                    l = {
                                        label: t[this.itemTitle] || t[this.itemKey],
                                        value: t[this.itemKey],
                                        inputValue: this.value,
                                        multiple: 'array' === this.fullSchema.type,
                                        hideDetails: !0,
                                    };
                                return e('v-'.concat(this.display), { props: l, on: i, class: 'pb-1' });
                            },
                            renderSelectionControlGroup: function (e) {
                                var t,
                                    r,
                                    i,
                                    l = this,
                                    n = {
                                        change: function (e) {
                                            l.input(e), l.change(e);
                                        },
                                    },
                                    a = vt(
                                        vt({}, this.commonFieldProps),
                                        {},
                                        { multiple: 'array' === this.fullSchema.type, label: null }
                                    ),
                                    s = e(
                                        'legend',
                                        {
                                            class: he
                                                .default(
                                                    (t = 'v-label theme--'.concat(
                                                        this.theme.isDark ? 'dark' : 'light',
                                                        ' '
                                                    ))
                                                )
                                                .call(t, this.hasError ? 'error--text' : ''),
                                        },
                                        this.commonFieldProps.label
                                    ),
                                    o = ye.default((r = this.selectItems)).call(r, function (t) {
                                        return l.renderSelectionControlItem(e, t);
                                    });
                                return [
                                    e(
                                        'v-input',
                                        {
                                            props: a,
                                            on: n,
                                            class:
                                                'v-input--selection-controls v-input--radio-group v-input--radio-group--column',
                                        },
                                        [
                                            e(
                                                'div',
                                                { class: 'v-input--radio-group__input' },
                                                he.default((i = [s])).call(i, xe.default(o))
                                            ),
                                            this.renderTooltip(e, 'append'),
                                        ]
                                    ),
                                ];
                            },
                            renderRadioItem: function (e, t) {
                                var r = t[this.itemTitle] || t[this.itemKey],
                                    i = t[this.itemKey];
                                return e('v-radio', {
                                    props: vt(vt({}, this.fullOptions.radioItemProps), {}, { label: r, value: i }),
                                });
                            },
                            renderRadioGroup: function (e) {
                                var t,
                                    r,
                                    i = this,
                                    l = vt(vt({}, this.commonFieldProps), this.fullOptions.radioGroupProps);
                                return [
                                    e(
                                        'v-radio-group',
                                        {
                                            props: l,
                                            on: {
                                                change: function (e) {
                                                    i.input(e), i.change(e);
                                                },
                                            },
                                        },
                                        he.default((t = [])).call(
                                            t,
                                            xe.default(
                                                ye.default((r = this.selectItems)).call(r, function (t) {
                                                    return i.renderRadioItem(e, t);
                                                })
                                            ),
                                            [this.renderTooltip(e, 'append')]
                                        )
                                    ),
                                ];
                            },
                            renderSelectProp: function (e) {
                                var t,
                                    r = this;
                                if (this.isSelectProp) {
                                    if ('radio' === this.display && 'array' !== this.fullSchema.type)
                                        return this.renderRadioGroup(e);
                                    if (oe.default((t = ['checkbox', 'switch'])).call(t, this.display))
                                        return this.renderSelectionControlGroup(e);
                                    var i = {
                                            input: function (e) {
                                                return r.input(e);
                                            },
                                            change: function (e) {
                                                return r.change(e);
                                            },
                                        },
                                        l = {
                                            selection: function (t) {
                                                var i = t.item[r.itemTitle] || t.item[r.itemKey];
                                                return (
                                                    'array' === r.fullSchema.type &&
                                                        t.index !== r.value.length - 1 &&
                                                        (i += ',&nbsp;'),
                                                    e(
                                                        'div',
                                                        {
                                                            class: {
                                                                'v-select__selection': !0,
                                                                'v-select__selection--comma': !0,
                                                                'v-select__selection--disabled': r.disabled,
                                                            },
                                                        },
                                                        [
                                                            r.renderSelectIcon(e, t.item),
                                                            e('span', { domProps: { innerHTML: i }, class: 'mt-1' }),
                                                        ]
                                                    )
                                                );
                                            },
                                            item: function (t) {
                                                return [r.renderSelectIcon(e, t.item), r.renderSelectItem(e, t.item)];
                                            },
                                        },
                                        n = xe.default(this.renderPropSlots(e));
                                    this.htmlDescription && n.push(this.renderTooltip(e, 'append-outer'));
                                    var a = 'v-select',
                                        s = vt(
                                            vt(vt({}, this.commonFieldProps), this.fullOptions.selectProps),
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
                                            ((a = 'v-autocomplete'),
                                            (s.noDataText = this.fullOptions.messages.noData),
                                            (s.placeholder = this.fullOptions.messages.search),
                                            this.fromUrlWithQuery
                                                ? ((s.filter = function () {
                                                      return !0;
                                                  }),
                                                  (s.searchInput = this.q),
                                                  (i['update:search-input'] = function (e) {
                                                      r.q = e;
                                                  }))
                                                : (s.filter = function (e, t) {
                                                      var i;
                                                      return oe
                                                          .default((i = (e[r.itemTitle] || e[r.itemKey]).toLowerCase()))
                                                          .call(i, t.toLowerCase());
                                                  })),
                                        (a = this.customTag ? this.customTag : a),
                                        [e(a, { props: s, on: i, scopedSlots: l }, n)]
                                    );
                                }
                            },
                        },
                    },
                    st,
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
                                    var t = JSON.parse(de.default(this.fullSchema.items));
                                    if (((t.readOnly = !0), this.itemTitle)) {
                                        var r, i;
                                        if (
                                            (t.properties &&
                                                t.properties[this.itemTitle] &&
                                                (t.properties[this.itemTitle]['x-display'] = 'hidden'),
                                            t.oneOf)
                                        )
                                            fe.default((r = t.oneOf)).call(r, function (t) {
                                                t.properties[e.itemTitle] &&
                                                    (t.properties[e.itemTitle]['x-display'] = 'hidden');
                                            });
                                        if (this.fullSchema.items.allOf)
                                            fe.default((i = t.allOf)).call(i, function (t) {
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
                            renderArrayItemModal: function (e, t, r) {
                                var i,
                                    l,
                                    n = this,
                                    a = -1 === r;
                                this.editabledArrayProp.currentDialog === r &&
                                    (De.default((l = this.fullOptions.idPrefix)).call(l, '--dialog--') ||
                                        (this.fullOptions.idPrefix = this.fullOptions.idPrefix + '--dialog--'),
                                    (i = e(
                                        'v-jsf',
                                        {
                                            props: {
                                                schema: this.fullSchema.items,
                                                value: this.editabledArrayProp.editItem,
                                                modelRoot: this.modelRoot || this.value,
                                                modelKey: r,
                                                parentKey: ''.concat(this.fullKey, '.'),
                                                options: this.fullOptions,
                                                sectionDepth: this.sectionDepth + 1,
                                                separateValidation: !0,
                                            },
                                            scopedSlots: this.childScopedSlots(this.fullSchema.key),
                                            on: {
                                                error: function (e) {
                                                    return n.$emit('error', e);
                                                },
                                                input: function (e) {
                                                    n.editabledArrayProp.editItem = e;
                                                },
                                            },
                                        },
                                        this.childSlots(e, this.fullSchema.key)
                                    )));
                                var s = {
                                        activator: function () {
                                            return e(
                                                'v-btn',
                                                {
                                                    on: {
                                                        click: function () {
                                                            (n.editabledArrayProp.editItem = JSON.parse(de.default(t))),
                                                                (n.editabledArrayProp.currentDialog = r);
                                                        },
                                                    },
                                                    attrs: {
                                                        id:
                                                            n.fullOptions.idPrefix +
                                                            n.dashKey +
                                                            '-' +
                                                            (a ? '-add' : r + '--edit') +
                                                            '-button',
                                                    },
                                                    class: { 'vjsf-array-add-button': !0, 'ml-3': a },
                                                    props: { icon: !a, fab: a, small: a, color: 'primary' },
                                                },
                                                [e('v-icon', a ? n.fullOptions.icons.add : n.fullOptions.icons.edit)]
                                            );
                                        },
                                    },
                                    o = function () {
                                        i.componentInstance.resetValidation(),
                                            (n.editabledArrayProp.currentDialog = null);
                                    };
                                return e(
                                    'v-dialog',
                                    {
                                        props: gt(
                                            gt({}, this.fullOptions.dialogProps),
                                            {},
                                            {
                                                value: this.editabledArrayProp.currentDialog === r,
                                                closeOnContentClick: !1,
                                            }
                                        ),
                                        scopedSlots: s,
                                        on: { 'click:outside': o },
                                    },
                                    [
                                        e('v-card', { props: this.fullOptions.dialogCardProps }, [
                                            e('v-card-title', this.itemTitle && t[this.itemTitle]),
                                            e('v-card-text', [i]),
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
                                                                i.componentInstance.validate(!0) &&
                                                                    (a
                                                                        ? ((n.editabledArrayProp.editedItems[
                                                                              n.value.length
                                                                          ] = !0),
                                                                          n.value.push(n.editabledArrayProp.editItem))
                                                                        : ((n.editabledArrayProp.editedItems[r] = !0),
                                                                          n.$set(
                                                                              n.value,
                                                                              r,
                                                                              n.editabledArrayProp.editItem
                                                                          ),
                                                                          n.$nextTick(function () {
                                                                              return n.$refs[
                                                                                  'roItem-' + r
                                                                              ].initFromSchema();
                                                                          })),
                                                                    n.input(n.value),
                                                                    n.$emit('change', n.value),
                                                                    (n.shouldValidate = !0),
                                                                    (n.editabledArrayProp.currentDialog = null));
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
                            renderArrayItemRO: function (e, t, r) {
                                var i = this;
                                return e('v-jsf', {
                                    props: {
                                        schema: this.readonlyItemSchema,
                                        value: JSON.parse(de.default(t)),
                                        modelRoot: this.modelRoot || this.value,
                                        modelKey: r,
                                        parentKey: ''.concat(this.fullKey, '.'),
                                        options: gt(
                                            gt({}, this.fullOptions),
                                            {},
                                            {
                                                hideReadOnly: !1,
                                                fieldProps: gt(gt({}, this.fullOptions.fieldProps), {}, { dense: !0 }),
                                            }
                                        ),
                                        sectionDepth: this.sectionDepth + 1,
                                        separateValidation: !0,
                                    },
                                    ref: 'roItem-' + r,
                                    on: {
                                        input: function (e) {
                                            i.editabledArrayProp.editedItems[r] || i.$set(i.value, r, e);
                                        },
                                    },
                                });
                            },
                            renderEditableArray: function (e) {
                                var t = this;
                                if (this.isEditableArray) {
                                    var r = [];
                                    this.disabled ||
                                        this.fromUrl ||
                                        this.fullSchema.fromData ||
                                        r.push(
                                            this.renderArrayItemModal(
                                                e,
                                                this.fullSchema.items.default ||
                                                    this.defaultValue(this.fullSchema.items),
                                                -1
                                            )
                                        );
                                    var i,
                                        l = e(
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
                                            r
                                        );
                                    if (this.value && this.value.length) {
                                        var n,
                                            a,
                                            s = ye
                                                .default(
                                                    (n = se.default((a = this.value)).call(a, function (e) {
                                                        return !!e;
                                                    }))
                                                )
                                                .call(n, function (r, i) {
                                                    return e('v-col', { props: t.fullOptions.arrayItemColProps }, [
                                                        e('v-card', { props: t.fullOptions.arrayItemCardProps }, [
                                                            e(
                                                                'v-card-title',
                                                                { props: { primaryTitle: !0 } },
                                                                t.itemTitle && r[t.itemTitle]
                                                            ),
                                                            e('v-card-text', { class: 'pb-0' }, [
                                                                t.renderArrayItemRO(e, r, i),
                                                            ]),
                                                            e('v-card-actions', [
                                                                e('v-spacer'),
                                                                !t.disabled && t.renderArrayItemModal(e, r, i),
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
                                                                                    i +
                                                                                    '--delete-button',
                                                                            },
                                                                            class: { 'vjsf-array-delete-button': !0 },
                                                                            on: {
                                                                                click: function () {
                                                                                    var e,
                                                                                        i = se
                                                                                            .default((e = t.value))
                                                                                            .call(e, function (e) {
                                                                                                return e !== r;
                                                                                            });
                                                                                    t.input(i),
                                                                                        t.$emit('change', i),
                                                                                        (t.shouldValidate = !0),
                                                                                        l.componentInstance.validate();
                                                                                },
                                                                            },
                                                                        },
                                                                        [e('v-icon', t.fullOptions.icons.delete)]
                                                                    ),
                                                            ]),
                                                        ]),
                                                    ]);
                                                });
                                        i = e(
                                            'v-row',
                                            {
                                                props: { gridListMd: !0 },
                                                class: 'pt-0 px-2 ' + this.fullOptions.objectContainerClass,
                                            },
                                            this.fullOptions.disableSorting
                                                ? s
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
                                                                              for (var r = 0; r < e.length; r++)
                                                                                  t.$refs[
                                                                                      'roItem-' + r
                                                                                  ].initFromSchema();
                                                                          });
                                                                  },
                                                              },
                                                          },
                                                          s
                                                      ),
                                                  ]
                                        );
                                    }
                                    return [l, i];
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
                                var r = this;
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
                                                                    r.tooltip.show = !r.tooltip.show;
                                                                },
                                                            },
                                                            props: { icon: !0 },
                                                            style: 'pointer-events: auto',
                                                        },
                                                        [e('v-icon', {}, r.fullOptions.icons.info)]
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
                                return Le.default((e = this.inputs)).call(
                                    e,
                                    function (e, t, r) {
                                        return (e[t.modelKey || r] = t), e;
                                    },
                                    {}
                                );
                            },
                            hasError: function () {
                                var e;
                                return (
                                    !!ue.default((e = this.inputs)).call(e, function (e) {
                                        return e.hasError;
                                    }) || !!this.containerError
                                );
                            },
                            hasValidatedChildError: function () {
                                var e;
                                return !!ue.default((e = this.inputs)).call(e, function (e) {
                                    return (
                                        e.hasValidatedChildError || (e.hasError && (e.validated || e.shouldValidate))
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
                                this.inputs = se.default((t = this.inputs)).call(t, function (t) {
                                    return t._uid !== e._uid;
                                });
                            },
                            validate: function (e) {
                                var t;
                                return (
                                    (this.validated = !0),
                                    0 ===
                                        se.default((t = this.inputs)).call(t, function (t) {
                                            return !t.validate(e);
                                        }).length
                                );
                            },
                            reset: function () {
                                var e;
                                fe.default((e = this.inputs)).call(e, function (e) {
                                    return e.reset();
                                });
                            },
                            resetValidation: function () {
                                var e;
                                (this.shouldValidate = !1),
                                    (this.validated = !1),
                                    fe.default((e = this.inputs)).call(e, function (e) {
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
                            t = ve.default({}, Ee, this.options || {}, this.resolvedSchema['x-options'] || {});
                        (t.markdown =
                            t.markdown ||
                            (e.markdownit &&
                                function (r) {
                                    return e.markdownit(t.markdownit).render(r);
                                }) ||
                            function (e) {
                                return e;
                            }),
                            (t.httpLib = t.httpLib || this.axios || this.$http || this.$axios || e.axios);
                        var r = (this.$vuetify.icons && this.$vuetify.icons.iconfont) || 'mdi';
                        return (
                            (t.icons = xt(xt({}, He[r]), t.icons)),
                            (t.messages = xt(xt({}, Ue[t.locale] || Ue.en), t.messages)),
                            (t.formats = xt(xt({}, Ne), t.formats)),
                            t.deleteReadOnly && (t.hideReadOnly = !0),
                            t
                        );
                    },
                    resolvedSchema: function () {
                        return 'root' === this.modelKey
                            ? Ke.resolve(this.schema, { '~$locale~': (this.options && this.options.locale) || 'en' })
                            : this.schema;
                    },
                    fullSchema: function () {
                        return Me.prepareFullSchema(this.resolvedSchema, this.value);
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
                        return (function (e, t, r, i) {
                            var l,
                                n,
                                a,
                                s = [];
                            if (
                                (r &&
                                    s.push(function (e) {
                                        return (null != e && '' !== e) || t.messages.required;
                                    }),
                                'array' === e.type && void 0 !== e.minItems)
                            ) {
                                var o = t.messages.minItems.replace('{minItems}', e.minItems.toLocaleString(t.locale));
                                s.push(function (t) {
                                    return !t || t.length >= e.minItems || o;
                                });
                            }
                            if ('array' === e.type && void 0 !== e.maxItems) {
                                var u = t.messages.maxItems.replace('{maxItems}', e.maxItems.toLocaleString(t.locale));
                                s.push(function (t) {
                                    return !t || t.length <= e.maxItems || u;
                                });
                            }
                            if ('string' === e.type && void 0 !== e.minLength) {
                                var c = t.messages.minLength.replace(
                                    '{minLength}',
                                    e.minLength.toLocaleString(t.locale)
                                );
                                s.push(function (t) {
                                    return null == t || t.length >= e.minLength || c;
                                });
                            }
                            if ('string' === e.type && void 0 !== e.maxLength) {
                                var f = t.messages.maxLength.replace(
                                    '{maxLength}',
                                    e.maxLength.toLocaleString(t.locale)
                                );
                                s.push(function (t) {
                                    return null == t || t.length <= e.maxLength || f;
                                });
                            }
                            if ('string' === e.type && void 0 !== e.patternRegexp) {
                                var d = t.messages.pattern.replace('{pattern}', e.pattern);
                                s.push(function (t) {
                                    return null == t || !!t.match(e.patternRegexp) || d;
                                });
                            }
                            if (oe.default((l = ['number', 'integer'])).call(l, e.type) && void 0 !== e.maximum) {
                                var h = t.messages.maximum.replace('{maximum}', e.maximum.toLocaleString(t.locale));
                                s.push(function (t) {
                                    return null == t || t <= e.maximum || h;
                                });
                            }
                            if (oe.default((n = ['number', 'integer'])).call(n, e.type) && void 0 !== e.minimum) {
                                var m = t.messages.minimum.replace('{minimum}', e.minimum.toLocaleString(t.locale));
                                s.push(function (t) {
                                    return null == t || t >= e.minimum || m;
                                });
                            }
                            e.enum &&
                                s.push(function (t) {
                                    var r;
                                    return (
                                        null == t ||
                                        !!ue.default((r = e.enum)).call(r, function (e) {
                                            return de.default(e) === de.default(t);
                                        }) ||
                                        ''
                                    );
                                }),
                                'array' === e.type &&
                                    e.items.enum &&
                                    s.push(function (t) {
                                        return (
                                            null == t ||
                                            !ue.default(t).call(t, function (t) {
                                                var r;
                                                return !ue.default((r = e.items.enum)).call(r, function (e) {
                                                    return de.default(e) === de.default(t);
                                                });
                                            }) ||
                                            ''
                                        );
                                    }),
                                i &&
                                    'array' !== e.type &&
                                    s.push(function (t) {
                                        var r;
                                        return (
                                            null == t ||
                                            !!ue.default((r = e.oneOf)).call(r, function (e) {
                                                return e.const === t;
                                            }) ||
                                            ''
                                        );
                                    }),
                                i &&
                                    'array' === e.type &&
                                    s.push(function (t) {
                                        return (
                                            null == t ||
                                            !ue.default(t).call(t, function (t) {
                                                var r;
                                                return !ue.default((r = e.items.oneOf)).call(r, function (e) {
                                                    return e.const === t;
                                                });
                                            }) ||
                                            ''
                                        );
                                    });
                            var p = ye.default((a = e['x-ruless'] || [])).call(a, function (e) {
                                return 'string' == typeof e
                                    ? t.rules && t.rules[e]
                                    : 'function' == typeof e
                                    ? e
                                    : void 0;
                            });
                            return he.default(s).call(s, p);
                        })(this.fullSchema, this.fullOptions, this.required, this.isOneOfSelect);
                    },
                    disabled: function () {
                        return this.fullOptions.disableAll || this.fullSchema.readOnly;
                    },
                    slotName: function () {
                        var e;
                        return this.fullSchema['x-display'] &&
                            me.default((e = this.fullSchema['x-display'])).call(e, 'custom-')
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
                        return xt(
                            xt(
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
                        return he
                            .default((e = 'vjsf-property vjsf-property-'.concat(this.dashKey, ' pa-0 ')))
                            .call(e, this.fullSchema['x-class'] || '');
                    },
                    xSlots: function () {
                        return xt({}, this.fullSchema['x-slots']);
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
                                de.default(this.fullSchema) !== this.lastFullSchema &&
                                ((this.lastFullSchema = de.default(this.fullSchema)),
                                this.initFromSchema(),
                                this.fixProperties(),
                                (this.ready = !0));
                        },
                        immediate: !0,
                    },
                },
                render: function (e) {
                    var t, r;
                    if (
                        !(
                            !this.fullSchema ||
                            void 0 !== this.fullSchema.const ||
                            'hidden' === this.display ||
                            (this.fullSchema.readOnly && this.fullOptions.hideReadOnly)
                        )
                    ) {
                        var i = [];
                        if (
                            (this.$scopedSlots.before
                                ? i.push(this.$scopedSlots.before(this.slotParams))
                                : this.$slots.before
                                ? fe.default((t = this.$slots.before)).call(t, function (e) {
                                      return i.push(e);
                                  })
                                : this.xSlots.before &&
                                  i.push(
                                      e('div', {
                                          domProps: { innerHTML: this.fullOptions.markdown(this.xSlots.before) },
                                      })
                                  ),
                            this.$scopedSlots.default)
                        )
                            i.push(this.$scopedSlots.default(this.slotParams));
                        else if (
                            this.fullSchema['x-display'] &&
                            this.fullSchema['x-display'] &&
                            this.$scopedSlots[this.fullSchema['x-display']]
                        )
                            i.push(this.$scopedSlots[this.fullSchema['x-display']](this.slotParams));
                        else {
                            var l =
                                this.renderDateProp(e) ||
                                this.renderSelectProp(e) ||
                                this.renderFileProp(e) ||
                                this.renderSimpleProp(e) ||
                                this.renderObjectContainer(e) ||
                                [];
                            fe.default(l).call(l, function (e) {
                                return i.push(e);
                            });
                        }
                        this.$scopedSlots.after
                            ? i.push(this.$scopedSlots.after(this.slotParams))
                            : this.$slots.after
                            ? fe.default((r = this.$slots.after)).call(r, function (e) {
                                  return i.push(e);
                              })
                            : this.xSlots.after &&
                              i.push(
                                  e('div', { domProps: { innerHTML: this.fullOptions.markdown(this.xSlots.after) } })
                              );
                        var n = xt({}, this.fullOptions.fieldColProps);
                        return (
                            this.fullSchema['x-cols'] && (n.cols = this.fullSchema['x-cols']),
                            e(
                                'v-col',
                                { props: n, class: this.propertyClass, style: this.fullSchema['x-style'] || '' },
                                i
                            )
                        );
                    }
                },
                methods: {
                    renderPropSlots: function (e) {
                        var t,
                            r,
                            i = this,
                            l = [];
                        return (
                            fe.default((t = ce.default(this.xSlots))).call(t, function (t) {
                                l.push(
                                    e('div', { slot: t, domProps: { innerHTML: i.fullOptions.markdown(i.xSlots[t]) } })
                                );
                            }),
                            fe.default((r = ce.default(this.$slots))).call(r, function (t) {
                                l.push(e('template', { slot: t }, i.$slots[t]));
                            }),
                            l
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
                                (ce.default(this.subModels).length &&
                                    !this.fullSchema['x-fromData'] &&
                                    !this.fullSchema['x-fromUrl'])
                            )
                        ) {
                            var r;
                            if (
                                (this.fullOptions.removeAdditionalProperties ||
                                    !1 === this.fullSchema.additionalProperties) &&
                                this.value
                            )
                                fe.default((r = ce.default(this.value))).call(r, function (e) {
                                    var r;
                                    ue.default((r = t.fullSchema.properties || [])).call(r, function (t) {
                                        return t.key === e;
                                    }) || t.$delete(t.value, e);
                                });
                            fe.default((e = ce.default(this.subModels))).call(e, function (e) {
                                var r;
                                fe.default((r = ce.default(t.subModels[e]))).call(r, function (r) {
                                    t.value[r] !== t.subModels[e][r] && t.$set(t.value, r, t.subModels[e][r]);
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
                                (this.initiallyDefined = !(!this.value || !ce.default(this.value).length)),
                            this.fullSchema.readOnly && this.fullOptions.deleteReadOnly)
                        )
                            return this.input(void 0);
                        var t = this.value;
                        'object' === this.fullSchema.type &&
                            oe.default((e = [void 0, null])).call(e, t) &&
                            !this.isSelectProp &&
                            (t = {}),
                            void 0 !== this.fullSchema.const && (t = this.fullSchema.const),
                            this.initSelectProp(t),
                            this.initObjectContainer(t),
                            'array' === this.fullSchema.type &&
                                (t = se.default(t).call(t, function (e) {
                                    var t;
                                    return !oe.default((t = [void 0, null])).call(t, e);
                                })),
                            this.input(t);
                    },
                },
            },
            Pt = $e.default({}, undefined, Ot, undefined, undefined, undefined, !1, void 0, void 0, void 0),
            It = {
                name: 'HFormRenderer',
                components: {
                    VAvatar: X.VAvatar,
                    VAutocomplete: X.VAutocomplete,
                    VBtn: X.VBtn,
                    VCard: X.VCard,
                    VCardActions: X.VCardActions,
                    VCardText: X.VCardText,
                    VCardTitle: X.VCardTitle,
                    VCheckbox: X.VCheckbox,
                    VChip: X.VChip,
                    VColorPicker: X.VColorPicker,
                    VCombobox: X.VCombobox,
                    VContainer: X.VContainer,
                    VDatePicker: X.VDatePicker,
                    VDialog: X.VDialog,
                    VExpansionPanels: X.VExpansionPanels,
                    VExpansionPanel: X.VExpansionPanel,
                    VExpansionPanelHeader: X.VExpansionPanelHeader,
                    VExpansionPanelContent: X.VExpansionPanelContent,
                    VCol: X.VCol,
                    VFileInput: X.VFileInput,
                    VIcon: X.VIcon,
                    VInput: X.VInput,
                    VRow: X.VRow,
                    VListItemContent: X.VListItemContent,
                    VListItemTitle: X.VListItemTitle,
                    VMenu: X.VMenu,
                    VRadio: X.VRadio,
                    VRadioGroup: X.VRadioGroup,
                    VRangeSlider: X.VRangeSlider,
                    VSelect: X.VSelect,
                    VSlider: X.VSlider,
                    VSpacer: X.VSpacer,
                    VSubheader: X.VSubheader,
                    VSwitch: X.VSwitch,
                    VTabs: X.VTabs,
                    VTab: X.VTab,
                    VTabItem: X.VTabItem,
                    VTextarea: X.VTextarea,
                    VTextField: X.VTextField,
                    VTimePicker: X.VTimePicker,
                    VTooltip: X.VTooltip,
                },
                mixins: [Pt],
            },
            kt = $e.default({}, undefined, It, undefined, undefined, undefined, !1, void 0, void 0, void 0);
        (kt.install = function (e) {
            e.component(kt.name, kt);
        }),
            null != ('undefined' == typeof window ? 'undefined' : te.default(window)) &&
                window.Vue &&
                kt.install(window.Vue),
            (e.HFormRenderer = kt),
            Object.defineProperty(e, '__esModule', { value: !0 });
    }
);
