<template>
    <v-list-item dense class="pa-0">
        <v-list-item-content>
            <v-text-field
                v-model="numberValue"
                :label="label"
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
    name: 'HPanelNumber',
    props: {
        value: [Number, String],
        label: String,
        tooltip: String,
        disabled: { type: Boolean, default: false },
        min: { type: [Number, String], default: 0 },
        max: { type: [Number, String], default: 10 },
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
