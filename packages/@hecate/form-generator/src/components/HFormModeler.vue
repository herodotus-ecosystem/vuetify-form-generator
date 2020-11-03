<template>
    <v-app id="inspire">
        <v-navigation-drawer clipped app>
            <div class="components-list">
                <div v-for="(componentsGroup, groupIndex) in components" :key="groupIndex">
                    <div class="components-title">
                        <v-icon>mdi-puzzle-outline</v-icon>
                        {{ componentsGroup.title }}
                    </div>
                    <draggable
                        class="components-draggable"
                        :list="componentsGroup.list"
                        :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
                        :clone="addComponent"
                        draggable=".components-item"
                        :sort="false"
                    >
                        <div
                            v-for="(component, index) in componentsGroup.list"
                            :key="index"
                            class="components-item"
                            @click="addComponent(component)"
                        >
                            <div class="components-body">
                                <v-icon small class="mr-1">{{ component.configs.icon }}</v-icon>
                                {{ component.configs.title }}
                            </div>
                        </div>
                    </draggable>
                    <v-divider></v-divider>
                </div>
            </div>
        </v-navigation-drawer>

        <v-app-bar dense clipped-left clipped-right app color="blue darken-3" dark>
            <v-btn large icon>
                <v-icon>mdi-volleyball</v-icon>
            </v-btn>
            <v-toolbar-title>Hecate Form Generator</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn large dark icon v-bind="attrs" v-on="on" to="Preview" replace>
                        <v-icon>mdi-play-box-multiple-outline</v-icon>
                    </v-btn>
                </template>
                <span>运行</span>
            </v-tooltip>
            <v-dialog v-model="codeDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn large dark icon v-bind="attrs" v-on="on" @click="generateVueCode">
                        <v-icon>mdi-vuejs</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-toolbar dark color="primary" dense>
                        <v-btn icon dark @click="codeDialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Settings</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn dark text @click="codeDialog = false">Save</v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <h-code-mirror v-model="vueCode" mode="vue" read-only></h-code-mirror>
                </v-card>
            </v-dialog>

            <!-- <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn large dark icon v-bind="attrs" v-on="on" @click="getCanvasItemModels">
                        <v-icon>mdi-language-javascript</v-icon>
                    </v-btn>
                </template>
                <span>生成代码</span>
            </v-tooltip> -->
        </v-app-bar>

        <v-navigation-drawer clipped app right width="360px">
            <h-property-panel v-model="selectedCanvasItemData"></h-property-panel>
        </v-navigation-drawer>
        <v-main>
            <h-canvas-container>
                <draggable
                    v-if="drawingCanvas.length > 0"
                    :list="drawingCanvas"
                    :animation="300"
                    group="componentsGroup"
                    @change="onChange"
                    @start="drag = true"
                    @end="drag = false"
                >
                    <h-draggable-item
                        ref="canvas"
                        v-for="item in drawingCanvas"
                        :key="item.renderKey"
                        :schema="item"
                        :selected-item-id="selectedCanvasItemId"
                        @select="selectCanvasItem"
                        @copy="copyCanvasItem"
                        @delete="deleteCanvasItem"
                    />
                </draggable>
                <draggable v-else :animation="300" group="componentsGroup">
                    <v-row>
                        <v-col cols="12">
                            <v-row align="center" justify="center">
                                <v-card height="100" width="600" class="ma-12">
                                    <v-card-text class="text-center title"
                                        >从左侧拖入或点选组件进行表单设计</v-card-text
                                    >
                                </v-card>
                            </v-row>
                        </v-col>
                    </v-row>
                </draggable>
            </h-canvas-container>
        </v-main>
    </v-app>
</template>

<script>
import { debounce } from 'throttle-debounce';

import HCanvasContainer from '@/components/canvas/HCanvasContainer';
import HDraggableItem from '@/components/canvas/HDraggableItem';
import HPropertyPanel from '@/components/property/HPropertyPanel';
import HCodeMirror from '@hecate/h-code-mirror';

import { leftPanelComponents } from '@/lib/modeler/configurations';
import { DataObject, DB } from '@/lib/modeler/logic';
import { Template } from '@/lib/code';

export default {
    name: 'HFormModeler',

    components: {
        HCanvasContainer,
        HDraggableItem,
        HPropertyPanel,
        HCodeMirror,
    },

    data: () => ({
        components: leftPanelComponents,
        drawingCanvas: [],
        selectedCanvasItemId: '',
        selectedCanvasItemData: {},
        saveDrawingCanvasDebounce: debounce(340, DB.saveDrawingCanvas),
        codeDialog: false,
        vueCode: '',
    }),

    watch: {
        drawingCanvas: {
            handler(newValue, oldValue) {
                console.info('[HFG] Save Canvas Data to local storage!');
                this.saveDrawingCanvasDebounce(newValue);
            },
            deep: true,
        },
    },

    created() {
        this.initModeler();
    },

    mounted() {
        let drawingCanvasInDB = DB.getDrawingCanvas();
        if (Array.isArray(drawingCanvasInDB) && drawingCanvasInDB.length > 0) {
            this.drawingCanvas = drawingCanvasInDB;
            this.selectCanvasItem(this.drawingCanvas[0]);
        }
    },

    methods: {
        initModeler() {
            if (this.drawingCanvas.length !== 0) {
                this.selectedCanvasItemData = this.drawingCanvas[0];
            }
        },
        changeDrawingCanvas(dataObject) {
            this.drawingCanvas.push(dataObject);
            this.selectCanvasItem(dataObject);
        },

        /**
         * 向Modeler中添加组件
         */
        addComponent(component) {
            const dataObject = DataObject.generate(component);
            this.changeDrawingCanvas(dataObject);
        },

        onChange(object) {},

        /**
         * 点击Modeler中的Item
         */
        selectCanvasItem(dataObject) {
            this.selectedCanvasItemData = dataObject;
            this.selectedCanvasItemId = dataObject.configs.renderKey;
        },

        copyCanvasItem(element) {
            const dataObject = DataObject.clone(element);
            this.changeDrawingCanvas(dataObject);
        },

        deleteCanvasItem(formId) {
            let result = this.$lib.lodash.remove(this.drawingCanvas, (item) => {
                return item.configs.formId !== formId;
            });

            this.$nextTick(() => {
                this.drawingCanvas = result;
                const size = this.drawingCanvas.length;
                if (size) {
                    this.selectCanvasItem(this.drawingCanvas[size - 1]);
                }
            });
        },

        generateVueCode() {
            let code = Template.create(this.drawingCanvas);
            if (code) {
                this.vueCode = code.code;
            }
        },
    },
};
</script>

<style lang="scss">
@import '../assets/styles/modeler.scss';
</style>
