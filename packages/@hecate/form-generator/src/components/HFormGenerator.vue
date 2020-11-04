<template>
    <v-app id="generator">
        <v-app-bar dense clipped-left clipped-right app color="blue darken-3" dark>
            <v-btn large icon>
                <v-icon>mdi-volleyball</v-icon>
            </v-btn>
            <v-toolbar-title>Hecate Form Generator</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn large dark icon v-bind="attrs" v-on="on" @click="formPreview">
                        <v-icon>mdi-play-box-multiple-outline</v-icon>
                    </v-btn>
                </template>
                <span>表单预览</span>
            </v-tooltip>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn large dark icon v-bind="attrs" v-on="on" @click="codePreview">
                        <v-icon>mdi-code-braces</v-icon>
                    </v-btn>
                </template>
                <span>查看代码</span>
            </v-tooltip>
            <!-- -->
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main>
            <h-form-modeler ref="modeler" :height="contentHeight"></h-form-modeler>
        </v-main>

        <h-form-code-drawer v-model="codeDrawer" :source="sourceCode"></h-form-code-drawer>
        <h-form-preview-drawer v-model="formDrawer" :source="schemaObject"></h-form-preview-drawer>
    </v-app>
</template>

<script>
import { Template, Translator } from '@/lib/code';

import HFormModeler from '@/components/HFormModeler';
import HFormCodeDrawer from '@/components/views/HFormCodeDrawer';
import HFormPreviewDrawer from '@/components/views/HFormPreviewDrawer';

export default {
    name: 'HFormGenerator',

    components: {
        HFormModeler,
        HFormCodeDrawer,
        HFormPreviewDrawer
    },

    data: () => ({
        windowWidth: document.documentElement.clientWidth, //实时屏幕宽度
        windowHeight: document.documentElement.clientHeight, //实时屏幕高度
        codeDrawer: false,
        formDrawer: false,
        sourceCode: '',
        schemaObject: ''
    }),

    computed: {
        contentHeight() {
            return this.windowHeight - 48 + 'px';
        },
        canvas() {
            return this.$refs.modeler.drawingCanvas;
        }
    },

    mounted() {
        // <!--把window.onresize事件挂在到mounted函数上-->
        window.onresize = () => {
            return (() => {
                window.fullHeight = document.documentElement.clientHeight;
                window.fullWidth = document.documentElement.clientWidth;
                this.windowHeight = window.fullHeight; // 高
                this.windowWidth = window.fullWidth; // 宽
            })();
        };
    },

    methods: {
        codePreview() {
            let code = Template.create(this.canvas);
            if (code) {
                this.sourceCode = code.code;
            }
            this.codeDrawer = true;
        },
        formPreview() {
            let schemas = Translator.toCompleteSchema(this.canvas);
            if (schemas) {
                this.schemaObject = JSON.stringify(schemas, null, '\t');
            }
            this.formDrawer = true;
        }
    }
};
</script>
