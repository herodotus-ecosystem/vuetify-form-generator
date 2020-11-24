<template>
    <v-container>
        <v-row>
            <v-col class="canvas-body">
                <v-card class="ml-1 mr-1">
                    <slot></slot>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'HCanvasContainer',

    // props: {
    //     formSettings: { required: true }
    // },

    created() {},

    data: () => ({}),
};
</script>
