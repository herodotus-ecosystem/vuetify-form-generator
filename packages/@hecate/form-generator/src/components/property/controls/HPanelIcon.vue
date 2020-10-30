<template>
    <v-list-item dense class="pa-1">
        <v-list-item-content>
            <v-list-item-title v-if="label">{{ label }}</v-list-item-title>
            <h-icon-list v-model="icon" dense :disabled="disabled"></h-icon-list>
        </v-list-item-content>
        <v-list-item-action v-if="tooltip">
            <v-tooltip left max-width="200px">
                <template v-slot:activator="{ on, attrs }">
                    <v-icon color="grey lighten-1" dark v-bind="attrs" v-on="on" :class="[label ? 'pt-3' : '']">
                        mdi-information</v-icon
                    >
                </template>
                <span>{{ tooltip }}</span>
            </v-tooltip>
        </v-list-item-action>
    </v-list-item>
</template>

<script>
import HIconList from '@hecate/h-icon-list';

export default {
    name: 'HPanelIcon',

    components: {
        HIconList,
    },

    props: {
        value: { type: String },
        label: String,
        tooltip: String,
        disabled: { type: Boolean, default: false },
    },

    data: () => ({
        icon: '',
    }),

    watch: {
        value: {
            handler(newValue, oldValue) {
                if (newValue) {
                    this.icon = newValue;
                }
            },
        },
        icon: {
            handler(newValue, oldValue) {
                this.$emit('input', newValue);
            },
        },
    },
};
</script>
