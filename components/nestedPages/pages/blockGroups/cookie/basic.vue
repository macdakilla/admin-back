<template>
    <v-card class="px-2 elevation-0 rounded-0">
        <v-card-text class="d-flex flex-column px-4">
            <v-row>
                <v-col sm="8">
                    <v-row class="mb-2 px-3">
                        <tiny :title="'Текст на странице'" :height="600"/>
                    </v-row>
                </v-col>
            </v-row>
        </v-card-text>


    </v-card>
</template>

<script>
import UploadImage from '@/components/uploadImage/index';
import Tiny from "@/components/tiny/index";

export default {
    name: 'Basic',

    components: {Tiny, UploadImage},

    props: {
        dc: {
            type: Object,
            required: true,
        }
    },

    data() {
        return {
            testCoords: {x:'',y:''},
        };
    },

    computed: {},

    methods: {
        coordsMask(value) {
            const ending = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]

            if (value.charAt(1) === '.') {
                return [/[0-9]/, '.', ...ending]
            }

            if (value.charAt(2) === '.') {
                return [/[0-9]/, /[0-9]/, '.', ...ending]
            }

            if (value.length === 3) {
                return [/[0-9]/, /[0-9]/, /[0-9]/, ...ending]
            }

            return [/[0-9]/, /[0-9]/, /[0-9]/, '.', ...ending]
        }
    },
};
</script>

<style lang="scss">
</style>
