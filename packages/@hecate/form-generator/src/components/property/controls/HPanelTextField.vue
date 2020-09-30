<template>
    <v-list-item dense class="pa-0">
        <v-list-item-content>
            <v-text-field
                v-model="inputValue"
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
        value: { required: true },
        label: String,
        tooltip: String,
        disabled: { type: Boolean, default: false },
        placeholder: String,
    },

    computed: {
        inputValue() {
            return this.value;
        },
    },

    data: () => ({}),

    methods: {
        handleInput(event) {
            let value = event;
            this.$emit('input', value); //触发 input 事件，并传入新值
        },
    },
};
</script>
