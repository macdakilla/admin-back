<template>
    <v-card class="carEdit px-2 elevation-0 rounded-0">
        <v-card-text class="d-flex flex-column px-4">
            <p>Доступны шорткоды:
                <code class="cursor-pointer" title="Скопировать" @click="clipboardCopy('{brand}')">{brand}</code>,
                <code class="cursor-pointer" title="Скопировать" @click="clipboardCopy('{model}')">{model}</code>,
                <code class="cursor-pointer" title="Скопировать" @click="clipboardCopy('{color}')">{color}</code>
            </p>

            <v-row class="editPage__infoRow mt-0 mb-8">
                <v-col cols="12"
                       sm="12"
                       md="4"
                       class="py-0">

                    <v-subheader class="px-0">Meta</v-subheader>

                    <v-row class="editPage__infoRow mt-0 mb-8">

                        <v-col cols="12"
                               sm="12"
                               class="py-0">
                            <v-text-field class="editPage__infoInput rounded-0 mb-4"
                                          label="Title"
                                          dense
                                          filled
                                          hide-details
                                          v-model="title">
                            </v-text-field>

                            <v-textarea class="editPage__infoInput rounded-0"
                                        hide-details
                                        filled
                                        rows="4"
                                        label="Description"/>
                        </v-col>
                    </v-row>

                    <v-subheader class="px-0">Open Graph</v-subheader>


                    <v-text-field class="editPage__infoInput rounded-0 mb-4"
                                  label="OG Title"
                                  dense
                                  filled
                                  hide-details
                                  v-model="ogTitle">
                    </v-text-field>

                    <v-textarea class="editPage__infoInput rounded-0 mb-4"
                                hide-details
                                filled
                                rows="4"
                                label="OG Description"/>

                    <upload-image :items="ogImage" :max-count="1" title="OG Image"
                                  @updateItems="ogImage = $event" resolution="500*500"/>
                </v-col>

                <v-col cols="12"
                       sm="12"
                       md="4"
                       class="py-0">

                    <v-subheader class="px-0">Страница</v-subheader>

                    <v-text-field class="editPage__infoInput rounded-0 mb-4"
                                  label="ЧПУ"
                                  dense
                                  filled
                                  hide-details
                                  disabled
                                  v-model="slug">
                    </v-text-field>

                    <v-text-field class="editPage__infoInput rounded-0 mb-4"
                                  label="Название в хлебных крошках"
                                  dense
                                  filled
                                  hide-details
                                  v-model="breadcrumbName">
                    </v-text-field>

                </v-col>
            </v-row>

        </v-card-text>
    </v-card>
</template>

<script>
import UploadImage from '@/components/uploadImage/index';
import clipboard from "@/core/mixins/clipboard";

export default {
    name: 'seo',

    components: {UploadImage},

    mixins: [clipboard],

    data() {
        return {
            title: '',
            slug: 'contacts',
            breadcrumbName: '',
            description: '',
            ogTitle: '',
            ogDescription: '',
            ogImage: [
                {name: 'name', src: '/img/01.jpg'},
            ],
        };
    },
};
</script>

<style scoped>

</style>
