<template>
    <h-panel-select
        :value="selectedValue"
        :items="available"
        :label="label"
        :tooltip="tooltip"
        :disabled="disabled"
        @input="handleInput"
    >
    </h-panel-select>
</template>

<script>
import HPanelSelect from './HPanelSelect.vue';

export default {
    name: 'HAlignContentSelect',
    components: {
        HPanelSelect,
    },

    props: {
        value: { required: true },
        label: String,
        tooltip: String,
        disabled: { type: Boolean, default: false },
    },

    computed: {
        selectedValue() {
            return this.value;
        },
    },

    data: () => ({
        available: ['start', 'center', 'end', 'space-around', 'space-between', 'stretch'],
    }),

    methods: {
        handleInput(event) {
            let value = event;
            this.$emit('input', value); //触发 input 事件，并传入新值
        },
    },
};
</script>
