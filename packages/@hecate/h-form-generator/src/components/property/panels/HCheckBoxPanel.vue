<template>
    <v-expansion-panels focusable mandatory class="mb-4">
        <h-expansion-panel index="appearance" header="外观">
            <h-panel-switch v-model="properties.dense" label="Dense : 紧凑显示"> </h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.HideDetails]"
                label="Hide Details : 隐藏细节区域"
            ></h-panel-switch>
        </h-expansion-panel>

        <h-expansion-panel index="control" header="控制">
            <h-panel-switch v-model="properties.disabled" label="Disabled : 禁用输入"> </h-panel-switch>
            <h-panel-switch
                v-model="properties.multiple"
                label="Multiple : 多选"
                tooltip="将预期模型更改为数组"
            ></h-panel-switch>
            <h-panel-switch v-model="properties.readonly" label="Readonly : 只读状态"></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.ValidateOnBlur]"
                label="Validate On Blur : 延迟验证"
                tooltip="延迟验证直到失去焦点的事件被触发"
            ></h-panel-switch>
            <h-panel-text-field
                v-model="properties[constants.tags.FalseValue]"
                label="False Value : 设置假值"
                tooltip="设置Checkbox未被勾选时的值"
            ></h-panel-text-field>
            <h-panel-text-field
                v-model="properties[constants.tags.TrueValue]"
                label="True Value : 设置真值"
                tooltip="设置Checkbox被勾选时的值"
            ></h-panel-text-field>
        </h-expansion-panel>

        <h-expansion-panel index="icon" header="图标">
            <h-panel-icon
                v-model="properties[constants.tags.AppendIcon]"
                label="Append Icon"
                tooltip="在组件上附加一个图标，使用与 v-icon 相同的语法"
            ></h-panel-icon>
            <h-panel-icon
                v-model="properties[constants.tags.PrependIcon]"
                label="Prepend Icon"
                tooltip="在组件前添加一个图标，使用与 v-icon 相同的语法"
            ></h-panel-icon>
            <h-panel-icon
                v-model="properties[constants.tags.OffIcon]"
                label="Off Icon"
                tooltip="未被勾选时使用的图标"
            ></h-panel-icon>
            <h-panel-icon
                v-model="properties[constants.tags.OnIcon]"
                label="On Icon"
                tooltip="被勾选时使用的图标"
            ></h-panel-icon>
            <h-panel-text-field
                v-model="properties.indeterminate"
                label="Indeterminate : 不确定状态"
                tooltip="为复选框设置不确定状态"
            ></h-panel-text-field>
            <h-panel-icon
                v-model="properties[constants.tags.IndeterminateIcon]"
                label="Indeterminate Icon"
                tooltip="处于不确定状态时使用的图标"
                :disabled="!properties.indeterminate"
            ></h-panel-icon>
        </h-expansion-panel>

        <h-expansion-panel index="content" header="内容">
            <h-panel-switch
                v-model="properties[constants.tags.PersistentHint]"
                label="Persistent Hint : 强制显示提示"
                tooltip="强制提示总是可见的"
            ></h-panel-switch>
            <h-panel-text-field v-model="properties.hint" label="Hint : 提示文本"></h-panel-text-field>
        </h-expansion-panel>

        <h-expansion-panel index="color" header="色彩">
            <h-panel-color
                v-model="properties[constants.tags.BackgroundColor]"
                label="Background Color : 背景颜色"
                tooltip="输入框背景颜色"
            ></h-panel-color>
            <h-panel-color
                v-model="properties.color"
                label="Color : 颜色"
                tooltip="将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表"
            ></h-panel-color>
            <h-panel-switch v-model="properties.dark" label="Dark : 使用深色主题"> </h-panel-switch>
            <h-panel-switch v-model="properties.light" label="Light : 使用浅色主题"></h-panel-switch>
        </h-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import HExpansionPanel from '@/components/property/layouts/HExpansionPanel.vue';
import HPanelColor from '@/components/property/controls/HPanelColor.vue';
import HPanelIcon from '@/components/property/controls/HPanelIcon.vue';
import HPanelSwitch from '@/components/property/controls/HPanelSwitch.vue';
import HPanelTextField from '@/components/property/controls/HPanelTextField.vue';

import { constants } from '@/lib/modeler/configurations';

export default {
    name: 'HCheckboxPanel',

    components: {
        HExpansionPanel,
        HPanelColor,
        HPanelIcon,
        HPanelSwitch,
        HPanelTextField,
    },

    props: {
        element: {
            type: Object,
            default: () => {},
        },
    },

    data: () => ({
        constants,
        dataObject: {},
    }),

    computed: {
        properties() {
            return this.dataObject[this.constants.annotations.xprops];
        },
    },

    watch: {
        element: {
            handler(newValue, oldValue) {
                this.dataObject = newValue;
            },
            immediate: true,
        },
    },
};
</script>
