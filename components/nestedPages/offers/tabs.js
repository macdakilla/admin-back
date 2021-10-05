const tabs = [
    {
        label: 'Спецпредложения',
        to: {name: 'tabs-tab', params: {tabs: 'offers', tab: 'list'}},
        breadcrumbs: {tabs: {text: 'Спецпредложения'}, tab: {text: 'Список'}},
        component: {
            path: 'iterators/index.vue',
            props: {
                topComponent: {path: 'iterators/topComponent/default.vue', props: {integrationButtons: true}},
                beforeListingComponent: {path: 'iterators/beforeListing/default.vue'},
                itemComponent: {path: 'iterators/itemComponent/offer.vue'},
            }
        }
    },
]

const indexPage = {
    seo: {title: 'Спецпредложения'},
};

export default {tabs, indexPage}
