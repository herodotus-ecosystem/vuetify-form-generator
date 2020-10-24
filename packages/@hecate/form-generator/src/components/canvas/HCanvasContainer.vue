<template>
    <v-container>
        <v-row>
            <v-col class="canvas-body">
                <v-card>
                    <v-form>
                        <slot></slot>
                    </v-form>
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

    data: () => ({})
};
</script>
