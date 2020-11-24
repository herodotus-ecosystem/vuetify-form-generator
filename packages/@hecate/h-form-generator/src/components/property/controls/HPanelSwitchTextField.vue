<template>
    <v-list-item dense class="pa-0">
        <v-list-item-content>
            <v-switch
                v-if="isSwitch"
                :value="content"
                :label="label"
                :disabled="disabled"
                :true-value="trueValue"
                :false-value="falseValue"
                dense
                inset
                hide-details
                class="mt-0 ml-2 pt-0"
            ></v-switch>
            <v-text-field
                v-else
                :value="content"
                :label="label"
                :disabled="disabled"
                outlined
                dense
                hide-details
                clearable
                class="ml-1 pr-2"
            ></v-text-field>
        </v-list-item-content>
        <v-list-item-icon class="align-self-center">
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on" @click="isSwitch = !isSwitch">{{
                        isSwitch ? 'mdi-form-textbox' : 'mdi-toggle-switch'
                    }}</v-icon>
                </template>
                <span>{{ isSwitch ? '切换为文本输入' : '切换为滑块输入' }}</span>
            </v-tooltip>
        </v-list-item-icon>
        <v-list-item-action v-if="tooltip" class="mr-1">
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
    name: 'HCombineBooleanInput',
    props: {
        value: [Boolean, String],
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
        content: null,
        isSwitch: false,
    }),

    watch: {
        value: {
            handler(newValue, oldValue) {
                this.content = newValue;
            },
        },
        content: {
            handler(newValue, oldValue) {
                this.$emit('input', newValue);
            },
        },
    },
};
</script>
