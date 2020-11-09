<template>
    <v-container fluid class="grey lighten-5 pa-0">
        <v-row no-gutters>
            <v-col cols="2">
                <v-card :height="height">
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
                        </div></div
                ></v-card>
            </v-col>
            <v-col cols="8">
                <v-card class="ma-2">
                    <v-row>
                        <v-col class="canvas-body">
                            <v-card class="ml-1 mr-1">
                                <validation-observer ref="observer">
                                    <v-form>
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
                                    </v-form>
                                </validation-observer>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="2">
                <v-card class="overflow-y-auto overflow-x-hidden" :height="height">
                    <h-property-panel v-model="selectedCanvasItemData"></h-property-panel>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { debounce } from 'throttle-debounce';

import { leftPanelComponents } from '@/lib/modeler/configurations';
import { DataObject, DB } from '@/lib/modeler/logic';

import HDraggableItem from '@/components/canvas/HDraggableItem';
import HPropertyPanel from '@/components/property/HPropertyPanel';

export default {
    name: 'HFormModeler',

    components: {
        HDraggableItem,
        HPropertyPanel
    },

    props: {
        height: {
            type: String,
            default: '100vh'
        }
    },

    data: () => ({
        components: leftPanelComponents,
        drawingCanvas: [],
        selectedCanvasItemId: '',
        selectedCanvasItemData: {},
        saveDrawingCanvasDebounce: debounce(340, DB.saveDrawingCanvas)
    }),

    watch: {
        drawingCanvas: {
            handler(newValue, oldValue) {
                console.info('[HFG] Save Canvas Data to local storage!');
                this.saveDrawingCanvasDebounce(newValue);
            },
            deep: true
        }
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
        }
    }
};
</script>

<style lang="scss">
@import '../assets/styles/modeler.scss';
</style>
