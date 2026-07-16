<template>
    <div class="space-y-1">
        <label :for="id" class="block text-sm font-semibold text-stone-700 ">
            {{ label }}
        </label>
        <input :id="id" :type="type" v-model="model" v-bind="attrs" :class="[
            'rounded-lg border focus-visible:outline-none w-full px-3 py-2.5',
            error ? 'border-red-600 focus-visible:border-red-500' : 'border-stone-300 focus-visible:border-purple-500'
        ]" @blur="emit('blur')" :aria-invalid="!!error"
            :aria-describedby="error ? `${id}-error` : undefined">
        <p v-if="error" :id="`${id}-error`" class="text-red-600 text-sm mt-1"> {{ error }} </p>
    </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'

const model = defineModel<string>({
    default: ''
})

const emit = defineEmits<{
    (e: 'blur'): void
}>()


const {
    id,
    label,
    type,
    error
} = defineProps<{
        id: string
        label: string
        type?: string
        error?: string
    }>()

const attrs = useAttrs()
</script>