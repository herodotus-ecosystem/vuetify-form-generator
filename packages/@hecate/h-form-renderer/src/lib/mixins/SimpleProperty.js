import { getRules } from '../utils/rules';
import schemaUtils from '../utils/schema';

export default {
    computed: {
        isSimpleProp() {
            return (
                this.fullSchema.type === 'string' ||
                ['number', 'integer'].includes(this.fullSchema.type) ||
                this.fullSchema.type === 'boolean' ||
                (this.fullSchema.type === 'array' &&
                    ['string', 'number', 'integer'].includes(this.fullSchema.items.type))
            );
        }
    },
    methods: {
        // 主要代码逻辑照搬v-jsf。
        // 随着功能的推进，发现v-jsf更偏重绘制，而本系统除了绘制以外，还有属性的动态设置
        // 实现逻辑偏差越来越大，原v-jsf的逻辑需要的进行的重构就越来越多。
        // 后面希望通过重构，来构建自己的绘制核心代码。
        renderSimpleProp(h) {
            if (!this.isSimpleProp) return;

            const props = { ...this.commonFieldProps };
            const children = [];
            const scopedSlots = {};
            const on = {
                input: (value) => this.input(value),
                change: (value) => this.change(value)
            };

            if (['number', 'integer'].includes(this.fullSchema.type)) {
                on.input = (value) => {
                    this.input(this.fullSchema.type === 'integer' ? parseInt(value, 10) : parseFloat(value));
                };
            }

            if (this.fullSchema.type === 'boolean') {
                on.change = (value) => {
                    this.input(value || false);
                    this.change(value || false);
                };
            }

            if (
                this.fullSchema.type === 'array' &&
                ['string', 'number', 'integer'].includes(this.fullSchema.items.type)
            ) {
                if (this.fullSchema.items.type !== 'string') {
                    props.type = 'number';
                    on.input = (value) => {
                        const vals = value
                            .map((val) =>
                                this.fullSchema.items.type === 'integer' ? parseInt(val, 10) : parseFloat(val)
                            )
                            .filter((val) => !isNaN(val));
                        this.input(vals);
                    };
                }
            }

            if (this.htmlDescription) {
                let tooltipSlot = 'append-outer';
                children.push(this.renderTooltip(h, tooltipSlot));
            }

            let rules = this.fullSchema['x-rules'];
            if (rules) {
                return [
                    h('validation-provider', {
                        props: {
                            name: props.label,
                            rules: rules
                        },
                        scopedSlots: {
                            default: ({ errors }) =>
                                h(
                                    this.fullSchema.tag,
                                    {
                                        props: {
                                            ...props,
                                            required: true,
                                            'error-messages': errors
                                        },
                                        on,
                                        scopedSlots
                                    },
                                    children
                                )
                        }
                    })
                ];
            } else {
                return [h(this.fullSchema.tag, { props, on, scopedSlots }, children)];
            }
        }
    }
};
