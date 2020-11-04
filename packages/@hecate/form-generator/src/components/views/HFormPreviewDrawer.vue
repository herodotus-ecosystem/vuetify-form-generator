<template>
    <v-navigation-drawer v-model="drawer" fixed temporary bottom width="100%">
        <v-toolbar dark class="blue darken-3" dense>
            <v-btn icon dark @click="drawer = false">
                <v-icon>mdi-close-box</v-icon>
            </v-btn>
            <v-toolbar-title>表单预览</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn dark text @click="drawer = false">Save</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-card>
            <v-row>
                <v-col cols="12" md="6" class="pa-0">
                    <v-card flat>
                        <h-code-mirror v-model="config" read-only></h-code-mirror>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6">
                    <v-form>
                        <h-form-renderer v-model="model" :schema="schema"></h-form-renderer>
                    </v-form>
                </v-col>
            </v-row>
        </v-card>
    </v-navigation-drawer>
</template>

<script>
import HCodeMirror from '@hecate/h-code-mirror';
import { HFormRenderer } from '@hecate/form-renderer';

export default {
    name: 'HFormPreviewDrawer',

    components: {
        HCodeMirror,
        HFormRenderer
    },

    props: {
        value: {
            type: Boolean,
            default: false
        },
        source: {
            type: String,
            default: ''
        }
    },

    data: () => ({
        drawer: false,
        schema: {},
        model: {},
        config: ''
    }),

    watch: {
        value: {
            handler(newValue, oldValue) {
                this.drawer = newValue;
            },
            immediate: true
        },
        drawer: {
            handler(newValue, oldValue) {
                this.$emit('input', newValue);
            }
        },
        source: {
            handler(newValue, oldValue) {
                if (newValue) {
                    this.schema = JSON.parse(newValue);
                    this.config = newValue;
                }
            },
            immediate: true
        }
    },

    methods: {}
};
</script>
