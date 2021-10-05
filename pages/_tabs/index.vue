<template>
    <div>
        <template v-if="currentTab && currentTab.toString() === '[object Object]'">
            <h1 class="mb-5" v-if="currentTab.label">{{ currentTab.label }}</h1>


            <v-card v-show="isSingleTab === false">
                <v-tabs class="rounded-0 rounded-t"
                        dark
                        color="blue lighten-1"
                        background-color="grey darken-3">
                    <v-tab v-for="(item, index) in tabList"
                           :key="item.label + index"
                           :to="item.to"
                           :exact="item.exact !== false"
                           :nuxt="true"
                           @change="changeCurrentTab({...item, index})">
                        {{ item.label }}
                    </v-tab>
                </v-tabs>
            </v-card>

            <v-card class="rounded-0 rounded-b mb-4"
                    :class="{'rounded-t': isSingleTab}"
                    v-if="currentTab">
                <nuxt-child :key="currentTab.label + currentTab.index"
                            :tab-info="currentTab"/>

                <!--            <keep-alive>
                                <router-view keep-alive :keep-alive-props="{max: 2}" :key="currentTab"/>
                            </keep-alive>-->
            </v-card>
        </template>
        <template v-else>
            Error loading nested page
        </template>
    </div>
</template>

<script>
import meta from '@/core/mixins/meta';
import breadcrumbs from '@/core/mixins/breadcrumbs';

const prepareDefaultTabAddress = (tabList, params) => {
    const firstTab = tabList[0]?.to?.params?.tab;
    return (params.tab === undefined && firstTab) ? `/${params.tabs}/${firstTab}` : null;
}

export default {
    name: 'tabs',

    mixins: [meta, breadcrumbs],

    watch: {
        $route(route) {
            if (!('tab' in route.params)) {
                this.currentTab = {};
            }

            const defaultTab = prepareDefaultTabAddress(this.tabList, route.params);
            if (defaultTab) {
                this.$router.push({path: defaultTab});
            }

            this.breadcrumbs.update(this.crumbs);
        }
    },

    async asyncData({params, redirect}) {
        let tabList = null;
        let indexPage = null;
        let crumbs = null;

        await import(`@/components/nestedPages/${params.tabs}/tabs`)
            .then(module => {
                tabList = module.default.tabs ? module.default.tabs : null;
                indexPage = module.default.indexPage || {};
            })
            .catch(err => console.log(err));

        crumbs = indexPage?.breadcrumbs;

        if (tabList) {
            const firstTab = tabList[0]?.to?.params?.tab;
            if (params.tab === undefined && firstTab && !indexPage.component?.path) {
                crumbs = firstTab?.breadcrumbs ? firstTab.breadcrumbs : crumbs;
                redirect(`/${params.tabs}/${firstTab}`);
            }
        }

        return {
            pageParams: params,
            tabList,
            seo: indexPage?.seo,
            crumbs: crumbs,
            currentTab: indexPage
        };
    },

    mounted() {
        this.breadcrumbs.update(this.crumbs);
    },

    data() {
        return {
            currentTab: {},
            tabList: null,
            pageParams: {},
            crumbs: {},
        };
    },

    computed: {
        isSingleTab() {
            return Array.isArray(this.tabList) && this.tabList.length === 1
        }
    },

    methods: {
        changeCurrentTab(item) {
            this.currentTab = item;
            this.breadcrumbs?.update(this.currentTab?.breadcrumbs);
        },

        log(e) {
            console.log(e);
        },
    },
};
</script>

<style scoped>

</style>
