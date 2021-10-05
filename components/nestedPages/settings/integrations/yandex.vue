<template>
    <v-card-title class="px-0 calltouch">
        <v-col sm="12" class="py-0">
            Яндекс Метрика:
        </v-col>
        <v-col sm="12">
            <v-textarea
                filled
                v-model="yandex.script"
                name="yandex_script"
                label="Скрипт yandex метрики"
            ></v-textarea>
            <v-text-field
                filled
                v-model="yandex.id"
                name="yandex_id"
                label="ID счётчика в метрики"
            ></v-text-field>
            <v-text-field
                filled
                v-model="yandex.rating"
                name="yandex_rating"
                label="Яндекс рейтинг"
            ></v-text-field>
        </v-col>
        <v-col sm="12">
            Яндекс Вебмастер:
        </v-col>
        <v-col sm="12">
            <v-textarea
                filled
                v-model="yandex.webmaster"
                name="yandex_script"
                label="Скрипт yandex вебмастера"
            ></v-textarea>
        </v-col>
    </v-card-title>
</template>

<script>
export default {
    name: "yandex",
    props: {
        yandex: {
            type: Object,
            default() {
                return {};
            }
        }
    }
}
</script>

<style scoped>

</style>
