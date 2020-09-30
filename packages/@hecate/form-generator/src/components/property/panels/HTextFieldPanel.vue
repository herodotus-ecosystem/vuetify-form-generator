<template>
    <v-list>
        <h-panel-switch
            v-model="element[constants.annotations.xprops].autofocus"
            label="Auto Focus : 启用自动聚焦"
        ></h-panel-switch>
        <h-panel-switch
            v-model="element[constants.annotations.xprops].clearable"
            label="Clearable : 显示清除按钮"
        ></h-panel-switch>
        <h-panel-switch
            v-model="element[constants.annotations.xprops].dark"
            label="Dark : 使用深色主题"
        ></h-panel-switch>
        <h-panel-switch v-model="element[constants.annotations.xprops].dense" label="Dense : 紧凑显示"></h-panel-switch>
        <h-panel-switch
            v-model="element[constants.annotations.xprops].disabled"
            label="Disabled : 禁用输入"
        ></h-panel-switch>
        <h-panel-switch
            v-model="element[constants.annotations.xprops].filled"
            label="Filled : 使用填充样式"
            :disabled="element[constants.annotations.xprops].outlined || element[constants.annotations.xprops].solo"
        ></h-panel-switch>
        <h-panel-switch
            v-model="element[constants.annotations.xprops].flat"
            label="Flat : 移除阴影"
            tooltip="当使用solo或者solo-inverted属性时，移除添加到元素的标高（阴影）"
        ></h-panel-switch>
        <h-panel-switch
            v-model="element[constants.annotations.xprops][constants.tags.fullwidth]"
            label="Full Width : 全宽度"
            tooltip="指定输入类型为全宽度"
        ></h-panel-switch>
        <h-panel-switch
            v-model="element[constants.annotations.xprops][constants.tags.hidedetails]"
            label="Hide Details : 隐藏细节区域"
        ></h-panel-switch>
        <h-panel-switch
            v-model="element[constants.annotations.xprops].light"
            label="Light : 使用浅色主题"
        ></h-panel-switch>
        <h-panel-switch
            v-model="element[constants.annotations.xprops].loading"
            label="Loading : 加载状态"
            tooltip="显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。"
        ></h-panel-switch>
        <h-panel-switch
            v-model="element[constants.annotations.xprops].outlined"
            label="Outlined : 显示轮廓"
        ></h-panel-switch>
        <h-panel-switch
            v-model="element[constants.annotations.xprops][constants.tags.persistenthint]"
            label="Persistent Hint : 强制显示提示"
            tooltip="强制提示总是可见的"
        ></h-panel-switch>
        <h-panel-switch
            v-model="element[constants.annotations.xprops].readonly"
            label="Readonly : 只读状态"
        ></h-panel-switch>
        <h-panel-switch v-model="element[xprops].reverse" label="Reverse : 反转输入方向"></h-panel-switch>
        <h-panel-switch
            v-model="element[xprops].rounded"
            label="Rounded : 椭圆边框"
            :disabled="!element[xprops].filled && !element[xprops].outlined && !element[xprops].solo"
            dense
            :class="constants.class.switch"
            tooltip="向输入添加边框半径, 需要配合设置Filled、Outlined、或Solo任意一项"
        ></h-panel-switch>
        <h-panel-switch
            v-model="element[xprops].shaped"
            label="Shaped : 圆角边框"
            tooltip="如果Outlined则为圆形，如果Filled则增加border-radius。必须与Outlined 或Filled 一起使用"
            :disabled="!element[xprops].outlined && !element[xprops].filled && !element[xprops].solo"
        ></h-panel-switch>
        <h-panel-switch
            v-model="element[xprops][constants.tags.singleline]"
            label="Single Line : 标题不移动"
            tooltip="标签在 focus/dirty 上不移动"
        ></h-panel-switch>
        <h-panel-switch
            v-model="element[xprops].solo"
            label="Solo : 凸起样式"
            :disabled="element[xprops].filled"
        ></h-panel-switch>
        <h-panel-switch
            v-model="element[xprops][constants.tags.soloinverted]"
            label="Solo Inverted : 单反"
            tooltip="减少元素的不透明度，知道获得焦点"
        ></h-panel-switch>
        <h-panel-switch
            v-model="element[xprops].type"
            label="Password: 启用密码输入"
            true-value="password"
            false-value="text"
        ></h-panel-switch>
        <h-panel-switch
            v-model="element[xprops][constants.tags.validateonblur]"
            label="Validate On Blur : 延迟验证"
            tooltip="延迟验证直到失去焦点的事件被触发"
        ></h-panel-switch>
    </v-list>
</template>

<script>
import HPanelSwitch from '@/components/property/controls/HPanelSwitch';
import { constants } from '@/lib/modeler/configurations';

export default {
    name: 'HTextFieldPanel',
    components: {
        HPanelSwitch,
    },

    props: {
        element: {
            type: Object,
            default: () => {},
        },
    },

    created() {},

    data: () => ({
        constants,
        xprops: constants.annotations.xprops,
    }),

    methods: {},
};
</script>
