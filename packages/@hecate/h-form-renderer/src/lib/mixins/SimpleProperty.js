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
        },
    },
    methods: {
        renderSimpleProp(h) {
            if (!this.isSimpleProp) return;

            const props = { ...this.commonFieldProps };

            const children = [];
            const on = {
                input: (value) => this.input(value),
                change: (value) => this.change(value),
            };
            const scopedSlots = {};

            if (['number', 'integer'].includes(this.fullSchema.type)) {
                on.input = (value) =>
                    this.input(this.fullSchema.type === 'integer' ? parseInt(value, 10) : parseFloat(value));
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
                const itemRules = getRules(schemaUtils.prepareFullSchema(this.fullSchema.items), this.fullOptions);
                props.rules = props.rules.concat([
                    (values) => {
                        const valuesMessages = values.map((value) => {
                            const brokenRule = itemRules.find((rule) => {
                                return typeof rule(value) === 'string';
                            });
                            return brokenRule && brokenRule(value);
                        });
                        const firstMessage = valuesMessages.find((m) => !!m);
                        return firstMessage || true;
                    },
                ]);

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

                scopedSlots.selection = (slotProps) => {
                    const onClose = () => {
                        this.value.splice(slotProps.index, 1);
                        this.input(this.value);
                        this.change(this.value);
                    };
                    const brokenRule = itemRules.find((rule) => {
                        return typeof rule(slotProps.item) === 'string';
                    });
                    return h(
                        'v-chip',
                        {
                            props: { close: true, color: brokenRule ? 'error' : 'default' },
                            on: { 'click:close': onClose },
                        },
                        slotProps.item
                    );
                };
            }

            if (this.htmlDescription) {
                let tooltipSlot = 'append-outer';
                children.push(this.renderTooltip(h, tooltipSlot));
            }

            return this.fullSchema.tag ? [h(this.fullSchema.tag, { props, on, scopedSlots }, children)] : null;
        },
    },
};
