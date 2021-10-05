<template>
    <v-card class="carEdit px-2 elevation-0 rounded-0">
        <v-card-text class="d-flex flex-column px-4">
            <v-subheader class="px-0">Совместимость</v-subheader>
            <v-row class="editPage__infoRow mt-0 mb-8">
                <v-col v-for="(item, i) in compatibilityList"
                       :key="i"
                       cols="12"
                       sm="12"
                       md="2"
                       class="py-0">
                    <v-checkbox
                        v-model="pageData.compatibility"
                        :label="item.label"
                        :value="item.value"
                        hide-details
                    ></v-checkbox>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import UploadImage from '@/components/uploadImage/index';

export default {
    name: 'addition',

    components: {UploadImage},
    props: {
        pageData: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            compatibilityList: [
                {
                    label: 'Супер акция',
                    value: 'Супер акция'
                },
                {
                    label: 'Супер акция 1',
                    value: 'Супер акция 1'
                },
                {
                    label: 'Супер акция 2',
                    value: 'Супер акция 2'
                },
                {
                    label: 'Супер акция 3',
                    value: 'Супер акция 3'
                },
                {
                    label: 'Супер акция 4',
                    value: 'Супер акция 4'
                }
            ]
        };
    }
};
</script>

<style scoped>

</style>
