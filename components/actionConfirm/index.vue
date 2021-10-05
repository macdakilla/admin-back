<template>
    <div class="actionConfirm">
        <span @click="$refs.target.click()">
            <slot></slot>
        </span>

        <v-edit-dialog ref="dialog"
                       @open="open"
                       @close="close"
                       transition="scroll-y-reverse-transition">

            <div class="actionConfirm__target" ref="target"></div>

            <template v-slot:input>
                <div ref="popup">
                    <div class="px-5 py-2 text-center">Вы уверены?</div>
                    <div class="d-flex">
                        <v-btn class="rounded-0"
                               title="Отменить"
                               :disabled="isDisabled"
                               text
                               large
                               @click="cancel()">
                            <v-icon class="editPage__topControlIcon"
                                    color="error">
                                mdi-close
                            </v-icon>
                        </v-btn>

                        <v-btn class="rounded-0"
                               title="Подтвердить"
                               :disabled="isDisabled"
                               text
                               large
                               @click="apply()">
                            <v-icon class="editPage__topControlIcon"
                                    color="success">
                                mdi-check
                            </v-icon>
                        </v-btn>
                    </div>
                </div>
            </template>
        </v-edit-dialog>
    </div>
</template>

<script>
export default {
    name: "actionConfirm",

    data() {
        return {
            isOpen: false,
            isHover: false,
            isDisabled: true,
        }
    },

    methods: {
        open() {
            this.$emit('open');
            this.isOpen = true;
            setTimeout(() => {
                this.isDisabled = false;
            }, 250)

            this.$nextTick(() => {
                this.$refs.popup?.addEventListener('mouseleave', this.mouseleave)
                this.$refs.popup?.addEventListener('mouseenter', this.mouseenter)
            })
        },

        close() {
            this.$emit('close');
            this.isOpen = false;

            this.$refs.popup?.removeEventListener('mouseleave', this.mouseleave)
            this.$refs.popup?.removeEventListener('mouseenter', this.mouseenter)

            setTimeout(() => {
                this.isDisabled = true;
            }, 300)

        },

        apply() {
            this.$emit('apply');
            this.$refs.dialog.save();
            this.isOpen = false;
        },

        cancel() {
            this.$refs.dialog.cancel();
            this.isOpen = false;
        },

        mouseenter() {
            this.isHover = true;
        },

        mouseleave() {
            this.isHover = false;

            setTimeout(() => {
                if (this.isHover === false) {
                    this.close()
                    this.$refs.dialog.cancel();
                }
            }, 500);
        }

    }
}
</script>

<style lang="scss">
.actionConfirm {
    position: relative;
    display: inline-block;
}

:root .v-small-dialog {
    position: relative;

    &__activator {
        position: absolute;
        top: 0;

        visibility: hidden;
        pointer-events: none;
    }

    &__content {
        padding: 0;
    }
}
</style>
