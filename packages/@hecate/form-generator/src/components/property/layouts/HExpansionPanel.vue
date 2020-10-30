<template>
    <v-expansion-panel :key="index">
        <v-expansion-panel-header>{{ header }}</v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-list class="ml-2">
                <slot></slot>
            </v-list>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
export default {
    name: 'HExpansionPanel',

    props: {
        index: { type: String, required: true },
        header: { type: String, required: true },
    },
};
</script>
