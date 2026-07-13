<template>
    <form @submit.prevent="saveTrainer" class="space-y-5">
        <BaseInput id="name" label="Nombre" placeholder="Ash" v-model="trainer.name" required />

        <BaseInput id="surname" label="Apellidos" placeholder="Ketchum" v-model="trainer.surname" required />

        <BaseInput id="dni" label="DNI" placeholder="12345678A" v-model="trainer.dni" required />

        <BaseInput id="email" label="Email" placeholder="ash@trainer.com" v-model="trainer.email" required />

        <div class="pt-3">
            <BaseButton type="submit">
                Crear entrenador
            </BaseButton>
        </div>


    </form>
</template>

<script setup lang="ts">
import type { CreateTrainer } from '../interfaces/trainer'

import { ref } from 'vue'
import BaseInput from './BaseInput.vue';
import BaseButton from './BaseButton.vue';

const initialTrainer: CreateTrainer = {
    name: '',
    surname: '',
    dni: '',
    email: '',
}

const trainer = ref({ ...initialTrainer })

const emit = defineEmits<{
    (e: 'save', trainer: CreateTrainer): void
}>()

function saveTrainer() {
    if (
        !trainer.value.name ||
        !trainer.value.surname ||
        !trainer.value.dni ||
        !trainer.value.email
    ) {
        return
    }

    emit('save', trainer.value)

    trainer.value = {
        ...initialTrainer
    }

}
</script>