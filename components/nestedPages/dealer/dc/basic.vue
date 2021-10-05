<template>
    <v-card class="px-2 elevation-0 rounded-0">

        <v-card-text class="d-flex flex-column px-4">
            <div class="editPage__images mb-8">
                <upload-image :items="pageData.images" title="Фото" @updateItems="pageData.images = $event" :max-count="1" resolution="1400*900"/>
            </div>

            <v-row>
                <v-col sm="6">
                    <v-subheader class="px-0">Информация</v-subheader>

                    <v-row class="mb-2">
                        <v-col sm="6">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Название"
                                          dense
                                          filled
                                          hide-details
                                          v-model="pageData.name"/>
                        </v-col>
                        <v-col sm="6">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Код привязки"
                                          dense
                                          filled
                                          hide-details
                                          v-model="pageData.code"/>
                        </v-col>
                    </v-row>

                    <v-row class="mb-2">
                        <v-col sm="6">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Номер"
                                          dense
                                          filled
                                          hide-details
                                          v-mask="'+7 (###) ####-###'"
                                          v-model="pageData.phone"/>
                        </v-col>
                        <v-col sm="6">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="E-mail"
                                          dense
                                          filled
                                          hide-details
                                          v-model="pageData.email"/>
                        </v-col>
                    </v-row>

                    <v-row class="mb-2">
                        <v-col sm="12">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Адрес"
                                          dense
                                          filled
                                          hide-details
                                          v-model="pageData.address"/>
                        </v-col>
                    </v-row>
                    <v-row class="mb-6 px-3">
                        <v-col sm="6" class="px-0">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Координаты: X"
                                          dense
                                          filled
                                          hide-details
                                          v-mask="coordsMask"
                                          v-model="testCoords.x"/>
                        </v-col>
                        <v-col sm="6" class="px-0">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Y"
                                          dense
                                          filled
                                          hide-details
                                          v-mask="coordsMask"
                                          v-model="testCoords.y"/>
                        </v-col>
                    </v-row>

                    <v-row class="mb-2 px-3">
                        <tiny :title="'Описание ДЦ'"/>
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
        pageData: {
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
