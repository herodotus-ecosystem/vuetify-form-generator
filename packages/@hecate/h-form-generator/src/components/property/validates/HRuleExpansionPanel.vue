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
        <v-list-item dense>
            <v-list-item-content>
                <v-row>
                    <v-col>
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
import { HExpansionPanel } from '../layouts';
import HPanelBetween from './HPanelBetween.vue';
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
        // 全部可用规则
        ruleItems: [],
        ruleParamSettingPanel: '',
        ruleParam: '',
        selectedItems: [],
        selectedRule: {},
    }),

    watch: {
        value: {
            handler(newValue, oldValue) {
                if (newValue) {
                    this.readExpressions(newValue);
                }
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

    create() {
        this.initRuleItems();
    },

    methods: {
        initRuleItems() {
            if (this.$lib.lodash.isEmpty(this.ruleItems)) {
                this.ruleItems = this.$rules;
            }
        },
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

        /**
         * 通过类型查找rule
         */
        findRuleItemByType(type) {
            return this.$lib.lodash.find(this.ruleItems, function (i) {
                return i.type === type;
            });
        },

        /**
         * 设置规则是否可用的状态，设置为不可用，select列表对应选项为灰
         */
        changeRuleItemStatus(rule, status = true) {
            let item = this.findRuleItemByType(rule.type);
            item.disabled = status;
        },

        pushSelectedItem(rule) {
            // 利用rule.disabled，避免重复添加问题
            if (rule && !rule.disabled) {
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

        /**
         * 解析单个表达式，分析出类型和参数
         */
        parseExpression(expression) {
            let result = {};
            if (expression) {
                if (expression.search(':') != -1) {
                    let expressionArray = this.$lib.lodash.split(expression, ':');
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

        /**
         * 根据Select选择，添加规则
         */
        addSelectedItemBySelector() {
            let rule = this.readSelectedRule();
            this.pushSelectedItem(rule);
        },

        /**
         * 解析具体表达式并添加到规则数组
         */
        addSelectedItemByExpression(expression) {
            let parser = this.parseExpression(expression);
            let rule = this.findRuleItemByType(parser.type);
            if (parser.param) {
                rule.param = parser.param;
            }
            this.pushSelectedItem(rule);
        },

        /**
         * 读取并解析传入的rule表达式
         */
        readExpressions(expressions) {
            if (expressions) {
                if (expressions.indexOf('|') !== -1) {
                    let expressionArray = this.$lib.lodash.split(expressions, '|');
                    // for…in主要是为遍历对象而设计的，不适用于遍历数组
                    for (let expression of expressionArray) {
                        this.addSelectedItemByExpression(expression);
                    }
                } else {
                    this.addSelectedItemByExpression(expressions);
                }
            }
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

        /**
         * 点击添加规则按钮
         */
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
            if (selectedItems && selectedItems.length > 0) {
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
