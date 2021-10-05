import Vue from 'vue'
import Router from 'vue-router'

import index from '~/pages/index'
import tabs from '~/pages/_tabs/index'
import tabsTab from '~/pages/_tabs/_tab'
import tabsTabSlug from '~/pages/_tabs/_slug'

Vue.use(Router)


const routes = {
    mode: 'history',
    routes: [
        {
            path: '/',
            component: index,
            name: 'index',
        },
        {
            path: '/:tabs',
            component: tabs,
            children: [
                {
                    name: 'tabs',
                    path: '',
                    component: tabsTab,
                },
                {
                    name: 'tabs-tab',
                    path: ':tab',
                    component: tabsTab,
                }],
        },
        {
            name: 'tabs-tab-slug',
            path: '/:tabs/:tab/:slug',
            component: tabsTabSlug,
        }
    ]
}


export function createRouter() {
    return new Router(routes);
}
