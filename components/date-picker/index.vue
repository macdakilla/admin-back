<template>
    <date-picker v-model="curValue"
                 v-bind="pickerProps">
        <template #input="{props, events}">
            <v-text-field :label="label"
                          v-on="events"
                          v-bind="{...props, ...inputProps}"/>
        </template>
    </date-picker>
</template>

<script>
import DatePicker from 'vue2-datepicker';

export default {
    name: "DateTimePicker",

    inheritAttrs: false,

    components: {
        DatePicker
    },

    props: {
        value: null,
        label: {
            type: String,
            default: null,
        },
        inputProps: {
            type: Object,
            default() {
                return {}
            }
        },
        pickerProps: {
            type: Object,
            default() {
                return {}
            }
        }
    },

    computed: {
        curValue: {
            get() {
                return this.value
            },

            set(newValue) {
                this.$emit('input', newValue)
            }
        }
    }
}
</script>

<style scoped>

</style>
