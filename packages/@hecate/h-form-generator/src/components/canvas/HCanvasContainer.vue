<template>
    <v-container>
        <v-row>
            <v-col class="canvas-body">
                <v-card class="ml-1 mr-1">
                    <v-toolbar dense flat>
                        <h-button icon icon-name="mdi-delete-empty" tooltip="清空" @click="empty"></h-button>
                    </v-toolbar>
                    <slot></slot>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { HButton } from '@hecate/h-button';

export default {
    name: 'HCanvasContainer',

    components: {
        HButton,
    },

    // props: {
    //     formSettings: { required: true }
    // },

    created() {},

    data: () => ({}),

    methods: {
        empty() {
            this.$emit('empty');
        },
    },
};
</script>
