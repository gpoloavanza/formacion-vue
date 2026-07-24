<template>
    <div class="mx-auto flex max-w-5xl flex-col gap-2 p-8">
        <BaseButton variant="secondary" class="max-w-45 mt-6 mb-6"
        :to="{ name: 'dashboard'}">
            ← Ir al Dashboard
        </BaseButton>

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

        <BaseToast :visible="toast.visible" :message="toast.message" :type="toast.type" @close="closeToast" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'

// Importing components
import TrainerForm from '@/components/TrainerForm.vue'
import PokemonCard from '@/components/PokemonCard.vue'
import RandomButton from '@/components/RandomButton.vue'
import TrainerList from '@/components/TrainerList.vue'
import BaseToast from '@/components/BaseToast.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseButton from '@/components/BaseButton.vue'

// Importing Pokemon composable
import { usePokemon } from '@/composables/usePokemon'

import type { CreateTrainer } from '@/interfaces/trainer'
import type { ToastState } from '@/interfaces/toast'

import { useTrainerStore } from '@/stores/trainerStore'


// Using the usePokemon composable to manage state and logic related to Pokemon
const {
    pokemon,
    loading,
    error,
    randomPokemon
} = usePokemon()

const trainerStore = useTrainerStore()

const toast = reactive<ToastState>({
    visible: false,
    message: '',
    type: 'success'
})

function saveTrainer(trainer: CreateTrainer) {
    trainerStore.createTrainer(trainer)

    showToast(
        'Entrenador creado correctamente',
        'success'
    )
}

function showToast(message: string, type: ToastState['type']) {
    toast.visible = true
    toast.message = message
    toast.type = type

}

function closeToast() {
    toast.visible = false
}

// When the component is mounted, it will execute randomPokemon()
onMounted(() => {
    randomPokemon()
})

</script>