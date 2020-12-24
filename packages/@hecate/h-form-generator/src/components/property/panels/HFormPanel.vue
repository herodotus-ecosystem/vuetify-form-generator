<template>
    <v-expansion-panels focusable mandatory class="mb-4">
        <h-expansion-panel index="request" header="请求">
            <h-panel-select
                v-model="formSettings.contentType"
                label="Content Type: 输入类型"
                tooltip="设置不同的Content Type类型"
                :items="constants.items.contentType"
            ></h-panel-select>
            <v-text-field outlined dense label="表单模型" placeholder="请输入数据模型" />
        </h-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import { HExpansionPanel } from '../layouts';
import { HPanelColor, HPanelIcon, HPanelNumber, HPanelSelect, HPanelSwitch, HPanelTextField } from '../controls';

import { constants } from '../../../lib/modeler/configurations';

export default {
    name: 'HFormPanel',

    components: {
        HExpansionPanel,
        HPanelSelect
    },

    props: {
        schema: {
            type: Object,
            default: () => {}
        }
    },

    data: () => ({
        constants,
        formSettings: {}
    }),

    watch: {
        schema: {
            handler(newValue, oldValue) {
                this.formSettings = newValue;
            },
            immediate: true
        }
    }
};
</script>
