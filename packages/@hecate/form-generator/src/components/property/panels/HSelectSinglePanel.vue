<template>
    <v-expansion-panels focusable mandatory class="mb-4">
        <h-expansion-panel index="appearance" header="外观">
            <h-panel-switch v-model="properties.dense" label="Dense : 紧凑显示"> </h-panel-switch>
            <h-panel-switch
                v-model="properties.filled"
                label="Filled : 使用填充样式"
                :disabled="properties.outlined || properties.solo"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties.flat"
                label="Flat : 移除阴影"
                tooltip="当使用solo或者solo-inverted属性时，移除添加到元素的标高（阴影）"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.FullWidth]"
                label="Full Width : 全宽度"
                tooltip="指定输入类型为全宽度"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.HideDetails]"
                label="Hide Details : 隐藏细节区域"
            ></h-panel-switch>
            <h-panel-switch v-model="properties.outlined" label="Outlined : 显示轮廓"></h-panel-switch>
            <h-panel-switch
                v-model="properties.rounded"
                label="Rounded : 椭圆边框"
                :disabled="!properties.filled && !properties.outlined && !properties.solo"
                dense
                :class="constants.class.switch"
                tooltip="向输入添加边框半径, 需要配合设置Filled、Outlined、或Solo任意一项"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties.shaped"
                label="Shaped : 圆角边框"
                tooltip="如果Outlined则为圆形，如果Filled则增加border-radius。必须与Outlined 或Filled 一起使用"
                :disabled="!properties.outlined && !properties.filled && !properties.solo"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.SingleLine]"
                label="Single Line : 标题不移动"
                tooltip="标签在 focus/dirty 上不移动"
            ></h-panel-switch>
            <h-panel-switch v-model="properties.solo" label="Solo : 凸起样式" :disabled="properties.filled">
            </h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.SoloInverted]"
                label="Solo Inverted : 单反"
                tooltip="减少元素的不透明度，知道获得焦点"
            ></h-panel-switch>
            <h-panel-number v-model="properties.height" label="Height : 设置高度" min="1"></h-panel-number>
        </h-expansion-panel>

        <h-expansion-panel index="control" header="控制">
            <h-panel-switch v-model="properties.autofocus" label="Auto Focus : 启用自动聚焦"> </h-panel-switch>
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
            <h-panel-switch v-model="properties.reverse" label="Reverse : 反转输入方向"></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.ValidateOnBlur]"
                label="Validate On Blur : 延迟验证"
                tooltip="延迟验证直到失去焦点的事件被触发"
            ></h-panel-switch
        ></h-expansion-panel>

        <h-expansion-panel index="icon" header="图标">
            <h-panel-icon
                v-model="properties[constants.tags.AppendIcon]"
                label="Append Icon"
                tooltip="在组件上附加一个图标，使用与 v-icon 相同的语法"
            ></h-panel-icon>
            <h-panel-icon
                v-model="properties[constants.tags.AppendOuterIcon]"
                label="Append Outer Icon"
                tooltip="在组件的外部添加一个图标，使用与 v-icon 相同的语法"
            ></h-panel-icon>
            <h-panel-switch v-model="properties.clearable" label="Clearable : 显示清除按钮"> </h-panel-switch>
            <h-panel-icon
                v-model="properties[constants.tags.ClearIcon]"
                label="Clear Icon"
                tooltip="当使用 clearable 且有输入值时应用"
                :disabled="!properties.clearable"
            ></h-panel-icon>
            <h-panel-icon
                v-model="properties[constants.tags.PrependIcon]"
                label="Prepend Icon"
                tooltip="在组件前添加一个图标，使用与 v-icon 相同的语法"
            ></h-panel-icon>
            <h-panel-icon
                v-model="properties[constants.tags.PrependInnerIcon]"
                label="Prepend Inner Icon"
                tooltip="在组件的输入中添加一个图标，使用与 v-icon 相同的语法"
            ></h-panel-icon>
        </h-expansion-panel>

        <h-expansion-panel index="content" header="内容">
            <h-panel-switch
                v-model="properties[constants.tags.PersistentHint]"
                label="Persistent Hint : 强制显示提示"
                tooltip="强制提示总是可见的"
            ></h-panel-switch>
            <h-panel-text-field v-model="properties.hint" label="Hint : 提示文本"></h-panel-text-field>
            <h-panel-text-field v-model="properties.placeHolder" label="PlaceHolder : 占位符文本"></h-panel-text-field>
            <h-panel-text-field v-model="properties.prefix" label="Prefix : 前缀文本"></h-panel-text-field>
            <h-panel-text-field v-model="properties.suffix" label="Suffix : 后缀文本"></h-panel-text-field>
            <h-panel-select
                v-model="properties.type"
                label="Type: 输入类型"
                tooltip="设置不同的输入类型"
                :items="typeItems"
            ></h-panel-select>
            <h-panel-number
                v-model="properties.min"
                label="Min : 数字类型最小值"
                min="0"
                :disabled="!isNumberType"
                tooltip="当Type属性为‘数字类型’时可用"
            ></h-panel-number>
            <h-panel-number
                v-model="properties.max"
                label="Max : 数字类型最大值"
                min="1"
                :disabled="!isNumberType"
                tooltip="当Type属性为‘数字类型’时可用"
            ></h-panel-number>
            <h-panel-number
                v-model="properties.step"
                label="Step : 数字类型步长"
                min="1"
                :disabled="!isNumberType"
                tooltip="当Type属性为‘数字类型’时可用"
            ></h-panel-number>
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
import HExpansionPanel from '@/components/property/layouts/HExpansionPanel';
import HPanelColor from '@/components/property/controls/HPanelColor';
import HPanelIcon from '@/components/property/controls/HPanelIcon';
import HPanelNumber from '@/components/property/controls/HPanelNumber';
import HPanelSelect from '@/components/property/controls/HPanelSelect';
import HPanelSwitch from '@/components/property/controls/HPanelSwitch';
import HPanelTextField from '@/components/property/controls/HPanelTextField';

import { constants } from '@/lib/modeler/configurations';

export default {
    name: 'HSingleSelectPanel',

    components: {
        HExpansionPanel,
        HPanelColor,
        HPanelIcon,
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
