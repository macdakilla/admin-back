<template>
    <v-card class="carEdit px-2 elevation-0 rounded-0">

        <v-card-text class="d-flex flex-column px-4">
            <div class="editPage__images mb-8">
                <upload-image :items="pageData.images" title="Фото" @updateItems="pageData.images = $event" resolution="1400*900"/>
            </div>

            <v-row>
                <v-col sm="6">
                    <v-subheader class="px-0">Цены</v-subheader>

                    <div class="editPage__info mb-6">
                        <div class="px-0 flex-column align-start">
                            <v-row class="editPage__infoRow mt-0 mb-8">
                                <v-col cols="12"
                                       sm="12"
                                       md="4"
                                       class="py-0">
                                    <v-text-field class="editPage__infoInput rounded-0"
                                                  label="Цена"
                                                  dense
                                                  filled
                                                  hide-details
                                                  v-mask="currency"
                                                  v-model="pageData.price">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12"
                                       sm="12"
                                       md="4"
                                       class="py-0">
                                    <v-text-field class="editPage__infoInput rounded-0"
                                                  label="Спец. цена"
                                                  dense
                                                  filled
                                                  hide-details
                                                  v-mask="currency"
                                                  v-model="pageData.specialPrice"/>
                                </v-col>
                                <v-col cols="12"
                                       sm="12"
                                       md="4"
                                       class="py-0">
                                    <v-text-field class="editPage__infoInput rounded-0"
                                                  label="Спец. цена 2"
                                                  dense
                                                  filled
                                                  hide-details
                                                  v-mask="currency"
                                                  v-model="pageData.specialPrice2"/>
                                </v-col>
                            </v-row>

                            <v-row class="editPage__infoRow mb-10">
                                <v-col cols="12"
                                       sm="12"
                                       class="py-0">
                                    <div class="editPage__infoModifiers">
                                        <div class="editPage__infoModifiersTitle d-flex align-center">
                                            <v-subheader class="px-0 pr-3">
                                                Модификаторы ({{ modSelectedCounter }}/{{ pageData.modifiers.length }})
                                            </v-subheader>

                                            <v-btn color="primary" text x-small @click.stop="modifiersDialog = true">
                                                Редактировать
                                            </v-btn>
                                        </div>

                                        <v-list class="editPage__infoModifiersList"
                                                flat>
                                            <template v-for="item in pageData.modifiers">
                                                <v-list-item class="editPage__infoModifiersItem mb-0 pl-6"
                                                             :key="item.id"
                                                             v-if="item._selected">
                                                    <template v-slot:default="{ active, }">
                                                        <v-list-item-content class="py-1">
                                                            <v-list-item-title>{{ item.label }}</v-list-item-title>
                                                            <v-list-item-subtitle>- 10 000</v-list-item-subtitle>
                                                        </v-list-item-content>
                                                    </template>
                                                </v-list-item>
                                            </template>
                                        </v-list>
                                    </div>
                                </v-col>
                            </v-row>

                            <v-row class="editPage__infoRow mb-6">
                                <v-col cols="6"
                                       sm="12"
                                       class="py-0">
                                    <v-textarea class="editPage__infoInput rounded-0"
                                                hide-details
                                                filled
                                                rows="4"
                                                label="Оффер"/>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-col>

                <v-col sm="6">
                    <v-subheader class="px-0">Информация</v-subheader>

                    <v-row class="mb-2">
                        <v-col sm="7">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Название"
                                          dense
                                          filled
                                          hide-details
                                          v-model="pageData.name"/>
                        </v-col>

                        <v-col sm="7">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="VIN"
                                          dense
                                          filled
                                          hide-details
                                          v-model="pageData.vin"/>
                        </v-col>
                    </v-row>

                    <v-subheader class="px-0">Опции</v-subheader>

                    <div class="editPage__right">
                        <ul class="editPage__specs pa-0">
                            <li class="editPage__specsItem" v-for="i in 6">
                                <v-autocomplete class="editPage__specsItemSelect"
                                                label="Title"
                                                dense
                                                filled
                                                clearable
                                ></v-autocomplete>
                            </li>
                        </ul>
                    </div>
                </v-col>
            </v-row>
        </v-card-text>

        <v-dialog v-model="modifiersDialog"
                  max-width="300"
                  scrollable>
            <v-card>
                <v-card-title class="px-4">
                    <v-checkbox class="pa-0 ma-0 mr-2 align-center"
                                color="blue darken-3"
                                :indeterminate="modSelectedIndeterminate"
                                hide-details
                                v-model="modSelectedAll"
                                @click="clickModSelectAll()">
                    </v-checkbox>

                    Модификаторы
                </v-card-title>

                <v-divider></v-divider>

                <v-card-text class="px-0" style="height: 300px;">
                    <v-list-item-group class="py-2">
                        <template v-for="item in pageData.modifiers">
                            <v-list-item class="mb-0"
                                         :key="item.id"
                                         @click="item._selected = !item._selected">
                                <template v-slot:default>
                                    <v-list-item-action class="mr-4">
                                        <v-checkbox v-model="item._selected"
                                                    readonly
                                                    color="primary"
                                                    hide-details>
                                        </v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content class="py-1">
                                        <span class="lh-1 mb-1">{{ item.label }}</span>
                                        <v-list-item-subtitle>-10 000</v-list-item-subtitle>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>
                        </template>
                    </v-list-item-group>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
import UploadImage from '@/components/uploadImage/index';
import {currency} from "@/core/maskPresets";

export default {
    name: 'Basic',

    components: {UploadImage},

    props: {
        pageData: {
            type: Object,
            required: true,
        }
    },

    data() {
        return {
            modSelectedIndeterminate: false,
            modSelectedAll: false,
            currency,
            modifiersDialog: false,
            modifiersDialogList: [],
        };
    },

    computed: {
        modSelectedCounter() {
            const temp = [];
            this.pageData.modifiers.forEach(item => {
                if (item._selected) {
                    temp.push(item.id);
                }
            });

            this.modSelectedIndeterminate = temp.length ? temp.length !== this.pageData.modifiers.length : false;
            this.modSelectedAll = temp.length === this.pageData.modifiers.length;

            return temp.length;
        },
    },

    methods: {
        clickModSelectAll() {
            this.pageData.modifiers.forEach(item => item._selected = this.modSelectedAll);
        },
    },
};
</script>

<style lang="scss">

</style>
