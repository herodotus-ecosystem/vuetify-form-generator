<template>
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
            <v-btn v-if="icon" :color="color" :icon="icon" v-on="on" @click="handleClick()">
                <v-icon>{{ iconName }}</v-icon>
            </v-btn>
            <v-btn v-else :color="color" v-on="on" @click="handleClick()">
                {{ text }}
            </v-btn>
        </template>
        <span>{{ tooltip }}</span>
    </v-tooltip>
</template>

<script>
export default {
    name: 'HButton',

    props: {
        btnClass: String,
        color: String,
        icon: Boolean,
        iconName: String,
        tooltip: String,
        text: String,
    },

    methods: {
        handleClick() {
            this.$emit('click');
        },
    },
};
</script>
