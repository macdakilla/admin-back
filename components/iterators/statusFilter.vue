<template>
    <v-btn-toggle class="statusFilter rounded"
                  group
                  dense
                  borderless
                  :value="value"
                  @change="$emit('input', type)">
        <v-btn class="statusFilter__btn ma-0"
               text
               value="all">
            <v-icon small class="mr-2">
                mdi-view-list
            </v-icon>
            1066
        </v-btn>

        <v-btn class="statusFilter__btn ma-0"
               text
               value="status-on">
            <v-icon small class="mr-2">
                mdi-check-box-outline
            </v-icon>
            488
        </v-btn>

        <v-btn class="statusFilter__btn ma-0"
               text
               value="status-off">
            <v-icon small class="mr-2">
                mdi-archive-arrow-down-outline
            </v-icon>
            54
        </v-btn>

        <v-btn class="statusFilter__btn ma-0"
               text
               value="no-image">
            <v-icon small class="mr-2">
                mdi-image-off-outline
            </v-icon>
            58
        </v-btn>

        <v-btn class="statusFilter__btn ma-0"
               text
               value="broken">
            <v-icon small class="mr-2">
                mdi-close-box-outline
            </v-icon>
            8
        </v-btn>
    </v-btn-toggle>
</template>

<script>
export default {
    name: "statusFilter",

    props: {
        value: {
            type: String,
            required: true,
        }
    },

    data() {
        return {
            type: '',
        }
    }
}
</script>

<style lang="scss">
.statusFilter {
    &__btn:not(:last-child) {
        border-right: 1px solid $colorGrayEL !important;
    }

}
</style>
