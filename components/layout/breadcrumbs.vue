<template>
    <div class="d-flex pl-4 pt-2">
        <v-btn class="mr-2"
               color="transparent"
               title="Назад"
               fab
               depressed
               width="30"
               height="30"
               @click="$router.go(-1)">
            <v-icon small>mdi-arrow-left</v-icon>
        </v-btn>

        <v-breadcrumbs class="pa-0" :items="breadcrumbsMapItems">
            <template v-slot:divider>
               —
            </template>
        </v-breadcrumbs>
    </div>
</template>

<script>
import breadcrumbs from '@/core/mixins/breadcrumbs';

export default {
    name: 'breadcrumbs',

    mixins: [
        breadcrumbs,
    ],

    data() {
        return {};
    },

    computed: {
        breadcrumbsMapItems() {
            const obj = this.breadcrumbs.getItems();
            const arr = [{text: 'Главная', to: {path: '/'}, exact: true}];
            Object.keys(obj).forEach(item => {
                arr.push({...obj[item], exact: true});
            });
            return arr;
        },
    },
};
</script>

<style lang="scss">
:root .v-breadcrumbs {
    padding: 10px 12px;

    &__divider {
        padding: 0 5px;
    }

    li:last-child &__item {
        pointer-events: none;
        color: rgba(0, 0, 0, .38);
    }
}
</style>
