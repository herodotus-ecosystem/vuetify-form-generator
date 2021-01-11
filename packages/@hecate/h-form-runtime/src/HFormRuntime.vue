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
        <v-divider class="mb-2"></v-divider>
        <v-alert v-if="showMessage" :type="messageType"> {{ message }} </v-alert>
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
import { HFormRenderer } from '@hecate/h-form-renderer';

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
        formSchema: {
            type: Object,
            default: () => {},
        },
    },

    data: () => ({
        model: {},
        showMessage: false,
        messageType: 'success',
        message: '',
    }),

    computed: {
        httpLibrary() {
            return this.axios || this.$http;
        },
    },

    mounted() {},

    methods: {
        saveOrUpdate() {
            this.$refs.observer.validate().then((validateResult) => {
                if (validateResult) {
                    if (this.httpLibrary) {
                        this.httpLibrary(this.createRequestObject()).then(function (response) {
                            if (response && response.status === '200') {
                                this.showMessage = true;
                                this.messageType = 'success';
                                this.message = '保存成功！';
                            } else {
                                this.showMessage = true;
                                this.messageType = 'error';
                                this.message = '保存失败！';
                            }
                        });
                    } else {
                        this.showMessage = true;
                        this.messageType = 'warning';
                        this.message = '无法找到请求发送组件！';
                    }
                }
            });
        },
        clear() {
            this.model = {};
            this.$refs.form.reset();
            this.$refs.observer.reset();
        },
        createRequestObject() {
            let request = {};
            request.methods = this.formSchema.requestMethods;
            request.url = this.formSchema.requestUrl;
            request.headers = { 'Content-type': this.formSchema.requestContentType };
            request.data = this.model;
            return request;
        },
    },
};
</script>
