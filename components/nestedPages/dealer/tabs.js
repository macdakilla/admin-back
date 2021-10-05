const tabs = [
    {
        label: 'ДЦ',
        to: {name: 'tabs-tab', params: {tabs: 'dealer', tab:'dc'}},
        breadcrumbs: {tabs: {text: 'Дилер'}, tab: {text: 'ДЦ'}},
        component: {
            path: 'iterators/index.vue',
            props: {
                itemComponent: {path: 'iterators/itemComponent/dc.vue'},
            }
        },
    },
]


const indexPage = {
    seo: {title: 'Дилер'},
};

export default {tabs, indexPage}

