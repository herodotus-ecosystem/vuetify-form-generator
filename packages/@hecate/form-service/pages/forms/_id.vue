<template>
    <h-form-runtime :schema="schema"></h-form-runtime>
</template>

<script>
export default {
    layout: 'form',

    created() {
        let params = this.$route.params.id;
        console.log(params);
    },

    async asyncData({ $content, params }) {
        // fetch our article here
        const { schema } = await $content('forms', params.id).fetch();
        return {
            schema,
        };
    },
};
</script>
