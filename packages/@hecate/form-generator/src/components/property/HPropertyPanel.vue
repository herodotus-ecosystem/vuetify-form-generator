<template>
    <v-card>
        <v-tabs v-model="tab" background-color="transparent" grow>
            <v-tab :key="tabs[0].key">
                {{ tabs[0].name }}
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon class="ml-5" v-bind="attrs" v-on="on" tag="a" target="_blank" :href="document">
                            <v-icon>mdi-file-replace</v-icon>
                        </v-btn>
                    </template>
                    <span>点击查看文档</span>
                </v-tooltip>
            </v-tab>
            <v-tab :key="tabs[1].key">
                {{ tabs[1].name }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item :key="tabs[0].key">
                <v-container class="pb-0" fluid>
                    <v-row>
                        <v-col class="pb-0">
                            <v-card flat>
                                <v-text-field
                                    v-if="schema.configs"
                                    v-model="schema.configs.formId"
                                    outlined
                                    dense
                                    label="字段名"
                                    placeholder="请输入字段名（v-model）"
                                    @change="modifyFormId"
                                />
                                <!-- <v-text-field v-if="schema.label" v-model="schema.label" outlined dense label="标题" placeholder="请输入标题" /> -->
                                <v-divider></v-divider>
                                <component :is="currentPanel" :element="element"></component>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-tab-item>
            <!-- <v-tab-item :key="tabs[1].key">
                <v-container class="pb-0" fluid>
                    <v-row>
                        <v-col class="pb-0">
                            <v-card flat>
                                <v-text-field v-model="formSettings.formRef" outlined dense label="表单名" placeholder="请输入表单名（ref）" />
                                <v-text-field v-model="formSettings.formModel" outlined dense label="表单模型" placeholder="请输入数据模型" />
                                <v-divider></v-divider>
                                <h-form-panel :form-settings="formSettings"></h-form-panel>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-tab-item> -->
        </v-tabs-items>
    </v-card>
</template>

<script>
import HTextFieldPanel from '@/components/property/panels/HTextFieldPanel';
import { constants } from '@/lib/modeler/configurations';
export default {
    name: 'HPropertyPanel',

    components: {
        TEXT_FIELD: HTextFieldPanel,
    },

    props: {
        activeCanvasItemData: {
            type: Object,
            default: () => {},
        },
    },

    data: () => ({
        tab: null,
        tabs: [
            { key: 'element', name: '组件属性' },
            { key: 'form', name: '表单属性' },
        ],
        constants,
        schema: {},
        element: {},
        document: '',
        currentPanel: '',
        currentItemFormId: '',
    }),

    mounted() {
        this.initItemData();
        console.log(this.schema);
    },

    watch: {
        activeCanvasItemData: {
            handler(newValue, oldvalue) {
                this.initItemData();
            },
        },
    },

    methods: {
        initItemData() {
            if (this.activeCanvasItemData && this.activeCanvasItemData.configs) {
                this.currentItemFormId = this.activeCanvasItemData.configs.formId;
                this.currentPanel = this.activeCanvasItemData.configs.panel;
                this.schema = this.activeCanvasItemData;
                this.element = this.activeCanvasItemData.properties[this.currentItemFormId];
                this.document = this.activeCanvasItemData.configs.document || '#';
            }
        },

        modifyFormId(newFormId) {
            const oldFormId = this.currentItemFormId;
            if (newFormId && oldFormId && newFormId !== oldFormId) {
                this.schema.properties[newFormId] = this.element;
                delete this.schema.properties[oldFormId];
            }
        },
    },
};
</script>
