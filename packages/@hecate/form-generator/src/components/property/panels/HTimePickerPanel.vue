<template>
    <v-expansion-panels focusable mandatory class="mb-4">
        <h-expansion-panel index="appearance" header="外观">
            <h-panel-number
                v-model="properties.elevation"
                label="Elevation : 阴影"
                min="0"
                max="24"
                tooltip="组件的海拔可接受 0 到 24 之间的值。"
                :disabled="properties.flat"
            ></h-panel-number>
            <h-panel-switch
                v-model="properties.flat"
                label="Flat : 移除阴影"
                tooltip="移除添加到元素的标高（阴影）"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.FullWidth]"
                label="Full Width : 全宽度"
                tooltip="指定输入类型为全宽度"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties.landscape"
                label="Landscape : 水平方向"
                tooltip="水平方向选择器"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.NoTitle]"
                label="No Title"
                tooltip="隐藏选择器标题"
            ></h-panel-switch>
            <h-panel-number
                v-model="properties.width"
                label="Width : 选择器宽度"
                min="1"
                max="1024"
                step="2"
                tooltip="选择器宽度"
            ></h-panel-number>
        </h-expansion-panel>

        <h-expansion-panel index="control" header="控制">
            <h-panel-switch v-model="properties.disabled" label="Disabled : 禁用输入"> </h-panel-switch>
            <h-panel-switch v-model="properties.readonly" label="Readonly : 只读状态"></h-panel-switch>
            <h-panel-switch
                v-model="properties.scrollable"
                label="Scrollable : 滚动"
                tooltip="允许通过鼠标滚动更改显示的月份"
            ></h-panel-switch>
        </h-expansion-panel>

        <h-expansion-panel index="content" header="内容">
            <h-panel-switch
                v-model="properties[constants.tags.AmpmInTitle]"
                label="Ampm In Title"
                tooltip="将 AM/PM 开关放置在标题中，不在时钟附近"
            ></h-panel-switch>
            <h-panel-select
                v-model="properties.format"
                label="Format"
                tooltip="定义在选择器中显示的时间格式。可用的选项是 ampm 和 24hr"
                :items="formatItems"
            ></h-panel-select>
            <h-panel-text-field
                v-model="properties.max"
                label="Max"
                tooltip="允许的最大 日期/月份（ISO 8601格式）"
            ></h-panel-text-field>
            <h-panel-text-field
                v-model="properties.min"
                label="Min"
                tooltip="允许的最小 日期/月份（ISO 8601格式）"
            ></h-panel-text-field>
            <h-panel-switch
                v-model="properties[constants.tags.UseSeconds]"
                label="Use Seconds"
                tooltip="切换选择器中秒的使用"
            ></h-panel-switch>
        </h-expansion-panel>

        <h-expansion-panel index="color" header="色彩">
            <h-panel-color
                v-model="properties.color"
                label="Color : 颜色"
                tooltip="将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表"
            ></h-panel-color>
            <h-panel-color
                v-model="properties[constants.tags.HeaderColor]"
                label="Header Color : 标题颜色"
                tooltip="定义标题颜色。如果未指定，将使用由 color 属性或默认选择器颜色定义的颜色"
            ></h-panel-color>
            <h-panel-switch v-model="properties.dark" label="Dark : 使用深色主题"> </h-panel-switch>
            <h-panel-switch v-model="properties.light" label="Light : 使用浅色主题"></h-panel-switch>
        </h-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import HExpansionPanel from '@/components/property/layouts/HExpansionPanel';
import HPanelColor from '@/components/property/controls/HPanelColor';
import HPanelNumber from '@/components/property/controls/HPanelNumber';
import HPanelSelect from '@/components/property/controls/HPanelSelect';
import HPanelSwitch from '@/components/property/controls/HPanelSwitch';
import HPanelTextField from '@/components/property/controls/HPanelTextField';

import { constants } from '@/lib/modeler/configurations';

export default {
    name: 'HTimePickerPanel',

    components: {
        HExpansionPanel,
        HPanelColor,
        HPanelNumber,
        HPanelSelect,
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
        formatItems: [
            { value: 'ampm', text: 'ampm（默认）' },
            { value: '24hr', text: '24hr' },
        ],
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
