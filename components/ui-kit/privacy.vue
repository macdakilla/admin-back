<template>
    <div class="privacy" :class="{ 'privacy--white': linkWhite }">
        <!--    <template v-if="settings.disclaimer_form">-->
        <!--      <span v-html="settings.disclaimer_form"></span>-->
        <!--    </template>-->
        <!--    <template v-else>-->
        Нажимая кнопку "{{ buttonText || 'Отправить заявку' }}", Вы соглашаетесь c
        <n-link target="_blank" :to="{ name: 'politic' }" class="privacy__link">политикой защиты
            данных{{getSettings.admin_check_dc_name ? '.': ''}}
        </n-link>
        <template v-if="!getSettings.admin_check_dc_name">
            {{ getSettings.company_type || '' }} {{ getSettings.dealer ? `«${getSettings.dealer}».` : '.' }}
        </template>
        <!--    </template>-->
    </div>
</template>

<script>
    export default {
        name: 'privacy',

        props: {
            status: {},
            buttonText: null,
            linkWhite: {
                type: Boolean,
                default() {
                    return false;
                },
            },
        },

        computed: {
            getSettings() {
                return this.$store.getters['getSettings'] || {};
            },
        },

        data() {
            return {
                statusValue: this.status,
            };
        },
    };
</script>

<style lang="scss">
    .privacy {
        position: relative;

        color: inherit;
        font-size: $fz-sm;
        line-height: 1.4;

        @include below($md-tablet) {
            font-size: $fz-xs;
        }

        &__link {
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }

        a {
            color: $colorMain;
            text-decoration: underline;

            &:hover {
                text-decoration: none;
            }
        }

        &--white {
            a {
                color: $white;
            }
        }
    }
</style>
