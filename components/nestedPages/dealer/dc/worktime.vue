<template>
    <v-card class="px-2 elevation-0 rounded-0">

        <v-card-text class="d-flex flex-column px-4">
            <v-subheader class="px-0">Отдел продаж</v-subheader>

            <v-row class="mb-2">
                <v-col sm="3" v-for="(day, index) in weeks" :key="index">
                    <date-time-picker class="editPage__infoInput"
                                      :picker-props="{
                                        format: 'HH:mm',
                                        'range-separator': ' – ',
                                        range: true,
                                        type:'time',
                                        'time-picker-options':{start: '00:00', step:'00:10' , end: '23:59', format: 'HH:mm' }
                                      }"
                                      :label="day"
                                      :input-props="{ dense: true, filled: true, 'hide-details': true, range: true, class: 'rounded-0' }"
                                      v-model="time"/>
                </v-col>
            </v-row>

            <v-divider></v-divider>

            <v-subheader class="px-0">Сервис</v-subheader>

            <v-row class="mb-2">
                <v-col sm="3" v-for="(day, index) in weeks" :key="index">
                    <date-time-picker class="editPage__infoInput"
                                      :label="day"
                                      :picker-props="{
                                        format: 'HH:mm',
                                        'range-separator': ' – ',
                                        range: true,
                                        type:'time',
                                        'time-picker-options':{start: '00:00', step:'00:10' , end: '23:59', format: 'HH:mm' }
                                      }"
                                      :input-props="{ dense: true, filled: true, 'hide-details': true, range: true, class: 'rounded-0'}"
                                      v-model="time"/>
                </v-col>
            </v-row>
        </v-card-text>


    </v-card>
</template>

<script>
import UploadImage from '@/components/uploadImage/index';
import DateTimePicker from "@/components/date-picker/index";

export default {
    name: 'WorkTime',

    components: {DateTimePicker, UploadImage},

    props: {
        pageData: {
            type: Object,
            required: true,
        }
    },

    data() {
        return {
            time: '',
            weeks: [
                'Понедельник',
                'Вторник',
                'Среда',
                'Четверг',
                'Пятница',
                'Суббота',
                'Воскресенье',
            ]
        };
    },

    computed: {},

    methods: {},
};
</script>

<style lang="scss">
</style>
