<template>
    <form @submit.prevent="saveTrainer">

        <h1>Formulario para entrenadores</h1>

        <div>
            <label for="name">Nombre:</label>
            <input id="name" type="text" v-model="trainer.name">
        </div>

        <div>
            <label for="surname">Apellidos:</label>
            <input id="surname" type="text" v-model="trainer.surname">
        </div>

        <div>
            <label for="dni">DNI:</label>
            <input id="dni" type="text" v-model="trainer.dni">
        </div>

        <div>
            <label for="email">Email:</label>
            <input id="email" type="email" v-model="trainer.email">
        </div>

        <div>
            <label for="assigned-pokemon">Pokemon asignado:</label>
            <input id="assigned-pokemon" type="text" :value="pokemonName" readonly>
        </div>

        <button type="submit">Guardar</button>

    </form>
</template>

<script setup lang="ts">
import type { Trainer } from '../interfaces/trainer'

import { ref } from 'vue'

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