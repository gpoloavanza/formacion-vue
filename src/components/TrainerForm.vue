<template>
    <form @submit.prevent="saveTrainer" class="space-y-5">
        <BaseInput id="name" label="Nombre" placeholder="Ash" v-model="trainer.name" :error="errors.name"
            @blur="handleBlur('name')" required />

        <BaseInput id="surname" label="Apellidos" placeholder="Ketchum" v-model="trainer.surname"
            :error="errors.surname" required @blur="handleBlur('surname')" />

        <BaseInput id="dni" label="DNI" placeholder="12345678A" v-model="trainer.dni" :error="errors.dni" required
            @blur="handleBlur('dni')" />

        <BaseInput id="email" label="Email" placeholder="ash@trainer.com" v-model="trainer.email" :error="errors.email"
            required @blur="handleBlur('email')" />

        <div class="pt-3">
            <BaseButton type="submit">
                Crear entrenador
            </BaseButton>
        </div>
    </form>
</template>

<script setup lang="ts">
import BaseInput from './BaseInput.vue';
import BaseButton from './BaseButton.vue';

import { useTrainerForm } from '@/composables/useTrainerForm'
import type { CreateTrainer } from '@/interfaces/trainer'

const emit = defineEmits<{
    (e: 'save', trainer: CreateTrainer): void
}>()

const {
    trainer,
    errors,
    handleBlur,
    submit
} = useTrainerForm()

function saveTrainer() {
    const trainer = submit()

    if (!trainer) return

    emit('save', trainer)
}
</script>