<template>
    <div>
        <h1 class="mb-5">{{ pageData.name }}</h1>

        <v-card>

            <v-card-title class="d-f py-2 grey lighten-5">
                <div class="editPage__titleNumbers mr-8">
                    id: {{ pageData.id }}
                </div>

                <div class="editPage__titleControls ml-auto">
                    <div class="editPage__titleControl">
                        <v-icon small color="grey">mdi-history</v-icon>
                        {{ pageData.lastLogin }}
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

            <component :is="contentComponent"
                       :pageData="pageData"
                       :statusList="statusList"
            />

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
import basic from './basic';
import breadcrumbs from '@/core/mixins/breadcrumbs';
import PageController from '@/components/pageController/index';
import ActionConfirm from "@/components/actionConfirm/index";

export default {
    name: 'index',

    components: {
        ActionConfirm,
        PageController,
        basic,
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
                    text: 'Удаление',
                    date: '10.10.2021'
                },
                {
                    text: 'Добавление',
                    date: '10.10.2021'
                },
                {
                    text: 'куцкуцкуцк',
                    date: '10.10.2021'
                },
            ],
            contentComponent: 'basic',
            currentTab: {},
            pageData: {
                name: 'Василий Пупкин',
                phone: '+7 (912) 349 25-03',
                lastLogin: '2021.10.01',
                email: 'mail@mail.ru',
                status: 'Админ',
                password: '23423423443',
                images: [
                    {name: 'name', src: '/img/01.jpg'},
                ],
                id: 1
            },
            statusList: [
                'Админ',
                'Супер-админ',
                'Менеджер'
            ]
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
