<template>
    <v-list-item dense class="pa-1">
        <v-list-item-content>
            <v-text-field
                v-model="color"
                :label="label"
                :disabled="disabled"
                outlined
                dense
                hide-details
                type="color"
            ></v-text-field>
        </v-list-item-content>
        <h-panel-tooltip :content="tooltip"></h-panel-tooltip>
    </v-list-item>
</template>

<script>
import HPanelTooltip from './HPanelTooltip.vue';

export default {
    name: 'HPanelColor',

    components: {
        HPanelTooltip,
    },

    props: {
        value: {
            type: String,
            default: '#ffffff',
        },
        label: String,
        tooltip: String,
        disabled: { type: Boolean, default: false },
    },

    data: () => ({
        color: '',
    }),

    watch: {
        value: {
            handler(newValue, oldValue) {
                this.color = newValue;
            },
            immediate: true,
        },
        color: {
            handler(newValue, oldValue) {
                this.$emit('input', newValue);
            },
        },
    },
};
</script>

<style lang="scss">
.v-text-field input {
    flex: 1 1 auto;
    line-height: 20px;
    padding: 0px 0 0px;
    max-width: 100%;
    min-width: 0px;
    width: 100%;
}
</style>
