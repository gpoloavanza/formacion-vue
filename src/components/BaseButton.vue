<template>
    <button :disabled="props.disabled"
        :class="['w-full rounded-2xl p-4 shadow-md text-white hover:shadow-lg transition duration-300 cursor-pointer',
            props.disabled ? 'bg-stone-400 cursor-not-allowed' : ['hover:shadow-lg cursor-pointer', variantClasses[props.variant]]]">

        <slot />
    </button>
</template>

<script setup lang="ts">
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
    }>(),
    {
        variant: 'primary',
        disabled: false
    }
)
</script>