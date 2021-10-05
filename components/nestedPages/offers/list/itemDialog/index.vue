<template>
    <v-dialog v-model="dialogStatus"
              v-if="Object.keys(editItem).length"
              max-width="1200">
        <v-card>
            <v-card-title class="px-4">
                {{ editItem._isEdit ? 'Редактирование' : 'Создание' }} элемента СП

                <div class="d-flex body-2 font-weight-medium ml-auto">
                    <div class="d-flex align-center ml-4">
                        <v-icon class="mr-2" small color="grey">mdi-plus-circle-outline</v-icon>
                        21.10.2020
                    </div>

                    <div class="d-flex align-center ml-4">
                        <v-icon class="mr-2" small color="grey">mdi-pencil-outline</v-icon>
                        22.10.2020
                    </div>

                    <div class="d-flex align-center ml-8">
                        Статус
                        <v-switch
                            dense
                            class="iteratorsDc__titleControl ma-0 ml-2 pt-0"
                            v-model="editItem.status"
                            hide-details
                        />
                    </div>
                </div>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="py-4">
                <v-row>
                    <v-col sm="6">
                        <v-row>
                            <v-col sm="12" class="d-flex">
                                <upload-image class="mr-4"
                                              :items="curEditItem.images"
                                              :max-count="1"
                                              resolution="120*auto"
                                              title="Изображение"
                                              @updateItems="updateImages($event)"/>
                                <v-fade-transition>
                                    <v-btn v-if="hasRelativeCar"
                                           class="mt-8"
                                           color="primary"
                                           outlined
                                           small
                                           @click="updateImages([])">
                                        Подгрузить из авто
                                    </v-btn>
                                </v-fade-transition>
                            </v-col>

                            <v-col sm="12">
                                <v-text-field class="editPage__infoInput rounded-0 mb-4"
                                              label="Название"
                                              dense
                                              filled
                                              hide-details
                                              v-model="curEditItem.title">
                                </v-text-field>

                                <v-autocomplete v-model="curEditItem.relativeCar"
                                                class="mb-2"
                                                :items="searchItems"
                                                :loading="searchIsLoading"
                                                :search-input.sync="search"
                                                clearable
                                                dense
                                                filled
                                                hide-details
                                                hide-no-data
                                                hide-selected
                                                item-text="Description"
                                                item-value="API"
                                                label="Привязать автомобиль"
                                                placeholder="Начните вводить номер заказа/VIN/Название"
                                                return-object/>

                                <v-expand-transition>
                                    <div class="caption" v-if="hasRelativeCar">
                                        Доступны шорткоды:
                                        <code class="cursor-pointer"
                                              title="Скопировать"
                                              @click="clipboardCopy('{name}')">
                                            {name}
                                        </code>,
                                        <code class="cursor-pointer"
                                              title="Скопировать"
                                              @click="clipboardCopy('{model}')">
                                            {model}
                                        </code>,
                                        <code class="cursor-pointer"
                                              title="Скопировать"
                                              @click="clipboardCopy('{price}')">
                                            {price}
                                        </code>
                                    </div>
                                </v-expand-transition>
                            </v-col>

                            <v-col sm="12">
                                <tiny/>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col sm="6">
                        <v-expand-transition v-for="(button, index) in curEditItem.buttons" :key="index">
                            <div>
                                <item-dialog-button v-bind="button"
                                                    :title="`Кнопка ${index + 1}`"
                                                    :key="'item' + index"
                                                    @update:button="updateButton(index, $event)"
                                                    @remove="curEditItem.buttons.splice(index, 1)"
                                />
                                <v-divider v-if="index < curEditItem.buttons.length - 1" :key="'divider' + index"/>
                            </div>
                        </v-expand-transition>

                        <template v-if="curEditItem.buttons && curEditItem.buttons.length < 3">
                            <v-divider v-if="curEditItem.buttons && curEditItem.buttons.length"/>
                            <v-btn class="mt-4"
                                   color="primary"
                                   outlined
                                   small
                                   @click="curEditItem.buttons.push({})">
                                Добавить кнопку
                            </v-btn>
                        </template>
                    </v-col>
                </v-row>
            </v-card-text>

            <div style="position: sticky; bottom: 0;" class="white">
                <v-divider></v-divider>

                <v-card-actions>
                    <v-btn
                        color="primary"
                        text
                        @click="save()">
                        Сохранить
                    </v-btn>
                </v-card-actions>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
import UploadImage from "@/components/uploadImage/index";
import Tiny from "@/components/tiny/index";
import ItemDialogButton from "./button";
import clipboard from "@/core/mixins/clipboard";

export default {
    name: "ItemDialog",

    components: {ItemDialogButton, Tiny, UploadImage},

    mixins: [clipboard],

    props: {
        status: {
            type: Boolean,
            default: false,
        },

        editItem: {
            type: Object,
            default() {
                return {}
            }
        }
    },

    watch: {
        search() {
            if (this.searchItems.length > 0) return
            if (this.searchIsLoading) return
            this.searchIsLoading = true

            fetch('https://api.publicapis.org/entries')
                .then(res => res.json())
                .then(res => {
                    const {count, entries} = res
                    this.searchItems = entries.map(entry => {
                        const Description = entry.Description

                        return Object.assign({}, entry, {Description})
                    })
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => (this.searchIsLoading = false))
        },
    },

    data() {
        return {
            searchItems: [],
            searchIsLoading: false,
            search: null,
            curItem: {}
        }
    },

    computed: {
        dialogStatus: {
            get() {
                return this.status
            },

            set(val) {
                this.$emit('update:status', val)
            }
        },

        curEditItem() {
            if (this.editItem) {
                return this.editItem;
            } else {
                return {}
            }
        },

        hasRelativeCar() {
            return this.curEditItem.relativeCar && (this.curEditItem.relativeCar).toString() === '[object Object]' && Object.keys(this.curEditItem.relativeCar).length
        }
    },

    methods: {
        updateImages(e) {
            if (Array.isArray(e) === false || !e.length) {
                e = []
            }
            this.curEditItem.images = e;
        },

        save() {
            this.$emit('update:editItem', this.curEditItem)
            this.$emit('update:status', false)
        },

        updateButton(index, value) {
            // this.$forceUpdate()
            // this.curEditItem.buttons[index] = value;
            this.$set(this.curEditItem.buttons, index, value)
        }
    },


}
</script>

<style scoped>

</style>
