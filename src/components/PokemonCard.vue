<template>
    <!-- Pokemon card container -->
    <div class="flex flex-col items-center space-y-4 bg-white rounded-xl shadow-md p-6 w-full">
        <!-- Pokemon image -->
        <div class="rounded-2xl p-4">
            <img v-if="image" :src="image" :alt="name" class="w-56 h-56" />
            <div v-else class="w-56 h-56 flex items-center justify-center bg-stone-200 rounded-2xl text-stone-400">
                Sin imagen
            </div>
        </div>

        <div class="flex flex-col items-center space-y-3 w-full">

            <!-- Types list -->
            <div class="flex justify-end">
                <ul class="flex gap-3">

                    <li v-for="type in formattedTypes" :key="type.name"
                        :class="type.class + ' px-3 py-1 rounded-full text-sm font-semibold'">
                        {{ type.label }}
                    </li>
                </ul>
            </div>

            <!-- Pokemon name -->
            <div class="text-3xl font-bold text-center">
                <h2>{{ formattedName }}</h2>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getTypeClass } from '../utils/pokemonTypeColors'
import { computed } from 'vue'

// Receiving Props from the father App.vue
const props = defineProps<{
    image: string
    name: string
    // Defining types as an array of strings
    types: string[]
}>()

const formattedTypes = computed(() =>
    props.types.map(type => ({
        name: type,
        label: type.charAt(0).toUpperCase() + type.slice(1),
        class: getTypeClass(type)
    }))
)

const formattedName = computed(() =>
    props.name.charAt(0).toUpperCase() + props.name.slice(1))
</script>

<style scoped></style>