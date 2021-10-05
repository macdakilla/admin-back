<template>
    <v-navigation-drawer class="navigation"
                         :mini-variant="navigationStatus"
                         app
                         clipped
                         touchless>

        <v-list>
            <v-list-item
                class="navigation__item"
                v-for="(item, i) in items"
                :key="i"
                :to="item.to"
                :exact="item.exact"
                link>
                <v-list-item-icon class="my-3 mr-4">
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content class="py-0">
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "navigation",

    props: {
        navigationStatus: false,
    },

    data() {
        return {
            currentItem: null,
            items: [
                {
                    text: 'Автомобили',
                    icon: 'mdi-car',
                    to: {name: 'tabs', params: {tabs: 'cars'}}
                },
                {text: 'Модификаторы', icon: 'mdi-percent-outline', to: {name: 'tabs', params: {tabs: 'modifiers'}}},
                {text: 'Спецпредложения', icon: 'mdi-tag', to: {name: 'tabs', params: {tabs: 'offers'}}},
                {text: 'Дилер', icon: 'mdi-garage-variant', to: {name: 'tabs', params: {tabs: 'dealer'}}},
                {text: 'Страницы', icon: 'mdi-text-box-multiple', to: {name: 'tabs', params: {tabs: 'pages'}}},
                {text: 'Заявки', icon: 'mdi-email-mark-as-unread', to: {name: 'tabs', params: {tabs: 'orders'}}},
                {text: 'Пользователи', icon: 'mdi-account-multiple', to: {name: 'tabs', params: {tabs: 'users'}}},
                {text: 'Настройки', icon: 'mdi-cog', to: {name: 'tabs', params: {tabs: 'settings'}}},
            ],
        }
    }
}
</script>

<style lang="scss">
.navigation {
    &__item {
        min-height: 40px;
    }
}
</style>
