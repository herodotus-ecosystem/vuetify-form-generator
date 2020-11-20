import 'core-js/modules/es.function.name';
import o from '@babel/runtime-corejs3/helpers/esm/typeof';
import 'vuetify/lib';
import { codemirror as r } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/dockerfile/dockerfile.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/http/http.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/jsx/jsx.js';
import 'codemirror/mode/markdown/markdown.js';
import 'codemirror/mode/powershell/powershell.js';
import 'codemirror/mode/properties/properties.js';
import 'codemirror/mode/python/python.js';
import 'codemirror/mode/sass/sass.js';
import 'codemirror/mode/shell/shell.js';
import 'codemirror/mode/sql/sql.js';
import 'codemirror/mode/vue/vue.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/yaml/yaml.js';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/css-hint.js';
import 'codemirror/addon/hint/html-hint.js';
import 'codemirror/addon/hint/javascript-hint.js';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/addon/hint/xml-hint.js';
import 'codemirror/addon/hint/anyword-hint.js';
import 'script-loader!jsonlint';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/lint/lint.js';
import 'codemirror/addon/lint/json-lint.js';
import 'codemirror/addon/lint/css-lint.js';
import 'codemirror/addon/lint/html-lint.js';
import 'codemirror/addon/lint/javascript-lint.js';
import 'codemirror/addon/lint/yaml-lint.js';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/xml-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/fold/markdown-fold.js';
import 'codemirror/addon/fold/indent-fold.js';
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/edit/closetag.js';
import 'codemirror/addon/edit/continuelist.js';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/edit/matchtags.js';
import 'codemirror/addon/search/match-highlighter.js';
import 'codemirror/addon/search/jump-to-line.js';
import 'codemirror/addon/search/matchesonscrollbar.css';
import 'codemirror/addon/search/matchesonscrollbar.js';
import 'codemirror/addon/search/search.js';
import 'codemirror/addon/search/searchcursor.js';
import 'codemirror/addon/dialog/dialog.js';
import 'codemirror/addon/dialog/dialog.css';
import 'codemirror/addon/selection/active-line.js';
import 'codemirror/addon/selection/mark-selection.js';
import 'codemirror/addon/display/autorefresh.js';
import e from 'vue-runtime-helpers/dist/normalize-component.mjs';
import { JSHINT as i } from 'jshint';
import t from 'csslint';
import { parser as d } from 'jsonlint';
var n = e(
    {
        render: function () {
            var o = this,
                r = o.$createElement;
            return (o._self._c || r)('codemirror', {
                ref: 'editor',
                attrs: { options: o.options },
                on: { ready: o.onReady },
                model: {
                    value: o.sourceCode,
                    callback: function (r) {
                        o.sourceCode = r;
                    },
                    expression: 'sourceCode',
                },
            });
        },
        staticRenderFns: [],
    },
    undefined,
    {
        name: 'HCodeMirror',
        components: { codemirror: r },
        props: {
            value: { type: String, default: '', required: !0 },
            theme: { type: String, default: 'default' },
            mode: { type: String, default: 'default' },
            readOnly: { type: Boolean, default: !1 },
        },
        data: function () {
            return { sourceCode: '' };
        },
        computed: {
            currentMode: function () {
                return this.mode && 'default' != this.mode ? this.mode : 'application/json';
            },
            currentTheme: function () {
                var o = this.theme && 'default' != this.theme ? this.theme : 'material-darker';
                return require('codemirror/theme/' + o + '.css'), o;
            },
            options: function () {
                return {
                    mode: this.currentMode,
                    theme: this.currentTheme,
                    indentUnit: 4,
                    smartIndent: !1,
                    tabSize: 4,
                    indentWithTabs: !0,
                    extraKeys: { Ctrl: 'autocomplete' },
                    lineWrapping: !0,
                    lineNumbers: !0,
                    gutters: ['CodeMirror-lint-markers', 'CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
                    readOnly: this.readOnly,
                    showCursorWhenSelecting: !0,
                    autofocus: !0,
                    dragDrop: !0,
                    spellcheck: !0,
                    autocorrect: !0,
                    matchBrackets: !0,
                    autoCloseBrackets: !0,
                    matchTags: { bothTags: !0 },
                    autoCloseTags: !0,
                    foldGutter: !0,
                    highlightSelectionMatches: { minChars: 2, style: 'matchhighlight', trim: !0, showToken: !1 },
                    lint: !0,
                    styleSelectedText: !0,
                    styleActiveLine: !0,
                    hintOptions: { completeSingle: !1 },
                };
            },
            currentCodeMirror: function () {
                return this.$refs.editor.codemirror;
            },
        },
        created: function () {},
        watch: {
            value: {
                handler: function (o, r) {
                    this.sourceCode = o;
                },
                immediate: !0,
            },
            sourceCode: {
                handler: function (o, r) {
                    this.$emit('input', o);
                },
            },
            mode: {
                handler: function (o, r) {
                    this.resetLint();
                },
            },
        },
        methods: {
            resetLint: function () {
                var o = this;
                this.$refs.editor.codemirror.setOption('lint', !1),
                    this.$nextTick(function () {
                        o.$refs.editor.codemirror.setOption('lint', !0);
                    });
            },
            onReady: function (o) {
                o.on('keypress', function () {
                    o.showHint({ completeSingle: !1 });
                });
            },
        },
    },
    undefined,
    false,
    undefined,
    !1,
    void 0,
    void 0,
    void 0
);
(window.JSHINT = i),
    (window.CSSLint = t),
    (window.jsonlint = d),
    (n.install = function (o) {
        o.component(n.name, n);
    }),
    null != ('undefined' == typeof window ? 'undefined' : o(window)) && window.Vue && n.install(window.Vue);
export { n as HCodeMirror };
