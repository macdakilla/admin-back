const tabs = [
    {
        label: 'Формы обратной связи',
        to: {name: 'tabs-tab', params: {tabs: 'orders', tab: 'feedback'}},
        breadcrumbs: {tabs: {text: 'Заявки'}, tab: {text: 'Формы обратной связи'}},
        component: {
            path: 'tables/index.vue',
            props: {
                topComponent: {path: 'tables/topComponent/orders.vue'},
                itemComponent: {path: 'tables/tableComponent/orders.vue'},
                items: [
                    {
                        id: 1,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-13'
                    },{
                        id: 2,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-13'
                    },{
                        id: 3,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-14'
                    },{
                        id: 4,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-14'
                    },{
                        id: 5,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-08 15:29:01'
                    },{
                        id: 6,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-09 15:29:01'
                    },{
                        id: 7,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-10-08 15:29:01'
                    },{
                        id: 8,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-01 15:29:01'
                    },{
                        id: 9,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-12 15:29:01'
                    },{
                        id: 10,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-03 15:29:01'
                    },{
                        id: 11,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-05 15:29:01'
                    },{
                        id: 12,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-11-08 15:29:01'
                    },{
                        id: 13,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-25 15:29:01'
                    },{
                        id: 14,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-21 15:29:01'
                    }
                ]
            }
        }
    },
    {
        label: 'Онлайн оплата',
        to: {name: 'tabs-tab', params: {tabs: 'orders', tab: 'payment'}},
        breadcrumbs: {tabs: {text: 'Заявки'}, tab: {text: 'Онлайн оплата'}},
        component: {
            path: 'tables/index.vue',
            props: {
                topComponent: {path: 'tables/topComponent/orders.vue'},
                itemComponent: {path: 'tables/tableComponent/orders.vue'},
                items: [
                    {
                        id: 1,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-13'
                    },{
                        id: 2,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-13'
                    },{
                        id: 3,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-14'
                    },{
                        id: 4,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-14'
                    },{
                        id: 5,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-08 15:29:01'
                    },{
                        id: 6,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-09 15:29:01'
                    },{
                        id: 7,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-10-08 15:29:01'
                    },{
                        id: 8,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-01 15:29:01'
                    },{
                        id: 9,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-12 15:29:01'
                    },{
                        id: 10,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-03 15:29:01'
                    },{
                        id: 11,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-05 15:29:01'
                    },{
                        id: 12,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-11-08 15:29:01'
                    },{
                        id: 13,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-25 15:29:01'
                    },{
                        id: 14,
                        name: `Главная`,
                        phone: '+7(912) 349 25-03',
                        city: 'Тула', dc: 'Автосалон говнозаслон',
                        order_type: 'Трейд-ин',
                        add_data: 'Нихуя',
                        date: '2021-09-21 15:29:01'
                    }
                ]
            }
        }
    },
]

const indexPage = {
    seo: {title: 'Заявки'},
};

export default {tabs, indexPage}
