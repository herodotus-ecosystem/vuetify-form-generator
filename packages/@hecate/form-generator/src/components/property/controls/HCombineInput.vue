<template>
    <v-list-item dense class="pa-0">
        <v-list-item-content>
            <v-switch
                v-if="isSwitch"
                :value="inputValue"
                :input-value="value"
                :label="label"
                dense
                inset
                hide-details
                :disabled="disabled"
                :true-value="trueValue"
                :false-value="falseValue"
                @change="handleInput"
                class="mt-0 ml-2 pt-0"
            ></v-switch>
            <v-text-field
                v-else
                :value="inputValue"
                :input-value="value"
                :placeholder="placeholder"
                :label="label"
                outlined
                dense
                hide-details
                clearable
                :disabled="disabled"
                @input="handleInput"
                class="ml-1 pr-2"
            ></v-text-field>
        </v-list-item-content>
        <v-list-item-icon class="align-self-center ml-0 pa-0 pr-2">
            <v-icon @click="isSwitch = !isSwitch">{{ isSwitch ? 'mdi-form-textbox' : 'mdi-toggle-switch' }}</v-icon>
        </v-list-item-icon>
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
    name: 'HCombineInput',
    props: {
        value: { required: true },
        label: String,
        tooltip: String,
        disabled: { type: Boolean, default: false },
        placeholder: String,
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
        inputValue() {
            return this.value;
        },
    },

    data: () => ({
        isSwitch: false,
    }),

    methods: {
        handleInput(event) {
            let value = event;
            this.$emit('input', value); //触发 input 事件，并传入新值
        },
    },
};
</script>
