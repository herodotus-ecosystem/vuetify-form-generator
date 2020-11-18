<template>
    <client-only>
        <h-form-runtime :schema="schema"></h-form-runtime>
    </client-only>
</template>

<script>
export default {
    layout: 'form',

    async asyncData({ $content, params }) {
        // fetch our article here
        const { schema } = await $content('forms', params.id).fetch();
        return {
            schema,
        };
    },
};
</script>
