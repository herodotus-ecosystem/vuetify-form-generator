<template>
    <v-list-item dense class="pa-0">
        <v-list-item-content class="pb-0">
            <v-form ref="form" v-model="valid">
                <v-text-field
                    v-model="min"
                    label="Min"
                    :disabled="disabled"
                    :rules="minRule"
                    placeholder="请输入min值"
                    type="number"
                    outlined
                    dense
                    clearable
                    required
                    min="0"
                    class="ml-1 mb-0 pr-2"
                ></v-text-field>
                <v-text-field
                    v-model="max"
                    label="Max"
                    :disabled="disabled"
                    :rules="maxRule"
                    placeholder="请输入Max值"
                    type="number"
                    outlined
                    dense
                    clearable
                    required
                    class="ml-1 mb-0 pr-2"
                ></v-text-field>
            </v-form>
        </v-list-item-content>
        <v-list-item-action v-if="tooltip">
            <v-tooltip left max-width="200px">
                <template v-slot:activator="{ on, attrs }">
                    <v-icon color="grey lighten-1" dark v-bind="attrs" v-on="on">mdi-information</v-icon>
                </template>
                <span>{{ tooltip }}</span>
            </v-tooltip>
        </v-list-item-action>
    </v-list-item>
</template>

<script>
export default {
    name: 'HPanelBetween',
    props: {
        value: String,
        label: String,
        tooltip: String,
        disabled: { type: Boolean, default: false },
    },

    data: () => ({
        valid: true,
        betweenParam: '',
        min: '',
        max: '',
    }),

    computed: {
        minRule() {
            const that = this;
            return [
                function (value) {
                    if (!value) {
                        return '请设置min参数的值';
                    } else {
                        let minInt = parseInt(value);
                        if (minInt < 0) {
                            return 'min参数的值必须要大于等于0';
                        }

                        if (that.max) {
                            if (minInt >= parseInt(that.max)) {
                                return 'min值必须小于max值';
                            } else {
                                return true;
                            }
                        } else {
                            return true;
                        }
                    }
                },
            ];
        },
        maxRule() {
            const that = this;
            return [
                function (value) {
                    if (!value) {
                        return '请设置max参数的值';
                    } else {
                        let maxInt = parseInt(value);
                        if (maxInt <= 0) {
                            return 'max参数的值必须要大于0';
                        }

                        if (that.min) {
                            if (maxInt <= parseInt(that.min)) {
                                return 'max值必须大于min值';
                            } else {
                                that.valid = true;
                                return true;
                            }
                        } else {
                            that.valid = true;
                            return true;
                        }
                    }
                },
            ];
        },
    },

    watch: {
        value: {
            handler(newValue, oldValue) {
                this.betweenParam = newValue;
                this.setParamValue(this.betweenParam);
            },
            immediate: true,
        },
        betweenParam: {
            handler(newValue, oldValue) {
                this.$emit('input', newValue);
            },
        },
        min: {
            handler(newValue, oldValue) {
                this.betweenParam = newValue + ',' + this.max;
            },
        },
        max: {
            handler(newValue, oldValue) {
                this.betweenParam = this.min + ',' + newValue;
            },
        },
    },

    methods: {
        validate() {
            this.$refs.form.validate();
        },
        reset() {
            this.$refs.form.reset();
        },
        setParamValue(value) {
            if (value && value.search(',') != -1) {
                let temp = this.$lib.lodash.split(value, ',');
                if (temp) {
                    this.min = temp[0];
                    this.max = temp[1];
                }
            }
        },
    },
};
</script>
