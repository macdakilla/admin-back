<template>
    <v-card class="carEdit px-2 elevation-0 rounded-0">
        <v-card-text class="d-flex flex-column px-4">
            <v-subheader class="px-0">Медиа</v-subheader>

            <v-row class="editPage__infoRow mt-0 mb-8">
                <v-col cols="12"
                       sm="12"
                       md="4"
                       class="py-0">
                    <v-text-field class="editPage__infoInput rounded-0 mb-4"
                                  label="Youtube id"
                                  dense
                                  filled
                                  hide-details
                                  v-model="youtube">
                    </v-text-field>
                </v-col>
            </v-row>

            <v-row class="editPage__infoRow mt-0 mb-8">
                <v-col cols="12"
                       md="12"
                       class="py-0">
                    <upload-image :items="images3d" :max-count="1" title="Фото для 3D" @updateItems="ogImage = $event" resolution="1400*900"/>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
    import UploadImage from '@/components/uploadImage/index';
    export default {
        name: 'addition',

        components: { UploadImage },

        data() {
            return {
                youtube: '',
                images3d: [
                    { name: 'name', src: '/img/01.jpg' },
                ],
            };
        },
    };
</script>

<style scoped>

</style>
