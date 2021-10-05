<template>
    <v-sheet class="d-flex align-center"
             min-height="28">
        <v-checkbox v-model="selectedAll"
                    hide-details
                    :indeterminate="selectedIndeterminate"
                    color="blue darken-3"
                    class="ma-0 pa-0 mr-1"
                    @click="clickSelectAll()">
            <template #label>
                Выбрано элементов: {{ selectedItems.length }}
            </template>
        </v-checkbox>

        <v-menu bottom
                right v-if="itemsIsSelected">
            <template v-slot:activator="{ on, attrs }">
                <v-btn text
                       small
                       color="blue darken-3"
                       v-bind="attrs"
                       v-on="on">
                    Пакетная обработка
                </v-btn>
            </template>

            <v-list dense>
                <template v-if="hideDefaultMenu === false">
                    <v-list-item @click="publish(selectedItems)">
                        <v-list-item-title>Опубликовать</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="unpublish(selectedItems)">
                        <v-list-item-title>Снять с публикации</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="remove(selectedItems)" v-if="hideRemove === false">
                        <v-list-item-title>Удалить</v-list-item-title>
                    </v-list-item>
                </template>
                <v-list-item v-for="(item, index) in menu" :key="index" @click="item.callback(selectedItems)">
                    <v-list-item-title>{{ item.label }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-sheet>
</template>

<script>
export default {
    name: "SelectControl",

    props: {
        listItems: {
            type: Array,
        },

        menu: {
            type: Array,
        },

        hideDefaultMenu: {
            type: Boolean,
            default: false,
        },

        hideRemove: {
            type: Boolean,
            default: false,
        }
    },

    data() {
        return {
            selectedAll: false,
            selectedIndeterminate: false,
            itemsIsSelected: false,
        }
    },

    computed: {
        selectedItems() {
            const selectedIds = []
            this.listItems?.forEach(item => {
                if (item._selected) {
                    selectedIds.push(item.id)
                }
            })

            this.selectedIndeterminate = selectedIds.length ? selectedIds.length !== this.listItems.length : false;
            this.itemsIsSelected = selectedIds.length > 0;
            this.selectedAll = selectedIds.length === this.listItems?.length;

            return selectedIds;
        },
    },

    methods: {
        clickSelectAll() {
            const items = this.listItems.map(item => ({...item, _selected: this.selectedAll}))
            this.$emit('update:listItems', items);
        },

        publish(ids) {
            console.log(`publish: ${ids}`)
        },

        unpublish(ids) {
            console.log(`unpublish: ${ids}`)
        },

        remove(ids) {
            console.log(`remove: ${ids}`)
        }
    }
}
</script>

<style scoped>

</style>
