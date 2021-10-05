<template>
    <label class="checkbox" :class="[{ 'is-active': $attrs.value }, { 'checkbox--rowReverse': rowReverse }, { 'checkbox--disabled': disabled }]">
        <input class="checkbox__input" type="checkbox" :checked="$attrs.value" @change="input($event.target.checked)" :disabled="disabled" />

        <span class="checkbox__custom"></span>

        <span class="checkbox__text">
            <slot></slot>
        </span>
    </label>
</template>

<script>
    export default {
        name: 'Checkbox',

        data() {
            return {
                checkbox: false,
            };
        },

        props: {
            rowReverse: {
                type: Boolean,
                default: false,
            },

            disabled: {
                type: Boolean,
                default: false,
            },
        },

        methods: {
            input(checked) {
                if (!this.$attrs.disabled) {
                    this.$emit('input', checked);
                }
            },
        },
    };
</script>

<style lang="scss">
    .checkbox {
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0 0 20px 0;

        font-family: $fontPrimary;
        font-size: $fz-md;
        font-weight: 400;
        min-height: 24px;
        line-height: 25px;
        user-select: none;

        cursor: pointer;

        &--disabled {
            cursor: no-drop;
            opacity: 0.6;
            filter: grayscale(1);
        }

        &--rowReverse {
            flex-direction: row-reverse;
        }

        &--radio &__custom {
            border-radius: 50%;

            &:before {
                border-radius: 50%;
            }
        }

        &--radio {
            color: $colorBlack;
        }

        &__input {
            display: none;
        }

        &__input:focus ~ &__custom {
            border: 1px solid $colorMain;
        }

        &__custom {
            position: relative;
            width: 24px;
            height: 24px;
            display: inline-block;
            flex-shrink: 0;

            border: 1px solid $colorGrayL;
            border-radius: 0;

            transition: background-color 0.1s ease;

            &:before {
                position: absolute;
                content: '';
                width: 10px;
                height: 5px;
                left: 50%;
                top: 50%;
                margin-top: -2px;

                transform: translate(-50%, -80%) rotate(-45deg);
                background: none;
                border-radius: 0;
                border-left: 2px solid $colorMain;
                border-bottom: 2px solid $colorMain;
                opacity: 0;

                transition: opacity 0.1s ease, transform 0.1s ease;
            }
        }

        &.is-active &__custom:before {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        &__text {
            width: 100%;
            margin: 1px 0 0 15px;

            color: $colorBlack;
            font-size: $fz-md;
            line-height: 1.2;
        }

        &--rowReverse &__text {
            margin-left: 0;
            margin-right: 10px;
        }

        // Roll

        &--roll {
            display: inline-flex;
            padding: 0 0 20px 0;
            line-height: 28px;
            min-height: 28px;
        }

        &--roll &__custom {
            width: 44px;
            height: 28px;

            background-color: #bdbdbd;
            border: 1px solid transparent;
            border-radius: 28px;

            &:before {
                border-radius: 50%;
                left: 2px;
                width: 22px;
                height: 22px;
                margin: 0;
                padding: 0;

                background-color: $white;
                border: none;
                transform: translate(0, -50%);
                opacity: 1;

                transition: transform ease 0.2s;
            }
        }

        &--roll.is-active &__custom {
            background-color: $colorMain;

            &:before {
                transform: translate(16px, -50%);
                background-color: $white;
            }
        }

        &--roll &__text {
            margin-top: 4px;
        }
    }
</style>
