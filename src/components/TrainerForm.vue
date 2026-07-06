<template>
    <div>
        <form @submit.prevent="saveTrainer" class="space-y-5">
            <BaseInput id="name" label="Nombre" placeholder="Ash" v-model="trainer.name" required />

            <BaseInput id="surname" label="Apellidos" placeholder="Ketchum" v-model="trainer.surname" required />

            <BaseInput id="dni" label="DNI" placeholder="12345678A" v-model="trainer.dni" required />

            <BaseInput id="email" label="Email" placeholder="ash@trainer.com" v-model="trainer.email" required />

            <BaseDisplayField id="assigned-pokemon" label="Pokemon asignado" :value="pokemonName" />

            <div class="pt-3">
                <BaseButton type="submit">
                    Guardar entrenador
                </BaseButton>
            </div>


        </form>
    </div>
</template>

<script setup lang="ts">
import type { Trainer } from '../interfaces/trainer'

import { ref } from 'vue'
import BaseInput from './BaseInput.vue';
import BaseDisplayField from './BaseDisplayField.vue';
import BaseButton from './BaseButton.vue';

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