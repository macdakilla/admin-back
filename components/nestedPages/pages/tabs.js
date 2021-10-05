const tabs = [
    {
        label: 'Параметры',
        to: {name: 'tabs', params: {tabs: 'pages'}},
        breadcrumbs: {tabs: {text: 'Страницы'}},
        component: {path: 'nestedPages/pages/index.vue'}
    },
    {
        label: 'Стандартные',
        to: {name: 'tabs-tab', params: {tabs: 'pages', tab: 'default'}},
        breadcrumbs: {tabs: {text: 'Страницы'}, tab: {text: 'Стандартные'}},
        component: {
            path: 'iterators/index.vue',
            props: {
                itemComponent: {
                    path: 'iterators/itemComponent/pages.vue'
                },
                items: [
                    {id: 1, name: `Главная`, _selected: false},
                    {id: 2, name: `Контакты`, _selected: false},
                    {id: 3, name: `Выкуп авто`, _selected: false}
                ]
            }
        },
    },
    {
        label: 'Созданные',
        to: {name: 'tabs-tab', params: {tabs: 'pages', tab: 'custom'}},
        breadcrumbs: {tabs: {text: 'Страницы'}, tab: {text: 'Созданные'}},
        component: {
            path: 'iterators/index.vue',
            props: {
                itemComponent: {path: 'iterators/itemComponent/pages.vue'},
            }
        },
    },
    {
        label: 'Группы блоков',
        to: {name: 'tabs-tab', params: {tabs: 'pages', tab: 'blockGroups'}},
        breadcrumbs: {tabs: {text: 'Страницы'}, tab: {text: 'Группы блоков'}},
        component: {
            path: 'iterators/index.vue',
            props: {
                itemComponent: {
                    path: 'iterators/itemComponent/default.vue',
                    props: {
                        fields: ['name'],
                        hideStatus: true,
                        hideRemove: true,
                        hideOpen: true
                    }
                },
                beforeListingComponent: {path: 'iterators/beforeListing/default', props: {selectHideRemove: true}},
            }
        },
    },
]


const indexPage = {
    seo: {title: 'Страницы'},
};

export default {tabs, indexPage}

