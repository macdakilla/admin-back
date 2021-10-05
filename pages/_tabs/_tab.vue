<template>
    <component v-if="(tabInfo.component || {}).path" :is="componentLoader" v-bind="componentParams"/>
</template>

<script>
import componentPromise from "@/core/componentPromise";

export default {
    name: 'tabs-tab',

    components: {},

    inheritAttrs: false,

    props: {
        tabInfo: {
            type: Object,
            required: true,
        },
    },

    asyncData({params}) {
        const tab = params.tab;
        return {tab};
    },

    data() {
        return {};
    },

    computed: {
        componentLoader() {
            return () => {
                return {
                    component: componentPromise(this.tabInfo?.component?.path),
                    loading: require('~/components/asyncComponent/loading'),
                    error: require('~/components/asyncComponent/error'),
                    delay: 100,
                    timeout: 6000,
                };
            };
        },

        componentParams() {
            return this.tabInfo?.component?.props;
        },
    },


};
</script>

<style scoped>

</style>

