<template>
    <v-menu
        v-model="menu"
        bottom
        close-on-content-click
        :open-on-click="filteredIcons.length > 0"
        offset-y
        rounded="b-xl"
    >
        <template #activator="{ on, attrs }">
            <v-text-field
                v-model="search"
                :dense="dense"
                :loading="!icons"
                :disabled="disabled"
                hide-details
                clearable
                outlined
                placeholder="搜索图标 (e.g. account)"
                v-bind="attrs"
                v-on="on"
                @click:clear="reset"
            >
                <template #prepend-inner>
                    <v-icon v-if="isSelected" color="primary"> mdi-{{ search }} </v-icon>
                    <code class="mx-1 py-1">mdi-</code>
                </template>
            </v-text-field>
        </template>

        <v-list v-show="filteredIcons.length > 0">
            <v-virtual-scroll
                :items="filteredIcons"
                :item-height="itemHeight"
                :height="Math.min(filteredIcons.length * itemHeight, 300)"
            >
                <template #default="{ item }">
                    <v-list-item :key="item" @click.stop="select(item)" :dense="dense">
                        <v-list-item-icon>
                            <v-icon color="primary" class="mr-2" v-text="item" />
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title v-text="item.substring(4)" />
                        </v-list-item-content>

                        <v-btn icon @click.stop="select(item)">
                            <v-icon size="20"> mdi-content-copy </v-icon>
                        </v-btn>
                    </v-list-item>
                </template>
            </v-virtual-scroll>
        </v-list>
    </v-menu>
</template>

<script>
import * as allIcons from '@mdi/js';
import { lib } from '@hecate/core';

export default {
    name: 'HIconList',

    props: {
        value: String,
        dense: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        itemHeight: {
            type: Number,
            default: 40,
        },
    },

    data: () => ({
        isSelected: false,
        icons: [],
        menu: false,
        search: '',
    }),

    computed: {
        filteredIcons() {
            if (!this.icons.length || !this.search) return [];
            if (!this.search) return this.icons;

            if (!this.isSelected) {
                return this.icons.filter((item) => {
                    return item.toLowerCase().match(this.search.toLowerCase());
                });
            } else {
                return [];
            }
        },
    },

    watch: {
        value: {
            handler(newValue, oldValue) {
                if (newValue && lib.lodash.startsWith(newValue, 'mdi-')) {
                    this.search = newValue.substring(4);
                } else {
                    this.search = newValue;
                }
            },
            immediate: true,
        },
        search: {
            handler(newValue, oldValue) {
                if (this.filteredIcons.length > 0 && !this.menu) {
                    this.menu = true;
                } else if (!this.filteredIcons.length) {
                    this.menu = false;
                }
                if (newValue && !lib.lodash.startsWith(newValue, 'mdi-')) {
                    this.$emit('input', 'mdi-' + newValue);
                } else {
                    this.$emit('input', newValue);
                }
            },
        },
    },

    mounted() {
        this.icons = Object.keys(allIcons).map((icon) => {
            return lib.lodash.kebabCase(icon);
        });
    },

    methods: {
        select(item) {
            this.search = item.substring(4);
            this.isSelected = true;
        },
        reset() {
            this.menu = false;
            this.isSelected = false;
            this.search = '';
        },
    },
};
</script>
