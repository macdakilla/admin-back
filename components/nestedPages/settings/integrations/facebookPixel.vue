<template>
    <v-card-title class="px-0 facebookPixel">
        <v-col sm="12" class="py-0">
            Пиксель Facebook:
        </v-col>
        <v-col sm="12">
            <v-textarea
                filled
                v-model="facebookPixel.script"
                name="facebookPixel_script"
                label="Скрипт facebook pixel"
            ></v-textarea>
            <v-text-field
                filled
                v-model="facebookPixel.conversionEvents"
                name="facebookPixel_conversionEvents"
                label="Конверсионные события"
            ></v-text-field>
            <v-text-field
                filled
                v-model="facebookPixel.retargetingEvents"
                name="facebookPixel_retargetingEvents"
                label="Ретаргетинговые события"
            ></v-text-field>
        </v-col>
    </v-card-title>
</template>

<script>
export default {
    name: "facebookPixel",
    props: {
        facebookPixel: {
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
