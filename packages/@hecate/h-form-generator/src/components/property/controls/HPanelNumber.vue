<template>
    <v-list-item dense class="pa-0">
        <v-list-item-content>
            <v-text-field
                v-model="numberValue"
                :label="label"
                :disabled="disabled"
                :min="min"
                :max="max"
                :step="step"
                outlined
                dense
                hide-details
                type="number"
                class="ml-1 pr-2"
            ></v-text-field>
        </v-list-item-content>
        <h-panel-tooltip :content="tooltip"></h-panel-tooltip>
    </v-list-item>
</template>

<script>
import HPanelTooltip from './HPanelTooltip.vue';

export default {
    name: 'HPanelNumber',

    components: {
        HPanelTooltip,
    },

    props: {
        value: [Number, String],
        label: String,
        tooltip: String,
        disabled: { type: Boolean, default: false },
        min: { type: [Number, String], default: 0 },
        max: { type: [Number, String], default: 100 },
        step: { type: [Number, String], default: 1 },
    },

    data: () => ({
        numberValue: null,
    }),

    watch: {
        value: {
            handler(newValue, oldValue) {
                this.numberValue = newValue;
            },
            immediate: true,
        },
        numberValue: {
            handler(newValue, oldValue) {
                this.$emit('input', newValue);
            },
        },
    },
};
</script>
