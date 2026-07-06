<template>
    <div class="space-y-1">
        <label :for="id" class="block text-sm font-semibold text-stone-700 ">
            {{ label }}
        </label>
        <input :id="id" :type="type" :value="model ?? props.value"
            @input="model = ($event.target as HTMLInputElement).value" v-bind="attrs"
            class="rounded-lg border border-stone-300 px-3 py-2.5 focus:border-purple-500 focus:outline-none w-full">
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