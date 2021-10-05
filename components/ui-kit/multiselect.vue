<template>
    <div class="multiselectWrapper" v-if="Array.isArray(options) && options.length">
        <template v-if="label">
            <span class="multiselectWrapper__label">
                {{ label }}
            </span>
        </template>

        <vue-multiselect
            class="multiselectWrapper__multiselect"
            v-model="value"
            :options="options"
            :searchable="false"
            :show-labels="false"
            :placeholder="placeholder"
            :multiple="multiple"
            :allowEmpty="allowEmpty"
            @input="$emit('input', value)"
        >
            <template slot="singleLabel" slot-scope="props">
                {{ props.option }}
            </template>

            <template slot="option" slot-scope="props">
                {{ props.option }}
            </template>

            <template slot="selection" slot-scope="{ values }">
                <template v-for="item in values">
                    <span class="multiselect__tagsItem">{{ item }}</span>
                </template>
            </template>

            <template slot="caret">
                <div class="multiselect__caret"></div>
            </template>
        </vue-multiselect>

        <span class="multiselectWrapper__error" v-if="error">
            {{ error }}
        </span>
    </div>
</template>

<script>
    import VueMultiselect from 'vue-multiselect';

    export default {
        name: 'Multiselect',

        inheritAttrs: false,

        components: {
            VueMultiselect,
        },

        data() {
            return {
                value: this.defaultEmpty ? null : this.options[0],
            };
        },

        props: {
            options: {
                default: null,
                type: Array,
                required: true,
            },
            placeholder: {
                default: 'Не выбрано',
                type: String,
            },
            label: {
                default: null,
            },
            multiple: {
                default: false,
                type: Boolean,
            },
            defaultEmpty: {
              type: Boolean,
              default: true,
            },
            allowEmpty: {
                type: Boolean,
                default: true,
            },
            error: {
                default: null,
            },
        },

    };
</script>

<style lang="scss">
    .multiselectWrapper {
        position: relative;
        padding-bottom: 20px;

        color: $colorGray;
        user-select: none;

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
            font-size: 11px;
        }

        .multiselect {
            min-height: auto;

            color: $colorBlack;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;

            &--active {
                pointer-events: none;
            }

            &__tags {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                min-height: 50px;
                padding: 5px 40px 5px 20px;

                border-radius: 0;
                border-color: $colorGrayL;
                outline: none;

                &:focus {
                    border-color: $colorMain;
                }
            }

            &__tagsItem {
                position: relative;

                &:after {
                    content: ', ';
                    position: relative;
                }

                &:last-of-type:after {
                    display: none;
                }
            }

            &--active .multiselect__placeholder {
                display: block;
            }

            &__placeholder,
            &__input,
            &__single {
                white-space: normal;
                min-height: auto;
                margin: 0;
                padding: 0;

                font-size: 14px;
                line-height: 1.2;
                vertical-align: top;
            }

            &__placeholder {
                color: $colorGray;
            }

            &__single {
                display: flex;
                align-items: center;
                justify-content: flex-start;
            }

            &__caret {
                position: absolute;
                right: 20px;
                top: 49%;

                transform: translateY(-50%);
                border: 5px solid transparent;
                border-bottom: none;
                border-top-color: $colorMain;

                transition: transform 0.15s ease;
            }

            &--active .multiselect__caret {
                transform: translateY(-50%) rotate(-180deg);
            }

            &__content-wrapper {
                border: none;
                border-radius: 0;
                box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
                cursor: pointer;
            }

            &--active .multiselect__content-wrapper {
                pointer-events: all;
            }

            &__option {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                min-height: 40px;
                padding: 5px 10px 5px 30px;
                white-space: normal;

                color: $colorBlack;

                &--selected {
                    position: relative;
                    font-weight: inherit;
                    background-color: $colorGrayEL;
                    color: $colorBlack;
                }

                &--highlight {
                    background-color: $colorMainL;
                    color: $white;
                }

                &--highlight.multiselect__option--selected {
                    background-color: $colorMainL;
                    color: $white;
                }
            }

            &__optionColor {
                position: relative;
                margin: -3px 13px -3px 0;

                width: 18px;
                height: 18px;
                border: 3px solid rgba(255, 255, 255, 0.4);
                border-radius: 50%;
            }

            &__optionIcon {
                position: relative;
                margin: -3px 13px -3px 0;

                width: 18px;
                height: 18px;
                border-radius: 50%;
            }

            &__caretSvg {
                display: block;
                width: 11px;
                height: 8px;
                fill: #212121;

                transition: fill 0.2s ease;
            }
        }
    }
</style>
