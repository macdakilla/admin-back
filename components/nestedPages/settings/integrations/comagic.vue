<template>
    <v-card-title class="px-0 comagic">
        <v-col sm="12" class="py-0">
            Comagic:
        </v-col>
        <v-col sm="12">
            <v-textarea
                filled
                v-model="comagic.script"
                name="comagic_script"
                label="Скрипт comagic"
            ></v-textarea>
        </v-col>
    </v-card-title>
</template>

<script>
export default {
    name: "comagic",
    props: {
        comagic: {
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
