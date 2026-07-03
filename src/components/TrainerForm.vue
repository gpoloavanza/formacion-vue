<template>
    <form @submit.prevent="saveTrainer">
            <BaseInput 
                id="name" 
                label="Nombre"
                placeholder="Ash" 
                v-model="trainer.name" 
                required
            />
            
            <BaseInput
                id="surname"
                label="Apellidos"
                placeholder="Ketchum"
                v-model="trainer.surname" 
                required
            />

            <BaseInput
                id="dni"
                label="DNI"
                placeholder="12345678A"
                v-model="trainer.dni"
                required
            />
            
            <BaseInput
                id="email"
                label="Email"
                placeholder="ash@trainer.com"
                v-model="trainer.email" 
                required
            />
            
            <BaseInput
                id="assigned-pokemon"
                label="Pokemon asignado"
                :value="pokemonName"
                readonly />

            <button type="submit">Guardar</button>
    </form>
</template>

<script setup lang="ts">
import type { Trainer } from '../interfaces/trainer'

import { ref } from 'vue'
import BaseInput from './BaseInput.vue';

const props = defineProps<{
    pokemonName: string
}>()

const trainer = ref<Omit<Trainer, 'assignedPokemon'>>({
    name: '',
    surname: '',
    dni: '',
    email: '',
})

const emit = defineEmits<{
    (e: 'save', trainer: Trainer): void
}>()

function saveTrainer() {
    const completeTrainer = {
        ...trainer.value,
        assignedPokemon: props.pokemonName
    }

    if (
    !trainer.value.name ||
    !trainer.value.surname ||
    !trainer.value.dni ||
    !trainer.value.email
    ) {
        return
    }


    emit('save', completeTrainer)

    trainer.value = {
        name: '',
        surname: '',
        dni: '',
        email: ''
    }

}
</script>