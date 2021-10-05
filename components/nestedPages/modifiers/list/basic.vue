<template>
    <v-card class="carEdit px-2 elevation-0 rounded-0">

        <v-card-text class="d-flex flex-column px-4">
            <v-row>
                <v-col sm="6">
                    <v-subheader class="px-0">Размер скидки</v-subheader>

                    <div class="editPage__info mb-6">
                        <div class="px-0 flex-column align-start">
                            <v-row class="editPage__infoRow mt-0 mb-8">
                                <v-col cols="12"
                                       sm="12"
                                       md="6"
                                       class="py-0">
                                    <v-text-field v-if="pageData.unit === 'RUB' || pageData.unit === 'EUR'"
                                                  class="editPage__infoInput rounded-0"
                                                  label="Цена"
                                                  dense
                                                  filled
                                                  hide-details
                                                  v-mask="currency"
                                                  v-model="pageData.discount">
                                    </v-text-field>
                                    <v-text-field v-if="pageData.unit === 'Процент'"
                                                  class="editPage__infoInput rounded-0"
                                                  label="Цена"
                                                  dense
                                                  filled
                                                  hide-details
                                                  v-mask="'###%'"
                                                  v-model="pageData.discount">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12"
                                       sm="12"
                                       md="6"
                                       class="py-0">
                                    <v-select class="editPage__infoInput rounded-0"
                                              label="Единица измерения"
                                              :items="['RUB', 'EUR','Процент']"
                                              dense
                                              filled
                                              hide-details
                                              v-model="pageData.unit"/>
                                </v-col>
                            </v-row>

                            <v-row class="editPage__infoRow mb-6">
                                <v-col cols="6"
                                       sm="12"
                                       class="py-0">
                                    <v-textarea class="editPage__infoInput rounded-0"
                                                hide-details
                                                v-model="pageData.desc"
                                                filled
                                                rows="4"
                                                label="Краткое описание"/>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-col>

                <v-col sm="6">
                    <v-subheader class="px-0">Информация</v-subheader>

                    <v-row class="mb-2">
                        <v-col sm="7">
                            <v-select class="editPage__infoInput rounded-0"
                                      label="Тип"
                                      dense
                                      filled
                                      :items="['123', 'fdfewr2e', '123123']"
                                      hide-details
                                      v-model="pageData.type"/>
                        </v-col>

                        <v-col sm="7">
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="pageData.dates"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        class="dateFinder"
                                        v-model="pageData.dates"
                                        label="Период"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="pageData.dates"
                                    no-title
                                    scrollable
                                    range
                                >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="menu = false"
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="$refs.menu.save(pageData.dates)"
                                    >
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-card-text>
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
            currency,
            menu: false
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
