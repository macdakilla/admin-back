<template>
    <div class="iterators">
        <div class="py-2 px-4 iterators__top d-flex align-center">
            <component :is="topComponentLoader"
                       v-bind="topComponent.props"
                       @update:items="items = $event"/>
        </div>

        <v-data-iterator
            :items="items"
            :items-per-page.sync="itemsPerPage"
            :page="page"
            :search="search"
            :sort-by="sortBy.toLowerCase()"
            :sort-desc="sortDesc"
            hide-default-footer
            light
            class="iterators__selectType">

            <template v-slot:header>
                <v-toolbar dense
                           flat
                           color="grey lighten-3"
                           class="mb-2">
                    <v-sheet color="transparent"
                             width="200">
                        <v-select v-model="searchBy"
                                  flat
                                  dense
                                  solo
                                  hide-details
                                  :items="keys"
                                  class="mr-1"
                                  prepend-inner-icon="mdi-text-box-search-outline"
                                  label="Искать по"/>
                    </v-sheet>
                    <v-sheet color="transparent"
                             width="400">
                        <v-text-field v-model="search"
                                      class="mr-4"
                                      clearable
                                      flat
                                      dense
                                      solo
                                      hide-details
                                      prepend-inner-icon="mdi-magnify"
                                      label="Поиск"/>
                    </v-sheet>
                    <template v-if="$vuetify.breakpoint.mdAndUp">
                        <v-sheet color="transparent"
                                 class="ml-auto flex-grow-0"
                                 width="240">
                            <v-select class="rounded-0 rounded-l"
                                      v-model="sortBy"
                                      flat
                                      dense
                                      solo
                                      hide-details
                                      :items="keys"
                                      prepend-inner-icon="mdi-sort"
                                      label="Сортировать по"/>
                        </v-sheet>
                        <v-btn-toggle v-model="sortDesc"
                                      mandatory
                                      borderless
                                      class="d-flex align-center rounded-r">
                            <v-btn class="mx-0 px-0 rounded-0"
                                   color="white"
                                   height="38"
                                   width="20"
                                   min-width="36"
                                   :value="false">
                                <v-icon small>mdi-arrow-up</v-icon>
                            </v-btn>
                            <v-btn class="mx-0 px-0"
                                   color="white"
                                   height="38"
                                   width="20"
                                   min-width="36"
                                   :value="true">
                                <v-icon small>mdi-arrow-down</v-icon>
                            </v-btn>
                        </v-btn-toggle>
                    </template>
                </v-toolbar>

                <template v-if="beforeListingComponentLoader">
                    <component :is="beforeListingComponentLoader"
                               :list-items="items"
                               v-bind="beforeListingComponent.props"
                               @update:listItems="items = $event"/>
                    <v-divider class="mb-4"/>
                </template>

            </template>

            <template v-slot:default="props">
                <v-sheet v-for="(item, index) in props.items"
                         :key="index"
                         cols="12">
                    <component v-if="(itemComponent || {}).path"
                               :is="itemComponentLoader"
                               :item="item"
                               v-bind="itemComponent.props"
                               @update:selected="updateSelected(item.id, $event)"/>

                    <v-divider class="my-2"/>
                </v-sheet>
            </template>

            <template #no-results>
                <div class="px-4">
                    <v-icon>
                        mdi-toy-brick-search-outline
                    </v-icon>
                    Ничего не найдено.
                </div>
            </template>

            <template #no-data>
                <div class="px-4">
                    <v-icon>
                        mdi-toy-brick-search-outline
                    </v-icon>
                    Нет данных.
                </div>
            </template>

            <template v-slot:footer>
                <v-row
                    class="mt-2 px-4"
                    align="center"
                    justify="center">
                    <v-col sm="12"
                           md="6">
                        <span class="grey--text">Элементов на странице</span>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    text
                                    color="primary"
                                    class="ml-2"
                                    v-bind="attrs"
                                    v-on="on">
                                    {{ itemsPerPage }}
                                    <v-icon>mdi-chevron-down</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                    v-for="(number, index) in itemsPerPageArray"
                                    :key="index"
                                    @click="updateItemsPerPage(number)">
                                    <v-list-item-title>{{ number }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>

                        <v-spacer></v-spacer>
                    </v-col>
                    <v-col sm="12"
                           md="6" class="d-flex justify-end align-center">
                        <span class="mr-4 grey--text">Страница {{ page }} из {{ numberOfPages }}</span>

                        <v-btn
                            outlined
                            small
                            color="blue darken-3"
                            class="mr-1"
                            @click="formerPage">
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-btn
                            outlined
                            small
                            color="blue darken-3"
                            class="ml-1"
                            @click="nextPage">
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </template>
        </v-data-iterator>
    </div>
</template>

<script>
import iteratorsCar from "@/components/iterators/itemComponent/cars";
import StatusFilter from "@/components/iterators/statusFilter";
import componentPromise from "@/core/componentPromise";

export default {
    name: "iterators",
    components: {StatusFilter, iteratorsCar},
    props: {
        itemComponent: {
            type: Object,
            default() {
                return {path: 'iterators/itemComponent/default.vue'}
            },
        },
        beforeListingComponent: {
            type: Object,
            default() {
                return {path: 'iterators/beforeListing/default.vue'}
            },
        },
        topComponent: {
            type: Object,
            default() {
                return {path: 'iterators/topComponent/default.vue'}
            },
        },
        items: {
            type: Array,
            default() {
               return [...Array(10)].map((_, i) => ({id: i, name: `Item ${i}`, _selected: false}))
            }
        }
    },

    data() {
        return {
            itemsPerPageArray: [4, 8, 12],
            type: 'all',
            search: '',
            searchBy: 'Name',
            filter: {},
            sortDesc: true,
            page: 1,
            itemsPerPage: 4,
            sortBy: 'Name',
            keys: [
                {
                   text: 'Имя',
                   value: 'Name'
                },
                {
                    text: 'Id',
                    value: 'id'
                },
            ]
        }
    },

    computed: {
        numberOfPages() {
            return Math.ceil(this.items.length / this.itemsPerPage)
        },

        itemComponentLoader() {
            if (this.itemComponent?.path) {
                return () => {
                    return {
                        component: import(`~/components/${this.itemComponent.path}`),
                        delay: 200,
                        timeout: 5000,
                    };
                }
            } else {
                return null;
            }
        },

        beforeListingComponentLoader() {
            if (this.beforeListingComponent?.path) {
                return () => {
                    return {
                        component: import(`~/components/${this.beforeListingComponent.path}`),
                        delay: 200,
                        timeout: 5000,
                    };
                };
            } else {
                return null;
            }
        },

        topComponentLoader() {
            if (this.topComponent?.path) {
                return () => {
                    return {
                        component: import(`~/components/${this.topComponent.path}`),
                        delay: 200,
                        timeout: 5000,
                    };
                };
            } else {
                return null;
            }
        }
    },

    methods: {
        nextPage() {
            if (this.page + 1 <= this.numberOfPages) this.page += 1
        },
        formerPage() {
            if (this.page - 1 >= 1) this.page -= 1
        },
        updateItemsPerPage(number) {
            this.itemsPerPage = number
        },

        updateSelected(id, status) {
            // this.items.find(item => item.id === id)._selected = status
        },
    },
}
</script>

<style lang="scss">
.iterators {
    .v-select__selections,
    .v-label {
        font-size: 14px;
    }
}
</style>
