import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(false)

    const user = ref('')

    const savedUser = localStorage.getItem('user')

    if (savedUser) {
        user.value = savedUser
        isAuthenticated.value = true
    }

    function login(userName: string) {
        user.value = userName
        isAuthenticated.value = true
        localStorage.setItem('user', userName)
    }

    function logout() {
        user.value = ''
        isAuthenticated.value = false
        localStorage.removeItem('user')
    }

    return {
        isAuthenticated,
        user,
        login,
        logout
    }
})