<template>
    <div class="">
        <v-subheader class="d-flex align-center px-1">
            {{ title }}
            <v-icon class="mb-1 ml-1"
                    :color="curButton.label ? 'success' : 'error'"
                    small>
                mdi-{{ curButton.label ? 'check' : 'close' }}
            </v-icon>

            <span class="ml-auto"></span>
            <span class="subtitle mr-2">Модал</span>
            <v-switch v-model="changeType" @change="update()"></v-switch>
            <span class="subtitle ml-1">Ссылка</span>
        </v-subheader>

        <v-text-field class="editPage__infoInput rounded-0 mb-4"
                      label="Текст на кнопке"
                      dense
                      filled
                      hide-details
                      v-model="curButton.label"
                      @input="update()">
        </v-text-field>

        <v-expand-transition>
            <div v-if="typeLink">
                <v-text-field class="editPage__infoInput rounded-0 mb-4"
                              label="Ссылка"
                              dense
                              filled
                              hide-details
                              v-model="curButton.link"
                              @input="update()"
                              :key="'linkKey'">
                </v-text-field>
            </div>
        </v-expand-transition>

        <v-expand-transition>
            <div v-if="!typeLink">
                <v-text-field class="editPage__infoInput rounded-0 mb-4"
                              label="Заголовок"
                              dense
                              filled
                              hide-details
                              v-model="curButton.modalTitle"
                              @input="update()"
                              :key="'TitleKey'">
                </v-text-field>

                <v-text-field class="editPage__infoInput rounded-0 mb-4"
                              label="Цель"
                              dense
                              filled
                              hide-details
                              v-model="curButton.goals"
                              @input="update()"
                              :key="'goalsKey'">
                </v-text-field>
            </div>
        </v-expand-transition>

        <action-confirm @apply="$emit('remove')">
            <v-btn class="ml-auto mb-4"
                   text
                   small
                   color="error">
                Удалить
            </v-btn>
        </action-confirm>
    </div>
</template>

<script>
import ActionConfirm from "@/components/actionConfirm/index";

export default {
    name: "ItemDialogButton",
    components: {ActionConfirm},
    props: {
        button: {
            type: Object,
            default() {
                return {}
            }
        },

        title: {
            type: String,
            default: ''
        },

        label: {
            type: String,
            default: ''
        },

        goals: {
            type: String,
            default: ''
        },

        isTypeLink: {
            type: Boolean,
            default: false
        },

        link: {
            type: String,
            default: ''
        },
    },

    data() {
        return {
            typeLink: false,
        }
    },

    computed: {
        curButton() {
            return {
                isTypeLink: this.isTypeLink,
                label: this.label,
                modalTitle: this.modalTitle,
                goals: this.goals,
                link: this.link,
            }
        },

        changeType: {
            get() {
                this.typeLink = this.curButton?.isTypeLink;
                return this.curButton?.isTypeLink;

            },
            set(val) {
                this.typeLink = val;
                this.$set(this.curButton, 'isTypeLink', val);
            }
        }
    },

    methods: {
        update() {
            // @TODO remove force update
            // this.$forceUpdate();
            this.$emit('update:button', this.curButton)
        }
    }
}
</script>

<style scoped>

</style>
