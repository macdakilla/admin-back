<template>
    <v-card class="px-2 elevation-0 rounded-0">
        <v-card-text class="d-flex flex-column px-4">
            <v-subheader class="px-0">Список элементов</v-subheader>
            <v-row class="mb-2">
                <v-col sm="6">
                    <v-expand-transition v-for="(block, index) in blocks" :key="index">
                        <v-sheet>
                            <v-card class="d-flex elevation-0 mb-2" outlined>
                                <v-card-text>
                                    <div>
                                        <div class="subtitle-1 text--primary">
                                            {{ block.title }}
                                        </div>
                                        <div>{{ (block.relativeCar || {}).description }}</div>
                                    </div>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn icon
                                           class="editPage__topControl"
                                           title="Редактировать"
                                           @click="editBlock(index)">
                                        <v-icon class="editPage__topControlIcon">
                                            mdi-pencil
                                        </v-icon>
                                    </v-btn>

                                    <action-confirm @apply="removeBlock(index)">
                                        <v-btn icon
                                               class="editPage__topControl"
                                               title="Удалить">
                                            <v-icon class="editPage__topControlIcon">
                                                mdi-delete
                                            </v-icon>
                                        </v-btn>
                                    </action-confirm>
                                </v-card-actions>
                            </v-card>
                        </v-sheet>
                    </v-expand-transition>

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

        <item-dialog :editItem="editItem"
                     :status="itemDialog"
                     @update:status="itemDialog = $event"
                     @update:editItem="saveItem($event)"/>
    </v-card>
</template>

<script>
import UploadImage from '@/components/uploadImage/index';
import DateTimePicker from "@/components/date-picker/index";
import Tiny from "@/components/tiny/index";
import ItemDialog from "@/components/nestedPages/offers/list/itemDialog/index";
import ActionConfirm from "@/components/actionConfirm/index";

export default {
    name: 'items',

    components: {ActionConfirm, ItemDialog, Tiny, DateTimePicker, UploadImage},

    props: {
        pageData: {
            type: Object,
            required: true,
        }
    },


    data() {
        return {
            itemDialog: false,
            editItem: {},
            blocks: [
                {
                    title: 'title 1',
                    relativeCar: {},
                    images: [],
                    description: null,
                    buttons: []
                },
                {
                    title: 'title 2',
                    images: [],
                    relativeCar: {},
                    description: 'description',
                    buttons: []
                },

            ],
        }
    },

    methods: {
        log(e) {
            console.log(e);
        },

        addBlock() {
            this.itemDialog = true
            this.editItem = {_isEdit: false, buttons:[{},{}], images: [] };
        },

        editBlock(index) {
            this.itemDialog = true
            this.editItem = {...this.blocks[index], _isEdit: true, _index: index};
        },

        removeBlock(index) {
            this.blocks.splice(index, 1);
        },

        saveItem(e) {
            if (e.hasOwnProperty('_index')) {
                this.blocks[e._index] = e
            } else {
                this.blocks.push(e)
            }
        }
    },
};
</script>

<style lang="scss">


</style>
