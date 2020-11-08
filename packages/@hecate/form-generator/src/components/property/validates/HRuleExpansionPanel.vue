<template>
    <h-expansion-panel index="rules" header="校验">
        <v-subheader>已配置规则</v-subheader>
        <v-list-item-group color="primary" class="mb-1">
            <v-list-item dense v-for="(item, i) in selectedItems" :key="i" class="pl-2 pr-2">
                <v-list-item-avatar size="28">
                    <v-icon small class="error lighten-1 white--text" @click="deleteSelectedItem(item)"
                        >mdi-delete-alert</v-icon
                    >
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.description"></v-list-item-subtitle>
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
import HExpansionPanel from '@/components/property/layouts/HExpansionPanel';
import HPanelBetween from '@/components/property/validates/HPanelBetween';
export default {
    name: 'HRuleExpansionPanel',

    components: {
        HExpansionPanel,
        HPanelBetween,
    },

    data: () => ({
        ruleItems: [
            { name: 'Alpha', type: 'alpha', description: '输入内容只能包含字母' },
            { name: 'Alpha Dash', type: 'alpha_dash', description: '输入内容包含字母数字、破折号和下划线' },
            { name: 'Alpha Num', type: 'alpha_num', description: '输入内容只能包含字母和数字' },
            { name: 'Alpha Spaces', type: 'alpha_spaces', description: '输入内容只能包含字母和空格' },
            { name: 'Between', type: 'between', description: '输入内容必须介于在{min}与{max}之间' },
            { name: 'Confirmed', type: 'confirmed', description: '输入内容与{target}不匹配' },
            { name: 'Digits', type: 'digits', description: 'Digits：输入内容必须是数字，且精确到{length}位数' },
            { name: 'Dimensions', type: 'dimensions', description: '{_field_}必须在{width}像素与{height}像素之间' },
            { name: 'Email', type: 'email', description: '{_field_}不是一个有效的邮箱' },
            { name: 'Excluded', type: 'excluded', description: '{_field_}不是一个有效值' },
            { name: 'Ext', type: 'ext', description: '{_field_}不是一个有效的文件' },
            { name: 'Image', type: 'image', description: '{_field_}不是一张有效的图片' },
            { name: 'OneOf', type: 'oneOf', description: '{_field_}不是一个有效值' },
            { name: 'Integer', type: 'integer', description: '{_field_}必须是整数' },
            { name: 'Length', type: 'length', description: '{_field_}长度必须为{length}' },
            { name: 'Max', type: 'max', description: '{_field_}不能超过{length}个字符' },
            { name: 'Max_value', type: 'max_value', description: '{_field_}必须小于或等于{max}' },
            { name: 'Mimes', type: 'mimes', description: '{_field_}不是一个有效的文件类型' },
            { name: 'Min', type: 'min', description: '{_field_}必须至少有{length}个字符' },
            { name: 'Min_value', type: 'min_value', description: '{_field_}必须大于或等于{min}' },
            { name: 'Numeric', type: 'numeric', description: '{_field_}只能包含数字字符' },
            { name: 'Negex', type: 'regex', description: '{_field_}格式无效' },
            { name: 'Required', type: 'required', description: '{_field_}是必须的' },
            { name: 'Required_if', type: 'required_if', description: '{_field_}是必须的' },
            { name: 'Size', type: 'size', description: '{_field_}必须小于{size}KB' },
            { name: 'Double', type: 'double', description: '{_field_}字段必须为有效的小数' },
        ],
        ruleParamSettingPanel: '',
        ruleParam: '',
        selectedItems: [],
        selectedRule: {},
    }),

    watch: {
        selectedRule: {
            handler(newValue, oldValue) {
                if (newValue) {
                    this.changeRuleSettingPanel(newValue.type);
                } else {
                    this.ruleParamSettingPanel = '';
                }
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
            switch (type) {
                case 'between':
                    panel = 'HPanelBetween';
                    break;
                default:
                    panel = '';
                    break;
            }
            this.ruleParamSettingPanel = panel;
        },

        addRule() {
            if (this.ruleParamSettingPanel) {
                this.$refs.rulePanel.validate();
                if (this.$refs.rulePanel.valid) {
                    this.addSelectedItem();
                }
            } else {
                this.addSelectedItem();
            }
        },

        getRule() {
            if (!this.$lib.lodash.isEmpty(this.selectedRule)) {
                let rule = Object.assign({}, this.selectedRule);
                if (this.ruleParam) {
                    rule.value = this.selectedRule.type + ':' + this.ruleParam;
                } else {
                    rule.value = this.selectedRule.type;
                }
                return rule;
            } else {
                return '';
            }
        },

        addSelectedItem() {
            let rule = this.getRule();
            if (rule) {
                this.selectedItems.push(rule);
                this.changeRuleItemStatus(rule, true);
            }
        },

        deleteSelectedItem(rule) {
            this.selectedItems = this.$lib.lodash.remove(this.selectedItems, function (i) {
                return i.type !== rule.type;
            });
            this.changeRuleItemStatus(rule, false);
            this.selectedRule = {};
        },

        changeRuleItemStatus(rule, status = true) {
            let item = this.$lib.lodash.find(this.ruleItems, function (i) {
                return i.type === rule.type;
            });
            item.disabled = status;
        },
    },
};
</script>
