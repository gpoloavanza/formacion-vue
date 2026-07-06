<template>
    <div class="mx-auto flex max-w-5xl flex-col gap-2 p-8">
        <BaseCard>
            <h1 class="text-3xl font-bold mb-6">Selecciona tu Pokemon</h1>

            <div v-if="loading" class="flex h-99 items-center justify-center">
                <span class="h-8 w-8 animate-spin rounded-full border-4 border-stone-300 border-t-purple-600"></span>
            </div>
            <PokemonCard v-else :image="pokemon.image" :name="pokemon.name" :types="pokemon.types" />


            <!-- v-on directive calling @random from RandomButton.vue -->
            <div class="flex justify-center pt-8">
                <RandomButton :is-loading="loading" @random="randomPokemon" />
            </div>


            <!-- Conditional rendering for loading and error states -->
            <p v-if="error" class="text-red-600 text-center text-sm mt-2">{{ error }}</p>
        </BaseCard>

        <BaseCard>
            <h1 class="text-3xl font-bold mb-6">Formulario para entrenadores</h1>

            <TrainerForm :pokemon-name="pokemon.name" @save="saveTrainer" />
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

// Importing Pokemon composable
import { usePokemon } from './composables/usePokemon';

import type { Trainer } from './interfaces/trainer'
import BaseCard from './components/BaseCard.vue';

// Using the usePokemon composable to manage state and logic related to Pokemon
const {
    pokemon,
    loading,
    error,
    randomPokemon
} = usePokemon()

function saveTrainer(trainer: Trainer) {
    console.log('Entrenador guardado:', trainer);
}

// When the component is mounted, it will execute randomPokemon()
onMounted(() => {
    randomPokemon()
})
</script>