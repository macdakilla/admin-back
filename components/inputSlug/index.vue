<template>
    <v-text-field v-bind="$attrs"
                  v-model="curValue">
    </v-text-field>
</template>

<script>
import sluggable from "@/core/sluggable";

export default {
    name: "inputSlug",

    props: {
        value: {
            type: String,
            required: true
        },

        reference: {
            type: String
        }
    },

    data() {
        return {
            isEdit: false,
        }
    },

    computed: {
        curValue: {
            set(newValue) {
                this.isEdit = true;
                this.$emit('input', newValue)
            },
            get() {
                return (this.reference && !this.value && this.isEdit === false) ? sluggable(this.reference) : this.value;
            }
        }
    }
}
</script>

<style scoped>

</style>
