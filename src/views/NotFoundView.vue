<template>
    <div class="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
        <h1 class="text-3xl font-bold mb-6">Página no encontrada</h1>

        <div class="max-w-75">
            <img src="https://media.tenor.com/yD6xTgAlY5AAAAAd/excadrill-pokémon-excadrill.gif" alt="Excadrill">
        </div>

        <BaseButton variant="secondary" class="max-w-40 mt-6"
        :to="{ name: 'dashboard'}">
            Ir al Dashboard
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
</script>