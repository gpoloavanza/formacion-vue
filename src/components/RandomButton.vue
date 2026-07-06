<template>
    <BaseButton :disabled="isLoading" @click="buttonClick">
        Random
    </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'

const props = defineProps<{
    isLoading?: boolean
}>()

// Defining emits
const emit = defineEmits(['random']
)

// Function to trigger emit
function buttonClick() {
    emit('random')
}
</script>