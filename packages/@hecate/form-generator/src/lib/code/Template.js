import * as Translator from './Translator';

function generateTemplate(tags) {
    return `
    <v-container fluid>
        <v-row>
            <v-col>
                <v-card>
                    ${tags}
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    `;
}

function generateCode(tags, models) {
    const template = generateTemplate(tags);
    return `
    <template>
        ${template}
    </template>

    <script>
    export default {
        data: () => (${models}),
    };
    </script>
    `;
}

function create(canvas) {
    let tags = Translator.toTag(canvas);
    let data = Translator.toData(canvas);

    const code = generateCode(tags, data);
    const template = generateTemplate(tags);

    return { code, template, data };
}

export { create };
