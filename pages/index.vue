<template>
    <div>
        <h2 class="mb-5">Выберите раздел</h2>
        <v-sheet class="d-flex" color="transparent">
            <v-card class="d-flex flex-column align-center justify-center py-4 mr-4"
                    v-for="(item, index) in menuItems" :key="index"
                    width="180"
                    :to="item.to">
                <v-icon class="mb-4" x-large>{{ item.icon }}</v-icon>
                <v-card-text class="text-center py-0">{{ item.text }}</v-card-text>
            </v-card>
        </v-sheet>
    </div>
</template>

<script>
import meta from '~/core/mixins/meta';
import breadcrumbs from '@/core/mixins/breadcrumbs';

export default {
    name: 'index',

    components: {},

    mixins: [meta, breadcrumbs],

    data() {
        return {
            pageData: null,
            seo: {},
            menuItems: [
                {
                    text: 'Автомобили',
                    icon: 'mdi-car',
                    to: {name: 'tabs', params: {tabs: 'cars'}}
                },
                {text: 'Модификаторы', icon: 'mdi-percent-outline', to: {name: 'tabs', params: {tabs: 'modifiers'}}},
                {text: 'Спецпредложения', icon: 'mdi-tag', to: {name: 'tabs', params: {tabs: 'offers'}}},
                {text: 'Дилер', icon: 'mdi-garage-variant', to: {name: 'tabs', params: {tabs: 'dealer'}}},
                {text: 'Страницы', icon: 'mdi-text-box-multiple', to: {name: 'tabs', params: {tabs: 'pages'}}},
                {text: 'Пользователи', icon: 'mdi-account-multiple', to: {name: 'tabs', params: {tabs: 'users'}}},
                {text: 'Настройки', icon: 'mdi-cog', to: {name: 'tabs', params: {tabs: 'settings'}}},
            ]
        };
    },


    async asyncData({$axios}) {
        // let data = null;
        //
        // await $axios
        //     .get(``)
        //     .then(response => {
        //         data = response.data;
        //     })
        //     .catch(err => console.log(err));
        //
        // return { pageData: data, seo: data?.seo || {} };
    },

    beforeMount() {
        this.breadcrumbs.update();
    },

    methods: {
        log(e) {
            console.log(e);
        }
    }
};
</script>

<style lang="scss"></style>
