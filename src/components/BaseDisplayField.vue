<template>
    <div class="space-y-1">
        <label :for="id" class="block text-sm font-semibold text-stone-700 ">
            {{ label }}
        </label>
        <div :id="id"
            class="flex min-h-11 items-center rounded-lg border border-stone-300 bg-stone-100 px-3 py-2.5 text-sm text-stone-700 cursor-not-allowed">
            {{ value }}
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    id: string
    label: string
    value?: string
}>()
</script>