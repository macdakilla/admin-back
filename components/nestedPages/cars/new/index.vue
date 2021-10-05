<template>
    <div>
        <h1 class="mb-5">{{ pageData.name }}</h1>

        <v-card>
            <v-tabs class="rounded-0 rounded-t"
                    color="blue darken-2"
                    background-color="grey lighten-5"
                    v-model="currentTab"
                    hide-slider>
                <v-tab v-for="(item, index) in tabList"
                       :key="item.label + index">
                    {{ item.label }}
                </v-tab>
            </v-tabs>

            <v-card-title class="d-f py-2">
                <div class="editPage__titleNumbers mr-8">
                    id: 00324234234 | vin: {{ pageData.vin }}
                </div>

                <div class="editPage__titleControls ml-auto">
                    <div class="editPage__titleControl">
                        <v-icon small color="grey">mdi-plus-circle-outline</v-icon>
                        21.10.2020
                    </div>

                    <div class="editPage__titleControl">
                        <v-icon small color="grey">mdi-pencil-outline</v-icon>
                        22.10.2020
                    </div>

                    <div class="editPage__titleControl">
                        <v-icon small color="grey">mdi-eye-outline</v-icon>
                        112
                    </div>

                    <div class="editPage__titleControlStatus">
                        Статус
                        <v-switch
                            dense
                            class="editPage__titleControl ma-0 ml-2 pt-0"
                            v-model="pageData.status"
                            hide-details
                        />
                    </div>
                </div>

                <v-btn class="editPage__titleControl"
                       icon
                       title="История действий"
                       @click="historyDialog = true">
                    <v-icon class="mx-auto" color="grey">mdi-history</v-icon>
                </v-btn>

                <v-btn icon
                       class="editPage__topControl"
                       href="https://yandex.ru"
                       rel="nofollow"
                       target="_blank"
                       title="Просмотр">
                    <v-icon class="editPage__topControlIcon">
                        mdi-open-in-new
                    </v-icon>
                </v-btn>

                <action-confirm @apply="">
                    <v-btn icon
                           class="editPage__topControl"
                           title="Удалить">
                        <v-icon class="editPage__topControlIcon">
                            mdi-delete
                        </v-icon>
                    </v-btn>
                </action-confirm>

                <v-menu top
                        left>

                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon
                               class="editPage__topControl"
                               id="additionalMenu"
                               v-bind="attrs"
                               v-on="on">
                            <v-icon class="editPage__topControlIcon">
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
            </v-card-title>


            <v-tabs-items v-model="currentTab" continuous touchless>
                <v-tab-item
                    v-for="item in tabList"
                    :key="(item.component || {}).name">
                    <component :is="item.component.name" :pageData="pageData"/>
                </v-tab-item>
            </v-tabs-items>

            <page-controller @save="save($event)" @cancel="cancel()"/>

        </v-card>

        <v-dialog v-model="historyDialog"
                  max-width="800"
                  scrollable>
            <v-card>
                <v-card-title class="px-4">
                    История действий
                </v-card-title>

                <v-divider></v-divider>

                <v-card-text class="px-0" style="height: 300px;">
                    <v-list class="py-0">
                        <template v-for="(item, index) in historyItems">
                            <v-list-item class="mb-0"
                                         dense>
                                <v-list-item-content class="py-1">
                                    <div class="d-flex align-top">
                                        <div class="mr-1 flex-shrink-0">
                                            {{ item.date }}:
                                        </div>
                                        {{ item.text }}
                                    </div>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider/>
                        </template>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import seo from './seo';
import basic from './basic';
import addition from './addition';
import breadcrumbs from '@/core/mixins/breadcrumbs';
import PageController from '@/components/pageController/index';
import ActionConfirm from "@/components/actionConfirm/index";

export default {
    name: 'index',

    components: {
        ActionConfirm,
        PageController,
        seo,
        basic,
        addition,
    },

    mixins: [
        breadcrumbs,
    ],

    head() {
        return {
            title: this.pageData.name,
        }
    },

    data() {
        return {
            historyDialog: false,
            historyItems: [
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque qui quos vel.',
                    date: '10.10.2021'
                },
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque qui quos vel.',
                    date: '10.10.2021'
                },
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque qui quos vel.',
                    date: '10.10.2021'
                },
            ],
            tabList: [
                {
                    label: 'Основное',
                    component: {
                        name: 'basic',
                    },
                },
                {
                    label: 'Дополнительные',
                    component: {
                        name: 'addition',
                    },
                },
                {
                    label: 'SEO',
                    component: {
                        name: 'seo',
                    },
                },
            ],
            currentTab: {},
            pageData: {
                name: 'Hyundai Sanata',

                modifiers: [
                    {id: 0, label: 'Lorem ipsum dolor sit.', _selected: false},
                    {id: 1, label: 'Lorem ipsum dolor sit amet.', _selected: false},
                    {id: 2, label: 'Lorem ipsum dolor sit amet, consectetur.', _selected: false},
                ],
                price: '',
                specialPrice: '',
                specialPrice2: '',
                vin: 'WEQE738939RW238',
                status: true,
                images: [
                    {name: 'name', src: '/img/01.jpg'},
                    {name: 'name', src: '/img/02.jpg'},
                    {name: 'name', src: '/img/03.jpg'},
                    {name: 'name', src: '/img/04.jpg'},
                ],
            },
        };
    },

    beforeMount() {
        this.breadcrumbs.update({
            tabs: {text: 'Автомобили'},
            tab: {text: 'Новые'},
            slug: {text: 'Hyundai Sonata'},
        });
    },

    methods: {
        save(exitCallback) {
            this.$emit('pageEvent', {
                type: 'save',
                newSlug: '998',
                toast: {type: 'success', content: 'Сохранено!'},
                exitCallback: exitCallback,
                callbackBefore: () => {
                    console.log('before');
                },
                callbackAfter: () => {
                    console.log('after');
                },

            })
        },

        cancel() {
            console.log('cancel');
        }
    },
};
</script>
