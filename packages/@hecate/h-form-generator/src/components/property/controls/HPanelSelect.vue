<template>
    <v-list-item dense class="pa-0">
        <v-list-item-content>
            <v-select
                v-model="selectedValue"
                :items="items"
                :label="label"
                :disabled="disabled"
                outlined
                dense
                hide-details
                clearable
                no-data-text="空"
                class="ml-1 pr-2"
            ></v-select>
        </v-list-item-content>
        <h-panel-tooltip :content="tooltip"></h-panel-tooltip>
    </v-list-item>
</template>

<script>
import HPanelTooltip from './HPanelTooltip.vue';

export default {
    name: 'HPanelSelect',

    components: {
        HPanelTooltip,
    },

    props: {
        value: { required: true },
        label: String,
        tooltip: String,
        disabled: { type: Boolean, default: false },
        items: {
            type: Array,
            default: () => [],
        },
    },

    data: () => ({
        selectedValue: '',
    }),

    watch: {
        value: {
            handler(newValue, oldValue) {
                this.selectedValue = newValue;
            },
            immediate: true,
        },
        selectedValue: {
            handler(newValue, oldValue) {
                this.$emit('input', newValue);
            },
        },
    },
};
</script>
