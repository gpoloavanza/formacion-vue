<template>
    <RouterLink v-if="props.to" :to="props.to"
        :class="buttonClasses">
        <slot />
    </RouterLink>

    <button v-else :disabled="props.disabled"
        :class="buttonClasses">
        <slot />
    </button>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { computed } from 'vue'

// Defining the type for the button variant
type ButtonVariant = 'primary' | 'secondary' | 'danger'

const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-purple-600 hover:bg-purple-700',
    secondary: 'bg-gray-600 hover:bg-gray-700',
    danger: 'bg-red-600 hover:bg-red-700'
}



const props = withDefaults(
    defineProps<{
        variant?: ButtonVariant
        disabled?: boolean
        to?: RouteLocationRaw
    }>(),
    {
        variant: 'primary',
        disabled: false
    }
)

const buttonClasses = computed(() => [
    'block w-full text-center rounded-2xl p-4 shadow-md text-white hover:shadow-lg transition duration-300 cursor-pointer',
    props.disabled
        ? 'bg-stone-400 cursor-not-allowed'
        : variantClasses[props.variant]
])
</script>