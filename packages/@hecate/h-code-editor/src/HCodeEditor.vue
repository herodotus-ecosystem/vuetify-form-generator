<template>
    <v-card>
        <v-toolbar dense color="blue darken-3" dark>
            <v-btn large icon>
                <v-icon>mdi-volleyball</v-icon>
            </v-btn>
            <v-toolbar-title>Hecate Code Editor</v-toolbar-title>
            <v-select
                :items="themeOptions"
                flat
                solo-inverted
                hide-details
                dense
                label="请选择主题"
                class="ml-3"
                prepend-inner-icon="mdi-theme-light-dark"
                no-data-text="没有数据"
                @change="onThemeChange"
            ></v-select>
            <v-select
                :items="modeOptions"
                flat
                solo-inverted
                hide-details
                dense
                label="请选择编辑模式"
                class="ml-3"
                prepend-inner-icon="mdi-codepen"
                no-data-text="没有数据"
                @change="onModeChange"
            ></v-select>
            <v-btn small icon class="ml-3">
                <v-icon>mdi-apps</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-apps</v-icon>
            </v-btn>
        </v-toolbar>
        <h-code-mirror :mode="codeMirrorMode" :theme="codeMirrorTheme"></h-code-mirror>
    </v-card>
</template>

<script>
import HCodeMirror from '@hecate/h-code-mirror';
export default {
    name: 'HCodeEditor',

    components: {
        HCodeMirror
    },

    data: () => ({
        modeOptions: ['default', 'json', 'sql', 'javascript', 'css', 'xml', 'html', 'yaml', 'markdown', 'python'],
        themeOptions: [
            'default',
            '3024-day',
            '3024-night',
            'abcdef',
            'ambiance',
            'ayu-dark',
            'ayu-mirage',
            'base16-dark',
            'base16-light',
            'bespin',
            'blackboard',
            'cobalt',
            'colorforth',
            'darcula',
            'dracula',
            'duotone-dark',
            'duotone-light',
            'eclipse',
            'elegant',
            'erlang-dark',
            'gruvbox-dark',
            'hopscotch',
            'icecoder',
            'idea',
            'isotope',
            'lesser-dark',
            'liquibyte',
            'lucario',
            'material',
            'material-darker',
            'material-palenight',
            'material-ocean',
            'mbo',
            'mdn-like',
            'midnight',
            'monokai',
            'moxer',
            'neat',
            'neo',
            'night',
            'nord',
            'oceanic-next',
            'panda-syntax',
            'paraiso-dark',
            'paraiso-light',
            'pastel-on-dark',
            'railscasts',
            'rubyblue',
            'seti',
            'shadowfox',
            'solarized dark',
            'solarized light',
            'the-matrix',
            'tomorrow-night-bright',
            'tomorrow-night-eighties',
            'ttcn',
            'twilight',
            'vibrant-ink',
            'xq-dark',
            'xq-light',
            'yeti',
            'yonce',
            'zenburn'
        ],
        codeMirrorMode: 'default',
        codeMirrorTheme: 'default'
    }),

    methods: {
        switchCodeMirrorMode(type) {
            switch (type) {
                case 'json':
                    return DEFAULT_MODE;
                case 'html':
                    return 'htmlmixed';
                default:
                    return type;
            }
        },
        onModeChange(value) {
            this.codeMirrorMode = this.switchCodeMirrorMode(value);
        },
        onThemeChange(value) {
            this.codeMirrorTheme = value;
        }
    }
};
</script>
