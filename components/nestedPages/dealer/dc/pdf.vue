<template>
    <v-card class="px-2 elevation-0 rounded-0">

        <v-card-text class="d-flex flex-column px-4">
            <p>
                <v-btn depressed color="secondary" @click="pageEditor.dialog = true">
                    Редактировать страницу приветствия
                </v-btn>
            </p>

            <v-row class="mb-6">
                <v-col sm="2">
                    <upload-image :items="logo" title="Лого в футере" @updateItems="logo = $event" :max-count="1"
                                  resolution="120*auto"/>
                </v-col>
                <v-col sm="2">
                    <upload-image :items="logo" title="Изображение подписи" @updateItems="logo = $event" :max-count="1"
                                  resolution="500*500"/>
                </v-col>
            </v-row>

            <v-subheader class="px-0">Дополнительные блоки</v-subheader>
            <v-row class="mb-2">
                <v-col sm="6">
                    <v-expansion-panels v-model="activeBlocks" >
                        <v-expand-transition v-for="(block, index) in blocks" :key="index">
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                <template v-slot:default="{ open }">
                                    {{ block.title }}
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <upload-image class="mb-4" :items="block.images"
                                              title="Изображение"
                                              @updateItems="block.images = $event"
                                              :max-count="1"
                                              resolution="600*auto"/>

                                <v-text-field class="rounded-0 mb-4"
                                              label="Title"
                                              dense
                                              filled
                                              hide-details
                                              v-model="block.title">
                                </v-text-field>

                                <v-textarea class="rounded-0"
                                            hide-details
                                            filled
                                            rows="4"
                                            label="Description"
                                            v-model="block.description"/>

                                <v-btn class="mt-2" color="error" text x-small @click="removeBlock(index)">Удалить</v-btn>

                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        </v-expand-transition>
                    </v-expansion-panels>
                    <v-btn class="mt-2"
                           color="primary"
                           small
                           text
                           @click="addBlock()">
                        Добавить
                        <v-icon class="ml-1" x-small>mdi-plus</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-text>


        <v-dialog v-model="pageEditor.dialog"
                  max-width="1200">
            <v-card>
                <v-card-title class="px-4">
                    Редактирование страницы приветствия
                </v-card-title>

                <v-divider></v-divider>

                <v-card-text class="px-0" style="height: 500px;">
                    <tiny no-border/>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
import UploadImage from '@/components/uploadImage/index';
import DateTimePicker from "@/components/date-picker/index";
import Tiny from "@/components/tiny/index";

export default {
    name: 'Pdf',

    components: {Tiny, DateTimePicker, UploadImage},

    props: {
        pageData: {
            type: Object,
            required: true,
        }
    },

    data() {
        return {
            logo: [],
            pageEditor: {
                dialog: false,
                title: '',
                page: null,
            },


            activeBlocks: [],
            blocks: [
                {
                    title: 'title 1',
                    images: [],
                    description: null,
                },
                {
                    title: 'title 2',
                    images: [],
                    description: 'description',
                },

            ],
        }
    },

    computed: {},

    methods: {
        addBlock() {
            this.blocks.push({
                title: null,
                images: [],
                description: null
            });
        },

        removeBlock(index) {
            this.activeBlocks = [];
            setTimeout(() => {
                this.blocks.splice(index, 1);
            }, 300)
        }
    },
};
</script>

<style lang="scss">


</style>
