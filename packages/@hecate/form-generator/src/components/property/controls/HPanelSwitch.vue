<template>
    <v-list-item dense class="pa-0">
        <v-list-item-content>
            <v-switch
                :value="switchValue"
                :input-value="value"
                :label="label"
                dense
                inset
                hide-details
                :disabled="disabled"
                :true-value="trueValue"
                :false-value="falseValue"
                @change="handleChange"
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
        value: { required: true },
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

    computed: {
        switchValue() {
            return this.value;
        },
    },

    data: () => ({}),

    methods: {
        handleChange(event) {
            let value = event;
            this.$emit('input', value); //触发 input 事件，并传入新值
        },
    },
};
</script>
