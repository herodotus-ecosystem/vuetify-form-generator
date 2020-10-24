<template>
    <codemirror
        ref="editor"
        :value="editorValue"
        :options="cmOptions"
        @changes="onCmCodeChanges"
        @blur="onCmBlur"
        @keydown.native="onKeyDown"
        @mousedown.native="onMouseDown"
        @paste.native="OnPaste"
    ></codemirror>
</template>
<script>
// 引入全局实例
import { codemirror } from 'vue-codemirror';
// 核心样式
import 'codemirror/lib/codemirror.css';
// 引入主题后还需要在 options 中指定主题才会生效
import 'codemirror/theme/material-darker.css';

// 需要引入具体的语法高亮库才会有对应的语法高亮效果
// codemirror 官方其实支持通过 /addon/mode/loadmode.js 和 /mode/meta.js 来实现动态加载对应语法高亮库
// 但 vue 貌似没有无法在实例初始化后再动态加载对应 JS ，所以此处才把对应的 JS 提前引入
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/dockerfile/dockerfile.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/http/http.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/markdown/markdown.js';
import 'codemirror/mode/python/python.js';
import 'codemirror/mode/sass/sass.js';
import 'codemirror/mode/sql/sql.js';
import 'codemirror/mode/vue/vue.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/yaml/yaml.js';

//代码补全提示
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/css-hint.js';
import 'codemirror/addon/hint/html-hint.js';
import 'codemirror/addon/hint/javascript-hint.js';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/addon/hint/xml-hint.js';
import 'codemirror/addon/hint/anyword-hint.js';

import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/lint/lint.js';
import 'codemirror/addon/lint/json-lint.js';
import 'script-loader!jsonlint';
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
import 'codemirror/addon/edit/matchtags.js';
import 'codemirror/addon/edit/matchbrackets.js';

import 'codemirror/addon/search/matchesonscrollbar.css';
import 'codemirror/addon/search/matchesonscrollbar.js';
import 'codemirror/addon/search/match-highlighter.js';
import 'codemirror/addon/search/jump-to-line.js';
import 'codemirror/addon/search/searchcursor.js';
import 'codemirror/addon/search/search.js';

import 'codemirror/addon/selection/active-line.js';
import 'codemirror/addon/selection/mark-selection.js';

import 'codemirror/addon/dialog/dialog.js';
import 'codemirror/addon/dialog/dialog.css';

import 'codemirror/addon/display/autorefresh.js';

export default {
    name: 'HCodeMirror',

    components: {
        codemirror
    },

    props: {
        editorTheme: {
            type: String,
            default: 'default'
        },
        editorMode: {
            type: String,
            default: 'default'
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        jsonIndentation: {
            type: String,
            default: '\t'
        },
        source: {
            type: String,
            default: ''
        },
        language: {
            type: String,
            default: 'application/json'
        }
    },

    data: () => ({
        editorValue: '',
        cmOptions: {
            mode: !this.editorMode || this.editorMode == 'default' ? 'application/json' : this.editorMode,
            // 主题 material
            theme: !this.editorTheme || this.editorTheme == 'default' ? 'material-darker' : this.editorTheme,
            indentUnit: 4,
            smartIndent: false,
            tabSize: 4,
            // 可以用于为编辑器指定额外的键绑定，以及keyMap定义的键绑定
            extraKeys: {
                Tab: 'autocomplete',
                'Ctrl-Alt-L': () => {
                    this.setValue(this.editorValue);
                }
            },
            // 是否折行
            lineWrapping: true,
            // 显示行号
            lineNumbers: true,
            // tab
            gutters: ['CodeMirror-lint-markers', 'CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
            autofocus: true,
            spellcheck: true,
            autocorrect: true,

            styleActiveLine: true, // 高亮选中行
            styleSelectedText: true,
            foldGutter: true, // 块槽
            lint: true,
            autoCloseBrackets: true,
            autoCloseTags: true,
            matchTags: { bothTags: true },
            matchBrackets: true,
            autoRefresh: true,
            // 可以启用该选项来突出显示当前选中的内容的所有实例
            highlightSelectionMatches: {
                minChars: 2,
                style: 'matchhighlight',
                showToken: true
            },
            // hint.js options
            hintOptions: {
                // 当匹配只有一项的时候是否自动补全
                completeSingle: false
            },
            showCursorWhenSelecting: false,
            //是否只读
            readOnly: this.readOnly
        }
    }),

    created() {
        this.initEditor();
    },

    methods: {
        initEditor() {
            if (!this.editorValue) {
                this.cmOptions.lint = false;
                return;
            }
            this.setValue(this.editorValue);
        },
        // 格式化字符串为json格式字符串
        formatJson(value) {
            return JSON.stringify(JSON.parse(value), null, this.jsonIndentation);
        },
        resetOption(name) {
            this.$refs.editor.codemirror.setOption(name, false);
            this.$nextTick(() => {
                this.$refs.editor.codemirror.setOption(name, true);
            });
        },
        // 获取值
        getValue() {
            return this.$refs.editor.codemirror.getValue();
        },
        // 修改值
        setValue(value) {
            if (this.cmOptions.mode == 'application/json') {
                this.editorValue = this.formatJson(value);
            } else {
                this.editorValue = value;
            }
        },
        resetLint() {
            this.resetOption('lint');
        },
        resetFoldGutter() {
            this.resetOption('foldGutter');
        },
        // 按下键盘事件处理函数
        onKeyDown(event) {
            const keyCode = event.keyCode || event.which || event.charCode;
            const keyCombination = event.ctrlKey || event.altKey || event.metaKey;
            if (!keyCombination && keyCode > 64 && keyCode < 123) {
                this.$refs.editor.codemirror.showHint({ completeSingle: false });
            }
        },
        // 按下鼠标时事件处理函数
        onMouseDown(event) {
            this.$refs.editor.codemirror.closeHint();
        },
        onCodeChanges(cm, changes) {
            this.editorValue = cm.getValue();
            this.resetLint();
        },
        // 黏贴事件处理函数
        onPaste(event) {
            this.setValue(this.editorValue);
        },
        // 失去焦点时处理函数
        onBlur(cm, event) {
            this.setValue(cm.getValue());
        }
    }
};
</script>
