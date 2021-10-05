const tabs = [
    {
        label: 'Пользователи',
        to: {name: 'tabs-tab', params: {tabs: 'users', tab: 'list'}},
        breadcrumbs: {tabs: {text: 'Пользователи'}, tab: {text: 'Пользователи'}},
        component: {
            path: 'iterators/index.vue',
            props: {
                topComponent: {path: 'iterators/topComponent/default.vue', props: {integrationButtons: true, hideStatusFilter: true}},
                beforeListingComponent: {path: false},
                itemComponent: {path: 'iterators/itemComponent/users.vue',
                    props: {
                        fields: ['status'],
                        hideOpen: true
                    }
                },
                items: [
                    {
                        id: 1,
                        name: 'Валера',
                        password: '234243243',
                        avatar: 'https://interesnoznat.com/wp-content/uploads/gesichtermix_11925868_1671921689718597_1702935533_n.jpg',
                        phone: '+7 (912) 349 25-03',
                        lastLogin: '2020.10.22',
                        email: 'velera@mail.ru',
                        status: 'Холоп',
                    },
                    {
                        id: 2,
                        name: 'Витя',
                        password: '234243243',
                        avatar: '',
                        phone: '+7 (912) 349 25-03',
                        lastLogin: '2020.10.22',
                        email: 'velera@mail.ru',
                        status: 'Челядь',
                    }
                ]
            }
        }
    },
    {
        label: 'Роли',
        to: {name: 'tabs-tab', params: {tabs: 'users', tab: 'roles'}},
        breadcrumbs: {tabs: {text: 'Пользователи'}, tab: {text: 'Роли'}},
        component: {
            path: 'iterators/index.vue',
            props: {
                topComponent: {path: 'iterators/topComponent/default.vue', props: {integrationButtons: false, hideStatusFilter: true}},
                beforeListingComponent: {path: false},
                itemComponent: {path: 'iterators/itemComponent/users.vue', props: {hideOpen: true}},
            }
        }
    },
    {
        label: 'Персонал',
        to: {name: 'tabs-tab', params: {tabs: 'users', tab: 'staff'}},
        breadcrumbs: {tabs: {text: 'Пользователи'}, tab: {text: 'Персонал'}},
        component: {
            path: 'iterators/index.vue',
            props: {
                topComponent: {path: 'iterators/topComponent/default.vue', props: {integrationButtons: true, hideStatusFilter: true}},
                beforeListingComponent: {path: false},
                itemComponent: {path: 'iterators/itemComponent/users.vue',
                    props: {
                        hideOpen: true,
                        hideAvatar: false,
                        fields: ['status']
                    }
                },
                items: [
                    {
                        id: 1,
                        name: 'Валера',
                        password: '234243243',
                        avatar: 'https://interesnoznat.com/wp-content/uploads/gesichtermix_11925868_1671921689718597_1702935533_n.jpg',
                        phone: '+7 (912) 349 25-03',
                        lastLogin: '2020.10.22',
                        email: 'velera@mail.ru',
                        status: 'Холоп',
                        department: 'Руководитель стула'
                    },
                    {
                        id: 2,
                        name: 'Витя',
                        avatar: '',
                        password: '234243243',
                        phone: '+7 (912) 349 25-03',
                        lastLogin: '2020.10.22',
                        email: 'velera@mail.ru',
                        status: 'Челядь',
                        department: 'Генеральный распиздяй'
                    }
                ]
            }
        },
    },
]

const indexPage = {
    seo: {title: 'Пользователи'},
};

export default {tabs, indexPage}
