<template>
    <v-sheet class="px-4 py-4">
        <div>*Глобальные настройки пользователей*</div>
    </v-sheet>
</template>

<script>


export default {
    name: "index",

    components: {

    },

    data() {
        return {
            pageEditor: {
                dialog: false,
                title: '',
                page: null,
            },
        }
    },

    methods: {
    },

    async beforeCreate() {

    },
}
</script>

<style scoped>

</style>
