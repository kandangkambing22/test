import { useAuthStore } from '@/stores/auth'

export const authtentication = () => {
    const authStore = useAuthStore()
    authStore.authentication

    return authStore.authenticated ? true : false
}