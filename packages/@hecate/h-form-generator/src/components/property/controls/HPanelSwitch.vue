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
    name: 'HPanelSwitch',
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
