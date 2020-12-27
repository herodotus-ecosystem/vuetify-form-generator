<template>
    <!-- <codemirror ref="editor" :value="editorValue" :options="cmOptions" @changes="onCmCodeChanges" @blur="onCmBlur" @keydown.native="onKeyDown" @mousedown.native="onMouseDown" @paste.native="OnPaste"></codemirror> -->
    <codemirror ref="editor" v-model="sourceCode" :options="options" @ready="onReady"></codemirror>
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

//代码补全提示
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
// import 'codemirror/addon/edit/trailingspace.js';

// 搜索功能
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

export default {
    name: 'HCodeMirror',

    components: {
        codemirror,
    },

    props: {
        value: {
            type: String,
            default: '',
            required: true,
        },
        theme: {
            type: String,
            default: 'default',
        },
        mode: {
            type: String,
            default: 'default',
        },
        readOnly: {
            type: Boolean,
            default: false,
        },
    },

    data: () => ({
        sourceCode: '',
    }),

    computed: {
        currentMode() {
            return !this.mode || this.mode == 'default' ? 'application/json' : this.mode;
        },
        currentTheme() {
            let selectedTheme = !this.theme || this.theme == 'default' ? 'material-darker' : this.theme;
            require('codemirror/theme/' + selectedTheme + '.css');
            return selectedTheme;
        },
        options() {
            return {
                // ----- 以下是常规选项 -----
                mode: this.currentMode,
                theme: this.currentTheme,
                indentUnit: 4,
                smartIndent: false,
                tabSize: 4,
                indentWithTabs: true,
                // 可以用于为编辑器指定额外的键绑定，以及keyMap定义的键绑定
                // ctrl唤起智能提示
                extraKeys: { Ctrl: 'autocomplete' },
                // 是否折行
                lineWrapping: true,
                // 显示行号
                lineNumbers: true,
                gutters: ['CodeMirror-lint-markers', 'CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
                //是否只读
                readOnly: this.readOnly,
                showCursorWhenSelecting: true,
                autofocus: true,
                dragDrop: true,
                spellcheck: true,
                autocorrect: true,

                // ----- 以下选项需要配合Addons引入 -----
                // edit/matchbrackets.js
                matchBrackets: true,
                // edit/closebrackets.js
                autoCloseBrackets: true,
                // edit/matchtags.js
                matchTags: { bothTags: true },
                // edit/closetag.js
                autoCloseTags: true,
                // fold/foldgutter.js 块槽
                foldGutter: true,
                // 可以启用该选项来突出显示当前选中的内容的所有实例
                // search/match-highlighter.js
                highlightSelectionMatches: {
                    minChars: 2,
                    style: 'matchhighlight',
                    trim: true,
                    showToken: false,
                },
                // lint/lint.js
                lint: true,
                // selection/mark-selection.js
                styleSelectedText: true,
                // selection/active-line.js 高亮选中行
                styleActiveLine: true,
                // hint.js options
                hintOptions: {
                    // 当匹配只有一项的时候是否自动补全
                    completeSingle: false,
                },
            };
        },
        currentCodeMirror() {
            return this.$refs.editor.codemirror;
        },
    },

    created() {},

    watch: {
        value: {
            handler(newValue, oldValue) {
                this.sourceCode = newValue;
            },
            immediate: true,
        },
        sourceCode: {
            handler(newValue, oldValue) {
                this.$emit('input', newValue);
            },
        },
        mode: {
            handler(newValue, oldValue) {
                this.resetLint();
            },
        },
    },

    methods: {
        resetLint() {
            this.$refs.editor.codemirror.setOption('lint', false);
            this.$nextTick(() => {
                this.$refs.editor.codemirror.setOption('lint', true);
            });
        },
        onReady(cm) {
            cm.on('keypress', () => {
                cm.showHint({ completeSingle: false });
            });
        },
    },
};
</script>

<style lang="scss">
.CodeMirror {
    height: calc(100vh - 0px) !important;
}
.CodeMirror-lint-tooltip {
    z-index: 9999;
}
.CodeMirror-hints {
    z-index: 9999;
}
</style>
