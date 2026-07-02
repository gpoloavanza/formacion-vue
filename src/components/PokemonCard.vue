<template>
    <div>
        <img :src="image" :alt="name">
        <h2>{{ name }}</h2>
        <ul>
            <li v-for="type in types" :key="type">
                {{ type }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
// Receiving Props from the father App.vue
defineProps<{
    image: string
    name: string
    // Defining types as an array of strings
    types: string[]
}>()
</script>

<style scoped></style>