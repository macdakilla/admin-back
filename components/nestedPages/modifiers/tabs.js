const tabs = [
    {
        label: 'Модификаторы',
        to: {name: 'tabs-tab', params: {tabs: 'modifiers', tab: 'list'}},
        breadcrumbs: {tabs: {text: 'Модификаторы'}, tab: {text: 'Список'}},
        component: {
            path: 'iterators/index.vue',
            props: {
                topComponent: {path: 'iterators/topComponent/default.vue',
                    props: {
                        integrationButtons: false,
                        hideStatusFilter: true
                    }
                },
                beforeListingComponent: {
                    path: false
                },
                itemComponent: {
                    path: 'iterators/itemComponent/modifiers.vue',
                    props: {
                        hideOpen: true
                    }
                },
                items: [
                    {
                        id: 1,
                        name: 'Супер скидон',
                        discount: 10000,
                        default: false,
                        requireMC: false,
                        status: false
                    },
                    {
                        id: 2,
                        name: 'Супер распродажа',
                        discount: 99000,
                        default: false,
                        requireMC: false,
                        status: false
                    }
                ]
            }
        }
    },
]

const indexPage = {
    seo: {title: 'Модификаторы'},
};

export default {tabs, indexPage}
