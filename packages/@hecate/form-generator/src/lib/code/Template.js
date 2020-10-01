import * as Translator from './Translator';
function factory(template, data) {
    return `
    <template>
        <v-container>
            <v-row class="text-center">
                <v-col cols="12">
                    ${template}
                </v-col>
            </v-row>
        </v-container>
    </template>

    <scritp>
    export default {
        data: () => (${data}),
    };
    </scritp>
    `;
}

function create(canvas) {
    let template = Translator.toTag(canvas);
    let data = JSON.stringify(Translator.toData(canvas));

    console.log(template);
    console.log(data);

    return factory(template, data);
}

export { create };
