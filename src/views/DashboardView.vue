<template>
    <div class="mx-auto min-h-screen flex max-w-xl flex-col gap-2 p-8 justify-center">

    <BaseCard >
        <h1 class="text-3xl font-bold mb-6">Hola, {{ authStore.user }}</h1>
        <BaseButton variant="secondary" class="mb-4"
        :to="{ name: 'trainers'}">
            Trainers
        </BaseButton>
        
        <BaseButton @click="handleLogout">
            Cerrar sesión
        </BaseButton>
    </BaseCard>
    </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import BaseCard from '@/components/BaseCard.vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()

const router = useRouter()

function handleLogout() {
    authStore.logout()
    router.push({ name: 'login' })
}
</script>