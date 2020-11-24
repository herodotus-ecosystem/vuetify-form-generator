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
        <v-list-item-action v-if="tooltip">
            <v-tooltip left max-width="200px">
                <template v-slot:activator="{ on, attrs }">
                    <v-icon color="grey lighten-1" dark v-bind="attrs" v-on="on">mdi-information</v-icon>
                </template>
                <span>{{ tooltip }}</span>
            </v-tooltip>
        </v-list-item-action>
    </v-list-item>
</template>

<script>
export default {
    name: 'HPanelArray',
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
