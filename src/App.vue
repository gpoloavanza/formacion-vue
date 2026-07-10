<template>
    <div class="mx-auto flex max-w-5xl flex-col gap-2 p-8">
        <BaseCard>
            <h1 class="text-3xl font-bold mb-6">Selecciona tu Pokemon</h1>

            <div class="relative">
                <PokemonCard :image="pokemon.image" :name="pokemon.name" :types="pokemon.types" />

                <div v-if="loading"
                    class="absolute inset-0 flex items-center justify-center rounded-xl bg-white/50 backdrop-blur-sm">
                    <span
                        class="h-8 w-8 animate-spin rounded-full border-4 border-stone-300 border-t-purple-600"></span>
                </div>
            </div>



            <!-- v-on directive calling @random from RandomButton.vue -->
            <div class="flex justify-center pt-8">
                <RandomButton :is-loading="loading" @random="randomPokemon" />
            </div>


            <!-- Conditional rendering for loading and error states -->
            <p v-if="error" class="text-red-600 text-center text-sm mt-2">{{ error }}</p>
        </BaseCard>

        <BaseCard>
            <h1 class="text-3xl font-bold mb-6">Formulario para entrenadores</h1>

            <TrainerForm @save="saveTrainer" />
        </BaseCard>

        <BaseCard>
            <h1 class="text-3xl font-bold mb-6">Lista de entrenadores</h1>
            <TrainerList />
        </BaseCard>
    </div>
</template>

<script setup lang="ts">
// Importing ref for reactive variables and onMounted
import { onMounted } from 'vue'

// Importing components
import TrainerForm from './components/TrainerForm.vue';
import PokemonCard from './components/PokemonCard.vue';
import RandomButton from './components/RandomButton.vue';
import TrainerList from './components/TrainerList.vue';

// Importing Pokemon composable
import { usePokemon } from './composables/usePokemon';

import type { CreateTrainer } from './interfaces/trainer'
import BaseCard from './components/BaseCard.vue';

import { useTrainerStore } from './stores/trainerStore';

// Using the usePokemon composable to manage state and logic related to Pokemon
const {
    pokemon,
    loading,
    error,
    randomPokemon
} = usePokemon()

const trainerStore = useTrainerStore()

function saveTrainer(trainer: CreateTrainer) {
    trainerStore.createTrainer(trainer)
}


// When the component is mounted, it will execute randomPokemon()
onMounted(() => {
    randomPokemon()
})
</script>