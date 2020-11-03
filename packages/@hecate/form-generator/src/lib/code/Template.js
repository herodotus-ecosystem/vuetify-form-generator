import * as Translator from './Translator';

function generateTemplate(tags) {
    return `<v-container fluid>
        <v-row>
            <v-col>
                <v-card>
                   ${tags}
                </v-card>
            </v-col>
        </v-row>
    </v-container>`;
}

function generateCode(tags, models) {
    const template = generateTemplate(tags);
    return `<template>
    ${template}
</template>

<script>
export default {
    data: () => ({
        ${models}
    }),
};
</script>`;
}

function formatData(data) {
    let format = JSON.stringify(data);
    format = format.replace('{', '');
    format = format.replace('}', '');
    format = format.replace(',', ',\n' + '\t'.repeat(3));
    return format;
}

function create(canvas) {
    let tags = Translator.toTag(canvas);
    let data = Translator.toData(canvas);

    const code = generateCode(tags, formatData(data));
    const template = generateTemplate(tags);

    return { code, template, data };
}

export { create };
