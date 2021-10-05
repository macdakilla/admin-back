<template>
    <v-card class="carEdit px-2 elevation-0 rounded-0">
        <v-card-text class="d-flex flex-column px-4 py-0">
            <v-switch
                v-model="form.status"
                :label="`Статус`"
            ></v-switch>

            <v-row class="mb-2">
                <v-col sm="4">
                    <v-row>
                        <v-col sm="12">
                            <v-text-field class="editPage__infoInput rounded-0"
                                          label="Заголовок"
                                          dense
                                          filled
                                          hide-details
                                          v-model="form.title"/>
                        </v-col>
                        <v-col sm="12">
                            <v-textarea class="editPage__infoInput rounded-0"
                                        hide-details
                                        filled
                                        rows="4"
                                        label="Текст формы"
                                        v-model="form.text"/>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'addition',

    components: {},

    data() {
        return {
            form: {
                status: false,
                title: '',
                text: '',
            }
        };
    },
};
</script>

<style scoped>

</style>
