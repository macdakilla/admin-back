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

                <div class="editPage__titleControls ml-auto">
                    <div class="editPage__titleControlStatus">
                        По умолчанию
                        <v-switch
                            dense
                            class="editPage__titleControl ma-0 ml-2 pt-0"
                            v-model="pageData.default"
                            hide-details
                        />
                    </div>
                    <div class="editPage__titleControlStatus">
                        Обязательный МЦ
                        <v-switch
                            dense
                            class="editPage__titleControl ma-0 ml-2 pt-0"
                            v-model="pageData.requireMC"
                            hide-details
                        />
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

                <action-confirm @apply="">
                    <v-btn icon
                           class="editPage__topControl"
                           title="Удалить">
                        <v-icon class="editPage__topControlIcon">
                            mdi-delete
                        </v-icon>
                    </v-btn>
                </action-confirm>
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
    </div>
</template>

<script>
import basic from './basic';
import communications from './communications';
import breadcrumbs from '@/core/mixins/breadcrumbs';
import PageController from '@/components/pageController/index';
import ActionConfirm from "@/components/actionConfirm/index";

export default {
    name: 'index',

    components: {
        ActionConfirm,
        PageController,
        basic,
        communications,
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
            tabList: [
                {
                    label: 'Основное',
                    component: {
                        name: 'basic',
                    },
                },
                {
                    label: 'Связи',
                    component: {
                        name: 'communications',
                    },
                }
            ],
            currentTab: {},
            pageData: {
                type: '123',
                discount: '10000',
                desc: 'Краткое описание',
                unit: 'RUB',
                status: true,
                requireMC: false,
                default: false,
                dates: [],
                compatibility: []
            },
        };
    },

    beforeMount() {
        this.breadcrumbs.update({
            tabs: {text: 'Модификаторы'},
            tab: {text: 'Основные'},
            slug: {text: 'Name'},
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
