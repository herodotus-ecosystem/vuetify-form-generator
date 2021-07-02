<template>
    <v-list-item dense class="pa-0">
        <v-list-item-content>
            <v-switch
                v-model="checkedValue"
                :label="label"
                :disabled="disabled"
                :true-value="trueValue"
                :false-value="falseValue"
                dense
                inset
                hide-details
                class="mt-0 ml-2 pt-0"
            ></v-switch>
        </v-list-item-content>
        <h-panel-tooltip :content="tooltip"></h-panel-tooltip>
    </v-list-item>
</template>

<script>
import HPanelTooltip from './HPanelTooltip.vue';

export default {
    name: 'HPanelSwitch',

    components: {
        HPanelTooltip,
    },

    props: {
        value: Boolean,
        label: String,
        tooltip: String,
        disabled: { type: Boolean, default: false },
        trueValue: {
            type: [String, Boolean, Array, Object],
            default: true,
        },
        falseValue: {
            type: [String, Boolean, Array, Object],
            default: false,
        },
    },

    data: () => ({
        checkedValue: false,
    }),

    watch: {
        value: {
            handler(newValue, oldValue) {
                this.checkedValue = newValue;
            },
            immediate: true,
        },
        checkedValue: {
            handler(newValue, oldValue) {
                this.$emit('input', newValue);
            },
        },
    },
};
</script>
