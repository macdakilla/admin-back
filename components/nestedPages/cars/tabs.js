const tabs = [
    {
        label: 'Новые',
        to: {name: 'tabs-tab', params: {tabs: 'cars', tab: 'new'}},
        breadcrumbs: {tabs: {text: 'Автомобили'}, tab: {text: 'Новые'}},
        component: {
            path: 'iterators/index.vue',
            props: {
                topComponent: {path: 'iterators/topComponent/default.vue', props: {integrationButtons: true}},
                beforeListingComponent: {path: 'iterators/beforeListing/cars.vue'},
                itemComponent: {path: 'iterators/itemComponent/cars.vue'},
                // itemComponent: {path: 'iterators/itemComponent/default.vue', props:{fields: ['name']}},
            }
        },
    },
    {
        label: 'Подержанные',
        to: {name: 'tabs-tab', params: {tabs: 'cars', tab: 'used'}},
        breadcrumbs: {tabs: {text: 'Автомобили'}, tab: {text: 'Подержанные'}},
        component: {
            path: '',
            props: {
                topComponent: {path: 'iterators/topComponent/default.vue', props: {integrationButtons: true}},
                beforeListingComponent: {path: 'iterators/beforeListing/cars.vue'},
                itemComponent: {path: 'iterators/itemComponent/cars.vue'},
            }
        },
    },
    {
        label: 'Корпоративные',
        to: {name: 'tabs-tab', params: {tabs: 'cars', tab: 'corporate'}},
        breadcrumbs: {tabs: {text: 'Автомобили'}, tab: {text: 'Корпоративные'}},
        component: {
            path: 'iterators/index.vue',
            props: {
                topComponent: {path: 'iterators/topComponent/default.vue', props: {integrationButtons: true}},
                beforeListingComponent: {path: 'iterators/beforeListing/cars.vue'},
                itemComponent: {path: 'iterators/itemComponent/cars.vue'},
            }
        },
    },
]

const indexPage = {
    seo: {title: 'Автомобили'},
};

export default {tabs, indexPage}


