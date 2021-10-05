<template>
    <v-card class="carEdit px-2 elevation-0 rounded-0">

        <v-card-text class="d-flex flex-column px-4">
            <div class="editPage__images mb-8">
                <upload-image :items="pageData.images"
                              title="Фото"
                              :max-count="1"
                              @updateItems="pageData.images = $event"
                              resolution="1400*900"/>
            </div>

            <v-row>
                <v-col sm="6">
                    <v-subheader class="px-0">Информация</v-subheader>

                    <v-row class="mb-2">
                        <v-col sm="12">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Название"
                                          dense
                                          filled
                                          hide-details
                                          v-model="pageData.name"/>
                        </v-col>

                        <v-col sm="6">
                            <date-time-picker class="editPage__infoInput"
                                              :label="'Дата окончания'"
                                              :input-props="{ dense: true, filled: true, 'hide-details': true, range: true, class: 'rounded-0'}"
                                              v-model="time"/>
                        </v-col>

                        <v-col sm="6">
                            <v-select class="editPage__infoInput rounded-0"
                                      label="Тип"
                                      :items="typeList"
                                      clearable
                                      dense
                                      filled
                                      hide-details
                            />
                        </v-col>

                        <v-col sm="12">
                            <v-textarea class="editPage__infoInput rounded-0"
                                        hide-details
                                        filled
                                        rows="4"
                                        label="Краткое описание"/>
                        </v-col>
                    </v-row>

                    <v-subheader class="px-0">Текст спецпредложения. Доступны шорткоды:
                        <code class="cursor-pointer"
                              title="Элементы спецпредложений"
                              @click="clipboardCopy('{elementList}')">
                            {elementList}
                        </code>
                    </v-subheader>
                    <tiny/>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import UploadImage from '@/components/uploadImage/index';
import Tiny from "@/components/tiny/index";
import DateTimePicker from "@/components/date-picker/index";
import clipboard from "@/core/mixins/clipboard";

export default {
    name: 'Basic',

    components: {DateTimePicker, Tiny, UploadImage},

    mixins: [clipboard],

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
            modifiersDialog: false,
            modifiersDialogList: [],
            time: {},
            typeList: [
                'Новые автомобили',
                'Автомобили с пробегом',
                'Сервис',
                'Новые малотоннажные автомобили',
                'Финансовые услуги',
            ]
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
