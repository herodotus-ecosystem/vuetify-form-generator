<template>
    <v-list-item dense class="pa-1">
        <v-list-item-content>
            <v-text-field v-model="color" :label="label" outlined dense hide-details type="color"></v-text-field>
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
    name: 'HPanelColor',

    props: {
        value: { type: String },
        label: String,
        tooltip: String,
    },

    data: () => ({
        color: '',
    }),

    watch: {
        value: {
            handler(newValue, oldValue) {
                this.icon = newValue;
            },
        },
        color: {
            handler(newValue, oldValue) {
                this.$emit('input', newValue);
            },
        },
    },
};
</script>

<style lang="scss">
.v-text-field input {
    flex: 1 1 auto;
    line-height: 20px;
    padding: 0px 0 0px;
    max-width: 100%;
    min-width: 0px;
    width: 100%;
}
</style>
