<template>
    <div class="component rounded">
        <v-btn class="rounded-0" color="primary" block elevation="0" @click="$emit('addComponent')">Добавить на
            страницу
        </v-btn>
        <div class="px-2 py-2">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    name: "customComponent",
}
</script>

<style lang="scss" scoped>
.component {
    background-color: #f5f5f5;
    overflow: hidden;
}
</style>
