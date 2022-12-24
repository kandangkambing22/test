import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useCookies } from 'vue3-cookies'

export const useAuthStore = defineStore('auth', () => {
  const cookies = useCookies()
  const user = ref(null)
  const token = ref(null)
  const authenticated = ref(false)

  const authentication = computed(() => {
    if (cookies.get('user_session')) {
      const userSession = cookies.get('user_session')
      token.value = userSession.token
      user.value = userSession.user
      authenticated.value = true

      return authenticated
    }
    return authenticated
  })

  const signin = () => {
    cookies.set('user_session', data)
    token.value = data.token
    user.value = data.user
    authenticated.value = true

    return true
  }

  const signout = () => {
    cookies.remove('user_session')
    token.value = null
    user.value = null
    authenticated.value = false

    return true
  }

  return {
    user,
    token,
    authentication,
    signin,
    signout
  }
})
