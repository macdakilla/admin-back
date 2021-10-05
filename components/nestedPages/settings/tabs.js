const tabs = [
    {
        label: 'Глобальные',
        to: {name: 'tabs-tab', params: {tabs: 'settings', tab: 'global'}},
        breadcrumbs: {tabs: {text: 'Настройки'}, tab: {text: 'Глобальные'}},
        component: {path: 'nestedPages/settings/index.vue'}
    },
    {
        label: 'Интеграции',
        to: {name: 'tabs-tab', params: {tabs: 'settings', tab: 'integrations'}},
        breadcrumbs: {tabs: {text: 'Страницы'}, tab: {text: 'Интеграции'}},
        component: {
            path: 'nestedPages/settings/integrations/index.vue',
            props: {
                pageData: {
                    calltouch: {
                        script: '',
                        order: {
                            id: '',
                            api: '',
                            front_status: false,
                            back_status: false
                        },
                        call: {
                            key: '',
                            api: '',
                            front_status: false,
                            back_status: false
                        }
                    },
                    roistat: {
                        id: '',
                        backSend: false
                    },
                    yandex: {
                        script: '',
                        id: '',
                        rating: '',
                        webmaster: ''
                    },
                    callkeeper: {
                        apiak: '',
                        whash: '',
                        name_company: '',
                        email: '',
                        phone: '',
                        id_google_analytic: '',
                        emailNotification: false,
                        status: false
                    },
                    facebookPixel: {
                        script: '',
                        conversionEvents: '',
                        retargetingEvents: '',
                    },
                    comagic: {
                        script: ''
                    },
                    custom: {
                        header: {
                            style: '',
                            scripts: [
                                {
                                    script: '',
                                    type: 'script'
                                }
                            ]
                        },
                        footer: ''
                    }
                },
                seo: {
                    name: 'Интеграции'
                },
            }
        },
    },
]

const indexPage = {
    seo: {title: 'Settings'},
};

export default {tabs, indexPage}
