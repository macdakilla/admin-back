<template>
    <v-card-title class="px-0 calltouch">
        <v-col sm="12" class="py-0">
            Roistat:
        </v-col>
        <v-col sm="12">
            <v-text-field
                filled
                v-model="roistat.id"
                name="roistat_script"
                label="ID сайта в Roistat"
            ></v-text-field>
            <div class="settings__switchWrapper" >
                ROISTAT (ОТПРАВКА ЧЕРЕЗ PHP):
                <v-switch
                    dense
                    class="ma-0 ml-4 pt-0"
                    v-model="roistat.backSend"
                    hide-details
                />
            </div>
        </v-col>
    </v-card-title>
</template>

<script>
export default {
    name: "roistat",
    props: {
        roistat: {
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
