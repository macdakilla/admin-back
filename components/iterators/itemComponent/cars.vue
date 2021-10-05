<template>
    <v-card class="iteratorsCar" flat tile>
        <v-card-title class="d-f px-4 py-1">
            <v-checkbox v-model="item._selected"
                        hide-details
                        color="blue darken-3"
                        class="ma-0 pa-0 mr-1"
                        @click="updateSelected()"
            />

            <n-link class="iteratorsCar__titleText subheading font-weight-bold mr-auto"
                    :to="{name:'tabs-tab-slug',params:{slug: '23'}}">
                {{ item.name }}
            </n-link>

            <div class="iteratorsCar__titleNumbers mr-8">
                id: 00324234234 | vin: WEQE738939RW238
            </div>

            <div class="iteratorsCar__titleControls">
                <div class="iteratorsCar__titleControl">
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                v-bind="attrs"
                                v-on="on"
                                color="grey"
                            >
                                mdi-youtube
                            </v-icon>
                        </template>
                        <span>45874564987</span>
                    </v-tooltip>
                </div>

                <div class="iteratorsCar__titleControl">
                    <v-icon small color="grey">mdi-plus-circle-outline</v-icon>
                    21.10.2020
                </div>

                <div class="iteratorsCar__titleControl">
                    <v-icon small color="grey">mdi-pencil-outline</v-icon>
                    22.10.2020
                </div>

                <div class="iteratorsCar__titleControl">
                    <v-icon small color="grey">mdi-eye-outline</v-icon>
                    112
                </div>

                <div class="iteratorsCar__titleControlStatus">
                    Статус
                    <v-switch
                        dense
                        class="iteratorsCar__titleControl ma-0 ml-2 pt-0"
                        v-model="status"
                        hide-details
                    />
                </div>
            </div>
        </v-card-title>

        <v-card-text class="d-flex px-4">
            <div class="iteratorsCar__info py-6">
                <div class="px-0 flex-column align-start">
                    <v-row class="iteratorsCar__infoRow">
                        <v-col cols="12"
                               sm="12"
                               md="4"
                               class="py-0">
                            <v-text-field class="iteratorsCar__infoInput rounded-0"
                                          label="Цена"
                                          dense
                                          v-mask="currency"
                                          v-model="price">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12"
                               sm="12"
                               md="4"
                               class="py-0">
                            <v-text-field class="iteratorsCar__infoInput rounded-0"
                                          label="Спец. цена"
                                          dense
                                          v-mask="currency"
                                          v-model="specialPrice"/>
                        </v-col>

                        <v-col cols="12"
                               sm="12"
                               md="4"
                               class="py-0">
                            <v-text-field class="iteratorsCar__infoInput rounded-0"
                                          label="Спец. цена 2"
                                          dense
                                          v-mask="currency"
                                          v-model="specialPrice2"/>
                        </v-col>
                    </v-row>
                    <v-row class="iteratorsCar__infoRow">
                        <v-col cols="12"
                               sm="6"
                               class="py-0">
                            <div class="iteratorsCar__infoModifiers">
                                <div class="iteratorsCar__infoModifiersTitle">Модификаторы</div>
                                <ul class="iteratorsCar__infoModifiersList">
                                    <li class="iteratorsCar__infoModifiersItem">Модификатор 1</li>
                                    <li class="iteratorsCar__infoModifiersItem">Модификатор 2</li>
                                    <li class="iteratorsCar__infoModifiersItem">Модификатор 3</li>
                                    <li class="iteratorsCar__infoModifiersItem">Модификатор 4</li>
                                    <li class="iteratorsCar__infoModifiersItem">Модификатор 5</li>
                                    <li class="iteratorsCar__infoModifiersItem">Модификатор 6</li>
                                    <li class="iteratorsCar__infoModifiersItem">Модификатор 7</li>
                                </ul>
                            </div>
                        </v-col>

                        <v-col cols="12"
                               sm="6"
                               class="py-0">
                            <v-textarea class="iteratorsCar__infoInput"
                                        hide-details
                                        rows="4"
                                        label="Оффер"/>
                        </v-col>
                    </v-row>
                </div>
            </div>

            <div class="iteratorsCar__images pl-8">
                <upload-image :items="images" title="Фото" @updateItems="images = $event" resolution="1400*900"/>
                <template v-for="chip in chips">
                    <v-chip
                        v-if="chip.active"
                        class="ma-2"
                        close
                        @click:close="chip.active = false"
                    >
                        {{ chip.text }}
                    </v-chip>
                </template>
            </div>
        </v-card-text>

        <div class="iteratorsCar__bottom px-4 py-2">
            <ul class="iteratorsCar__specs pa-0 mr-6">
                <li class="iteratorsCar__specsItem" v-for="i in 6">
                    <v-icon class="iteratorsCar__specsItemIcon"
                            color="red"
                            small>
                        mdi-close
                    </v-icon>
                    <div class="iteratorsCar__specsItemContent">
                        <div class="iteratorsCar__specsItemTitle">Title</div>
                        <div class="iteratorsCar__specsItemValue">63gfh435uy3uy3ey32</div>
                    </div>
                </li>
            </ul>

            <div class="iteratorsCar__bottomControls flex-shrink-0 ml-auto">

                <v-btn icon
                       class="iteratorsCar__bottomControl"
                       title="Редактировать"
                       :to="{name:'tabs-tab-slug',params:{slug: '23'}}">
                    <v-icon class="iteratorsCar__bottomControlIcon">
                        mdi-pencil
                    </v-icon>
                </v-btn>

                <v-btn icon
                       class="iteratorsCar__bottomControl"
                       href="https://yandex.ru"
                       rel="nofollow"
                       target="_blank"
                       title="Просмотр">
                    <v-icon class="iteratorsCar__bottomControlIcon">
                        mdi-open-in-new
                    </v-icon>
                </v-btn>

                <action-confirm @apply="">
                    <v-btn icon
                           class="iteratorsCar__bottomControl"
                           title="Удалить">
                        <v-icon class="iteratorsCar__bottomControlIcon">
                            mdi-delete
                        </v-icon>
                    </v-btn>
                </action-confirm>

                <v-menu top
                        left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon
                               class="iteratorsCar__bottomControl"
                               :id="`carAdditionalMenu${id}`"
                               v-bind="attrs"
                               v-on="on">
                            <v-icon class="iteratorsCar__bottomControlIcon">
                                mdi-dots-vertical
                            </v-icon>
                        </v-btn>
                    </template>

                    <v-list dense>
                        <v-list-item>
                            <v-list-item-title>Генерация КП</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Генерация оплаты</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

            </div>
        </div>
    </v-card>
</template>

<script>
import UploadImage from '@/components/uploadImage/index';
import {currency} from '@/core/maskPresets';
import ActionConfirm from "@/components/actionConfirm/index";

export default {
    name: 'iteratorsCar',

    components: {ActionConfirm, UploadImage},

    props: {
        item: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            currency,
            price: '',
            id: 44123123,
            specialPrice: '',
            specialPrice2: '',
            status: false,
            chips: [
                {
                    active: true,
                    text: 'Стикер 1'
                },
                {
                    active: true,
                    text: 'Стикер 2'
                },
                {
                    active: true,
                    text: 'Стикер 3'
                },
                {
                    active: true,
                    text: 'Стикер 4'
                },
                {
                    active: true,
                    text: 'Стикер 5'
                },
            ],
            images: [
                {name: 'name', src: '/img/01.jpg'},
                {name: 'name', src: '/img/02.jpg'},
                {name: 'name', src: '/img/03.jpg'},
                {name: 'name', src: '/img/04.jpg'},
            ],
        };
    },

    methods: {
        log(e) {
            console.log(e);
        },

        updateSelected() {
            this.$emit('update:selected');
        },
    },
};
</script>

<style lang="scss">
.iteratorsCar {

    &__titleText.subheading {
        color: $colorBlack;
    }

    &__titleNumbers {
        font-size: 12px;

        color: $colorGray;
    }


    &__titleControls {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    &__titleControl {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 18px;

        font-size: 12px;
        color: $colorGray;

        .v-icon {
            margin-right: 5px;
        }

        &--icon {
            padding: 3px;

            font-size: 20px;
        }
    }

    &__titleControlStatus {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        margin-left: 25px;

        color: $colorGray;
        line-height: 1.3;
        font-size: 12px;
    }

    &__info {
        width: 40%;
    }

    &__infoInput {
        .v-label {
            font-size: 14px;
        }

        .v-textarea {
            textarea {
                max-height: 100px;

                line-height: 1.4;
                font-size: 14px;
            }
        }
    }

    &__infoRow {
        width: 100%;
    }

    &__images {
        width: 60%;
    }

    &__bottom {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    &__bottomControls {
        margin-left: auto;
    }

    &__bottomControl {
        width: 36px;
        height: 36px;
        padding: 3px;
        margin-left: 10px;

        font-size: 20px;
        opacity: .8;

        transition: opacity .1s .1s ease;

        &:hover {
            opacity: 1;
        }
    }

    &__specs {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 0 -10px -6px;
        padding: 0;
        list-style: none;
    }

    &__specsItem {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0 10px 6px;

        opacity: .6;
    }

    &__specsItemContent {
        line-height: 1.2;
    }

    &__specsItemIcon {
        margin: 0 5px 0 0;
    }

    &__specsItemValue {
        font-size: 12px;
    }

    &__specsItemTitle {
        margin-bottom: 2px;

        font-size: 10px;
    }


    &__infoModifiers {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        height: 100%;
        padding-top: 16px;
    }

    &__infoModifiersTitle {
        font-size: 14px;
    }

    &__infoModifiersList {
        flex-grow: 1;
        max-height: 92px;
        padding: 5px 0;
        margin-bottom: -1px;

        border-bottom: 1px solid $colorGrayL;
        overflow: auto;
        list-style: none;
    }

    &__infoModifiersItem {
        position: relative;
        margin-bottom: 5px;

        line-height: 1.2;

        &:after {
            content: "\F012C";
            position: absolute;
            right: 100%;
            top: 3px;
            margin-right: 5px;

            color: $colorGreen;
            font: normal normal normal 16px/1 "Material Design Icons";
        }
    }

}
</style>
