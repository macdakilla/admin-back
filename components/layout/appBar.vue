<template>
    <v-app-bar app
               dense
               clipped-left
               dark
               color="grey darken-4 elevation-0">

        <v-app-bar-nav-icon @click="$emit('navigationToggle')"></v-app-bar-nav-icon>

        <v-toolbar-title class="font-weight-medium">Mercedes-Benz</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon :to="{path: '/front'}">
            <v-icon>mdi-earth</v-icon>
        </v-btn>

        <v-menu left
                bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon
                       v-bind="attrs"
                       v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list dense>
                <v-list-item @click="() => {}">
                    <v-list-item-title>Clear cache</v-list-item-title>
                </v-list-item>

                <v-list-item @click="() => {}">
                    <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>

</template>

<script>
export default {
    name: "appBar",

    props: {},

    data() {
        return {
            navigationShow: false,
        }
    },

    methods: {
        log(e) {
            console.log(e);
        }
    },

    computed: {
        menuStatus: {
            get() {
                return this.menuCollapsed
            },

            set(value) {
                this.$emit('update:menuCollapsed', !this.menuCollapsed)
            }
        }
    }
}
</script>

<style scoped>

</style>
