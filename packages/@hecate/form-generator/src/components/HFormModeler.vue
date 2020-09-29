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
        </v-app-bar>

        <v-navigation-drawer clipped app right width="360px">
            <!-- <h-property-panel :active-canvas-item-data="activeCanvasItemData"></h-property-panel> -->
        </v-navigation-drawer>
        <v-main> </v-main>
    </v-app>
</template>

<script>
import { debounce } from 'throttle-debounce';

import { leftPanelComponents } from '@/lib/modeler/configurations';
import { DataObject, DB } from '@/lib/modeler/logic';

export default {
    name: 'HFormModeler',

    components: {
        // HCanvasContainer,
        // HDraggableItem,
        // HPropertyPanel
    },

    data: () => ({
        components: leftPanelComponents,
        drawingCanvas: [],
        activeCanvasItemId: '',
        activeCanvasItemData: {},
        saveDrawingCanvasDebounce: debounce(340, DB.saveDrawingCanvas),
    }),

    created() {
        this.initModeler();
    },

    mounted() {
        let drawingCanvasInDB = DB.getDrawingCanvas();
        if (Array.isArray(drawingCanvasInDB) && drawingCanvasInDB.length > 0) {
            this.drawingCanvas = drawingCanvasInDB;
            this.activeCanvasItem(this.drawingCanvas[0]);
        }
    },

    watch: {
        drawingCanvas: {
            handler(newValue, oldValue) {
                this.saveDrawingCanvasDebounce(newValue);
            },
            deep: true,
        },
    },

    methods: {
        initModeler() {
            if (this.drawingCanvas.length !== 0) {
                this.activeCanvasItemData = this.drawingCanvas[0];
            }
        },
        changeDrawingCanvas(dataObject) {
            this.drawingCanvas.push(dataObject);
        },

        /**
         * 向Modeler中添加组件
         */
        addComponent(component) {
            const dataObject = DataObject.generate(component);
            this.changeDrawingCanvas(dataObject);
        },

        onChange(object) {
            if (object.added) {
                this.activeCanvasItem(object.added.element);
            }
        },

        /**
         * 点击Modeler中的Item
         */
        activeCanvasItem(dataObject) {
            this.activeCanvasItemData = dataObject;
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
                    this.activeCanvasItem(this.drawingCanvas[size - 1]);
                }
            });
        },

        hoverCanvasItem(dataObject) {
            this.activeCanvasItem(dataObject);
        },
    },
};
</script>

<style lang="scss">
@import '../assets/styles/modeler.scss';
</style>
