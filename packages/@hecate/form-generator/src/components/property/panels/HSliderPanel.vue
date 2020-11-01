<template>
    <v-expansion-panels focusable mandatory class="mb-4">
        <h-expansion-panel index="appearance" header="外观">
            <h-panel-switch v-model="properties.dense" label="Dense : 紧凑显示"> </h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.HideDetails]"
                label="Hide Details : 隐藏细节区域"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.InverseLabel]"
                label="Inverse Label : 反转标签位置"
                tooltip="使用 rtl 反转标签位置"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties.vertical"
                label="Vertical : 垂直"
                tooltip="将滑块方向切换为垂直方向"
            ></h-panel-switch>
            <h-panel-number v-model="properties.height" label="Height : 设置高度" min="1"></h-panel-number>
        </h-expansion-panel>

        <h-expansion-panel index="thumb" header="缩略图标签">
            <h-panel-color
                v-model="properties[constants.tags.ThumbColor]"
                label="Thumb Color : 缩略图颜色"
                tooltip="设置缩略图和缩略图标签颜色"
            ></h-panel-color>
            <h-panel-switch-text-field
                v-model="properties[constants.tags.ThumbLabel]"
                label="Thumb Label : 缩略图标签"
                tooltip="显示缩略图标签。如果 true，使用滑块时将显示缩略图标签。如果设置为 'always' ，它总是显示缩略图标签"
            ></h-panel-switch-text-field>
            <h-panel-number
                v-model="properties[constants.tags.ThumbSize]"
                label="Thumb Size : 缩略图大小"
                min="1"
                max="100"
                step="1"
            ></h-panel-number>
        </h-expansion-panel>

        <h-expansion-panel index="tick" header="刻度线">
            <h-panel-array
                v-model="properties[constants.tags.TickLabels]"
                label="Tick Labels : 刻度线标签"
                tooltip="按回车添加多个标签"
            ></h-panel-array>
            <h-panel-switch-text-field
                v-model="properties.ticks"
                label="Ticks : 刻度线"
                tooltip="显示刻度线。如果 true，使用滑块时将显示刻度线。如果设置为 'always' ，它总是显示刻度线。"
            ></h-panel-switch-text-field>
            <h-panel-number
                v-model="properties[constants.tags.TickSize]"
                label="Tick Size : 刻度线大小"
                min="1"
                max="100"
                step="1"
            ></h-panel-number>
        </h-expansion-panel>

        <h-expansion-panel index="control" header="控制">
            <h-panel-switch v-model="properties.disabled" label="Disabled : 禁用输入"> </h-panel-switch>
            <h-panel-switch
                v-model="properties.loading"
                label="Loading : 加载状态"
                tooltip="显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。"
            ></h-panel-switch>
            <h-panel-number
                v-model="properties[constants.tags.LoaderHeight]"
                label="Loader Height : 加载器高度"
                min="1"
                :disabled="!properties.loading"
            ></h-panel-number>
            <h-panel-switch v-model="properties.readonly" label="Readonly : 只读状态"></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.ValidateOnBlur]"
                label="Validate On Blur : 延迟验证"
                tooltip="延迟验证直到失去焦点的事件被触发"
            ></h-panel-switch>
            <h-panel-number
                v-model="properties.min"
                label="Min : 数字类型最小值"
                min="0"
                tooltip="当Type属性为‘数字类型’时可用"
            ></h-panel-number>
            <h-panel-number
                v-model="properties.max"
                label="Max : 数字类型最大值"
                min="1"
                tooltip="当Type属性为‘数字类型’时可用"
            ></h-panel-number>
            <h-panel-number
                v-model="properties.step"
                label="Step : 数字类型步长"
                min="1"
                tooltip="当Type属性为‘数字类型’时可用"
            ></h-panel-number>
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
            <h-panel-color
                v-model="properties[constants.tags.TrackColor]"
                label="Track Color : 轨道颜色"
                tooltip="设置滑块轨道颜色"
            ></h-panel-color>
            <h-panel-color
                v-model="properties[constants.tags.TrackFillColor]"
                label="Track Fill Color : 轨道填充颜色"
                tooltip="设置滑块轨道填充颜色"
            ></h-panel-color>
        </h-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import HExpansionPanel from '@/components/property/layouts/HExpansionPanel';
import HPanelArray from '@/components/property/controls/HPanelArray';
import HPanelColor from '@/components/property/controls/HPanelColor';
import HPanelIcon from '@/components/property/controls/HPanelIcon';
import HPanelNumber from '@/components/property/controls/HPanelNumber';
import HPanelSwitch from '@/components/property/controls/HPanelSwitch';
import HPanelSwitchTextField from '@/components/property/controls/HPanelSwitchTextField';
import HPanelTextField from '@/components/property/controls/HPanelTextField';

import { constants } from '@/lib/modeler/configurations';

export default {
    name: 'HSliderPanel',
    components: {
        HExpansionPanel,
        HPanelArray,
        HPanelColor,
        HPanelIcon,
        HPanelNumber,
        HPanelSwitch,
        HPanelSwitchTextField,
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
