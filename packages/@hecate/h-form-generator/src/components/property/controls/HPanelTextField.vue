<template>
    <v-list-item dense class="pa-0">
        <v-list-item-content>
            <v-text-field
                v-model="inputValue"
                :label="label"
                :disabled="disabled"
                outlined
                dense
                hide-details
                clearable
                class="ml-1 pr-2"
            ></v-text-field>
        </v-list-item-content>
        <h-panel-tooltip :content="tooltip"></h-panel-tooltip>
    </v-list-item>
</template>

<script>
import HPanelTooltip from './HPanelTooltip.vue';

export default {
    name: 'HPanelTextField',

    components: {
        HPanelTooltip,
    },

    props: {
        value: String,
        label: String,
        tooltip: String,
        disabled: { type: Boolean, default: false },
    },

    data: () => ({
        inputValue: '',
    }),

    watch: {
        value: {
            handler(newValue, oldValue) {
                this.inputValue = newValue;
            },
            immediate: true,
        },
        inputValue: {
            handler(newValue, oldValue) {
                this.$emit('input', newValue);
            },
        },
    },
};
</script>
