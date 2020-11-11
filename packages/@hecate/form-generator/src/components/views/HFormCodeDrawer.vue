<template>
    <v-navigation-drawer v-model="drawer" fixed temporary hide-overlay bottom width="100%">
        <v-toolbar dark class="blue darken-3" dense>
            <v-btn icon dark @click="drawer = false">
                <v-icon>mdi-close-box</v-icon>
            </v-btn>
            <v-toolbar-title>查看Vue代码</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn dark text @click="drawer = false">Save</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <h-code-mirror v-model="code" mode="vue" read-only></h-code-mirror>
    </v-navigation-drawer>
</template>

<script>
import HCodeMirror from '@hecate/h-code-mirror';

export default {
    name: 'HFormCodeDrawer',

    components: {
        HCodeMirror
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
        code: ''
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
                this.code = newValue;
            },
            immediate: true
        }
    },

    methods: {}
};
</script>
