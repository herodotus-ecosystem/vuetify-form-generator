<template>
    <v-list>
        <h-panel-switch
            v-model="properties[constants.tag.autogrow]"
            label="Auto Grow : 自动增长"
            tooltip="根据文本数量自动增长文本"
        ></h-panel-switch>
        <h-panel-switch v-model="properties.autofocus" label="Auto Focus : 启用自动聚焦"></h-panel-switch>
        <h-panel-switch v-model="properties.clearable" label="Clearable : 显示清除按钮"></h-panel-switch>
        <h-panel-switch v-model="properties.dark" label="Dark : 使用深色主题"></h-panel-switch>
        <h-panel-switch v-model="properties.dense" label="Dense : 紧凑显示"></h-panel-switch>
        <h-panel-switch v-model="properties.disabled" label="Disabled : 禁用输入"></h-panel-switch>
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
            v-model="properties[constants.tag.fullwidth]"
            label="Full Width : 全宽度"
            tooltip="指定输入类型为全宽度"
        ></h-panel-switch>
        <h-panel-switch
            v-model="properties[constants.tag.hidedetails]"
            label="Hide Details : 隐藏细节区域"
        ></h-panel-switch>
        <h-panel-switch v-model="properties.light" label="Light : 使用浅色主题"></h-panel-switch>
        <h-panel-switch
            v-model="properties.loading"
            label="Loading : 加载状态"
            tooltip="显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。"
        ></h-panel-switch>
        <h-panel-switch
            v-model="properties[constants.tag.noresize]"
            label="No Resize : 移除调整大小的句柄"
        ></h-panel-switch>
        <h-panel-switch v-model="properties.outlined" label="Outlined : 显示轮廓"></h-panel-switch>
        <h-panel-switch
            v-model="properties[constants.tag.persistenthint]"
            label="Persistent Hint : 强制显示提示"
            tooltip="强制提示总是可见的"
        ></h-panel-switch>
        <h-panel-switch v-model="properties.readonly" label="Readonly : 只读状态"></h-panel-switch>
        <h-panel-switch v-model="properties.reverse" label="Reverse : 反转输入方向"></h-panel-switch>
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
            v-model="properties[constants.tag.singleline]"
            label="Single Line : 标题不移动"
            tooltip="标签在 focus/dirty 上不移动"
        ></h-panel-switch>
        <h-panel-switch
            v-model="properties.solo"
            label="Solo : 凸起样式"
            :disabled="properties.filled"
        ></h-panel-switch>
        <h-panel-switch
            v-model="properties[constants.tag.soloinverted]"
            label="Solo Inverted : 单反"
            tooltip="减少元素的不透明度，知道获得焦点"
        ></h-panel-switch>
        <h-panel-switch
            v-model="properties[constants.tag.validateonblur]"
            label="Validate On Blur : 延迟验证"
            tooltip="延迟验证直到失去焦点的事件被触发"
        ></h-panel-switch>
    </v-list>
</template>

<script>
import HPanelSwitch from '../control/HPanelSwitch';
import { attribute } from '@/lib/modeler/settings';

export default {
    name: 'HSelectPanel',
    components: {
        HPanelSwitch,
    },

    props: {
        properties: {
            type: Object,
            default: () => {},
        },
    },

    data: () => ({
        constants: attribute,
    }),
};
</script>
