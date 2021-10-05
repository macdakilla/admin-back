<template>
    <div>
        <h1 class="mb-5">{{ pageData.name }}</h1>

        <v-card ref="card-fullscreen">
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

            <v-card-title class="grey lighten-3 d-f py-2">
                <div class="editPage__titleNumbers mr-8">
                    id: {{ id }}
                </div>

                <div class="editPage__titleControls ml-auto">
                    <div class="editPage__titleControl">
                        <v-btn elevation="0" outlined @click="changePageView">
                            {{ iframe.isView ? 'Предпросмотр' : 'Редактирование' }}
                        </v-btn>
                    </div>

                    <div class="editPage__titleControl">
                        <v-icon small color="grey">mdi-plus-circle-outline</v-icon>
                        21.10.2020
                    </div>

                    <div class="editPage__titleControl">
                        <v-icon small color="grey">mdi-pencil-outline</v-icon>
                        22.10.2020
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
                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn class="editPage__titleControl"
                               icon
                               v-bind="attrs"
                               v-on="on"
                               @click="historyDialog = true">
                            <v-icon class="mx-auto" color="grey">mdi-history</v-icon>
                        </v-btn>
                    </template>
                    <span>История действий</span>
                </v-tooltip>

                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn class="editPage__titleControl"
                               icon
                               v-bind="attrs"
                               v-on="on"
                               @click="toggleFullscreen">
                            <v-icon v-if="isFullscreen" class="mx-auto" color="grey">mdi-fullscreen-exit</v-icon>
                            <v-icon v-else class="mx-auto" color="grey">mdi-fullscreen</v-icon>
                        </v-btn>
                    </template>
                    <span>Открыть на полный экран</span>
                </v-tooltip>

            </v-card-title>


            <v-tabs-items v-model="currentTab" continuous touchless>
                <v-tab-item
                    v-for="item in tabList"
                    :key="(item.component || {}).name">
                    <component
                        :is="item.component.name"
                        :pageData="pageData"
                        :items="items"
                        :components="componentsList"
                        :iframe="iframe"
                        @updateItems="items = $event"
                        @update:iframe="updateIframe"
                        @addComponent="addComponent"
                    />
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
import basic from './basic';
import seo from './seo';
import breadcrumbs from '@/core/mixins/breadcrumbs';
import pageController from '@/components/pageController/index';

export default {
    name: 'cookie',

    components: {
        pageController,
        basic,
        seo
    },
    mixins: [
        breadcrumbs,
    ],
    data() {
        return {
            id: this.$route.params.slug,
            isFullscreen: false,
            historyDialog: false,
            iframe: {
                src: 'http://localhost:3000/',
                isView: false,
                isLoaded: false
            },
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
                        name: 'basic'
                    },
                },
                {
                    label: 'Seo',
                    component: {
                        name: 'seo',
                    },
                },
            ],
            currentTab: {},
            pageData: {
                name: 'Mercedes-Cascad',
                status: true,
            },
            items: [
                {
                    id: 0
                },
                {
                    id: 1
                },
                {
                    id: 2
                }
            ],
            componentsList: {
                photoSliders: {
                    label: 'Слайдеры баннеров',
                    content: [
                        'Слайдер баннеров 1',
                        'Слайдер баннеров 2',
                        'Слайдер баннеров 3',
                    ]
                },
                carsSliders: {
                    label: 'Слайдеры авто',
                    content: [
                        'Слайдер авто 1',
                        'Слайдер авто 2',
                        'Слайдер авто 3',
                    ]
                },
                catalogBrandsModels: {
                    label: 'Каталог моделей/брендов',
                    content: [
                        'Модель 1',
                        'Модель 2',
                        'Модель 3',
                        'Бренд 1',
                        'Бренд 2',
                        'Бренд 3',
                    ]
                },
                seo: {
                    label: 'SEO-блоки',
                    content: [
                        'Seo 1',
                        'Seo 2',
                        'Seo 3'
                    ]
                },
                feedback: {
                    label: 'Обратная связь',
                    content: [
                        'Обратная связь 1',
                        'Обратная связь 2',
                        'Обратная связь 3',
                    ]
                },
                default: {
                    label: 'Стандартные блоки',
                    content: [
                        'Текст + картинка 1',
                        'Список + картинка 2',
                        'Кнопка + текст 3',
                    ]
                },
                dropdown: {
                    label: 'Выпадающие списки',
                    content: [
                        'Выпадающие списки 1',
                        'Выпадающие списки 2',
                        'Выпадающие списки 3',
                    ]
                },
                tradeIn: {
                    label: 'Трейд-ин',
                    content: [
                        'Трейд-ин 1',
                        'Трейд-ин 2',
                        'Трейд-ин 3',
                    ]
                },
                testDrive: {
                    label: 'Тест-драйв',
                    content: [
                        'Тест-драйв 1',
                        'Тест-драйв 2',
                        'Тест-драйв 3',
                    ]
                },
            }
        };
    },

    beforeMount() {
        this.breadcrumbs.update({
            tabs: {text: 'Страницы'},
            tab: {text: 'Стандартные'},
            slug: {text: this.id},
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
        changePageView() {
            this.updateIframe('isLoaded', false);
            this.updateIframe('isView', !this.iframe.isView);
        },
        cancel() {
            console.log('cancel');
        },
        addComponent() {
            this.updateIframe('isLoaded', false);
            this.updateIframe('src', `${this.iframe.src}?${Math.random() * 100}=${Math.random() * 100}`);
        },
        updateIframe(option, value) {
            this.iframe[option] = value;
        },
        toggleFullscreen() {
            if (this.isFullscreen) {
                document.exitFullscreen();
            } else {
                this.$refs['card-fullscreen'].$el.requestFullscreen();
            }
            this.isFullscreen = !this.isFullscreen;
        }
    },
};
</script>

<style lang="scss">

</style>
