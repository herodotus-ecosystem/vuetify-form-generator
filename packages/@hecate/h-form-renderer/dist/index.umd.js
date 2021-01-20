!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(
              exports,
              require('core-js/modules/es.function.name.js'),
              require('@babel/runtime-corejs3/helpers/esm/typeof'),
              require('core-js/modules/es.regexp.constructor.js'),
              require('core-js/modules/es.regexp.exec.js'),
              require('core-js/modules/es.regexp.to-string.js'),
              require('core-js/modules/es.string.match.js'),
              require('core-js/modules/es.string.replace.js'),
              require('@babel/runtime-corejs3/core-js/array/is-array'),
              require('@babel/runtime-corejs3/core-js/object/keys'),
              require('@babel/runtime-corejs3/core-js/instance/for-each'),
              require('@babel/runtime-corejs3/core-js/object/define-property'),
              require('@babel/runtime-corejs3/core-js/object/define-properties'),
              require('@babel/runtime-corejs3/core-js/object/get-own-property-descriptors'),
              require('@babel/runtime-corejs3/core-js/object/get-own-property-descriptor'),
              require('@babel/runtime-corejs3/core-js/object/get-own-property-symbols'),
              require('core-js/modules/es.string.split.js'),
              require('@babel/runtime-corejs3/core-js/instance/concat'),
              require('@babel/runtime-corejs3/core-js/instance/filter'),
              require('@babel/runtime-corejs3/core-js/instance/find'),
              require('@babel/runtime-corejs3/core-js/json/stringify'),
              require('@babel/runtime-corejs3/core-js/instance/includes'),
              require('@babel/runtime-corejs3/helpers/esm/defineProperty'),
              require('@babel/runtime-corejs3/core-js/instance/map'),
              require('core-js/modules/es.symbol.js'),
              require('core-js/modules/es.symbol.description.js'),
              require('@babel/runtime-corejs3/core-js/parse-int'),
              require('core-js/modules/es.number.constructor.js'),
              require('@babel/runtime-corejs3/core-js/instance/slice'),
              require('@babel/runtime-corejs3/core-js/parse-float'),
              require('core-js/modules/es.array.iterator.js'),
              require('core-js/modules/es.object.to-string.js'),
              require('core-js/modules/es.promise.js'),
              require('core-js/modules/es.string.iterator.js'),
              require('core-js/modules/web.dom-collections.iterator.js'),
              require('@babel/runtime-corejs3/helpers/esm/toConsumableArray'),
              require('@babel/runtime-corejs3/regenerator'),
              require('regenerator-runtime/runtime.js'),
              require('@babel/runtime-corejs3/helpers/esm/asyncToGenerator'),
              require('@babel/runtime-corejs3/core-js/promise'),
              require('@babel/runtime-corejs3/core-js/get-iterator'),
              require('@babel/runtime-corejs3/core-js/get-iterator-method'),
              require('@babel/runtime-corejs3/core-js/symbol'),
              require('@babel/runtime-corejs3/core-js/array/from'),
              require('core-js/modules/es.array.filter.js'),
              require('core-js/modules/es.string.search.js'),
              require('@babel/runtime-corejs3/core-js/instance/starts-with'),
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
              'core-js/modules/es.function.name.js',
              '@babel/runtime-corejs3/helpers/esm/typeof',
              'core-js/modules/es.regexp.constructor.js',
              'core-js/modules/es.regexp.exec.js',
              'core-js/modules/es.regexp.to-string.js',
              'core-js/modules/es.string.match.js',
              'core-js/modules/es.string.replace.js',
              '@babel/runtime-corejs3/core-js/array/is-array',
              '@babel/runtime-corejs3/core-js/object/keys',
              '@babel/runtime-corejs3/core-js/instance/for-each',
              '@babel/runtime-corejs3/core-js/object/define-property',
              '@babel/runtime-corejs3/core-js/object/define-properties',
              '@babel/runtime-corejs3/core-js/object/get-own-property-descriptors',
              '@babel/runtime-corejs3/core-js/object/get-own-property-descriptor',
              '@babel/runtime-corejs3/core-js/object/get-own-property-symbols',
              'core-js/modules/es.string.split.js',
              '@babel/runtime-corejs3/core-js/instance/concat',
              '@babel/runtime-corejs3/core-js/instance/filter',
              '@babel/runtime-corejs3/core-js/instance/find',
              '@babel/runtime-corejs3/core-js/json/stringify',
              '@babel/runtime-corejs3/core-js/instance/includes',
              '@babel/runtime-corejs3/helpers/esm/defineProperty',
              '@babel/runtime-corejs3/core-js/instance/map',
              'core-js/modules/es.symbol.js',
              'core-js/modules/es.symbol.description.js',
              '@babel/runtime-corejs3/core-js/parse-int',
              'core-js/modules/es.number.constructor.js',
              '@babel/runtime-corejs3/core-js/instance/slice',
              '@babel/runtime-corejs3/core-js/parse-float',
              'core-js/modules/es.array.iterator.js',
              'core-js/modules/es.object.to-string.js',
              'core-js/modules/es.promise.js',
              'core-js/modules/es.string.iterator.js',
              'core-js/modules/web.dom-collections.iterator.js',
              '@babel/runtime-corejs3/helpers/esm/toConsumableArray',
              '@babel/runtime-corejs3/regenerator',
              'regenerator-runtime/runtime.js',
              '@babel/runtime-corejs3/helpers/esm/asyncToGenerator',
              '@babel/runtime-corejs3/core-js/promise',
              '@babel/runtime-corejs3/core-js/get-iterator',
              '@babel/runtime-corejs3/core-js/get-iterator-method',
              '@babel/runtime-corejs3/core-js/symbol',
              '@babel/runtime-corejs3/core-js/array/from',
              'core-js/modules/es.array.filter.js',
              'core-js/modules/es.string.search.js',
              '@babel/runtime-corejs3/core-js/instance/starts-with',
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
              e._Array$isArray,
              e._Object$keys,
              e._forEachInstanceProperty,
              e._Object$defineProperty$1,
              e._Object$defineProperties,
              e._Object$getOwnPropertyDescriptors,
              e._Object$getOwnPropertyDescriptor,
              e._Object$getOwnPropertySymbols,
              null,
              e._concatInstanceProperty,
              e._filterInstanceProperty,
              e._findInstanceProperty,
              e._JSON$stringify,
              e._includesInstanceProperty,
              e._defineProperty,
              e._mapInstanceProperty,
              null,
              null,
              e._parseInt,
              null,
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
              e._getIterator,
              e._getIteratorMethod,
              e._Symbol,
              e._Array$from,
              null,
              null,
              e._startsWithInstanceProperty,
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
        h,
        d,
        m,
        p,
        b,
        v,
        y,
        g,
        S,
        j,
        O,
        x,
        P,
        I,
        k,
        V,
        w,
        C,
        T,
        q,
        D,
        L,
        $,
        A,
        K,
        R,
        _,
        M,
        E,
        F,
        U,
        N,
        H,
        W,
        z,
        G,
        J,
        B,
        Z,
        Y,
        Q
    ) {
        'use strict';
        function X(e) {
            return e && 'object' == typeof e && 'default' in e ? e : { default: e };
        }
        var ee = X(r),
            te = X(o),
            re = X(u),
            ie = X(c),
            le = X(f),
            ne = X(h),
            ae = X(d),
            se = X(m),
            oe = X(p),
            ue = X(v),
            ce = X(y),
            fe = X(g),
            he = X(S),
            de = X(j),
            me = X(O),
            pe = X(x),
            be = X(k),
            ve = X(w),
            ye = X(C),
            ge = X(A),
            Se = X(K),
            je = X(_),
            Oe = X(M),
            xe = X(E),
            Pe = X(F),
            Ie = X(U),
            ke = X(N),
            Ve = X(z),
            we = X(G),
            Ce = X(J),
            Te = X(B),
            qe = X(Z),
            De = X(Y),
            Le = require('property-expr'),
            $e = {};
        function Ae(e, t) {
            var r = re.default(e);
            if (oe.default) {
                var i = oe.default(e);
                t &&
                    (i = ce.default(i).call(i, function (t) {
                        return se.default(e, t).enumerable;
                    })),
                    r.push.apply(r, i);
            }
            return r;
        }
        function Ke(e) {
            for (var t = arguments, r = 1; r < arguments.length; r++) {
                var i,
                    l = null != t[r] ? t[r] : {};
                if (r % 2)
                    ie.default((i = Ae(Object(l), !0))).call(i, function (t) {
                        me.default(e, t, l[t]);
                    });
                else if (ae.default) ne.default(e, ae.default(l));
                else {
                    var n;
                    ie.default((n = Ae(Object(l)))).call(n, function (t) {
                        le.default(e, t, se.default(l, t));
                    });
                }
            }
            return e;
        }
        ($e.cache = {}),
            ($e.extendtoken = '$extend'),
            ($e.reftoken = '$ref'),
            ($e.pathtoken = '#'),
            ($e.debug = !1),
            ($e.clone = function (e) {
                var t, r;
                if (null === e || 'object' !== ee.default(e) || 'function' == typeof e) return e;
                for (t in ((r = e.constructor()), e)) r[t] = $e.clone(e[t]);
                return r;
            }),
            ($e.findIds = function (e, t) {
                var r, i, l, n;
                for (i in ((r = !1), (l = {}), e))
                    (n = e[i]),
                        null != e.id && (r = e.id),
                        r && 'id' !== i && (l[i] = n),
                        'object' === ee.default(n) && $e.findIds(n, t);
                if (r) return (t[r] = l), l;
            }),
            ($e.get_json_pointer = function (e, t, r) {
                var i, l, n;
                (l = e
                    .replace(/\\\//, '#SLASH#')
                    .replace(/\//g, '.')
                    .replace(/#SLASH#/, '/')),
                    ie.default((i = re.default(r))).call(i, function (e) {
                        l = l.replace(e, r[e]);
                    }),
                    '.' === (l = l.replace(new RegExp('^' + $e.pathtoken), ''))[0] && (l = l.substr(1, l.length - 1));
                try {
                    $e.debug, (n = Le.getter(l)(t));
                } catch (e) {
                    n = '';
                }
                return n;
            }),
            ($e.replace = function (e, t, r, i) {
                var l, n, a, s, o, u;
                for (l in ((o = []), e))
                    null != (u = e[l]) && null != u[$e.reftoken]
                        ? ((n = u[$e.reftoken]),
                          re.default(u).length,
                          te.default(n)
                              ? (n = $e.replace(n, t, r, i))
                              : null != t[n]
                              ? (e[l] = t[n])
                              : String(n).match(new RegExp('^' + $e.pathtoken)) &&
                                (e[l] = $e.get_json_pointer(n, r, i)),
                          null != (null != (a = e[l]) ? a.length : void 0) &&
                              0 === (null != (s = e[l]) ? s.length : void 0) &&
                              $e.debug,
                          o.push(void 0))
                        : 'object' === ee.default(u)
                        ? o.push($e.replace(u, t, r, i))
                        : o.push(void 0);
                return o;
            }),
            ($e.extend = function (e, t) {
                var r, i, l, n, a, s;
                if ('object' === ee.default(e)) {
                    for (r in ((l = []), e)) {
                        if (((s = e[r]), r === $e.extendtoken && null != s[$e.reftoken])) {
                            for (n in ((i = $e.get_json_pointer(s[$e.reftoken], e, t)), s))
                                (a = s[n]), n !== $e.reftoken && (i[n] = a);
                            delete e[r];
                        }
                        'object' === ee.default(s) ? l.push((s = $e.extend(s))) : l.push(void 0);
                    }
                    return l;
                }
            }),
            ($e.resolve = function (e, t) {
                var r;
                return (r = {}), $e.findIds(e, r), $e.debug && re.default(r).length, $e.replace(e, r, e, t), e;
            }),
            ($e.evaluate = function (e, t, r) {
                var i, l, n;
                for (i in (null == r && (r = $e.evaluateStr), (l = $e.clone(e))))
                    'string' == typeof (n = l[i]) && (e[i] = r(n, t)),
                        'object' === ee.default(n) && (e[i] = $e.evaluate(n, t));
                return e;
            }),
            ($e.evaluateStr = function (e, t) {
                if ('string' != typeof e) return e;
                if ('{' !== e[0] || '}' !== e[e.length - 1])
                    return e.replace(/(\{)(.*?)(\})/g, function (e, r, i) {
                        var l;
                        if (((l = ''), null == t || null == i)) return l;
                        if (null != t[i] && 'function' == typeof t[i]) l = t[i]();
                        else if (null != t[i]) l = t[i];
                        else {
                            try {
                                (i = i.replace(new RegExp('^' + $e.pathtoken + '/'), '').replace(/\//g, '.')),
                                    (l = Le.getter(i)(t));
                            } catch (e) {
                                (err = e), (l = '');
                            }
                            null == l && (l = '');
                        }
                        return $e.evaluateStr(l, t), l;
                    });
                try {
                    return Le.getter(e.replace(/^{/, '').replace(/}$/, ''))(t);
                } catch (e) {
                    return null;
                }
            });
        var Re = {},
            _e = function (e) {
                var t;
                return pe.default((t = re.default(e || {}))).call(t, function (t) {
                    return Ke(Ke({}, e[t]), {}, { key: t });
                });
            };
        Re.prepareFullSchema = function (e, t) {
            var r,
                i,
                l,
                n,
                a = JSON.parse(he.default(e));
            (a.pattern && (a.patternRegexp = new RegExp(a.pattern)), te.default(a.type)) &&
                ((a.nullable = de.default((r = a.type)).call(r, 'null')),
                (a.type = fe.default((i = a.type)).call(i, function (e) {
                    return 'null' !== e;
                })),
                a.nullable &&
                    a.enum &&
                    (a.enum = ce.default((l = a.enum)).call(l, function (e) {
                        return null !== e;
                    })));
            if ('object' !== a.type) return a;
            ((a.properties = JSON.parse(he.default(_e(a.properties)))),
            (a.required = a.required || []),
            (a.dependencies = a.dependencies || {}),
            a.dependencies) &&
                ie.default((n = re.default(a.dependencies))).call(n, function (e) {
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
                                if (de.default((l = [null, void 0])).call(l, e)) break;
                                e = e[r[i]];
                            }
                            return e;
                        })(t, e);
                        de.default((r = [null, void 0, !1])).call(r, u) ||
                            (te.default(u) && 0 === u.length) ||
                            ('object' === ee.default(u) && 0 === re.default(u).length) ||
                            ((a.required = ue.default((i = a.required)).call(i, o.required || [])),
                            (a.properties = ue.default((l = a.properties)).call(l, _e(o.properties))),
                            o.oneOf && (a.oneOf = ue.default((n = a.oneOf || [])).call(n, o.oneOf)),
                            o.allOf && (a.allOf = ue.default((s = a.allOf || [])).call(s, o.allOf)));
                    }
                });
            return a;
        };
        var Me = {
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
            Ee = {
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
            Fe = {
                time: function (e, t) {
                    var r,
                        i = new Date(
                            ue.default((r = ''.concat(new Date().toISOString().split('T')[0], 'T'))).call(r, e)
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
            Ue = {
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
        function Ne(e, t) {
            var r = re.default(e);
            if (oe.default) {
                var i = oe.default(e);
                t &&
                    (i = ce.default(i).call(i, function (t) {
                        return se.default(e, t).enumerable;
                    })),
                    r.push.apply(r, i);
            }
            return r;
        }
        function He(e) {
            for (var t = arguments, r = 1; r < arguments.length; r++) {
                var i,
                    l = null != t[r] ? t[r] : {};
                if (r % 2)
                    ie.default((i = Ne(Object(l), !0))).call(i, function (t) {
                        me.default(e, t, l[t]);
                    });
                else if (ae.default) ne.default(e, ae.default(l));
                else {
                    var n;
                    ie.default((n = Ne(Object(l)))).call(n, function (t) {
                        le.default(e, t, se.default(l, t));
                    });
                }
            }
            return e;
        }
        var We = {
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
                            r = fe.default((e = re.default(t))).call(e, function (e) {
                                return !!t[e].const;
                            });
                        if (r)
                            return He(
                                He({}, t[r]),
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
                                fe.default((e = this.fullSchema.required)).call(e, function (e) {
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
                        (e.properties || e.allOf || te.default(e.items)) &&
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
                            ie.default((r = this.fullSchema.allOf)).call(r, function (r, i) {
                                t.$set(t.subModels, 'allOf-' + i, JSON.parse(he.default(e)));
                            });
                        if (
                            ((this.currentOneOf = null),
                            this.subSchemas && !this.currentOneOf && this.subSchemasConstProp)
                        )
                            if (e && e[this.subSchemasConstProp.key])
                                this.currentOneOf = fe.default((i = this.subSchemas)).call(i, function (r) {
                                    return (
                                        r.properties[t.subSchemasConstProp.key].const === e[t.subSchemasConstProp.key]
                                    );
                                });
                            else if (this.fullSchema.default) {
                                var l;
                                this.currentOneOf = fe.default((l = this.subSchemas)).call(l, function (e) {
                                    return (
                                        e.properties[t.subSchemasConstProp.key].const ===
                                        t.fullSchema.default[t.subSchemasConstProp.key]
                                    );
                                });
                            }
                        this.currentOneOf
                            ? this.$set(this.subModels, 'currentOneOf', JSON.parse(he.default(e)))
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
                                              href: ue
                                                  .default(
                                                      (l = ue
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
                                              value: ue
                                                  .default(
                                                      (a = ue
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
                            void 0 !== t.default && (o = JSON.parse(he.default(t.default))),
                            null != o && (this.$set(a, s, o), this.input(this.value))),
                        e('h-form-renderer', {
                            props: {
                                schema: He({ readOnly: this.fullSchema.readOnly }, t),
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
                                        ? te.default(a) && be.default(s) < a.length - 1
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
                    if ('object' === this.fullSchema.type || te.default(this.fullSchema.items)) {
                        if (((this.isObjectContainer = !0), de.default((t = [void 0, null])).call(t, this.value)))
                            return [];
                        var n,
                            a,
                            s,
                            o = [],
                            u = [];
                        if (this.fullSchema.properties)
                            ie.default((n = this.fullSchema.properties)).call(n, function (t) {
                                if (l.isSection(t)) {
                                    var r = l.renderChildProp(e, t, null, l.sectionDepth + 1);
                                    u = ue.default(u).call(u, l.renderSection(e, t, null, r));
                                } else o.push(l.renderChildProp(e, t, null, l.sectionDepth));
                            });
                        if (te.default(this.fullSchema.items))
                            ie.default((a = this.fullSchema.items)).call(a, function (t, r) {
                                var i = He(He({}, t), {}, { key: '' + r }),
                                    n = l.value.length > r || (l.fullSchema.minItems && l.fullSchema.minItems > r);
                                if (l.isSection(t)) {
                                    var a = l.renderChildProp(e, i, null, l.sectionDepth + 1, n);
                                    u = ue.default(u).call(u, l.renderSection(e, i, null, a));
                                } else o.push(l.renderChildProp(e, i, null, l.sectionDepth, n));
                            });
                        if (this.fullSchema.allOf)
                            ie.default((s = this.fullSchema.allOf)).call(s, function (t, r) {
                                var i = He(He({}, t), {}, { type: 'object', key: '' + r });
                                if (l.isSection(t)) {
                                    var n = l.renderChildProp(e, i, 'allOf-' + r, l.sectionDepth + 1);
                                    u = ue.default(u).call(u, l.renderSection(e, i, 'allOf-' + r, n));
                                } else o.push(l.renderChildProp(e, i, 'allOf-' + r, l.sectionDepth));
                            });
                        if ('expansion-panels' === this.display && u.length) {
                            var c = He(He({}, this.fullOptions.expansionPanelsProps), this.fullSchema['x-props']);
                            u = [e('v-expansion-panels', { props: c }, u)];
                        }
                        if ('tabs' === this.display && u.length) {
                            var f = He(He({}, this.fullOptions.tabsProps), this.fullSchema['x-props']);
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
                            var h,
                                d = He(
                                    He({}, this.commonFieldProps),
                                    {},
                                    {
                                        value: this.currentOneOf,
                                        label:
                                            (this.subSchemasConstProp && this.subSchemasConstProp.title) ||
                                            this.fullSchema.title,
                                        items: ce.default((h = this.subSchemas)).call(h, function (e) {
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
                            o.push(e('v-select', { props: d, on: m }, [this.renderTooltip(e, 'append-outer')])),
                                this.currentOneOf &&
                                    this.showCurrentOneOf &&
                                    o.push(
                                        this.renderChildProp(
                                            e,
                                            He(He({}, this.currentOneOf), {}, { type: 'object', title: null }),
                                            'currentOneOf',
                                            this.sectionDepth + 1
                                        )
                                    );
                        }
                        return [
                            e(
                                'v-row',
                                { class: 'ma-0 '.concat(this.fullOptions.objectContainerClass) },
                                ue
                                    .default(
                                        (r = ue
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
        function ze(e, t) {
            var r = re.default(e);
            if (oe.default) {
                var i = oe.default(e);
                t &&
                    (i = ce.default(i).call(i, function (t) {
                        return se.default(e, t).enumerable;
                    })),
                    r.push.apply(r, i);
            }
            return r;
        }
        function Ge(e) {
            for (var t = arguments, r = 1; r < arguments.length; r++) {
                var i,
                    l = null != t[r] ? t[r] : {};
                if (r % 2)
                    ie.default((i = ze(Object(l), !0))).call(i, function (t) {
                        me.default(e, t, l[t]);
                    });
                else if (ae.default) ne.default(e, ae.default(l));
                else {
                    var n;
                    ie.default((n = ze(Object(l)))).call(n, function (t) {
                        le.default(e, t, se.default(l, t));
                    });
                }
            }
            return e;
        }
        var Je = function (e) {
                var t = '' + e;
                return 1 === t.length ? '0' + t : t;
            },
            Be = function (e) {
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
                            c = ue
                                .default((t = ''.concat(Je(be.default(Math.abs(u / 60))), ':')))
                                .call(t, Je(Math.abs(u % 60)));
                        return (
                            (o = u < 0 ? '+'.concat(c) : u > 0 ? '-'.concat(c) : 'Z'),
                            ue
                                .default(
                                    (r = ue
                                        .default(
                                            (i = ue
                                                .default(
                                                    (l = ue
                                                        .default(
                                                            (n = ue
                                                                .default(
                                                                    (a = ue
                                                                        .default((s = ''.concat(e.getFullYear(), '-')))
                                                                        .call(s, Je(e.getMonth() + 1), '-'))
                                                                )
                                                                .call(a, Je(e.getDate()), 'T'))
                                                        )
                                                        .call(n, Je(e.getHours()), ':'))
                                                )
                                                .call(l, Je(e.getMinutes()), ':'))
                                        )
                                        .call(i, Je(e.getSeconds())))
                                )
                                .call(r, o)
                        );
                    })(t)
                );
            },
            Ze = function (e) {
                return e + ':00Z';
            },
            Ye = {
                data: function () {
                    return { dateProp: { tab: 'tab-date', menu: !1, parts: [null, null], lastValue: null } };
                },
                methods: {
                    renderDateProp: function (e) {
                        var t,
                            r = this;
                        if (
                            'string' === this.fullSchema.type &&
                            de.default((t = ['date', 'date-time', 'time'])).call(t, this.fullSchema.format)
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
                                    props: Ge(
                                        { value: ((o = this.value), o ? ve.default(o).call(o, 0, 5) : '') },
                                        this.fullSchema['x-props']
                                    ),
                                    on: {
                                        input: function (e) {
                                            return r.input(Ze(e));
                                        },
                                        change: function (e) {
                                            return r.change(Ze(e));
                                        },
                                    },
                                })),
                                    (u = this.fullOptions.icons.clock);
                            else if ('date' === this.fullSchema.format)
                                i = e('v-date-picker', {
                                    props: Ge({ value: this.value }, this.fullSchema['x-props']),
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
                                            ue
                                                .default(
                                                    (n = ue
                                                        .default((a = ''.concat(l.getFullYear(), '-')))
                                                        .call(a, Je(l.getMonth() + 1), '-'))
                                                )
                                                .call(n, Je(l.getDate())),
                                            ue
                                                .default((s = ''.concat(Je(l.getHours()), ':')))
                                                .call(s, Je(l.getMinutes())),
                                        ])),
                                    (this.dateProp.lastValue = this.value);
                                var c = function () {
                                        if (r.dateProp.parts[1]) {
                                            var e = Be(r.dateProp.parts);
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
                                                props: Ge(
                                                    Ge({}, this.fullOptions.datePickerProps),
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
                                                props: Ge(
                                                    Ge({}, this.fullOptions.timePickerProps),
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
                            var h = {
                                activator: function (t) {
                                    var i = t.on;
                                    return e(
                                        'v-text-field',
                                        {
                                            props: Ge(
                                                Ge({}, r.commonFieldProps),
                                                {},
                                                {
                                                    value: r.formattedValue,
                                                    clearable: !r.required,
                                                    readonly: !0,
                                                    prependIcon: u,
                                                }
                                            ),
                                            on: Ge(
                                                Ge({}, i),
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
                                        scopedSlots: h,
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
        function Qe(e, t) {
            var r = re.default(e);
            if (oe.default) {
                var i = oe.default(e);
                t &&
                    (i = ce.default(i).call(i, function (t) {
                        return se.default(e, t).enumerable;
                    })),
                    r.push.apply(r, i);
            }
            return r;
        }
        function Xe(e) {
            for (var t = arguments, r = 1; r < arguments.length; r++) {
                var i,
                    l = null != t[r] ? t[r] : {};
                if (r % 2)
                    ie.default((i = Qe(Object(l), !0))).call(i, function (t) {
                        me.default(e, t, l[t]);
                    });
                else if (ae.default) ne.default(e, ae.default(l));
                else {
                    var n;
                    ie.default((n = Qe(Object(l)))).call(n, function (t) {
                        le.default(e, t, se.default(l, t));
                    });
                }
            }
            return e;
        }
        var et = {
            computed: {
                isSimpleProp: function () {
                    var e, t;
                    return (
                        'string' === this.fullSchema.type ||
                        de.default((e = ['number', 'integer'])).call(e, this.fullSchema.type) ||
                        'boolean' === this.fullSchema.type ||
                        ('array' === this.fullSchema.type &&
                            de.default((t = ['string', 'number', 'integer'])).call(t, this.fullSchema.items.type))
                    );
                },
            },
            methods: {
                renderSimpleProp: function (e) {
                    var t,
                        r,
                        i = this;
                    if (this.isSimpleProp) {
                        var l = Xe({}, this.commonFieldProps),
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
                            (de.default((t = ['number', 'integer'])).call(t, this.fullSchema.type) &&
                                (s.input = function (e) {
                                    i.input('integer' === i.fullSchema.type ? be.default(e, 10) : ye.default(e));
                                }),
                            'boolean' === this.fullSchema.type &&
                                (s.change = function (e) {
                                    i.input(e || !1), i.change(e || !1);
                                }),
                            'array' === this.fullSchema.type &&
                                de.default((r = ['string', 'number', 'integer'])).call(r, this.fullSchema.items.type) &&
                                'string' !== this.fullSchema.items.type &&
                                ((l.type = 'number'),
                                (s.input = function (e) {
                                    var t,
                                        r = ce
                                            .default(
                                                (t = pe.default(e).call(e, function (e) {
                                                    return 'integer' === i.fullSchema.items.type
                                                        ? be.default(e, 10)
                                                        : ye.default(e);
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
                                                      props: Xe(Xe({}, l), {}, { required: !0, 'error-messages': r }),
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
        function tt(e, t) {
            var r = re.default(e);
            if (oe.default) {
                var i = oe.default(e);
                t &&
                    (i = ce.default(i).call(i, function (t) {
                        return se.default(e, t).enumerable;
                    })),
                    r.push.apply(r, i);
            }
            return r;
        }
        function rt(e) {
            for (var t = arguments, r = 1; r < arguments.length; r++) {
                var i,
                    l = null != t[r] ? t[r] : {};
                if (r % 2)
                    ie.default((i = tt(Object(l), !0))).call(i, function (t) {
                        me.default(e, t, l[t]);
                    });
                else if (ae.default) ne.default(e, ae.default(l));
                else {
                    var n;
                    ie.default((n = tt(Object(l)))).call(n, function (t) {
                        le.default(e, t, se.default(l, t));
                    });
                }
            }
            return e;
        }
        var it = function (e) {
                return new Oe.default(function (t) {
                    var r = new FileReader();
                    (r.onload = function () {
                        return t(r.result);
                    }),
                        r.readAsDataURL(e);
                });
            },
            lt = (function () {
                var e = je.default(
                    Se.default.mark(function e(t, r, i) {
                        var l, n;
                        return Se.default.wrap(function (e) {
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
                                        return (e.next = 5), it(t);
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
            nt = {
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
                            var r = rt(rt({}, this.commonFieldProps), this.fullOptions.fileInputProps);
                            delete r.value;
                            var i = {};
                            this.fullSchema.contentMediaType && (i.accept = this.fullSchema.contentMediaType),
                                this.fullSchema.items &&
                                    this.fullSchema.items.contentMediaType &&
                                    (i.accept = this.fullSchema.items.contentMediaType),
                                'array' === this.fullSchema.type && (i.multiple = !0);
                            var l,
                                n = ge.default(this.renderPropSlots(e)),
                                a = {
                                    change:
                                        ((l = je.default(
                                            Se.default.mark(function e(r) {
                                                var i, l;
                                                return Se.default.wrap(function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if ('array' !== t.fullSchema.type) {
                                                                    e.next = 8;
                                                                    break;
                                                                }
                                                                return (
                                                                    (e.next = 3),
                                                                    Oe.default.all(
                                                                        pe.default(r).call(r, function (e) {
                                                                            return lt(
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
                                                                    lt(
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
        function at(e, t) {
            var r = re.default(e);
            if (oe.default) {
                var i = oe.default(e);
                t &&
                    (i = ce.default(i).call(i, function (t) {
                        return se.default(e, t).enumerable;
                    })),
                    r.push.apply(r, i);
            }
            return r;
        }
        function st(e) {
            for (var t = arguments, r = 1; r < arguments.length; r++) {
                var i,
                    l = null != t[r] ? t[r] : {};
                if (r % 2)
                    ie.default((i = at(Object(l), !0))).call(i, function (t) {
                        me.default(e, t, l[t]);
                    });
                else if (ae.default) ne.default(e, ae.default(l));
                else {
                    var n;
                    ie.default((n = at(Object(l)))).call(n, function (t) {
                        le.default(e, t, se.default(l, t));
                    });
                }
            }
            return e;
        }
        var ot = {
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
                                                    props: st(
                                                        st(
                                                            st({ flat: !0 }, t.fullOptions.colorPickerProps),
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
                                            props: st(
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
            ut = {
                getSelectItems: function (e, t, r, i) {
                    var l = [];
                    if (e)
                        if (
                            ('object' === t.type && t.properties && re.default(t.properties).length) ||
                            ('array' === t.type &&
                                t.items &&
                                'object' === t.items.type &&
                                t.items.properties &&
                                re.default(t.items.properties).length)
                        ) {
                            var n,
                                a = t.properties
                                    ? pe.default((n = t.properties)).call(n, function (e) {
                                          return e.key;
                                      })
                                    : re.default(t.items.properties);
                            ie.default(e).call(e, function (e) {
                                var t = {};
                                ie.default(a).call(a, function (r) {
                                    void 0 !== e[r] && (t[r] = e[r]);
                                }),
                                    l.push(t);
                            });
                        } else
                            ie.default(e).call(e, function (e) {
                                if ('object' === ee.default(e)) l.push(e);
                                else {
                                    var t = me.default({}, r, e);
                                    i && (t[i] = e), l.push(t);
                                }
                            });
                    else;
                    return l;
                },
            },
            ct = function (e, t, r) {
                var i, l;
                return (
                    !de.default((i = [null, void 0])).call(i, e) &&
                    !de.default((l = [null, void 0])).call(l, t) &&
                    he.default(e[r]) === he.default(t[r])
                );
            };
        function ft(e, t) {
            var r;
            if (void 0 === Ie.default || null == Pe.default(e)) {
                if (
                    te.default(e) ||
                    (r = (function (e, t) {
                        var r;
                        if (!e) return;
                        if ('string' == typeof e) return ht(e, t);
                        var i = ve.default((r = Object.prototype.toString.call(e))).call(r, 8, -1);
                        'Object' === i && e.constructor && (i = e.constructor.name);
                        if ('Map' === i || 'Set' === i) return ke.default(e);
                        if ('Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return ht(e, t);
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
                    r = xe.default(e);
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
        function ht(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
            return i;
        }
        function dt(e, t) {
            var r = re.default(e);
            if (oe.default) {
                var i = oe.default(e);
                t &&
                    (i = ce.default(i).call(i, function (t) {
                        return se.default(e, t).enumerable;
                    })),
                    r.push.apply(r, i);
            }
            return r;
        }
        function mt(e) {
            for (var t = arguments, r = 1; r < arguments.length; r++) {
                var i,
                    l = null != t[r] ? t[r] : {};
                if (r % 2)
                    ie.default((i = dt(Object(l), !0))).call(i, function (t) {
                        me.default(e, t, l[t]);
                    });
                else if (ae.default) ne.default(e, ae.default(l));
                else {
                    var n;
                    ie.default((n = dt(Object(l)))).call(n, function (t) {
                        le.default(e, t, se.default(l, t));
                    });
                }
            }
            return e;
        }
        (ut.fillSelectItems = function (e, t, r, i, l) {
            if (t)
                if ('array' === e.type) {
                    var n, a;
                    ie.default(
                        (n = Ce.default(
                            (a = pe.default(t).call(t, function (e) {
                                return e;
                            }))
                        ).call(a))
                    ).call(n, function (e) {
                        var t = l ? e : me.default({}, i, e);
                        fe.default(r).call(r, function (e) {
                            return ct(e, t, i);
                        }) || r.push(t);
                    });
                } else {
                    var s = l ? t : me.default({}, i, t);
                    fe.default(r).call(r, function (e) {
                        return ct(e, s, i);
                    }) || r.push(s);
                }
        }),
            (ut.fillList = function (e, t, r, i) {
                if (t)
                    return r.length
                        ? (ie.default(r).call(r, function (e) {
                              fe.default(t).call(t, function (t) {
                                  return ct(e, t, i);
                              }) || t.push(e);
                          }),
                          ie.default(t).call(t, function (e, l) {
                              fe.default(r).call(r, function (t) {
                                  return ct(t, e, i);
                              }) || (t[l] = null);
                          }),
                          ce.default(t).call(t, function (e) {
                              return !!e;
                          }))
                        : [];
            });
        var pt = require('match-all'),
            bt = require('debounce');
        function vt(e, t) {
            var r = re.default(e);
            if (oe.default) {
                var i = oe.default(e);
                t &&
                    (i = ce.default(i).call(i, function (t) {
                        return se.default(e, t).enumerable;
                    })),
                    r.push.apply(r, i);
            }
            return r;
        }
        function yt(e) {
            for (var t = arguments, r = 1; r < arguments.length; r++) {
                var i,
                    l = null != t[r] ? t[r] : {};
                if (r % 2)
                    ie.default((i = vt(Object(l), !0))).call(i, function (t) {
                        me.default(e, t, l[t]);
                    });
                else if (ae.default) ne.default(e, ae.default(l));
                else {
                    var n;
                    ie.default((n = vt(Object(l)))).call(n, function (t) {
                        le.default(e, t, se.default(l, t));
                    });
                }
            }
            return e;
        }
        var gt = {
                name: 'HAssemblyRenderder',
                mixins: [
                    We,
                    et,
                    Ye,
                    ot,
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
                                        !de
                                            .default((e = ['string', 'integer', 'number']))
                                            .call(e, this.fullSchema.items.type) ||
                                        !this.fullSchema.items.oneOf
                                    ) ||
                                    !(
                                        !de
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
                                    -1 === we.default((e = this.fullSchema['x-fromUrl'])).call(e, '{q}')
                                );
                            },
                            fromUrlKeys: function () {
                                var e;
                                return this.fullSchema['x-fromUrl']
                                    ? ce
                                          .default((e = pt(this.fullSchema['x-fromUrl'], /\{(.*?)\}/g).toArray()))
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
                                    (this.rawSelectItems = pe
                                        .default(
                                            (t = ('array' === this.fullSchema.type
                                                ? this.fullSchema.items
                                                : this.fullSchema
                                            ).oneOf)
                                        )
                                        .call(t, function (e) {
                                            var t;
                                            return mt(
                                                mt({}, e),
                                                {},
                                                ((t = {}),
                                                me.default(t, r.itemKey, e.const || (e.enum && e.enum[0])),
                                                me.default(t, r.itemTitle, e.title),
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
                                    ie.default((i = this.fromUrlKeys)).call(i, function (e) {
                                        Ve.default(e).call(e, 'context.')
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
                                    bt(function () {
                                        var t,
                                            r = e.fullSchema['x-fromUrl'].replace('{q}', e.q || ''),
                                            i = ft(e.fromUrlKeys);
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
                                                    if (!te.default(l))
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
                                var e = ut.getSelectItems(
                                    this.rawSelectItems,
                                    this.fullSchema,
                                    this.itemKey,
                                    this.itemIcon
                                );
                                'list' === this.display &&
                                    this.input(ut.fillList(this.fullSchema, this.value, e, this.itemKey)),
                                    ut.fillSelectItems(this.fullSchema, this.value, e, this.itemKey, this.returnObject),
                                    he.default(e) !== he.default(this.selectItems) && (this.selectItems = e);
                            },
                            renderSelectIcon: function (e, t) {
                                if (this.itemIcon) {
                                    var r = t[this.itemIcon];
                                    if (r) {
                                        var i = e('v-icon', null, r);
                                        return (
                                            Ve.default(r).call(r, 'http://') || Ve.default(r).call(r, 'https://')
                                                ? (i = e('img', {
                                                      domProps: { src: r },
                                                      style: 'height:100%;width:100%;',
                                                  }))
                                                : (Ve.default(r).call(r, '<?xml') || Ve.default(r).call(r, '<svg')) &&
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
                                    a = mt(
                                        mt({}, this.commonFieldProps),
                                        {},
                                        { multiple: 'array' === this.fullSchema.type, label: null }
                                    ),
                                    s = e(
                                        'legend',
                                        {
                                            class: ue
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
                                    o = pe.default((r = this.selectItems)).call(r, function (t) {
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
                                                ue.default((i = [s])).call(i, ge.default(o))
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
                                    props: mt(mt({}, this.fullOptions.radioItemProps), {}, { label: r, value: i }),
                                });
                            },
                            renderRadioGroup: function (e) {
                                var t,
                                    r,
                                    i = this,
                                    l = mt(mt({}, this.commonFieldProps), this.fullOptions.radioGroupProps);
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
                                        ue.default((t = [])).call(
                                            t,
                                            ge.default(
                                                pe.default((r = this.selectItems)).call(r, function (t) {
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
                                    if (de.default((t = ['checkbox', 'switch'])).call(t, this.display))
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
                                        n = ge.default(this.renderPropSlots(e));
                                    this.htmlDescription && n.push(this.renderTooltip(e, 'append-outer'));
                                    var a = 'v-select',
                                        s = mt(
                                            mt(mt({}, this.commonFieldProps), this.fullOptions.selectProps),
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
                                                      return de
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
                    nt,
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
                                    var t = JSON.parse(he.default(this.fullSchema.items));
                                    if (((t.readOnly = !0), this.itemTitle)) {
                                        var r, i;
                                        if (
                                            (t.properties &&
                                                t.properties[this.itemTitle] &&
                                                (t.properties[this.itemTitle]['x-display'] = 'hidden'),
                                            t.oneOf)
                                        )
                                            ie.default((r = t.oneOf)).call(r, function (t) {
                                                t.properties[e.itemTitle] &&
                                                    (t.properties[e.itemTitle]['x-display'] = 'hidden');
                                            });
                                        if (this.fullSchema.items.allOf)
                                            ie.default((i = t.allOf)).call(i, function (t) {
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
                                    (Te.default((l = this.fullOptions.idPrefix)).call(l, '--dialog--') ||
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
                                                            (n.editabledArrayProp.editItem = JSON.parse(he.default(t))),
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
                                        props: yt(
                                            yt({}, this.fullOptions.dialogProps),
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
                                        value: JSON.parse(he.default(t)),
                                        modelRoot: this.modelRoot || this.value,
                                        modelKey: r,
                                        parentKey: ''.concat(this.fullKey, '.'),
                                        options: yt(
                                            yt({}, this.fullOptions),
                                            {},
                                            {
                                                hideReadOnly: !1,
                                                fieldProps: yt(yt({}, this.fullOptions.fieldProps), {}, { dense: !0 }),
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
                                            s = pe
                                                .default(
                                                    (n = ce.default((a = this.value)).call(a, function (e) {
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
                                                                                        i = ce
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
                                return qe.default((e = this.inputs)).call(
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
                                    !!fe.default((e = this.inputs)).call(e, function (e) {
                                        return e.hasError;
                                    }) || !!this.containerError
                                );
                            },
                            hasValidatedChildError: function () {
                                var e;
                                return !!fe.default((e = this.inputs)).call(e, function (e) {
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
                                this.inputs = ce.default((t = this.inputs)).call(t, function (t) {
                                    return t._uid !== e._uid;
                                });
                            },
                            validate: function (e) {
                                var t;
                                return (
                                    (this.validated = !0),
                                    0 ===
                                        ce.default((t = this.inputs)).call(t, function (t) {
                                            return !t.validate(e);
                                        }).length
                                );
                            },
                            reset: function () {
                                var e;
                                ie.default((e = this.inputs)).call(e, function (e) {
                                    return e.reset();
                                });
                            },
                            resetValidation: function () {
                                var e;
                                (this.shouldValidate = !1),
                                    (this.validated = !1),
                                    ie.default((e = this.inputs)).call(e, function (e) {
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
                            t = Object.assign({}, Me, this.options || {}, this.resolvedSchema['x-options'] || {});
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
                            (t.icons = Object.assign({}, Ue[r], t.icons)),
                            (t.messages = Object.assign({}, Ee[t.locale] || Ee.en, t.messages)),
                            (t.formats = Object.assign({}, Fe, t.formats)),
                            t.deleteReadOnly && (t.hideReadOnly = !0),
                            t
                        );
                    },
                    resolvedSchema: function () {
                        return 'root' === this.modelKey
                            ? $e.resolve(this.schema, { '~$locale~': (this.options && this.options.locale) || 'en' })
                            : this.schema;
                    },
                    fullSchema: function () {
                        return Re.prepareFullSchema(this.resolvedSchema, this.value);
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
                                var h = t.messages.pattern.replace('{pattern}', e.pattern);
                                s.push(function (t) {
                                    return null == t || !!t.match(e.patternRegexp) || h;
                                });
                            }
                            if (de.default((l = ['number', 'integer'])).call(l, e.type) && void 0 !== e.maximum) {
                                var d = t.messages.maximum.replace('{maximum}', e.maximum.toLocaleString(t.locale));
                                s.push(function (t) {
                                    return null == t || t <= e.maximum || d;
                                });
                            }
                            if (de.default((n = ['number', 'integer'])).call(n, e.type) && void 0 !== e.minimum) {
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
                                        !!fe.default((r = e.enum)).call(r, function (e) {
                                            return he.default(e) === he.default(t);
                                        }) ||
                                        ''
                                    );
                                }),
                                'array' === e.type &&
                                    e.items.enum &&
                                    s.push(function (t) {
                                        return (
                                            null == t ||
                                            !fe.default(t).call(t, function (t) {
                                                var r;
                                                return !fe.default((r = e.items.enum)).call(r, function (e) {
                                                    return he.default(e) === he.default(t);
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
                                            !!fe.default((r = e.oneOf)).call(r, function (e) {
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
                                            !fe.default(t).call(t, function (t) {
                                                var r;
                                                return !fe.default((r = e.items.oneOf)).call(r, function (e) {
                                                    return e.const === t;
                                                });
                                            }) ||
                                            ''
                                        );
                                    });
                            var p = pe.default((a = e['x-ruless'] || [])).call(a, function (e) {
                                return 'string' == typeof e
                                    ? t.rules && t.rules[e]
                                    : 'function' == typeof e
                                    ? e
                                    : void 0;
                            });
                            return ue.default(s).call(s, p);
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
                                  e('div', { domProps: { innerHTML: this.fullOptions.markdown(this.xSlots.after) } })
                              );
                        var r = Object.assign({}, this.fullOptions.fieldColProps);
                        return (
                            this.fullSchema['x-cols'] && (r.cols = this.fullSchema['x-cols']),
                            e(
                                'v-col',
                                { props: r, class: this.propertyClass, style: this.fullSchema['x-style'] || '' },
                                t
                            )
                        );
                    }
                },
                methods: {
                    renderPropSlots: function (e) {
                        var t = this,
                            r = [];
                        return (
                            Object.keys(this.xSlots).forEach(function (i) {
                                r.push(
                                    e('div', { slot: i, domProps: { innerHTML: t.fullOptions.markdown(t.xSlots[i]) } })
                                );
                            }),
                            Object.keys(this.$slots).forEach(function (i) {
                                r.push(e('template', { slot: i }, t.$slots[i]));
                            }),
                            r
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
                                    Object.keys(e.subModels[t]).forEach(function (r) {
                                        e.value[r] !== e.subModels[t][r] && e.$set(e.value, r, e.subModels[t][r]);
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
            St = De.default({}, undefined, gt, undefined, undefined, undefined, !1, void 0, void 0, void 0),
            jt = {
                name: 'HFormRenderer',
                components: {
                    VAvatar: Q.VAvatar,
                    VAutocomplete: Q.VAutocomplete,
                    VBtn: Q.VBtn,
                    VCard: Q.VCard,
                    VCardActions: Q.VCardActions,
                    VCardText: Q.VCardText,
                    VCardTitle: Q.VCardTitle,
                    VCheckbox: Q.VCheckbox,
                    VChip: Q.VChip,
                    VColorPicker: Q.VColorPicker,
                    VCombobox: Q.VCombobox,
                    VContainer: Q.VContainer,
                    VDatePicker: Q.VDatePicker,
                    VDialog: Q.VDialog,
                    VExpansionPanels: Q.VExpansionPanels,
                    VExpansionPanel: Q.VExpansionPanel,
                    VExpansionPanelHeader: Q.VExpansionPanelHeader,
                    VExpansionPanelContent: Q.VExpansionPanelContent,
                    VCol: Q.VCol,
                    VFileInput: Q.VFileInput,
                    VIcon: Q.VIcon,
                    VInput: Q.VInput,
                    VRow: Q.VRow,
                    VListItemContent: Q.VListItemContent,
                    VListItemTitle: Q.VListItemTitle,
                    VMenu: Q.VMenu,
                    VRadio: Q.VRadio,
                    VRadioGroup: Q.VRadioGroup,
                    VRangeSlider: Q.VRangeSlider,
                    VSelect: Q.VSelect,
                    VSlider: Q.VSlider,
                    VSpacer: Q.VSpacer,
                    VSubheader: Q.VSubheader,
                    VSwitch: Q.VSwitch,
                    VTabs: Q.VTabs,
                    VTab: Q.VTab,
                    VTabItem: Q.VTabItem,
                    VTextarea: Q.VTextarea,
                    VTextField: Q.VTextField,
                    VTimePicker: Q.VTimePicker,
                    VTooltip: Q.VTooltip,
                },
                mixins: [St],
            },
            Ot = De.default({}, undefined, jt, undefined, undefined, undefined, !1, void 0, void 0, void 0);
        (Ot.install = function (e) {
            e.component(Ot.name, Ot);
        }),
            null != ('undefined' == typeof window ? 'undefined' : ee.default(window)) &&
                window.Vue &&
                Ot.install(window.Vue),
            (e.HFormRenderer = Ot),
            Object.defineProperty(e, '__esModule', { value: !0 });
    }
);
