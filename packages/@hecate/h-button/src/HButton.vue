<template>
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
            <v-btn :color="color" :icon="icon" v-on="on" @click="handleClick()">
                <v-icon>{{ iconName }}</v-icon>
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
    },

    methods: {
        handleClick() {
            this.$emit('click');
        },
    },
};
</script>
