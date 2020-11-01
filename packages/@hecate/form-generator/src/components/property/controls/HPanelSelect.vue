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
    name: 'HPanelSelect',
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
