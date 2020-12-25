<template>
    <v-list-item dense class="pa-0">
        <v-list-item-content>
            <v-combobox
                v-model="selectedValues"
                :items="selectedValues"
                :label="label"
                :disabled="disabled"
                chips
                clearable
                dense
                deletable-chips
                hide-no-data
                hide-details
                multiple
                outlined
                small-chips
                class="ml-1 pr-2"
            ></v-combobox>
        </v-list-item-content>
        <h-panel-tooltip :content="tooltip"></h-panel-tooltip>
    </v-list-item>
</template>

<script>
import HPanelTooltip from './HPanelTooltip.vue';

export default {
    name: 'HPanelArray',

    components: {
        HPanelTooltip,
    },

    props: {
        value: {
            type: Array,
            default: () => [],
        },
        label: String,
        tooltip: String,
        disabled: { type: Boolean, default: false },
    },

    data: () => ({
        selectedValues: [],
    }),

    watch: {
        value: {
            handler(newValue, oldValue) {
                this.selectedValues = newValue;
            },
            immediate: true,
        },
        selectedValues: {
            handler(newValue, oldValue) {
                this.$emit('input', newValue);
            },
        },
    },
};
</script>
