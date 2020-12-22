<template>
    <h-expansion-panel index="rules" header="校验">
        <v-subheader>已配置规则</v-subheader>
        <v-list-item-group color="primary" class="mb-1">
            <v-list-item dense v-for="(item, i) in selectedItems" :key="i" class="pl-2 pr-2">
                <v-list-item-avatar size="28">
                    <v-icon small class="error lighten-1 white--text" @click="removeSelectedItem(item)"
                        >mdi-delete-alert</v-icon
                    >
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.message"></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
        <v-divider></v-divider>
        <v-list-item dense class="pa-0">
            <v-list-item-content>
                <v-row>
                    <v-col class="pt-0 pb-0">
                        <v-select
                            v-model="selectedRule"
                            :items="ruleItems"
                            item-value="type"
                            item-text="name"
                            label="规则"
                            outlined
                            dense
                            clearable
                            return-object
                            no-data-text="空"
                            class="ml-1 pr-2"
                        ></v-select>
                        <component :is="ruleParamSettingPanel" ref="rulePanel" v-model="ruleParam"></component>
                        <v-btn color="primary" small class="ml-1" :disabled="isButtonDisabled" @click="addRule"
                            >添加</v-btn
                        >
                    </v-col>
                </v-row>
            </v-list-item-content>
        </v-list-item>
    </h-expansion-panel>
</template>

<script>
import HExpansionPanel from '../../../components/property/layouts/HExpansionPanel.vue';
import HPanelBetween from '../../../components/property/validates/HPanelBetween.vue';
export default {
    name: 'HRuleExpansionPanel',

    components: {
        HExpansionPanel,
        HPanelBetween,
    },

    props: {
        value: {
            type: String,
            default: '',
        },
    },

    data: () => ({
        expressions: '',
        ruleItems: [],
        ruleParamSettingPanel: '',
        ruleParam: '',
        selectedItems: [],
        selectedRule: {},
    }),

    watch: {
        value: {
            handler(newValue, oldValue) {
                this.expressions = newValue;
                if (this.$lib.lodash.isEmpty(this.ruleItems)) {
                    this.ruleItems = this.$rules;
                }
                this.readExpressions(this.expressions);
            },
            immediate: true,
        },
        expressions: {
            handler(newValue, oldValue) {
                this.$emit('input', newValue);
            },
        },
        selectedRule: {
            handler(newValue, oldValue) {
                if (newValue) {
                    this.changeRuleSettingPanel(newValue.type);
                } else {
                    this.ruleParamSettingPanel = '';
                    this.ruleParam = '';
                }
            },
        },
        selectedItems: {
            handler(newValue, oldValue) {
                this.expressions = this.constructExpression(newValue);
            },
        },
    },

    computed: {
        isButtonDisabled() {
            return this.$lib.lodash.isEmpty(this.selectedRule) ? true : false;
        },
    },

    methods: {
        changeRuleSettingPanel(type) {
            let panel = '';
            let param = '';
            switch (type) {
                case 'between':
                    panel = 'HPanelBetween';
                    param = this.readSelectedItemParam(type);
                    break;
                default:
                    panel = '';
                    param = '';
                    break;
            }
            this.ruleParamSettingPanel = panel;
            this.ruleParam = param;
        },

        readSelectedItemParam(type) {
            let selectedItem = this.$lib.lodash.find(this.selectedItems, function (i) {
                return i.type === type;
            });
            if (selectedItem && selectedItem.param) {
                return selectedItem.param;
            } else {
                return '';
            }
        },

        findRuleItemByType(type) {
            return this.$lib.lodash.find(this.ruleItems, function (i) {
                return i.type === type;
            });
        },

        changeRuleItemStatus(rule, status = true) {
            let item = this.findRuleItemByType(rule.type);
            item.disabled = status;
        },

        pushSelectedItem(rule) {
            if (rule) {
                this.selectedItems.push(rule);
                this.changeRuleItemStatus(rule, true);
            }
        },

        removeSelectedItem(rule) {
            this.selectedItems = this.$lib.lodash.remove(this.selectedItems, function (i) {
                return i.type !== rule.type;
            });
            this.changeRuleItemStatus(rule, false);
            this.selectedRule = {};
        },

        parseExpression(expression) {
            let result = {};
            if (expression) {
                if (expression.search(':') != -1) {
                    let expressionArray = this.$lib.lodash.split(value, ':');
                    if (expressionArray) {
                        result.type = expressionArray[0];
                        result.param = expressionArray[1];
                    }
                } else {
                    result.type = expression;
                    result.param = '';
                }
            }

            return result;
        },

        addSelectedItemByExpression(expression) {
            let parser = this.parseExpression(expression);
            let rule = this.findRuleItemByType(parser.type);
            if (parser.param) {
                rule.param = parser.param;
            }
            this.pushSelectedItem(rule);
        },

        readExpressions(expressions) {
            if (expressions) {
                if (expressions.indexOf('|') !== -1) {
                    let expressionArray = this.$lib.lodash.split(expressions, '|');
                    for (let expression in expressionArray) {
                        this.addSelectedItemByExpression(expression);
                    }
                } else {
                    this.addSelectedItemByExpression(expressions);
                }
            }
        },

        readSelectedRule() {
            if (!this.$lib.lodash.isEmpty(this.selectedRule)) {
                let rule = Object.assign({}, this.selectedRule);
                if (this.ruleParam) {
                    rule.param = this.ruleParam;
                }
                return rule;
            } else {
                return '';
            }
        },

        addSelectedItemBySelector() {
            let rule = this.readSelectedRule();
            this.pushSelectedItem(rule);
        },

        addRule() {
            if (this.ruleParamSettingPanel) {
                this.$refs.rulePanel.validate();
                if (this.$refs.rulePanel.valid) {
                    this.addSelectedItemBySelector();
                }
            } else {
                this.addSelectedItemBySelector();
            }
        },

        constructExpression(selectedItems) {
            if (selectedItems) {
                let result = selectedItems
                    .map((item) => {
                        if (item.param) {
                            return item.type + ':' + item.param;
                        } else {
                            return item.type;
                        }
                    })
                    .join('|');
                return result;
            }
        },
    },
};
</script>
