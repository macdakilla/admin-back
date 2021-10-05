<template>
    <v-card-title class="px-0 callkeeper">
        <v-col sm="12" class="py-0">
            CallKeeper:
        </v-col>
        <v-col sm="12">
            <div class="settings__switchWrapper" >
                Выкл/Вкл Callkeeper:
                <v-switch
                    dense
                    class="ma-0 ml-4 pt-0"
                    v-model="callkeeper.status"
                    hide-details
                />
            </div>
            <div class="settings__switchWrapper mb-4" >
                ОТПРАВЛЯТЬ EMAIL В NOTIFICATION:
                <v-switch
                    dense
                    class="ma-0 ml-4 pt-0"
                    v-model="callkeeper.emailNotification"
                    hide-details
                />
            </div>
            <v-text-field
                filled
                v-model="callkeeper.apiak"
                name="callkeeper_apiak"
                label="apiak - ключ сгенерированный в ЛК во вкладке Профиль"
            ></v-text-field>
            <v-text-field
                filled
                v-model="callkeeper.whash"
                name="callkeeper_whash"
                label="whash - hash виджета, можно получить на странице редактирования виджета в ЛК"
            ></v-text-field>
            <v-text-field
                filled
                v-model="callkeeper.name_company"
                name="callkeeper_name_company"
                label="Название компании"
            ></v-text-field>
            <v-text-field
                filled
                v-model="callkeeper.email"
                name="callkeeper_email"
                label="Email для уведомления о звонке"
            ></v-text-field>
            <v-text-field
                filled
                v-model="callkeeper.phone"
                name="callkeeper_phone"
                label="Номер телефона компании, на который поступит звонок"
            ></v-text-field>
            <v-text-field
                filled
                v-model="callkeeper.id_google_analytic"
                name="callkeeper_id_google_analytic"
                label="Уникальный идентификатор, для отправки в Google Analytics"
            ></v-text-field>
        </v-col>
    </v-card-title>
</template>

<script>
export default {
    name: "callkeeper",
    props: {
        callkeeper: {
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
