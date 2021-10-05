<template>
    <v-card flat
            color="transparent"
            class="d-flex align-center px-4 mb-2"
            min-height="28">
        <select-control :list-items="listItems"
                        :menu="additionalMenuItems"
                        @update:listItems="$emit('update:listItems', $event)"/>
    </v-card>
</template>

<script>
import SelectControl from "@/components/iterators/beforeListing/selectControl/index";

export default {
    name: "default",

    components: {SelectControl},

    props: {
        listItems: {
            type: Array,
        }
    },

    data() {
        return {
            additionalMenuItems: [
                {
                    label: 'Добавить фото',
                    callback: (selectItems) => {
                        console.log(selectItems);
                    }
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
