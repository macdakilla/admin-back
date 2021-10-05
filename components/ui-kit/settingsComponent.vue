<template>
    <li class="mb-4">
        <v-sheet
            color="grey lighten-3"
            elevation="1"
            rounded
            class="py-4 px-4"
        >
            {{ item.id }}
        </v-sheet>
    </li>
</template>

<script>
export default {
    name: "settingsComponent",
    props: {
        item: {
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
