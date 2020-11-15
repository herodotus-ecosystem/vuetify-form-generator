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

    async asyncData(context) {
        let $content = context.$content;
        let params = context.params;
        console.log($content);
        console.log(params);
        // fetch our article here
        const { schema } = await $content('forms', params.id).fetch();
        console.log(schema);
        return {
            schema,
        };
    },
};
</script>
