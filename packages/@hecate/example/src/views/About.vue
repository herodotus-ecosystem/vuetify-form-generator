<template>
    <v-main>
        <div id="area"></div>
    </v-main>
</template>

<script>
import Vue from 'vue';

import { debounce } from 'throttle-debounce';

import { DB } from '@/lib/modeler/logic';

import { Template } from '../lib/code';

export default {
    data: () => ({
        drawingCanvas: [],
    }),

    mounted() {
        let drawingCanvasInDB = DB.getDrawingCanvas();
        if (Array.isArray(drawingCanvasInDB) && drawingCanvasInDB.length > 0) {
            this.drawingCanvas = drawingCanvasInDB;
            this.appendForm(this.drawingCanvas);
        }
    },

    methods: {
        appendForm(canvas) {
            const { template, data } = Template.create(this.drawingCanvas);

            const Form = Vue.extend({
                template: template,
                data: () => ({ ...data }),
            });

            new Form().$mount('#area');
        },
    },
};
</script>
