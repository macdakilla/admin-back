<template>
    <v-sheet class="pageController d-flex align-center px-4 py-4">
        <v-btn class="pageController primary rounded-0 rounded-l"
               depressed
               title="Сохранить"
               @click="save()">
            Сохранить
        </v-btn>
        <v-btn class="pageController primary mr-4 rounded-0 rounded-r px-0"
               min-width="36"
               depressed
               title="Сохранить и выйти"
               @click="save(true)">
            <v-icon small>
                mdi-content-save
            </v-icon>
        </v-btn>

        <v-btn v-if="!hideCancel" class="pageController rounded-0 rounded-l"
               color=" darken-2"
               depressed
               title="Отменить"
               @click="cancel()">
            Отмена
        </v-btn>
        <v-btn v-if="!hideCancel" class="pageController mr-4 rounded-0 rounded-r px-0"
               color=" darken-2"
               min-width="36"
               depressed
               title="Отменить и выйти"
               @click="back()">
            <v-icon small>
                mdi-arrow-left
            </v-icon>
        </v-btn>
    </v-sheet>

</template>

<script>
    export default {
        name: 'PageController',
        props: {
            hideCancel: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            save(exit) {
                this.$emit('save', exit ? this.back : null);
            },

            cancel() {
                this.$emit('cancel');
            },

            back() {
                const route = this.$route;
                const tempArr = route.name.split('-');
                tempArr.pop();
                this.$router.push({ name: tempArr.join('-'), params: this.$route.params });
            },
        },
    };
</script>

<style lang="scss">
.pageController {
    &.v-sheet {
        position: sticky;
        bottom: 0;
        left: 0;
        z-index: 1;

        border-top: 1px solid $colorGrayEL;
    }

    &__btn.v-btn {
    }

    &__btnSector.v-btn {
        margin-left: -1px;
        border-left: 1px solid rgba(190, 190, 190, .3) !important;
    }
}

</style>
