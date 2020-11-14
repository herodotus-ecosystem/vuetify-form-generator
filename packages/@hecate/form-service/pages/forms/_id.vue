<template>
    <h-form-runtime :schema="schema"></h-form-runtime>
</template>

<script>
import HFormRuntime from '@hecate/h-form-runtime';

export default {
    layout: 'form',

    components: {
        HFormRuntime
    },

    async asyncData({ $content, params }) {
        // fetch our article here
        const { schema } = await $content('forms', params.id).fetch();
        console.log(schema);
        return {
            schema
        };
    }
};
</script>
