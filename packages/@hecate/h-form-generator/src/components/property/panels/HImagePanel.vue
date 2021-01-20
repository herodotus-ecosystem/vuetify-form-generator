<template>
    <v-expansion-panels focusable mandatory class="mb-4">
        <h-expansion-panel index="contents" header="内容">
            <h-panel-text-field
                v-model="properties.src"
                label="Src：图像的 URL"
                tooltip="图像的 URL。这个属性是强制性的"
            ></h-panel-text-field>
            <h-panel-text-field
                v-model="properties.alt"
                label="Alt"
                tooltip="屏幕阅读器的备用文本。 留空以装饰图像"
            ></h-panel-text-field>
            <h-panel-text-field
                v-model="properties[constants.tags.LazySrc]"
                label="Lazy Src: 样式"
                tooltip="在等待主映像加载时显示的内容，通常是一个小型的base64编码的缩略图。有一个轻微的模糊滤镜应用。使用 vuetify-loader 来自动生成"
            ></h-panel-text-field>
            <h-panel-switch-text-field
                v-model="properties.transition"
                label="Transition : 过渡动画"
                tooltip="从 lazy-src 切换到 src 时要使用的过渡"
            ></h-panel-switch-text-field>
        </h-expansion-panel>
        <h-expansion-panel index="appearance" header="外观">
            <h-panel-text-field
                v-model="properties[constants.tags.ContentClass]"
                label="Content Class: 样式"
                tooltip="指定自定义样式到内容的Div上"
            ></h-panel-text-field>
            <h-panel-number
                v-model="properties.height"
                label="Height : 高度"
                min="1"
                max="2000"
                step="10"
                tooltip="设定组件的高度"
            ></h-panel-number>
            <h-panel-number
                v-model="properties.width"
                label="Width : 宽度"
                min="1"
                max="2000"
                step="10"
                tooltip="设定组件的宽度"
            ></h-panel-number>
            <h-panel-number
                v-model="properties[constants.tags.MaxHeight]"
                label="Max Height : 最大高度"
                min="1"
                max="2000"
                step="10"
                tooltip="设定组件的最大高度"
            ></h-panel-number>
            <h-panel-number
                v-model="properties[constants.tags.MaxWidth]"
                label="Max Width : 最大宽度"
                min="1"
                max="2000"
                step="10"
                tooltip="设定组件的最大宽度"
            ></h-panel-number>
            <h-panel-number
                v-model="properties[constants.tags.MinHeight]"
                label="Min Height : 最小高度"
                min="1"
                max="2000"
                step="10"
                tooltip="设定组件的最小高度"
            ></h-panel-number>
            <h-panel-number
                v-model="properties[constants.tags.MinWidth]"
                label="Min Width : 最小宽度"
                min="1"
                max="2000"
                step="10"
                tooltip="设定组件的最小宽度"
            ></h-panel-number>
            <h-panel-switch v-model="properties.contain" label="Contain" tooltip="防止图像不合适时被裁剪">
            </h-panel-switch>
            <h-panel-switch
                v-model="properties.eager"
                label="Eager"
                tooltip="将强制组件内容在加载时呈现。如果存在内容的话，则不会在 DOM 中渲染，如果你想优化 SEO，这是非常有用的"
            ></h-panel-switch>
            <h-panel-text-field
                v-model="properties.gradient"
                label="Gradient : 增加渐变"
                tooltip="将渐变叠加到图像上。 仅支持 linear-gradient 语法，其他任何操作都应使用类完成（请参见示例"
            ></h-panel-text-field>
            <h-panel-text-field
                v-model="properties.sizes"
                label="Sizes"
                tooltip="使用 srcset，请参见 MDN"
            ></h-panel-text-field>
            <h-panel-text-field
                v-model="properties.srcset"
                label="Srcset"
                tooltip="根据设备大小使用的一组备用图像。"
            ></h-panel-text-field>
            <h-panel-switch v-model="properties.dark" label="Dark : 使用深色主题"> </h-panel-switch>
            <h-panel-switch v-model="properties.light" label="Light : 使用浅色主题"></h-panel-switch>
        </h-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import { HExpansionPanel } from '../layouts';
import { HPanelTextField, HPanelSwitch, HPanelNumber, HPanelSwitchTextField } from '../controls';

import { constants } from '../../../lib/modeler/configurations';

export default {
    name: 'HImagePanel',
    components: {
        HExpansionPanel,
        HPanelTextField,
        HPanelSwitch,
        HPanelNumber,
        HPanelSwitchTextField,
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
