<template>
    <v-card>
        <v-tabs v-model="tab" background-color="transparent" grow>
            <v-tab :key="tabs[0].key">
                {{ tabs[0].name }}
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            icon
                            class="ml-5"
                            v-bind="attrs"
                            v-on="on"
                            tag="a"
                            target="_blank"
                            :href="schema.configs ? schema.configs.document : '#'"
                        >
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
                                    :value="originalFormId"
                                    label="字段名"
                                    dense
                                    outlined
                                    placeholder="请输入字段名（v-model）"
                                    @input="editFormId"
                                />
                                <!-- <v-text-field v-if="schema.label" v-model="schema.label" outlined dense label="标题" placeholder="请输入标题" /> -->
                                <v-text-field
                                    :value="element.title"
                                    label="标签"
                                    clearable
                                    dense
                                    outlined
                                    placeholder="请输入标签"
                                    @input="editLabel"
                                />
                                <v-text-field
                                    :value="properties.id"
                                    label="ID"
                                    clearable
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
import HRangeSliderPanel from '@/components/property/panels/HRangeSliderPanel';
import HCheckBoxPanel from '@/components/property/panels/HCheckBoxPanel';
import HSwitchPanel from '@/components/property/panels/HSwitchPanel';
import { constants } from '@/lib/modeler/configurations';
export default {
    name: 'HPropertyPanel',

    components: {
        TEXT_FIELD: HTextFieldPanel,
        TEXT_AREA: HTextAreaPanel,
        SLIDER: HSliderPanel,
        RANGE_SLIDER: HRangeSliderPanel,
        CHECKBOX: HCheckBoxPanel,
        SWITCHS: HSwitchPanel,
    },

    props: {
        value: {
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
    }),

    computed: {
        currentPanel() {
            return this.schema.configs.panel;
        },
        originalFormId() {
            return this.schema.configs.formId;
        },
        element() {
            return this.schema.properties[this.originalFormId];
        },
        properties() {
            return this.element[this.constants.annotations.xprops];
        },
    },

    watch: {
        value: {
            handler(newValue, oldValue) {
                this.schema = newValue;
            },
            immediate: true,
        },
        schema: {
            handler(newValue, oldValue) {
                this.$emit('input', newValue);
            },
        },
    },

    methods: {
        editFormId(newFormId) {
            const oldFormId = this.originalFormId;
            if (newFormId && oldFormId && newFormId !== oldFormId) {
                this.$set(this.schema.properties, newFormId, this.element);
                this.$set(this.schema.configs, 'formId', newFormId);
                delete this.schema.properties[oldFormId];
            }
        },
        editId(newId) {
            if (newId) {
                this.$set(this.properties, 'id', newId);
            } else {
                delete this.properties.id;
            }
        },
        editLabel(newLabel) {
            if (newLabel) {
                this.$set(this.properties, 'label', newLabel);
                this.$set(this.element, 'title', newLabel);
            }
        },
    },
};
</script>
