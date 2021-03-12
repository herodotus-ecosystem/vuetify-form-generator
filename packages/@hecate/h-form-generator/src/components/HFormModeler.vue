<template>
    <v-app id="modeler">
        <v-navigation-drawer app clipped hide-overlay>
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
                        :clone="cloneComponent"
                        draggable=".components-item"
                        :sort="false"
                        @end="onEnd"
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
        <v-main app class="pa-0">
            <h-canvas-container @empty="emptyCanvas">
                <validation-observer ref="observer">
                    <v-form>
                        <draggable
                            v-if="drawingCanvas.length > 0"
                            :list="drawingCanvas"
                            :animation="300"
                            group="componentsGroup"
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

                        <v-row v-else>
                            <v-col cols="12">
                                <v-row align="center" justify="center">
                                    <v-card height="100" width="600" class="ma-12">
                                        <draggable :list="drawingCanvas" :animation="300" group="componentsGroup">
                                            <v-card-text class="text-center title"
                                                >从左侧拖入或点选组件进行表单设计</v-card-text
                                            >
                                        </draggable>
                                    </v-card>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-form>
                </validation-observer>
            </h-canvas-container>
        </v-main>
        <v-navigation-drawer clipped app hide-overlay right width="360px">
            <h-property-panel
                :selected-item="selectedCanvasItemData"
                :form-schema="drawingCanvasForm"
            ></h-property-panel>
        </v-navigation-drawer>
    </v-app>
</template>

<script>
import { debounce } from 'throttle-debounce';

import { leftPanelComponents, formConfigurations } from '../lib/modeler/configurations';
import { DataObject, DB } from '../lib/modeler/logic';

import { HCanvasContainer, HDraggableItem } from './canvas';
import { HPropertyPanel } from './property';

export default {
    name: 'HFormModeler',

    components: {
        HCanvasContainer,
        HDraggableItem,
        HPropertyPanel,
    },

    props: {
        height: {
            type: String,
            default: '100vh',
        },
    },

    data: () => ({
        components: leftPanelComponents,
        formSettings: formConfigurations,
        drawingCanvas: [],
        drawingCanvasForm: {},
        selectedCanvasItemId: '',
        selectedCanvasItemData: {},
        saveDrawingCanvasDebounce: debounce(340, DB.saveDrawingCanvas),
        saveDrawingCanvasFormDebounce: debounce(340, DB.saveDrawingCanvasForm),
        tempSelectedCanvasItemData: {}
    }),

    watch: {
        drawingCanvas: {
            handler (newValue, oldValue) {
                console.info('[HFG] Save Canvas Data to local storage!');
                this.saveDrawingCanvasDebounce(newValue);
            },
            deep: true,
        },
        drawingCanvasForm: {
            handler (newValue, oldValue) {
                console.info('[HFG] Save Form Data to local storage!');
                this.saveDrawingCanvasFormDebounce(newValue);
            },
            deep: true,
            immediate: true,
        },
    },

    created () {
        this.initModeler();
    },

    mounted () {
        let drawingCanvasInDB = DB.getDrawingCanvas();
        if (Array.isArray(drawingCanvasInDB) && drawingCanvasInDB.length > 0) {
            this.drawingCanvas = drawingCanvasInDB;
            this.selectCanvasItem(this.drawingCanvas[0]);
        }
        let drawingCanvasFormInDB = DB.getDrawingCanvasForm();
        if (this.$lib.lodash.isEmpty(drawingCanvasFormInDB)) {
            this.drawingCanvasForm = this.$lib.lodash.cloneDeep(this.formSettings);
        } else {
            this.drawingCanvasForm = drawingCanvasFormInDB;
        }
    },

    methods: {
        initModeler () {
            if (this.drawingCanvas.length !== 0) {
                this.selectedCanvasItemData = this.drawingCanvas[0];
            }
        },
        changeDrawingCanvas (dataObject) {
            this.drawingCanvas.push(dataObject);
            this.selectCanvasItem(dataObject);
        },

        /**
         * 向Modeler中添加组件
         */
        addComponent (component) {
            const dataObject = this.cloneComponent(component);
            this.changeDrawingCanvas(dataObject);
        },

        cloneComponent (component) {
            const dataObject = DataObject.generate(component);
            this.tempSelectedCanvasItemData = dataObject;
            return dataObject;
        },

        /**
         * 点击Modeler中的Item
         */
        selectCanvasItem (dataObject) {
            this.selectedCanvasItemData = dataObject;
            this.selectedCanvasItemId = dataObject.configs.renderKey;
        },

        copyCanvasItem (element) {
            const dataObject = DataObject.clone(element);
            this.changeDrawingCanvas(dataObject);
        },

        onEnd (event) {
            if (event.from !== event.to) {
                this.selectCanvasItem(this.tempSelectedCanvasItemData)
            }
        },

        deleteCanvasItem (formId) {
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
        emptyCanvas () {
            this.drawingCanvas = [];
            this.selectedCanvasItemData = {};
            this.selectedCanvasItemId = '';
        },
    },
};
</script>

<style lang="scss">
@import '../assets/styles/modeler.scss';
</style>
