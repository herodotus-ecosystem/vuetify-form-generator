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
            <h-panel-switch
                v-model="properties.multiple"
                label="Multiple : 多选"
                tooltip="将预期模型更改为数组"
            ></h-panel-switch>
            <h-panel-text-field
                v-model="properties[constants.tags.SelectedItemsText]"
                label="Selected Items Text : 所选日期文本"
                tooltip="使用 multiple 属性时用于翻译所选日期数的文本。 也可以在 Internationalization 中进行全局定制"
                :disabled="!properties.multiple"
            ></h-panel-text-field>
            <h-panel-switch v-model="properties.range" label="Range" tooltip="允许选择日期范围"></h-panel-switch>
            <h-panel-switch
                v-model="properties.reactive"
                label="Reactive"
                tooltip="自动更改 月份/年份 时更新选择器模型"
            ></h-panel-switch>
            <h-panel-switch v-model="properties.readonly" label="Readonly : 只读状态"></h-panel-switch>
            <h-panel-switch
                v-model="properties.scrollable"
                label="Scrollable : 滚动"
                tooltip="允许通过鼠标滚动更改显示的月份"
            ></h-panel-switch>
        </h-expansion-panel>

        <h-expansion-panel index="icon" header="图标">
            <h-panel-icon
                v-model="properties[constants.tags.PrevIcon]"
                label="Prev Icon"
                tooltip="设置上一个 月/年 按钮的图标"
            ></h-panel-icon>
            <h-panel-icon
                v-model="properties[constants.tags.NextIcon]"
                label="Next Icon"
                tooltip="设置下一个 月/年 按钮的图标"
            ></h-panel-icon>
            <h-panel-icon
                v-model="properties[constants.tags.YearIcon]"
                label="Year Icon"
                tooltip="设置年份选择按钮中的图标"
            ></h-panel-icon>
        </h-expansion-panel>

        <h-expansion-panel index="content" header="内容">
            <h-panel-number
                v-model="properties[constants.tags.FirstDayOfWeek]"
                label="First Day Of Week : 周的起始天"
                min="0"
                max="6"
                tooltip="设置一周的第一天，从周日的 0 开始。"
            ></h-panel-number>
            <h-panel-number
                v-model="properties[constants.tags.LocaleFirstDayOfYear]"
                label="Locale First Day Of Year"
                min="0"
                max="6"
                tooltip="设置决定一年中第一周的日期，从 0 开始，星期日。对于 ISO 8601，应该是 4。"
            ></h-panel-number>
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
            <h-panel-text-field
                v-model="properties[constants.tags.PickerDate]"
                label="Picker Date"
                tooltip="显示 年/月"
            ></h-panel-text-field>
            <h-panel-text-field
                v-model="properties[constants.tags.PrevMonthAriaLabel]"
                label="Prev Month Aria Label"
            ></h-panel-text-field>
            <h-panel-text-field
                v-model="properties[constants.tags.PrevYearAriaLabel]"
                label="Prev Year Aria Label"
            ></h-panel-text-field>
            <h-panel-text-field
                v-model="properties[constants.tags.NextMonthAriaLabel]"
                label="Next Month Aria Label"
            ></h-panel-text-field>
            <h-panel-text-field
                v-model="properties[constants.tags.NextYearAriaLabel]"
                label="Next Year Aria Label"
            ></h-panel-text-field>
            <h-panel-switch
                v-model="properties[constants.tags.ShowCurrent]"
                label="Show Current : 显示为当前日期"
                tooltip="切换当前 日期/月份 大纲的可见性或将提供的 日期/月份 显示为当前日期"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.ShowWeek]"
                label="Show Week : 显示星期"
                tooltip="切换日历正文中星期几的可见性"
            ></h-panel-switch>
            <h-panel-select
                v-model="properties.type"
                label="Type: 输入类型"
                tooltip="设置不同的输入类型"
                :items="typeItems"
            ></h-panel-select>
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
import HPanelIcon from '@/components/property/controls/HPanelIcon';
import HPanelNumber from '@/components/property/controls/HPanelNumber';
import HPanelSelect from '@/components/property/controls/HPanelSelect';
import HPanelSwitch from '@/components/property/controls/HPanelSwitch';
import HPanelTextField from '@/components/property/controls/HPanelTextField';

import { constants } from '@/lib/modeler/configurations';

export default {
    name: 'HDatePickerPanel',

    components: {
        HExpansionPanel,
        HPanelColor,
        HPanelIcon,
        HPanelNumber,
        HPanelSelect,
        HPanelSwitch,
        HPanelTextField,
    },

    props: {
        value: {
            type: Object,
            default: () => {},
        },
    },

    data: () => ({
        constants,
        element: {},
        typeItems: [
            { value: 'date', text: '日期模式（默认）' },
            { value: 'month', text: '月模式' },
        ],
    }),

    computed: {
        properties() {
            return this.element[this.constants.annotations.xprops];
        },
    },

    watch: {
        value: {
            handler(newValue, oldValue) {
                this.element = newValue;
            },
            immediate: true,
        },
        element: {
            handler(newValue, oldValue) {
                this.$emit('input', newValue);
            },
        },
    },
};
</script>
