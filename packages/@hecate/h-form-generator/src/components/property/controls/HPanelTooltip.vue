<template>
    <v-list-item-action v-if="content">
        <v-tooltip left max-width="200px">
            <template v-slot:activator="{ on, attrs }">
                <v-icon color="grey lighten-1" dark v-bind="attrs" v-on="on">mdi-information</v-icon>
            </template>
            <span>{{ content }}</span>
        </v-tooltip>
    </v-list-item-action>
</template>

<script>
export default {
    name: 'HPanelTooltip',

    props: {
        content: {
            type: String,
            default: '',
        },
    },
};
</script>
