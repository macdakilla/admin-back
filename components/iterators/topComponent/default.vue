<template>
    <div class="d-flex flex-grow-1">
        <v-sheet>
            <v-btn class="text-caption"
                   color="success"
                   outlined
                   :to="{name:'tabs-tab-slug',params:{slug: 'add'}}">
                Создать
            </v-btn>
        </v-sheet>

        <div class="mr-auto"></div>

        <v-card v-if="integrationButtons"
                class="iterators__uploadButton"
                color="transparent"
                flat>
            <v-btn text tile color="green" class="text-caption">Загрузить XLS</v-btn>
            <v-btn text tile color="blue" class="text-caption">Выгрузить XLS</v-btn>
        </v-card>

        <status-filter v-if="!hideStatusFilter" v-model="type" class="ml-4"/>
    </div>
</template>

<script>
import StatusFilter from "@/components/iterators/statusFilter";

export default {
    name: "default",

    components: {StatusFilter},

    props: {
        integrationButtons: {
            type: Boolean,
            return: false,
        },
        hideStatusFilter: {
            type: Boolean,
            return: false,
        }
    },

    data() {
        return {
            type: 'all',
        }
    }
}
</script>

<style scoped>

</style>
