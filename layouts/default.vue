<template>
    <v-app class="app">
        <app-bar @navigationToggle="navigationStatus = !navigationStatus"/>

        <navigation :navigationStatus="navigationStatus"/>

        <v-main class="grey lighten-3 app__main">
            <breadcrumbs/>
            <v-container fluid class="py-2">
                    <nuxt />
<!--                                <router-view />-->
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Navigation from "~/components/layout/navigation";
import AppBar from "~/components/layout/appBar";
import Breadcrumbs from "~/components/layout/breadcrumbs";

export default {
    components: {
        Breadcrumbs,
        AppBar,
        Navigation,
    },

    data() {
        return {
            navigationStatus: false,
        };
    },
}
;
</script>

<style lang="scss">
</style>
