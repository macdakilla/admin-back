<template>
    <v-card flat
            color="transparent"
            class="d-flex align-center px-4 mb-2"
            min-height="28">
        <select-control :list-items="listItems"
                        :hide-remove="selectHideRemove"
                        @update:listItems="$emit('update:listItems', $event)" />
    </v-card>
</template>

<script>
import SelectControl from "@/components/iterators/beforeListing/selectControl/index";

export default {
    name: "BeforeListingDefault",

    components: {SelectControl},

    props: {
        listItems: {
            type: Array,
        },

        selectHideRemove: {
            type: Boolean,
            default: false,
        }
    },
}
</script>

<style scoped>

</style>
