<template>
    <!-- Pokemon card container -->
    <div class="flex flex-col items-center space-y-4 bg-white rounded-xl shadow-md p-6 w-full">
        <!-- Pokemon image -->
        <div class="rounded-2xl p-4">
            <img :src="image" :alt="name" class="w-56 h-56" />
        </div>

        <div class="flex flex-col items-center space-y-3 w-full">

            <!-- Types list -->
            <div class="flex justify-end">
                <ul class="flex gap-3">

                    <li v-for="type in types" :key="type"
                        :class="getTypeClass(type) + ' px-3 py-1 rounded-full text-sm font-semibold'">
                        {{ type.charAt(0).toUpperCase() + type.slice(1) }}
                    </li>
                </ul>
            </div>

            <!-- Pokemon name -->
            <div class="text-3xl font-bold text-center">
                <h2>{{ name.charAt(0).toUpperCase() + name.slice(1) }}</h2>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getTypeClass } from '../utils/pokemonTypeColors'

// Receiving Props from the father App.vue
defineProps<{
    image: string
    name: string
    // Defining types as an array of strings
    types: string[]
}>()
</script>

<style scoped></style>