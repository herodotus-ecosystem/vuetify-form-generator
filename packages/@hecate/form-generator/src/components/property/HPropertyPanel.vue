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
                            <v-card flat v-if="schema.configs">
                                <v-text-field
                                    :value="schema.configs.formId"
                                    label="字段名"
                                    dense
                                    outlined
                                    placeholder="请输入字段名（v-model）"
                                    @input="editFormId"
                                />
                                <!-- <v-text-field v-if="schema.label" v-model="schema.label" outlined dense label="标题" placeholder="请输入标题" /> -->
                                <!-- <v-text-field
                                    v-model="element.label"
                                    label="标签"
                                    dense
                                    outlined
                                    placeholder="请输入标签"
                                    @change="modifyId"
                                /> -->
                                <v-text-field
                                    :value="properties.id"
                                    label="ID"
                                    dense
                                    outlined
                                    placeholder="请输入元素ID（id）"
                                    @input="editId"
                                />
                                <v-divider class="mb-3"></v-divider>
                                <component :is="currentPanel" v-model="element"></component>
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
import HTextAreaPanel from '@/components/property/panels/HTextAreaPanel';
import HSliderPanel from '@/components/property/panels/HSliderPanel';
import { constants } from '@/lib/modeler/configurations';
export default {
    name: 'HPropertyPanel',

    components: {
        TEXT_FIELD: HTextFieldPanel,
        TEXT_AREA: HTextAreaPanel,
        SLIDER: HSliderPanel,
    },

    props: {
        selectedCanvasItemData: {
            type: Object,
            default: () => {},
        },
    },

    data: () => ({
        constants,
        tab: null,
        tabs: [
            { key: 'element', name: '组件属性' },
            { key: 'form', name: '表单属性' },
        ],

        schema: {},
        element: {},
        properties: {},
        document: '',
        currentPanel: '',
        currentFormId: '',
    }),

    mounted() {
        this.LoadData();
    },

    watch: {
        selectedCanvasItemData: {
            handler(newValue, oldvalue) {
                this.LoadData();
            },
        },
    },

    methods: {
        LoadData() {
            if (this.selectedCanvasItemData && this.selectedCanvasItemData.configs) {
                this.schema = this.selectedCanvasItemData;
                this.document = this.selectedCanvasItemData.configs.document || '#';
                this.currentFormId = this.selectedCanvasItemData.configs.formId;
                this.currentPanel = this.selectedCanvasItemData.configs.panel;
                this.element = this.selectedCanvasItemData.properties[this.currentFormId];
                this.properties = this.element[this.constants.annotations.xprops];
            }
        },

        editFormId(newFormId) {
            const oldFormId = this.currentFormId;
            if (newFormId && oldFormId && newFormId !== oldFormId) {
                this.$set(this.schema.configs, 'formId', newFormId);
                this.$set(this.schema.properties, newFormId, this.element);
                this.currentFormId = newFormId;
                delete this.schema.properties[oldFormId];
            }
        },
        editId(newId) {
            if (newId) {
                this.$set(this.element[this.constants.annotations.xprops], 'id', newId);
            } else {
                delete this.element.id;
            }
        },
    },
};
</script>
