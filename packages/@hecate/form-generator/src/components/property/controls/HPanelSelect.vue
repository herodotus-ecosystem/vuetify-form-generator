<template>
    <v-list-item dense class="pa-0">
        <v-list-item-content>
            <v-select
                :value="selectedValue"
                :items="items"
                :label="label"
                outlined
                dense
                hide-details
                clearable
                @input="handleInput"
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

    computed: {
        selectedValue() {
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
