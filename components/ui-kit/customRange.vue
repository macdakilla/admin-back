<template>
    <div class="range">
        <label v-if="label" for="range" class="range__label">{{ label }}</label>

        <template v-if="mode === 'single'">
            <div class="range__head">
                <input type="text" id="range" class="range__input" v-mask="{ ...maskDefault, ...maskSetting }" :value="valueSingle" @input="setInput(valueSingle, $event.taget.value)" />
            </div>

            <div class="range__box">
                <client-only>
                    <vue-slider
                        v-model="valueSingle"
                        :height="height"
                        :contained="true"
                        :silent="true"
                        :min="min"
                        :max="max"
                        :marks="marks"
                        :interval="interval"
                        @change="$emit('change', valueSingle)"
                        @drag-end="changes(valueSingle)"
                        :dot-size="18"
                    />
                </client-only>
            </div>
        </template>

        <template v-else-if="mode === 'double'">
            <div class="range__head">
                <input
                    type="text"
                    spellcheck="false"
                    :value="valueDouble[0]"
                    class="range__input range__input--left"
                    v-mask="{ ...maskDefault, ...maskSetting[0] }"
                    @input="setInput(valueDouble[0], $event.taget.value)"
                />
                <input
                    type="text"
                    spellcheck="false"
                    class="range__input range__input--right"
                    :value="valueDouble[1]"
                    v-mask="{ ...maskDefault, ...maskSetting[1] }"
                    @input="setInput(valueDouble[1], $event.taget.value)"
                />
            </div>

            <div class="range__box">
                <client-only>
                    <vue-slider
                        v-model="valueDouble"
                        :enable-cross="false"
                        :fixed="false"
                        :contained="true"
                        :height="height"
                        :marks="marks"
                        :silent="true"
                        :min="min"
                        :max="max"
                        :interval="interval"
                        @change="$emit('change', valueDouble)"
                        @drag-end="changes(valueDouble)"
                        :dot-size="18"
                    />
                </client-only>
            </div>
        </template>

        <span class="range__error" v-if="error">
            {{ error }}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'customRange',

        props: {
            mode: {
                type: String,
                default() {
                    return 'single';
                },
            },

            label: {
                type: String,
                default() {
                    return '';
                },
            },

            height: {
                type: Number,
                default() {
                    return 2;
                },
            },

            min: {
                type: Number,
                default() {
                    return 0;
                },
            },

            max: {
                type: Number,
                default() {
                    return 10000000;
                },
            },

            value: {
                type: Number,
                default() {
                    return this.min;
                },
            },

            maskSetting: {
                type: Object | Array,
                default() {
                    return {} | [];
                },
            },

            maskTwo: {
                type: String,
                default: '',
            },

            interval: {
                type: Number,
                default() {
                    return 1;
                },
            },

            enableCross: {
                type: Boolean,
                default() {
                    return false;
                },
            },

            marks: {
                type: Array,
                default() {
                    return [];
                },
            },
            error: {
                default: null,
            },
        },

        data() {
            return {
                valueDouble: [this.min, this.max],
                valueSingle: this.value,
                maskDefault: {
                    greedy: false,
                    autoUnmask: true,
                    placeholder: '',
                },
            };
        },

        methods: {
            changes(value) {
                this.$emit('clearError');
                this.$emit('input', value);
            },

            setInput(variable, value) {
                variable = value;
            }
        },
    };
</script>

<style lang="scss">
    .range {
        position: relative;
        color: $colorBlack;
        padding-bottom: 20px;

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

        &__head {
            display: flex;
            align-items: center;
        }

        &__input {
            padding: 0 20px;
            height: 50px;

            border: 1px solid $colorGrayL;
            font-size: $fz-sm;
            font-weight: 500;
            line-height: 1;
            color: $colorBlack;
            font-family: $fontPrimary;

            &--left {
            }

            &--right {
                border-left: 0;
                text-align: left;
            }
        }

        .vue-slider {
            padding-top: 0 !important;
            padding-bottom: 0 !important;

            .vue-slider-rail {
                margin-top: -2px;
                background-color: transparent !important;
            }

            .vue-slider-process {
                margin-left: -9px;

                background-color: $colorMain !important;
            }

            .vue-slider-dot {
                width: 18px;
                height: 18px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                border-radius: 50%;
            }

            .vue-slider-dot-handle {
                border: 4px solid $colorMain !important;
                background-color: $colorMainD;

                box-shadow: none;

                transition: border-color 0.15s ease;

                &-focus {
                    border-color: $colorMainL !important;
                }
            }

            .vue-slider-mark .vue-slider-mark-label {
                left: 0;

                transform: translate(0);
            }

            .vue-slider-dot-tooltip {
                display: none;
            }

            .vue-slider-marks {
            }

            .vue-slider-mark {
                width: auto !important;
            }

            .vue-slider-mark-label {
                position: relative;
                margin-top: 10px;
            }

            .vue-slider-mark-step {
                display: none;
            }

            .vue-slider-mark-active:last-of-type {
                box-shadow: none;
            }
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
