<template>
    <div v-if="visible" class="fixed inset-0 flex  bg-black/50 items-center justify-center">
        <div class="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <h2 class="text-xl font-bold mb-4">
                {{ title }}
            </h2>
            <p class="text-stone-600 mb-6">
                {{ message }}
            </p>

            <div class="flex justify-end gap-3">
                <BaseButton @click="emit('cancel')" variant="secondary">
                    {{ cancelText }}
                </BaseButton>

                <BaseButton @click="emit('confirm')" variant="danger">
                    {{ confirmText }}
                </BaseButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';

defineProps<{
    visible: boolean
    title: string
    message: string
    confirmText: string
    cancelText: string
}>()

const emit = defineEmits<{
    (e: 'confirm'): void
    (e: 'cancel'): void
}>()
</script>