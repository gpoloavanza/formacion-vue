<template>
    <div class="mx-auto min-h-screen flex max-w-xl flex-col gap-2 p-8 justify-center">
        <BaseCard class="">
            <h1 class="text-3xl font-bold mb-6">Login form</h1>
            <form @submit.prevent="handleSubmit" class="space-y-5">
                <BaseInput id="email" label="Email" placeholder="email@example.com" v-model="email" :error="emailError"
                    required />

                <BaseInput id="password" label="Password" placeholder="Password" v-model="password"
                    :error="passwordError" type="password" required />

                <div class="pt-3">
                    <BaseButton type="submit">
                        Iniciar sesión
                    </BaseButton>
                </div>

                <p v-if="loginError" class="text-red-600">
                    {{ loginError }}
                </p>
            </form>
        </BaseCard>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { validateEmail } from '@/utils/validations'
import { useAuthStore } from '@/stores/authStore'

import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseCard from '@/components/BaseCard.vue'


const email = ref('')
const password = ref('')

const emailError = ref('')
const passwordError = ref('')
const loginError = ref('')

const authStore = useAuthStore()

const VALID_EMAIL = 'example@example.com'
const VALID_PASSWORD = 'password'

const router = useRouter()

function validatePassword(value: string): string {
    if (value.length < 7) {
        return "La contraseña debe tener 7 carácteres como mínimo"
    }
    return ''
}

function handleSubmit() {
    loginError.value = ''
    passwordError.value = validatePassword(password.value)
    emailError.value = validateEmail(email.value)

    const hasErrors = Boolean(emailError.value || passwordError.value)

    if (hasErrors) {
        return
    }

    if (email.value === VALID_EMAIL && password.value === VALID_PASSWORD) {
        loginError.value = ''
        authStore.login(email.value)
        router.push({ name: 'dashboard' })

    } else {
        loginError.value = 'Email o contraseña incorrectos'
    }
}
</script>