<template>
    <v-card class="px-2 elevation-0 rounded-0">

        <v-card-text class="d-flex flex-column px-4">
            <v-row>
                <v-col sm="12">
                    <v-subheader class="px-0">Соц.сети</v-subheader>

                    <v-row class="mb-2">
                        <v-col sm="3">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Вконтакте"
                                          dense
                                          filled
                                          hide-details/>
                        </v-col>

                        <v-col sm="3">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Instagram"
                                          dense
                                          filled
                                          hide-details/>
                        </v-col>

                        <v-col sm="3">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Youtube"
                                          dense
                                          filled
                                          hide-details/>
                        </v-col>

                        <v-col sm="3">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="OK"
                                          dense
                                          filled
                                          hide-details/>
                        </v-col>

                        <v-col sm="3">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Facebook"
                                          dense
                                          filled
                                          hide-details/>
                        </v-col>

                        <v-col sm="3">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Twitter"
                                          dense
                                          filled
                                          hide-details/>
                        </v-col>

                        <v-col sm="3">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Tic-tok"
                                          dense
                                          filled
                                          hide-details/>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-divider/>

            <v-row>
                <v-col sm="12">
                    <v-subheader class="px-0">Месседжеры</v-subheader>

                    <v-row class="mb-2">
                        <v-col sm="3">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Viber"
                                          dense
                                          filled
                                          hide-details/>
                        </v-col>

                        <v-col sm="3">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="WhatsApp"
                                          dense
                                          filled
                                          hide-details/>
                        </v-col>

                        <v-col sm="3">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Telegram"
                                          dense
                                          filled
                                          hide-details/>
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
    name: 'Socials',

    components: {UploadImage},

    props: {
        pageData: {
            type: Object,
            required: true,
        }
    },

    data() {
        return {};
    },

    computed: {},

    methods: {},
};
</script>

<style lang="scss">



</style>
