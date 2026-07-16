<template>
    <div v-if="props.visible" :class="[
        'fixed bottom-4 right-4 rounded-lg shadow-lg px-4 py-3 max-w-sm text-white z-50',
        props.type === 'success' ? 'bg-green-600' : 'bg-red-600']">
        {{ props.message }}
    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'

import type { ToastType } from '@/interfaces/toast';

const props = defineProps<{
    visible: boolean
    message: string
    type: ToastType
}>()

const emit = defineEmits<{
    (e: 'close'): void
}>()

let timeoutId: ReturnType<typeof setTimeout>

watch(
    () => props.visible,
    (visible) => {
        if (visible) {
            clearTimeout(timeoutId)

            timeoutId = setTimeout(() => {
                emit('close')
            }, 3000)
        }
    }
)

</script>