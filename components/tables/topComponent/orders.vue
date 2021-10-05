<template>
    <div class="d-flex justify-space-between flex-grow-1 ">
        <v-btn text tile color="green" @click="$emit('openStatistic')" class="text-caption">Статистика</v-btn>
        <v-btn text tile color="blue" class="text-caption">Выгрузить XLS</v-btn>
    </div>
</template>

<script>

export default {
    name: "default",
}
</script>

<style scoped>

</style>
