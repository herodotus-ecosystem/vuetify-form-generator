<template>
    <v-expansion-panels focusable mandatory class="mb-4">
        <h-expansion-panel index="request" header="请求">
            <h-panel-select
                v-model="formSettings.contentType"
                label="Content Type: 输入类型"
                tooltip="设置不同的Content Type类型"
                :items="constants.items.contentType"
            ></h-panel-select>
            <h-panel-select
                v-model="formSettings.requestMethods"
                label="Content Type: 输入类型"
                tooltip="设置不同的Content Type类型"
                :items="constants.items.requestType"
            ></h-panel-select>
            <h-panel-text-field
                v-model="formSettings.requestUrl"
                label="请求地址"
                tooltip="发送请求的Url地址"
            ></h-panel-text-field>
            <h-panel-text-field
                v-model="formSettings.responseParam"
                label="响应参数"
                tooltip="指定从请求响应结果中获取值的参数，例如 data"
            ></h-panel-text-field>
        </h-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import { HExpansionPanel } from '../layouts';
import { HPanelSelect, HPanelTextField } from '../controls';

import { constants } from '../../../lib/modeler/configurations';

export default {
    name: 'HFormPanel',

    components: {
        HExpansionPanel,
        HPanelSelect,
        HPanelTextField,
    },

    props: {
        schema: {
            type: Object,
            default: () => {},
        },
    },

    data: () => ({
        constants,
        formSettings: {},
    }),

    watch: {
        schema: {
            handler(newValue, oldValue) {
                this.formSettings = newValue;
            },
            immediate: true,
        },
    },
};
</script>
