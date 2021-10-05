<template>
    <v-sheet>
        <v-subheader class="px-0">Настройки страниц</v-subheader>
        <div class="d-flex align-center">Cтраница политики cookie:
            <v-btn text color="primary" class="ml-2" small @click="pageEditorDialogOpen(`'Cookie'`)">Редактировать</v-btn>
        </div>
        <div class="d-flex align-center">Политика защиты информации:
            <v-btn text color="primary" class="ml-2" small @click="pageEditorDialogOpen(`'Политика защиты информации'`)">Редактировать</v-btn>
        </div>
        <div class="d-flex align-center">Политика конфиденциальности:
            <v-btn text color="primary" class="ml-2" small @click="pageEditorDialogOpen(`'Политика конфиденциальности'`)">Редактировать</v-btn>
        </div>

        <v-dialog class="kek" v-model="pageEditor.dialog"
                  max-width="1200">
            <v-card>
                <v-card-title class="px-4">
                    Редактирование страницы {{ pageEditor.title }}
                </v-card-title>

                <v-divider></v-divider>

                <v-card-text class="px-0" style="height: 500px;">
                    <tiny no-border/>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-sheet>
</template>

<script>
import Tiny from "@/components/tiny/index";


export default {
    name: "dealer",

    components: {
        Tiny
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
        pageEditorDialogOpen(title) {
            this.pageEditor.dialog = true;
            this.pageEditor.title = title || null;
        }
    },

    async beforeCreate() {

    },
}
</script>

<style scoped>

</style>
