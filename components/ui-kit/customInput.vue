<template>
    <label class="inputWrapper">
        <template v-if="label">
            <span class="inputWrapper__label">
                {{ label }}
            </span>
        </template>

        <template v-if="type === 'tel'">
            <masked-input
                class="inputWrapper__input"
                type="tel"
                name="phone"
                :mask="['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]"
                :guide="true"
                :keepCharPositions="true"
                :pipe="changePhone"
                :placeholder="placeholderResult"
                placeholderChar="_"
                @focusout="focusout($event)"
                @focus="focus($event.target)"
                :value="value"
                ref="input"
            />
        </template>
        <template v-else>
            <input
                class="inputWrapper__input"
                :type="type"
                @input="$emit('input', $event.target.value)"
                @focus="focus($event.target)"
                @focusout="focusout($event)"
                :placeholder="placeholder"
                :value="value"
                ref="input"
            />
        </template>

        <span class="inputWrapper__error" v-if="error">
            {{ error }}
        </span>
    </label>
</template>

<script>
    export default {
        name: 'CustomInput',

        props: {
            value: {
                default: null,
            },
            label: {
                default: null,
            },
            placeholder: {
                default: null,
            },
            type: {
                default: 'text',
            },
            error: {
                default: null,
            },
            autofocus: {
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {
                placeholderResult: this.type === 'tel' ? '+7 (___) ___-____' : this.placeholder,
            };
        },

        methods: {
            changePhone(val, config) {
                let str = config.rawValue.replace(/[^\d]/g, '');
                if (/^8/.test(str) || (str.length === 14 && str[0] === '8') || (/^7/.test(str) && str.length === 14)) {
                    return str.slice(1);
                }
                this.$emit('input', val);
                return val;
            },

            focus(e) {
                this.setFocus(e);
                this.$emit('clearError');
                this.$emit('focus', this.value);
            },

            focusout(e) {
                this.$emit('focusout', e);
            },

            setFocus(e) {
                setTimeout(() => {
                    if ( e.type!=="email") {
                        if (e.value === this.placeholderResult) {
                            e.setSelectionRange(4, 4);
                        } else {
                            e.setSelectionRange(0, 0);
                        }
                        e.focus();
                    }
                }, 0);
            },
        },

        mounted() {
            if (this.autofocus) {
                this.setFocus(this.$refs.input.$el);
            }
        },
    };
</script>

<style lang="scss">
    .inputWrapper {
        display: inline-block;
        position: relative;
        width: 100%;
        padding-bottom: 20px;

        color: $colorGray;
        text-align: left;

        &__input {
            width: 100%;
            min-height: 50px;
            padding: 0 20px;

            background-color: #fff;
            border: 1px solid $colorGrayL;
            color: $colorBlack;
            cursor: text;
            font-size: $fz-md;
            font-family: $fontPrimary;
            font-weight: 500;

            &::placeholder {
                color: $colorGray;
                font-size: $fz-md;
            }
        }

        &.is-error &__input {
            border-color: $colorRed;
        }

        &__label {
            display: flex;
            align-items: flex-end;
            justify-content: flex-start;
            width: 100%;
            height: 20px;
            padding-bottom: 3px;

            color: inherit;
            font-size: $fz-sm;
            line-height: 1.2;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        &__error {
            position: absolute;
            left: 0;
            bottom: 3px;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            color: $colorRed;
            font-size: $fz-sxs;
        }
    }
</style>
