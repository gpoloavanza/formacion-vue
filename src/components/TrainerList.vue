<template>
    <div class="space-y-6">
        <TrainerItem v-for="trainer in trainerStore.trainers" :key="trainer.id" :trainer="trainer"
            @assign="assignPokemonToTrainer" @delete="deleteTrainer" />
    </div>

    <ConfirmModal :visible="trainerToDelete !== null" title="Eliminar entrenador"
        message="¿Estás seguro de que quieres eliminar este entrenador?" @confirm="confirmDelete"
        @cancel="cancelDelete" />

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTrainerStore } from '@/stores/trainerStore'
import { usePokemon } from '@/composables/usePokemon'
import type { AssignedPokemon } from '@/interfaces/pokemon'
import TrainerItem from './TrainerItem.vue'
import ConfirmModal from './ConfirmModal.vue'

const trainerStore = useTrainerStore()

const { pokemon, randomPokemon } = usePokemon()

async function assignPokemonToTrainer(trainerId: number) {
    await randomPokemon()

    const assignedPokemon: AssignedPokemon = {
        name: pokemon.value.name,
        image: pokemon.value.image
    }

    trainerStore.assignPokemon(trainerId, assignedPokemon)
}

function deleteTrainer(trainerId: number) {
    trainerToDelete.value = trainerId
}

const trainerToDelete = ref<number | null>(null)

function confirmDelete() {
    if (trainerToDelete.value === null) {
        return
    }

    trainerStore.deleteTrainer(trainerToDelete.value)
    trainerToDelete.value = null
}

function cancelDelete() {
    trainerToDelete.value = null
}
</script>