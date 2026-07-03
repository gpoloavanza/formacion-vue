<template>
    <div class="flex ">
        <!-- Pokemon card container -->
        <div class="flex bg-white rounded-xl shadow-md p-6 mb-4 w-1/1">
            <!-- Pokemon image -->
            <img :src="image" :alt="name" class="w-40 h-40" />

            <!-- Types list -->
            <div class="flex flex-1 flex-col">
                <div class="flex justify-end">
                    <ul class="flex gap-3">
                        <li v-for="type in types" :key="type" :class="getTypeClass(type) + ' px-3 py-1 rounded-full text-sm font-semibold'">
                            {{ type .charAt(0).toUpperCase() + type.slice(1) }}
                        </li>
                    </ul>
                </div>

                <!-- Pokemon name -->
                <div class="flex flex-1 items-center justify-end text-3xl font-bold">
                    <h2>{{ name.charAt(0).toUpperCase() + name.slice(1) }}</h2>
                </div>
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