<template>
    <div class="colorPicker">
        <template v-if="items && Array.isArray(items) && items.length > 0">
            <span class="colorPicker__label" v-if="label">{{ label }}</span>

            <ul class="colorPicker__list">
                <li class="colorPicker__item" v-for="item in items">
                    <label class="colorPicker__itemInner" :title="item.value">
                        <input type="checkbox" class="colorPicker__input" name="colors[]" v-model="item.active" :value="item.id" @change="change"/>
                        <span class="colorPicker__color" :style="'background-color:' + item.rgb"> </span>
                        <svg-icon name="checkMark" class="colorPicker__checkmark" />
                    </label>
                </li>
            </ul>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'ColorPicker',

        props: {
            colors: {
                type: Array,
                required: true,
            },
            label: {
                type: String,
                default() {
                    return '';
                },
            },
        },

        data() {
            return {
                items: this.colors,
            }
        },

        methods: {
            change() {
                this.$emit('input', this.items);
            }
        }
    };
</script>

<style lang="scss">
    .colorPicker {
        position: relative;
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

        &__itemInner {
            position: relative;
            display: block;
            cursor: pointer;
        }

        &__input {
            display: none;
        }

        &__list {
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            list-style: none;
        }

        &__item {
            margin-right: 12px;
            margin-bottom: 12px;

            &:last-of-type {
                margin-right: 0;
            }

            @include below($lg-mobile) {
                margin-right: 10px;
            }
        }

        &__color {
            position: relative;
            display: block;
            width: 30px;
            height: 30px;
            border-radius: 50%;

            background-color: $white;
            box-shadow: 0 0 0 1px $colorGrayL;
            border: 1px solid transparent;

            transition: border 0.2s ease, box-shadow 0.1s ease, transform 0.2s ease;
        }

        &__input:hover + &__color {
            box-shadow: 0 0 0 1px darken($colorGrayL, 8%);
        }

        &__input:checked + &__color {
            border: 5px solid $white;
            transform: scale(1.2);
            box-shadow: 0 0 0 1px darken($colorGrayL, 8%);
        }

        &__image {
            width: 100%;
            height: 100%;
        }

        &__checkmark {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 12px;
            height: 9px;

            opacity: 0;
            fill: rgba(#1b1b1b, 0.5);
            transform: translate(-50%, -50%);
            pointer-events: none;

            transition: opacity 0.1s ease;
        }

        &__input:checked ~ &__checkmark {
            opacity: 1;
        }
    }
</style>
