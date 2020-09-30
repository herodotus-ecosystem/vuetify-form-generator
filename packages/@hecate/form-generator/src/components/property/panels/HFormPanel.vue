<template>
    <v-list shaped>
        <v-list-group prepend-icon="mdi-view-comfy">
            <template v-slot:activator>
                <v-list-item-title>Container</v-list-item-title>
            </template>
            <h-panel-text-field
                class="mt-3"
                v-model="formSettings.container.tag"
                label="根元素标签"
                placeholder="请输入根元素标签"
                tooltip="指定在根元素上使用的自定义标签"
            />
            <h-panel-switch v-model="formSettings.container.fluid" label="Fluid : 流式布局"></h-panel-switch>
            <v-divider></v-divider>
        </v-list-group>
        <v-list-group prepend-icon="mdi-view-sequential">
            <template v-slot:activator>
                <v-list-item-title>Row</v-list-item-title>
            </template>
            <h-panel-text-field
                class="mt-3"
                v-model="formSettings.row.tag"
                label="根元素标签"
                placeholder="请输入根元素标签"
                tooltip="指定在根元素上使用的自定义标签"
            />
            <h-panel-switch v-model="formSettings.row.dense" label="Dense : 紧凑显示"></h-panel-switch>
            <h-panel-switch
                v-model="formSettings.row[constants.tag.nogutters]"
                label="No Gutters : 移除间距"
            ></h-panel-switch>
            <h-align-select v-model="formSettings.row.align" label="Align"></h-align-select>
            <h-align-content-select
                v-model="formSettings.row[constants.tag.aligncontent]"
                label="Align Content"
            ></h-align-content-select>
            <h-justify-select v-model="formSettings.row.justify" label="Justify"></h-justify-select>
            <v-divider></v-divider>
        </v-list-group>
        <v-list-group prepend-icon="mdi-view-parallel">
            <template v-slot:activator>
                <v-list-item-title>Col</v-list-item-title>
            </template>
            <h-combine-input v-model="formSettings.col.sm" label="Sm"></h-combine-input>
            <v-divider></v-divider>
        </v-list-group>
        <v-list-group prepend-icon="mdi-card-plus">
            <template v-slot:activator>
                <v-list-item-title>Card</v-list-item-title>
            </template>
            <h-panel-switch
                v-model="formSettings.card.flat"
                label="Flat : 移除阴影"
                tooltip="当使用solo或者solo-inverted属性时，移除添加到元素的标高（阴影）"
            ></h-panel-switch>
            <v-divider></v-divider>
        </v-list-group>
        <v-list-group prepend-icon="mdi-format-page-break">
            <template v-slot:activator>
                <v-list-item-title>Form</v-list-item-title>
            </template>
            <h-panel-switch class="mt-3" v-model="formSettings.form.disabled" label="Disabled : 禁用"></h-panel-switch>
            <h-panel-switch
                v-model="formSettings.form[constants.tag.lazyvalidation]"
                label="Lazy Validation : 惰性验证"
                tooltip="如果启用，value将永远是 true ，除非有可见的验证错误。您仍然可以调用validate()来手动触发验证。"
            ></h-panel-switch>
            <h-panel-switch v-model="formSettings.form.readonly" label="Readonly : 只读"></h-panel-switch>
            <v-divider></v-divider>
        </v-list-group>
    </v-list>
</template>
<script>
import { attribute } from '@/lib/modeler/settings';
import HPanelSwitch from '@/components/properties/control/HPanelSwitch.vue';
import HPanelTextField from '@/components/properties/control/HPanelTextField.vue';
import HAlignSelect from '@/components/properties/control/HAlignSelect.vue';
import HAlignContentSelect from '@/components/properties/control/HAlignContentSelect.vue';
import HJustifySelect from '@/components/properties/control/HJustifySelect.vue';
import HCombineInput from '@/components/properties/control/HCombineInput.vue';

export default {
    name: 'HFormPanel',

    components: {
        HPanelSwitch,
        HPanelTextField,
        HAlignSelect,
        HAlignContentSelect,
        HJustifySelect,
        HCombineInput,
    },

    props: {
        formSettings: {
            type: Object,
            default: () => {},
        },
    },
    data: () => ({
        constants: attribute,
    }),
};
</script>
