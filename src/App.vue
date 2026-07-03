<template>
    <div class="">
        <div class="mx-auto max-w-4xl p-8">
            <div class="bg-stone-200 rounded-xl shadow-md p-6 mb-10 mt-5">
                <h1 class="text-3xl font-bold mb-6">Selecciona tu Pokemon</h1>
                <PokemonCard :image="pokemon.image" :name="pokemon.name" :types="pokemon.types" />

                <!-- v-on directive calling @random from RandomButton.vue -->
                <div class="flex justify-center mt-4 ">
                    <RandomButton @random="randomPokemon" class="w-full rounded-2xl bg-purple-600 p-4 shadow-md text-white hover:bg-purple-700 hover:shadow-lg transition duration-300 cursor-pointer"/>
                </div>
                

                <!-- Conditional rendering for loading and error states -->
                <p v-if="loading">Cargando...</p>
                <p v-else-if="error">{{ error }}</p>
            </div>

            <div class="bg-stone-200 rounded-xl shadow-md p-6 mb-10 mt-5">
                <h1 class="text-3xl font-bold mb-6">Formulario para entrenadores</h1>

                <TrainerForm :pokemon-name="pokemon.name" @save="saveTrainer" />
            </div>
        </div>
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