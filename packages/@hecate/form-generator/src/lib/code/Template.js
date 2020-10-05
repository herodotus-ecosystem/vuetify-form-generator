import * as Translator from './Translator';

function generateTemplate(template) {
    return `
    <template>
        <v-container>
            <v-row class="text-center">
                <v-col cols="12">
                    ${template}
                </v-col>
            </v-row>
        </v-container>
    </template>`;
}

function generateScript(data) {
    return `

    <script>
    export default {
        data: () => (${data}),
    };
    </script>
    `;
}

function wrapData(data) {
    return function () {
        return data;
    };
}

function generateCode(template, data) {
    return generateTemplate(template) + generateScript(data);
}

function create(canvas) {
    let template = Translator.toTag(canvas);
    let dataProperties = JSON.stringify(Translator.toData(canvas));

    const code = generateCode(template, dataProperties);
    const data = wrapData(dataProperties);

    return { code, data };
}

export { create };
