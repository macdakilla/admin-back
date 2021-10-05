<template>
    <component v-bind="componentProps" class="btn" @click="to ? '' : $emit('click') ">
        <span class="btn__text">
            <slot></slot>
        </span>

        <svg-icon v-if="icon" :name="icon" class="btn__icon" />
    </component>
</template>

<script>
    export default {
        name: 'Btn',

        props: {
            icon: {
                type: String,
                default() {
                    return null;
                },
            },

            to: {
                type: Object | String,
            },
        },

        methods: {
        },

        computed: {
            componentProps() {
                if (this.to) {
                    if (typeof this.to === 'string' && this.to.match(/^(http(s)?|ftp):\/\//)) {
                        return {
                            is: 'a',
                            href: this.to,
                            target: '_blank',
                            rel: 'noopener',
                        }
                    }
                    return {
                        is: 'router-link',
                        to: this.to
                    }
                }

                return {
                    is: 'button'
                }
            }
        },
    };
</script>

<style lang="scss">
    .btn {
        position: relative;

        padding: 7px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 50px;

        font-family: $fontPrimary;
        font-size: $fz-xs;
        line-height: 1.1;
        color: $white;
        background-color: $colorMain;
        cursor: pointer;
        border: 1px solid transparent;
        text-decoration: none;
        text-align: center;
        user-select: none;
        text-transform: uppercase;

        transition: background-color 0.1s ease;

        &__icon {
            margin-left: 10px;
            flex-shrink: 0;

            width: 11px;
            height: 11px;
            color: inherit;

            fill: currentColor;
            transition: fill 0.1s ease;
        }

        &__text {
            margin: 0;
        }

        &:hover,
        &:focus {
            background-color: $colorMainL;
            color: $white;
        }

        &:disabled {
            background-color: $colorGray;
            cursor: no-drop;
            transition-delay: 0.1s;
        }

        &--black {
            background-color: $black;

            &:hover {
                background-color: lighten($black, 15%);
            }
        }

        &--dark {
            background-color: $colorMainD;
            color: $white;

            &:hover {
                background-color: $colorMainL;
                color: $white;
            }
        }

        &--light {
            background-color: $colorMainL;
            color: $white;

            &:hover {
                background-color: $colorMain;
                color: $white;
            }
        }

        &--white {
            background-color: $white;
            color: $colorMain;

            &:hover {
                background-color: $colorMain;
                color: $white;
            }
        }

        &--gray-light {
            background-color: $colorGrayL;
            color: $colorBlack;

            &:hover,
            &:focus {
                background-color: $colorGray;
            }
        }
    }
</style>
