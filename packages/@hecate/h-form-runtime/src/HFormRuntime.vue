<template>
    <v-card class="pa-2">
        <v-toolbar flat>
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-icon tile color="teal" large class="mr-2" v-on="on">mdi-clipboard-edit</v-icon>
                </template>
                <span>返回</span>
            </v-tooltip>
            <v-toolbar-title class="pl-0 font-weight-light">{{ title }}</v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-row>
            <v-col>
                <ValidationObserver ref="observer">
                    <v-form ref="form">
                        <h-form-renderer v-model="model" :schema="schema"></h-form-renderer>
                        <v-btn color="primary" class="mr-4" @click="saveOrUpdate">保存</v-btn>
                        <v-btn color="warning" class="mr-4" @click="clear">重置</v-btn>
                    </v-form>
                </ValidationObserver>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import HFormRenderer from '@hecate/h-form-renderer';

export default {
    name: 'HFormRuntime',

    components: {
        ValidationObserver,
        HFormRenderer,
    },

    props: {
        schema: {
            type: Object,
            default: () => {},
        },
        title: {
            type: String,
            default: '动态表单',
        },
    },

    data: () => ({
        model: {},
    }),

    methods: {
        saveOrUpdate() {
            this.$refs.observer.validate().then((validateResulte) => {
                if (validateResulte) {
                    console.info("Cannot find the 'api-object' property!");
                }
            });
        },
        clear() {
            this.model = {};
            this.$refs.form.reset();
            this.$refs.observer.reset();
        },
    },
};
</script>
