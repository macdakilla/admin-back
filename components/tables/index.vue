<template>
    <div class="iterators">
        <div class="py-2 px-4 iterators__top d-flex align-center">
            <component :is="topComponentLoader"
                       v-bind="topComponent.props"
                       @openStatistic="openStatistic"
                       @update:items="items = $event"/>

            <v-dialog
                v-model="statisticDialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
            >
                <v-card>
                    <v-toolbar
                        dark
                        class="rounded-0"
                        color="secondary"
                    >
                        <v-btn
                            icon
                            dark
                            @click="statisticDialog = false"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Статистика</v-toolbar-title>
                    </v-toolbar>

                    <v-row>
                        <v-col sm="6">
                            <ChartDoughnut :chartdata="chartdataType"/>
                        </v-col>
                    </v-row>
                </v-card>
            </v-dialog>
        </div>
        <v-card>
            <v-card-title>
                Всего заявок: {{ items.length }}
                <v-spacer></v-spacer>
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="dates"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            class="dateFinder"
                            v-model="dates"
                            label="Период"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="dates"
                        no-title
                        scrollable
                        range
                    >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="menu = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(dates)"
                        >
                            OK
                        </v-btn>
                    </v-date-picker>
                </v-menu>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Поиск"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="items"
                :search="search"
                class="orders elevation-1 py-4"
            >
                <template v-slot:header.name="{ header }">
                    {{ header.text.toUpperCase() }}
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
import iteratorsCar from "@/components/tables/tableComponent/orders";
import componentPromise from "@/core/componentPromise";
import chart from "../charts/chart-doughnut";
import ChartDoughnut from "../charts/chart-doughnut";


export default {
    name: "iterators",
    components: {ChartDoughnut, iteratorsCar, chart},
    props: {
        itemComponent: {
            type: Object,
            default() {
                return {path: 'tables/tableComponent/default.vue'}
            },
        },
        topComponent: {
            type: Object,
            default() {
                return {path: 'tables/topComponent/default.vue'}
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
            search: '',
            dates: '',
            menu: false,
            chartdataType: {
                labels: [
                    'Red',
                    'Blue',
                    'Yellow'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }]
            },
            statisticDialog: false,

            headers: [
                {
                    text: 'Id',
                    value: 'id',
                    width: '65px',
                },
                {
                    text: 'Имя клиента',
                    value: 'name',
                },
                { text: 'Телефон', value: 'phone' },
                { text: 'Дата', value: 'date', filter: this.filterDate },
                { text: 'Город', value: 'city' },
                { text: 'ДЦ', value: 'dc' },
                { text: 'Тип заявки', value: 'order_type' },
                { text: 'Доп. данные', value: 'add_data', sortable: false },
            ],
        }
    },

    computed: {
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
        filterDate(a, _, c) {
            let comparingDates = new Date(this.dates[0]).getTime() < new Date(this.dates[1]).getTime();
            let startDate = comparingDates ? new Date(this.dates[0]).getTime() : new Date(this.dates[1]).getTime();
            let finalDate = comparingDates ? new Date(this.dates[1]).getTime() : new Date(this.dates[0]).getTime();
            if ((startDate <= new Date(c.date).getTime() && finalDate >= new Date(c.date).getTime()) || !this.dates)
                return true;
            return false;
        },
        openStatistic() {
            this.statisticDialog = true;
        }
    },
}
</script>

<style lang="scss">
.orders {
    td {
        line-height: 48px;
    }
}
.dateFinder {
    max-width: 280px;
    margin-right: 20px;
    .v-text-field__details {
        display: none;
    }
    .v-input__slot {
        margin-bottom: 0;
    }
}
</style>
