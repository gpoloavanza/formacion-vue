<template>
    <div>
    <label :for="id">
        {{ label }}
    </label>
    <input 
        :id="id"
        :type="type"
        :value="model ?? props.value"
        @input="model = ($event.target as HTMLInputElement).value"
        v-bind="attrs"
        class="rounded-lg border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none w-full">
    </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'

const model = defineModel<string>()

const props = withDefaults(
    defineProps<{
        id: string
        label: string
        type?: string
        value?: string
    }>(),
    {
        type: 'text',
        value: ''
    }
)

const attrs = useAttrs()
</script>