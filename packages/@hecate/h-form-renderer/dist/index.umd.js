!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(require('vuetify/lib'))
        : 'function' == typeof define && define.amd
        ? define(['vuetify/lib'], t)
        : t((e = 'undefined' != typeof globalThis ? globalThis : e || self).Vuetify);
})(this, function (e) {
    'use strict';
    var t = require('property-expr');
    const i = {
            cache: {},
            extendtoken: '$extend',
            reftoken: '$ref',
            pathtoken: '#',
            debug: !1,
            clone: function (e) {
                var t, s;
                if (null === e || 'object' != typeof e || 'function' == typeof e) return e;
                for (t in ((s = e.constructor()), e)) s[t] = i.clone(e[t]);
                return s;
            },
            findIds: function (e, t) {
                var s, l, r, a;
                for (l in ((s = !1), (r = {}), e))
                    (a = e[l]),
                        null != e.id && (s = e.id),
                        s && 'id' !== l && (r[l] = a),
                        'object' == typeof a && i.findIds(a, t);
                if (s) return (t[s] = r), r;
            },
            get_json_pointer: function (e, s, l) {
                var r, a;
                (r = e
                    .replace(/\\\//, '#SLASH#')
                    .replace(/\//g, '.')
                    .replace(/#SLASH#/, '/')),
                    Object.keys(l).forEach((e) => {
                        r = r.replace(e, l[e]);
                    }),
                    '.' === (r = r.replace(new RegExp('^' + i.pathtoken), ''))[0] && (r = r.substr(1, r.length - 1));
                try {
                    i.debug, (a = t.getter(r)(s));
                } catch (e) {
                    a = '';
                }
                return a;
            },
            replace: function (e, t, s, l) {
                var r, a, n, o, h, u;
                for (r in ((h = []), e))
                    null != (u = e[r]) && null != u[i.reftoken]
                        ? ((a = u[i.reftoken]),
                          Object.keys(u).length,
                          Array.isArray(a)
                              ? (a = i.replace(a, t, s, l))
                              : null != t[a]
                              ? (e[r] = t[a])
                              : String(a).match(new RegExp('^' + i.pathtoken)) && (e[r] = i.get_json_pointer(a, s, l)),
                          null != (null != (n = e[r]) ? n.length : void 0) &&
                              0 === (null != (o = e[r]) ? o.length : void 0) &&
                              i.debug,
                          h.push(void 0))
                        : 'object' == typeof u
                        ? h.push(i.replace(u, t, s, l))
                        : h.push(void 0);
                return h;
            },
            extend: function (e, t) {
                var s, l, r, a, n, o;
                if ('object' == typeof e) {
                    for (s in ((r = []), e)) {
                        if (((o = e[s]), s === i.extendtoken && null != o[i.reftoken])) {
                            for (a in ((l = i.get_json_pointer(o[i.reftoken], e, t)), o))
                                (n = o[a]), a !== i.reftoken && (l[a] = n);
                            delete e[s];
                        }
                        'object' == typeof o ? r.push((o = i.extend(o))) : r.push(void 0);
                    }
                    return r;
                }
            },
            resolve: function (e, t) {
                var s;
                return (s = {}), i.findIds(e, s), i.debug && Object.keys(s).length, i.replace(e, s, e, t), e;
            },
            evaluate: function (e, t, s) {
                var l, r, a;
                for (l in (null == s && (s = i.evaluateStr), (r = i.clone(e))))
                    'string' == typeof (a = r[l]) && (e[l] = s(a, t)),
                        'object' == typeof a && (e[l] = i.evaluate(a, t));
                return e;
            },
            evaluateStr: function (e, s) {
                if ('string' != typeof e) return e;
                if ('{' !== e[0] || '}' !== e[e.length - 1])
                    return e.replace(/(\{)(.*?)(\})/g, function (e, l, r) {
                        var a;
                        if (((a = ''), null == s || null == r)) return a;
                        if (null != s[r] && 'function' == typeof s[r]) a = s[r]();
                        else if (null != s[r]) a = s[r];
                        else {
                            try {
                                (r = r.replace(new RegExp('^' + i.pathtoken + '/'), '').replace(/\//g, '.')),
                                    (a = t.getter(r)(s));
                            } catch (e) {
                                (err = e), (a = '');
                            }
                            null == a && (a = '');
                        }
                        return i.evaluateStr(a, s), a;
                    });
                try {
                    return t.getter(e.replace(/^{/, '').replace(/}$/, ''))(s);
                } catch (e) {
                    return null;
                }
            },
        },
        s = {},
        l = (e) => Object.keys(e || {}).map((t) => ({ ...e[t], key: t }));
    s.prepareFullSchema = (e, t) => {
        const i = JSON.parse(JSON.stringify(e));
        return (
            i.pattern && (i.patternRegexp = new RegExp(i.pattern)),
            Array.isArray(i.type) &&
                ((i.nullable = i.type.includes('null')),
                (i.type = i.type.find((e) => 'null' !== e)),
                i.nullable && i.enum && (i.enum = i.enum.filter((e) => null !== e))),
            'object' !== i.type ||
                ((i.properties = JSON.parse(JSON.stringify(l(i.properties)))),
                (i.required = i.required || []),
                (i.dependencies = i.dependencies || {}),
                i.dependencies &&
                    Object.keys(i.dependencies).forEach((e) => {
                        const s = i.dependencies[e];
                        if (!t) return;
                        const r = ((e, t) => {
                            const i = t.split('.');
                            for (let t = 0; t < i.length && ![null, void 0].includes(e); t++) e = e[i[t]];
                            return e;
                        })(t, e);
                        [null, void 0, !1].includes(r) ||
                            (Array.isArray(r) && 0 === r.length) ||
                            ('object' == typeof r && 0 === Object.keys(r).length) ||
                            ((i.required = i.required.concat(s.required || [])),
                            (i.properties = i.properties.concat(l(s.properties))),
                            s.oneOf && (i.oneOf = (i.oneOf || []).concat(s.oneOf)),
                            s.allOf && (i.allOf = (i.allOf || []).concat(s.allOf)));
                    })),
            i
        );
    };
    const r = {
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
        a = {
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
        n = {
            time: (e, t) => {
                const i = new Date(`${new Date().toISOString().split('T')[0]}T${e}`);
                return new Date(i.getTime() + 6e4 * i.getTimezoneOffset()).toLocaleTimeString(t);
            },
            date: (e, t) => {
                const i = new Date(e);
                return new Date(i.getTime() + 6e4 * i.getTimezoneOffset()).toLocaleDateString(t);
            },
            'date-time': (e, t) => new Date(e).toLocaleString(t),
        },
        o = {
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
    var h = {
        data: () => ({ currentOneOf: null, currentTab: null, showCurrentOneOf: !0, subModels: {} }),
        computed: {
            subSchemas() {
                return this.fullSchema.oneOf || this.fullSchema.anyOf;
            },
            subSchemasConstProp() {
                if (!this.subSchemas) return;
                const e = this.subSchemas[0].properties,
                    t = Object.keys(e).find((t) => !!e[t].const);
                return t
                    ? { ...e[t], key: t, htmlDescription: this.fullOptions.markdown(e[t].description || '') }
                    : void 0;
            },
            subSchemasRequired() {
                return (
                    !(!this.subSchemas || !this.subSchemasConstProp) &&
                    (!!this.fullSchema.oneOf ||
                        !!(
                            this.fullSchema.anyOf &&
                            this.fullSchema.required &&
                            this.fullSchema.required.find((e) => e === this.oneOfConstProp.key)
                        ) ||
                        void 0)
                );
            },
            subSchemasRules() {
                const e = [];
                return (
                    this.subSchemasRequired &&
                        e.push((e) => (null != e && '' !== e) || this.fullOptions.messages.required),
                    e
                );
            },
        },
        watch: {
            currentOneOf(e, t) {
                (this.showCurrentOneOf = !1),
                    this.$nextTick(() => {
                        (this.showCurrentOneOf = !0),
                            this.currentOneOf ? this.fixProperties() : this.$set(this.subModels, 'currentOneOf', {}),
                            this.input(this.value),
                            this.$emit('change', this.value);
                    });
            },
            subModels: {
                handler() {
                    this.fixProperties();
                },
                deep: !0,
            },
        },
        methods: {
            isSection: (e) =>
                (e.properties || e.allOf || Array.isArray(e.items)) &&
                e.title &&
                !e['x-fromUrl'] &&
                !e['x-fromData'] &&
                !e.contentMediaType &&
                'file' !== e['x-display'],
            initObjectContainer(e) {
                'object' === this.fullSchema.type &&
                    (this.fullSchema.allOf &&
                        this.fullSchema.allOf.forEach((t, i) => {
                            this.$set(this.subModels, 'allOf-' + i, JSON.parse(JSON.stringify(e)));
                        }),
                    (this.currentOneOf = null),
                    this.subSchemas &&
                        !this.currentOneOf &&
                        this.subSchemasConstProp &&
                        (e && e[this.subSchemasConstProp.key]
                            ? (this.currentOneOf = this.subSchemas.find(
                                  (t) =>
                                      t.properties[this.subSchemasConstProp.key].const ===
                                      e[this.subSchemasConstProp.key]
                              ))
                            : this.fullSchema.default &&
                              (this.currentOneOf = this.subSchemas.find(
                                  (e) =>
                                      e.properties[this.subSchemasConstProp.key].const ===
                                      this.fullSchema.default[this.subSchemasConstProp.key]
                              ))),
                    this.currentOneOf
                        ? this.$set(this.subModels, 'currentOneOf', JSON.parse(JSON.stringify(e)))
                        : this.$set(this.subModels, 'currentOneOf', {}));
            },
            renderSection(e, t, i, s) {
                if (!s) return;
                const l = i || t.key;
                return 'hidden' === t['x-display'] || (t.readOnly && this.fullOptions.hideReadOnly)
                    ? [s]
                    : 'expansion-panels' === this.display
                    ? [
                          e('v-expansion-panel', [
                              e(
                                  'v-expansion-panel-header',
                                  {
                                      class: {
                                          'error--text':
                                              this.childrenInputs[l] && this.childrenInputs[l].hasValidatedChildError,
                                      },
                                  },
                                  [t.title]
                              ),
                              e('v-expansion-panel-content', { props: { eager: !0 } }, [s]),
                          ]),
                      ]
                    : 'tabs' === this.display
                    ? [
                          e('v-tab', { props: { href: `#tab-${this.fullOptions.idPrefix}${this.dashKey}-${l}` } }, [
                              e(
                                  'span',
                                  {
                                      class: {
                                          'error--text':
                                              this.childrenInputs[l] && this.childrenInputs[l].hasValidatedChildError,
                                      },
                                  },
                                  [t.title]
                              ),
                          ]),
                          e(
                              'v-tab-item',
                              { props: { value: `tab-${this.fullOptions.idPrefix}${this.dashKey}-${l}`, eager: !0 } },
                              [e('v-card', { props: { tile: !0, flat: !0 } }, [e('v-card-text', [s])])]
                          ),
                      ]
                    : [
                          e('v-row', { class: 'ma-0 ' + this.fullOptions.sectionsClass }, [
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
                                  [t.title + ' ']
                              ),
                              s,
                          ]),
                      ];
            },
            renderChildProp(e, t, i, s, l) {
                const r = i ? this.subModels : this.value,
                    a = i || t.key;
                let n = r[a];
                return (
                    void 0 === n &&
                        ((n = this.defaultValue(t)),
                        void 0 !== t.default && (n = JSON.parse(JSON.stringify(t.default))),
                        null != n && (this.$set(r, a, n), this.input(this.value))),
                    e('h-form-renderer', {
                        props: {
                            schema: { readOnly: this.fullSchema.readOnly, ...t },
                            value: n,
                            modelRoot: this.modelRoot || this.value,
                            modelKey: a,
                            parentKey: this.fullKey + '.',
                            options: this.fullOptions,
                            sectionDepth: s,
                        },
                        on: {
                            error: (e) => this.$emit('error', e),
                            input: (e) => {
                                void 0 === e
                                    ? Array.isArray(r) && parseInt(a) < r.length - 1
                                        ? this.$set(r, a, e)
                                        : this.$delete(r, a)
                                    : this.$set(r, a, e),
                                    this.$emit('input', this.value);
                            },
                            change: (e) => this.$emit('change', this.value),
                        },
                    })
                );
            },
            renderObjectContainer(e) {
                if ('object' !== this.fullSchema.type && !Array.isArray(this.fullSchema.items)) return;
                if (((this.isObjectContainer = !0), [void 0, null].includes(this.value))) return [];
                const t = [];
                let i = [];
                if (
                    (this.fullSchema.properties &&
                        this.fullSchema.properties.forEach((s) => {
                            if (this.isSection(s)) {
                                const t = this.renderChildProp(e, s, null, this.sectionDepth + 1);
                                i = i.concat(this.renderSection(e, s, null, t));
                            } else t.push(this.renderChildProp(e, s, null, this.sectionDepth));
                        }),
                    Array.isArray(this.fullSchema.items) &&
                        this.fullSchema.items.forEach((s, l) => {
                            const r = { ...s, key: '' + l },
                                a = this.value.length > l || (this.fullSchema.minItems && this.fullSchema.minItems > l);
                            if (this.isSection(s)) {
                                const t = this.renderChildProp(e, r, null, this.sectionDepth + 1, a);
                                i = i.concat(this.renderSection(e, r, null, t));
                            } else t.push(this.renderChildProp(e, r, null, this.sectionDepth, a));
                        }),
                    this.fullSchema.allOf &&
                        this.fullSchema.allOf.forEach((s, l) => {
                            const r = { ...s, type: 'object', key: '' + l };
                            if (this.isSection(s)) {
                                const t = this.renderChildProp(e, r, 'allOf-' + l, this.sectionDepth + 1);
                                i = i.concat(this.renderSection(e, r, 'allOf-' + l, t));
                            } else t.push(this.renderChildProp(e, r, 'allOf-' + l, this.sectionDepth));
                        }),
                    'expansion-panels' === this.display && i.length)
                ) {
                    const t = { ...this.fullOptions.expansionPanelsProps, ...this.fullSchema['x-props'] };
                    i = [e('v-expansion-panels', { props: t }, i)];
                }
                if ('tabs' === this.display && i.length) {
                    const t = { ...this.fullOptions.tabsProps, ...this.fullSchema['x-props'] };
                    this.currentTab &&
                        this.childrenInputs[this.currentTab] &&
                        this.childrenInputs[this.currentTab].hasValidatedChildError &&
                        (t.sliderColor = 'error'),
                        (i = [
                            e(
                                'v-tabs',
                                {
                                    props: t,
                                    on: {
                                        change: (e) => {
                                            this.currentTab = e.split('-').pop();
                                        },
                                    },
                                },
                                i
                            ),
                        ]);
                }
                if (this.subSchemas && this.subSchemas.length) {
                    const i = {
                            ...this.commonFieldProps,
                            value: this.currentOneOf,
                            label:
                                (this.subSchemasConstProp && this.subSchemasConstProp.title) || this.fullSchema.title,
                            items: this.subSchemas.filter(
                                (e) => e.properties && e.properties[this.subSchemasConstProp.key]
                            ),
                            required: this.subSchemasRequired,
                            clearable: !this.subSchemasRequired,
                            itemValue: (e) => e.properties[this.subSchemasConstProp.key].const,
                            itemText: 'title',
                            rules: this.subSchemasRules,
                            returnObject: !0,
                        },
                        s = {
                            input: (e) => {
                                this.currentOneOf = e;
                            },
                        };
                    t.push(e('v-select', { props: i, on: s }, [this.renderTooltip(e, 'append-outer')])),
                        this.currentOneOf &&
                            this.showCurrentOneOf &&
                            t.push(
                                this.renderChildProp(
                                    e,
                                    { ...this.currentOneOf, type: 'object', title: null },
                                    'currentOneOf',
                                    this.sectionDepth + 1
                                )
                            );
                }
                return [
                    e(
                        'v-row',
                        { class: 'ma-0 ' + this.fullOptions.objectContainerClass },
                        [
                            this.fullSchema.description &&
                                e('v-col', {
                                    props: { cols: 12 },
                                    class: { 'pa-0': !0 },
                                    domProps: { innerHTML: this.htmlDescription },
                                }),
                        ]
                            .concat(t)
                            .concat(i)
                    ),
                ];
            },
        },
    };
    const u = (e) => {
            const t = '' + e;
            return 1 === t.length ? '0' + t : t;
        },
        c = (e) => {
            const t = new Date(),
                i = e[0].split('-');
            t.setFullYear(Number(i[0])), t.setMonth(Number(i[1]) - 1), t.setDate(Number(i[2]));
            const s = e[1].split(':');
            return (
                t.setHours(Number(s[0] || '00')),
                t.setMinutes(Number(s[1] || '00')),
                t.setSeconds(0),
                ((e) => {
                    const t = e.getTimezoneOffset(),
                        i = `${u(parseInt(Math.abs(t / 60)))}:${u(Math.abs(t % 60))}`;
                    let s;
                    return (
                        (s = t < 0 ? '+' + i : t > 0 ? '-' + i : 'Z'),
                        `${e.getFullYear()}-${u(e.getMonth() + 1)}-${u(e.getDate())}T${u(e.getHours())}:${u(
                            e.getMinutes()
                        )}:${u(e.getSeconds())}${s}`
                    );
                })(t)
            );
        },
        p = (e) => e + ':00Z';
    var m = {
            data: () => ({ dateProp: { tab: 'tab-date', menu: !1, parts: [null, null], lastValue: null } }),
            methods: {
                renderDateProp(e) {
                    if (
                        'string' !== this.fullSchema.type ||
                        !['date', 'date-time', 'time'].includes(this.fullSchema.format)
                    )
                        return;
                    let t,
                        i = this.fullOptions.icons.calendar;
                    if ('time' === this.fullSchema.format)
                        (t = e('v-time-picker', {
                            props: { value: ((l = this.value), l ? l.slice(0, 5) : ''), ...this.fullSchema['x-props'] },
                            on: { input: (e) => this.input(p(e)), change: (e) => this.change(p(e)) },
                        })),
                            (i = this.fullOptions.icons.clock);
                    else if ('date' === this.fullSchema.format)
                        t = e('v-date-picker', {
                            props: { value: this.value, ...this.fullSchema['x-props'] },
                            on: {
                                input: (e) => {
                                    this.input(e), (this.dateProp.menu = !1);
                                },
                                change: (e) => this.change(e),
                            },
                        });
                    else {
                        this.value !== this.dateProp.lastValue &&
                            (this.dateProp.parts = [
                                `${(s = new Date(this.value)).getFullYear()}-${u(s.getMonth() + 1)}-${u(s.getDate())}`,
                                `${u(s.getHours())}:${u(s.getMinutes())}`,
                            ]),
                            (this.dateProp.lastValue = this.value);
                        const i = () => {
                                if (this.dateProp.parts[1]) {
                                    const e = c(this.dateProp.parts);
                                    this.input(e), this.change(e);
                                }
                            },
                            l = [
                                e('v-tab', { props: { href: '#tab-date' } }, [
                                    e('v-icon', [this.fullOptions.icons.calendar]),
                                ]),
                                e('v-tab', { props: { href: '#tab-time', disabled: !this.dateProp.parts[0] } }, [
                                    e('v-icon', [this.fullOptions.icons.clock]),
                                ]),
                                e('v-tab-item', { props: { value: 'tab-date' } }, [
                                    e('v-date-picker', {
                                        props: {
                                            ...this.fullOptions.datePickerProps,
                                            locale: this.fullOptions.locale,
                                            value: this.dateProp.parts[0],
                                        },
                                        on: {
                                            input: (e) => {
                                                (this.dateProp.parts[0] = e), (this.dateProp.tab = 'tab-time'), i();
                                            },
                                        },
                                    }),
                                ]),
                                e('v-tab-item', { props: { value: 'tab-time' } }, [
                                    e('v-time-picker', {
                                        props: {
                                            ...this.fullOptions.timePickerProps,
                                            locale: this.fullOptions.locale,
                                            value: this.dateProp.parts[1],
                                        },
                                        on: {
                                            input: (e) => {
                                                (this.dateProp.parts[1] = e), i();
                                            },
                                        },
                                    }),
                                ]),
                            ];
                        t = e(
                            'v-tabs',
                            {
                                props: { grow: !0, value: this.dateProp.tab },
                                on: {
                                    input: (e) => {
                                        this.dateProp.tab = e;
                                    },
                                },
                                class: 'vjsf-date-time',
                            },
                            l
                        );
                    }
                    var s, l;
                    const r = {};
                    return (
                        (r.activator = ({ on: t }) =>
                            e(
                                'v-text-field',
                                {
                                    props: {
                                        ...this.commonFieldProps,
                                        value: this.formattedValue,
                                        clearable: !this.required,
                                        readonly: !0,
                                        prependIcon: i,
                                    },
                                    on: { ...t, input: (e) => this.input(e), change: (e) => this.change(e) },
                                },
                                [this.renderTooltip(e, 'append-outer')]
                            )),
                        [
                            e(
                                'v-menu',
                                {
                                    scopedSlots: r,
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
                                        input: (e) => {
                                            (this.dateProp.menu = e), (this.dateProp.tab = 'tab-date');
                                        },
                                    },
                                },
                                [t]
                            ),
                        ]
                    );
                },
            },
        },
        d = {
            computed: {
                isSimpleProp() {
                    return (
                        'string' === this.fullSchema.type ||
                        ['number', 'integer'].includes(this.fullSchema.type) ||
                        'boolean' === this.fullSchema.type ||
                        ('array' === this.fullSchema.type &&
                            ['string', 'number', 'integer'].includes(this.fullSchema.items.type))
                    );
                },
            },
            methods: {
                renderSimpleProp(e) {
                    if (!this.isSimpleProp) return;
                    const t = { ...this.commonFieldProps },
                        i = [],
                        s = {},
                        l = { input: (e) => this.input(e), change: (e) => this.change(e) };
                    if (
                        (['number', 'integer'].includes(this.fullSchema.type) &&
                            (l.input = (e) => {
                                this.input('integer' === this.fullSchema.type ? parseInt(e, 10) : parseFloat(e));
                            }),
                        'boolean' === this.fullSchema.type &&
                            (l.change = (e) => {
                                this.input(e || !1), this.change(e || !1);
                            }),
                        'array' === this.fullSchema.type &&
                            ['string', 'number', 'integer'].includes(this.fullSchema.items.type) &&
                            'string' !== this.fullSchema.items.type &&
                            ((t.type = 'number'),
                            (l.input = (e) => {
                                const t = e
                                    .map((e) =>
                                        'integer' === this.fullSchema.items.type ? parseInt(e, 10) : parseFloat(e)
                                    )
                                    .filter((e) => !isNaN(e));
                                this.input(t);
                            })),
                        this.htmlDescription)
                    ) {
                        let t = 'append-outer';
                        i.push(this.renderTooltip(e, t));
                    }
                    let r = this.fullSchema['x-rules'];
                    return r
                        ? [
                              e('validation-provider', {
                                  props: { name: t.label, rules: r },
                                  scopedSlots: {
                                      default: ({ errors: r }) =>
                                          e(
                                              this.fullSchema.tag,
                                              {
                                                  props: { ...t, required: !0, 'error-messages': r },
                                                  on: l,
                                                  scopedSlots: s,
                                              },
                                              i
                                          ),
                                  },
                              }),
                          ]
                        : [e(this.fullSchema.tag, { props: t, on: l, scopedSlots: s }, i)];
                },
            },
        };
    const f = async (e, t, i) => {
        let s = e;
        if ('string' === t.type || (t.properties.data && 'string' === t.properties.data.type)) {
            const t = await ((e) =>
                new Promise((t) => {
                    const i = new FileReader();
                    (i.onload = () => t(i.result)), i.readAsDataURL(e);
                }))(e);
            s = i ? t : t.split(';base64,')[1];
        }
        return 'string' === t.type
            ? s
            : {
                  name: e.name,
                  lastModified: new Date(e.lastModified).toISOString(),
                  size: e.size,
                  type: e.type,
                  data: s,
              };
    };
    var y = {
            computed: {
                isFileProp() {
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
            created() {
                this.isFileProp && this.fullSchema.writeOnly;
            },
            methods: {
                renderFileProp(e) {
                    if (!this.isFileProp) return;
                    const t = { ...this.commonFieldProps, ...this.fullOptions.fileInputProps };
                    delete t.value;
                    const i = {};
                    this.fullSchema.contentMediaType && (i.accept = this.fullSchema.contentMediaType),
                        this.fullSchema.items &&
                            this.fullSchema.items.contentMediaType &&
                            (i.accept = this.fullSchema.items.contentMediaType),
                        'array' === this.fullSchema.type && (i.multiple = !0);
                    const s = [...this.renderPropSlots(e)],
                        l = {
                            change: async (e) => {
                                if ('array' === this.fullSchema.type) {
                                    const t = await Promise.all(
                                        e.map((e) => f(e, this.fullSchema.items, this.fullOptions.filesAsDataUrl))
                                    );
                                    this.input(t), this.change(t);
                                } else {
                                    const t = await f(e, this.resolvedSchema, this.fullOptions.filesAsDataUrl);
                                    this.input(t), this.change(t);
                                }
                            },
                        };
                    return (
                        this.htmlDescription && s.push(this.renderTooltip(e, 'append-outer')),
                        [e('v-file-input', { props: t, attrs: i, on: l }, s)]
                    );
                },
            },
        },
        S = {
            computed: {
                isColorProp() {
                    return (
                        'string' === this.fullSchema.type &&
                        ('hexcolor' === this.fullSchema.format || 'color-picker' === this.display)
                    );
                },
            },
            methods: {
                renderColorProp(e) {
                    if (!this.isColorProp) return;
                    const t = [this.renderTooltip(e, 'append')];
                    return (
                        t.push(
                            e('v-menu', {
                                props: { closeOnContentClick: !1, closeOneClick: !0, direction: 'bottom', offsetY: !0 },
                                scopedSlots: {
                                    activator: ({ on: t }) =>
                                        e('div', {
                                            on: t,
                                            style: `background-color: ${this.value};margin-left: 10px;`,
                                            class: this.value
                                                ? 'color-picker-trigger'
                                                : 'color-picker-trigger color-picker-trigger-empty',
                                        }),
                                    default: () =>
                                        e('v-color-picker', {
                                            props: {
                                                flat: !0,
                                                ...this.fullOptions.colorPickerProps,
                                                ...this.fullSchema['x-props'],
                                                value: this.value || '',
                                            },
                                            on: {
                                                input: (e) => {
                                                    this.input(e), this.change(e);
                                                },
                                            },
                                        }),
                                },
                            })
                        ),
                        [
                            e(
                                'v-input',
                                {
                                    props: {
                                        name: this.fullKey,
                                        label: this.label,
                                        required: this.required,
                                        rules: this.rules,
                                        disabled: this.disabled,
                                        ...this.fullOptions.fieldProps,
                                    },
                                },
                                t
                            ),
                        ]
                    );
                },
            },
        };
    const g = {
            getSelectItems: (e, t, i, s) => {
                const l = [];
                if (e)
                    if (
                        ('object' === t.type && t.properties && Object.keys(t.properties).length) ||
                        ('array' === t.type &&
                            t.items &&
                            'object' === t.items.type &&
                            t.items.properties &&
                            Object.keys(t.items.properties).length)
                    ) {
                        const i = t.properties ? t.properties.map((e) => e.key) : Object.keys(t.items.properties);
                        e.forEach((e) => {
                            const t = {};
                            i.forEach((i) => {
                                void 0 !== e[i] && (t[i] = e[i]);
                            }),
                                l.push(t);
                        });
                    } else
                        e.forEach((e) => {
                            if ('object' == typeof e) l.push(e);
                            else {
                                const t = { [i]: e };
                                s && (t[s] = e), l.push(t);
                            }
                        });
                else;
                return l;
            },
        },
        b = (e, t, i) => {
            if ([null, void 0].includes(e)) return !1;
            if ([null, void 0].includes(t)) return !1;
            return JSON.stringify(e[i]) === JSON.stringify(t[i]);
        };
    (g.fillSelectItems = (e, t, i, s, l) => {
        if (t)
            if ('array' === e.type)
                t.map((e) => e)
                    .reverse()
                    .forEach((e) => {
                        const t = l ? e : { [s]: e };
                        i.find((e) => b(e, t, s)) || i.push(t);
                    });
            else {
                const e = l ? t : { [s]: t };
                i.find((t) => b(t, e, s)) || i.push(e);
            }
    }),
        (g.fillList = (e, t, i, s) => {
            if (t)
                return i.length
                    ? (i.forEach((e) => {
                          t.find((t) => b(e, t, s)) || t.push(e);
                      }),
                      t.forEach((e, l) => {
                          i.find((t) => b(t, e, s)) || (t[l] = null);
                      }),
                      t.filter((e) => !!e))
                    : [];
        });
    const v = require('match-all'),
        O = require('debounce');
    function x(e, t, i, s, l, r, a, n, o, h) {
        'boolean' != typeof a && ((o = n), (n = a), (a = !1));
        const u = 'function' == typeof i ? i.options : i;
        let c;
        if (
            (e &&
                e.render &&
                ((u.render = e.render),
                (u.staticRenderFns = e.staticRenderFns),
                (u._compiled = !0),
                l && (u.functional = !0)),
            s && (u._scopeId = s),
            r
                ? ((c = function (e) {
                      (e =
                          e ||
                          (this.$vnode && this.$vnode.ssrContext) ||
                          (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                          'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                          (e = __VUE_SSR_CONTEXT__),
                          t && t.call(this, o(e)),
                          e && e._registeredComponents && e._registeredComponents.add(r);
                  }),
                  (u._ssrRegister = c))
                : t &&
                  (c = a
                      ? function (e) {
                            t.call(this, h(e, this.$root.$options.shadowRoot));
                        }
                      : function (e) {
                            t.call(this, n(e));
                        }),
            c)
        )
            if (u.functional) {
                const e = u.render;
                u.render = function (t, i) {
                    return c.call(i), e(t, i);
                };
            } else {
                const e = u.beforeCreate;
                u.beforeCreate = e ? [].concat(e, c) : [c];
            }
        return i;
    }
    const P = x(
        {},
        undefined,
        {
            name: 'HAssemblyRenderder',
            mixins: [
                h,
                d,
                m,
                S,
                {
                    data: () => ({ rawSelectItems: null, selectItems: null, q: '', fromUrlParams: {} }),
                    computed: {
                        isSelectProp() {
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
                        oneOfSelect() {
                            return (
                                !(
                                    'array' !== this.fullSchema.type ||
                                    !['string', 'integer', 'number'].includes(this.fullSchema.items.type) ||
                                    !this.fullSchema.items.oneOf
                                ) ||
                                !(
                                    !['string', 'integer', 'number'].includes(this.fullSchema.type) ||
                                    !this.fullSchema.oneOf
                                )
                            );
                        },
                        fromUrl() {
                            return this.fullSchema['x-fromUrl'];
                        },
                        fromUrlWithQuery() {
                            return !(
                                !this.fullSchema['x-fromUrl'] || -1 === this.fullSchema['x-fromUrl'].indexOf('{q}')
                            );
                        },
                        fromUrlKeys() {
                            return this.fullSchema['x-fromUrl']
                                ? v(this.fullSchema['x-fromUrl'], /\{(.*?)\}/g)
                                      .toArray()
                                      .filter((e) => 'q' !== e)
                                : null;
                        },
                        fromData() {
                            return this.fullSchema['x-fromData'];
                        },
                        itemKey() {
                            return this.fullSchema['x-itemKey'] || 'key';
                        },
                        itemTitle() {
                            return this.fullSchema['x-itemTitle'] || 'title';
                        },
                        itemIcon() {
                            return this.fullSchema['x-itemIcon'] || ('icon' === this.display ? this.itemKey : null);
                        },
                        returnObject() {
                            return (
                                'object' === this.fullSchema.type ||
                                (this.fullSchema.items && 'object' === this.fullSchema.items.type)
                            );
                        },
                    },
                    watch: {
                        q() {
                            (this.value && this.value[this.itemTitle] === this.q) || this.fetchSelectItems();
                        },
                        rawSelectItems: {
                            handler() {
                                this.updateSelectItems();
                            },
                            immediate: !0,
                        },
                    },
                    methods: {
                        initSelectProp(e) {
                            this.fromUrlWithQuery && e && void 0 !== e[this.itemTitle] && (this.q = e[this.itemTitle]),
                                this.fromUrl && this.fetchSelectItems(),
                                (('array' === this.fullSchema.type && this.fullSchema.items.enum) ||
                                    this.fullSchema.enum) &&
                                    (this.rawSelectItems =
                                        'array' === this.fullSchema.type
                                            ? this.fullSchema.items.enum
                                            : this.fullSchema.enum),
                                this.oneOfSelect &&
                                    (this.rawSelectItems = ('array' === this.fullSchema.type
                                        ? this.fullSchema.items
                                        : this.fullSchema
                                    ).oneOf.map((e) => ({
                                        ...e,
                                        [this.itemKey]: e.const || (e.enum && e.enum[0]),
                                        [this.itemTitle]: e.title,
                                    })));
                            const t = this.modelRoot ? 'modelRoot.' : 'value.';
                            this.fullSchema['x-fromData'] &&
                                this.$watch(
                                    t + this.fullSchema['x-fromData'],
                                    (e) => {
                                        this.rawSelectItems = e;
                                    },
                                    { immediate: !0 }
                                ),
                                this.fromUrlKeys &&
                                    this.fromUrlKeys.forEach((e) => {
                                        e.startsWith('context.')
                                            ? this.$watch(
                                                  'options.' + e,
                                                  (t) => {
                                                      (this.fromUrlParams[e] = t), this.fetchSelectItems();
                                                  },
                                                  { immediate: !0 }
                                              )
                                            : this.$watch(
                                                  t + e,
                                                  (t) => {
                                                      (this.fromUrlParams[e] = t), this.fetchSelectItems();
                                                  },
                                                  { immediate: !0 }
                                              );
                                    });
                        },
                        fetchSelectItems() {
                            if (!this.fullOptions.httpLib)
                                return this.$emit('error', 'No http lib found to perform ajax request');
                            (this.debouncedFetch =
                                this.debouncedFetch ||
                                O(() => {
                                    let e = this.fullSchema['x-fromUrl'].replace('{q}', this.q || '');
                                    for (const t of this.fromUrlKeys) {
                                        if (void 0 === this.fromUrlParams[t]) return;
                                        e = e.replace(`{${t}}`, this.fromUrlParams[t]);
                                    }
                                    (this.loading = !0),
                                        this.fullOptions.httpLib
                                            .get(e)
                                            .then((t) => {
                                                const i = t.data || t.body,
                                                    s = this.fullSchema['x-itemsProp']
                                                        ? i[this.fullSchema['x-itemsProp']]
                                                        : i;
                                                if (!Array.isArray(s))
                                                    throw new Error(`Result of http fetch ${e} is not an array`);
                                                (this.rawSelectItems = s), (this.loading = !1);
                                            })
                                            .catch((e) => {
                                                this.$emit('error', e.message), (this.loading = !1);
                                            });
                                }, 250)),
                                this.debouncedFetch();
                        },
                        updateSelectItems() {
                            const e = g.getSelectItems(
                                this.rawSelectItems,
                                this.fullSchema,
                                this.itemKey,
                                this.itemIcon
                            );
                            'list' === this.display &&
                                this.input(g.fillList(this.fullSchema, this.value, e, this.itemKey)),
                                g.fillSelectItems(this.fullSchema, this.value, e, this.itemKey, this.returnObject),
                                JSON.stringify(e) !== JSON.stringify(this.selectItems) && (this.selectItems = e);
                        },
                        renderSelectIcon(e, t) {
                            if (!this.itemIcon) return;
                            const i = t[this.itemIcon];
                            if (!i) return;
                            let s = e('v-icon', null, i);
                            return (
                                i.startsWith('http://') || i.startsWith('https://')
                                    ? (s = e('img', { domProps: { src: i }, style: 'height:100%;width:100%;' }))
                                    : (i.startsWith('<?xml') || i.startsWith('<svg')) &&
                                      (s = e('div', { domProps: { innerHTML: i } })),
                                e('v-avatar', { props: { tile: !0, size: 20 }, class: 'mr-2' }, [s])
                            );
                        },
                        renderSelectItem(e, t) {
                            return e('v-list-item-content', [
                                e('v-list-item-title', t[this.itemTitle] || t[this.itemKey]),
                            ]);
                        },
                        renderSelectionControlItem(e, t) {
                            const i = {
                                    change: (e) => {
                                        this.input(e), this.$emit('change', e);
                                    },
                                },
                                s = {
                                    label: t[this.itemTitle] || t[this.itemKey],
                                    value: t[this.itemKey],
                                    inputValue: this.value,
                                    multiple: 'array' === this.fullSchema.type,
                                    hideDetails: !0,
                                };
                            return e('v-' + this.display, { props: s, on: i, class: 'pb-1' });
                        },
                        renderSelectionControlGroup(e) {
                            const t = {
                                    change: (e) => {
                                        this.input(e), this.change(e);
                                    },
                                },
                                i = {
                                    ...this.commonFieldProps,
                                    multiple: 'array' === this.fullSchema.type,
                                    label: null,
                                },
                                s = e(
                                    'legend',
                                    {
                                        class: `v-label theme--${this.theme.isDark ? 'dark' : 'light'} ${
                                            this.hasError ? 'error--text' : ''
                                        }`,
                                    },
                                    this.commonFieldProps.label
                                ),
                                l = this.selectItems.map((t) => this.renderSelectionControlItem(e, t));
                            return [
                                e(
                                    'v-input',
                                    {
                                        props: i,
                                        on: t,
                                        class:
                                            'v-input--selection-controls v-input--radio-group v-input--radio-group--column',
                                    },
                                    [
                                        e('div', { class: 'v-input--radio-group__input' }, [s, ...l]),
                                        this.renderTooltip(e, 'append'),
                                    ]
                                ),
                            ];
                        },
                        renderRadioItem(e, t) {
                            const i = t[this.itemTitle] || t[this.itemKey],
                                s = t[this.itemKey];
                            return e('v-radio', { props: { ...this.fullOptions.radioItemProps, label: i, value: s } });
                        },
                        renderRadioGroup(e) {
                            const t = { ...this.commonFieldProps, ...this.fullOptions.radioGroupProps };
                            return [
                                e(
                                    'v-radio-group',
                                    {
                                        props: t,
                                        on: {
                                            change: (e) => {
                                                this.input(e), this.change(e);
                                            },
                                        },
                                    },
                                    [
                                        ...this.selectItems.map((t) => this.renderRadioItem(e, t)),
                                        this.renderTooltip(e, 'append'),
                                    ]
                                ),
                            ];
                        },
                        renderSelectProp(e) {
                            if (!this.isSelectProp) return;
                            if ('radio' === this.display && 'array' !== this.fullSchema.type)
                                return this.renderRadioGroup(e);
                            if (['checkbox', 'switch'].includes(this.display))
                                return this.renderSelectionControlGroup(e);
                            const t = { input: (e) => this.input(e), change: (e) => this.change(e) },
                                i = {
                                    selection: (t) => {
                                        let i = t.item[this.itemTitle] || t.item[this.itemKey];
                                        return (
                                            'array' === this.fullSchema.type &&
                                                t.index !== this.value.length - 1 &&
                                                (i += ',&nbsp;'),
                                            e(
                                                'div',
                                                {
                                                    class: {
                                                        'v-select__selection': !0,
                                                        'v-select__selection--comma': !0,
                                                        'v-select__selection--disabled': this.disabled,
                                                    },
                                                },
                                                [
                                                    this.renderSelectIcon(e, t.item),
                                                    e('span', { domProps: { innerHTML: i }, class: 'mt-1' }),
                                                ]
                                            )
                                        );
                                    },
                                    item: (t) => [this.renderSelectIcon(e, t.item), this.renderSelectItem(e, t.item)],
                                },
                                s = [...this.renderPropSlots(e)];
                            this.htmlDescription && s.push(this.renderTooltip(e, 'append-outer'));
                            let l = 'v-select';
                            const r = {
                                ...this.commonFieldProps,
                                ...this.fullOptions.selectProps,
                                clearable: !this.required,
                                multiple: 'array' === this.fullSchema.type,
                                itemValue: this.itemKey,
                                items: this.selectItems,
                                returnObject: this.returnObject,
                            };
                            return (
                                (this.fromUrlWithQuery || (this.rawSelectItems && this.rawSelectItems.length > 20)) &&
                                    ((l = 'v-autocomplete'),
                                    (r.noDataText = this.fullOptions.messages.noData),
                                    (r.placeholder = this.fullOptions.messages.search),
                                    this.fromUrlWithQuery
                                        ? ((r.filter = () => !0),
                                          (r.searchInput = this.q),
                                          (t['update:search-input'] = (e) => {
                                              this.q = e;
                                          }))
                                        : (r.filter = (e, t) =>
                                              (e[this.itemTitle] || e[this.itemKey])
                                                  .toLowerCase()
                                                  .includes(t.toLowerCase()))),
                                (l = this.customTag ? this.customTag : l),
                                [e(l, { props: r, on: t, scopedSlots: i }, s)]
                            );
                        },
                    },
                },
                y,
                {
                    data: () => ({ editabledArrayProp: { currentDialog: null, editItem: null, editedItems: {} } }),
                    computed: {
                        isEditableArray() {
                            if (
                                'array' === this.fullSchema.type &&
                                this.fullSchema.items &&
                                'object' === this.fullSchema.items.type
                            )
                                return !0;
                        },
                        readonlyItemSchema() {
                            if (!this.fullSchema.items) return;
                            const e = JSON.parse(JSON.stringify(this.fullSchema.items));
                            return (
                                (e.readOnly = !0),
                                this.itemTitle &&
                                    (e.properties &&
                                        e.properties[this.itemTitle] &&
                                        (e.properties[this.itemTitle]['x-display'] = 'hidden'),
                                    e.oneOf &&
                                        e.oneOf.forEach((e) => {
                                            e.properties[this.itemTitle] &&
                                                (e.properties[this.itemTitle]['x-display'] = 'hidden');
                                        }),
                                    this.fullSchema.items.allOf &&
                                        e.allOf.forEach((e) => {
                                            e.properties[this.itemTitle] &&
                                                (e.properties[this.itemTitle]['x-display'] = 'hidden');
                                        })),
                                e
                            );
                        },
                    },
                    watch: {},
                    methods: {
                        renderArrayItemModal(e, t, i) {
                            const s = -1 === i;
                            let l;
                            this.editabledArrayProp.currentDialog === i &&
                                (this.fullOptions.idPrefix.endsWith('--dialog--') ||
                                    (this.fullOptions.idPrefix = this.fullOptions.idPrefix + '--dialog--'),
                                (l = e(
                                    'v-jsf',
                                    {
                                        props: {
                                            schema: this.fullSchema.items,
                                            value: this.editabledArrayProp.editItem,
                                            modelRoot: this.modelRoot || this.value,
                                            modelKey: i,
                                            parentKey: this.fullKey + '.',
                                            options: this.fullOptions,
                                            sectionDepth: this.sectionDepth + 1,
                                            separateValidation: !0,
                                        },
                                        scopedSlots: this.childScopedSlots(this.fullSchema.key),
                                        on: {
                                            error: (e) => this.$emit('error', e),
                                            input: (e) => {
                                                this.editabledArrayProp.editItem = e;
                                            },
                                        },
                                    },
                                    this.childSlots(e, this.fullSchema.key)
                                )));
                            const r = {
                                    activator: () =>
                                        e(
                                            'v-btn',
                                            {
                                                on: {
                                                    click: () => {
                                                        (this.editabledArrayProp.editItem = JSON.parse(
                                                            JSON.stringify(t)
                                                        )),
                                                            (this.editabledArrayProp.currentDialog = i);
                                                    },
                                                },
                                                attrs: {
                                                    id:
                                                        this.fullOptions.idPrefix +
                                                        this.dashKey +
                                                        '-' +
                                                        (s ? '-add' : i + '--edit') +
                                                        '-button',
                                                },
                                                class: { 'vjsf-array-add-button': !0, 'ml-3': s },
                                                props: { icon: !s, fab: s, small: s, color: 'primary' },
                                            },
                                            [e('v-icon', s ? this.fullOptions.icons.add : this.fullOptions.icons.edit)]
                                        ),
                                },
                                a = () => {
                                    l.componentInstance.resetValidation(),
                                        (this.editabledArrayProp.currentDialog = null);
                                };
                            return e(
                                'v-dialog',
                                {
                                    props: {
                                        ...this.fullOptions.dialogProps,
                                        value: this.editabledArrayProp.currentDialog === i,
                                        closeOnContentClick: !1,
                                    },
                                    scopedSlots: r,
                                    on: { 'click:outside': a },
                                },
                                [
                                    e('v-card', { props: this.fullOptions.dialogCardProps }, [
                                        e('v-card-title', this.itemTitle && t[this.itemTitle]),
                                        e('v-card-text', [l]),
                                        e('v-card-actions', [
                                            e('v-spacer'),
                                            e(
                                                'v-btn',
                                                {
                                                    props: { text: !0 },
                                                    on: { click: a },
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
                                                        click: () => {
                                                            l.componentInstance.validate(!0) &&
                                                                (s
                                                                    ? ((this.editabledArrayProp.editedItems[
                                                                          this.value.length
                                                                      ] = !0),
                                                                      this.value.push(this.editabledArrayProp.editItem))
                                                                    : ((this.editabledArrayProp.editedItems[i] = !0),
                                                                      this.$set(
                                                                          this.value,
                                                                          i,
                                                                          this.editabledArrayProp.editItem
                                                                      ),
                                                                      this.$nextTick(() =>
                                                                          this.$refs['roItem-' + i].initFromSchema()
                                                                      )),
                                                                this.input(this.value),
                                                                this.$emit('change', this.value),
                                                                (this.shouldValidate = !0),
                                                                (this.editabledArrayProp.currentDialog = null));
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
                        renderArrayItemRO(e, t, i) {
                            return e('v-jsf', {
                                props: {
                                    schema: this.readonlyItemSchema,
                                    value: JSON.parse(JSON.stringify(t)),
                                    modelRoot: this.modelRoot || this.value,
                                    modelKey: i,
                                    parentKey: this.fullKey + '.',
                                    options: {
                                        ...this.fullOptions,
                                        hideReadOnly: !1,
                                        fieldProps: { ...this.fullOptions.fieldProps, dense: !0 },
                                    },
                                    sectionDepth: this.sectionDepth + 1,
                                    separateValidation: !0,
                                },
                                ref: 'roItem-' + i,
                                on: {
                                    input: (e) => {
                                        this.editabledArrayProp.editedItems[i] || this.$set(this.value, i, e);
                                    },
                                },
                            });
                        },
                        renderEditableArray(e) {
                            if (!this.isEditableArray) return;
                            const t = [];
                            this.disabled ||
                                this.fromUrl ||
                                this.fullSchema.fromData ||
                                t.push(
                                    this.renderArrayItemModal(
                                        e,
                                        this.fullSchema.items.default || this.defaultValue(this.fullSchema.items),
                                        -1
                                    )
                                );
                            const i = e(
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
                                t
                            );
                            let s;
                            if (this.value && this.value.length) {
                                const t = this.value
                                    .filter((e) => !!e)
                                    .map((t, s) =>
                                        e('v-col', { props: this.fullOptions.arrayItemColProps }, [
                                            e('v-card', { props: this.fullOptions.arrayItemCardProps }, [
                                                e(
                                                    'v-card-title',
                                                    { props: { primaryTitle: !0 } },
                                                    this.itemTitle && t[this.itemTitle]
                                                ),
                                                e('v-card-text', { class: 'pb-0' }, [this.renderArrayItemRO(e, t, s)]),
                                                e('v-card-actions', [
                                                    e('v-spacer'),
                                                    !this.disabled && this.renderArrayItemModal(e, t, s),
                                                    !this.disabled &&
                                                        !this.fromUrl &&
                                                        !this.fullSchema.fromData &&
                                                        e(
                                                            'v-btn',
                                                            {
                                                                props: { icon: !0, color: 'warning' },
                                                                attrs: {
                                                                    id:
                                                                        this.fullOptions.idPrefix +
                                                                        this.dashKey +
                                                                        '-' +
                                                                        s +
                                                                        '--delete-button',
                                                                },
                                                                class: { 'vjsf-array-delete-button': !0 },
                                                                on: {
                                                                    click: () => {
                                                                        const e = this.value.filter((e) => e !== t);
                                                                        this.input(e),
                                                                            this.$emit('change', e),
                                                                            (this.shouldValidate = !0),
                                                                            i.componentInstance.validate();
                                                                    },
                                                                },
                                                            },
                                                            [e('v-icon', this.fullOptions.icons.delete)]
                                                        ),
                                                ]),
                                            ]),
                                        ])
                                    );
                                s = e(
                                    'v-row',
                                    {
                                        props: { gridListMd: !0 },
                                        class: 'pt-0 px-2 ' + this.fullOptions.objectContainerClass,
                                    },
                                    this.fullOptions.disableSorting
                                        ? t
                                        : [
                                              e(
                                                  'draggable',
                                                  {
                                                      props: { value: this.value },
                                                      class: 'row',
                                                      style: 'cursor: move;',
                                                      on: {
                                                          input: (e) => {
                                                              this.input(e),
                                                                  this.$emit('change', e),
                                                                  (this.shouldValidate = !0),
                                                                  this.$nextTick(() => {
                                                                      for (let t = 0; t < e.length; t++)
                                                                          this.$refs['roItem-' + t].initFromSchema();
                                                                  });
                                                          },
                                                      },
                                                  },
                                                  t
                                              ),
                                          ]
                                );
                            }
                            return [i, s];
                        },
                    },
                },
                {
                    data: () => ({ tooltip: { show: !1, maxWidth: 200 } }),
                    mounted() {
                        this.htmlDescription &&
                            this.$el &&
                            this.$el.getBoundingClientRect &&
                            (this.tooltip.maxWidth = this.$el.getBoundingClientRect().left - 80);
                    },
                    methods: {
                        renderTooltip(e, t) {
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
                                            activator: () =>
                                                e(
                                                    'v-btn',
                                                    {
                                                        on: {
                                                            click: () => {
                                                                this.tooltip.show = !this.tooltip.show;
                                                            },
                                                        },
                                                        props: { icon: !0 },
                                                        style: 'pointer-events: auto',
                                                    },
                                                    [e('v-icon', {}, this.fullOptions.icons.info)]
                                                ),
                                        },
                                    },
                                    [
                                        e('div', {
                                            style: `max-width: ${this.tooltip.maxWidth}px`,
                                            domProps: { innerHTML: this.htmlDescription },
                                        }),
                                    ]
                                );
                        },
                    },
                },
                {
                    inject: ['form'],
                    provide() {
                        return { form: { register: this.register, unregister: this.unregister } };
                    },
                    props: { separateValidation: { type: Boolean, default: !1 } },
                    data: () => ({ inputs: [], validated: !1, shouldValidate: !1 }),
                    computed: {
                        childrenInputs() {
                            return this.inputs.reduce((e, t, i) => ((e[t.modelKey || i] = t), e), {});
                        },
                        hasError() {
                            return !!this.inputs.find((e) => e.hasError) || !!this.containerError;
                        },
                        hasValidatedChildError() {
                            return !!this.inputs.find(
                                (e) => e.hasValidatedChildError || (e.hasError && (e.validated || e.shouldValidate))
                            );
                        },
                    },
                    created() {
                        this.separateValidation || (this.form && this.form.register(this));
                    },
                    mounted() {
                        const e = this.fullOptions.initialValidation;
                        'all' !== e || this.modelRoot || this.validate(!0),
                            'defined' === e && this.initiallyDefined && !this.isObjectContainer && this.validate(!0);
                    },
                    beforeDestroy() {
                        this.separateValidation || (this.form && this.form.unregister(this));
                    },
                    methods: {
                        register(e) {
                            this.inputs.push(e);
                        },
                        unregister(e) {
                            this.inputs = this.inputs.filter((t) => t._uid !== e._uid);
                        },
                        validate(e) {
                            return (this.validated = !0), 0 === this.inputs.filter((t) => !t.validate(e)).length;
                        },
                        reset() {
                            this.inputs.forEach((e) => e.reset());
                        },
                        resetValidation() {
                            (this.shouldValidate = !1),
                                (this.validated = !1),
                                this.inputs.forEach((e) => e.resetValidation());
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
            data: () => ({ ready: !1, loading: !1 }),
            computed: {
                fullOptions() {
                    const e =
                            ('undefined' != typeof window && window) || ('undefined' != typeof global && global) || {},
                        t = Object.assign({}, r, this.options || {}, this.resolvedSchema['x-options'] || {});
                    (t.markdown =
                        t.markdown || (e.markdownit && ((i) => e.markdownit(t.markdownit).render(i))) || ((e) => e)),
                        (t.httpLib = t.httpLib || this.axios || this.$http || this.$axios || e.axios);
                    const i = (this.$vuetify.icons && this.$vuetify.icons.iconfont) || 'mdi';
                    return (
                        (t.icons = { ...o[i], ...t.icons }),
                        (t.messages = { ...(a[t.locale] || a.en), ...t.messages }),
                        (t.formats = { ...n, ...t.formats }),
                        t.deleteReadOnly && (t.hideReadOnly = !0),
                        t
                    );
                },
                resolvedSchema() {
                    return 'root' === this.modelKey
                        ? i.resolve(this.schema, { '~$locale~': (this.options && this.options.locale) || 'en' })
                        : this.schema;
                },
                fullSchema() {
                    return s.prepareFullSchema(this.resolvedSchema, this.value);
                },
                htmlDescription() {
                    return this.fullSchema && this.fullSchema.description
                        ? this.fullOptions.markdown(this.fullSchema.description)
                        : null;
                },
                fullKey() {
                    return (this.parentKey + this.modelKey).replace('root.', '');
                },
                label() {
                    return this.fullSchema.title || ('string' == typeof this.modelKey ? this.modelKey : '');
                },
                display() {
                    return 'root' === this.modelKey && this.fullOptions.rootDisplay
                        ? this.fullOptions.rootDisplay
                        : this.fullSchema['x-display'];
                },
                customTag() {
                    return this.fullSchema['x-tag'];
                },
                rules() {
                    return ((e, t, i, s) => {
                        const l = [];
                        if (
                            (i && l.push((e) => (null != e && '' !== e) || t.messages.required),
                            'array' === e.type && void 0 !== e.minItems)
                        ) {
                            const i = t.messages.minItems.replace('{minItems}', e.minItems.toLocaleString(t.locale));
                            l.push((t) => !t || t.length >= e.minItems || i);
                        }
                        if ('array' === e.type && void 0 !== e.maxItems) {
                            const i = t.messages.maxItems.replace('{maxItems}', e.maxItems.toLocaleString(t.locale));
                            l.push((t) => !t || t.length <= e.maxItems || i);
                        }
                        if ('string' === e.type && void 0 !== e.minLength) {
                            const i = t.messages.minLength.replace('{minLength}', e.minLength.toLocaleString(t.locale));
                            l.push((t) => null == t || t.length >= e.minLength || i);
                        }
                        if ('string' === e.type && void 0 !== e.maxLength) {
                            const i = t.messages.maxLength.replace('{maxLength}', e.maxLength.toLocaleString(t.locale));
                            l.push((t) => null == t || t.length <= e.maxLength || i);
                        }
                        if ('string' === e.type && void 0 !== e.patternRegexp) {
                            const i = t.messages.pattern.replace('{pattern}', e.pattern);
                            l.push((t) => null == t || !!t.match(e.patternRegexp) || i);
                        }
                        if (['number', 'integer'].includes(e.type) && void 0 !== e.maximum) {
                            const i = t.messages.maximum.replace('{maximum}', e.maximum.toLocaleString(t.locale));
                            l.push((t) => null == t || t <= e.maximum || i);
                        }
                        if (['number', 'integer'].includes(e.type) && void 0 !== e.minimum) {
                            const i = t.messages.minimum.replace('{minimum}', e.minimum.toLocaleString(t.locale));
                            l.push((t) => null == t || t >= e.minimum || i);
                        }
                        e.enum &&
                            l.push(
                                (t) => null == t || !!e.enum.find((e) => JSON.stringify(e) === JSON.stringify(t)) || ''
                            ),
                            'array' === e.type &&
                                e.items.enum &&
                                l.push(
                                    (t) =>
                                        null == t ||
                                        !t.find(
                                            (t) => !e.items.enum.find((e) => JSON.stringify(e) === JSON.stringify(t))
                                        ) ||
                                        ''
                                ),
                            s &&
                                'array' !== e.type &&
                                l.push((t) => null == t || !!e.oneOf.find((e) => e.const === t) || ''),
                            s &&
                                'array' === e.type &&
                                l.push(
                                    (t) => null == t || !t.find((t) => !e.items.oneOf.find((e) => e.const === t)) || ''
                                );
                        const r = (e['x-ruless'] || []).map((e) =>
                            'string' == typeof e ? t.rules && t.rules[e] : 'function' == typeof e ? e : void 0
                        );
                        return l.concat(r);
                    })(this.fullSchema, this.fullOptions, this.required, this.isOneOfSelect);
                },
                disabled() {
                    return this.fullOptions.disableAll || this.fullSchema.readOnly;
                },
                slotName() {
                    return this.fullSchema['x-display'] && this.fullSchema['x-display'].startsWith('custom-')
                        ? this.fullSchema['x-display']
                        : this.fullKey;
                },
                slotParams() {
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
                            input: (e) => this.input(e instanceof Event ? e.target.value : e),
                            change: (e) => this.change(e),
                        },
                    };
                },
                dashKey() {
                    return this.fullKey.replace(/\./g, '-');
                },
                commonFieldProps() {
                    return {
                        value: this.value,
                        inputValue: this.value,
                        label: this.label,
                        name: this.fullKey,
                        id: this.fullOptions.idPrefix + this.dashKey,
                        disabled: this.disabled,
                        rules: this.rules,
                        required: this.required,
                        ...this.fullOptions.fieldProps,
                        ...this.fullSchema['x-props'],
                    };
                },
                propertyClass() {
                    return `vjsf-property vjsf-property-${this.dashKey} pa-0 ${this.fullSchema['x-class'] || ''}`;
                },
                xSlots() {
                    return { ...this.fullSchema['x-slots'] };
                },
                formattedValue() {
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
                    handler() {
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
            render(e) {
                if (
                    !this.fullSchema ||
                    void 0 !== this.fullSchema.const ||
                    'hidden' === this.display ||
                    (this.fullSchema.readOnly && this.fullOptions.hideReadOnly)
                )
                    return;
                const t = [];
                if (
                    (this.$scopedSlots.before
                        ? t.push(this.$scopedSlots.before(this.slotParams))
                        : this.$slots.before
                        ? this.$slots.before.forEach((e) => t.push(e))
                        : this.xSlots.before &&
                          t.push(e('div', { domProps: { innerHTML: this.fullOptions.markdown(this.xSlots.before) } })),
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
                    ).forEach((e) => t.push(e));
                }
                this.$scopedSlots.after
                    ? t.push(this.$scopedSlots.after(this.slotParams))
                    : this.$slots.after
                    ? this.$slots.after.forEach((e) => t.push(e))
                    : this.xSlots.after &&
                      t.push(e('div', { domProps: { innerHTML: this.fullOptions.markdown(this.xSlots.after) } }));
                const i = { ...this.fullOptions.fieldColProps };
                return (
                    this.fullSchema['x-cols'] && (i.cols = this.fullSchema['x-cols']),
                    e('v-col', { props: i, class: this.propertyClass, style: this.fullSchema['x-style'] || '' }, t)
                );
            },
            methods: {
                renderPropSlots(e) {
                    const t = [];
                    return (
                        Object.keys(this.xSlots).forEach((i) => {
                            t.push(
                                e('div', {
                                    slot: i,
                                    domProps: { innerHTML: this.fullOptions.markdown(this.xSlots[i]) },
                                })
                            );
                        }),
                        Object.keys(this.$slots).forEach((i) => {
                            t.push(e('template', { slot: i }, this.$slots[i]));
                        }),
                        t
                    );
                },
                change() {
                    this.$emit('change', this.value);
                },
                input(e) {
                    null == e || '' === e ? this.$emit('input', void 0) : this.$emit('input', e);
                },
                defaultValue: (e) =>
                    'object' !== e.type || e['x-fromUrl'] || e['x-fromData'] || e.enum
                        ? 'array' === e.type
                            ? []
                            : 'v-range-slider' === e.tag
                            ? [0, 10]
                            : null
                        : {},
                fixProperties() {
                    if ('object' !== this.fullSchema.type) return;
                    !(
                        (this.fullSchema.properties && this.fullSchema.properties.length) ||
                        (Object.keys(this.subModels).length &&
                            !this.fullSchema['x-fromData'] &&
                            !this.fullSchema['x-fromUrl'])
                    ) ||
                        ((this.fullOptions.removeAdditionalProperties || !1 === this.fullSchema.additionalProperties) &&
                            this.value &&
                            Object.keys(this.value).forEach((e) => {
                                (this.fullSchema.properties || []).find((t) => t.key === e) ||
                                    this.$delete(this.value, e);
                            }),
                        Object.keys(this.subModels).forEach((e) => {
                            Object.keys(this.subModels[e]).forEach((t) => {
                                this.value[t] !== this.subModels[e][t] &&
                                    this.$set(this.value, t, this.subModels[e][t]);
                            });
                        }));
                },
                initFromSchema() {
                    if (
                        ((this.initiallyDefined = void 0 !== this.value && null !== this.value),
                        'array' === this.fullSchema.type &&
                            (this.initiallyDefined = !(!this.value || !this.value.length)),
                        'object' === this.fullSchema.type &&
                            (this.initiallyDefined = !(!this.value || !Object.keys(this.value).length)),
                        this.fullSchema.readOnly && this.fullOptions.deleteReadOnly)
                    )
                        return this.input(void 0);
                    let e = this.value;
                    'object' === this.fullSchema.type && [void 0, null].includes(e) && !this.isSelectProp && (e = {}),
                        void 0 !== this.fullSchema.const && (e = this.fullSchema.const),
                        this.initSelectProp(e),
                        this.initObjectContainer(e),
                        'array' === this.fullSchema.type && (e = e.filter((e) => ![void 0, null].includes(e))),
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
    );
    const I = x(
        {},
        undefined,
        {
            name: 'HFormRenderer',
            components: {
                VAvatar: e.VAvatar,
                VAutocomplete: e.VAutocomplete,
                VBtn: e.VBtn,
                VCard: e.VCard,
                VCardActions: e.VCardActions,
                VCardText: e.VCardText,
                VCardTitle: e.VCardTitle,
                VCheckbox: e.VCheckbox,
                VChip: e.VChip,
                VColorPicker: e.VColorPicker,
                VCombobox: e.VCombobox,
                VContainer: e.VContainer,
                VDatePicker: e.VDatePicker,
                VDialog: e.VDialog,
                VExpansionPanels: e.VExpansionPanels,
                VExpansionPanel: e.VExpansionPanel,
                VExpansionPanelHeader: e.VExpansionPanelHeader,
                VExpansionPanelContent: e.VExpansionPanelContent,
                VCol: e.VCol,
                VFileInput: e.VFileInput,
                VIcon: e.VIcon,
                VInput: e.VInput,
                VRow: e.VRow,
                VListItemContent: e.VListItemContent,
                VListItemTitle: e.VListItemTitle,
                VMenu: e.VMenu,
                VRadio: e.VRadio,
                VRadioGroup: e.VRadioGroup,
                VRangeSlider: e.VRangeSlider,
                VSelect: e.VSelect,
                VSlider: e.VSlider,
                VSpacer: e.VSpacer,
                VSubheader: e.VSubheader,
                VSwitch: e.VSwitch,
                VTabs: e.VTabs,
                VTab: e.VTab,
                VTabItem: e.VTabItem,
                VTextarea: e.VTextarea,
                VTextField: e.VTextField,
                VTimePicker: e.VTimePicker,
                VTooltip: e.VTooltip,
            },
            mixins: [P],
        },
        undefined,
        undefined,
        undefined,
        !1,
        void 0,
        void 0,
        void 0
    );
    (I.install = function (e) {
        e.component(I.name, I);
    }),
        null != typeof window && window.Vue && I.install(window.Vue);
});
