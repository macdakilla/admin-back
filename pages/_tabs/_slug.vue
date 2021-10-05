<template>
    <component :is="componentLoader" v-bind="componentParams" @pageEvent="pageEvent($event)"/>
</template>

<script>
import componentPromise from "@/core/componentPromise";

const runCallback = (callback) => {
    if (callback && typeof callback === 'function') {
        callback();
        return true;
    } else {
        return false
    }
}

export default {
    name: 'tabs-tab-slug',

    components: {},

    inheritAttrs: false,

    data() {
        return {};
    },

    beforeRouteUpdate(to, from, next) {
        if ('onlyUrl' in to.params) {
            const newRoute = to;
            newRoute.params.onlyUrl = null;
            delete newRoute.params.updateURL;
            const {href} = this.$router.resolve(to);
            history.pushState({}, null, href);
        } else {
            next()
        }
    },

    computed: {
        componentLoader() {
            return () => {
                return {
                    component: componentPromise(`nestedPages/${this.$route.params.tabs}/${this.$route.params.tab}`, this.$route.params.slug ? this.$route.params.slug : 'index.vue'),
                    loading: require('~/components/asyncComponent/loading'),
                    error: require('~/components/asyncComponent/error'),
                    delay: 100,
                    timeout: 5000,
                };

            };
        },

        componentParams() {
            return {};
        },
    },

    methods: {
        pageEvent(event) {
            if (event) {
                runCallback(event.callbackBefore)

                if ('type' in event) {
                    if (event.type === 'save') {
                        if (runCallback(event.exitCallback) === false && this.$route.params.slug === 'add' && event.newSlug) {
                            const newRoute = this.$route;
                            newRoute.params.slug = event.newSlug;
                            newRoute.params.updateURL = true;
                            this.$router.push(newRoute)
                        }
                    }

                    if (event.toast && event.toast.content) {
                        if (['success', 'error'].includes(event.toast.type)) {
                            this.$toast[event.toast.type](event.toast.content);
                        } else {
                            this.$toast(event.toast.content);
                        }
                    }
                }

                runCallback(event.callbackAfter)
            }
        },
    }

};
</script>

<style scoped>

</style>

