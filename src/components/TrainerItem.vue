<template>
    <div class="flex items-center justify-between bg-white rounded-xl shadow-md p-6 w-full">
        <div class="flex flex-col gap-2">
            <div class="flex items-start justify-between text-xl font-semibold">
                <p>{{ trainer.name }} {{ trainer.surname }}</p>
            </div>

            <p class="text-stone-600">{{ trainer.dni }}</p>

            <p class="text-stone-600">{{ trainer.email }}</p>
        </div>

        <div v-if="trainer.assignedPokemon" class="flex flex-col items-center">
            <img 
            :src="trainer.assignedPokemon.image" 
            :alt="trainer.assignedPokemon.name" 
            class="h-32 w-32">
            
            <p class="font-semibold capitalize">
                {{ trainer.assignedPokemon.name }}
            </p>
        </div>
        <div v-else class="text-stone-500 italic">
            <p>
                Pokémon: Sin asignar
            </p>
        </div>

        <div class="flex flex-col gap-3">
            <BaseButton v-if="!trainer.assignedPokemon" @click="emit('assign', trainer.id)" variant="secondary">
                Asignar Pokémon
            </BaseButton>

            <BaseButton @click="emit('delete', trainer.id)" variant="danger">
                Eliminar entrenador
            </BaseButton>
        </div>

    </div>
</template>
<script setup lang="ts">
import type { Trainer } from '@/interfaces/trainer'
import BaseButton from './BaseButton.vue';

defineProps<{
    trainer: Trainer
}>()

const emit = defineEmits<{
    (e: 'assign', trainerId: number): void
    (e: 'delete', trainerId: number): void
}>()
</script>