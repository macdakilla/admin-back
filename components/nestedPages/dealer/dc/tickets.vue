<template>
    <v-card class="px-2 elevation-0 rounded-0">

        <v-card-text class="d-flex flex-column px-4">
            <p>Укажите дополнительные e-mail адреса для отправки заявок в соответствии с целями:</p>

            <v-row class="mb-2">
                <v-col sm="3" v-for="(target, index) in targets" :key="index">
                    <v-combobox
                        class="rounded-0"
                        v-model="target.values"
                        :hide-no-data="!target.search"
                        :items="itemsForTarget"
                        :search-input.sync="target.search"
                        hide-selected
                        :label="target.title"
                        multiple
                        small-chips
                        dense
                        filled
                        hide-details>
                        <template v-slot:no-data>
                            <v-list-item>
                                <span class="subheading mr-2">Создать</span>
                                <v-chip
                                    :color="`primary lighten-1`"
                                    label
                                    small>
                                    {{ target.search }}
                                </v-chip>
                            </v-list-item>
                        </template>
                        <template v-slot:selection="{ attrs, item, parent, selected }">
                            <v-chip
                                class="my-1 mx-0 mr-1"
                                v-bind="attrs"
                                :color="`primary`"
                                :input-value="selected"
                                label
                                small>
                                <div class="pr-2">
                                    {{ item }}
                                </div>
                                <v-icon
                                    small
                                    @click="parent.selectItem(item)">
                                    mdi-close
                                </v-icon>
                            </v-chip>
                        </template>
                    </v-combobox>
                </v-col>
            </v-row>
        </v-card-text>


    </v-card>
</template>

<script>
import UploadImage from '@/components/uploadImage/index';
import DateTimePicker from "@/components/date-picker/index";

export default {
    name: 'Tickets',

    components: {DateTimePicker, UploadImage},

    props: {
        pageData: {
            type: Object,
            required: true,
        }
    },

    data() {
        return {
            items: [],
            headerItems: {header: 'Выберите или укажите новый'},
            targets: [
                {
                    title: 'Цель 1',
                    search: '',
                    values: [],
                },
                {
                    title: 'Цель 2',
                    search: '',
                    values: [],
                },
                {
                    title: 'Цель 3',
                    search: '',
                    values: [],
                },
                {
                    title: 'Цель 4',
                    search: '',
                    values: [],
                },
            ],
        };
    },

    watch: {
        email(val, prev) {
            if ((val && prev) && (val.length === prev.length)) return

            this.email = val.map(v => {
                if (typeof v === 'string') {
                    v = {
                        text: v,
                    }

                    this.items.push(v)
                }

                return v
            })
        },
    },

    computed: {
        itemsForTarget() {
            const tempSet = new Set();
            this.targets.forEach(target => {
                target.values.forEach(item => {
                    tempSet.add(item)
                })
            })

            return Array.from(tempSet);
        }
    },

    methods: {},
};
</script>

<style lang="scss">


</style>
