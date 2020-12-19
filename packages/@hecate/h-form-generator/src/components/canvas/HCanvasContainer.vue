<template>
    <v-container>
        <v-row>
            <v-col class="canvas-body">
                <v-card class="ml-1 mr-1">
                    <v-card-actions>
                        <v-btn icon>
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon>mdi-bookmark</v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </v-card-actions>
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
