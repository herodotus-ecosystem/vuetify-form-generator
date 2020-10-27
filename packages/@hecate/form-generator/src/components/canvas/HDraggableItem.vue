<template>
    <v-hover v-slot:default="{ hover }">
        <v-card
            :elevation="hover ? 12 : 2"
            :class="['ma-2', isActive && !hover ? 'canvas-item-selected' : 'canvas-item-body']"
            dense
            @click="canvasItemActive"
        >
            <v-list-item>
                <v-list-item-content>
                    <h-form-renderer v-model="model" :schema="schema" />
                </v-list-item-content>
                <v-list-item-action v-if="isActive" class="justify-start">
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
        activeItemId: [String, Number],
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
        isActive: false,
    }),

    watch: {
        activeItemId: {
            handler(newValue, oldValue) {
                this.isActive = this.schema.configs.renderKey === newValue;
            },
        },
    },

    methods: {
        canvasItemActive() {
            this.isActive = true;
            this.$emit('active', this.schema);
        },
        canvasItemCopy() {
            this.$emit('copy', this.schema);
        },
        canvasItemDelete() {
            this.$emit('delete', this.schema.configs.formId);
        },
    },
};
</script>
