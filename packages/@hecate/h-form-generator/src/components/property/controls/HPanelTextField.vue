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
    name: 'HPanelTextField',
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
