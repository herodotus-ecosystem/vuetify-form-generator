<template>
    <v-hover v-slot:default="{ hover }">
        <v-card
            :elevation="isHover(hover)"
            class="ma-2 canvas-item-body"
            dense
            @click="canvasItemActive"
            @mouseenter="canvasItemHover"
        >
            <v-list-item>
                <v-list-item-content>
                    <h-form-renderer v-model="model" :schema="schema" />
                </v-list-item-content>
                <v-list-item-action v-if="hover" class="justify-start">
                    <v-btn x-small icon @click.stop="canvasItemCopy">
                        <v-icon color="primary">mdi-content-duplicate</v-icon>
                    </v-btn>
                    <v-btn x-small icon @click.stop="canvasItemDelete">
                        <v-icon color="error">mdi-close-box</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-card>
    </v-hover>
</template>

<script>
import { HFormRenderer } from '@hecate/form-renderer';

export default {
    name: 'HDraggableItem',

    components: {
        HFormRenderer,
    },

    props: {
        schema: {
            type: Object,
            default: () => {},
        },
        activeItemId: String,
    },

    computed: {
        isHover() {
            return function (hover) {
                return hover ? 12 : 0;
            };
        },
    },

    data: () => ({
        model: {},
    }),

    methods: {
        canvasItemActive() {
            this.$emit('active', this.schema);
        },
        canvasItemCopy() {
            this.$emit('copy', this.schema);
        },
        canvasItemDelete() {
            this.$emit('delete', this.schema.configs.formId);
        },
        canvasItemHover() {
            this.$emit('hover', this.schema);
        },
    },
};
</script>
