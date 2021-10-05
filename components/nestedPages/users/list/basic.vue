<template>
    <v-card class="carEdit px-2 elevation-0 rounded-0">

        <v-card-text class="d-flex flex-column px-4">
            <div class="editPage__images mb-8" v-if="pageData.hasOwnProperty('image')">
                <upload-image
                    v-if="pageData.images"
                    :items="pageData.images"
                    title="Фото"
                    :max-count="1"
                    @updateItems="pageData.images = $event"
                    resolution="1400*900"/>
            </div>

            <v-row>
                <v-col sm="6">
                    <v-subheader class="px-0">Основные данные</v-subheader>

                    <div class="editPage__info mb-6">
                        <div class="px-0 flex-column align-start">
                            <v-row class="editPage__infoRow mt-0 mb-8">
                                <v-col cols="12"
                                       sm="12"
                                       md="4"
                                       class="py-0">
                                    <v-text-field class="editPage__infoInput rounded-0"
                                                  label="ФИО*"
                                                  dense
                                                  filled
                                                  hide-details
                                                  v-model="pageData.name">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12"
                                       sm="12"
                                       md="4"
                                       class="py-0">
                                    <v-text-field class="editPage__infoInput rounded-0"
                                                  label="Телефон*"
                                                  dense
                                                  filled
                                                  hide-details
                                                  v-mask="'+7 (###) ####-###'"
                                                  v-model="pageData.phone"/>
                                </v-col>
                                <v-col cols="12"
                                       sm="12"
                                       md="4"
                                       class="py-0">
                                    <v-text-field class="editPage__infoInput rounded-0"
                                                  label="Email*"
                                                  type="email"
                                                  dense
                                                  filled
                                                  hide-details
                                                  v-model="pageData.email"/>
                                </v-col>
                            </v-row>

                            <v-row class="editPage__infoRow mb-6">
                                <v-col cols="6"
                                       sm="12"
                                       class="py-0">
                                    <v-subheader class="px-0">Роль</v-subheader>
                                    <div class="editPage__right">
                                        <v-select class="editPage__specsItemSelect"
                                                  label="Роль"
                                                  v-model="pageData.status"
                                                  :items="statusList"
                                                  dense
                                                  filled
                                                  clearable
                                        ></v-select>
                                    </div>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-col>

                <v-col sm="6">
                    <v-subheader class="px-0">Пароль</v-subheader>

                    <v-row class="mb-2">
                        <v-col sm="7">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Пароль*"
                                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                          :type="show1 ? 'text' : 'password'"
                                          :rules="[rules.min, rules.max]"
                                          dense
                                          filled
                                          hide-details
                                          @click:append="show1 = !show1"
                                          v-model="pageData.password"/>
                        </v-col>

                        <v-col sm="7">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Пароль ещё раз"
                                          dense
                                          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                          :type="show2 ? 'text' : 'password'"
                                          :rules="[rules.min, rules.similarPass, rules.max]"
                                          filled
                                          hide-details
                                          @click:append="show2 = !show2"
                                          v-model="passwordConfirmation"/>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import UploadImage from '@/components/uploadImage/index';

export default {
    name: 'Basic',
    components: {UploadImage},
    props: {
        pageData: {
            type: Object,
            required: true,
        },
        statusList: {
            type: Array
        }
    },
    data() {
        return {
            passwordConfirmation: '',
            show1: false,
            show2: false,
            rules: {
                min: v => v.length >= 8,
                max: v => v.length <= 30,
                similarPass: v => v === this.pageData.password,
            },
        }
    },
};
</script>

<style lang="scss">

</style>
